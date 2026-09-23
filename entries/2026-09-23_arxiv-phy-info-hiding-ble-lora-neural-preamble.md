---
id: 2026-09-23_arxiv-phy-info-hiding-ble-lora-neural-preamble
date_published: 2026-09-20
date_found: 2026-09-23
technology: bluetooth
type: academic-paper
title_en: "Secrets in Radio Waves: Protocol-Agnostic PHY Information Hiding Demonstrated on BLE and LoRa Hardware"
title_zh: "无线电波中的秘密：协议无关的物理层信息隐藏，在 BLE 与 LoRa 硬件上验证"
url: "https://arxiv.org/abs/2609.23319"
source_quality: full
topics: [bt-security, covert-channel, steganography, physical-layer, neural-network]
topic_primary: bt-security
topics_secondary: [security-privacy]
novelty_score: 3
---

## Summary (EN)

This paper (Guanxiong Shen, Hailang Jia, Junqing Zhang, Linning Peng, Liquan Chen, Aiqun Hu, Jun Luo; primary affiliation Southeast University, Nanjing, with co-authors from the University of Liverpool and Nanyang Technological University; submitted Sep 20, 2026) proposes a neural-network-based technique for physical-layer (PHY) information hiding, aimed at applications such as transmitter-identification watermarking and covert side channels. Rather than customizing a hiding scheme per protocol, the authors migrate an encoder-decoder neural network architecture into the PHY hiding problem: a secret message is first forward-error-correction (FEC) encoded into an N-bit codeword, then channel-wise concatenated with the standard preamble waveform (split into its real and imaginary I/Q components), and passed through nine 1D convolutional layers with GELU activations to produce a distorted preamble that carries the hidden bits as imperceptible waveform distortion. A matching decoder network extracts the hidden bits at the receiver through further convolutional processing, normalization, pooling, and sign thresholding. The authors explicitly target protocol-agnostic generality and validate the approach with real hardware prototypes on two commercially popular, structurally different protocols: LoRa and Bluetooth Low Energy.

The authors used a USRP B210 SDR with a 2.4 GHz omnidirectional antenna (2 dBi gain), operating in LE1M mode (GFSK modulation), embedding hidden bits into BLE's fixed 128 I/Q-sample preamble (the standard '10101010' bit pattern). In simulation, the 60-bit BLE configuration reaches SBER <0.038 and SMER 0.012 at 10 dB, with PLR matching the no-secret baseline; on the USRP B210 hardware prototype, SMER was 0.016 at 22.5 dB, 0.066 at 12.9 dB and 0.12 at 10.9 dB SNR. For comparison, in simulation the LoRa configuration (120-bit secret payload against LoRa's much longer 2,048-sample preamble) achieved a secret-message error rate below 0.01 above 10 dB SNR while likewise maintaining primary-link reliability across all tested SNR levels.

The authors state several limitations themselves: the neural network's performance depends strongly on the specific preamble characteristics of the target protocol (it is not a single model reused unmodified across protocols, but an architecture retrained per protocol); reliable extraction in both protocols required at least 10 dB SNR; the USRP-based prototype is not capable of real-time operation because the battery-powered laptops driving the USRPs have limited onboard compute; BLE's much shorter 128-sample preamble (versus LoRa's 2,048 samples) severely constrains how much can be embedded compared to LoRa; and the authors report a sim-to-real gap and use optional extractor fine-tuning on hardware data to narrow it.

## Summary (ZH)

这篇论文（作者 Guanxiong Shen、Hailang Jia、Junqing Zhang、Linning Peng、Liquan Chen、Aiqun Hu、Jun Luo；第一单位为南京东南大学，合作者分别来自英国利物浦大学与新加坡南洋理工大学；提交于 2026 年 9 月 20 日）提出了一种基于神经网络的物理层（PHY）信息隐藏技术，面向发射机身份水印、隐蔽旁路信道等应用场景。作者没有针对每种协议分别定制隐藏方案，而是将一个编码器-解码器神经网络架构迁移到物理层信息隐藏问题上：首先对秘密消息进行前向纠错（FEC）编码，得到一个 N 比特码字，再将其按通道维度与标准前导码波形（拆分为实部与虚部 I/Q 分量）拼接，经过 9 层带有 GELU 激活函数的一维卷积层处理，生成一个携带隐藏比特、但波形失真难以察觉的前导码。接收端使用配套的解码器网络，通过进一步的卷积处理、归一化、池化及符号阈值判定，提取出隐藏比特。作者明确以"协议无关的通用性"为目标，并在两种商业上广泛使用、结构差异较大的协议——LoRa 与蓝牙低功耗（BLE）——上用真实硬件原型验证了该方法。

作者使用了一台配备 2.4 GHz 全向天线（增益 2 dBi）的 USRP B210 软件定义无线电，工作在 LE1M 模式（GFSK 调制）下，将隐藏比特嵌入 BLE 固定的 128 个 I/Q 采样点前导码（标准的"10101010"比特序列）中。在仿真中，60 比特 BLE 配置在 10 dB 信噪比下的秘密比特误码率 SBER 低于 0.038、秘密消息误码率 SMER 为 0.012，主链路丢包率与未嵌入隐藏信息的基线相同；在 USRP B210 硬件原型上，SMER 分别为：22.5 dB 时 0.016，12.9 dB 时 0.066，10.9 dB 信噪比时 0.12。作为对比，在仿真中，LoRa 配置（在 LoRa 长得多的 2,048 采样点前导码上，使用 120 比特秘密负载）在 10 dB 以上信噪比下实现了低于 0.01 的秘密消息误码率，同样在所有测试信噪比水平下保持了主链路的可靠性。

作者也明确说明了若干局限：该神经网络的性能高度依赖目标协议自身的前导码特征（并非同一个模型在各协议间原样复用，而是一种需要针对每种协议重新训练的架构）；两种协议要实现可靠提取，都需要至少 10 dB 的信噪比；基于 USRP 的原型无法实现实时运行，原因是驱动 USRP 的电池供电笔记本电脑算力有限；BLE 的前导码仅有 128 个采样点，远短于 LoRa 的 2,048 个，这严重限制了其相对 LoRa 可嵌入的信息量；此外，作者报告了仿真到真实硬件之间存在差距，并采用可选的解码器微调（在硬件采集数据上进行）来缩小该差距。

## Key technical points (EN)

- **Technique**: FEC-encode the secret into an N-bit codeword, channel-wise concatenate with the I/Q-split standard preamble, process through 9 1D convolutional layers (GELU activations) to produce an imperceptibly distorted preamble; a matching decoder (convolution + normalization + pooling + sign thresholding) extracts the hidden bits at the receiver.
- **Protocol-agnostic design, validated on two protocols**: real SDR prototypes on both LoRa and Bluetooth Low Energy — different preamble lengths, different modulations.
- **BLE hardware setup**: USRP B210, 2.4 GHz omnidirectional antenna (2 dBi), LE1M/GFSK mode, BLE's fixed 128 I/Q-sample preamble, 60-bit secret payload tested.
- **BLE simulation results (10 dB SNR)**: SBER <0.038; SMER 0.012; primary-link packet loss unchanged from baseline. **BLE hardware prototype results (USRP B210)**: SMER 0.016 at 22.5 dB, 0.066 at 12.9 dB, 0.12 at 10.9 dB SNR.
- **LoRa simulation results (comparison)**: 120-bit secret payload on a 2,048-sample preamble; message error rate <0.01 above 10 dB SNR, primary-link reliability maintained across SNR range.
- **Stated limits**: model must be retrained per target protocol (not a universal single model); needs ≥10 dB SNR for reliable extraction; USRP prototype not real-time capable because the driving laptop CPUs have limited compute; BLE's short preamble (128 vs LoRa's 2,048 samples) sharply caps embedding capacity; authors report a sim-to-real gap, narrowed with optional extractor fine-tuning on hardware data.

## Key technical points (ZH)

- **技术方案**：将秘密信息经 FEC 编码为 N 比特码字，与拆分为 I/Q 分量的标准前导码按通道拼接，经过 9 层带 GELU 激活的一维卷积处理，生成波形失真难以察觉的前导码；接收端使用配套解码器（卷积+归一化+池化+符号阈值判定）提取隐藏比特。
- **协议无关设计，在两种协议上验证**：在 LoRa 与蓝牙低功耗（BLE）上均构建了真实 SDR 硬件原型——二者前导码长度、调制方式均不同。
- **BLE 硬件配置**：USRP B210，2.4 GHz 全向天线（增益 2 dBi），LE1M/GFSK 模式，BLE 固定的 128 个 I/Q 采样点前导码，测试了 60 比特秘密负载。
- **BLE 仿真结果（10 dB 信噪比）**：SBER 低于 0.038；SMER 为 0.012；主链路丢包率与基线相同，未受影响。**BLE 硬件原型结果（USRP B210）**：SMER 在 22.5 dB 时为 0.016，12.9 dB 时为 0.066，10.9 dB 信噪比时为 0.12。
- **LoRa 仿真结果（对比）**：在 2,048 采样点前导码上使用 120 比特秘密负载；10 dB 以上信噪比下消息误码率低于 0.01，且在整个测试信噪比范围内保持主链路可靠性。
- **作者说明的局限**：模型需针对每种目标协议重新训练（并非单一通用模型）；两种协议均需至少 10 dB 信噪比才能可靠提取；USRP 原型无法实时运行，原因是驱动其运行的笔记本电脑算力有限；BLE 较短的前导码（128 对比 LoRa 的 2,048 个采样点）严重限制了可嵌入信息量；作者报告仿真到真实硬件之间存在差距，并通过在硬件采集数据上进行可选的解码器微调来缩小该差距。

## Why it matters / what's new (EN)

The KB's existing bt-security coverage is mostly about attacks (tracking, privacy, DoS/flooding) rather than legitimate PHY-layer mechanisms for embedding auxiliary information. This paper's BLE prototype demonstrates a working covert/watermarking channel riding inside BLE's own preamble waveform — with a concrete cost measured both in simulation (0.012 message error rate, no measurable impact on the carrier link's own packet loss) and on the USRP B210 hardware prototype (SMER from 0.016 to 0.12 as SNR falls from 22.5 to 10.9 dB) — using a technique the authors designed to generalize across protocols rather than being BLE-specific. Because BLE's preamble is fixed and only 128 samples (versus LoRa's 2,048), the entry also gives a concrete, quantified illustration of how much less hiding capacity a short, tightly-specified preamble like BLE's affords compared to a longer one, which is directly relevant to any future evaluation of PHY watermarking or covert-channel resistance in Bluetooth's own physical layer.

## Why it matters / what's new (ZH)

知识库现有的 bt-security 相关条目大多聚焦于攻击（追踪、隐私、拒绝服务/泛洪），而非用于嵌入辅助信息的合法物理层机制。本文的 BLE 原型演示了一条真实可用的隐蔽/水印信道，寄生于 BLE 自身的前导码波形之中——并分别在仿真中（消息误码率 0.012，且未对载体链路自身的丢包率产生可测量影响）与 USRP B210 硬件原型上（SMER 随信噪比从 22.5 dB 降至 10.9 dB 而从 0.016 升至 0.12）给出了具体的实测代价——所用技术方案在设计上力求跨协议通用，而非专门针对 BLE。由于 BLE 的前导码是固定的、仅有 128 个采样点（相比 LoRa 的 2,048 个），本条目也为"像 BLE 这样短而规范严格的前导码，相较更长的前导码能提供的隐藏容量要小得多"提供了具体的量化例证，这对于未来评估蓝牙自身物理层的水印能力或隐蔽信道抗性具有直接参考价值。
