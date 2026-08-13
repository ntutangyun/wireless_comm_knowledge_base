---
id: 2026-08-13_arxiv-ambsentry-isac-eavesdrop-defense
date_published: 2026-08-12
date_found: 2026-08-13
type: academic-paper
technology: cellular
title_en: "AmbSentry: Mitigating Sensing Eavesdropping in ISAC Systems by Harnessing Ambient IoT Devices"
title_zh: "AmbSentry：利用环境物联网设备抵御 ISAC 系统中的感知窃听"
url: "https://arxiv.org/abs/2608.11799"
source_quality: full
topics: [ISAC, security, ambient-IoT, beamforming, 6G]
topic_primary: cellular-security
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)
AmbSentry (Zhang, Bai, Jantti, Han, Masouros; arXiv 12 Aug 2026, cs.CR, routed from the shared cs.CR security sweep) addresses a threat class unique to Integrated Sensing and Communication: a passive eavesdropper can process the ISAC downlink's reflections to extract sensitive target information (range, velocity of people/objects in the sensed scene) — an attack that data encryption cannot touch, because the leak happens at the physical channel, not the payload.

The defense repurposes **ambient IoT (AIoT) devices — passive backscatter tags already envisioned for 3GPP ambient-IoT service — as cooperative jammers and "ghost targets."** By modulating their reflections, the tags inject structured deception into the sensing environment: the eavesdropper's estimator sees phantom ranges/velocities, while the legitimate sensing receiver — which knows the tags' modulation — cancels them. The system jointly optimizes base-station transmit beamforming with the AIoT reflection modulations (Dinkelbach transform + block coordinate descent) subject to preserving legitimate communication and sensing performance.

Results: the legitimate receiver keeps a **14 dB SNR advantage in detection probability** and roughly **100× lower estimation error** than the eavesdropper.

## Summary (ZH)
AmbSentry（Zhang、Bai、Jantti、Han、Masouros；2026 年 8 月 12 日 arXiv，cs.CR，经共享 cs.CR 安全扫描路由）针对通感一体化特有的威胁：被动窃听者可处理 ISAC 下行反射信号，提取被感知场景中的敏感目标信息（人员/物体的距离、速度）——数据加密对此无能为力，因为泄露发生在物理信道而非载荷。

其防御将 **环境物联网（AIoT）设备——3GPP ambient-IoT 业务设想中的无源背散射标签——用作协作干扰器与"幽灵目标"**。标签通过调制自身反射向感知环境注入结构化欺骗：窃听者的估计器看到虚假距离/速度，而知晓标签调制规律的合法感知接收机可将其消除。系统联合优化基站发射波束赋形与 AIoT 反射调制（Dinkelbach 变换 + 块坐标下降），并约束合法通信与感知性能不受损。

结果：合法接收机在检测概率上保持 **14 dB 的 SNR 优势**，估计误差比窃听者低约 **100 倍**。

## Key technical points (EN)
- Threat: passive sensing eavesdropping on ISAC reflections (range/velocity extraction) — unaddressable by encryption; attacks the channel, not the data.
- Defense: AIoT backscatter tags as cooperative jammers + ghost targets; legitimate receiver cancels the known modulations, eavesdropper cannot.
- Optimization: joint BS transmit beamforming + AIoT reflection modulation; Dinkelbach transformation + block coordinate descent under legitimate-performance constraints.
- Results: 14 dB legitimate SNR advantage in detection probability; ~100× lower estimation error vs eavesdropper.

## Key technical points (ZH)
- 威胁：对 ISAC 反射的被动感知窃听（提取距离/速度）——加密无法防御；攻击的是信道而非数据。
- 防御：AIoT 背散射标签充当协作干扰器与幽灵目标；合法接收机消除已知调制，窃听者不能。
- 优化：基站波束赋形与 AIoT 反射调制联合优化；Dinkelbach 变换 + 块坐标下降，约束合法性能。
- 结果：合法方检测概率 SNR 优势 14 dB；估计误差比窃听者低约 100 倍。

## Why it matters / what's new (EN)
Sensing-privacy defenses in the KB so far are Wi-Fi-side (CSI obfuscation, solicited-response protection). AmbSentry is the first cellular-side entry to *design* a sensing-eavesdropping defense, and its enabler is notable: it gives the 3GPP ambient-IoT device class (tracked in the KB as an emerging Rel-19/20 service) a second job as a physical-layer security asset. With Rel-20 standardizing a monostatic sensing baseline (see today's ISAC-evolution entry), the sensing-privacy question AmbSentry addresses is about to become a standards question too.

## Why it matters / what's new (ZH)
KB 中既有的感知隐私防御均在 Wi-Fi 侧（CSI 混淆、按请求响应保护）。AmbSentry 是蜂窝侧首个*设计*感知窃听防御的条目，其使能手段值得注意：让 3GPP ambient-IoT 设备类别（KB 已跟踪的 Rel-19/20 新兴业务）兼任物理层安全资产。随着 Rel-20 标准化单站感知基线（见今日 ISAC 演进条目），AmbSentry 所处理的感知隐私问题也即将成为标准问题。
