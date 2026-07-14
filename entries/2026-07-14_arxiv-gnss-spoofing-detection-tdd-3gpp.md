---
id: 2026-07-14_arxiv-gnss-spoofing-detection-tdd-3gpp
date_published: 2026-07-13
date_found: 2026-07-14
type: academic-paper
title_en: "GNSS Spoofing Detection in TDD Networks: A 3GPP Standards-Based Security Framework"
title_zh: "TDD 网络中的 GNSS 欺骗检测：基于 3GPP 标准的安全框架"
url: "https://arxiv.org/abs/2607.11398"
technology: cellular
source_quality: abstract_only
topics: [5G, TDD, GNSS, timing-security, synchronization, PTP]
topic_primary: cellular-security
topics_secondary: [5g-nr, open-ran]
novelty_score: 3
---

## Summary (EN)
TDD mobile networks depend on tight time synchronization — 3GPP mandates ±1.5 µs alignment across base stations — and that timing is almost universally sourced from GNSS-disciplined grandmaster clocks. This paper (Sharma, Owens, Kiernan) targets a specific, under-addressed threat: a GNSS **spoofing** attack on the grandmaster silently corrupts timing for every downstream base station it feeds, and existing 3GPP management frameworks have no standardized way to detect it. The contribution is a detection framework that lives entirely inside current 3GPP management structures — no new interfaces, generation-agnostic (5G/6G).

The mechanism combines three pieces: (1) **GNSS timing alarms and performance counters** defined against the existing management specs TS 28.111 (fault supervision) and TS 28.552 (performance measurements); (2) **topology-aware correlation** that groups base-station units by the grandmaster clock serving them, so a timing anomaly common to a whole cluster is classified differently from an isolated per-unit fault; and (3) **security-event bridging** that connects ordinary fault management to the security incident-handling procedures in TR 33.894. The topology grouping is what lets the framework separate a spoofing attack from benign causes — signal loss, equipment failure, or maintenance — that would otherwise trip the same timing alarms.

Validation is by Monte Carlo simulation across scenarios that distinguish spoofing from those benign causes. The reported operating point is a **detection probability above 95% for timing-drift rates above 0.5 ns/s**, with a **false-positive rate below 1%** under a well-provisioned PTP network.

## Summary (ZH)
TDD 移动网络依赖严格的时间同步——3GPP 规定基站间对齐须达 ±1.5 µs——而该时序几乎普遍来自受 GNSS 驯服的 grandmaster 主时钟。本文（Sharma、Owens、Kiernan）针对一个具体且被忽视的威胁：对 grandmaster 的 GNSS **欺骗**攻击会悄然破坏其所馈送的每个下游基站的时序，而现有 3GPP 管理框架没有标准化的检测手段。其贡献是一个完全运行于现有 3GPP 管理结构之内的检测框架——无需新接口、且与代际无关（5G/6G 通用）。

该机制结合三部分：(1) 依据现有管理规范 TS 28.111（故障监督）与 TS 28.552（性能测量）定义的 **GNSS 时序告警与性能计数器**；(2) **拓扑感知关联**，按服务它们的 grandmaster 时钟对基站单元分组，使得整簇共有的时序异常与孤立的单元故障被区别分类；(3) **安全事件桥接**，将普通故障管理连接到 TR 33.894 中的安全事件处置流程。拓扑分组正是使该框架能把欺骗攻击与信号丢失、设备故障或维护等良性原因区分开来的关键——否则这些原因会触发相同的时序告警。

验证通过蒙特卡洛仿真，覆盖区分欺骗与上述良性原因的多种场景。所报告的工作点为：**当时序漂移率高于 0.5 ns/s 时检测概率超过 95%**，且在良好配置的 PTP 网络下**误报率低于 1%**。

## Key technical points (EN)
- Threat: GNSS spoofing of the grandmaster clock corrupts ±1.5 µs TDD sync across all fed base stations; no standardized 3GPP detection exists.
- Uses existing management specs TS 28.111 + TS 28.552 for GNSS timing alarms/counters — no new interfaces, generation-agnostic.
- Topology-aware correlation groups units by serving grandmaster to separate spoofing from signal loss / equipment failure / maintenance.
- Bridges fault management to TR 33.894 security incident handling (SECHAND).
- Monte Carlo validation: >95% detection at drift >0.5 ns/s; <1% false positives on a well-provisioned PTP network.

## Key technical points (ZH)
- 威胁：对 grandmaster 时钟的 GNSS 欺骗破坏所有下游基站的 ±1.5 µs TDD 同步；无标准化 3GPP 检测。
- 利用现有管理规范 TS 28.111 + TS 28.552 实现 GNSS 时序告警/计数器——无需新接口、代际无关。
- 拓扑感知关联按服务 grandmaster 分组，以区分欺骗与信号丢失/设备故障/维护。
- 将故障管理桥接至 TR 33.894 安全事件处置（SECHAND）。
- 蒙特卡洛验证：漂移 >0.5 ns/s 时检测率 >95%；良好配置 PTP 网络下误报 <1%。

## Why it matters / what's new (EN)
Most cellular-security KB entries focus on RAN/core intrusion or privacy; timing-plane attacks on the PTP/GNSS synchronization backbone are a distinct and operationally critical surface, especially for TDD where sync loss directly causes cross-cell interference. The novelty is not a new detector algorithm but a **standards-native** one — reusing TS 28.111/28.552 counters and TR 33.894 incident handling so it can be deployed without protocol changes, and the topology-correlation step that makes the false-positive rate low enough to be operationally usable. This is directly relevant to O-RAN SMO fault/security integration.

## Why it matters / what's new (ZH)
多数蜂窝安全类条目聚焦 RAN/核心网入侵或隐私；而针对 PTP/GNSS 同步骨干的时序面攻击是一条独立且运营上关键的攻击面，尤其对 TDD——同步丢失会直接引发跨小区干扰。其新意不在于新的检测算法，而在于其**标准原生**性——复用 TS 28.111/28.552 计数器与 TR 33.894 事件处置，使其无需协议改动即可部署；拓扑关联步骤则将误报率压到运营可用的水平。这与 O-RAN SMO 的故障/安全集成直接相关。
