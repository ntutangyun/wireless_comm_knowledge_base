---
id: 2026-07-04_arxiv-csi-simulation-agc-calibration
date_published: 2026-07-02
date_found: 2026-07-04
type: academic-paper
title_en: "CSI Simulation: Why Additive Noise Fails and How to Fix It — AGC breaks AWGN-based Wi-Fi CSI augmentation; M_QTC quantile/copula calibration closes the gap"
title_zh: "CSI 仿真：为什么加性噪声不成立及其修复 — AGC 破坏基于 AWGN 的 Wi-Fi CSI 数据增强；M_QTC 分位数/Copula 校准弥合差距"
url: "https://arxiv.org/abs/2607.01882"
source_quality: full
topics: [WiFi-sensing, CSI, machine-learning, jamming]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi, security-privacy]
novelty_score: 3
---

## Summary (EN)

Researchers from Inria Lille (Bouferroum, Loscri) and the University of Luxembourg (Alla, Lenders) empirically demolish a near-universal assumption in Wi-Fi sensing research: that synthetic CSI training data can be produced by adding white Gaussian noise (AWGN) to recorded channel estimates. The additive model implicitly assumes the receiver chain between antenna and channel estimator is linear and gain-invariant. Using RF jamming as a controlled, power-calibrated perturbation on 6 commodity receivers across 2 indoor environments (a controlled room and an active multipath laboratory), they show the assumption does not hold: automatic gain control (AGC) compresses the channel estimate *multiplicatively* before digitization, producing amplitude distributions that no additive noise variance can reproduce. AWGN-trained jamming detectors consequently perform near random on real data.

The proposed fix, M_QTC, is a measurement-calibrated simulation model with three components: per-subcarrier quantile mapping (learning the true distribution transformation regardless of its parametric form), temporal filtering, and copula-based (Iman-Conover rank reordering) cross-subcarrier correlation matching that preserves per-subcarrier marginals exactly. M_QTC reduces amplitude error (first Wasserstein distance on per-subcarrier magnitude distributions) 8-fold and closes 89% of the aggregate fidelity gap across four dimensions (amplitude, phase, temporal, spectral).

The testbed is unambiguously Wi-Fi: a Raspberry Pi 5 access point running 802.11n HT20 on channel 13, ESP32-C6 receivers extracting K=52 subcarrier CSI at ~3 fps over MQTT, and a HackRF One transmitting pre-generated jamming waveforms. Downstream, 5 classifier families (LR, SVM-RBF, RF, MLP, autoencoder) trained on M_QTC-simulated data recover 93% of real-data jamming-detection performance at the hardest 10 dB IF-gain setting, versus near-random for AWGN training. External validation on three public Wi-Fi CSI datasets (Wallhack1.8k on ESP32, SignFi and Widar 3.0 on Intel 5300) shows large amplitude-fidelity improvements over prior augmentation work (e.g. 5.7× better Wasserstein distance on Widar than Strohmayer et al.). The authors note the AGC-induced distortion mechanism likely extends to 802.11be and 5G NR CSI, though validating those platforms is future work.

## Summary (ZH)

Inria Lille（Bouferroum、Loscri）与卢森堡大学（Alla、Lenders）的研究者用实证方法推翻了 Wi-Fi 感知研究中一个几乎普遍的假设：可以通过向实测信道估计添加高斯白噪声（AWGN）来生成合成 CSI 训练数据。加性模型隐含假设从天线到信道估计器之间的接收链是线性且增益不变的。他们以射频干扰（jamming）作为功率可控的受控扰动，在 2 个室内环境（受控房间与活跃多径实验室）中对 6 台商用接收机进行测试，结果表明该假设不成立：自动增益控制（AGC）在数字化之前对信道估计进行*乘性*压缩，产生的幅度分布是任何加性噪声方差都无法复现的。因此用 AWGN 训练的干扰检测器在真实数据上表现接近随机。

论文提出的修复方案 M_QTC 是一个基于实测校准的仿真模型，包含三个组件：逐子载波分位数映射（无需参数化形式即可学习真实分布变换）、时域滤波、以及基于 Copula（Iman-Conover 秩重排）的跨子载波相关性匹配（严格保持逐子载波边缘分布）。M_QTC 将幅度误差（逐子载波幅度分布的一阶 Wasserstein 距离）降低 8 倍，并在幅度、相位、时域、频谱四个维度上弥合了 89% 的总体保真度差距。

测试平台明确是 Wi-Fi：树莓派 5 作为 802.11n HT20 接入点（信道 13），ESP32-C6 接收机以约 3 fps 通过 MQTT 提取 K=52 子载波 CSI，HackRF One 发射预生成的干扰波形。下游任务中，用 M_QTC 仿真数据训练的 5 类分类器（LR、SVM-RBF、随机森林、MLP、自编码器）在最难的 10 dB 中频增益设置下恢复了 93% 的真实数据干扰检测性能，而 AWGN 训练的分类器接近随机。在三个公开 Wi-Fi CSI 数据集（ESP32 的 Wallhack1.8k、Intel 5300 的 SignFi 与 Widar 3.0）上的外部验证显示，其幅度保真度大幅优于既有增强方法（如在 Widar 上 Wasserstein 距离比 Strohmayer 等人的方法好 5.7 倍）。作者指出 AGC 引起的失真机制很可能同样存在于 802.11be 与 5G NR 的 CSI 中，但对这些平台的验证留待后续工作。

## Key technical points (EN)

- Core empirical finding: AGC in commodity Wi-Fi receiver chains makes interference act *multiplicatively* on the reported channel estimate — signal and noise are compressed together by an instantaneous-power-dependent factor, so the CSI amplitude distribution has a fundamentally different shape than any additive model predicts.
- M_QTC = per-subcarrier quantile mapping + temporal filtering + copula-based (Iman-Conover) cross-subcarrier rank reordering; the copula stage is identified by ablation as the dominant mechanism.
- 8× reduction in amplitude Wasserstein distance; 89% of the 4-dimension (amplitude/phase/temporal/spectral) aggregate fidelity gap closed.
- Sim-to-real transfer: classifiers trained purely on M_QTC synthetic CSI reach 0.9+ AUC on real jamming detection (93% of the real-data-trained oracle at 10 dB IF gain, mean across 5 receivers × 5 classifier families), while AWGN-trained classifiers are near random.
- Testbed: Raspberry Pi 5 AP (802.11n HT20, ch 13), 1–5 ESP32-C6 CSI receivers (52 subcarriers, ~3 fps via MQTT), HackRF One jammer; controlled room + active lab with ambient Wi-Fi.
- External validation on Wallhack1.8k (ESP32), SignFi and Widar 3.0 (Intel 5300); prior work Portner et al. confirmed AGC-induced distortion via cable-coupled measurements, supporting cross-platform applicability.
- Computational cost is modest for K=52 subcarriers; calibration is per-device.

## Key technical points (ZH)

- 核心实证发现：商用 Wi-Fi 接收链中的 AGC 使干扰对上报信道估计产生*乘性*作用 — 信号与噪声被瞬时功率相关的系数一同压缩，因此 CSI 幅度分布的形状与任何加性模型的预测都存在本质差异。
- M_QTC = 逐子载波分位数映射 + 时域滤波 + 基于 Copula（Iman-Conover）的跨子载波秩重排；消融实验表明 Copula 阶段是主导机制。
- 幅度 Wasserstein 距离降低 8 倍；幅度/相位/时域/频谱四维总体保真度差距弥合 89%。
- 仿真到真实迁移：仅用 M_QTC 合成 CSI 训练的分类器在真实干扰检测上达到 0.9+ AUC（10 dB 中频增益下达到真实数据训练基准的 93%，5 台接收机 × 5 类分类器平均），而 AWGN 训练的分类器接近随机。
- 测试平台：树莓派 5 AP（802.11n HT20，信道 13）、1–5 台 ESP32-C6 CSI 接收机（52 子载波，约 3 fps，MQTT 传输）、HackRF One 干扰机；受控房间 + 有环境 Wi-Fi 的活跃实验室。
- 在 Wallhack1.8k（ESP32）、SignFi 与 Widar 3.0（Intel 5300）上完成外部验证；先前 Portner 等人的有线耦合测量已证实 AGC 失真的跨平台存在性。
- K=52 子载波配置下计算开销较小；校准按设备进行。

## Why it matters / what's new (EN)

This is the first entry in the KB to attack the *simulation validity* layer of Wi-Fi sensing rather than the sensing application layer. Existing sensing-csi entries (e.g. the CREWS collaborative edge sensing entry 2026-06-01_arxiv-crews-collaborative-edge-sensing) assume CSI training pipelines work; this paper shows the standard AWGN augmentation used across gesture recognition, activity recognition, indoor localization and 5G positioning inherits a receiver-chain linearity assumption that commodity hardware violates. That has broad consequences: any ML-for-Wi-Fi-sensing result trained on additively-augmented synthetic CSI is suspect until re-validated. The M_QTC recipe (quantile mapping + copula reordering, calibrated per device from a modest measurement set) is a practical, distribution-free correction that other groups can adopt immediately, and the jamming-detection use case connects the sensing-csi bin to the security side of the KB.

## Why it matters / what's new (ZH)

这是 KB 中第一条针对 Wi-Fi 感知*仿真有效性*层面（而非感知应用层面）的条目。现有 sensing-csi 条目（如 2026-06-01_arxiv-crews-collaborative-edge-sensing 协作边缘感知）都默认 CSI 训练管线是可靠的；本文表明手势识别、行为识别、室内定位和 5G 定位领域广泛使用的标准 AWGN 增强继承了一个商用硬件并不满足的接收链线性假设。其影响很广：任何基于加性增强合成 CSI 训练的 Wi-Fi 感知 ML 结果在重新验证之前都值得怀疑。M_QTC 方案（分位数映射 + Copula 重排，按设备用少量实测数据校准）是一个实用的、无分布假设的修正方法，其他团队可以立即采用；其干扰检测用例也将 sensing-csi 主题与 KB 的安全侧联系起来。
