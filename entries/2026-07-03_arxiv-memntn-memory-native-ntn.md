---
id: 2026-07-03_arxiv-memntn-memory-native-ntn
date_published: 2026-06-22
date_found: 2026-07-03
type: academic-paper
title_en: "MemNTN: Memory-Native Non-Terrestrial Networks for Embodied Intelligence"
title_zh: "MemNTN：面向具身智能的记忆原生非地面网络"
url: "https://arxiv.org/abs/2607.00029"
technology: cellular
source_quality: full
topics: [NTN, LEO, embodied-AI, memory, 6G]
topic_primary: ntn
topics_secondary: [6g-vision, sat-ai]
novelty_score: 3
---

## Summary (EN)

MemNTN (Li, Wang, He, Wan, Wang, Wu, Wu, Xu, Arslan; submitted 22 June 2026) argues that non-terrestrial networks serving embodied-intelligence workloads — e.g. search-and-rescue robots in wilderness relying on satellite links — should stop being *stateless*. Today's NTN protocols decide from instantaneous channel conditions and service demands; MemNTN makes accumulated context a first-class network resource via a dual-memory architecture: **physical memory** (world state — geometry, object locations, semantic scene descriptions, agent trajectories) and **digital memory** (network experience — historical CSI, spectrum occupancy, link-quality trends, handover records, topology graphs).

Memories flow through a five-stage life-cycle (acquisition → compression → valuation → update → utilization) with cross-layer instantiations: channel memory at PHY (historical CSI compensates the delayed feedback caused by satellite dynamics), access memory at MAC (collision histories tune random access under massive connections), trajectory memory at network layer (orbit-driven proactive handover and prefetching), and task memory at application layer. A unified value function scores each memory item on five axes — freshness, coverage, cost, reusability, and quality — where the "agentic QoM" model is the novel piece: a foundation model generates test questions from pilot data samples and checks whether existing global memory can answer them; failure signals a valuable novel observation, success signals redundancy.

The validation is a Satellite Embodied Question Answering (SEQA) case study: a 400-satellite Walker LEO constellation (550 km, 53°), 10 camera UAVs, Hong Kong ground station, CARLA + LEOPath + OpenNTN simulation. MemNTN improves SEQA answer correctness by 62.6% over throughput-maximizing scheduling and 5.7% over coverage-maximizing scheduling despite delivering less raw data, and scales from 84.0% to 98.7% accuracy as the constellation grows from 100 to 800 satellites. The takeaway: for embodied-AI tasks, what matters is whether delivered bits are novel, reliable, and relevant to downstream reasoning — not the delivered volume. Open challenges: distributed memory consistency and defenses against memory poisoning / inference attacks.

## Summary (ZH)

MemNTN（Li、Wang、He、Wan、Wang、Wu、Wu、Xu、Arslan；2026 年 6 月 22 日提交）主张：服务于具身智能负载的非地面网络——如依赖卫星链路的野外搜救机器人——不应再是"无状态"的。当前 NTN 协议基于瞬时信道条件与业务需求做决策；MemNTN 通过双记忆架构把累积上下文变为一等网络资源：**物理记忆**（世界状态——几何、目标位置、语义场景描述、智能体轨迹）与**数字记忆**（网络经验——历史 CSI、频谱占用、链路质量趋势、切换记录、拓扑图）。

记忆经由五阶段生命周期（获取 → 压缩 → 估值 → 更新 → 利用）流转，并在各层落地：物理层信道记忆（历史 CSI 补偿卫星动态导致的反馈时延）、MAC 层接入记忆（碰撞历史调优海量连接下的随机接入）、网络层轨迹记忆（基于轨道预测的主动切换与预取）、应用层任务记忆。统一价值函数从五个维度为记忆项打分——新鲜度、覆盖度、成本、可复用性、质量——其中"智能体化质量评估（agentic QoM）"是新颖之处：由基础模型从导频数据样本生成测试问题，检验现有全局记忆能否回答；答不上说明是有价值的新观测，答得上说明冗余。

验证采用卫星具身问答（SEQA）案例：400 星 Walker LEO 星座（550 km、53° 倾角）、10 架摄像无人机、香港地面站，CARLA + LEOPath + OpenNTN 仿真。MemNTN 的 SEQA 答案正确率比吞吐最大化调度高 62.6%，比覆盖最大化调度高 5.7%（尽管传输的原始数据更少），并随星座从 100 星扩展到 800 星实现 84.0% → 98.7% 的精度。结论：对具身 AI 任务，重要的不是交付的数据量，而是交付的比特是否新颖、可靠、与下游推理相关。开放挑战：分布式记忆一致性，以及对记忆投毒/推理攻击的防御。

## Key technical points (EN)

- Dual-memory model: physical memory (world state) + digital memory (network experience) as first-class NTN resources.
- Five-stage memory life-cycle (acquisition, compression, valuation, update, utilization) instantiated per layer: PHY channel memory, MAC access memory, network-layer trajectory memory, app-layer task memory.
- Five-axis memory valuation (freshness / coverage / cost / reusability / quality); agentic QoM uses a foundation model to test whether global memory already "knows" a new observation.
- SEQA evaluation: 400-satellite LEO Walker constellation, 10 UAVs, CARLA + LEOPath + OpenNTN; +62.6% correctness vs. MaxRate, +5.7% vs. MaxCov; 84.0% → 98.7% accuracy scaling 100 → 800 satellites.
- Advantage concentrates when satellite backhaul is constrained — memory substitutes for bandwidth.

## Key technical points (ZH)

- 双记忆模型：物理记忆（世界状态）+ 数字记忆（网络经验），作为 NTN 的一等资源。
- 五阶段记忆生命周期（获取、压缩、估值、更新、利用），逐层落地：PHY 信道记忆、MAC 接入记忆、网络层轨迹记忆、应用层任务记忆。
- 五维记忆估值（新鲜度/覆盖度/成本/可复用性/质量）；agentic QoM 用基础模型测试全局记忆是否已"知道"新观测。
- SEQA 评估：400 星 LEO Walker 星座、10 架无人机、CARLA + LEOPath + OpenNTN；正确率较 MaxRate +62.6%、较 MaxCov +5.7%；100 → 800 星时精度 84.0% → 98.7%。
- 优势集中于卫星回传受限场景——记忆替代带宽。

## Why it matters / what's new (EN)

The KB's NTN thread covers orchestration (GNN-based LEO orchestration, RIS/UAV MARL) and traffic prediction (LEOSTP), all of which optimize *delivery*. MemNTN reframes the objective: schedule what the downstream embodied-AI task needs to *reason*, using memory valuation instead of rate/coverage metrics. The agentic-QoM idea — foundation-model-generated self-tests to price the marginal value of an observation — is a genuinely new scheduling primitive, and the "memory substitutes for constrained backhaul" result is directly relevant to the memory-native / semantic-scheduling debate in 6G NTN.

## Why it matters / what's new (ZH)

本知识库的 NTN 线索涵盖编排（基于 GNN 的 LEO 编排、RIS/UAV 多智能体 RL）与流量预测（LEOSTP），它们优化的都是"交付"。MemNTN 重构了目标：按照下游具身 AI 任务的推理需求来调度，用记忆估值取代速率/覆盖指标。agentic QoM 思路——用基础模型生成自测题为观测的边际价值定价——是真正新颖的调度原语；"记忆替代受限回传"的结论与 6G NTN 中记忆原生/语义调度的争论直接相关。

## Images

![MemNTN system framework: dual physical/digital memory with five-stage life-cycle | MemNTN 系统框架：物理/数字双记忆与五阶段生命周期](https://arxiv.org/html/2607.00029v1/x2.png)
![SEQA verification results across scheduling baselines and constellation sizes | 不同调度基线与星座规模下的 SEQA 验证结果](https://arxiv.org/html/2607.00029v1/x4.png)
