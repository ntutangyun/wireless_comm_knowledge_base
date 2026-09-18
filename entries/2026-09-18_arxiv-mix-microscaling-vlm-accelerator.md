---
id: 2026-09-18_arxiv-mix-microscaling-vlm-accelerator
date_published: 2026-09-17
date_found: 2026-09-18
technology: edge-ai
type: academic-paper
title_en: "MiX: Micro-Inverted-Scaling for End-to-End Low-Bit Vision-Language Model Acceleration"
title_zh: "MiX：面向端到端低比特视觉-语言模型加速的微缩放反转方案"
url: "https://arxiv.org/abs/2609.19683"
source_quality: full
topics: [quantization, microscaling, VLM, MXFP4, NVFP4, systolic-array, MICRO2026]
topic_primary: edge-ai-silicon
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

Yuan Liao and Jae-sun Seo (Cornell Tech, Cornell University), in a paper accepted to the 59th IEEE/ACM International Symposium on Microarchitecture (MICRO 2026), start from a measured problem: deploying vision-language models on edge devices requires aggressive sub-8-bit quantization to fit memory-bandwidth budgets, but vision tokens carry roughly a 34x larger dynamic range across feature channels than text tokens, which stay tightly clustered near zero. Standard microscaling (MX) formats share one exponent across a block of elements, and the paper shows this modality gap breaks that assumption: at block size 32 in the Key matrix of Qwen2-VL-7B, MXINT4 suffers 44.8% underflow and MXFP4 suffers 38.4% underflow because a single massive outlier hijacks the shared exponent and erases the surrounding, smaller-magnitude tokens — what the authors call microscaling collapse, which destroys attention-map precision and causes what they describe as catastrophic task degradation. Their fix, MiX (Micro-Inverted-Scaling), inverts the standard microscaling paradigm: instead of many mantissas sharing one exponent, MiX gives every element its own private exponent and groups them under a single shared mantissa, letting the format absorb large intra-block dynamic-range swings without clipping. Two variants are defined — MiX-4.25b (a 4-bit max exponent plus 3-bit shared mantissa, matching MXFP4's effective bit-width) and MiX-4.5b (the block split into four sub-groups each with its own 3-bit shared mantissa, matching NVFP4's effective bit-width). The paper's second contribution, MiX-MX, is an algebraic factoring that lets a MiX-format activation multiply an MX-format weight by pulling the shared MiX mantissa out of the summation entirely, turning the per-element multiply into a shift-and-accumulate, and it co-designs a systolic-array accelerator (4x4 array of 32-wide processing elements, 512 MACs/cycle, TSMC 28nm, 500MHz) built around barrel shifters and integer adder trees instead of multipliers, with a single-cycle dual-format quantizer that performs the paper's exponent-refinement algorithm in hardware.

Evaluated on Qwen2-VL-7B, LLaVA-OneVision-7B and MiniCPM-V-2.6 across six VLM benchmarks (MMMU, OCRBench, TextVQA, ChartQA, VizWiz, SEED-Bench-2+), and additionally scaled to the Qwen2.5-VL family (3B/7B/32B/72B) and four text-only LLMs to check generality, MiX-INT4g16 (the 4.5b tier) matches or beats NVFP4's accuracy at the same effective bit-width — for example 69.3% vs. NVFP4's 69.7% on Qwen2-VL-7B's six-benchmark average, and 66.8% vs. 64.9% on MiniCPM-V-2.6 — while the accuracy gap to full FP16 shrinks with model scale (8.0 points at 3B down to 2.3 points at 72B, where MiX-INT4g16 leads NVFP4 by 2.4 points). On the accelerator side, MiX-INT4g16 reaches 9.1 TOPS/mm² versus NVFP4's 7.3 TOPS/mm² (a stated 25% area-efficiency gain) and 16.1 TOPS/W versus 14.0 TOPS/W, with the 4.25b tier reaching 19.1 TOPS/W. Against the token-pruning Focus accelerator baseline, the paper reports a 2.3x-4.5x speedup and 1.4x-2.9x energy reduction averaged across the six benchmarks, and against an iso-area FP16 systolic array, up to 15.8x speedup on compute-bound short-generation tasks. All sub-8-bit formats tested, including MiX, showed catastrophic quantization collapse specifically in Key matrices; the paper addresses this with a training-free K-smoothing technique (subtracting a per-channel token mean before quantization, adapted from SageAttention) and shows a static, prefill-computed mean matches the dynamic full-sequence mean to within about 1 accuracy point.

## Summary (ZH)

Yuan Liao 与 Jae-sun Seo（康奈尔科技学院，康奈尔大学）在一篇已被第 59 届 IEEE/ACM 微架构国际研讨会（MICRO 2026）接收的论文中，从一个实测问题出发：要在边缘设备上部署视觉-语言模型，需要采用极低于 8 比特的量化以适配内存带宽预算，但视觉 token 在各特征通道间的动态范围大约是文本 token 的 34 倍，而文本 token 则紧密聚集在零附近。标准的微缩放（MX）格式在一个数据块内共享同一个指数，论文证明这种模态差异会打破该假设：在 Qwen2-VL-7B 的 Key 矩阵中，块大小为 32 时，MXINT4 出现 44.8% 的下溢，MXFP4 出现 38.4% 的下溢——原因是单个巨大离群值"劫持"了共享指数，抹去了周围幅值较小的 token，作者将其称为"微缩放坍塌"，它会破坏注意力图精度，并造成论文所称的"灾难性任务性能退化"。作者提出的解决方案 MiX（Micro-Inverted-Scaling，微缩放反转）将标准微缩放范式反转过来：不再让多个尾数共享一个指数，而是让每个元素拥有各自私有的指数，再将它们归入同一个共享尾数，使该格式能够吸收块内较大的动态范围波动而不产生截断。论文定义了两种变体——MiX-4.25b（4 比特最大指数加 3 比特共享尾数，有效位宽与 MXFP4 相当）和 MiX-4.5b（将数据块拆分为四个子组，每组各自拥有 3 比特共享尾数，有效位宽与 NVFP4 相当）。论文的第二项贡献 MiX-MX 是一种代数分解方法，使 MiX 格式的激活值与 MX 格式的权重相乘时，可以将共享的 MiX 尾数整体提取到求和之外，将逐元素乘法转化为"移位-累加"运算；据此论文共同设计了一款基于桶形移位器与整数加法树（而非乘法器）的脉动阵列加速器（4×4 阵列、每个处理单元 32 路输入、每周期 512 次乘加，TSMC 28nm 工艺，500MHz 主频），并配备可在硬件中单周期完成论文所提指数细化算法的双格式量化器。

论文在 Qwen2-VL-7B、LLaVA-OneVision-7B 与 MiniCPM-V-2.6 上，跨六项 VLM 基准（MMMU、OCRBench、TextVQA、ChartQA、VizWiz、SEED-Bench-2+）进行了评测，并进一步扩展到 Qwen2.5-VL 系列（3B/7B/32B/72B）及四个纯文本 LLM 以验证通用性：在相同有效位宽下，MiX-INT4g16（4.5b 档位）的准确率与 NVFP4 相当或更优——例如在 Qwen2-VL-7B 的六项基准平均分上为 69.3%，对比 NVFP4 的 69.7%；在 MiniCPM-V-2.6 上为 66.8%，对比 64.9%；而相对全精度 FP16 的准确率差距会随模型规模扩大而缩小（3B 时为 8.0 个百分点，72B 时缩小到 2.3 个百分点，此时 MiX-INT4g16 领先 NVFP4 2.4 个百分点）。在加速器层面，MiX-INT4g16 达到 9.1 TOPS/mm²，对比 NVFP4 的 7.3 TOPS/mm²（论文称面积效率提升 25%），能效为 16.1 TOPS/W，对比 14.0 TOPS/W；4.25b 档位则达到 19.1 TOPS/W。相较于基于 token 剪枝的 Focus 加速器基线，论文报告六项基准平均获得 2.3 至 4.5 倍加速与 1.4 至 2.9 倍能耗降低；相较于同面积的 FP16 脉动阵列，在计算受限的短生成任务上最高可达 15.8 倍加速。所有被测的低于 8 比特格式（包括 MiX 本身）在 Key 矩阵上均出现灾难性量化坍塌；论文借鉴 SageAttention 提出一种无需训练的 K-平滑技术（在量化前减去按通道计算的 token 均值）加以解决，并证明在预填充阶段一次性计算的静态均值与动态的全序列均值相比，精度差异约在 1 个百分点以内。

## Key technical points (EN)

- **Problem**: VLM vision tokens carry ~34x the dynamic range of text tokens; standard microscaling (MX) formats share one exponent per block, and this modality gap causes "microscaling collapse" — MXINT4/MXFP4 underflow rates of 44.8%/38.4% at block size 32 in Qwen2-VL-7B's Key matrix.
- **MiX format**: inverts the paradigm — per-element private exponents under one shared mantissa. Two tiers: MiX-4.25b (matches MXFP4's effective bit-width) and MiX-4.5b (4 sub-groups, matches NVFP4's effective bit-width).
- **MiX-MX factoring**: pulling the shared MiX mantissa out of the block-dot-product summation turns per-element multiplication into shift-and-accumulate, enabling a multiplier-less systolic-array accelerator (4x4 PE array, 512 MACs/cycle, TSMC 28nm, 500MHz).
- **Accuracy**: MiX-INT4g16 (4.5b) matches or beats NVFP4 at equal bit-width (e.g. 69.3% vs 69.7% on Qwen2-VL-7B's six-benchmark average); the FP16 accuracy gap shrinks from 8.0 points at 3B to 2.3 points at 72B, where MiX overtakes NVFP4.
- **Hardware numbers**: 9.1 TOPS/mm² vs NVFP4's 7.3 (25% area-efficiency gain); 16.1-19.1 TOPS/W vs 14.0; 2.3x-4.5x speedup and 1.4x-2.9x energy reduction vs the Focus accelerator baseline; up to 15.8x speedup vs an iso-area FP16 systolic array on compute-bound tasks.
- **Key-matrix fix**: all tested sub-8-bit formats including MiX collapse on Key matrices; addressed with training-free per-channel K-smoothing (SageAttention-style), with a static prefill-computed mean matching the dynamic mean to within ~1 point.

## Key technical points (ZH)

- **问题**：VLM 视觉 token 的动态范围约为文本 token 的 34 倍；标准微缩放（MX）格式每个数据块共享一个指数，这一模态差异导致"微缩放坍塌"——在 Qwen2-VL-7B 的 Key 矩阵中，块大小为 32 时 MXINT4/MXFP4 的下溢率分别为 44.8%/38.4%。
- **MiX 格式**：将该范式反转——每个元素拥有各自私有指数，共享同一个尾数。分两档：MiX-4.25b（有效位宽对齐 MXFP4）与 MiX-4.5b（拆为 4 个子组，有效位宽对齐 NVFP4）。
- **MiX-MX 分解**：将共享的 MiX 尾数从块级点积求和中整体提取出来，把逐元素乘法转化为"移位-累加"，从而实现无需乘法器的脉动阵列加速器（4×4 处理单元阵列、每周期 512 次乘加、TSMC 28nm 工艺、500MHz）。
- **准确率**：在相同位宽下，MiX-INT4g16（4.5b）准确率与 NVFP4 相当或更优（如 Qwen2-VL-7B 六项基准平均为 69.3% 对 69.7%）；相对 FP16 的精度差距随规模扩大从 3B 的 8.0 个百分点缩小到 72B 的 2.3 个百分点，此时 MiX 反超 NVFP4。
- **硬件数字**：面积效率 9.1 TOPS/mm²，对比 NVFP4 的 7.3（提升 25%）；能效 16.1-19.1 TOPS/W，对比 14.0；相较 Focus 加速器基线获得 2.3-4.5 倍加速与 1.4-2.9 倍能耗降低；在计算受限任务上相较同面积 FP16 脉动阵列最高提速 15.8 倍。
- **Key 矩阵修复**：所有被测低于 8 比特格式（含 MiX）在 Key 矩阵上均出现灾难性坍塌；通过无需训练的按通道 K-平滑（借鉴 SageAttention）解决，预填充阶段静态计算的均值与动态均值相比精度差异约 1 个百分点以内。

## Why it matters / what's new (EN)

This KB's existing quantization coverage (INT8 portability, INT4 pruning/distillation entries) has focused on text-only LLMs. MiX is the first entry here to identify and directly measure a VLM-specific failure mode — the vision/text dynamic-range gap breaking block-shared-exponent formats — and to co-design a number format and a multiplier-less accelerator around the fix, with MICRO 2026 acceptance and reproducible area/power/accuracy numbers rather than vendor claims. It is a chip-microarchitecture paper (systolic array with 28nm process parameters) rather than a paper on a fabricated die; the reported PPA numbers come from a synthesized/modeled design, and the entry files it as edge-ai-silicon on that basis while noting the distinction the domain's own calibration rule draws between measured silicon and synthesis-only results.

## Why it matters / what's new (ZH)

本知识库现有的量化相关条目（INT8 跨平台可移植性、INT4 剪枝/蒸馏等）此前主要聚焦纯文本 LLM。MiX 是本知识库中首条明确识别并直接测量 VLM 特有失效模式——视觉/文本动态范围差异破坏块共享指数格式——并围绕该问题联合设计数值格式与无乘法器加速器的条目，且已被 MICRO 2026 接收，给出的是可复现的面积/功耗/精度数字，而非厂商宣称。需要说明的是，这是一篇芯片微架构论文（基于 28nm 工艺参数的脉动阵列设计），而非流片芯片的实测报告；所报告的 PPA（性能-功耗-面积）数字来自综合/建模设计，本条目据此归入 edge-ai-silicon，同时按照本领域一贯的评判标准，注明其与"已实测流片芯片"结果之间的区别。

## Images

![QKV heatmap showing channel-wise and token-wise outlier patterns that cause microscaling collapse | QKV 热力图：展示导致微缩放坍塌的按通道与按 token 离群值分布](https://arxiv.org/html/2609.19683v1/qkv_outlier_heatmap.png)
