---
id: 2026-09-07_arxiv-sustainable-edge-vision-dvfs-thermal-throttling
date_published: 2026-09-04
date_found: 2026-09-07
type: academic-paper
technology: edge-ai
title_en: "Sustainable Edge Vision via Empirically Calibrated DVFS: Eliminating Thermal Throttling on Passively Cooled Hardware"
title_zh: "基于经验校准 DVFS 的可持续边缘视觉：消除无风扇散热硬件上的热降频"
url: "https://arxiv.org/abs/2609.04705"
source_quality: full
topics: [DVFS, thermal-throttling, passive-cooling, Raspberry-Pi, YOLOv8, edge-vision]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 4
---

## Summary (EN)

Passive cooling — no fan, no moving parts — is attractive for edge deployment because it removes both the energy overhead and the mechanical failure modes of active cooling. But sustained DNN inference on a passively cooled edge SoC runs into thermal throttling: the authors (University of Southern Mississippi) measure 1,823 throttle events over a 30-minute run of YOLOv8n at full speed on a Raspberry Pi 5, as the chip's own heat drives it into hardware-enforced frequency cuts. Existing DVFS (Dynamic Voltage and Frequency Scaling) controllers for this problem are reactive and temperature-only, which the paper argues fails to account for the thermal inertia of a passive system — by the time a purely reactive controller reacts to a temperature reading, the chip may already be committed to overshoot.

The paper's fix is a proactive, empirically calibrated DVFS scheduler built from measured thermal behaviour rather than a generic heuristic. It defines three frequency states (2400/1800/1500 MHz) with escalation and recovery thresholds derived from the board's own measured thermal plateaus (escalate at 75°C/79°C, recover at 71°C/68°C, with a 3-consecutive-sample confirmation and ≥1.75°C hysteresis to avoid chattering); a time-domain "dwell guard" that holds each state for at least 20 seconds (twice the board's measured 10-second thermal time constant) to prevent premature switching; and a derivative-trigger safeguard that watches the temperature's rate of change (0.5°C/s, 6.6x the sensor's own noise floor) to catch sharp spikes the absolute-threshold logic alone would miss (though this trigger did not fire under the paper's nominal ambient test conditions).

Evaluated on a Raspberry Pi 5 (Broadcom BCM2712) with a passive heatsink, running YOLOv8n (via OpenVINO 2026.0.0, FP32) on a 30-minute looped video built from RDD2022 test images, and instrumented with 2 Hz telemetry and 1 kHz inline energy measurement, the proactive scheduler eliminated all throttle events (down from 1,823 in the always-2400MHz baseline) while achieving 6.8% higher frame rate than a reactive-threshold-only baseline (Cohen's d = 8.73) and 1.9% less energy per frame. An ablation that removes the dwell guard shows why it matters: FPS standard deviation increases roughly 6x (0.070 to 0.426), destroying run-to-run reproducibility. The paper also reports the scheduler's passive-cooling energy efficiency (0.531 J/frame) beats a reference active-cooling configuration (0.563 J/frame), though the paper notes active cooling remains superior for raw throughput, and identifies the scheme's operating limit: above roughly 27°C ambient, nonlinear leakage current overwhelms the DVFS control loop's authority. A separate, incidental finding: INT8 quantization on this specific software stack (lacking ARM's I8MM instructions) actually made things worse — 43% lower FPS and 69.4% higher energy per frame than FP32 — because the INT8 model exposes only 64 INT8-typed ports against 842 FP32 ports on a stack that has NEON DotProd but lacks ARM I8MM.

## Summary (ZH)

无风扇被动散热对边缘部署很有吸引力，因为它同时消除了主动散热的能耗开销和机械故障模式。但持续的 DNN 推理在被动散热的边缘 SoC 上会遭遇热降频：作者（南密西西比大学）测得，在树莓派 5 上以全速运行 YOLOv8n 的 30 分钟测试中出现了 1823 次降频事件——芯片自身发热触发了硬件强制的频率下调。现有的 DVFS（动态电压频率调节）控制器多为"仅基于温度的被动响应式"，论文认为这种方式无法应对被动散热系统的热惯性——当被动响应式控制器对某次温度读数做出反应时，芯片可能早已"覆水难收"。

论文的解法是一种主动式、经过实测校准的 DVFS 调度器，其参数来自实测热行为而非通用启发式规则。它定义了三个频率档位（2400/1800/1500 MHz），其升档与恢复阈值均来自板卡自身实测的热平台期（升档阈值 75°C/79°C，恢复阈值 71°C/68°C，需连续 3 次采样确认、且需 ≥1.75°C 的滞回，以避免抖动）；一个时域"驻留守卫"，要求每个状态至少维持 20 秒（是板卡实测 10 秒热时间常数的两倍），以防止过早切换；以及一个基于导数的安全触发器，监测温度变化率（0.5°C/秒，为传感器自身噪声底限的 6.6 倍），用于捕捉纯阈值逻辑可能遗漏的陡峭温升（不过在论文的标称环境测试条件下该触发器并未被激活）。

该方案在带被动散热片的树莓派 5（Broadcom BCM2712）上评测，运行 YOLOv8n（通过 OpenVINO 2026.0.0，FP32），测试视频由 RDD2022 测试图片循环拼接而成、时长 30 分钟，并以 2Hz 遥测与 1kHz 内联能耗测量进行仪表化。相较于恒定 2400MHz 的基线（1823 次降频事件），主动式调度器消除了所有降频事件，同时帧率相较"仅阈值响应式"基线提高 6.8%（Cohen's d = 8.73），每帧能耗降低 1.9%。一项去掉"驻留守卫"的消融实验说明了其重要性：帧率标准差增大约 6 倍（从 0.070 增至 0.426），破坏了运行间的可复现性。论文还指出，该调度器在被动散热下的能效（0.531 焦耳/帧）优于一个主动散热参照配置（0.563 焦耳/帧），但论文指出主动散热在原始吞吐上仍然更优，并指出该方案的适用边界：环境温度约超过 27°C 时，非线性漏电流将压过 DVFS 控制回路的调节能力。另一项附带发现：在该软件栈（缺少 ARM 的 I8MM 指令）上，INT8 量化反而更差——帧率降低 43%，每帧能耗增加 69.4%——原因是该 INT8 模型在这套具备 NEON DotProd 但缺少 ARM I8MM 指令的软件栈上，仅有 64 个 INT8 类型端口，而 FP32 端口多达 842 个。

## Key technical points (EN)

- **Problem**: sustained inference on passively cooled edge SoCs triggers hardware thermal throttling; reactive temperature-only DVFS controllers don't account for thermal inertia.
- **Mechanism 1**: three frequency states (2400/1800/1500 MHz) with escalation/recovery thresholds calibrated from the board's own measured thermal plateaus, plus multi-sample confirmation and hysteresis to avoid chattering.
- **Mechanism 2**: a 20-second minimum dwell time per state (2x the measured 10s thermal time constant) to prevent premature transitions.
- **Mechanism 3**: a derivative-trigger safeguard on temperature rate-of-change (0.5°C/s, 6.6x sensor noise) as a backstop against sharp spikes.
- **Hardware**: Raspberry Pi 5 (Broadcom BCM2712, quad-core Cortex-A76, 8GB LPDDR4X), passive heatsink, YOLOv8n via OpenVINO 2026.0.0 FP32, 2 Hz telemetry, 1 kHz inline energy measurement (ChargerLAB POWER-Z KM003C).
- **Headline numbers**: 0 throttle events (vs. 1,823 at fixed max frequency); +6.8% FPS vs. reactive-threshold baseline (Cohen's d = 8.73); -1.9% energy/frame; passive scheduling beats an active-cooling reference on energy/frame (0.531 J vs. 0.563 J), though the paper notes active cooling remains superior for raw throughput; dwell-guard ablation raises FPS std. dev. ~6x.
- **Operating limit**: control authority breaks down above ~27°C ambient due to nonlinear leakage current.
- **Incidental finding**: INT8 quantization on this stack (no ARM I8MM) is worse than FP32: -43% FPS, +69.4% J/frame; the INT8 model exposes only 64 INT8-typed ports against 842 FP32 ports on a stack that has NEON DotProd but lacks ARM I8MM.
- Code and datasets released on GitHub.

## Key technical points (ZH)

- **问题**：在被动散热边缘 SoC 上持续推理会触发硬件热降频；仅基于温度的被动响应式 DVFS 控制器无法应对热惯性。
- **机制一**：三个频率档位（2400/1800/1500 MHz），升档/恢复阈值来自板卡实测热平台期校准，并配合多次采样确认与滞回以避免抖动。
- **机制二**：每个状态至少维持 20 秒驻留时间（为实测 10 秒热时间常数的两倍），防止过早切换。
- **机制三**：基于温度变化率的导数触发安全机制（0.5°C/秒，为传感器噪声的 6.6 倍），作为应对陡峭温升的后备手段。
- **硬件**：树莓派 5（Broadcom BCM2712，四核 Cortex-A76，8GB LPDDR4X），被动散热片，通过 OpenVINO 2026.0.0（FP32）运行 YOLOv8n，2Hz 遥测，1kHz 内联能耗测量（ChargerLAB POWER-Z KM003C）。
- **核心数据**：降频事件由 1823 次（固定最高频率）降至 0 次；相较"仅阈值响应式"基线帧率提升 6.8%（Cohen's d = 8.73）；每帧能耗降低 1.9%；被动散热调度方案的每帧能效（0.531 焦耳）优于一个主动散热参照配置（0.563 焦耳），但论文指出主动散热在原始吞吐上仍然更优；去除"驻留守卫"的消融实验使帧率标准差增大约 6 倍。
- **适用边界**：环境温度约超过 27°C 时，非线性漏电流会压过控制回路的调节能力。
- **附带发现**：在该软件栈（缺少 ARM I8MM 指令）上，INT8 量化效果反而劣于 FP32：帧率降低 43%，每帧能耗增加 69.4%；该 INT8 模型在这套具备 NEON DotProd 但缺少 ARM I8MM 指令的软件栈上，仅有 64 个 INT8 类型端口，而 FP32 端口多达 842 个。
- 代码与数据集已在 GitHub 开源。

## Why it matters / what's new (EN)

This KB has covered on-device efficiency papers with sub-2-second solver times, cache-eviction policies, and analog/neuromorphic silicon, but none so far have addressed the physical thermal envelope of the edge box itself as the binding constraint — this paper measures it directly (1,823 throttle events with no scheduler at all) and closes the gap with a fully characterized controller rather than a heuristic. The INT8-regression finding is a useful counterpoint to this domain's usual "lower precision is free efficiency" assumption: on this specific software/hardware combination, quantization made both latency and energy worse, for a concrete, checkable reason (missing ISA support forcing costly type conversions).

## Why it matters / what's new (ZH)

本知识库此前收录的端侧效率类论文多涉及求解耗时、缓存换出策略、模拟/神经形态芯片等角度，但此前尚无条目将"边缘设备本身的物理热包络"作为约束条件直接测量——本文直接测量了这一点（无调度器时 30 分钟内出现 1823 次降频），并给出了一个完整表征、而非启发式的控制器方案予以解决。其中 INT8 反而变差的发现，是对本领域"降低精度即可免费获得效率提升"这一常见假设的一个有价值的反例：在这一具体软硬件组合下，量化同时使延迟和能耗变差，且原因明确可查（缺失的 ISA 支持迫使系统进行代价高昂的数据类型转换）。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
