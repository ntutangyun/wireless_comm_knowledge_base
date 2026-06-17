---
id: 2026-06-17_arxiv-sub-thz-leo-satellite-teralink
date_published: 2026-06-13
date_found: 2026-06-17
type: academic-paper
technology: satellite
title_en: "Sub-Terahertz LEO Satellite Communication: Vision, Opportunities, and Challenges toward the First Prototype in Space"
title_zh: "亚太赫兹 LEO 卫星通信：愿景、机遇与挑战——迈向首个在轨原型"
url: "https://arxiv.org/abs/2606.15410"
source_quality: full
topics: [LEO, sub-THz, terahertz, inter-satellite-link, backhaul, mmWave, optical-laser, TeraLink, NASA-CSLI]
topic_primary: leo-constellations
topics_secondary: [sat-direct-device]
novelty_score: 3
---

## Summary (EN)
Aliaga, Petrov, Benincasa, Diez Comas, Alqaraghuli, Siles, Duffy, Sanchez Net, Melodia and Jornet (arXiv 2606.15410, submitted 13 June 2026; 6 pages, 5 figures, submitted to *IEEE Wireless Communications Magazine*) argue for opening a **third band for satellite links** alongside the two incumbents — microwave/mmWave (mature but capacity-limited) and optical/laser (high capacity but pointing- and weather-sensitive). The proposed middle path is **sub-terahertz (sub-THz, 100–300 GHz)**.

The framing rests on ground-side momentum: sub-THz has moved in two decades from niche sensing and ultra-short-range links to **operational multi-kilometre 100 Gbit/s+ wireless backhaul** demonstrated recently. The paper's central question is whether that same hardware and signal-processing maturity can be stretched to **100-km-scale satellite links** (inter-satellite and satellite-to-ground/relay) in LEO. The authors (i) assess the technological readiness of emerging sub-THz front-ends and signal processing for long-range LEO operation, (ii) position sub-THz as a **complement, not a replacement**, to mmWave and optical — offering additional aggregate capacity, improved resilience (a fallback when laser links are degraded), and architectural flexibility in how a constellation allocates traffic across bands, and (iii) lay out the open research and engineering challenges (link budget at 100 km, atmospheric/ionospheric effects, beam acquisition and tracking, spaceborne power and thermal limits, transceiver readiness).

The concrete anchor is **TeraLink**, an ongoing international R&D project that has secured an **approved NASA CSLI (CubeSat Launch Initiative)** mission to build and launch the **first hardware prototype of sub-THz LEO satellite communications in space** — moving the idea from analysis toward an actual on-orbit demonstration. This is a vision/opportunities paper, not an experimental-results paper, but it is notable as the first KB entry to treat sub-THz as a satellite-link band with a funded path to flight.

## Summary (ZH)
Aliaga、Petrov、Benincasa、Diez Comas、Alqaraghuli、Siles、Duffy、Sanchez Net、Melodia 与 Jornet（arXiv 2606.15410，2026 年 6 月 13 日提交；6 页、5 图，投稿至 *IEEE Wireless Communications Magazine*）主张在现有两条卫星链路之外开辟**第三个频段**——既有的微波/毫米波（成熟但容量受限）与光学/激光（容量高但对指向与天气敏感）之外，提出中间路线：**亚太赫兹（sub-THz，100–300 GHz）**。

立论基于地面侧的进展：二十年间亚太赫兹已从传感与超短距小众应用，发展到近期演示的**多公里、100 Gbit/s+ 的无线回传**。论文核心问题是：能否将同样成熟的硬件与信号处理推广到 LEO 中的**百公里级卫星链路**（星间及星地/中继）。作者（i）评估新兴亚太赫兹前端与信号处理对 LEO 长距离运行的技术就绪度；（ii）将亚太赫兹定位为对毫米波与光学的**补充而非替代**——提供额外的聚合容量、更强的韧性（激光链路退化时的回退方案）以及星座跨频段分配流量的架构灵活性；（iii）梳理开放的研究与工程挑战（100 km 链路预算、大气/电离层效应、波束捕获与跟踪、星上功率与热限、收发机就绪度）。

具体抓手是 **TeraLink**：一个正在推进的国际研发项目，已获得 **NASA CSLI（立方星发射计划）批准**的任务，将构建并发射**首个在轨亚太赫兹 LEO 卫星通信硬件原型**，把该构想从分析推向真实的在轨演示。本文为愿景/机遇类文章，非实验结果，但作为知识库首条将亚太赫兹视作卫星链路频段、且具备明确飞行路径的条目，颇具意义。

## Key technical points (EN)
- **Thesis**: add sub-THz (100–300 GHz) as a third satellite-link band complementing mmWave (capacity-limited) and optical/laser (pointing/weather-sensitive).
- **Ground momentum**: sub-THz now does operational multi-km, 100 Gbit/s+ wireless backhaul — the readiness argument for stretching to 100-km LEO links.
- **Role**: complement not replacement — extra aggregate capacity, resilience/fallback vs laser, cross-band architectural flexibility.
- **Challenges named**: 100-km link budget, atmospheric/ionospheric effects, beam acquisition/tracking, spaceborne power/thermal, transceiver readiness.
- **Anchor project**: TeraLink — approved NASA CSLI mission to fly the first sub-THz LEO comms hardware prototype in space.
- **Type**: vision/opportunities paper (cs.NI), no experimental results; first KB entry on sub-THz as a satellite band.

## Key technical points (ZH)
- **论点**：将亚太赫兹（100–300 GHz）作为第三卫星链路频段，补充毫米波（容量受限）与光学/激光（指向/天气敏感）。
- **地面进展**：亚太赫兹已实现多公里、100 Gbit/s+ 的无线回传——支撑推广至 100 km LEO 链路的就绪度论据。
- **定位**：补充而非替代——额外聚合容量、相对激光的韧性/回退、跨频段架构灵活性。
- **列出的挑战**：100 km 链路预算、大气/电离层效应、波束捕获/跟踪、星上功率/热限、收发机就绪度。
- **抓手项目**：TeraLink——获 NASA CSLI 批准、将在轨飞行首个亚太赫兹 LEO 通信硬件原型。
- **类型**：愿景/机遇类文章（cs.NI），无实验结果；知识库首条关于亚太赫兹作为卫星频段的条目。

## Why it matters / what's new (EN)
The `leo-constellations` bin has lately tracked capacity and resource-management work — beam-hopping scheduling (Aidos, 2026-06-15), ground-station placement (SCORE, 2026-06-13), and the Space Data Centers vision (2026-06-13). This paper opens a different axis: the **physical link layer / spectrum** of the constellation itself. Today's inter-satellite and feeder links are mmWave or optical; sub-THz sits in between — more bandwidth than mmWave, less fragile than laser — and the paper makes the readiness case that ground-proven 100 Gbit/s+ sub-THz backhaul is close enough to attempt at 100-km LEO range. What lifts it above a pure position paper is TeraLink's **approved NASA CSLI flight slot**: a concrete, funded route to the first on-orbit sub-THz comms prototype. Worth watching for a follow-up once the prototype flies and returns real link-budget data.

## Why it matters / what's new (ZH)
`leo-constellations` 分箱近期跟踪容量与资源管理工作——波束跳变调度（Aidos，2026-06-15）、地面站选址（SCORE，2026-06-13）与 Space Data Centers 愿景（2026-06-13）。本文开辟了另一条轴线：星座自身的**物理链路层/频谱**。当前星间与馈电链路为毫米波或光学；亚太赫兹介于其间——带宽大于毫米波、脆弱性低于激光——论文论证地面验证的 100 Gbit/s+ 亚太赫兹回传已足够接近、可在 100 km LEO 距离上尝试。使其超越纯立场文章的，是 TeraLink **已获批的 NASA CSLI 飞行机会**：一条具体、有资金的路径，通向首个在轨亚太赫兹通信原型。待原型飞行并回传真实链路预算数据后，值得跟进后续报道。
