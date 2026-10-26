---
id: 2026-10-26_arxiv-resource-slicing-time-sensitive-traffic-leo-fso-isl
date_published: 2026-10-22
date_found: 2026-10-26
technology: satellite
type: academic-paper
title_en: "Resource Slicing for Time-Sensitive Data Traffic in Non-Terrestrial Networks with FSO Inter-Satellite Links"
title_zh: "采用自由空间光星间链路的非地面网络中面向时延敏感业务的资源切片"
url: "https://arxiv.org/abs/2610.31802"
source_quality: full
topics: [resource-slicing, FSO, inter-satellite-link, multi-hop, tail-latency, time-frequency-reservation, GLOBECOM]
topic_primary: leo-constellations
topics_secondary: [ntn]
novelty_score: 3
---

## Summary (EN)

Afridi, Dowhuszko, Wichman and Hämäläinen (arXiv 2610.31802, eess.SP, 6 pages, accepted for presentation at IEEE GLOBECOM 2026 Workshops; submitted 22 October 2026) address delay accumulation in multi-hop LEO paths, where urgent packets queue at every satellite. The paper frames the goal as a probabilistic end-to-end guarantee, Pr(delay > tau_max) <= epsilon, and says prior work mostly covers routing or per-link scheduling rather than reservation across consecutive hops.

Proposal: a multi-hop slicing framework that reserves flow-specific time-frequency resource blocks (RBs) on every link of a flow's route. Reservation size depends on arrival statistics, the delay budget and the reliability target, and reservations on consecutive links are time-aligned using per-hop delays so packets are forwarded in a pipeline. Flows farther from the ground station receive slightly larger reservations; only half of each link's RBs is assumed available for time-sensitive traffic. A sizing algorithm (Algorithm 1) sets windows and reservations and checks the target by simulation; the exact rule is only sketched.

Setup: three satellites in a path with two FSO ISLs and one RF feeder link to a ground station, 550 km altitude, 1200 km ISL distance, Poisson arrivals of 0.02 to 0.33 packets per slot per satellite, 1 ms slots, MATLAB Satellite Communications Toolbox. Baselines are Pure-TDMA, FIFO and farthest-satellite-first (FSF). At low load the schemes perform similarly and slicing gives no gain. At medium load (0.15) and 99.9999% reliability the proposal needs about 20 ms versus 24 ms (FIFO, FSF) and 49 ms (Pure-TDMA); at high load (0.30) about 31 ms versus 76 ms (FIFO), 180 ms (FSF) and 210 ms (Pure-TDMA), a 2.5 to 6.8 times reduction. The scope is a static three-satellite single path with Poisson traffic and one RB per packet; time-varying topology and mixed traffic classes are left to future work.

## Summary (ZH)

Afridi、Dowhuszko、Wichman 和 Hämäläinen（arXiv 2610.31802，eess.SP，6 页，已被 IEEE GLOBECOM 2026 Workshops 接收；2026 年 10 月 22 日提交）关注多跳 LEO 路径上的时延累积：紧急分组在每一跳卫星处都要排队。论文把目标表述为概率性端到端保证，即 Pr(时延 > tau_max) <= epsilon，并称既有工作主要集中在路由或单链路调度，而非跨连续多跳的资源预留。

方案：多跳切片框架，在业务流路由的每条链路上为该流预留专属的时频资源块（RB）。预留量取决于到达统计、时延预算和可靠性目标，且连续链路上的预留依据每跳时延做时间对齐，使分组以流水线方式转发。距地面站更远的流获得略大的预留；假定每条链路只有一半 RB 可用于时延敏感业务。尺寸算法（Algorithm 1）确定窗口和预留量并通过仿真验证目标；具体规则仅作了概述。

设置：路径含三颗卫星、两条 FSO 星间链路和一条通往地面站的射频馈电链路，轨道高度 550 km，星间距离 1200 km，每星每时隙泊松到达 0.02 至 0.33 个分组，时隙 1 ms，使用 MATLAB Satellite Communications Toolbox。基线为 Pure-TDMA、FIFO 和最远卫星优先（FSF）。低负载下各方案相近，切片无增益。中等负载（0.15）、99.9999% 可靠性时，该方案约需 20 ms，FIFO 和 FSF 为 24 ms，Pure-TDMA 为 49 ms；高负载（0.30）下约 31 ms，对应 FIFO 76 ms、FSF 180 ms、Pure-TDMA 210 ms，降低 2.5 至 6.8 倍。范围限于静态三星单路径、泊松业务、每分组占一个 RB；时变拓扑和混合业务类别留待后续工作。

## Key technical points (EN)

- **Target**: Pr(end-to-end delay > tau_max) <= epsilon across multi-hop ISL paths.
- **Mechanism**: per-flow time-frequency RB reservation on every hop, time-aligned across hops.
- **Setup**: 3 satellites, 2 FSO ISLs + RF feeder, 550 km, 1200 km ISL, 1 ms slot.
- **Result**: about 31 ms at high load and 99.9999% versus 76 / 180 / 210 ms for FIFO / FSF / Pure-TDMA.
- **Limits**: static single path, Poisson traffic, light-load reservation waste not quantified.

## Key technical points (ZH)

- **目标**：多跳星间链路路径上 Pr(端到端时延 > tau_max) <= epsilon。
- **机制**：沿每一跳为各流预留时频 RB，并跨跳做时间对齐。
- **设置**：3 颗卫星、2 条 FSO 星间链路 + 射频馈电，550 km，星间 1200 km，时隙 1 ms。
- **结果**：高负载、99.9999% 时约 31 ms，对比 FIFO / FSF / Pure-TDMA 的 76 / 180 / 210 ms。
- **局限**：静态单路径、泊松业务，轻载下预留浪费未量化。

## Why it matters / what's new (EN)

The paper studies tail-latency control across consecutive inter-satellite hops by reserving resources per flow. Gains appear at medium and high load only and come from simulation of a three-satellite path.

## Why it matters / what's new (ZH)

该论文通过按流预留资源，研究跨连续星间跳的尾部时延控制。增益仅出现在中高负载，且来自三星路径的仿真。

## Images

None.
