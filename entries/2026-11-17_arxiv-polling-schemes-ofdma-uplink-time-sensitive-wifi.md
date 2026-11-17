---
id: 2026-11-17_arxiv-polling-schemes-ofdma-uplink-time-sensitive-wifi
date_published: 2026-11-13
date_found: 2026-11-17
technology: wifi
type: academic-paper
title_en: "Evaluating Polling Schemes for OFDMA Uplink Scheduling in Time-Sensitive Wi-Fi Networks"
title_zh: "时间敏感 Wi-Fi 网络中 OFDMA 上行调度轮询方案的评估"
url: "https://arxiv.org/abs/2611.17898"
source_quality: full
topics: [802.11ax, OFDMA, uplink scheduling, BSRP, UORA, EDCA, multi-armed bandit, XR, industrial IoT]
topic_primary: rtwt-latency
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

Agbeve, Van Herck, Belogaev and Famaey (arXiv 2611.17898, submitted 13 November 2026) compare buffer-status acquisition schemes for 802.11ax OFDMA uplink scheduling. The AP needs timely knowledge of what each STA has buffered; explicit BSRP polling can query only as many STAs per round as there are resource units, so polling an idle STA delays finding a backlogged one. The paper states that scheduled-access, random-access, activity-based and learning-based schemes have generally been evaluated in isolation under different conditions, and runs them in one controlled ns-3 study.

Six schemes are compared: EDCA (contention baseline), SA-OFDMA (BSRP polling then a Basic Trigger Frame), UORA (random access on AID-0 RUs with an OFDMA back-off counter, OCWmax 127), A2P (Announce to Poll: the AP keeps a polling list of recently active STAs and suppresses their EDCA with MU EDCA parameters), A2S (Announce to Schedule: same list, but RUs are assigned directly with no BSRP step) and a combinatorial multi-armed-bandit (CMAB) polling scheme in which each STA is an arm and four algorithms (CUCB, CTS, EXP3.M, epsilon-greedy) are tried. The paper names A2S and the CMAB formulation as contributions, along with two scheduler enhancements and released code.

Three time-sensitive scenarios are simulated on a 5 GHz carrier with a 30 s run time. Conferencing: 100 STAs, 40 MHz, 26-tone RUs, 5 ms audio budget. Industrial IoT: 18 periodic background STAs plus sporadic deadline-bound STAs (20 ms deadline), 40 MHz. XR: 160 MHz, MCS 11, headsets with a ~100 Mbps downlink video flow and a 10 ms-deadline uplink pose flow. The abstract's conclusion is that relative performance depends strongly on traffic characteristics and offered load.

## Summary (ZH)

Agbeve、Van Herck、Belogaev 与 Famaey（arXiv 2611.17898，2026 年 11 月 13 日提交）比较了 802.11ax OFDMA 上行调度中的缓存状态获取方案。AP 需要及时了解各 STA 的缓存情况；显式 BSRP 轮询每轮最多只能询问与资源单元（RU）数量相同的 STA，轮询到空闲 STA 会延迟发现有积压的 STA。论文指出，调度接入、随机接入、基于活跃度和基于学习的方案此前通常在不同条件下各自单独评估，因此在同一个受控的 ns-3 研究中对它们进行比较。

共比较六种方案：EDCA（竞争基线）、SA-OFDMA（先 BSRP 轮询，再发 Basic Trigger Frame）、UORA（在 AID-0 的 RU 上随机接入，使用 OFDMA 退避计数器，OCWmax 为 127）、A2P（Announce to Poll：AP 维护近期活跃 STA 的轮询列表，并用 MU EDCA 参数抑制其 EDCA）、A2S（Announce to Schedule：同样的列表，但直接分配 RU，不经 BSRP 步骤），以及组合多臂老虎机（CMAB）轮询方案（每个 STA 为一个臂，尝试 CUCB、CTS、EXP3.M、epsilon-greedy 四种算法）。论文将 A2S 与 CMAB 建模列为贡献，另有两项调度器增强并开源代码。

仿真在 5 GHz 载波上进行，每次运行 30 秒，包含三种时间敏感场景。会议：100 个 STA、40 MHz、26-tone RU、5 ms 音频预算。工业物联网：18 个周期性背景 STA 加上突发的、带截止时间的 STA（截止 20 ms），40 MHz。XR：160 MHz、MCS 11，头显含约 100 Mbps 的下行视频流与截止时间 10 ms 的上行姿态流。摘要结论是各方案的相对表现强烈依赖流量特性与负载。

## Key technical points (EN)

- **Conferencing (30 active STAs):** packet loss A2P 0.043, A2S 0.038, CUCB 0.027, EDCA 0.60; A2P, A2S and CUCB have zero loss up to 23 active STAs. Wake-up delay stays below 2.5 ms for A2P/A2S, 3.45 ms for CUCB, and rises to 10.66 ms for EDCA. EDCA has the lowest video uplink delay (16 ms) while scheduled schemes rise from 41 to 72 ms.
- **Industrial IoT (90 STAs, 25 ms inter-arrival):** Type-2 deadline-miss ratio is below 0.001 for SA-OFDMA and UORA with one random-access RU, 0.014 for CUCB, 0.016 for A2P, 0.28 for A2S and 0.81 for EDCA. At light load EDCA reaches 0.013 with the lowest median delay.
- **XR:** up to 5 headsets all schemes deliver the offered video load; at 6 headsets OFDMA schemes keep the video miss ratio at or below 0.026 (nearly 600 Mbps) while EDCA has 97.4% of video packets missing the deadline (26.5 Mbps). For uplink pose, A2P and A2S give the lowest miss ratios but the longest video delay tails.
- **CMAB tuning:** reward design mattered more than algorithm choice. A binary reward was selected for conferencing, but starved the sporadic Type-2 traffic in the industrial case (CUCB lost about 0.97 of it at 90 STAs); a fairness-weighted reward was selected there and for XR (at 5 XR STAs it cut the pose miss ratio from 0.138 to 0.0067).
- **Paper's takeaways:** activity- or learning-based polling suits sporadic traffic, scheduled access suits persistent load, and contention-based access is competitive only at light load. Stated limitations include a single BSS, negligible channel-error loss and offline-swept per-scheme configuration; each run is 30 s.

## Key technical points (ZH)

- **会议场景（30 个活跃 STA）：** 丢包率 A2P 0.043、A2S 0.038、CUCB 0.027、EDCA 0.60；A2P、A2S 与 CUCB 在 23 个活跃 STA 以内丢包为零。唤醒时延 A2P/A2S 低于 2.5 ms，CUCB 为 3.45 ms，EDCA 升至 10.66 ms。EDCA 的视频上行时延最低（16 ms），而调度类方案从 41 ms 升至 72 ms。
- **工业物联网（90 个 STA，到达间隔 25 ms）：** Type-2 截止时间错过率在 SA-OFDMA 与仅 1 个随机接入 RU 的 UORA 下低于 0.001，CUCB 为 0.014，A2P 为 0.016，A2S 为 0.28，EDCA 为 0.81。轻载时 EDCA 为 0.013，且中位时延最低。
- **XR：** 头显数不超过 5 时所有方案都能交付全部视频负载；6 个头显时 OFDMA 类方案的视频错过率不高于 0.026（吞吐近 600 Mbps），而 EDCA 有 97.4% 的视频包错过截止时间（26.5 Mbps）。上行姿态方面，A2P 与 A2S 错过率最低，但视频时延尾部最长。
- **CMAB 调参：** 奖励设计的影响大于算法选择。会议场景选用二元奖励，但在工业场景中会使突发的 Type-2 流量被饿死（90 个 STA 时 CUCB 丢失约 0.97）；工业与 XR 场景选用公平性加权奖励（5 个 XR STA 时姿态错过率由 0.138 降至 0.0067）。
- **论文结论：** 基于活跃度或学习的轮询适合突发流量，调度接入适合持续负载，竞争接入仅在轻载下有竞争力。论文自述的局限包括单个 BSS、信道误差损失可忽略以及各方案配置由离线扫描得到；每次仿真 30 秒。

## Why it matters / what's new (EN)

The KB's `rtwt-latency` and OFDMA-scheduling coverage so far has addressed individual mechanisms; this paper contributes a same-conditions comparison of EDCA, scheduled, random-access, activity-based and bandit-based buffer-status acquisition across conferencing, industrial and XR workloads, with the authors' own quantified crossover points. Because the results are from a single-BSS ns-3 simulation, they should be read as relative rankings under the stated assumptions rather than field measurements.

## Why it matters / what's new (ZH)

本知识库在 `rtwt-latency` 与 OFDMA 调度方面此前多针对单一机制；本文在会议、工业与 XR 三类负载下，对 EDCA、调度接入、随机接入、基于活跃度与基于老虎机的缓存状态获取方案做了同条件比较，并给出作者自己量化的交叉点。由于结果来自单 BSS 的 ns-3 仿真，应理解为在所述假设下的相对排序，而非现场测量。
