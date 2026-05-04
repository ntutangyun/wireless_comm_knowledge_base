window.SOURCES_DATA = {
  "version": 1,
  "last_updated": "2026-05-04",
  "sources": [
    {
      "id": "arxiv-cs-ni",
      "name": "arxiv.org cs.NI listings",
      "url": "https://arxiv.org/list/cs.NI/current",
      "kind": "html",
      "category": "academia",
      "topics_hint": [],
      "notes": "Networking & Internet Architecture. Highest-yield single source for new WiFi research papers. Listing pages render server-side; HTML scraping works."
    },
    {
      "id": "arxiv-search-wifi-mac",
      "name": "arxiv.org search — WiFi MAC layer",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "MAC-layer"
      ],
      "notes": "Catches papers using non-canonical filenames or arxiv categories beyond cs.NI."
    },
    {
      "id": "arxiv-search-wifi-mlo",
      "name": "arxiv.org search — 802.11 MLO",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "802.11be",
        "MLO"
      ],
      "notes": ""
    },
    {
      "id": "arxiv-search-wifi-sensing",
      "name": "arxiv.org search — Wi-Fi sensing / CSI",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "802.11bf",
        "WiFi-sensing"
      ],
      "notes": "Catches MilaGro-style multiband + IBIS-style CSI fusion work."
    },
    {
      "id": "arxiv-search-mapc",
      "name": "arxiv.org search — MAPC / coordinated spatial reuse",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "802.11bn",
        "MAPC"
      ],
      "notes": ""
    },
    {
      "id": "arxiv-search-llm-wireless",
      "name": "arxiv.org search — LLM agent for wireless",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "agentic-AI"
      ],
      "notes": "Tracks the agentic-Wi-Fi research line — MAPC-LLM, on-device LLM roaming, etc."
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
      "notes": "Lower cadence — security papers in this space are infrequent but high-impact."
    },
    {
      "id": "arxiv-search-ftm",
      "name": "arxiv.org search — 802.11az/bk FTM ranging",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [
        "802.11az"
      ],
      "notes": ""
    },
    {
      "id": "ieee-xplore-search",
      "name": "IEEE Xplore — recent 802.11 papers",
      "url": "https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=802.11&searchWithin=publishedYear&searchWithin=",
      "kind": "playwright",
      "category": "academia",
      "topics_hint": [],
      "notes": "JS-rendered; needs Playwright. Higher-quality (peer-reviewed) than arxiv but lower volume."
    },
    {
      "id": "sigcomm-papers",
      "name": "SIGCOMM accepted papers (current year)",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [],
      "notes": "Conference is annual — usually August. Check around accept-notification time."
    },
    {
      "id": "mobicom-papers",
      "name": "MobiCom accepted papers (current year)",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [],
      "notes": "Annual; usually November."
    },
    {
      "id": "nsdi-papers",
      "name": "USENIX NSDI accepted papers (current year)",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [],
      "notes": ""
    },
    {
      "id": "infocom-papers",
      "name": "IEEE INFOCOM accepted papers (current year)",
      "url": "",
      "kind": "web-search",
      "category": "academia",
      "topics_hint": [],
      "notes": ""
    },
    {
      "id": "ieee-802-11-wg",
      "name": "IEEE 802.11 working group public reports",
      "url": "https://www.ieee802.org/11/Reports/",
      "kind": "html",
      "category": "standards",
      "topics_hint": [],
      "notes": "Official WG status pages. Watch for new TGxx_update.htm files."
    },
    {
      "id": "ieee-mentor",
      "name": "IEEE 802.11 Mentor (proposals & contributions)",
      "url": "https://mentor.ieee.org/802.11/documents",
      "kind": "playwright",
      "category": "standards",
      "topics_hint": [],
      "notes": "JS-rendered list; auth not required for public docs. New contribution numbers (11-26-NNNN-…) appear here first."
    },
    {
      "id": "ofinno-standards-readout",
      "name": "Ofinno — The Standards Readout",
      "url": "https://ofinno.com/the-standards-readout-2/",
      "kind": "playwright",
      "category": "standards",
      "topics_hint": [],
      "notes": "Excellent post-plenary / post-interim summaries. Cadence aligned with IEEE 802.11 sessions (Jan / Mar / May / Jul / Sep / Nov). Switched to playwright 2026-05-04 after WebFetch returned transient 404s."
    },
    {
      "id": "iso-iec-jtc1-search",
      "name": "ISO/IEC JTC1 SC6 search (rare but cited)",
      "url": "",
      "kind": "web-search",
      "category": "standards",
      "topics_hint": [],
      "notes": ""
    },
    {
      "id": "wfa-news",
      "name": "Wi-Fi Alliance press releases",
      "url": "https://www.wi-fi.org/news-events/press-releases",
      "kind": "playwright",
      "category": "standards",
      "topics_hint": [],
      "notes": "Certification announcements (e.g. Wi-Fi CERTIFIED 7 20 MHz IoT cert in Jan 2026). URL fixed and switched to playwright 2026-05-04 (the /newsroom path now 404s)."
    },
    {
      "id": "wba-press",
      "name": "Wireless Broadband Alliance newsroom",
      "url": "https://wballiance.com/newsroom/",
      "kind": "html",
      "category": "standards",
      "topics_hint": [],
      "notes": "Industry-alliance announcements; deployment milestones, interoperability trials. URL updated 2026-05-04 (the /press-releases path now 404s; /newsroom is the canonical landing page; /category/wba-releases/ also works as a per-category archive)."
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
      "notes": "JS-rendered SPA; Playwright required (the scout already learned this on the FastConnect 8800 entry)."
    },
    {
      "id": "broadcom-press",
      "name": "Broadcom press releases",
      "url": "https://investors.broadcom.com/news-releases",
      "kind": "playwright",
      "category": "industry",
      "topics_hint": [
        "802.11bn",
        "products"
      ],
      "notes": ""
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
      "notes": ""
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
      "notes": "Intel's connectivity announcements show up here (Wi-Fi 7 platforms, sensing demos)."
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
      "notes": "Watch for Wi-Fi 7 / Wi-Fi 8 IoT MCU announcements (the 20 MHz cert market). URL fixed and switched to playwright 2026-05-04 (the /News path now 403s; /Nordic-news is the canonical path, JS-rendered)."
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
      "notes": "URL updated 2026-05-04 (the /en/news path now 404s)."
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
      "notes": "Catalyst / Meraki Wi-Fi 7 + AgenticOps announcements. URL updated 2026-05-04 (the /c/r/newsroom/en/us/index.html legacy path now 403s)."
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
      "notes": "Post-Juniper acquisition: track Aruba Central + Mist convergence. URL updated 2026-05-04 — the legacy arubanetworks.com/company/about-us/newsroom/news-releases/ path 403s; HPE press-hub is now the canonical Aruba release channel."
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
      "notes": ""
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
      "notes": "URL fixed and switched to playwright 2026-05-04 (the /news path 404s; /company/newsroom is JS-rendered)."
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
      "notes": "Renamed and re-pointed 2026-05-04 — the parent commscope.com/press-releases/ path 404s; Ruckus is the Wi-Fi-relevant arm with its own active newsroom (Wi-Fi 7 stadium deployments, Nokia OLAN combo, etc.)."
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
      "notes": "Consumer Wi-Fi 7 / Wi-Fi 8 router launches — useful for tracking when a chipset hits retail."
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
      "notes": "URL updated 2026-05-04 (the /about/press/ path 404s; /hub/pressroom/ is the current home)."
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
      "notes": ""
    },
    {
      "id": "wifi-now-global",
      "name": "Wi-Fi NOW Global",
      "url": "https://wifinowglobal.com/news-blog/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [],
      "notes": "Industry-focused publication; covers MWC / CES / IEEE plenary readouts."
    },
    {
      "id": "rcr-wireless",
      "name": "RCR Wireless News",
      "url": "https://www.rcrwireless.com/category/network-infrastructure/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [],
      "notes": ""
    },
    {
      "id": "light-reading",
      "name": "Light Reading",
      "url": "https://www.lightreading.com/",
      "kind": "playwright",
      "category": "industry",
      "topics_hint": [],
      "notes": "Carrier-side analysis; relevant for VoWiFi, FWA, ePDG topics."
    },
    {
      "id": "techtarget-networking",
      "name": "TechTarget Search Networking",
      "url": "https://www.techtarget.com/searchnetworking/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [],
      "notes": ""
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
      "notes": "Consumer-router reviews; sometimes catches early CES product announcements."
    },
    {
      "id": "networkworld-wireless",
      "name": "Network World — networking & wireless",
      "url": "https://www.networkworld.com/networking",
      "kind": "html",
      "category": "industry",
      "topics_hint": [],
      "notes": "Added 2026-05-04. Major enterprise-networking publication; surfaced multiple Wi-Fi 7 / WiFi 8 / RSPG analysis pieces during the 2026-05-04 scan that the existing carrier-side outlets (Light Reading, RCR) didn't cover. Wi-Fi 8 explainer and Extreme/Wi-Fi 7 momentum both came from here."
    },
    {
      "id": "siliconangle-networking",
      "name": "SiliconANGLE — networking",
      "url": "https://siliconangle.com/category/networking/",
      "kind": "playwright",
      "category": "industry",
      "topics_hint": [],
      "notes": "Added 2026-05-04. Strong enterprise + agentic-networking coverage; surfaced HPE Discover Aruba/Mist convergence and the agentic-AI-at-edge piece (2026-04-10) during the 2026-05-04 scan. Playwright (the category landing page is JS-heavy)."
    },
    {
      "id": "the-mobile-network",
      "name": "The Mobile Network",
      "url": "https://the-mobile-network.com/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [],
      "notes": "Added 2026-05-04. UK-based publication tracking 5G/6G + Wi-Fi convergence; surfaced the Huawei Agentic MBB at MWC Barcelona 2026 piece. Useful for stories the existing carrier outlets miss."
    },
    {
      "id": "nand-research",
      "name": "NAND Research — analyst publication",
      "url": "https://nand-research.com/",
      "kind": "html",
      "category": "industry",
      "topics_hint": [],
      "notes": "Added 2026-05-04. Independent analyst publication; broad-infrastructure focus (cloud / AI / storage) but produces deep technical Wi-Fi pieces e.g. the Qualcomm Dragonwing Wi-Fi 8 architecture analysis. Lower cadence than vendor newsrooms but higher analytical depth."
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
      "notes": "Added 2026-05-04. ASUS's own technical blog — generally yields more usable content than press.asus.com (which 403s on WebFetch). Source for the ROG NeoCore Wi-Fi 8 throughput-test report at CES 2026. Playwright (Adobe Edge / SPA shell)."
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
      "notes": "Added 2026-05-04. Asia-side chipset competitive intelligence (MediaTek / Qualcomm / Broadcom Wi-Fi market dynamics). Surfaced the 2026-04-10 MediaTek end-to-end challenger piece during the 2026-05-04 scan."
    },
    {
      "id": "twitter-wifi-experts",
      "name": "Twitter — WiFi research experts (search)",
      "url": "",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [],
      "notes": "Twitter scraping is unreliable; web-search captures the few tweets that get indexed."
    },
    {
      "id": "linkedin-wifi-news",
      "name": "LinkedIn — WiFi industry posts (search)",
      "url": "",
      "kind": "web-search",
      "category": "industry",
      "topics_hint": [],
      "notes": "Auth-walled; we rely on Google's index of public posts."
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
      "notes": "Run Jan 5–10 every year. Bumped to daily during CES week."
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
      "notes": "Run Feb 28 – Mar 4 every year. Bumped to daily during MWC week."
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
      "notes": ""
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
      "notes": ""
    }
  ]
};
