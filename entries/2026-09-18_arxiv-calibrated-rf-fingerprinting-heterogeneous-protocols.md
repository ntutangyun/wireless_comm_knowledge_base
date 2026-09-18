---
id: 2026-09-18_arxiv-calibrated-rf-fingerprinting-heterogeneous-protocols
date_published: 2026-09-17
date_found: 2026-09-18
technology: wifi
type: academic-paper
title_en: "Calibrated RF-Fingerprinting Under Interference With Heterogeneous Transmission Protocols"
title_zh: "异构传输协议干扰环境下的校准射频指纹识别"
url: "https://arxiv.org/abs/2609.20765"
source_quality: full
topics: [RF-fingerprinting, security, co-channel-interference, multi-protocol]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

This paper (Tariq Abdul-Quddoos, Xiangfang Li, Lijun Qian) addresses radio-frequency fingerprinting (RFF) -- identifying specific transmitters from hardware-level signatures in their emitted signals -- in a setting the authors say prior RFF work has not covered: multiple transmitters active simultaneously, overlapping in time and frequency, and using **different protocols**. Because it is unknown in advance how many of a set of known transmitters are actually active in a given capture, the authors formulate the problem as multi-label classification: given an overlapping I/Q capture, decide which of several known devices contributed to it. Their pipeline takes the raw I/Q samples, applies a Discrete Fourier Transform with a Hanning window, and feeds the four resulting channels (real, imaginary, magnitude, phase) into a lightweight 1D convolutional network (five conv layers with batch normalization, max pooling and dropout; two fully connected layers; 1.25M parameters, ~5MB) that outputs an independent probability per transmitter label.

Raw network probabilities are then passed through a calibration stage based on Conformal Risk Control: rather than thresholding at a fixed value, the authors choose a threshold from a discrete candidate set by computing the empirical false-negative rate (FNR) on a held-out calibration set for each candidate and selecting the smallest threshold whose expected FNR stays under a user-specified bound. This gives a statistical guarantee on the false-negative rate independent of how the underlying classifier behaves, which the paper frames as giving "a degree of confidence in not missing a true spectrum policy violation".

The evaluation used the indoor over-the-air lab of the University of Utah's POWDER SDR testbed: one NI/Ettus X310 USRP as receiver and six transmitters (two X310, four B210) generating waveforms that rotate across three protocols -- 5G NR, 4G LTE, and 802.11a Wi-Fi -- across three experimental rounds, all on a 2.425 GHz carrier at 20 MHz bandwidth and 33.33 MS/s sampling. The dataset totals 768 captures (40,000 training examples with no out-of-distribution interference, plus calibration and test sets of 10,000 examples per gain/occupancy configuration, including a held-out condition with an unseen "OOD" B210 interferer). After calibration, accuracy ranged from 73% to 97% depending on channel/gain conditions, and micro-recall tracked the paper's designed target of approximately (1 - alpha): about 0.95 recall at alpha=0.05, 0.85 at alpha=0.15, and 0.75 at alpha=0.25. Introducing the unseen OOD interferer cost at most 0.04 recall, 0.22 precision, and 0.07 accuracy across the tested configurations, and performance degraded for the B210 radios, which sit at least 20 ft from the receiver and nearer the interference source.

## Summary (ZH)

本文（Tariq Abdul-Quddoos、Xiangfang Li、Lijun Qian）研究射频指纹识别（RFF）——即根据发射信号中的硬件特征识别特定发射机——针对作者认为此前 RFF 研究未曾覆盖的场景：多个发射机同时活动，在时间与频率上相互重叠，且使用**不同协议**。由于事先并不知道一组已知发射机中究竟有哪些正在活动，作者将该问题形式化为多标签分类：给定一段重叠的 I/Q 采样，判断其中包含了哪些已知设备的信号。其处理流程将原始 I/Q 采样经加汉宁窗的离散傅里叶变换后，把得到的四个通道（实部、虚部、幅值、相位）输入一个轻量级一维卷积网络（5 个含批归一化、最大池化与 dropout 的卷积层，2 个全连接层，参数量 125 万、约 5MB），该网络为每个发射机标签独立输出一个概率。

网络输出的原始概率随后经过基于"合规风险控制"（Conformal Risk Control）的校准阶段：作者并非采用固定阈值，而是从一组离散候选阈值中，在留出的校准集上分别计算各候选阈值对应的经验假阴性率（FNR），并选取在用户指定上界内、数值最小的阈值。这一方法可在不依赖底层分类器具体表现的前提下，给出假阴性率的统计保证——论文称这可给出"在不漏检真实频谱政策违规方面的一定置信度"。

评估基于犹他大学 POWDER 测试平台的室内空口实验室：一台 NI/Ettus X310 USRP 作为接收机，六台发射机（两台 X310、四台 B210）在三轮实验中轮流生成三种协议的波形——5G NR、4G LTE 与 802.11a（Wi-Fi），均工作在 2.425 GHz 载波、20 MHz 带宽、33.33 MS/s 采样率。数据集共 768 段采集（4 万条无分布外干扰的训练样本，另有针对每种增益/占用配置各 1 万条的校准与测试样本，其中一种配置引入了未在训练中出现的"分布外"B210 干扰源）。经过校准后，准确率在不同信道/增益条件下介于 73% 至 97% 之间；微观召回率符合论文设计的近似 (1 − alpha) 目标：alpha=0.05 时约 0.95，alpha=0.15 时约 0.85，alpha=0.25 时约 0.75。引入未见过的分布外干扰源后，各测试配置下召回率最多下降 0.04、精确率最多下降 0.22、准确率最多下降 0.07；且 B210 发射机（距接收机至少 20 英尺、且更靠近干扰源）的性能下降更明显。

## Key technical points (EN)

- **Problem framing**: multi-label classification for RFF under co-channel interference from multiple simultaneously active, heterogeneous-protocol transmitters, rather than the single-transmitter assumption of prior RFF work.
- **Model**: lightweight 1D CNN (5 conv layers, kernel size 9; 256/256/128/64/32 channels; batch norm, max pooling, dropout 0.3; 2 FC layers; sigmoid output) on DFT-transformed (real/imag/magnitude/phase) I/Q input; 1.25M parameters, ~5MB footprint.
- **Calibration**: Conformal Risk Control selects the smallest threshold from a discrete candidate set whose empirical false-negative rate on a calibration set stays under a user-defined bound alpha, giving a distribution-free FNR guarantee.
- **Testbed**: POWDER SDR platform; 1x X310 receiver, 6 transmitters (2x X310, 4x B210) rotating through 5G NR / 4G LTE / 802.11a (Wi-Fi) across 3 rounds; 2.425 GHz, 20 MHz bandwidth, 33.33 MS/s; 768 total captures.
- **Headline results**: post-calibration accuracy 73-97% depending on conditions; micro-recall tracks (1 - alpha) as designed (~0.95/0.85/0.75 at alpha = 0.05/0.15/0.25).
- **Robustness**: an unseen out-of-distribution interferer costs at most 0.04 recall, 0.22 precision, 0.07 accuracy across tested configurations; performance degrades for the B210 radios, which sit at least 20 ft from the receiver and nearer the interference source.

## Key technical points (ZH)

- **问题设定**：面向多个同时活动、使用不同协议的发射机造成的同信道干扰的 RFF 多标签分类问题，区别于以往 RFF 研究默认的单发射机假设。
- **模型**：轻量级一维 CNN（5 个卷积层，卷积核大小 9，通道数 256/256/128/64/32；含批归一化、最大池化、dropout 0.3；2 个全连接层；sigmoid 输出），输入为 DFT 变换后的 I/Q 数据（实部/虚部/幅值/相位）；参数量 125 万，约 5MB。
- **校准方法**：采用合规风险控制（Conformal Risk Control），在离散候选阈值集合中选取校准集上经验假阴性率不超过用户指定上界 alpha 的最小阈值，从而给出与具体分类器无关的假阴性率保证。
- **测试平台**：POWDER SDR 实测平台；1 台 X310 作接收机，6 台发射机（2 台 X310、4 台 B210）在 3 轮实验中轮流发送 5G NR / 4G LTE / 802.11a（Wi-Fi）波形；载波 2.425 GHz，带宽 20 MHz，采样率 33.33 MS/s；共采集 768 段数据。
- **主要结果**：校准后准确率在不同条件下介于 73%–97%；微观召回率符合设计目标 (1 − alpha)（alpha = 0.05/0.15/0.25 时分别约为 0.95/0.85/0.75）。
- **鲁棒性**：引入未见过的分布外干扰源后，各测试配置下召回率最多下降 0.04、精确率最多下降 0.22、准确率最多下降 0.07；距接收机至少 20 英尺、且更靠近干扰源的 B210 发射机，性能下降更明显。

## Why it matters / what's new (EN)

The KB's existing `security-privacy` coverage of RF fingerprinting has been single-transmitter and single-protocol in scope; this paper's contribution is specifically the multi-label, cross-protocol, co-channel-interference setting -- validated on real over-the-air captures of 802.11a Wi-Fi alongside 4G LTE and 5G NR sharing the same carrier -- plus a calibration procedure (Conformal Risk Control) that gives a statistical false-negative guarantee rather than an uncalibrated confidence score. That combination (heterogeneous-protocol co-channel RFF + calibrated FNR control) has not appeared in this KB's prior RFF entries.

## Why it matters / what's new (ZH)

知识库现有 `security-privacy` 主题下的射频指纹研究此前均以单发射机、单协议为限；本文的贡献恰恰在于面向多标签、跨协议、同信道干扰这一场景——并在真实空口采集的 802.11a（Wi-Fi）与共享同一载波的 4G LTE、5G NR 信号上进行了验证——同时引入了一种校准方法（合规风险控制），可给出统计意义上的假阴性率保证，而非未经校准的置信度分数。这种"异构协议同信道 RFF + 校准假阴性率控制"的组合，此前尚未出现在知识库已有的 RFF 相关条目中。

## Images

![Motivating example: co-channel fingerprinting under multiple heterogeneous-protocol transmitters | 动机示例：多个异构协议发射机造成的同信道指纹识别场景](https://arxiv.org/html/2609.20765v1/fig/CoChannel_Fingerprinting_motivating_example.png)
![POWDER over-the-air testbed layout | POWDER 空口实测平台布局](https://arxiv.org/html/2609.20765v1/fig/Otalab_figure.png)
![Overall accuracy / precision / recall across gain levels after calibration | 校准后不同增益条件下的整体准确率/精确率/召回率](https://arxiv.org/html/2609.20765v1/fig/overall_eval_results.png)
