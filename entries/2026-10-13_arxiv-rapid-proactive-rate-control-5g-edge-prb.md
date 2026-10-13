---
id: 2026-10-13_arxiv-rapid-proactive-rate-control-5g-edge-prb
date_published: 2026-10-09
date_found: 2026-10-13
type: academic-paper
technology: cellular
title_en: "RAPID: Proactive Rate Control for Enabling High Data Rate and Low Latency in 5G Edge Networks"
title_zh: "RAPID：面向 5G 边缘网络高数据速率与低时延的主动速率控制"
url: "https://arxiv.org/abs/2610.13749"
source_quality: full
topics: [rate-control, PRB-utilization, OpenAirInterface, private-5G, bufferbloat, edge-server, TCP-Cubic, 5QI]
topic_primary: 5g-nr
topics_secondary: [mec]
novelty_score: 3
---

## Summary (EN)
Hamid Hassani, Sonia M. Heemstra de Groot, Ignas G. Niemegeers, Kishor C. Joshi and George Exarchakos (Eindhoven University of Technology) present RAPID, a user-space transport solution for private 5G edge networks in which the base station is the bottleneck. Instead of reacting to delay or loss, the edge server (ES) regulates each downlink flow's send rate to hold a target physical-resource-block (PRB) utilization. Each UE measures its PRB utilization over 50 ms intervals and reports it to the ES over UDP; every 200 ms the ES applies a proportional feedback update (gain K) per flow, with the target set to 0.9 x 106 / n PRBs for n active downlink flows. The design assumes an equal-share proportional-fair scheduler and a full-buffer model, and is evaluated for the downlink only.

The testbed uses OpenAirInterface 5G SA (branch 2024.w38) on n78 with a 6/3/1 TDD pattern, 40 MHz (106 PRBs), numerology 1, RLC acknowledged mode, a USRP X310 gNB, USRP B210 UEs and PTP-synchronized hosts for one-way-delay measurement. In a three-UE scenario (one TCP Cubic flow, two RAPID flows; interval 200 ms, measurement window 50 ms, K = 0.5, about 32 PRBs target), Cubic reaches about 20.4 Mbps with an average OWD of 464.9 +/- 33 ms, while the RAPID flows reach about 17.2 and 14.8 Mbps (16% and 27% lower goodput) with average OWD of 6.5 +/- 2 ms and 8.5 +/- 5 ms, which the authors report as roughly 72x and 55x reductions. ns-3/5G-LENA runs are used for gain and interval convergence studies. The paper refers to 5QI 80 (10 ms packet delay budget) as motivation but does not implement or test 5QI handling.

The authors' discussion names two open items: the equal-share PF-scheduler assumption may not match proprietary base-station schedulers (risking under- or over-utilisation), and a comparison with TCP Prague/L4S is planned. The evaluation is downlink-only, assumes a full buffer and covers one three-UE testbed scenario; the flow count n is known in a private network, and the authors suggest telemetry such as NR-Scope could supply it in public networks.

## Summary (ZH)
Hamid Hassani、Sonia M. Heemstra de Groot、Ignas G. Niemegeers、Kishor C. Joshi 与 George Exarchakos（埃因霍温理工大学）提出 RAPID，这是一种面向私有 5G 边缘网络（基站为瓶颈）的用户态传输方案。它不依赖时延或丢包反馈，而是由边缘服务器（ES）调节每条下行流的发送速率，使物理资源块（PRB）利用率保持在目标值。每个终端以 50 ms 为间隔测量自身 PRB 利用率，并通过 UDP 上报给 ES；ES 每 200 ms 对每条流施加比例反馈更新（增益 K），目标设为 0.9 x 106 / n 个 PRB（n 为活跃下行流数）。该设计假设调度器为等份额比例公平调度、业务为满缓冲模型，且仅评估了下行。

测试床采用 OpenAirInterface 5G SA（分支 2024.w38），n78 频段，6/3/1 TDD 配置，40 MHz（106 个 PRB），numerology 1，RLC 确认模式，USRP X310 作基站，USRP B210 作终端，并使用 PTP 同步的主机测量单向时延。在三终端场景（一路 TCP Cubic、两路 RAPID；调整间隔 200 ms，测量窗口 50 ms，K = 0.5，目标约 32 个 PRB）中，Cubic 吞吐约 20.4 Mbps、平均 OWD 为 464.9 +/- 33 ms，而两路 RAPID 流吞吐约 17.2 与 14.8 Mbps（分别低 16% 与 27%），平均 OWD 为 6.5 +/- 2 ms 与 8.5 +/- 5 ms，作者称约降低 72 倍与 55 倍。增益与间隔的收敛性研究使用 ns-3/5G-LENA 仿真。论文以 5QI 80（10 ms 包时延预算）作为动机，但并未实现或测试 5QI 处理。

作者在讨论中指出两点：等份额比例公平调度器的假设可能与专有基站调度器不符（可能导致资源利用不足或过度利用）；与 TCP Prague/L4S 的对比留待后续。评估仅限下行、假设满缓冲，且仅有一个三终端测试床场景；流数 n 在私有网络中已知，作者认为公网中可借助 NR-Scope 等遥测工具获得。

## Key technical points (EN)
- Edge server regulates per-flow downlink rate to hold a target PRB utilization (0.9 x 106 / n); UEs report PRB utilization every 50 ms, ES updates every 200 ms with proportional gain K.
- Assumes equal-share proportional-fair scheduler, full-buffer model, ES/UPF collocated with the base station.
- OAI 5G SA testbed (n78, 40 MHz, 106 PRBs, numerology 1, X310 gNB, B210 UEs, PTP-synchronized OWD).
- Three-UE test: Cubic ~20.4 Mbps at 464.9 ms OWD; RAPID flows ~17.2/14.8 Mbps at 6.5/8.5 ms OWD (16%/27% lower goodput).
- ns-3 5G-LENA used to study K and interval convergence; on the testbed the RAPID flows converge within a few seconds.
- No L4S/TCP Prague comparison, no uplink, no 5QI handling implemented.

## Key technical points (ZH)
- 边缘服务器调节每条下行流速率以维持目标 PRB 利用率（0.9 x 106 / n）；终端每 50 ms 上报 PRB 利用率，ES 每 200 ms 以比例增益 K 更新。
- 假设等份额比例公平调度器、满缓冲模型，且 ES/UPF 与基站同址。
- OAI 5G SA 测试床（n78，40 MHz，106 个 PRB，numerology 1，X310 基站，B210 终端，PTP 同步测 OWD）。
- 三终端测试：Cubic 约 20.4 Mbps、OWD 464.9 ms；RAPID 流约 17.2/14.8 Mbps、OWD 6.5/8.5 ms（吞吐分别低 16%/27%）。
- 以 ns-3 5G-LENA 研究 K 与间隔的收敛性；测试床上 RAPID 流在数秒内收敛。
- 未与 L4S/TCP Prague 对比，未评估上行，未实现 5QI 处理。

## Why it matters / what's new (EN)
RAPID shows, on an open-source 5G SA testbed, a rate controller driven by UE-reported PRB utilization rather than delay or loss, trading 16-27% goodput relative to TCP Cubic for single-digit-millisecond one-way delay in a small private-network scenario; its assumptions (known flow count, equal-share scheduler) bound where it applies.

## Why it matters / what's new (ZH)
RAPID 在开源 5G SA 测试床上展示了一种由终端上报的 PRB 利用率（而非时延或丢包）驱动的速率控制器：在小规模私有网络场景中，以相对 TCP Cubic 低 16%–27% 的吞吐换取个位数毫秒的单向时延；其假设（已知流数、等份额调度器）限定了适用范围。

## Images
![RAPID testbed | RAPID 测试床](https://arxiv.org/html/2610.13749v1/testbed.JPG)
![One-way delay of Cubic vs. RAPID flows on the OAI testbed | OAI 测试床上 Cubic 与 RAPID 流的单向时延](https://arxiv.org/html/2610.13749v1/Fig2.png)
