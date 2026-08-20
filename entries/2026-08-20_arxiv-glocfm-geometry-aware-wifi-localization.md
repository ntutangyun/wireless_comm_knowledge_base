---
id: 2026-08-20_arxiv-glocfm-geometry-aware-wifi-localization
date_published: 2026-08-10
date_found: 2026-08-20
type: academic-paper
technology: wifi
title_en: "GLocFM: A Geometry-Aware Foundation Model for 3D Indoor Wireless Localization"
title_zh: "GLocFM：融合三维场景几何的室内无线定位基础模型"
url: "https://arxiv.org/abs/2608.09285"
source_quality: full
topics: [indoor-positioning, localization, WiFi-sensing, CSI, foundation-model, machine-learning, AoA]
topic_primary: ftm-ranging
topics_secondary: [sensing-csi, ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
Bian, Wen, Chen and Zhang (Hong Kong University of Science and Technology) propose GLocFM, a foundation model for 3D indoor wireless localization whose defining feature is that it conditions on the 3D geometry of the propagation environment — supplied as a point cloud with per-point normals and electromagnetic material features — rather than learning a per-scene fingerprint map. The problem is cast as maximum-likelihood estimation: free space is partitioned into a grid of M candidate transmitter positions (default 12×12×4), and a learned scoring function evaluates the likelihood of the observed channel frequency responses (CFRs) at each candidate given the scene, outputting both a grid score and a sub-resolution off-grid offset. The scene is digested by a hierarchical encoder (farthest-point sampling + kNN feature aggregation, self-attention at the coarsest level), and geometric priors are built in explicitly: line-of-sight paths use free-space path loss with a soft visibility term computed from an opacity field, while one-bounce reflections are modeled as two-segment propagation with a learned reflection attenuation MLP that queries surface normals and features.

Rather than matching raw CFRs, the scoring pipeline transforms received signals into delay–angle-of-arrival spectra and computes cosine similarities against candidate-position predictions; a Transformer-based RF encoder over delay taps, weighted pooling of path features with receiver position/orientation, and self-attention across receivers produce the final score. Training data is fully synthetic: 221 diverse indoor scenes generated with Infinigen Indoors (177/22/22 train/val/test), with channels simulated in Sionna RT at 3.5 GHz carrier, 80 MHz bandwidth, 1,024 OFDM subcarriers, 4×4 uniform planar array receivers, and up to third-order specular plus diffuse reflections.

On the held-out synthetic test scenes (4 receivers), GLocFM reaches 0.1429 m mean 3D error — a 49.5% reduction versus the strongest baseline (LocGPT with delay-AoA input; other baselines include iARK, DLoc, and Wi-GATr) — with 82.2% of samples within 0.2 m. Fine-tuned on the real-measurement NeRF2 dataset (single receiver, 4×4 UPA), it reaches 0.0637 m mean error, a 48.8% improvement. Ablations attribute the gains to the learned scoring function (cosine-only degrades to 0.391 m), one-bounce path modeling (LoS-only: 0.229 m), and grid density (N=3: 0.449 m vs N=12: 0.143 m). A ToF-robust variant trained with randomly injected Gaussian timing offsets (σ=4 ns) holds ~0.22 m accuracy where the original model degrades to 0.714 m — addressing the unsynchronized-clock case that dominates real Wi-Fi deployments. The authors acknowledge sim-to-real generalization, antenna-configuration sensitivity, and the one-bounce simplification as open limitations.

## Summary (ZH)
Bian、Wen、Chen 与 Zhang（香港科技大学）提出 GLocFM——一个用于三维室内无线定位的基础模型，其核心特征是以传播环境的三维几何为条件（以带法向量与电磁材料特征的点云形式输入），而非学习逐场景的指纹图。问题被建模为最大似然估计：将自由空间划分为 M 个候选发射机位置网格（默认 12×12×4），由一个可学习的评分函数在给定场景的条件下评估各候选位置产生所观测信道频率响应（CFR）的似然，同时输出网格得分与亚分辨率的离格偏移。场景由分层编码器消化（最远点采样 + kNN 特征聚合，最粗层级使用自注意力），并显式内置几何先验：视距路径采用自由空间路径损耗加基于不透明度场的软可见性项；一次反射路径建模为两段传播，由查询表面法向与特征的 MLP 学习反射衰减。

评分管线不直接匹配原始 CFR，而是将接收信号变换为时延-到达角谱，与候选位置的预测谱计算余弦相似度；再经跨时延抽头的 Transformer 射频编码器、结合接收机位置/朝向的路径特征加权池化、以及跨接收机的自注意力，产生最终得分。训练数据完全合成：用 Infinigen Indoors 生成 221 个多样化室内场景（177/22/22 划分），信道由 Sionna RT 仿真——3.5 GHz 载频、80 MHz 带宽、1024 个 OFDM 子载波、4×4 均匀平面阵列接收机、最高三阶镜面反射加漫反射。

在保留的合成测试场景上（4 个接收机），GLocFM 平均三维误差 0.1429 m，较最强基线（输入时延-到达角谱的 LocGPT；其余基线含 iARK、DLoc、Wi-GATr）降低 49.5%，82.2% 的样本误差在 0.2 m 以内。在真实测量的 NeRF2 数据集（单接收机、4×4 UPA）上微调后平均误差 0.0637 m，提升 48.8%。消融实验显示增益来自可学习评分函数（仅用余弦相似度退化到 0.391 m）、一次反射建模（仅视距：0.229 m）与网格密度（N=3：0.449 m 对比 N=12：0.143 m）。以随机注入高斯时偏（σ=4 ns）训练的 ToF 鲁棒变体在时偏下保持约 0.22 m 精度，而原模型退化到 0.714 m——这正对应真实 Wi-Fi 部署中收发时钟不同步的主导场景。作者承认仿真到真实的泛化、天线配置敏感性与一次反射简化仍是开放问题。

## Key technical points (EN)
- Localization as MLE over a 3D candidate grid (12×12×4 default) conditioned on scene geometry; learned scoring function outputs grid score + off-grid offset for sub-resolution accuracy.
- Hierarchical point-cloud scene encoder (FPS + kNN aggregation + self-attention); explicit LoS (FSPL + opacity-field soft visibility) and one-bounce reflection priors (learned attenuation MLP over surface normals/features).
- Signals matched in delay–AoA spectrum domain via cosine similarity, refined by a Transformer RF encoder and cross-receiver self-attention.
- Trained purely in simulation: 221 Infinigen Indoors scenes, Sionna RT channels (3.5 GHz, 80 MHz, 1,024 subcarriers, 4×4 UPA, third-order reflections).
- Synthetic test: 0.1429 m mean error, 49.5% below LocGPT delay-AoA; NeRF2 real data after fine-tuning: 0.0637 m, 48.8% improvement.
- ToF-robust variant (train-time random timing offsets, σ=4 ns) keeps ~0.22 m under unknown clock offsets vs 0.714 m for the vanilla model — no explicit offset estimation needed.
- Ablations: learned scoring (0.391 m without), one-bounce paths (0.229 m without), bandwidth (degrades at 20 MHz), receiver count (degrades at NR=3).

## Key technical points (ZH)
- 将定位建模为以场景几何为条件、在三维候选网格（默认 12×12×4）上的最大似然估计；可学习评分函数输出网格得分与离格偏移，实现亚分辨率精度。
- 分层点云场景编码器（最远点采样 + kNN 聚合 + 自注意力）；显式视距先验（自由空间路径损耗 + 不透明度场软可见性）与一次反射先验（基于表面法向/特征的可学习衰减 MLP）。
- 在时延-到达角谱域以余弦相似度匹配信号，再经 Transformer 射频编码器与跨接收机自注意力精化。
- 纯仿真训练：221 个 Infinigen Indoors 场景，Sionna RT 信道（3.5 GHz、80 MHz、1024 子载波、4×4 UPA、三阶反射）。
- 合成测试：平均误差 0.1429 m，较 LocGPT（时延-AoA 输入）低 49.5%；NeRF2 真实数据微调后 0.0637 m，提升 48.8%。
- ToF 鲁棒变体（训练时注入 σ=4 ns 随机时偏）在未知时钟偏移下保持约 0.22 m（原模型 0.714 m）——无需显式时偏估计。
- 消融：可学习评分（去掉后 0.391 m）、一次反射建模（去掉后 0.229 m）、带宽（20 MHz 时退化）、接收机数（NR=3 时退化）。

## Why it matters / what's new (EN)
The KB's positioning bin has tracked FTM-protocol work and fingerprint-style learned localizers, but GLocFM is the first entry to condition a localization foundation model on explicit 3D scene geometry with physics-structured priors (opacity-based visibility, learned one-bounce reflections) — turning NLoS multipath from a nuisance into an exploited signal, and aiming at cross-scene generalization where fingerprint methods must retrain per site. Two elements matter beyond the headline numbers: the ToF-robust training trick sidesteps the transmitter-receiver synchronization problem that motivates much of 802.11az FTM's protocol machinery, hinting that geometry-conditioned learning could relax ranging-protocol requirements; and the fully synthetic Sionna-RT training pipeline (221 generated scenes) continues the sim-to-real thread the KB has followed since 2026-07-04_arxiv-csi-simulation-agc-calibration and 2026-08-19_arxiv-rfcheck-synthetic-csi-measurement-audit — GLocFM is exactly the class of synthetic-data consumer whose measurement-consistency RFCheck audits. Caveats: the simulation carrier is 3.5 GHz (not a Wi-Fi band) and real-data validation is limited to the NeRF2 dataset, so Wi-Fi-band, commodity-hardware performance remains to be shown.

## Why it matters / what's new (ZH)
本库定位分区此前跟踪的是 FTM 协议类工作与指纹式学习定位器，而 GLocFM 是第一条将定位基础模型显式建立在三维场景几何与物理结构先验（不透明度可见性、可学习一次反射）之上的条目——把非视距多径从干扰变为可利用的信号，并瞄准指纹方法必须逐站点重训的跨场景泛化问题。除头条数字外有两点值得注意：ToF 鲁棒训练技巧绕开了收发同步问题，而这正是 802.11az FTM 大量协议机制的动因，暗示几何条件化学习可能放宽对测距协议的要求；纯合成 Sionna RT 训练管线（221 个生成场景）延续了本库自 2026-07-04_arxiv-csi-simulation-agc-calibration 与 2026-08-19_arxiv-rfcheck-synthetic-csi-measurement-audit 以来跟踪的仿真到真实主线——GLocFM 正是 RFCheck 所审计的那类合成数据消费者。需要注意：仿真载频为 3.5 GHz（非 Wi-Fi 频段），真实数据验证仅限 NeRF2 数据集，Wi-Fi 频段、商用硬件上的表现仍待证明。

## Images
![GLocFM system overview: geometry and wireless inputs to the localization model | GLocFM 系统概览：几何与无线输入共同驱动定位模型](https://arxiv.org/html/2608.09285v1/glocfm_overview.png)
![GLocFM framework: hierarchical scene encoder, path priors, and learned scoring function | GLocFM 框架：分层场景编码器、路径先验与可学习评分函数](https://arxiv.org/html/2608.09285v1/glocfm_framework_ppt.png)
