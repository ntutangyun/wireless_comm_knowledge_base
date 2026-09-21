---
id: 2026-09-21_arxiv-weight-is-over-interactive-diffusion-consumer-gpu
date_published: 2026-09-18
date_found: 2026-09-21
technology: edge-ai
type: academic-paper
title_en: "The Weight Is Over - Interactive Diffusion on Consumer GPUs"
title_zh: "权重不再是负担——消费级 GPU 上的交互式扩散生成"
url: "https://arxiv.org/abs/2609.21849"
source_quality: full
topics: [diffusion-model, image-generation, on-device-inference, quantization, embedding-translator]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 4
---

## Summary (EN)

Frieder Ganz (Adobe, Hamburg) and Maximilian Müller (NVIDIA, Würselen) submitted this paper to arXiv on 18 September 2026. On-device inference momentum has concentrated on language models; diffusion image-generation pipelines lag behind because they are memory-hungry, latency-sensitive, and require orchestrating a text embedder, a diffusion transformer, a decoder and further postprocessing in a way that is far less standardized than an LLM decoding loop. The paper makes three contributions aimed at reaching more client devices: an embedding translator that maps a small text encoder into a large encoder's embedding space to cut weight and latency without retraining the diffusion model itself; a reproducible sweep recipe for navigating the speed/quality/memory trade-off in diffusion pipelines; and an interactive on-device image-generation editor.

The embedding translator replaces the original 4B-parameter (Qwen3) text encoder with a 0.6B-parameter Qwen3 encoder plus a translator network (up to 187M parameters in the largest variant tested) that maps into the original encoder's embedding space — cutting the Mac M3 Max (48 GB, PyTorch/MPS) text-encoding stage from 435 ms (4B encoder) to about 90-107 ms (0.6B encoder plus translator, at most 19 ms added). The diffusion backbone tested is FLUX.2-klein. The paper reports per-GPU figures: the fastest — roughly 100 ms time-to-first-image-iteration (TTFI, which the paper defines as encode + one denoising step + VAE decode) for 1024x1024 generation in 4 steps, with full end-to-end time of 0.27 seconds — is measured on an RTX PRO 6000 Blackwell Workstation Edition with the diffusion transformer quantized to NVFP4 (FP8 gives 74 ms per step at 7.2 GB; BF16 gives 105 ms per step). On a 12 GB RTX 4070 Ti, the paper reports the 0.6B-encoder-plus-translator path at half-resident weights rendering a 1024x1024 image in about 3 seconds "with headroom to spare"; at 25% weight residency with the translator path, peak VRAM drops to 6.7 GB (under the 8 GB tier) at a 3% step-time cost. RTX 5090 and RTX 5070 are also mentioned for PCIe-bandwidth comparisons.

## Summary (ZH)

Adobe（汉堡）的 Frieder Ganz 与 NVIDIA（维尔塞伦）的 Maximilian Müller 于 2026 年 9 月 18 日向 arXiv 提交了本文。端侧推理的发展势头此前主要集中于语言模型；扩散式图像生成流水线相对滞后，原因在于其对内存需求高、对时延敏感，且需要编排文本编码器、扩散 Transformer、解码器以及进一步的后处理，其标准化程度远不及 LLM 解码循环。本文提出三项面向覆盖更多终端设备的贡献：一个将小型文本编码器映射到大型编码器嵌入空间的"嵌入翻译器"（embedding translator），可在不重新训练扩散模型本身的前提下降低权重量与时延；一套用于在扩散流水线的速度/质量/内存三者之间权衡的可复现扫描方案；以及一个交互式端侧图像生成编辑器。

嵌入翻译器用一个 0.6B 参数的 Qwen3 编码器加一个翻译网络（所测试的最大变体达 187M 参数）替代原本 4B 参数的 Qwen3 文本编码器，并将其映射至原编码器的嵌入空间——在 Mac M3 Max（48GB，PyTorch/MPS）上，将文本编码阶段耗时从 435 毫秒（4B 编码器）降至约 90-107 毫秒（0.6B 编码器加翻译器，最多额外增加 19 毫秒）。所测试的扩散主干模型为 FLUX.2-klein。论文按显卡分别给出数据：其中最快的结果——1024x1024 分辨率、4 步生成、约 100 毫秒的首次图像迭代时延（TTFI，论文将其定义为文本编码 + 一步去噪 + VAE 解码），端到端总耗时 0.27 秒——是在 RTX PRO 6000 Blackwell Workstation Edition 上、将扩散 Transformer 量化到 NVFP4 的条件下测得的（FP8 为每步 74 毫秒、7.2GB；BF16 为每步 105 毫秒）。在 12GB 的 RTX 4070 Ti 上，论文报告 0.6B 编码器加翻译器路径、半驻留权重条件下，生成一张 1024x1024 图像约需 3 秒，且"仍有余量"；在 25% 权重驻留、配合翻译器路径的条件下，峰值显存降至 6.7GB（低于 8GB 档位），步时成本增加 3%。RTX 5090 与 RTX 5070 也在文中被提及，用于 PCIe 带宽方面的对比。

## Key technical points (EN)

- **Problem**: on-device inference momentum is concentrated in LLMs; diffusion image-generation pipelines lag because they are memory-hungry, latency-sensitive, and involve orchestrating multiple less-standardized components (embedder, transformer, decoder, postprocessing).
- **Embedding translator**: replaces a 4B-parameter (Qwen3) text encoder with a 0.6B-parameter encoder plus a translator network (up to 187M parameters) mapped into the original encoder's embedding space, without retraining the diffusion model. Cuts Mac M3 Max text-encoding latency from 435ms to ~90-107ms.
- **Diffusion backbone**: FLUX.2-klein.
- **Fastest reported number**: ~100ms TTFI (time-to-first-image-iteration: encode + one denoising step + VAE decode) for 1024x1024 / 4 steps, 0.27s full end-to-end, measured on an RTX PRO 6000 Blackwell Workstation Edition with the diffusion transformer quantized to NVFP4.
- **Quantization axis**: transformer VRAM 8.4 GiB at BF16 -> 3.3 GiB at NVFP4; per-step latency 105ms -> 57ms (1.84x). FP8 sits between, at 74ms per step and 7.2GB.
- **RTX 4070 Ti figures**: on a 12GB RTX 4070 Ti, the 0.6B-encoder-plus-translator path at half-resident weights renders 1024x1024 in ~3 seconds; at 25% residency, peak VRAM drops to 6.7GB at a 3% step-time cost.
- **Authors' affiliations**: Adobe and NVIDIA — an industry collaboration, not an academic-only result.

## Key technical points (ZH)

- **问题背景**：端侧推理的发展势头集中于 LLM；扩散式图像生成流水线相对滞后，原因是其对内存需求高、时延敏感，且需要编排多个标准化程度较低的组件（编码器、Transformer、解码器、后处理）。
- **嵌入翻译器**：用 0.6B 参数编码器加翻译网络（最大 187M 参数）替代 4B 参数（Qwen3）文本编码器，并映射至原编码器嵌入空间，无需重新训练扩散模型。将 Mac M3 Max 上的文本编码时延从 435 毫秒降至约 90-107 毫秒。
- **扩散主干模型**：FLUX.2-klein。
- **最快的所报数据**：在 RTX PRO 6000 Blackwell Workstation Edition 上、扩散 Transformer 量化到 NVFP4 的条件下，1024x1024/4 步生成的首次图像迭代时延（TTFI：文本编码 + 一步去噪 + VAE 解码）约 100 毫秒，端到端总耗时 0.27 秒。
- **量化维度**：扩散 Transformer 的显存占用从 BF16 的 8.4 GiB 降至 NVFP4 的 3.3 GiB；每步时延从 105 毫秒降至 57 毫秒（1.84 倍）。FP8 介于二者之间，为每步 74 毫秒、显存 7.2GB。
- **RTX 4070 Ti 数据**：在 12GB 显卡 RTX 4070 Ti 上，0.6B 编码器加翻译器路径、半驻留权重条件下，生成 1024x1024 图像约需 3 秒；在 25% 权重驻留条件下，峰值显存降至 6.7GB，步时成本增加 3%。
- **作者背景**：Adobe 与 NVIDIA——属于产业界合作成果，而非纯学术结果。

## Why it matters / what's new (EN)

This KB's edge-model-efficiency and on-device-inference bins have so far been dominated by LLM-serving work (quantization, KV-cache, speculative decoding); this is the first entry in these bins to address the diffusion image-generation pipeline specifically (`2026-09-01_arxiv-amadiff-mobile-aigc-task-orchestration` covers mobile diffusion/AIGC workloads from the edge-orchestration side), from two named industry labs (Adobe, NVIDIA) rather than a single-source vendor announcement. Each latency figure is reported here with the GPU it was measured on.

## Why it matters / what's new (ZH)

本知识库此前的 edge-model-efficiency 与 on-device-inference 条目多集中于 LLM 服务相关工作（量化、KV 缓存、投机解码）；本条目是这两个分类下首个专门针对扩散式图像生成流水线的条目（`2026-09-01_arxiv-amadiff-mobile-aigc-task-orchestration` 已从边缘编排角度涉及移动端扩散/AIGC 负载），且来自两家具名产业实验室（Adobe、NVIDIA）的联合成果，而非单一厂商的宣传公告。文中每一项时延数据均标明了其所在的显卡。

## Images

![Teaser: interactive on-device diffusion image generation examples (owl, volcano, Jupiter, raccoon) | 效果展示：端侧交互式扩散图像生成示例（猫头鹰、火山、木星、浣熊）](https://arxiv.org/html/2609.21849v1/figures/teaser.png)
![Qualitative comparison of the embedding-translator path vs. the original large text encoder | 嵌入翻译器路径与原始大型文本编码器的效果定性对比](https://arxiv.org/html/2609.21849v1/figures/qualitative.png)
