---
id: 2026-09-17_arxiv-helena-ntn-channel-estimation
date_published: 2026-09-13
date_found: 2026-09-17
type: academic-paper
technology: cellular
title_en: "HELENA for 5G NR LEO NTN Channel Estimation: A Comparative Evaluation"
title_zh: "面向 5G NR LEO NTN 信道估计的 HELENA 方案：对比评估"
url: "https://arxiv.org/abs/2609.14735"
source_quality: full
topics: [NTN, LEO, channel-estimation, deep-learning, Doppler, 5G-NR, edge-inference]
topic_primary: ntn
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

This paper (Miguel Camelo Botero, Nina Slamnik-Kriještorac, Johann Marquez-Barja; University of Antwerp - imec, IDLab) tests whether HELENA (High-Efficiency Learning-based channel Estimation using dual Neural Attention), a deep-learning channel estimator originally designed for terrestrial 5G NR OFDM channels, remains effective for LEO (Low Earth Orbit) Non-Terrestrial Network (NTN) channel estimation after retraining, without any architectural change. The motivation is that LEO NTN introduces Doppler shift and synchronization impairments (a transmitter can pre-compensate the beam-common Doppler component from satellite/beam geometry, but the UE-specific residual, dependent on the UE's position within the beam and its own mobility, must still be estimated at the receiver) that terrestrial channel estimators were not designed to handle.

The authors built two paired synthetic datasets using MATLAB's 5G and Satellite Communications Toolboxes following the 3GPP NR-NTN PDSCH processing chain: NTN-1, where the receiver estimates and removes the residual Doppler before channel estimation, and NTN-2, where this residual-Doppler compensation step is disabled (isolating its effect), both spanning NTN-TDL-A through D channel profiles, a 600 km satellite altitude, UE elevations of 10-89 degrees, UE speeds up to 120 km/h, and SNR from 0-20 dB. HELENA (unchanged from its terrestrial design) was compared against eight terrestrial-origin deep-learning estimators retrained from scratch, one NTN-specific estimator (MDELAN-SISO), practical pilot-based/statistical baselines (LS with interpolation, the practical 5G NR DM-RS estimator, and three LMMSE variants with differing levels of channel-statistics knowledge).

HELENA achieved the lowest observed SNR-averaged Normalized Mean Squared Error (NMSE) among all deep-learning estimators in both NTN-1 (-21.856 dB) and NTN-2 (-20.866 dB) conditions, including 55.8% and 62.7% lower linear-scale NMSE than the NTN-specific MDELAN-SISO in NTN-1 and NTN-2 respectively. Against the classical statistical baselines the ordering is condition-dependent: in NTN-1 the global, profile-aware and test-fitted LMMSE variants all beat HELENA (by 0.07 dB, 1.48 dB and 1.80 dB respectively), whereas in NTN-2 HELENA reduces linear-scale NMSE by 41.2%, 29.8% and 14.9% relative to those same three. Every deep-learning model's accuracy degraded when residual-Doppler compensation was disabled (NTN-2 vs NTN-1), confirming that learning-based estimation does not remove the benefit of receiver-side Doppler compensation. On deployment hardware, HELENA reached 0.0595 ms 99th-percentile (P99) inference latency on an NVIDIA RTX PRO 4500 (88.1% below the paper's adopted 0.5 ms per-call budget) with lower energy per sample than its closest attention-based competitors (AttRNet, CE-ViT); on a power-constrained 10 W NVIDIA Jetson Orin NX, HELENA retained a favorable accuracy-energy trade-off but, like every evaluated model, did not meet the same P99 latency budget. The authors conclude that the unchanged HELENA architecture needs no NTN-specific redesign for the evaluated single-input-single-output, 600 km LEO, 2 GHz, 30 kHz subcarrier-spacing configuration, while meeting the latency budget on embedded, power-constrained accelerators remains an open challenge.

## Summary (ZH)

本文（Miguel Camelo Botero、Nina Slamnik-Kriještorac、Johann Marquez-Barja；安特卫普大学 - imec IDLab）测试了 HELENA（基于双神经注意力机制的高效学习型信道估计方案，High-Efficiency Learning-based channel Estimation using dual Neural Attention）——一种最初为地面 5G NR OFDM 信道设计的深度学习信道估计器——在不改变架构的前提下，经过重新训练后能否有效应用于低地球轨道（LEO）非地面网络（NTN）的信道估计。其研究动机在于：LEO NTN 会引入多普勒频移与同步损伤（发射端可以根据卫星/波束几何关系预先补偿波束公共多普勒分量，但与用户在波束内位置及自身移动性相关的用户特定残余分量，仍需由接收端进行估计），而地面信道估计器原本并非为处理此类损伤而设计。

作者按照 3GPP NR-NTN PDSCH 处理流程，使用 MATLAB 的 5G 与卫星通信工具箱构建了两个配对的合成数据集：NTN-1（接收端在信道估计前对残余多普勒进行估计并消除）与 NTN-2（关闭该残余多普勒补偿步骤，以隔离其影响），两者均覆盖 NTN-TDL-A 至 D 信道模型、600 公里卫星高度、10-89 度用户仰角、最高 120 公里/小时的用户移动速度以及 0-20 dB 信噪比范围。HELENA（保持其地面版本架构不变）与八种从零重新训练的地面起源深度学习估计器、一种 NTN 专用估计器（MDELAN-SISO）、以及若干基于导频/统计的实用基线（带插值的最小二乘法 LS、实用型 5G NR DM-RS 估计器，以及三种具备不同信道统计知识水平的 LMMSE 方案）进行了比较。

在 NTN-1（-21.856 dB）与 NTN-2（-20.866 dB）两种条件下，HELENA 在所有深度学习估计器中均取得了最低的实测信噪比平均归一化均方误差（NMSE），在 NTN-1 与 NTN-2 条件下分别比 NTN 专用方案 MDELAN-SISO 的线性尺度 NMSE 低 55.8% 与 62.7%。相对经典统计基线则依条件而异：在 NTN-1 条件下，全局 LMMSE、按信道模型 LMMSE 与测试集拟合 LMMSE 三种方案均优于 HELENA（分别优 0.07 dB、1.48 dB 与 1.80 dB）；而在 NTN-2 条件下，HELENA 相对这三者的线性尺度 NMSE 分别降低 41.2%、29.8% 与 14.9%。当关闭残余多普勒补偿（NTN-2 相对 NTN-1）时，所有深度学习模型的精度均出现下降，证实基于学习的估计方法并不能消除接收端多普勒补偿所带来的收益。在部署硬件方面，HELENA 在 NVIDIA RTX PRO 4500 上实现了 0.0595 毫秒的第 99 百分位（P99）推理时延（比论文采用的 0.5 毫秒单次调用预算低 88.1%），且每样本能耗低于与其最接近的两种基于注意力机制的竞争方案（AttRNet、CE-ViT）；而在功耗受限的 10 瓦 NVIDIA Jetson Orin NX 上，HELENA 保持了良好的精度-能耗权衡，但与所有被评估模型一样，未能满足同一 P99 时延预算。作者总结认为，在所评估的单输入单输出、600 公里 LEO、2 GHz 载频、30 kHz 子载波间隔配置下，HELENA 架构无需针对 NTN 场景进行重新设计即可有效工作，但在嵌入式、功耗受限加速器上满足时延预算仍是一个有待解决的难题。

## Key technical points (EN)

- **Task**: DL-based channel estimation for downlink SISO 5G NR OFDM over LEO NTN links, testing whether a terrestrial architecture (HELENA) needs redesign for NTN Doppler/synchronization impairments.
- **Paired datasets (NTN-1/NTN-2)**: built with MATLAB 5G + Satellite Communications Toolboxes per the 3GPP NR-NTN PDSCH chain; NTN-TDL-A-D profiles, 600 km altitude, 10-89 deg elevation, 0-120 km/h UE speed, 0-20 dB SNR; NTN-1 applies receiver-side residual-Doppler compensation, NTN-2 disables it to isolate the effect.
- **Comparison set**: HELENA and HELENA-MHSA (ablation without squeeze-and-excitation) vs. seven other retrained terrestrial DL estimators (SRCNN, ChannelNet, EDSR, AttRNet, ProEsNet, LSiDNN-48, CE-ViT) -- eight terrestrial-origin models in total counting HELENA-MHSA -- plus 1 NTN-specific estimator (MDELAN-SISO), and LS/DM-RS/LMMSE statistical baselines.
- **Accuracy**: HELENA's SNR-averaged NMSE of -21.856 dB (NTN-1) / -20.866 dB (NTN-2) is the lowest among DL estimators; 55.8%/62.7% lower linear-scale NMSE than MDELAN-SISO; the LMMSE baselines beat HELENA in NTN-1 but lose to it in NTN-2; all DL models degrade under NTN-2 (no residual-Doppler compensation).
- **Deployment**: FP16 TensorRT on RTX PRO 4500 gives HELENA 0.0595 ms P99 latency (88.1% below the adopted 0.5 ms budget), 1.42x/1.82x faster than AttRNet/CE-ViT with 60.3%/30.6% less energy; on a 10 W Jetson Orin NX, HELENA is faster/more efficient than most alternatives but, like every evaluated model, misses the P99 budget.
- **Caveat noted by the authors**: each model/condition used one fixed-seed training run, so sub-dB accuracy gaps are observed rankings rather than statistically established margins; link-level (BLER/throughput) translation of the NMSE gains is left to future work.

## Key technical points (ZH)

- **任务**：针对 LEO NTN 链路上的下行单输入单输出 5G NR OFDM 信道，进行基于深度学习的信道估计，测试地面架构（HELENA）是否需要针对 NTN 多普勒/同步损伤重新设计。
- **配对数据集（NTN-1/NTN-2）**：按照 3GPP NR-NTN PDSCH 处理流程，使用 MATLAB 5G 与卫星通信工具箱构建；覆盖 NTN-TDL-A 至 D 信道模型、600 公里高度、10-89 度仰角、0-120 公里/小时用户速度、0-20 dB 信噪比；NTN-1 采用接收端残余多普勒补偿，NTN-2 关闭该补偿以隔离其影响。
- **对比方案**：HELENA 及 HELENA-MHSA（去除挤压激励模块的消融版本），对比另外 7 种重新训练的地面深度学习估计器（SRCNN、ChannelNet、EDSR、AttRNet、ProEsNet、LSiDNN-48、CE-ViT）——连同 HELENA-MHSA 共计 8 种地面起源模型——以及 1 种 NTN 专用估计器（MDELAN-SISO），以及 LS/DM-RS/LMMSE 统计基线。
- **精度**：HELENA 的信噪比平均 NMSE 在 NTN-1 为 -21.856 dB、NTN-2 为 -20.866 dB，均为深度学习估计器中最低；相较 MDELAN-SISO，线性尺度 NMSE 分别低 55.8%/62.7%；LMMSE 基线在 NTN-1 优于 HELENA、在 NTN-2 则不如 HELENA；所有深度学习模型在 NTN-2（无残余多普勒补偿）条件下均出现精度下降。
- **部署表现**：在 RTX PRO 4500 上使用 FP16 TensorRT，HELENA 的 P99 时延为 0.0595 毫秒（比采用的 0.5 毫秒预算低 88.1%），比 AttRNet/CE-ViT 快 1.42/1.82 倍，能耗低 60.3%/30.6%；在功耗受限的 10 瓦 Jetson Orin NX 上，HELENA 比多数替代方案更快、更高效，但与所有被评估模型一样未能满足 P99 时延预算。
- **作者说明的局限**：每个模型/条件仅使用一次固定随机种子训练，因此小于 1 dB 的精度差异属于观测排名而非具有统计显著性的差距；NMSE 提升在链路级（误块率/吞吐量）上的实际效果留待未来工作评估。

## Why it matters / what's new (EN)

The KB's existing NTN channel-estimation coverage (`2026-08-27_arxiv-semi-blind-ntn-channel-estimation-spiked-rmt`) is a closed-form semi-blind estimator based on random matrix theory targeting massive-MIMO satellite uplinks. This paper instead asks a transfer-learning question about deep-learning estimators — whether a terrestrial DL architecture can be reused unchanged for LEO NTN after retraining — and answers it with a head-to-head comparison against nine other DL baselines plus statistical references, backed by measured inference latency and energy on both a high-performance GPU and a power-constrained embedded accelerator rather than accuracy numbers alone.

## Why it matters / what's new (ZH)

知识库现有的 NTN 信道估计相关条目（`2026-08-27_arxiv-semi-blind-ntn-channel-estimation-spiked-rmt`）是一种基于随机矩阵理论、面向大规模 MIMO 卫星上行链路的闭式半盲估计方案。本文则提出了一个关于深度学习估计器的迁移学习问题——一个地面深度学习架构能否在不改变结构的情况下、经重新训练后直接复用于 LEO NTN——并通过与另外九种深度学习基线及统计参考方案的正面对比给出了答案，同时提供了在高性能 GPU 与功耗受限嵌入式加速器上的实测推理时延与能耗数据，而不仅仅是精度指标。

## Images

None (the arxiv HTML rendering for this paper contains no resolvable figure image sources).
