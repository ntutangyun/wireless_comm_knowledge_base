---
id: 2026-09-16_arxiv-802-11ad-cir-tracking-mmwave-sensing
date_published: 2026-09-14
date_found: 2026-09-16
technology: wifi
type: academic-paper
title_en: "Packet-Level Complex CIR Tracking for Communication-Native mmWave Sensing: An 802.11ad Testbed"
title_zh: "面向通信原生毫米波感知的逐包复数信道冲激响应跟踪：一个 802.11ad 测试平台"
url: "https://arxiv.org/abs/2609.15622"
source_quality: full
topics: [802.11ad, mmWave-sensing, CIR, respiration-monitoring]
topic_primary: sensing-csi
topics_secondary: [mmwave-bq]
novelty_score: 2
---

## Summary (EN)

This paper (Raquel Marina Noguera Oishi, Haoqiu Xiong, Hany Assasa, Sofie Pollin; KU Leuven ESAT + imec) builds a programmable 60 GHz testbed around an IEEE 802.11ad link and asks a question the authors say prior communication-native mmWave sensing work (e.g. ViMo, which showed vital signs could be extracted from a commercial 802.11ad platform) did not characterize in detail: whether packet-level channel impulse response (CIR) measurements produced by a real communication protocol stay aligned in delay and coherent in phase across packets, over the timescales needed for sub-wavelength motion tracking such as respiration sensing.

The testbed pairs RFSoC 4x2 boards with Sivers 60 GHz evaluation-kit front-ends (data converters at 3.52 GS/s, up to 1.76 GHz bandwidth; the Sivers patch array supports electronically steerable beamforming via GPIO), and, unlike prior work that exposes only the single strongest CIR tap, the FPGA design exports all 128 complex CIR taps for every detected packet — roughly 453 packets per second, one 128-tap snapshot per training (TRN) unit, via a packet detector correlated against the Golay preamble and a receiver block that coherently combines repeated Golay training sequences. Two real effects then have to be corrected before that raw CIR stream is usable for motion sensing: independently clocked nodes accumulate a small sampling-rate offset (about 0.047 ppm) that causes the delay profile to drift progressively over a recording, and multipath conditions can cause the packet detector to lock onto a different timing reference from one packet to the next, producing quantized jumps in the apparent delay. The paper's calibration pipeline addresses both: a sliding-window correlation search (±20 taps) against a median delay-profile template, computed on log-magnitude profiles to avoid bias from per-packet gain changes and applied twice for robustness, corrected roughly 26.9% of packets in a typical recording; and a "relative CIR phase" is then defined by conjugate-multiplying each aligned tap against the tap corresponding to a static in-scene reflector within the same snapshot, which cancels the common phase drift shared by all propagation paths in that snapshot while preserving the phase variation caused by the moving target. Respiration displacement is then recovered from the calibrated relative phase via gated phase unwrapping, linear detrending, 0.1-0.5 Hz band-pass filtering, and the standard d = -(lambda/4*pi)*phase relation at the 60.48 GHz carrier (lambda = 4.96 mm).

The evaluation used a quasi-monostatic single-node setup (co-located Tx/Rx front-ends) with a static reference pole between transmitter and a seated subject 1 m away, tested at three body orientations (broadside and +/-45 degrees), across 39 recordings from six subjects (30 s each; conditions spanning normal breathing, controlled rate changes, and deliberate apnoea; ground truth from a Zephyr BioHarness chest belt at 25 Hz, KU Leuven ethics approval). Across all 39 recordings, median absolute correlation between the estimated and reference respiration waveforms rose from 0.41 (raw, timestamp-regularized only) to 0.52 after delay alignment to 0.61 after adding relative-phase calibration, with mean absolute breathing-rate error falling from 5.1 to 4.1 to 3.6 breaths/min over the same three stages. For the 13 broadside, normal-breathing recordings specifically, the improvement was larger (correlation 0.58 -> 0.70 -> 0.77; MAE 3.87 -> 2.86 -> 1.47 breaths/min), while the 12 normal-breathing recordings at +/-45 degrees body orientation degraded to a median correlation of 0.31 and MAE of 6.28 breaths/min even after full calibration, which the authors report as a clear orientation-sensitivity limitation of the current single-node geometry.

## Summary (ZH)

本文（Raquel Marina Noguera Oishi、Haoqiu Xiong、Hany Assasa、Sofie Pollin；鲁汶大学 ESAT + imec）围绕一条 IEEE 802.11ad 链路搭建了可编程的 60 GHz 测试平台，研究此前"通信原生"毫米波感知工作（如 ViMo，曾展示可从商用 802.11ad 平台中提取生命体征）未详细刻画的一个问题：由真实通信协议产生的逐包信道冲激响应（CIR）测量，在时延上是否保持对齐、在相位上是否保持相干——这对呼吸感知等亚波长运动跟踪所需的时间尺度至关重要。

该测试平台将 RFSoC 4x2 板卡与 Sivers 60 GHz 评估套件前端配对（数据转换器 3.52 GS/s，带宽最高 1.76 GHz；Sivers 贴片阵列通过 GPIO 支持电子可控波束赋形），与此前只暴露单一最强 CIR 抽头的工作不同，本文的 FPGA 设计为每个检测到的数据包导出全部 128 个复数 CIR 抽头——约每秒 453 个数据包，每个训练（TRN）单元对应一个 128 抽头快照，通过与 Golay 前导码相关的包检测器以及对重复 Golay 训练序列进行相干合并的接收模块实现。原始 CIR 数据流在可用于运动感知之前，还需修正两个真实存在的效应：独立时钟的节点会累积约 0.047 ppm 的采样率偏差，导致时延轮廓在一次记录中逐渐漂移；而多径条件可能使包检测器在不同数据包间锁定到不同的时间参考点，产生量化式的表观时延跳变。论文的校准流程针对两者分别处理：一是基于对数幅度轮廓（以避免逐包增益变化带来的偏差）、对中值时延轮廓模板进行 ±20 抽头滑动窗口相关搜索，并应用两次以提升鲁棒性，在典型记录中修正了约 26.9% 的数据包；二是定义"相对 CIR 相位"——将每个已对齐的抽头与同一快照内对应静态场景反射体的抽头做共轭相乘，从而抵消该快照中所有传播路径共有的公共相位漂移，同时保留由运动目标引起的相位变化。呼吸位移随后通过带门控的相位解缠绕、线性去趋势、0.1-0.5 Hz 带通滤波，以及在 60.48 GHz 载波（波长 4.96 毫米）下的标准 d = -(λ/4π)×相位 关系，从校准后的相对相位中恢复。

评估采用准单站（收发前端共址）配置，发射机与静态参考杆之间放置一名静坐、距离 1 米的受试者，测试三种身体朝向（正面及 ±45 度），共采集六名受试者的 39 段记录（每段 30 秒；条件涵盖正常呼吸、受控变速呼吸与刻意屏气；真值来自 Zephyr BioHarness 胸带，采样率 25 Hz，经鲁汶大学伦理审批）。在全部 39 段记录中，估计呼吸波形与参考波形之间的中位绝对相关系数从 0.41（原始，仅时间戳规整）依次提升到 0.52（时延对齐后）与 0.61（加入相对相位校准后），平均绝对呼吸率误差在同三个阶段中相应从 5.1 降至 4.1 再降至 3.6 次/分钟。在 13 段正面、正常呼吸的记录中，提升幅度更大（相关系数 0.58 → 0.70 → 0.77；MAE 3.87 → 2.86 → 1.47 次/分钟）；而在 12 段 ±45 度朝向的正常呼吸记录中，即便经过完整校准，中位相关系数仍降至 0.31、MAE 升至 6.28 次/分钟，作者将其明确报告为当前单节点几何构型的朝向敏感性局限。

## Key technical points (EN)

- **Hardware**: RFSoC 4x2 + Sivers 60 GHz eval-kit front-ends, 3.52 GS/s converters, up to 1.76 GHz bandwidth, GPIO-steerable patch array, independent 10 MHz references possible per node.
- **CIR exposure**: all 128 complex taps exported per detected 802.11ad packet (~453 packets/s), vs. prior single-strongest-tap approaches.
- **Delay calibration**: sliding ±20-tap correlation search on log-magnitude profiles against a median template, applied twice; corrected ~26.9% of packets in a typical recording.
- **Phase calibration**: "relative CIR phase" via conjugate multiplication against a static in-scene reflector tap in the same snapshot, cancelling common phase drift while preserving target-motion phase.
- **Respiration pipeline**: gated phase unwrap -> linear detrend -> 0.1-0.5 Hz band-pass -> displacement via d = -(lambda/4*pi)*phase at 60.48 GHz (lambda = 4.96 mm).
- **Results (39 recordings, 6 subjects)**: median |correlation| 0.41 -> 0.52 -> 0.61 and MAE 5.1 -> 4.1 -> 3.6 breaths/min across raw / delay-aligned / phase-calibrated stages; broadside-only subset reaches 0.77 correlation / 1.47 breaths/min MAE; +/-45 degree orientation degrades to 0.31 / 6.28 breaths/min even after calibration.

## Key technical points (ZH)

- **硬件**：RFSoC 4x2 + Sivers 60 GHz 评估套件前端，3.52 GS/s 转换器，最高 1.76 GHz 带宽，GPIO 可控贴片阵列，各节点可配独立 10 MHz 参考时钟。
- **CIR 输出**：每个检测到的 802.11ad 数据包导出全部 128 个复数抽头（约每秒 453 包），区别于此前仅暴露单一最强抽头的做法。
- **时延校准**：基于对数幅度轮廓、对中值模板做 ±20 抽头滑动相关搜索，应用两次；在典型记录中修正约 26.9% 的数据包。
- **相位校准**：通过与同一快照内静态场景反射体抽头做共轭相乘，定义"相对 CIR 相位"，抵消公共相位漂移同时保留目标运动相位。
- **呼吸提取流程**：门控相位解缠绕 → 线性去趋势 → 0.1-0.5 Hz 带通滤波 → 在 60.48 GHz（波长 4.96 毫米）下按 d = -(λ/4π)×相位 恢复位移。
- **结果（39 段记录，6 名受试者）**：原始/时延对齐/相位校准三阶段中位绝对相关系数 0.41→0.52→0.61，平均绝对误差 5.1→4.1→3.6 次/分钟；仅正面朝向子集达到相关系数 0.77、MAE 1.47 次/分钟；±45 度朝向即便校准后仍降至 0.31、6.28 次/分钟。

## Why it matters / what's new (EN)

The KB's existing `sensing-csi` entries mostly cover Wi-Fi-band (sub-7 GHz) CSI-based respiration/activity sensing; this paper works the same problem — vital-sign extraction from communication-native channel measurements — inside the mmWave (60 GHz, 802.11ad) domain, and its stated contribution relative to prior mmWave sensing work (ViMo) is specifically the packet-level delay/phase characterization and the two named correction techniques, not the sensing application itself. The paper's own conclusion is an explicit orientation-sensitivity limitation (median correlation collapsing from 0.77 to 0.31 off-broadside) for the current single-node geometry, which it frames as the next problem to solve rather than something already resolved.

## Why it matters / what's new (ZH)

知识库现有的 `sensing-csi` 条目大多围绕 Wi-Fi 频段（sub-7 GHz）基于 CSI 的呼吸/活动感知；本文在毫米波（60 GHz，802.11ad）域中处理同一类问题——从通信原生信道测量中提取生命体征——其相对于此前毫米波感知工作（ViMo）所声称的贡献，具体在于逐包时延/相位的刻画方式与两项命名的校正技术本身，而非感知应用本身。论文自身的结论明确指出，当前单节点几何构型存在朝向敏感性局限（偏离正面朝向后中位相关系数从 0.77 骤降至 0.31），并将其表述为有待解决的下一个问题，而非已经解决的问题。

## Images

![Testbed radio-node architecture exposing the full 128-tap complex CIR per packet | 每包全部 128 抽头复数 CIR 输出的测试节点架构](https://arxiv.org/html/2609.15622v1/testbed_CIR.png)
![Respiration-sensing experimental geometry: transmitter, static reference reflector, and seated subject | 呼吸感知实验几何布置：发射机、静态参考反射体与静坐受试者](https://arxiv.org/html/2609.15622v1/experiment_setup.png)
