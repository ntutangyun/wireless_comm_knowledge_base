---
id: 2026-11-05_arxiv-queuetrack-end-host-queue-onset-detection-oai-5g
date_published: 2026-11-01
date_found: 2026-11-05
type: academic-paper
technology: cellular
title_en: "QueueTrack: Framework for Detecting the Onset of Queueing in Mobile Networks"
title_zh: "QueueTrack：移动网络中排队起始点的检测框架"
url: "https://arxiv.org/abs/2611.02038"
source_quality: full
topics: [congestion-control, queue-buildup-indicator, OpenAirInterface, 5G-SA, RLC-queue, low-latency, TCP-BBR, TCP-Cubic]
topic_primary: 5g-nr
topics_secondary: [cellular-ai, mec]
novelty_score: 3
---

## Summary (EN)

Hamid Hassani and co-authors (Eindhoven University of Technology) address how an end-to-end congestion control algorithm (CCA) can see the onset of queueing at the bottleneck of a mobile network, where in a 5G edge architecture the bottleneck queue typically sits at the base station's RLC layer. Packet loss triggers too late, RTT is distorted by reverse-path queueing, and one-way delay needs clock synchronisation; the alternatives of decoding radio-control information or L4S/ECN support require network or device changes.

QueueTrack is a user-space end-host framework that works without tight synchronisation or changes to the network or to 3GPP standards. For each measurement interval it compares the number of packets offered to the base station with the number delivered to the UE and normalises the mismatch: QBI = (M - N) / M, upper-bounded by 1 and with no lower bound because N can exceed M while the queue drains. Short histories of QBI feed low-complexity classifiers (logistic regression, SVM, MLP) that flag queue-buildup episodes, with labels derived from one-way-delay rises above baseline.

## Summary (ZH)

Hamid Hassani 等（埃因霍温理工大学）研究端到端拥塞控制算法（CCA）如何在移动网络中察觉瓶颈处排队的起始；在 5G 边缘架构中，瓶颈队列通常位于基站的 RLC 层。丢包触发过晚，RTT 会被反向路径排队扭曲，单向时延则需要时钟同步；而解码无线控制信息或采用 L4S/ECN 的替代方案需要改动网络或终端。

QueueTrack 是一个用户态的端侧框架，无需严格同步，也无需改动网络或 3GPP 标准。对每个测量区间，它比较提供给基站的包数与送达 UE 的包数，并对差值做归一化：QBI = (M - N) / M，上界为 1，因队列排空时 N 可能大于 M 而无下界。若干时刻的 QBI 历史作为特征输入低复杂度分类器（逻辑回归、SVM、MLP）来标出队列积累时段，标签来自单向时延超过基线的上升。

## Key technical points (EN)

- Testbed: 5G standalone on OpenAirInterface (branch 2024.w38) for core, gNB and UEs with USRP devices; n78 TDD, 6/3/1 D/U/M pattern, 40 MHz (106 PRBs), single layer, numerology 1; the oai-ext-dn container acts as the edge server.
- Scenarios: single-flow UDP, multi-UE settings with previously unseen TCP Cubic and TCP BBR cross-traffic (1C, 1B, 2C, 1C+1B), and impaired UE feedback; test traces are withheld from training and a fixed 0.5 decision threshold is used.
- Headline result: in the challenging mixed TCP/UDP scenario the abstract attributes an F1 of about 80% to all three models (LR, SVM, MLP); body ranges are LR 0.74-0.82 and SVM/MLP 0.76-0.84. Logistic regression is described as reliable too but produced false positives in an example trace.
- Early warning: the fraction of high-OWD episodes preceded by a persistent positive-QBI signal is 69% (20 ms) and 86% (40 ms) as read from Fig. 4; the text gives 83% (173/209) at 30 ms.
- Robustness: a +3% error in the offered packet count M drops LR and SVM F1 from about 0.84 to about 0.70 and 0.72 while the MLP stays near 0.82; at +5% the F1 values are about 0.66, 0.66 and 0.72 for LR, SVM and MLP. Positive error is more harmful than negative. Feedback-report loss degrades F1 gradually, with substantial drops only above p = 0.20.
- Stated follow-on: extending detection to near-future queueing-onset prediction with an echo state network; MAC-scheduler configurations and mobility are left to future work.

## Key technical points (ZH)

- 测试床：基于 OpenAirInterface（2024.w38 分支）的 5G SA，核心网、gNB 与 UE 均用 OAI 并配合 USRP；n78 TDD，6/3/1 D/U/M 配置，40 MHz（106 PRB），单层，参数集 1；oai-ext-dn 容器充当边缘服务器。
- 场景：单流 UDP、带有训练中未见过的 TCP Cubic 与 TCP BBR 交叉流量的多 UE 设置（1C、1B、2C、1C+1B），以及受损的 UE 反馈；测试轨迹不参与训练，固定使用 0.5 判决门限。
- 主要结果：在具有挑战性的 TCP/UDP 混合场景中，摘要将约 80% 的 F1 归于三个模型（LR、SVM、MLP）；正文区间为 LR 0.74-0.82、SVM/MLP 0.76-0.84。逻辑回归同样被评价为可靠，但在示例轨迹中出现了误报。
- 预警能力：高 OWD 时段之前存在持续正 QBI 信号的比例，在 OWD 阈值为 20 ms 和 40 ms 时分别为 69% 和 86%（读自图 4）；正文给出 30 ms 时为 83%（173/209）。
- 鲁棒性：提供包数 M 存在 +3% 误差时，LR 与 SVM 的 F1 由约 0.84 降至约 0.70 与 0.72，MLP 仍约为 0.82；+5% 时 LR、SVM、MLP 分别约为 0.66、0.66、0.72。正误差比负误差危害更大。反馈报告丢失使 F1 逐步下降，仅在 p 超过 0.20 时明显恶化。
- 论文提到的后续工作：用回声状态网络把检测扩展为对近期排队起始的预测；MAC 调度器配置与移动性留待后续。

## Why it matters / what's new (EN)

The contribution is an endpoint-observable queue signal (QBI) tied explicitly to the RLC-layer bottleneck of a 5G base station, evaluated on a real over-the-air-style OpenAirInterface testbed rather than a simulator. Its limits as stated: a single base station and a limited set of cross-traffic mixes, with mobility and scheduler variations untested. The paper positions the signal as useful for low-delay CCAs and for network telemetry and monitoring.

## Why it matters / what's new (ZH)

其贡献是一个与 5G 基站 RLC 层瓶颈明确对应、由端点即可观测的队列信号（QBI），并在基于 OpenAirInterface 的真实测试床而非仿真器上评估。论文自述的局限：单个基站和有限的交叉流量组合，移动性与调度器变化尚未测试。论文认为该信号可用于低时延 CCA 以及网络遥测与监控。

## Images

None.
