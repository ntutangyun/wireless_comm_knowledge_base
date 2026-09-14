---
id: 2026-09-14_arxiv-open-spectrum-oran-multiservice-coexistence
date_published: 2026-09-10
date_found: 2026-09-14
type: academic-paper
technology: cellular
title_en: "From Open RAN to Open Spectrum: A Programmable, Intelligent Architecture for Multi-Service Spectrum Coexistence"
title_zh: "从开放 RAN 到开放频谱：面向多业务频谱共存的可编程智能架构"
url: "https://arxiv.org/abs/2609.11843"
source_quality: full
topics: [O-RAN, spectrum-sharing, CBRS, ISAC, digital-twin, RIC]
topic_primary: open-ran
topics_secondary: [cellular-spectrum]
novelty_score: 3
---

## Summary (EN)

Researchers at Northeastern University's Institute for Intelligent Networked Systems (Michele Polese, Minh Dat Nguyen, Paolo Testolina, Tommaso Melodia — the group behind BostonTwin and several O-RAN dApp papers already in this KB) propose "Open Spectrum," an architecture that extends O-RAN's open, programmable RAN principles beyond cellular networking to any spectrum-using service: sensing, radionavigation, radiolocation, and cellular systems sharing one pool. The core observation is that existing spectrum-sharing frameworks like CBRS optimize only the frequency dimension — they cannot help a sparse service (e.g., a weather radar) that lacks the infrastructure to deploy its own dense network, nor can they coordinate joint use of radio hardware across service types. Open Spectrum instead pools spectrum, services, and infrastructure together, orchestrated by a "Spectrum Intelligent Controller" (SIC) that extends the O-RAN RIC's closed-loop control to non-cellular control/data types (radar pulse schedules, navigation beacon timing, sensing duty cycles). Third parties plug modular policy functions ("Spectrum Applications," sApps) into the SIC, and a Digital-Twin-based RFI model (built on the authors' own BostonTwin urban twin + NVIDIA Sionna ray tracing) would replace today's conservative static exclusion zones with site-specific propagation-aware allocation.

System-level simulations over a 2.3 km² BostonTwin tile (400 MHz shared pool centered at 3.5 GHz, four co-channel services with parameters sourced from FCC/NTIA/ITU regulations and 3GPP TR 38.901 antenna patterns) quantify the case for sharing: sparse services (sensing, radionavigation, radiolocation) typically use only 0.1-10% of available time-frequency resources, leaving enormous idle capacity that a duty-cycle-aware SIC can reclaim for other tenants without violating cellular QoS. When a sparse service adopts the host cellular infrastructure's RF parameters (power, gain, height) rather than keeping its own higher-power native settings, median downlink SINR improves by up to 12 dB, because eliminating the power/height mismatch removes most of the added interference. The paper is explicitly a foundational architecture article, not an end-to-end system validation — the SIC, sApp ecosystem, and real-time DT feedback loop remain future work — but the authors ground every mechanism (priority tables, conflict resolution, scheduled vs. best-effort pool modes) in concrete, standards-referenced service parameters rather than abstract theory.

## Summary (ZH)

美国东北大学智能网络系统研究所（Michele Polese、Minh Dat Nguyen、Paolo Testolina、Tommaso Melodia——该团队此前的 BostonTwin 数字孪生及多篇 O-RAN dApp 论文已被本知识库收录）提出"开放频谱"（Open Spectrum）架构，将 O-RAN 的开放、可编程 RAN 理念从蜂窝网络扩展到任意使用频谱的业务：感知、无线电导航、无线电定位与蜂窝系统共享同一资源池。核心洞察是：现有的频谱共享框架（如 CBRS）只在频率这一单一维度上做优化——它们无法帮助一个缺乏自建密集基础设施能力的稀疏业务（例如气象雷达），也无法协调不同业务类型之间对无线电硬件的联合使用。开放频谱转而将频谱、业务与基础设施汇聚到同一资源池中，由"频谱智能控制器"（SIC）统一编排；SIC 将 O-RAN RIC 的闭环控制扩展到非蜂窝的控制/数据类型（雷达脉冲调度、导航信标定时、感知占空比）。第三方可将模块化策略功能（"频谱应用"，sApps）接入 SIC，而基于数字孪生的射频干扰（RFI）建模（构建在作者自有的 BostonTwin 城市孪生体与 NVIDIA Sionna 光线追踪之上）将取代当前保守的静态排除区，实现基于地点传播特性的精细化分配。

在 2.3 平方公里的 BostonTwin 城区网格（以 3.5 GHz 为中心的 400 MHz 共享资源池，四种同信道业务的参数取自 FCC/NTIA/ITU 监管规定与 3GPP TR 38.901 天线方向图规范）上进行的系统级仿真量化了共享带来的收益：稀疏业务（感知、无线电导航、无线电定位）通常仅使用 0.1%-10% 的可用时频资源，留下大量闲置容量，具备占空比感知能力的 SIC 可将其回收给其他租户而不违反蜂窝服务质量要求。当稀疏业务采用主机蜂窝基础设施的射频参数（功率、增益、高度）而非保留自身原有的更高功率设置时，下行 SINR 中位数最高提升 12 dB，原因是消除功率/高度不匹配后大幅降低了额外干扰。该论文明确定位为基础性架构文章而非端到端系统验证——SIC、sApp 生态与实时数字孪生反馈闭环仍是未来工作——但作者将每个机制（优先级表、冲突消解、预约式与尽力而为式资源池模式）都锚定在具体的、参照标准的业务参数上，而非停留在抽象理论层面。

## Key technical points (EN)

- Architecture: Spectrum Intelligent Controller (SIC) extends the O-RAN RIC's closed-loop control (millisecond conflict detection to hour-scale pool allocation) to spectrum services with no O-RAN representation today (radar, navigation, sensing); multiple SICs coordinate peer-to-peer across geographic boundary regions.
- Shared infrastructure pool extends the O-RAN O-Cloud concept to three resource categories: programmable compute (RAN/sensing signal processing), reconfigurable radio hardware (SDR platforms dynamically reassigned between cellular and radar waveforms), and distributed RF sensors for regulatory-compliance monitoring.
- Two pool modes: scheduled (advance reservation for predictable services like radar dwell schedules) and best-effort (dynamic allocation to delay-tolerant services like periodic IoT sensing).
- Conflict resolution: an unordered set of resolution strategies — temporal separation (duty-cycle adjustment), spatial separation (beam steering/power control), frequency reassignment, and priority-based preemption — all evaluated against the DT before enforcement to avoid trial-and-error reconfiguration.
- Evaluation: BostonTwin urban 3D model + Sionna ray tracing, 3GPP TR 38.901 antenna patterns, 50 Monte Carlo iterations; per-service parameters (gain, Tx power, duty cycle, bandwidth, frequency range) sourced from FCC/NTIA/ITU regulations.
- Headline result: full-RF-chain sharing (sparse service adopts cellular RF parameters) improves median downlink SINR by up to 12 dB, because it removes the power/height mismatch that otherwise dominates added interference at cellular-grade infrastructure density.
- Duty-cycle finding: sensing operates near δ≈0.1 (400 MHz), radionavigation near δ≈0.01 (210 MHz), radiolocation near δ≈0.01 (400 MHz) — all far below the cellular regime of δ≈0.9-1.0, meaning sparse services leave 90-99% of their allotted time-frequency resources idle.
- Explicit limitation: this is architecture + system-level simulation, not an end-to-end SIC/sApp/DT-feedback-loop prototype; that full-stack validation, security, and techno-economic analysis are named as future work.

## Key technical points (ZH)

- 架构：频谱智能控制器（SIC）将 O-RAN RIC 的闭环控制（从毫秒级冲突检测到小时级资源池分配）扩展到当前在 O-RAN 中没有对应表示的频谱业务（雷达、导航、感知）；多个 SIC 以对等方式跨地理边界区域协调。
- 共享基础设施池将 O-RAN O-Cloud 概念扩展为三类资源：可编程计算（RAN/感知信号处理）、可重构无线电硬件（SDR 平台可在蜂窝与雷达波形之间动态重新分配）、以及用于合规监测的分布式射频传感器。
- 资源池两种模式：预约模式（为雷达驻留调度等可预测业务提前预留）与尽力而为模式（为周期性物联网感知等可容忍延迟的业务动态分配）。
- 冲突消解：一组无固定顺序的应对策略——时间隔离（占空比调整）、空间隔离（波束赋形/功率控制）、频率重分配、以及基于优先级的抢占——所有策略在执行前均经数字孪生评估，避免试错式重配置。
- 评估方法：BostonTwin 城区三维模型 + Sionna 光线追踪，3GPP TR 38.901 天线方向图，50 次蒙特卡洛迭代；各业务参数（增益、发射功率、占空比、带宽、频率范围）取自 FCC/NTIA/ITU 监管规定。
- 核心结果：全射频链路共享（稀疏业务采用蜂窝射频参数）使下行 SINR 中位数最高提升 12 dB，原因是消除了在蜂窝级基础设施密度下主导额外干扰的功率/高度不匹配问题。
- 占空比发现：感知业务占空比约 0.1（400 MHz），无线电导航约 0.01（210 MHz），无线电定位约 0.01（400 MHz）——均远低于蜂窝业务 0.9-1.0 的占空比，意味着稀疏业务有 90%-99% 的分配时频资源处于闲置状态。
- 明确的局限性：本文属于架构提出与系统级仿真，而非端到端的 SIC/sApp/数字孪生反馈闭环原型；完整的全栈验证、安全性与技术经济分析被列为未来工作。

## Why it matters / what's new (EN)

This KB has tracked Northeastern University's Institute for Intelligent Networked Systems O-RAN dApp lineage extensively (E3Controller 2609.03162, the measured-interface-requirements paper 2609.07805, NOSTRAdAMUS 2609.09324) and its BostonTwin/upper-midband spectrum-sharing lineage (the 7-24 GHz upper-midband sharing paper cited as reference [8] here). The generalization from "sharing a RAN among cellular operators" to "sharing among heterogeneous service types" is not itself new to this KB — the same authors' 2026-08-15 entry (arxiv-coordinated-federal-spectrum-coexistence-oran, same 3.5 GHz pool, same four services, Non-RT RIC rApp) already did that. What Open Spectrum adds is extending that generalization to pool *infrastructure* alongside spectrum. The paper's own related-work framing is also narrower than "crowded RIS/CBRS coexistence literature": it describes most spectrum-sharing research as addressing coexistence "between two system types" (sensing-communication pairs, passive-sensing interference, O-RAN/CBRS work) — with this KB's own 08-15 entry already an exception to that pairwise pattern. It also complements the KB's upper-midband and 6 GHz spectrum-contest coverage (e.g., 2026-09-07's MasOrange/Ericsson 6 GHz massive-MIMO trial, this same day's GSMA upper-6-GHz advocacy entry) by proposing a technical mechanism — rather than a pure regulatory ask — for multiple incompatible spectrum uses to coexist on shared hardware.

## Why it matters / what's new (ZH)

本知识库此前已大量收录美国东北大学智能网络系统研究所的 O-RAN dApp 系列成果（E3Controller 2609.03162、测量接口需求论文 2609.07805、NOSTRAdAMUS 2609.09324）及其 BostonTwin/中高频段频谱共享谱系（本文引用文献 [8] 即为该团队此前的 7-24 GHz 中高频段共享论文）。从"运营商之间共享 RAN"推广到"跨异构业务类型共享"这一思路本身对本知识库并不新鲜——同一作者团队 2026-08-15 的条目（arxiv-coordinated-federal-spectrum-coexistence-oran，同样的 3.5 GHz 资源池、同样的四种业务、同样的 Non-RT RIC rApp）已经做到了这一点。开放频谱的新增之处在于将这一推广进一步扩展到将*基础设施*与频谱一并纳入共享池。该论文自身的相关工作论述也比"拥挤的 RIS/CBRS 共存文献"更为克制：其将现有多数频谱共享研究描述为仅处理"两类系统之间"的共存（感知-通信两两组合、被动感知干扰、O-RAN/CBRS 相关工作）——而本知识库自己的 08-15 条目本身已是这种两两模式的例外。该文也与知识库中已有的中高频段及 6 GHz 频谱争夺报道形成互补（如 2026-09-07 的 MasOrange/爱立信 6 GHz 大规模 MIMO 试验条目，以及本日收录的 GSMA 上 6 GHz 频段倡议条目）——相比单纯的监管诉求，本文提出的是一种让多种互不兼容的频谱使用方式在共享硬件上共存的技术机制。

## Images

None.
