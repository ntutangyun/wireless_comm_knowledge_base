---
id: 2026-11-03_ieee-mentor-tgbq-bft-before-roaming-and-cca-in-advance-for-beam-establishment
date_published: 2026-11-02
date_found: 2026-11-03
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbq Mentor digest -- beamforming training with the target AP before seamless roaming (DCN 11-26-2167r0, ATR) and CCA-in-advance for beam establishment (DCN 11-26-1860r2, Spreadtrum)"
title_zh: "IEEE 802.11 TGbq Mentor 摘要 -- 无缝漫游前与目标 AP 先行波束训练（DCN 11-26-2167r0，ATR）及波束建立中的提前 CCA（DCN 11-26-1860r2，展锐）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2167&is_year=2026"
source_quality: full
topics: [802.11bq, 802.11bn, IMMW, mmWave, beamforming training, seamless roaming, CCA, Mentor digest]
topic_primary: mmwave-bq
topics_secondary: [roaming-mobility]
novelty_score: 3
---

## Summary (EN)

Two TGbq contributions surfaced on Mentor on 1-2 November 2026. DCN 11-26-2167r0 (Yusuke Okumoto, ATR; listed 2026-11-02) is a slide deck about keeping an integrated mmWave (IMMW) link usable across a roam. Its stated background is that mmWave users such as AR/VR users move, that movement may trigger roaming to another AP, and that a non-AP STA must perform beamforming training (BFT) with the target AP before a new mmWave link can be used. The deck reviews the seamless-roaming procedure in P802.11bn Draft 2.0 (ST discovery, recommendation, ST preparation, ST execution) within one seamless mobility domain, concentrating on the "via the target AP MLD" execution case, and then adds mmWave link setup to it. Its observation is that the current AP holds no beam information for the target AP, so if BFT-SP scheduling and BFT only start after the associated AP switches, the new mmWave link is unavailable until both finish.

The proposal is to negotiate a BFT service period (SP) between the non-AP STA and the target AP, and run BFT, before the associated AP is switched, while the STA keeps exchanging data with the serving AP. The deck gives two sequence diagrams (BFT after ST execution versus BFT before roaming) marking the mmWave unavailable time, and lists a further stated benefit: BFT before roaming verifies mmWave reachability to the target AP, so a STA that finds mmWave unavailable can avoid roaming to it. It closes with two straw polls, both with mechanism details marked TBD: whether 11bq should define a mechanism for BFT between an IMMW non-AP STA and a non-associated IMMW AP STA, and whether 11bq should define a roaming procedure including BFT between an IMMW AP and a non-associated IMMW non-AP STA over a mmWave link.

DCN 11-26-1860r2 (Xiangxin Gu, Spreadtrum, with a co-author from H3C; listed 2026-11-01) is a short deck titled "Channel Access for BE" (beam establishment). It builds on two earlier TGbq documents it cites (11-26-1302r1 and 11-26-1710r0) and on motion 106, under which the group agreed a solution for timing uncertainty between beam-establishment transmitter and receiver. The deck states that CCA is required before a BE transmitter sends NDPs and that the random backoff can cause skipped NDPs and timing misalignment. It treats the CCA backoff as one more source of timing uncertainty, to be handled by the motion-106 approach (the transmitter repeats Tx-SLS with extra NDPs; the receiver stays on each Rx sector for one additional NDP). To avoid receiver-side complexity it proposes that the transmitter starts CCA in advance so NDP transmission begins no later than the start of the beam-establishment SP if the channel is idle. Its straw poll asks whether 11bq should define this as an optional operation for 2D beam establishment.

## Summary (ZH)

TGbq 的两份贡献于 2026 年 11 月 1-2 日出现在 Mentor 上。DCN 11-26-2167r0（Yusuke Okumoto，ATR；Mentor 列出日期 2026-11-02）是一份关于漫游过程中保持集成 mmWave（IMMW）链路可用的幻灯片。文稿陈述的背景是：AR/VR 等 mmWave 用户会移动，移动可能触发漫游到另一个 AP，而非 AP STA 必须先与目标 AP 完成波束训练（BFT）才能使用新的 mmWave 链路。文稿回顾了 P802.11bn Draft 2.0 中同一无缝移动域（SMD）内的无缝漫游流程（ST 发现、推荐、ST 准备、ST 执行），重点是"经目标 AP MLD"的执行情形，并在其中加入 mmWave 链路建立。其观察是：当前 AP 没有目标 AP 的波束信息，如果 BFT SP 调度和 BFT 在关联 AP 切换之后才开始，新 mmWave 链路在两者完成前不可用。

文稿提议：在切换关联 AP 之前，非 AP STA 与目标 AP 先协商 BFT 服务时段（SP）并执行 BFT，同时 STA 继续与服务 AP 交换数据。文稿给出两张时序图（ST 执行后 BFT 与漫游前 BFT），标出 mmWave 不可用时间，并列出另一项所述好处：漫游前 BFT 可以验证与目标 AP 的 mmWave 可达性，若发现 mmWave 不可用，STA 可避免漫游到该 AP。文稿以两个举手表决（Straw Poll）收尾，机制细节均标为待定（TBD）：11bq 是否应定义 IMMW 非 AP STA 与未关联 IMMW AP STA 之间的 BFT 机制；11bq 是否应定义包含 mmWave 链路上 IMMW AP 与未关联 IMMW 非 AP STA 之间 BFT 的漫游流程。

DCN 11-26-1860r2（Xiangxin Gu，展锐，另有来自 H3C 的共同作者；Mentor 列出日期 2026-11-01）是一份题为"Channel Access for BE"（波束建立，beam establishment）的短幻灯片。它建立在其引用的两份 TGbq 文稿（11-26-1302r1、11-26-1710r0）以及动议 106 之上——该动议已确定了波束建立收发双方时间不确定性的一种解决方案。文稿指出：BE 发射端发送 NDP 前需要 CCA，随机退避可能导致 NDP 被跳过和时间错位。它把 CCA 退避视为又一种时间不确定性，按动议 106 的方法处理（发射端重复 Tx-SLS 并增加额外 NDP；接收端在每个 Rx 扇区多停留一个 NDP）。为避免接收端复杂度，文稿提议发射端提前启动 CCA，使信道空闲时 NDP 发送不晚于波束建立 SP 的起点。其举手表决询问 11bq 是否应将此定义为 2D 波束建立的可选操作。

## Key technical points (EN)

- **DCN 11-26-2167r0 · TGbq** -- Beamforming Training before Roaming for Seamless mmWave Link Connectivity. Yusuke Okumoto (ATR). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2167&is_year=2026)
- Baseline referenced: P802.11bn Draft 2.0 Figure 37-15 (ST preparation and execution via a target AP MLD); setting is one seamless mobility domain with two AP MLDs.
- Stated problem: the current AP has no beam information of the target AP, so BFT SP wait time plus BFT time follow ST execution as mmWave unavailable time.
- Proposed sequence: negotiate the BFT SP with the target AP and run BFT before ST execution while data continues on the serving AP; stated side benefit: verify mmWave reachability and avoid unnecessary roaming.
- Straw Poll 1 and 2 (details TBD): define BFT between an IMMW non-AP STA and a non-associated IMMW AP STA; define a roaming procedure that includes it.
- **DCN 11-26-1860r2 · TGbq** -- Channel Access for BE. Xiangxin Gu (Spreadtrum), Yingqiao Quan (Spreadtrum), Lei Zhou (H3C). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1860&is_year=2026)
- Treats CCA random backoff as a timing-uncertainty source and applies the motion-106 solution (extra NDPs in Tx-SLS, receiver stays one more NDP per Rx sector).
- Straw poll: optional operation for 2D beam establishment in which the transmitter starts CCA in advance so NDP start is no later than the beam-establishment SP start if CCA is idle.

## Key technical points (ZH)

- **DCN 11-26-2167r0 · TGbq** -- 无缝 mmWave 链路连接的漫游前波束训练。Yusuke Okumoto（ATR）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2167&is_year=2026)
- 引用基线：P802.11bn Draft 2.0 图 37-15（经目标 AP MLD 的 ST 准备与执行）；场景为同一无缝移动域内的两个 AP MLD。
- 所述问题：当前 AP 没有目标 AP 的波束信息，BFT SP 等待时间与 BFT 时间排在 ST 执行之后，构成 mmWave 不可用时间。
- 提议流程：在 ST 执行前与目标 AP 协商 BFT SP 并执行 BFT，期间数据继续经服务 AP 传输；所述附带好处：验证 mmWave 可达性，避免不必要的漫游。
- 举手表决 1、2（细节待定）：定义 IMMW 非 AP STA 与未关联 IMMW AP STA 之间的 BFT；定义包含该 BFT 的漫游流程。
- **DCN 11-26-1860r2 · TGbq** -- BE 的信道接入。Xiangxin Gu（展锐）、Yingqiao Quan（展锐）、Lei Zhou（H3C）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1860&is_year=2026)
- 把 CCA 随机退避视为时间不确定性来源，采用动议 106 的方案（Tx-SLS 中增加 NDP，接收端在每个 Rx 扇区多停留一个 NDP）。
- 举手表决：2D 波束建立的可选操作——发射端提前启动 CCA，使信道空闲时 NDP 起始不晚于波束建立 SP 起点。

## Why it matters / what's new (EN)

Both documents are discussion decks with straw polls and no adopted text; the mechanisms in each are marked TBD or optional. 11-26-2167r0 builds on the seamless-roaming procedure in the TGbn D2.0 draft as its baseline, but both straw polls propose definitions in 11bq only; earlier mmwave-bq coverage in this KB (see other 2026 TGbq Mentor digests) dealt with beam-establishment and P2P topics, and this is the entry that connects roaming and mmWave link setup. 11-26-1860r2 is a follow-up to documents already tracked by the group (motion 106) rather than a new topic.

## Why it matters / what's new (ZH)

两份文稿均为带举手表决的讨论性幻灯片，没有采纳文本；其中的机制均标为待定或可选。11-26-2167r0 以 TGbn D2.0 草案中的无缝漫游流程为基线，但两个举手表决仅提议在 11bq 中定义相关机制；本知识库此前的 mmwave-bq 条目（见其他 2026 年 TGbq Mentor 摘要）涉及波束建立与 P2P 主题，本条补充的是漫游与 mmWave 链路建立的衔接。11-26-1860r2 是该小组已跟踪文稿（动议 106）的后续，而非新话题。
