---
id: 2026-10-12_arxiv-satbleed-satellite-com-module-vulnerabilities
date_published: 2026-10-05
date_found: 2026-10-12
technology: satellite
type: academic-paper
title_en: "SatBleed: Security of Commoditized Communication Modules in Satellites"
title_zh: "SatBleed：卫星商用化通信模块的安全性研究"
url: "https://arxiv.org/abs/2610.06258"
source_quality: abstract_only
topics: [satellite-security, COTS, COM-subsystem, firmware]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 4
---

## Summary (EN)

Planta, Rederlechner, Strohmeier, Fischer and Abbasi (CISPA Helmholtz Center for Information Security; Cyber-Defence Campus, armasuisse Science + Technology; University of Hamburg) examine the security of commercial off-the-shelf (COTS) communication (COM) subsystems used on small satellites, submitted 2026-10-05 and accepted at IEEE S&P 2026. The paper constructs a threat taxonomy for attacks against satellite COM subsystems and evaluates representative COM modules from multiple vendors against it, reporting "severe vulnerabilities across firmware, protocols, and architectural designs." Using telemetry data analysis, the authors identify at least 28 vulnerable missions currently in orbit that they assess are susceptible to hostile takeover. The paper's own framing characterizes satellite COM subsystems as "an attractive and dangerously neglected attack surface", because the COM subsystem is continuously exposed by design and implicitly trusted as the entry point for command and control.

## Summary (ZH)

Planta、Rederlechner、Strohmeier、Fischer 与 Abbasi（CISPA 亥姆霍兹信息安全中心；瑞士 armasuisse 科学与技术部网络防御校区；汉堡大学）研究了小型卫星所使用的商用现货（COTS）通信（COM）子系统的安全性，论文于 2026 年 10 月 5 日提交，已被 IEEE S&P 2026 接收。论文构建了针对卫星 COM 子系统攻击的威胁分类体系，并据此评估了多家厂商的代表性 COM 模块，报告称"固件、协议与架构设计中均存在严重漏洞"。通过遥测数据分析，作者识别出至少 28 个在轨任务存在漏洞，评估认为这些任务可能遭到恶意劫持。论文自身的表述将卫星 COM 子系统定性为"一个具有吸引力、却被危险地忽视的攻击面"，因为 COM 子系统在设计上持续暴露，并被默认信任为指令与控制的入口。

## Key technical points (EN)

- **Threat taxonomy**: a structured classification of attacks targeting commoditized satellite COM subsystems.
- **Evaluation**: representative COM modules from multiple vendors tested against the taxonomy; vulnerabilities found span firmware, protocols, and architectural design.
- **Real-world exposure**: telemetry data analysis identifies at least 28 currently-orbiting missions assessed as vulnerable to hostile takeover.
- **Framing**: the paper's own characterization is that satellite COM subsystems are "an attractive and dangerously neglected attack surface."
- **Venue**: accepted at IEEE Symposium on Security and Privacy (S&P) 2026.

## Key technical points (ZH)

- **威胁分类体系**：针对卫星商用化 COM 子系统攻击的结构化分类。
- **评估对象**：针对该分类体系测试了多家厂商的代表性 COM 模块；发现的漏洞涵盖固件、协议与架构设计。
- **现实暴露面**：通过遥测数据分析，识别出至少 28 个当前在轨任务被评估为易遭恶意劫持。
- **论文定性**：论文自身将卫星 COM 子系统描述为"一个具有吸引力、却被危险地忽视的攻击面"。
- **发表场合**：已被 IEEE 安全与隐私研讨会（S&P）2026 接收。

## Why it matters / what's new (EN)

This KB's satellite-security thread (JANUS, HYDRA, MimicSat, the anti-localization-uplink paper — all 2026-09) has so far examined attacks on specific protocol layers (beam-hopping schedulers, link capacity, localization). SatBleed instead targets the commoditized hardware/firmware supply chain shared across many missions and vendors, and backs it with an open-source-telemetry inference of at least 28 vulnerable in-orbit missions.

## Why it matters / what's new (ZH)

本知识库此前的卫星安全主题条目（JANUS、HYDRA、MimicSat、以及反定位上行链路论文，均为 2026 年 9 月）主要考察针对特定协议层的攻击（波束跳变调度器、链路容量、定位机制）。SatBleed 则转向多个任务与厂商共用的商用化硬件/固件供应链，并基于开源遥测数据推断出至少 28 个在轨易受攻击任务。

## Images

None.
