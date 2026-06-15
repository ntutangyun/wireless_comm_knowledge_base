---
id: 2026-06-15_arxiv-wifi-6ghz-lpi-sp-self-coexistence
date_published: 2026-06-10
date_found: 2026-06-15
type: academic-paper
title_en: "Wi-Fi Self-Coexistence in the 6 GHz Band: An ns-3 Evaluation of LPI and SP Usage"
title_zh: "6 GHz 频段 Wi-Fi 自共存：LPI 与 SP 使用的 ns-3 评估"
url: "https://arxiv.org/abs/2606.13711"
source_quality: full
topics: [802.11ax, 6GHz, LPI, SP, AFC, OBSS-PD, spatial-reuse, spectrum]
topic_primary: spectrum-policy
topics_secondary: [mapc-cosr]
novelty_score: 3
---

## Summary (EN)
A University of Notre Dame team (Nasiri, Dogan-Tusha, Gatsi, Ghosh — Monisha Ghosh's group) presents the first system-level ns-3 study of **Wi-Fi self-coexistence in the 6 GHz band across heterogeneous power regimes**, submitted 10 June 2026. The FCC allows unlicensed 6 GHz (5.925–7.125 GHz) under several power classes — **LPI (Low-Power Indoor, 30 dBm EIRP, no coordination)**, **SP (Standard Power, 36 dBm EIRP, requires AFC)**, plus GVP and VLP. Prior coexistence work targeted Wi-Fi vs cellular (LTE-LAA, NR-U); this paper isolates Wi-Fi-on-Wi-Fi interference between LPI and SP networks.

The core problem is **power asymmetry**: at 20 MHz, SP can transmit up to **18 dB above LPI**, so the louder SP transmitter dominates carrier sensing — LPI devices defer while SP may not even detect LPI activity. Crucially, regulatory EIRP caps (not the per-MHz PSD limit) set the relative gap, so the asymmetry **narrows to ~9 dB at 160 MHz**. The simulation (ns-3 802.11ax, HybridBuildings propagation, 2×2 MIMO, two APs × 5 STAs, AP separation swept 40–360 m, MCS0/5/9, 20/80/160 MHz, downlink CBR ~480 Mbps/AP) measures per-AP goodput, Jain's fairness, latency, and airtime ratio.

Headline findings: (1) a **~100 m threshold** — within it mutual carrier sensing keeps airtime balanced; beyond it sensing asymmetry lets SP dominate, worst at 20 MHz. (2) **Wider channels help** — 160 MHz fairness approaches the LPI–LPI baseline because the power gap shrinks. (3) **Robust MCS0 masks** the asymmetry; MCS5/9 expose it (fairness drops below 0.8 around 150 m). (4) A counter-intuitive **OBSS-PD backfire**: raising the OBSS-PD threshold to make LPI more aggressive *worsened* LPI goodput — "asymmetric BSS coloring is insufficient to restore fairness." (5) Indoor–outdoor building penetration loss only partially mitigates; outdoor SP still degrades indoor LPI at all distances. Results are tied to a real measurement campaign at the Notre Dame stadium (outdoor SP + indoor LPI co-channel separation CDF).

## Summary (ZH)
Notre Dame 团队（Nasiri、Dogan-Tusha、Gatsi、Ghosh——Monisha Ghosh 课题组）首次对 **6 GHz 频段异构功率制式下的 Wi-Fi 自共存** 做系统级 ns-3 研究，于 2026 年 6 月 10 日提交。FCC 允许 6 GHz（5.925–7.125 GHz）非授权使用，分多种功率等级——**LPI（低功率室内，30 dBm EIRP，无需协调）**、**SP（标准功率，36 dBm EIRP，需 AFC）**，以及 GVP 与 VLP。以往共存研究针对 Wi-Fi 与蜂窝（LTE-LAA、NR-U）；本文聚焦 LPI 与 SP 两类 Wi-Fi 网络之间的相互干扰。

核心问题是**功率不对称**：在 20 MHz 下，SP 发射功率可高出 LPI **达 18 dB**，因此较强的 SP 发射者主导载波侦听——LPI 设备退避，而 SP 甚至侦测不到 LPI 活动。关键在于决定相对差距的是监管 EIRP 上限（而非每 MHz 的 PSD 限制），因此在 **160 MHz 下不对称收窄至约 9 dB**。仿真（ns-3 802.11ax、HybridBuildings 传播模型、2×2 MIMO、两 AP × 5 STA、AP 间距 40–360 m 扫描、MCS0/5/9、20/80/160 MHz、下行 CBR 约 480 Mbps/AP）测量每 AP 吞吐、Jain 公平性、时延与占空比。

主要发现：（1）**约 100 m 阈值**——阈值内相互载波侦听保持占空平衡；阈值外侦听不对称使 SP 主导，20 MHz 最严重。（2）**更宽信道有帮助**——160 MHz 公平性接近 LPI–LPI 基线，因功率差距收窄。（3）**鲁棒的 MCS0 掩盖**不对称；MCS5/9 暴露之（约 150 m 处公平性跌破 0.8）。（4）反直觉的 **OBSS-PD 反效果**：提高 OBSS-PD 门限让 LPI 更激进，反而*恶化* LPI 吞吐——"非对称 BSS 着色不足以恢复公平"。（5）室内—室外建筑穿透损耗仅部分缓解；室外 SP 在所有距离下仍恶化室内 LPI。结果与 Notre Dame 体育场的实测活动（室外 SP + 室内 LPI 同信道间距 CDF）相印证。

## Key technical points (EN)
- **First ns-3 framework for LPI–SP heterogeneous-power Wi-Fi self-coexistence** (prior work was Wi-Fi vs cellular).
- **18 dB SP–LPI gap at 20 MHz → ~9 dB at 160 MHz**; the gap is set by EIRP caps, not PSD, so wider channels are fairer.
- **~100 m carrier-sensing threshold**: balanced airtime within, SP dominance beyond.
- **Fairness (Jain)**: ≥0.8 at MCS0/20 MHz; drops below 0.8 by ~150 m at MCS5/9; 160 MHz approaches LPI–LPI baseline.
- **OBSS-PD backfire**: aggressive thresholds increased LPI exposure without enabling concurrent TX — spatial reuse tuning cannot fix the power imbalance.
- **Indoor–outdoor**: building penetration loss only partially mitigates; outdoor SP degrades indoor LPI at all distances.
- **Real-world tie-in**: CDF of measured co-channel SP–LPI separation from the Notre Dame stadium campaign.
- Config: ns-3 802.11ax, 2×2 MIMO, A-MPDU on, RTS/CTS off, OBSS-PD swept at −72/−62 dBm vs disabled, BSS coloring on with OBSS-PD.

## Key technical points (ZH)
- **首个针对 LPI–SP 异构功率 Wi-Fi 自共存的 ns-3 框架**（以往工作针对 Wi-Fi 与蜂窝）。
- **20 MHz 下 SP–LPI 差距 18 dB → 160 MHz 下约 9 dB**；差距由 EIRP 上限而非 PSD 决定，故更宽信道更公平。
- **约 100 m 载波侦听阈值**：阈值内占空平衡，阈值外 SP 主导。
- **公平性（Jain）**：MCS0/20 MHz 时 ≥0.8；MCS5/9 时约 150 m 跌破 0.8；160 MHz 接近 LPI–LPI 基线。
- **OBSS-PD 反效果**：激进门限增加 LPI 暴露却未实现并发发送——空间复用调参无法修复功率失衡。
- **室内—室外**：建筑穿透损耗仅部分缓解；室外 SP 在所有距离下恶化室内 LPI。
- **现实印证**：Notre Dame 体育场实测同信道 SP–LPI 间距 CDF。
- 配置：ns-3 802.11ax、2×2 MIMO、开启 A-MPDU、关闭 RTS/CTS、OBSS-PD 在 −72/−62 dBm 与禁用间扫描、OBSS-PD 开启时启用 BSS 着色。

## Why it matters / what's new (EN)
The `spectrum-policy` bin has tracked the regulatory side of 6 GHz (FCC LPI/SP/VLP rules, UK/EU upper-6 GHz decisions) but not a quantitative look at what the power-class mix does to Wi-Fi-on-Wi-Fi fairness. This paper fills that gap: it shows the LPI/SP power asymmetry is a real, measurable airtime-fairness problem beyond ~100 m, that the standard spatial-reuse lever (OBSS-PD / BSS coloring) actively backfires, and — counter-intuitively — that wider channels (160 MHz) are *fairer* because EIRP caps shrink the relative power gap. That last point is directly relevant to deployment guidance and to the `mapc-cosr` line of work, since coordinated spatial reuse is exactly the mechanism being proposed to manage inter-BSS interference that OBSS-PD handles poorly here. Strong, well-instrumented entry with a real measurement tie-in.

## Why it matters / what's new (ZH)
`spectrum-policy` 分箱此前跟踪了 6 GHz 的监管面（FCC 的 LPI/SP/VLP 规则、英国/欧盟上 6 GHz 决定），但缺少对功率等级混合如何影响 Wi-Fi 间公平性的定量分析。本文填补了该空白：它表明 LPI/SP 功率不对称在约 100 m 之外是真实、可测的占空公平性问题，标准的空间复用手段（OBSS-PD / BSS 着色）反而起反作用，且——反直觉地——更宽信道（160 MHz）*更公平*，因为 EIRP 上限收窄了相对功率差距。最后一点对部署指导以及 `mapc-cosr` 方向的工作直接相关，因为协调空间复用正是被提出用于管理 OBSS-PD 在此处处理不佳的 BSS 间干扰的机制。条目扎实、仪表化充分，并有实测数据印证。
