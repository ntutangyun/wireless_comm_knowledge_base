---
id: 2026-05-12_arxiv-wifi-fall-detection-physics-transformer
date_published: 2026-04-23
date_found: 2026-05-12
type: academic-paper
title_en: "Robust Cross-Domain WiFi Fall Detection via Physics-Driven Attention-Enhanced Transformers"
title_zh: "基于物理驱动注意力增强 Transformer 的跨域鲁棒 WiFi 跌倒检测"
url: https://arxiv.org/abs/2605.00869
source_quality: full
topics: [802.11bf, WiFi-sensing, CSI, fall-detection, healthcare, transformer]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

Yingzhe Wang and colleagues (Southeast University / others) submitted a CSI-based fall-detection system on 2026-04-23 (arxiv 2605.00869) that targets two perennial weaknesses of WiFi-sensing systems: severe accuracy drops in unseen rooms and signal degradation under non-line-of-sight conditions. Their architecture pairs a physics-driven preprocessing module — a Dynamic Variance Gate (DVG) that computes per-bin temporal variance over a 15-sample sliding window and converts it to a soft attention mask with a -3.0 sigmoid bias to suppress static environmental components — with an attention-enhanced backbone (EfficientNet-B0 → Convolutional Block Attention Module → 2-layer 4-head 512-dim Transformer encoder with sinusoidal positional encodings).

Cross-environment performance is the headline contribution. On their four-environment dataset (22 volunteers, 321 falls, 436 non-fall activities across Living Room A, Meeting Room B, Home Lab C with separate LoS/NLoS zones, and Lecture Room D), the model reaches **98.8 % accuracy on a completely unseen environment without fine-tuning** and **97.6 % under NLoS**. A live deployment on edge hardware with commercial WiFi adapters held **94 % accuracy** on a brand-new office environment, at 12.4 ms inference latency / 648 FPS on GPU.

Beyond the DVG, two more techniques carry the cross-domain story: a "physics-aware" augmentation set (Rician-channel noise injection, random amplitude scaling 0.5-1.5×, circular time shifts, and NLoS simulation via spectral smoothing) that explicitly mimics the distortions CSI undergoes between environments; and the CBAM stage between EfficientNet and the Transformer, which gives the channel/spatial attention modules a chance to refine the feature map before sequence modelling.

## Summary (ZH)

王映哲与合作者（东南大学等）于 2026-04-23 提交（arxiv 2605.00869）了一套基于 CSI 的跌倒检测系统，瞄准 WiFi 感知系统两个长期痛点：在未见过的房间里准确率大幅跌落、以及在非视距（NLoS）条件下信号退化。他们的架构把一个物理驱动的预处理模块——动态方差门（DVG），在 15 样本滑窗内按子载波计算时间方差并以 -3.0 sigmoid 偏置转换为软注意力掩码以抑制静态环境成分——与一个注意力增强的骨干（EfficientNet-B0 → 卷积块注意力模块 CBAM → 2 层 4 头 512 维 Transformer 编码器，采用正弦位置编码）配对在一起。

跨环境性能是核心贡献。在他们的四环境数据集上（22 位志愿者、321 次跌倒、436 次非跌倒活动；环境包含起居室 A、会议室 B、家庭实验室 C 的视距与 NLoS 分区，以及讲堂 D），模型在**完全未见过的环境、零微调情况下达到 98.8% 准确率**，**NLoS 下达到 97.6%**。在搭载商业 WiFi 适配器的边缘硬件上现场部署，在全新办公室环境下保持 **94% 准确率**，单窗口推理时延 12.4 ms，GPU 上 648 FPS。

除 DVG 之外，跨域故事还有两项辅助技术：一套「物理感知」数据增强（Rician 信道噪声注入、随机幅度缩放 0.5-1.5 倍、循环时间偏移、用频域平滑模拟 NLoS）显式模仿 CSI 跨环境时所经历的失真；以及 EfficientNet 与 Transformer 之间的 CBAM 阶段，让通道/空间注意力模块在序列建模之前先对特征图做一次细化。

## Key technical points (EN)

- **Dynamic Variance Gate (DVG)** — 15-sample sliding window, per-bin variance → convolution → sigmoid with -3.0 init bias → soft attention mask. Designed to suppress the static-environment component of the CSI stream.
- **Backbone** — EfficientNet-B0 (1280-channel, 20×1 output) → CBAM channel+spatial attention → Transformer encoder (2 layers, 4 heads, 512-dim, sinusoidal positions).
- **Physics-aware augmentation** — Rician noise injection; amplitude scaling 0.5-1.5×; circular time shifts; NLoS simulation via spectral smoothing (downsample + interpolate).
- **Dataset** — 4 indoor environments; 22 volunteers; 321 falls + 436 non-fall activities; LoS and NLoS zones separated in Home Lab C.
- **Results** — 99.5 % aggregate accuracy; 97.6 % NLoS; **98.8 % unseen environment, zero fine-tuning**; **94 % in live field test on a novel office**.
- **Latency** — 12.4 ms / window inference; 648 FPS on GPU; tested on edge devices with commercial WiFi NICs.

## Key technical points (ZH)

- **动态方差门（DVG）** —— 15 样本滑窗、按子载波算方差 → 卷积 → sigmoid（-3.0 初始偏置）→ 软注意力掩码。设计目标是抑制 CSI 流中的静态环境成分。
- **骨干网络** —— EfficientNet-B0（1280 通道、20×1 输出）→ CBAM 通道+空间注意力 → Transformer 编码器（2 层、4 头、512 维、正弦位置编码）。
- **物理感知数据增强** —— Rician 噪声注入；幅度随机缩放 0.5-1.5×；循环时间偏移；用频域平滑（降采样+插值）模拟 NLoS。
- **数据集** —— 4 个室内环境；22 名志愿者；321 次跌倒 + 436 次非跌倒动作；Home Lab C 内 LoS 与 NLoS 分区。
- **结果** —— 综合 99.5%；NLoS 97.6%；**未见过环境零微调 98.8%**；**新办公室现场实测 94%**。
- **时延** —— 单窗口推理 12.4 ms；GPU 648 FPS；在搭载商业 WiFi 网卡的边缘设备上做过部署测试。

## Why it matters / what's new (EN)

The cross-domain story is the meaningful contribution. Recent KB entries on this axis (`2026-05-04_arxiv-respirfi-respiratory-wifi-csi`, `2026-05-03_arxiv-multiuser-wifi-sensing-counting`) hit similar accuracies in single-environment training; the headline here is **near-99 % accuracy without fine-tuning on a fully unseen room**, which is the part that has historically blocked CSI-sensing deployments at scale. The DVG is a small, principled physics-side preprocessing step rather than yet-another-attention-flavour; pairing it with a CBAM+Transformer is a fairly standard recipe but the ablation in the paper attributes most of the cross-domain robustness to the DVG plus the physics-aware augmentation set, not the Transformer itself. For 802.11bf-track work that wants to standardise CSI sensing for healthcare use cases, this paper is one of the cleaner demonstrations that the deployability gap is closing.

## Why it matters / what's new (ZH)

跨域故事是真正有意义的贡献。本 KB 近期同类条目（`2026-05-04_arxiv-respirfi-respiratory-wifi-csi`、`2026-05-03_arxiv-multiuser-wifi-sensing-counting`）在单环境训练下也能达到类似准确率；本文的核心亮点是**未见过房间、零微调，准确率接近 99%** —— 而这正是历史上阻碍 CSI 感知规模化部署的那一关。DVG 是一个小但有原则的物理侧预处理步骤，而不是又一种注意力变体；将其与 CBAM+Transformer 配对是较常规的配方，但论文的消融研究把绝大部分跨域鲁棒性归因于 DVG 与物理感知增强，而不是 Transformer 本身。对希望把 CSI 感知用于医疗场景并推到 802.11bf 轨道上的工作来说，这篇是「可部署性差距正在收窄」的较干净示范之一。

## Images
![System overview — DVG + EfficientNet + CBAM + Transformer pipeline | 系统总览——DVG + EfficientNet + CBAM + Transformer 流水线](https://arxiv.org/html/2605.00869v1/x1.png)
![Network architecture detail | 网络架构细节](https://arxiv.org/html/2605.00869v1/x2.png)
![DVG, CBAM and Transformer module breakdown | DVG、CBAM 与 Transformer 模块拆解](https://arxiv.org/html/2605.00869v1/x3.png)
![Four-environment dataset overview | 四环境数据集概览](https://arxiv.org/html/2605.00869v1/x4.png)
