window.SOURCES_DATA = {
  "version": 1,
  "last_updated": "2026-05-28",
  "sources": [
    {
      "id": "arxiv-cs-ni",
      "name": "arxiv.org cs.NI listings",
      "url": "https://arxiv.org/list/cs.NI/current",
      "kind": "html",
      "category": "academia",
      "topics_hint": [],
      "notes": "Networking & Internet Architecture. Highest-yield single source for new WiFi research papers. Listing pages render server-side; HTML scraping works. 2026-07-07 (user-approved 11b): SKIP-EXEMPT — never auto-skip on cf>=3. The cf counter conflates 'source broken' with 'WiFi-dry'; this listing posts healthy fresh batches that feed all 6 scouts even on zero-WiFi days. Reset cf manually whenever it accumulates during WiFi lulls (same standing exemption as arxiv-search-security).",
      "technology": "wifi"
    },
    {
      "id": "arxiv-search-security",
      "name": "arxiv.org search — 802.11 security",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "security"
      ],
      "notes": "Lower cadence — security papers in this space are infrequent but high-impact. 2026-05-28: hit cf=3 (auto-skip threshold) but KEPT ENABLED on rare/high-impact grounds; the cs.NI listing catches most security papers but a dedicated query may still surface conference-track CVEs first. Reset the cf counter manually next time it produces a hit.",
      "technology": "wifi"
    },
    {
      "id": "ieee-xplore-search",
      "name": "IEEE Xplore — recent 802.11 papers",
      "url": "https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=802.11&searchWithin=publishedYear&searchWithin=",
      "kind": "browser",
      "category": "academia",
      "topics_hint": [],
      "notes": "JS-rendered; needs the claude-in-chrome browser plugin. Higher-quality (peer-reviewed) than arxiv but lower volume.",
      "technology": "wifi"
    },
    {
      "id": "sigcomm-papers",
      "name": "SIGCOMM accepted papers (current year)",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [],
      "notes": "Conference is annual — usually August. Check around accept-notification time. 2026-07-28 (user-approved 11b): cf reset 3 -> 0 + SEASONAL WINDOW — SIGCOMM 2026 proceedings land Aug 17-21 (Concord camera-ready expected; upgrade 2026-07-08 entry to full). Contact this source on every run Aug 15-25 REGARDLESS of cf counter; if cf climbs back to 3 before then, reset it again when the window opens rather than skipping.",
      "technology": "wifi"
    },
    {
      "id": "mobicom-papers",
      "name": "MobiCom accepted papers (current year)",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [],
      "notes": "Annual; usually November.",
      "technology": "wifi"
    },
    {
      "id": "nsdi-papers",
      "name": "USENIX NSDI accepted papers (current year)",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [],
      "notes": "",
      "technology": "wifi"
    },
    {
      "id": "infocom-papers",
      "name": "IEEE INFOCOM accepted papers (current year)",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [],
      "notes": "",
      "technology": "wifi"
    },
    {
      "id": "ieee-802-11-wg",
      "name": "IEEE 802.11 working group public reports",
      "url": "https://www.ieee802.org/11/Reports/",
      "kind": "html",
      "category": "standards",
      "topics_hint": [],
      "notes": "Official WG status pages. Watch for new TGxx_update.htm files. 2026-07-26 (user-approved 11b): SKIP-EXEMPT — never auto-skip on cf>=3, reset the counter manually instead. The page is a session-report archive: it only changes at plenary/interim boundaries, so between sessions it reads as 'failing' while working perfectly. Worse, when a session DOES land, the outcomes usually reach the KB first via faster channels (D2.0 approval + Wi-Fi 9 SG arrived 07-22 via news; the Session 218 report file appeared here only on 07-26), so this source is a confirmation-of-record channel, not a discovery channel — and auto-skipping it would silently drop the authoritative record. cf reset 3 -> 0 on 2026-07-26.",
      "technology": "wifi"
    },
    {
      "id": "ieee-mentor",
      "name": "IEEE 802.11 Mentor (proposals & contributions)",
      "url": "https://mentor.ieee.org/802.11/documents?is_year=2026",
      "kind": "browser",
      "category": "standards",
      "topics_hint": [],
      "notes": "JS-rendered list filtered to current year (is_year=YYYY). New contribution numbers (11-YY-NNNN-…) appear here first. Per-doc .docx is 418/403 to anonymous downloaders, so we never fetch the body — Step 4a clusters new rows by Group (TGbn / TGbp / TGbi / TGbq / TGbr / TGbt / TGm / WNG SC) into per-group daily digests. State key: state.sources.ieee-mentor.last_dcn_seen — the highest DCN ingested last run; rows whose DCN is greater are new.",
      "technology": "wifi"
    },
    {
      "id": "ofinno-standards-readout",
      "name": "Ofinno — The Standards Readout",
      "url": "https://ofinno.com/standards-readout/",
      "kind": "browser",
      "category": "standards",
      "topics_hint": [],
      "notes": "Excellent post-plenary / post-interim summaries. Cadence aligned with IEEE 802.11 sessions (Jan / Mar / May / Jul / Sep / Nov). 2026-05-28: URL updated — /the-standards-readout-2/ landing now 404s; articles live under /standards-readout/<slug>/.",
      "technology": "wifi"
    },
    {
      "id": "standards-get-program",
      "name": "IEEE 802 GET program — newly free 802.11 standards",
      "url": "https://ieeexplore.ieee.org/browse/standards/get-program/page/series?id=93",
      "kind": "browser",
      "category": "standards",
      "topics_hint": [],
      "notes": "Lists all 802 standards currently free under the 6-month-after-publication GET rule. Page changes once or twice a year when a new amendment crosses the threshold. The scout watches for *new* 802.11 entries (not download attempts — PDFs are gated behind ieee.org login). When a new 802.11/be/bf/bk/bn/bp amendment goes free, surface it as a public-side news entry and remind the user to add the PDF to patent_pipeline/standards_archive/. Direct PDF downloads stay private.",
      "technology": "wifi"
    },
    {
      "id": "iso-iec-jtc1-search",
      "name": "ISO/IEC JTC1 SC6 search (rare but cited)",
      "url": "",
      "kind": "web-search",
      "category": "standards",
      "topics_hint": [],
      "notes": "",
      "technology": "wifi"
    },
    {
      "id": "wfa-news",
      "name": "Wi-Fi Alliance press releases",
      "url": "https://www.wi-fi.org/press-releases",
      "kind": "browser",
      "category": "standards",
      "topics_hint": [],
      "notes": "Certification announcements (e.g. Wi-Fi CERTIFIED 7 20 MHz IoT cert in Jan 2026). URL fixed 2026-07-10 (user-approved 11b): /news-events/press-releases now 404s; /press-releases is canonical (second drift since May 2026 — the /newsroom path 404'd 2026-05-04). First browser contact in weeks produced 2 entries (WFA x Bluetooth SIG 6 GHz coexistence, EU DNA open letter) — keep in the periodic browser sweep. 2026-07-26 (user-approved 11b): cf reset 3 -> 0, kept enabled — quiet, not broken. WFA publishes in bursts around certification launches (CES, plenary follow-ons); a summer gap is its normal cadence, and the 07-10 URL fix proved the path is live. Re-evaluate if still dry ~5 runs after the next certification event.",
      "technology": "wifi"
    },
    {
      "id": "wba-press",
      "name": "Wireless Broadband Alliance newsroom",
      "url": "https://wballiance.com/newsroom/",
      "kind": "html",
      "category": "standards",
      "topics_hint": [],
      "notes": "Industry-alliance announcements; deployment milestones, interoperability trials. URL updated 2026-05-04 (the /press-releases path now 404s; /newsroom is the canonical landing page; /category/wba-releases/ also works as a per-category archive).",
      "technology": "wifi"
    },
    {
      "id": "qualcomm-press",
      "name": "Qualcomm news releases",
      "url": "https://www.qualcomm.com/news/releases",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "802.11bn",
        "products"
      ],
      "notes": "JS-rendered SPA; browser plugin required (the scout already learned this on the FastConnect 8800 entry).",
      "technology": "wifi"
    },
    {
      "id": "broadcom-press",
      "name": "Broadcom press releases",
      "url": "https://news.broadcom.com/releases",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "802.11bn",
        "products"
      ],
      "notes": "URL fixed 2026-05-25 — the legacy investors.broadcom.com/news-releases and broadcom.com/company/newsroom/press-releases paths both 404. Canonical press hub is now news.broadcom.com/releases (product-specific items also at /company/news/product-releases). Verified live via search 2026-05-25.",
      "technology": "wifi"
    },
    {
      "id": "mediatek-press",
      "name": "MediaTek press releases",
      "url": "https://corp.mediatek.com/news-events/press-releases",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "802.11bn",
        "products"
      ],
      "notes": "",
      "technology": "wifi"
    },
    {
      "id": "intel-newsroom",
      "name": "Intel newsroom — Wi-Fi & connectivity",
      "url": "https://www.intel.com/content/www/us/en/newsroom/news-by-topic.html",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "Intel's connectivity announcements show up here (Wi-Fi 7 platforms, sensing demos).",
      "technology": "wifi"
    },
    {
      "id": "nordic-semiconductor",
      "name": "Nordic Semiconductor — IoT Wi-Fi",
      "url": "https://www.nordicsemi.com/Nordic-news",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "IoT",
        "products"
      ],
      "notes": "Watch for Wi-Fi 7 / Wi-Fi 8 IoT MCU announcements (the 20 MHz cert market). URL fixed and switched to playwright 2026-05-04 (the /News path now 403s; /Nordic-news is the canonical path, JS-rendered).",
      "technology": "wifi"
    },
    {
      "id": "espressif",
      "name": "Espressif news (ESP32 family Wi-Fi)",
      "url": "https://www.espressif.com/en/company/newsroom/news",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "IoT",
        "products"
      ],
      "notes": "URL updated 2026-05-04 (the /en/news path now 404s). 2026-07-28 (user-approved 11b): SECOND cf reset 3 -> 0, kept enabled — dry spells track Espressif's release cadence (last hit: ESP32-E22 6E cert, Jun-12), not breakage. If a THIRD cf=3 accumulates with no intervening hit, accept the auto-skip until the next ESP32 release wave instead of resetting again.",
      "technology": "wifi"
    },
    {
      "id": "cisco-press",
      "name": "Cisco press releases",
      "url": "https://newsroom.cisco.com/pressreleases",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "Catalyst / Meraki Wi-Fi 7 + AgenticOps announcements. URL updated 2026-05-04 (the /c/r/newsroom/en/us/index.html legacy path now 403s).",
      "technology": "wifi"
    },
    {
      "id": "hpe-aruba-press",
      "name": "HPE press release hub (Aruba Networking)",
      "url": "https://www.hpe.com/us/en/newsroom/press-hub.html",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "Post-Juniper acquisition: track Aruba Central + Mist convergence. URL updated 2026-05-04 — the legacy arubanetworks.com/company/about-us/newsroom/news-releases/ path 403s; HPE press-hub is now the canonical Aruba release channel.",
      "technology": "wifi"
    },
    {
      "id": "juniper-mist-press",
      "name": "Juniper Mist press",
      "url": "https://www.juniper.net/us/en/company/press-releases.html",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "",
      "technology": "wifi"
    },
    {
      "id": "extreme-networks-press",
      "name": "Extreme Networks newsroom",
      "url": "https://www.extremenetworks.com/about-extreme-networks/company/newsroom",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "URL fixed and switched to playwright 2026-05-04 (the /news path 404s; /company/newsroom is JS-rendered).",
      "technology": "wifi"
    },
    {
      "id": "ruckus-networks-press",
      "name": "Ruckus Networks press releases",
      "url": "https://www.ruckusnetworks.com/press-releases/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "Renamed and re-pointed 2026-05-04 — the parent commscope.com/press-releases/ path 404s; Ruckus is the Wi-Fi-relevant arm with its own active newsroom (Wi-Fi 7 stadium deployments, Nokia OLAN combo, etc.).",
      "technology": "wifi"
    },
    {
      "id": "tp-link-press",
      "name": "TP-Link press",
      "url": "https://www.tp-link.com/us/press/news/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "Consumer Wi-Fi 7 / Wi-Fi 8 router launches — useful for tracking when a chipset hits retail.",
      "technology": "wifi"
    },
    {
      "id": "netgear-press",
      "name": "Netgear pressroom",
      "url": "https://www.netgear.com/hub/pressroom/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "URL updated 2026-05-04 (the /about/press/ path 404s; /hub/pressroom/ is the current home).",
      "technology": "wifi"
    },
    {
      "id": "asus-networking",
      "name": "ASUS networking news",
      "url": "https://press.asus.com/news/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "",
      "technology": "wifi"
    },
    {
      "id": "wifi-now-global",
      "name": "Wi-Fi NOW Global",
      "url": "https://wifinowglobal.com/news-blog/",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [],
      "notes": "Industry-focused publication; covers MWC / CES / IEEE plenary readouts. Flipped kind: html -> browser 2026-05-28 — WebFetch reliably 403s this domain; the only path that works is the browser plugin. Top WiFi-news performer in the rotation (Qualcomm/Synaptics/Intel/MediaTek WWC, FCC 6 GHz, UK/EU 6 GHz).",
      "technology": "wifi"
    },
    {
      "id": "light-reading",
      "name": "Light Reading",
      "url": "https://www.lightreading.com/",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [],
      "notes": "Carrier-side analysis; relevant for VoWiFi, FWA, ePDG topics.",
      "technology": "wifi"
    },
    {
      "id": "techtarget-networking",
      "name": "TechTarget Search Networking",
      "url": "https://www.techtarget.com/searchnetworking/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [],
      "notes": "",
      "technology": "wifi"
    },
    {
      "id": "tom-hardware-networking",
      "name": "Tom's Hardware networking",
      "url": "https://www.tomshardware.com/networking",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "Consumer-router reviews; sometimes catches early CES product announcements.",
      "technology": "wifi"
    },
    {
      "id": "siliconangle-networking",
      "name": "SiliconANGLE — networking",
      "url": "https://siliconangle.com/category/networking/",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [],
      "notes": "Added 2026-05-04. Strong enterprise + agentic-networking coverage; surfaced HPE Discover Aruba/Mist convergence and the agentic-AI-at-edge piece (2026-04-10) during the 2026-05-04 scan. Playwright (the category landing page is JS-heavy).",
      "technology": "wifi"
    },
    {
      "id": "the-mobile-network",
      "name": "The Mobile Network",
      "url": "https://the-mobile-network.com/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [],
      "notes": "Added 2026-05-04. UK-based publication tracking 5G/6G + Wi-Fi convergence; surfaced the Huawei Agentic MBB at MWC Barcelona 2026 piece. Useful for stories the existing carrier outlets miss.",
      "technology": "wifi"
    },
    {
      "id": "nand-research",
      "name": "NAND Research — analyst publication",
      "url": "https://nand-research.com/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [],
      "notes": "Added 2026-05-04. Independent analyst publication; broad-infrastructure focus (cloud / AI / storage) but produces deep technical Wi-Fi pieces e.g. the Qualcomm Dragonwing Wi-Fi 8 architecture analysis. Lower cadence than vendor newsrooms but higher analytical depth.",
      "technology": "wifi"
    },
    {
      "id": "edgeup-asus",
      "name": "EdgeUp by ASUS — technical blog",
      "url": "https://edgeup.asus.com/",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "Added 2026-05-04. ASUS's own technical blog — generally yields more usable content than press.asus.com (which 403s on WebFetch). Source for the ROG NeoCore Wi-Fi 8 throughput-test report at CES 2026. Playwright (Adobe Edge / SPA shell).",
      "technology": "wifi"
    },
    {
      "id": "digitimes",
      "name": "Digitimes — Asia chipset & supply-chain",
      "url": "https://www.digitimes.com/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "Added 2026-05-04. Asia-side chipset competitive intelligence (MediaTek / Qualcomm / Broadcom Wi-Fi market dynamics). Surfaced the 2026-04-10 MediaTek end-to-end challenger piece during the 2026-05-04 scan.",
      "technology": "wifi"
    },
    {
      "id": "cnx-software",
      "name": "CNX Software — embedded & chipset deep-dive",
      "url": "https://www.cnx-software.com/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "Added 2026-05-14. Independent embedded / chipset publication; surfaced the Broadcom BCM67142/67192/68565 May 13 Wi-Fi 8 mass-market write-up with chip-level detail (block diagrams, PCIe lanes, spatial-stream config) that the official Broadcom IR press release didn't carry. Complementary to nand-research and digitimes — covers the bring-up / dev-kit / reference-design side.",
      "technology": "wifi"
    },
    {
      "id": "ces-wifi-coverage",
      "name": "CES — WiFi 8 / 802.11bn coverage (Jan)",
      "url": "",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "802.11bn",
        "products"
      ],
      "notes": "Run Jan 5–10 every year. Bumped to daily during CES week.",
      "technology": "wifi"
    },
    {
      "id": "mwc-wifi-coverage",
      "name": "MWC Barcelona — WiFi coverage (Mar)",
      "url": "",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "802.11bn",
        "products"
      ],
      "notes": "Run Feb 28 – Mar 4 every year. Bumped to daily during MWC week.",
      "technology": "wifi"
    },
    {
      "id": "computex-wifi-coverage",
      "name": "Computex Taipei — WiFi 7 / WiFi 8 router coverage (late May / early Jun)",
      "url": "",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "802.11bn",
        "products"
      ],
      "notes": "Added 2026-06-08. Computex Taipei (late May / early June) is a consistent consumer-WiFi product-launch window that the dedicated arxiv/standards sources miss. Caught the Asus ROG Rapture GT-BN98 Pro (world's first Wi-Fi 8 router, Best Choice award) on the 2026-06-08 run via the general WiFi-8 news sweep — this seasonal query makes that capture deliberate. Run late-May through mid-June; bump to daily during Computex week. Mirrors ces-wifi-coverage / mwc-wifi-coverage.",
      "technology": "wifi"
    },
    {
      "id": "hpe-discover-coverage",
      "name": "HPE Discover — WiFi / Aruba coverage (Jun, Dec)",
      "url": "",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "",
      "technology": "wifi"
    },
    {
      "id": "cisco-live-coverage",
      "name": "Cisco Live — WiFi coverage (Jun)",
      "url": "",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "products"
      ],
      "notes": "",
      "technology": "wifi"
    },
    {
      "id": "regulatory-docket-backfill",
      "name": "Regulatory docket backfill sweep (FCC / Ofcom / ECC) — quarterly",
      "url": "",
      "kind": "web-search",
      "category": "standards",
      "topics_hint": [
        "spectrum-policy"
      ],
      "notes": "Added 2026-08-03 (user-approved 11a). QUARTERLY cadence, not daily: run on the first meta-run of each quarter (Jan/Apr/Jul/Oct) and additionally after any multi-day run gap. Origin: the FCC Covered-List foreign-router ban (order 2026-03-23, DOC-420034A1) went uncaptured for 4 months and only surfaced 2026-08-03 because a general news sweep re-ranked a March editorial — policy shocks must be captured deliberately, not by editorial re-surfacing luck. Sweep shape: one query per regulator (FCC covered list / equipment authorization; Ofcom statement Wi-Fi spectrum; ECC/CEPT decision RLAN 6 GHz), dedupe by event (order number / docket ID), ingest misses as dated backfills with rationale. Zero yield on most quarters is EXPECTED and is not a failure — do not bump consecutive_failures on off-quarter runs.",
      "technology": "wifi"
    },
    {
      "id": "arxiv-cs-ni-cellular",
      "name": "arxiv.org cs.NI — cellular papers",
      "url": "https://arxiv.org/list/cs.NI/current",
      "kind": "html",
      "category": "academia",
      "topics_hint": [
        "5g-nr",
        "6g-vision",
        "cellular-ai"
      ],
      "notes": "The cs.NI listing is the primary source for cellular academic papers. Filter for 5G/6G/O-RAN/LTE/NTN-cellular-mode papers during Step 3 dedup.",
      "technology": "cellular"
    },
    {
      "id": "arxiv-5g-nr",
      "name": "arxiv — 5G NR",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "5g-nr"
      ],
      "technology": "cellular"
    },
    {
      "id": "arxiv-6g",
      "name": "arxiv — 6G",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "6g-vision"
      ],
      "technology": "cellular"
    },
    {
      "id": "arxiv-massive-mimo",
      "name": "arxiv — Massive MIMO",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "cellular-massive-mimo"
      ],
      "technology": "cellular"
    },
    {
      "id": "arxiv-o-ran",
      "name": "arxiv — Open RAN",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "open-ran"
      ],
      "technology": "cellular"
    },
    {
      "id": "arxiv-ntn",
      "name": "arxiv — NTN Satellite-Cellular",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "ntn"
      ],
      "technology": "cellular"
    },
    {
      "id": "arxiv-network-slicing",
      "name": "arxiv — Network Slicing",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "network-slicing"
      ],
      "technology": "cellular"
    },
    {
      "id": "arxiv-mec",
      "name": "arxiv — Edge Computing MEC",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "mec"
      ],
      "technology": "cellular"
    },
    {
      "id": "arxiv-cellular-ai",
      "name": "arxiv — AI for Cellular",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "cellular-ai"
      ],
      "technology": "cellular"
    },
    {
      "id": "arxiv-redcap",
      "name": "arxiv — RedCap IoT",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "redcap-iot"
      ],
      "technology": "cellular"
    },
    {
      "id": "3gpp-news",
      "name": "3GPP News & Releases",
      "kind": "web-search",
      "category": "standards",
      "topics_hint": [
        "5g-nr",
        "4g-lte"
      ],
      "technology": "cellular"
    },
    {
      "id": "ericsson-blog",
      "name": "Ericsson Blog — 5G/6G",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "5g-nr",
        "6g-vision"
      ],
      "technology": "cellular"
    },
    {
      "id": "nokia-blog",
      "name": "Nokia Blog — Mobile Networks",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "5g-nr",
        "open-ran"
      ],
      "notes": "2026-08-04 (user-approved 11b): cf hit 3 — ACCEPT the auto-skip, do not reset. Nokia's AI-RAN/6G announcements consistently reach the KB first via general news sweeps and cross-channels (AI-RAN platform arrived 07-19 via news, AI-in-RAN via ericsson-adjacent coverage); the dedicated query has been dupe-only since June. Kept enabled so a future manual reset can revive it if the general sweeps start missing Nokia items.",
      "technology": "cellular"
    },
    {
      "id": "huawei-cellular",
      "name": "Huawei — 5G/6G",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "5g-nr",
        "6g-vision"
      ],
      "technology": "cellular"
    },
    {
      "id": "samsung-networks",
      "name": "Samsung Networks",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "5g-nr"
      ],
      "technology": "cellular"
    },
    {
      "id": "fierce-network",
      "name": "Fierce Network (telecom)",
      "url": "https://www.fierce-network.com/wireless",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "5g-nr",
        "6g-vision",
        "open-ran"
      ],
      "notes": "Added 2026-05-30 during the Jan-2026 cellular backfill. Major US telecom-industry publication (formerly FierceWireless); strong MWC / 6G / AI-RAN / O-RAN coverage and 'takeaways' analysis pieces that the vendor-blog web-searches miss. 2026-07-03 (user-approved Step 11b): flipped kind html -> browser — WebFetch now 403s the landing page. The query_hint web-search tier still runs first per the cellular tiered strategy, so automated (browser-less) runs keep coverage via search.",
      "technology": "cellular"
    },
    {
      "id": "o-ran-alliance",
      "name": "O-RAN Alliance News",
      "kind": "web-search",
      "category": "standards",
      "topics_hint": [
        "open-ran"
      ],
      "technology": "cellular"
    },
    {
      "id": "gsma-news",
      "name": "GSMA News",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "5g-nr",
        "cellular-spectrum"
      ],
      "technology": "cellular"
    },
    {
      "id": "bharat-6g-india",
      "name": "India — Bharat 6G programme (DoT / PIB / Bharat 6G Alliance / IIT testbeds)",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "6g-vision",
        "cellular-spectrum"
      ],
      "notes": "Added 2026-08-27 after the IIT Madras THz miss. Covers the Bharat 6G Alliance (~90 members), the Telecom Technology Development Fund (TTDF), SAMEER, C-DOT and the IIT testbeds. Primary releases live on pib.gov.in and the institutes' own pages, but neither is reliably indexed — Indian trade press (electronicsforu, ETTelecom, DD India) is usually the first reachable carrier, so keep the query outlet-agnostic.",
      "technology": "cellular"
    },
    {
      "id": "korea-6g-etri",
      "name": "Korea — ETRI / MSIT 6G programme",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "6g-vision",
        "cellular-spectrum"
      ],
      "notes": "Added 2026-08-27 alongside the India source — same blind spot. ETRI (Electronics and Telecommunications Research Institute) is one of the most prolific 6G/THz publishers globally and a heavy 3GPP contributor, yet had no source here; Samsung Networks coverage does not substitute for the national research programme.",
      "technology": "cellular"
    },
    {
      "id": "japan-6g-nict",
      "name": "Japan — NICT / Beyond 5G promotion programme",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "6g-vision",
        "cellular-spectrum"
      ],
      "notes": "Added 2026-08-27 alongside the India/Korea sources. NICT runs Japan's Beyond-5G programme and has produced several record THz link results (300 GHz band); DOCOMO/NTT vendor coverage does not reach the national-programme layer.",
      "technology": "cellular"
    },
    {
      "id": "fcc-cellular",
      "name": "FCC — Cellular Spectrum",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "cellular-spectrum"
      ],
      "technology": "cellular"
    },
    {
      "id": "ntia-spectrum",
      "name": "NTIA — spectrum pipeline / 6G bands (press releases)",
      "url": "https://www.ntia.gov/press-releases",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "cellular-spectrum",
        "6g-vision"
      ],
      "notes": "Added 2026-08-15 (Step 11, user-approved): US federal-band pipeline items (1.6 / 2.7 / 4.4 / 7 GHz studies, 6G Call to Action) were landing under fcc-cellular with no key of their own. ntia.gov 403s WebFetch directly - use r.jina.ai.",
      "technology": "cellular"
    },
    {
      "id": "arxiv-cellular-security",
      "name": "arxiv — Cellular Security",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "cellular-security"
      ],
      "technology": "cellular"
    },
    {
      "id": "qualcomm-5g",
      "name": "Qualcomm — 5G Modem",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "5g-nr",
        "redcap-iot"
      ],
      "technology": "cellular"
    },
    {
      "id": "mediatek-5g",
      "name": "MediaTek — 5G",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "5g-nr"
      ],
      "technology": "cellular"
    },
    {
      "id": "arxiv-api-satellite",
      "name": "arxiv API — satellite/LEO/NTN across cs.NI + eess.SP + cs.IT + eess.SY",
      "url": "https://export.arxiv.org/api/query?search_query=%28abs%3Asatellite+OR+abs%3ALEO+OR+abs%3A%22non-terrestrial%22%29+AND+%28cat%3Acs.NI+OR+cat%3Aeess.SP+OR+cat%3Acs.IT+OR+cat%3Aeess.SY%29&sortBy=submittedDate&sortOrder=descending&max_results=40",
      "kind": "api",
      "category": "academia",
      "topics_hint": [
        "leo-constellations",
        "ntn",
        "sat-direct-device",
        "sat-iot"
      ],
      "notes": "Added 2026-08-15 (Step 11, user-approved): PRIMARY academic source. All three 08-15 satellite papers (2608.10270 SSB positioning, 2608.12265 Cox-Boolean sharing, 2608.07901 DVB beam hopping) sat in eess.SP / cs.IT and never surfaced in the cs.NI listing. Filter to arxiv ids above the previous run's max (track in state as last_arxiv_id_seen); the cs.NI HTML listing below is now secondary.",
      "technology": "satellite"
    },
    {
      "id": "arxiv-cs-ni-satellite",
      "name": "arxiv.org cs.NI — LEO/satellite papers",
      "url": "https://arxiv.org/list/cs.NI/current",
      "kind": "html",
      "category": "academia",
      "topics_hint": [
        "leo-constellations",
        "ntn",
        "sat-iot"
      ],
      "notes": "cs.NI listing filtered for LEO/NTN/satellite papers. Secondary since 2026-08-15 (arxiv-api-satellite is primary).",
      "technology": "satellite"
    },
    {
      "id": "arxiv-ntn-sat",
      "name": "arxiv — NTN / Satellite Direct",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "sat-direct-device",
        "ntn"
      ],
      "technology": "satellite"
    },
    {
      "id": "arxiv-sat-iot",
      "name": "arxiv — Satellite IoT",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "sat-iot"
      ],
      "technology": "satellite"
    },
    {
      "id": "arxiv-sat-ai",
      "name": "arxiv — AI Satellite",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "sat-ai"
      ],
      "technology": "satellite"
    },
    {
      "id": "starlink-news",
      "name": "Starlink News",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "starlink"
      ],
      "notes": "2026-05-28: hit cf=3 (auto-skip) but KEPT ENABLED on lower cadence. Query narrowed from generic 'constellation' to 'spectrum protocol announcement' to filter out market-data noise (subscriber counts, business deals) that previously dominated. Reset cf next time the narrowed query produces a hit.",
      "technology": "satellite"
    },
    {
      "id": "oneweb-news",
      "name": "OneWeb / Eutelsat News",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "leo-constellations"
      ],
      "technology": "satellite"
    },
    {
      "id": "kuiper-news",
      "name": "Amazon Kuiper News",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "leo-constellations"
      ],
      "technology": "satellite"
    },
    {
      "id": "telesat-news",
      "name": "Telesat Lightspeed",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "leo-constellations"
      ],
      "technology": "satellite"
    },
    {
      "id": "ast-spacemobile",
      "name": "AST SpaceMobile",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "sat-direct-device"
      ],
      "technology": "satellite"
    },
    {
      "id": "apple-satellite",
      "name": "Apple Globalstar Satellite",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "sat-direct-device"
      ],
      "technology": "satellite"
    },
    {
      "id": "spacenews",
      "name": "SpaceNews",
      "url": "https://spacenews.com/section/news-archive/",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "starlink",
        "leo-constellations",
        "sat-direct-device"
      ],
      "notes": "Major space industry publication; covers Starlink, Kuiper, OneWeb, Telesat. 2026-05-28: URL updated — /segment/satellite-telecom/ now 404s; /section/news-archive/ is the working archive index. Playwright works (no 429 when via real browser). Fallback chain if blocked again: web-search query_hint, then a spacenews RSS feed.",
      "technology": "satellite"
    },
    {
      "id": "satnews",
      "name": "SatNews",
      "url": "https://satnews.com/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "ntn",
        "sat-direct-device",
        "leo-constellations"
      ],
      "notes": "Added 2026-05-30 during the Jan-2026 backfill. Major satellite-industry publication; broader and more technical NTN/standards coverage than the existing spacenews source (surfaced the Keysight+Samsung Rel-19 NR-NTN S-band validation that spacenews/web-search did not lead with). html/WebFetch tier works; complements spacenews (playwright).",
      "technology": "satellite"
    },
    {
      "id": "itu-ngso",
      "name": "ITU NGSO Regulation",
      "kind": "web-search",
      "category": "standards",
      "topics_hint": [
        "ngso-regulation"
      ],
      "technology": "satellite"
    },
    {
      "id": "fcc-satellite",
      "name": "FCC Satellite",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "ngso-regulation"
      ],
      "technology": "satellite"
    },
    {
      "id": "arxiv-api-ble",
      "name": "arxiv API — BLE papers",
      "url": "https://export.arxiv.org/api/query?search_query=all:bluetooth+AND+all:low+energy&sortBy=submittedDate&sortOrder=descending&max_results=10",
      "kind": "html",
      "category": "academia",
      "topics_hint": [
        "bt-le",
        "bt-channel-sounding"
      ],
      "notes": "Arxiv API returns XML; parse for BLE papers. Primary academic source when WebSearch unavailable.",
      "technology": "bluetooth"
    },
    {
      "id": "nordic-devzone",
      "name": "Nordic Semiconductor DevZone Blog",
      "url": "https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "bt-le",
        "bt-location",
        "bt-channel-sounding"
      ],
      "notes": "Nordic's official engineering blog. nRF54L15/54L20 coverage expected. URL updated 2026-08-14 (user-approved 11b): /blogs/ now 404s; /nordic/nordic-blog/b/blog is the canonical Discourse-style listing.",
      "technology": "bluetooth"
    },
    {
      "id": "bluetooth-sig-news",
      "name": "Bluetooth SIG News",
      "url": "https://www.bluetooth.com/news/",
      "kind": "browser",
      "category": "standards",
      "topics_hint": [
        "bt-le",
        "bt-channel-sounding",
        "bt-le-audio"
      ],
      "notes": "Official Bluetooth SIG press and specification announcements. Switched html->playwright 2026-05-26: WebFetch returns only a client-rendered JS shell ('It seems we can't find what you're looking for'); the news listing is JS-rendered. Use web-search query_hint as fallback when the browser plugin is unavailable.",
      "technology": "bluetooth"
    },
    {
      "id": "bluetooth-sig-specs-in-development",
      "name": "Bluetooth SIG — specifications in development",
      "url": "https://www.bluetooth.com/specifications/specifications-in-development/",
      "kind": "html",
      "category": "standards",
      "topics_hint": [
        "bt-le",
        "bt-le-audio",
        "bt-channel-sounding"
      ],
      "notes": "Added 2026-08-09 (user-approved 11a). Roadmap-grade page listing active SIG spec projects with status and target adoption windows — surfaced the IP Link (IPv6-over-BLE) project with a concrete fall-2026 adoption target that no press release carried; also tracks HDT and Higher Frequency Bands (5/6 GHz BLE). MONTHLY cadence, not daily: the page changes on project-milestone timescales. Check on the first meta-run of each month; off-month zero yield is EXPECTED and does not bump consecutive_failures. Plain WebFetch works (unlike the JS-gated /news/ page).",
      "technology": "bluetooth"
    },
    {
      "id": "arxiv-ble",
      "name": "arxiv search listing — Bluetooth (all categories, newest first)",
      "url": "https://arxiv.org/search/?query=bluetooth&searchtype=all&order=-announced_date_first&size=25",
      "kind": "html",
      "category": "academia",
      "topics_hint": [
        "bt-le"
      ],
      "notes": "Changed 2026-08-15 (Step 11, user-approved) from a site:arxiv.org WebSearch (cf 3, KRACK-era noise) to one WebFetch of the dated arxiv search listing, which fetched cleanly on 08-15 and gives a recency list in one call. Reset consecutive_failures on the next run.",
      "technology": "bluetooth"
    },
    {
      "id": "arxiv-bt-sensing",
      "name": "arxiv — Bluetooth Sensing/Location",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "bt-channel-sounding",
        "bt-location"
      ],
      "technology": "bluetooth"
    },
    {
      "id": "arxiv-bt-security",
      "name": "arxiv — Bluetooth Security",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "bt-security"
      ],
      "notes": "2026-05-28: hit cf=3 (auto-skip) but KEPT ENABLED on rare/high-impact grounds. BT-security papers are infrequent; the fresh CS-attack hit (2605.10632) came via arxiv-api-ble (the workhorse). This query is now mostly redundant with that workhorse, but a conference-track BT CVE may still surface here first. Reset cf next time it produces.",
      "technology": "bluetooth"
    },
    {
      "id": "arxiv-bt-audio",
      "name": "arxiv — Bluetooth Audio",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "bt-le-audio"
      ],
      "technology": "bluetooth"
    },
    {
      "id": "bluetooth-sig",
      "name": "Bluetooth SIG Specifications",
      "kind": "web-search",
      "category": "standards",
      "topics_hint": [
        "bt-le",
        "bt-channel-sounding"
      ],
      "technology": "bluetooth"
    },
    {
      "id": "nordic-blog",
      "name": "Nordic Semiconductor Blog",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "bt-le",
        "bt-location"
      ],
      "technology": "bluetooth"
    },
    {
      "id": "ti-bluetooth",
      "name": "TI Bluetooth",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "bt-le"
      ],
      "technology": "bluetooth"
    },
    {
      "id": "siliconlabs-bt",
      "name": "Silicon Labs Bluetooth",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "bt-le",
        "bt-mesh"
      ],
      "technology": "bluetooth"
    },
    {
      "id": "bluetooth-news",
      "name": "Bluetooth Industry News",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "bt-le-audio",
        "bt-le"
      ],
      "notes": "2026-07-26 (user-approved 11b): cf reset 4 -> 0, kept enabled — quiet, not broken. The query keeps re-surfacing the Feb/Mar-2026 SIG blog posts (Auracast market outlook, 2025 year-in-review) because SIG's own publishing cadence is quarterly-ish; that is source rhythm, not source failure. Bluetooth's real discovery channel in this pipeline has become the arxiv security/sensing queries (see the 2026-07-26 Snatcher CCS'26 hit). Re-evaluate around the next Core-spec or Auracast certification milestone.",
      "technology": "bluetooth"
    },
    {
      "id": "arxiv-bt-mesh",
      "name": "arxiv — Bluetooth Mesh",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "bt-mesh"
      ],
      "technology": "bluetooth"
    },
    {
      "id": "novelbits",
      "name": "Novel Bits — BLE technical blog",
      "url": "https://novelbits.io/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "bt-le",
        "bt-channel-sounding",
        "bt-le-audio"
      ],
      "notes": "Added 2026-05-30 during the Jan-2026 backfill. Independent deep-dive BLE engineering blog; consistently the clearest technical explainers on Channel Sounding (nRF54L15 applications), LE Audio/Auracast profile stacks, and BLE security. Higher analytical depth than vendor PR. Surfaced repeatedly across the bluetooth backfill sweep.",
      "technology": "bluetooth"
    },
    {
      "id": "audioxpress",
      "name": "audioXpress — Bluetooth audio / SIG releases",
      "url": "https://audioxpress.com/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "bt-le-audio"
      ],
      "notes": "Added 2026-05-30 during the Jan-2026 backfill. Pro-audio trade publication; authoritative, prompt coverage of Bluetooth SIG Core-spec releases (6.2, 6.3) and the LE Audio / Auracast roadmap with engineering detail. Complements bluetooth-sig-news (which is Playwright-gated).",
      "technology": "bluetooth"
    },
    {
      "id": "arxiv-api-uwb",
      "name": "arxiv API — UWB papers",
      "url": "https://export.arxiv.org/api/query?search_query=all:ultra-wideband+OR+all:802.15.4z+OR+all:FiRa&sortBy=submittedDate&sortOrder=descending&max_results=10",
      "kind": "html",
      "category": "academia",
      "topics_hint": [
        "uwb-ranging",
        "uwb-radar",
        "uwb-security"
      ],
      "notes": "Arxiv API XML. Primary academic source for UWB when WebSearch unavailable.",
      "technology": "uwb"
    },
    {
      "id": "fira-news",
      "name": "FiRa Consortium News",
      "url": "https://www.firaconsortium.org/news",
      "kind": "html",
      "category": "standards",
      "topics_hint": [
        "uwb-fi-ra",
        "uwb-ranging"
      ],
      "notes": "Official FiRa Consortium news — UWB application-layer standards and certification.",
      "technology": "uwb"
    },
    {
      "id": "fira-plugfest-coverage",
      "name": "FiRa Plugfest / interop event coverage (seasonal)",
      "url": "",
      "kind": "web-search",
      "category": "standards",
      "topics_hint": [
        "uwb-fi-ra",
        "uwb-ranging"
      ],
      "notes": "\"Added 2026-07-26 (user-approved 11a/11b). Seasonal query mirroring the WiFi scout's ces/mwc/computex-coverage pattern: UWB's yield is event-driven, and between events the standing sources read as dry (arxiv-uwb, fira-news, ieee-802-15-4z all at or near auto-skip on 2026-07-26 with zero fresh items). Plugfests are where 802.15.4ab interop and MMS/NBA feature claims first get independently tested, which is exactly the substance the vendor press releases omit. NEXT: Plugfest",
      "technology": "uwb"
    },
    {
      "id": "qorvo-uwb-press",
      "name": "Qorvo UWB Press Releases",
      "url": "https://www.qorvo.com/newsroom/press-releases",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "uwb-ranging",
        "uwb-fi-ra"
      ],
      "notes": "Qorvo (acquired Decawave) is a leading UWB chipset vendor.",
      "technology": "uwb"
    },
    {
      "id": "arxiv-uwb",
      "name": "arxiv search listing — UWB (all categories, newest first)",
      "url": "https://arxiv.org/search/?query=UWB&searchtype=all&order=-announced_date_first&size=25",
      "kind": "html",
      "category": "academia",
      "topics_hint": [
        "uwb-ranging",
        "uwb-radar"
      ],
      "notes": "Changed 2026-08-15 (Step 11, user-approved) from a site:arxiv.org WebSearch to one WebFetch of the dated arxiv search listing: 2026 UWB papers land in cs.RO / cs.LG / eess.SP, not cs.NI, and three ingest-worthy items (2607.05449, 2607.15807) had sat unseen 4-6 weeks. Skip ids already in dedup_index; the listing is dated so the postprint guard is one glance.",
      "technology": "uwb"
    },
    {
      "id": "arxiv-uwb-security",
      "name": "arxiv — UWB Security",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "uwb-security"
      ],
      "notes": "2026-05-28: hit cf=3 (auto-skip) but KEPT ENABLED on rare/high-impact grounds. UWB-security papers are rare but consequential when they land (PR-RTT, Ghost Peak). Reset cf next time it produces.",
      "technology": "uwb"
    },
    {
      "id": "ieee-802-15-4z",
      "name": "IEEE 802.15.4z UWB Standard",
      "kind": "web-search",
      "category": "standards",
      "topics_hint": [
        "uwb-ranging"
      ],
      "technology": "uwb"
    },
    {
      "id": "fira-consortium",
      "name": "FiRa Consortium",
      "kind": "web-search",
      "category": "standards",
      "topics_hint": [
        "uwb-fi-ra"
      ],
      "technology": "uwb"
    },
    {
      "id": "qorvo-uwb",
      "name": "Qorvo UWB",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "uwb-ranging",
        "uwb-fi-ra"
      ],
      "technology": "uwb"
    },
    {
      "id": "nxp-uwb",
      "name": "NXP UWB",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "uwb-ranging",
        "uwb-fi-ra"
      ],
      "technology": "uwb"
    },
    {
      "id": "stmicro-uwb",
      "name": "STMicroelectronics UWB",
      "url": "https://newsroom.st.com/all-news",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "uwb-ranging",
        "uwb-radar",
        "uwb-fi-ra"
      ],
      "notes": "Added 2026-05-25. ST is a first-mover on IEEE 802.15.4ab silicon (ST64UWB, the first 4ab SoC with narrowband-assist + multi-millisecond ranging, launched Embedded World 2026). Newsroom is newsroom.st.com/all-news (per-item pages at /media-center/press-item.html). Watch for 4ab part numbers, sampling timelines, and automotive digital-key design wins. Use web-search query_hint as fallback if the newsroom listing is JS-gated.",
      "technology": "uwb"
    },
    {
      "id": "ee-news-europe-uwb",
      "name": "EE News Europe UWB",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "uwb-ranging",
        "uwb-security",
        "uwb-fi-ra"
      ],
      "notes": "Added 2026-06-27 after yielding the Infineon AIROC TSL100 automotive-safety UWB chip entry. Watch for European semiconductor/product coverage around ASIL-rated UWB, wireless battery management, secure ranging, and automotive digital-key design wins.",
      "technology": "uwb"
    },
    {
      "id": "apple-uwb",
      "name": "Apple UWB",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "uwb-ranging"
      ],
      "technology": "uwb"
    },
    {
      "id": "arxiv-uwb-radar",
      "name": "arxiv — UWB Radar",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "uwb-radar"
      ],
      "technology": "uwb"
    },
    {
      "id": "samsung-uwb",
      "name": "Samsung UWB",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "uwb-ranging"
      ],
      "technology": "uwb"
    },
    {
      "id": "sparklink-alliance-home",
      "name": "星闪联盟官网 (SparkLink Alliance)",
      "url": "https://www.sparklink.org.cn/",
      "kind": "browser",
      "category": "standards",
      "topics_hint": [
        "nearlink-slb",
        "nearlink-sle"
      ],
      "notes": "Official SparkLink Alliance website. Chinese-language; primary standards source.",
      "technology": "nearlink"
    },
    {
      "id": "huawei-nearlink-news",
      "name": "Huawei NearLink News",
      "url": "https://consumer.huawei.com/cn/press/",
      "kind": "browser",
      "category": "industry",
      "topics_hint": [
        "nearlink-slb",
        "nearlink-automotive"
      ],
      "notes": "Huawei is the primary driver of NearLink. Press page for product announcements (Kirin 星闪, digital car key, etc.). JS-rendered.",
      "technology": "nearlink"
    },
    {
      "id": "huawei-nearlink",
      "name": "Huawei NearLink",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "nearlink-slb",
        "nearlink-automotive"
      ],
      "technology": "nearlink"
    },
    {
      "id": "sparklink-alliance",
      "name": "星闪联盟 (SparkLink Alliance)",
      "kind": "web-search",
      "category": "standards",
      "topics_hint": [
        "nearlink-slb",
        "nearlink-sle"
      ],
      "technology": "nearlink"
    },
    {
      "id": "nearlink-automotive",
      "name": "NearLink Automotive",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "nearlink-automotive"
      ],
      "notes": "2026-05-28: hit cf=3 (auto-skip) but KEPT ENABLED on lower cadence. Car-key content is fully captured by the 2026-05-24 entry; post-rollout lull. Next genuine milestone expected when wireless BMS (无线电池管理) or a new vehicle brand launches a SparkLink key. Reset cf when that lands.",
      "technology": "nearlink"
    },
    {
      "id": "nearlink-coexistence",
      "name": "NearLink Coexistence",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "nearlink-coexistence"
      ],
      "technology": "nearlink"
    },
    {
      "id": "huawei-kirin",
      "name": "Huawei Kirin NearLink",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "nearlink-slb"
      ],
      "technology": "nearlink"
    },
    {
      "id": "cn-tech-nearlink",
      "name": "Chinese Tech News — NearLink",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [
        "nearlink-sle",
        "nearlink-automotive"
      ],
      "technology": "nearlink"
    }
  ]
};
