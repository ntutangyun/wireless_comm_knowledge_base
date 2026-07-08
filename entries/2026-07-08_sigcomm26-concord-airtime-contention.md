---
id: 2026-07-08_sigcomm26-concord-airtime-contention
date_published: 2026-07-03
date_found: 2026-07-08
type: academic-paper
title_en: "Concord: Airtime-Aware Contention Control for Taming Tail Latency from Wi-Fi Frame Bursting (SIGCOMM 2026)"
title_zh: "Concord：面向 Wi-Fi 帧突发尾时延的空口时间感知竞争控制（SIGCOMM 2026）"
url: "https://conferences.sigcomm.org/sigcomm/2026/accepted"
source_quality: snippet_only
topics: [802.11, frame-bursting, TXOP, tail-latency, contention, SIGCOMM]
topic_primary: rtwt-latency
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

The ACM SIGCOMM 2026 accepted-papers list (posted July 3, 2026; conference August 17-21, Denver) includes one Wi-Fi paper: "Concord: Airtime-Aware Contention Control for Taming Tail Latency from Wi-Fi Frame Bursting", by Fengqian Guo, Siqi Wei, Sihao Miao and Hancheng Lu (University of Science and Technology of China) with Xinle Du (Tsinghua University). Only the title and author list are public at this stage — the camera-ready paper will appear closer to the August conference — so this entry records the acceptance signal, not the paper body.

The title identifies a specific and under-addressed latency mechanism: frame bursting. Modern 802.11 stacks aggressively aggregate frames and hold the medium for full TXOP bursts (A-MPDU aggregation inside multi-millisecond TXOPs) to maximise throughput. For every other contender on the channel, a neighbour's long burst is dead air — and when several BSSs burst independently, the contention delay experienced by a latency-sensitive frame becomes highly variable, inflating the tail of the latency distribution even when median latency looks healthy. "Airtime-aware contention control" suggests Concord makes the contention behaviour of a station explicitly conditional on observed airtime occupancy — plausibly adapting contention parameters or burst lengths in response to how much airtime bursting neighbours are consuming — rather than treating each access attempt as independent of the burst structure around it.

A SIGCOMM acceptance is a strong quality signal (the venue takes few wireless papers in a typical year), and the topic places Concord directly in the same problem space as two entries already in this KB: the NSDI 26 "Law" low-latency link-layer paper (2026-05-03_nsdi-law-802-11-low-latency-link-layer) and the BLADE adaptive contention-control work (2026-05-01_arxiv-blade-adaptive-contention), which showed that transient contention-interval inflation — not average CSMA efficiency — is what breaks real-time flows. Concord appears to attack the complementary cause: the burst-length side of the same tail-latency problem, from a different research group (USTC/Tsinghua).

## Summary (ZH)

ACM SIGCOMM 2026 录用论文名单（2026 年 7 月 3 日公布；会议 8 月 17-21 日在丹佛举行）包含一篇 Wi-Fi 论文："Concord: Airtime-Aware Contention Control for Taming Tail Latency from Wi-Fi Frame Bursting"，作者为中国科学技术大学的 Fengqian Guo、Siqi Wei、Sihao Miao、Hancheng Lu 及清华大学的 Xinle Du。目前仅标题和作者名单公开——正式论文将在 8 月会议前后发布——因此本条目记录的是录用信号，而非论文正文内容。

标题指向一个具体且长期被忽视的时延机制：帧突发（frame bursting）。现代 802.11 协议栈为最大化吞吐会激进地聚合帧并在整个 TXOP 内连续占用信道（多毫秒 TXOP 内的 A-MPDU 聚合）。对信道上的其他竞争者而言，邻居的长突发就是不可用的死区——当多个 BSS 各自独立突发时，时延敏感帧经历的竞争时延变得高度不确定，即便中位数时延看起来正常，时延分布的尾部也会被显著拉长。"空口时间感知的竞争控制"表明 Concord 将站点的竞争行为显式地与观测到的空口占用状态关联——可能是根据突发邻居消耗的空口时间自适应调整竞争参数或突发长度——而不是把每次接入尝试视为与周围突发结构无关的独立事件。

SIGCOMM 录用本身即是很强的质量信号（该会议每年收录的无线论文极少），且该主题使 Concord 直接落入本 KB 已有两个条目的问题空间：NSDI 26 的 Law 低时延链路层论文（2026-05-03_nsdi-law-802-11-low-latency-link-layer）和 BLADE 自适应竞争控制工作（2026-05-01_arxiv-blade-adaptive-contention）。后者证明了破坏实时流的是瞬态竞争区间膨胀而非平均 CSMA 效率。Concord 看起来攻击的是同一尾时延问题的互补成因——突发长度侧——且来自不同的研究团队（中科大/清华）。

## Key technical points (EN)

- Accepted at ACM SIGCOMM 2026 (Denver, August 17-21); accepted-papers list posted July 3, 2026. Only title + authors public so far.
- Authors: Fengqian Guo, Siqi Wei, Sihao Miao, Hancheng Lu (USTC); Xinle Du (Tsinghua University).
- Problem: Wi-Fi frame bursting (A-MPDU aggregation within long TXOPs) inflates tail latency for other contenders — a throughput-vs-tail-latency structural tension in 802.11 channel access.
- Approach (from title): "airtime-aware contention control" — conditioning contention behaviour on observed airtime occupancy rather than treating access attempts independently.
- The only Wi-Fi paper in the SIGCOMM 2026 accepted list; the other wireless-flavoured paper (dual-loop 5G uplink congestion control, Princeton/Buffalo) is cellular-side.

## Key technical points (ZH)

- 被 ACM SIGCOMM 2026（丹佛，8 月 17-21 日）录用；录用名单于 2026 年 7 月 3 日公布。目前仅标题和作者公开。
- 作者：Fengqian Guo、Siqi Wei、Sihao Miao、Hancheng Lu（中国科学技术大学）；Xinle Du（清华大学）。
- 问题：Wi-Fi 帧突发（长 TXOP 内的 A-MPDU 聚合）拉长了其他竞争者的尾时延——这是 802.11 信道接入中吞吐与尾时延的结构性矛盾。
- 方法（据标题推断）："空口时间感知的竞争控制"——将竞争行为与观测到的空口占用状态关联，而非将每次接入尝试视为独立事件。
- 这是 SIGCOMM 2026 录用名单中唯一的 Wi-Fi 论文；另一篇无线相关论文（双环 5G 上行拥塞控制，普林斯顿/布法罗）属于蜂窝侧。

## Why it matters / what's new (EN)

This is the KB's first SIGCOMM 2026 signal and the third distinct research thread on Wi-Fi tail latency this year, after the NSDI 26 Law link-layer redesign (2026-05-03_nsdi-law-802-11-low-latency-link-layer) and BLADE's adaptive contention control (2026-05-01_arxiv-blade-adaptive-contention). Where BLADE targets transient contention-window inflation and Law rebuilds the link layer, Concord's title points at the burst/TXOP dimension — the aggressive aggregation behaviour that makes a neighbour's throughput optimisation your latency problem. Top-venue attention on burst-induced tail latency is also relevant context for 802.11bn UHR's latency-reduction targets (P95 latency -25%) and the R-TWT mechanisms tracked in this bin. Revisit when the camera-ready appears (typically on arxiv or the authors' pages in August) to upgrade this entry from snippet to full.

## Why it matters / what's new (ZH)

这是 KB 的第一个 SIGCOMM 2026 信号，也是今年 Wi-Fi 尾时延方向的第三条独立研究线——此前有 NSDI 26 的 Law 链路层重构（2026-05-03_nsdi-law-802-11-low-latency-link-layer）和 BLADE 的自适应竞争控制（2026-05-01_arxiv-blade-adaptive-contention）。BLADE 针对瞬态竞争窗口膨胀，Law 重建链路层，而 Concord 的标题指向突发/TXOP 维度——即让邻居的吞吐优化变成你的时延问题的激进聚合行为。顶会对突发致尾时延的关注，也为 802.11bn UHR 的时延目标（P95 时延降低 25%）和本桶跟踪的 R-TWT 机制提供了相关背景。8 月正式论文（通常在 arxiv 或作者主页）发布后应回访本条目，将其从摘要级升级为全文级。
