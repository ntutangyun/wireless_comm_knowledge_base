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
      "notes": "Networking & Internet Architecture. Highest-yield single source for new WiFi research papers. Listing pages render server-side; HTML scraping works.",
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
      "kind": "playwright",
      "category": "academia",
      "topics_hint": [],
      "notes": "JS-rendered; needs Playwright. Higher-quality (peer-reviewed) than arxiv but lower volume.",
      "technology": "wifi"
    },
    {
      "id": "sigcomm-papers",
      "name": "SIGCOMM accepted papers (current year)",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [],
      "notes": "Conference is annual — usually August. Check around accept-notification time.",
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
      "notes": "Official WG status pages. Watch for new TGxx_update.htm files.",
      "technology": "wifi"
    },
    {
      "id": "ieee-mentor",
      "name": "IEEE 802.11 Mentor (proposals & contributions)",
      "url": "https://mentor.ieee.org/802.11/documents?is_year=2026",
      "kind": "playwright",
      "category": "standards",
      "topics_hint": [],
      "notes": "JS-rendered list filtered to current year (is_year=YYYY). New contribution numbers (11-YY-NNNN-…) appear here first. Per-doc .docx is 418/403 to anonymous downloaders, so we never fetch the body — Step 4a clusters new rows by Group (TGbn / TGbp / TGbi / TGbq / TGbr / TGbt / TGm / WNG SC) into per-group daily digests. State key: state.sources.ieee-mentor.last_dcn_seen — the highest DCN ingested last run; rows whose DCN is greater are new.",
      "technology": "wifi"
    },
    {
      "id": "ofinno-standards-readout",
      "name": "Ofinno — The Standards Readout",
      "url": "https://ofinno.com/standards-readout/",
      "kind": "playwright",
      "category": "standards",
      "topics_hint": [],
      "notes": "Excellent post-plenary / post-interim summaries. Cadence aligned with IEEE 802.11 sessions (Jan / Mar / May / Jul / Sep / Nov). 2026-05-28: URL updated — /the-standards-readout-2/ landing now 404s; articles live under /standards-readout/<slug>/.",
      "technology": "wifi"
    },
    {
      "id": "standards-get-program",
      "name": "IEEE 802 GET program — newly free 802.11 standards",
      "url": "https://ieeexplore.ieee.org/browse/standards/get-program/page/series?id=93",
      "kind": "playwright",
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
      "url": "https://www.wi-fi.org/news-events/press-releases",
      "kind": "playwright",
      "category": "standards",
      "topics_hint": [],
      "notes": "Certification announcements (e.g. Wi-Fi CERTIFIED 7 20 MHz IoT cert in Jan 2026). URL fixed and switched to playwright 2026-05-04 (the /newsroom path now 404s).",
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
      "kind": "playwright",
      "category": "industry",
      "topics_hint": [
        "802.11bn",
        "products"
      ],
      "notes": "JS-rendered SPA; Playwright required (the scout already learned this on the FastConnect 8800 entry).",
      "technology": "wifi"
    },
    {
      "id": "broadcom-press",
      "name": "Broadcom press releases",
      "url": "https://news.broadcom.com/releases",
      "kind": "playwright",
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
      "kind": "playwright",
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
      "kind": "playwright",
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
      "kind": "playwright",
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
      "notes": "URL updated 2026-05-04 (the /en/news path now 404s).",
      "technology": "wifi"
    },
    {
      "id": "cisco-press",
      "name": "Cisco press releases",
      "url": "https://newsroom.cisco.com/pressreleases",
      "kind": "playwright",
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
      "kind": "playwright",
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
      "kind": "playwright",
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
      "kind": "playwright",
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
      "kind": "playwright",
      "category": "industry",
      "topics_hint": [],
      "notes": "Industry-focused publication; covers MWC / CES / IEEE plenary readouts. Flipped kind: html -> playwright 2026-05-28 — WebFetch reliably 403s this domain; the only path that works is Playwright. Top WiFi-news performer in the rotation (Qualcomm/Synaptics/Intel/MediaTek WWC, FCC 6 GHz, UK/EU 6 GHz).",
      "technology": "wifi"
    },
    {
      "id": "rcr-wireless",
      "name": "RCR Wireless News",
      "url": "https://www.rcrwireless.com/category/network-infrastructure/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [],
      "notes": "",
      "technology": "wifi"
    },
    {
      "id": "light-reading",
      "name": "Light Reading",
      "url": "https://www.lightreading.com/",
      "kind": "playwright",
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
      "id": "networkworld-wireless",
      "name": "Network World — networking & wireless",
      "url": "https://www.networkworld.com/networking",
      "kind": "html",
      "category": "industry",
      "topics_hint": [],
      "notes": "Added 2026-05-04. Major enterprise-networking publication; surfaced multiple Wi-Fi 7 / WiFi 8 / RSPG analysis pieces during the 2026-05-04 scan that the existing carrier-side outlets (Light Reading, RCR) didn't cover. Wi-Fi 8 explainer and Extreme/Wi-Fi 7 momentum both came from here. 2026-05-25: confirmed HEALTHY via WebFetch (fresh content incl. 'Wireless security is a battle of AI vs. AI' May 19) — the prior auto-skip was a Playwright-fallback connection timeout (tooling), not a dead URL. WebFetch html-tier works; reset failure counter. Prefer the html/WebFetch tier; only escalate to Playwright if WebFetch starts failing.",
      "technology": "wifi"
    },
    {
      "id": "siliconangle-networking",
      "name": "SiliconANGLE — networking",
      "url": "https://siliconangle.com/category/networking/",
      "kind": "playwright",
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
      "kind": "playwright",
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
      "id": "twitter-wifi-experts",
      "name": "Twitter — WiFi research experts (search)",
      "url": "",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [],
      "notes": "Twitter scraping is unreliable; web-search captures the few tweets that get indexed.",
      "technology": "wifi"
    },
    {
      "id": "linkedin-wifi-news",
      "name": "LinkedIn — WiFi industry posts (search)",
      "url": "",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [],
      "notes": "Auth-walled; we rely on Google's index of public posts.",
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
      "notes": "cs.NI listing filtered for LEO/NTN/satellite papers. Primary academic source.",
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
      "kind": "playwright",
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
      "url": "http://export.arxiv.org/api/query?search_query=all:bluetooth+AND+all:low+energy&sortBy=submittedDate&sortOrder=descending&max_results=10",
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
      "url": "https://devzone.nordicsemi.com/blogs/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [
        "bt-le",
        "bt-location",
        "bt-channel-sounding"
      ],
      "notes": "Nordic's official engineering blog. nRF54L15/54L20 coverage expected.",
      "technology": "bluetooth"
    },
    {
      "id": "bluetooth-sig-news",
      "name": "Bluetooth SIG News",
      "url": "https://www.bluetooth.com/news/",
      "kind": "playwright",
      "category": "standards",
      "topics_hint": [
        "bt-le",
        "bt-channel-sounding",
        "bt-le-audio"
      ],
      "notes": "Official Bluetooth SIG press and specification announcements. Switched html->playwright 2026-05-26: WebFetch returns only a client-rendered JS shell ('It seems we can't find what you're looking for'); the news listing is JS-rendered. Use web-search query_hint as fallback when Playwright is unavailable.",
      "technology": "bluetooth"
    },
    {
      "id": "arxiv-ble",
      "name": "arxiv — Bluetooth BLE",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "bt-le"
      ],
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
      "id": "arxiv-api-uwb",
      "name": "arxiv API — UWB papers",
      "url": "http://export.arxiv.org/api/query?search_query=all:ultra-wideband+OR+all:802.15.4z+OR+all:FiRa&sortBy=submittedDate&sortOrder=descending&max_results=10",
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
      "name": "arxiv — UWB Ranging/Sensing",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "uwb-ranging",
        "uwb-radar"
      ],
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
      "kind": "playwright",
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
      "kind": "playwright",
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
