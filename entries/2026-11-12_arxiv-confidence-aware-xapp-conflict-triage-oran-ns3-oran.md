---
id: 2026-11-12_arxiv-confidence-aware-xapp-conflict-triage-oran-ns3-oran
date_published: 2026-11-10
date_found: 2026-11-12
type: academic-paper
technology: cellular
title_en: "Confidence-Aware xApp Conflict Triage in Open RAN: A Closed-Loop ns3-oran Evaluation"
title_zh: "Open RAN 中的置信度感知 xApp 冲突分诊：闭环 ns3-oran 评估"
url: "https://arxiv.org/abs/2611.13516"
source_quality: full
topics: [Open-RAN, xApp-conflict, conformal-prediction, ns3-oran, 5G-LENA, energy-saving, CCO]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)

Wadud, Golpayegani and Afraz study conflicts in Open RAN, where independent xApps request changes to the same radio parameter to optimise their own KPIs. Conflict management that reacts to KPI degradation usually resolves a conflict immediately, without asking how long the degradation lasts or whether the network would recover by itself, which can waste radio-unit energy on unnecessary interventions. The paper adds a confidence-aware triage layer between conflict detection and mitigation: it calibrates prediction intervals from past prediction errors, then decides per conflict whether to tolerate, defer or mitigate, based on the degraded-KPI prediction confidence and the persistence of the conflict.

It is evaluated on one conflict pair, coverage and capacity optimisation (CCO) versus energy saving (ES), which issue opposing transmit-power requests and affect RSRP, in a closed-loop ns3-oran simulation with 5G-LENA. The method makes 30% fewer interventions than fixed priority while keeping RU energy efficiency, improves it by 2.6% over a no-mitigation baseline, and keeps a statistical safety guarantee for RSRP.

## Summary (ZH)

Wadud、Golpayegani 与 Afraz 研究 Open RAN 中的冲突：相互独立的 xApp 为优化各自的 KPI 而请求修改同一个无线参数。依据 KPI 劣化来响应的冲突管理通常立即处理冲突，而不考虑劣化持续多久、网络是否会自行恢复，可能因不必要的干预而浪费射频单元能耗。本文在冲突检测与冲突缓解之间增加一个置信度感知的分诊层：利用过去的预测误差校准预测区间，再根据劣化 KPI 的预测置信度和冲突持续性，对每个冲突决定容忍、推迟还是缓解。

评估针对一对冲突，即覆盖与容量优化（CCO）对节能（ES），二者对发射功率提出相反请求并影响 RSRP，在带 5G-LENA 的 ns3-oran 闭环仿真中进行。该方法的干预次数比固定优先级少 30%，同时保持 RU 能效，比无缓解基线提高 2.6%，并保持对 RSRP 的统计安全保证。

## Key technical points (EN)

- Pipeline: the triage layer sits between the conflict detection component (CDC) and the conflict mitigation component (CMC). A predicted KPI outcome is labelled safe when even the pessimistic bound meets the protected constraint, unsafe when the optimistic outcome violates it, and uncertain otherwise.
- Decision rule: safe conflicts are tolerated, unsafe ones are mitigated, uncertain ones are deferred to the next KPI report up to a maximum number of cycles and then mitigated; when mitigation is required, the CMC picks the smallest valid control change that satisfies every protected KPI constraint.
- Statistical guarantee: the bound on the probability of an unsafe tolerated event relies on the stated assumption that calibration and future prediction errors are exchangeable.
- Evaluation: a single conflict pair (CCO vs ES over transmit power, protected KPI RSRP) in ns3-oran with 5G-LENA; an ablation shows how the decision changes as the prediction-error interval widens or shrinks.
- Stated scope: extension to more conflict types, larger xApp sets and more sophisticated KPI predictors is future work.

## Key technical points (ZH)

- 流程：分诊层位于冲突检测组件（CDC）与冲突缓解组件（CMC）之间。若预测 KPI 结果的悲观边界仍满足受保护约束，则判为安全；若乐观结果违反约束，则判为不安全；否则为不确定。
- 决策规则：安全冲突被容忍，不安全冲突被缓解，不确定冲突推迟到下一次 KPI 报告，最多推迟规定的周期数，之后再缓解；需要缓解时，CMC 选择满足所有受保护 KPI 约束的最小有效控制变更。
- 统计保证：不安全容忍事件概率的上界依赖于作者所述的假设，即校准误差与未来预测误差可交换。
- 评估：在带 5G-LENA 的 ns3-oran 中针对单个冲突对（发射功率上的 CCO 对 ES，受保护 KPI 为 RSRP）；消融实验展示了预测误差区间变宽或变窄时决策的变化。
- 适用范围：扩展到更多冲突类型、更大规模的 xApp 集合和更复杂的 KPI 预测器列为后续工作。

## Why it matters / what's new (EN)

The contribution is a decision layer that asks whether a detected xApp conflict needs mitigation at all, using calibrated prediction uncertainty, rather than another detection or resolution method. The evidence is a single xApp pair in simulation, so the 30% and 2.6% figures describe that scenario only.

## Why it matters / what's new (ZH)

本文的贡献是一个决策层，利用校准后的预测不确定性判断被检测到的 xApp 冲突是否真的需要缓解，而不是又一种检测或消解方法。证据来自仿真中的单个 xApp 对，因此 30% 和 2.6% 这两个数字仅描述该场景。

## Images

![Conflict triage pipeline | 冲突分诊流程](https://arxiv.org/html/2611.13516v1/conflict_triage_pipeline.png)
