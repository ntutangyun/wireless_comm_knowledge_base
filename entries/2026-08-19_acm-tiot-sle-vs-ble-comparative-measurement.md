---
id: 2026-08-19_acm-tiot-sle-vs-ble-comparative-measurement
date_published: 2026-01-29
date_found: 2026-08-19
type: academic-paper
technology: nearlink
title_en: "First independent measurement study of SparkLink Low Energy vs Bluetooth (HKUST + Huawei, ACM TIoT): 4x data rate, 3.84x lower latency, 10 dB better sensitivity at the access layer, plus end-to-end QoS validation in three applications"
title_zh: "首个 SparkLink 低功耗（SLE）对比蓝牙的独立实测研究（港科大 + 华为，ACM TIoT）：接入层速率 4 倍、时延降低 3.84 倍、灵敏度提升 10 dB，并在三类应用中做端到端 QoS 验证"
url: "https://dl.acm.org/doi/10.1145/3776559"
source_quality: abstract_only
topics: [NearLink, SLE, Bluetooth, BLE, measurement-study, benchmarking, latency, sensitivity, QoS, ACM-TIoT, MobiCom]
topic_primary: nearlink-sle
topics_secondary: [nearlink-coexistence]
novelty_score: 3
---

## Summary (EN)

"Unveiling SparkLink Low Energy: A Comparative Measurement Study" (Boya Liu and Zhenyu Ren, co-first authors, Yanbo Zhang, Mo Li — Hong Kong University of Science and Technology; Jiaxin Liang, Bin He, Jie Li, Hao Wu, Jingbin Zhou — Huawei Technologies, Shenzhen) is, per its own framing, the first comprehensive real-world comparison between SparkLink Low Energy (SLE, the NearLink low-power mode) and traditional Bluetooth. It appeared in ACM Transactions on Internet of Things vol. 7 no. 1 (accepted/online 2025-11-11, published online 2026-01-29, print issue 2026-02-28, DOI 10.1145/3776559, CC-BY open access), and was presented in the MobiCom 2025 journal track. The authors' motivation is that SLE "promises fundamental improvements over traditional Bluetooth" but until now the claims were vendor-stated rather than independently measured.

The study contributes an evaluation framework with two tiers. The first is access-layer benchmarking, where SLE and Bluetooth are put through the same link-level tests: the reported headline results are a 4x increase in data rate, a 3.84x reduction in latency, and a 10 dB improvement in receiver sensitivity for SLE. The second tier is end-to-end application validation: the authors build an end-to-end evaluation system and exercise it across three practical application scenarios, comparing the measured behaviour against each application's QoS requirements rather than against raw link metrics. From the experiments and a parameter analysis they propose a design for QoS-centred optimisation of SLE, and conclude that the results "underscore SLE's fundamental advancements over Bluetooth" while offering guidance for further protocol tuning. Full-text details (test hardware, Bluetooth versions and PHY modes used as baseline, the three application scenarios, and the optimisation design) sit behind the ACM Digital Library's bot wall and were not retrievable for this entry; the summary here rests on the abstract, the Crossref record and the HKUST project page.

## Summary (ZH)

《Unveiling SparkLink Low Energy: A Comparative Measurement Study》（Boya Liu、Zhenyu Ren 并列一作，张延博 Yanbo Zhang、李默 Mo Li——香港科技大学；Jiaxin Liang、Bin He、Jie Li、Hao Wu、Jingbin Zhou——华为技术有限公司，深圳）按其自述，是首个 SparkLink 低功耗（SLE，即星闪低功耗模式）与传统蓝牙的全面真实环境对比研究。论文发表于 ACM Transactions on Internet of Things 第 7 卷第 1 期（2025-11-11 录用/上线，2026-01-29 在线出版，2026-02-28 印刷刊期，DOI 10.1145/3776559，CC-BY 开放获取），并在 MobiCom 2025 期刊论文环节做了报告。作者的出发点是：SLE"承诺相对传统蓝牙的根本性提升"，但此前这些主张来自厂商而非独立测量。

研究贡献是一个双层评估框架。第一层是接入层基准测试：SLE 与蓝牙在同样的链路级测试中对比，报告的核心结果为 SLE 数据速率提升 4 倍、时延降低 3.84 倍、接收灵敏度改善 10 dB。第二层是端到端应用验证：作者搭建端到端评估系统，在三种实际应用场景中运行，并以各应用自身的 QoS 需求（而非原始链路指标）作为衡量标准。基于实验与参数分析，作者提出面向 QoS 的 SLE 优化设计，并总结这些结果"印证了 SLE 相对蓝牙的根本性进步"，同时为进一步协议调优提供依据。全文细节（测试硬件、作为基线的蓝牙版本与 PHY 模式、三种应用场景、优化设计）位于 ACM 数字图书馆的反爬墙之后，本条目未能获取；此处摘要依据论文摘要、Crossref 记录与港科大项目页面。

## Key technical points (EN)

- Scope: first comprehensive SLE-vs-Bluetooth measurement study; two-tier framework = access-layer benchmarking + end-to-end application validation.
- Access-layer headline numbers (SLE relative to Bluetooth): 4x data rate, 3.84x lower latency, +10 dB receiver sensitivity.
- Application tier: an end-to-end evaluation system exercised in three practical scenarios, judged against per-application QoS requirements.
- Output: a QoS-centred optimisation design for SLE derived from experiments and parameter analysis.
- Authorship: HKUST (Mo Li's group) with Huawei Shenzhen co-authors — academically led but with vendor participation, so "independent" should be read as "university-run measurements", not "vendor-free".
- Venue and dates: ACM TIoT 7(1), pp. 1-24; accepted 2025-11-11, online 2026-01-29, print 2026-02-28; MobiCom 2025 journal-track presentation; CC-BY.
- Full text not retrieved (ACM DL 403 to automated fetch); source_quality is abstract_only.

## Key technical points (ZH)

- 范围：首个全面的 SLE 对比蓝牙实测研究；双层框架 = 接入层基准测试 + 端到端应用验证。
- 接入层核心数字（SLE 相对蓝牙）：速率 4 倍、时延降低 3.84 倍、接收灵敏度 +10 dB。
- 应用层：端到端评估系统在三种实际场景中运行，以各应用自身 QoS 需求为判据。
- 产出：由实验与参数分析导出的面向 QoS 的 SLE 优化设计。
- 作者构成：港科大（李默团队）联合华为深圳——学术主导但有厂商参与，"独立"应理解为"高校主持的测量"，而非"完全无厂商"。
- 发表信息：ACM TIoT 7(1)，第 1-24 页；2025-11-11 录用，2026-01-29 在线，2026-02-28 印刷；MobiCom 2025 期刊论文环节报告；CC-BY。
- 未获取全文（ACM DL 对自动抓取返回 403）；source_quality 为 abstract_only。

## Why it matters / what's new (EN)

Until now this KB's NearLink coverage has been standards (GB/T 46803 SLE, see 2026-05-28_sparklink-gbt-46803-national-standards and 2026-06-05_nearlink-sle-gbt-46803-national-standard), ecosystem/market pieces (2026-05-21_sparklink-ecosystem-2026-overview, 2026-08-09_eetasia-nearlink-market-phase-analysis) and vendor product claims; every "6x rate / 1/30 latency / 60% lower power" figure in it traces back to Huawei or alliance marketing. This paper is the first peer-reviewed, university-run measurement of SLE against Bluetooth in this KB — and its numbers (4x rate, 3.84x latency, 10 dB sensitivity) are noticeably more modest than the marketing multiples, which is itself the useful signal: the vendor headline multiples are most plausibly best-case SLE parameters against a conservative Bluetooth baseline, whereas a university-run access-layer benchmark lands at roughly 4x (the exact Bluetooth configuration used as baseline is in the full text, not the abstract). The application-tier framing (validate against each application's QoS need, not against link metrics) is the methodologically new part and gives the community a reusable template for the coexistence and application studies that this KB's nearlink-coexistence bin has been waiting for. Ingest note: the paper went online 2026-01-29 and was presented at MobiCom 2025 in November — a seven-month lag to this KB, because NearLink has no arxiv footprint and the ACM DL is closed to automated crawls; it is within the 12-month freshness window, so it is entered as regular research rather than backfill. Watch items: the CC-BY full text (for testbed hardware, Bluetooth baseline versions, the three scenarios and the optimisation design), any follow-up SLB (high-rate mode) or coexistence measurement from the same group, and citations of the paper by third-party SLE evaluations.

## Why it matters / what's new (ZH)

此前本知识库的星闪覆盖是标准（GB/T 46803 SLE，见 2026-05-28_sparklink-gbt-46803-national-standards 与 2026-06-05_nearlink-sle-gbt-46803-national-standard）、生态/市场分析（2026-05-21_sparklink-ecosystem-2026-overview、2026-08-09_eetasia-nearlink-market-phase-analysis）与厂商产品主张；其中所有"速率 6 倍 / 时延 1/30 / 功耗降低 60%"的数字都可追溯到华为或联盟的宣传口径。本文是本库中首篇同行评审、由高校主持的 SLE 对比蓝牙实测——其数字（速率 4 倍、时延 3.84 倍、灵敏度 10 dB）明显比宣传倍数保守，这本身就是有用的信号：厂商标题倍数更可能是以最优 SLE 参数对比保守的蓝牙基线，而高校主持的接入层基准落在约 4 倍（作为基线的蓝牙具体配置见全文而非摘要）。应用层框架（以各应用 QoS 需求而非链路指标为判据）是方法上的新意，为本库 nearlink-coexistence 分类一直在等待的共存与应用研究提供了可复用模板。收录说明：论文 2026-01-29 上线、2025 年 11 月在 MobiCom 2025 报告——距本库收录有七个月滞后，原因是星闪没有 arxiv 足迹、ACM DL 对自动抓取封闭；仍在 12 个月新鲜度窗口内，故按常规研究而非回填收录。关注点：CC-BY 全文（测试硬件、蓝牙基线版本、三种场景与优化设计）；同一团队后续的 SLB（高速模式）或共存测量；第三方 SLE 评估对本文的引用。

## Images

*(No redistributable images for this entry — figures are behind the ACM Digital Library.)*
