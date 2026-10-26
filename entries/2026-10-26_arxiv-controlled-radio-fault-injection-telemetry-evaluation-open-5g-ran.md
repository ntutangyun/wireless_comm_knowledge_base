---
id: 2026-10-26_arxiv-controlled-radio-fault-injection-telemetry-evaluation-open-5g-ran
date_published: 2026-10-22
date_found: 2026-10-26
type: academic-paper
technology: cellular
title_en: "Controlled Radio Fault Injection and Telemetry Evaluation for Open 5G RANs"
title_zh: "面向开放 5G RAN 的受控无线故障注入与遥测评估"
url: "https://arxiv.org/abs/2610.31598"
source_quality: full
topics: [Open-RAN, AI-RAN, OCUDU, ZeroMQ, I/Q-samples, fault-injection, telemetry, codelets, jBPF, Open5GS, srsUE]
topic_primary: open-ran
topics_secondary: [cellular-ai, 5g-nr]
novelty_score: 3
---

## Summary (EN)
Babak Azkaei, Maxim Bîtiu, Georgios Exarchakos and Kishor Chandra Joshi (Eindhoven University of Technology) present a reusable way to evaluate RAN telemetry under known radio impairments. The paper carries an ACM MobiHoc '26 proceedings header (DOI 10.1145/3842721.3856774). Their argument is that judging whether telemetry is useful needs controlled impairments and observations of the same execution.

The framework consists of C and Python channel brokers that sit between an OCUDU base station and a software UE connected through ZeroMQ, applying scheduled, directional transformations to I/Q samples (blanking, attenuation, Gaussian noise, a tone; the Python broker adds frequency offset and 3GPP tapped-delay-line channels) and then restoring the link, plus a workflow that jointly records the applied faults, native telemetry, programmable (codelet) telemetry and the delay of an independent UDP echo probe. The brokers and fault-control tools are released as OCUDU-ZMQ-Radio-Fault.

The demonstration uses 45 comparative trials of brief uplink interruptions and stepped additive noise. Native missing-feedback (DTX) events retrospectively identify interruptions, whereas noise changes decoding-error measurements without producing those events. Median on-time round-trip times remain near 30 ms, but the prespecified comparisons show mean increases in on-time 95th-percentile delay of 354 ms and 604 ms for one and five interruptions, and 113 ms for noise. Adding receive-side RLC codelet summaries did not improve interruption classification on held-out trials.

## Summary (ZH)
Babak Azkaei、Maxim Bîtiu、Georgios Exarchakos 与 Kishor Chandra Joshi（埃因霍温理工大学）提出了一种可复用的方法，用于在已知无线损伤下评估 RAN 遥测。论文带有 ACM MobiHoc '26 会议论文集页眉（DOI 10.1145/3842721.3856774）。作者的论点是：评估遥测是否有用，需要受控的损伤，并对同一次执行进行观测。

该框架包括：位于 OCUDU 基站与通过 ZeroMQ 相连的软件 UE 之间的 C 与 Python 信道代理，它们对 I/Q 采样施加按计划的、有方向的变换（置零、衰减、高斯噪声、单音；Python 代理还支持频偏和 3GPP 抽头延迟线信道），随后恢复链路；以及一个同时记录所施加故障、原生遥测、可编程（codelet）遥测和独立 UDP 回声探测时延的工作流。代理和故障控制工具已以 OCUDU-ZMQ-Radio-Fault 发布。

演示使用 45 次对比试验，涉及短暂的上行中断和阶梯式加性噪声。原生的反馈缺失（DTX）事件可事后识别中断，而噪声会改变译码错误测量却不产生这些事件。按时往返时延中位数保持在约 30 ms，但预先设定的对比显示，一次和五次中断使按时 95 分位时延平均分别增加 354 ms 和 604 ms，噪声则增加 113 ms。加入接收侧 RLC codelet 摘要并未提高在留出试验上的中断分类效果。

## Key technical points (EN)
- Brokers sit at the virtual-radio boundary: they transform selected I/Q samples and forward a block of unchanged length, so the receiver, scheduler, link adaptation and retransmission logic react to the modified signal; this differs from IP-layer delay or loss injection.
- Supported operations: attenuation, blanking, complex Gaussian noise and a sinusoidal tone in both backends; frequency offset and multipath (3GPP TDL) in the Python broker. The repeated studies use the C broker; a broker test suite checks 34 cases across both backends.
- The authors state the operations are controlled digital stressors, not complete replicas of physical faults (blanking is not a full blockage model; the noise setting is referenced to digital power, not a calibrated SINR).
- Three measurement paths per run: native telemetry (periodic reports, scheduler events, PHY logs), codelets (Janus/jBPF programs adapted from Microsoft's jrtc-apps for OCUDU) and an independent UE-core-UE UDP echo probe (128-byte requests at 50 Hz, one-second deadline).
- Testbed: OCUDU 26.04, Open5GS 2.8.0, srsUE, one UE, band 3 cell, 20 MHz, 15 kHz SCS, 23.04 Msamples/s, 2 Mbit/s background UDP per direction.
- Results: native DTX groups classify completed interruption trials, noise changes decoding-error measurements without those events; mean p95 delay increases of 354 ms (one interruption), 604 ms (five) and 113 ms (noise); RLC codelet summaries did not improve held-out interruption classification.
- Restoration covers the signal transformation only; it does not restart the gNB or UE or reset link adaptation, so the response can outlast the fault.

## Key technical points (ZH)
- 代理位于虚拟无线电边界：对选定的 I/Q 采样进行变换并转发长度不变的数据块，使接收机、调度器、链路自适应和重传逻辑对被修改的信号作出反应；这不同于 IP 层的延迟或丢包注入。
- 支持的操作：两个后端都支持衰减、置零、复高斯噪声和正弦单音；Python 代理还支持频偏和多径（3GPP TDL）。重复实验使用 C 代理；代理测试套件在两个后端上检查 34 个用例。
- 作者指出这些操作是受控的数字应力，而非物理故障的完整复刻（置零不是完整的遮挡模型；噪声设置以数字功率为参照而非校准的 SINR）。
- 每次运行有三条测量路径：原生遥测（周期性报告、调度事件、PHY 日志）、codelet（由 Microsoft 的 jrtc-apps 改造用于 OCUDU 的 Janus/jBPF 程序）以及独立的 UE-核心网-UE UDP 回声探测（128 字节请求、50 Hz、1 秒截止时间）。
- 测试平台：OCUDU 26.04、Open5GS 2.8.0、srsUE、一个 UE、band 3 小区、20 MHz、15 kHz 子载波间隔、23.04 Msamples/s、每方向 2 Mbit/s 背景 UDP。
- 结果：原生 DTX 分组可对已完成的中断试验分类，噪声会改变译码错误测量而不产生这些事件；按时 p95 时延平均增加 354 ms（一次中断）、604 ms（五次）和 113 ms（噪声）；RLC codelet 摘要并未改善留出试验的中断分类。
- 恢复仅针对信号变换，不会重启 gNB 或 UE，也不会重置链路自适应，因此响应可能比故障持续得更久。

## Why it matters / what's new (EN)
The paper's stated contribution is the experimental capability itself; the telemetry study is a demonstration of how to use it. It positions the work as complementing broader emulation platforms (it cites Colosseum, ACHEM and OpenAirInterface's RF simulator) rather than replacing their propagation models or scale. The results come from a single-UE software testbed with a direct ZeroMQ link, and the authors caution that repeated schedules control the intervention, not an identical protocol trajectory afterwards.

## Why it matters / what's new (ZH)
论文自述的贡献是该实验能力本身，遥测研究只是其用法的演示。作者将其定位为对更广泛仿真平台（文中提到 Colosseum、ACHEM 以及 OpenAirInterface 的射频模拟器）的补充，而非取代其传播模型或规模。结果来自带有直连 ZeroMQ 链路的单 UE 软件测试平台，作者提醒：重复相同的计划只能控制干预本身，而不能保证之后的协议轨迹完全一致。

## Images

None.
