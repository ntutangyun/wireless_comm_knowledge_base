---
id: 2026-08-13_arxiv-isac-3gpp-5ga-to-6g-evolution
date_published: 2026-08-12
date_found: 2026-08-13
type: academic-paper
technology: cellular
title_en: "Integrated Sensing and Communication in 3GPP: Evolution from 5G-Advanced to 6G"
title_zh: "3GPP 中的通感一体化（ISAC）：从 5G-Advanced 到 6G 的演进"
url: "https://arxiv.org/abs/2608.11606"
source_quality: full
topics: [ISAC, 3GPP, Release-19, Release-20, 6G]
topic_primary: 6g-vision
topics_secondary: [5g-nr]
novelty_score: 2
---

## Summary (EN)
Xingqin Lin (arXiv 12 Aug 2026, 8 pages) provides the first unified technical map of how Integrated Sensing and Communication (ISAC) is actually being standardized across 3GPP generations — as opposed to the aspirational 6G-vision literature. The paper traces the concrete release ladder: **Release-19** delivered service requirements and channel models; **Release-20** is specifying the sensing function architecture, reporting abstractions, and a **monostatic baseline targeting drone detection and tracking**; and the 6G framework aims at native sensing — passive object sensing, sensing-assisted communication, multiple sensing modes, and integrated multi-source data processing.

Technically, the networks exploit propagation delay, Doppler, angle and temporal variation of reflected signals while reusing existing spectrum and infrastructure. The paper's framing of how ISAC differs from conventional radar is useful for standards-watchers: the hard problems are not waveform design but *system* concerns — multi-application access to a shared sensing service, heterogeneous sensing entities, privacy, and service integration. It closes with implementation trade-offs and open challenges guiding Release-20-to-6G work.

## Summary (ZH)
Xingqin Lin（2026 年 8 月 12 日 arXiv，8 页）首次给出 ISAC（通感一体化）在 3GPP 各代标准中*实际*标准化路径的统一技术图谱——区别于愿景式的 6G 文献。具体的版本阶梯：**Release-19** 完成业务需求与信道模型；**Release-20** 正在规定感知功能架构、上报抽象，以及面向**无人机检测与跟踪的单站（monostatic）基线**；6G 框架则瞄准原生感知——无源目标感知、感知辅助通信、多感知模式与多源数据融合处理。

技术上，网络利用反射信号的传播时延、多普勒、角度与时间变化，同时复用既有频谱与基础设施。论文对 ISAC 与传统雷达差异的界定对标准观察者很有价值：难点不在波形设计，而在*系统*层面——多应用共享感知服务的接入、异构感知实体、隐私与业务集成。文末给出实现权衡与面向 Release-20 到 6G 的开放挑战。

## Key technical points (EN)
- Release ladder: Rel-19 = requirements + channel models; Rel-20 = sensing function architecture + reporting abstractions + monostatic drone-detection baseline; 6G = native sensing (passive objects, sensing-assisted comms, multi-mode, multi-source fusion).
- Sensing primitives: delay, Doppler, angle, temporal variation — reusing communication spectrum and infrastructure.
- ISAC ≠ radar: the standardization burden is multi-application access, heterogeneous sensing entities, privacy, and service integration.

## Key technical points (ZH)
- 版本阶梯：Rel-19 = 需求+信道模型；Rel-20 = 感知功能架构+上报抽象+单站无人机检测基线；6G = 原生感知（无源目标、感知辅助通信、多模式、多源融合）。
- 感知原语：时延、多普勒、角度、时间变化——复用通信频谱与基础设施。
- ISAC ≠ 雷达：标准化负担在多应用接入、异构感知实体、隐私与业务集成。

## Why it matters / what's new (EN)
Written by one of the most-read 3GPP standards interpreters, this is the KB's first entry pinning ISAC to the concrete Rel-19/Rel-20 work-item level (the existing ISAC-adjacent entries are vision papers or attack/defense studies). The Rel-20 monostatic drone-detection baseline is a useful anchor for reading the 6G sensing entries — and pairs directly with today's AmbSentry entry (sensing eavesdropping defense) and the O-RAN UAV-tracking testbed entry, which together show the research front running ahead of the standardized baseline.

## Why it matters / what's new (ZH)
作者是最具影响力的 3GPP 标准解读者之一；本条目是 KB 首次将 ISAC 钉到具体的 Rel-19/Rel-20 工作项层面（既有 ISAC 相关条目多为愿景论文或攻防研究）。Rel-20 单站无人机检测基线为阅读 6G 感知条目提供了锚点——并与今日的 AmbSentry 条目（感知窃听防御）及 O-RAN 无人机跟踪测试床条目直接呼应，共同显示研究前沿已跑在标准化基线之前。
