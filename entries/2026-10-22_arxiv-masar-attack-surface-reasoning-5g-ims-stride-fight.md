---
id: 2026-10-22_arxiv-masar-attack-surface-reasoning-5g-ims-stride-fight
date_published: 2026-10-21
date_found: 2026-10-22
type: academic-paper
technology: cellular
title_en: "MASAR: Multi-stage Attack Surface Analysis and Reasoning Framework for Telecom Networks"
title_zh: "MASAR：面向电信网络的多阶段攻击面分析与推理框架"
url: "https://arxiv.org/abs/2610.29343"
source_quality: full
topics: [IMS, 5G-core, STRIDE, MITRE-FiGHT, attack-graph, MiniZinc, SIP, Diameter, Cx, threat-modeling, signalling-security]
topic_primary: cellular-security
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
The paper (17 pages, 5 figures) presents MASAR, a formal threat-modelling framework for telecom networks that tries to close a gap between architectural threat frameworks such as STRIDE and operational knowledge bases such as the MITRE Five-G Hierarchy of Threats (FiGHT). The authors argue that this gap makes it hard to connect architectural weaknesses with specific protocol behaviours and attack sequences.

MASAR has three layers. Layer 1, strategic threat mapping, assigns STRIDE categories to components, data flows and trust boundaries in a data-flow diagram. Layer 2, logical attack-path decomposition, turns each threat into a directed acyclic graph whose leaves are atomic protocol actions or conditions and whose internal nodes combine prerequisites with AND or OR logic. Layer 3, operational synthesis, maps the leaf actions to existing FiGHT techniques or records them as candidate techniques that need further assessment. The paper states that this mapping does not by itself establish protocol exploitability or the novelty of a technique.

The framework is evaluated on a 5G-ready IP Multimedia Subsystem (IMS) architecture with two signalling scenarios: an early-media billing bypass through SIP provisional signalling, and subscriber information disclosure and topology discovery through the Diameter Cx interface. Each scenario is also written as a MiniZinc constraint-satisfaction model, where the negation of a safety property is searched for a violating execution trace.

## Summary (ZH)
该论文（17 页、5 幅图）提出 MASAR，一个面向电信网络的形式化威胁建模框架，试图弥合 STRIDE 等架构级威胁框架与 MITRE 五代威胁层级（FiGHT）等运营知识库之间的差距。作者认为，这一差距使得难以把架构弱点与具体的协议行为和攻击序列联系起来。

MASAR 分为三层。第 1 层“战略威胁映射”：在数据流图中为组件、数据流和信任边界分配 STRIDE 类别。第 2 层“逻辑攻击路径分解”：把每个威胁转化为有向无环图，叶节点是原子协议动作或条件，内部节点以 AND 或 OR 逻辑组合前提条件。第 3 层“运营综合”：把叶节点动作映射到已有的 FiGHT 技术，或记录为需要进一步评估的候选技术。论文指出，这种映射本身并不能证明协议可被利用，也不能证明技术的新颖性。

该框架在一个面向 5G 的 IP 多媒体子系统（IMS）架构上用两个信令场景评估：通过 SIP 临时（provisional）信令绕过计费的早期媒体问题，以及通过 Diameter Cx 接口披露用户信息与拓扑发现。每个场景还写成 MiniZinc 约束满足模型，通过搜索安全属性的否定来寻找违规执行轨迹。

## Key technical points (EN)
- Formalisation: a threat map from architecture nodes to STRIDE categories, an attack graph G = (V, E) with Boolean node states and AND/OR gate types, and a function mapping leaf nodes to FiGHT techniques or candidate techniques. A topological-order evaluation of the DAG decides whether the root objective is satisfied for a given assignment of leaf conditions.
- Scenario 1, early-media free ride (STRIDE category Tampering): the model tracks SIP session state (Idle, Trying, Provisional, Confirmed, Terminated), media-gate state, charging-record state and elapsed media duration over T discrete steps, and asks whether media can stay authorised in the provisional state beyond a bound without the expected charging event. The paper cites RFC 3960 for early-media security considerations.
- Scenario 2, Diameter Cx disclosure (STRIDE category Information Disclosure): an attacker with signalling access submits a user-authorisation request, bypasses insufficient peer authorisation and receives an answer containing protected subscriber or routing information, which may allow subscriber enumeration or reveal internal IMS routing.
- Constraint solving: a satisfiable result means a violating state is reachable under the modelled constraints; unsatisfiable means none exists within the model and search bounds. The authors state that a satisfying assignment does not show the same behaviour in every implementation and that bounded verification does not rule out vulnerabilities outside the bounds. Executable MiniZinc specifications are given in an appendix.
- Countermeasures discussed for the first scenario include configurable limits on early-media duration with an applicable charging policy or termination; the paper lists three measures for this scenario and a separate set for the Diameter Cx scenario, tied to the signalling procedures and trust boundaries involved.
- Stated limits: attack-graph construction is analyst-guided, automated DAG generation is left as future work, and the framework relies on models whose completeness the analyst must judge.

## Key technical points (ZH)
- 形式化：从架构节点到 STRIDE 类别的威胁映射；带布尔节点状态与 AND/OR 门类型的攻击图 G = (V, E)；以及把叶节点映射到 FiGHT 技术或候选技术的函数。按拓扑序对 DAG 求值，可判断在给定叶条件赋值下根目标是否被满足。
- 场景 1，早期媒体免费使用（STRIDE 类别为 Tampering）：模型在 T 个离散步骤上跟踪 SIP 会话状态（Idle、Trying、Provisional、Confirmed、Terminated）、媒体门状态、计费记录状态和媒体已持续时长，询问媒体是否可以在临时状态下超过某一界限仍保持授权而没有预期的计费事件。论文引用 RFC 3960 中关于早期媒体的安全考量。
- 场景 2，Diameter Cx 信息披露（STRIDE 类别为 Information Disclosure）：拥有信令接入的攻击者提交用户授权请求，绕过不充分的对端授权，得到包含受保护用户或路由信息的应答，可能导致用户枚举或暴露 IMS 内部路由。
- 约束求解：可满足结果表示在建模约束下可达到违规状态；不可满足表示在模型与搜索界限内不存在此类状态。作者指出，满足赋值并不表明每个实现中都存在同样行为，有界验证也不能排除界限之外的漏洞。可执行的 MiniZinc 规格在附录中给出。
- 针对第一个场景讨论的对策包括：为早期媒体时长设置可配置上限并配合相应的计费策略或终止；论文针对该场景列出三项措施，并为 Diameter Cx 场景另列一组与相关信令流程和信任边界对应的措施。
- 作者说明的局限：攻击图构建由分析人员引导，自动生成 DAG 留作未来工作，框架依赖于分析人员需自行判断完整性的模型。

## Why it matters / what's new (EN)
The paper contributes a methodology rather than a measured vulnerability: its evidence is two worked IMS scenarios and their constraint models, not tests against deployed equipment. Its Diameter Cx scenario touches the same interface family as the 2026-10-20 LENS entry (field-level exploitability, with implementation testing); MASAR instead reasons from architecture to protocol state at the model level. For the cellular-security bin it links STRIDE-style threat classification to MITRE FiGHT technique records through explicit attack graphs and solver-checked reachability.

## Why it matters / what's new (ZH)
该论文贡献的是方法论而非实测漏洞：其证据是两个 IMS 示例场景及其约束模型，而非针对已部署设备的测试。它的 Diameter Cx 场景与 2026-10-20 的 LENS 条目（字段级可利用性、含实现测试）涉及同一接口族；MASAR 则在模型层面从架构推理到协议状态。在蜂窝安全主题下，它通过显式攻击图和求解器检查的可达性，把 STRIDE 式威胁分类与 MITRE FiGHT 技术记录联系起来。

## Images

None.
