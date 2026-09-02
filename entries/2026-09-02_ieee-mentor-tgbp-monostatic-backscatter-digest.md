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
TGbp (Ambient Power Communication) uploaded three new Huawei contributions late on 2026-08-31 and into 2026-09-01 that advance **monostatic backscatter** as an operating mode for AMP over S1G to the proposed-draft-text stage. (This thread is appearing in this KB for the first time, but it is not new to TGbp itself: the PDT explicitly implements motions the task group has previously adopted for mono-static backscattering — see below.) DCN 11-26-1580r0 "PDT AMP S1G Monostatic Backscatter Communication" (Rojan Chitrakar) proposes the communication-mode text for a monostatic backscatter link (the same AP-side radio transmits the energizing carrier and receives the tag's modulated reflection): it defines the AMP AP S1G, has it contend for the medium with EDCA on the primary channel (a single access category mapped to AC_BE, TXOP limit 15.008 ms), and adds an AMP TX Announcement frame whose Duration field sets the NAV to protect backscatter TXOPs; the PPDU structure, OOK modulation with Manchester encoding, and data rates (DL 62.5 kb/s, UL 250 kb/s and 1 Mb/s) follow the motions the task group has adopted. DCN 11-26-1581r1 "PDT AMP S1G Monostatic Backscatter Receiver and CCA Sensitivity" (Lumin Liu) specifies receiver minimum input sensitivity (DL −20 dBm; UL −75/−69 dBm, at 10% PER for a 20-octet PSDU) and CCA requirements — CCA for WPT performed at the AMP energizer, and a −55 dBm CCA-ED requirement for the AMP AP S1G in the operating classes that require it, stated in the text as being "for improved spectrum sharing", with new sub-1 GHz operating-class rows added in Annex E. DCN 11-26-1582r2 "TGbp Coexistence Assessment Document" (also Liu) is a broader coexistence study, iterated twice within a day, evaluating how AMP operation interacts with legacy Wi-Fi and other S1G traffic on the same channel.

## Summary (ZH)
TGbp（环境功率通信）于 2026-08-31 晚间至 2026-09-01 期间上传了三份新的华为贡献，将**单站式反向散射**（monostatic backscatter）作为 AMP 在 S1G 频段下的工作模式推进到标准草案文本（PDT）阶段。（该方向系首次进入本 KB 的收录范围，但对 TGbp 而言并非新事物：文稿本身即在落实任务组此前已表决通过的多项单站式反向散射动议——见下文。）DCN 11-26-1580r0《PDT AMP S1G Monostatic Backscatter Communication》（Rojan Chitrakar）提出了单站式反向散射链路的通信模式文本（同一部 AP 侧射频既发射供能载波、又接收标签的调制反射信号）：定义 AMP AP S1G，规定其在主信道上以 EDCA 竞争接入（单一接入类别映射到 AC_BE，TXOP 上限 15.008 ms），并新增 AMP TX Announcement 帧——以其时长字段设置 NAV、保护反向散射传输时段；PPDU 结构、OOK 调制加曼彻斯特编码、数据速率（下行 62.5 kb/s，上行 250 kb/s 与 1 Mb/s）均沿用任务组已通过的动议。DCN 11-26-1581r1《PDT AMP S1G Monostatic Backscatter Receiver and CCA Sensitivity》（Lumin Liu）给出接收机最低输入灵敏度指标（下行 −20 dBm；上行 −75/−69 dBm，20 字节 PSDU 下误包率 10%）与 CCA 要求——包括在 AMP 激励器侧执行的 WPT CCA 检测，以及 AMP AP S1G 在部分工作类别下需执行的 −55 dBm 能量检测（CCA-ED，文稿自述目的为“改善频谱共享”），并在附录 E 中新增多个 Sub-1 GHz 工作类别。DCN 11-26-1582r2《TGbp Coexistence Assessment Document》（同为 Liu 撰写，一天内迭代两次）是一份更广泛的共存性研究，评估 AMP 工作与同信道上传统 Wi-Fi 及其他 S1G 流量的相互影响。

## Key technical points (EN)
- **DCN 11-26-1580r0 · TGbp** — "PDT AMP S1G Monostatic Backscatter Communication". Rojan Chitrakar (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1580&is_year=2026)
- **DCN 11-26-1581r1 · TGbp** — "PDT AMP S1G Monostatic Backscatter Receiver and CCA Sensitivity". Lumin Liu (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1581&is_year=2026)
- **DCN 11-26-1582r2 · TGbp** — "TGbp Coexistence Assessment Document". Lumin Liu (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1582&is_year=2026)

## Key technical points (ZH)
- **DCN 11-26-1580r0 · TGbp** — "PDT AMP S1G 单站式反向散射通信"。Rojan Chitrakar（华为）。 [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1580&is_year=2026)
- **DCN 11-26-1581r1 · TGbp** — "PDT AMP S1G 单站式反向散射接收机与 CCA 灵敏度"。Lumin Liu（华为）。 [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1581&is_year=2026)
- **DCN 11-26-1582r2 · TGbp** — "TGbp 共存性评估文档"。Lumin Liu（华为）。 [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1582&is_year=2026)

## Why it matters / what's new (EN)
Every prior TGbp digest in this KB has covered PDTs for data transfer, security, or wake/energizer control-plane procedures within a bistatic AMP topology, so this is the monostatic thread's first appearance *in this knowledge base* — a statement about our coverage, not about TGbp's history. The 1580r0 body itself shows the topic is already established in the task group: it converts previously adopted motions into draft text (PM-46 on the backscattering tag's allowed clock inaccuracy in receive and backscattering-transmit modes, plus the adopted AMP-S1G Downlink/Uplink PPDU and data-rate motions #96/#97 and #137/#138). What these three documents mark is the mechanism reaching the draft-text stage as a package: the communication-mode text, the receiver-sensitivity and CCA specification, and a coexistence assessment submitted in parallel. Worth watching heading into the September WG letter ballot window.

## Why it matters / what's new (ZH)
此前 KB 中的历次 TGbp 摘要涵盖的都是双站式 AMP 拓扑下的数据传输、安全或唤醒/激励控制面 PDT，因此这是单站式反向散射首次出现在*本知识库*中——这是关于本库覆盖范围的陈述，而非关于 TGbp 历史的判断。1580r0 文稿正文本身就表明该方向在任务组内早有铺垫：它是在把此前已表决通过的多项动议转化为草案文本（PM-46 关于反向散射标签在接收与反向散射发送两种模式下允许的时钟误差，以及已通过的 AMP-S1G 下行/上行 PPDU 与数据速率动议 #96/#97、#137/#138）。这三份文稿的标志意义在于：该机制以成套材料进入草案文本阶段——通信模式文本、接收机灵敏度与 CCA 规范、以及并行提交的共存性评估。随着 9 月工作组信件投票窗口临近，该方向值得持续关注。
