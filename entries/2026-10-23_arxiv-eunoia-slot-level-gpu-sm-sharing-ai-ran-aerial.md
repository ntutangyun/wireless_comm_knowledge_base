---
id: 2026-10-23_arxiv-eunoia-slot-level-gpu-sm-sharing-ai-ran-aerial
date_published: 2026-10-11
date_found: 2026-10-23
type: academic-paper
technology: cellular
title_en: "Eunoia: Toward Application-Transparent, Scalable GPU Sharing in AI-RAN"
title_zh: "Eunoia：面向 AI-RAN 的应用透明、可扩展 GPU 共享"
url: "https://arxiv.org/abs/2610.15404"
source_quality: full
topics: [AI-RAN, GPU-sharing, NVIDIA-Aerial, O-DU, streaming-multiprocessor, MPS, MIG, libsmctrl, RAN-slot, private-5G, LLM-serving]
topic_primary: open-ran
topics_secondary: [cellular-ai, mec]
novelty_score: 3
---

## Summary (EN)
The paper (6 pages, Rice University) describes Eunoia, a GPU scheduler for AI-RAN, where AI workloads and the 5G RAN physical layer share the same GPU. The problem it addresses is that a concurrent AI application can starve the latency-sensitive RAN of GPU compute. Eunoia works at the granularity of a RAN slot and does not require changes to the RAN or AI application code.

Following the paper: it motivates the problem with an over-the-air test where an unmanaged co-located LLM service makes the RAN stall; compares against static NVIDIA MIG and MPS partitioning and other GPU-sharing work (a comparison table lists CAORA, YinYangRAN, Weaver and Eunoia); describes three modules (RAN Monitor, SM Predictor, SM Allocator); and evaluates on an over-the-air private 5G network and an emulated multi-cell network on NVIDIA Aerial, with the TimelyLLM serving system as the AI workload.

## Summary (ZH)
该论文（6 页，莱斯大学）介绍 Eunoia，一种面向 AI-RAN 的 GPU 调度器，AI 负载与 5G RAN 物理层共享同一块 GPU。它要解决的问题是：并发的 AI 应用会使对时延敏感的 RAN 得不到足够的 GPU 算力。Eunoia 以 RAN 时隙为粒度工作，无需修改 RAN 或 AI 应用代码。

按论文顺序：先用空口测试说明动机——不加管理时，共置的 LLM 服务会使 RAN 停滞；再与静态的 NVIDIA MIG、MPS 划分及其他 GPU 共享工作比较（对比表列出 CAORA、YinYangRAN、Weaver 与 Eunoia）；然后描述三个模块（RAN Monitor、SM Predictor、SM Allocator）；最后在 NVIDIA Aerial 上以 TimelyLLM 服务系统作为 AI 负载，在空口私有 5G 网络和仿真多小区网络上评估。

## Key technical points (EN)
- Monitor: built with the O-DU as a dApp on an extension of an earlier shared-memory interface (ETHOS, Wu et al. 2025), it exposes slot-level RAN metrics with sub-millisecond overhead - active cells and UEs, MCS, PRBs, throughput, transport-block size - without modifying RAN code. Per-slot SM usage ground truth is profiled offline with Nsight.
- Predictor: an ensemble of four multi-layer perceptrons (3 hidden layers of 128 ReLU units each, predictions averaged) aggregates inputs across cells so it handles different cell counts, UE loads and TDD patterns without retraining. It predicts the 99.8th percentile of next-slot SM usage rather than the mean, as a conservative choice for RAN safety, and runs on the CPU.
- Allocator: converts the prediction into TPC masks and applies them through libsmctrl, so RAN and AI kernels get isolated SM sets at per-slot time granularity and per-TPC (two-SM) spatial granularity.
- Over-the-air test: GH200 server running ARC-OTA 1.7, Foxconn 4x4 MIMO O-RU with 100 MHz bandwidth and O-RAN 7.2 split, Amarisoft UE emulator with 4 UEs, TimelyLLM serving a 70B Llama model. Unmanaged, the RAN stalls at about 120 s and uplink P99 latency crosses the 3 ms deadline; with Eunoia the RAN stays stable alongside the LLM.
- Multi-cell test: trained on NVIDIA TestMAC and RU emulator data and deployed unchanged on unseen scenarios of up to 27 cells (up to 138 DL UEs and 61 UL UEs) with TimelyLLM running Llama-3.1-8B (AWQ-INT4). Against static MPS partitions (108 SMs RAN / 24 SMs AI, or 52 / 80), Eunoia matches the RAN-priority partition on uplink goodput and keeps uplink P99 under 3 ms while giving lower time-to-first-action for the LLM; the AI-priority partition hurts RAN goodput and latency.
- Overhead: total Eunoia latency under 27 microseconds across 8 to 27 cells (monitor and allocator below 1 microsecond each; predictor about 21-24 microseconds).
- Stated limits: an early prototype that addresses the RAN side only; transparency on the AI side (inferring AI QoS requirements and arbitrating between several co-located models, and AI-for-RAN models that must run at RAN priority) is left as future work.

## Key technical points (ZH)
- 监控：以 O-DU 作为 dApp，基于此前共享内存接口（ETHOS，Wu 等 2025）的扩展构建，以亚毫秒开销提供时隙级 RAN 指标——活跃小区与 UE、MCS、PRB、吞吐、传输块大小——无需修改 RAN 代码。每时隙的 SM 使用量真值通过 Nsight 离线采集。
- 预测：由 4 个多层感知机（各含 3 个 128 单元 ReLU 隐层，预测取平均）组成的集成模型，对跨小区的输入做聚合，因此无需重新训练即可适应不同小区数、UE 负载与 TDD 模式。它预测下一时隙 SM 使用量的第 99.8 百分位而非均值，作为面向 RAN 安全的保守选择，并在 CPU 上运行。
- 分配：把预测转换为 TPC 掩码并通过 libsmctrl 应用，使 RAN 与 AI 内核获得相互隔离的 SM 集合，时间粒度为单个时隙，空间粒度为单个 TPC（两个 SM）。
- 空口测试：运行 ARC-OTA 1.7 的 GH200 服务器，富士康 4x4 MIMO O-RU（100 MHz 带宽、O-RAN 7.2 拆分），Amarisoft UE 仿真器连接 4 个 UE，TimelyLLM 提供 70B Llama 模型服务。不加管理时，RAN 在约 120 s 处停滞，上行 P99 时延越过 3 ms 期限；使用 Eunoia 时 RAN 与 LLM 并行稳定运行。
- 多小区测试：用 NVIDIA TestMAC 与 RU 仿真器数据训练，原样部署到多达 27 个小区的未见场景（最多 138 个下行 UE 和 61 个上行 UE），TimelyLLM 运行 Llama-3.1-8B（AWQ-INT4）。与静态 MPS 划分（RAN 108 个 SM / AI 24 个 SM，或 52 / 80）相比，Eunoia 在上行 goodput 上与 RAN 优先划分相当，上行 P99 保持在 3 ms 以内，同时为 LLM 提供更低的首次动作时间；AI 优先划分则损害 RAN 的 goodput 与时延。
- 开销：8 至 27 个小区下 Eunoia 总时延低于 27 微秒（监控与分配各低于 1 微秒，预测约 21 至 24 微秒）。
- 论文说明的局限：这是仅处理 RAN 侧的早期原型；AI 侧的透明性（推断 AI 的 QoS 需求、在多个共置模型间仲裁，以及必须以 RAN 优先级运行的 AI-for-RAN 模型）留作未来工作。

## Why it matters / what's new (EN)
The paper is an early prototype with a short evaluation (one AI workload, one GPU platform, mostly emulated multi-cell traffic), so its numbers show feasibility rather than production behaviour. For the open-ran bin it quantifies a specific AI-RAN integration cost: static MIG/MPS-style partitioning forces a choice between RAN reliability and AI throughput, while a predictor driven by standard O-DU metrics can follow RAN demand slot by slot. It sits next to the [2026-10-19 ScaleRAN entry](2026-10-19_arxiv-scaleran-elastic-gpu-sharing-green-contexts-ai-ran.md), which also reallocates GPU SMs between RAN and AI at slot granularity but through pre-created NVIDIA Green Contexts; Eunoia instead applies per-TPC masks through libsmctrl.

## Why it matters / what's new (ZH)
该论文是早期原型，评估较短（仅一种 AI 负载、一种 GPU 平台，多小区流量以仿真为主），其数字说明可行性而非生产环境表现。对开放 RAN 主题而言，它量化了 AI-RAN 集成的一项具体成本：MIG/MPS 式静态划分迫使在 RAN 可靠性与 AI 吞吐之间取舍，而由标准 O-DU 指标驱动的预测器可以逐时隙跟随 RAN 需求。它与 [2026-10-19 的 ScaleRAN 条目](2026-10-19_arxiv-scaleran-elastic-gpu-sharing-green-contexts-ai-ran.md)相邻：后者同样以时隙粒度在 RAN 与 AI 之间重新分配 GPU SM，但通过预先创建的 NVIDIA Green Context 实现；Eunoia 则通过 libsmctrl 施加按 TPC 的掩码。

## Images

None.
