---
id: 2026-11-25_arxiv-satmend-llm-agents-software-repair-intermittent-ground-contact
date_published: 2026-11-22
date_found: 2026-11-25
type: academic-paper
technology: satellite
title_en: "SatMend: LLM Agents for Automated Software Repair in Satellite Constellations with Intermittent Ground Contact"
title_zh: "SatMend：面向地面接触间歇的卫星星座的 LLM 智能体自动软件修复"
url: "https://arxiv.org/abs/2611.29227"
source_quality: full
topics: [LLM-agents, software-repair, satellite-constellation, intermittent-contact, F-Prime, FDIR]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Pengcheng Luo, Zenghui Zhang, Genke Yang and Jian Chu present SatMend, a ground-based LLM-agent method for repairing onboard software in satellite constellations that have only intermittent ground contact. The paper states that automated software repair across satellite constellations "remains underexplored". SatMend groups related software versions into persistent sessions so that diagnostic context is kept, uses source and runtime evidence to choose between code repair and state recovery, validates each version separately, and submits validated fixes while repair of other versions continues, so that ground preparation overlaps with onboard delivery.

In experiments with 16 to 64 satellites the authors report that SatMend restores 192 of 224 faulty applications within 600 s, against 40 for SWE-agent, 77 for Agentless, 124 for RepairAgent and 115 for SWE-Search.

## Summary (ZH)

Pengcheng Luo、Zenghui Zhang、Genke Yang 与 Jian Chu 提出 SatMend，一种基于地面 LLM 智能体、用于修复仅有间歇性地面接触的卫星星座星上软件的方法。论文指出，跨卫星星座的自动软件修复“仍未得到充分研究”。SatMend 将相关软件版本归入持久会话以保留诊断上下文，依据源码与运行时证据在代码修复与状态恢复之间选择，对每个版本单独验证，并在其余版本仍在修复时提交已验证的补丁，使地面准备与星上交付相互重叠。

在 16 至 64 颗卫星的实验中，作者报告 SatMend 在 600 s 内恢复 224 个故障应用中的 192 个，而 SWE-agent 为 40，Agentless 为 77，RepairAgent 为 124，SWE-Search 为 115。

## Key technical points (EN)

- System model: satellites, applications, a gateway with a forwarding application and contact windows, with constrained uplink, downlink and crosslink capacities. Objective: maximise the number of initially faulty applications verified as recovered by a 600 s deadline; recovery requires delivery, activation and functional checks at each actual target.
- Design: (1) cross-version sessions, with versions of a component assigned to repair slots and one persistent LLM session per slot; (2) evidence-guided repair, where code faults lead to editing, building and validating while state or configuration anomalies are handled by restart or restoration operations; (3) per-version validation as the condition for delivery eligibility; (4) pipelined delivery, with the gateway caching packages and able to resume interrupted uploads.
- Testbed: software-in-the-loop built from public NASA F Prime components; eight variants, 48 primary configurations and six comparison configurations (S16-N, S16-F, S32-N, S32-F, S64-N, S64-F) containing 448 applications, of which 224 are directly faulty (140 code faults, 84 state anomalies). Baselines: Watchdog-FDIR, Table-FDIR, SWE-agent, Agentless, RepairAgent, SWE-Search; model-based methods use the same model with two repair slots.
- Overall recovery (Table V): SatMend 192 of 224; RepairAgent 124, SWE-Search 115, Agentless 77, SWE-agent 40, Table-FDIR 36, Watchdog-FDIR 18.
- Reported sensitivity results: with a 25% state-anomaly fraction SatMend reaches 100% at all three constellation sizes; at 50% with 64 satellites it reaches 50.00% versus 26.56% for SWE-Search. Under a 270 s contact calendar SatMend rises from 91.7% to 95.8% and RepairAgent from 62.2% to 84.6%. Joint sessions cut workflow time in S16-N from 144.9 s to 81.6 s (sessions from 6 to 2). Delaying code delivery lowers recovery in five of six configurations (e.g. S32-F from 32 to 8). In the S16-F case study SatMend reaches full recovery at 78.9 s versus 246.3 s for RepairAgent.
- Future work named by the authors: adaptive session allocation and dependency-aware delivery prioritisation.

## Key technical points (ZH)

- 系统模型：卫星、应用、带转发应用的网关以及接触窗口，上行、下行与星间链路容量均受限。目标：最大化在 600 s 截止时间前被验证为已恢复的初始故障应用数量；恢复要求在每个实际目标上完成交付、激活与功能检查。
- 设计：（1）跨版本会话：同一组件的各版本分配到修复槽位，每个槽位一个持久 LLM 会话；（2）证据引导修复：代码故障对应编辑、构建与验证，状态或配置异常则通过重启或恢复操作处理；（3）以逐版本验证作为交付资格条件；（4）流水线交付：网关缓存软件包并可续传中断的上传。
- 测试平台：基于公开 NASA F Prime 组件的软件在环平台；八种变体、48 个主要配置和六个对比配置（S16-N、S16-F、S32-N、S32-F、S64-N、S64-F），含 448 个应用，其中 224 个直接故障（140 个代码故障，84 个状态异常）。基线：Watchdog-FDIR、Table-FDIR、SWE-agent、Agentless、RepairAgent、SWE-Search；基于模型的方法使用相同模型和两个修复槽位。
- 总体恢复（表 V）：SatMend 192/224；RepairAgent 124、SWE-Search 115、Agentless 77、SWE-agent 40、Table-FDIR 36、Watchdog-FDIR 18。
- 报告的敏感性结果：状态异常占比 25% 时，SatMend 在三种星座规模下均达到 100%；占比 50% 且 64 颗卫星时达到 50.00%，SWE-Search 为 26.56%。在 270 s 接触日历下，SatMend 从 91.7% 升至 95.8%，RepairAgent 从 62.2% 升至 84.6%。联合会话使 S16-N 的工作流时间从 144.9 s 降至 81.6 s（会话数由 6 降至 2）。延迟代码交付会使六个配置中的五个恢复数下降（如 S32-F 从 32 降至 8）。在 S16-F 案例中，SatMend 于 78.9 s 完全恢复，RepairAgent 为 246.3 s。
- 作者列出的未来工作：自适应会话分配与依赖感知的交付优先级。

## Why it matters / what's new (EN)

The authors argue that existing spacecraft-recovery work (telemetry anomaly detection, FDIR, file-delivery standards) and LLM repair systems (ChatRepair, SWE-agent, Agentless, RepairAgent, SWE-Search) do not address reuse of diagnostic work across versions or delivery under contact limits. Their conclusion is that coordinating ground repair preparation with onboard execution restores more applications under intermittent contact. All results are from a software-in-the-loop testbed.

## Why it matters / what's new (ZH)

作者认为，现有航天器恢复工作（遥测异常检测、FDIR、文件交付标准）和 LLM 修复系统（ChatRepair、SWE-agent、Agentless、RepairAgent、SWE-Search）均未处理跨版本诊断复用以及接触受限下的交付问题。其结论是，在间歇接触条件下，将地面修复准备与星上执行相协调可恢复更多应用。所有结果均来自软件在环测试平台。

## Images

None.
