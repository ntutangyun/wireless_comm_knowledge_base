---
id: 2026-10-26_arxiv-workload-aware-monitoring-ai-ran-cpu-gpu-dispatch-pdsch
date_published: 2026-10-22
date_found: 2026-10-26
type: academic-paper
technology: cellular
title_en: "Workload-Aware Monitoring for AI-RAN"
title_zh: "面向 AI-RAN 的工作负载感知监测"
url: "https://arxiv.org/abs/2610.31627"
source_quality: full
topics: [AI-RAN, OCUDU, PDSCH, CPU-GPU-dispatch, telemetry, transport-block, Open5GS, workload-aware-monitoring]
topic_primary: cellular-ai
topics_secondary: [open-ran, 5g-nr]
novelty_score: 3
---

## Summary (EN)
Babak Azkaei, Georgios Exarchakos and Kishor Chandra Joshi (Eindhoven University of Technology) propose workload-aware monitoring for AI-RAN platforms, where software radio processing and AI services are expected to share CPU and GPU resources. Their starting point is that aggregate telemetry reports operating conditions, but a change in timing may reflect a different workload, a different processor, or a different measurement boundary. The work is a two-page paper accepted for the ACM CoNEXT 2026 Student Workshop.

The proposal keeps, for each unit of work (for example a PDSCH encoding request), four linked views: workload (what was processed), dispatch (which processing path), timing (what was timed) and context (under which conditions). Two rules turn the views into monitoring output: associate records through shared work identifiers before aggregating, and aggregate like with like, for instance a duration histogram labelled by transport-block size and processor rather than one overall mean. The authors illustrate it on over-the-air PDSCH processing in a testbed with an NVIDIA DGX Spark running Open5GS and a CUDA-enabled OCUDU gNB, a USRP X310 radio, 20 MHz single-antenna band n77, one phone and a 30 Mbps UDP source.

In 16 over-the-air downlink experiments, a hybrid dispatch policy (CPU for transport blocks below 4,096 bytes, GPU otherwise) has 29.66% and 22.93% lower mean host-callback durations than direct GPU dispatch, without and with a synthetic GPU co-runner respectively. Grouping places the difference in small transport blocks (36.09% and 30.29% lower where hybrid selects the CPU), while the large-block duration ranges overlap.

## Summary (ZH)
Babak Azkaei、Georgios Exarchakos 与 Kishor Chandra Joshi（埃因霍温理工大学）针对 AI-RAN 平台提出工作负载感知监测；在这类平台上，软件无线电处理与 AI 服务预计将共享 CPU 和 GPU 资源。其出发点是：聚合遥测只能反映运行状况，而耗时变化可能源于不同的工作负载、不同的处理器或不同的测量边界。该文为两页论文，已被 ACM CoNEXT 2026 Student Workshop 接收。

方案为每个工作单元（例如一次 PDSCH 编码请求）保留四个关联视图：工作负载（处理了什么）、调度路径（走了哪条处理路径）、时序（测量了什么）和上下文（在何种条件下）。两条规则把这些视图转化为监测输出：先通过共享的工作标识关联记录再聚合；按同类聚合，例如按传输块大小和处理器标注的时长直方图，而不是一个总体均值。作者在一个测试平台上以空口 PDSCH 处理为例：NVIDIA DGX Spark 运行 Open5GS 和支持 CUDA 的 OCUDU gNB，使用 USRP X310 射频、n77 频段 20 MHz 单天线链路、一部手机和 30 Mbps UDP 源。

在 16 次空口下行实验中，混合调度策略（小于 4,096 字节的传输块用 CPU，其余用 GPU）相比直接 GPU 调度，平均主机回调时长在无和有合成 GPU 共驻负载时分别低 29.66% 和 22.93%。按组分析表明差异出现在小传输块上（混合策略选用 CPU 的小块平均分别低 36.09% 和 30.29%），而大传输块的时长范围相互重叠。

## Key technical points (EN)
- Four linked views per work item: workload (TB size, modulation, allocation), dispatch (policy and implied CPU/GPU path), timing (processor entry to host callback) and context (co-runner, host policy, receiver rate).
- Monitoring rules: "associate before aggregating" (link records via shared work identifiers or fields logged together, not nearby timestamps alone) and "aggregate like with like" (per-context share and timing of each workload class on each processor).
- Testbed: DGX Spark (Arm CPU, GB10 GPU), Open5GS core, CUDA-enabled OCUDU gNB, USRP X310, band n77, 20 MHz, 1x1; one phone produces about 1,400 downlink transport blocks per second.
- Comparing equal-weight averages of run means, hybrid all-TB callback durations are 29.66% (no co-runner) and 22.93% (synthetic GPU co-runner) lower than direct GPU dispatch; per-run mean ranges are 34.3-38.2 us versus 49.4-52.5 us without a co-runner.
- For large TBs the ranges overlap (about 51-61 us across policies); the authors state that overlapping ranges do not establish equal GPU performance and that the logs cannot say whether processing delay, buffering or link adaptation caused the different TB-size proportions.
- Scope stated by the authors: client reports give near 30 Mbps and zero UDP loss over roughly 20 s intervals; next steps are an online implementation, device-side completion timing (for example via CUPTI), a cutoff sweep and uplink (PUSCH) decoding.

## Key technical points (ZH)
- 每个工作项四个关联视图：工作负载（TB 大小、调制、分配）、调度路径（策略及其隐含的 CPU/GPU 路径）、时序（从处理器入口到主机回调）、上下文（共驻负载、主机策略、接收速率）。
- 监测规则：“先关联再聚合”（通过共享工作标识或同时记录的字段关联记录，而不是仅靠相近的时间戳）与“同类聚合”（按上下文报告每种工作负载类别在各处理器上的占比与耗时）。
- 测试平台：DGX Spark（Arm CPU、GB10 GPU）、Open5GS 核心网、支持 CUDA 的 OCUDU gNB、USRP X310、n77 频段、20 MHz、1x1；一部手机每秒产生约 1,400 个下行传输块。
- 以各次运行均值的等权平均比较，混合策略的全部 TB 回调时长比直接 GPU 调度低 29.66%（无共驻负载）和 22.93%（有合成 GPU 共驻负载）；无共驻负载时各次运行的均值范围为 34.3-38.2 微秒对 49.4-52.5 微秒。
- 大传输块的范围相互重叠（各策略约 51-61 微秒）；作者指出范围重叠并不说明 GPU 性能相等，且日志无法区分是处理延迟、缓冲还是链路自适应导致了不同的 TB 大小占比。
- 作者给出的范围限制：客户端报告约 30 Mbps、约 20 秒区间内 UDP 零丢包；后续工作包括在线实现、设备侧完成时间测量（例如 CUPTI）、阈值扫描和上行（PUSCH）解码。

## Why it matters / what's new (EN)
The paper addresses how to interpret CPU/GPU timing observations on an AI-RAN platform, rather than proposing a new scheduler: its claim is that comparisons are only meaningful once workload class and processing path are held fixed. The CPU-for-small-blocks observation is presented by the authors as a candidate for complementary CPU/GPU use. It rests on 16 runs of one single-phone, 20 MHz testbed and a two-page workshop format, so it is a first illustration rather than a general result.

## Why it matters / what's new (ZH)
本文讨论的是如何解读 AI-RAN 平台上的 CPU/GPU 时序观测，而不是提出新的调度器：其主张是只有固定工作负载类别和处理路径后，比较才有意义。作者把“小块用 CPU”的观察视为 CPU/GPU 互补使用的候选方案。该结论基于单手机、20 MHz 测试平台的 16 次运行以及两页的研讨会篇幅，因此是初步演示而非普适结果。

## Images

None.
