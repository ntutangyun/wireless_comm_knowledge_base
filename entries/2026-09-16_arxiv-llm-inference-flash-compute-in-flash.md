---
id: 2026-09-16_arxiv-llm-inference-flash-compute-in-flash
date_published: 2026-09-14
date_found: 2026-09-16
type: academic-paper
technology: edge-ai
title_en: "LLM Inference in a Flash!"
title_zh: "闪存中的大模型推理！"
url: "https://arxiv.org/abs/2609.16161"
source_quality: full
topics: [on-device-inference, quantization, KV-cache, compute-in-memory]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency, edge-ai-silicon]
novelty_score: 3
---

## Summary (EN)

Researchers from UC Berkeley, ICSI and LBNL (Sebastian Zhao, Minseo Kim, Coleman Hooper, Luca Manolache, Michael W. Mahoney, Yakun Sophia Shao, Kurt Keutzer, Amir Gholami) target Compute-in-Flash (CiF) — moving LLM computation directly into flash memory arrays to bypass the memory-bandwidth wall, which the paper frames as increasingly limiting given that LLM workloads are shifting toward longer sequences and heavier inference (retrieval-augmented generation, inference-time compute scaling, long-context use) faster than memory capacity and bandwidth are scaling. Deploying LLMs on CiF hardware runs into two obstacles the paper addresses directly: flash controllers lack efficient high-precision floating-point support for operations like softmax and normalization, and flash cells have limited write endurance, which is a problem because autoregressive decoding writes a new KV-cache entry every token.

The paper's two contributions are an end-to-end integer-only quantization scheme that removes floating-point operations entirely, and a dictionary-based KV-cache compression method: each KV vector is represented as a sparse linear combination of a small set of static dictionary vectors (learned via sparse dictionary coding), so that decoding only has to write the sparse indices and coefficients for each new token rather than a full KV vector, while the dictionary itself is quantized once and stays resident, read-only, in flash. On Llama-3.1-8B and Qwen-2.5-7B, the combined method reduces dynamic KV-cache traffic 15x — the paper defines this as the dynamic memory that must be loaded at each decoding step, ignoring the dictionary's own footprint — with limited accuracy degradation (99% of the FP16 full-KV baseline LongBench score for both models; end-to-end quantized WikiText-2 perplexity within 0.0349 of the FP16 baseline on Llama-3.1-8B).

## Summary (ZH)

来自 UC Berkeley、ICSI 与 LBNL 的研究者（Sebastian Zhao、Minseo Kim、Coleman Hooper、Luca Manolache、Michael W. Mahoney、Yakun Sophia Shao、Kurt Keutzer、Amir Gholami）聚焦「闪存内计算」（Compute-in-Flash，CiF）——将大模型计算直接搬入闪存阵列内部执行，以绕开内存带宽瓶颈。论文指出，随着大模型工作负载朝更长序列、更重推理演进（检索增强生成、推理时计算规模扩展、长上下文应用），内存容量与带宽的增长速度已跟不上负载复杂度的增长，这一瓶颈正日益凸显。在 CiF 硬件上部署大模型面临论文直接应对的两大障碍：闪存控制器缺乏对 softmax、归一化等运算所需的高精度浮点运算的高效支持；闪存单元的写入耐久性有限，而自回归解码每生成一个 token 就需要写入一条新的 KV 缓存条目，这使该问题尤为突出。

论文的两项贡献分别是：一套端到端的纯整数量化方案，彻底消除浮点运算；以及一种基于字典的 KV 缓存压缩方法——通过稀疏字典编码，将每个 KV 向量表示为一小组静态字典向量的稀疏线性组合，使得解码过程中每个新 token 只需写入稀疏索引与系数，而非完整的 KV 向量，字典本身则一次性量化后常驻闪存、只读。在 Llama-3.1-8B 与 Qwen-2.5-7B 上，该组合方法将动态 KV 缓存流量降低 15 倍——论文将其定义为每个解码步需加载的动态内存量（不计字典自身的占用）——且精度损失有限（两个模型在 LongBench 上均保持 FP16 全 KV 基线得分的 99%；Llama-3.1-8B 上端到端量化后的 WikiText-2 困惑度与 FP16 基线相差仅 0.0349）。

## Key technical points (EN)

- **Mechanism, two parts**: (1) end-to-end integer-only inference eliminates floating-point matmul/softmax/normalization, needed because flash-adjacent compute lacks efficient high-precision float support; (2) dictionary-based KV-cache compression represents each KV vector as a sparse linear combination of a learned, per-tensor-quantized static dictionary — attention over the compressed KV is computed on the fly without materializing the full KV vectors.
- **Why write endurance matters here specifically**: every autoregressive decode step would otherwise write a full new KV vector to flash; the sparse-code representation only writes small index/coefficient updates per token, directly reducing the write volume that stresses flash endurance.
- **Measured/modeled results**: 15x reduction in dynamic KV-cache traffic (dynamic memory loaded per decoding step, dictionary footprint excluded); 99% of the FP16 full-KV baseline LongBench score retained on both Llama-3.1-8B and Qwen-2.5-7B; end-to-end quantized WikiText-2 perplexity of 7.5803 on Llama-3.1-8B, within 0.0349 of the FP16 baseline; analytically modeled 3.1x/2.7x latency/energy savings at 1K-token context and 4.4x/6.8x at 256K-token context. Those headline figures are for configuration S2 (CIM-SSD with compressed codes on DRAM), measured against baseline B1, an inference NPU with DDR5 DRAM running FP16 with a full FP16 KV cache; the modeled platform is a host CPU + DRAM with a PCIe-attached CIM-SSD comprising an SSD controller/SRAM and a CIM flash array.
- **Evaluation is analytical/system-modeled, not measured on physical CiF silicon**: the latency and energy figures come from analytical modeling grounded in published hardware parameters for a simulated CIM-SSD platform, not from running on fabricated Compute-in-Flash hardware — the paper itself frames its contribution at the algorithm/system-modeling level, consistent with CiF for LLM serving not yet being commodity hardware.

## Key technical points (ZH)

- **机制分两部分**：（1）端到端纯整数推理，消除浮点矩阵乘法/softmax/归一化运算——这是闪存邻近计算缺乏高效高精度浮点支持所必需的；（2）基于字典的 KV 缓存压缩，将每个 KV 向量表示为一个经学习、按张量量化的静态字典的稀疏线性组合——对压缩后 KV 的注意力计算是即时进行的，无需还原出完整的 KV 向量。
- **为何写入耐久性在此尤为关键**：若不加改造，每一步自回归解码都需向闪存写入一条完整的新 KV 向量；而稀疏编码表示每个 token 只需写入很小的索引/系数更新，直接降低了给闪存耐久性带来压力的写入量。
- **实测/建模结果**：动态 KV 缓存流量降低 15 倍（指每个解码步需加载的动态内存量，不计字典占用）；Llama-3.1-8B 与 Qwen-2.5-7B 在 LongBench 上均保持 FP16 全 KV 基线得分的 99%；Llama-3.1-8B 端到端量化后 WikiText-2 困惑度为 7.5803，与 FP16 基线相差仅 0.0349；分析建模得出：1K token 上下文时延迟/能耗节省 3.1 倍/2.7 倍，256K token 上下文时为 4.4 倍/6.8 倍。上述主打数字对应配置 S2（压缩编码存放于 DRAM 的 CIM-SSD 方案），基线为 B1（搭载 DDR5 DRAM、以 FP16 运行并保存完整 FP16 KV 缓存的推理 NPU）；所建模的平台为含 DRAM 的主机 CPU + 经 PCIe 连接、内含 SSD 控制器/SRAM 与 CIM 闪存阵列的 CIM-SSD。
- **评测为分析建模而非物理 CiF 硬件实测**：延迟与能耗数据来自基于已发表硬件参数、针对一个仿真 CIM-SSD 平台所做的分析建模，而非在已制造的闪存内计算硬件上实测所得——论文自身也将其贡献定位于算法/系统建模层面，这与「面向大模型推理的闪存内计算」尚未成为商用硬件的现状相符。

## Why it matters / what's new (EN)

This KB's on-device-inference bin has so far covered KV-cache management mostly on conventional GPU/CPU memory hierarchies (mzCache's eviction/restoration ordering, LeanStream's storage-backed streaming). This entry adds a distinct memory substrate — flash used as a compute-in-memory target rather than a passive backing store — and a compression technique (learned static dictionaries rather than eviction or paging) purpose-built for that substrate's specific constraint (write endurance) rather than for capacity alone. The entry is filed with its analytical/modeled nature stated prominently: unlike this run's other picks, its headline latency/energy numbers are not measurements on physical hardware, which matters for how much weight to put on the 4.4x/6.8x figures relative to, say, this run's fabricated-silicon ETHEREAL result.

## Why it matters / what's new (ZH)

本知识库「端侧推理」分类此前收录的 KV 缓存管理工作，大多针对常规 GPU/CPU 内存层级（如 mzCache 的驱逐/恢复排序、LeanStream 的存储支撑式流式处理）。本条目引入了一种不同的存储介质——将闪存用作「内存内计算」目标而非被动的后备存储——以及一种专门针对该介质特定约束（写入耐久性，而非单纯容量）设计的压缩技术（基于学习得到的静态字典，而非驱逐或分页）。本条目在收录时明确标注了其分析/建模性质：与本轮收录的其他条目不同，其主打的延迟/能耗数字并非物理硬件实测所得——这一点，在评估其 4.4 倍/6.8 倍等数字应赋予多大权重时（相较于本轮同时收录的、基于已流片硬件的 ETHEREAL 结果），是需要考虑的因素。

## Images

![Motivation and overview of LLM inference on flash compute-in-memory (CIM): the memory-wall bottleneck, the KV-cache write-endurance and FP-operation challenges, and the proposed integer-only + dictionary-based KV caching approach | 闪存内计算（CIM）上大模型推理的动机与总览：内存墙瓶颈、KV 缓存写入耐久性与浮点运算难题，以及所提出的纯整数与字典式 KV 缓存方案](https://arxiv.org/html/2609.16161v1/main_teaser.png)
