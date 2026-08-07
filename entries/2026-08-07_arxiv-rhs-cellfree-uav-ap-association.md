---
id: 2026-08-07_arxiv-rhs-cellfree-uav-ap-association
date_published: 2026-08-04
date_found: 2026-08-07
type: academic-paper
technology: cellular
title_en: "AP Association for RHS-Enabled Cell-Free Uplink MIMO in Industrial Indoor UAV Networks"
title_zh: "工业室内无人机网络中可重构全息表面（RHS）无蜂窝上行 MIMO 的接入点关联方法"
url: "https://arxiv.org/abs/2608.03752"
source_quality: full
topics: [cell-free-MIMO, RHS, UAV, 6G]
topic_primary: cellular-massive-mimo
topics_secondary: [6g-vision]
novelty_score: 2
---

## Summary (EN)

A Shanghai Jiao Tong University-led team (Wu, Chen, Li, Wu, Wang; with XJTU, Jiangnan, BUPT) studies a constraint unique to reconfigurable holographic surface (RHS) hardware in cell-free networks: a single-feed RHS access point has one amplitude-constrained receive pattern and emits one scalar output, so every UAV it serves shares the same analog receive pattern. Classic AP-association metrics (distance, large-scale fading, per-user SINR) implicitly assume per-user combiners and therefore mis-rank APs for RHS hardware.

The paper proposes a post-RHS observation-quality score — desired signal power over residual inter-UAV leakage plus filtered noise, evaluated through a fixed probing pattern — and a two-stage algorithm: a pilot phase ranks candidate APs by this score and keeps the top-J per UAV; the data phase then optimizes each AP's RHS amplitude coefficients by projected-gradient descent on a sum-of-ratios objective.

Three analytical findings shape deployment: the nearest AP is often not the best (in simulation, 15–25% of cases prefer a farther AP with less leakage); for fixed horizontal distance r there is an optimal AP–UAV vertical separation z* = r/√α from the height-angle trade-off; and marginal rate gains saturate after 3–4 APs per UAV. In a simulated 40×30×12 m hall (16 ceiling APs with 256-element RHS, 24 UAVs in clusters), the method improves minimum UAV rate by 20–40% over nearest-AP association and leads all benchmarks on spectral efficiency, Jain fairness, and energy efficiency.

## Summary (ZH)

上海交通大学牵头的团队（Wu、Chen、Li、Wu、Wang；合作单位：西安交大、江南大学、北邮）研究了无蜂窝网络中可重构全息表面（RHS，一种由大量可调幅度单元构成的超表面天线）硬件特有的约束：单馈源 RHS 接入点只有一个幅度受限的接收方向图、输出一个标量信号，因此它服务的所有无人机共享同一模拟接收方向图。经典的 AP 关联度量（距离、大尺度衰落、逐用户 SINR）隐含假设每用户独立合并器，因而对 RHS 硬件会排错序。

论文提出"RHS 后观测质量"评分——通过固定探测方向图评估期望信号功率与残余无人机间泄漏加滤波噪声之比——以及两阶段算法：导频阶段按该评分对候选 AP 排序、每架无人机保留前 J 个；数据阶段用投影梯度下降在比率和目标上优化各 AP 的 RHS 幅度系数。

三个分析结论指导部署：最近的 AP 常常不是最优（仿真中 15–25% 的情形更远但泄漏更小的 AP 胜出）；水平距离 r 固定时存在最优垂直间距 z* = r/√α（高度-角度权衡）；每架无人机的边际速率增益在 3–4 个 AP 后饱和。在 40×30×12 米大厅仿真中（16 个吸顶 AP、每个 256 单元 RHS、24 架成簇无人机），该方法将无人机最低速率较最近 AP 关联提升 20–40%，并在频谱效率、Jain 公平性与能效上全面领先各基线。

## Key technical points (EN)

- Single-feed RHS constraint: one amplitude pattern (0 ≤ b ≤ 1 per element) + one scalar output per AP — all served UAVs share the analog front-end.
- Association score = post-RHS SINR-like ratio through a fixed probing pattern; captures desired power, inter-UAV leakage, and noise, unlike distance/LSF metrics.
- Two-stage: pilot-phase top-J ranking → data-phase projected-gradient RHS coefficient optimization (sum-of-ratios).
- Distance-order reversal in 15–25% of cases; optimal vertical separation z* = r/√α; cluster gains saturate at 3–4 APs.
- 40×30×12 m hall, 4×4 ceiling AP grid, 256-element RHS, 24 UAVs: minimum-rate +20–40% vs nearest-AP; best fairness and energy efficiency.

## Key technical points (ZH)

- 单馈源 RHS 约束：每 AP 一个幅度方向图（每单元 0 ≤ b ≤ 1）+ 一个标量输出——所有被服务无人机共享模拟前端。
- 关联评分 = 经固定探测方向图的 RHS 后类 SINR 比值；同时刻画期望功率、无人机间泄漏与噪声，优于距离/大尺度衰落度量。
- 两阶段：导频阶段 top-J 排序 → 数据阶段投影梯度优化 RHS 幅度系数（比率和目标）。
- 15–25% 情形出现距离序反转；最优垂直间距 z* = r/√α；集群增益在 3–4 个 AP 后饱和。
- 40×30×12 米大厅、4×4 吸顶 AP 网格、256 单元 RHS、24 架无人机：最低速率较最近 AP 提升 20–40%；公平性与能效最佳。

## Why it matters / what's new (EN)

The cellular-massive-mimo bin covers cell-free architectures mostly with conventional phased-array assumptions; this is the KB's first entry on how holographic-surface hardware changes the *association* problem itself (shared analog pattern → leakage-aware selection), not just beamforming. The deployment rules (leakage-aware selection, height optimization, 3–4-AP clusters) are concrete guidance for industrial indoor UAV inspection networks, a 6G-flavored use case gaining traction.

## Why it matters / what's new (ZH)

本知识库 cellular-massive-mimo 主题下的无蜂窝架构条目多基于传统相控阵假设；本条目首次记录全息表面硬件如何改变**关联**问题本身（共享模拟方向图 → 需泄漏感知的选择），而不只是波束赋形。文中部署规则（泄漏感知选择、高度优化、3–4 AP 集群）为工业室内无人机巡检网络——一个渐受关注的 6G 场景——提供了具体指导。
