---
id: 2026-09-18_arxiv-agentic-rdz-fr3-coexistence
date_published: 2026-09-15
date_found: 2026-09-18
type: academic-paper
technology: cellular
title_en: "Agentic RDZ: Autonomous Zone Management with AI Agents and an FR3 Coexistence Use Case"
title_zh: "Agentic RDZ：基于AI智能体的自主动态频谱区域管理及FR3共存用例"
url: "https://arxiv.org/abs/2609.17110"
source_quality: full
topics: [FR3, Radio-Dynamic-Zone, spectrum-sharing, LLM-agent, O-RAN, incumbent-protection, coexistence]
topic_primary: cellular-spectrum
topics_secondary: [cellular-ai, open-ran]
novelty_score: 4
---

## Summary (EN)

This paper (Minh Dat Nguyen, Gabriele Gemmi, Tamerlan Aghayev, Paolo Testolina, Michele Polese, Tommaso Melodia; Institute for Intelligent Networked Systems, Northeastern University) addresses Radio Dynamic Zones (RDZs) — controlled areas where experimental spectrum use is permitted alongside protected incumbent systems. The authors state that conventional RDZ systems rely on handcrafted rules and predefined workflows that are brittle: when hardware impairments or interference mechanisms outside the anticipated design space occur, the system has no option but to terminate the experiment rather than adapt. The paper presents what it describes as the first RDZ implementation that uses Large Language Models (LLMs) for spectrum management, pairing autonomous reasoning with a deterministic policy gate and near-real-time reflexes so that agentic flexibility does not come at the cost of incumbent-protection guarantees.

The Agentic RDZ architecture has four layers. The **Agent Plane** has three specialist LLM agents: a Spectrum Sentinel that detects interference violations and correlates spectrum measurements with configurations, an Experiment Steward that manages experiment lifecycle (deployment, monitoring, recovery), and a Policy Interpreter that manages the zone policy blueprint, turns experiment requests into enforceable spectrum grants and checks proposed mitigations for policy compliance. The **Guard Plane** is a deterministic policy gate enforcing hard constraints (interference budgets, frequency grants) that blocks unsafe agent actions before they reach the network. The **Management Plane** translates verified decisions into network configuration via the O-RAN RIC, 3GPP OAM, or vendor APIs, and includes an independent "reflex" path that evaluates the interference budget at each 100 ms control interval, with a 200 ms sense-to-actuate design budget (two control intervals), without agent involvement. The **Substrate Plane** is the 5G NR radio system, the protected incumbent, and the sensing infrastructure.

The system is validated on a hardware-in-the-loop FR3 testbed: a 5G NR experiment (an OpenAirInterface gNB running nr-softmodem in Docker, paired with a Foxconn O-RAN radio unit over xRAN fronthaul, band n78 at 106 PRBs / 30 kHz SCS, up-converted to a 10 GHz FR3 carrier from a 3.58 GHz intermediate frequency) coexists with an emulated Fixed Satellite Service (FSS) earth-station receiver, whose calibrated measurements come from a FieldFox N9953B spectrum analyzer and whose protection criterion (I/N <= -10 dB) is derived from a virtual victim plane built per ITU-R S.1428/S.1432. In the test scenario, a controlled drift — switching the experiment to full-power, full-bandwidth operation — pushes the already-inverted emission skirt into the lower-adjacent FSS sub-band past the protection limit. Across 10 trials, the system achieved 100% violation detection and successful mitigation, reducing interference from 6.75x to 0.496x the protection limit, with a median end-to-end detection-to-mitigation latency of 73.74 seconds (spanning detection, decision, actuation, and verification stages) while the independent reflex path computes its response in an average of 0.14 ms, within its 200 ms design budget. The agentic mitigation (a PRB-mask adjustment) retained 76.04% of the experiment's utility, versus 0% utility under a full-shutdown baseline, corresponding to a disruption cost of 0.24 versus 1.00. The authors discuss two limitations: LLM inference latency (1-200 seconds) cannot itself guarantee sub-second safety-critical response, which is why the dual-timescale (agent + reflex) architecture exists; and agent recommendations may not translate perfectly into network execution, which is why the deterministic policy gate and independent verification exist.

## Summary (ZH)

本文（Minh Dat Nguyen、Gabriele Gemmi、Tamerlan Aghayev、Paolo Testolina、Michele Polese、Tommaso Melodia；美国东北大学智能网络系统研究所）研究动态频谱区域（Radio Dynamic Zone, RDZ）——即允许在受保护的既有（incumbent）系统旁进行实验性频谱使用的受控区域。作者指出，传统 RDZ 系统依赖人工编写的规则与预定义工作流，脆弱性较高：一旦出现设计预期之外的硬件缺陷或干扰机制，系统除终止实验外别无选择，无法自适应调整。论文提出了其称为首个采用大语言模型（LLM）进行频谱管理的 RDZ 实现，将自主推理能力与确定性策略门以及近实时反射机制相结合，使智能体带来的灵活性不以牺牲既有系统保护保障为代价。

Agentic RDZ 架构分为四层。**智能体层（Agent Plane）**包含三个专用 LLM 智能体：负责检测干扰违规并将频谱测量与配置相关联的"频谱哨兵"（Spectrum Sentinel）；负责管理实验生命周期（部署、监控、恢复）的"实验管家"（Experiment Steward）；以及负责管理区域策略蓝图、将实验请求转化为可强制执行的频谱许可、并检查所提缓解措施是否符合策略的"策略解读器"（Policy Interpreter）。**防护层（Guard Plane）**是一个确定性策略门，强制执行硬约束（干扰预算、频率许可），在智能体的不安全动作到达网络之前将其拦截。**管理层（Management Plane）**通过 O-RAN RIC、3GPP OAM 或厂商 API 将已验证的决策转化为网络配置，并包含一条独立的"反射"路径，在每个 100 毫秒控制间隔评估一次干扰预算，设计的感知-执行预算为 200 毫秒（两个控制间隔），无需智能体参与。**基础层（Substrate Plane）**则是 5G NR 无线系统、受保护的既有系统以及感知基础设施。

该系统在一个硬件在环 FR3 测试平台上得到验证：一个 5G NR 实验（在 Docker 中运行 nr-softmodem 的 OpenAirInterface gNB，通过 xRAN 前传与 Foxconn O-RAN 射频单元配对，采用 n78 频段、106 个物理资源块、30 kHz 子载波间隔，由 3.58 GHz 中频上变频至 10 GHz FR3 载波）与一个仿真的固定卫星业务（FSS）地面站接收机共存，后者的校准测量数据来自 FieldFox N9953B 频谱分析仪，其保护判据（I/N ≤ -10 dB）依据 ITU-R S.1428/S.1432 标准构建的虚拟受害平面得出。在测试场景中，一次受控的偏移——将实验切换至满功率、满带宽运行——把本已频谱反转的发射裙边推入下邻的 FSS 子频段，超出保护限值。在 10 次试验中，系统实现了 100% 的违规检测与成功缓解，将干扰从保护限值的 6.75 倍降至 0.496 倍，端到端检测-决策-执行-验证全流程的中位延迟为 73.74 秒，而独立的反射路径平均计算耗时仅 0.14 毫秒，在其 200 毫秒设计预算之内。智能体驱动的缓解措施（一次物理资源块掩码调整）保留了实验 76.04% 的效用，而完全停止基线的效用为 0%，对应的中断成本分别为 0.24 与 1.00。作者讨论了两点局限：其一，LLM 推理延迟（1 至 200 秒）本身无法保证亚秒级的安全关键响应，这正是采用双时间尺度（智能体+反射）架构的原因；其二，智能体的建议可能无法完美转化为网络实际执行，这正是需要确定性策略门与独立验证的原因。

## Key technical points (EN)

- **Architecture**: four planes — Agent Plane (Spectrum Sentinel / Experiment Steward / Policy Interpreter LLM agents), Guard Plane (deterministic policy gate), Management Plane (O-RAN RIC / 3GPP OAM / vendor APIs, plus an independent reflex path on a 100 ms control interval with a 200 ms sense-to-actuate budget), Substrate Plane (5G NR radio, protected incumbent, sensing).
- **Testbed**: FR3 hardware-in-the-loop — OAI gNB (nr-softmodem, Docker) + Foxconn O-RAN radio unit over xRAN, band n78 (106 PRBs, 30 kHz SCS), 3.58 GHz IF up-converted to 10 GHz FR3; emulated FSS earth-station incumbent measured via FieldFox N9953B, protection criterion I/N <= -10 dB per ITU-R S.1428/S.1432.
- **Result**: 100% violation detection and mitigation across 10 trials; interference cut from 6.75x to 0.496x the protection limit.
- **Latency**: median end-to-end (detect-decide-actuate-verify) latency 73.74 s; independent reflex path averages 0.14 ms, within a 200 ms design budget.
- **Utility retained**: agentic PRB-mask mitigation kept 76.04% of experiment utility (disruption cost 0.24) vs. 0% utility (cost 1.00) for a full-shutdown baseline.
- **Stated limitations**: LLM inference latency (1-200 s) can't itself meet safety-critical timing, motivating the dual-timescale design; imperfect decision-to-action translation motivates the deterministic gate and independent verification.

## Key technical points (ZH)

- **架构**：四个层面——智能体层（频谱哨兵/实验管家/策略解读器三个 LLM 智能体）、防护层（确定性策略门）、管理层（O-RAN RIC/3GPP OAM/厂商 API，外加一条独立反射路径，在每个 100 毫秒控制间隔评估一次，感知-执行预算为 200 毫秒）、基础层（5G NR 无线系统、受保护既有系统、感知基础设施）。
- **测试平台**：FR3 硬件在环——OAI gNB（nr-softmodem，Docker 部署）+ 通过 xRAN 前传连接的 Foxconn O-RAN 射频单元，n78 频段（106 个物理资源块，30 kHz 子载波间隔），3.58 GHz 中频上变频至 10 GHz FR3；仿真 FSS 地面站既有系统，测量数据来自 FieldFox N9953B 频谱分析仪，保护判据依 ITU-R S.1428/S.1432 定为 I/N ≤ -10 dB。
- **结果**：10 次试验中实现 100% 的违规检测与缓解；干扰从保护限值的 6.75 倍降至 0.496 倍。
- **延迟**：端到端（检测-决策-执行-验证）中位延迟为 73.74 秒；独立反射路径平均耗时 0.14 毫秒，在 200 毫秒设计预算之内。
- **保留效用**：智能体驱动的物理资源块掩码缓解措施保留了 76.04% 的实验效用（中断成本 0.24），而完全停止基线的效用为 0%（中断成本 1.00）。
- **论文所述局限**：LLM 推理延迟（1-200 秒）本身无法满足安全关键的时序要求，这是采用双时间尺度设计的原因；决策到执行的转化可能不完美，这是需要确定性策略门与独立验证的原因。

## Why it matters / what's new (EN)

The KB's existing FR3 entries (e.g. `2026-06-13_arxiv-fr3-terrestrial-ntn-spectrum-sharing`, `2026-09-17_arxiv-fr3-beam-management-effort-6g`) address spectrum-sharing feasibility and beam-management overhead; this paper instead targets the operational governance layer — how a live coexistence experiment involving a real 5G NR radio and a protected incumbent is monitored and, on a real interference violation, autonomously mitigated rather than shut down — combining LLM-based reasoning with a hardware-verified deterministic safety layer on an actual FR3 hardware-in-the-loop testbed rather than in simulation.

## Why it matters / what's new (ZH)

知识库现有的 FR3 相关条目（如 `2026-06-13_arxiv-fr3-terrestrial-ntn-spectrum-sharing`、`2026-09-17_arxiv-fr3-beam-management-effort-6g`）聚焦于频谱共享可行性与波束管理开销；本文则聚焦于运行治理层——即在涉及真实 5G NR 无线电与受保护既有系统的实际共存实验中如何进行监测，并在发生真实干扰违规时实现自主缓解而非直接停止实验，将基于 LLM 的推理与经硬件验证的确定性安全层相结合，且验证平台是真实的 FR3 硬件在环测试平台而非仿真环境。
