---
id: 2026-11-18_arxiv-elastic-semantic-communications-implicit-reasoning-device-edge-agents
date_published: 2026-11-16
date_found: 2026-11-18
technology: edge-ai
type: academic-paper
title_en: "Elastic semantic communications: device runs variable-depth implicit reasoning and sends intermediate states to the edge only when channel-aware predicted gain is positive (Sudoku-Extreme, AWGN links)"
title_zh: "弹性语义通信：设备端运行可变深度隐式推理，仅当信道感知的预测增益为正时才把中间状态传至边缘（Sudoku-Extreme，AWGN 链路）"
url: "https://arxiv.org/abs/2611.20399"
source_quality: full
topics: [elastic-semantic-communication, implicit-reasoning, device-edge-inference, ai-agent-networks, state-transfer, wireless-conditions]
topic_primary: task-oriented-communication
topics_secondary: [compute-offloading, edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

This article (Yu, Wu, Fan and Zammit; UESTC and Xi'an Jiaotong University among the affiliations) proposes elastic semantic communications (ESC) for networks of AI agents. Instead of only tuning semantic representations and radio resources, ESC adapts at runtime how intensively an existing capability executes (vertical elasticity) and which capabilities participate (horizontal elasticity), linked through the expected marginal value of extra information and computation.

The realisation is a device-edge mechanism: the device runs an implicit-reasoning model (iterative latent-state updates with shared parameters, so inference depth is adjustable) and, when worthwhile, sends the intermediate reasoning state over the wireless link so the edge continues the computation. A lightweight predictor (for example a regression tree) trained offline estimates the continuation gain from local inference statistics and the state-transfer SNR; the edge is invoked only if the predicted gain is positive. Evaluation uses Sudoku-Extreme with a frozen pretrained equilibrium model. Link computed over: a simulated wireless link, with the task-input link and the state-transfer link both modelled as complex AWGN channels.

## Summary (ZH)

本文（作者 Yu、Wu、Fan、Zammit，所属机构含电子科技大学与西安交通大学）为 AI 智能体网络提出弹性语义通信（ESC）。ESC 不止调节语义表示与无线资源，而是在运行时调整已有能力的执行强度（纵向弹性）以及参与的能力集合（横向弹性），并通过额外信息与计算的期望边际价值把二者联系起来。

具体实现是设备-边缘机制：设备运行隐式推理模型（以共享参数迭代更新潜在状态，因而推理深度可调），在值得时把中间推理状态经无线链路发送，由边缘继续计算。一个轻量预测器（如回归树）基于本地推理统计与状态传输 SNR 离线训练，估计继续计算的增益，仅当预测增益为正时才调用边缘。评估使用 Sudoku-Extreme 与冻结的预训练平衡模型。所经链路：仿真无线链路，任务输入链路与状态传输链路均建模为复高斯白噪声（AWGN）信道。

## Key technical points (EN)

- Depth scaling: at 5 dB input SNR, raising inference depth from 8 to 32 iterations lifts accuracy from 58.37% to 71.61%; at 10 dB, from 64.81% to 80.66%.
- Computation cannot fully compensate a poor link: at −5 dB, accuracy reaches only 22.55% even after 64 iterations, versus 86.33% at 10 dB.
- Edge continuation experiments fix the input SNR at 10 dB, run eight local iterations, and vary the state-transfer SNR; device-only accuracy is 62.73% at 8 local iterations; always-edge falls to 6.53% at −5 dB and rises to 72.62% at 10 dB; at 10 dB the task-and-SNR-aware policy matches 72.62% with only 37.30% edge invocations, cutting state-transfer overhead by 62.70%.
- Open challenges listed: defining and measuring semantic sufficiency, joint orchestration of the two elasticities, capability discovery and semantic interoperability, and signalling for elastic interfaces.

## Key technical points (ZH)

- 深度缩放：输入 SNR 为 5 dB 时，推理深度从 8 增至 32 次迭代，准确率从 58.37% 升至 71.61%；10 dB 时从 64.81% 升至 80.66%。
- 计算无法完全弥补差的链路：在 −5 dB 时，即使 64 次迭代准确率也只有 22.55%，而 10 dB 时为 86.33%。
- 边缘继续计算实验固定输入 SNR 为 10 dB、本地运行 8 次迭代、改变状态传输 SNR；本地 8 次迭代时仅设备执行准确率 62.73%；始终边缘在 −5 dB 降至 6.53%、10 dB 升至 72.62%；任务与 SNR 感知策略在 10 dB 以 37.30% 的边缘调用率达到同样 72.62%，状态传输开销减少 62.70%。
- 所列开放问题：语义充分性的定义与度量、两种弹性的联合编排、能力发现与语义互操作，以及弹性接口的信令。

## Why it matters / what's new (EN)

It treats both the depth of local reasoning and the decision to ship intermediate reasoning states to the edge as functions of channel quality, which links variable-depth inference to a semantic-communication view. The evidence is one puzzle benchmark over idealised AWGN links, so it is a framework illustration rather than a system measurement.

## Why it matters / what's new (ZH)

它把本地推理的深度以及是否把中间推理状态送往边缘，都视为信道质量的函数，把可变深度推理与语义通信视角联系起来。证据只是一个谜题基准加理想化 AWGN 链路，属于框架示意而非系统实测。

## Images

![ESC motivating scenarios: fixed configuration, adjustable processing effort, added capabilities | ESC 动机场景：固定配置、可调处理强度、增加能力](https://arxiv.org/html/2611.20399v1/Fig1_ESC_Motivating_Scenarios.png)
