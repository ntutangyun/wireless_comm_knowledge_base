---
id: 2026-10-14_arxiv-compositional-co-design-communication-control-b6g
date_published: 2026-10-07
date_found: 2026-10-14
type: academic-paper
technology: cellular
title_en: "A Compositional Perspective on Communication-Control Co-Design for Mobile Broadband Systems Beyond 6G"
title_zh: "面向 6G 之后移动宽带系统的通信-控制协同设计的组合视角"
url: "https://arxiv.org/abs/2610.10486"
source_quality: full
topics: [B6G, co-design, monotone-DPI, cyber-physical, ISCAC, CPIE, IMT-2030, Pareto-front]
topic_primary: 6g-vision
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Angelo Vera-Rivera, Atefeh Termehchi and Ekram Hossain (University of Manitoba) argue that beyond-6G (B6G) mobile broadband will need communication and control subsystems co-designed inside the network architecture, and that the usual optimization-driven co-design (one joint optimization problem with subsystem models embedded in it) has three difficulties: modular subsystem representation, tracing how requirements propagate across subsystems, and analysing design-space feasibility as the number of interacting subsystems grows. The article presents a composition-driven alternative based on the formal theory of co-design.

The paper builds on a conceptual B6G connectivity framework the authors say they proposed earlier in 2026, which names two usage scenarios needing native control: Cyber-Physical Immersive Environments (CPIE, evolving from IMT-2030 immersive communication) and Integrated Sensing, Communication and Control (ISCAC, extending ISAC with RAN-edge controllers that close a loop with autonomous machines). The methodology has four stages. Stage I models each subsystem as a design problem with implementation (DPI): a set of functionalities F, a set of resources R, and a feasibility map h from each required functionality to its Pareto front of minimal resource allocations (monotone DPIs guarantee more demanding functionality never needs fewer resources). Stage II composes DPIs with series, parallel and loop operators into a co-design problem with implementation; monotonicity is preserved under composition. Stage III evaluates the feasibility map of the composed system, yielding Pareto fronts. Stage IV selects a final design from the Pareto set using an application-specific objective; in the case study, with a 0.1 mW uplink power budget, the strict requirement is infeasible while the medium and relaxed ones need minimum bandwidths of about 6.1 kHz and 1.3 kHz. The authors also describe a potential offline-online split: compositional analysis offline, then online selection among the Pareto-optimal alternatives as requirements and resources change.

The running case study is wireless-assisted robotic control: a robot unit (RU) reports its state uplink through the RAN to an edge controller (K), with a management module (MM) exposing the requested control functionality (maximum position error epsilon within time T_max). RU, K, RAN and MM are composed (RAN to RU in series, RU and K in a loop, K to MM in series) into a black box that consumes bandwidth B and uplink transmit power P. Pareto fronts in the (B, P) plane are shown for relaxed (0.1 m, 2 s), medium (0.05 m, 1 s) and strict (0.02 m, 0.5 s) targets, with e0 = 1.0 m, rho = 0.8, L = 1024 bits, g = -120 dB and N0 = 4e-21 W/Hz; stricter functionality consumes more communication resources, as the monotone model predicts. The authors discuss how the two co-design approaches can complement each other and list research challenges. This is a perspective article with an illustrative case study rather than a performance evaluation.

## Summary (ZH)
Angelo Vera-Rivera、Atefeh Termehchi 与 Ekram Hossain（曼尼托巴大学）认为，6G 之后（B6G）的移动宽带需要在网络架构内对通信与控制子系统进行协同设计；而常见的优化驱动协同设计（把子系统模型嵌入一个联合优化问题）存在三个困难：子系统的模块化表示、需求在子系统间传播的追踪，以及随交互子系统数量增加对设计空间可行性的分析。文章提出一种基于协同设计形式化理论的组合驱动替代方案。

文章建立在作者称其于 2026 年早些时候提出的 B6G 概念性连接框架之上，该框架提出两类需要原生控制能力的使用场景：赛博-物理沉浸环境（CPIE，由 IMT-2030 沉浸式通信演进而来）以及集成感知、通信与控制（ISCAC，在 ISAC 基础上加入与自主机器形成闭环的 RAN 边缘控制器）。方法分四个阶段。阶段 I 把每个子系统建模为带实现的设计问题（DPI）：功能集 F、资源集 R，以及把每个所需功能映射到其最小资源配置 Pareto 前沿的可行性映射 h（单调 DPI 保证更高要求的功能不会需要更少的资源）。阶段 II 用串联、并联与回环算子把 DPI 组合成带实现的协同设计问题；组合保持单调性。阶段 III 评估组合系统的可行性映射，得到 Pareto 前沿。阶段 IV 依据具体应用的目标从 Pareto 集合中选定最终设计；在案例中，上行功率预算为 0.1 mW 时严格要求不可行，中等与宽松要求所需的最小带宽分别约为 6.1 kHz 和 1.3 kHz。作者还提出一种可能的离线-在线分工：离线进行组合分析，随后在需求与资源变化时在线从 Pareto 最优方案中选择。

贯穿全文的案例是无线辅助机器人控制：机器人单元（RU）经 RAN 向边缘控制器（K）上行报告状态，管理模块（MM）对外提供所请求的控制功能（在时间 T_max 内达到最大位置误差 epsilon）。RU、K、RAN 与 MM 被组合（RAN 到 RU 串联，RU 与 K 回环，K 到 MM 串联）为一个黑盒，消耗带宽 B 与上行发射功率 P。文中给出宽松（0.1 m，2 s）、中等（0.05 m，1 s）与严格（0.02 m，0.5 s）目标下 (B, P) 平面上的 Pareto 前沿，参数为 e0 = 1.0 m、rho = 0.8、L = 1024 bit、g = -120 dB、N0 = 4e-21 W/Hz；更严格的功能消耗更多通信资源，与单调模型的预期一致。作者讨论了两种协同设计方法如何互补，并列出研究挑战。这是一篇带示例性案例的观点文章，而非性能评估。

## Key technical points (EN)
- **Claim**: B6G needs communication-control co-design; optimization-driven co-design struggles with modularity, requirement tracing and feasibility analysis.
- **Method (4 stages)**: (I) subsystem DPIs with functionality-resource feasibility maps; (II) series / parallel / loop composition (monotonicity preserved); (III) feasibility and Pareto analysis of the composed system; (IV) Pareto-informed design selection (case study at a 0.1 mW uplink power budget: strict target infeasible, medium and relaxed need about 6.1 kHz and 1.3 kHz minimum bandwidth).
- **Potential offline-online split**: compositional analysis offline, Pareto-alternative selection online.
- **Scenarios named**: CPIE and ISCAC (from the authors' earlier 2026 B6G framework).
- **Case study**: wireless-assisted robot control (RU, edge controller K, RAN, MM); Pareto fronts in (bandwidth B, transmit power P) for relaxed / medium / strict (epsilon, T_max) targets.
- **Nature**: perspective article; case study is illustrative, not a benchmark.

## Key technical points (ZH)
- **主张**：B6G 需要通信-控制协同设计；优化驱动的协同设计在模块化、需求追踪与可行性分析方面存在困难。
- **方法（四阶段）**：(I) 带功能-资源可行性映射的子系统 DPI；(II) 串联/并联/回环组合（保持单调性）；(III) 组合系统的可行性与 Pareto 分析；(IV) 基于 Pareto 的设计选择（案例中上行功率预算 0.1 mW 时严格目标不可行，中等与宽松目标所需最小带宽约 6.1 kHz 与 1.3 kHz）。
- **可能的离线-在线分工**：离线做组合分析，在线选择 Pareto 备选方案。
- **提到的场景**：CPIE 与 ISCAC（来自作者 2026 年早些时候的 B6G 框架）。
- **案例**：无线辅助机器人控制（RU、边缘控制器 K、RAN、MM）；宽松/中等/严格 (epsilon, T_max) 目标下 (带宽 B, 发射功率 P) 平面的 Pareto 前沿。
- **性质**：观点文章；案例为示例性，并非基准测试。

## Why it matters / what's new (EN)
Records a design-methodology proposal for 6G-and-beyond networks that carry native control loops, framed around two B6G usage scenarios the authors propose (CPIE and ISCAC), which extend IMT-2030's immersive communication and ISAC. It is a perspective with an illustrative case study; no measured or simulated comparison against optimization-driven co-design is reported.

## Why it matters / what's new (ZH)
记录了一种面向承载原生控制环的 6G 及以后网络的设计方法论提案，以作者提出的两类 B6G 使用场景（CPIE 与 ISCAC，分别由 IMT-2030 的沉浸式通信与 ISAC 扩展而来）为背景。这是一篇带示例性案例的观点文章，未报告与优化驱动协同设计的实测或仿真对比。

## Images
None.
