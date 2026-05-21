---
id: 2026-05-21_chinamobile-5g-sa-network-slicing
date_published: 2026-05-13
date_found: 2026-05-21
type: industry-news
title_en: "China Mobile, OPPO, and Ericsson Complete First Consumer UE-Level and Application-Level 5G SA Network Slicing Field Trial"
title_zh: "中国移动、OPPO 与爱立信完成业界首个面向消费者的 5G SA 用户级与应用级切片现网验证"
url: "https://www.ericsson.com/en/press-releases/2/2026/china-mobile-oppo-complete-5g-sa-network-slicing"
source_quality: full
topics: [5G-SA, network-slicing, URSP, AI, China-Mobile, OPPO, QoS]
topic_primary: network-slicing
topics_secondary: [5g-nr, cellular-ai]
technology: cellular
novelty_score: 3
---

## Summary (EN)
Ericsson, China Mobile, and OPPO completed China Mobile's first consumer-oriented UE-level slicing and application-level slicing test on a live 5G SA commercial network in Dezhou, Shandong province. The trial validated network slicing combined with AI-powered service recognition at the UE level to deliver differentiated service experiences — a breakthrough in 5G experience assurance.

UE-level slicing extends deployment scenarios by targeting specific users and terminals. Application-level slicing, enabled by URSP (User Equipment Route Selection Policy), drives end-to-end slice routing per application. The test achieved a seamless closed-loop "stutter detection → slice switching" experience: when users experienced buffering on short videos or livestreaming, the OPPO device automatically detected the issue, notified the user, and switched traffic to a dedicated slice. Combined with radio resource partition, network resources were prioritized for the target application.

Under high-load congestion: uplink livestreaming and short-video services maintained stable speeds with >2× improvement compared to standard performance. Gaming latency was reduced by ≥30%. The trial also tested AI glasses with device-level slicing for AI object recognition applications. Commercial deployment requires further ecosystem maturity and broader terminal support.

## Summary (ZH)
爱立信、中国移动与 OPPO 在山东德州 5G SA 现网完成了中国移动首个面向消费者的用户级切片和应用级切片测试。该试验验证了网络切片结合终端侧 AI 驱动业务识别实现差异化服务体验——5G 体验保障领域的突破性进展。

用户级切片通过针对特定用户和终端扩展了部署场景。应用级切片通过 URSP（用户设备路由选择策略）实现每应用端到端切片路由。测试实现了"卡顿检测→切片切换"的无缝闭环体验：当用户观看短视频或上行直播出现缓冲时，OPPO 设备自动检测问题、通知用户，并将流量切换至专用切片。结合无线资源分区，网络资源被优先分配给目标应用。

在高负载拥塞场景下：上行直播和短视频业务保持稳定速率，相对标准性能实现 2 倍以上提升。游戏时延降低 ≥30%。试验还测试了 AI 眼镜以设备级切片支持 AI 物体识别应用。商用部署需要进一步生态成熟和更广泛的商用终端支持。

## Key technical points (EN)
- **UE-level slicing**: Per-user/per-terminal slice allocation on live 5G SA — extends slicing beyond per-application to per-subscriber
- **Application-level slicing via URSP**: Per-application slice routing; OPPO device runs AI service recognition to detect app type and trigger slice selection
- **Closed-loop "stutter detection → slice switching"**: Device detects QoE degradation, notifies user, switches to dedicated slice — fully automated
- **High-load results**: >2× throughput improvement for livestreaming/short-video; ≥30% latency reduction for gaming
- **Multi-vendor**: Ericsson (RAN/core) + China Mobile (operator) + OPPO (UE with AI recognition)
- **AI glasses use case**: Device-level slicing for AI object recognition on smart glasses

## Key technical points (ZH)
- **用户级切片**：现网 5G SA 上每用户/每终端切片分配——将切片从按应用扩展到按订阅用户
- **URSP 应用级切片**：每应用切片路由；OPPO 设备运行 AI 业务识别检测应用类型并触发切片选择
- **"卡顿检测→切片切换"闭环**：设备检测体验劣化、通知用户、切换至专用切片——全程自动化
- **高负载结果**：直播/短视频吞吐提升 >2 倍；游戏时延降低 ≥30%
- **多厂商协同**：爱立信（RAN/核心网）+ 中国移动（运营商）+ OPPO（带 AI 识别的终端）
- **AI 眼镜用例**：智能眼镜 AI 物体识别的设备级切片

## Why it matters / what's new (EN)
First consumer-facing network slicing field trial that closes the loop from UE-level AI service detection to automated slice switching — prior slicing trials were typically network-side only (RAN/Core slice configuration) without UE participation in the slice-selection decision. The URSP-based application-level slicing with AI-powered service recognition on the device (OPPO) is the key architectural novelty: the UE becomes an active participant in slice selection, not just a passive recipient of network-configured rules. This aligns with 3GPP Rel-18 enhancements to URSP and points toward a future where devices dynamically negotiate slice requirements based on real-time application needs.
