---
id: 2026-06-01_arxiv-crews-collaborative-edge-wifi-sensing
date_published: 2026-04-22
date_found: 2026-06-01
type: academic-paper
title_en: "CREWS: Collaborative Robust Edge WiFi Sensing with Asynchronous and Incomplete Observations"
title_zh: "CREWS：面向异步与不完整观测的协同鲁棒边缘 Wi-Fi 感知"
url: "https://arxiv.org/abs/2605.30356"
source_quality: abstract_only
topics: [WiFi-sensing, CSI, edge-AI, distributed-learning]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
CREWS targets a gap between lab-grade collaborative Wi-Fi sensing and what actually happens when several sensing nodes run at the edge: heterogeneous compute, network dropouts, and clock skew all produce **asynchronous and incomplete feature streams**. Conventional multi-node CSI fusion assumes every node reports complete features on a synchronized cadence; when that assumption breaks, accuracy collapses. CREWS is designed to keep working when features arrive out of order, late, or not at all.

Two mechanisms carry the design. First, a **topology-agnostic aggregator** that is invariant to both the arrival order and the subset size of incoming features — the fusion step does not care which nodes reported, or in what sequence, so a missing or delayed node degrades gracefully instead of breaking the pipeline. Second, a **staleness-aware adaptive replay** mechanism that, rather than discarding late observations from lagging nodes, treats those stale features as "system-induced hard samples" and replays them as a form of training regularization — turning the very synchronization delays that hurt other systems into a source of robustness. The authors give a theoretical analysis arguing joint convergence of the architecture and showing how replay bounds the bias–variance trade-off.

Evaluated on an **8-node heterogeneous hardware testbed**, CREWS holds accuracy degradation to **2.2 percentage points under a 50% transient dropout rate or out-of-distribution jitter**, substantially ahead of state-of-the-art baselines that assume synchronized, complete inputs.

## Summary (ZH)
CREWS 针对的是"实验室级协同 Wi-Fi 感知"与"真实边缘部署"之间的落差：异构算力、网络丢包与时钟漂移共同导致**异步且不完整的特征流**。传统多节点 CSI 融合假设每个节点都按同步节奏上报完整特征；一旦该假设被打破，精度便急剧下降。CREWS 的目标正是在特征乱序、迟到甚至缺失时仍能正常工作。

设计由两个机制支撑。其一是**拓扑无关聚合器**——对到达顺序与到达特征子集大小均不变，融合步骤不在意是哪些节点上报、以何种次序上报，因此缺失或迟到的节点只会带来优雅降级而非流水线崩溃。其二是**陈旧度感知的自适应重放**机制：对于落后节点的迟到观测，不是丢弃，而是将这些陈旧特征视为"系统诱发的难样本"，作为训练正则化进行重放——把别的系统受其所害的同步时延，转化为鲁棒性的来源。作者给出理论分析，论证该架构的联合收敛性，并说明重放如何约束偏差—方差权衡。

在**8 节点异构硬件测试床**上评测，CREWS 在**50% 瞬态丢包率或分布外抖动**下将精度下降控制在 **2.2 个百分点**，显著优于假设输入同步且完整的当前最优基线。

## Key technical points (EN)
- Problem: edge collaborative Wi-Fi sensing must tolerate heterogeneous compute, dropouts, and clock skew → asynchronous + incomplete CSI feature streams.
- Topology-agnostic aggregator: invariant to arrival order and subset size of incoming node features; missing/late nodes degrade gracefully.
- Staleness-aware adaptive replay: stale features from lagging nodes are treated as system-induced hard samples and replayed as regularization rather than discarded.
- Theory: joint-convergence analysis; replay shown to bound the bias–variance trade-off.
- Testbed: 8-node heterogeneous hardware; under 50% transient dropout or OOD jitter, accuracy drop limited to 2.2 pp vs SOTA baselines that assume synchronized, complete input.

## Key technical points (ZH)
- 问题：边缘协同 Wi-Fi 感知须容忍异构算力、丢包与时钟漂移 → 异步且不完整的 CSI 特征流。
- 拓扑无关聚合器：对节点特征的到达顺序与子集大小不变；缺失/迟到节点优雅降级。
- 陈旧度感知自适应重放：把落后节点的陈旧特征视为"系统诱发难样本"并作为正则化重放，而非丢弃。
- 理论：联合收敛性分析；证明重放可约束偏差—方差权衡。
- 测试床：8 节点异构硬件；在 50% 瞬态丢包或分布外抖动下，精度下降仅 2.2 个百分点，优于假设同步完整输入的当前最优基线。

## Why it matters / what's new (EN)
Most collaborative-sensing entries in this KB assume well-behaved, synchronized multi-node inputs. CREWS is a robustness-first design that explicitly models the failure modes of real edge deployments (dropout, jitter, stragglers) and converts them into training signal. The topology-agnostic aggregator + staleness-aware replay pairing is a distributed-learning contribution applied to the 802.11bf/CSI sensing setting, complementing the sensing-mechanism entries already filed under `sensing-csi`.

## Why it matters / what's new (ZH)
本 KB 中多数协同感知条目都假设多节点输入规整且同步。CREWS 是一种鲁棒性优先的设计，显式建模真实边缘部署的失效模式（丢包、抖动、掉队节点）并将其转化为训练信号。拓扑无关聚合器 + 陈旧度感知重放的组合，是把分布式学习贡献落地到 802.11bf/CSI 感知场景，与 `sensing-csi` 下已有的感知机制条目形成互补。
