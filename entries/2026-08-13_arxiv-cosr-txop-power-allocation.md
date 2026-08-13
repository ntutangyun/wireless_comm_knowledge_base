---
id: 2026-08-13_arxiv-cosr-txop-power-allocation
date_published: 2026-08-12
date_found: 2026-08-13
type: academic-paper
title_en: "On the Allocation of Transmit Power for Coordinated Spatial Reuse in IEEE 802.11bn Multi-Access Point Coordination"
title_zh: "IEEE 802.11bn 多 AP 协调中协调空间复用（Co-SR）的发射功率分配研究"
url: "https://arxiv.org/abs/2608.11971"
source_quality: full
topics: [802.11bn, MAPC, Co-SR, power-control, proportional-fairness]
topic_primary: mapc-cosr
topics_secondary: [wifi8-uhr]
novelty_score: 3
---

## Summary (EN)
Wilhelmi and Bellalta (UPF; arXiv 12 Aug 2026) tackle the open question of *how much power* each AP should use when IEEE 802.11bn's Coordinated Spatial Reuse (Co-SR) lets two APs transmit simultaneously in the same TXOP. Current Co-SR practice either uses symmetric power or only caps the coordinated (secondary) AP's power by the coordinator's announced interference tolerance — both ignore the actual link geometry, so gains evaporate in asymmetric deployments.

The paper proposes a proportional-fairness (PF)-driven framework that allocates Co-SR transmit power on a per-TXOP basis. The central structural result: any Pareto-optimal power pair keeps **at least one AP at maximum power**, which collapses the joint two-dimensional power search into two cheap one-dimensional line searches. For continuous (Shannon) rate models the PF optimum is found by ternary search over the remaining dimension; for realistic discrete MCS steps the authors derive a **closed-form expression** that lands on the fairness-optimal power without any search, exploiting the fact that rate only changes at MCS-boundary SINR thresholds.

Validation uses Kom8ndor, the group's open-source 802.11bn simulator (KB: 2026-06-26_arxiv-kom8ndor-wifi8-simulator), with 20 MHz channels, −95 dBm noise floor and a 10 dB capture threshold. At 2 m inter-AP distance the fairness-driven continuous method reaches 9.29 Mbps aggregate versus 8.91 Mbps for the selfish baseline, while using substantially less total power; the discrete-rate closed form matches the searched optimum. A key protocol observation: current 802.11bn MAPC signaling can express the *selfish* policy (coordinator at max power, secondary bounded by interference tolerance) but **not** the fairness-optimal one — that would require per-TXOP channel-quality reporting between the coordinated APs.

## Summary (ZH)
Wilhelmi 与 Bellalta（庞培法布拉大学；2026 年 8 月 12 日 arXiv）研究 IEEE 802.11bn 协调空间复用（Co-SR）中两个 AP 在同一 TXOP 内同时发射时的功率分配问题。现有 Co-SR 实践要么使用对称功率，要么仅按协调者宣告的干扰容限限制被协调（次级）AP 的功率——两者都忽略了实际链路几何，在非对称部署中收益会消失。

论文提出按 TXOP 粒度分配 Co-SR 发射功率的比例公平（PF）框架。核心结构性结论：任何帕累托最优功率组合中**至少有一个 AP 处于最大功率**，从而把二维联合功率搜索坍缩为两次廉价的一维线搜索。对连续（香农）速率模型，PF 最优可通过三分搜索求得；对真实的离散 MCS 阶梯，作者推导出**闭式表达式**，利用速率仅在 MCS 边界 SINR 门限处跳变的性质，无需搜索即可命中公平最优功率。

验证使用该团队的开源 802.11bn 仿真器 Kom8ndor（KB 条目 2026-06-26_arxiv-kom8ndor-wifi8-simulator），20 MHz 信道、−95 dBm 噪声底、10 dB 捕获门限。在 2 米 AP 间距下，公平驱动的连续方法达到 9.29 Mbps 聚合吞吐，高于自私基线的 8.91 Mbps，且总功率明显更低；离散速率闭式解与搜索最优一致。一个关键的协议观察：当前 802.11bn MAPC 信令只能表达"自私"策略（协调者满功率、次级受干扰容限约束），**无法表达公平最优策略**——后者需要协调 AP 之间按 TXOP 的信道质量上报。

## Key technical points (EN)
- **Problem:** per-TXOP transmit-power split between two concurrently-transmitting APs under 802.11bn Co-SR; symmetric / tolerance-capped heuristics ignore link geometry.
- **Structural result:** every Pareto-optimal allocation has ≥1 AP at max power → 2D joint search reduces to two 1D line searches.
- **Discrete-rate closed form:** with real MCS steps, the PF-optimal power is expressible in closed form (no search), keyed to MCS-boundary SINR thresholds.
- **Numbers:** 9.29 vs 8.91 Mbps aggregate at 2 m inter-AP spacing (fairness vs selfish), with lower total power; validated in Kom8ndor.
- **Signaling gap:** 802.11bn MAPC today supports only the selfish policy; fairness-optimal allocation needs per-TXOP inter-AP channel-quality reporting not currently defined.

## Key technical points (ZH)
- **问题：**802.11bn Co-SR 下两 AP 同时发射时按 TXOP 的功率分配；对称/容限截断的启发式忽略链路几何。
- **结构性结论：**所有帕累托最优分配中至少一个 AP 满功率 → 二维联合搜索降为两次一维线搜索。
- **离散速率闭式解：**在真实 MCS 阶梯下，PF 最优功率有闭式表达（无需搜索），锚定于 MCS 边界 SINR 门限。
- **数据：**2 米 AP 间距下聚合吞吐 9.29 vs 8.91 Mbps（公平 vs 自私），总功率更低；Kom8ndor 仿真验证。
- **信令缺口：**当前 802.11bn MAPC 信令仅支持自私策略；公平最优分配需要尚未定义的按 TXOP 的 AP 间信道质量上报。

## Why it matters / what's new (EN)
The KB's MAPC coverage (Kom8ndor 2026-06-26, the MAPC tutorial 2026-06-15, TGbn Co-SR comment-resolution digests) has tracked *mechanism* standardization; this is the first entry that treats Co-SR **power allocation as an optimization problem with a provable structure** — the at-least-one-AP-at-max-power Pareto result and the discrete-MCS closed form are both new to this line. Equally notable is the explicit identification of a signaling gap: fairness-optimal Co-SR is unreachable with the currently-drafted MAPC report fields, pointing at concrete D2.x-cycle contribution territory (per-TXOP channel-quality exchange between coordinated APs). The UPF/Bellalta group continues to be the most productive academic source on 802.11bn in this KB.

## Why it matters / what's new (ZH)
KB 中的 MAPC 覆盖（Kom8ndor 2026-06-26、MAPC 教程 2026-06-15、TGbn Co-SR 评审意见摘要）此前跟踪的是*机制*标准化进程；本条目首次将 Co-SR **功率分配作为具有可证明结构的优化问题**处理——"至少一个 AP 满功率"的帕累托结论与离散 MCS 闭式解在该方向均属首次。同样值得注意的是其明确指出的信令缺口：以当前 MAPC 草案的上报字段无法实现公平最优 Co-SR，这直接指向 D2.x 周期的具体贡献方向（协调 AP 间按 TXOP 的信道质量交换）。UPF/Bellalta 团队仍是本 KB 中 802.11bn 方向产出最高的学术来源。
