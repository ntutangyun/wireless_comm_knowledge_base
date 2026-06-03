---
id: 2026-06-03_arxiv-auguste-predictive-urllc-ul-scheduling
date_published: 2026-06-02
date_found: 2026-06-03
type: academic-paper
title_en: "AUGUSTE: Online-Learning dApp for Predictive URLLC Scheduling"
title_zh: "AUGUSTE：用于预测式 URLLC 调度的在线学习 dApp"
url: "https://arxiv.org/abs/2606.03664"
source_quality: abstract_only
technology: cellular
topics: [URLLC, 5G-NR, uplink-scheduling, online-learning, O-RAN, dApp]
topic_primary: 5g-nr
topics_secondary: [cellular-ai, open-ran]
novelty_score: 3
---

## Summary (EN)
AUGUSTE attacks the uplink-latency bottleneck in real 5G NR: although URLLC targets 1–10 ms, measured median uplink latency on real networks is 50–70 ms, dominated by the Scheduling Request (SR) procedure a UE must complete before it can transmit uplink data. Rather than relying on always-on grants (which guarantee low latency at ~100% resource overhead) or Configured Grant schemes (which need cross-layer synchronization and assume periodic traffic), AUGUSTE embeds online machine-learning models directly in the uplink MAC scheduler to *predict* packet arrivals and pre-allocate resources proactively.

The framework runs as an adaptive state machine that alternates between a *learning phase* (collecting per-flow arrival statistics) and a *confident phase* (exploiting the learned arrival model to issue proactive grants ahead of the SR). This online design lets it track non-periodic traffic without the offline training or fixed-period assumptions of Configured Grant. The authors position it as a dApp — an O-RAN-style distributed application that hooks the scheduler.

On a real 5G testbed running OpenAirInterface, evaluated across three traffic patterns (request-response, ML edge inference, periodic autonomous reporting), AUGUSTE reaches ~10 ms median round-trip time — matching always-on scheduling and roughly halving the ~20 ms SR-based baseline — while consuming only 7–10% resource overhead versus ~100% for always-on. The result is presented as a near-optimal point on the latency-vs-overhead trade-off.

## Summary (ZH)
AUGUSTE 针对真实 5G NR 的上行时延瓶颈：尽管 URLLC 目标为 1–10 ms，真实网络实测上行中位时延为 50–70 ms，主要由 UE 上行发送数据前必须完成的调度请求（SR）流程主导。AUGUSTE 不依赖常开授权（以约 100% 资源开销换取低时延），也不依赖配置授权（需跨层同步并假设周期性流量），而是将在线机器学习模型直接嵌入上行 MAC 调度器，*预测*分组到达并提前主动分配资源。

该框架以自适应状态机运行，在*学习阶段*（采集每流到达统计）与*自信阶段*（利用学到的到达模型在 SR 之前发放主动授权）之间交替。这种在线设计使其无需离线训练或固定周期假设即可跟踪非周期流量。作者将其定位为 dApp——一种挂接调度器的 O-RAN 式分布式应用。

在运行 OpenAirInterface 的真实 5G 测试床上，针对三类流量（请求-响应、ML 边缘推理、周期性自主上报）评估，AUGUSTE 实现约 10 ms 中位往返时延——与常开调度持平，约为基于 SR 的 ~20 ms 基线的一半——而资源开销仅 7–10%（常开方案约 100%）。结果被呈现为时延-开销折中上的近最优点。

## Key technical points (EN)
- **Target bottleneck:** the SR procedure that inflates 5G UL latency to 50–70 ms median.
- **Mechanism:** online ML arrival-prediction embedded in the UL MAC scheduler; proactive grants issued before the SR.
- **Adaptive state machine:** alternates learning (statistics collection) and confident (prediction-exploitation) phases — handles non-periodic traffic without Configured Grant's periodicity assumption.
- **Deployment:** O-RAN dApp hooking the scheduler.
- **Results (OAI 5G testbed):** ~10 ms median RTT (≈ always-on, ~½ of SR baseline) at 7–10% overhead vs ~100% for always-on.

## Key technical points (ZH)
- **目标瓶颈：** 将 5G 上行中位时延抬升至 50–70 ms 的 SR 流程。
- **机制：** 在上行 MAC 调度器中嵌入在线 ML 到达预测；在 SR 之前发放主动授权。
- **自适应状态机：** 学习阶段（采集统计）与自信阶段（利用预测）交替——无需配置授权的周期性假设即可处理非周期流量。
- **部署：** 挂接调度器的 O-RAN dApp。
- **结果（OAI 5G 测试床）：** 约 10 ms 中位 RTT（≈ 常开，约为 SR 基线的一半），开销仅 7–10%（常开约 100%）。

## Why it matters / what's new (EN)
This complements the recently-ingested O-RAN scheduling entries (2026-06-01 Double-DQN PRB allocation 2605.30630; jamming-resilient PRB 2605.30622; intent-based O-RAN 2605.30079) but attacks a different layer: instead of downlink/PRB reservation, it targets the *uplink grant* path and the SR delay specifically, with online (not offline-RL) learning and validation on a real OAI testbed rather than simulation. The 7–10% overhead for always-on-class latency is the headline contribution — it makes predictive scheduling practical for mixed, non-periodic URLLC traffic where Configured Grant's periodicity assumption breaks.

## Why it matters / what's new (ZH)
本文与近期收录的 O-RAN 调度条目（2026-06-01 的 Double-DQN PRB 分配 2605.30630、抗干扰 PRB 2605.30622、意图驱动 O-RAN 2605.30079）互补，但攻击不同层面：不针对下行/PRB 预留，而是专门针对*上行授权*路径与 SR 时延，采用在线（而非离线 RL）学习，并在真实 OAI 测试床而非仿真上验证。以 7–10% 开销获得常开级时延是核心贡献——使预测式调度对配置授权周期性假设失效的混合非周期 URLLC 流量变得可行。
