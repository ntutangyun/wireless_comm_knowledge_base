---
id: 2026-11-02_ieee-mentor-coex-sc-6ghz-lpi-client-to-client-asymmetric-cca
date_published: 2026-11-01
date_found: 2026-11-02
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 Coex SC -- 6 GHz infrastructure Wi-Fi coexistence with LPI client-to-client (C2C) communication: an asymmetric-CCA case study (DCN 11-26-2160r0, HPE)"
title_zh: "IEEE 802.11 Coex SC -- 6 GHz 基础设施 Wi-Fi 与 LPI 客户端到客户端（C2C）通信的共存：非对称 CCA 案例分析（DCN 11-26-2160r0，HPE）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2160&is_year=2026"
source_quality: full
topics: [6 GHz, LPI, client-to-client, C2C, coexistence, CCA, ETSI TC BRAN, Coex SC]
topic_primary: spectrum-policy
topics_secondary: [wifi7-deployment]
novelty_score: 3
---

## Summary (EN)

DCN 11-26-2160r0 (Xin Tang, HPE; document dated 2026-10-30, listed on Mentor 2026-11-01; group: Coex SC) discusses the coexistence implications of 6 GHz Low Power Indoor (LPI) client-to-client (C2C) operation in dense enterprise Wi-Fi deployments. As the deck describes it, LPI C2C lets client stations communicate directly at LPI AP power level once an enabling LPI AP provides an enabling signal. It notes a proposal under consideration in ETSI TC BRAN that uses the AP's Regulatory Info subfield as the enabling signal, so that receiving a beacon from an LPI AP enables C2C, and that the communicating C2C STAs must decode enabling signals from the same RLAN/Wi-Fi network.

The concern raised is that C2C transmitters operate independently of the infrastructure AP channel plan. The deck gives an analytical meeting-venue scenario: a 40 x 40 m floor with nine dual-band APs sharing one SSID on nine 80 MHz channels (three in 5 GHz, six in 6 GHz), 14 dBm EIRP, 15 m inter-site distance, ceiling-mounted at 6 m. Two C2C devices (EIRP 23 dBm) sit at (5,5,1) and (35,35,1) m, enabled by two non-adjacent APs, and pick channel 7 (5985 MHz, 80 MHz) after CCA. Using ITU-R P.1238-13 site-general indoor propagation (NLoS, 3 dB polarisation loss), an enabling-signal threshold of -74 dBm and an energy-detection threshold of -65 dBm, the AP on channel 7 is received at the C2C devices at -67.71 dBm (below the ED threshold, so the channel is judged idle and the AP is a hidden node), while the C2C transmissions arrive at that AP at -58.71 dBm, 6.29 dB above its ED threshold, so the AP may defer. The deck states that continuous C2C traffic could substantially reduce that AP's channel-access opportunities and that each additional C2C link could block a corresponding AP; it notes the ED-based example needs further analysis for 802.11 preamble detection and different channel widths and primary-channel locations.

The deck closes with two questions for discussion rather than a proposal: whether 802.11 should define an explicit indication, carried in an AP management frame, that C2C is permitted (the Regulatory Info bits B3:B6 in the 6 GHz Operation Information field are named as one possible location, "requires further study"), and whether an enabling AP should be able to identify or constrain the channels an authorised C2C link may use (it points to the channel-usage text in 802.11-2024 subclause 4.3.22.4).

## Summary (ZH)

DCN 11-26-2160r0（Xin Tang，HPE；文稿日期 2026-10-30，Mentor 列出日期 2026-11-01；Coex SC）讨论 6 GHz 低功率室内（LPI）客户端到客户端（C2C）通信对密集企业 Wi-Fi 部署的共存影响。按文稿描述，LPI C2C 允许客户端在有使能 LPI AP 提供使能信号后，以 LPI AP 功率等级直接通信。文稿提到 ETSI TC BRAN 正在考虑的一项提案，使用 AP 的 Regulatory Info 子字段作为使能信号，即接收到 LPI AP 的信标即可使能 C2C，且通信的 C2C STA 须解码来自同一 RLAN/Wi-Fi 网络的使能信号。

文稿提出的关切是：C2C 发射端独立于基础设施 AP 的信道规划。文稿给出一个会场分析场景：40 x 40 m 楼层，9 个双频 AP 共用一个 SSID，使用 9 个 80 MHz 信道（5 GHz 3 个、6 GHz 6 个），EIRP 14 dBm，站间距 15 m，吊顶安装高度 6 m。两台 C2C 设备（EIRP 23 dBm）位于 (5,5,1) 与 (35,35,1) m，由两个不相邻 AP 使能，在 CCA 后选择 7 号信道（5985 MHz，80 MHz）。采用 ITU-R P.1238-13 室内通用传播模型（NLoS，极化损耗 3 dB）、使能信号阈值 -74 dBm、能量检测阈值 -65 dBm，7 号信道上的 AP 在 C2C 设备处的接收功率为 -67.71 dBm（低于 ED 阈值，信道被判为空闲，AP 成为隐藏节点），而 C2C 发射在该 AP 处为 -58.71 dBm，比其 ED 阈值高 6.29 dB，AP 可能退避。文稿称持续的 C2C 流量可能大幅减少该 AP 的信道接入机会，每增加一条 C2C 链路都可能阻塞对应 AP；并注明基于 ED 的示例仍需针对 802.11 前导检测以及不同信道带宽和主信道位置做进一步分析。

文稿以两个供讨论的问题收尾，而非提案：802.11 是否应定义由 AP 管理帧携带的、明确允许 C2C 的指示（6 GHz Operation Information 字段中的 Regulatory Info B3:B6 被列为一种可能位置，"需进一步研究"）；以及使能 AP 是否应能识别或限制被授权 C2C 链路可使用的信道（文稿指向 802.11-2024 第 4.3.22.4 条的信道使用文本）。

## Key technical points (EN)

- **DCN 11-26-2160r0 · Coex SC** -- 6 GHz Infrastructure Wi-Fi coexistence with LPI Client to Client (C2C) Communication. Xin Tang (HPE). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2160&is_year=2026)
- Scenario: 9 APs, 80 MHz channels, 14 dBm EIRP, 15 m ISD; two 23 dBm C2C devices on channel 7; ED threshold -65 dBm; enabling-signal threshold -74 dBm (as proposed in ETSI TC BRAN).
- Result stated: AP received at C2C devices -67.71 dBm (idle, hidden node); C2C received at AP -58.71 dBm (6.29 dB above ED) -- an asymmetric CCA condition.
- Open questions: explicit C2C authorisation indication by the enabling AP; AP-coordinated channel selection for C2C. The deck stops short of a proposal: it floats one possible signalling location (reserved bits B3-B6 of the Regulatory Info subfield in the 6 GHz Operation Information field, 9.4.2.248) and points to the existing 802.11-2024 Channel usage mechanism (4.3.22.4), both marked as requiring further study.

## Key technical points (ZH)

- **DCN 11-26-2160r0 · Coex SC** -- 6 GHz 基础设施 Wi-Fi 与 LPI 客户端到客户端（C2C）通信的共存。Xin Tang（HPE）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2160&is_year=2026)
- 场景：9 个 AP、80 MHz 信道、EIRP 14 dBm、站间距 15 m；两台 23 dBm C2C 设备位于 7 号信道；ED 阈值 -65 dBm；使能信号阈值 -74 dBm（ETSI TC BRAN 提案）。
- 文稿给出的结果：AP 在 C2C 设备处功率 -67.71 dBm（判空闲，隐藏节点）；C2C 在 AP 处功率 -58.71 dBm（高于 ED 6.29 dB）——非对称 CCA 情形。
- 开放问题：使能 AP 是否明确指示允许 C2C；C2C 信道选择是否由 AP 协调。文稿没有给出定案：它举了一个可能的信令位置（6 GHz Operation Information 字段中 Regulatory Info 子字段的保留位 B3-B6，9.4.2.248），并指出 802.11-2024 已有的 Channel usage 机制（4.3.22.4）可供参考，两者均标注为有待进一步研究。

## Why it matters / what's new (EN)

This brings a regulatory-side proposal (ETSI TC BRAN's LPI C2C enabling mechanism) into the 802.11 Coex SC with a numerical coexistence example. Earlier spectrum-policy entries cover 6 GHz rules and coexistence from regulators, industry news and other IEEE groups (e.g. 2026-05-05_ieee-wng-charter-bypass-lbt-upper-6ghz); this one adds an 802.11 Coex SC contribution on LPI C2C specifically. The numbers come from a single analytical layout using ETSI-style ED thresholds, which the deck itself flags as needing further analysis; it is a discussion document, with no adopted text or motion.

## Why it matters / what's new (ZH)

该文稿把监管侧提案（ETSI TC BRAN 的 LPI C2C 使能机制）带入 802.11 Coex SC，并给出数值化的共存算例。本知识库 spectrum-policy 主题此前已从监管、行业新闻及其他 IEEE 小组角度（如 2026-05-05_ieee-wng-charter-bypass-lbt-upper-6ghz）覆盖 6 GHz 规则与共存；本条补充的是 802.11 Coex SC 针对 LPI C2C 的贡献。数值来自单一分析布局并采用 ETSI 式 ED 阈值，文稿自身指出需进一步分析；这是讨论性文稿，尚无采纳文本或动议。
