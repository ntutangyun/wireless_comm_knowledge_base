---
id: 2026-07-13_arxiv-mappo-sla-uav-mec-slicing
date_published: 2026-07-10
date_found: 2026-07-13
type: academic-paper
technology: cellular
title_en: "Multi-Agent Reinforcement Learning for SLA-Aware Network Slicing in UAV-Enabled MEC"
title_zh: "面向 UAV 边缘计算的 SLA 感知网络切片多智能体强化学习框架"
url: "https://arxiv.org/abs/2607.09295"
source_quality: full
topics: [network-slicing, MEC, UAV, MARL, SLA]
topic_primary: network-slicing
topics_secondary: [mec, cellular-ai]
novelty_score: 2
---

## Summary (EN)
Farhoudi, Sasan, Shokrnezhad and Taleb (submitted 2026-07-10) propose a predictive multi-agent reinforcement learning framework for SLA-aware network slicing in UAV-enabled mobile edge computing. Multiple UAVs act as flying edge servers for ground users spread over a 1000×1000 m area, serving three heterogeneous slices — HRLLC (hyper-reliable low latency), eMBB, and mMTC — each with its own delay requirement and SLA threshold. The controller jointly optimizes UAV trajectories, user association, and per-user CPU allocation to minimize SLA violations and energy.

The framework has three components: (1) a lightweight D3QL predictor (LSTM + convolutional layers) that forecasts near-future user locations and task-generation probabilities, letting UAVs reposition *before* congestion; (2) an SLA-aware reward that penalizes violation probability, violation duration, and energy — including *predicted future violations*, steering agents toward proactive rather than reactive control; (3) MAPPO (multi-agent PPO) with centralized training and decentralized execution.

On realistic mobility traces (YJMob100K) with stochastic task arrivals, MAPPO achieves the lowest SLA violation probability and shortest violation duration among non-oracle methods (GA-Search, Greedy, Random), and Predictive-MAPPO approaches Informed-MAPPO (full future knowledge) as UAV count grows — evidence the predictor is good enough to substitute for oracle information. Acknowledged limits: simplified propulsion model, no uplink power optimization, and a visible prediction-reality gap in resource-constrained configurations.

## Summary (ZH)
Farhoudi、Sasan、Shokrnezhad 与 Taleb（2026-07-10 提交）提出了一个面向 UAV 边缘计算（MEC）SLA 感知网络切片的预测式多智能体强化学习框架。多架 UAV 作为飞行边缘服务器，在 1000×1000 米区域内为地面用户提供三类异构切片——HRLLC（超可靠低时延）、eMBB（增强移动宽带）与 mMTC（大规模机器类通信），每类切片有独立的时延要求与 SLA 阈值。控制器联合优化 UAV 轨迹、用户关联与每用户 CPU 资源分配，以最小化 SLA 违约与能耗。

框架包含三部分：（1）轻量级 D3QL 预测模块（LSTM + 卷积层），预测近期用户位置与任务生成概率，使 UAV 能在拥塞发生*之前*主动重定位；（2）SLA 感知奖励函数，惩罚违约概率、违约持续时间与总能耗，并显式纳入*预测的未来违约*，引导智能体从被动响应转向主动控制；（3）采用集中训练、分布式执行的 MAPPO 算法。

在真实移动轨迹（YJMob100K）与随机任务到达下，MAPPO 在非 Oracle 方法（GA 搜索、贪心、随机）中取得最低的 SLA 违约概率与最短违约持续时间；随着 UAV 数量增加，预测式 MAPPO 逼近拥有完整未来信息的 Informed-MAPPO——说明预测模块足以替代 Oracle 信息。作者承认的局限：推进能耗模型简化、未优化上行功率、资源紧张配置下预测与现实仍有差距。

## Key technical points (EN)
- Joint UAV trajectory + user association + CPU allocation across HRLLC/eMBB/mMTC slices, with slice-specific SLA thresholds.
- D3QL mobility/task predictor (LSTM + conv) feeds predicted user state into each agent's observation.
- Shared MAPPO reward penalizes violation probability, violation duration, energy, and *predicted* violations (proactive control).
- Predictive-MAPPO ≈ Informed-MAPPO (oracle future knowledge) at sufficient UAV counts; lowest violation probability/duration among non-oracle baselines.
- Evaluated on YJMob100K real mobility traces; graceful degradation under user-density spikes.

## Key technical points (ZH)
- 在 HRLLC/eMBB/mMTC 三类切片间联合优化 UAV 轨迹、用户关联与 CPU 分配，各切片有独立 SLA 阈值。
- D3QL 移动性/任务预测器（LSTM + 卷积）将预测用户状态注入各智能体的观测。
- MAPPO 共享奖励惩罚违约概率、违约持续时间、能耗与*预测的*未来违约（主动控制）。
- UAV 数量充足时，预测式 MAPPO 逼近拥有完整未来信息的 Informed-MAPPO；在非 Oracle 基线中违约概率/持续时间最低。
- 基于 YJMob100K 真实移动轨迹评估；用户密度突增时性能平滑退化。

## Why it matters / what's new (EN)
This is the same Farhoudi/Shokrnezhad/Taleb group behind 2026-07-08_arxiv-hype-uav-6g-qoais (quality-aware AI service provisioning in UAV-assisted 6G), now attacking the slicing/SLA side of the same UAV-MEC stack. Versus the KB's existing slicing entry (privacy-aware MARL VR slice management, 2606.26123), the new element is the *prediction-in-the-reward-loop* design — violations are penalized before they happen, and the paper quantifies how close learned prediction gets to oracle knowledge. Watch this group for follow-ups on dynamic slice admission and LLM-driven orchestration (named as future work).

## Why it matters / what's new (ZH)
本文与 2026-07-08_arxiv-hype-uav-6g-qoais（UAV 辅助 6G 的质量感知 AI 服务供给）出自同一 Farhoudi/Shokrnezhad/Taleb 团队，这次转向同一 UAV-MEC 栈的切片/SLA 侧。相对 KB 已有的切片条目（隐私感知 MARL VR 切片管理，2606.26123），新意在于*预测进入奖励回路*的设计——在违约发生之前即予惩罚，并量化了学习预测与 Oracle 信息的接近程度。该团队已预告动态切片准入与 LLM 驱动编排的后续工作，值得跟踪。
