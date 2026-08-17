---
id: 2026-08-17_arxiv-trust-boundaries-satellite-flight-software
date_published: 2026-08-14
date_found: 2026-08-17
type: academic-paper
technology: satellite
title_en: "Trust Without Boundaries: An Architectural Analysis of Satellite Flight Software — how NASA cFS and its peers grant broad implicit authority a single compromised onboard component can abuse"
title_zh: "无界的信任：卫星飞行软件的架构安全分析——NASA cFS 及同类框架如何赋予被攻陷组件可滥用的广泛隐式权限"
url: "https://arxiv.org/abs/2608.14532"
source_quality: full
topics: [flight-software, cFS, onboard-security, trust-boundaries, component-isolation, NOS3, spacecraft-systems, F-Prime, KubOS, defense-in-depth]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)
Vanlyssel, Roman, Cook, Rahaman and Anwar (submitted 14 Aug 2026, cs.CR; submitted to an IEEE conference) analyze the *internal* security architecture of satellite flight software — not external attack surfaces or implementation bugs, but whether the architectures themselves enforce trust boundaries between onboard components. Their subject is NASA's Core Flight System (cFS), used across 40+ NASA missions, whose modular, component-based design creates implicit trust relationships among applications sharing software services. They examine cFS across five security-focused views: **execution** (all apps run as OS tasks in a shared address space with no process isolation, loaded without integrity/provenance checks and inheriting broad authority); **identity** (each app has an AppID internally, but that identity is not preserved across messaging and shared-service calls, defeating authentication, authorization and attribution); **communication** (the Software Bus routes by message identifier only, with no sender authentication — any app that can publish a syntactically valid message can influence subscribers); **observability** (logging is opt-in, limited, and subject to application-controlled filtering/suppression); and **persistence** (apps can freely register, modify and restore Critical Data Store blocks through Executive Services, so internal state persists unverified).

They validate these as concrete weaknesses using NASA's flight-representative NOS3 simulator, implementing a malicious onboard component that abuses legitimate architectural privileges in five proof-of-concept experiments: **Peer Lifecycle Override** (terminate unrelated mission apps), **Sender Identity Discontinuity** (impersonate trusted apps via arbitrary message IDs), **Unauthorized Command Propagation** (publish valid device commands outside its role), **Operator-View Equivalence** (perform unauthorized actions indistinguishable from legitimate behavior), and **Compromise Replay After Reset** (persist malicious influence across processor resets). All five primitives produced their predicted effects across the 18 operational components in the default NOS3 configuration. A cross-framework comparison shows these are not cFS-specific: F Prime (F′), KubOS, the NanoSat MO Framework and CORDET-C2 all share weak isolation and unauthenticated cross-service attribution — "componentization does not guarantee strong security isolation." The authors propose four integrated mechanisms: authenticated identity + policy enforcement preserved across messages/services/hardware; isolation with bounded, capability-based authority; tamper-resistant accountability (trusted audit points recording authenticated requestor/resource/action/outcome); and trusted recovery that verifies software and persistent state before resuming.

## Summary (ZH)
Vanlyssel、Roman、Cook、Rahaman 与 Anwar（2026 年 8 月 14 日提交，cs.CR；投稿某 IEEE 会议）分析卫星飞行软件的*内部*安全架构——不针对外部攻击面或实现缺陷，而考察架构本身是否在星载组件之间强制信任边界。研究对象是 NASA 的核心飞行系统（cFS），已用于 40 多个 NASA 任务，其模块化、基于组件的设计在共享软件服务的应用间制造了隐式信任关系。他们从五个安全视角审视 cFS：**执行**（所有应用作为 OS 任务运行于共享地址空间，无进程隔离，加载时不做完整性/来源检查并继承广泛权限）；**身份**（每个应用内部有 AppID，但该身份在消息与共享服务调用间不被保留，使认证、授权与追责失效）；**通信**（软件总线仅按消息标识路由、无发送方认证——任何能发布语法有效消息的应用即可影响订阅者）；**可观测性**（日志为可选、信息有限，且受应用自身过滤/抑制控制）；**持久化**（应用可经执行服务自由注册、修改、恢复关键数据存储块，内部状态在无验证下持久保留）。

他们用 NASA 具飞行代表性的 NOS3 仿真器将这些验证为具体弱点，实现一个滥用合法架构权限的恶意星载组件，完成五个概念验证实验：**对等生命周期越权**（终止无关任务应用）、**发送方身份不连续**（用任意消息 ID 冒充可信应用）、**未授权命令传播**（越权发布有效设备命令）、**运营者视图等价**（执行与合法行为无法区分的未授权操作）、**复位后攻陷重放**（跨处理器复位保持恶意影响）。在默认 NOS3 配置的 18 个运行组件上，五种原语均产生预期效果。跨框架对比表明这并非 cFS 独有：F Prime（F′）、KubOS、NanoSat MO 框架与 CORDET-C2 均存在弱隔离与跨服务未认证追责——"组件化并不保证强安全隔离"。作者提出四项集成机制：跨消息/服务/硬件保留的认证身份 + 策略强制；带受限、基于能力权限的隔离；抗篡改追责（记录认证请求者/资源/动作/结果的可信审计点）；以及在恢复正常运行前验证软件与持久状态的可信恢复。

## Key technical points (EN)
- **Scope:** internal trust boundaries between onboard components (not external attacks/impl bugs); subject = NASA cFS (40+ missions).
- **Five views:** execution (shared address space, no isolation), identity (AppID not preserved across services), communication (Software Bus routes by msg-ID, no sender auth), observability (opt-in, suppressible logging), persistence (unverified CDS register/modify/restore).
- **Validation:** NOS3 flight-representative simulator; malicious onboard component; 5 primitives — Peer Lifecycle Override, Sender Identity Discontinuity, Unauthorized Command Propagation, Operator-View Equivalence, Compromise Replay After Reset; all succeed across 18 default components.
- **Generality:** F Prime, KubOS, NanoSat MO Framework, CORDET-C2 share weak isolation + unauthenticated attribution — componentization ≠ isolation.
- **Mitigations:** (1) authenticated identity + policy enforcement, (2) isolation + bounded capability-based authority, (3) tamper-resistant audit points, (4) trusted recovery verifying state before resume.

## Key technical points (ZH)
- **范围：** 星载组件间的内部信任边界（非外部攻击/实现缺陷）；对象 = NASA cFS（40+ 任务）。
- **五视角：** 执行（共享地址空间、无隔离）、身份（AppID 跨服务不保留）、通信（软件总线按消息 ID 路由、无发送方认证）、可观测性（可选、可抑制的日志）、持久化（无验证的 CDS 注册/修改/恢复）。
- **验证：** NOS3 具飞行代表性仿真器；恶意星载组件；5 种原语——对等生命周期越权、发送方身份不连续、未授权命令传播、运营者视图等价、复位后攻陷重放；在 18 个默认组件上全部成功。
- **普遍性：** F Prime、KubOS、NanoSat MO 框架、CORDET-C2 同样存在弱隔离 + 未认证追责——组件化 ≠ 隔离。
- **缓解：** (1) 认证身份 + 策略强制、(2) 隔离 + 受限的基于能力权限、(3) 抗篡改审计点、(4) 恢复前验证状态的可信恢复。

## Why it matters / what's new (EN)
The KB's satellite-security thread has so far been about the RF/PNT layer — GNSS spoofing and integrity monitoring (2026-08-12 rigid-covert GNSS spoofing of UAV swarms, 2026-08-12 CORS-network GNSS integrity, 2026-07-28 VLM GNSS spoofing detection). This is the first entry about *onboard flight-software* security, a distinct layer: the threat is not a jammed or spoofed signal but a single compromised software component (a supply-chain-tainted app, a corrupted payload process) exploiting authority the architecture hands out by default. It matters because the mega-constellation era multiplies both the attack surface (thousands of near-identical buses running shared frameworks like cFS/F Prime) and the blast radius (a weakness reproducible across a whole fleet), and the paper's central finding — that the vulnerability is architectural and recurs across every major open flight-software framework, not a bug in any one of them — means it cannot be patched away, only re-architected. The mitigations (authenticated identity, capability-bounded authority, tamper-resistant audit, trusted recovery) are a concrete agenda for hardening the software substrate under the constellations the rest of this bin tracks. Scope caveat: the empirical validation is in the NOS3 simulator, not on real flight hardware, and the analysis is qualitative/architectural rather than a quantified exploit study.

## Why it matters / what's new (ZH)
知识库的卫星安全线索迄今集中在射频/PNT 层——GNSS 欺骗与完好性监测（2026-08-12 无人机集群隐蔽刚性 GNSS 欺骗、2026-08-12 CORS 网络 GNSS 完好性、2026-07-28 VLM GNSS 欺骗检测）。本条目首次涉及*星载飞行软件*安全这一不同层面：威胁不是被干扰或欺骗的信号，而是单个被攻陷的软件组件（供应链污染的应用、被破坏的载荷进程）滥用架构默认赋予的权限。其重要性在于：巨型星座时代同时放大了攻击面（数千个运行 cFS/F Prime 等共享框架的近乎同构平台）与波及半径（可在整支舰队复现的弱点），而论文的核心发现——该脆弱性是架构性的、在每个主流开源飞行软件框架中反复出现、而非某一框架的缺陷——意味着它无法被补丁消除，只能被重新架构。所提缓解（认证身份、能力受限权限、抗篡改审计、可信恢复）为加固本板块所跟踪星座之下的软件底座给出了具体议程。范围限制：实证验证在 NOS3 仿真器而非真实飞行硬件上，且分析为定性/架构性，非量化的漏洞利用研究。
