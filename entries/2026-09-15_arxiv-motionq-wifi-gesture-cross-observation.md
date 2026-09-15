---
id: 2026-09-15_arxiv-motionq-wifi-gesture-cross-observation
date_published: 2026-09-10
date_found: 2026-09-15
technology: wifi
type: academic-paper
title_en: "MotionQ: Operator-Conditioned Motion Quotients for Cross-Observation WiFi Gesture Recognition"
title_zh: "MotionQ：面向跨观测配置 WiFi 手势识别的算子条件化运动商方法"
url: "https://arxiv.org/abs/2609.11818"
source_quality: full
topics: [WiFi-sensing, CSI, gesture-recognition, domain-generalization]
topic_primary: sensing-csi
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

This paper (Xiang Zhang, Huan Yan, Geying Yang, Jianchun Liu, Tao Liu, Zhi Liu, Meng Li; a multi-institution team spanning Tianjin University, Guizhou Normal University, University of Science and Technology of China, Guangzhou University, The University of Electro-Communications, and Hefei University of Technology) addresses a specific failure mode in Wi-Fi CSI-based gesture recognition: accuracy is high in a fixed deployment but degrades when user orientation, which transceiver links are available, or the transmitter/receiver placement changes. The authors' framing is that this is not an ordinary domain-shift problem where the same signal looks different under a new condition — it's that a changed deployment geometry (the "wireless observation operator") physically exposes different components of the same underlying motion, so a feature that is informative under one link geometry can be entirely absent under another. Under a local-linear approximation of the WiFi observation process, the paper formalizes a "common task-observability" condition (Theorem 2.1); when it fails, forcing representations to look the same across geometries (as typical domain-invariance methods do) may discard information that a given geometry actually has available — the authors are explicit this does not mean invariant learning fails in general, only that it is constrained by physical observability in this regime.

MotionQ's mechanism has two parts. First, it represents a gesture not as a fixed per-link feature vector but as a "motion quotient" — a two-support discrete measure (aggregate velocity, relative velocity split between the two supports, and a balance weight) with no predefined body-part identity attached to either support, summarized via permutation-invariant central moments (mean velocity, covariance, third central moment) specifically so that the arbitrary ordering of the two supports cannot leak into the classifier as a shortcut signal. Second, rather than training for cross-geometry representation matching, MotionQ uses "single-link-retention interventions": a "smooth worst-suboperator" training objective that requires every individual single-link view of a gesture to still predict the correct label on its own, preserving link-specific task information instead of erasing it in the name of invariance. Bistatic transmitter/receiver coordinates are used analytically to compute observation vectors that condition each link's features before the motion-measure is built.

Evaluated on Widar3.0 (6 gestures: Push-Pull, Sweep, Clap, Slide, Draw-O, Draw-Zigzag) across seven cross-observation test protocols (W1-W7, covering unseen receiver combinations, full six-link coverage, source-orientation coverage, and robustness across 35 possible two-/three-link subsets), and separately on PerceptAlign (4 full-body activities: Stretch, Lunge, Squat, Jump) across three protocols (P1-P3, covering simultaneous scene, receiver-layout, and orientation changes), MotionQ averaged 90.62% across the Widar3.0 W1-W6 protocols — which include both multi-factor cross-observation shifts and orientation-extrapolation settings, not only easy ones — versus 88.80% for the strongest single baseline (CORAL), a 1.82-point gain; CORAL and DANN are used in the paper as optimistic references given idealized, protocol-informed knowledge of which factors shift, rather than as ordinary WiFi-specific baselines. The larger gaps appear under harder conditions: across six endpoint-extrapolation configurations in W1-W3, MotionQ averages 89.2% versus 69.1% for WiGRUNT (a 20.1-point gain), while the strongest WiFi-specific baseline there, UniFi, trails by 11.0 points and GesFi by 16.9 points. Under the W7 six-to-two link reduction, MotionQ reaches 91.79% versus 73.40% for the strongest WiFi-specific baseline, UniFi (77.96% is UniFi's three-to-two result, not its six-to-two result) — an 18.4-point gain — while the idealized DANN reference trails by only 5.4 points. On the separate PerceptAlign stress test MotionQ does not lead: CORAL's three-task average of 78.09% edges out MotionQ's 77.40%, though MotionQ still beats DANN, WiGRUNT, UniFi, and GesFi there. Averaged across all 14 evaluated tasks (11 from Widar3.0/W1-W7 plus 3 from PerceptAlign), MotionQ reaches 88.04% versus 85.58% for the best baseline (DANN), a 2.46-point overall gain.

## Summary (ZH)

这篇论文（Xiang Zhang、Huan Yan、Geying Yang、Jianchun Liu、Tao Liu、Zhi Liu、Meng Li；作者来自天津大学、贵州师范大学、中国科学技术大学、广州大学、电气通信大学及合肥工业大学等多家机构）针对基于 Wi-Fi CSI 的手势识别中一种具体的失效模式：在固定部署条件下精度很高，但当用户朝向、可用的收发链路组合或收发端布置发生变化时，精度会下降。作者的论证框架是：这并非一个"同一信号在新条件下呈现不同外观"的普通域偏移问题，而是部署几何（即"无线观测算子"）发生变化后，物理上暴露出的是同一运动的不同分量——因此在一种链路几何下具有区分力的特征，在另一种几何下可能完全不存在。论文在 WiFi 观测过程的局部线性近似下，形式化提出了一个"共同任务可观测性"条件（定理 2.1）；当该条件不满足时，强行使不同几何下的表征保持一致（典型域不变性方法的做法）可能会丢弃某一特定几何本可提供的信息——但作者明确指出，这并不意味着不变性学习普遍失效，只是在此类受物理可观测性约束的场景下存在局限。

MotionQ 的机制包含两部分。首先，它不将手势表示为按链路固定的特征向量，而是表示为一种"运动商"——一个双支撑点的离散测度（总体速度、两个支撑点之间的相对速度分配，以及一个平衡权重），且两个支撑点均不预先绑定任何身体部位身份，并通过置换不变的中心矩（均值速度、协方差、三阶中心矩）来概括，目的正是防止两个支撑点的任意排序作为捷径信号泄漏进分类器。其次，MotionQ 不追求跨几何的表征匹配训练，而是采用"单链路保留式干预"：一种"平滑最差子算子"训练目标，要求手势的每一个单链路观测视角都能独立预测出正确标签，从而保留链路特有的任务信息，而非以追求不变性为名将其抹去。双基地收发端坐标被用于解析计算观测向量，在构建运动测度之前对各链路特征进行条件化处理。

在 Widar3.0（6 种手势：推拉、挥扫、拍掌、滑动、画圆、画之字形）上，通过 7 种跨观测测试协议（W1-W7，涵盖未见过的接收端链路组合、完整六链路覆盖、源朝向覆盖范围，以及在 35 种可能的双/三链路子集上的鲁棒性）进行评估；另在 PerceptAlign（4 种全身动作：伸展、弓步、深蹲、跳跃）上通过 3 种协议（P1-P3，涵盖场景、接收端布局与朝向同时变化）单独评估。MotionQ 在 Widar3.0 的 W1-W6 协议上平均达到 90.62%——该均值既包含多因素跨观测偏移场景，也包含朝向外推场景，并非只是简单设置——而最强单一基线（CORAL）为 88.80%，提升 1.82 个百分点；论文将 CORAL 与 DANN 作为获得了理想化、协议先验知识（预先知道哪些因素会偏移）的乐观参照，而非普通的 WiFi 专用基线。更大的差距出现在更困难的条件下：在 W1-W3 的六种端点外推设置上，MotionQ 平均达到 89.2%，对比 WiGRUNT 的 69.1%（提升 20.1 个百分点）；该设置下最强的 WiFi 专用基线 UniFi 落后 11.0 个百分点，GesFi 落后 16.9 个百分点。在 W7 六链路降至两链路的设置下，MotionQ 达到 91.79%，对比最强 WiFi 专用基线 UniFi 的 73.40%（77.96% 是 UniFi 在三链路降至两链路设置下的结果，而非六链路降至两链路）——提升约 18.4 个百分点；而理想化参照 DANN 仅落后 5.4 个百分点。在单独的 PerceptAlign 压力测试中，MotionQ 并未领先：CORAL 的三任务平均分 78.09% 略高于 MotionQ 的 77.40%，不过 MotionQ 在该测试上仍优于 DANN、WiGRUNT、UniFi 和 GesFi。在全部 14 项评估任务（11 项来自 Widar3.0/W1-W7，3 项来自 PerceptAlign）上平均，MotionQ 达到 88.04%，而最佳基线（DANN）为 85.58%，总体提升 2.46 个百分点。

## Key technical points (EN)

- Framing: deployment-geometry change ("wireless observation operator" change — orientation, link availability, Tx/Rx placement) is treated as physically exposing different motion components, not as an ordinary appearance-level domain shift.
- Theoretical basis: a local-linear approximation of the WiFi observation process yields a "local common task-observability" condition (Theorem 2.1) for when a strict invariant representation can remain task-sufficient; when it fails, forcing invariance across heterogeneous source operators may discard task-relevant cues — the paper stresses this is not a general claim that invariant learning fails.
- Motion quotient representation: two-support discrete measure (aggregate velocity, relative velocity split, balance weight) with no fixed body-part identity per support; summarized via permutation-invariant central moments (mean, covariance, third central moment) to block support-ordering shortcuts.
- Single-link-retention interventions: a smooth worst-suboperator training objective requiring every individual single-link view to independently predict the correct label, instead of enforcing cross-geometry representation invariance.
- Bistatic Tx/Rx coordinates used analytically to condition per-link features before motion-quotient construction.
- Datasets: Widar3.0 (6 gestures), evaluated across 7 cross-observation protocols W1-W7 (unseen receiver combos, full 6-link coverage, orientation coverage, robustness across 35 possible 2-/3-link subsets); PerceptAlign (4 full-body activities) evaluated separately across 3 protocols P1-P3 (simultaneous scene/layout/orientation change) as a stress test.
- Headline numbers: Widar3.0 W1-W6 mean (multi-factor + extrapolation protocols) 90.62% vs. CORAL 88.80% (+1.82pt; CORAL/DANN get idealized, protocol-informed shift knowledge, unlike the WiFi-specific baselines); six W1-W3 endpoint-extrapolation configs 89.2% vs. WiGRUNT 69.1% (+20.1pt), vs. strongest WiFi baseline UniFi (+11.0pt) and GesFi (+16.9pt); W7 6-to-2 links 91.79% vs. strongest WiFi baseline UniFi 73.40% (+18.4pt; 77.96% is UniFi's 3-to-2 result, not 6-to-2) and vs. DANN 86.39% (+5.4pt); PerceptAlign 3-task average: CORAL leads at 78.09% vs. MotionQ's 77.40%; overall 14-task average (11 Widar3.0 + 3 PerceptAlign) 88.04% vs. DANN 85.58% (+2.46pt).

## Key technical points (ZH)

- 论证框架：部署几何变化（即"无线观测算子"变化——朝向、可用链路、收发端布置）被视为物理上暴露了同一运动的不同分量，而非普通的外观层面域偏移。
- 理论基础：在 WiFi 观测过程的局部线性近似下推出的"局部共同任务可观测性"条件（定理 2.1），给出了严格不变表征仍能保持任务充分性的条件；当该条件不满足时，跨异质源算子强制不变性可能丢弃任务相关线索——作者强调这并非"不变性学习普遍失效"的一般性论断。
- 运动商表示：双支撑点离散测度（总体速度、相对速度分配、平衡权重），两个支撑点均不绑定固定身体部位身份；通过置换不变的中心矩（均值、协方差、三阶中心矩）进行概括，以阻断支撑点排序带来的捷径信号。
- 单链路保留式干预：采用"平滑最差子算子"训练目标，要求每一个单链路观测视角都能独立预测出正确标签，而非强制跨几何表征保持不变。
- 双基地收发端坐标被解析用于在构建运动商之前对各链路特征进行条件化处理。
- 数据集：Widar3.0（6 种手势），通过 7 种跨观测测试协议 W1-W7（未见接收端链路组合、完整六链路覆盖、朝向覆盖范围、35 种可能双/三链路子集上的鲁棒性）评估；PerceptAlign（4 种全身动作）作为压力测试，单独通过 3 种协议 P1-P3（场景/布局/朝向同时变化）评估。
- 核心数据：Widar3.0 W1-W6 平均（含多因素与外推协议）90.62%，对比 CORAL 的 88.80%（+1.82 个百分点；CORAL/DANN 获得了理想化的协议先验偏移知识，不同于 WiFi 专用基线）；W1-W3 六种端点外推设置 89.2%，对比 WiGRUNT 的 69.1%（+20.1 个百分点），对比最强 WiFi 基线 UniFi（+11.0 个百分点）与 GesFi（+16.9 个百分点）；W7 六链路降至两链路 91.79%，对比最强 WiFi 基线 UniFi 的 73.40%（+18.4 个百分点；77.96% 是 UniFi 三链路降至两链路的结果，而非六链路降至两链路）以及对比 DANN 的 86.39%（+5.4 个百分点）；PerceptAlign 三任务平均：CORAL 以 78.09% 领先，MotionQ 为 77.40%；全部 14 项任务总体平均（11 项 Widar3.0 + 3 项 PerceptAlign）88.04%，对比 DANN 的 85.58%（+2.46 个百分点）。

## Why it matters / what's new (EN)

This KB has tracked several cross-domain / robustness-focused CSI sensing papers (e.g. 2026-08-19_arxiv-argus-csi-statgram-person-id on open-set/cross-room generalization gaps). MotionQ's distinct contribution is treating deployment-geometry change as a physical, not merely statistical, phenomenon, and its gains are concentrated largely where that framing predicts they should be: the gap between MotionQ and the WiFi-specific baselines (WiGRUNT, UniFi, GesFi) widens sharply as the test condition departs further from the training geometry (extrapolative orientations, link-count reduction). Against the two idealized-shift-knowledge references (CORAL, DANN) the widening is far smaller — the DANN gap at W7's most reduced settings is only about 3.7-5.4 points, and on the separate PerceptAlign stress test CORAL actually edges out MotionQ. So the pattern is broadly consistent with the paper's framing but not a uniform across-the-board improvement, and not uniform across all comparison methods.

## Why it matters / what's new (ZH)

本知识库此前跟踪过多篇聚焦跨域/鲁棒性的 CSI 感知论文（如探讨开放集/跨房间泛化差距的 2026-08-19_arxiv-argus-csi-statgram-person-id）。MotionQ 的独特贡献在于将部署几何变化视为一种物理现象，而非单纯的统计现象；其增益在很大程度上集中体现在这一论证框架所预测的地方：随着测试条件与训练几何的偏离程度增大（外推朝向、链路数量减少），MotionQ 与 WiFi 专用基线（WiGRUNT、UniFi、GesFi）之间的差距显著扩大。但相较两个获得理想化偏移先验知识的参照方法（CORAL、DANN），差距的扩大幅度小得多——在 W7 链路数缩减最严重的设置下，与 DANN 的差距仅约 3.7-5.4 个百分点，而在单独的 PerceptAlign 压力测试中 CORAL 甚至略微超过了 MotionQ。因此，这一模式总体上与论文自身的论证方向一致，但并非全面均匀的性能提升，也并非相对所有对比方法都成立。

## Images

![MotionQ system overview | MotionQ 系统总览图](https://arxiv.org/html/2609.11818v1/system_overview.png)
