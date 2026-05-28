---
id: 2026-05-22_arxiv-d2c-vs-ntn-comparative-analysis
date_published: 2026-05-07
date_found: 2026-05-22
type: academic-paper
title_en: "Comparative Analysis of Direct-to-Cell (D2C) and 3GPP Non-Terrestrial Networks (NTN) for Global Connectivity"
title_zh: "Direct-to-Cell (D2C) 与 3GPP 非地面网络 (NTN) 全球连接对比分析"
url: "https://arxiv.org/abs/2605.05843"
source_quality: full
topics: [LEO, NTN, D2C, satellite, 6G, Starlink]
technology: cellular
topic_primary: ntn
topics_secondary: [6g-vision, 5g-nr]
novelty_score: 4
---

## Summary (EN)
This paper presents the first comprehensive technical comparison of two competing paradigms for satellite-enabled mobile connectivity: Direct-to-Cell (D2C), pioneered by SpaceX Starlink and AST SpaceMobile, versus 3GPP-standardized Non-Terrestrial Networks (NTN) across Releases 17–19. D2C leverages existing terrestrial spectrum and unmodified consumer handsets to provide emergency connectivity as a market-driven overlay, while 3GPP NTN offers a systematic satellite-native framework designed for long-term scalability and deep 5G/6G integration.

The comparison covers standardization trajectories, network architectures, physical-layer innovations, security postures, and operational trade-offs. A key contribution is the analysis of a hybrid "tri-link" architecture for autonomous driving: terrestrial 5G for primary broadband, NTN for high-throughput backup, and D2C for emergency fallback — combining the strengths of both paradigms. The analysis concludes that while D2C enables rapid market entry through legacy-device compatibility, NTN provides superior performance, security, and scalability, positioning it as the foundational framework for 6G satellite-terrestrial convergence. A hybrid model leveraging both is identified as the most practical path toward truly global connectivity.

## Summary (ZH)
本文首次对两种卫星移动连接竞争范式进行综合技术对比：由SpaceX Starlink和AST SpaceMobile开创的Direct-to-Cell (D2C)，与3GPP标准化（Release 17-19）的非地面网络（NTN）。D2C利用现有地面频谱和未修改的消费级手机以市场驱动的叠加方式提供应急连接，而3GPP NTN提供系统的卫星原生框架，旨在实现长期可扩展性和深度5G/6G集成。

对比涵盖标准化轨迹、网络架构、物理层创新、安全态势和运营权衡。关键贡献是分析了自动驾驶的混合"三链路"架构：地面5G作为主要宽带、NTN作为高吞吐备份、D2C作为紧急回退——结合两种范式的优势。分析结论认为，虽然D2C通过兼容现有设备实现快速市场进入，但NTN提供更优的性能、安全性和可扩展性，使其成为6G星地融合的基础框架。利用两者优势的混合模式被确定为通向真正全球连接的最实用路径。

## Key technical points (EN)
- **Two paradigms compared**: D2C (Starlink Direct-to-Cell, AST SpaceMobile — unmodified handsets, terrestrial spectrum) vs 3GPP NTN (Releases 17–19, satellite-native, 5G/6G integrated)
- **PHY innovations for NTN**: Doppler pre-compensation, timing-advance adjustment for large propagation delays, HARQ protocol adaptation
- **D2C limitations**: Spectrum sharing constraints with terrestrial operators, limited capacity per beam, no handover support, security reliant on terrestrial core
- **NTN advantages**: Superior performance/scalability/security; standardized QoS, handover, and authentication frameworks
- **Hybrid tri-link architecture proposed**: Terrestrial 5G (primary) + NTN broadband (backup) + D2C emergency fallback — targeting autonomous driving safety-critical redundancy
- **6G convergence**: NTN positioned as foundational for 6G integrated satellite-terrestrial architecture

## Key technical points (ZH)
- **两种范式对比**：D2C（Starlink Direct-to-Cell、AST SpaceMobile——未修改手机、地面频谱）vs 3GPP NTN（Release 17-19、卫星原生、5G/6G集成）
- **NTN物理层创新**：多普勒预补偿、大传播延迟的定时提前调整、HARQ协议适配
- **D2C局限**：与地面运营商的频谱共享约束、每波束容量有限、无切换支持、安全依赖地面核心网
- **NTN优势**：更优的性能/可扩展性/安全性；标准化的QoS、切换和认证框架
- **混合三链路架构**：地面5G（主链路）+ NTN宽带（备份）+ D2C紧急回退——针对自动驾驶安全关键冗余
- **6G融合**：NTN定位为6G星地一体化架构的基础

## Why it matters / what's new (EN)
This is the first paper to systematically compare D2C and NTN across the full stack rather than treating them as separate domains. The tri-link architecture for autonomous driving is a concrete design proposal with safety motivation, not just a survey. With Starlink D2C now in commercial service (T-Mobile partnership, 2025) and 3GPP Release 19 NTN specifications advancing, this comparison is timely and practically relevant. The analysis that D2C is an interim market solution while NTN is the long-term architectural framework provides a useful strategic lens for the satellite communications industry.

## Why it matters / what's new (ZH)
这是首篇系统性跨全栈对比D2C和NTN的论文，而非将其视为独立领域。针对自动驾驶的三链路架构是一个具有安全动机的具体设计提案，而非泛泛的综述。随着Starlink D2C已投入商业服务（T-Mobile合作，2025年）且3GPP Release 19 NTN规范持续推进，这一对比具有及时性和实际意义。D2C是中期市场解决方案而NTN是长期架构框架的分析，为卫星通信行业提供了有用的战略视角。
