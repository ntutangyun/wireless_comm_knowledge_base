---
id: 2026-08-29_arxiv-hydra-edge-soc-llm-characterization
date_published: 2026-08-25
date_found: 2026-08-29
type: academic-paper
technology: edge-ai
title_en: "Hydra: phase-aware characterisation of LLM inference across three Jetson generations, five formats and thirteen models"
title_zh: "Hydra：跨三代 Jetson、五种执行格式与十三个模型的大模型推理分阶段负载刻画"
url: "https://arxiv.org/abs/2608.25053"
source_quality: full
topics: [workload-characterization, Jetson, prefill-decode, quantization, llama.cpp, energy-per-token, IISWC-2026, edge-SoC]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency, edge-ai-silicon]
novelty_score: 4
---

## Summary (EN)

Almost every claim about edge LLM performance is made with two knobs in view — model size and precision. Hydra (Northeastern, William & Mary, Glasgow; accepted at IEEE IISWC 2026) argues that those two explain far less than the field assumes, and builds the instrumentation to show it.

The framework is **phase-aware**: rather than reporting one end-to-end latency, it splits every run into tokenisation, prefill, per-token decode and de-tokenisation, then aligns CPU, GPU, memory, power and thermal telemetry to each of those windows under a common schema. The same schema is applied across three consecutive NVIDIA Jetson generations — **AGX Xavier** (Volta, 8 SMs / 512 CUDA cores, 32 GB LPDDR4X, 137 GB/s), **AGX Orin** (Ampere, 16 SMs / 2,048 cores, 32 GB LPDDR5, 204.8 GB/s) and **AGX Thor** (Blackwell, 20 SMs / 2,560 cores, 128 GB LPDDR5X, 273 GB/s) — with 13 instruction-tuned models from seven families (LLaMA, Qwen, Granite, Gemma, Phi, Mistral, Moxin) spanning 1.24B–8.54B parameters, in five execution formats (HuggingFace bf16 plus llama.cpp F16, Q8_0, Q6_K, Q4_K_M).

Three findings survive the sweep. First, **generational speedup is model-size-dependent**: Thor is roughly **2.8–2.9× faster than Xavier on small models but only ~1.4× on large ones**, so a single "N× faster" number is meaningless without saying which model it was measured on. Second, **power is not monotonic in bit width**. Q4_K_M gives the lowest energy per token, but **Q6_K frequently draws more power and runs hotter than both Q8_0 and Q4_K_M despite using fewer bits** — the kernel implementation, not the format's nominal precision, sets the power draw. Third, quantisation's benefit is partly a *feasibility* benefit rather than a speed one: sub-3B models reach **~25–60 tok/s on Xavier at Q4_K_M** where F16 simply fails to run.

The memory-side numbers are quieter but load-bearing: on Orin, quantisation moves effective DRAM bandwidth from **~150 GB/s (F16) to ~128 GB/s (Q8_0) and ~127 GB/s (Q4_K_M)** while GPU utilisation stays high — the workload remains bandwidth-shaped even after the weights shrink. And the backend itself is a variable: llama.cpp beats HuggingFace on end-to-end latency largely by cutting **per-token CPU orchestration**, not by generating tokens faster.

Code and trace data are released.

## Summary (ZH)

关于边缘大模型性能的论断，几乎都只盯着两个旋钮——模型规模与数值精度。Hydra（东北大学、威廉玛丽学院、格拉斯哥大学；已被 IEEE IISWC 2026 接收）认为这两者的解释力远低于业界的假设，并构建了相应的测量工具来证明这一点。

该框架是**分阶段感知**的：它不报告单一的端到端时延，而是把每次运行拆为分词、prefill、逐 token 的 decode 与反分词，再以统一 schema 把 CPU、GPU、内存、功耗与热的遥测数据对齐到各个时间窗。同一套 schema 被施加到三代连续的 NVIDIA Jetson 平台——**AGX Xavier**（Volta，8 SM / 512 CUDA 核，32 GB LPDDR4X，137 GB/s）、**AGX Orin**（Ampere，16 SM / 2048 核，32 GB LPDDR5，204.8 GB/s）与 **AGX Thor**（Blackwell，20 SM / 2560 核，128 GB LPDDR5X，273 GB/s）——覆盖 7 个家族（LLaMA、Qwen、Granite、Gemma、Phi、Mistral、Moxin）的 13 个指令微调模型，参数量 12.4 亿至 85.4 亿，共 5 种执行格式（HuggingFace bf16，以及 llama.cpp 的 F16、Q8_0、Q6_K、Q4_K_M）。

有三项结论经受住了整轮扫描。其一，**代际加速比取决于模型规模**：Thor 相对 Xavier 在小模型上约快 **2.8–2.9 倍，在大模型上仅约 1.4 倍**——因此脱离「在哪个模型上测的」而单说「快 N 倍」是没有意义的。其二，**功耗对位宽并不单调**。Q4_K_M 的每 token 能耗最低，但 **Q6_K 常常比 Q8_0 与 Q4_K_M 功耗更高、温度更热，尽管它的位数更少**——决定功耗的是内核实现，而非格式的名义精度。其三，量化带来的收益部分是**可行性**收益而非速度收益：3B 以下模型在 Xavier 上以 Q4_K_M 可达 **约 25–60 tok/s**，而 F16 根本跑不起来。

内存侧的数字更安静却更关键：在 Orin 上，量化把有效 DRAM 带宽从 **约 150 GB/s（F16）**降到 **约 128 GB/s（Q8_0）与约 127 GB/s（Q4_K_M）**，而 GPU 利用率仍然很高——即使权重变小，负载依然是带宽形状的。后端本身也是一个变量：llama.cpp 在端到端时延上胜过 HuggingFace，主要靠削减**每 token 的 CPU 编排开销**，而非生成 token 更快。

代码与 trace 数据已公开。

## Key technical points (EN)

- Phase-aware schema: tokenisation / prefill / per-token decode / de-tokenisation windows, each with aligned CPU, GPU, memory, power and thermal telemetry.
- Platforms: Jetson AGX Xavier (Volta, 512 CUDA cores, 32 GB LPDDR4X, 137 GB/s), AGX Orin (Ampere, 2,048 cores, 32 GB LPDDR5, 204.8 GB/s), AGX Thor (Blackwell, 2,560 cores, 128 GB LPDDR5X, 273 GB/s).
- Models: 13 instruction-tuned LLMs, 7 families (LLaMA, Qwen, Granite, Gemma, Phi, Mistral, Moxin), 1.24B–8.54B parameters.
- Formats: HuggingFace bf16; llama.cpp F16, Q8_0, Q6_K, Q4_K_M (~8, ~6.6, ~4.5 bits/weight).
- Generational scaling is size-dependent: Thor ≈ 2.8–2.9× Xavier on small models, narrowing to ≈ 1.4× on large ones.
- Power is not monotonic in bit width: Q6_K often draws more power and runs hotter than Q8_0 and Q4_K_M.
- Q4_K_M gives the lowest energy per token across the sweep.
- Feasibility effect: sub-3B models reach ~25–60 tok/s on Xavier at Q4_K_M where F16 fails to run at all.
- DRAM effective bandwidth on Orin: ~150 GB/s (F16) → ~128 GB/s (Q8_0) → ~127 GB/s (Q4_K_M), with GPU utilisation staying high.
- Backend overhead is a first-order term: llama.cpp's end-to-end win over HuggingFace comes largely from lower per-token CPU orchestration, not faster generation.
- Input/output-length sensitivity is swept explicitly, since prefill and decode scale with different variables.
- Open-source code and trace data released; accepted at IEEE IISWC 2026.

## Key technical points (ZH)

- 分阶段 schema：分词 / prefill / 逐 token decode / 反分词四个时间窗，各自对齐 CPU、GPU、内存、功耗与热遥测。
- 平台：Jetson AGX Xavier（Volta，512 CUDA 核，32 GB LPDDR4X，137 GB/s）、AGX Orin（Ampere，2048 核，32 GB LPDDR5，204.8 GB/s）、AGX Thor（Blackwell，2560 核，128 GB LPDDR5X，273 GB/s）。
- 模型：13 个指令微调大模型，7 个家族（LLaMA、Qwen、Granite、Gemma、Phi、Mistral、Moxin），12.4 亿–85.4 亿参数。
- 格式：HuggingFace bf16；llama.cpp F16、Q8_0、Q6_K、Q4_K_M（约 8、6.6、4.5 位/权重）。
- 代际扩展与模型规模相关：Thor 在小模型上约为 Xavier 的 2.8–2.9 倍，在大模型上收窄至约 1.4 倍。
- 功耗对位宽非单调：Q6_K 常比 Q8_0 与 Q4_K_M 功耗更高、温度更热。
- 全扫描中 Q4_K_M 的每 token 能耗最低。
- 可行性效应：3B 以下模型在 Xavier 上以 Q4_K_M 达约 25–60 tok/s，而 F16 完全无法运行。
- Orin 上 DRAM 有效带宽：约 150 GB/s（F16）→ 约 128 GB/s（Q8_0）→ 约 127 GB/s（Q4_K_M），且 GPU 利用率保持在高位。
- 后端开销是一阶量：llama.cpp 相对 HuggingFace 的端到端优势主要来自更低的每 token CPU 编排开销，而非更快的生成。
- 显式扫描输入/输出长度敏感性，因为 prefill 与 decode 随不同变量伸缩。
- 代码与 trace 数据已开源；已被 IEEE IISWC 2026 接收。

## Why it matters / what's new (EN)

This domain is drowning in single-number claims — "N× faster", "40 TOPS", "runs a 7B model on-device" — and almost none of them carry the conditions that make them true. Hydra's contribution is not a new mechanism; it is the demonstration, on a controlled three-generation sweep, that the conditions dominate.

Two of its results are directly corrective. The generational speedup collapsing from ~2.9× to ~1.4× as the model grows means a vendor's headline uplift, measured on whatever model flattered the silicon, does not transfer to the model a deployment actually wants to run. And Q6_K being hotter and more power-hungry than Q8_0 breaks the intuition that underpins most quantisation decisions — fewer bits, less energy. It is not a property of the format; it is a property of the kernel someone wrote for it, which means the right quantisation choice for a given board is an empirical question, not a table lookup.

The memory finding is the one with the longest reach. Effective DRAM bandwidth barely moves between Q8_0 and Q4_K_M (~128 vs ~127 GB/s) even though the weights halve. Halving the weights does not halve the traffic, and edge LLM decode stays bandwidth-shaped — which is the same wall that motivates the storage-tier and sparsity work now appearing in this bin, and a caution against assuming a memory-bandwidth budget scales with the quantisation ratio.

It also pairs usefully with the day-earlier NeuroPrefetcher entry, which measured how many mainstream inference systems will even *run* on a Jetson. Between the two, the edge-inference picture for late 2026 is: most runtimes were written for discrete-GPU desktops, and the ones that do run behave in ways their format names do not predict. Released traces make both claims checkable rather than quotable-only.

## Why it matters / what's new (ZH)

这个领域充斥着单一数字的宣称——「快 N 倍」「40 TOPS」「端侧跑 7B 模型」——而其中几乎没有一个附带使这些说法成立的前提条件。Hydra 的贡献不是新机制，而是在一次受控的三代扫描上证明：**前提条件才是主导项**。

其中两项结果具有直接的纠偏意义。代际加速比随模型增大从约 2.9 倍塌缩到约 1.4 倍，意味着厂商在「对硅片最讨巧的那个模型」上测出的头条提升，无法迁移到部署真正想跑的模型上。而 Q6_K 比 Q8_0 更热、更耗电，则打破了支撑大多数量化决策的直觉——位数更少、能耗更低。这不是格式的性质，而是某人为它写的内核的性质；因此「某块板卡该选哪种量化」是一个实测问题，而非查表问题。

影响最深远的是内存侧的发现：尽管权重减半，Q8_0 与 Q4_K_M 之间的有效 DRAM 带宽几乎没有变化（约 128 对约 127 GB/s）。**权重减半并不使流量减半**，边缘大模型的 decode 依旧是带宽形状的——这正是本主题下近期出现的存储层与稀疏化工作所要撞的同一堵墙，也是对「内存带宽预算随量化比例线性缩放」这一假设的一记警示。

它还与前一日的 NeuroPrefetcher 条目形成有用的配对：后者测量的是有多少主流推理系统在 Jetson 上**能跑起来**。两者合起来给出的 2026 年末边缘推理图景是：多数运行时是为独显台式机写的，而能跑起来的那些，其行为并不能由格式名称推断。公开的 trace 数据让这两项主张可被复核，而不只是可被引用。
