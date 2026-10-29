---
id: 2026-10-29_arxiv-ofdm-neuromorphic-wake-up-signal-nokia-bell-labs
date_published: 2026-10-27
date_found: 2026-10-29
type: academic-paper
technology: cellular
title_en: "OFDM-Based Neuromorphic Wake-Up Signal"
title_zh: "基于 OFDM 的神经形态唤醒信号"
url: "https://arxiv.org/abs/2610.36914"
source_quality: full
topics: [wake-up-radio, wake-up-signal, neuromorphic-computing, spiking, OFDM, low-power, noncoherent-detection, 6G]
topic_primary: 6g-vision
topics_secondary: [redcap-iot]
novelty_score: 3
---

## Summary (EN)

Gaspard Goupy, Elias Raninen and Dani Korpi (Nokia Bell Labs, Espoo) propose a neuromorphic wake-up signal (nWUS) for wake-up radios, the auxiliary low-power receivers that watch the channel while the main receiver sleeps. Neuromorphic detectors save energy by computing only on discrete spike events, but ordinary OFDM waveforms are not spike-like. The nWUS is built by superposing frequency-domain vectors with linear phase progressions across subcarriers, so a standard OFDM transmitter's IFFT yields a time-domain waveform with sparse amplitude peaks at predefined positions; those peak positions encode the wake-up signature.

At the receiver, a noncoherent neuromorphic detector encodes the received amplitude peaks into spikes and runs a sparse correlation against a weighted template only when spikes occur. Simulated over a 3GPP urban macro channel (FFT 1024, 870 active subcarriers, 15 kHz spacing, one 66.67 microsecond symbol, 5 spikes), at equal average transmit power the nWUS raises mean detection probability by 18.6 and 3.3 percentage points over two on-off keying baselines of comparable and tenfold duration, while cutting counted operations by 2.5x and 43.5x. During idle periods event-driven processing removes a further 86% of correlation operations.

## Summary (ZH)

Gaspard Goupy、Elias Raninen 与 Dani Korpi（诺基亚贝尔实验室，埃斯波）为唤醒接收机提出神经形态唤醒信号（nWUS）；唤醒接收机是主接收机休眠时持续监听信道的辅助低功耗接收机。神经形态检测器只在离散脉冲事件上计算以节省能耗，但普通 OFDM 波形不具备类脉冲结构。nWUS 通过在子载波上叠加带线性相位递进的频域向量构造，使标准 OFDM 发射机的 IFFT 输出在预定位置出现稀疏幅度峰值的时域波形，峰值位置即编码唤醒特征。

接收端采用非相干神经形态检测器，把接收幅度峰值编码成脉冲，仅在出现脉冲时与加权模板做稀疏相关。在 3GPP 城区宏小区信道下仿真（FFT 1024、870 个有效子载波、15 kHz 间隔、单个 66.67 微秒符号、5 个脉冲），平均发射功率相同时，nWUS 的平均检测概率比时长相当和长十倍的两种开关键控（OOK）基线分别高 18.6 与 3.3 个百分点，运算次数分别减少 2.5 倍与 43.5 倍；空闲期间事件驱动处理还可再减少 86% 的相关运算。

## Key technical points (EN)

- Waveform: nWUS occupies one OFDM symbol; subcarrier coefficients are the FFT of a sparse spike sequence, so the IFFT reproduces N spikes with a minimum spacing, with no change to the OFDM transmitter.
- Detector: spike encoder with an amplitude threshold and an average spike budget (14 spikes per observation window), followed by a sparse correlator with a weighted template (negative weight for off-peak positions); noncoherent, so no channel estimation is needed at the receiver.
- Parameters (5 spikes, spacing of at least 20 samples, correlator threshold of 3) were tuned by random search on independent data.
- Results: +18.6 and +3.3 percentage points mean detection probability versus two OOK baselines at equal average power; 2.5x and 43.5x fewer operations; 86% fewer correlation operations when only noise is received; P_d = 0.99 is reached at about -8 dB SNR against non-target signals (about 0 dB for the 1024-bit OOK baseline) and at -10 dB in the noise-only test.
- Limitations noted by the authors: the spike encoder relies on absolute amplitude and needs threshold calibration; adaptive encoders and analog-domain spike encoding are suggested as future work.
- Evidence is simulation with a 3GPP channel model; no hardware measurement or comparison with a standardised wake-up signal is given.

## Key technical points (ZH)

- 波形：nWUS 占用一个 OFDM 符号；子载波系数为稀疏脉冲序列的 FFT，因此 IFFT 还原出具有最小间隔的 N 个脉冲，无需改动 OFDM 发射机。
- 检测器：带幅度门限和平均脉冲预算（每个观测窗 14 个脉冲）的脉冲编码器，后接带加权模板（非峰值位置取负权重）的稀疏相关器；为非相干检测，接收端无需信道估计。
- 参数（5 个脉冲、间隔至少 20 个采样、相关门限为 3）通过在独立数据上随机搜索确定。
- 结果：在平均功率相同的条件下，相比两种 OOK 基线检测概率平均高 18.6 与 3.3 个百分点；运算量减少 2.5 倍与 43.5 倍；仅有噪声时相关运算减少 86%；对非目标信号约在 -8 dB SNR 达到 0.99 检测概率（1024 位 OOK 基线约 0 dB），仅噪声测试中为 -10 dB。
- 作者提到的局限：脉冲编码器依赖绝对幅度并需要校准门限；建议将自适应编码器和模拟域脉冲编码作为后续工作。
- 证据为基于 3GPP 信道模型的仿真，没有硬件实测，也未与标准化唤醒信号对比。

## Why it matters / what's new (EN)

Wake-up radios are a recurring theme for low-power IoT in OFDM-based systems, but their detectors still use dense processing. This work shows that a plain OFDM transmitter can generate a waveform shaped for event-driven neuromorphic receivers, which is a design path for lowering idle-listening energy without a separate modulation chain. The authors frame it as a step toward ultra-low-power neuromorphic wake-up radios for OFDM-based systems; their related work cites both 3GPP (TR 38.869) and IEEE 802.11ba wake-up signals. The numbers are simulation-only.

## Why it matters / what's new (ZH)

唤醒接收机是 OFDM 系统低功耗物联网反复出现的主题，但其检测器仍采用稠密处理。本工作表明，普通 OFDM 发射机即可生成适合事件驱动神经形态接收机的波形，为不增加独立调制链路而降低空闲监听能耗提供了一条设计路径。作者将其定位为面向 OFDM 系统的超低功耗神经形态唤醒接收机的一步；相关工作同时引用了 3GPP（TR 38.869）与 IEEE 802.11ba 唤醒信号。数据仅来自仿真。

## Images

None.
