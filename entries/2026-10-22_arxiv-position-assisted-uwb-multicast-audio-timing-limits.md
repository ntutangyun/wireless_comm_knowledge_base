---
id: 2026-10-22_arxiv-position-assisted-uwb-multicast-audio-timing-limits
date_published: 2026-10-20
date_found: 2026-10-22
type: academic-paper
technology: uwb
title_en: "Timing and Reliability Limits of Position-Assisted UWB Multicast Audio"
title_zh: "位置辅助 UWB 组播音频的时序与可靠性极限"
url: "https://arxiv.org/abs/2610.28245"
source_quality: full
topics: [UWB, multicast-audio, clock-synchronization, acoustic-delay-compensation, correlated-loss, LE-UWB, simulation]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

On 20 October 2026, Fengyun Zhang posted "Timing and Reliability Limits of Position-Assisted UWB Multicast Audio" to arxiv (eess.AS, cross-listed cs.IT and cs.MM). The paper asks whether one-to-many ultra-wideband transport can deliver synchronized audio to a receiver group. It models clock and actuation error, compensation for acoustic propagation delay using receiver position, correlated packet losses, and reserved channel resources. The work is a simulation-based feasibility analysis; the paper's own comparison table states that it uses no real hardware data, codec or commercial-stack benchmark.

The model uses a two-state Kalman filter for clock offset and skew, a two-state Markov common-fade model with per-receiver local erasures, and a reserved-slot load expression with airtime coefficients taken from the SPARK Microsystems SR1100 SDK v2.4.0 archive (source headers) and its documentation package. Results come from 4,590 Monte Carlo policy-run records. With eight receivers, affine clock correction gives a mean 95th-percentile electronic timing spread of about 21.19 microseconds (free running: about 1341 microseconds). Position-based compensation shrinks the single-listener acoustic arrival spread from about 21.95 ms to about 419.43 microseconds, yet 98.86% of compensated events still exceed an illustrative 30 microsecond criterion. With 64 receivers, three block copies give an all-receiver delivery probability of about 0.97478. The paper also identifies failure mechanisms: stale position data, shared fades, retransmission limits and schedule saturation.

## Summary (ZH)

2026年10月20日，Fengyun Zhang 在 arxiv 发布论文《位置辅助 UWB 组播音频的时序与可靠性极限》（eess.AS，交叉列入 cs.IT 与 cs.MM）。论文探讨一对多超宽带传输能否向一组接收端递送同步音频。它对时钟与执行器误差、基于接收端位置的声学传播延迟补偿、相关性丢包以及预留信道资源进行建模。该工作是基于仿真的可行性分析；论文自带的对比表声明其不使用真实硬件数据、编解码器或商用协议栈基准。

模型使用两状态卡尔曼滤波器估计时钟偏移与偏斜，使用带各接收端本地擦除的两状态马尔可夫共同衰落模型，以及基于 SPARK Microsystems SR1100 SDK v2.4.0 压缩包（源码头文件）及其文档包的空口时间系数的预留时隙负载表达式。结果来自 4,590 条蒙特卡洛策略运行记录。在八个接收端时，仿射时钟校正使电气时序跨度的 95 分位均值约为 21.19 微秒（自由运行约 1341 微秒）。基于位置的补偿将单一听者的声学到达跨度从约 21.95 毫秒缩小到约 419.43 微秒，但仍有 98.86% 的补偿后事件超过示例性的 30 微秒准则。在 64 个接收端时，三次块拷贝使全体接收端递送概率约为 0.97478。论文还指出了失效机制：位置数据过期、共同衰落、重传次数限制与调度饱和。

## Key technical points (EN)

- Question: can one-to-many UWB transport deliver audio that is synchronized at the electrical output, coincident at the listener, and delivered to the whole group?
- Clock model: two-state Kalman filter for offset and skew plus a fixed observation bias; reference algorithms are affine clock tracking, fixed 1-3 copy policies and an adaptive repetition heuristic (not certified controllers).
- Acoustic model: one target listener; arrival error arises from clock error, actuator error, and position error and age; a conditional arrival-span bound is given.
- Loss model: two-state Markov common fade with per-receiver local erasures; group-failure bounds are given.
- Platform audit: from the SPARK Microsystems SDK v2.4.0 archive (source headers) and its documentation package, no hardware; the paper notes broadcast ACKs collide and that ACK-off retransmission has no effect, so repeated copies are application-level.
- Setup: 30 seeds; timing runs use 8 receivers and 30 s; transport runs use 2 to 64 receivers and 10 s; 4,590 records in total.
- Results: affine electronic span about 21.19 us versus about 1341 us free running; arrival span about 21.95 ms uncompensated versus about 419.43 us compensated; 98.86% of compensated events exceed the 30 us target; with 64 receivers, three copies give about 0.97478 all-receiver delivery.
- Limits stated by the paper: channel, clock, sensor and slot parameters are modelling assumptions; timing and transport experiments are not coupled end to end; no hardware, codec or commercial-stack benchmark. The paper does not mention IEEE 802.15.4.

## Key technical points (ZH)

- 问题：一对多 UWB 传输能否做到电气输出同步、听者处声学到达一致，并送达整个接收组？
- 时钟模型：两状态卡尔曼滤波器（偏移与偏斜）加固定观测偏置；参考算法为仿射时钟跟踪、固定 1-3 份拷贝策略和自适应重复启发式（非认证控制器）。
- 声学模型：单一目标听者；到达误差来自时钟误差、执行器误差以及位置误差与位置数据龄期；给出条件性到达跨度上界。
- 丢包模型：两状态马尔可夫共同衰落加各接收端本地擦除；给出组失败上界。
- 平台审查：基于 SPARK Microsystems SDK v2.4.0 压缩包（源码头文件）及其文档包，未使用硬件；论文指出广播 ACK 会冲突、关闭 ACK 的重传无效，因此重复拷贝属于应用层行为。
- 设置：30 个随机种子；时序实验为 8 个接收端、30 秒；传输实验为 2 至 64 个接收端、10 秒；共 4,590 条记录。
- 结果：仿射电气跨度约 21.19 微秒，自由运行约 1341 微秒；到达跨度未补偿约 21.95 毫秒，补偿后约 419.43 微秒；98.86% 的补偿后事件超过 30 微秒目标；64 个接收端时三份拷贝的全体接收端递送概率约 0.97478。
- 论文自述的局限：信道、时钟、传感器与时隙参数均为建模假设；时序与传输实验未端到端耦合；无硬件、编解码器或商用协议栈基准。论文未提及 IEEE 802.15.4。

## Why it matters / what's new (EN)

This is the second UWB-audio scheduling paper from the same author in the knowledge base (the 2026-10-20 entry covered admission control and deadline-aware pruning for isochronous UWB audio). Where that paper addressed complete-SDU delivery by deadline, this one addresses group synchronization: it quantifies how far clock correction and position-based acoustic compensation can go, and reports that electronic synchronization to tens of microseconds is reachable in the model while the acoustic residual and group-wide delivery remain the binding limits. The evidence is simulation under assumed parameters and an SDK audit done from the archive and documentation package without hardware, so the numbers indicate where the limits sit in the model rather than measured performance.

## Why it matters / what's new (ZH)

这是知识库中同一作者的第二篇 UWB 音频调度论文（2026-10-20 条目涉及等时 UWB 音频的准入控制与截止期感知裁剪）。上一篇关注按截止期完整递交 SDU，本篇关注组同步：量化了时钟校正与基于位置的声学补偿能走多远，并报告在模型中电气同步可达数十微秒，而声学残差与全组递送才是约束性限制。其证据来自假设参数下的仿真以及未使用硬件、基于 SDK 压缩包与文档包的审查，因此这些数字反映模型中的极限位置，而非实测性能。

## Images

None.
