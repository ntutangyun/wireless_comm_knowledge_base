---
id: 2026-09-18_arxiv-supersensedoctor-multimodal-wifi-bfi-health-agent
date_published: 2026-08-27
date_found: 2026-09-18
technology: wifi
type: academic-paper
title_en: "SuperSenseDoctor: A Multimodal and Contactless Agent for Health Tracking"
title_zh: "SuperSenseDoctor：面向健康追踪的多模态非接触式智能体"
url: "https://arxiv.org/abs/2609.16257"
source_quality: full
topics: [WiFi-sensing, BFI, mmWave-radar, multimodal-fusion, LLM-agent]
topic_primary: sensing-csi
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

This paper (Xuwen Zhang, Zijian Lu, Yicheng Lei, Rui Qiu, Jiale Li, Yiping Zuo, Weibei Fan, Fu Xiao) opens from a stated need to monitor older adults living independently at home, arguing that cameras, wearables, and manual checks "often introduce privacy, adherence, and attention burdens that hinder sustained health monitoring." Their system, SuperSenseDoctor, combines three contactless sensing modalities -- WiFi, mmWave radar, and surface temperature -- into what the paper calls a "persistent human health state," then layers a rule-based-plus-LLM agent on top to turn that state into care actions. Notably, the WiFi modality here is **WiFi Beamforming Feedback Information (BFI)** rather than Channel State Information (CSI); the paper states BFI "works with commodity WiFi hardware, covers a wider room area, and is more practical for engineering deployment than CSI," and the prototype sources it from a commodity Comfast WU785AC access point. Both the WiFi BFI and the mmWave radar (a TI AWR1843) streams are processed with the same signal-processing pipeline -- PSR-DFE subcarrier selection followed by IVY-SVMD decomposition -- to isolate respiratory and cardiac periodic components, while a thermal sensor (MLX90640) supplies body-surface-temperature context.

The system's architecture is organized as four stages: multimodal sensing; a fusion stage that arbitrates evidence from each modality into a single "StateObject" carrying confidence, quality flags, and provenance rather than collapsing disagreement into one blended number; an event-driven agent layer with a deterministic "Nurse Agent" that screens states against thresholds and baselines (falls, baseline shifts, and modality conflicts trigger typed events without invoking any language model), and a "Diagnosis Agent" that is LLM-based (an OpenAI-compatible model, with a local-model option) but is described as "a bounded reviewer of standardized evidence rather than an open diagnostic oracle," receiving only the structured StateObject and policy cards rather than raw sensor streams; and a final action/reporting stage that issues tiered (L0-L4) responses from plain observation up to emergency routing, with a full audit trail persisted to SQLite. The paper frames its contribution as this arbitration-preserving fusion plus auditable agent loop, contrasting it with prior approaches that either "hide cross-modal evidence behind one estimate" or feed raw sensor streams directly to a language model, which the authors say is "costly and difficult to audit."

Evaluation used ground truth from a Huawei Watch GT 3 (heart rate), a respiration belt (respiratory rate), and labeled event replays (falls), covering 2,686 one-second state rows across 9 chronological intervals. WiFi BFI alone reached 4.237 bpm MAE / 4.396 bpm RMSD for heart rate and 2.689 bpm MAE / 3.293 bpm RMSD for respiratory rate; mmWave alone was somewhat better (4.121 / 4.290 bpm heart rate; 1.629 / 1.876 bpm respiratory rate); after multimodal fusion, the combined pipeline reached 1.994 bpm MAE / 3.142 bpm RMSD for heart rate and 0.197 bpm MAE / 0.263 bpm RMSD for respiratory rate -- a 51.6-52.9% relative MAE improvement for heart rate and 87.9-92.7% for respiratory rate over either single modality -- plus 96.5% fall-recognition accuracy. Separately, the agent layer itself was scored against 60 deterministic-screening cases, 24 modality-conflict fusion cases, and 24 hidden-answer triage scenarios, reaching a 96.7% (206/213) criterion-level pass rate; latency was 0.56 ms (P95) for deterministic checks versus 6,560.7 ms (P95) when the LLM-based Diagnosis Agent was invoked.

## Summary (ZH)

本文（Xuwen Zhang、Zijian Lu、Yicheng Lei、Rui Qiu、Jiale Li、Yiping Zuo、Weibei Fan、Fu Xiao）从独立居家老年人监护的现实需求出发，指出摄像头、可穿戴设备与人工巡检"往往带来隐私、依从性与关注负担等问题，难以支撑持续性的健康监测"。其系统 SuperSenseDoctor 将三种非接触式感知模态——WiFi、毫米波雷达与体表温度——融合为论文所称的"持续性人体健康状态"，并在此基础上叠加一个"规则 + 大模型"的智能体层，将该状态转化为具体的照护行动。值得注意的是，本文所用的 WiFi 模态是 **WiFi 波束成形反馈信息（BFI）**而非信道状态信息（CSI）；论文指出 BFI"可在商用 WiFi 硬件上使用，覆盖房间范围更广，相较 CSI 更便于工程部署"，原型系统即从一台商用 Comfast WU785AC 接入点获取该信息。WiFi BFI 与毫米波雷达（TI AWR1843）两路信号采用相同的信号处理流程——PSR-DFE 子载波选择后接 IVY-SVMD 分解——以分离呼吸与心跳的周期性成分；热成像传感器（MLX90640）则提供体表温度背景信息。

系统架构分为四个阶段：多模态感知；融合阶段将各模态证据仲裁为单一的"StateObject"（状态对象），其中保留置信度、质量标记与来源信息，而非将各模态间的分歧折叠为单一数值；事件驱动的智能体层，其中确定性的"Nurse Agent（护士智能体）"依据阈值与基线对状态进行筛查（跌倒、基线漂移与模态冲突均触发带类型的事件，且无需调用任何语言模型），而"Diagnosis Agent（诊断智能体）"基于大语言模型（兼容 OpenAI 接口的模型，亦可选本地模型），论文将其定位为"对标准化证据进行有界审查的角色，而非开放式诊断神谕"，其仅接收结构化的 StateObject 与策略卡片，而非原始传感器数据流；最后的行动/上报阶段给出分级（L0–L4）响应，从单纯观察到紧急转介不等，并将完整审计轨迹持久化至 SQLite。论文将其贡献定位为这种"保留仲裁信息的融合 + 可审计智能体闭环"，并将其与以往"将跨模态证据隐藏在单一估计值背后"或"将原始传感器数据流直接交给语言模型"（作者称此举"成本高且难以审计"）的做法相对照。

评估采用华为 Watch GT 3（心率）、呼吸带（呼吸率）与标注事件回放（跌倒）作为真值，覆盖 9 个按时间顺序排列的区间、共 2686 条一秒粒度的状态记录。仅使用 WiFi BFI 时，心率 MAE/RMSD 为 4.237/4.396 bpm，呼吸率为 2.689/3.293 bpm；仅使用毫米波时表现略优（心率 4.121/4.290 bpm，呼吸率 1.629/1.876 bpm）；经多模态融合后，整体流程达到心率 MAE/RMSD 1.994/3.142 bpm、呼吸率 MAE/RMSD 0.197/0.263 bpm——相较任一单一模态，心率 MAE 相对提升 51.6%–52.9%，呼吸率相对提升 87.9%–92.7%；跌倒识别准确率为 96.5%。此外，智能体层本身在 60 个确定性筛查用例、24 个模态冲突融合用例与 24 个隐藏答案分诊场景上进行了单独评测，达到 96.7%（206/213）的准则级通过率；确定性检查的时延为 0.56 毫秒（P95），而调用基于大模型的 Diagnosis Agent 时时延为 6560.7 毫秒（P95）。

## Key technical points (EN)

- **WiFi modality**: BFI (Beamforming Feedback Information), not CSI -- sourced from a commodity Comfast WU785AC access point, chosen for wider room-area coverage and easier deployment than CSI.
- **Shared signal processing**: WiFi BFI and mmWave radar (TI AWR1843) both go through PSR-DFE subcarrier selection followed by IVY-SVMD decomposition to isolate respiratory/cardiac periodic components; thermal sensing via MLX90640.
- **Architecture**: 4 stages -- multimodal sensing -> arbitration-based fusion into a confidence/quality/provenance-carrying "StateObject" -> event-driven agent layer (deterministic "Nurse Agent" + LLM-based "Diagnosis Agent" acting as a bounded reviewer of standardized evidence) -> tiered (L0-L4) action/reporting with SQLite audit trail.
- **WiFi-only results**: 4.237 bpm MAE / 4.396 bpm RMSD (heart rate), 2.689 bpm MAE / 3.293 bpm RMSD (respiratory rate).
- **Fused results**: 1.994 bpm MAE / 3.142 bpm RMSD (heart rate, 51.6-52.9% relative improvement over single modality), 0.197 bpm MAE / 0.263 bpm RMSD (respiratory rate, 87.9-92.7% relative improvement); 96.5% fall-recognition accuracy.
- **Agent-layer evaluation**: 96.7% (206/213) criterion-level checklist pass rate across 60 deterministic-screening + 24 fusion-conflict + 24 hidden-answer triage cases; 0.56 ms P95 latency for deterministic checks vs. 6,560.7 ms P95 when the LLM is invoked.
- **Evaluation scale**: 2,686 one-second state rows across 9 chronological intervals; ground truth from a Huawei Watch GT 3, a respiration belt, and labeled fall-event replays.

## Key technical points (ZH)

- **WiFi 模态**：使用 BFI（波束成形反馈信息）而非 CSI——来自商用 Comfast WU785AC 接入点，选用理由是覆盖房间范围更广、比 CSI 更易于部署。
- **共用信号处理**：WiFi BFI 与毫米波雷达（TI AWR1843）均经 PSR-DFE 子载波选择后接 IVY-SVMD 分解，以分离呼吸/心跳周期性成分；体表温度由 MLX90640 热成像传感器提供。
- **系统架构**：四阶段——多模态感知 → 基于仲裁的融合，生成携带置信度/质量标记/来源信息的"StateObject" → 事件驱动智能体层（确定性的"Nurse Agent" + 作为标准化证据有界审查者的大模型"Diagnosis Agent"） → 分级（L0–L4）行动/上报，并以 SQLite 保存审计轨迹。
- **纯 WiFi 结果**：心率 MAE/RMSD 为 4.237/4.396 bpm，呼吸率为 2.689/3.293 bpm。
- **融合结果**：心率 MAE/RMSD 为 1.994/3.142 bpm（相对单一模态提升 51.6%–52.9%），呼吸率 MAE/RMSD 为 0.197/0.263 bpm（相对提升 87.9%–92.7%）；跌倒识别准确率 96.5%。
- **智能体层评测**：60 个确定性筛查、24 个融合冲突、24 个隐藏答案分诊场景，合计准则级通过率 96.7%（206/213）；确定性检查时延 0.56 毫秒（P95），调用大模型时时延为 6560.7 毫秒（P95）。
- **评测规模**：9 个按时间顺序排列区间、共 2686 条一秒粒度状态记录；真值来自华为 Watch GT 3、呼吸带与标注跌倒事件回放。

## Why it matters / what's new (EN)

The KB's `sensing-csi` coverage has so far been almost entirely CSI-based; this is the first entry in this KB's `sensing-csi` bin to use WiFi **BFI** for vital-sign / health sensing; prior BFI entries in the KB (BFId person identification, 2026-08-19; BFIAttack, 2026-05-25) sit under `security-privacy`. The authors explicitly justify BFI as a more commodity-hardware-friendly alternative to CSI for wide-room-coverage vital-sign sensing. It also pairs WiFi sensing with an LLM agent layer designed to reason only over structured, provenance-carrying sensor state rather than raw streams -- reported with concrete latency numbers (0.56 ms deterministic vs. 6.56 s LLM-invoked) that quantify the cost of invoking the language model in this kind of sensing-to-action pipeline.

## Why it matters / what's new (ZH)

知识库现有的 `sensing-csi`（Wi-Fi 感知/CSI）条目此前几乎全部基于 CSI；本条目是本知识库 `sensing-csi` 分类下首条以 WiFi **BFI** 用于生命体征/健康感知的条目；知识库中此前的 BFI 相关条目（BFId 人员身份识别，2026-08-19；BFIAttack，2026-05-25）归于 `security-privacy` 分类。作者明确将 BFI 作为相较 CSI 更适配商用硬件、覆盖房间范围更广的替代方案。该工作还将 WiFi 感知与一个大模型智能体层相结合，后者被设计为仅对结构化、带来源信息的传感器状态进行推理，而非直接处理原始数据流——论文给出了具体的时延数字（确定性检查 0.56 毫秒 vs. 调用大模型 6.56 秒），量化了在此类"感知到行动"流程中调用语言模型的代价。

## Images

![System architecture: multimodal sensing to state fusion to agent-driven action | 系统架构：多模态感知—状态融合—智能体驱动行动](https://arxiv.org/html/2609.16257v1/supersensedoctor_system_design_handdrawn_16x9.png)
![Heart-rate tracking example across modalities | 各模态心率追踪示例](https://arxiv.org/html/2609.16257v1/heart_rate.png)
![Respiratory-rate tracking example across modalities | 各模态呼吸率追踪示例](https://arxiv.org/html/2609.16257v1/respiration.png)
