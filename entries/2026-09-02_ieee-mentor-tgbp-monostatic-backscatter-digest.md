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
TGbp (Ambient Power Communication) uploaded three new Huawei contributions late on 2026-08-31 and into 2026-09-01 that advance **monostatic backscatter** as an operating mode for AMP over S1G to the proposed-draft-text stage. (This thread is appearing in this KB for the first time, but it is not new to TGbp itself: the PDT explicitly implements motions the task group has previously adopted for mono-static backscattering — see below.) DCN 11-26-1580r0 "PDT AMP S1G Monostatic Backscatter Communication" (Rojan Chitrakar) proposes the communication-mode text for a monostatic backscatter link, where the same AP-side radio both illuminates the ambient-power tag and receives its modulated reflection, as opposed to the bistatic (separate illuminator/reader) topology AMP work has generally assumed. DCN 11-26-1581r1 "PDT AMP S1G Monostatic Backscatter Receiver and CCA Sensitivity" (Lumin Liu) covers the corresponding receiver design and clear-channel-assessment sensitivity requirements for detecting the weak backscattered reflection against the AP's own strong transmitted carrier — a classic self-interference problem for monostatic backscatter. DCN 11-26-1582r2 "TGbp Coexistence Assessment Document" (also Liu) is a broader coexistence study, iterated twice within a day, evaluating how AMP operation interacts with legacy Wi-Fi and other S1G traffic on the same channel.

## Summary (ZH)
TGbp（环境功率通信）于 2026-08-31 晚间至 2026-09-01 期间上传了三份新的华为贡献，将**单站式反向散射**（monostatic backscatter）作为 AMP 在 S1G 频段下的工作模式推进到标准草案文本（PDT）阶段。（该方向系首次进入本 KB 的收录范围，但对 TGbp 而言并非新事物：文稿本身即在落实任务组此前已表决通过的多项单站式反向散射动议——见下文。）DCN 11-26-1580r0《PDT AMP S1G Monostatic Backscatter Communication》（Rojan Chitrakar）提出了单站式反向散射链路的通信模式文本——即由同一部 AP 侧射频同时照射环境功率标签并接收其调制反射信号，区别于 AMP 工作此前普遍假设的双站式（照射器与接收器分离）拓扑。DCN 11-26-1581r1《PDT AMP S1G Monostatic Backscatter Receiver and CCA Sensitivity》（Lumin Liu）阐述了对应的接收机设计以及在 AP 自身强发射载波背景下检测微弱反向散射反射信号所需的空闲信道评估（CCA）灵敏度要求——这是单站式反向散射的经典自干扰问题。DCN 11-26-1582r2《TGbp Coexistence Assessment Document》（同为 Liu 撰写，一天内迭代两次）是一份更广泛的共存性研究，评估 AMP 工作与同信道上传统 Wi-Fi 及其他 S1G 流量的相互影响。

## Key technical points (EN)
- **DCN 11-26-1580r0 · TGbp** — "PDT AMP S1G Monostatic Backscatter Communication". Rojan Chitrakar (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1580&is_year=2026)
- **DCN 11-26-1581r1 · TGbp** — "PDT AMP S1G Monostatic Backscatter Receiver and CCA Sensitivity". Lumin Liu (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1581&is_year=2026)
- **DCN 11-26-1582r2 · TGbp** — "TGbp Coexistence Assessment Document". Lumin Liu (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1582&is_year=2026)

## Key technical points (ZH)
- **DCN 11-26-1580r0 · TGbp** — "PDT AMP S1G 单站式反向散射通信"。Rojan Chitrakar（华为）。 [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1580&is_year=2026)
- **DCN 11-26-1581r1 · TGbp** — "PDT AMP S1G 单站式反向散射接收机与 CCA 灵敏度"。Lumin Liu（华为）。 [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1581&is_year=2026)
- **DCN 11-26-1582r2 · TGbp** — "TGbp 共存性评估文档"。Lumin Liu（华为）。 [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1582&is_year=2026)

## Why it matters / what's new (EN)
Every prior TGbp digest in this KB has covered PDTs for data transfer, security, or wake/energizer control-plane procedures within a bistatic AMP topology, so this is the monostatic thread's first appearance *in this knowledge base* — a statement about our coverage, not about TGbp's history. The 1580r0 body itself shows the topic is already established in the task group: it converts previously adopted motions into draft text (PM-46 on the backscattering tag's allowed clock inaccuracy in receive and backscattering-transmit modes, plus the adopted AMP-S1G Downlink/Uplink PPDU and data-rate motions #96/#97 and #137/#138). What these three documents mark is the mechanism reaching the draft-text stage as a complete package: the communication-mode text arrives together with the receiver/CCA-sensitivity companion any monostatic scheme needs to be credible (self-interference at the AP is the mode's core engineering challenge) and a parallel coexistence assessment — the set TGbp needs to evaluate the mode. Worth watching heading into the September WG letter ballot window.

## Why it matters / what's new (ZH)
此前 KB 中的历次 TGbp 摘要涵盖的都是双站式 AMP 拓扑下的数据传输、安全或唤醒/激励控制面 PDT，因此这是单站式反向散射首次出现在*本知识库*中——这是关于本库覆盖范围的陈述，而非关于 TGbp 历史的判断。1580r0 文稿正文本身就表明该方向在任务组内早有铺垫：它是在把此前已表决通过的多项动议转化为草案文本（PM-46 关于反向散射标签在接收与反向散射发送两种模式下允许的时钟误差，以及已通过的 AMP-S1G 下行/上行 PPDU 与数据速率动议 #96/#97、#137/#138）。这三份文稿的真正标志意义在于：该机制以完整"三件套"进入草案文本阶段——通信模式文本、任何单站式方案都必须具备的接收机/CCA 灵敏度配套设计（AP 自身的自干扰是该模式的核心工程难题）、以及并行提交的共存性评估，正是 TGbp 评估该模式所需的全套材料。随着 9 月工作组信件投票窗口临近，该方向值得持续关注。
