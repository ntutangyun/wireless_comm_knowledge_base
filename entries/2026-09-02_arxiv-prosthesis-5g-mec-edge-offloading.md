---
id: 2026-09-02_arxiv-prosthesis-5g-mec-edge-offloading
date_published: 2026-08-31
date_found: 2026-09-02
type: academic-paper
technology: edge-ai
title_en: "On-device vision inference fails a real prosthetic-hand task; 5G edge offloading matches wired Ethernet"
title_zh: "假肢视觉推理在真实任务中失败于本地运行；5G 边缘卸载性能持平有线以太网"
url: "https://arxiv.org/abs/2608.31021"
source_quality: full
topics: [mobile-edge-computing, 5G-offloading, on-device-inference, human-trial, grasp-planning, prosthetics, RGB-D]
topic_primary: compute-offloading
topics_secondary: [edge-ai-networking, on-device-inference]
novelty_score: 4
---

## Summary (EN)

Camera-equipped prosthetic hands that plan their own grasps could cut the cognitive load of controlling a hand by EMG alone, but running a modern vision model on a wearable is a real engineering problem — the device doesn't have the power or compute budget for it. This paper builds and tests the first working prototype of a 5G-connected mobile-edge-computing (MEC) prosthetic hand: it streams RGB-D images to an edge server, which does the grasp planning and sends the decision back, and the paper's contribution is a human-subjects comparison of that architecture against the on-device alternative — not just a simulation of one.

Thirteen able-bodied participants performed pick-and-place tasks under six conditions: manual EMG control (the baseline people actually use today), fully on-device inference, wired Ethernet to the edge server, and three separate 5G links to the same edge server — a private 20 MHz network, a private 100 MHz network, and a commercial public 5G connection. The result is unusually clean: every network-based condition (wired or any of the three 5G configurations) performed about the same — roughly 8.6 seconds per task, 34% faster than manual EMG control, with 62% lower reported workload — while on-device inference was the worst-performing condition in the whole study, at 10.3 seconds and a 76% failure rate, because the embedded model could only manage 3 frames per second against 6-20 fps over the network link. Network latency stayed under 180 ms for private 5G and under 270 ms for the commercial 5G link, in both cases well inside what the task tolerated.

## Summary (ZH)

配备摄像头、能自主规划抓取动作的假肢手，理论上可以把"完全靠肌电（EMG）控制手部动作"的认知负担降下来，但在可穿戴设备上跑现代视觉模型是个真实的工程难题——设备既没有算力预算，也没有功耗预算。这篇论文构建并测试了首个可运行的 5G 移动边缘计算（MEC）假肢手原型：设备把 RGB-D 图像流式传给边缘服务器，由服务器完成抓取规划并把决策传回，论文的贡献是用真人受试者比较这套架构与本地推理方案——而不只是对某一方案做仿真。

13 名健全受试者在六种条件下完成取放任务：肌电手动控制（当前实际在用的基线方案）、完全本地推理、有线以太网连到边缘服务器，以及三种独立的 5G 链路连到同一台边缘服务器——私有 20 MHz 网络、私有 100 MHz 网络，以及商用公共 5G 连接。结果异常清晰：所有基于网络的条件（有线或三种 5G 配置中的任意一种）表现基本相当——每个任务约 8.6 秒，比肌电手动控制快 34%，主观负荷评分低 62%；而本地推理是全部条件中表现最差的一档，任务耗时 10.3 秒、失败率高达 76%，原因是嵌入式模型只能做到每秒 3 帧，而通过网络链路可达每秒 6-20 帧。网络时延方面，私有 5G 保持在 180 毫秒以内，商用 5G 链路在 270 毫秒以内，两者均远在任务可容忍的范围之内。

## Key technical points (EN)

- **Prototype**: first 5G-MEC semi-autonomous prosthetic hand — streams RGB-D to an edge server for real-time grasp planning, decision streamed back to actuate the hand.
- **Study design**: 13 able-bodied participants, pick-and-place task, 6 conditions — manual EMG, on-device inference, wired Ethernet, private 5G @ 20 MHz, private 5G @ 100 MHz, commercial public 5G.
- **Headline result**: all network-offload conditions (wired + all three 5G configs) statistically indistinguishable — ~8.6s task time (34% faster than manual EMG), 20-38% failure rate, 62% lower workload than manual control.
- **On-device is the failure case, not the safe fallback**: 10.3s task time, 76% failure rate, 3 fps vs. 6-20 fps achievable over the network — embedded inference could not keep up with the vision workload on this hardware.
- **Network budget**: private 5G latency <180 ms, commercial 5G latency <270 ms — both configurations, including bandwidth-constrained and commercially variable ones, matched wired-Ethernet task performance.
- **Framing**: positions 5G edge-offloading as a practical deployment path for compute-intensive prosthesis control, explicitly because local embedded inference is not currently viable on this device class.

## Key technical points (ZH)

- **原型**：首个 5G-MEC 半自主假肢手——把 RGB-D 图像流传给边缘服务器做实时抓取规划，决策再流式传回驱动手部动作。
- **实验设计**：13 名健全受试者，取放任务，6 种条件——肌电手动、本地推理、有线以太网、私有 5G（20 MHz）、私有 5G（100 MHz）、商用公共 5G。
- **核心结果**：所有网络卸载条件（有线 + 三种 5G 配置）在统计上难以区分——任务耗时约 8.6 秒（比肌电手动快 34%），失败率 20-38%，主观负荷比手动控制低 62%。
- **本地推理是失败案例，而非"更保险"的兜底方案**：任务耗时 10.3 秒，失败率高达 76%，嵌入式推理仅能达到每秒 3 帧，而经网络可达每秒 6-20 帧——本地推理跟不上该硬件上的视觉负载。
- **网络预算**：私有 5G 时延 <180 毫秒，商用 5G 时延 <270 毫秒——两种配置（包括带宽受限、商用可变时延的场景）均达到与有线以太网相当的任务表现。
- **定位**：将 5G 边缘卸载定位为计算密集型假肢控制的实用部署路径，明确原因是该设备类别上本地嵌入式推理目前并不可行。

## Why it matters / what's new (EN)

This is a rare case in the domain where "offload vs. on-device" is settled by a controlled human-subjects trial rather than a simulated benchmark or a vendor claim — and the answer runs against the usual edge-AI instinct that local processing is always the safer, lower-risk default. Here the local option is the one that fails users (76% task failure), and the network-dependent options — including a commercially variable public 5G link, not just a lab-grade private network — all clear the bar. It is squarely a compute-offloading paper by the SKILL's routing rule: the contribution being evaluated is whether real-time vision-based control tolerates network-mediated inference for this workload class, not a change to 5G radio access itself, so it stays in this scout's lane rather than routing to cellular. Flagged to `cellular_research_scout` as an FYI given the private-vs-commercial-5G comparison is itself a genuinely interesting network-performance data point, even though the paper's own contribution is the offloading-architecture question.

## Why it matters / what's new (ZH)

这是本领域中少见的、"卸载 vs. 本地"之争由受控真人受试者试验而非仿真基准或厂商宣称来给出答案的案例——而答案恰恰与边缘 AI 的一般直觉相反：本地处理并不总是更安全、风险更低的默认选项。在这里，本地方案恰恰是让用户任务失败的那一个（失败率 76%），而依赖网络的方案——包括时延可变的商用公共 5G 链路，而不只是实验室级私有网络——全部达标。按本 scout 的路由规则，这明确属于计算卸载类论文：被评测的贡献是"该类负载下，基于实时视觉的控制能否容忍经网络中转的推理"，而非对 5G 无线接入本身的改动，因此归属本 scout 而非路由给 cellular。鉴于私有 5G 与商用 5G 的对比本身也是一个颇有价值的网络性能数据点，即便论文自身的贡献落在卸载架构问题上，仍将此条目标记给 `cellular_research_scout` 作为参考。

## Images

*(No redistributable images for this entry — figures hosted on arxiv.org; not independently verified for hotlink stability.)*
