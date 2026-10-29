---
id: 2026-10-29_arxiv-crisp-combination-aware-moe-pruning-scheduling-edge
date_published: 2026-10-27
date_found: 2026-10-29
technology: edge-ai
type: academic-paper
title_en: "CRISP: co-designing expert-combination-aware pruning and scheduling for MoE inference on memory-constrained edge platforms"
title_zh: "CRISP：面向内存受限边缘平台 MoE 推理的专家组合感知剪枝与调度协同设计"
url: "https://arxiv.org/abs/2610.37442"
source_quality: full
topics: [mixture-of-experts, expert-offloading, pruning, Mixtral, DeepSeek-MoE, Jetson-AGX-Orin, energy-per-token]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

On memory-constrained edge platforms, Mixture-of-Experts inference is often dominated by moving expert weights rather than computing, because routing is input-dependent and every expert must stay reachable. CRISP starts from two observations: the combinations of experts activated together follow a heavily skewed (power-law) frequency distribution, and experts contribute asymmetrically within a combination. It reorders neurons by importance so one stored expert can run at several widths, runs hot, warm and cold combinations at different widths based on frequency and expert role, and uses the resulting mixed widths to overlap expert loading with computation.

It is evaluated on Mixtral-8x7B and DeepSeek-MoE-16B using a Jetson AGX Orin (32 GB unified, 204 GB/s) and, as a controllable offloading testbed, an RTX 4090 with 64 GB host memory over PCIe 4.0; expert-cache GPU memory is capped down to 10% of total expert size to force offloading. Reported results: up to 2.1x throughput at the same memory budget with accuracy loss limited to 3.6% versus full width (WikiText-103 perplexity 3.98 versus 3.84 full, against 4.67 for uniform pruning). At a 10% expert-memory budget on Mixtral it reaches 8.3 tokens/s versus 2.1 for full offloading and 3.9 for MoE-Offload; the energy comparison at the same 10% budget gives 5.2 tokens/s on the Jetson Orin at 7.5 J/token, cutting energy per token by about 74% to 77% versus full offloading. One-time preparation takes 48 minutes, metadata is under 2 MB and scheduling overhead is at most 0.06% of token latency.

## Summary (ZH)

在内存受限的边缘平台上，MoE 推理的主要开销往往是搬运专家权重而非计算，因为路由取决于输入，所有专家都必须可被访问。CRISP 基于两点观察：同时被激活的专家组合的频率呈高度偏斜（幂律）分布，且专家在组合内的贡献不对称。它按重要性对神经元重排，使同一个存储的专家能以多种宽度运行；依据频率和专家角色，让热、温、冷组合以不同宽度执行，并利用由此产生的混合宽度让专家加载与计算重叠。

评测使用 Mixtral-8x7B 与 DeepSeek-MoE-16B，硬件为 Jetson AGX Orin（32 GB 统一内存，204 GB/s）以及作为可控卸载测试台的 RTX 4090（64 GB 主机内存，PCIe 4.0）；专家缓存的 GPU 内存被限制到低至专家总量的 10% 以强制卸载。论文报告：在相同内存预算下吞吐最高提升 2.1 倍，精度损失相对全宽度限制在 3.6%（WikiText-103 困惑度 3.98，全宽度为 3.84，均匀剪枝为 4.67）。在 Mixtral 上专家内存预算为 10% 时达到 8.3 tokens/s，而全卸载为 2.1、MoE-Offload 为 3.9；同为 10% 预算的能耗对比中，Jetson Orin 上为 5.2 tokens/s、7.5 J/token，相对全卸载每 token 能耗降低约 74% 至 77%。一次性准备耗时 48 分钟，元数据小于 2 MB，调度开销不超过每 token 时延的 0.06%。

## Key technical points (EN)

- **Observation 1**: expert combinations are power-law distributed, so a small set of hot combinations dominates traffic and deserves full width.
- **Observation 2**: within a combination one dominant expert carries more of the output, so non-dominant experts tolerate narrower execution.
- **Mechanism**: importance-aware neuron reordering (one stored expert, multiple execution widths), tiered execution by combination frequency, and a pruning-aware scheduler overlapping expert I/O with compute.
- **Accuracy**: on Mixtral, 97.4% of original downstream accuracy on average versus 90.6% for uniform pruning (MMLU 69.1% versus 63.8%).
- **Caveats**: the RTX 4090 is a desktop-class controllable testbed; GPU expert-cache memory is capped to emulate smaller mobile GPUs; profiling metadata transfers across tasks with up to 2.7 points accuracy loss unless refreshed.

## Key technical points (ZH)

- **观察一**：专家组合服从幂律分布，少数热门组合主导流量，值得保留全宽度。
- **观察二**：组合内由一个主导专家承担更多输出，其余专家可承受更窄的执行宽度。
- **机制**：重要性感知的神经元重排（一个存储专家、多种执行宽度）、按组合频率分层执行，以及让专家 I/O 与计算重叠的剪枝感知调度器。
- **精度**：在 Mixtral 上，下游任务平均保留原精度的 97.4%，均匀剪枝为 90.6%（MMLU 为 69.1% 对 63.8%）。
- **注意事项**：RTX 4090 为桌面级可控测试台；通过限制专家缓存显存来模拟更小的移动 GPU；剖析元数据跨任务迁移时精度最多下降 2.7 个百分点，需重新刷新。

## Why it matters / what's new (EN)

Running a 47B-parameter MoE on a single 32 GB edge module is a concrete capability question for edge servers and gateways. CRISP reports independently checkable numbers (tokens/s and J/token on named hardware, perplexity and task accuracy) and an iso-memory comparison against uniform pruning and expert dropping. It is a research prototype validated on two models and two platforms; gains narrow as the memory budget grows (1.4x over MoE-Offload at a 50% budget).

## Why it matters / what's new (ZH)

在单个 32 GB 边缘模块上运行 47B 参数的 MoE，是边缘服务器和网关面临的一个具体能力问题。CRISP 给出了可独立核查的数字（具名硬件上的 tokens/s 与 J/token、困惑度与任务精度），并提供了与均匀剪枝和专家丢弃的等内存比较。它是仅在两个模型、两个平台上验证的研究原型；随着内存预算增大，收益收窄（50% 预算时相对 MoE-Offload 仅 1.4 倍）。

## Images

*(No redistributable images for this entry.)*
