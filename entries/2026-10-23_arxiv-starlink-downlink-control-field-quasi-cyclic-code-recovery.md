---
id: 2026-10-23_arxiv-starlink-downlink-control-field-quasi-cyclic-code-recovery
date_published: 2026-10-21
date_found: 2026-10-23
technology: satellite
type: academic-paper
title_en: "Control-Field and Quasi-Cyclic Code Recovery in Starlink Downlink Signals"
title_zh: "Starlink 下行信号中的控制字段与准循环码恢复"
url: "https://arxiv.org/abs/2610.29387"
source_quality: full
topics: [Starlink, downlink-signal-analysis, convolutional-code, CRC, quasi-cyclic-code, OFDM, passive-measurement]
topic_primary: starlink
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Liu, Ma, Yang and Li (arXiv 2610.29387, eess.SP, submitted 21 October 2026) analyse one passive complex-baseband capture of a Starlink downlink: 11,520,180 samples spanning 24.000375 ms at a stated 480 MHz sampling rate, containing 18 analysed frame records. Earlier work had established the frame timing, OFDM numerology and the synchronisation and pilot sequences; this paper asks whether the same capture also exposes the coded control fields and payload-code structures.

The stated frame structure is about 302 slots per 750 Hz frame, a 2048-point FFT, a 64-sample cyclic prefix, 234.375 kHz subcarrier spacing, 16 edge pilots and 1,004 non-pilot symbols per data slot. Frequency correction combines a cyclic-prefix coarse estimate (47.449347 kHz), a pilot-derived residual (808.639 Hz) and a chirp rate of -1107.157 Hz/s, leaving a 2.742306 Hz residual. A 15-stage PN sequence gives a four-phase reference that is removed before the coding search.

Results: each frame carries two CRC-checked control groups (the first always 228 coded resources, the second 2-4 blocks); across 36 groups the CRC shows zero differences. The control blocks fit a terminated rate-1/3, constraint-length-7 convolutional code (octal generators 155, 123, 137) with a CRC-8. A descriptor-based layout model matches signal-derived allocation endpoints exactly in 16 of 18 records and within one and two symbols in the other two. The authors also derive systematic and quasi-cyclic representations at rates 1/2 and 5/8; frozen encoders predict 78,848, 9,984 and 811,008 reserved parity bits for three formats with no disagreement.

Stated limitations: a single capture with unknown hardware, acquisition date, RF tuning and satellite identity; codes 28 and 37 verified only as shortened cores with unexplained extra bits; code 4 unresolved; codes 39 and 27 each have only one target-format field; some fitting observations were examined before parameters were fixed; sparse selection is limited to a finite search family. The authors state the recovered representations do not authenticate transmitter-standard identities or plaintext semantics, and that they do not claim to have run all of the cited blind code-recovery algorithms as comparative baselines.

## Summary (ZH)

Liu、Ma、Yang 和 Li（arXiv 2610.29387，eess.SP，2026 年 10 月 21 日提交）分析了一次对 Starlink 下行链路的被动复基带采集：11,520,180 个采样点，时长 24.000375 ms，标称采样率 480 MHz，共含 18 个被分析的帧记录。此前工作已确定帧定时、OFDM 参数以及同步序列和导频序列；本文探讨同一次采集是否还能暴露编码后的控制字段和载荷码结构。

文中给出的帧结构为：每个 750 Hz 帧约 302 个时隙、2048 点 FFT、64 采样循环前缀、234.375 kHz 子载波间隔、16 个边缘导频、每个数据时隙 1,004 个非导频符号。频率校正结合循环前缀粗估计（47.449347 kHz）、导频得到的残差（808.639 Hz）和 -1107.157 Hz/s 的调频率，最终残差为 2.742306 Hz。15 级 PN 序列给出四相参考，在编码搜索前被移除。

结果：每帧包含两个带 CRC 校验的控制组（第一组固定为 228 个编码资源，第二组为 2-4 个块）；36 个组的 CRC 均无差异。控制块符合终止的 1/3 码率、约束长度 7 卷积码（八进制生成多项式 155、123、137）并带 CRC-8。基于描述符的布局模型在 18 个记录中有 16 个与信号估计的分配终点完全吻合，另两个分别相差 1 和 2 个符号。作者还导出了 1/2 和 5/8 码率的系统码与准循环码表示；冻结编码器对三种格式预测的保留校验比特数分别为 78,848、9,984 和 811,008，无不一致。

作者说明的局限：仅有一次采集，硬件、采集日期、射频调谐和卫星身份均未知；码 28 和 37 仅验证了缩短核心且存在未解释的额外比特；码 4 未解决；码 39 和 27 各仅有一个目标格式字段；部分拟合观察在固定参数前已被查看；稀疏选择限于有限搜索族。作者声明所恢复的表示不能认证发射机所属标准的身份或明文语义，并说明不声称已将所引用的全部盲码恢复算法作为对比基线运行。

## Key technical points (EN)

- **Capture**: single 24.000375 ms recording, 11,520,180 samples at a stated 480 MHz; 18 frame records analysed.
- **Numerology**: about 302 slots per 750 Hz frame; 2048-point FFT; 64-sample CP; 234.375 kHz spacing; 16 edge pilots; 1,004 non-pilot symbols per data slot.
- **Control blocks**: terminated rate-1/3, K=7 convolutional code (155, 123, 137 octal) with group-level CRC-8; zero CRC differences across 36 groups.
- **Layout prediction**: 16 of 18 records match exactly; the other two within 2 symbols.
- **Payload codes**: rate-1/2 and 5/8 systematic and quasi-cyclic representations; 78,848 / 9,984 / 811,008 predicted reserved parity bits for three formats.
- **Open items**: codes 28, 37 (shortened cores with extra bits), code 4 unresolved; single-capture scope.

## Key technical points (ZH)

- **采集**：单次 24.000375 ms 记录，11,520,180 个采样点，标称 480 MHz；分析 18 个帧记录。
- **参数**：每个 750 Hz 帧约 302 个时隙；2048 点 FFT；64 采样 CP；子载波间隔 234.375 kHz；16 个边缘导频；每个数据时隙 1,004 个非导频符号。
- **控制块**：终止的 1/3 码率、K=7 卷积码（八进制 155、123、137），组级 CRC-8；36 个组 CRC 无差异。
- **布局预测**：18 个记录中 16 个完全吻合，另两个误差在 2 个符号内。
- **载荷码**：1/2 和 5/8 码率的系统码与准循环码表示；三种格式预测保留校验比特 78,848 / 9,984 / 811,008。
- **未决事项**：码 28、37（带额外比特的缩短核心）、码 4 未解决；仅限单次采集。

## Why it matters / what's new (EN)

The paper extends public passive-measurement work on the Starlink downlink from synchronisation and pilot structure to the coded control layer, and reports numbers that can be checked against other captures. Its claims are bounded by the authors to one capture of unknown provenance, and the source states that the recovered representations do not authenticate transmitter-standard identities or plaintext semantics.

## Why it matters / what's new (ZH)

本文把公开的 Starlink 下行被动测量工作从同步与导频结构延伸到编码控制层，并给出可与其他采集结果对照的数值。作者明确将结论限定于一次来源不明的采集，并说明所恢复的表示不能认证发射机所属标准的身份或明文语义。

## Images

None.
