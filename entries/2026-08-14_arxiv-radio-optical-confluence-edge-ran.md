---
id: 2026-08-14_arxiv-radio-optical-confluence-edge-ran
date_published: 2026-08-13
date_found: 2026-08-14
type: academic-paper
technology: cellular
title_en: "Radio-Optical Confluence in Intelligent Edge Networks"
title_zh: "智能边缘网络中的无线-光融通架构"
url: "https://arxiv.org/abs/2608.13098"
source_quality: full
topics: [6G, x-haul, analog-radio-over-fiber, ROADM, FSO, RAN-densification]
topic_primary: 6g-vision
topics_secondary: [open-ran, mec]
novelty_score: 2
---

## Summary (EN)
Gupta, Dass, Raj, Natalino, Ruffini, Monti and Kilper (Trinity College Dublin / CONNECT + Chalmers; OFC 2026 paper, arXiv 13 Aug 2026) argue that densified radio access networks should move past radio-optical **convergence** (co-existing systems) to **confluence**: one unified mesh transport where fiber, free-space optics (FSO), mmWave and sub-THz links carry both access and x-haul under common control, with radio waveforms and digital coherent traffic sharing the same optical spectrum.

Two experimental anchors: (1) coexistence of **600 Gbps digital coherent optical traffic alongside a 6 Gbps 16-QAM OFDM analog-radio-over-fiber signal over a 77 km loop** with negligible cross-interference, showing ARoF and DCO can share flex-grid WDM infrastructure; (2) a 10-ROADM ring topology study where adding 40% ROADM bypass links cuts average hop count 3.4 → 2.8, and just 5% RU-to-RU bypass connections approaches fully-meshed performance — small numbers of mesh cross-links buy most of the latency benefit. Control is a load-aware shortest-path (Dijkstra) routing over the unified radio-optical topology.

## Summary (ZH)
Gupta、Dass、Raj、Natalino、Ruffini、Monti 与 Kilper（都柏林圣三一学院 / CONNECT + 查尔姆斯理工；OFC 2026 论文，2026 年 8 月 13 日 arXiv）主张：密集化无线接入网应超越无线-光**汇聚**（系统并存），走向**融通（confluence）**——光纤、自由空间光（FSO）、mmWave 与亚太赫兹链路组成统一网状传输，在共同控制下同时承载接入与 x-haul，无线波形与数字相干流量共享同一光谱。

两个实验锚点：（1）**600 Gbps 数字相干光流量与 6 Gbps 16-QAM OFDM 模拟光载无线（ARoF）信号在 77 km 环路上共存**，交叉干扰可忽略，表明 ARoF 与 DCO 可共享灵活栅格 WDM 基础设施；（2）10 节点 ROADM 环拓扑研究：增加 40% ROADM 旁路链路使平均跳数 3.4 → 2.8，仅 5% 的 RU-RU 旁路连接即可逼近全网状性能——少量网状横向链路即可换取大部分时延收益。控制面为统一无线-光拓扑上的负载感知最短路（Dijkstra）路由。

## Key technical points (EN)
- Confluence architecture: unified mesh from metro core (CU/DU processing) to edge RUs via PON or ROADM chains; fiber + FSO + mmWave/sub-THz as interchangeable transport segments under common control.
- Spectrum sharing: analog radio-over-fiber and digital coherent optical signals coexist on flex-grid WDM — 600 Gbps DCO + 6 Gbps ARoF, 77 km, negligible penalty.
- Topology economics: 40% ROADM bypass → hop count 3.4 → 2.8; 5% RU-RU bypass links ≈ full-mesh latency performance.
- Hybrid fiber-FSO-wireless builds are argued to cut deployment cost vs fully-fibered densification without coverage loss.

## Key technical points (ZH)
- 融通架构：从城域核心（CU/DU 处理）经 PON 或 ROADM 链到边缘 RU 的统一网状网；光纤 + FSO + mmWave/亚太赫兹作为共同控制下可互换的传输段。
- 频谱共享：模拟光载无线与数字相干光信号在灵活栅格 WDM 上共存——600 Gbps DCO + 6 Gbps ARoF、77 km、损伤可忽略。
- 拓扑经济性：40% ROADM 旁路使跳数 3.4 → 2.8；5% RU-RU 旁路链路 ≈ 全网状时延性能。
- 论证混合光纤-FSO-无线建网可在不损失覆盖的前提下显著低于全光纤密集化的部署成本。

## Why it matters / what's new (EN)
The KB's RAN-architecture thread has covered compute placement (O-RAN energy-latency splits), fronthaul over GPU (OCUDU) and microwave/satellite backhaul twins — this is the first entry on the **transport substrate itself as a co-designed radio-optical mesh**. The quantified claims (ARoF/DCO spectral coexistence at metro distance; tiny bypass fractions capturing most mesh latency gains) give 6G x-haul planning concrete design rules, and the author set (Kilper/Ruffini/Monti) sits at the center of the optical-wireless integration community — expect follow-on testbed papers along this line.

## Why it matters / what's new (ZH)
知识库的 RAN 架构脉络此前覆盖了算力放置（O-RAN 能耗-时延分割）、GPU 前传（OCUDU）与微波/卫星回传孪生——本条是第一条关于**传输底座本身作为无线-光协同设计网状网**的条目。量化结论（城域距离上 ARoF/DCO 频谱共存；极小旁路比例即可获得大部分网状时延收益）为 6G x-haul 规划提供了具体设计规则；作者群（Kilper/Ruffini/Monti）处于光-无线融合社区的核心，可期待该方向的后续试验床论文。
