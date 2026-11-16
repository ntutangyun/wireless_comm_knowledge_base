---
id: 2026-11-16_arxiv-agentic-llm-upf-mbr-enforcement-pfcp-network-slicing
date_published: 2026-11-12
date_found: 2026-11-16
type: academic-paper
technology: cellular
title_en: "Agentic Orchestration for SLA-Constrained Network Slicing in Programmable Mobile Data Planes"
title_zh: "可编程移动数据面中面向 SLA 约束网络切片的智能体编排"
url: "https://arxiv.org/abs/2611.16801"
source_quality: full
topics: [network-slicing, UPF, PFCP, MBR, QER, LLM, agentic, BESS, DPDK, FABRIC]
topic_primary: network-slicing
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

The paper (accepted author manuscript for IEEE CCNC 2027) works on the 5G user plane. 3GPP TS 23.501 has the User Plane Function (UPF) enforce Maximum Bit Rate (MBR) limits through QoS Enforcement Rules, and the authors ask how to adjust those limits during overload while keeping slice differentiation and avoiding oscillation. Their control loop pulls live UPF telemetry, builds a finite set of admissible MBR vectors, lets a locally hosted LLM (Qwen2.5-7B-Instruct served through vLLM) select one candidate, validates the choice deterministically and applies it as a PFCP Session Modification Request.

The loop runs on a two-site FABRIC testbed with the OMEC BESS-UPF DPDK pipeline and a TRex traffic generator, with five slices (two Gold, two Silver, one Bronze, 800 Mbps of configured MBR in total) and a four-phase overload schedule. Five controllers are compared over ten runs each. The authors state that delivered per-class QoS was not measured; the results establish configuration preservation and control stability.

## Summary (ZH)

这篇论文（IEEE CCNC 2027 的录用作者稿）面向 5G 用户面。3GPP TS 23.501 规定用户面功能（UPF）通过 QoS 执行规则（QER）强制执行最大比特率（MBR）限制，作者要问的是：过载时如何调整这些限制，既保持切片间的差异化，又避免振荡。其控制回路拉取实时 UPF 遥测，构造有限的可接受 MBR 向量集合，由本地部署的大模型（经 vLLM 服务的 Qwen2.5-7B-Instruct）选择其中一个候选，经确定性校验后以 PFCP 会话修改请求下发。

该回路运行在两站点 FABRIC 测试床上，使用 OMEC BESS-UPF DPDK 流水线和 TRex 流量发生器，共五个切片（两个 Gold、两个 Silver、一个 Bronze，配置 MBR 合计 800 Mbps），按四阶段过载时间表运行。五种控制器各运行十次进行比较。作者明确指出未测量各类别实际交付的 QoS；结果证明的是配置保持与控制稳定性。

## Key technical points (EN)

- Candidate construction: Gold MBRs are pinned to their initial values; during overload candidates may only maintain or reduce the affected class's MBR within the current phase ("SLA-monotone"); recovery collapses the set to the initial vector.
- The LLM selects a candidate identifier rather than generating rate values (temperature 0, up to 300 output tokens); the executable action is derived independently of the model-declared action, and any failed validation keeps the current vector.
- Actuation: PFCP Session Modification updates per-session application-level MBR without changing session-level QER, FAR, PDR or TEID state.
- Comparison: Static, Threshold, Greedy, an unconstrained agentic controller (E4) and the proposed one (E4b). Across 240 windows each, E4 made 124 MBR modifications with 80 oscillations and 50 fallbacks; E4b made 32 modifications with none of either.
- Mean aggregate throughput during overload (Phase B / C): Static 562.14 / 650.21 Mbps, Threshold 507.73 / 574.58, Greedy 562.14 / 650.22, E4 531.47 / 585.69, E4b 534.41 / 578.69. Gold limits stayed unchanged across all 480 E4 and E4b windows.
- E4b LLM request latency: median 2.72 s, 95th percentile 3.53 s, maximum 4.04 s. The authors state that overload-to-enforcement delay and per-class throughput, loss and latency are not reported.

## Key technical points (ZH)

- 候选构造：Gold 的 MBR 固定在初始值；过载期间候选只能在当前阶段内维持或降低受影响类别的 MBR（“SLA 单调”）；恢复阶段候选集合收缩为初始向量。
- 大模型选择的是候选编号而非生成速率数值（温度 0，最多 300 个输出 token）；可执行动作独立于模型声明的动作推导，校验失败则保持当前向量。
- 执行：通过 PFCP 会话修改更新每会话的应用级 MBR，不改变会话级 QER、FAR、PDR 或 TEID 状态。
- 对比：静态、阈值、贪心、不受约束的智能体控制器（E4）与所提方案（E4b）。每种各 240 个窗口，E4 有 124 次 MBR 修改、80 次振荡、50 次回退；E4b 为 32 次修改，振荡与回退均为零。
- 过载期间平均聚合吞吐（阶段 B / C）：静态 562.14 / 650.21 Mbps，阈值 507.73 / 574.58，贪心 562.14 / 650.22，E4 531.47 / 585.69，E4b 534.41 / 578.69。在 E4 与 E4b 共 480 个窗口中 Gold 限额始终不变。
- E4b 的大模型请求时延：中位数 2.72 s，第 95 百分位 3.53 s，最大 4.04 s。作者说明过载到执行的延迟以及各类别的吞吐、丢包与时延均未报告。

## Why it matters / what's new (EN)

Most slicing-control work the paper cites acts on RAN resources; this one acts on UPF-side MBR enforcement through PFCP on a real packet-processing pipeline, and separates LLM candidate selection from deterministic validation. The evidence is limited to a single scenario with known traffic phases, and the authors note that the results give no general reliability guarantee.

## Why it matters / what's new (ZH)

论文引用的多数切片控制工作作用于 RAN 资源；本文则在真实的包处理流水线上通过 PFCP 作用于 UPF 侧的 MBR 执行，并把大模型的候选选择与确定性校验分离。证据仅限于流量阶段已知的单一场景，作者也说明这些结果并不提供通用的可靠性保证。

## Images

![Agentic control loop for QoS enforcement at the UPF: telemetry, candidate generation, LLM selection, validation, PFCP update | UPF 处 QoS 执行的智能体控制回路：遥测、候选生成、大模型选择、校验与 PFCP 更新](https://arxiv.org/html/2611.16801v1/method-upd2.png)
![Two-site FABRIC testbed with BESS-UPF and TRex traffic generator | 含 BESS-UPF 与 TRex 流量发生器的两站点 FABRIC 测试床](https://arxiv.org/html/2611.16801v1/testbed-upd2.png)
