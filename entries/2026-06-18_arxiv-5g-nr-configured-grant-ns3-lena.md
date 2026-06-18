---
id: 2026-06-18_arxiv-5g-nr-configured-grant-ns3-lena
date_published: 2026-06-17
date_found: 2026-06-18
technology: cellular
type: academic-paper
title_en: "Open-Source 5G NR Configured Grant for URLLC in ns-3 5G-LENA: An Industry 4.0 Scheduling Case Study"
title_zh: "ns-3 5G-LENA 中面向URLLC的开源5G NR配置授权实现：工业4.0调度案例研究"
url: "https://arxiv.org/abs/2606.18763"
source_quality: abstract_only
topics: [5G-NR, configured-grant, URLLC, ns-3, 5G-LENA, Industry-4.0, scheduling]
topic_primary: 5g-nr
topics_secondary: [mec]
novelty_score: 2
---

## Summary (EN)

This paper (Larrañaga, Lucas-Estañ, Lagén, Ali, Martinez & Gozálvez — the CTTC / UMH-Elche group, submitted 17 June 2026) delivers the **first open-source implementation of 5G NR Configured Grant (CG)** in the widely used **ns-3 5G-LENA** system-level simulator. Configured Grant is a 5G NR uplink mechanism that **pre-allocates radio resources** to a UE so it can transmit without first sending a scheduling request and waiting for a dynamic grant — removing a round-trip of signalling latency that is decisive for URLLC (Ultra-Reliable Low-Latency Communication) traffic in industrial settings.

The implementation is validated in **Industry 4.0 manufacturing scenarios**, examining the uplink latency achieved with CG under different scheduling policies. The authors report that the simulated latency **closely matches values reported in prior analytical studies**, giving confidence the implementation faithfully reproduces CG behaviour. They also enhanced the simulator's **OFDMA implementation** so it better reflects the flexibility of real 5G NR resource allocation, which CG depends on.

The headline message is methodological rather than a single performance number: efficient radio-resource utilisation is the key lever for meeting industrial latency budgets, and CG removes the latency penalty that dynamic scheduling signalling otherwise imposes. Because **no open-source 5G NR simulator previously supported CG**, the contribution is a reusable tool that lets the research community study grant-free / pre-configured uplink scheduling for URLLC at system level.

## Summary (ZH)

本文（Larrañaga、Lucas-Estañ、Lagén、Ali、Martinez 与 Gozálvez——CTTC/UMH-Elche 团队，2026年6月17日提交）在被广泛使用的 **ns-3 5G-LENA** 系统级仿真器中，实现了**首个开源的 5G NR 配置授权（Configured Grant, CG）**。配置授权是一种 5G NR 上行机制，**预先为 UE 分配无线资源**，使其无需先发送调度请求、等待动态授权即可发送数据——省去一个对工业场景 URLLC（超可靠低时延通信）业务至关重要的信令往返时延。

该实现于**工业4.0制造场景**中验证，考察在不同调度策略下 CG 所达到的上行时延。作者指出仿真时延**与既有解析研究报告的数值高度吻合**，从而验证了实现对 CG 行为的忠实再现。他们还增强了仿真器的 **OFDMA 实现**，使其更好地反映真实 5G NR 资源分配的灵活性——而 CG 正依赖于此。

核心贡献是方法学层面而非单一性能数字：高效的无线资源利用是满足工业时延预算的关键杠杆，而 CG 消除了动态调度信令本会带来的时延代价。由于**此前没有任何开源 5G NR 仿真器支持 CG**，该贡献提供了一个可复用工具，使研究界能够在系统级研究面向 URLLC 的免授权/预配置上行调度。

## Key technical points (EN)

- **First open-source CG implementation** in ns-3 5G-LENA — no prior open-source 5G NR simulator supported Configured Grant.
- **Configured Grant** pre-allocates uplink resources, eliminating the scheduling-request → dynamic-grant round-trip that hurts URLLC latency.
- Validated in **Industry 4.0** scenarios; simulated latency matches prior analytical results across scheduling policies.
- Also **enhanced the 5G-LENA OFDMA model** to better capture 5G NR resource-allocation flexibility.
- Authors: CTTC / UMH-Elche (Lagén, Gozálvez et al.) — same group active in deterministic/predictive 5G scheduling.

## Key technical points (ZH)

- **首个开源 CG 实现**，位于 ns-3 5G-LENA——此前无任何开源 5G NR 仿真器支持配置授权。
- **配置授权**预分配上行资源，省去"调度请求→动态授权"往返，从而改善 URLLC 时延。
- 在**工业4.0**场景中验证；不同调度策略下仿真时延与既有解析结果吻合。
- 同时**增强了 5G-LENA 的 OFDMA 模型**，以更好地刻画 5G NR 资源分配灵活性。
- 作者：CTTC/UMH-Elche（Lagén、Gozálvez 等）——该团队在确定性/预测性5G调度方向活跃。

## Why it matters / what's new (EN)

The CTTC / UMH-Elche group has been producing a steady stream of deterministic-scheduling and predictive-grant work (see the clustered "predictive deterministic B5G scheduling" entry from 2026-06-17 and the flexible-duplexing entry from 2026-06-11). This paper is the **tooling foundation** under that line: an open, validated CG model that other groups can build on, rather than yet another closed analytical study. For a KB tracking 5G-NR scheduling research, a reusable open-source simulator feature is higher-leverage than a one-off result, because it lowers the cost of every subsequent grant-free / URLLC study.

## Why it matters / what's new (ZH)

CTTC/UMH-Elche 团队持续产出确定性调度与预测性授权方面的工作（参见 2026-06-17 聚类的"预测性确定性B5G调度"条目，以及 2026-06-11 的灵活双工条目）。本文是该研究线下的**工具基础**：一个开放、经验证的 CG 模型，可供其他团队在其上构建，而非又一项封闭的解析研究。对于跟踪 5G-NR 调度研究的知识库而言，一个可复用的开源仿真器功能比一次性结果更具杠杆效应，因为它降低了后续每一项免授权/URLLC 研究的成本。
