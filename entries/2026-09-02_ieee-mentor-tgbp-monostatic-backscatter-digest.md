---
id: 2026-09-02_ieee-mentor-tgbp-monostatic-backscatter-digest
date_published: 2026-09-02
date_found: 2026-09-02
type: ieee-document
technology: wifi
title_en: "IEEE 802.11 TGbp Mentor digest — 2026-09-02"
title_zh: "IEEE 802.11 TGbp Mentor 当日摘要 — 2026-09-02"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bp
source_quality: snippet_only
topics: [TGbp, AMP, S1G, backscatter]
topic_primary: amp-iot
topics_secondary: [energy-power-save]
novelty_score: 2
---

## Summary (EN)
TGbp (Ambient Power Communication) uploaded three new Huawei contributions late on 2026-08-31 and into 2026-09-01 that open a mechanism thread not seen before in this KB: **monostatic backscatter** as an operating mode for AMP over S1G. DCN 11-26-1580r0 "PDT AMP S1G Monostatic Backscatter Communication" (Rojan Chitrakar) proposes the communication-mode text for a monostatic backscatter link, where the same AP-side radio both illuminates the ambient-power tag and receives its modulated reflection, as opposed to the bistatic (separate illuminator/reader) topology AMP work has generally assumed. DCN 11-26-1581r1 "PDT AMP S1G Monostatic Backscatter Receiver and CCA Sensitivity" (Lumin Liu) covers the corresponding receiver design and clear-channel-assessment sensitivity requirements for detecting the weak backscattered reflection against the AP's own strong transmitted carrier — a classic self-interference problem for monostatic backscatter. DCN 11-26-1582r2 "TGbp Coexistence Assessment Document" (also Liu) is a broader coexistence study, iterated twice within a day, evaluating how AMP operation interacts with legacy Wi-Fi and other S1G traffic on the same channel.

## Summary (ZH)
TGbp（环境功率通信）于 2026-08-31 晚间至 2026-09-01 期间上传了三份新的华为贡献，开启了本 KB 此前未曾出现的技术方向：**单站式反向散射**（monostatic backscatter）作为 AMP 在 S1G 频段下的一种工作模式。DCN 11-26-1580r0《PDT AMP S1G Monostatic Backscatter Communication》（Rojan Chitrakar）提出了单站式反向散射链路的通信模式文本——即由同一部 AP 侧射频同时照射环境功率标签并接收其调制反射信号，区别于 AMP 工作此前普遍假设的双站式（照射器与接收器分离）拓扑。DCN 11-26-1581r1《PDT AMP S1G Monostatic Backscatter Receiver and CCA Sensitivity》（Lumin Liu）阐述了对应的接收机设计以及在 AP 自身强发射载波背景下检测微弱反向散射反射信号所需的空闲信道评估（CCA）灵敏度要求——这是单站式反向散射的经典自干扰问题。DCN 11-26-1582r2《TGbp Coexistence Assessment Document》（同为 Liu 撰写，一天内迭代两次）是一份更广泛的共存性研究，评估 AMP 工作与同信道上传统 Wi-Fi 及其他 S1G 流量的相互影响。

## Key technical points (EN)
- **DCN 11-26-1580r0 · TGbp** — "PDT AMP S1G Monostatic Backscatter Communication". Rojan Chitrakar (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1580&is_year=2026)
- **DCN 11-26-1581r1 · TGbp** — "PDT AMP S1G Monostatic Backscatter Receiver and CCA Sensitivity". Lumin Liu (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1581&is_year=2026)
- **DCN 11-26-1582r2 · TGbp** — "TGbp Coexistence Assessment Document". Lumin Liu (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1582&is_year=2026)

## Key technical points (ZH)
- **DCN 11-26-1580r0 · TGbp** — "PDT AMP S1G 单站式反向散射通信"。Rojan Chitrakar（华为）。 [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1580&is_year=2026)
- **DCN 11-26-1581r1 · TGbp** — "PDT AMP S1G 单站式反向散射接收机与 CCA 灵敏度"。Lumin Liu（华为）。 [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1581&is_year=2026)
- **DCN 11-26-1582r2 · TGbp** — "TGbp 共存性评估文档"。Lumin Liu（华为）。 [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1582&is_year=2026)

## Why it matters / what's new (EN)
Every prior TGbp digest in this KB has covered PDTs for data transfer, security, or wake/energizer control-plane procedures within a bistatic AMP topology. This is the first appearance of monostatic backscatter as a candidate operating mode, and it arrives with the receiver/CCA-sensitivity companion document that any monostatic scheme needs to be credible (self-interference at the AP is the mode's core engineering challenge), plus a coexistence assessment submitted in parallel — Huawei is proposing the mode and immediately backing it with the two studies TGbp would need to evaluate it. This thread is worth watching heading into the September WG letter ballot window.

## Why it matters / what's new (ZH)
此前 KB 中的历次 TGbp 摘要涵盖的都是双站式 AMP 拓扑下的数据传输、安全或唤醒/激励控制面 PDT。这是单站式反向散射作为候选工作模式首次出现在本 KB 中，且同时提交了任何单站式方案都必须具备的接收机/CCA 灵敏度配套文档（AP 自身的自干扰是该模式的核心工程难题），以及一份并行提交的共存性评估——华为在提出该模式的同时，立即配套了 TGbp 评估该模式所需的两份研究。随着 9 月工作组信件投票窗口临近，该方向值得持续关注。
