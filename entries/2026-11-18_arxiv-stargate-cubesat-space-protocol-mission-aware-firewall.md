---
id: 2026-11-18_arxiv-stargate-cubesat-space-protocol-mission-aware-firewall
date_published: 2026-11-13
date_found: 2026-11-18
technology: satellite
type: academic-paper
title_en: "Stargate: Security Analysis and Mission-Aware Firewall for the CubeSat Space Protocol"
title_zh: "Stargate：立方星空间协议（CSP）的安全分析与任务感知防火墙"
url: "https://arxiv.org/abs/2611.18874"
source_quality: abstract-plus-intro
topics: [CubeSat Space Protocol, CSP, spacecraft cybersecurity, firewall, attack taxonomy, SPARTA]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Ramsey, Gonzalez-Cortes and Lopez-Morales (arXiv, 13 Nov 2026; affiliations listed as Universidad de Santiago de Chile and New Mexico State University) analyse the security model of the CubeSat Space Protocol (CSP), a lightweight routing and management protocol used in CubeSat flight software, commercial spacecraft platforms and mission control systems. They identify limits in its trust assumptions, coarse node-ID/port abstractions, privileged management services, application-layer command semantics and absence of mission-context awareness, and organise attacks into four classes: network identity abuse, management service abuse, application semantic abuse and mission context abuse.

On that basis they introduce Stargate, a modular mission-aware firewall enforcing CSP-specific policies (node and service authorisation, command-level filtering, mission-context constraints). It is evaluated on a virtual testbed based on a real CubeSat mission (the SUCHAI mission architecture is used as the representative network) and real flight software.

## Summary (ZH)

Ramsey、Gonzalez-Cortes 与 Lopez-Morales（arXiv，2026 年 11 月 13 日；所列单位为智利圣地亚哥大学与新墨西哥州立大学）分析了立方星空间协议（CSP）的安全模型。CSP 是一种轻量级路由与管理协议，用于立方星飞行软件、商用航天器平台及任务控制系统。论文指出其信任假设、粗粒度的节点 ID/端口抽象、特权管理服务、应用层指令语义以及缺乏任务上下文感知等方面的局限，并将攻击分为四类：网络身份滥用、管理服务滥用、应用语义滥用与任务上下文滥用。

在此基础上提出 Stargate：一种模块化的任务感知防火墙，执行 CSP 专用策略（节点与服务授权、指令级过滤、任务上下文约束）。评估在基于真实立方星任务的虚拟测试平台及真实飞行软件上进行（以 SUCHAI 任务架构作为代表网络）。

## Key technical points (EN)

- Per the abstract, Stargate blocks all 11 representative attacks across the four classes with 1.42 ms additional median round-trip latency.
- The paper states a SPARTA countermeasure (Secure Command Modes, CM0055) recommends constraining commands by source and location, which CSP itself cannot enforce.
- Source code and results are stated to be available in a public repository.

## Key technical points (ZH)

- 摘要称：Stargate 在四类攻击的 11 个代表性攻击场景中全部拦截，中位往返时延仅增加 1.42 ms。
- 论文指出 SPARTA 的“安全指令模式”对策（CM0055）建议按指令来源和地理位置约束指令，而 CSP 本身无法实现。
- 论文称源代码与实验结果已公开。

## Why it matters / what's new (EN)

Treats CSP's security model as unexplored and proposes protocol- and mission-aware policy enforcement (node/service authorisation, command filtering, mission-context constraints); evaluated on a virtual testbed based on SUCHAI, not in orbit.

## Why it matters / what's new (ZH)

将 CSP 的安全模型视为尚未被探索的领域，提出协议与任务感知的策略执行（节点/服务授权、指令过滤、任务上下文约束）；在基于 SUCHAI 的虚拟测试床上评估，并非在轨。

## Images

None.
