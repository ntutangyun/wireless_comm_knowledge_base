---
id: 2026-08-15_arxiv-wirelessopsagent-action-assurance-benchmark
date_published: 2026-08-08
date_found: 2026-08-15
type: academic-paper
technology: cellular
title_en: "WirelessOpsAgent: A Benchmark and Agent Design for Action Assurance in Wireless Networks (WirelessOptBench)"
title_zh: "WirelessOpsAgent：面向无线网络操作动作保障的基准与智能体设计（WirelessOptBench）"
url: "https://arxiv.org/abs/2608.08277"
source_quality: full
topics: [LLM-agent, network-operations, action-assurance, telemetry-integrity, network-slicing, handover, benchmark, O-RAN]
topic_primary: cellular-ai
topics_secondary: [network-slicing, open-ran]
novelty_score: 3
---

## Summary (EN)
Lu, Zuo, He (Nanjing University of Posts and Telecommunications) with Xu, Chen, Guo and Jin (National Mobile Communications Research Laboratory, Southeast University; arXiv 8 Aug 2026, 10 pp.) isolate a failure mode that sits between "the LLM agent proposed the right answer" and "the network was safely reconfigured": in programmable 5G slicing / O-RAN control loops, an action that is correct at proposal time can be **unsafe at execution time** if the telemetry backing it is stale, unit-mismatched, missing, or self-contradictory. They contribute **WirelessOptBench**, a 600-episode execution-state benchmark in three families — WCHW (wireless knowledge/calculation: SINR and achievable-rate checks), WCNS (5G network slicing: Σ_u W_u ≤ W cell bandwidth budget and per-user rate floors r_u ≥ r_u^min), WCMSA (mobility service assurance: RSRP margin ≥ H over the time-to-trigger window) — each crossed with five controlled telemetry-fault categories (schema/unit mismatch, freshness/ordering, availability/brownout, conflict/provenance, mixed evidence; 120 episodes each).

**WirelessOpsAgent** is a five-stage validation wrapper: (1) input binding into an immutable observation ledger; (2) evidence-graph construction tracking field dependencies and provenance; (3) typed integrity diagnosis with five explicit checks (schema, unit, source, freshness, conflict); (4) dependency-scoped bounded recovery — repairs confined to affected fields; (5) risk-aware authorization over an ordered action policy APPLY → ESCALATE → RETRY → HOLD → ABSTAIN. Across GPT-5.4-mini, Qwen3-8B and Claude Sonnet 4.6 backbones it reaches exact-action accuracy 0.972–0.983 and cuts the **unsafe-APPLY rate to 7.8–17.2 %** versus 49–89 % for direct prompting, a WirelessAgent++-with-contract baseline and a CRITIC-style self-check (Claude Sonnet 4.6: 82.2 % → 10.3 %; GPT-5.4-mini: 49.0 % → 7.8 %), while raising safe-APPLY recall to 48–72.5 % (baselines 12–25.5 %). An anonymized artifact is linked. Stated limits: controlled benchmark rather than live-network study, fault mix designed for reasoning stress not production frequencies, assumes honest telemetry metadata, and excludes actuator security and concurrent control.

## Summary (ZH)
Lu、Zuo、He（南京邮电大学）与 Xu、Chen、Guo、Jin（东南大学移动通信全国重点实验室；2026 年 8 月 8 日 arXiv，10 页）抓住"LLM 智能体给出了正确答案"与"网络被安全地重配置"之间的一类失效：在可编程 5G 切片 / O-RAN 控制环中，提案时正确的动作在**执行时可能不安全**——只要支撑它的遥测数据过期、单位不一致、缺失或自相矛盾。他们提出 **WirelessOptBench**，一个 600 集的执行状态基准，分三个族——WCHW（无线知识/计算：SINR 与可达速率校验）、WCNS（5G 网络切片：Σ_u W_u ≤ W 小区带宽预算与每用户速率下限 r_u ≥ r_u^min）、WCMSA（移动性服务保障：触发时间窗内 RSRP 余量 ≥ H）——每族交叉五类受控遥测故障（模式/单位不匹配、新鲜度/顺序、可用性/降级、冲突/来源、混合证据；各 120 集）。

**WirelessOpsAgent** 是五阶段校验包装器：(1) 输入绑定为不可变观测账本；(2) 构建跟踪字段依赖与来源的证据图；(3) 类型化完整性诊断，含五项显式检查（模式、单位、来源、新鲜度、冲突）；(4) 依赖范围内的有界修复——只修受影响字段；(5) 按 APPLY → ESCALATE → RETRY → HOLD → ABSTAIN 有序策略做风险感知授权。在 GPT-5.4-mini、Qwen3-8B、Claude Sonnet 4.6 三种骨干上，精确动作准确率 0.972–0.983，**不安全 APPLY 率降至 7.8–17.2 %**，而直接提示、带契约的 WirelessAgent++、CRITIC 式自检基线为 49–89 %（Claude Sonnet 4.6：82.2 % → 10.3 %；GPT-5.4-mini：49.0 % → 7.8 %），安全 APPLY 召回升至 48–72.5 %（基线 12–25.5 %）。附匿名开源工件。所述局限：受控基准而非实网研究，故障配比为推理压力测试而非生产频率，假设遥测元数据诚实，不含执行器安全与并发控制。

## Key technical points (EN)
- Benchmark: 600 episodes = 3 task families × 5 telemetry-fault categories × 40; families anchored to concrete 5G constraints (slice bandwidth budget, per-UE rate floor, RSRP-margin handover trigger over T).
- Action space semantics: APPLY (all fields valid, constraints met, record complete), ESCALATE (ambiguous schema / unresolved conflict / mixed risks), RETRY (retryable tool state, bounded backoff), HOLD (evidence lacks currency), ABSTAIN (fallback).
- Agent pipeline: immutable ledger → evidence graph → typed checks (schema, unit, source, freshness, conflict) → dependency-scoped repair → risk-ordered authorization; the design is backbone-agnostic.
- Results table (unsafe APPLY / safe-APPLY recall / exact accuracy): GPT-5.4-mini direct 49.0 % / 25.5 % / 0.538 → WirelessOpsAgent 7.8 % / 72.5 % / 0.972; Claude Sonnet 4.6 direct 88.7 % / 17.0 % / 0.370 → 10.3 % / 66.0 % / 0.975; CRITIC-style self-check helps GPT (18.7 %) but not Claude (88.5 %).
- Artifact: anonymous.4open.science/r/wirelessopsbench-artifact-D969; ablations on GPT-5.4-mini only.

## Key technical points (ZH)
- 基准：600 集 = 3 任务族 × 5 遥测故障类 × 40；任务族锚定具体 5G 约束（切片带宽预算、每 UE 速率下限、T 窗内 RSRP 余量切换触发）。
- 动作语义：APPLY（字段全部有效、约束满足、记录完整）、ESCALATE（模式歧义 / 冲突未解 / 混合风险）、RETRY（工具处于可重试状态、有界退避）、HOLD（证据缺乏时效）、ABSTAIN（兜底）。
- 智能体流水线：不可变账本 → 证据图 → 类型化检查（模式、单位、来源、新鲜度、冲突）→ 依赖范围修复 → 风险有序授权；设计与骨干模型无关。
- 结果（不安全 APPLY / 安全 APPLY 召回 / 精确准确率）：GPT-5.4-mini 直接 49.0 % / 25.5 % / 0.538 → WirelessOpsAgent 7.8 % / 72.5 % / 0.972；Claude Sonnet 4.6 直接 88.7 % / 17.0 % / 0.370 → 10.3 % / 66.0 % / 0.975；CRITIC 式自检对 GPT 有效（18.7 %）而对 Claude 无效（88.5 %）。
- 工件：anonymous.4open.science/r/wirelessopsbench-artifact-D969；消融仅在 GPT-5.4-mini 上做。

## Why it matters / what's new (EN)
The KB's agentic-RAN thread (GRV guardrail agent 2026-07-04, RANPilot 2026-07-07, autogenic 6G management 2026-07-11, EvoRIC 2026-08-12, organic-6G conversational orchestration 2026-08-13) has so far measured *whether the agent decides well*; this paper adds a missing axis — **whether the agent should be allowed to act on the evidence it currently holds** — and shows that generic self-critique does not fix it (Claude Sonnet 4.6 stays at ~88 % unsafe under CRITIC-style checking) while a typed telemetry-integrity gate does. The five-way action taxonomy (APPLY/ESCALATE/RETRY/HOLD/ABSTAIN) is a reusable contract for RIC xApp/rApp actuation and for intent-based slicing/handover automation, and the benchmark itself is a shareable yardstick. Caveats: controlled episodes, not live O-RAN traffic; no defence against adversarial or falsified telemetry provenance.

## Why it matters / what's new (ZH)
知识库的智能体 RAN 线索（GRV 护栏智能体 2026-07-04、RANPilot 2026-07-07、自生成 6G 管理 2026-07-11、EvoRIC 2026-08-12、有机 6G 会话编排 2026-08-13）此前衡量的是*智能体决策是否正确*；本文补上缺失的一轴——**智能体是否应当基于其当前掌握的证据执行动作**——并证明通用自我批评无法解决（CRITIC 式检查下 Claude Sonnet 4.6 仍约 88 % 不安全），而类型化遥测完整性闸门可以。五路动作分类（APPLY/ESCALATE/RETRY/HOLD/ABSTAIN）可作为 RIC xApp/rApp 执行与意图驱动切片/切换自动化的可复用契约，基准本身也是可共享的标尺。注意：受控回合而非实时 O-RAN 流量；不防御对抗性或伪造的遥测来源。

## Images
![WirelessOpsAgent five-stage validation framework | WirelessOpsAgent 五阶段校验框架](https://arxiv.org/html/2608.08277v1/fig3_wirelessopsagent_framework.png)
![WirelessOptBench execution-state benchmark overview | WirelessOptBench 执行状态基准概览](https://arxiv.org/html/2608.08277v1/fig1.png)
