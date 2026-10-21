---
id: 2026-10-21_arxiv-fastsa-fault-tolerant-deadline-offloading-mec-backhaul
date_published: 2026-10-19
date_found: 2026-10-21
technology: edge-ai
type: academic-paper
title_en: "FastSA: deadline-constrained inference offloading with an approximation guarantee and fault recovery in a backhaul-connected MEC system"
title_zh: "FastSA：回传网络互联 MEC 系统中带近似保证与故障恢复的截止期约束推理卸载"
url: "https://arxiv.org/abs/2610.26142"
source_quality: full
topics: [task-offloading, approximation-algorithm, fault-tolerance, mecRT, backhaul-forwarding]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration, edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

The paper studies a Deadline-constrained task Offloading and resource Allocation Problem (DOAP) in a Mobile Edge Computing system where edge servers are linked by a wired backhaul and have both bandwidth and computational limits. The objective is to maximise total inference-accuracy improvement across tasks. The authors formulate it as an integer linear program, prove it NP-hard by reduction from maximum-weight three-dimensional matching, and present FastSA, a linear-time local-ratio algorithm with a 1/10 approximation ratio. They state that, to their knowledge, FastSA gives the first constant-factor guarantee for backhaul-enabled DOAPs. They add a fault detection and recovery framework: link-state information is synchronised by OSPF-like flooding, neighbours exchange HELLO/ACK messages and mark a link or server failed after two consecutive missed ACKs, each network partition elects a global scheduler, and services on affected servers are terminated, and recovered links or servers are reintegrated into the topology.

Experiments extend the open-source mecRT simulator with Shanghai taxi GPS traces (80 taxis, 11 km x 11 km, 15 minutes), 15 edge servers (270 bandwidth units, 20 computing units each), profiled image-classification workloads, and Greedy, Game and Graph benchmarks. The authors report FastSA measured accuracy improvement above Greedy by 15.3%, Game by 31.1% and Graph by 33.3% (25.6% average in the abstract) in fault-free runs, and the fault-recovery framework reducing degradation by 12.8% on average under injected faults.

## Summary (ZH)

论文研究移动边缘计算系统中的截止期约束任务卸载与资源分配问题（DOAP），其中边缘服务器通过有线回传网络互联，并同时受带宽与计算资源限制。目标是最大化所有任务的推理精度提升总和。作者将其表述为整数线性规划，通过归约自最大权三维匹配证明其为 NP 难，并提出 FastSA，一种基于局部比率技术的线性时间算法，近似比为 1/10。作者称就其所知，FastSA 为支持回传转发的 DOAP 给出了首个常数因子保证。此外还提出故障检测与恢复框架：链路状态信息通过类似 OSPF 的泛洪同步，邻居交换 HELLO/ACK 消息，连续两次丢失 ACK 即将链路或服务器标记为失效，每个网络分区选举全局调度器，受影响服务器上的服务被终止，恢复的链路或服务器重新接入拓扑。

实验在开源 mecRT 模拟器上扩展，使用上海出租车 GPS 轨迹（80 辆车、11 km x 11 km、15 分钟）、15 台边缘服务器（各 270 个带宽单元、20 个计算单元）、实测的图像分类负载，以及 Greedy、Game、Graph 基准。作者报告无故障时 FastSA 实测精度提升高于 Greedy 15.3%、Game 31.1%、Graph 33.3%（摘要中平均 25.6%），注入故障时故障恢复框架平均将性能下降减少 12.8%。

## Key technical points (EN)

- Model: each edge server has bandwidth units and computing units; tasks have periods that act as deadlines and two offloading modes (direct or forwarded over the backhaul).
- Complexity: ILP formulation; NP-hard via reduction from maximum-weight 3-D matching.
- Algorithm: FastSA splits service instances into four resource-share categories, handles one category separately, returns the better schedule; 1/5 bound per subset, 1/10 overall, O(|L|) time (O(|L|) for the iterative implementation) (Theorem 2's proof is omitted in the paper).
- Fault handling: OSPF-style link-state flooding, HELLO/ACK failure detection after two missed ACKs, per-partition global scheduler election (most neighbours, then smallest ID).
- Setup: mecRT extension; Shanghai taxi traces; 15 servers; 900 s runs with 5, 10 and 15 s scheduling intervals; baselines Greedy, Game, Graph.
- Reported results: measured accuracy improvement +15.3% / +31.1% / +33.3% over Greedy / Game / Graph fault-free; 12.8% average reduction in degradation under faults.
- Stated scope limits: the guarantee holds in a model that ignores backhaul bandwidth contention and assumes fixed channel quality per offloading window; FastSA's predicted (not measured) improvement is below Greedy's.

## Key technical points (ZH)

- 模型：每台边缘服务器有带宽单元和计算单元；任务的周期即截止期，有直接卸载与经回传转发两种模式。
- 复杂度：整数线性规划；由最大权三维匹配归约证明 NP 难。
- 算法：FastSA 按资源占比把服务实例分为四类，单独处理其中一类，返回较优调度；每个子集界为 1/5，总体 1/10，时间复杂度 O(|L|)（迭代实现为 O(|L|)）（论文省略了定理 2 的证明）。
- 故障处理：OSPF 式链路状态泛洪，连续两次丢失 ACK 后由 HELLO/ACK 检测故障，每个分区选举全局调度器（先看邻居数，再看最小 ID）。
- 设置：mecRT 扩展；上海出租车轨迹；15 台服务器；运行 900 s，调度间隔 5、10、15 s；基线为 Greedy、Game、Graph。
- 报告结果：无故障时实测精度提升相对 Greedy / Game / Graph 分别为 +15.3% / +31.1% / +33.3%；注入故障时性能下降平均减少 12.8%。
- 论文自述范围限制：保证成立的模型忽略回传带宽争用，并假设每个卸载窗口内信道质量固定；FastSA 的预测（非实测）提升低于 Greedy。

## Why it matters / what's new (EN)

The paper contributes a provable-ratio scheduler and an explicit failure-handling layer for inference offloading across interconnected edge servers, a setting the authors say earlier work handled mostly with heuristics and without fault tolerance. The evidence is simulation with taxi traces and profiled classification workloads, and the abstract's 25.6% average is not obviously reconciled with the three per-benchmark figures in the body.

## Why it matters / what's new (ZH)

论文为互联边缘服务器之间的推理卸载提供了带可证明比率的调度器和显式的故障处理层，作者称此前工作多用启发式方法且未考虑容错。证据来自使用出租车轨迹与实测分类负载的仿真，摘要中的 25.6% 平均值与正文三个基准的数字之间的对应关系并不清晰。

## Images

*(No redistributable images for this entry.)*
