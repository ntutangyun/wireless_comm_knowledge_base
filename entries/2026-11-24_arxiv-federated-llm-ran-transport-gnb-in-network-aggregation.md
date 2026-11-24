---
id: 2026-11-24_arxiv-federated-llm-ran-transport-gnb-in-network-aggregation
date_published: 2026-10-01
date_found: 2026-11-24
technology: edge-ai
type: academic-paper
title_en: "Federated Learning for LLMs over Mobile Networks: Issues and Solutions in the RAN Transport (gNB in-network aggregation, emulated 5G user plane)"
title_zh: "移动网络上的大语言模型联邦学习：RAN 传输中的问题与方案（gNB 网内聚合，仿真 5G 用户面）"
url: "https://arxiv.org/abs/2610.01304"
source_quality: full
topics: [federated-learning, LLM-fine-tuning, RAN, in-network-aggregation, optical-circuit-switching, LoRA]
topic_primary: edge-ai-networking
topics_secondary: [edge-federated-learning]
novelty_score: 3
---

## Summary (EN)

The article looks at federated fine-tuning of large language models when the clients are user equipments (UEs) connected through a mobile radio access network (RAN). Model updates from the UEs of one learning round share a destination and an aggregation deadline, but the RAN transport normally treats them as independent device-originated flows. Because wireless variability, mobility and device heterogeneity make the updates arrive asynchronously, the paper argues that the gNB should act as a "learning-aware traffic shaper": it performs in-network aggregation (INA) of the UE updates belonging to the same round and forwards one aggregate upstream, which gives the transport network a bounded transfer with a known size, readiness time and latest useful delivery time.

The paper then couples this with optical transport. A Window Scheduler collects ready aggregates and an APN Controller decides whether their combined volume and deadline slack justify a temporarily provisioned optical circuit instead of the packet path. The gNB-side aggregation is evaluated on an emulated 5G user plane; the packet-versus-optical break-even is a simple analytical comparison.

Link: an emulated 5G user plane (the FLAG emulator, modelling SDAP, PDCP and GTP-U with MTU, queueing and wireless-loss effects; OAI/FLAG emulation in the second experiment). No over-the-air measurement is reported.

## Summary (ZH)

本文研究在用户设备（UE）经移动无线接入网（RAN）接入时的大语言模型联邦微调。同一学习轮次中各 UE 的模型更新具有相同的目的地与聚合截止时间，但 RAN 传输通常把它们当作互相独立的设备流。由于无线信道波动、移动性和设备异构性，这些更新异步到达；论文主张 gNB 应成为"感知学习的流量整形点"：对属于同一轮次的 UE 更新做网内聚合（INA），向上游只转发一个聚合结果，使传输网看到的是体量有界、且已知大小、就绪时间和最晚有效送达时间的一次传输。

论文进一步与光传输结合：窗口调度器（Window Scheduler）收集就绪的聚合结果，APN 控制器（APN Controller）判断其总量与截止时间余量是否值得临时开通光电路，而不是走分组路径。gNB 侧聚合在仿真的 5G 用户面上评估；分组与光电路的盈亏平衡点为简单的解析比较。

所经链路：仿真的 5G 用户面（FLAG 仿真器，建模 SDAP、PDCP、GTP-U 以及 MTU、排队和无线丢包效应；第二个实验使用 OAI/FLAG 仿真环境）。论文未报告空口实测。

## Key technical points (EN)

- Learning-level experiment (FLAG emulator): 60 UEs spread evenly over six gNBs, each with a 100 Mbps uplink, a 10 Mbps gNB-to-parameter-server backhaul, and LoRA adapter updates of about 6.28 MB. With INA the target model accuracy is reached in less elapsed time than with conventional forwarding; local-training time is comparable and the communication part of the round is what shrinks.
- Transport-level experiment (OAI/FLAG emulation): 12 UEs, four selected per round, each sending an update of about 42.7 MB. Conventional forwarding carries about 170.8 MB per round on the backhaul; with INA only one 42.7-MB aggregate is forwarded, a factor-of-four reduction, appearing as a shorter, more regular transfer approaching 1 Gbps followed by an idle interval.
- Packet-versus-optical analysis: with 2 Gbps packet transport, 10 Gbps optical transport and a 0.5 s setup time, packet transport stays preferable for 6.28 MB adapters, optical circuits pay off from four active gNBs for 42.7 MB adapters, and a single 256 MB aggregate already amortises the setup. The stated break-even volume is about 156.25 MB (one large aggregate, four medium ones or about 25 small ones).
- The gNB pipeline described has FL flow identification (for example via a dedicated QoS flow or a user-plane classification rule), fragment-wise aggregation and deadline closure.
- The paper lists open research questions: how learning intent is exposed to the transport network, how to avoid bias toward UEs with better radio conditions, when to use optical transport, and how to evaluate AI-native RANs.

## Key technical points (ZH)

- 学习层实验（FLAG 仿真器）：60 个 UE 均匀分布在 6 个 gNB 下，每个 UE 上行 100 Mbps，gNB 到参数服务器的回传限制为 10 Mbps，LoRA 适配器更新约 6.28 MB。采用 INA 后，达到目标模型精度所需的时间比常规转发更短；本地训练时间相当，缩短的是每轮中的通信部分。
- 传输层实验（OAI/FLAG 仿真）：12 个 UE，每轮选 4 个，每个更新约 42.7 MB。常规转发时回传链路每轮承载约 170.8 MB；采用 INA 后只转发一个 42.7 MB 的聚合结果，减少为四分之一，表现为更短、更规则的、接近 1 Gbps 的传输，随后是空闲间隔。
- 分组与光传输分析：分组传输 2 Gbps、光传输 10 Gbps、建立时间 0.5 s 时，6.28 MB 的适配器仍以分组传输为宜；42.7 MB 的适配器从 4 个活跃 gNB 起光电路更划算；单个 256 MB 聚合即可摊销建立开销。文中给出的盈亏平衡体量约 156.25 MB（一个大聚合、四个中等聚合或约 25 个小聚合）。
- 所述 gNB 流水线包括 FL 流识别（例如通过专用 QoS 流或用户面分类规则）、按分片聚合和截止时间关闭。
- 论文列出的开放问题：如何向传输网暴露学习意图、如何避免偏向无线条件较好的 UE、何时使用光传输、如何评估 AI 原生 RAN。

## Why it matters / what's new (EN)

The article takes a network-side view of federated learning over a RAN: it asks what the gNB can do once it knows that many uploads belong to the same training round. The evidence is limited to emulation (one 6.28 MB and one 42.7 MB adapter size, one scenario per experiment), and the optical part is an analytical break-even rather than a testbed result.

## Why it matters / what's new (ZH)

本文从网络侧看待 RAN 上的联邦学习：讨论 gNB 在知道多个上传属于同一训练轮次后能做什么。证据仅限于仿真（6.28 MB 和 42.7 MB 两种适配器规模、每个实验一个场景），光传输部分是解析盈亏平衡分析而非测试床结果。

## Images

![Federated LLM fine-tuning over the RAN and learning-aware gNB aggregation | RAN 上的联邦大模型微调与感知学习的 gNB 聚合](https://arxiv.org/html/2610.01304v1/FL-RAN-INA.png)
