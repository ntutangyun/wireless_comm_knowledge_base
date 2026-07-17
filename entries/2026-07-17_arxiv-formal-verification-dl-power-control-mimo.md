---
id: 2026-07-17_arxiv-formal-verification-dl-power-control-mimo
date_published: 2026-07-16
date_found: 2026-07-17
type: academic-paper
title_en: "Formal Verification for Deep Learning-based Power Control in Massive MIMO"
title_zh: "面向大规模 MIMO 深度学习功率控制的形式化验证"
url: https://arxiv.org/abs/2607.14500
source_quality: abstract_only
topics: [massive-MIMO, deep-learning, formal-verification, power-control]
topic_primary: cellular-massive-mimo
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Thanh Le, Takeshi Matsumura, Yusheng Ji and John C.S. Lui (submitted 2026-07-16) bring formal verification — mathematical proof of robustness, rather than empirical testing — to deep-learning-based power allocation in massive MIMO. The authors state this is the first attempt to formally verify deep neural networks in a *regression* setting with non-linear output constraints: prior neural-network verification work overwhelmingly targets classifiers, while wireless power control is a constrained regression problem (transmit powers must satisfy sum-power and per-antenna limits).

The framework uses abstraction-based bound propagation (DeepPoly) to bound the network's output under adversarial input perturbations. The headline result: a well-trained power-control model can *guarantee* local robustness under user-location perturbations of ±1 m while retaining at most a 1% optimality gap — i.e., an adversary (or GPS error) nudging the input positions cannot push the allocation into constraint violation or significant performance loss, and this is proven rather than sampled. Evaluation is on public massive-MIMO datasets.

## Summary (ZH)

Thanh Le、松村武、Yusheng Ji 与 John C.S. Lui（2026-07-16 提交）将形式化验证——对鲁棒性给出数学证明而非经验测试——引入大规模 MIMO 的深度学习功率分配。作者声明这是首次在带非线性输出约束的*回归*场景下对深度神经网络进行形式化验证：此前的神经网络验证工作绝大多数针对分类器，而无线功率控制是带约束的回归问题（发射功率必须满足总功率与每天线限制）。

该框架使用基于抽象的界传播（DeepPoly）在对抗性输入扰动下为网络输出定界。核心结果：训练良好的功率控制模型可以在用户位置 ±1 米扰动下*保证*局部鲁棒性，同时最优性损失不超过 1%——即攻击者（或 GPS 误差）轻推输入位置无法使分配违反约束或造成显著性能损失，且这一点是被证明而非采样得出的。评估基于公开的大规模 MIMO 数据集。

## Key technical points (EN)

- First formal verification of DNNs in a regression setting with non-linear output constraints (wireless power control).
- Method: abstraction-based bound propagation (DeepPoly) adapted to constrained regression outputs.
- Guarantee: local robustness under ±1 m user-location perturbation with ≤1% optimality gap.
- Motivation: empirical adversarial testing gives no guarantees; carrier-grade AI-RAN components need provable safety envelopes.

## Key technical points (ZH)

- 首次在带非线性输出约束的回归场景（无线功率控制）对 DNN 做形式化验证。
- 方法：适配约束回归输出的基于抽象的界传播（DeepPoly）。
- 保证：±1 米用户位置扰动下的局部鲁棒性，最优性损失 ≤1%。
- 动机：经验性对抗测试不提供保证；电信级 AI-RAN 组件需要可证明的安全包络。

## Why it matters / what's new (EN)

The KB's AI-RAN thread (e.g. 2026-06-23 LOLLA link adaptation, 2026-07-10_arxiv-adorn-oran-drift-retraining) has tracked *performance* of learned RAN components; this paper opens the *assurance* axis — how an operator certifies that a learned controller cannot be pushed out of its safe envelope. Formal robustness proofs are a plausible future requirement in O-RAN/3GPP AI-model lifecycle discussions, and the constrained-regression verification recipe generalizes to other learned allocators (scheduling, beam management).

## Why it matters / what's new (ZH)

知识库的 AI-RAN 线索（如 2026-06-23 LOLLA 链路自适应、2026-07-10_arxiv-adorn-oran-drift-retraining）此前跟踪的是学习型 RAN 组件的*性能*；本文打开了*保障*维度——运营商如何认证一个学习型控制器不会被推出其安全包络。形式化鲁棒性证明有可能成为 O-RAN/3GPP AI 模型生命周期讨论中的未来要求，且该约束回归验证方法可推广到其他学习型分配器（调度、波束管理）。
