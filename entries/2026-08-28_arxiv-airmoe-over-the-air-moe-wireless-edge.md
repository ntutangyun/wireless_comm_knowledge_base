---
id: 2026-08-28_arxiv-airmoe-over-the-air-moe-wireless-edge
date_published: 2026-08-24
date_found: 2026-08-28
type: academic-paper
technology: edge-ai
title_en: "AirMoE: Realizing Over-the-Air Distributed Mixture-of-Experts Inference at the Wireless Edge"
title_zh: "AirMoE：在无线边缘实现空中计算的分布式混合专家推理"
url: "https://arxiv.org/abs/2608.22932"
source_quality: abstract_only
topics: [MoE, over-the-air-computation, AirComp, distributed-inference, expert-placement, wireless-edge]
topic_primary: edge-ai-networking
topics_secondary: [compute-offloading, on-device-inference]
novelty_score: 3
---

## Summary (EN)

When a Mixture-of-Experts (MoE) model is split across several wireless devices, each device holds a subset of the "experts" — the specialised sub-networks the model routes each token to. Only a few experts fire per token, but their outputs must then be summed before the layer can proceed. On a wireless edge that sum is the expensive part: every activated device has to transmit its expert output back, and the aggregation cost grows with the number of participants.

AirMoE (Yang, Wang and Huang) attacks that step with **over-the-air computation** — letting the devices transmit simultaneously on the same resource so the radio channel's natural waveform superposition performs the summation in the air, rather than scheduling each contribution separately and adding them at the receiver. Aggregation then costs roughly one transmission regardless of how many experts participated.

The catch is that AirComp is analogue: the sum arrives with channel-induced error, and MoE inference is not uniformly tolerant of it. The paper's contribution is handling three coupled problems that follow. Aggregation weights are **dynamic**, because which experts activate changes token by token. Error sensitivity is **layer-dependent**, so the same aggregation error costs more in some layers than others. And expert **placement** across devices determines who must transmit at all.

Their approach defines an inference-aware error metric — measuring distortion by its effect on the inference result rather than as raw mean-squared error — and then decomposes the optimisation across two timescales: threshold-based power control on the fast timescale, tracking channel conditions, and activation-aware expert placement on the slow timescale, positioning experts according to how often they fire and how sensitive their layer is. Reported gains are largest under device heterogeneity, which is the realistic case.

## Summary (ZH)

当一个混合专家（MoE）模型被切分到多台无线设备上时，每台设备持有一部分「专家」——模型为每个 token 路由到的专门化子网络。每个 token 只会激活少数专家，但这些专家的输出必须先求和，该层才能继续。在无线边缘，这一步求和恰恰是昂贵的：每台被激活的设备都必须把自己的专家输出传回，聚合开销随参与者数量增长。

AirMoE（Yang、Wang、Huang）用**空中计算（over-the-air computation）**攻击这一步——让各设备在同一资源上同时发送，由无线信道天然的波形叠加在空中完成求和，而不是分别调度各路贡献再在接收端相加。如此一来，无论参与的专家有多少，聚合的代价大致都只相当于一次传输。

代价在于空中计算是模拟的：求和结果带有信道引入的误差，而 MoE 推理对这种误差并非一视同仁地耐受。本文的贡献是处理由此产生的三个耦合问题：聚合权重是**动态的**，因为每个 token 激活的专家都在变；误差敏感度是**逐层不同的**，同样的聚合误差在不同层上的代价并不一样；而专家在设备间的**放置**决定了究竟谁需要发送。

其方法定义了一个**面向推理的误差度量**——以失真对推理结果的影响来衡量，而非原始均方误差——随后将优化分解到两个时间尺度上：快时间尺度上做基于门限的功率控制以跟踪信道条件，慢时间尺度上做**激活感知的专家放置**，依据专家被激活的频度及其所在层的敏感度来安排位置。论文报告的增益在设备异构条件下最为显著，而这正是现实中的情形。

## Key technical points (EN)

- Distributed MoE inference where experts live on separate wireless devices; per-layer expert-output aggregation is the bottleneck.
- Over-the-air computation: concurrent transmission on a shared resource, using waveform superposition to perform the summation in the channel.
- Three coupled challenges addressed: dynamic (token-dependent) aggregation weights, layer-dependent error sensitivity, strategic expert placement.
- Inference-aware error metric — distortion scored by its effect on inference output rather than raw MSE.
- Two-timescale decomposition: threshold-based power control (fast, channel-tracking) + activation-aware expert placement (slow).
- Gains reported as largest under device heterogeneity.
- Primary category eess.SP.

## Key technical points (ZH)

- 分布式 MoE 推理场景：专家分布在不同无线设备上，逐层的专家输出聚合构成瓶颈。
- 空中计算：在共享资源上并发发送，利用波形叠加在信道中完成求和。
- 处理三个耦合难题：动态（随 token 变化）的聚合权重、逐层不同的误差敏感度、专家放置策略。
- 面向推理的误差度量——以失真对推理输出的影响计分，而非原始均方误差。
- 两时间尺度分解：快时间尺度的门限功率控制（跟踪信道）+ 慢时间尺度的激活感知专家放置。
- 增益在设备异构条件下最为显著。
- 主类别 eess.SP。

## Why it matters / what's new (EN)

This is the clearest example so far of what the new `edge-ai-networking` bin is for: work where the AI workload and the radio link are designed against each other rather than one merely carrying the other.

The KB already holds the complementary result from the Wi-Fi side — `2026-08-04_arxiv-wifi-broadcast-rate-edge-llm`, which showed that the 802.11 broadcast-rate cap is a forgotten bottleneck for exactly this class of collaborative edge MoE inference, and fixed it by moving to UDP broadcast with timeout-driven retransmission for a 1.4× gain. AirMoE goes at the same bottleneck from the physical layer instead of the MAC: rather than making the aggregation transmissions cheaper to schedule, it removes the need to schedule them separately at all. Read together, the two entries bracket the problem — one accepts the digital link and optimises its use, the other abandons the digital link for analogue superposition — and they are a good illustration of why this domain sits next to the radio domains in this KB rather than apart from them.

The genuinely new ingredient is the inference-aware error metric. Over-the-air computation is an old idea whose usual objection is that analogue aggregation error is unbounded in a way digital transmission is not; grading that error by its effect on the *inference output*, and then exploiting the fact that some layers tolerate far more of it than others, is what makes the trade defensible. The two-timescale split — fast power control, slow placement — is the same structural move the KB's radio-side scheduling literature keeps arriving at, applied here to expert placement.

Caveat worth stating: this is a signal-processing paper with simulation results, not a measured deployment. The device-heterogeneity gain is the claim to watch for independent confirmation.

## Why it matters / what's new (ZH)

这是迄今最能说明新增 `edge-ai-networking` 分类用途的例子：AI 负载与无线链路是**相互对着设计**的，而不是一方仅仅承载另一方。

本知识库已收录来自 Wi-Fi 一侧的互补结果——`2026-08-04_arxiv-wifi-broadcast-rate-edge-llm`，它指出 802.11 的广播速率上限正是这类协作式边缘 MoE 推理被遗忘的瓶颈，并通过改用带超时重传的 UDP 广播获得 1.4 倍提升。AirMoE 从物理层而非 MAC 层攻击同一个瓶颈：它不是让聚合传输更省调度，而是彻底取消了分别调度的必要。两条条目对读，恰好把问题夹在中间——一个接受数字链路并优化其使用，另一个放弃数字链路转向模拟叠加——这也很好地说明了为什么这一技术域在本知识库中与无线技术域并列，而不是彼此隔离。

真正新的成分是**面向推理的误差度量**。空中计算是个老想法，对它的常见反对意见是模拟聚合误差不像数字传输那样有界；而以误差对**推理输出**的影响来评分，再利用「某些层对误差的容忍度远高于其他层」这一事实，才使得这笔交易站得住脚。快功率控制 / 慢放置的两时间尺度切分，与本知识库无线侧调度文献反复得出的结构性做法一致，这里被用在了专家放置上。

需要说明的保留意见：这是一篇带仿真结果的信号处理论文，而非实测部署。设备异构条件下的增益是后续值得等待独立验证的主张。
