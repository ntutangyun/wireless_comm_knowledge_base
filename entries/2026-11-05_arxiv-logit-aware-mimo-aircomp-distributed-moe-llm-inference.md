---
id: 2026-11-05_arxiv-logit-aware-mimo-aircomp-distributed-moe-llm-inference
date_published: 2026-09-22
date_found: 2026-11-05
technology: edge-ai
type: academic-paper
title_en: "Logit-Aware MIMO AirComp for Distributed Mixture-of-Experts LLM Inference over Wireless Edge Networks"
title_zh: "面向无线边缘网络分布式混合专家 LLM 推理的 Logit 感知 MIMO 空中计算"
url: "https://arxiv.org/abs/2610.03741"
source_quality: full
topics: [AirComp, MIMO, mixture-of-experts, LLM-inference, base-station-cluster, logit-sensitivity]
topic_primary: over-the-air-computation
topics_secondary: [compute-offloading, edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

In distributed mixture-of-experts (MoE) inference at the wireless edge, sparse experts are placed on coordinated base stations (BSs) while an anchor node and user equipment offload LLM inference to them. Before each decoding step the anchor BS must recover a weighted sum of the selected experts' outputs, and the paper (Zhang, Jia, Cao, Wang, Ren and Cui) identifies this aggregation as the communication bottleneck. Over-the-air computation (AirComp) suits it because the multiple-access channel superposes simultaneous transmissions.

The authors' point is that conventional AirComp minimises plain communication distortion, whereas aggregation errors in an MoE do not affect the LLM output equally. They estimate local logit sensitivity as block-level weights and use them in a logit-aware MIMO AirComp design that jointly optimises receive combiners and BS precoders under per-BS power limits, with an alternating algorithm intended to protect decoding decisions from aggregation perturbations.

The evaluation combines a perturbation replay of Qwen3-30B-A3B-Instruct-2507-FP8 on GSM8K and ARC-Challenge (OpenCompass), a closed-loop ARC-Challenge audit over 295 examples, and a wireless simulator with 16 aggregation blocks. The wireless channel is simulated; nothing was measured over a real link. At 30 dB aggregation SNR the perturbed model retains 99.3% of clean GSM8K accuracy and 94.8% of clean ARC-Challenge accuracy. In the closed-loop audit the proposed method reaches 43.73% accuracy at 30 dB and 26.78% at 20 dB, ahead of unweighted, matched-filter and zero-forcing AirComp; at 20 dB its final weighted-sum MSE is 53.5% lower than unweighted AirComp under the same channels and weights.

## Summary (ZH)

在无线边缘的分布式混合专家（MoE）推理中，稀疏专家被放置在协同的基站（BS）上，锚点节点与用户设备把 LLM 推理卸载到这些基站。每个解码步之前，锚点基站必须恢复所选专家输出的加权和；本文（Zhang、Jia、Cao、Wang、Ren、Cui）指出该聚合是通信瓶颈。空中计算（AirComp）正适合这一操作，因为多址信道天然叠加同时发送的信号。

作者的出发点是：传统 AirComp 只最小化普通的通信失真，而 MoE 中的聚合误差对 LLM 输出的影响并不均等。他们把局部 logit 敏感度估计为分块权重，用于 Logit 感知的 MIMO AirComp 设计：在每基站功率约束下联合优化接收合并器与基站预编码器，并以交替算法保护解码决策免受聚合扰动影响。

评估包括：在 GSM8K 与 ARC-Challenge（OpenCompass）上对 Qwen3-30B-A3B-Instruct-2507-FP8 的扰动重放、295 个样例的 ARC-Challenge 闭环审计，以及含 16 个聚合块的无线仿真器。无线信道为仿真，没有真实链路实测。聚合信噪比 30 dB 时，受扰模型保留了无扰动 GSM8K 准确率的 99.3% 和 ARC-Challenge 的 94.8%。闭环审计中，所提方法在 30 dB 下准确率为 43.73%，20 dB 下为 26.78%，优于无加权、匹配滤波和迫零 AirComp；20 dB 下其最终加权和 MSE 比相同信道与权重下的无加权 AirComp 低 53.5%。

## Key technical points (EN)

- System: MoE experts on coordinated BSs; anchor BS aggregates a weighted sum of selected expert outputs before each decoding step via MIMO AirComp.
- Logit-sensitivity weights (Jacobian-motivated weights, estimated by finite differences) replace plain MSE as the AirComp objective, targeting next-token preservation.
- Joint receive-combiner and BS-precoder optimisation under per-BS power constraints; alternating algorithm with monotonic convergence of the fixed-weight inner loop.
- Evaluation: Qwen3 perturbation replay (GSM8K, ARC-Challenge), 295-example closed-loop audit, simulated wireless blocks. Channel simulated.
- Reported: 99.3% / 94.8% accuracy retention at 30 dB; 43.73% (30 dB) and 26.78% (20 dB) closed-loop ARC accuracy; 53.5% lower weighted MSE than unweighted AirComp at 20 dB.
- Comments field: 13 pages, 9 figures.

## Key technical points (ZH)

- 系统：MoE 专家位于协同基站；锚点基站在每个解码步之前通过 MIMO AirComp 聚合所选专家输出的加权和。
- 以 logit 敏感度权重（受雅可比启发、通过有限差分估计）取代普通 MSE 作为 AirComp 目标，目标是保持下一 token 不变。
- 在每基站功率约束下联合优化接收合并器与基站预编码器；交替算法，固定权重内循环单调收敛。
- 评估：Qwen3 扰动重放（GSM8K、ARC-Challenge）、295 样例闭环审计、仿真无线块。信道为仿真。
- 报告结果：30 dB 下准确率保留 99.3% / 94.8%；闭环 ARC 准确率 43.73%（30 dB）与 26.78%（20 dB）；20 dB 下加权 MSE 比无加权 AirComp 低 53.5%。
- 备注：13 页，9 幅图。

## Why it matters / what's new (EN)

The paper links PHY-layer aggregation error to LLM output quality by weighting AirComp distortion by its local effect on next-token logits.

See also: `2026-08-28_arxiv-airmoe-over-the-air-moe-wireless-edge`.

The channel is simulated. The paper states that a broader claim "requires extending the closed-loop audit to more channel seeds, additional SNRs, additional tasks, and fully online CSI".

## Why it matters / what's new (ZH)

本文按 AirComp 失真对下一 token logit 的局部影响加权，把物理层聚合误差与 LLM 输出质量联系起来。

另见：`2026-08-28_arxiv-airmoe-over-the-air-moe-wireless-edge`。

信道为仿真。论文指出，若要得出更广泛的结论，「需要把闭环审计扩展到更多信道随机种子、更多信噪比、更多任务以及完全在线的 CSI」。

## Images

*(No redistributable images for this entry.)*
