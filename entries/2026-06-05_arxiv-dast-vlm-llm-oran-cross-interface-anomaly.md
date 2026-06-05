---
id: 2026-06-05_arxiv-dast-vlm-llm-oran-cross-interface-anomaly
date_published: 2026-06-04
date_found: 2026-06-05
type: academic-paper
technology: cellular
title_en: "DAST: A VLM-LLM Framework for Cross-Interface Anomaly Detection in O-RAN"
title_zh: "DAST：用于 O-RAN 跨接口异常检测的视觉语言-大语言模型框架"
url: "https://arxiv.org/abs/2606.06261"
source_quality: full
topics: [O-RAN, anomaly-detection, LLM, VLM, security, zero-shot]
topic_primary: open-ran
topics_secondary: [cellular-security, cellular-ai]
novelty_score: 3
---

## Summary (EN)
DAST is a zero-shot, multi-agent anomaly-detection framework for Open RAN that combines a Vision-Language Model (VLM) with a Large Language Model (LLM) to spot performance-degradation and denial-of-service attacks as they cascade across the disaggregated O-RAN interfaces. The authors observe that conventional time-series anomaly detection (TSAD) struggles in O-RAN because labelled ground truth is scarce, distribution shifts arrive faster than detectors can be retrained, and isolated per-interface detectors miss the cross-interface cascades that make up ~60% of O-RAN threats (DoS and stealthy performance degradation).

The framework runs a three-stage VLM→LLM→VLM pipeline. Stage 1 (visual profiling) renders multivariate KPI streams as vertically-stacked line-plot images and has a VLM describe the behaviour (steady periods, bursts, oscillations) in text. Stage 2 (domain reasoning) hands those textual observations to an LLM that cross-references them against explicit O-RAN domain knowledge, scoring which interfaces look suspicious — with no labelled training data. Stage 3 (targeted verification) sends a second VLM to inspect high-resolution heatmaps of the flagged metrics (threshold >0.9), pinpointing the exact anomalous time windows and assigning WG11-aligned operational-impact ratings. The output is not just a binary flag but the problematic interface, the anomalous interval, an impact rating, and a natural-language rationale.

On an open-source testbed (srsRAN + O-RAN SC + Open5GS, with injected latency/packet-loss degradations and FALCON-emulated commercial-BS traffic) spanning the E2, F1-c, F1-u, A1 and O1 interfaces, DAST reaches F1 0.910 / accuracy 0.843, versus 0.500 for the strongest baseline (TSAD Agents) and far ahead of TAMA (0.429), VLM4TS (0.408) and MSCRED (0.187). Errors are asymmetric — few false positives, more false negatives — which the authors argue is desirable for reducing alert fatigue in a NOC.

## Summary (ZH)
DAST 是面向 Open RAN 的零样本、多智能体异常检测框架，将视觉语言模型（VLM）与大语言模型（LLM）结合，用于发现在 O-RAN 解耦接口间级联传播的性能劣化与拒绝服务（DoS）攻击。作者指出，传统时间序列异常检测（TSAD）在 O-RAN 中效果不佳：标注真值稀缺、分布漂移快于重训练周期、且孤立的单接口检测器无法捕捉跨接口级联——而后者约占 O-RAN 威胁的 60%（DoS 与隐蔽性能劣化）。

框架采用三阶段 VLM→LLM→VLM 流水线。阶段一（视觉画像）将多变量 KPI 流渲染为纵向堆叠折线图，由 VLM 用文本描述其行为（平稳、突发、振荡）。阶段二（领域推理）将文本观测交给 LLM，对照显式的 O-RAN 领域知识进行交叉验证，在无标注数据的情况下为各接口的可疑程度打分。阶段三（定向核验）由第二个 VLM 检查被标记指标（阈值 >0.9）的高分辨率热力图，精确定位异常时间窗，并给出与 WG11 对齐的运行影响评级。输出不仅是二元告警，还包括问题接口、异常区间、影响评级与自然语言推理依据。

在开源测试床（srsRAN + O-RAN SC + Open5GS，注入时延/丢包劣化，并用 FALCON 模拟商用基站流量）上，覆盖 E2、F1-c、F1-u、A1、O1 接口，DAST 取得 F1 0.910 / 准确率 0.843，而最强基线 TSAD Agents 仅 0.500，远超 TAMA（0.429）、VLM4TS（0.408）与 MSCRED（0.187）。其误差呈非对称——假阳性少、假阴性较多——作者认为这有利于降低 NOC 的告警疲劳。

## Key technical points (EN)
- Three-stage VLM→LLM→VLM pipeline: visual profiling of stacked KPI plots → LLM domain reasoning against O-RAN knowledge → second-VLM heatmap verification with WG11 impact ratings.
- Zero-shot / no fine-tuning: domain knowledge is supplied as text the LLM reasons over, so the detector can be updated as specs evolve rather than retrained on new attack labels.
- Cross-interface coverage: E2, F1-c, F1-u, A1, O1 — designed to catch cascades (e.g. sustained F1-u latency as root cause vs sporadic packet loss as symptom).
- Results: F1 0.910 / acc 0.843, +0.41 F1 over the strongest baseline (TSAD Agents 0.500); beats TAMA, VLM4TS, MSCRED.
- Authors claim the first zero-shot multi-agent VLM-LLM architecture for cross-interface anomaly detection in O-RAN.

## Key technical points (ZH)
- 三阶段 VLM→LLM→VLM 流水线：堆叠 KPI 图的视觉画像 → 对照 O-RAN 知识的 LLM 领域推理 → 第二个 VLM 的热力图核验并给出 WG11 影响评级。
- 零样本/无需微调：领域知识以文本形式提供给 LLM 推理，因此可随规范演进更新，而非针对新攻击标签重训练。
- 跨接口覆盖：E2、F1-c、F1-u、A1、O1，专门捕捉级联（如以持续的 F1-u 时延为根因、零星丢包为表象）。
- 结果：F1 0.910 / 准确率 0.843，较最强基线（TSAD Agents 0.500）提升 0.41 F1；优于 TAMA、VLM4TS、MSCRED。
- 作者声称是 O-RAN 中首个用于跨接口异常检测的零样本多智能体 VLM-LLM 架构。

## Why it matters / what's new (EN)
This extends the KB's O-RAN AI strand from optimisation/orchestration (COSMO `2026-06-04_arxiv-cosmo-oran-cross-tech-multitenant-smo`, the E2E energy-efficiency testing framework `2026-06-04`/`2026-06-03` entries) into the security/assurance direction, and it does so with an LLM-reasoning angle rather than a trained classifier. Where prior agentic-RAN entries (GENESIS, AgentxGCore) put agents in the control/optimisation loop, DAST puts a VLM+LLM stack in the monitoring/anomaly loop and grounds it in WG11's threat taxonomy. The zero-shot framing is the differentiator versus classic TSAD models that need labelled baselines — a recurring pain point for O-RAN security given how fast attack patterns shift.

## Why it matters / what's new (ZH)
本条目把 KB 中 O-RAN AI 主线从优化/编排（COSMO `2026-06-04_arxiv-cosmo-oran-cross-tech-multitenant-smo`、以及 06-03/06-04 的端到端能效测试框架条目）延伸到安全/保障方向，且采用 LLM 推理而非训练分类器的思路。此前的智能体-RAN 条目（GENESIS、AgentxGCore）将智能体置于控制/优化环路，而 DAST 把 VLM+LLM 栈置于监控/异常环路，并以 WG11 威胁分类作为依据。相较需要标注基线的经典 TSAD，零样本是其关键差异——考虑到 O-RAN 攻击模式变化之快，这正是长期痛点。
