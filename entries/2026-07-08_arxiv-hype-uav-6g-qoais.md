---
id: 2026-07-08_arxiv-hype-uav-6g-qoais
date_published: 2026-07-07
date_found: 2026-07-08
type: academic-paper
technology: cellular
title_en: "HyPE: LLM-orchestrated quality-aware personalized AI service provisioning in UAV-assisted 6G networks"
title_zh: "HyPE：UAV 辅助 6G 网络中由 LLM 编排的质量感知个性化 AI 服务供给"
url: "https://arxiv.org/abs/2607.06278"
source_quality: full
topics: [6G, UAV, LLM-orchestration, QoAIS, service-provisioning, edge]
topic_primary: cellular-ai
topics_secondary: [6g-vision, mec]
novelty_score: 2
---

## Summary (EN)

Farhoudi, Shokrnezhad and Taleb (arxiv 2607.06278, submitted July 7, 2026) propose HyPE, a framework for provisioning AI services to mobile users in UAV-assisted 6G networks that optimises two quality dimensions jointly: conventional end-to-end latency and "Quality of AI Services" (QoAIS) — output fidelity, service continuity, and personalization. The premise is that existing offloading/placement work minimises latency while ignoring how model quality and personalization interact with user mobility across an aerial-terrestrial topology.

HyPE runs three sequential phases. MAP (Mobility-Aware Prediction) puts a Dueling Double Deep Q-Learning agent with an LSTM-CNN backbone at each point-of-attachment to forecast both where users will appear and what services they will request, as probability distributions. LEAD (Learning-Augmented Decision) hands those forecasts plus historical personalization context to an LLM planner that outputs UAV trajectories and inference-node assignments; the prompt engineering is explicit — role prompting ("network provisioner"), contrastive few-shot examples embedding high- and low-reward past assignments, and Pydantic-schema structure enforcement that validates outputs against adjacency and capacity constraints. SET (Service placement & routing) then applies two heuristics: Proximity-Greedy Allocation for pre/post-processing function placement, and a Latency-Biased Shortest Path router with iterative fallback.

The underlying problem is formulated as a MINLP with 18 constraint families (temporal stage windows, UAV adjacency mobility, dynamic link availability, latency/fidelity QoS thresholds, recency-weighted personalization affinity, compute/bandwidth capacity), which HyPE approximates in polynomial time. Evaluation uses 15 edge/cloud plus 5 UAV nodes, 10-50 users with requests drawn from the MMMU-Pro dataset and real mobility traces, against a Gurobi oracle, AD-SAC, JAAPD-D and random baselines. Headline numbers: 61% acceptance at 50 users (oracle 75%, AD-SAC 53%), ~90-110 ms median latency, personalization score 26 vs oracle ~28, and overall ~91% oracle coverage at polynomial cost.

## Summary (ZH)

Farhoudi、Shokrnezhad 和 Taleb（arxiv 2607.06278，2026 年 7 月 7 日提交）提出 HyPE，一个在 UAV 辅助 6G 网络中为移动用户供给 AI 服务的框架，联合优化两个质量维度：传统的端到端时延和"AI 服务质量"（QoAIS）——输出保真度、服务连续性和个性化程度。其出发点是：现有卸载/放置工作只最小化时延，忽视了模型质量与个性化在空地一体拓扑中如何与用户移动性相互作用。

HyPE 按三个阶段顺序运行。MAP（移动感知预测）在每个接入点部署带 LSTM-CNN 骨干的 Dueling Double DQN 智能体，以概率分布形式同时预测用户将出现的位置和将请求的服务。LEAD（学习增强决策）将这些预测连同历史个性化上下文交给一个 LLM 规划器，输出 UAV 轨迹和推理节点分配；其提示工程十分明确——角色提示（"网络供给者"）、嵌入高/低回报历史分配的对比式少样本示例、以及通过 Pydantic 模式强制输出满足邻接与容量约束。SET（服务放置与路由）随后应用两个启发式：用于前/后处理功能放置的邻近贪婪分配，以及带迭代回退的时延偏置最短路径路由。

底层问题被建模为含 18 类约束（时序阶段窗口、UAV 邻接移动、动态链路可用性、时延/保真度 QoS 门限、按新近度加权的个性化亲和度、算力/带宽容量）的混合整数非线性规划，HyPE 以多项式时间近似求解。评估使用 15 个边缘/云节点加 5 个 UAV 节点、10-50 个用户（请求取自 MMMU-Pro 数据集、真实移动轨迹），对比 Gurobi 最优解、AD-SAC、JAAPD-D 和随机基线。核心数据：50 用户时接受率 61%（最优解 75%、AD-SAC 53%），中位时延约 90-110 ms，个性化得分 26（最优解约 28），整体达到最优解约 91% 的覆盖且代价为多项式。

## Key technical points (EN)

- Dual-objective provisioning: conventional latency plus QoAIS (fidelity, continuity, personalization) — personalization modeled as recency-weighted node-affinity that rewards repeated assignment to the same inference node.
- LLM as the orchestration engine (not a solver): role prompting + contrastive few-shot (high/low-reward exemplars) + Pydantic schema validation against adjacency/capacity feasibility.
- MAP phase: D3QN + LSTM-CNN per point-of-attachment predicts user location AND request type distributions.
- SET phase: Proximity-Greedy Allocation for stage placement; Latency-Biased Shortest Path with congestion awareness and fallback.
- Results: 61% acceptance @50 users vs 53% (AD-SAC) / 42% (JAAPD-D); ~91% of oracle performance; polynomial complexity O(T(NU + NUF + UN²logN)) vs NP-hard MINLP.

## Key technical points (ZH)

- 双目标供给：传统时延加 QoAIS（保真度、连续性、个性化）——个性化建模为按新近度加权的节点亲和度，奖励对同一推理节点的重复分配。
- LLM 作为编排引擎（而非求解器）：角色提示 + 对比式少样本（高/低回报示例）+ Pydantic 模式对邻接/容量可行性的校验。
- MAP 阶段：每个接入点的 D3QN + LSTM-CNN 同时预测用户位置和请求类型分布。
- SET 阶段：邻近贪婪分配放置服务阶段；带拥塞感知与回退的时延偏置最短路径路由。
- 结果：50 用户时接受率 61%，对比 AD-SAC 53%、JAAPD-D 42%；达到最优解约 91%；复杂度为多项式 O(T(NU + NUF + UN²logN))，而原问题为 NP 难。

## Why it matters / what's new (EN)

The KB's cellular-ai bin already tracks LLM-in-the-loop network operation (LLM gNB configuration, LLM-NWDAF, intent-driven topology design 2607.00292) — HyPE extends the pattern to joint UAV-trajectory + AI-service placement with the LLM constrained by schema validation, and is notable for treating personalization continuity as a first-class optimisation term (recency-weighted affinity) rather than a soft preference. It is also a concrete "QoAIS" formalisation — a metric family 6G service-management proposals keep gesturing at without defining. Contrast with 2607.02210 (guard-rail validation for AI agent decisions): HyPE constrains the LLM ex-ante via schemas; the guard-rail line validates ex-post.

## Why it matters / what's new (ZH)

KB 的 cellular-ai 桶已跟踪多个 LLM 参与网络运维的条目（LLM gNB 配置、LLM-NWDAF、意图驱动拓扑设计 2607.00292）——HyPE 将该模式扩展到 UAV 轨迹与 AI 服务放置的联合优化，并用模式校验约束 LLM 输出；其亮点是将个性化连续性作为一等优化项（按新近度加权的亲和度）而非软偏好。它也是"QoAIS"的一次具体形式化——6G 服务管理提案反复提及却始终未定义的指标族。与 2607.02210（AI 智能体决策的护栏校验）对比：HyPE 通过模式在事前约束 LLM，护栏路线则在事后校验。

## Images

![HyPE structured LLM prompt design: role, contrastive examples, output schema | HyPE 结构化 LLM 提示设计：角色、对比示例、输出模式](https://arxiv.org/html/2607.06278v1/x1.png)
