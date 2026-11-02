---
id: 2026-11-02_arxiv-block-recurrent-on-device-asr-shared-blocks-moe-lora
date_published: 2026-10-27
date_found: 2026-11-02
technology: edge-ai
type: academic-paper
title_en: "Depth through Recurrence: towards ultra-efficient on-device ASR"
title_zh: "以递归换深度：迈向超高效的端侧语音识别"
url: "https://arxiv.org/abs/2610.37833"
source_quality: full
topics: [ASR, block-recurrent, weight-sharing, knowledge-distillation, MoE-LoRA, Open-ASR-Leaderboard, wearables]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 2
---

## Summary (EN)

The paper addresses on-device automatic speech recognition for wearables such as watches and glasses, where memory, compute and power budgets rule out the hundreds-of-millions to billions of parameters of current top ASR models. It argues that post-training compression (quantisation, pruning, low-rank approximation) is orthogonal to architectural efficiency, and analyses four ASR models (STT-480ms, Parakeet-TDT-0.6B-v2, Canary-1B-Flash, Granite-4.0-1B-Speech), finding that most layers learn functionally similar transformations.

Motivated by this, it proposes a block-recurrent encoder. The teacher's blocks are grouped by representational similarity (CKA computed from layer activations), each group is replaced by one weight-shared block applied recurrently so that effective depth is preserved, and the compact model is trained by knowledge distillation. Varying the number of shared blocks gives a family of variants for different latency and memory budgets. A personalisation extension extracts a user embedding from a short enrolment sample and uses it to route and combine MoE-LoRA adapters.

Reported results on Open ASR Leaderboard benchmarks: a model with two shared blocks recovers 97.4% of the large models' accuracy on average, with about an order of magnitude fewer parameters. In a memory-matched comparison, the STT teacher takes 217.8 MB with average WER 11.05; its INT4-encoder variant takes 54.5 MB at WER 12.26; and the block-recurrent Edge-STT (K=4) takes 53.6 MB at WER 10.72. The authors also report lower memory-access overhead and energy from weight reuse, with latency and DRAM-energy tables measured on a GPU, a server CPU and an Apple M4 Pro rather than on wearable hardware.

## Summary (ZH)

论文针对手表、眼镜等可穿戴设备上的端侧自动语音识别（ASR）：这些设备的内存、算力与功耗预算无法容纳当前顶尖 ASR 模型动辄数亿到数十亿的参数。论文认为训练后压缩（量化、剪枝、低秩近似）与架构效率是正交的，并分析了四个 ASR 模型（STT-480ms、Parakeet-TDT-0.6B-v2、Canary-1B-Flash、Granite-4.0-1B-Speech），发现多数层学到的是功能相近的变换。

基于此，论文提出块递归编码器：按表征相似度（由层激活计算 CKA）把教师模型的各块分组，每组替换为一个权重共享、递归应用的块以保持有效深度，再通过知识蒸馏训练紧凑模型。改变共享块的数量可得到面向不同时延与内存预算的一族变体。个性化扩展则从一段简短的注册音频中提取用户嵌入，用其路由并组合 MoE-LoRA 适配器。

在 Open ASR Leaderboard 基准上的结果：仅含两个共享块的模型平均恢复大模型 97.4% 的精度，参数量约少一个数量级。在内存对齐的对比中，STT 教师模型占 217.8 MB，平均 WER 为 11.05；其编码器 INT4 变体占 54.5 MB，WER 12.26；块递归的 Edge-STT（K=4）占 53.6 MB，WER 10.72。作者还报告权重复用带来更低的访存开销与能耗，但时延和 DRAM 能耗表是在 GPU、服务器 CPU 和 Apple M4 Pro 上测得，而非可穿戴硬件。

## Key technical points (EN)

- **Observation**: layer-wise similarity analysis of four ASR models shows many layers perform similar transformations.
- **Architecture**: representation-guided grouping, weight-shared recurrent blocks that keep the teacher's effective depth, and knowledge distillation.
- **Scalability**: the number of shared blocks K sets a family of sizes for different latency and memory budgets.
- **Personalisation**: enrolment-audio embedding routes MoE-LoRA adapters; user-specific models are reported to match or surpass the general ASR.
- **Memory-matched table**: Edge-STT K=4 53.6 MB, WER 10.72, versus the INT4 teacher at 54.5 MB, WER 12.26.
- **Caveat**: efficiency measurements are on non-wearable hardware (Blackwell workstation GPU, Threadripper CPU, Apple M4 Pro); the paper lists CKA sensitivity to outliers as a limitation.

## Key technical points (ZH)

- **观察**：对四个 ASR 模型的逐层相似度分析表明许多层执行相近的变换。
- **架构**：由表征引导的分组、保持教师有效深度的权重共享递归块，以及知识蒸馏。
- **可伸缩性**：共享块数量 K 决定一族不同尺寸，适配不同时延与内存预算。
- **个性化**：注册音频嵌入用于路由 MoE-LoRA 适配器；论文报告用户专属模型可达到或超过通用 ASR。
- **内存对齐表**：Edge-STT K=4 为 53.6 MB、WER 10.72，对比 INT4 教师模型的 54.5 MB、WER 12.26。
- **说明**：效率测量在非可穿戴硬件上完成（Blackwell 工作站 GPU、Threadripper CPU、Apple M4 Pro）；论文将 CKA 对离群值的敏感性列为局限。

## Why it matters / what's new (EN)

The contribution is an architecture-level route to smaller on-device ASR that the authors position as complementary to quantisation, with a comparison at matched memory showing it ahead of an INT4 baseline on the reported benchmarks. Because no wearable-class device is measured, the energy and latency claims are indicative of cache-locality benefits rather than demonstrated wearable battery or real-time figures.

## Why it matters / what's new (ZH)

其贡献是一条从架构层面缩小端侧 ASR 的路径，作者将其定位为对量化的补充；在内存对齐的对比中，该方法在所报告的基准上优于 INT4 基线。由于没有测量可穿戴级设备，其能耗与时延结论只能说明缓存局部性方面的收益，而非已验证的可穿戴电池或实时指标。

## Images

*(No redistributable images for this entry.)*
