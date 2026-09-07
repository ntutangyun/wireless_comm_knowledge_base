---
id: 2026-09-07_para-pipe-heterogeneous-soc-operator-scheduling
date_published: 2025-12-01
date_found: 2026-09-07
type: academic-paper
technology: edge-ai
title_en: "Para-Pipe: Exploiting Hierarchical Operator Parallelism of ML Computational Graphs on SoCs"
title_zh: "Para-Pipe：面向 SoC 上 ML 计算图的分层算子并行调度"
url: "https://arxiv.org/abs/2609.04168"
source_quality: full
topics: [heterogeneous-SoC, operator-scheduling, ILP, pipeline-parallelism, Black-Sesame, Amlogic]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Modern neural networks (inception-style branching modules, transformer attention heads) contain a lot of internal operator parallelism, and heterogeneous edge SoCs — CPU clusters, GPU, NPU/DSP accelerators on the same chip — have exactly the kind of diverse compute units that could exploit it. But the two conventional ways of using those units pull in opposite directions: pipelining (spreading different pipeline stages across processors) maximises throughput at the cost of higher per-frame latency, while pure parallel execution across processors minimises latency but hurts throughput. Para-Pipe (National University of Singapore, University of Amsterdam, and Black Sesame Technologies) is a hierarchical two-level scheduler that navigates this trade-off explicitly rather than picking one extreme.

At the outer level, "pipeline mapping" partitions a network's computational graph into topologically ordered subgraphs and enumerates how many pipeline stages to use and which processor combination each stage gets (e.g., a CPU cluster handling an inception module's fan-in structure in one stage, a GPU handling a sequential chain in the next). At the inner level, "parallel operator mapping" solves, for the processors assigned to a given stage, how to split individual operators across them, via two ILP-based algorithms: a coarse-grained variant that assigns whole branches to a single processor (fast to solve, less synchronization overhead) and a fine-grained variant that maps individual operators across processors (better results, slower to solve). Both minimize the maximum execution time across the processors assigned to a stage.

The system was evaluated on two heterogeneous SoCs: an Amlogic A311D board (Khadas Vim3 Pro — quad-core Cortex-A73 + dual-core Cortex-A53 + Mali G52 MP4 GPU), measured on real hardware with a USB power meter, and a Black Sesame Technologies A1000 (an ASIC NPU plus four Cadence DSP cores), evaluated via the vendor's operator simulator since real silicon access wasn't available. Test networks spanned four Inception-family models (GoogLeNet through Inception-ResNet-v2, 11-45 subgraphs) and two transformer-based perception models (PETR- and BEVFormer-based, up to 25 subgraphs). On the Amlogic board, a hybrid configuration that mixes pipeline and parallel mapping delivers a 36.0% latency improvement at only a 12.4% throughput cost versus a pipeline-only baseline (a second hybrid variant trades 26.8% latency improvement for 7.3% throughput cost), and the same hybrid approach improves energy efficiency 11.0% over pipeline-only and 23.3% over parallel-only. Against classic DAG-mapping baselines (HEFT, CPOP) and a layer-switched sequential baseline, pure parallel mapping alone improves latency/throughput by 10.9%/12.5% on the Amlogic board and 15.5%/18.8% on the Black Sesame chip. The paper's own cost-estimation model (used to search the configuration space without exhaustively running every candidate on hardware) predicts latency, throughput and energy efficiency within 15.33%, 15.25% and 6.40% RMSPE respectively of measured values.

*Provenance note: this paper's own citation identifies it as already published in IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, Vol. 44, No. 12, pp. 4472-4485 (December 2025) — the arXiv posting used here (submitted 2026-09-03) is a later self-archival of already-published work, not new research. `date_published` above is set to the journal's December 2025 issue (exact day not resolvable from the available record); this entry is a deliberate backfill, since the KB had no prior coverage of this heterogeneous-SoC operator-scheduling work.*

## Summary (ZH)

现代神经网络（如 Inception 式分支模块、Transformer 注意力头）内部含有大量算子级并行性，而异构边缘 SoC——同一芯片上集成 CPU 集群、GPU、NPU/DSP 加速器——恰好具备可以利用这种并行性的多样化计算单元。但利用这些单元的两种传统方式方向相反：流水线化（将不同流水段分配给不同处理器）能最大化吞吐量，但代价是单帧延迟更高；而跨处理器的纯并行执行能最小化延迟，却会损害吞吐量。Para-Pipe（新加坡国立大学、阿姆斯特丹大学、黑芝麻智能科技）是一个分层两级调度器，显式地在这一权衡中寻找折中方案，而非简单地选择某个极端。

在外层，"流水线映射"将网络的计算图划分为按拓扑排序的子图，并枚举使用多少流水段、每个流水段分配何种处理器组合（例如，一个流水段由 CPU 集群处理某个 inception 模块的扇入结构，下一个流水段由 GPU 处理顺序链）。在内层，"并行算子映射"针对某个流水段分配到的处理器，求解如何将其中的单个算子拆分给不同处理器，采用两种基于整数线性规划（ILP）的算法：粗粒度算法将整条分支分配给单个处理器（求解快、同步开销小），细粒度算法则将单个算子映射到不同处理器（结果更优、求解更慢）。两者都以最小化某流水段内各处理器执行时间的最大值为目标。

该系统在两款异构 SoC 上评测：一款 Amlogic A311D 板卡（Khadas Vim3 Pro——四核 Cortex-A73 + 双核 Cortex-A53 + Mali G52 MP4 GPU），在真实硬件上使用 USB 功耗表测量；以及一款黑芝麻智能科技 A1000（一颗 ASIC NPU 加四个 Cadence DSP 核），由于无法获取真实芯片，通过厂商的算子模拟器评测。测试网络涵盖四个 Inception 系列模型（从 GoogLeNet 到 Inception-ResNet-v2，11-45 个子图）以及两个基于 Transformer 的感知模型（基于 PETR 与 BEVFormer，最多 25 个子图）。在 Amlogic 板卡上，混合流水线与并行映射的配置相较纯流水线基线，延迟改善 36.0%，吞吐量代价仅 12.4%（另一混合变体以 7.3% 的吞吐量代价换取 26.8% 的延迟改善）；同样的混合方案相较纯流水线能效提升 11.0%，相较纯并行能效提升 23.3%。与经典 DAG 映射基线（HEFT、CPOP）及按层切换的顺序执行基线相比，仅使用纯并行映射即可在 Amlogic 板卡上带来延迟/吞吐量各 10.9%/12.5% 的改善，在黑芝麻芯片上带来 15.5%/18.8% 的改善。论文自身的代价估计模型（用于在不对每个候选配置都做硬件实测的前提下搜索配置空间）预测的延迟、吞吐量与能效，相较实测值的 RMSPE 分别为 15.33%、15.25% 与 6.40%。

*来源说明：该论文自身的引用信息表明其已发表于《IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems》第 44 卷第 12 期，第 4472-4485 页（2025 年 12 月）——本条目所用的 arXiv 发布版本（提交于 2026-09-03）是对已发表工作的后续自存档，而非新研究。上方 `date_published` 采用期刊 2025 年 12 月这一期的信息（具体到日的日期无法从现有资料中确定）；由于本知识库此前未收录过这项异构 SoC 算子调度研究，本条目按刻意补录处理。*

## Key technical points (EN)

- **Problem**: pipelining maximizes throughput at high latency cost; pure cross-processor parallel execution minimizes latency but hurts throughput; heterogeneous edge SoCs (CPU+GPU+NPU/DSP on one chip) need both simultaneously for real-time perception workloads.
- **Mechanism 1 (outer, "pipeline mapping")**: partitions the computational graph into topologically ordered subgraphs and searches pipeline-stage counts and processor-to-stage assignments.
- **Mechanism 2 (inner, "parallel operator mapping")**: two ILP-based algorithms (coarse-grained: whole branches to one processor, fast; fine-grained: individual operators across processors, slower but better) minimize max execution time per stage.
- **Hardware**: Amlogic A311D (Khadas Vim3 Pro, quad Cortex-A73 + dual Cortex-A53 + Mali G52 MP4 GPU) measured on real hardware with a USB power meter; Black Sesame Technologies A1000 (ASIC NPU + 4 Cadence DSPs) via vendor operator simulator (no real-silicon access).
- **Models**: 4 Inception-family networks (GoogLeNet to Inception-ResNet-v2, 11-45 subgraphs) and 2 transformer-based perception models (PETR-, BEVFormer-based, up to 25 subgraphs).
- **Headline numbers (Amlogic)**: hybrid config +36.0% latency improvement at -12.4% throughput cost vs. pipeline-only; a second hybrid config +26.8% latency / -7.3% throughput; +11.0% energy efficiency vs. pipeline-only, +23.3% vs. parallel-only; pure parallel mapping alone: +10.9% latency / +12.5% throughput vs. HEFT/CPOP/layer-switched baselines.
- **Headline numbers (Black Sesame)**: pure parallel mapping +15.5% latency / +18.8% throughput vs. baselines.
- **Cost model accuracy**: 15.33% (latency), 15.25% (throughput), 6.40% (energy efficiency) RMSPE vs. measured values — used to prune the search space instead of hardware-testing every configuration.
- **Solver cost**: fine-grained ILP on the largest network (PETR-based, 169 operators) takes ~6 hours on the Black Sesame SoC; most networks solve in under 5 minutes.
- **Provenance**: already published, IEEE TCAD Vol. 44 No. 12 (December 2025); this arXiv posting (2026-09-03) is a self-archival, not new work.

## Key technical points (ZH)

- **问题**：流水线化能最大化吞吐量但代价是延迟更高；纯跨处理器并行执行能最小化延迟但损害吞吐量；异构边缘 SoC（同芯片集成 CPU+GPU+NPU/DSP）在实时感知负载中需要同时兼顾两者。
- **机制一（外层，"流水线映射"）**：将计算图划分为拓扑排序的子图，搜索流水段数量以及每个流水段对应的处理器分配方案。
- **机制二（内层，"并行算子映射"）**：两种基于 ILP 的算法（粗粒度：整条分支分配给单个处理器，求解快；细粒度：单个算子映射到不同处理器，求解慢但效果更好）以最小化某流水段内的最大执行时间为目标。
- **硬件**：Amlogic A311D（Khadas Vim3 Pro，四核 Cortex-A73 + 双核 Cortex-A53 + Mali G52 MP4 GPU）在真实硬件上用 USB 功耗表测量；黑芝麻智能科技 A1000（ASIC NPU + 4 个 Cadence DSP 核）由于无法获取真实芯片，通过厂商算子模拟器评测。
- **模型**：4 个 Inception 系列网络（GoogLeNet 至 Inception-ResNet-v2，11-45 个子图）及 2 个基于 Transformer 的感知模型（基于 PETR、BEVFormer，最多 25 个子图）。
- **核心数据（Amlogic）**：某混合配置相较纯流水线基线，延迟改善 36.0%，吞吐量代价 12.4%（另一混合配置以 7.3% 吞吐量代价换取 26.8% 延迟改善）；相较纯流水线能效提升 11.0%，相较纯并行能效提升 23.3%；仅用纯并行映射相较 HEFT/CPOP/按层切换基线，延迟/吞吐量各改善 10.9%/12.5%。
- **核心数据（黑芝麻）**：仅用纯并行映射相较基线，延迟/吞吐量各改善 15.5%/18.8%。
- **代价模型精度**：相较实测值，延迟、吞吐量、能效的 RMSPE 分别为 15.33%、15.25%、6.40%——用于在不对每个候选配置逐一硬件实测的前提下裁剪搜索空间。
- **求解耗时**：在最大网络（基于 PETR，169 个算子）上，细粒度 ILP 在黑芝麻 SoC 上约需 6 小时；多数网络在 5 分钟内可求解。
- **来源说明**：已发表于《IEEE TCAD》第 44 卷第 12 期（2025 年 12 月）；本次 arXiv 发布（2026-09-03）为已发表工作的自存档，非新研究。

## Why it matters / what's new (EN)

This is the KB's first entry covering scheduling *within* a single heterogeneous edge SoC's compute units (CPU/GPU/NPU/DSP) rather than across separate devices or between device and cloud — a different axis from the compute-offloading and edge-orchestration bins, which deal with placement between distinct machines. The Black Sesame Technologies A1000 involvement (an automotive/robotics-focused NPU+DSP accelerator vendor, evaluated here via its own simulator rather than public silicon) is also a first sighting of that vendor in this KB. Flagged as a deliberate backfill given the December 2025 original publication date and the KB's prior lack of coverage on this specific mechanism.

## Why it matters / what's new (ZH)

这是本知识库首个聚焦于"单个异构边缘 SoC 内部"计算单元（CPU/GPU/NPU/DSP）调度的条目，而非跨越不同设备、或设备与云之间的放置问题——这与本知识库 compute-offloading 与 edge-orchestration 分类所处理的、跨不同机器的放置问题是不同的维度。黑芝麻智能科技 A1000（一家聚焦汽车/机器人场景的 NPU+DSP 加速器厂商，此处通过其自有模拟器而非公开芯片评测）在本知识库中也是首次出现。鉴于该工作原始发表于 2025 年 12 月、且本知识库此前未收录过该具体机制，本条目按刻意补录处理并加以标注。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
