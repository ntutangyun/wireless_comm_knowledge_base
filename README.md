# Wi-Fi Knowledge Base

A community-curated, **bilingual** (English + 中文), machine-readable feed of new Wi-Fi research, products, IEEE 802.11 standards activity, and academic papers.

Each entry is a single Markdown file with YAML frontmatter, summarising one finding (a paper, a vendor announcement, an IEEE submission, a news item) with a short technical write-up of what's new — in **both languages**. Image links from the source (figures, diagrams, performance charts) are included where available so the viewer can show them inline.

The static viewer at the root of this repo (`index.html`) renders all entries with a EN / 中文 toggle, full-text search across both languages, and faceted filters. Open it directly in a browser, or browse the GitHub Pages mirror.

## Layout

```
wifi_knowledge_base/
├── index.html        ← static viewer (EN / 中文 toggle in the header)
├── kb.js             ← viewer payload (loaded directly when over file://)
├── kb.json           ← viewer payload (loaded via fetch when over http(s)://)
├── index.json        ← canonical manifest (entries summary, schema_version)
├── scripts/
│   └── rebuild_index.py
└── entries/          ← one Markdown file per finding
    └── YYYY-MM-DD_<source-slug>.md
```

`index.json`, `kb.json`, and `kb.js` are **all derived** from `entries/*.md`. Don't edit them by hand — run the rebuild script (see below).

## Entry format (schema v3 — bilingual + images)

```markdown
---
id: 2026-05-01_arxiv-mapc-llm-agents
date_found: 2026-05-01
type: academic-paper
title_en: "Learning Multi-Access Point Coordination in Agentic AI Wi-Fi …"
title_zh: "智能体 AI Wi-Fi 中的多接入点协调学习……"
url: "https://arxiv.org/abs/2511.20719"
source_quality: full
topics: [802.11bn, MAPC, MAC-layer]
novelty_score: 5
---

## Summary (EN)

English summary, 2-4 paragraphs.

## Summary (ZH)

中文摘要，2–4 段。

## Key technical points (EN)

- Bullet 1
- Bullet 2

## Key technical points (ZH)

- 要点 1
- 要点 2

## Why it matters / what's new (EN)

How this fits into the broader Wi-Fi landscape.

## Why it matters / what's new (ZH)

在更宏观的 Wi-Fi 研究图景中的意义。

## Images

![System architecture | 系统架构](https://arxiv.org/html/<paper-id>/x1.png)
![Performance comparison | 性能对比](https://arxiv.org/html/<paper-id>/x4.png)
```

### Field rules

- **`title_en` and `title_zh`** are both required. The viewer uses whichever matches the user's selected language.
- **Section headings** must be exactly `## Summary (EN)`, `## Summary (ZH)`, `## Key technical points (EN)`, etc. The rebuild script picks them out by name.
- **Topics** stay as canonical English / standards-spec abbreviations (`802.11bn`, `MAPC`, `MLO`, `R-TWT`, etc.). They display the same way in both languages.
- **`type`** is one of: `academic-paper`, `ieee-document`, `proposal`, `vendor-news`, `product`, `industry-news`, `news`, `tutorial`.
- **`novelty_score`** is 1–5: 1 = incremental tweak, 5 = potentially category-defining.
- **`source_quality`** is `full` (page successfully fetched) or `snippet_only` (only the search-snippet was available — flag for re-fetching later).

### `## Images` section format

A single shared section that lists images relevant to the finding, in markdown image syntax. The alt text holds **both captions separated by `|`**:

```
![<English caption> | <中文说明>](<image-url>)
```

If you only have one caption, omit the `|` and the rebuilder will use the same string for both languages. If you have no relevant images, omit the section entirely.

Image URLs may be either:

- **Hotlinks** (preferred for arxiv and most CDN-hosted images) — e.g. `https://arxiv.org/html/<id>/x<N>.png`. Stable, costs no repo space.
- **Locally hosted** under `assets/<entry-id>/<filename>` (use this when the source server blocks hotlinking, e.g. some IEEE Word-saved HTML pages and a few enterprise CDNs). Reference as a relative URL: `assets/2026-05-01_foo/diagram.png`. The viewer resolves it relative to `index.html`, so it works under both `file://` and the GitHub Pages mirror.

Test the URL in a private-browser window before committing — if it 404s when opened directly (i.e. the source enforces a Referer or User-Agent), fall back to local hosting.

## Contributing

1. Fork this repo.
2. Add a new file under `entries/` named `YYYY-MM-DD_<source-slug>.md`. Follow the schema above — write **both** the EN and ZH versions.
3. Run the rebuild script to refresh `index.json`, `kb.json`, and `kb.js`:
   ```
   python scripts/rebuild_index.py
   ```
   (Stock Python 3.10+; no third-party dependencies.)
4. Open a pull request.

The rebuilder normalises topic spellings (e.g. `wifi 7` → `802.11be`, `multi-link` → `MLO`) so don't worry too much about getting tags exactly right.

## Viewing locally

Just double-click `index.html`. The viewer prefers `kb.js` (works under `file://`) and falls back to `kb.json` over fetch (works under `http(s)://`).

The EN / 中文 toggle is in the top right; your choice is remembered in `localStorage`.

## GitHub Pages

This repo is structured to be served as-is from GitHub Pages: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root)**. After enabling, the viewer lives at `https://<your-username>.github.io/wifi_knowledge_base/`.

## License

MIT — see [LICENSE](LICENSE). The summaries are original prose; the underlying papers / standards / news items remain owned by their respective authors and publishers, and only their titles, URLs, short technical descriptions, and (where applicable) figure thumbnails are reproduced here under fair-use / academic-citation conventions.
