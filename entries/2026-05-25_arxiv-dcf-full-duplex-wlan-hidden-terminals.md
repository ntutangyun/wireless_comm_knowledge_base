---
id: 2026-05-25_arxiv-dcf-full-duplex-wlan-hidden-terminals
date_published: 2026-05-22
date_found: 2026-05-25
type: academic-paper
title_en: "On the Performance of DCF in Full Duplex WLANs with Hidden Terminals"
title_zh: "存在隐藏终端时全双工 WLAN 中 DCF 的性能分析"
url: "https://arxiv.org/abs/2605.23276"
source_quality: full
topics: [DCF, full-duplex, CSMA-CA, hidden-terminal, 802.11ac, Bianchi-model, saturation-throughput]
topic_primary: wifi8-uhr
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

This paper asks a narrow but practically important question: if you bolt full-duplex (FD) radios onto an otherwise-unchanged IEEE 802.11 WLAN running the standard Distributed Coordination Function (DCF), how much throughput do you actually gain once hidden terminals are in the picture? The authors build an analytical answer rather than a simulation one, extending Bianchi's classic two-dimensional Markov-chain model of DCF backoff to a setting with one AP and *n* saturated stations, where the AP and exactly one STA can transmit simultaneously (symmetric FD, AP↔STA) or where a second transmission overlaps a hidden destination (asymmetric FD).

The key modelling move is to stop treating all nodes as statistically identical. Collision probabilities are split between the AP (p_ap) and individual stations (p_sta(i)), and space is stratified into M concentric annuli around the AP so the model can compute, geometrically, the conditional probability that a node in annulus *j* is hidden from a node in annulus *i*. The hidden region created by two overlapping transmission circles is derived in closed form, and the probability that a station falls in that region peaks at roughly 0.6 when the two circle centres are one radius apart. RTS/CTS protection is assumed before every data frame, along with perfect self-interference cancellation and two antennas per node.

The headline result is deflationary: under DCF with hidden terminals, FD buys almost nothing. For n=5 nodes the model gives roughly 491 Mbps for FD versus 486 Mbps for HD — about a 1.03× gain, or ~5 Mbps. By n=1000 the two curves are indistinguishable (≈136.25 vs ≈136.22 Mbps). The authors attribute this to a structural mismatch: DCF is explicitly engineered to *prevent* simultaneous medium access, so the AP-plus-one-STA pairing that FD needs to exploit rarely materialises; when collisions do happen at scale they tend to involve multiple stations rather than the precise AP+STA coincidence FD rewards.

## Summary (ZH)

本文提出一个范围不大但具有实践意义的问题：若在一个其余部分保持不变、运行标准分布式协调功能（DCF）的 IEEE 802.11 WLAN 上加装全双工（FD）射频，在引入隐藏终端之后，实际能获得多少吞吐增益？作者给出的是解析答案而非仿真答案——他们将 Bianchi 经典的二维马尔可夫链 DCF 退避模型扩展到「1 个 AP + n 个饱和站点」的场景，其中 AP 与恰好一个 STA 可同时收发（对称 FD，AP↔STA），或第二路发送与一个隐藏目的端重叠（非对称 FD）。

关键的建模手法是不再把所有节点视作统计上等同。碰撞概率被拆分为 AP 的 p_ap 与各站点的 p_sta(i)，并将空间按以 AP 为中心的 M 个同心圆环分层，从而以几何方式计算「环 j 中的节点对环 i 中的节点隐藏」的条件概率。两个重叠发送圆所形成的隐藏区域以闭式给出，当两圆心相距一个半径时，站点落入该区域的概率峰值约为 0.6。模型假设每个数据帧前都有 RTS/CTS 保护，并假定完美自干扰抵消与每节点两根天线。

核心结论令人「降温」：在带隐藏终端的 DCF 下，FD 几乎无所增益。n=5 时模型给出 FD 约 491 Mbps、HD 约 486 Mbps——约 1.03× 增益，即约 5 Mbps；到 n=1000 时两条曲线已无法区分（≈136.25 vs ≈136.22 Mbps）。作者将其归因于结构性错配：DCF 本就是为「阻止」同时接入而设计的，因此 FD 所需依赖的「AP + 单个 STA」配对极少出现；当大规模碰撞发生时，往往涉及多个站点，而非 FD 所青睐的 AP+STA 精确同发。

## Key technical points (EN)

- Extends Bianchi's DCF Markov chain to **node-differentiated collision probabilities** (AP vs per-STA) rather than a single network-wide τ/p pair.
- **Spatial stratification into M concentric annuli** (M=5 found sufficient for convergence) lets the model compute hidden-terminal conditional probabilities ph(i|j) from intersection geometry.
- Closed-form hidden-region area: S_h = πr² − 2r²·arccos(d/2r) + (d/2)·√(4r²−d²); hidden-membership probability peaks ≈0.6 at d=r.
- Models both **symmetric FD** (AP↔STA bidirectional) and **asymmetric FD** (overlapping transmission toward a hidden destination); requires no DCF modification — FD only fires when AP and one STA expire backoff together.
- Evaluation parameters: IEEE 802.11ac, MCS 8 (780 Mbps PHY), 11,454-byte MPDU, RTS/CTS on, slot 9 µs, DIFS 34 µs, SIFS 16 µs, CW 16–1024, m=6.
- Result: FD/HD saturation-throughput gain ≈1.03× at n=5 (~5 Mbps), collapsing to ≈1.0 by n=1000 (≈136 Mbps for both).

## Key technical points (ZH)

- 将 Bianchi 的 DCF 马尔可夫链扩展为 **节点区分的碰撞概率**（AP 与各 STA 分开），而非全网单一 τ/p。
- **空间按 M 个同心圆环分层**（M=5 即收敛），借助交叠几何计算隐藏终端条件概率 ph(i|j)。
- 隐藏区域闭式面积：S_h = πr² − 2r²·arccos(d/2r) + (d/2)·√(4r²−d²)；当 d=r 时隐藏归属概率峰值约 0.6。
- 同时建模 **对称 FD**（AP↔STA 双向）与 **非对称 FD**（向隐藏目的端的重叠发送）；不需修改 DCF——仅当 AP 与一个 STA 同时退避到零时 FD 才触发。
- 评估参数：IEEE 802.11ac、MCS 8（780 Mbps PHY）、11,454 字节 MPDU、开启 RTS/CTS、时隙 9 µs、DIFS 34 µs、SIFS 16 µs、CW 16–1024、m=6。
- 结论：n=5 时 FD/HD 饱和吞吐增益约 1.03×（约 5 Mbps），到 n=1000 时坍缩至约 1.0（两者均约 136 Mbps）。

## Why it matters / what's new (EN)

Most FD-WLAN literature reports large gains by assuming an FD-aware MAC that actively schedules simultaneous transmissions. This paper isolates the opposite, more deployable case — keep DCF untouched and just add FD radios — and shows analytically that the gain nearly vanishes once hidden terminals and contention are modelled honestly. It is a useful negative/bounding result for anyone weighing FD silicon against a MAC redesign: without MAC changes, FD's benefit under DCF is marginal. This complements the KB's other MAC-analysis and reliability entries by quantifying *why* FD needs MAC-layer scheduling support (not just PHY self-interference cancellation) to pay off, which is relevant context for the scheduling-centric direction of 802.11bn UHR work.

## Why it matters / what's new (ZH)

多数 FD-WLAN 文献通过假设一个「FD 感知」的 MAC 主动调度同时发送来报告显著增益。本文隔离出相反且更易落地的情形——保持 DCF 不变、仅加装 FD 射频——并以解析方式证明：一旦诚实地建模隐藏终端与竞争，增益几近消失。对于在「FD 芯片」与「MAC 重设计」之间权衡的人，这是一个有用的负向 / 边界结论：不改 MAC，FD 在 DCF 下的收益微乎其微。它通过定量说明 *为何* FD 要靠 MAC 层调度支持（而非仅靠 PHY 自干扰抵消）才能兑现收益，补充了 KB 中其他 MAC 分析与可靠性条目，也为 802.11bn UHR 以调度为中心的方向提供了相关背景。
