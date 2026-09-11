---
id: 2026-09-11_arxiv-haps-ris-vs-relay-6g-ntn-noma
date_published: 2026-09-09
date_found: 2026-09-11
type: academic-paper
technology: cellular
title_en: "HAPS-RIS or HAPS-Relay: Which Outperforms Under Impairments with NOMA in 6G NTN?"
title_zh: "HAPS-RIS 与 HAPS-中继：6G NTN 中 NOMA 场景下谁更优？"
url: "https://arxiv.org/abs/2609.10468"
source_quality: full
topics: [HAPS, RIS, relay, NOMA, hardware-impairments, 6G-NTN]
topic_primary: ntn
topics_secondary: [6g-vision]
novelty_score: 2
---

## Summary (EN)
Bilal Karaman, Faicel Khennoufa, Ilhan Basturk, Metin Ozturk, Ferdi Kara, Sezai Taskin, and Halim Yanikomeroglu (arXiv v1, 9 Sep 2026; accepted for GLOBECOM 2026) compare two competing architectures for high-altitude platform station (HAPS)-assisted 6G non-terrestrial networks: a passive reconfigurable intelligent surface (HAPS-RIS) versus an active half-duplex amplify-and-forward relay (HAPS-RS), both serving ground users under non-orthogonal multiple access (NOMA). The paper's stated gap is that a comprehensive comparison of HAPS-RIS and HAPS-RS under realistic system impairments and advanced multiple access schemes is still lacking; it explicitly models practical impairments — hardware distortion noise at the HAPS and imperfect channel state information — and asks which architecture degrades more gracefully once those impairments are added.

Using Monte Carlo simulation (10^5 realizations) with Rician fading on both the control-station-to-HAPS and HAPS-to-user hops, and cascaded end-to-end channels for the RIS path, the paper finds that HAPS-RIS outperforms HAPS-RS in both sum-rate and energy efficiency once impairments are present, because the RIS's fully passive nature avoids the relay's noise-amplification problem inherent to active amplify-and-forward. The RIS's sum-rate advantage saturates beyond roughly 10,000 reflecting elements as imperfect-CSI effects begin to dominate returns, and while HAPS-RIS's energy efficiency declines as more elements are added (linear hardware power growth against only marginal rate gains), it still achieves superior efficiency at moderate-to-high transmit power, while HAPS-RS retains an edge in the low-power regime thanks to active amplification. The paper also studies how RIS element allocation between near and far NOMA users should shift under impairments (the optimum moves from roughly 2,500 to 4,500 elements allocated to the far user once impairments are modeled) and confirms NOMA consistently outperforms orthogonal multiple access across the tested configurations. A second headline result is that user spatial separation drives the NOMA gain: the paper reports that inter-user distance plays a critical role in unlocking NOMA's potential in HAPS-RIS systems. As a simulation-only study with no hardware or field-trial component, the contribution is a set of design guidelines — RIS's impairment robustness relative to relaying, and how NOMA power/element allocation should be adjusted under non-ideal hardware — for future HAPS-assisted 6G system design rather than a deployed or measured system.

## Summary (ZH)
Bilal Karaman、Faicel Khennoufa、Ilhan Basturk、Metin Ozturk、Ferdi Kara、Sezai Taskin 与 Halim Yanikomeroglu（arXiv v1，2026 年 9 月 9 日；已被 GLOBECOM 2026 接收）比较了两种用于高空平台站（HAPS）辅助 6G 非地面网络的竞争性架构：无源可重构智能表面（HAPS-RIS）与有源半双工放大转发中继（HAPS-RS），两者均在非正交多址接入（NOMA）场景下为地面用户提供服务。此前的研究大多在理想条件下孤立地研究这两种架构；本文则显式建模了实际的硬件损伤（HAPS 处的硬件失真噪声）与不完美信道状态信息，探讨在引入这些损伤后哪种架构的性能下降更为平缓。

论文通过蒙特卡洛仿真（10^5 次独立实现），对地面到 HAPS 链路采用莱斯衰落，对 RIS 路径采用级联端到端信道模型，发现在存在硬件损伤的情况下，HAPS-RIS 在和速率与能效两方面均优于 HAPS-RS，原因在于 RIS 完全无源的特性避免了有源放大转发中继固有的噪声放大问题。RIS 的和速率优势在反射单元数超过约 10,000 个后趋于饱和，此时不完美信道状态信息的影响开始主导收益；虽然 HAPS-RIS 的能效会随单元数增加而下降（硬件功耗线性增长而速率增益仅为边际），但在中高发射功率下仍能实现更优的能效。论文还研究了在近、远 NOMA 用户之间应如何分配 RIS 单元以应对硬件损伤（考虑损伤后，分配给远端用户的最优单元数从约 2,500 个上移至约 4,500 个），并证实在所测试的各配置下 NOMA 始终优于正交多址接入。作为一项纯仿真研究，未包含硬件或外场试验环节，其贡献在于为未来 HAPS 辅助 6G 系统设计提供一组设计指导——即 RIS 相对于中继的损伤鲁棒性，以及在非理想硬件条件下 NOMA 功率/单元分配应如何调整——而非一个已部署或已实测的系统。

## Key technical points (EN)
- Compares HAPS-RIS (passive) vs. HAPS-RS (active half-duplex amplify-and-forward) under NOMA, explicitly modeling hardware distortion noise and imperfect CSI — a comparison prior work largely studied only under idealized conditions.
- HAPS-RIS outperforms HAPS-RS in sum-rate and energy efficiency once impairments are included at moderate-to-high transmit power, because passive reflection avoids the relay's inherent noise amplification; HAPS-RS keeps an advantage in the low-power regime.
- Sum-rate advantage saturates beyond ~10,000 RIS elements as imperfect-CSI effects dominate; energy efficiency declines with more elements but HAPS-RIS remains superior at moderate-to-high transmit power.
- Optimal RIS-element allocation between near/far NOMA users shifts from ~2,500 to ~4,500 elements (favoring the far user) once impairments are modeled.
- NOMA consistently outperforms OMA across tested configurations. Monte Carlo simulation only (10^5 realizations) — no hardware/field-trial component; contribution is design guidelines, not a measured system.

## Key technical points (ZH)
- 在 NOMA 场景下比较 HAPS-RIS（无源）与 HAPS-RS（有源半双工放大转发），显式建模硬件失真噪声与不完美信道状态信息——此前研究大多仅在理想条件下进行此类比较。
- 引入损伤后，HAPS-RIS 在和速率与能效方面均优于 HAPS-RS，原因是无源反射避免了中继固有的噪声放大问题。
- 和速率优势在反射单元数超过约 10,000 个后趋于饱和，此时不完美信道状态信息的影响开始主导；能效随单元数增加而下降，但 HAPS-RIS 在中高发射功率下仍保持更优能效。
- 考虑损伤后，近/远 NOMA 用户间的最优 RIS 单元分配从约 2,500 个上移至约 4,500 个（更倾向于远端用户）。
- 在所测试配置下 NOMA 始终优于正交多址接入。仅为蒙特卡洛仿真研究（10^5 次实现），不含硬件或外场试验环节；贡献在于设计指导，而非已实测系统。

## Why it matters / what's new (EN)
The KB's existing HAPS entries (the 2026-06-03 GNN online-beamforming HAPS-NTN paper and the 2026-06-30 RIS-UAV-NTN-O-RAN-MARL paper) each study a single HAPS architecture. This is the first entry to run a direct, impairment-aware head-to-head between the RIS and relay options for the same HAPS role, giving a concrete answer (RIS wins once hardware/CSI imperfections are modeled) to a design choice the prior entries did not address.

## Why it matters / what's new (ZH)
知识库中已有的 HAPS 相关条目（2026-06-03 的 GNN 在线波束成形 HAPS-NTN 论文与 2026-06-30 的 RIS-UAV-NTN-O-RAN-MARL 论文）各自只研究单一 HAPS 架构。本条目是本知识库中首个针对同一 HAPS 角色下 RIS 与中继两种方案、在考虑硬件损伤前提下进行直接对比的条目，给出了明确结论（在建模硬件/信道状态不完美因素后 RIS 更优），回答了此前条目未涉及的一个设计选择问题。

## Images
![HAPS-RIS vs. HAPS-Relay system architecture | HAPS-RIS 与 HAPS-中继系统架构对比](https://arxiv.org/html/2609.10468v1/Figures_GC26/SystemModel_v2.png)
![Sum-rate vs. number of RIS elements, HAPS-RIS vs. HAPS-RS under impairments | 和速率随 RIS 单元数变化：损伤条件下 HAPS-RIS 与 HAPS-RS 对比](https://arxiv.org/html/2609.10468v1/Final_Fig1_v1.png)
