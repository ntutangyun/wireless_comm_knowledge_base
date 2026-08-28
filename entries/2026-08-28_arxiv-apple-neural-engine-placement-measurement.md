---
id: 2026-08-28_arxiv-apple-neural-engine-placement-measurement
date_published: 2026-08-22
date_found: 2026-08-28
type: academic-paper
technology: edge-ai
title_en: "What actually runs: a measurement study of language model placement and decode speed on the Apple Neural Engine"
title_zh: "端侧模型到底跑在哪：Apple Neural Engine 上语言模型放置与解码速度的实测研究"
url: "https://arxiv.org/abs/2608.22110"
source_quality: abstract_only
topics: [Apple-Neural-Engine, NPU, quantization, on-device-LLM, int8, ternary, measurement-study]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon, edge-model-efficiency, ai-pc]
novelty_score: 4
---

## Summary (EN)

A single-author measurement study that asks a question every on-device deployment eventually runs into and almost no vendor documentation answers: when you hand a model to Apple's Neural Engine (ANE), what actually ends up running on the NPU, and what silently falls back to the CPU?

The author builds 64 variants of the same language-model operations — computationally equivalent, differing only in how they are expressed and how their weights are encoded — converts each one through the Apple toolchain, and then measures where the work really lands by watching memory-controller activity during inference rather than trusting the framework's own reporting. Quantised models are trained to match their fp16 counterparts structurally, so the comparison isolates encoding from architecture.

The headline finding inverts the usual mental model. Hardware placement is decided by **implementation and weight encoding, not by the underlying computation**. A 25.85M-parameter convolution-heavy model in its original fp16 form runs *entirely on the CPU* — the NPU never touches it. The same model converted to int8 or 2-bit reaches roughly **83% engine residency** and runs **1.8–2.2× faster**. Nothing about the mathematics changed; only the encoding did.

A second result is a clean scaling rule: decode efficiency holds at approximately **0.77 of the nominal encoding width** across precision levels, which gives a usable back-of-envelope for what a given quantisation buys before anyone writes conversion code. Ternary models come out with the best size-versus-speed profile of everything tested. The author closes with a design methodology that inverts the usual order — choose the weight encoding *first*, then spend the remaining parameter budget — on the grounds that encoding decides whether the accelerator participates at all.

## Summary (ZH)

这是一篇单作者实测研究，回答了一个几乎每个端侧部署最终都会撞上、而厂商文档几乎从不说明的问题：当你把一个模型交给 Apple Neural Engine（ANE）时，究竟哪些部分真正跑在 NPU 上，哪些又悄悄回落到了 CPU？

作者构造了同一组语言模型算子的 64 个变体——计算上完全等价，仅在表达方式与权重编码上不同——逐一通过 Apple 工具链转换，然后**通过监测推理期间的内存控制器活动**来判定负载真实落在哪里，而不是采信框架自身的报告。量化模型在结构上与其 fp16 对照组保持一致，从而把「编码」这一变量与「架构」分离开来。

核心结论颠覆了通常的心智模型：硬件放置由**实现方式与权重编码决定，而非由底层计算决定**。一个 2585 万参数、以卷积为主的模型，在原始 fp16 形态下**完全跑在 CPU 上**——NPU 根本没有参与；同一模型转为 int8 或 2-bit 后，引擎驻留率达到约 **83%**，速度提升 **1.8–2.2 倍**。数学没有任何变化，变的只是编码。

第二个结果是一条干净的标度规律：解码效率在各精度档位上稳定保持在**标称编码位宽的约 0.77 倍**，这为「某种量化到底能换来多少收益」提供了一个在动手写转换代码之前就能用的估算依据。在所有被测配置中，三值（ternary）模型的「体积—速度」组合最优。作者最后提出一套顺序被颠倒过来的设计方法论：**先选权重编码，再分配剩余参数预算**——理由是编码决定了加速器是否会参与工作。

## Key technical points (EN)

- 64 computationally equivalent operation variants converted through the Apple toolchain; placement determined by observing real memory-controller activity, not framework self-reporting.
- fp16 convolution-heavy model (25.85M params) → 100% CPU execution; the same model at int8 or 2-bit → ~83% ANE residency and 1.8–2.2× speedup.
- Weight *encoding*, not the computation being expressed, is what gates accelerator eligibility.
- Decode efficiency ≈ 0.77 × nominal encoding width, consistent across precisions — a usable pre-implementation estimator.
- Ternary weights give the best size/speed trade-off across the tested space.
- Proposed methodology: select encoding before allocating parameters.
- 23 pages, 5 figures; code, measurement harnesses and run ledgers released. Categories cs.LG, cross-listed cs.AR and cs.PF.

## Key technical points (ZH)

- 64 个计算等价的算子变体经 Apple 工具链转换；通过观测真实内存控制器活动判定放置，而非依赖框架自报。
- fp16 卷积密集型模型（2585 万参数）→ 100% 在 CPU 执行；同一模型 int8 或 2-bit → ANE 驻留率约 83%，提速 1.8–2.2 倍。
- 决定加速器是否可用的是**权重编码**，而不是所表达的计算本身。
- 解码效率 ≈ 标称编码位宽 × 0.77，跨精度保持一致——可用作动手前的估算器。
- 在被测空间内，三值权重给出最优的体积/速度折中。
- 提出的方法论：先定编码，再分配参数预算。
- 23 页、5 张图；代码、测量框架与运行记录均已公开。类别 cs.LG，交叉列于 cs.AR 与 cs.PF。

## Why it matters / what's new (EN)

This is the first entry in the KB's new `edge-ai` domain to put a number on a gap the whole on-device field talks around: the distance between a vendor's advertised NPU capability and what a real model actually gets to use. A 40-TOPS accelerator delivers zero TOPS to a model the toolchain declines to place on it, and the paper shows that whether placement happens can hinge entirely on a conversion detail invisible in the model architecture.

That reframes the practical advice for anyone shipping a model to an edge device. Quantisation is normally justified by memory footprint and arithmetic cost; here it is justified by *eligibility* — int8 conversion is what buys access to the accelerator in the first place, and the 1.8–2.2× is a consequence of that admission, not of cheaper arithmetic. The 0.77-of-nominal-width rule and the ternary result give the `edge-model-efficiency` bin its first concrete planning heuristics.

The method also deserves attention independent of Apple silicon: reading memory-controller activity to verify placement is a technique that transfers to any NPU whose framework reports placement optimistically, which is most of them. For a knowledge base whose other six domains are radio technologies, this is a reminder that the edge-AI equivalent of a link budget is a *placement* budget — and that vendor TOPS figures are, as this scout's rubric assumes, marketing until somebody measures.

## Why it matters / what's new (ZH)

作为本知识库新增 `edge-ai` 技术域的首批条目之一，这篇论文为整个端侧领域绕着走的一个落差给出了量化：厂商标称的 NPU 能力，与真实模型实际能用上的能力之间的距离。对于一个工具链拒绝放置的模型，40 TOPS 的加速器提供的是 0 TOPS；而论文表明，放置是否发生，可能完全取决于一个在模型架构中根本看不见的转换细节。

这改变了「把模型部署到边缘设备」这件事的实践建议。量化通常以内存占用和算术成本来论证，而这里它的理由是**准入资格**——int8 转换首先买到的是「能用上加速器」，1.8–2.2 倍的提速是准入的结果，而不是算术变便宜的结果。「0.77 倍标称位宽」这条规律与三值权重的结论，为 `edge-model-efficiency` 分类提供了首批可用的规划性经验法则。

抛开 Apple 芯片本身，其方法同样值得注意：**通过内存控制器活动来验证放置**，这一手段可迁移到任何「框架对放置报告偏乐观」的 NPU 上——而绝大多数 NPU 都是如此。对于其余六个技术域均为无线技术的本知识库而言，这提示了一件事：边缘 AI 中与链路预算对应的东西是**放置预算**；而厂商的 TOPS 数字，正如本 scout 评分准则所假定的，在有人实测之前都只是市场宣传。
