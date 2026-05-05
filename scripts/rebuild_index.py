# -*- coding: utf-8 -*-
"""Rebuild index.json, kb.json, and kb.js from entries/*.md.

Bilingual schema (v3): each entry carries title_en / title_zh in
frontmatter, body sections suffixed with (EN) or (ZH), and an optional
shared `## Images` section with markdown image syntax whose alt text is
"<english caption> | <chinese caption>".

The entry frontmatter is the single source of truth. This script never
touches the entry .md files themselves — it only reads them and writes the
three derived files at the repo root atomically (write-temp-then-rename).

Usage
-----

    python scripts/rebuild_index.py [<data-root>]

If <data-root> is omitted, the script walks up from its own location until
it finds a directory containing an ``entries/`` folder, and treats that as
the data root.

Stock Python 3.10+; no third-party dependencies.
"""
import datetime as dt
import hashlib
import json
import os
import re
import sys
import tempfile
import urllib.error
import urllib.request
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from typing import Any


# =============================================================================
# Optional sources-list import. The canonical source list is a YAML file in
# the private repo's wifi_research_scout skill folder. When this script runs
# inside the parent project (the typical case), we read it and emit a
# sanitised JSON copy at the public repo root so the viewer can show it.
# When running standalone (for an external contributor) we just skip — the
# public repo doesn't keep its own copy of sources.yaml.
# =============================================================================

def _parse_sources_yaml(text: str):
    """Tiny YAML subset parser sufficient for our sources.yaml layout.

    Recognises only what sources.yaml actually uses:
      - top-level scalars (`version: 1`, `last_updated: 2026-05-02`)
      - top-level list under `sources:` whose items are mappings of scalars
        and a single inline list (`topics_hint: [a, b, c]`).

    Returns a dict with `version`, `last_updated`, `sources: [..]`. We avoid
    pulling pyyaml so the curator stays stdlib-only.
    """
    out = {"version": None, "last_updated": "", "sources": []}
    lines = text.splitlines()
    i = 0
    cur = None
    in_sources = False
    while i < len(lines):
        raw = lines[i]
        line = raw.split("#", 1)[0].rstrip() if not raw.strip().startswith('"') else raw.rstrip()
        if not line.strip():
            i += 1
            continue
        if not line.startswith(" "):
            # Top-level key
            if line.startswith("sources:"):
                in_sources = True
                i += 1
                continue
            if ":" in line:
                k, _, v = line.partition(":")
                v = v.strip()
                if k.strip() in ("version", "last_updated"):
                    out[k.strip()] = _yaml_scalar(v)
            i += 1
            continue
        if in_sources:
            stripped = line.lstrip()
            indent = len(line) - len(stripped)
            if indent == 2 and stripped.startswith("- "):
                if cur is not None:
                    out["sources"].append(cur)
                cur = {}
                stripped = stripped[2:]
                if ":" in stripped:
                    k, _, v = stripped.partition(":")
                    cur[k.strip()] = _yaml_scalar(v.strip())
            elif indent >= 4 and ":" in stripped:
                k, _, v = stripped.partition(":")
                cur[k.strip()] = _yaml_scalar(v.strip())
        i += 1
    if cur is not None:
        out["sources"].append(cur)
    return out


def _yaml_scalar(v):
    if v == "" or v == "~" or v.lower() == "null":
        return None
    if v.lower() == "true":  return True
    if v.lower() == "false": return False
    if v.startswith('"') and v.endswith('"'): return v[1:-1]
    if v.startswith("'") and v.endswith("'"): return v[1:-1]
    if v.startswith("[") and v.endswith("]"):
        inner = v[1:-1].strip()
        return [s.strip().strip('"').strip("'") for s in inner.split(",") if s.strip()]
    try:
        return int(v)
    except ValueError:
        pass
    return v


# Topic-normalisation rewrites. Lowercased keys; values are the canonical
# spelling we want to land on. Keep this short — only fix actual collisions.
# Topic tags are intentionally English-canonical (matching IEEE conventions).
TOPIC_REWRITES = {
    "80211bn": "802.11bn",
    "80211be": "802.11be",
    "80211ax": "802.11ax",
    "80211bf": "802.11bf",
    "wifi 7": "802.11be",
    "wifi 8": "802.11bn",
    "wifi-7": "802.11be",
    "wifi-8": "802.11bn",
    "multi-link": "MLO",
    "restricted twt": "R-TWT",
    "r twt": "R-TWT",
}


def find_data_root(start: Path) -> Path:
    """Walk up from ``start`` looking for a directory containing ``entries/``."""
    p = start.resolve()
    for _ in range(8):
        if (p / "entries").is_dir():
            return p
        if p.parent == p:
            break
        p = p.parent
    raise SystemExit(f"could not locate an entries/ directory above {start}")


def parse_frontmatter(text: str) -> tuple[dict[str, Any], str]:
    """Parse YAML-ish frontmatter delimited by leading and trailing '---' lines.

    The frontmatter we accept is a strict subset of YAML — flat scalar fields
    plus ``topics: [a, b, c]`` lists. We avoid pulling pyyaml so this script
    runs with a stock Python install.
    """
    if not text.startswith("---"):
        raise ValueError("missing leading '---'")
    end = text.find("\n---", 3)
    if end < 0:
        raise ValueError("missing trailing '---'")
    block = text[3:end].strip()
    body = text[end + 4:].lstrip()

    out: dict[str, Any] = {}
    for raw_line in block.splitlines():
        line = raw_line.rstrip()
        if not line or line.lstrip().startswith("#"):
            continue
        if ":" not in line:
            raise ValueError(f"bad frontmatter line: {raw_line!r}")
        key, _, value = line.partition(":")
        key = key.strip()
        value = value.strip()
        if value.startswith("[") and value.endswith("]"):
            inner = value[1:-1].strip()
            out[key] = [v.strip().strip('"').strip("'") for v in inner.split(",") if v.strip()]
        elif value.lower() in ("null", "~", ""):
            out[key] = None
        elif value.lower() == "true":
            out[key] = True
        elif value.lower() == "false":
            out[key] = False
        else:
            try:
                out[key] = int(value)
            except ValueError:
                out[key] = value.strip().strip('"').strip("'")
    return out, body


def section_paragraph(body: str, heading: str) -> str:
    """Return the first paragraph under a heading like '## Summary (EN)'.

    The heading match is exact (case-sensitive). Returns "" if not found.
    """
    pattern = re.escape(heading)
    m = re.search(rf"^{pattern}\s*\n(.+?)(?=\n##|\Z)", body, flags=re.S | re.M)
    if not m:
        return ""
    block = m.group(1).strip()
    para = block.split("\n\n", 1)[0]
    return re.sub(r"\s+", " ", para).strip()


# Markdown image: ![alt text](url)
IMAGE_RE = re.compile(r"!\[([^\]]*)\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)")


def parse_images(body: str) -> list[dict[str, str]]:
    """Parse the '## Images' section.

    Each image line is ``![<en-caption> | <zh-caption>](<url>)``. If the alt
    text contains no ``|``, it's used as both captions.
    """
    m = re.search(r"^## Images\s*\n(.+?)(?=\n##|\Z)", body, flags=re.S | re.M)
    if not m:
        return []
    block = m.group(1)
    out: list[dict[str, str]] = []
    for alt, url in IMAGE_RE.findall(block):
        alt = alt.strip()
        url = url.strip()
        if not url:
            continue
        if "|" in alt:
            en, _, zh = alt.partition("|")
            caption_en = en.strip()
            caption_zh = zh.strip()
        else:
            caption_en = alt
            caption_zh = alt
        out.append({"url": url, "caption_en": caption_en, "caption_zh": caption_zh})
    return out


def normalise_topics(topics: list[str]) -> list[str]:
    out: list[str] = []
    seen: set[str] = set()
    for t in topics:
        t_norm = TOPIC_REWRITES.get(t.lower(), t)
        if t_norm not in seen:
            out.append(t_norm)
            seen.add(t_norm)
    return out


# Body sections to include in the rendered detail view, per language. Each
# section is rendered without its language suffix (so '(EN)' / '(ZH)' is
# stripped before display) and with a localised heading.
LANG_SECTIONS = (
    "Summary",
    "Key technical points",
    "Why it matters / what's new",
)
SECTION_HEADINGS = {
    "EN": {
        "Summary": "Summary",
        "Key technical points": "Key technical points",
        "Why it matters / what's new": "Why it matters / what's new",
    },
    "ZH": {
        "Summary": "摘要",
        "Key technical points": "技术要点",
        "Why it matters / what's new": "意义与新意",
    },
}


def extract_section(body: str, heading: str) -> str:
    """Return the raw markdown content under a heading like '## Foo'."""
    pattern = re.escape(heading)
    m = re.search(rf"^{pattern}\s*\n(.+?)(?=\n##\s|\Z)", body, flags=re.S | re.M)
    if not m:
        return ""
    return m.group(1).strip()


def _html_escape(s: str) -> str:
    return (s.replace("&", "&amp;")
             .replace("<", "&lt;")
             .replace(">", "&gt;")
             .replace('"', "&quot;"))


def _inline_md(s: str) -> str:
    """Convert inline markdown to HTML. Escape first, then run patterns whose
    delimiters (``*``, ``[``, ``(``, `` ` ``) survive HTML-escape unchanged."""
    s = _html_escape(s)
    # Inline code first so its content isn't bold/italic-parsed.
    s = re.sub(r"`([^`]+)`", r"<code>\1</code>", s)
    # Links
    s = re.sub(
        r"\[([^\]]+)\]\(([^)\s]+)\)",
        r'<a href="\2" target="_blank" rel="noopener">\1</a>',
        s,
    )
    # Bold (must come before italic so ** isn't eaten by *)
    s = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", s)
    # Italic — single * not preceded/followed by another *
    s = re.sub(r"(?<!\*)\*([^*\n]+)\*(?!\*)", r"<em>\1</em>", s)
    return s


def md_block_to_html(md: str) -> str:
    """Tiny Markdown→HTML for the subset we use in entries:
    headings (## ###), paragraphs, bullet lists, inline emphasis, links.

    Tables, blockquotes, fenced code blocks, footnotes are not supported.
    """
    lines = md.split("\n")
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            i += 1
            continue
        if line.startswith("### "):
            out.append(f"<h4>{_inline_md(line[4:].strip())}</h4>")
            i += 1
        elif line.startswith("## "):
            out.append(f"<h3>{_inline_md(line[3:].strip())}</h3>")
            i += 1
        elif stripped.startswith("- "):
            items: list[str] = []
            while i < len(lines) and lines[i].strip().startswith("- "):
                items.append(f"<li>{_inline_md(lines[i].strip()[2:])}</li>")
                i += 1
            out.append("<ul>" + "".join(items) + "</ul>")
        else:
            para: list[str] = [line]
            i += 1
            while (i < len(lines)
                   and lines[i].strip()
                   and not lines[i].startswith(("#", "- "))
                   and not lines[i].strip().startswith("- ")):
                para.append(lines[i])
                i += 1
            out.append(f"<p>{_inline_md(' '.join(p.strip() for p in para))}</p>")
    return "\n".join(out)


def build_body_html(body: str, lang_tag: str) -> str:
    """Concatenate the language-specific sections into a single HTML block,
    stripping the language suffix from headings so the reader sees clean
    section titles."""
    parts: list[str] = []
    headings = SECTION_HEADINGS.get(lang_tag, SECTION_HEADINGS["EN"])
    for section in LANG_SECTIONS:
        heading = f"## {section} ({lang_tag})"
        content = extract_section(body, heading)
        if not content:
            continue
        local = headings.get(section, section)
        parts.append(f"## {local}\n\n{content}")
    if not parts:
        return ""
    return md_block_to_html("\n\n".join(parts))


REQUIRED = ("id", "date_found", "type", "title_en", "title_zh", "url", "topics", "novelty_score")

# topic_primary + topics_secondary became part of the schema in v5 (topic-binned
# layout). Entries written before that change may be missing them; this script
# tolerates the gap (silent default) but will warn loudly if the values it does
# see refer to topic ids that aren't in topics.json.

# Coarse category derived from the entry's `type`. Drives the three-column
# layout in the viewer: Academia | Industry | Standards.
TYPE_TO_CATEGORY = {
    "academic-paper": "academia",
    "tutorial":       "academia",
    "ieee-document":  "standards",
    "proposal":       "standards",
    "product":        "industry",
    "industry-news":  "industry",
    "vendor-news":    "industry",
    "news":           "industry",
}


def category_for_type(t: str) -> str:
    return TYPE_TO_CATEGORY.get(t, "industry")


def load_topics(data_root: Path) -> tuple[dict[str, Any], list[str]]:
    """Load topics.json. Returns (vocab, warnings).

    vocab is a dict with `stacks`, `topics`, plus a derived `by_id` mapping
    from topic id → topic record for fast lookup. If topics.json is absent we
    return an empty vocab and a single warning — the script still produces a
    valid index, just without topic-binning.
    """
    topics_path = data_root / "topics.json"
    if not topics_path.is_file():
        return {"stacks": [], "topics": [], "by_id": {}}, [
            "topics.json missing at repo root — topic-binning disabled for this build"
        ]
    try:
        raw = json.loads(topics_path.read_text(encoding="utf-8"))
    except Exception as exc:  # noqa: BLE001
        return {"stacks": [], "topics": [], "by_id": {}}, [
            f"topics.json: failed to parse ({exc}) — topic-binning disabled"
        ]
    by_id = {t["id"]: t for t in raw.get("topics", [])}
    vocab = {
        "stacks": raw.get("stacks", []),
        "topics": raw.get("topics", []),
        "by_id": by_id,
    }
    return vocab, []


def aggregate_by_topic(records: list[dict[str, Any]],
                       vocab: dict[str, Any]) -> dict[str, Any]:
    """Group entry ids by topic and by (topic, type).

    Returns a dict keyed by topic id, each value being:

        {
          "id": ..., "label_en": ..., "label_zh": ...,
          "stack": ..., "description_en": ..., "description_zh": ...,
          "entries_primary":   [<entry-id>, ...],   # date_published desc
          "entries_secondary": [<entry-id>, ...],   # date_published desc
          "by_type_primary": {"academic-paper": [...], "industry-news": [...], ...}
        }

    Sort within each list is date_published desc, id desc. Topic order in the
    returned dict matches topics.json order (Python 3.7+ preserves insertion).
    Entries whose `topic_primary` is missing or unknown are simply absent — the
    scope of the warning was already handled in build_entry_record.
    """
    out: dict[str, Any] = {}
    for t in vocab.get("topics", []):
        out[t["id"]] = {
            "id": t["id"],
            "label_en": t.get("label_en", t["id"]),
            "label_zh": t.get("label_zh", t["id"]),
            "stack": t.get("stack", ""),
            "description_en": t.get("description_en", ""),
            "description_zh": t.get("description_zh", ""),
            "entries_primary": [],
            "entries_secondary": [],
            "by_type_primary": {},
        }

    sorted_records = sorted(
        records,
        key=lambda r: (r["date_published"], r["id"]),
        reverse=True,
    )
    for r in sorted_records:
        prim = r.get("topic_primary") or ""
        if prim and prim in out:
            out[prim]["entries_primary"].append(r["id"])
            bt = out[prim]["by_type_primary"]
            bt.setdefault(r["type"], []).append(r["id"])
        for sec in r.get("topics_secondary") or []:
            if sec in out and sec != prim:
                out[sec]["entries_secondary"].append(r["id"])
    return out


def build_entry_record(path: Path, fm: dict[str, Any], body: str) -> dict[str, Any]:
    missing = [k for k in REQUIRED if k not in fm]
    if missing:
        raise ValueError(f"missing fields {missing} in {path}")
    topics = normalise_topics(fm.get("topics") or [])
    summary_short_en = section_paragraph(body, "## Summary (EN)")
    summary_short_zh = section_paragraph(body, "## Summary (ZH)")
    images = parse_images(body)
    # date_published is preferred for sort/timeline; fall back to date_found.
    date_published = fm.get("date_published") or fm["date_found"]
    topic_primary = fm.get("topic_primary") or ""
    topics_secondary = fm.get("topics_secondary") or []
    if not isinstance(topics_secondary, list):
        topics_secondary = []
    return {
        "id": fm["id"],
        "date_found": fm["date_found"],
        "date_published": date_published,
        "type": fm["type"],
        "category": category_for_type(fm["type"]),
        "title_en": fm["title_en"],
        "title_zh": fm["title_zh"],
        "url": fm.get("url") or "",
        "topics": topics,
        "topic_primary": topic_primary,
        "topics_secondary": topics_secondary,
        "novelty_score": int(fm.get("novelty_score") or 0),
        "entry_path": f"entries/{path.name}",
        "summary_short_en": summary_short_en,
        "summary_short_zh": summary_short_zh,
        "body_html_en": build_body_html(body, "EN"),
        "body_html_zh": build_body_html(body, "ZH"),
        "images": images,
    }


def build_search_blob(entry: dict[str, Any]) -> str:
    parts = [
        entry["title_en"],
        entry["title_zh"],
        " ".join(entry["topics"]),
        entry["summary_short_en"],
        entry["summary_short_zh"],
        entry["type"],
    ]
    return " ".join(parts).lower()


def probe_image_url(url: str, referer: str = "") -> tuple[bool, str]:
    """HEAD-probe an image URL with browser-like headers.

    Returns (ok, detail). ok=True means the URL responded with 2xx/3xx and the
    Content-Type looks image-y. ok=False means broken — caller surfaces a warning.

    HEAD with browser-like User-Agent + Referer mirrors how a real browser would
    fetch an <img>, so hosts that 403 bot user-agents (Cisco, IEEE, some CDNs)
    don't get falsely flagged. Falls back to a small GET if HEAD is rejected
    (some CDNs only allow GET).
    """
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"
        ),
        "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    }
    if referer:
        headers["Referer"] = referer

    def _check(method: str) -> tuple[bool, str]:
        req = urllib.request.Request(url, headers=headers, method=method)
        with urllib.request.urlopen(req, timeout=12) as r:
            ct = (r.headers.get("Content-Type") or "").lower()
            code = r.status
            if code >= 400:
                return False, f"HTTP {code}"
            # Some hosts return text/html on a HEAD probe of an image — accept
            # 2xx/3xx as long as it's not an obvious error page.
            if method == "HEAD" and not ct:
                return True, f"HTTP {code} (no content-type, accepted)"
            if "image/" in ct or method == "HEAD":
                return True, f"HTTP {code} {ct or 'unknown-type'}"
            return False, f"HTTP {code} non-image content-type: {ct}"

    try:
        return _check("HEAD")
    except urllib.error.HTTPError as e:
        if e.code in (403, 405, 501):
            try:
                return _check("GET")
            except Exception as e2:  # noqa: BLE001
                return False, f"GET fallback: {type(e2).__name__}: {str(e2)[:80]}"
        return False, f"HTTPError {e.code}"
    except Exception as e:  # noqa: BLE001
        return False, f"{type(e).__name__}: {str(e)[:80]}"


def probe_all_images(records: list[dict[str, Any]], data_root: Path) -> list[str]:
    """Probe every image URL in the records, return a list of warning strings.

    Skips locally-hosted images (asset paths like ``assets/<id>/<file>``) — for
    those, we just verify the file exists on disk. Hotlinked URLs go to the
    network probe in parallel (network is the bottleneck, not CPU).
    """
    targets: list[tuple[str, str, str]] = []  # (entry_id, url, source_url)
    local_warns: list[str] = []
    for r in records:
        for img in r.get("images", []):
            url = img.get("url", "")
            if not url:
                continue
            if url.startswith(("http://", "https://")):
                targets.append((r["entry_path"], url, r.get("url", "")))
            else:
                # Local asset — verify file exists.
                local_path = data_root / url
                if not local_path.is_file():
                    local_warns.append(
                        f"{r['entry_path']}: local image missing on disk: {url}"
                    )

    if not targets:
        return local_warns

    warnings: list[str] = list(local_warns)
    with ThreadPoolExecutor(max_workers=8) as pool:
        futures = [
            (entry_id, url, pool.submit(probe_image_url, url, src))
            for entry_id, url, src in targets
        ]
        for entry_id, url, fut in futures:
            ok, detail = fut.result()
            if not ok:
                warnings.append(
                    f"{entry_id}: broken image URL ({detail}): {url}"
                )
    return warnings


def write_json_atomic(path: Path, payload: Any) -> None:
    """Write JSON to a temp file in the same dir, fsync, rename. Avoids leaving
    a half-written index.json if anything dies mid-write."""
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp = tempfile.mkstemp(prefix=path.stem + ".", suffix=".json.tmp", dir=path.parent)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False, indent=2, sort_keys=False)
            f.flush()
            os.fsync(f.fileno())
        os.replace(tmp, path)
    except Exception:
        try:
            os.unlink(tmp)
        except OSError:
            pass
        raise


def main(argv: list[str]) -> int:
    if argv:
        data_root = Path(argv[0]).resolve()
    else:
        data_root = find_data_root(Path(__file__).parent)

    entries_dir = data_root / "entries"
    index_path = data_root / "index.json"
    kb_json_path = data_root / "kb.json"
    kb_js_path = data_root / "kb.js"

    if not entries_dir.is_dir():
        raise SystemExit(f"no entries directory at {entries_dir}")

    vocab, vocab_warnings = load_topics(data_root)
    md_files = sorted(p for p in entries_dir.glob("*.md") if not p.name.startswith("."))
    records: list[dict[str, Any]] = []
    warnings: list[str] = list(vocab_warnings)

    for path in md_files:
        text = path.read_text(encoding="utf-8")
        try:
            fm, body = parse_frontmatter(text)
            rec = build_entry_record(path, fm, body)
        except Exception as exc:  # noqa: BLE001 — we want to surface any failure
            warnings.append(f"{path.name}: {exc}")
            continue
        records.append(rec)

    # Topic validation. We *don't* warn about entries simply missing
    # topic_primary — that's the expected state during the schema-v5 transition
    # and would drown the output in 70+ duplicate lines. We DO warn loudly when
    # an entry refers to a topic id that isn't in topics.json (real bug).
    if vocab.get("by_id"):
        known = set(vocab["by_id"].keys())
        unassigned = 0
        for r in records:
            tp = r.get("topic_primary") or ""
            if not tp:
                unassigned += 1
                continue
            if tp not in known:
                warnings.append(
                    f"{r['entry_path']}: unknown topic_primary '{tp}' "
                    f"(not in topics.json)"
                )
            for sec in r.get("topics_secondary") or []:
                if sec not in known:
                    warnings.append(
                        f"{r['entry_path']}: unknown topics_secondary "
                        f"'{sec}' (not in topics.json)"
                    )
        if unassigned and unassigned == len(records):
            warnings.append(
                f"all {unassigned} entries lack topic_primary — run the "
                f"Phase-2 frontmatter migration"
            )
        elif unassigned:
            warnings.append(
                f"{unassigned} of {len(records)} entries lack "
                f"topic_primary — partial migration in progress"
            )

    seen_ids: dict[str, str] = {}
    for r in records:
        if r["id"] in seen_ids:
            warnings.append(f"duplicate id: {r['id']} (in {seen_ids[r['id']]} and {r['entry_path']})")
        else:
            seen_ids[r["id"]] = r["entry_path"]
    today = dt.date.today().isoformat()
    for r in records:
        if r["date_found"] > today:
            warnings.append(f"future date_found in {r['entry_path']}: {r['date_found']}")
        if r["date_published"] > r["date_found"]:
            warnings.append(
                f"date_published ({r['date_published']}) is after date_found "
                f"({r['date_found']}) in {r['entry_path']} — usually means the "
                f"two dates were swapped"
            )
        if not r["summary_short_en"]:
            warnings.append(f"empty Summary (EN) in {r['entry_path']}")
        if not r["summary_short_zh"]:
            warnings.append(f"empty Summary (ZH) in {r['entry_path']}")

    # Probe every image URL in parallel — skipped if --no-image-check passed.
    if "--no-image-check" not in argv:
        warnings.extend(probe_all_images(records, data_root))

    # Primary sort: publication date desc, id as tiebreak.
    records.sort(key=lambda r: (r["date_published"], r["id"]), reverse=True)

    topics_aggregate = aggregate_by_topic(records, vocab)

    index_payload = {
        "schema_version": 5,
        "last_updated": today,
        "topics_vocab": {
            "stacks": vocab.get("stacks", []),
            "topics": vocab.get("topics", []),
        },
        "topics_aggregate": topics_aggregate,
        "entries": records,
    }
    write_json_atomic(index_path, index_payload)

    topic_counts = Counter(t for r in records for t in r["topics"])
    type_counts = Counter(r["type"] for r in records)
    category_counts = Counter(r["category"] for r in records)
    primary_topic_counts = Counter(
        r["topic_primary"] for r in records if r.get("topic_primary")
    )
    image_count = sum(len(r["images"]) for r in records)
    kb_entries = []
    for r in records:
        e = dict(r)
        e["search_blob"] = build_search_blob(r)
        kb_entries.append(e)
    kb_payload = {
        "schema_version": 5,
        "last_updated": today,
        "topic_counts": dict(topic_counts.most_common()),
        "primary_topic_counts": dict(primary_topic_counts.most_common()),
        "type_counts": dict(type_counts.most_common()),
        "category_counts": dict(category_counts.most_common()),
        "topics_vocab": {
            "stacks": vocab.get("stacks", []),
            "topics": vocab.get("topics", []),
        },
        "topics_aggregate": topics_aggregate,
        "entries": kb_entries,
    }
    write_json_atomic(kb_json_path, kb_payload)

    # kb.js: same payload as a JS assignment, so the viewer can load it via
    # <script src="kb.js"> when the page is opened over file://. Modern
    # browsers block fetch() for cross-file requests under the file:// origin,
    # so this is the most user-friendly way to make double-clicking the HTML
    # work without a local web server.
    kb_js_path.parent.mkdir(parents=True, exist_ok=True)
    js_text = "window.KB_DATA = " + json.dumps(kb_payload, ensure_ascii=False, indent=2) + ";\n"
    tmp_js = kb_js_path.with_suffix(kb_js_path.suffix + ".tmp")
    with open(tmp_js, "w", encoding="utf-8") as f:
        f.write(js_text)
        f.flush()
        os.fsync(f.fileno())
    os.replace(tmp_js, kb_js_path)

    # ---------- Sources list (optional) ----------
    # Walk up from the data root looking for the private repo's sources.yaml.
    # If found, parse it and emit a sanitised JSON copy alongside kb.json so
    # the viewer can show the list. Public-safe fields only — `enabled` is
    # dropped because it represents internal scout configuration.
    sources_payload = None
    candidate = data_root.parent / ".claude" / "skills" / "wifi_research_scout" / "sources.yaml"
    if candidate.exists():
        try:
            parsed = _parse_sources_yaml(candidate.read_text(encoding="utf-8"))
            keep_keys = ("id", "name", "url", "kind", "category",
                         "topics_hint", "notes")
            sanitised = []
            for src in parsed.get("sources", []):
                if src.get("enabled") is False:
                    continue
                row = {k: src.get(k) for k in keep_keys if k in src}
                sanitised.append(row)
            sources_payload = {
                "version": parsed.get("version", 1),
                "last_updated": parsed.get("last_updated") or today,
                "sources": sanitised,
            }
            sources_path = data_root / "sources.json"
            write_json_atomic(sources_path, sources_payload)
            sources_js_path = data_root / "sources.js"
            sj = "window.SOURCES_DATA = " + json.dumps(
                sources_payload, ensure_ascii=False, indent=2) + ";\n"
            tmp_sj = sources_js_path.with_suffix(sources_js_path.suffix + ".tmp")
            with open(tmp_sj, "w", encoding="utf-8") as f:
                f.write(sj); f.flush(); os.fsync(f.fileno())
            os.replace(tmp_sj, sources_js_path)
        except Exception as exc:  # noqa: BLE001
            warnings.append(f"sources.yaml: {exc}")

    # ---------- Cache-bust the <script src="kb.js"> / <script src="sources.js"> ----------
    # GitHub Pages serves all assets with `Cache-Control: max-age=600`, so a
    # browser holds onto a stale kb.js for 10 minutes after a new push. Embed
    # an 8-char content hash in the script src so any change to kb.js content
    # forces an immediate re-fetch the moment index.html itself refreshes.
    # The hash is over the file bytes we just wrote, so it tracks data changes
    # exactly — no churn when nothing changed.
    index_html_path = data_root / "index.html"
    if index_html_path.is_file():
        def _short_hash(p: Path) -> str:
            return hashlib.sha256(p.read_bytes()).hexdigest()[:8] if p.is_file() else ""
        kb_v = _short_hash(kb_js_path)
        src_v = _short_hash(data_root / "sources.js")
        html = index_html_path.read_text(encoding="utf-8")
        new_html = html
        if kb_v:
            new_html = re.sub(
                r'src="kb\.js(?:\?v=[a-f0-9]+)?"',
                f'src="kb.js?v={kb_v}"',
                new_html,
            )
        if src_v:
            new_html = re.sub(
                r'src="sources\.js(?:\?v=[a-f0-9]+)?"',
                f'src="sources.js?v={src_v}"',
                new_html,
            )
        if new_html != html:
            tmp_html = index_html_path.with_suffix(index_html_path.suffix + ".tmp")
            with open(tmp_html, "w", encoding="utf-8", newline="\n") as f:
                f.write(new_html); f.flush(); os.fsync(f.fileno())
            os.replace(tmp_html, index_html_path)

    n = len(records)
    cat_summary = " · ".join(f"{k}={v}" for k, v in category_counts.most_common())
    src_n = len(sources_payload["sources"]) if sources_payload else 0
    primary_n = sum(primary_topic_counts.values())
    primary_topic_n = len(primary_topic_counts)
    vocab_n = len(vocab.get("topics", []))
    if vocab_n:
        topic_bin_summary = (
            f"{vocab_n} bins / {primary_topic_n} populated / "
            f"{n - primary_n} unassigned"
        )
    else:
        topic_bin_summary = "no vocab"
    print(
        f"KB rebuild: {n} entries · {topic_bin_summary} · "
        f"{len(topic_counts)} legacy-tags · {image_count} images · "
        f"[{cat_summary}] · {src_n} sources"
    )
    if warnings:
        print(f"  Warnings ({len(warnings)}):")
        for w in warnings:
            print(f"    - {w}")
    return 1 if any("missing fields" in w for w in warnings) else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
