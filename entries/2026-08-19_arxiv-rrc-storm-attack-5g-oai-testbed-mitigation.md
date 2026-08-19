---
id: 2026-08-19_arxiv-rrc-storm-attack-5g-oai-testbed-mitigation
date_published: 2026-08-17
date_found: 2026-08-19
type: academic-paper
technology: cellular
title_en: "Experimental Validation and Mitigation of RRC Storm Attacks in 5G Cellular Networks"
title_zh: "5G 蜂窝网络 RRC 风暴攻击的实验验证与缓解：OAI 真机测试床上的半开连接检测与释放"
url: "https://arxiv.org/abs/2608.16441"
source_quality: full
topics: [RRC-storm, signaling-storm, RACH, half-open-connections, gNB, OpenAirInterface, USRP-B210, timing-advance, DoS, open-source]
topic_primary: cellular-security
topics_secondary: [5g-nr, open-ran]
novelty_score: 3
---

## Summary (EN)
Abou Hasna and El Falou (CEMSE Division, KAUST; arXiv 17 Aug 2026, CC BY 4.0, no venue stated) move the 5G **RRC signalling-storm** attack from emulation-only studies to a real over-the-air testbed and then close the loop with a gNB-side mitigation. The exploited weakness sits in the initial-access phase: the gNB must allocate a UE context and radio resources after Msg1–Msg4 of the random-access / RRC-setup exchange, *before* the user is authenticated. A malicious UE that repeatedly runs RACH through Msg4 (RRCSetup) but never sends **Msg5 (RRCSetupComplete)** leaves a trail of **half-open connections** that occupy g