---
id: 2026-11-19_arxiv-streamingdpd-320mhz-wifi7-gsa-neural-dpd-accelerator
date_published: 2026-11-17
date_found: 2026-11-19
technology: wifi
type: academic-paper
title_en: "StreamingDPD: A 1.28-GSa/s Instantaneous-Power-Gated Depthwise TCN Accelerator for Real-Time 320-MHz Digital Predistortion"
title_zh: "StreamingDPD：面向实时 320 MHz 数字预失真的 1.28 GSa/s 瞬时功率门控深度可分离 TCN 加速器"
url: "https://arxiv.org/abs/2611.23101"
source_quality: full
topics: [DPD, Wi-Fi 7, 320 MHz, 4096-QAM, power amplifier, FPGA, ASIC]
topic_primary: ai-for-wifi
topics_secondary: [wifi7-deployment]
novelty_score: 3
---

## Summary (EN)
The paper (Yizhuo Wu, Xinling Wang, Chang Gao; submitted 17 Nov 2026) addresses digital predistortion (DPD) for wideband transmitters such as a 320 MHz Wi-Fi 7 channel sampled at 1.28 GSa/s. It states that recurrent neural DPD models are parameter-efficient but their state feedback forces serial sample processing and limits streaming throughput, while feedforward CNN/TCN models avoid recurrence but need costly channel mixing and transcendental activations.

The proposed instantaneous-power-gated depthwise temporal convolutional network (IPG-DWTCN) feeds I/Q samples plus |x[n]|^2 into a channel-wise gate, then applies three residual causal dilated depthwise convolution blocks (kernel 5, dilations 1/2/4, receptive field 29 samples) to model power-amplifier memory, and a 1x1 projection adds an I/Q correction to the linear path. Activations are piecewise-quadratic (Quadsigmoid, Hardswish8) so they use shifts rather than exponentials or dividers. The selected configuration has 207 parameters and 554 FLOPs per complex sample, 30.1% fewer than the recurrent baseline with the best linearisation.

The network is mapped to a spatially unrolled fixed-point pipeline (52 cycles, initiation interval of one cycle, taps held in flip-flops, 12-bit parameters, 16-bit I/Q interface). In RF playback tests on three PAs (a 6.11 GHz Wi-Fi 7 front-end module with 320 MHz 4096-QAM, a 2.40 GHz PA with 40 MHz Wi-Fi 6 / 1024-QAM, and a 3.50 GHz GaN Doherty PA with ten-carrier 200 MHz 5G NR) it gives the lowest mean ACPR on all three (-45.90, -46.84, -45.39 dBc) and best or tied EVM against five ~200-parameter neural baselines. Four-lane FPGA hardware-in-the-loop on a 320 MHz 4096-QAM Wi-Fi 7 waveform reaches -45.82 dBc ACPR and -42.94 dB EVM at 1.28 GSa/s using 52% of DSP slices and no BRAM/URAM. A single-lane 12 nm ASIC (post-layout estimate) gives 0.10 mm^2, 40.63 ns latency, 142.21 mW (111.10 pJ/sample). The authors report 5.1x throughput and 7.0x lower energy per sample versus their prior 22 nm recurrent DPD ASIC (250 MSa/s, 60 MHz); the two designs differ in process node and signal bandwidth.

## Summary (ZH)
该论文（Yizhuo Wu、Xinling Wang、Chang Gao，2026 年 11 月 17 日提交）研究面向宽带发射机（如以 1.28 GSa/s 采样的 320 MHz Wi-Fi 7 信道）的数字预失真（DPD）。文中指出，循环神经网络 DPD 参数高效，但状态反馈迫使样点串行处理、限制流式吞吐；前馈 CNN/TCN 虽无循环，却需要代价高昂的通道混合与超越函数激活。

所提出的瞬时功率门控深度可分离时间卷积网络（IPG-DWTCN）将 I/Q 样点及 |x[n]|^2 送入逐通道门控，随后经三个残差因果空洞深度卷积块（核 5，空洞 1/2/4，感受野 29 个样点）刻画功放记忆效应，再由 1x1 投影向线性通路叠加 I/Q 校正量。激活函数为分段二次形式（Quadsigmoid、Hardswish8），只需一次乘法加移位，无需指数运算或除法器。所选配置含 207 个参数、每个复样点 554 次浮点运算，比线性化性能最佳的循环基线少 30.1%。

网络被映射为空间展开的定点流水线（52 周期、启动间隔 1 周期、抽头历史存于触发器、12 位参数、16 位 I/Q 接口）。在三种功放的射频回放测试中（6.11 GHz Wi-Fi 7 前端模块，320 MHz 4096-QAM；2.40 GHz 功放，40 MHz Wi-Fi 6 / 1024-QAM；3.50 GHz GaN Doherty 功放，十载波 200 MHz 5G NR），其在三者上均取得最低的平均 ACPR（-45.90、-46.84、-45.39 dBc），EVM 优于或持平于五个约 200 参数的神经网络基线。四通道 FPGA 硬件在环在 320 MHz 4096-QAM Wi-Fi 7 波形上以 1.28 GSa/s 达到 -45.82 dBc ACPR 与 -42.94 dB EVM，占用 52% DSP，不使用 BRAM/URAM。单通道 12 nm ASIC（布局后估算）面积 0.10 mm^2、时延 40.63 ns、功耗 142.21 mW（111.10 pJ/样点）。作者称相对其此前 22 nm 循环 DPD ASIC（250 MSa/s、60 MHz）吞吐提升 5.1 倍、单样点能耗降低 7.0 倍；两者工艺节点与信号带宽不同。

## Key technical points (EN)
- Power gating: |x[n]|^2 drives a channel-wise gate; in the DUT1 ablation it beats an un-gated model of similar size and an amplitude gate at the largest width.
- Model: three causal dilated depthwise blocks, 207 parameters, 554 FLOPs per complex sample, no recurrence or look-ahead.
- Width sweep: C=9 is the smallest width clearing -45 dBc ACPR on all seeds (selected on validation data).
- Benchmarks (mean over five seeds, ACPR / EVM): DUT1 -45.90 dBc / -42.91 dB; DUT2 -46.84 / -43.94; DUT3 -45.39 / -39.85.
- Training: a GRU PA surrogate is trained first, then each DPD end-to-end through it; AdamW, 100 epochs, five seeds; captures on a ZCU670 RFSoC.
- Hardware: XCZU67DR four-lane FPGA at 1.28 GSa/s; 12 nm single-lane ASIC post-layout estimates (power figures are estimates, not silicon measurements).
- Future work listed by the authors: silicon fabrication, shadow-bank background adaptation, multi-antenna MIMO integration.

## Key technical points (ZH)
- 功率门控：|x[n]|^2 驱动逐通道门控；在 DUT1 消融中，于最大宽度下优于规模相近的无门控模型及幅度门控。
- 模型：三个因果空洞深度卷积块，207 个参数，每复样点 554 FLOPs，无循环、无前瞻。
- 宽度扫描：C=9 是在所有种子上达到 -45 dBc ACPR 的最小宽度（依据验证集选定）。
- 基准（五个种子均值，ACPR / EVM）：DUT1 -45.90 dBc / -42.91 dB；DUT2 -46.84 / -43.94；DUT3 -45.39 / -39.85。
- 训练：先训练 GRU 功放代理模型，再通过其端到端训练各 DPD；AdamW，100 轮，五个种子；使用 ZCU670 RFSoC 采集。
- 硬件：XCZU67DR 四通道 FPGA，1.28 GSa/s；12 nm 单通道 ASIC 为布局后估算（功耗为估算值，非流片实测）。
- 作者列出的后续工作：流片、影子库后台自适应、多天线 MIMO 集成。

## Why it matters / what's new (EN)
The KB's earlier front-end entries (2026-09-04_quantalrf-dpd-efficient-wifi78-fem, 2026-10-22_quantalrf-fard-wifi8-front-end-linearity-beyond-dpd) cover DPD from the industry side; this paper adds an academic neural-DPD design with measured results on a 320 MHz Wi-Fi 7 waveform and an explicit streaming-hardware implementation. Cross-work comparisons involve different PAs, signals and measurement methods, so the headline ratios are indicative only.

## Why it matters / what's new (ZH)
知识库此前的前端条目（2026-09-04_quantalrf-dpd-efficient-wifi78-fem、2026-10-22_quantalrf-fard-wifi8-front-end-linearity-beyond-dpd）从产业侧介绍 DPD；本文补充了一个学术界的神经网络 DPD 设计，给出 320 MHz Wi-Fi 7 波形上的实测结果及明确的流式硬件实现。不同工作之间所用功放、信号与测量方法各异，故文中的对比倍数仅供参考。

## Images
![StreamingDPD system overview (Fig. 1) | StreamingDPD 系统概览（图 1）](https://arxiv.org/html/2611.23101v1/overview_teaser.png)
![Accelerator microarchitecture (Fig. 4) | 加速器微架构（图 4）](https://arxiv.org/html/2611.23101v1/dwblock.png)
