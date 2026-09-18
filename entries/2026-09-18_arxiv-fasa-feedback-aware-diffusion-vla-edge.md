---
id: 2026-09-18_arxiv-fasa-feedback-aware-diffusion-vla-edge
date_published: 2026-09-16
date_found: 2026-09-18
technology: edge-ai
type: academic-paper
title_en: "FASA: Feedback-Aware Sampling Adaptation for Efficient Diffusion-Based VLA Models"
title_zh: "FASA：面向高效扩散式 VLA 模型的反馈感知采样自适应方法"
url: "https://arxiv.org/abs/2609.19475"
source_quality: full
topics: [diffusion-VLA, robotics, edge-inference, runtime-adaptation, NAS2026]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Yuchen Han, Jianhan Wu, Xiaoyang Qu, Lingwei Kong, Shiyi Li and Jianzong Wang (South China University of Technology; Ping An Technology; Harbin Institute of Technology), in a paper accepted to the 18th International Conference on Networking, Architecture, and Storage (NAS 2026), address the latency and energy cost of diffusion-based Vision-Language-Action (VLA) models for robotic control: these models achieve strong embodied-task performance but need hundreds of denoising iterations per action, which the paper says is prohibitive for edge deployment, while existing acceleration methods either require expensive retraining (distillation, flow matching) or apply statically scheduled pruning/caching that ignores the fact that a robot's interaction workload varies moment to moment. FASA (Feedback-Aware Sampling Adaptation) is a training-free runtime framework that treats the robot's own real-time multimodal feedback as a control signal for how many denoising steps to spend. It has two coordinated modules: an interaction-driven range adaptor computes a modulation factor from the cosine distance between consecutive visual features and consecutive gripper-force readings (alpha_t = 0.5*vision-change + 0.5*force-change + 1.5, with the 1.5 bias keeping alpha near 0.5 — i.e., a shrinking step budget — during quasi-static motion while letting it exceed 1 during dynamic phases) and uses it to scale the sampling-step range's upper and lower bounds; a proprioception-aware step adaptor then picks the exact step within that adapted range via a sigmoid gate over a motion index built from joint velocity and displacement, so high-motion phases get more denoising steps and stable phases get fewer.

The authors evaluate FASA training-free on top of four existing VLA/diffusion policies across three benchmark suites: RLBench (18 language-conditioned tabletop tasks) with the 3D Diffuser Actor baseline, ManiSkill3 (3 hand-selected tasks — PickCube, PushCube, StackCube — out of five released) with Diffusion Policy and RDT baselines, and LIBERO (40 language-conditioned tasks across four suites) with the Evo-1 baseline, run on an RTX 4070 Laptop GPU (8GB, for 3D-DA and Evo-1) or an RTX 3090 (24GB, for DP and RDT). Reported results: RLBench with 3D-DA improves success rate 75.96% to 77.48% at 1.40x speedup; ManiSkill3 with Diffusion Policy improves 70.28% to 76.39% at 1.45x; ManiSkill3 with RDT improves 86.11% to 87.50% at 1.23x; LIBERO with Evo-1 improves 93.0% to 93.5% at 1.23x overall, and +4 points on LIBERO-Long at 1.35x, against a 4-point drop on LIBERO-Spatial, which the authors attribute to fine-grained spatial control needing a more conservative schedule. Individual RLBench tasks show larger swings (Close Jar 30.67% to 42.67%; Stack Blocks 54.00% to 66.67%). An ablation isolates the two modules: the range adaptor alone reaches 1.64x speedup with a small accuracy cost, the step adaptor alone reaches only 1.18x, and the combined framework lands at a more balanced 1.42x speedup with the highest accuracy of the three configurations (77.50%).

## Summary (ZH)

Yuchen Han、Jianhan Wu、Xiaoyang Qu、Lingwei Kong、Shiyi Li 与 Jianzong Wang（华南理工大学；平安科技；哈尔滨工业大学）在一篇已被第 18 届网络、体系结构与存储国际会议（NAS 2026）接收的论文中，针对基于扩散模型的视觉-语言-动作（VLA）模型在机器人控制中的延迟与能耗问题展开研究：这类模型在具身任务上表现优异，但每个动作都需要数百步去噪迭代，论文指出这对边缘部署而言代价过高；而现有加速方法要么需要昂贵的重新训练（蒸馏、流匹配），要么采用静态调度的剪枝/缓存策略，忽略了机器人交互负载会随时间动态变化这一事实。FASA（反馈感知采样自适应）是一种无需训练的运行时框架，将机器人自身的实时多模态反馈作为控制信号，用以决定应投入多少去噪步数。该框架包含两个协同模块：交互驱动的范围自适应模块，基于连续视觉特征之间以及连续夹爪力读数之间的余弦距离计算一个调制因子（α_t = 0.5×视觉变化 + 0.5×力变化 + 1.5，其中 1.5 的偏置使 α 在准静态运动阶段保持接近 0.5，即缩小步数预算，而在动态阶段可超过 1），并据此缩放采样步数范围的上下界；随后，本体感知的步数自适应模块通过一个基于关节速度与位移构建的运动指数上的 sigmoid 门控，在该自适应范围内选取具体步数，使高运动阶段获得更多去噪步数，稳定阶段获得更少步数。

作者在三个基准测试套件、四种既有 VLA/扩散策略之上以无需训练的方式评测了 FASA：RLBench（18 项语言条件下的桌面操作任务，基线为 3D Diffuser Actor）、ManiSkill3（从已发布的五项任务中手工挑选的三项——PickCube、PushCube、StackCube，基线为 Diffusion Policy 与 RDT）以及 LIBERO（四个套件共 40 项语言条件任务，基线为 Evo-1），分别运行于 RTX 4070 笔记本 GPU（8GB，用于 3D-DA 与 Evo-1）或 RTX 3090（24GB，用于 DP 与 RDT）。所报告结果：RLBench 上 3D-DA 的成功率从 75.96% 提升至 77.48%，加速 1.40 倍；ManiSkill3 上 Diffusion Policy 从 70.28% 提升至 76.39%，加速 1.45 倍；ManiSkill3 上 RDT 从 86.11% 提升至 87.50%，加速 1.23 倍；LIBERO 上 Evo-1 整体从 93.0% 提升至 93.5%，加速 1.23 倍，其中 LIBERO-Long 套件单独提升 4 个百分点、加速 1.35 倍，而 LIBERO-Spatial 套件则下降 4 个百分点，作者认为这是由于精细的空间控制需要更保守的步数调度。RLBench 上部分单项任务提升幅度更大（Close Jar 从 30.67% 提升至 42.67%；Stack Blocks 从 54.00% 提升至 66.67%）。消融实验分别评估了两个模块：仅范围自适应模块可达 1.64 倍加速，但精度略有下降；仅步数自适应模块仅能达到 1.18 倍加速；两者结合后达到更均衡的 1.42 倍加速，且在三种配置中准确率最高（77.50%）。

## Key technical points (EN)

- **Problem**: diffusion-based VLA models need hundreds of denoising steps per action; existing acceleration needs retraining or uses static, workload-blind pruning/caching.
- **Mechanism**: two training-free modules — an interaction-driven range adaptor (cosine-distance-based visual + gripper-force change signal scales the sampling-step range) and a proprioception-aware step adaptor (sigmoid gate over a joint velocity/displacement motion index picks the exact step within that range).
- **Evaluated on**: RLBench (3D Diffuser Actor), ManiSkill3 (Diffusion Policy, RDT), LIBERO (Evo-1), on RTX 4070 Laptop / RTX 3090 GPUs.
- **Results**: speedups of 1.23x-1.45x across the four policy/benchmark pairs, with success rate holding or rising alongside the speedup at the benchmark-average level in all four pairs, though LIBERO-Spatial regresses by four points (e.g. RLBench 75.96%->77.48% at 1.40x; ManiSkill3/DP 70.28%->76.39% at 1.45x).
- **Ablation**: range-adaptor-only reaches 1.64x speedup at a small accuracy cost; step-adaptor-only reaches 1.18x; the combined framework balances at 1.42x with the highest overall accuracy (77.50%).

## Key technical points (ZH)

- **问题**：基于扩散模型的 VLA 每个动作需数百步去噪；现有加速方法需要重新训练，或采用与负载无关的静态剪枝/缓存策略。
- **机制**：两个无需训练的模块——交互驱动的范围自适应模块（基于余弦距离的视觉与夹爪力变化信号缩放采样步数范围）与本体感知的步数自适应模块（基于关节速度/位移运动指数的 sigmoid 门控，在该范围内选取具体步数）。
- **评测对象**：RLBench（3D Diffuser Actor）、ManiSkill3（Diffusion Policy、RDT）、LIBERO（Evo-1），运行于 RTX 4070 笔记本 GPU 或 RTX 3090。
- **结果**：在四组策略/基准组合上加速 1.23-1.45 倍，在基准平均水平上，四组均在加速的同时成功率持平或提升，但 LIBERO-Spatial 套件下降 4 个百分点（如 RLBench 从 75.96% 提升至 77.48%、加速 1.40 倍；ManiSkill3/DP 从 70.28% 提升至 76.39%、加速 1.45 倍）。
- **消融实验**：仅范围自适应模块加速 1.64 倍但精度略降；仅步数自适应模块加速仅 1.18 倍；两者结合后更均衡地达到 1.42 倍加速，且整体准确率最高（77.50%）。

## Why it matters / what's new (EN)

This KB's existing edge-robotics entries (VLA-ULAP, Robion, TIO-Former) split work between local and cloud compute or redesign the serving stack; FASA instead accelerates a single diffusion-VLA policy in place by spending its fixed denoising budget where the robot's own sensor feedback says it is needed, with no retraining and no change to model weights. Success rate holds or rises alongside the speedup at the benchmark-average level in all four policy/benchmark pairs, though LIBERO-Spatial regresses by four points; that is the paper's most checkable claim; the GPUs used (RTX 4070 Laptop, RTX 3090) are development-grade rather than an embedded SoC, so the entry files this as edge-model-efficiency on the runtime-adaptation mechanism rather than as a fully realised on-device deployment result.

## Why it matters / what's new (ZH)

本知识库现有的边缘机器人相关条目（VLA-ULAP、Robion、TIO-Former）通常在本地与云端计算之间做任务划分，或重新设计服务架构；FASA 则是在不改变模型权重、无需重新训练的前提下，就地加速单一扩散式 VLA 策略，把固定的去噪步数预算花在机器人自身传感器反馈显示确有需要的地方。在四组策略/基准组合上，基准平均水平的成功率均在加速的同时持平或提升，但 LIBERO-Spatial 套件下降 4 个百分点；这是本文中最具可核验性的结论；论文所用 GPU（RTX 4070 笔记本、RTX 3090）属于开发级硬件而非嵌入式 SoC，因此本条目将其归类为围绕运行时自适应机制的 edge-model-efficiency 条目，而非已在端侧完整落地的部署结果。

## Images

![FASA inference pipeline: interaction-driven range adaptor and proprioception-aware step adaptor | FASA 推理流程：交互驱动的范围自适应模块与本体感知的步数自适应模块](https://arxiv.org/html/2609.19475v1/fasa_overview_v3.png)
