---
id: 2026-09-16_arxiv-ai-native-open-ran-roadmap-agents
date_published: 2026-09-14
date_found: 2026-09-16
type: academic-paper
technology: cellular
title_en: "AI-Native Open RAN: A Roadmap from xApps and rApps to Autonomous Network Agents"
title_zh: "AI 原生开放无线接入网：从 xApp、rApp 到自主网络智能体的路线图"
url: "https://arxiv.org/abs/2609.15704"
source_quality: full
topics: [O-RAN, xApp, rApp, RIC, digital-twin, foundation-model, zero-trust]
topic_primary: open-ran
topics_secondary: [cellular-ai, mec]
novelty_score: 3
---

## Summary (EN)

Ryan Barker, Alireza Ebrahimi Dorcheh, Tolunay Seyfi, Mohammad Raihan Uddin, Alireza Mohammadhosseini, Julia Boone, Stephen Streit, Drew Schlesener, and Fatemeh Afghah present a structured roadmap for AI-native Open RAN, arguing that today's AI deployments in O-RAN remain "task-specific, require extensive retraining, and exhibit limited generalization across deployment environments." Rather than proposing a single new algorithm, the paper is organized as a survey-with-framework across five sections: intelligence placement across the O-RAN control stack (near-RT RIC xApps operating on a 10 ms-1 s loop, non-RT RIC rApps on a seconds-to-hours horizon, and dApps executing sub-10 ms inline logic), generalization and reusable intelligence (transfer learning, meta-learning, robust/safe optimization, federated and population-based learning, digital twins, and foundation/world models), multi-access edge computing integration, zero-trust security, and open research questions. A representative-function table (Table I) maps nine RAN functions (resource allocation, network slicing, traffic steering, connection management, intent-driven orchestration, energy management, spectrum sensing, localization, fast PHY/MAC control) to their representative observations, application type (xApp/rApp/dApp), O-RAN interface or service requirement (E2 telemetry/control, E2SM-KPM/E2SM-RC, A1 policy, lower-layer data exposure) and representative published work, citing concrete closed-loop systems from the literature — REAL (an RL xApp on the O-RAN Software Community Near-RT RIC with srsRAN), DORA (online PPO for dynamic multi-slice allocation on OpenAirInterface), SafeSlice (safe deep RL for SLA-compliant O-RAN slicing, cited alongside robust SLA-aware control and model-based safe RL as approaches that preserve operational constraints under distribution shift), and ORAN-DEFEND (subspace-based sanitization of frozen black-box DRL xApps evaluated on Colosseum's ColO-RAN telemetry, where the authors report sanitization substantially recovers policy behavior for detectable triggers while performance degrades once malicious perturbations lie within the learned "safe" subspace).

On the security side, the paper highlights that channel-quality feedback (CQI, RI, PMI, HARQ) is typically treated as trustworthy state even though "deceptive RI signaling can distort Proportional Fair (PF) scheduler behavior and disadvantage honest users through its effect on scheduler memory" — i.e., authenticated feedback is not automatically honest feedback. The roadmap section distills this and the generalization discussion into five concrete open research challenges: generalization with bounded authority (transfer envelopes over traffic/channel/topology conditions, with automatic authority reduction or fallback when a controller detects out-of-envelope operation), composition across competing intelligent functions contending for the same PRBs/power/accelerator capacity, evidence-conditioned control authority (tying the freshness/quality of observed state to the scope of permitted action), experimentally credible autonomy (tracking radio/control/application/learning clocks and staleness/latency/actuation-success metrics rather than inference latency alone), and semantic interoperability (machine-readable contracts for input semantics, units, and validated operating envelopes across O1/A1/E2 interfaces). The authors frame foundation and world models (citing LWM, SpectrumFM, ORANSight-2.0, RFPrompt as examples) as near-term contributors to representation, coordination, and intent-translation — but argue the roadmap is "not a progression from small models to larger models, nor from xApps to a single monolithic agent" but one toward intelligence that coordinates specialized functions across timescales while acquiring, exercising and relinquishing control authority according to current evidence. The stated practical path is offline evaluation → shadow operation → bounded control over selected cells, slices or services, with promotion depending on stored evidence and rollback support, and execution producing an audit trail connecting observed state, selected policy, issued action, outcome and fallback status.

## Summary (ZH)

Ryan Barker、Alireza Ebrahimi Dorcheh、Tolunay Seyfi、Mohammad Raihan Uddin、Alireza Mohammadhosseini、Julia Boone、Stephen Streit、Drew Schlesener 与 Fatemeh Afghah 提出了一份关于 AI 原生开放无线接入网（Open RAN）的结构化路线图，指出当前 O-RAN 中的 AI 部署仍然"任务专用、需要大量再训练，且在不同部署环境间的泛化能力有限"。该文并未提出单一新算法，而是以综述加框架的形式，分五个部分展开：智能功能在 O-RAN 控制栈中的部署位置（近实时 RIC 上运行 10 毫秒至 1 秒控制环的 xApp、非实时 RIC 上运行秒级至小时级的 rApp，以及执行亚 10 毫秒内联逻辑的 dApp）、可泛化与可复用智能（迁移学习、元学习、鲁棒/安全优化、联邦与群体学习、数字孪生、基础模型/世界模型）、多接入边缘计算集成、零信任安全，以及待解决的开放研究问题。一张代表性功能表（表 I）将九类 RAN 功能（资源分配、网络切片、流量导向、连接管理、意图驱动编排、能耗管理、频谱感知、定位、快速物理层/MAC 层控制）映射到其代表性观测量、应用形态（xApp/rApp/dApp）、O-RAN 接口或服务需求（E2 遥测/控制、E2SM-KPM/E2SM-RC、A1 策略、低层数据开放）与代表性文献工作，并引用了文献中具体的闭环系统——REAL（基于 O-RAN 软件社区近实时 RIC 与 srsRAN 的强化学习 xApp）、DORA（在 OpenAirInterface 上采用在线 PPO 进行动态多切片分配）、SafeSlice（面向 SLA 合规的 O-RAN 切片安全深度强化学习，与鲁棒 SLA 感知控制、基于模型的安全强化学习并列被引为在分布偏移下保持运行约束的方法），以及 ORAN-DEFEND（对冻结黑盒 DRL xApp 进行基于子空间的净化处理，在 Colosseum 的 ColO-RAN 遥测数据上评估；作者报告该方法对可检测的触发能大幅恢复策略行为，但一旦恶意扰动落入已学习的"安全"子空间内，性能即出现下降）。

在安全方面，论文指出信道质量反馈（CQI、RI、PMI、HARQ）通常被当作可信状态处理，但"欺骗性的 RI 信号上报可扭曲比例公平（PF）调度器的行为，并通过其对调度器记忆的影响使诚实用户处于不利地位"——也就是说，经过身份认证的反馈并不等同于诚实的反馈。路线图部分将这一发现与泛化能力讨论提炼为五项具体的开放研究挑战：具备有界权限的泛化能力（针对流量/信道/拓扑条件设定迁移适用范围，一旦控制器检测到超出该范围的运行状态，自动降低权限或回退）、多个相互竞争的智能功能在争夺同一 PRB/功率/加速器资源时的组合协调、以证据为条件的控制权限（将观测状态的新鲜度/质量与允许执行的动作范围相绑定）、具有实验可信度的自主性（跟踪无线、控制、应用、学习四类时钟以及陈旧度/时延/执行成功率等指标，而非仅关注推理时延）、以及语义互操作性（针对 O1/A1/E2 接口的输入语义、单位与已验证运行范围建立机器可读的契约）。作者将基础模型与世界模型（以 LWM、SpectrumFM、ORANSight-2.0、RFPrompt 为例）定位为近期在表征提取、多主体协调与意图转译方面的贡献者——但主张这条路线"既不是从小模型走向更大模型，也不是从 xApp 走向单一的单体智能体"，而是走向能够跨时间尺度协调各专业化功能、并依据当前证据获取、行使与让渡控制权限的智能。论文给出的实践路径是：离线评估 → 影子运行 → 对选定小区/切片/服务的有界控制；晋级需依赖留存证据并支持回滚，执行过程则需产生连接观测状态、所选策略、下发动作、结果与回退状态的审计轨迹。

## Key technical points (EN)

- Three-tier control-loop taxonomy: xApps on the near-RT RIC (10 ms-1 s, resource allocation/slicing/mobility), rApps on the non-RT RIC (seconds-to-hours policy/lifecycle management), dApps for sub-10 ms inline PHY/MAC logic (spectrum sensing, ISAC inference).
- Table I maps 9 RAN functions to representative observations, application type (xApp/rApp/dApp), O-RAN interface/service requirement (E2 telemetry/control, E2SM-KPM, E2SM-RC, A1 policy, lower-layer data exposure) and representative work, citing closed-loop implementations: REAL (RL xApp, OSC Near-RT RIC + srsRAN), DORA (online PPO multi-slice allocation, OpenAirInterface), SafeSlice (safe deep RL for SLA-compliant slicing), ORAN-DEFEND (subspace sanitization of frozen DRL xApps, evaluated on Colosseum ColO-RAN telemetry).
- Wireless foundation models (LWM, SpectrumFM, ORANSight-2.0, RFPrompt) pre-trained on raw IQ/CSI/spectrogram data via self-supervised learning for zero-/few-shot transfer; world models learn latent KPI/resource dynamics for offline planning.
- Digital twins / programmable testbeds cited for exposing controllers to variation without unsafe exploration on production infrastructure: proposed RAN twins, Colosseum, OpenRAN Gym; OpenRAN Gym (PAWR) and OAIC (Open AI Cellular) are also cited as platforms for evaluating system-level deployability.
- Security finding: authenticated channel feedback (CQI/RI/PMI/HARQ) is not inherently trustworthy — deceptive RI signaling can distort Proportional Fair scheduling through its effect on scheduler memory; the paper cites prior work showing channel information can be cross-checked using ACK/NACK feedback.
- Five open research challenges structuring the roadmap: (1) generalization with bounded authority via transfer envelopes and out-of-envelope fallback, (2) composition across competing xApps/rApps/dApps for shared resources, (3) evidence-conditioned control authority tied to observation freshness, (4) experimentally credible autonomy measured across radio/control/application/learning clocks rather than inference latency alone, (5) semantic interoperability via machine-readable contracts across O1/A1/E2.
- Proposed deployment progression: offline evaluation -> shadow operation -> bounded control over selected cells, slices or services; promotion depends on stored evidence and rollback support, and execution should produce an audit trail linking observed state, selected policy, issued action, outcome and fallback status.

## Key technical points (ZH)

- 三层控制环分类法：近实时 RIC 上的 xApp（10 毫秒至 1 秒，负责资源分配/切片/移动性管理）、非实时 RIC 上的 rApp（秒级至小时级的策略/生命周期管理）、执行亚 10 毫秒内联物理层/MAC 层逻辑的 dApp（频谱感知、ISAC 推理）。
- 表 I 将 9 类 RAN 功能映射到代表性观测量、应用形态（xApp/rApp/dApp）、O-RAN 接口/服务需求（E2 遥测/控制、E2SM-KPM、E2SM-RC、A1 策略、低层数据开放）与代表性工作，并引用具体闭环实现：REAL（强化学习 xApp，基于 OSC 近实时 RIC 与 srsRAN）、DORA（在 OpenAirInterface 上采用在线 PPO 进行动态多切片分配）、SafeSlice（面向 SLA 合规切片的安全深度强化学习）、ORAN-DEFEND（对冻结 DRL xApp 进行基于子空间的净化，在 Colosseum ColO-RAN 遥测数据上评估）。
- 无线基础模型（LWM、SpectrumFM、ORANSight-2.0、RFPrompt）通过自监督学习在原始 IQ 数据/CSI/频谱图上预训练，用于零样本/小样本迁移；世界模型学习 KPI/资源的潜在动态以支持离线规划。
- 引用的数字孪生/可编程测试平台，用于让控制器在不对生产设施进行不安全探索的前提下接触更广变化：提出的 RAN 孪生、Colosseum、OpenRAN Gym；OpenRAN Gym（PAWR）与 OAIC（Open AI Cellular）还被引为评估系统级可部署性的平台。
- 安全方面的发现：经过认证的信道反馈（CQI/RI/PMI/HARQ）并非天然可信——欺骗性的 RI 信号上报可通过其对调度器记忆的影响扭曲比例公平调度；论文引用既有工作指出，信道信息可借助 ACK/NACK 反馈进行交叉核验。
- 构成路线图的五项开放研究挑战：（1）通过迁移适用范围与超范围回退实现具有有界权限的泛化能力；（2）多个 xApp/rApp/dApp 在争夺共享资源时的组合协调；（3）与观测新鲜度绑定的、以证据为条件的控制权限；（4）跨无线/控制/应用/学习四类时钟衡量、而非仅关注推理时延的具有实验可信度的自主性；（5）通过 O1/A1/E2 接口上的机器可读契约实现语义互操作性。
- 提出的部署递进路径：离线评估 → 影子运行 → 对选定小区/切片/服务的有界控制；晋级需依赖留存证据并支持回滚，执行过程应产生连接观测状态、所选策略、下发动作、结果与回退状态的审计轨迹。

## Why it matters / what's new (EN)

The KB already carries several individual O-RAN AI mechanisms (e.g. the 2026-08-18 DRL/6G Open-AI-RAN survey, and multiple slicing-specific RL papers such as TriSLA and xCode). This entry is a broader synthesis rather than a single new mechanism: its contribution is a cross-cutting taxonomy that places generalization techniques (transfer/meta-learning, digital twins, foundation models) and zero-trust security concerns into one control-timescale framework, and its five-challenge roadmap gives a structured checklist — evidence-conditioned authority, bounded transfer envelopes, cross-function composition — against which future individual O-RAN AI papers in this KB can be positioned.

## Why it matters / what's new (ZH)

本知识库此前已收录若干独立的 O-RAN AI 机制条目（如 2026-08-18 的 DRL/6G Open-AI-RAN 综述，以及 TriSLA、xCode 等多篇针对切片的强化学习论文）。本条目并非提出单一新机制，而是一次更广泛的综合：其贡献在于将泛化技术（迁移/元学习、数字孪生、基础模型）与零信任安全议题，纳入统一的控制时间尺度框架之中；其五项挑战路线图（以证据为条件的权限、有界迁移适用范围、跨功能组合协调）也为本知识库未来收录的各类具体 O-RAN AI 论文提供了一份可供对照定位的结构化清单。

## Images

![Control and learning hierarchy for AI-native Open RAN: intelligence moves from long-horizon rApp policy management toward near-RT xApp control, real-time dApp radio logic, and inline execution as deadlines tighten | AI 原生开放无线接入网的控制与学习层级：智能从长周期 rApp 策略管理，向近实时 xApp 控制、实时 dApp 无线电逻辑及随时限收紧而执行的内联逻辑推进](https://arxiv.org/html/2609.15704v1/figures/O-RAN.png)
