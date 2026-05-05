---
id: ai-for-wifi
last_updated: 2026-05-05
---

## Current state (EN)

This bin covers **machine learning, reinforcement learning, and LLM-driven optimisation of Wi-Fi PHY / MAC parameters** — work where the *output* is a radio decision (CW selection, scheduling, spatial-reuse choice, power control, link adaptation, channel allocation) and the *input* is the network state. The bin is the home for "ML/RL/LLM for Wi-Fi" that doesn't sit in a more specific standards-track bin. By design it stays small: when a paper applies ML to a specific 802.11 mechanism (Co-SR / MLO / sensing), the standards-track topic wins as `topic_primary` and `ai-for-wifi` becomes a secondary tag.

Two papers are primary here today. `2026-05-01_arxiv-llm-rl-wireless-optimization` proposes an LLM-enabled RL pipeline for wireless network optimisation — the LLM acts as a state-encoder front-end to a downstream RL policy. `2026-05-01_arxiv-aiml-csi-feedback-compression` is a survey of the IEEE 802.11 AIML TIG's CSI-feedback-compression line, sitting at the intersection of AIML and 802.11bn. Several other entries land here as `topics_secondary`: the MAB / DRL / LLM work in `mlo` and `mapc-cosr`, the ML-driven sensing pipelines in `sensing-csi`, etc.

Watch for: ML-method papers without a 1-1 standards-track home (e.g. generic RL for joint CW + TXOP that doesn't claim a specific 802.11 amendment); benchmarks specifically designed for Wi-Fi optimisation (rather than generic wireless); transfer-learning work that lets a model trained in one BSS specialise in another. The `agentic-wifi` bin is adjacent — when the contribution is the *agent / orchestrator wrapper*, that bin wins; when it's the *learned policy*, this bin wins.

## Current state (ZH)

本桶覆盖**面向 Wi-Fi PHY / MAC 参数的机器学习、强化学习与 LLM 驱动优化**——*输出*为射频侧决策（CW 选择、调度、空间复用选项、功率控制、链路自适应、信道分配），*输入*为网络状态的工作。本桶是不属于更具体标准化方向桶的"Wi-Fi 上的 ML/RL/LLM"归属。按设计本桶规模较小：当论文将 ML 应用于具体 802.11 机制（Co-SR / MLO / 感知）时，标准化桶胜出作为 `topic_primary`，而 `ai-for-wifi` 转为次属。

当前主属两篇。`2026-05-01_arxiv-llm-rl-wireless-optimization` 提出 LLM 赋能 RL 的无线网络优化管线——LLM 作为下游 RL 策略的状态编码器前端。`2026-05-01_arxiv-aiml-csi-feedback-compression` 是 IEEE 802.11 AIML TIG 的 CSI 反馈压缩线综述，位于 AIML 与 802.11bn 交汇处。多条其他条目以 `topics_secondary` 落入本桶：`mlo` 与 `mapc-cosr` 中的 MAB / DRL / LLM 工作、`sensing-csi` 中的 ML 感知管线等。

待关注：无 1-1 标准化归属的 ML 方法论文（如不绑定具体 802.11 修订的 CW + TXOP 联合 RL）；专为 Wi-Fi 优化设计的基准（而非通用无线）；让一个 BSS 训练的模型在另一个 BSS 中专门化的迁移学习工作。`agentic-wifi` 桶相邻——当贡献是*智能体 / 编排器包装*时该桶胜出；当贡献是*学习策略*时本桶胜出。
