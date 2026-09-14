---
id: 2026-09-14_arxiv-adaptive-ai-multiexit-tinyml-gap9
date_published: 2026-07-07
date_found: 2026-09-14
type: academic-paper
technology: edge-ai
title_en: "Adaptive AI: Energy-Efficient Multi-Exit TinyML on Intelligent Vision Systems at the Edge"
title_zh: "自适应 AI：面向边缘智能视觉系统的高能效多出口 TinyML"
url: "https://arxiv.org/abs/2609.11939"
source_quality: full
topics: [tinyml, early-exit, microcontroller-vision, energy-efficiency, dynamic-inference]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Researchers from IDSIA/SUPSI (Lugano) — Luca Crupi, Lorenzo Lamberti, Alessandro Giusti, and Daniele Palossi, with Lamberti and Palossi also affiliated with IIS, ETH Zürich — add a confidence-gated multi-exit scheme to MobileNetV2 for ImageNet-100 classification, deployed on a GreenWaves GAP9 ultra-low-power SoC (a 9-core RISC-V cluster plus a dedicated NE16 int8 accelerator, 128kB L1 / 1.6MB L2 SRAM / 2MB flash). Four classification heads are inserted at increasing network depth, each adding only ~25k parameters (a conv layer + small MLP + softmax-confidence gate); "easy" inputs exit early once a tunable confidence threshold is met, while harder inputs propagate to the full network depth.

**Note on dating:** the paper's own page states a submission date of 2026-07-07, roughly two months before the 2609.xxxxx arXiv id under which it surfaced in this scout's dated-listing sweep — the same delayed-listing-appearance pattern flagged in the companion "Battery Price of Edge AI" entry filed the same day. `date_published` uses the paper's own stated date.

## Summary (ZH)

来自 IDSIA/SUPSI（卢加诺）的团队——Luca Crupi、Lorenzo Lamberti、Alessandro Giusti、Daniele Palossi，其中 Lamberti 与 Palossi 同时隶属苏黎世联邦理工学院（ETH Zürich）IIS 研究所——为 MobileNetV2（ImageNet-100 分类任务）加入了基于置信度门控的多出口机制，并部署在 GreenWaves GAP9 超低功耗 SoC 上（9 核 RISC-V 集群 + 专用 NE16 int8 加速器，128kB L1 / 1.6MB L2 SRAM / 2MB flash）。网络中随深度递增插入四个分类出口，每个仅增加约 2.5 万参数（一层卷积 + 小型 MLP + softmax 置信度门控）；「简单」输入在达到可调置信度阈值后即提前退出，「困难」输入则继续传播至网络全深度。

**关于日期的说明：** 论文自身页面标注提交日期为 2026-07-07，比其在本侦察 2026-09-14 定期列表扫描中出现所对应的 2609.xxxxx arXiv 编号早约两个月——与同日收录的「Battery Price of Edge AI」条目所记录的延迟列表可见模式相同。`date_published` 采用论文自身标注日期。

## Key technical points (EN)

- **Architecture**: MobileNetV2 backbone with 4 confidence-gated early exits (Algorithm 1: exit when max softmax probability ≥ tunable threshold τ); each exit head ~25k parameters.
- **Hardware**: GreenWaves GAP9 (Fabric Controller RISC-V core + 9-core compute cluster, 4x mixed-precision FP16/BF16/FP32 units, NE16 int8 hardware accelerator); evaluation kit adds 32MB HyperRAM + 64MB external flash.
- **Single-exit int8+NE16 results**: Exit 1: 22.2ms / 0.9mJ / 34.6% acc; Exit 2: 26.8ms / 1.2mJ / 54.8% acc; Exit 3: 37.5ms / 1.6mJ / 77.8% acc; Exit 4 (full depth): 49.3ms / 2.1mJ / 80.3% acc.
- **Dynamic multi-exit at τ=0.7**: 35.0ms average latency (-29% vs. full depth), 1.6mJ/frame average energy (-24%), 79.5% accuracy (~1pp loss), 185 MMAC average compute (-41% vs. 313 MMAC full-depth baseline); peak power 79.26mW, average 42.14mW — comfortably inside a 100mW budget.
- **Comparison to prior work**: outperforms a third-party state-of-the-art adaptive CNN, the "Harvester" early-exit system (Li et al. 2022, originally CIFAR-10 on Cortex-M0), which the authors re-deployed on the same GAP9 platform for this comparison, at 17.2 MAC/cycle vs. 8.1 MAC/cycle (>2x), while running a deeper model (MobileNetV2 on ImageNet-100, a harder task than CIFAR-10) — the authors attribute this to GAP9's parallel cluster giving the deeper, more complex model room to actually use available compute, whereas prior embedded multi-exit work used models too small to parallelize well.

## Key technical points (ZH)

- **架构**：以 MobileNetV2 为主干，加入 4 个置信度门控早退出口（算法 1：当最大 softmax 概率 ≥ 可调阈值 τ 时退出）；每个出口头约 2.5 万参数。
- **硬件**：GreenWaves GAP9（Fabric Controller RISC-V 核心 + 9 核计算集群，4 个 FP16/BF16/FP32 混合精度浮点单元，NE16 int8 硬件加速器）；评测套件另配 32MB HyperRAM + 64MB 外部 flash。
- **单出口 int8+NE16 结果**：出口 1：22.2ms / 0.9mJ / 34.6% 准确率；出口 2：26.8ms / 1.2mJ / 54.8%；出口 3：37.5ms / 1.6mJ / 77.8%；出口 4（全深度）：49.3ms / 2.1mJ / 80.3%。
- **τ=0.7 动态多出口结果**：平均延迟 35.0ms（较全深度降低 29%），平均能耗 1.6mJ/帧（降低 24%），准确率 79.5%（损失约 1 个百分点），平均计算量 185 MMAC（较 313 MMAC 全深度基线降低 41%）；峰值功耗 79.26mW，平均功耗 42.14mW——舒适地控制在 100mW 预算内。
- **与既有工作对比**：优于第三方最先进的自适应 CNN 早退系统「Harvester」（Li 等，2022，原为 Cortex-M0 上的 CIFAR-10 任务），作者将其重新部署于同一 GAP9 平台以进行本次对比：17.2 MAC/周期 对比 8.1 MAC/周期（提升超过 2 倍），且本文运行的是更深的模型（MobileNetV2 处理 ImageNet-100，比 CIFAR-10 更难的任务）——作者将此归因于 GAP9 的并行集群使更深、更复杂的模型能够真正利用可用算力，而此前的嵌入式多出口工作所用模型过小，难以有效并行。

## Why it matters / what's new (EN)

TinyML early-exit work is a mature sub-field, but most prior demonstrations run tiny models on single-core microcontrollers where there is little parallel compute to exploit. This paper's contribution is showing that early-exit gating still pays off — and pays off *better* than prior microcontroller-class work — once the target hardware has real parallel compute (GAP9's 9-core cluster + NE16 accelerator), because a deeper backbone can actually use that headroom instead of being memory- or core-bound. It is a genuine real-silicon measurement (not simulated), which this domain consistently rates above marketing-claim or simulation-only work, and it extends this KB's edge-model-efficiency bin into the microcontroller-class vision tier alongside the 2026-09-07 DVFS/thermal-throttling Raspberry Pi entry, at a different point on the power/complexity spectrum (milliwatts vs. watts).

## Why it matters / what's new (ZH)

TinyML 早退出研究已是较成熟的子领域，但此前多数演示都在算力有限、缺乏并行能力的单核微控制器上运行微型模型。本文的贡献在于证明：一旦目标硬件具备真正的并行算力（GAP9 的 9 核集群 + NE16 加速器），早退门控机制不仅依然有效，甚至比此前微控制器级别的工作**表现更好**——因为更深的主干网络能够真正利用这部分算力冗余，而不是受限于内存或核心数。这是一项真实芯片实测（而非仿真）成果，符合本领域一贯「实测优先于宣称或纯仿真」的评分取向，也将本知识库 edge-model-efficiency 分类拓展至微控制器级视觉推理这一功耗/复杂度谱系的另一端（毫瓦级，而非瓦级），与 2026-09-07 收录的树莓派 DVFS/热节流条目形成互补。

## Images

*(No redistributable images for this entry — text-only extraction from the arXiv HTML rendering, no figures reproduced.)*
