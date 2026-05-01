# Wi-Fi Knowledge Base

A community-curated, machine-readable feed of new Wi-Fi research, products, IEEE 802.11 standards activity, and academic papers.

Each entry is a single Markdown file with YAML frontmatter, summarising one finding (a paper, a vendor announcement, an IEEE submission, a news item) with a short technical write-up of what's new.

The static viewer at the root of this repo (`index.html`) renders all entries with full-text search and faceted filters. Open it directly in a browser, or browse the GitHub Pages mirror.

## Layout

```
wifi_knowledge_base/
├── index.html        ← static viewer (open in a browser, or via Pages)
├── kb.js             ← viewer payload (loaded directly when over file://)
├── kb.json           ← viewer payload (loaded via fetch when over http(s)://)
├── index.json        ← canonical manifest (entries summary, schema_version)
└── entries/          ← one Markdown file per finding
    └── YYYY-MM-DD_<source-slug>.md
```

`index.json`, `kb.json`, and `kb.js` are **all derived** from `entries/*.md`. Don't edit them by hand — run the rebuild script (see below).

## Entry format

```markdown
---
id: 2026-05-01_arxiv-mapc-llm-agents
date_found: 2026-05-01
type: academic-paper
title: "..."
url: "https://arxiv.org/..."
source_quality: full
topics: [802.11bn, MAPC, MAC-layer]
novelty_score: 4
---

## Summary

Two- to four-paragraph plain-English summary of what's new and why it matters.

## Key technical points

- Bullet list of the concrete technical details
- Specific IE / Action frame / parameter / number worth remembering

## Why it matters / what's new

How this fits into the broader Wi-Fi landscape.
```

`type` is one of: `academic-paper`, `ieee-document`, `proposal`, `vendor-news`, `product`, `news`, `tutorial`.

`topics` should reuse existing topic tags where possible (see `kb.json` → `topic_counts`). Common ones: `802.11ax`, `802.11be`, `802.11bn`, `802.11bf`, `MAPC`, `MLO`, `MAC-layer`, `agentic-AI`, `roaming`, `sensing`, `R-TWT`, `scheduling`.

`novelty_score` is 1–5: 1 = incremental tweak, 5 = potentially category-defining.

## Contributing

1. Fork this repo.
2. Add a new file under `entries/` named `YYYY-MM-DD_<source-slug>.md`. Follow the format above.
3. Run the rebuild script to refresh `index.json` and `kb.json`/`kb.js`:
   ```
   python scripts/rebuild_index.py
   ```
   (Stock Python 3.10+; no third-party dependencies.)
4. Open a pull request.

The rebuilder normalises topic spellings (e.g. `wifi 7` → `802.11be`, `multi-link` → `MLO`) so don't worry too much about getting tags exactly right.

## Viewing locally

Just double-click `index.html`. The viewer prefers `kb.js` (works under `file://`) and falls back to `kb.json` over fetch (works under `http(s)://`).

## GitHub Pages

This repo is structured to be served as-is from GitHub Pages: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root)**. After enabling, the viewer lives at `https://<your-username>.github.io/wifi_knowledge_base/`.

## License

MIT — see [LICENSE](LICENSE). The summaries are original prose; the underlying papers / standards / news items remain owned by their respective authors and publishers, and only their titles, URLs, and short technical descriptions are reproduced here.
