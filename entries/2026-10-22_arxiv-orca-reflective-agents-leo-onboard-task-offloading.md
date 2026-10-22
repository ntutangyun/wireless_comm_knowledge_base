---
id: 2026-10-22_arxiv-orca-reflective-agents-leo-onboard-task-offloading
date_published: 2026-10-20
date_found: 2026-10-22
technology: satellite
type: academic-paper
title_en: "ORCA: Onboard Reflective Collaborative Agents for Reliable Task Offloading in LEO Satellite Networks"
title_zh: "ORCA：面向低轨卫星网络可靠任务卸载的星上反思协作智能体"
url: "https://arxiv.org/abs/2610.28404"
source_quality: full
topics: [task-offloading, inter-satellite-links, onboard-LLM, multi-agent, Walker-delta, malicious-nodes, robustness]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Geng, Hao, Wu, Liu, Jiang, Cao, Meng, Pan and co-authors (arXiv 2610.28404, submitted 20 October 2026) address decentralized task offloading among LEO satellites that have heterogeneous computing capability, rapidly changing inter-satellite links (ISLs) and uncertain neighbor behavior, under partial observation.

ORCA organizes each offloading decision into a four-agent Perceive, Reason, Act, Learn loop. Perceive converts the task and source-satellite state into an intent representation and a self-assessment; Reason ranks candidates from visible-neighbor observations and any prior diagnosis; Act commits to local execution or a visible neighbor; Learn judges the observed outcome and returns accept, retry or terminate with corrective feedback (retries are capped at two executed rounds).

The simulated setup is a 60-satellite Walker-delta constellation (6 planes, 600 km, 53 degrees) with 36 weak and 24 strong satellites running INT4-quantized Qwen3-8B and Qwen3-14B models, an ISL payload rate of 500 MB/s and a 5,000 km range. Baselines are random selection, independent DQN, multi-agent DQN and MAPPO. In the cooperative case, against multi-agent DQN, ORCA reaches a 67.76% task success rate (+1.56 points), 12.72 J versus 13.94 J per task and 0.547 s versus 0.748 s delay. With 25% of satellites unreliable (dropping tasks with probability 0.9), ORCA's success is 46.53% (+8.12 points over multi-agent DQN) and its robustness retention is 68.7% against about 58% for the learning baselines. As setup facts, the results come from a ground simulation and the LLM inference latency and energy are configured values rather than measurements; the authors list hardware-in-the-loop testing as future work.

## Summary (ZH)

Geng、Hao、Wu、Liu、Jiang、Cao、Meng、Pan 等（arXiv 2610.28404，2026 年 10 月 20 日提交）研究在部分可观测条件下，计算能力异构、星间链路（ISL）快速变化且邻星行为不确定的低轨卫星之间的分布式任务卸载。

ORCA 把每次卸载决策组织成由四个智能体构成的“感知、推理、执行、学习”循环。感知智能体把任务和源卫星状态转换为意图表示与自评；推理智能体根据可见邻星观测和既有诊断对候选对象排序；执行智能体决定本地执行或交给某个可见邻星；学习智能体评判观测到的结果，返回接受、重试或终止并给出纠正反馈（重试最多执行两轮）。

仿真设置为 60 颗卫星的 Walker-delta 星座（6 个轨道面、600 km、53 度），其中 36 颗弱算力、24 颗强算力卫星，分别运行 INT4 量化的 Qwen3-8B 和 Qwen3-14B，ISL 载荷速率 500 MB/s、距离 5,000 km。基线为随机选择、独立 DQN、多智能体 DQN 和 MAPPO。在协作场景下，相对多智能体 DQN，ORCA 的任务成功率为 67.76%（高 1.56 个百分点），每任务能耗 12.72 J 对 13.94 J，时延 0.547 s 对 0.748 s。当 25% 的卫星不可靠（以 0.9 的概率丢弃任务）时，ORCA 的成功率为 46.53%（比多智能体 DQN 高 8.12 个百分点），鲁棒性保持率为 68.7%，学习类基线约为 58%。作为设置事实，结果来自地面仿真，LLM 推理时延与能耗是配置值而非实测；作者将硬件在环测试列为后续工作。

## Key technical points (EN)

- **Problem**: decentralized onboard task offloading under heterogeneous compute, changing ISLs and unreliable neighbors.
- **Architecture**: four-agent Perceive-Reason-Act-Learn loop; Learn can accept, retry (max two executed rounds) or terminate.
- **Setup**: 60-satellite Walker-delta, 600 km, 53 degrees; 36 weak (4 Gcycle/s, 15 W) and 24 strong (12 Gcycle/s, 25 W) satellites; INT4 Qwen3-8B / Qwen3-14B; 500 MB/s ISL.
- **Cooperative results**: 67.76% success; -8.8% energy and -26.9% delay versus multi-agent DQN.
- **Malicious results**: 25% of nodes drop tasks with probability 0.9; ORCA 46.53% success, 68.7% robustness retention.
- **Setup facts and observations**: ground simulation and configured LLM latency/energy are setup facts; the failure evaluation is one random-drop model (25% of nodes, drop probability 0.9), an observation of this entry.

## Key technical points (ZH)

- **问题**：在算力异构、ISL 变化、邻星不可靠条件下的分布式星上任务卸载。
- **架构**：感知-推理-执行-学习四智能体循环；学习智能体可接受、重试（最多执行两轮）或终止。
- **设置**：60 星 Walker-delta，600 km、53 度；36 颗弱算力（4 Gcycle/s、15 W）与 24 颗强算力（12 Gcycle/s、25 W）卫星；INT4 的 Qwen3-8B / Qwen3-14B；ISL 500 MB/s。
- **协作场景结果**：成功率 67.76%；相对多智能体 DQN，能耗降低 8.8%、时延降低 26.9%。
- **恶意节点结果**：25% 节点以 0.9 概率丢弃任务；ORCA 成功率 46.53%，鲁棒性保持率 68.7%。
- **设置事实与观察**：地面仿真与配置的 LLM 时延/能耗是设置事实；故障评估仅用一种随机丢弃模型（25% 节点、丢弃概率 0.9），为本条目的观察。

## Why it matters / what's new (EN)

The paper places LLM-based reflective agents inside a LEO constellation offloading loop and measures robustness to unreliable nodes against reinforcement-learning baselines. Figures are as stated in the paper; they come from simulation with configured, not measured, LLM costs.

## Why it matters / what's new (ZH)

论文把基于 LLM 的反思智能体放进低轨星座的卸载循环，并相对强化学习基线衡量对不可靠节点的鲁棒性。数字来自论文；其为仿真结果，LLM 开销为配置值而非实测。

## Images

None.
