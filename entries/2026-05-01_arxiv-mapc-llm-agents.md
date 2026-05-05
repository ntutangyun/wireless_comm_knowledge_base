---
id: 2026-05-01_arxiv-mapc-llm-agents
date_found: 2026-05-01
date_published: 2025-11-26
type: academic-paper
title_en: "Learning Multi-Access Point Coordination in Agentic AI Wi-Fi with Large Language Models"
title_zh: "用大语言模型学习智能体 AI Wi-Fi 中的多接入点协调"
url: "https://arxiv.org/abs/2511.20719"
source_quality: full
topics: [802.11bn, MLO, agentic-AI, MAC-layer, scheduling]
topic_primary: mapc-cosr
topics_secondary: [agentic-wifi, ai-for-wifi]
novelty_score: 5
---

## Summary (EN)

Fan et al. (Nov 2025) propose treating each Wi-Fi access point as an autonomous LLM agent that negotiates Multi-AP Coordination (MAPC) decisions through natural-language dialogue with neighboring APs. The paper frames MAPC — the headline 802.11bn feature for dense-deployment interference mitigation — as a multi-agent reasoning problem rather than a traditional rule-based or RL-based optimization. Each AP-agent maintains memory, performs reflection over past decisions, and can invoke "tools" (read radio metrics, propose airtime allocations, vote on coordinated-beamforming pairings). Agents converge on coordination strategies via iterative dialogue, demonstrated to beat spatial-reuse baselines.

The novelty is the *coordination-as-conversation* framing. Prior MAPC literature is dominated by centralized controllers, distributed game-theoretic solvers, or DRL agents trained on fixed reward functions. LLM-mediated negotiation is portable across topology changes, surfaces interpretable rationales for each scheduling decision (the agent literally *says* why it yielded), and avoids retraining when the BSS membership changes. The downside is latency and compute cost: each "round" of dialogue likely runs at human-conversation timescales (seconds), not the µs–ms scale that 802.11 MAC scheduling normally lives in.

The paper does not specify any concrete on-the-wire protocol changes. The LLM agents communicate over an unspecified inter-AP backhaul, and the per-AP decisions presumably translate into existing standard primitives (RU allocation, TWT scheduling). This leaves the inter-AP coordination protocol layer as a clean open question for the standards community.

## Summary (ZH)

Fan 等人（2025 年 11 月）提出把每个 Wi-Fi 接入点视为一个自主的大语言模型（LLM）智能体，通过与邻居 AP 进行自然语言对话来协商多 AP 协调（MAPC）决策。论文把 MAPC —— 802.11bn 用于密集部署干扰抑制的标志性特性 —— 框定为多智能体推理问题，而不是传统的基于规则或基于强化学习的优化。每个 AP 智能体保留记忆、对历史决策进行反思，并可以调用"工具"（读取无线指标、提议空时分配、对协同波束成形配对投票）。智能体通过迭代对话收敛到协调策略，论文展示其在仿真中优于空间复用基线。

新颖之处在于"把协调当成会话（coordination-as-conversation）"的框架。此前的 MAPC 文献以集中式控制器、分布式博弈论求解器、或基于固定奖励函数训练的 DRL 智能体为主。基于 LLM 的协商对拓扑变化具有迁移性，每次调度决策都能给出可解释的依据（智能体会"说出"为何让出资源），并且 BSS 成员变化时无需重新训练。代价是时延和算力开销：每"轮"对话很可能运行在人类会话级时间尺度（秒级），而非 802.11 MAC 调度通常所在的 µs–ms 量级。

论文没有指定任何具体的空口协议改动。LLM 智能体在某种未指定的 AP 间回程链路上通信，每个 AP 的决策被假设映射到已有标准原语（RU 分配、TWT 调度）。这就把 AP 间协调协议层留作一个对标准化社区开放的问题。

## Key technical points (EN)

- AP-as-LLM-agent: each AP runs an LLM (size unspecified) with memory, reflection, and tool-use
- Coordination via natural-language dialogue between neighboring APs (over unspecified backhaul)
- Compared favorably to spatial-reuse baselines on simulated dense BSS scenarios
- Time scale of dialogue is seconds-level, not µs-level — practical only for slow-loop coordination decisions, not per-frame scheduling
- Concrete protocol layer is left abstract — the LLM outputs are mapped to standard 802.11 primitives but the mapping is not specified

## Key technical points (ZH)

- AP 即 LLM 智能体：每个 AP 运行一个 LLM（未给出规模），具备记忆、反思和工具调用能力
- 协调机制：邻居 AP 之间通过自然语言对话进行（在未指定的回程链路上）
- 仿真结果：在密集 BSS 场景下优于空间复用基线
- 对话时间尺度为秒级，而非 µs 级 —— 因此只适用于慢回路协调决策，不能用于逐帧调度
- 协议层仍属抽象描述 —— LLM 的输出被映射到既有 802.11 原语，但映射方式未给出

## Why it matters / what's new (EN)

Highest-novelty entry of today's run. Significant for two reasons:

- It is the first paper to demonstrate LLM agents in the MAPC role of 802.11bn, lining up with the most active TGbn comment cluster.
- It exposes the gap between "coordination decided by reasoning agents" and "coordination expressed in standardized 802.11 frames". The former is increasingly proven; the latter is still wide open.

Pairs naturally with on-device-LLM-for-roaming work — together they sketch out a Wi-Fi network where both APs and STAs run LLM agents, with MAC-layer signaling as the only standardized contract between them.

## Why it matters / what's new (ZH)

本次巡检中新颖度最高的条目，其重要性体现在两点：

- 这是首篇在 802.11bn MAPC 角色中真正落地 LLM 智能体的论文，正对应 TGbn 当前最活跃的意见聚集区。
- 它揭示了"由推理智能体决定的协调"与"以标准化 802.11 帧表达的协调"之间的鸿沟。前者已逐步被证明可行；后者依然完全开放。

与端侧 LLM 漫游工作天然互补 —— 二者共同勾勒出这样一种 Wi-Fi 网络：AP 和 STA 两端都运行 LLM 智能体，而 MAC 层信令是它们之间唯一被标准化的契约。

## Images

![Agentic workflow and inter-AP coordination protocol | 智能体工作流与 AP 间协调协议](https://arxiv.org/html/2511.20719/x1.png)
![Slot-by-slot transmission strategies under different topologies | 不同拓扑下的逐时隙发送策略](https://arxiv.org/html/2511.20719/x2.png)
![Coexistence with legacy CSMA/CA APs | 与传统 CSMA/CA AP 的共存](https://arxiv.org/html/2511.20719/x3.png)
