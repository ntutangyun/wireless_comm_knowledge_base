---
id: 2026-05-01_arxiv-wukong-neuro-wideband-sensing
date_found: 2026-05-01
date_published: 2026-01-10
type: academic-paper
title_en: "Neuro-Wideband WiFi Sensing via Self-Conditioned CSI Extrapolation"
title_zh: "基于自条件 CSI 外推的神经宽带 Wi-Fi 感知"
url: "https://arxiv.org/abs/2601.06467"
source_quality: full
topics: [802.11bf, WiFi-sensing, PHY-layer, generative-AI]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 4
---

## Summary (EN)

Ji, Hou and Wu (January 2026) propose **WUKONG**, a self-supervised framework that synthesises wideband CSI from narrowband measurements — letting commodity Wi-Fi devices "fake" the bandwidth needed for higher-resolution sensing without specialised hardware. The architecture combines a Transformer (for capturing the multipath structure of a sample) with a Diffusion model (for generating the extended-bandwidth CSI conditional on that multipath structure). The output is **eCSI** (extended CSI), which downstream sensing models then consume as if it came from a wider channel.

The key technical move is *self-conditioning*. Instead of using a fixed prior, the diffusion stage is conditioned on sample-specific multipath parameters extracted by the Transformer. This means the synthesis is per-environment rather than per-dataset — the model adapts to the physical layout it's currently observing.

Validation tasks: localisation and **multi-person breathing monitoring**. Both benefit from the synthesised wideband data without any extra channel measurements or hardware modifications.

## Summary (ZH)

Ji、Hou 和 Wu（2026 年 1 月）提出 **WUKONG（悟空）**，一个自监督框架，能从窄带 CSI 测量合成宽带 CSI —— 让商用 Wi-Fi 设备在不依赖专用硬件的前提下"伪造"出更高分辨率感知所需的带宽。架构组合了 Transformer（用于刻画样本本身的多径结构）与 Diffusion 模型（在该多径结构条件下生成扩展带宽 CSI）。输出 **eCSI**（extended CSI），下游感知模型可以像消费来自更宽信道的 CSI 那样消费它。

关键技术动作是*自条件（self-conditioning）*。Diffusion 阶段不是依赖固定先验，而是依赖 Transformer 抽取的样本特定多径参数。结果是合成是逐环境的，而非逐数据集 —— 模型适应它当下所观测的物理布局。

验证任务：定位与**多人呼吸监测**。两类任务都能从合成的宽带数据中获益，且无需额外信道测量或硬件改动。

## Key technical points (EN)

- **Self-supervised** training — works on existing CSI without manual labels
- **Architecture:** Transformer (multipath extraction) + Diffusion (conditional CSI synthesis)
- **eCSI output** — downstream sensing models consume it as if from a wider channel
- Validated on **localisation** and **multi-person breathing monitoring**
- Hardware-agnostic — runs on commodity Wi-Fi

## Key technical points (ZH)

- **自监督**训练 —— 在已有 CSI 上即可训练，无需人工标注
- **架构：** Transformer（多径抽取）+ Diffusion（条件 CSI 合成）
- **输出 eCSI** —— 下游感知模型可像消费来自更宽信道的 CSI 那样消费
- 在**定位**与**多人呼吸监测**上验证
- 与硬件无关 —— 可在商用 Wi-Fi 上运行

## Why it matters / what's new (EN)

- **First "synthesise the missing bandwidth" approach to Wi-Fi sensing.** Earlier work either accepted narrow-band limits or required specialised hardware (USRP). WUKONG argues these are no longer the only options.
- **Diffusion is now usable in the Wi-Fi PHY pipeline.** The conditioning trick makes diffusion practical despite the per-sample latency hit — significant signal for the next 12 months of CSI-research.
- **Pairs with IBIS (`2026-05-01_arxiv-ibis-csi-bandwidth-constrained.md`):** IBIS makes 20 MHz CSI go further; WUKONG makes 20 MHz CSI *look like* 80 MHz. Two complementary attacks on the same constraint.

## Why it matters / what's new (ZH)

- **首个"合成缺失带宽"思路用于 Wi-Fi 感知。** 此前工作要么接受窄带局限，要么依赖专用硬件（USRP）。WUKONG 论证这并非唯一两条路。
- **Diffusion 已经可以进入 Wi-Fi PHY 流水线。** 条件化技巧让 Diffusion 在每样本时延代价下变得可用 —— 对未来 12 个月 CSI 研究的方向具有指标意义。
- **与 IBIS（`2026-05-01_arxiv-ibis-csi-bandwidth-constrained.md`）形成搭配：** IBIS 让 20 MHz CSI 走得更远；WUKONG 让 20 MHz CSI *看起来像* 80 MHz。同一约束下的两条互补攻法。
