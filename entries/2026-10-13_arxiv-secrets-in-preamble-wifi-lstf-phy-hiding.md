---
id: 2026-10-13_arxiv-secrets-in-preamble-wifi-lstf-phy-hiding
date_published: 2026-10-09
date_found: 2026-10-13
technology: wifi
type: academic-paper
title_en: "Secrets in Preamble: Practical and Robust PHY Information Hiding for Wi-Fi"
title_zh: "前导码中的秘密：面向 Wi-Fi 的实用且鲁棒的物理层信息隐藏"
url: "https://arxiv.org/abs/2610.13367"
source_quality: full
topics: [802.11, L-STF, PHY steganography, covert communication, neural network, security]
topic_primary: security-privacy
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

A paper submitted to arXiv on 9 October 2026 (cs.CR, with eess.SP cross-listing; Pan, Shen, Peng, Qi and Zhang) proposes hiding secret bits inside the Wi-Fi legacy short training field (L-STF) of an ordinary packet. The abstract and introduction state the motivation as two limitations of earlier Wi-Fi information-hiding schemes: restricted steganographic capacity (the paper cites Shadow Wi-Fi as embedding 2 bits per packet) and insufficient robustness to environmental variation; constellation-manipulating schemes are described as degrading decoding of the primary link.

The design keeps the periodic structure of the L-STF so that packet detection and coarse carrier-frequency-offset compensation still work. A pair of one-dimensional CNNs does the embedding and extraction: the embedder takes the secret and the standard frequency-domain short training symbols on the 12 active L-STF subcarriers and outputs a distorted symbol sequence (nine convolutional layers, 256 channels in the hidden blocks, skip connections); the extractor, after L-STF equalization at the receiver, recovers the bits. The two networks are trained jointly end to end in simulation with a TGn channel simulator in the loop and a composite loss with a secret-recovery term and a covertness term, and the paper states that the simulation-trained model is deployed on hardware without fine-tuning.

The prototype uses two USRP B210 SDRs with GNU Radio; the transmitter sends 20 MHz non-HT beacon frames generated with the MATLAB WLAN Toolbox. A commodity Android smartphone received and decoded the beacons (with a 14-bit secret embedded) and listed the SSID normally. In an indoor over-the-air test with emulated SNR from 10 to 25 dB, the paper reports embedding up to 46 secret bits per packet with SBER below 0.17 at 10 dB; separate indoor (office) and outdoor (park) trials used 14-bit secrets. Simulation sections also evaluate robustness under eavesdropping and jamming. The authors say code, simulation tools and the experimental dataset will be released upon acceptance.

## Summary (ZH)

一篇于 2026 年 10 月 9 日提交至 arXiv 的论文（cs.CR，交叉列入 eess.SP；作者 Pan、Shen、Peng、Qi、Zhang）提出把秘密比特隐藏在普通 Wi-Fi 数据包的传统短训练字段（L-STF）中。摘要与引言将动机表述为已有 Wi-Fi 信息隐藏方案的两点局限：隐写容量受限（论文引用 Shadow Wi-Fi 每包仅嵌入 2 比特）以及对环境变化的鲁棒性不足；并指出操纵星座图的方案会降低主链路的解码性能。

方案保持 L-STF 的周期结构，使包检测与粗载波频偏补偿仍可正常工作。嵌入与提取由一对一维 CNN 完成：嵌入器以秘密比特和 12 个有效 L-STF 子载波上的标准频域短训练符号为输入，输出被扭曲后的符号序列（九层卷积、隐藏块 256 通道、带跳连）；接收端先做 L-STF 均衡，再由提取器恢复比特。两个网络在仿真中端到端联合训练，训练环中加入 TGn 信道仿真器，损失函数由秘密恢复项与隐蔽性项组成；论文称仿真训练得到的模型无需微调即可部署到硬件。

原型使用两台 USRP B210 软件无线电与 GNU Radio；发射端发送由 MATLAB WLAN Toolbox 生成的 20 MHz non-HT 信标帧。一部商用 Android 手机在嵌入 14 比特秘密的情况下仍能接收并解码信标，并在 Wi-Fi 列表中正常显示 SSID。在室内空口测试中（通过添加噪声模拟 10–25 dB SNR），论文报告每包最多嵌入 46 比特秘密，10 dB 时 SBER 低于 0.17；另外的室内（办公楼）与室外（公园）试验使用 14 比特秘密。仿真部分还评估了窃听与干扰下的鲁棒性。作者表示代码、仿真工具与实验数据集将在论文被接收后公开。

## Key technical points (EN)

- **Embedding field**: L-STF of the legacy preamble; its periodic repetition is preserved so packet detection and coarse CFO compensation are unaffected.
- **Neural pair**: 1D-CNN embedder (9 conv layers, kernel 3, 256 hidden channels, skip connections; secret repeated across the 12 active subcarriers and concatenated with the real/imaginary STS channels) and a paired extractor operating on the equalized received L-STF.
- **Training**: end-to-end in simulation with a TGn channel simulator and a composite loss (secret recovery plus covertness); no over-the-air fine-tuning for the hardware tests.
- **Robustness measures**: channel-simulator-in-the-loop training and equalization applied to the L-STF itself, in addition to the payload.
- **Prototype**: 2x USRP B210 + GNU Radio, 20 MHz non-HT beacon frames; a commodity Android phone decoded the beacons normally with a 14-bit secret embedded.
- **Reported result**: in an indoor over-the-air test with emulated SNR from 10 to 25 dB, up to 46 secret bits per packet with SBER below 0.17 at 10 dB; separate indoor (office) and outdoor (park) trials used 14-bit secrets.
- **Stated scope**: prototype is 20 MHz SISO non-HT; the paper argues HT/VHT/HE/EHT all begin with the same L-STF so the scheme applies to them, and notes the MIMO case may need a different embedding strategy.

## Key technical points (ZH)

- **嵌入位置**：传统前导码中的 L-STF；保持其周期重复结构，因此包检测与粗频偏补偿不受影响。
- **神经网络对**：一维 CNN 嵌入器（9 层卷积、卷积核 3、隐藏通道 256、带跳连；秘密比特在 12 个有效子载波上重复并与 STS 实部/虚部通道拼接）以及作用于均衡后接收 L-STF 的配对提取器。
- **训练**：在仿真中端到端训练，带 TGn 信道仿真器与复合损失（秘密恢复 + 隐蔽性）；硬件测试无需空口微调。
- **鲁棒性措施**：训练环中加入信道仿真器，并对 L-STF 本身（而不仅是载荷）做均衡。
- **原型**：2 台 USRP B210 + GNU Radio，20 MHz non-HT 信标帧；嵌入 14 比特秘密时商用 Android 手机可正常解码信标。
- **报告结果**：室内空口测试中（添加噪声模拟 10–25 dB SNR）每包最多嵌入 46 比特秘密，10 dB 时 SBER 低于 0.17；另外的室内（办公楼）与室外（公园）试验使用 14 比特秘密。
- **论文声明的适用范围**：原型为 20 MHz SISO non-HT；论文指出 HT/VHT/HE/EHT 均以相同的 L-STF 开头，因此该方案可适用，同时说明 MIMO 情形可能需要不同的嵌入策略。

## Why it matters / what's new (EN)

The paper places the secret in the preamble of an otherwise normal packet, at the waveform level. The paper's own comparison is against earlier Wi-Fi hiding schemes (CSI-filter based at 2 bits per packet, constellation-manipulating schemes); the 46-bit figure is the authors' reported result under their SDR setup, not a standards-track mechanism.

## Why it matters / what's new (ZH)

论文将秘密置于一个其余部分正常的数据包的前导码中，属于波形层面的信息隐藏。论文自身的对比对象是此前的 Wi-Fi 隐藏方案（基于 CSI 滤波、每包 2 比特的方案，以及操纵星座图的方案）；46 比特是作者在其 SDR 实验条件下报告的结果，并非标准化机制。

## Images

![System overview of the L-STF secret embedding (Alice) and extraction (Bob) | L-STF 秘密嵌入（Alice）与提取（Bob）系统概览](https://arxiv.org/html/2610.13367v1/system_overview_one.png)
