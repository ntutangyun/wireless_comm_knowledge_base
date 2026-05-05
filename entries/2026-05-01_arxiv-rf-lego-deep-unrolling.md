---
id: 2026-05-01_arxiv-rf-lego-deep-unrolling
date_found: 2026-05-01
date_published: 2026-04-13
type: academic-paper
title_en: "RF-LEGO: Modularized Signal Processing-Deep Learning Co-Design for RF Sensing via Deep Unrolling"
title_zh: "RF-LEGO：通过深度展开的"信号处理-深度学习"模块化协同设计的 RF 感知"
url: "https://arxiv.org/abs/2604.10183"
source_quality: full
topics: [WiFi-sensing, PHY-layer, generative-AI]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 4
---

## Summary (EN)

RF-LEGO (April 2026) bridges classical signal processing and deep learning for RF (including Wi-Fi CSI) sensing through **deep unrolling** — taking each step of a classical signal-processing algorithm (filter, denoise, detect) and rendering it as a learnable neural network layer with explicit signal-domain semantics. The result is a model where every internal block has a physically-meaningful interpretation, *and* the whole pipeline trains end-to-end.

Compared to pure-DL CSI sensing models, RF-LEGO components are interpretable and reusable: the same "denoise-block" trained for one task can plug into another pipeline without retraining. Compared to pure signal-processing methods, RF-LEGO components automatically adapt their parameters to data — they don't need handtuning.

## Summary (ZH)

RF-LEGO（2026 年 4 月）通过**深度展开（deep unrolling）**把经典信号处理与深度学习连接起来用于 RF（包括 Wi-Fi CSI）感知 —— 把经典信号处理算法的每一步（滤波、去噪、检测）渲染为一个具有显式信号域语义的可学习神经网络层。结果是一个内部每个块都具有物理可解释意义、*同时* 整个流水线可端到端训练的模型。

相对纯 DL 的 CSI 感知模型，RF-LEGO 的各组件具有可解释性与可重用性：为某个任务训练的"去噪块"可以直接接入另一个流水线而无需重训。相对纯信号处理方法，RF-LEGO 的组件能根据数据自动调整参数 —— 不需要人工调优。

## Key technical points (EN)

- **Deep unrolling** of classical signal-processing algorithms into learnable layers
- Each internal block has physical-domain interpretation
- End-to-end trainable, components reusable across tasks
- Targets RF sensing (Wi-Fi CSI included)

## Key technical points (ZH)

- 把经典信号处理算法**深度展开**为可学习层
- 每个内部块具有物理域可解释含义
- 端到端可训练，组件可跨任务复用
- 面向 RF 感知（含 Wi-Fi CSI）

## Why it matters / what's new (EN)

- **Methodological middle ground.** Pure-DL CSI sensing has been the default for two years; RF-LEGO restores the case for hybrid signal-processing+DL designs and shows the cost-benefit is favourable.
- **Reusability is a real win.** Component reuse across tasks is rare in pure-DL settings; if RF-LEGO's claim holds, it's an organisational/training-cost saving across the whole sensing-research pipeline.

## Why it matters / what's new (ZH)

- **方法论的中间地带。** 纯 DL CSI 感知已经主导了两年；RF-LEGO 让"信号处理 + DL 混合设计"重新有理由存在，并显示性价比有利。
- **可复用性是真正的胜利。** 在纯 DL 设置下组件跨任务复用很少出现；若 RF-LEGO 的主张成立，整个感知研究流水线的组织成本和训练成本都会下降。
