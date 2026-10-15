---
id: 2026-10-15_arxiv-llm-strategist-mas-auction-5g-edge-slicing-open5gs
date_published: 2026-10-10
date_found: 2026-10-15
type: academic-paper
technology: cellular
title_en: "Conflict-Aware Autonomous Resource Orchestration for 5G Edge Slicing Using Multi-Agent Systems and LLMs"
title_zh: "基于多智能体系统与大模型的冲突感知 5G 边缘切片自主资源编排"
url: "https://arxiv.org/abs/2610.14903"
source_quality: full
topics: [network-slicing, multi-agent-systems, LLM, intent-based-networking, Open5GS, Kubernetes, UPF, Calico, Vickrey-auction, SPADE]
topic_primary: network-slicing
topics_secondary: [mec, cellular-ai]
novelty_score: 3
---

## Summary (EN)
Nathan R. Prediger, Rodrigo Moreira, Juliano Araujo Wickboldt, Tereza C. Carvalho, Pedro Oliveira, Paulo Novais and Flávio de Oliveira Silva (accepted at IEEE CCNC 2027) tackle 5G edge network slicing, where scarce CPU and bandwidth must be shared among slices while operator intent, such as a public-safety emergency, has to be turned into resource priorities. The paper's argument runs through related approaches (centralized optimization, auction-based multi-agent systems, DRL, LLM-based intent translation), the proposed method, and the results.

The proposed architecture has two timescales. At the macro scale, an LLM-based Strategist agent (gpt-oss-20b) turns natural-language intents into a priority weight per slice, which sets the slice's budget, income rate and bidding aggressiveness. At the operational scale, SPADE-based slice agents, one per UPF pod, bid in a sealed-bid, Vickrey-inspired second-price auction run every 30 seconds by a Resource agent. Outcomes are enforced by an in-place Kubernetes pod resize for CPU and by patching Calico CNI bandwidth annotations on the UPF pods; no slice is pushed below its configured minimum floor. Memory contributes to bidding but is not dynamically enforced in the prototype, since changing memory limits would restart the pod. Between intents, allocation rounds run without further LLM inference.

The evaluation uses a real Kubernetes/Open5GS edge cluster (UPF pods on an 8-core, 8 GB node, Kubernetes v1.34.9), with a shared pool of 0.8 CPU cores and 35 Mbps across three slices, each serving a DASH video client as a QoE proxy. Each 900-second experiment was repeated 30 times. In the Smart-City scenario, four natural-language public-safety intents change the slice priorities; the Hierarchical scenario assigns static Gold, Silver and Bronze priorities (8, 5 and 3) and bypasses the Strategist.

## Summary (ZH)
Nathan R. Prediger、Rodrigo Moreira、Juliano Araujo Wickboldt、Tereza C. Carvalho、Pedro Oliveira、Paulo Novais 与 Flávio de Oliveira Silva（已被 IEEE CCNC 2027 接收）研究 5G 边缘网络切片：稀缺的 CPU 与带宽需要在切片之间共享，同时运营商意图（例如公共安全应急）需要转化为资源优先级。论文依次讨论相关方法（集中式优化、基于拍卖的多智能体系统、DRL、基于大模型的意图翻译）、所提方法和结果。

所提架构分为两个时间尺度。在宏观尺度，基于大模型的 Strategist 智能体（gpt-oss-20b）把自然语言意图转化为各切片的优先级权重，由其决定切片的预算、收入速率和竞价激进度。在运行尺度，基于 SPADE 的切片智能体（每个 UPF Pod 一个）参与由 Resource 智能体每 30 秒运行一次的密封竞价、类 Vickrey 第二价格拍卖。结果通过 Kubernetes Pod 原地调整 CPU 并修改 UPF Pod 上的 Calico CNI 带宽注解来落实；任何切片都不会被压到其配置的最低保障值之下。内存参与竞价决策，但原型中不做动态强制，因为修改内存限制会重启 Pod。两次意图之间，分配轮次的运行不再调用大模型推理。

评估使用真实的 Kubernetes/Open5GS 边缘集群（UPF Pod 运行在 8 核、8 GB 的节点上，Kubernetes v1.34.9），三个切片共享 0.8 个 CPU 核与 35 Mbps 的资源池，每个切片服务一个作为 QoE 代理的 DASH 视频客户端。每个 900 秒实验重复 30 次。智慧城市场景中，四条自然语言公共安全意图改变切片优先级；分层场景则分配静态的 Gold、Silver、Bronze 优先级（8、5、3），并绕过 Strategist。

## Key technical points (EN)
- Intent mapping: for a target weight w in [1, 10], wallet capacity, wealth-regeneration rate and base bidding aggressiveness scale as B0·w, I0·w and β0·w, with B0, I0 and β0 operator-defined constants; the LLM is constrained by structured output to return one JSON object per affected slice containing the slice, its new weight and a short justification.
- Bidding: slices map their highest resource utilization to one of four stress tiers and compute a priority-weighted coefficient through a cubic curve; the bid is min(budget, β·m) with a stress multiplier m. The auction winner is funded from free capacity first and then proportionally from non-winning slices, never below their configured minimum floors.
- Smart-City result: each priority increase produces a bid and bandwidth response within one auction round, with bitrate lagging by roughly 2 to 4 rounds (60 to 120 s). Summed allocated bandwidth averages 34.7 Mbps of the 35 Mbps pool. Firefighters end with the highest average bitrate (9,748 kbps) versus ambulance 5,828 and police 6,024; the ambulance reaches the highest weight (10) but only from t = 600 s, and ends with the lowest average bitrate of the three.
- Hierarchical result: Gold's average bitrate is 3.09 times Bronze's, above the nominal 8.0/3.0 = 2.67 ratio, which the authors attribute to the cubic priority mapping; stalls are 0.09 for Gold and 0.65 for Bronze.
- The authors note that the allocation outcome depends on a slice's priority history, measured congestion and the priorities of competing slices, not on the priority alone.
- Stated limits: economic parameters were configured empirically for the evaluated scenarios; LLM inference overhead was not instrumented and no claim is made that the architecture has lower computational overhead than a static baseline.

## Key technical points (ZH)
- 意图映射：对目标权重 w ∈ [1, 10]，钱包容量、财富再生速率和基础竞价激进度分别按 B0·w、I0·w、β0·w 缩放，其中 B0、I0、β0 为运营商定义的常数；大模型通过结构化输出被约束为对每个受影响切片返回一个 JSON 对象，包含切片、新权重和简短理由。
- 竞价：切片把最高资源利用率映射到四个压力档位之一，并通过三次曲线计算按优先级加权的系数；出价为 min(预算, β·m)，m 为压力乘数。拍卖胜者先从空闲容量获得资源，不足时再按比例从未获胜切片调拨，且不低于其配置的最低保障值。
- 智慧城市结果：每次优先级提升都会在一个拍卖轮次内引起出价和带宽响应，码率约滞后 2 至 4 轮（60 至 120 s）。分配带宽总和平均为 35 Mbps 资源池中的 34.7 Mbps。消防队的平均码率最高（9,748 kbps），救护车为 5,828、警察为 6,024；救护车达到最高权重（10），但仅从 t = 600 s 起，最终平均码率为三者中最低。
- 分层场景结果：Gold 的平均码率是 Bronze 的 3.09 倍，高于名义比值 8.0/3.0 = 2.67，作者将其归因于三次优先级映射；卡顿次数 Gold 为 0.09、Bronze 为 0.65。
- 作者指出，分配结果取决于切片的优先级历史、实测拥塞以及竞争切片的优先级，而非仅取决于优先级本身。
- 作者说明的局限：经济参数是针对所评估场景凭经验配置的；未对大模型推理开销进行测量，也不声称该架构的计算开销低于静态基线。

## Why it matters / what's new (EN)
Existing KB slicing entries (for example the closed-loop slicing entry of 2026-09-03 and the RACH-preamble-slicing DRL entry of 2026-09-09) use learned or rule-based control; this paper keeps an LLM out of the recurring control loop and uses it only when operator intent changes, with a deterministic auction doing the repeated allocation on live UPF pods. The results come from UPF pods on a single node with video clients as the QoE proxy, and the authors list learning the economic parameters and incorporating utilization telemetry into the Strategist as future work.

## Why it matters / what's new (ZH)
知识库现有的切片条目（例如 2026-09-03 的闭环切片条目和 2026-09-09 的 RACH 前导切片 DRL 条目）采用学习式或规则式控制；本文让大模型不参与循环控制，仅在运营商意图变化时调用，由确定性拍卖在真实 UPF Pod 上完成重复分配。结果来自 UPF Pod 所在的单个节点，以视频客户端作为 QoE 代理；作者将学习经济参数以及让 Strategist 纳入利用率遥测列为未来工作。
