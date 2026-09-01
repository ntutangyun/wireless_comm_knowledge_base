---
id: 2026-09-01_arxiv-xtruce-provably-safe-oran-arbiter
date_published: 2026-08-28
date_found: 2026-09-01
type: academic-paper
technology: cellular
title_en: "xTRUCE: A Provably Safe Arbiter for Multi-xApp Conflict Mitigation in Agentic O-RAN"
title_zh: "xTRUCE：面向智能体化 O-RAN 多 xApp 冲突缓解的可证明安全仲裁器"
url: "https://arxiv.org/abs/2608.28532"
source_quality: abstract_only
topics: [O-RAN, xApp, rApp, Near-RT-RIC, LLM-agent, conflict-mitigation, E2-interface, OpenAirInterface, FlexRIC, safety-certificate]
topic_primary: open-ran
topics_secondary: [cellular-ai, cellular-security]
novelty_score: 3
---

## Summary (EN)
Le Xia, Rose Qingyang Hu, Paul S. Kudyba, Zhenlin An and Haijian Sun (arXiv v1, 28 Aug 2026) tackle a problem the KB's AI-RAN safety thread has been circling for months: as O-RAN moves toward agentic operation, LLM-driven xApps/rApps generate control proposals under operator intent, but those proposals can be conflicting, infeasible, or outright hallucinated, and no prior system jointly guaranteed proposal-independent safety, priority-aware reconciliation and traceable feedback. xTRUCE is a provably safe arbiter that sits inside the Near-RT RIC. It defines a structured xApp proposal interface plus a three-layer constraint hierarchy — physical limits and operator-defined rules sit above relaxable performance targets — over a dual-timescale control action space. A two-stage arbitration mechanism then minimizes target shortfalls in strict operator-priority order to finalize safe E2 actions within the Near-RT latency budget, while issuing conflict certificates back to the xApps (and the operator) so proposals can be renegotiated rather than silently dropped or blindly executed.

The authors implement xTRUCE in a multi-cell O-RAN use case and evaluate a multi-process prototype two ways: simulations driven by live API-backed LLM xApps, and over-the-air experiments on an OpenAirInterface/FlexRIC-based O-RAN stack. Reported results: 100% protected services despite severe proposal hallucinations, priority-consistent performance satisfaction under overload, efficient LLM-intent renegotiation guided by the conflict certificates, and a control loop that stays inside the Near-RT delay budget throughout.

## Summary (ZH)
Le Xia、Rose Qingyang Hu、Paul S. Kudyba、Zhenlin An 与 Haijian Sun（arXiv v1，2026 年 8 月 28 日）处理的是知识库 AI-RAN 安全主线近几个月一直在逼近的问题：随着 O-RAN 走向智能体化运行，LLM 驱动的 xApp/rApp 会在运营商意图下生成控制提案，但这些提案可能相互冲突、不可行，甚至纯属"幻觉"，此前没有系统能同时保证与提案无关的安全性、按优先级的仲裁调和，以及可追溯的反馈。xTRUCE 是部署在近实时 RIC 内部的可证明安全仲裁器。它定义了结构化的 xApp 提案接口，以及一个三层约束层级——物理极限与运营商规则位于可放宽性能目标之上——覆盖在一个双时间尺度的控制动作空间之上。随后由两阶段仲裁机制按严格的运营商优先级顺序最小化目标缺口，在近实时时延预算内敲定安全的 E2 动作，同时向 xApp（及运营商）返回冲突证书，使提案可被重新协商，而非被静默丢弃或盲目执行。

作者在一个多小区 O-RAN 用例中实现了 xTRUCE，并以两种方式评估其多进程原型：由实时 API 驱动的 LLM xApp 组成的仿真，以及基于 OpenAirInterface/FlexRIC 的 O-RAN 协议栈上的空口实验。报告结果：即便出现严重的提案幻觉，仍能实现 100% 的服务保护；过载下保持与优先级一致的性能满足度；借助冲突证书高效引导 LLM 意图的重新协商；控制回路全程保持在近实时时延预算内。

## Key technical points (EN)
- Problem: agentic O-RAN's LLM-driven xApps/rApps can emit conflicting, infeasible or hallucinated control proposals; no prior system jointly gave proposal-independent safety + priority-aware reconciliation + traceable feedback.
- Architecture: structured xApp proposal interface; three-layer constraint hierarchy (physical limits and operator rules > relaxable performance targets); dual-timescale control action space.
- Mechanism: two-stage arbitration minimizes target shortfalls in strict operator-priority order, finalizes safe E2 actions inside the Near-RT latency budget, and returns conflict certificates for renegotiation.
- Evaluation: multi-cell O-RAN use case; multi-process prototype tested via (1) simulation with live API-backed LLM xApps and (2) over-the-air experiments on OpenAirInterface/FlexRIC.
- Headline results: 100% protected services under severe proposal hallucinations; priority-consistent performance satisfaction under overload; delay-safe E2 control loop throughout.
- Positioning: extends the KB's AI-RAN safety lineage — conflict taxonomy -> forensic triage (C-RE-ACT) -> programmable MAC (MAC-Gyver) -> pre-actuation certification (VeraRAN) -> verifiable agentic intent (Z2-ACT) -> now a formally-grounded, tested arbitration layer.

## Key technical points (ZH)
- 问题：智能体化 O-RAN 中 LLM 驱动的 xApp/rApp 可能产生相互冲突、不可行甚至"幻觉"的控制提案；此前没有系统同时保证与提案无关的安全性、按优先级仲裁调和与可追溯反馈。
- 架构：结构化 xApp 提案接口；三层约束层级（物理极限与运营商规则 > 可放宽的性能目标）；双时间尺度控制动作空间。
- 机制：两阶段仲裁按严格运营商优先级顺序最小化目标缺口，在近实时时延预算内敲定安全 E2 动作，并返回冲突证书供重新协商。
- 评估：多小区 O-RAN 用例；多进程原型通过（1）实时 API 驱动 LLM xApp 的仿真和（2）基于 OpenAirInterface/FlexRIC 的空口实验两种方式测试。
- 核心结果：即便出现严重提案幻觉仍实现 100% 服务保护；过载下保持与优先级一致的性能满足度；控制回路全程保持在时延预算内。
- 定位：延续知识库 AI-RAN 安全谱系——冲突分类 -> 事后取证（C-RE-ACT）-> 可编程 MAC（MAC-Gyver）-> 执行前认证（VeraRAN）-> 可验证智能体意图（Z2-ACT）-> 如今是一个有形式化保证并经实测的仲裁层。

## Why it matters / what's new (EN)
The KB has tracked the AI-RAN safety stack building layer by layer since early August: xApp-conflict taxonomy, forensic root-cause triage (C-RE-ACT), programmable MAC scheduling (MAC-Gyver), pre-actuation plan certification (VeraRAN, 28.8% of locally-valid plans found asynchronously unsafe), and cryptographically-audited agentic intent control (Z2-ACT). xTRUCE is the natural next layer: instead of certifying one plan in isolation or auditing after the fact, it arbitrates *between* simultaneously-competing xApp proposals with a provable safety hierarchy, and it is the first entry in this thread to combine a formal three-layer constraint guarantee with both closed-loop simulation against live LLM agents *and* over-the-air validation on real O-RAN software stacks. The "100% protected services despite severe hallucinations" number gives operators a concrete stability claim to test against as agentic RIC deployments move from research testbeds toward field trials.

## Why it matters / what's new (ZH)
知识库自八月初起持续跟踪 AI-RAN 安全技术栈的逐层构建：xApp 冲突分类、事后根因取证（C-RE-ACT）、可编程 MAC 调度（MAC-Gyver）、执行前方案认证（VeraRAN，发现本地有效方案中 28.8% 异步不安全）、以及经密码学审计的智能体意图控制（Z2-ACT）。xTRUCE 是这条主线自然的下一层：它不是孤立地认证单个方案或事后审计，而是在同时竞争的多个 xApp 提案之间进行仲裁，且具备可证明的安全层级；它也是该主线中首个同时具备形式化三层约束保证、面向实时 LLM 智能体的闭环仿真、以及在真实 O-RAN 软件栈上的空口验证的条目。"即便出现严重幻觉仍 100% 服务保护"这一数字，为运营商在智能体化 RIC 部署从研究测试床走向现场试验的过程中，提供了一个可供检验的具体稳定性主张。

## Images
