---
id: 2026-10-28_arxiv-rlnc-vs-reed-solomon-satellite-channels-crossover-bridging
date_published: 2026-10-26
date_found: 2026-10-28
technology: satellite
type: academic-paper
title_en: "RLNC vs Reed-Solomon in Satellite Channels: Crossover Analysis and the Bridging Property"
title_zh: "卫星信道中的 RLNC 与 Reed-Solomon：交叉点分析与桥接性质"
url: "https://arxiv.org/abs/2610.35649"
source_quality: full
topics: [RLNC, Reed-Solomon, erasure-coding, Gilbert-Elliott, burst-loss, inter-satellite-relay, satellite-channel]
topic_primary: leo-constellations
topics_secondary: [ntn]
novelty_score: 2
---

## Summary (EN)

Szczepanski and Vasudevan (arXiv 2610.35649, cs.NI, v1 26 October 2026; described as a preprint under journal review) compare Reed-Solomon (RS) block codes with Random Linear Network Coding (RLNC) at matched code rates on a physically derived satellite relay channel. The motivation is that high round-trip times and burst losses tied to orbital geometry limit ARQ and HARQ on satellite links. RS corrects symbol errors in a fixed block and fails once more than N-K symbols are lost; RLNC acts as a forward erasure code that accumulates coded packets across rounds. The main pair is RS(255,204) and RLNC at rate 0.800.

The channel is a three-hop relay (ground station 1, satellite 1, satellite 2, ground station 2) on 10,000 km semi-major-axis orbits, with link margin mapped to packet loss by a sigmoid and bursts captured by a Gilbert-Elliott model. The crossover loss rate p* is where RS and RLNC need equal overhead; the paper reports p* of about 0.21 at rate 0.800. The "bridging property" is that every RS code collapses above its own p*, while RLNC overhead grows smoothly as roughly 1.25/(1-p), so the envelope of the three RS codes collapses by about p = 0.27 whereas RLNC covers the gap.

Results come from a packet-level MATLAB simulation with six experiments. On the time-varying satcom channel RS(255,204) exceeds a 500 Mbit cap despite about 1% open-link loss, while RLNC needs about 15.5 Mbit to recover 1,000 packets (mean burst duration about 166 minutes). An RS plus RLNC hybrid cuts overhead by 16 to 19% versus pure RLNC at high loss with BER 10^-3, but needs about 2x overhead on the pure-erasure satcom channel. Theory matches simulation within 1% for RS and within 5% for RLNC at low-to-moderate loss. Stated limits: independent erasures in the sweeps, a two-state burst model, one orbital configuration and one ground-station pair, no LEO constellations, no measured traces, RLNC coefficient headers excluded.

## Summary (ZH)

Szczepanski 和 Vasudevan（arXiv 2610.35649，cs.NI，v1 于 2026 年 10 月 26 日发布；注明为正在期刊评审的预印本）在由物理模型导出的卫星中继信道上，以相同码率比较 Reed-Solomon（RS）分组码与随机线性网络编码（RLNC）。动机在于与轨道几何相关的高往返时延和突发丢包限制了卫星链路上的 ARQ 与 HARQ。RS 纠正固定分组内的符号错误，丢失超过 N-K 个符号即失效；RLNC 作为前向纠删码，跨轮累积编码包。主要对比对象为 RS(255,204) 与码率 0.800 的 RLNC。

信道为三跳中继（地面站 1、卫星 1、卫星 2、地面站 2），轨道半长轴 10,000 km，链路余量通过 sigmoid 映射为丢包率，突发由 Gilbert-Elliott 模型刻画。交叉丢包率 p* 指 RS 与 RLNC 所需开销相等之处；论文给出码率 0.800 时 p* 约为 0.21。“桥接性质”指每个 RS 码在其自身 p* 之上即崩溃，而 RLNC 的开销大致按 1.25/(1-p) 平滑增长，因此三种 RS 码的包络在 p 约 0.27 处崩溃，而 RLNC 可覆盖该区间。

结果来自包级 MATLAB 仿真的六组实验。在时变卫星通信信道上，尽管开放链路丢包约 1%，RS(255,204) 仍超过 500 Mbit 上限，而 RLNC 恢复 1,000 个包约需 15.5 Mbit（平均突发时长约 166 分钟）。RS 加 RLNC 混合方案在高丢包、BER 10^-3 时比纯 RLNC 开销降低 16% 至 19%，但在纯删除的卫星通信信道上需要约 2 倍开销。理论与仿真在 RS 上吻合在 1% 内，RLNC 在低至中等丢包下吻合在 5% 内。论文局限：扫描中假设独立删除、仅两状态突发模型、仅一种轨道配置和一对地面站、不含 LEO 星座、无实测轨迹、未计入 RLNC 系数头。

## Key technical points (EN)

- **Comparison**: RS(255,204) versus RLNC at rate 0.800 on a three-hop inter-satellite relay.
- **Crossover**: p* of about 0.21 at rate 0.800 where overheads are equal.
- **Bridging property**: RS codes collapse above their own p*; RLNC overhead grows roughly as 1.25/(1-p).
- **Satcom result**: RS exceeds a 500 Mbit cap; RLNC needs about 15.5 Mbit for 1,000 packets.
- **Hybrid**: 16 to 19% less overhead than pure RLNC at BER 10^-3, about 2x on pure erasure.
- **Caveat**: MATLAB simulation, one orbit configuration, no measured traces.

## Key technical points (ZH)

- **对比**：三跳星间中继上 RS(255,204) 与码率 0.800 的 RLNC。
- **交叉点**：码率 0.800 时两者开销相等的 p* 约为 0.21。
- **桥接性质**：RS 码在自身 p* 之上崩溃；RLNC 开销约按 1.25/(1-p) 增长。
- **卫星通信结果**：RS 超过 500 Mbit 上限；RLNC 恢复 1,000 个包约需 15.5 Mbit。
- **混合方案**：BER 10^-3 时比纯 RLNC 开销低 16% 至 19%，纯删除信道上约 2 倍。
- **注意**：MATLAB 仿真、单一轨道配置、无实测轨迹。

## Why it matters / what's new (EN)

The paper frames packet-level forward erasure coding as an alternative to retransmission (ARQ/HARQ) on long-RTT, burst-loss satellite paths and gives a simple crossover rule. Evidence is simulation on one geometry (not a LEO constellation), so the numbers are indicative only.

## Why it matters / what's new (ZH)

论文把包级前向纠删编码作为长 RTT、突发丢包卫星路径上 ARQ/HARQ 重传的替代方案，并给出简单的交叉规则。证据来自单一几何（非 LEO 星座）的仿真，数值仅供参考。

## Images

![Bridging property of RS and RLNC overhead | RS 与 RLNC 开销的桥接性质](https://arxiv.org/html/2610.35649v1/bridgingGraph_finalUpdatedVersion.png)
