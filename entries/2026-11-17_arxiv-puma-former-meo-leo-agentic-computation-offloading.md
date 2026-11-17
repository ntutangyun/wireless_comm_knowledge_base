---
id: 2026-11-17_arxiv-puma-former-meo-leo-agentic-computation-offloading
date_published: 2026-11-13
date_found: 2026-11-17
type: academic-paper
technology: edge-ai
title_en: "PUMA-Former: Uncertainty-Aware Agentic Computation Offloading in MEO-LEO Satellite Networks With Incomplete Information"
title_zh: "PUMA-Former：不完整信息下 MEO-LEO 卫星网络中不确定性感知的智能体计算卸载"
url: "https://arxiv.org/abs/2611.18139"
source_quality: full
topics: [satellite edge computing, computation offloading, MEO-LEO, Transformer, incomplete information]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

In satellite edge computing, workloads are spread over moving processors whose capacity must be coordinated. In a medium Earth orbit (MEO)-low Earth orbit (LEO) network, periodic status reports leave LEO CPU states stale or missing, so offloading decisions are sensitive to uncertain capacity and shared-destination congestion. PUMA-Former is a learned coordinator on the MEO layer: it keeps a memory of distinct reports, weights plausible report-age hypotheses with latent-delay attention, refines CPU estimates from historical innovations, and feeds the inferred resource moments to a Transformer allocator that jointly decides destination, task partition, bandwidth, CPU and power. A bounded risk-aware calibration step then adjusts workload splits.

The evaluation is a simulation driven by real China Satcom traffic records from March-April 2025: 72 satellites in 12 Walker planes at 550 km, 50 Gcycles/s nominal CPU per node, access and inter-satellite link bandwidths of 160 and 80 MHz (nominal 320 and 160 Mbit/s), 10 W maximum transmit power, half the traffic assigned 500-1500 cycles/bit of compute. Against the ATLA-adapt baseline it raises admitted compute-work completion by 8.62%, cuts mean modeled service delay by 34.78% and mean episode-P95 delay by 71.08%; the authors note these service gains involve higher normalized energy. It also improves completion and normalized energy over fixed-half round-robin offloading.

## Summary (ZH)

在卫星边缘计算中，工作负载分布在移动的处理器上，其算力需要协调。在中轨（MEO）-低轨（LEO）网络中，周期性状态上报使 LEO 的 CPU 状态陈旧或缺失，卸载决策因此对不确定的算力和共享目的节点拥塞十分敏感。PUMA-Former 是部署在 MEO 层的学习型协调器：它保存不同上报的记忆，用潜在时延注意力为可能的上报时龄假设加权，用历史新息修正 CPU 估计，再把推断出的资源矩输入 Transformer 分配器，联合决定目的节点、任务划分、带宽、CPU 与功率；随后有界的风险感知校准步骤调整工作负载划分。

评估为仿真，由 2025 年 3-4 月中国卫通的真实流量记录驱动：12 个 Walker 轨道面共 72 颗卫星、高度 550 km，单节点标称 CPU 50 Gcycles/s，接入与星间链路带宽分别为 160 与 80 MHz（标称 320 与 160 Mbit/s），最大发射功率 10 W，一半流量被赋予 500-1500 cycles/bit 的计算量。相比 ATLA-adapt 基线，已接纳计算量的完成率提高 8.62%，平均建模服务时延降低 34.78%，回合 P95 时延降低 71.08%；作者指出这些服务增益伴随更高的归一化能耗。相比固定对半的轮询卸载，其完成率与归一化能耗也更好。

## Key technical points (EN)

- Link: satellite access and inter-satellite links, simulated (160/80 MHz, 320/160 Mbit/s nominal) in a 72-satellite Walker constellation; bandwidth and power are decision variables.
- Compute: learned (Transformer) allocation of partitions across LEO processors, based on estimated, not observed, capacity.
- Inputs are real operator traffic records, but the compute demand and network are modeled; not a satellite measurement.
- Results versus ATLA-adapt: +8.62% completion, -34.78% mean delay, -71.08% episode-P95 delay, at higher normalized energy.

## Key technical points (ZH)

- 链路：卫星接入链路与星间链路，在 72 颗卫星的 Walker 星座中仿真（标称 160/80 MHz、320/160 Mbit/s）；带宽与功率是决策变量。
- 计算：基于估计（而非观测）的算力，用 Transformer 学习式地在 LEO 处理器间分配任务划分。
- 输入为真实运营商流量记录，但计算需求与网络为建模；并非卫星实测。
- 相比 ATLA-adapt：完成率 +8.62%，平均时延 -34.78%，回合 P95 时延 -71.08%，代价是更高的归一化能耗。

## Why it matters / what's new (EN)

It is a satellite-link example of offloading where link bandwidth and power are co-decided with compute placement, and where the stale information of the control loop is itself the problem. The compute is generic workload processing rather than AI inference, and the whole study is simulated, so treat the numbers as modeled.

## Why it matters / what's new (ZH)

这是卫星链路上的卸载实例：链路带宽与功率和计算位置被共同决策，而控制回路中陈旧的信息本身就是问题所在。其计算为通用工作负载处理而非 AI 推理，且整个研究为仿真，数字应视为建模结果。

## Images
![Hierarchical satellite computation offloading architecture | 分层卫星计算卸载架构](https://arxiv.org/html/2611.18139v1/fig_arc.png)
