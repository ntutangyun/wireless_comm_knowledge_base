---
id: 2026-07-24_arxiv-uora-power-control-capture-fairness
date_published: 2026-07-20
date_found: 2026-07-24
type: academic-paper
title_en: "Evaluating Power Control Strategies for UORA in IEEE 802.11be Systems with Capture Effect"
title_zh: "802.11be UORA 随机接入中功率控制策略与捕获效应的评估及空间公平性分析"
url: "https://arxiv.org/abs/2607.18543"
source_quality: full
topics: [802.11be, UORA, OFDMA, power-control]
topic_primary: rtwt-latency
topics_secondary: [energy-power-save]
novelty_score: 2
---

## Summary (EN)

A simulation study (arxiv 2607.18543, submitted 2026-07-20, accepted at ICMIC 2026) from National Taiwan University of Science and Technology (Ray-Guang Cheng's group) on UORA — the uplink OFDMA-based random access mechanism carried from 802.11ax into 802.11be. Prior UORA work optimized the OCW backoff or applied reinforcement learning; this paper instead exploits the power domain: if two STAs collide on the same random-access RU, the capture effect lets the AP decode the stronger one, so deliberately diversifying transmit power turns some collisions into successes.

Two strategies are evaluated against baseline UORA: (1) random power-level selection — each STA independently picks one of five discrete levels between 10 and 250 mW per attempt; and (2) stepwise power ramping — start at 10 mW and escalate after each failure up to 250 mW. With 18 RA-RUs per trigger frame, a 3 dB capture threshold, a 10 m service radius, and 10^5 samples per point, random power selection achieves the highest access-success probability and lowest delay, while stepwise ramping is the most power-efficient under light load.

The distinctive contribution is the spatial-fairness analysis: dividing the coverage circle into five equal-area rings and computing Jain's index shows that capture-aware power control systematically favors STAs closer to the AP. Baseline UORA stays near-perfectly fair (J ≈ 1), while both power strategies — especially stepwise ramping — degrade fairness under moderate-to-heavy load. The authors state this is the first study to quantify the fairness cost of capture-aware power control in UORA.

## Summary (ZH)

这是台湾科技大学（Ray-Guang Cheng 团队）的仿真研究（arxiv 2607.18543，2026-07-20 提交，ICMIC 2026 录用），研究对象是从 802.11ax 延续到 802.11be 的上行 OFDMA 随机接入机制 UORA。既有 UORA 工作集中在 OCW 退避优化或强化学习；本文转向功率域：当两个 STA 在同一随机接入 RU 上碰撞时，捕获效应使 AP 仍能解出较强信号，因此有意让发射功率多样化可把部分碰撞转化为成功接入。

论文对比基线 UORA 评估两种策略：（1）随机功率档选择 —— 每个 STA 每次尝试从 10–250 mW 五个离散档位中独立随机选取；（2）逐步功率爬升 —— 从 10 mW 起步，每次失败后升档直至 250 mW。在每触发帧 18 个 RA-RU、3 dB 捕获门限、10 m 服务半径、每数据点 10^5 次采样的设置下：随机功率选择获得最高接入成功率与最低时延；逐步爬升在轻负载下功率效率最优。

论文的特色贡献是空间公平性分析：把覆盖圆划分为五个等面积同心环并计算 Jain 公平指数，结果显示捕获感知的功率控制系统性偏向靠近 AP 的 STA。基线 UORA 几乎完全公平（J ≈ 1），而两种功率策略在中重负载下都会损害公平性，逐步爬升尤甚。作者称这是首个量化 UORA 捕获感知功率控制公平性代价的研究。

## Key technical points (EN)

- Power-domain collision resolution for UORA: exploit capture effect (3 dB threshold) so unequal received powers rescue RA-RU collisions.
- Strategy 1 — random selection over five discrete levels (10–250 mW) per attempt: best success probability and delay.
- Strategy 2 — stepwise ramping 10→250 mW across attempts: best power efficiency at light-to-moderate load.
- Spatial fairness quantified via five equal-area concentric rings + Jain's index: baseline UORA J ≈ 1; both strategies degrade fairness under load, ramping worst.
- Setup: 18 RA-RUs per trigger frame, 10 m radius, 10^5 samples per point; metrics = success probability, delay, resource utilization, power efficiency.
- First quantification of the fairness implications of capture-aware power control in UORA.

## Key technical points (ZH)

- UORA 功率域碰撞消解：利用捕获效应（3 dB 门限），接收功率差异使 RA-RU 碰撞仍可解码。
- 策略一 —— 每次尝试在 10–250 mW 五档中随机选取：成功率与时延最优。
- 策略二 —— 失败后 10→250 mW 逐步升档：轻中负载下功率效率最优。
- 空间公平性：五个等面积同心环 + Jain 指数；基线 UORA J ≈ 1，两种策略在负载下均损害公平，爬升策略最严重。
- 设置：每触发帧 18 个 RA-RU、10 m 半径、每点 10^5 采样；指标为成功率、时延、资源利用率、功率效率。
- 首次量化 UORA 捕获感知功率控制的公平性代价。

## Why it matters / what's new (EN)

The KB's OFDMA/RU coverage so far is scheduler-side (2026-05-04_arxiv-proxyselect-ofdma-mu-mimo-scheduling; 2026-06-11_arxiv-wifi6-dynamic-ru-tsn) — this is the first entry on the random-access (UORA) side, and the first to treat transmit power as the contention-resolution knob rather than backoff parameters. The near/far unfairness it quantifies is the classic capture-effect trade-off, now mapped concretely onto 802.11be RA-RUs; any deployment or future amendment adopting power-diverse UORA would need a compensating mechanism (e.g., distance- or path-loss-aware power caps), which the paper identifies as future work.

## Why it matters / what's new (ZH)

KB 现有 OFDMA/RU 条目均为调度侧（2026-05-04_arxiv-proxyselect-ofdma-mu-mimo-scheduling；2026-06-11_arxiv-wifi6-dynamic-ru-tsn）—— 本条目首次覆盖随机接入（UORA）侧，并首次把发射功率而非退避参数作为碰撞消解手段。其量化的远近不公平是经典捕获效应权衡在 802.11be RA-RU 上的具体呈现；任何采用功率多样化 UORA 的部署或未来修订都需要补偿机制（如基于距离/路损的功率上限），论文将其列为后续工作。

## Images

![Network topology: AP at center, uniformly distributed STAs | 网络拓扑：AP 居中，STA 均匀分布](https://arxiv.org/html/2607.18543v1/images/Circle.png)
![UORA access procedure timing structure | UORA 接入过程时序结构](https://arxiv.org/html/2607.18543v1/images/time.png)
