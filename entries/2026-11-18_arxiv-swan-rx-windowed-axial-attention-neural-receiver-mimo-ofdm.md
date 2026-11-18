---
id: 2026-11-18_arxiv-swan-rx-windowed-axial-attention-neural-receiver-mimo-ofdm
date_published: 2026-11-15
date_found: 2026-11-18
type: academic-paper
technology: cellular
title_en: "SWAN-Rx: Efficient and Bandwidth-Scalable Neural Reception for MIMO-OFDM"
title_zh: "SWAN-Rx：面向 MIMO-OFDM 的高效且带宽可扩展的神经网络接收机"
url: "https://arxiv.org/abs/2611.20058"
source_quality: full
topics: [neural-receiver, MIMO-OFDM, axial-attention, bandwidth-extrapolation, 5G-NR, TR-38.901, Sionna, LLR]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

Kou and Shen (University of Virginia) propose SWAN-Rx, a neural MIMO-OFDM receiver whose weights, trained on a small allocation, can be reused across bandwidths and channels without retraining. Each resource element is one token combining the received vector, pilot symbols and pilot-derived least-squares channel features, with role and time embeddings but no absolute frequency embedding. Five time-axis attention layers alternate with five sliding-window frequency-axis layers (window radius 12, relative rotary position encoding), so forward-pass cost grows linearly with bandwidth. A preliminary version was accepted for IEEE GLOBECOM 2026.

## Summary (ZH)

Kou 与 Shen（弗吉尼亚大学）提出 SWAN-Rx，一种神经网络 MIMO-OFDM 接收机，在小带宽分配上训练得到的权重无需重新训练即可复用到不同带宽和信道。每个资源单元（RE）作为一个 token，融合接收向量、导频符号与由导频得到的最小二乘信道特征，加入角色与时间嵌入，但不使用绝对频率嵌入。五层时间轴注意力与五层滑动窗口频率轴注意力（窗口半径 12，相对旋转位置编码）交替，使前向计算量随带宽线性增长。该工作的初步版本已被 IEEE GLOBECOM 2026 接收。

## Key technical points (EN)

- Setup: Sionna link simulation with 3GPP TR 38.901 channels (UMa for the main tests; TDL-B, UMi, CDL-B and others for transfer), 2 transmit and 4 receive antennas, 2 streams, 64-QAM, 30 kHz subcarrier spacing, 2.6 GHz, LDPC coding; trained on 4 PRBs. Baselines: NRX (reimplemented), DeepRx-MIMO, EqDeepRx, plus LS-LMMSE and perfect-CSI LMMSE references.
- Complexity: 16.9% fewer parameters than NRX and 39.7% fewer than DeepRx-MIMO (507,916 parameters); 0.726 GFLOPs per sample at 4 PRBs, 56.3% fewer than NRX and 35.7% fewer than DeepRx-MIMO.
- Bandwidth extrapolation: with frozen weights at up to 273 PRBs and 20 dB, post-decoding BER is 3.07e-4 against 3.68e-4 for NRX. On unseen channels at 16 PRBs, the authors estimate a 0.4-0.9 dB SNR advantage over NRX at 1e-2 pre-decoding BER.
- Latency at batch size 1 on one GPU is 40.2-60.5% lower than NRX and 12.4-53.3% lower than DeepRx-MIMO; latencies are for the fastest implementation found in a per-model search (details in the supplementary material).
- Optional channel-estimation extension (CE4+SD6): NMSE of about -16.3 to -16.6 dB over 4-273 PRBs, about 8 dB better than LS interpolation and within 0.4 dB of calibrated LMMSE, which still gives lower NMSE at every bandwidth.
- Stated limits: ideal synchronization and frequency-domain model with path loss, shadowing, inter-cell interference and ICI/ISI disabled; no transport-block CRC or NR segmentation; one training seed per model; EqDeepRx shows high-SNR error floors in some transfer cases.

## Key technical points (ZH)

- 设置：基于 Sionna 的链路仿真，采用 3GPP TR 38.901 信道（主测试为 UMa；迁移测试含 TDL-B、UMi、CDL-B 等），2 发 4 收天线、2 流、64-QAM、30 kHz 子载波间隔、2.6 GHz、LDPC 编码；以 4 个 PRB 训练。对比基线：NRX（复现）、DeepRx-MIMO、EqDeepRx，以及 LS-LMMSE 和理想 CSI 的 LMMSE 参考。
- 复杂度：参数量比 NRX 少 16.9%、比 DeepRx-MIMO 少 39.7%（507,916 个参数）；4 PRB 时每样本 0.726 GFLOPs，比 NRX 少 56.3%、比 DeepRx-MIMO 少 35.7%。
- 带宽外推：冻结权重扩展到最高 273 PRB，20 dB 时译码后 BER 为 3.07e-4，NRX 为 3.68e-4。在 16 PRB 的未见信道上，作者估计在 1e-2 译码前 BER 处相对 NRX 有 0.4-0.9 dB 的 SNR 优势。
- 经实现层面搜索优化后，批大小为 1、单 GPU 的时延比 NRX 低 40.2-60.5%、比 DeepRx-MIMO 低 12.4-53.3%；时延为逐模型搜索得到的最快实现所测（细节见补充材料）。
- 可选的信道估计扩展（CE4+SD6）：在 4-273 PRB 范围内 NMSE 约为 -16.3 至 -16.6 dB，比 LS 插值好约 8 dB，与校准后的 LMMSE 相差 0.4 dB 以内，而校准 LMMSE 在每个带宽下的 NMSE 仍更低。
- 作者说明的局限：理想同步与频域模型，关闭了路径损耗、阴影、小区间干扰和 ICI/ISI；无传输块 CRC 和 NR 分段；每个模型仅一个训练种子；EqDeepRx 在部分迁移场景出现高信噪比误差平台。

## Why it matters / what's new (EN)

The contribution is a receiver whose attention cost scales linearly with allocation size and whose parameters are bandwidth-independent, targeting the practical problem of one neural receiver serving many PRB allocations. The evidence is link-level simulation in an idealized setting that the authors describe as "compatible with" the 5G NR physical layer rather than a full NR chain, so the numbers are not interoperability or over-the-air results.

## Why it matters / what's new (ZH)

其贡献在于注意力计算量随分配带宽线性增长、参数量与带宽无关的接收机，针对“一个神经接收机服务多种 PRB 分配”这一实际问题。证据来自理想化设置下的链路级仿真，作者称其“与” 5G NR 物理层“兼容”，而非完整的 NR 链路，因此这些数字并非互操作性或空口实测结果。

## Images

None.
