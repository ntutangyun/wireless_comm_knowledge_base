#!/usr/bin/env python3
"""Build an EPUB 3 ebook of the Learn Wi-Fi course.

Reads curriculum.json + lessons/*.json plus the pre-rendered PNG image cache
(learn/build/images/, produced by render_images.mjs) and writes
learn/build/learn-wifi-<lang>.epub. Stdlib only.

All visuals ship as PNG <img> in plain div/p markup: several mobile reader
engines (e.g. Huawei 阅读) silently drop inline SVG, SVG images, and
HTML5-only tags like <figure>.

Usage: python build_epub.py [--lang zh|en]
"""
from __future__ import annotations

import argparse
import datetime
import hashlib
import html
import json
import zipfile
from pathlib import Path
import xml.etree.ElementTree as ET

LEARN_DIR = Path(__file__).resolve().parent.parent
BUILD_DIR = LEARN_DIR / "build"
IMAGE_DIR = BUILD_DIR / "images"
SITE_URL = "https://ntutangyun.github.io/wireless_comm_knowledge_base/learn/"
AUTHOR = "ntutangyun"

BOOK_TITLE = {
    "zh": "Learn Wi-Fi：IEEE 802 无线标准课程",
    "en": "Learn Wi-Fi: An IEEE 802 Standards Course",
}
CALLOUT_LABELS = {
    "zh": {"tip": "提示", "note": "备注", "key-idea": "要点", "gotcha": "注意"},
    "en": {"tip": "Tip", "note": "Note", "key-idea": "Key idea", "gotcha": "Gotcha"},
}
UI = {
    "zh": {"minutes": "约 {n} 分钟", "deepdive": "深入标准", "cites": "参考文献",
           "widget": "本节在线课程配有交互演示：", "subtitle": "中文版"},
    "en": {"minutes": "about {n} min", "deepdive": "Deep dive", "cites": "References",
           "widget": "This lesson has an interactive demo in the online course: ",
           "subtitle": "English edition"},
}

warnings: list[str] = []


def warn(msg: str) -> None:
    warnings.append(msg)


def esc(s) -> str:
    return html.escape(str(s), quote=True)


def sha1(s: str) -> str:
    return hashlib.sha1(s.encode("utf-8")).hexdigest()


def pick(obj, lang: str, ctx: str) -> str:
    """Return obj[lang] for a bilingual {en,zh} dict, falling back to en with a warning."""
    if not isinstance(obj, dict):
        return obj or ""
    text = obj.get(lang)
    if text:
        return text
    warn(f"{ctx}: missing '{lang}' text, falling back to en")
    return obj.get("en", "")


def render_block(b: dict, lang: str, track_id: str, lesson_id: str, used_images: set) -> str:
    t = b.get("type")
    ctx = f"{lesson_id}/{t}"
    if t == "prose":
        return f"<p>{esc(pick(b, lang, ctx))}</p>"
    if t == "callout":
        variant = b.get("variant", "tip")
        label = CALLOUT_LABELS[lang].get(variant, CALLOUT_LABELS[lang]["tip"])
        return (f'<div class="callout"><p class="box-label">{label}</p>'
                f"<p>{esc(pick(b, lang, ctx))}</p></div>")
    if t == "figure":
        cap = esc(pick(b.get("caption", {}), lang, ctx))
        h = sha1(b.get("svg", ""))
        if not (IMAGE_DIR / f"f-{h}.png").exists():
            raise SystemExit(
                f"ERROR {ctx}: image f-{h}.png not in cache - run: node render_images.mjs --lang {lang}")
        used_images.add(("f", h))
        return (f'<div class="figure"><img src="../images/f-{h}.png" alt=""/>'
                f'<p class="figcaption">{cap}</p></div>')
    if t == "diagram":
        src = pick(b, lang, ctx)
        h = sha1(src)
        if not (IMAGE_DIR / f"d-{h}.png").exists():
            raise SystemExit(
                f"ERROR {ctx}: image d-{h}.png not in cache - run: node render_images.mjs --lang {lang}")
        used_images.add(("d", h))
        return f'<div class="figure"><img src="../images/d-{h}.png" alt=""/></div>'
    if t == "deepdive":
        summary = esc(pick(b.get("summary", {}), lang, ctx))
        body = esc(pick(b, lang, ctx))
        cite = b.get("cite") or {}
        cite_line = ""
        if cite.get("pdf_id"):
            pages = ", ".join(str(p) for p in cite.get("pages", []))
            suffix = f" · p.{esc(pages)}" if pages else ""
            cite_line = f'<p class="cite">{esc(cite["pdf_id"])}{suffix}</p>'
        return (f'<div class="deepdive"><p class="box-label">{UI[lang]["deepdive"]} · {summary}</p>'
                f"<p>{body}</p>{cite_line}</div>")
    if t == "widget":
        url = f"{SITE_URL}#/{track_id}/{lesson_id}"
        return (f'<div class="widget-note"><p>{UI[lang]["widget"]}'
                f'<a href="{esc(url)}">{esc(b.get("widget", "demo"))}</a></p></div>')
    warn(f"{ctx}: unknown block type, skipped")
    return ""


XHTML_HEAD = (
    '<?xml version="1.0" encoding="utf-8"?>\n'
    '<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="{lang}" lang="{lang}">\n'
    '<head><title>{title}</title>'
    '<link rel="stylesheet" type="text/css" href="{css}"/></head>\n<body>\n'
)


def lesson_xhtml(lesson: dict, track_id: str, lang: str, used_images: set) -> str:
    title = pick(lesson["title"], lang, lesson["id"])
    parts = [XHTML_HEAD.format(lang=lang, title=esc(title), css="../style.css"),
             f"<h1>{esc(title)}</h1>"]
    est = lesson.get("estMinutes")
    if est:
        parts.append(f'<p class="meta">{UI[lang]["minutes"].format(n=est)}</p>')
    for b in lesson.get("blocks", []):
        parts.append(render_block(b, lang, track_id, lesson["id"], used_images))
    cites = lesson.get("cites") or []
    if cites:
        items = []
        for c in cites:
            pages = ", ".join(str(p) for p in c.get("pages", []))
            note = f" — {esc(c['note'])}" if c.get("note") else ""
            items.append(f"<li>{esc(c.get('pdf_id', ''))} · p.{esc(pages)}{note}</li>")
        parts.append(f'<div class="cites"><p class="box-label">{UI[lang]["cites"]}</p>'
                     f"<ul>{''.join(items)}</ul></div>")
    parts.append("</body>\n</html>\n")
    return "".join(p for p in parts if p)


def part_xhtml(track: dict, index: int, lang: str) -> str:
    title = pick(track["title"], lang, track["id"])
    blurb = esc(pick(track.get("blurb", {}), lang, track["id"]))
    return (XHTML_HEAD.format(lang=lang, title=esc(title), css="../style.css")
            + f'<p class="part-number">Part {index}</p><h1>{esc(title)}</h1>'
            + (f'<p class="part-blurb">{blurb}</p>' if blurb else "")
            + "</body>\n</html>\n")


COVER_XHTML = (
    '<?xml version="1.0" encoding="utf-8"?>\n'
    '<html xmlns="http://www.w3.org/1999/xhtml"><head><title>Cover</title></head>'
    '<body style="margin:0;text-align:center;">'
    '<img src="cover.png" alt="Learn Wi-Fi" style="max-width:100%;max-height:100%;"/>'
    "</body></html>\n")

STYLE_CSS = """\
body { line-height: 1.6; margin: 0.5em 1em; }
h1 { font-size: 1.4em; line-height: 1.3; }
p.meta, p.part-number { color: #777; font-size: 0.85em; }
p.part-number { text-transform: uppercase; letter-spacing: 0.1em; }
p.part-blurb { font-style: italic; color: #555; }
.figure { margin: 1em 0; text-align: center; }
.figure img { max-width: 100%; }
.figcaption { font-size: 0.85em; color: #666; margin-top: 0.4em; text-align: center; }
.box-label { font-weight: bold; margin: 0 0 0.3em 0; }
.callout, .deepdive, .widget-note, .cites { border: 1px solid #bbb; border-radius: 6px;
  padding: 0.6em 0.9em; margin: 0.9em 0; }
.callout { background: #f4f8ee; border-color: #9bb87a; }
.deepdive { background: #f2f4f8; border-color: #93a5c4; }
.widget-note { background: #fdf6e7; border-color: #d4b46a; }
.cites { font-size: 0.85em; color: #555; }
.cites ul { margin: 0.2em 0 0 1.2em; padding: 0; }
.deepdive p.cite { font-size: 0.85em; color: #667; margin-bottom: 0; }
"""


def build(lang: str) -> Path:
    curriculum = json.loads((LEARN_DIR / "curriculum.json").read_text(encoding="utf-8"))
    lesson_dir = LEARN_DIR / "lessons"
    curriculum_ids = [l["id"] for t in curriculum["tracks"] for l in t["lessons"]]
    disk_ids = {p.stem for p in lesson_dir.glob("*.json")}
    missing = [i for i in curriculum_ids if i not in disk_ids]
    orphans = sorted(disk_ids - set(curriculum_ids))
    if missing or orphans:
        raise SystemExit(f"ERROR curriculum/lessons mismatch: missing files {missing[:5]}, "
                         f"orphan files {orphans[:5]}")

    cover_png = IMAGE_DIR / f"cover-{lang}.png"
    if not cover_png.exists():
        raise SystemExit(
            f"ERROR: {cover_png.name} not in cache - run: node render_images.mjs --lang {lang}")

    used_images: set[tuple[str, str]] = set()
    docs: dict[str, str] = {}          # zip arcname -> XHTML text
    spine: list[str] = []              # manifest item ids in reading order
    manifest: list[str] = []           # manifest <item> XML lines
    nav_parts: list[str] = []
    ncx_points: list[str] = []
    play = 0

    for i, track in enumerate(curriculum["tracks"], start=1):
        tid = track["id"]
        docs[f"OEBPS/lessons/part-{tid}.xhtml"] = part_xhtml(track, i, lang)
        part_item = f"p-{tid}"
        manifest.append(f'<item id="{part_item}" href="lessons/part-{tid}.xhtml" '
                        f'media-type="application/xhtml+xml"/>')
        spine.append(part_item)
        t_title = esc(pick(track["title"], lang, tid))
        nav_parts.append(f'<li><a href="lessons/part-{tid}.xhtml">{t_title}</a><ol>')
        play += 1
        ncx_points.append(
            f'<navPoint id="n{play}" playOrder="{play}"><navLabel><text>{t_title}</text></navLabel>'
            f'<content src="lessons/part-{tid}.xhtml"/>')
        for entry in track["lessons"]:
            lid = entry["id"]
            lesson = json.loads((lesson_dir / f"{lid}.json").read_text(encoding="utf-8"))
            docs[f"OEBPS/lessons/{lid}.xhtml"] = lesson_xhtml(lesson, tid, lang, used_images)
            item = f"l-{lid}"
            manifest.append(f'<item id="{item}" href="lessons/{lid}.xhtml" '
                            f'media-type="application/xhtml+xml"/>')
            spine.append(item)
            l_title = esc(pick(entry["title"], lang, lid))
            nav_parts.append(f'<li><a href="lessons/{lid}.xhtml">{l_title}</a></li>')
            play += 1
            ncx_points.append(
                f'<navPoint id="n{play}" playOrder="{play}"><navLabel><text>{l_title}</text>'
                f'</navLabel><content src="lessons/{lid}.xhtml"/></navPoint>')
        nav_parts.append("</ol></li>")
        ncx_points.append("</navPoint>")

    for name, text in docs.items():
        try:
            ET.fromstring(text)
        except ET.ParseError as e:
            raise SystemExit(f"ERROR generated XHTML not well-formed: {name}: {e}")

    title = BOOK_TITLE[lang]
    modified = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    for kind, h in sorted(used_images):
        manifest.append(f'<item id="{kind}-{h}" href="images/{kind}-{h}.png" media-type="image/png"/>')

    nav = (XHTML_HEAD.replace('<html xmlns="http://www.w3.org/1999/xhtml"',
                              '<html xmlns="http://www.w3.org/1999/xhtml" '
                              'xmlns:epub="http://www.idpf.org/2007/ops"')
           .format(lang=lang, title="TOC", css="style.css")
           + '<nav epub:type="toc"><ol>' + "".join(nav_parts) + "</ol></nav></body>\n</html>\n")

    ncx = (
        '<?xml version="1.0" encoding="utf-8"?>\n'
        '<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">'
        f'<head><meta name="dtb:uid" content="urn:ntutangyun:learn-wifi:{lang}"/></head>'
        f"<docTitle><text>{esc(title)}</text></docTitle>"
        f"<navMap>{''.join(ncx_points)}</navMap></ncx>")

    opf = (
        '<?xml version="1.0" encoding="utf-8"?>\n'
        '<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid" '
        f'xml:lang="{lang}">'
        '<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">'
        f'<dc:identifier id="uid">urn:ntutangyun:learn-wifi:{lang}</dc:identifier>'
        f"<dc:title>{esc(title)}</dc:title>"
        f"<dc:language>{lang}</dc:language>"
        f"<dc:creator>{AUTHOR}</dc:creator>"
        f'<meta property="dcterms:modified">{modified}</meta>'
        "</metadata><manifest>"
        '<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>'
        '<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>'
        '<item id="css" href="style.css" media-type="text/css"/>'
        '<item id="cover-img" href="cover.png" media-type="image/png" properties="cover-image"/>'
        '<item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>'
        + "".join(manifest)
        + '</manifest><spine toc="ncx"><itemref idref="cover" linear="yes"/>'
        + "".join(f'<itemref idref="{i}"/>' for i in spine)
        + "</spine></package>")

    BUILD_DIR.mkdir(parents=True, exist_ok=True)
    out = BUILD_DIR / f"learn-wifi-{lang}.epub"
    with zipfile.ZipFile(out, "w") as z:
        z.writestr(zipfile.ZipInfo("mimetype"), "application/epub+zip", zipfile.ZIP_STORED)
        z.writestr("META-INF/container.xml",
                   '<?xml version="1.0" encoding="utf-8"?>\n'
                   '<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">'
                   '<rootfiles><rootfile full-path="OEBPS/content.opf" '
                   'media-type="application/oebps-package+xml"/></rootfiles></container>',
                   zipfile.ZIP_DEFLATED)
        z.writestr("OEBPS/content.opf", opf, zipfile.ZIP_DEFLATED)
        z.writestr("OEBPS/nav.xhtml", nav, zipfile.ZIP_DEFLATED)
        z.writestr("OEBPS/toc.ncx", ncx, zipfile.ZIP_DEFLATED)
        z.writestr("OEBPS/style.css", STYLE_CSS, zipfile.ZIP_DEFLATED)
        z.writestr("OEBPS/cover.png", cover_png.read_bytes(), zipfile.ZIP_STORED)
        z.writestr("OEBPS/cover.xhtml", COVER_XHTML, zipfile.ZIP_DEFLATED)
        for name, text in docs.items():
            z.writestr(name, text, zipfile.ZIP_DEFLATED)
        for kind, h in sorted(used_images):
            z.writestr(f"OEBPS/images/{kind}-{h}.png",
                       (IMAGE_DIR / f"{kind}-{h}.png").read_bytes(),
                       zipfile.ZIP_STORED)

    n_lessons = len(curriculum_ids)
    n_tracks = len(curriculum["tracks"])
    print(f"built {out.name}: {n_tracks} parts, {n_lessons} lessons, "
          f"{len(used_images)} images, {len(warnings)} warnings, "
          f"{out.stat().st_size / 1e6:.1f} MB")
    for w in warnings:
        print(f"  warning: {w}")
    return out


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--lang", choices=("zh", "en"), default="zh")
    args = ap.parse_args()
    build(args.lang)


if __name__ == "__main__":
    main()
