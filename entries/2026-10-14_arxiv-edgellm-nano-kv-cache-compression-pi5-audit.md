---
id: 2026-10-14_arxiv-edgellm-nano-kv-cache-compression-pi5-audit
date_published: 2026-10-10
date_found: 2026-10-14
technology: edge-ai
type: academic-paper
title_en: "EdgeLLM-Nano: auditing KV-cache compression and pruning on a 33.6 MB on-device language model, with Raspberry Pi 5 energy measurements"
title_zh: "EdgeLLM-Nano：在 33.6 MB 端侧语言模型上审计 KV 缓存压缩与剪枝，并在树莓派 5 上测量能耗"
url: "https://arxiv.org/abs/2610.14475"
source_quality: full
topics: [KV-cache, quantization, pruning, Raspberry-Pi-5, evaluation-methodology, KIVI]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

EdgeLLM-Nano is a measurement study of KV-cache compression and weight pruning on edge hardware. The authors argue that existing evaluations do not always exercise the cache under test; single-shot perplexity, in particular, never reads through the compressed cache. In their testbed every backend reports the same perplexity (5.461), from lossless FP16 to aggressive quantisation. The testbed is an 8.39M-parameter decoder-only transformer (33.6 MB, trained on TinyStories) run on a 4 GB Raspberry Pi 5 with an INA219 power sensor, plus a second repetition with a 124M-parameter model.

They introduce Long-Context Decode Fidelity (LCDF), a token-by-token, teacher-forced log-loss comparison that decodes through the cache under test and reports paired statistics across seeds. Under LCDF the authors' own polar-guided key-cache quantiser (PGKQ, 3.75 bits per element, Hadamard rotation, polar transform, Lloyd-Max quantiser and a 1-bit QJL residual) is dominated by plain per-token round-to-nearest at 3.50 bits, which causes 11 to 20 times less damage; KIVI is near-lossless (LCDF +0.0053 / +0.0059) and QuaRot shows a small but significant loss (+0.0117). A progressive consistency-anchored pruner is found to be no better than one-shot magnitude pruning.

On the Raspberry Pi 5 (idle draw 2.51 W, dynamic draw 4.72 to 4.82 W), every compression backend tested is less energy-efficient per token than uncompressed FP16 inference; the authors note that at context 512 the FP16 KV cache is at most 3.1 MB, so compression is not needed to make this workload feasible. They conclude that, apart from the near-lossless KIVI, the KV-cache compression methods tested can be improved.

## Summary (ZH)

EdgeLLM-Nano 是一项针对边缘硬件上 KV 缓存压缩与权重剪枝的测量研究。作者认为现有评测并不总是涉及被测缓存，尤其单次困惑度评测根本不经过被压缩的缓存。在其测试台上，从无损 FP16 到激进量化，所有后端报告的困惑度都相同（5.461）。测试台是一个 8.39M 参数的仅解码器 Transformer（33.6 MB，在 TinyStories 上训练），运行在带 INA219 功率传感器的 4 GB 树莓派 5 上，并用 124M 参数模型做了第二次重复实验。

他们提出长上下文解码保真度（LCDF），一种逐 token、教师强制的对数损失比较，解码时通过被测缓存，并给出跨随机种子的配对统计。在 LCDF 下，作者自己的极坐标引导键缓存量化器（PGKQ，每元素 3.75 比特，含 Hadamard 旋转、极坐标变换与 Lloyd-Max 量化器与 1 比特 QJL 残差）被每元素 3.50 比特的逐 token 就近取整所压制，后者造成的损伤少 11 至 20 倍；KIVI 近乎无损（LCDF +0.0053 / +0.0059），QuaRot 有小但显著的损失（+0.0117）。渐进式一致性锚定剪枝器并不优于一次性幅度剪枝。

在树莓派 5 上（空闲功耗 2.51 W，动态功耗 4.72 至 4.82 W），所测的每种压缩后端的单 token 能效都低于未压缩的 FP16 推理；作者指出在上下文 512 时 FP16 KV 缓存至多 3.1 MB，该负载无需压缩即可运行。结论是：除近乎无损的 KIVI 外，所测的 KV 缓存压缩方法仍有改进空间。

## Key technical points (EN)

- Testbed: 8.39M-parameter decoder-only LM (33.6 MB) on a 4 GB Raspberry Pi 5 with INA219 power sensor; a 124M-parameter repetition.
- Finding: perplexity is identical (5.461) for all backends, so it cannot separate them; LCDF (paired, per-seed) can.
- PGKQ (3.75 bits/elt) is dominated by round-to-nearest (3.50 bits) by 11 to 20x in LCDF damage; KIVI near-lossless; QuaRot small loss.
- Progressive consistency-anchored pruning is not better than one-shot magnitude pruning.
- Pi 5 energy: all compression backends tested use more energy per token than FP16 (idle 2.51 W, dynamic 4.72 to 4.82 W).
- At context 512 the FP16 KV cache is at most 3.1 MB.

## Key technical points (ZH)

- 测试台：8.39M 参数仅解码器语言模型（33.6 MB），4 GB 树莓派 5 加 INA219 功率传感器；另有 124M 参数模型的重复实验。
- 发现：所有后端的困惑度相同（5.461），无法区分；LCDF（配对、按种子）可以区分。
- PGKQ（3.75 比特/元素）在 LCDF 损伤上被就近取整（3.50 比特）压制 11 至 20 倍；KIVI 近乎无损；QuaRot 有小幅损失。
- 渐进式一致性锚定剪枝不优于一次性幅度剪枝。
- 树莓派 5 能耗：所测压缩后端的单 token 能耗均高于 FP16（空闲 2.51 W，动态 4.72 至 4.82 W）。
- 上下文 512 时 FP16 KV 缓存至多 3.1 MB。

## Why it matters / what's new (EN)

The study is a caution for edge-model-efficiency claims: accuracy-only or perplexity-only tables can hide cache damage, and compression that saves memory can cost energy per token on a small board. The testbed models are tiny (8.39M and 124M parameters), so the conclusions are about this regime and should not be assumed to transfer to multi-billion-parameter on-device LLMs. A paired-statistics harness is the reusable part.

## Why it matters / what's new (ZH)

这项研究对边缘模型效率类结论是一个提醒：只看精度或困惑度的表格可能掩盖缓存损伤，而节省内存的压缩在小型开发板上可能增加单 token 能耗。测试模型很小（8.39M 与 124M 参数），结论针对这一量级，不应直接外推到数十亿参数的端侧 LLM。可复用的部分是其配对统计评测框架。

## Images

*(No redistributable images for this entry.)*
