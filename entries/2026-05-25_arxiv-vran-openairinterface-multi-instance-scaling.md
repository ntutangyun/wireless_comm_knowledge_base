---
id: 2026-05-25_arxiv-vran-openairinterface-multi-instance-scaling
date_published: 2026-05-21
date_found: 2026-05-25
type: academic-paper
technology: cellular
title_en: "An Intensive vRAN Deployment with OpenAirInterface"
title_zh: "基于 OpenAirInterface 的密集化 vRAN 部署"
url: "https://arxiv.org/abs/2605.22638"
source_quality: abstract_only
topics: [open-ran, vRAN, OpenAirInterface, 5G, virtualization, hardware-acceleration]
topic_primary: open-ran
topics_secondary: [5g-nr]
novelty_score: 2
---

## Summary (EN)

This is a deployment-experience paper from the OpenAirInterface (OAI) camp on the practical question that increasingly gates virtualised RAN economics: how many vRAN instances can you pack onto one shared general-purpose server, and what has to change in the software stack to make that work? The authors adapt the OAI 5G stack so multiple vRAN instances can coexist on the same server, spanning both general-purpose processors (GPP) and hardware accelerators, and study the scaling behaviour as instances are co-located and contend for compute.

The contribution is engineering-empirical rather than algorithmic: optimisations that let the OAI software stack exploit underlying hardware capabilities, an analysis of how multiple instances behave when they share a server's compute, and a frank documentation of the current deployment limitations and where the bottlenecks sit. The paper is 12 pages with 4 figures; the abstract page does not surface the specific throughput/latency numbers (the entry is marked `abstract_only` because the full HTML rendering was not yet available at scan time).

For an Open-RAN ecosystem whose whole value proposition is running RAN functions as software on commodity servers, this kind of "how does it actually scale when you densify it" measurement work is the unglamorous but load-bearing evidence. It complements the KB's architecture- and AI-centric O-RAN entries with the deployment-side reality of multi-instance consolidation.

## Summary (ZH)

这是一篇来自 OpenAirInterface（OAI）阵营的部署经验论文，聚焦一个日益决定虚拟化 RAN 经济性的实际问题：一台共享通用服务器上能塞下多少个 vRAN 实例，以及为实现这一点软件栈需要做哪些改动？作者改造 OAI 5G 协议栈，使多个 vRAN 实例能在同一服务器上共存，覆盖通用处理器（GPP）与硬件加速器两条路径，并研究实例共置、争用算力时的扩展行为。

其贡献偏工程实证而非算法：使 OAI 软件栈能发挥底层硬件能力的优化、多实例共享服务器算力时的行为分析，以及对当前部署局限与瓶颈所在的坦诚记录。论文共 12 页、4 幅图；摘要页未给出具体吞吐 / 时延数字（因扫描时完整 HTML 渲染尚不可用，本条目标记为 `abstract_only`）。

对于「在通用服务器上以软件形式运行 RAN 功能」即为核心价值主张的开放 RAN 生态而言，这类「密集化后到底能否扩展」的实测工作虽不显眼，却是承重的证据。它以多实例整合的部署侧现实，补充了 KB 中以架构与 AI 为中心的 O-RAN 条目。

## Key technical points (EN)

- Adapts the **OpenAirInterface 5G stack** to run **multiple vRAN instances on one shared server**.
- Spans both **general-purpose processors (GPP)** and **hardware accelerators**; optimises the software stack to exploit underlying hardware.
- Studies **multi-instance scaling / contention** behaviour when instances share server compute.
- Documents current **deployment limitations** and future improvement directions.
- 12 pages, 4 figures; authors Romain Beurdouche and Raymond Knopp (OAI/EURECOM lineage).

## Key technical points (ZH)

- 改造 **OpenAirInterface 5G 协议栈**，使 **多个 vRAN 实例在同一共享服务器上运行**。
- 覆盖 **通用处理器（GPP）** 与 **硬件加速器** 两条路径；优化软件栈以发挥底层硬件能力。
- 研究实例共享服务器算力时的 **多实例扩展 / 争用** 行为。
- 记录当前 **部署局限** 与未来改进方向。
- 12 页、4 幅图；作者 Romain Beurdouche、Raymond Knopp（OAI/EURECOM 脉络）。

## Why it matters / what's new (EN)

Most O-RAN entries in the KB are about architecture (RIC, disaggregation) or AI control (MORPH, native-ISAC-in-O-RAN). This one is about the substrate: the actual server-consolidation behaviour of an open-source 5G stack when you push instance density up. As operators weigh how many cells they can host per COTS server, multi-instance scaling data from a widely-used reference stack like OAI is directly relevant to vRAN TCO arguments. Marked `abstract_only` pending the full-text numbers — a follow-up read once the HTML rendering is available would let us record the headline scaling figures.

## Why it matters / what's new (ZH)

KB 中多数 O-RAN 条目关注架构（RIC、解耦）或 AI 控制（MORPH、O-RAN 原生 ISAC）。本条目关注底座：当把实例密度推高时，一个开源 5G 协议栈在服务器整合上的实际行为。当运营商评估每台 COTS 服务器能承载多少小区时，来自 OAI 这类广泛使用的参考栈的多实例扩展数据，与 vRAN 总拥有成本（TCO）的论证直接相关。当前标记 `abstract_only`，待全文数字可得——HTML 渲染上线后补读，即可记录其关键扩展数据。
