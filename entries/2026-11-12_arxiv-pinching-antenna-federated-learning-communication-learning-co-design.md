---
id: 2026-11-12_arxiv-pinching-antenna-federated-learning-communication-learning-co-design
date_published: 2026-11-10
date_found: 2026-11-12
technology: edge-ai
type: academic-paper
title_en: "Pinching-antenna-assisted federated learning: segmented waveguide, variance-reduced FL with dual quantization, 84.18% vs 76.26% on CIFAR-10"
title_zh: "夹持天线辅助联邦学习：分段波导、方差缩减与双向量化联邦算法，CIFAR-10 上 84.18% 对 76.26%"
url: "https://arxiv.org/abs/2611.13987"
source_quality: full
topics: [edge-federated-learning, pinching-antenna, quantization, wireless-resource-allocation, non-iid]
topic_primary: edge-federated-learning
topics_secondary: [over-the-air-computation]
novelty_score: 3
---

## Summary (EN)

UESTC and collaborators study wireless federated learning (FL) with two coupled bottlenecks: non-i.i.d. client data and communication-constrained model synchronisation over unreliable links. They pair a segmented waveguide-enabled pinching antenna (SWAN) architecture, in which pinching antennas sit along a waveguide attached to the base station, with an FL algorithm that uses client variance reduction and dual (uplink and downlink) quantization.

On the communication side they develop a two-stage SWAN-assisted downlink protocol (a global-model multicast stage and a client-specific control-variable unicast stage) and fairness-oriented uplink optimisation over pinching-antenna positions, bandwidth allocation and per-client quantization precision, each with a derived solution framework. Link computed over: a simulated 28 GHz Rician-fading link (K = 10), 100 clients in a 100 m x 80 m area, a 100 m waveguide in four segments and a 4-antenna base station, 100 MHz up and down, with uplink and downlink latency budgets; no over-the-air measurement.

## Summary (ZH)

电子科技大学等机构的作者研究无线联邦学习（FL）中两个相互耦合的瓶颈：客户端数据非独立同分布，以及在不可靠链路上受通信限制的模型同步。他们把分段波导夹持天线（SWAN）架构（夹持天线沿接在基站上的波导分布）与采用客户端方差缩减和双向（上行与下行）量化的联邦学习算法结合。

通信侧，他们设计了两阶段 SWAN 辅助下行协议（全局模型组播阶段加各客户端控制变量单播阶段），并对夹持天线位置、带宽分配和各客户端量化精度做面向公平性的上行优化，均推导了求解框架。所经链路：仿真的 28 GHz 莱斯衰落链路（K = 10），100 个客户端分布于 100 m x 80 m 区域，100 m 波导分为四段，基站 4 天线，上下行各 100 MHz，并设有上下行时延预算；无空口实测。

## Key technical points (EN)

- Task and model: CIFAR-10 split over 100 clients with a Dirichlet parameter of 0.2 by default, a four-convolution plus five-fully-connected network, 10 clients sampled per round with 3 local epochs, up to 300 rounds.
- Baselines are FedAvg, FedAdam and SCAFFOLD, all given the same dual quantization; three communication configurations are compared: an ideal-communication fixed-bit benchmark, a conventional base-station setting with optimised resources, and the SWAN setting.
- Under SWAN with optimised resources the proposed method reaches 84.18% final accuracy versus 76.26% for the best baseline (FedAdam), about 10% relative, and needs 40, 61 and 81 rounds to reach 50%, 60% and 70% accuracy versus 114, 146 and 225 for FedAdam (2.85x, 2.40x, 2.77x faster).
- Against its own base-station counterpart (70.95%) the SWAN design improves final accuracy by about 18.65% relative and needs roughly half the rounds for the same targets.
- Uplink optimisation (antenna positioning, adaptive quantization, bandwidth) helps most under stringent latency budgets (0.2 s uplink, 0.7 s downlink); with relaxed budgets (0.3 s, 1 s) the gaps shrink: Cases II and III nearly overlap and stay slightly above Case I.
- Uplink quantization precision matters more to aggregation quality than downlink precision in the fixed-bit tests.

## Key technical points (ZH)

- 任务与模型：CIFAR-10 按狄利克雷参数（默认 0.2）分给 100 个客户端，网络为四层卷积加五层全连接，每轮采样 10 个客户端、3 个本地轮次，最多 300 轮。
- 基线为 FedAvg、FedAdam 与 SCAFFOLD，均采用相同的双向量化；比较三种通信配置：理想通信的固定比特基准、资源经优化的常规基站配置、SWAN 配置。
- 在资源经优化的 SWAN 下，所提方法最终准确率为 84.18%，最佳基线（FedAdam）为 76.26%，相对提升约 10%；达到 50%、60%、70% 准确率分别需 40、61、81 轮，FedAdam 需 114、146、225 轮（快 2.85、2.40、2.77 倍）。
- 与自身的基站配置（70.95%）相比，SWAN 设计的最终准确率相对提升约 18.65%，达到相同目标所需轮数约减半。
- 上行优化（天线定位、自适应量化、带宽）在时延预算严格（上行 0.2 秒、下行 0.7 秒）时收益最大；预算放宽（0.3 秒、1 秒）时差距明显缩小：Case II 与 III 几乎重合，略优于 Case I。
- 在固定比特测试中，上行量化精度对聚合质量的影响大于下行精度。

## Why it matters / what's new (EN)

It treats the antenna layout, the per-client bit-width and the FL update rule as one design, so the radio and the learning algorithm are tuned against the same latency budget. The results are simulated on one image task (CIFAR-10); baselines use multicast-only downlink since they send only the global model.

## Why it matters / what's new (ZH)

它把天线布局、各客户端比特宽度与联邦更新规则作为一体设计，使无线电与学习算法针对同一时延预算调优。结果为单一图像任务（CIFAR-10）上的仿真；基线仅发送全局模型，因此下行只采用组播。

## Images

*(No redistributable images for this entry.)*
