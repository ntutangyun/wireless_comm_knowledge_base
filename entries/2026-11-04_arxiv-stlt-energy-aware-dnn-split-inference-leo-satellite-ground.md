---
id: 2026-11-04_arxiv-stlt-energy-aware-dnn-split-inference-leo-satellite-ground
date_published: 2026-10-31
date_found: 2026-11-04
technology: edge-ai
type: academic-paper
title_en: "STLT: A Novel System for Energy-Aware Distributed Inference in the Edge-Cloud-Space Continuum"
title_zh: "STLT：面向边缘-云-太空连续体的能耗感知分布式推理系统"
url: "https://arxiv.org/abs/2611.01233"
source_quality: full
topics: [split-inference, LEO, satellite-edge, DNN-partitioning, energy-aware, wildfire-detection, Jetson-Orin-Nano]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration, edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

The paper considers DNN analysis of Earth-observation imagery on LEO satellites, where on-board inference reduces downlink volume but energy is tightly limited, so the choice of where to split a network between satellite and ground station sets the combined computation and transmission energy. It argues that existing satellite-ground co-inference approaches use static split points or rely on heavy algorithms, historical telemetry or prediction models. STLT is a two-stage system: an offline analyzer (ANODA) profiles per-layer cumulative FLOPs and output sizes and keeps only the lower convex hull as candidate split points; an on-board algorithm (ANELA) then makes a lightweight per-task decision to split at one of those layers or reject the task, using filters on computation budget, downlink capacity and projected energy for the next window.

Evaluation uses a Jetson Orin Nano CPU, five DNNs (SqueezeNet1.1, Swin-V2-T, EfficientNet-B4, ResNet50, DenseNet169) and 220 five-orbit segments from 125 days of BUPT-1 satellite telemetry. The authors report a 30.7% average reduction in candidate split points versus DNNSplit, 25.1% lower decision latency and 27.5% lower decision energy, and, against the SLICE co-inference baseline, 256,778 versus 230,426 delivered tasks (up to 20.1% more, per model) with 8.8% less energy.

## Summary (ZH)

论文考虑在近地轨道（LEO）卫星上对对地观测图像做 DNN 分析：星上推理可减少下行数据量，但能量严格受限，因此在卫星与地面站之间何处切分网络，决定了计算与传输的总能耗。论文认为现有星地协同推理方法要么使用静态切分点，要么依赖复杂算法、历史遥测或预测模型。STLT 是两阶段系统：离线分析器（ANODA）统计各层累计 FLOPs 与输出大小，仅保留下凸包作为候选切分点；星上算法（ANELA）随后为每个任务做轻量决策，在这些层之一切分或拒绝任务，决策依据计算预算、下行容量与下一窗口预计能量的过滤条件。

评测使用 Jetson Orin Nano CPU、五个 DNN（SqueezeNet1.1、Swin-V2-T、EfficientNet-B4、ResNet50、DenseNet169）以及来自 BUPT-1 卫星 125 天遥测的 220 段五圈轨道数据。作者报告：相对 DNNSplit，候选切分点平均减少 30.7%，决策延迟降低 25.1%，决策能耗降低 27.5%；相对 SLICE 协同推理基线，送达任务数为 256,778 对 230,426（按模型最多多 20.1%），能耗少 8.8%。

## Key technical points (EN)

- **Use case**: wildfire detection with SqueezeNet1.1 on 4096x4096 imagery, one image every 30 s, a 90-minute orbit with a 5-minute X-band window at 20 Mbps; raw transmission delivers 1.8% of tasks at 104.7 J per image, while splits in the 50-60 percentile range use about 13.7 J and deliver 36.6%.
- **ANODA**: Andrew's monotone chain over (cumulative FLOPs, output size) points; candidate sets shrink for Swin-V2-T (3 vs 4), EfficientNet-B4 (5 vs 7), ResNet50 (2 vs 4) and DenseNet169 (3 vs 6) and are equal for SqueezeNet1.1.
- **ANELA**: greedy per-task selection returning the minimum-energy feasible split or a rejection; a reservation rule switches behaviour when energy, not downlink capacity, is the binding limit. Average cost 0.0157 ms and 0.056 mJ per decision.
- **End-to-end**: 11.84 MJ versus 12.98 MJ for SLICE; wasted energy on undelivered tasks 1.3% (STLT), 7.0% (SLICE), 8.9% (TOBC); 5.7% of offered tasks rejected. At a lower energy budget (rho = 0.008) STLT still delivers 48.7-67.5% of tasks while SLICE becomes infeasible.
- **Stated limits**: energy is modelled analytically from FLOPs on a CPU; the downlink is a fixed Shannon-rate link with no protocol overhead or retransmission; solar input uses the recorded profile as a perfect forecast; inter-satellite links, sensing, storage and queuing energy are excluded.

## Key technical points (ZH)

- **用例**：用 SqueezeNet1.1 在 4096x4096 图像上做野火检测，每 30 s 一张，轨道周期 90 分钟，X 波段 5 分钟窗口、20 Mbps；原始图像传输仅送达 1.8% 的任务、每张 104.7 J，而位于 50-60 百分位的切分点约 13.7 J、送达 36.6%。
- **ANODA**：对（累计 FLOPs，输出大小）点做 Andrew 单调链；候选集在 Swin-V2-T（3 对 4）、EfficientNet-B4（5 对 7）、ResNet50（2 对 4）、DenseNet169（3 对 6）上缩小，在 SqueezeNet1.1 上相同。
- **ANELA**：逐任务贪心选择，返回能耗最小的可行切分或拒绝；当能量而非下行容量成为约束时，预留规则切换行为。每次决策平均 0.0157 ms、0.056 mJ。
- **端到端**：EO 能耗 11.84 MJ，对 SLICE 的 12.98 MJ；未送达任务浪费的能量为 1.3%（STLT）、7.0%（SLICE）、8.9%（TOBC）；5.7% 的到达任务被拒绝。在更低能量预算（rho = 0.008）下，STLT 仍送达 48.7-67.5% 的任务，而 SLICE 变得不可行。
- **论文所述局限**：能耗由 CPU 上的 FLOPs 解析建模；下行链路为固定的香农速率链路，不含协议开销或重传；太阳能输入把记录曲线当作完美预测；未计入星间链路、传感、存储与排队能耗。

## Why it matters / what's new (EN)

The paper's contribution is a partitioning policy: it treats the split point as a runtime, energy-constrained decision and shows that pruning candidates offline keeps the on-board decision cheap. The downlink is modelled as a fixed Shannon-rate link. Results come from analytic energy modelling plus real telemetry replay, not from on-orbit measurement. To appear at Middleware '26 (arXiv v1); authors at TU Wien and the University of Extremadura.

## Why it matters / what's new (ZH)

论文的贡献是一种切分策略：把切分点视为运行时、受能量约束的决策，并表明离线裁剪候选可使星上决策保持廉价。下行链路被建模为固定香农速率链路。结果来自解析能耗建模加真实遥测回放，而非在轨实测。论文将发表于 Middleware '26（arXiv v1）；作者来自维也纳工业大学与埃斯特雷马杜拉大学。

## Images

None.
