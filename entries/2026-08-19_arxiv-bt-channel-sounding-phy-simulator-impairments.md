---
id: 2026-08-19_arxiv-bt-channel-sounding-phy-simulator-impairments
date_published: 2026-08-18
date_found: 2026-08-19
type: academic-paper
technology: bluetooth
title_en: "A Python physical-layer simulator for Bluetooth Channel Sounding Mode 3 phase-based ranging: 72-tone grid, free-space / static / 802.15.4a-CM1 channels, and datasheet-calibrated impairments (phase noise, CFO ramp, IQ imbalance, ADC quantization, Wi-Fi OFDM interference), validated against nRF54L15 measurements"
title_zh: "面向蓝牙 Channel Sounding Mode 3 相位测距的 Python 物理层仿真器：72 音调网格、自由空间/静态/802.15.4a-CM1 信道，以及按数据手册标定的损伤（相位噪声、CFO 斜坡、IQ 失衡、ADC 量化、Wi-Fi OFDM 干扰），并与 nRF54L15 实测对比验证"
url: "https://arxiv.org/abs/2608.17497"
source_quality: full
topics: [BLE, channel-sounding, phase-based-ranging, simulator, hardware-impairments, 802.15.4a, Wi-Fi-interference, nRF54L15]
topic_primary: bt-channel-sounding
topics_secondary: [bt-location]
novelty_score: 3
---

## Summary (EN)

Droemmer and Gardill (Brandenburg University of Technology, Chair of Electronic Systems and Sensors; Droemmer also with Mercedes-Benz AG; 4-page paper submitted to IEEE Radio and Wireless Week 2027, arxiv August 18, 2026) present a Python simulation framework for the physical layer of Bluetooth Channel Sounding (CS) as defined in Bluetooth Core Specification v6.2. The tool targets Mode 3 phase-based ranging (PBR): 72 active tones on the 1 MHz grid across 2402–2480 MHz (79 candidate channels, seven excluded to protect the BLE advertising channels), stepped in pseudorandom order so that systematic phase ramps are decorrelated from frequency index. The motivation is that existing tooling (the MATLAB Bluetooth Toolbox) generates spec-compliant waveforms but does not let a researcher switch individual frequency-domain channel and impairment mechanisms on and off in isolation, which is what one needs to attribute ranging error to a specific cause.

The channel side offers three models: free-space, where each tone sees H(f_k) = exp(−j2πf_k·τ) with τ the two-way delay so the wrapped phase is a linear ramp in frequency; static multipath, where the user specifies reflection paths as (delay, amplitude, phase) tuples; and stochastic multipath using the IEEE 802.15.4a CM1 indoor-residential model with Rician statistics and a K-factor weighting the deterministic LOS component. The impairment side injects, per tone, additive noise scaled to a target SNR (n_k ~ CN(0, P_s/SNR) with the noise bandwidth tied to the CS measurement interval T_PM), phase noise (σ_φ ≈ 1° lab-grade up to 5–8° for consumer SoCs under stress), a CFO-induced phase ramp (σ_ramp 0.05–0.7° per step), IQ imbalance (0.5–1.0 dB amplitude, 1.5–2.0° phase mismatch), ADC quantization (12–16 bits typical; 4–6 bits shows visible staircase distortion), and narrowband Wi-Fi interference modelled with the full 802.11n/ac OFDM subcarrier structure (64 subcarriers at 312.5 kHz per 20 MHz channel; the example uses Wi-Fi channel 6, 2427–2447 MHz). Parameter ranges are taken from commercial datasheets and field measurements. Mode 3's bidirectional exchange is reproduced by running the impairment chain twice with independent noise over the same channel and forming Y_comb[k] = Y_A[k]·Y_B[k], which cancels symmetric phase terms and doubles the range-dependent phase slope.

Validation is qualitative: a 5 m line-of-sight capture from the open Wieme et al. dataset (Nordic nRF54L15-DK, warehouse-like environment, full 72-tone Mode 3 sequence) is compared with a simulated response using a matched static-multipath configuration; both show the same morphology — steeper slopes, multiple wraps, and rapid tone-to-tone excursions. The paper explicitly does not evaluate any distance estimator or report ranging accuracy; it delivers complex frequency-domain tone responses meant as the substrate for future estimator benchmarking and for coupling with device energy models. No public code repository is stated.

## Summary (ZH)

Droemmer 与 Gardill（勃兰登堡工业大学电子系统与传感器教研室；Droemmer 同时隶属梅赛德斯-奔驰；4 页论文，投稿 IEEE Radio and Wireless Week 2027，arxiv 2026 年 8 月 18 日）提出了一个针对 Bluetooth Core Specification v6.2 所定义 Channel Sounding（CS）物理层的 Python 仿真框架。工具面向 Mode 3 相位测距（PBR）：2402–2480 MHz 上 1 MHz 网格的 72 个有效音调（79 个候选信道，排除 7 个以保护 BLE 广播信道），以伪随机顺序跳变，使系统性相位斜坡与频率索引去相关。动机在于现有工具（MATLAB Bluetooth Toolbox）能生成符合规范的波形，却不能让研究者单独开关各个频域信道与损伤机制，而后者正是把测距误差归因到具体成因所必需的。

信道侧提供三种模型：自由空间——每个音调经历 H(f_k) = exp(−j2πf_k·τ)，τ 为双程时延，缠绕相位随频率呈线性斜坡；静态多径——用户以（时延、幅度、相位）三元组指定反射路径；随机多径——采用 IEEE 802.15.4a CM1 室内住宅模型，服从莱斯统计并以 K 因子加权确定性 LOS 分量。损伤侧逐音调注入：按目标 SNR 缩放的加性噪声（n_k ~ CN(0, P_s/SNR)，噪声带宽与 CS 测量间隔 T_PM 绑定）、相位噪声（实验室级 σ_φ≈1°，消费级 SoC 受压时 5–8°）、CFO 引起的相位斜坡（每步 σ_ramp 0.05–0.7°）、IQ 失衡（幅度 0.5–1.0 dB、相位 1.5–2.0°）、ADC 量化（典型 12–16 位；4–6 位出现明显阶梯畸变）、以及以完整 802.11n/ac OFDM 子载波结构建模的窄带 Wi-Fi 干扰（每 20 MHz 信道 64 个 312.5 kHz 子载波；示例用 Wi-Fi 信道 6，2427–2447 MHz）。参数范围取自商用数据手册与现场测量。Mode 3 的双向交换通过在同一信道上以独立噪声跑两遍损伤链并构成 Y_comb[k] = Y_A[k]·Y_B[k] 来复现，从而抵消对称相位项并使随距离变化的相位斜率加倍。

验证是定性的：取自 Wieme 等人公开数据集的一段 5 m 视距采集（Nordic nRF54L15-DK，类仓库环境，完整 72 音 Mode 3 序列）与匹配静态多径配置下的仿真响应对比，二者呈现相同形态——更陡的斜率、多次缠绕、音调间快速跳变。论文明确不评估任何距离估计器、不报告测距精度；它输出复数频域音调响应，作为后续估计器基准测试以及与设备能耗模型耦合的基础。未说明公开代码仓库。

## Key technical points (EN)

- Scope: Bluetooth Core v6.2 CS, Mode 3 PBR, 72 active tones on 1 MHz grid over 2402–2480 MHz (7 channels excluded around BLE advertising), pseudorandom tone order.
- Channels: free-space (linear phase ramp, τ = 2d/c); static multipath from (delay, amplitude, phase) tuples; IEEE 802.15.4a CM1 stochastic multipath, Rician with K-factor.
- Impairments (datasheet/field-calibrated ranges): AWGN per tone at target SNR tied to T_PM; phase noise 1° (lab) to 5–8° (stressed consumer SoC); CFO phase ramp 0.05–0.7°/step; IQ imbalance 0.5–1.0 dB / 1.5–2.0°; ADC 12–16 bit typical (4–6 bit visibly distorted); Wi-Fi 802.11n/ac OFDM NBI with 64 × 312.5 kHz subcarriers per 20 MHz (channel 6 example).
- Bidirectional Mode 3 combination Y_comb = Y_A · Y_B with independent noise per direction: cancels symmetric phase terms, doubles distance-dependent slope.
- Validation: morphology match against a 5 m LOS nRF54L15-DK capture (Wieme open dataset, warehouse setting) using matched static multipath.
- Explicit non-goals: no estimator, no ranging-accuracy numbers; positioned as substrate for estimator benchmarking and energy-model coupling. Code availability not stated.

## Key technical points (ZH)

- 范围：Bluetooth Core v6.2 CS，Mode 3 PBR，2402–2480 MHz 上 1 MHz 网格 72 个有效音调（BLE 广播信道附近排除 7 个），伪随机音调顺序。
- 信道：自由空间（线性相位斜坡，τ = 2d/c）；由（时延、幅度、相位）三元组定义的静态多径；IEEE 802.15.4a CM1 随机多径，含 K 因子的莱斯分布。
- 损伤（按数据手册/现场标定的范围）：逐音调按目标 SNR 的 AWGN，噪声带宽与 T_PM 绑定；相位噪声 1°（实验室）到 5–8°（受压消费级 SoC）；CFO 相位斜坡 0.05–0.7°/步；IQ 失衡 0.5–1.0 dB / 1.5–2.0°；ADC 典型 12–16 位（4–6 位明显畸变）；Wi-Fi 802.11n/ac OFDM 窄带干扰，每 20 MHz 64×312.5 kHz 子载波（示例信道 6）。
- 双向 Mode 3 合成 Y_comb = Y_A · Y_B，两方向噪声独立：抵消对称相位项、距离相关斜率加倍。
- 验证：与 Wieme 公开数据集中 5 m 视距 nRF54L15-DK 采集（仓库环境）在匹配静态多径下的形态对比。
- 明确不做：不含估计器、不给测距精度；定位为估计器基准与能耗模型耦合的基础。未说明代码开放情况。

## Why it matters / what's new (EN)

The KB's Channel Sounding coverage so far is either silicon/product (2026-07-06_nordic-nrf54l15-tag-channel-sounding, 2026-08-14_silabs-bg2b-coin-cell-channel-sounding-soc, 2026-08-03_metirionic-cs-distance-angle-mars) or protocol/algorithm work measured over the air (2026-05-24_arxiv-connectionless-ble-cs-pawr for PAwR-based connectionless CS; 2026-05-26_arxiv-toa-ranging-ngd-attack-bt-cs for an attack on the RTT mode). What has been missing is a controllable, spec-aligned PHY model where each error source can be toggled independently — this paper is the first such CS simulator to reach the KB, and its main practical value is the collected impairment parameter table (phase-noise, CFO-ramp, IQ and ADC ranges quoted from SoC datasheets and field data) plus the explicit Y_A·Y_B Mode 3 combination and the Wi-Fi-OFDM interference model, which give a reproducible starting point for estimator research and for interpreting the phase-versus-frequency plots seen on real nRF54L15 boards. Caveats are significant: it is a 4-page workshop-length submission, validation is a single qualitative trace comparison, no distance estimator or accuracy metric is evaluated, and no code release is stated, so its usefulness depends on whether the framework is published later.

## Why it matters / what's new (ZH)

KB 目前的 Channel Sounding 覆盖要么是芯片/产品（2026-07-06_nordic-nrf54l15-tag-channel-sounding、2026-08-14_silabs-bg2b-coin-cell-channel-sounding-soc、2026-08-03_metirionic-cs-distance-angle-mars），要么是空口实测的协议/算法工作（2026-05-24_arxiv-connectionless-ble-cs-pawr 的基于 PAwR 的无连接 CS；2026-05-26_arxiv-toa-ranging-ngd-attack-bt-cs 对 RTT 模式的攻击）。此前缺的是一个可控、贴合规范、每种误差源可独立开关的 PHY 模型——本文是进入 KB 的第一个此类 CS 仿真器，其主要实用价值在于汇总的损伤参数表（引自 SoC 数据手册与现场数据的相位噪声、CFO 斜坡、IQ 与 ADC 范围）、明确写出的 Y_A·Y_B Mode 3 合成方式，以及 Wi-Fi OFDM 干扰模型，为估计器研究和解读真实 nRF54L15 板上的相位-频率曲线提供了可复现的起点。需注意的局限也很明显：这是一篇 4 页研讨会级投稿，验证仅为单条定性曲线对比，未评估任何距离估计器或精度指标，也未说明代码开放，因此其价值取决于框架日后是否公开。

## Images
