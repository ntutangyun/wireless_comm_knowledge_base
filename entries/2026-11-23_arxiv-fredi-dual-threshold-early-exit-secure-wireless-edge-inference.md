---
id: 2026-11-23_arxiv-fredi-dual-threshold-early-exit-secure-wireless-edge-inference
date_published: 2026-09-14
date_found: 2026-11-23
technology: edge-ai
type: academic-paper
title_en: "Proportional-Fair Resource Allocation and Dual-Threshold Early-Exit Inference for Secure Cooperative Multi-Layer Edge Intelligence (FREDI, simulated wireless uplink)"
title_zh: "面向安全协同多层边缘智能的比例公平资源分配与双阈值早退出推理（FREDI，仿真无线上行）"
url: "https://arxiv.org/abs/2609.15847"
source_quality: full
topics: [early-exit, edge-inference, proportional-fairness, secure-offloading, UE-ES-association, conic-optimization]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

FREDI is a framework for event-triggered inference in a three-layer user equipment (UE) - edge server (ES) - cloud system. Each UE runs an early-exit CNN with two confidence thresholds: an event exits early as normal when its confidence falls below the lower threshold, or as critical when it exceeds the upper one; events that stay undecided through every exit are declared normal at the final exit. Events detected as critical are offloaded to an ES over a wireless uplink for detailed (multi-class) classification. The paper formulates a proportional-fair utility maximisation that jointly picks UE-ES association, bandwidth, transmit power, edge processing share and the two thresholds, with a security constraint that makes some UE-ES pairs ineligible (an eavesdropper is modelled).

The problem is split into two stages. The threshold stage exploits the fact that the set of detected critical events is monotone in both thresholds and searches the finite empirical confidence grid exactly. The resource stage, after removing infeasible UE-ES pairs and projecting out bandwidth and power analytically, becomes a mixed-integer exponential-cone program solved to a certified gap. A response-envelope argument gives a computable bound on the loss from the decomposition.

Link: simulated uplink with 20 MHz per ES, 0.2 W (23 dBm) maximum transmit power, -174 dBm/Hz noise, path-loss exponent 4 and Rayleigh fading over a 70 m serving region. The early-exit MobileNetV2 and ShuffleNetV2 classifiers are evaluated on a 2,023-image held-out test set.

## Summary (ZH)

FREDI 面向用户设备（UE）- 边缘服务器（ES）- 云三层系统中的事件触发式推理。每个 UE 运行带两个置信度阈值的早退出 CNN：置信度低于下阈值即在早期出口判为正常，高于上阈值即判为关键；在所有出口都处于未决区间的事件在最后出口保守地判为正常。被判为关键的事件经无线上行卸载到 ES 做细分类（多类别分类）。论文建立比例公平的效用最大化问题，联合选择 UE-ES 关联、带宽、发射功率、边缘处理份额与两个阈值，并加入安全约束，使部分 UE-ES 配对不可用（建模了窃听者）。

问题分为两阶段求解。阈值阶段利用"被检出的关键事件集合对两个阈值单调"这一性质，在有限的经验置信度网格上精确搜索。资源阶段在剔除不可行 UE-ES 配对并解析消去带宽与功率变量后，化为混合整数指数锥规划，求解到带证书的间隙。通过响应包络论证，给出分解损失的可计算上界。

所经链路：仿真上行，每个 ES 20 MHz，最大发射功率 0.2 W（23 dBm），噪声谱密度 -174 dBm/Hz，路径损耗指数 4，70 m 服务区内的瑞利衰落。早退出 MobileNetV2 与 ShuffleNetV2 分类器在 2,023 张留出测试图像上评估。

## Key technical points (EN)

- Dual versus single threshold (same edge budget, tight regime): with a coupled single-threshold rule, MobileNetV2 at an edge-processing ratio of 0.1 or 0.2 collapses to a true-positive rate of 0 (no sample crosses either threshold). The dual-threshold policy reaches 0.197 and 0.396 true-positive rate with 91.1% and 67.5% computation saving at the same budgets.
- Fairness: Jain's index of user utility averages at least 0.9993 across processing loads, while aggregate utility is within 0.0692 of a Sum-Utility benchmark at worst (5.5252 vs 5.5944 at load 2).
- Security: when the share of eligible UE-ES pairs falls to 0.444 the service ratio drops to about 0.661 and 14% of realisations are infeasible; the cause is resource fragmentation, with capacity stranded at ESs rather than missing in aggregate.
- Scalability: 6 to 144 UEs with median solve time below 0.1 s in the tested configurations.

## Key technical points (ZH)

- 双阈值与单阈值对比（相同边缘预算、紧预算区间）：在耦合的单阈值规则下，MobileNetV2 在边缘处理比 0.1 或 0.2 时真阳性率降为 0（没有样本越过任一阈值）；双阈值策略在相同预算下真阳性率分别为 0.197 与 0.396，计算节省分别为 91.1% 与 67.5%。
- 公平性：各处理负载下用户效用的 Jain 指数均值不低于 0.9993，总效用与 Sum-Utility 基准最差仅相差 0.0692（负载 2 时 5.5252 对 5.5944）。
- 安全：当可用 UE-ES 配对比例降到 0.444 时，服务比约降至 0.661，14% 的实现不可行；原因是资源碎片化，容量滞留在 ES 上，而非总量不足。
- 可扩展性：6 到 144 个 UE，在测试配置中求解时间中位数低于 0.1 s。

## Why it matters / what's new (EN)

The offloading entries already in the KB mostly choose a split point or schedule a link; this one sits on the "when to offload at all" side, where a local early-exit decision determines how much load reaches the uplink and the edge. The result that tying the two thresholds together can drive critical-event detection to zero for one backbone (MobileNetV2) under a tight edge budget, while decoupling them restores detection, is a useful, checkable observation. The radio is simulated and the classification results come from a small image set, so the numbers describe the optimisation framework, not a deployed system.

## Why it matters / what's new (ZH)

KB 中已有的卸载条目多半选择切分点或调度链路；本文处于"是否卸载"一侧，由本地早退出决策决定多少负载进入上行与边缘。“在紧边缘预算下，把两个阈值绑定会使某一主干网络（MobileNetV2）的关键事件检出率降为零，而解耦后可恢复检出”这一结论有参考价值且可复核。无线部分为仿真，分类结果来自较小的图像集，因此数字描述的是优化框架，而非已部署系统。

## Images

![Cooperative UE-edge-cloud inference system with early-exit screening | 带早退出筛选的 UE-边缘-云协同推理系统](https://arxiv.org/html/2609.15847v1/QML_Edge_AI_Integrated_System_and_Inference_crop.png)
