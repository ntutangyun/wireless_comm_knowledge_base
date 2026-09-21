---
id: 2026-09-21_arxiv-termon-hardware-runtime-monitor-edge-ai
date_published: 2026-09-18
date_found: 2026-09-21
technology: edge-ai
type: academic-paper
title_en: "TERMon: Detecting Persistent Behavioral Threats in Edge AI via Hardware-Native Ternary Runtime Monitor"
title_zh: "TERMon：通过硬件原生三值运行时监控器检测边缘 AI 中的持续性行为威胁"
url: "https://arxiv.org/abs/2609.21713"
source_quality: full
topics: [runtime-monitoring, FPGA, model-integrity, weight-corruption, security]
topic_primary: edge-ai-silicon
topics_secondary: []
novelty_score: 4
---

## Summary (EN)

Arish Sateesan and Edlira Dushku (Aalborg University, Copenhagen) submitted this paper to arXiv on 18 September 2026; it has been accepted at AISec '26, the 19th Workshop on Artificial Intelligence and Security (15-19 November 2026, The Hague; DOI 10.1145/3847352.3848113). It addresses a specific gap in edge AI reliability: accelerators are increasingly deployed in safety-critical settings where model outputs can control physical actuators, make access-control decisions, or trigger alarms, yet runtime failures often go undetected because model corruption, distribution shift, and adversarial inputs can still produce well-formed, confident predictions. Existing defenses either re-execute the model or attempt formal verification, which the paper argues are respectively costly and impractical at edge scale; TERMon instead observes inference *behavior* directly in hardware.

TERMon represents class-conditional "trusted" behavior as hardware-efficient ternary patterns, fitted from 50,000 clean training inferences at a 1% false-positive budget split across the eight monitored features, and matches incoming inference activity against a thermometer-encoded fingerprint in parallel; the ternary encoding is designed to reproduce the corresponding unquantized range decision exactly. The authors implemented TERMon on a PYNQ-Z2 FPGA (Zynq-7020 device) monitoring a small CNN (three convolutional layers of 32/64/128 channels plus two fully connected layers, ~0.6M parameters, 84.0% test accuracy on CIFAR-10). The pipelined hardware monitor uses 3,733 LUTs (7.02% of the device) and 6,121 flip-flops (5.75%) including the AXI-Lite wrapper (the monitor core alone is 2,335 LUTs), needs no block RAM or DSP slices, decides in two clock cycles, runs at up to 136 MHz, and is estimated to draw 151 mW on-chip (47 mW dynamic). On detection performance, the results are mixed: TERMon detects 88.1% of harmful weight corruptions (mean rate) while flagging benign corruptions at 1.0-1.1%, matching the 1.03% clean false-positive rate — but out-of-distribution inputs (SVHN test set) are detected only 13.6% of the time at the 1% false-positive operating point, and adversarial examples are detected at 16.1% (PGD-10, epsilon=8/255) and just 1.3% (FGSM), both measured on the successfully-fooled subsets (3,233 of 4,000 for FGSM, 3,339 of 4,000 for PGD). The paper's own framing states that OOD and adversarial inputs are "largely not separable using the monitored features" at that strict operating point — i.e. the mechanism is shown to work well for its intended target (weight-corruption detection proportional to behavioral impact) but is explicitly not presented as a general anomaly detector.

## Summary (ZH)

奥尔堡大学（哥本哈根）的 Arish Sateesan 与 Edlira Dushku 于 2026 年 9 月 18 日向 arXiv 提交了本文（论文已被 AISec '26——第 19 届人工智能与安全研讨会，2026 年 11 月 15–19 日于海牙举行——接收；DOI 10.1145/3847352.3848113），处理的是边缘 AI 可靠性中的一个具体缺口：加速器正越来越多地部署于安全攸关场景，其模型输出可能控制物理执行器、做出门禁决策或触发报警，但运行时故障往往难以被察觉，因为模型损坏、分布漂移与对抗样本仍可能产生形式良好、置信度高的预测结果。现有防御手段要么重新执行模型，要么尝试形式化验证——论文认为前者代价高昂、后者在边缘规模下不切实际；TERMon 则直接在硬件层面观察推理"行为"本身。

TERMon 将类别条件下的"可信"行为表示为硬件高效的三值模式，该模式基于 50,000 次干净训练推理、在按八项被监测特征分摊的 1% 误报预算下拟合得到，并将实时推理活动与经温度计编码（thermometer-encoded）的指纹并行匹配；三值编码经设计可精确复现对应的未量化区间判定结果。作者在 PYNQ-Z2 FPGA（Zynq-7020 器件）上实现了 TERMon，用于监控一个小型 CNN（三层卷积，通道数分别为 32/64/128，另加两个全连接层，约 0.6M 参数，在 CIFAR-10 上测试准确率为 84.0%）。该流水线化硬件监控器（含 AXI-Lite 封装）使用 3,733 个 LUT（占器件 7.02%）与 6,121 个触发器（占 5.75%），其中监控核心本身仅占 2,335 个 LUT；无需片上 Block RAM 或 DSP 资源，判定延迟为两个时钟周期，最高运行频率 136MHz，估计片上功耗为 151mW（其中动态功耗 47mW）。在检测性能方面，结果喜忧参半：TERMon 对有害权重损坏的平均检测率为 88.1%，同时良性损坏误报率为 1.0%–1.1%，与 1.03% 的干净样本误报率相当；但在 1% 误报率的严格工作点下，分布外输入（SVHN 测试集）的检测率仅为 13.6%，对抗样本的检测率分别为 16.1%（PGD-10，epsilon=8/255）与仅 1.3%（FGSM），二者均在攻击成功的子集上测得（4,000 个样本中 FGSM 为 3,233 个、PGD 为 3,339 个）。论文自身也明确指出，在该严格工作点下，分布外与对抗性输入"在所监测特征上基本不可分离"——也就是说，该机制被证明在其目标场景（与行为影响成比例的权重损坏检测）上表现良好，但作者并未将其作为通用异常检测器来宣传。

## Key technical points (EN)

- **Motivation**: edge AI accelerators in safety-critical roles (actuator control, access control, alarms) can fail silently — corruption, drift, or adversarial inputs can still yield confident, well-formed outputs. The paper argues re-execution and formal verification are both impractical at edge scale.
- **Mechanism**: represents class-conditional trusted behavior as ternary patterns fitted from 50,000 clean inferences (1% FP budget split across the eight monitored features), matched in parallel against a thermometer-encoded fingerprint; the ternary encoding exactly reproduces the corresponding unquantized range decision.
- **Real hardware**: implemented on a PYNQ-Z2 FPGA (Zynq-7020) monitoring a ~0.6M-parameter CNN (84.0% CIFAR-10 accuracy). Uses 3,733 LUTs (7.02%) / 6,121 flip-flops (5.75%) including the AXI-Lite wrapper (monitor core alone: 2,335 LUTs), no BRAM/DSP, two-cycle decision latency, up to 136 MHz, ~151 mW estimated on-chip power (47 mW dynamic).
- **Detection results (mixed)**: 88.1% mean detection of harmful weight corruptions at a 1.0-1.1% false-positive rate on benign corruptions, matching the 1.03% clean false-positive rate; only 13.6% OOD detection (SVHN) and 16.1%/1.3% adversarial detection (PGD-10/FGSM, on the successfully-fooled subsets) at the 1% FP operating point — the authors state OOD/adversarial inputs are largely not separable on the monitored features at that operating point, and that they "make no claim of reliable per-input OOD detection."
- **Framing**: purpose-built for behavioral weight-corruption detection proportional to impact, not presented as a general-purpose anomaly/adversarial detector.

## Key technical points (ZH)

- **研究动机**：处于安全攸关角色（执行器控制、门禁决策、报警）的边缘 AI 加速器可能静默失效——损坏、漂移或对抗输入仍可能产生置信度高、形式良好的输出，论文认为重新执行与形式化验证在边缘规模下均不现实。
- **机制**：将类别条件下的可信行为表示为基于 50,000 次干净推理（按八项被监测特征分摊的 1% 误报预算）拟合的三值模式，与温度计编码指纹并行匹配；三值编码可精确复现对应的未量化区间判定。
- **真实硬件**：在 PYNQ-Z2 FPGA（Zynq-7020）上实现，监控一个约 0.6M 参数的 CNN（CIFAR-10 准确率 84.0%）。使用 3,733 个 LUT（7.02%）/6,121 个触发器（5.75%）（含 AXI-Lite 封装；监控核心本身仅 2,335 个 LUT），无需 BRAM/DSP，判定延迟两个时钟周期，最高频率 136MHz，估计片上功耗约 151mW（动态功耗 47mW）。
- **检测结果（喜忧参半）**：对有害权重损坏的平均检测率为 88.1%，良性损坏误报率为 1.0%–1.1%，与 1.03% 的干净样本误报率相当；但在 1% 误报工作点下，分布外检测（SVHN）仅 13.6%，对抗样本检测率分别为 16.1%（PGD-10）与 1.3%（FGSM，均在攻击成功的子集上测得）——作者指出该工作点下分布外与对抗输入在所监测特征上基本不可分离，并声明"并不宣称能够可靠地进行逐输入的分布外检测"。
- **定位**：专为与影响程度成比例的权重损坏行为检测而设计，并非作为通用异常/对抗检测器提出。

## Why it matters / what's new (EN)

This KB's edge-ai-silicon entries have so far covered compute accelerators (event-driven GNN chips, analog neuromorphic characterisation, RF-CNN's radio-hardware-as-compute) and one runtime-scheduling paper, but none focused on runtime *integrity monitoring* of an edge AI accelerator's own inference behavior. TERMon is measurement-grade (a real PYNQ-Z2 FPGA implementation with concrete LUT/flip-flop/power/latency figures) and the paper is explicit about its own limit, stating that it makes "no claim of reliable per-input OOD detection" — a concrete data point on the limits of lightweight hardware monitoring for edge AI safety.

## Why it matters / what's new (ZH)

本知识库此前的 edge-ai-silicon 条目已涵盖计算加速器本身（事件驱动 GNN 芯片、模拟神经形态芯片的温度特性、RF-CNN 利用射频硬件直接计算），以及一篇运行时调度论文，但尚未有条目聚焦于边缘 AI 加速器自身推理行为的运行时完整性监控。TERMon 属于实测级别工作（在真实 PYNQ-Z2 FPGA 上实现，给出了具体的 LUT/触发器/功耗/延迟数据），论文也明确说明了自身局限，称其"并不宣称能够可靠地进行逐输入的分布外检测"——为轻量级硬件监控在边缘 AI 安全场景中的能力边界提供了一个具体的数据点。
