---
id: 2026-07-11_mediatek-ai-aqm-cpe-latency
date_published: 2026-06-03
date_found: 2026-07-11
type: industry-news
title_en: "MediaTek AI-powered AQM for CPE: edge AI QoS engine cuts cloud-gaming latency up to 10x for NVIDIA GeForce NOW"
title_zh: "联发科面向 CPE 的 AI 主动队列管理：边缘 AI QoS 引擎将云游戏时延最多降低 10 倍（NVIDIA GeForce NOW）"
url: "https://www.mediatek.com/press-room/mediatek-ai-powered-aqm-unveiled-for-cpe-boosting-cloud-gaming-experiences-to-improve-network-latency-for-nvidia-geforce-now"
source_quality: full
topics: [AQM, QoS, latency, CPE, cloud-gaming, AI, home-gateway]
topic_primary: ai-for-wifi
topics_secondary: [rtwt-latency]
novelty_score: 2
---

## Summary (EN)

MediaTek announced (June 3, 2026) what it calls the industry's first comprehensive AI QoS engine for Customer Premises Equipment: an AI-powered Active Queue Management (AQM) service that it claims delivers up to 10x lower network latency for NVIDIA GeForce NOW cloud-gaming members. The feature ships as a firmware upgrade to CPEs built on MediaTek's T930 platform — no operator core-network or RAN changes are required, and no changes are needed on the application or cloud side.

The mechanism couples standards-based AQM with an AI engine that continuously learns from real-time network conditions — radio quality, uplink contention, and household traffic load — and dynamically tunes congestion-avoidance and scheduling policies. Traffic classification is done with privacy-preserving flow metadata rather than Deep Packet Inspection (DPI): the CPE recognises latency-sensitive flows from their metadata signature and applies AQM-driven congestion control plus uplink-optimised scheduling to hold queueing delay and jitter low even when the home network is congested.

MediaTek positions the solution as ecosystem-agnostic: because it operates entirely at the CPE edge, any latency-sensitive application (cloud gaming, video calls, remote work) benefits without integration work. The GeForce NOW tie-in gives the launch a concrete, measurable consumer use case — faster input response, more consistent frame delivery — and continues the trend of gateway-side intelligence (cf. the RDK-B / prplOS open-source gateway ecosystem MediaTek also leads, 2026-07-06_mediatek-open-source-gateway-rdk-prplos).

## Summary (ZH)

联发科于 2026 年 6 月 3 日发布其称为业界首个面向 CPE（用户驻地设备）的完整 AI QoS 引擎：AI 驱动的主动队列管理（AQM）服务，宣称可为 NVIDIA GeForce NOW 云游戏用户带来最多 10 倍的网络时延降低。该功能以固件升级形式部署在基于联发科 T930 平台的 CPE 上——无需运营商核心网或 RAN 改动，应用侧与云端亦无需任何修改。

其机制将标准化 AQM 与 AI 引擎结合：持续学习实时网络状态（无线链路质量、上行竞争、家庭内流量负载），动态调整拥塞避免与调度策略。流量识别采用保护隐私的流元数据而非深度包检测（DPI）：CPE 通过元数据特征识别时延敏感流，并施加 AQM 拥塞控制与上行优化调度，即使家庭网络拥塞也能将排队时延与抖动保持在低位。

联发科强调该方案与生态无关：由于完全运行在 CPE 边缘，任何时延敏感应用（云游戏、视频通话、远程办公）均可受益而无需集成工作。与 GeForce NOW 的合作为发布提供了具体可测的消费级用例——更快的输入响应、更稳定的帧交付——并延续了网关侧智能化的趋势（参见 2026-07-06_mediatek-open-source-gateway-rdk-prplos）。

## Key technical points (EN)

- Industry-first claim: comprehensive AI QoS engine for CPE, shipping as firmware on MediaTek T930-based gateways.
- Up to 10x lower network latency claimed for NVIDIA GeForce NOW cloud gaming.
- AI engine learns from radio quality, uplink contention, and household traffic load; dynamically tunes congestion-avoidance and scheduling policies.
- Latency-sensitive flow recognition via privacy-preserving flow metadata — explicitly no DPI.
- Uplink-optimised scheduling plus AQM-driven congestion control at the CPE edge; ecosystem-agnostic (no app / operator / cloud changes).

## Key technical points (ZH)

- 业界首个面向 CPE 的完整 AI QoS 引擎，以固件形式部署于联发科 T930 平台网关。
- 宣称为 NVIDIA GeForce NOW 云游戏带来最多 10 倍网络时延降低。
- AI 引擎学习无线链路质量、上行竞争与家庭流量负载；动态调整拥塞避免与调度策略。
- 通过保护隐私的流元数据识别时延敏感流——明确不使用 DPI。
- CPE 边缘的上行优化调度 + AQM 拥塞控制；与生态无关（应用/运营商/云端零改动）。

## Why it matters / what's new (EN)

The KB's ai-for-wifi bin has tracked AI for radio-resource decisions (rate adaptation, channel selection, MAPC policies), but gateway-side AI queue management is a new sub-axis: the intelligence sits above the MAC yet below the application, at the CPE bottleneck where uplink contention and household load meet. The no-DPI flow-metadata classification is a notable design choice — it sidesteps both privacy objections and encrypted-traffic blindness that killed earlier DPI-based QoS products. The 10x latency claim, if it holds up in reviews, sets a competitive bar for Broadcom/Qualcomm gateway platforms.

## Why it matters / what's new (ZH)

KB 的 ai-for-wifi 板块此前跟踪的是无线资源决策类 AI（速率自适应、信道选择、MAPC 策略），而网关侧 AI 队列管理是一个新的子轴：智能位于 MAC 之上、应用之下，正处于上行竞争与家庭负载交汇的 CPE 瓶颈处。不用 DPI、以流元数据分类是值得注意的设计选择——既回避了隐私争议，也绕开了加密流量对 DPI 类 QoS 产品的致盲问题。若 10 倍时延降低的宣称经得起评测验证，将为博通/高通网关平台树立竞争标杆。
