---
id: 2026-10-15_arxiv-open-ran-ntn-functional-split-csi-aging-kan-lstm
date_published: 2026-10-10
date_found: 2026-10-15
technology: satellite
type: academic-paper
title_en: "CSI-Aging-Aware Functional Split Optimization and KAN-LSTM Prediction for Open-RAN NTN"
title_zh: "面向 Open-RAN NTN 的 CSI 老化感知功能拆分优化与 KAN-LSTM 预测"
url: "https://arxiv.org/abs/2610.15178"
source_quality: abstract
topics: [Open-RAN, NTN, functional-split, CSI-aging, KAN-LSTM]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Dimitrov, Triwidyastuti, Guven, Do and Karabulut Kurt study functional-split selection for an Open RAN deployed as a non-terrestrial network in which a LEO satellite hosts the radio unit. Each candidate split (7.2x, 6, 2) places the RAN at a distinct point of the transparent-to-regenerative axis.

The paper captures the space-ground geometry through an instantaneous link plane, giving closed-form slant range, elevation, delay and Doppler for an inclined orbit and a rotating Earth. On this geometry it derives the received-SNR density of the elevation-driven LOS/NLOS mixture channel and, through a split-dependent CSI-aging mechanism, an uncoded bit-error-rate law for each split. The authors conclude that what separates the splits is the freshness of the CSI each brings to its adaptation loops: a loop closed on the ground pays the feeder round-trip and incurs an aging-induced error floor.

Split selection is formulated as a prefer-centralized feasibility problem over reliability, aging and fronthaul-capacity constraints. Its exact solution is a closed-form region rule in four state coordinates, validated against exhaustive enumeration without a mismatch. Because this solution is reactive whereas a split change must be initiated ahead of time, the paper proposes a compact Kolmogorov-Arnold network (KAN)-LSTM, sized for an edge xApp/rApp, that predicts the split schedule seconds ahead. It is reported to attain high schedule accuracy at a sub-percent BER-violation probability and to deliver nearly all of the ground-truth policy's goodput, outperforming naive and reactive baselines. This entry is based on the abstract.

## Summary (ZH)

Dimitrov、Triwidyastuti、Guven、Do 和 Karabulut Kurt 研究部署为非地面网络的 Open RAN 的功能拆分选择，其中低轨卫星承载无线单元。每个候选拆分（7.2x、6、2）将 RAN 置于透明到再生轴上的不同位置。

论文通过瞬时链路平面刻画星地几何，得到倾斜轨道和自转地球下斜距、仰角、时延和多普勒的闭式表达。在此几何基础上，推导了由仰角驱动的 LOS/NLOS 混合信道的接收 SNR 密度，并通过与拆分相关的 CSI 老化机制，得到每种拆分的未编码误码率规律。作者得出结论：区分各拆分的是它们为自适应环路带来的 CSI 新鲜度；在地面闭合的环路需承担馈电链路往返时延，并出现由老化导致的误差平台。

拆分选择被表述为针对可靠性、老化和前传容量约束的“优先集中式”可行性问题。其精确解是四个状态坐标上的闭式区域规则，并与穷举枚举对照验证，未出现不一致。由于该解是反应式的，而拆分切换需要提前启动，论文提出面向边缘 xApp/rApp 规模的紧凑 Kolmogorov-Arnold 网络（KAN）-LSTM，提前数秒预测拆分调度。据报告，其调度准确率高、BER 违约概率低于百分之一，并能实现几乎全部真值策略的吞吐，优于朴素和反应式基线。本条目基于摘要。

## Key technical points (EN)

- **Candidate splits**: 7.2x, 6 and 2, each at a distinct point of the transparent-to-regenerative axis.
- **Geometry**: closed-form slant range, elevation, delay and Doppler for an inclined orbit and rotating Earth.
- **CSI aging**: split-dependent; a loop closed on the ground pays the feeder round-trip and incurs an aging-induced error floor.
- **Decision rule**: exact closed-form region rule in four state coordinates, validated against exhaustive enumeration.
- **Prediction**: compact KAN-LSTM for an edge xApp/rApp predicts the split schedule seconds ahead.

## Key technical points (ZH)

- **候选拆分**：7.2x、6 和 2，各自位于透明到再生轴上的不同位置。
- **几何**：倾斜轨道与自转地球下斜距、仰角、时延和多普勒的闭式表达。
- **CSI 老化**：与拆分相关；在地面闭合的环路需承担馈电链路往返时延，并出现老化导致的误差平台。
- **决策规则**：四个状态坐标上的精确闭式区域规则，并与穷举枚举对照验证。
- **预测**：面向边缘 xApp/rApp 的紧凑 KAN-LSTM 提前数秒预测拆分调度。

## Why it matters / what's new (EN)

Ties the choice of RAN functional split on a LEO-hosted radio unit to the freshness of channel state information, and pairs a closed-form selection rule with a short-horizon schedule predictor.

## Why it matters / what's new (ZH)

将低轨承载无线单元上 RAN 功能拆分的选择与信道状态信息的新鲜度联系起来，并将闭式选择规则与短时域调度预测器配合使用。

## Images

None.
