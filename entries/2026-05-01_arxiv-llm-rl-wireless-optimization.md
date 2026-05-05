---
id: 2026-05-01_arxiv-llm-rl-wireless-optimization
date_found: 2026-05-01
date_published: 2026-02-15
type: academic-paper
title_en: "Large Language Model (LLM)-enabled Reinforcement Learning for Wireless Network Optimization"
title_zh: "基于大语言模型的强化学习在无线网络优化中的应用"
url: "https://arxiv.org/abs/2602.13210"
source_quality: full
topics: [agentic-AI, generative-AI, MAC-layer, scheduling]
topic_primary: ai-for-wifi
topics_secondary: [agentic-wifi]
novelty_score: 4
---

## Summary (EN)

Zheng, Zhang, Niyato, et al. (February 2026) propose using LLMs not as the *agent* but as a **state-representation and semantic-extraction front-end** for traditional reinforcement learning on wireless-network optimisation problems. The argument: high-dimensional wireless state spaces (channel busy fractions, interference graphs, queue lengths, neighbour BSS context, traffic-class semantics) blow up the input dimension for standard RL agents. An LLM that pre-digests the raw state into compact, semantically-meaningful features can reduce that explosion materially.

The paper covers the full protocol stack — physical, data link, network, transport, application — and shows how LLM-front-ended RL can be applied at each layer. The contribution that's most concrete is at the MARL (multi-agent RL) layer: case studies in **service migration, request routing, and topology generation for UAV-satellite networks**, with the LLM doing the semantic abstraction and the RL agent doing the optimisation.

## Summary (ZH)

Zheng、Zhang、Niyato 等人（2026 年 2 月）提出把 LLM 作为传统强化学习用于无线网络优化时的**状态表示与语义抽取前端**，而非智能体本身。论点是：无线状态空间（信道忙占比、干扰图、队列长度、邻 BSS 上下文、流量类别语义）维数极高，会让标准 RL 智能体的输入维度炸开。让 LLM 把原始状态预先消化成紧凑、语义化的特征，可以显著缩减这一爆炸。

论文覆盖完整协议栈 —— 物理层、数据链路层、网络层、传输层、应用层 —— 展示如何在每一层使用"LLM 前端 + RL"。最具体的贡献集中在 MARL（多智能体 RL）层：**业务迁移、请求路由、UAV-卫星网络拓扑生成**等案例研究，由 LLM 做语义抽象，RL 智能体做优化。

## Key technical points (EN)

- **LLM as feature extractor**, not as agent — keeps RL exploitation tractable in high-dim wireless state
- **Multi-layer applicability** demonstrated: PHY through application
- **MARL extension** with LLM-aided state representation
- **Case studies:** service migration, request routing, UAV-satellite topology

## Key technical points (ZH)

- **LLM 作为特征抽取器**，而非智能体本身 —— 让 RL 的利用阶段在高维无线状态下仍可行
- **多层适用性**得到展示：PHY → 应用层
- 在 MARL 中扩展，加入 LLM 辅助状态表示
- **案例：** 业务迁移、请求路由、UAV-卫星拓扑

## Why it matters / what's new (EN)

- **Counter-narrative to "LLM as agent."** Most LLM-for-Wi-Fi work has the LLM at the policy-output level (see MAPC-LLM). This paper makes the case that the *bigger* near-term win is using the LLM upstream — for state representation. Cheaper, lower-latency, and easier to deploy than runtime LLM-policy decisions.
- **Pairs with WirelessAgent++ (`2026-05-01_arxiv-wirelessagent-plus-plus.md`):** that paper automates workflow design over a fixed RL substrate; this paper changes what the substrate consumes.

## Why it matters / what's new (ZH)

- **对"LLM 作为智能体"叙事的反向论证。** 当前多数 LLM-for-Wi-Fi 工作把 LLM 放在策略输出层（参见 MAPC-LLM）。本论文论证：近期更大的收益来自把 LLM 放在*上游* —— 做状态表示。代价更低、时延更低、更容易部署。
- **与 WirelessAgent++（`2026-05-01_arxiv-wirelessagent-plus-plus.md`）形成搭配：** 该论文在固定 RL 基础上自动化工作流设计；本论文改变 RL 基础所消费的输入。
