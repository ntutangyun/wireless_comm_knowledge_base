---
id: 2026-11-25_arxiv-coslice-llm-coordinated-multi-agent-rl-oran-slicing-prb-allocation
date_published: 2026-11-18
date_found: 2026-11-25
type: academic-paper
technology: cellular
title_en: "CoSlice: Coordinated Multi-Agent Reinforcement Learning for 5G Network Slicing Allocation"
title_zh: "CoSlice：面向 5G 网络切片分配的协同多智能体强化学习"
url: "https://arxiv.org/abs/2611.23909"
source_quality: full
topics: [network-slicing, O-RAN, multi-agent-RL, multi-objective-RL, LLM-coordinator, PRB-allocation, ORANSlice, OpenAirInterface, near-RT-RIC, non-RT-RIC]
topic_primary: network-slicing
topics_secondary: [open-ran, cellular-ai]
novelty_score: 3
---

## Summary (EN)

Pengxin Wang and Jingdi Chen (University of Arizona) and Nakjung Choi (Nokia and Bell Labs) present CoSlice, a framework for inter-slice physical-resource-block (PRB) allocation in O-RAN. One preference-conditioned agent per slice runs in the Near-RT control loop; each sees only its own slice's traffic and QoS state plus a slice-specific preference weighting SLA satisfaction against PRB saving, and outputs a PRB request. An LLM coordinator in the Non-RT RIC reads aggregated monitoring reports over a longer horizon and adjusts the agents' preferences. The authors motivate the split by the contrast between roughly 1 ms MAC scheduling and 10 ms to 1 s Near-RT RIC loops, which leave no room for LLM decoding in the fast loop.

The slice interaction is formulated as a multi-objective partially observable stochastic game (mo-POSG); the paper states the existence of a Preference Correlated Equilibrium and a sublinear regret bound. Training has two stages: preference-conditioned multi-objective pretraining with a PPO-style clipped objective, then multi-agent joint training based on TD3 with twin centralized critics. Evaluation uses ORANSlice on OpenAirInterface with RF simulation (OAI 5G core, ORANSlice gNB, containerized nrUE instances) in a three-slice (eMBB, URLLC, mMTC) and a six-slice setting against Equal, Zipper, xSlice and COQRA baselines. The authors state the code will be released after review.

## Summary (ZH)

Pengxin Wang 与 Jingdi Chen（亚利桑那大学）及 Nakjung Choi（诺基亚与贝尔实验室）提出 CoSlice，一个用于 O-RAN 中切片间物理资源块（PRB）分配的框架。每个切片在近实时控制环中有一个偏好条件化智能体，只观察本切片的流量与 QoS 状态以及一个在 SLA 满足与 PRB 节省之间加权的切片偏好，输出 PRB 请求。非实时 RIC 中的 LLM 协调器在较长时间尺度上读取汇总监测报告并调整各智能体的偏好。作者以约 1 ms 的 MAC 调度与 10 ms 至 1 s 的近实时 RIC 控制环为由说明这种分层：快速环路没有空间容纳 LLM 解码。

切片间交互被建模为多目标部分可观测随机博弈（mo-POSG）；论文表述了偏好相关均衡的存在性及次线性遗憾界。训练分两个阶段：采用 PPO 式截断目标的偏好条件化多目标预训练，以及基于 TD3、带双中心化评论家的多智能体联合训练。评估使用 OpenAirInterface 上的 ORANSlice 与射频仿真（OAI 5G 核心网、ORANSlice gNB、容器化 nrUE），在三切片（eMBB、URLLC、mMTC）与六切片设置下，与 Equal、Zipper、xSlice 和 COQRA 基线对比。作者表示代码将在评审后公开。

## Key technical points (EN)

- Cost design: each slice has a two-component cost vector, relative SLA violation (shortfall or excess per SLA metric, averaged over the slice's metrics) and normalized PRB request (request divided by the maximum PRB budget); preferences are sampled away from extreme weightings such as [1,0] and [0,1].
- SLA definitions used: eMBB at least 3.5 Mbps downlink per active user; URLLC latency and jitter below 5 ms with packet loss below 0.5%; mMTC at least 90% event delivery with latency below 20 ms and loss below 10%. The mMTC slice is modeled as an aggregate Poisson event stream rather than emulated devices.
- Workloads: three-slice has four DASH-video UEs for eMBB and five UDP gaming UEs for URLLC; the six-slice setting splits eMBB into video-on-demand, live-streaming and bulk transfer, and URLLC into gaming and control-loop slices, with mMTC aggregated.
- Headline result: against the best-performing baseline, CoSlice reduces mean/P95/P99 relative SLA violation by 19.4%/30.2%/0.2% in the three-slice setting and 37.9%/37.4%/12.7% in the six-slice setting. Per-slice plots show gains concentrated on eMBB with moderate trade-offs on URLLC and mMTC (three-slice) and on eMBB Video and URLLC Gaming (six-slice).
- Ablation: adding the LLM coordinator to the independent-policy baseline reduces mean/P95/P99 violations by 7.6%/17.2%/8.9% (three-slice) and 1.0%/11.9%/7.2% (six-slice); adding MORL pretraining then gives a further 17.6%/18.4%/29.6% and 47.0%/49.9%/12.8%.
- LLM coordinator: Qwen3-4B-Instruct served locally with vLLM; given a prompt and a 100-step measured report it returns a short Think statement plus per-slice reasons and actions (increase SLA priority, hold, or increase PRB-saving priority), for example moving the SLA preference from 0.50 to 0.60 for eMBB and URLLC and from 0.50 to 0.40 for mMTC in the case study.
- Control latency (AMD EPYC 9354, RTX PRO 6000 Blackwell GPU): xSlice 8.4 +/- 0.8 ms, CoSlice MLP sub-agents 6.5 +/- 0.8 ms, LLM agent 508.2 +/- 8.8 ms end to end; the authors note all stay below their control periods.

## Key technical points (ZH)

- 代价设计：每个切片有二维代价向量，即相对 SLA 违约（各 SLA 指标不足或超限的比例，对切片内指标取平均）与归一化 PRB 请求（请求除以最大 PRB 预算）；采样偏好时避开 [1,0]、[0,1] 等极端权重。
- 使用的 SLA 定义：eMBB 每活跃用户下行至少 3.5 Mbps；URLLC 时延与抖动低于 5 ms、丢包率低于 0.5%；mMTC 事件送达率至少 90%、时延低于 20 ms、丢包率低于 10%。mMTC 切片被建模为聚合泊松事件流，而非仿真具体设备。
- 负载：三切片设置中 eMBB 有四个 DASH 视频 UE，URLLC 有五个 UDP 游戏 UE；六切片设置将 eMBB 拆为点播视频、直播与大文件传输，将 URLLC 拆为游戏与控制环路，mMTC 保持聚合。
- 主要结果：相对表现最好的基线，CoSlice 在三切片设置中将相对 SLA 违约的均值/P95/P99 分别降低 19.4%/30.2%/0.2%，在六切片设置中分别降低 37.9%/37.4%/12.7%。分切片曲线显示收益集中在 eMBB，三切片中 URLLC 与 mMTC、六切片中 eMBB 视频与 URLLC 游戏有一定折中。
- 消融：在独立策略基线上加入 LLM 协调器，三切片的均值/P95/P99 违约分别降低 7.6%/17.2%/8.9%，六切片降低 1.0%/11.9%/7.2%；再加入 MORL 预训练，则进一步降低 17.6%/18.4%/29.6% 与 47.0%/49.9%/12.8%。
- LLM 协调器：Qwen3-4B-Instruct，使用 vLLM 本地部署；输入提示与 100 步测量报告，输出一句 Think 陈述以及每个切片的理由和动作（提高 SLA 优先级、保持、或提高 PRB 节省优先级），例如案例中 eMBB 与 URLLC 的 SLA 偏好由 0.50 升至 0.60，mMTC 由 0.50 降至 0.40。
- 控制时延（AMD EPYC 9354、RTX PRO 6000 Blackwell GPU）：xSlice 为 8.4 +/- 0.8 ms，CoSlice MLP 子智能体为 6.5 +/- 0.8 ms，LLM 智能体端到端为 508.2 +/- 8.8 ms；作者指出均低于各自的控制周期。

## Why it matters / what's new (EN)

Relative to the per-slice and centralized RL slicing baselines it compares against, the paper's distinguishing choice is to keep per-slice policies fast and local while delegating objective reweighting to a slower LLM at the Non-RT RIC, with the LLM's textual reasoning available per decision. Results come from an emulated OAI/ORANSlice environment with synthetic slice workloads, and the paper reports no over-the-air or operator-network trial.

## Why it matters / what's new (ZH)

相对于其所比较的按切片与集中式强化学习切片基线，论文的区别在于：让各切片策略保持快速、本地化，把目标重加权交给非实时 RIC 中较慢的 LLM，并可为每次决策提供 LLM 的文字推理。结果来自带合成切片负载的 OAI/ORANSlice 仿真环境，论文未报告空口或运营商网络试验。

## Images

None.
