---
id: 2026-09-04_arxiv-iapetus-satellite-vit-scheduling
date_published: 2026-09-03
date_found: 2026-09-04
type: academic-paper
technology: edge-ai
title_en: "Iapetus: Content-Aware Hierarchical Scheduling for Collaborative ViT Inference in LEO Satellite Networks"
title_zh: "Iapetus：面向低轨卫星网络协同 ViT 推理的内容感知分层调度"
url: "https://arxiv.org/abs/2609.03318"
source_quality: full
topics: [ViT, model-partitioning, token-compression, LEO-constellation, hierarchical-scheduling, hardware-in-the-loop]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration]
novelty_score: 4
---

## Summary (EN)

Running Vision Transformers (ViTs) collaboratively across a satellite constellation is attractive when a single satellite lacks the compute for a demanding model, but the paper identifies why ViTs make this especially hard compared to CNNs: unlike CNNs, whose intermediate feature maps shrink with depth, ViT activations stay large and comparable in size to the raw input, so splitting a ViT across satellites and transferring its intermediate activations over inter-satellite links can be prohibitively expensive. Token compression (pruning or merging tokens mid-model) reduces that transfer cost, but its effect on output quality is content-dependent — the paper measures identical pruning settings causing a 21.79-percentage-point accuracy loss on "Park" scene images versus zero loss on "Desert" scenes — and every compression choice reshapes the downstream computation and payload size that a layer-offloading decision then has to fit inside a satellite's finite contact window and battery budget. Because those two choices are coupled, they cannot be tuned independently, and the constellation-scale version of the problem additionally has to plan across time-varying inter-satellite/ground contacts and battery state for many satellites at once.

Iapetus (Yan Chen, Yunxiang Zhang, Guanjun Jiang and Haiquan Wang, Beihang University) addresses this with a hierarchical scheduler run in three stages. First, coarse candidate screening filters and ranks reachable satellite "swarms" and execution modes (satellite-only vs. ground-assisted) using a Lyapunov-style score that combines each candidate's accumulated workload pressure, battery-depletion pressure, and task cost, retaining a small candidate set (up to 4 candidates per mode by default) rather than exhaustively enumerating options. Second, a learned, gradient-boosted predictor — trained on 1.13 million isolated and 48,000 history-conditioned records from paired dense/pruned inference runs — estimates the cumulative accuracy-degradation trajectory for each candidate as a function of scene content, layer depth, and the pruning decisions already made earlier in that candidate's plan. Third, a soft-actor-critic policy, trained offline on the ground, jointly plans a continuous pruning ratio and a discrete node assignment at every Transformer layer for each surviving candidate, rather than optimizing pruning and offloading separately; the best-scoring completed plan is committed atomically across the participating satellites.

Evaluated on a 24-plane Starlink-scale trace (and a sparser OneWeb polar trace) with ViT-L/16, ViT-H/14, and DINOv2-L/14 on the AID and RESISC45 datasets, and validated via a hardware-in-the-loop testbed using two NVIDIA Jetson AGX Orin boards over Gigabit Ethernet, Iapetus reaches a 91.60% task-accomplishment ratio at a sustained load of 5 tasks/second, versus 65.54% for the strongest RL-based baseline (MARATD3) — a 26.1-percentage-point gain — while cutting mean end-to-end latency by 53.0% (6.98 s for Iapetus) and onboard battery draw by 70.8% relative to the best-performing baseline on that metric (SPS-AO). Ablations show that decoupling the pruning and offloading decisions (rather than planning them jointly) costs 15.15 percentage points of task-accomplishment ratio, and that removing the content-awareness signal from the predictor drops its pairwise accuracy from 61-64% down to a 50% (chance-level) baseline. Total scheduling overhead is reported at 217.50ms mean (0.73% of the 30-second task deadline), and the hardware-in-the-loop validation reports 1.06% mean absolute latency error and 7.64% battery-draw error against the trace-driven simulator.

## Summary (ZH)

当单颗卫星算力不足以承担高需求模型时，跨卫星星座协同运行 Vision Transformer（ViT）具有吸引力，但论文指出了 ViT 相较于 CNN 在此场景下的特殊难点：CNN 的中间特征图随网络深度增加而收缩，而 ViT 的激活值始终较大、与原始输入规模相当，因此将 ViT 拆分到多颗卫星并通过星间链路传输其中间激活，代价可能高得难以接受。Token 压缩（在模型中间剪枝或合并 token）可以降低这种传输开销，但其对输出质量的影响与内容相关——论文测量发现，同样的剪枝设置在"公园"场景图像上导致 21.79 个百分点的准确率损失，而在"沙漠"场景上损失为零——并且每一次压缩决策都会重塑下游计算量与需要传输的负载规模，而这又必须适配层卸载决策所受限的卫星有限接触窗口与电池预算。由于这两类决策相互耦合，无法独立调优；而在星座规模上，该问题还需同时规划众多卫星随时间变化的星间/星地接触窗口与电池状态。

Iapetus（北京航空航天大学 Yan Chen、Yunxiang Zhang、Guanjun Jiang 与 Haiquan Wang）以三阶段分层调度器应对这一问题。第一阶段，粗粒度候选筛选利用一种类 Lyapunov 评分——综合各候选方案累积的工作负载压力、电量消耗压力与任务成本——对可达的卫星"群组"及执行模式（纯卫星执行 vs. 地面辅助执行）进行过滤与排序，仅保留一个较小的候选集（默认每种模式最多 4 个候选），而非穷举所有可能。第二阶段，一个基于梯度提升训练的学习型预测器——训练数据来自 113 万条独立记录与 4.8 万条基于历史条件的记录，均来自成对的密集/剪枝推理运行——根据场景内容、层深度以及该候选方案中此前已做出的剪枝决策，估计累积的准确率退化轨迹。第三阶段，一个离线在地面训练的软演员-评论家（SAC）策略，为每个存活候选方案在每一个 Transformer 层上联合规划连续的剪枝比例与离散的节点分配，而非分别优化剪枝与卸载；评分最优的完整方案会在参与调度的各卫星之间原子性地提交执行。

在一个 24 轨道面的 Starlink 规模轨迹（以及一个更稀疏的 OneWeb 极轨轨迹）上，使用 ViT-L/16、ViT-H/14 与 DINOv2-L/14，在 AID 与 RESISC45 数据集上评测，并通过基于两块 NVIDIA Jetson AGX Orin 板卡、经千兆以太网连接的硬件在环（HIL）测试台进行验证，Iapetus 在每秒 5 个任务的持续负载下实现 91.60% 的任务完成率，而最强的基于强化学习的基线方法（MARATD3）为 65.54%——提升 26.1 个百分点——同时将平均端到端时延降低 53.0%（Iapetus 为 6.98 秒），相比该指标上表现最佳的基线（SPS-AO）将星上电量消耗降低 70.8%。消融实验表明，若将剪枝与卸载决策解耦分别优化（而非联合规划），任务完成率会下降 15.15 个百分点；若从预测器中移除内容感知信号，其成对预测准确率会从 61%–64% 降至 50%（相当于随机猜测）的水平。论文报告的总调度开销平均为 217.50 毫秒（占 30 秒任务截止时间的 0.73%），硬件在环验证结果显示，相较于轨迹驱动的仿真器，平均绝对时延误差为 1.06%，电量消耗误差为 7.64%。

## Key technical points (EN)

- **Problem**: ViT activations stay large across depth (unlike shrinking CNN feature maps), making inter-satellite transfer of split-inference activations expensive; token-compression quality loss is content-dependent (21.79pp on "Park" scenes vs. 0pp on "Desert" scenes at identical pruning settings); pruning and offloading decisions are coupled and cannot be tuned independently; the constellation-scale problem must plan across many satellites' time-varying contacts and battery state simultaneously.
- **Stage 1 - coarse screening**: Lyapunov-style scoring (workload pressure + battery-depletion pressure + task cost) filters reachable satellite swarms and execution modes (satellite-only / ground-assisted) down to a small candidate set (default 4 per mode).
- **Stage 2 - content-aware prediction**: a gradient-boosted predictor (trained on 1.13M isolated + 48K history-conditioned paired dense/pruned records) estimates cumulative accuracy degradation as a function of a 16-dim content descriptor, layer depth, and prior pruning decisions in the plan.
- **Stage 3 - joint planning**: a soft-actor-critic policy, trained offline on the ground, jointly decides continuous pruning ratio and discrete node assignment per Transformer layer (not decoupled), committed atomically across satellites.
- **Evaluation**: 24-plane Starlink-scale trace + sparser OneWeb polar trace, ViT-L/16 / ViT-H/14 / DINOv2-L/14 on AID and RESISC45; hardware-in-the-loop validation on two NVIDIA Jetson AGX Orin boards over Gigabit Ethernet.
- **Headline numbers** (at 5 tasks/sec): 91.60% task-accomplishment ratio vs. 65.54% for best RL baseline (MARATD3), +26.1pp; mean latency 6.98 s for Iapetus (53.0% reduction); battery draw down 70.8% vs. best baseline on that metric (Iapetus 6.07 J; SPS-AO, the best baseline on this metric, 17.97 J).
- **Ablations**: decoupled pruning/offloading costs -15.15pp task-accomplishment ratio; removing content-awareness drops predictor pairwise accuracy from 61-64% to 50% (chance level); scheduling overhead 217.50ms mean (0.73% of 30s deadline); HIL validation error 1.06% (latency), 7.64% (battery draw).
- **Affiliation**: Beihang University, Beijing; posted to arXiv (cs.DC), no conference venue stated.
- **Routing note**: the deployment context is a LEO satellite constellation; flagged to `satellite_research_scout` as a cross-domain FYI, filed here because the paper's contribution is a compute-offloading / partitioning scheduling policy for an AI workload, not a satellite communication mechanism.

## Key technical points (ZH)

- **问题**：ViT 的激活值在网络深度增加时并不像 CNN 特征图那样收缩，使拆分推理下的星间激活传输代价高昂；token 压缩带来的质量损失与内容相关（相同剪枝设置下，"公园"场景损失 21.79 个百分点，"沙漠"场景损失为 0）；剪枝与卸载决策相互耦合，无法独立调优；星座规模问题还需同时对众多卫星随时间变化的接触窗口与电量状态进行规划。
- **第一阶段——粗粒度筛选**：采用类 Lyapunov 评分（工作负载压力 + 电量消耗压力 + 任务成本），将可达的卫星群组与执行模式（纯卫星执行/地面辅助执行）筛选至一个较小候选集（默认每种模式 4 个）。
- **第二阶段——内容感知预测**：一个基于梯度提升训练的预测器（训练数据为 113 万条独立记录与 4.8 万条历史条件记录，均来自成对的密集/剪枝推理），根据 16 维内容描述符、层深度及方案中此前的剪枝决策，估计累积准确率退化情况。
- **第三阶段——联合规划**：一个离线在地面训练的软演员-评论家（SAC）策略，为每个 Transformer 层联合决定连续剪枝比例与离散节点分配（而非解耦优化），并在各卫星间原子性提交执行。
- **评测设置**：24 轨道面 Starlink 规模轨迹 + 更稀疏的 OneWeb 极轨轨迹，模型为 ViT-L/16、ViT-H/14、DINOv2-L/14，数据集为 AID 与 RESISC45；并通过两块经千兆以太网连接的 NVIDIA Jetson AGX Orin 板卡进行硬件在环验证。
- **核心数据**（每秒 5 个任务负载下）：任务完成率 91.60%，对比最强 RL 基线（MARATD3）的 65.54%，提升 26.1 个百分点；平均时延 6.98 秒（降低 53.0%）；相比该指标上表现最佳的基线（Iapetus 为 6.07 焦耳；该指标上最优的基线 SPS-AO 为 17.97 焦耳）电量消耗降低 70.8%。
- **消融实验**：剪枝与卸载解耦优化会使任务完成率下降 15.15 个百分点；移除内容感知信号会使预测器成对预测准确率从 61%–64% 降至 50%（随机水平）；调度开销平均 217.50 毫秒（占 30 秒截止时间的 0.73%）；硬件在环验证误差为时延 1.06%、电量消耗 7.64%。
- **所属机构**：北京航空航天大学；发布于 arXiv（cs.DC 分类），未注明会议/期刊。
- **归属说明**：该工作的部署场景为 LEO 卫星星座；已作为跨领域信息标注给 satellite_research_scout 留意，本条目收录于本 KB 是因为论文的贡献属于面向 AI 工作负载的计算卸载/分区调度策略，而非卫星通信机制本身。

## Why it matters / what's new (EN)

This is the strongest compute-offloading measurement this KB has seen from the satellite deployment context specifically, and it extends a pattern this KB has been tracking all week: `2026-09-01_arxiv-multi-spin-wireless-speculative-inference` asked whether correction traffic should travel uplink or downlink over a wireless hop, and `2026-09-03_arxiv-acespec-edge-cloud-speculative-decoding-wan` asked what to do when that traffic crosses a bad WAN link; Iapetus asks the analogous question for a fundamentally different link — a time-varying, contact-windowed, battery-constrained inter-satellite link — and answers it by refusing to decouple the pruning decision from the offloading decision, backing that refusal with an ablation showing a 15-point task-completion cost for treating them separately. The hardware-in-the-loop validation against two real Jetson boards, rather than a pure trace-driven simulation, is also a meaningfully stronger evidentiary bar than most scheduling-policy papers in this bin clear. Given the LEO constellation setting, this finding is also flagged as an FYI to `satellite_research_scout`.

## Why it matters / what's new (ZH)

这是本 KB 迄今为止在卫星部署场景下看到的最扎实的计算卸载实测工作，也延续了本 KB 本周持续跟踪的一条主线：`2026-09-01_arxiv-multi-spin-wireless-speculative-inference` 探讨的是纠错流量在无线一跳上该走上行还是下行，`2026-09-03_arxiv-acespec-edge-cloud-speculative-decoding-wan` 探讨的是该流量需要穿越糟糕 WAN 链路时该怎么办；Iapetus 则针对一种性质完全不同的链路——时变、受限于接触窗口与电池预算的星间链路——提出了相应的答案，其做法是拒绝将剪枝决策与卸载决策解耦，并以一项消融实验（若分开处理，任务完成率下降 15 个百分点）为这一选择提供支撑。相较于该主题下多数调度策略论文仅依赖纯轨迹驱动仿真，本文基于两块真实 Jetson 板卡的硬件在环验证也构成了明显更高的证据门槛。鉴于其 LEO 星座部署背景，该发现同时作为跨领域信息标注给 satellite_research_scout。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
