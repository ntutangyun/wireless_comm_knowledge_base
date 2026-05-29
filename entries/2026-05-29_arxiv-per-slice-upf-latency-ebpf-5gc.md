---
id: 2026-05-29_arxiv-per-slice-upf-latency-ebpf-5gc
date_published: 2026-05-27
date_found: 2026-05-29
type: academic-paper
technology: cellular
title_en: "Kernel-level per-slice UPF latency measurement in containerised 5G core via TC-BPF"
title_zh: "基于 TC-BPF 的容器化 5G 核心网按切片 UPF 时延内核级测量"
url: "https://arxiv.org/abs/2605.28185"
source_quality: full
topics: [5G-core, UPF, network-slicing, eBPF, TC-BPF, latency, open5GS]
topic_primary: network-slicing
topics_secondary: [mec, 5g-nr]
novelty_score: 3
---

## Summary (EN)
Mishra and Pandey (MNNIT Allahabad) tackle a measurement blind spot in the containerised 5G core: when several network slices share a host, existing tools cannot attribute User Plane Function (UPF) forwarding latency to an individual slice's containerised network function. The UPF is the data-plane element that forwards user packets between the radio side (N3) and the data network (N6); in a sliced deployment each slice may run its own UPF process. The authors build a namespace-aware TC-BPF instrumentation framework — eBPF programs attached at the traffic-control hook that trace packets across container/namespace boundaries — to measure per-slice N3→N6 forwarding delay at kernel level without modifying the network functions.

They deploy Open5GS with three concurrent slices (eMBB, URLLC, mMTC) under realistic application traffic at light/medium/heavy load, collecting roughly 28 million N3-to-N6 forwarding-delay pairs. The headline findings: eMBB forwarding delay is load-sensitive (99th-percentile rising from ~574 µs to ~1,243 µs as load increases); URLLC stays load-insensitive, confirming effective per-UPF process isolation; mMTC shows a wide-tailed distribution attributable to its TCP behaviour; and N4 PFCP session-modification latency (the control-plane signalling that reconfigures a UPF) stays below ~200 µs regardless of data-plane load.

## Summary (ZH)
Mishra 与 Pandey（MNNIT Allahabad）针对容器化 5G 核心网的一个测量盲区：当多个网络切片共享主机时，现有工具无法把用户面功能（UPF）的转发时延归因到某一切片的容器化网络功能。UPF 是在无线侧（N3）与数据网络（N6）之间转发用户分组的数据面网元；在切片部署中每个切片可运行自己的 UPF 进程。作者构建了一个命名空间感知的 TC-BPF 插桩框架——挂载在流量控制（traffic-control）钩子上的 eBPF 程序，跨容器/命名空间边界跟踪分组——在内核级测量按切片的 N3→N6 转发时延，且无需修改网络功能。

他们用 Open5GS 部署三个并发切片（eMBB、URLLC、mMTC），在轻/中/重负载的真实应用流量下采集约 2800 万组 N3→N6 转发时延样本。主要发现：eMBB 转发时延对负载敏感（99 百分位随负载从约 574 µs 升至约 1243 µs）；URLLC 对负载不敏感，证实了有效的按 UPF 进程隔离；mMTC 呈宽尾分布，归因于其 TCP 行为；N4 PFCP 会话修改时延（重配 UPF 的控制面信令）无论数据面负载如何均低于约 200 µs。

## Key technical points (EN)
- Gap: no existing tool attributes UPF forwarding latency to a specific slice's containerised NF.
- Method: namespace-aware TC-BPF (eBPF at the tc hook) tracing packets across container boundaries, kernel-level, NF-unmodified.
- Testbed: Open5GS, 3 concurrent slices (eMBB/URLLC/mMTC), light/medium/heavy load, ~28M N3→N6 delay pairs.
- Findings: eMBB p99 574 µs → 1243 µs with load; URLLC load-insensitive (process isolation); mMTC wide TCP tail; N4 PFCP session-modify < 200 µs irrespective of load.
- Implication: >1.8 ms timing headroom available for AI-driven slice orchestration.

## Key technical points (ZH)
- 缺口：无现成工具能把 UPF 转发时延归因到某切片的容器化 NF。
- 方法：命名空间感知 TC-BPF（tc 钩子上的 eBPF）跨容器边界跟踪分组，内核级、不改 NF。
- 试验床：Open5GS，3 并发切片（eMBB/URLLC/mMTC），轻/中/重负载，约 2800 万组 N3→N6 时延。
- 发现：eMBB p99 随负载 574 µs→1243 µs；URLLC 不敏感（进程隔离）；mMTC 宽 TCP 尾；N4 PFCP 会话修改 <200 µs 不随负载变化。
- 含义：为 AI 驱动的切片编排留出 >1.8 ms 的时序裕量。

## Why it matters / what's new (EN)
The KB's network-slicing and AI-RAN entries (e.g. FedCritic 2026-05-25, the China Mobile/Ericsson UE-level slicing trial 2026-05-21) mostly optimise or trial slicing; this is the measurement-instrumentation counterpart — a reproducible eBPF method that produces the per-slice UPF latency distributions those optimisers assume but rarely measure. The empirical multi-slice UPF characterisation (eMBB load-sensitivity vs URLLC isolation, with concrete p99 numbers) is presented as previously uncharacterised in open literature, and the >1.8 ms headroom figure is a concrete budget for the AI orchestration work the KB tracks (OpenTwin, ARIADNE).

## Why it matters / what's new (ZH)
本 KB 的网络切片与 AI-RAN 条目（如 FedCritic 2026-05-25、中国移动/爱立信 UE 级切片试验 2026-05-21）多在优化或试点切片；本条目是其测量插桩对偶——一个可复现的 eBPF 方法，产出那些优化器所假设却很少实测的按切片 UPF 时延分布。其多切片 UPF 实测刻画（eMBB 负载敏感 vs URLLC 隔离，附具体 p99 数字）被认为在公开文献中此前未被刻画，而 >1.8 ms 裕量是本 KB 所跟踪 AI 编排工作（OpenTwin、ARIADNE）的一个具体预算。
