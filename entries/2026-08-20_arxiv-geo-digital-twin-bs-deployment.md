---
id: 2026-08-20_arxiv-geo-digital-twin-bs-deployment
date_published: 2026-06-30
date_found: 2026-08-20
type: academic-paper
technology: cellular
title_en: "Intelligent Base Station Deployment in Urban Wireless Networks: A Geographic Data-Informed Digital Twin Approach"
title_zh: "城市无线网络中的智能基站部署：地理数据驱动的数字孪生方法"
url: "https://arxiv.org/abs/2608.14599"
source_quality: full
topics: [base-station-deployment, digital-twin, radio-map, Sionna, ray-tracing, OpenStreetMap, diffusion-model, Map2Traj, SAC, DRL, Wasserstein, network-planning, Purple-Mountain-Laboratories]
topic_primary: cellular-ai
topics_secondary: [5g-nr, 6g-vision]
novelty_score: 3
---

## Summary (EN)
Zhenyu Tao, Yuxuan Li, Wei Xu, Yongming Huang and Xiaohu You (Southeast University NMCRL + Purple Mountain Laboratories, Nanjing; arXiv, first submitted 30 Jun 2026) attack the circularity at the heart of macro base-station planning — you need on-site measurements to plan the network, but you need a deployed network to measure — with a **digital twin built purely from open geographic data**. The twin has two learned components. First, a **sample-free radio map predictor** with a 4-channel hybrid input (3D building-height map 6–300 m, BS location/antenna height, building conductivity map, building permittivity map) that regresses a full RSS map in milliseconds; trained on a newly built and publicly released kilometer-scale dataset of 60,000 Sionna ray-traced samples over 60+ km² of real OpenStreetMap geometry (80 urban areas × 30 material randomizations × 25 BS placements), it cuts prediction MSE 38% versus a 2D-input baseline (0.0203 → 0.0126 with a PMNet backbone) and lands within 0.84 pp of sample-based coverage-prediction accuracy (0.8836 vs 0.8920) with zero field measurements. Second, **Map2Traj**, a denoising-diffusion user-mobility model conditioned only on the street-map image, generates zero-shot synthetic trajectories for unseen areas, whose aggregate yields the expected user distribution.

Deployment is then a Markov decision process over the twin: a spatially structured **Soft Actor-Critic** with U-Net actor/critic emits a probability map over ~15,000 candidate rooftop pixels per area, placing M ∈ {4,5,6} BSs (53 dBm, 3.5 GHz, −80 dBm coverage threshold) to maximize a coverage/throughput blend. Two refinements matter: post-training **local search** that re-optimizes each BS within a refinement radius using millisecond twin evaluations, and a **Wasserstein-distance deployment buffer** (Hungarian-matched spatial displacement between deployment sets) that preserves structurally diverse solutions and defeats local optima. On Xi'an test areas the full stack (DT-DRL+LS+Buffer) reaches **98.9% of the genie-aided benchmark** (ground-truth ray tracing + real trajectories) while cutting optimization overhead by **>99%** versus exhaustive ray-traced search.

## Summary (ZH)
陶振宇、李宇轩、许威、黄永明、尤肖虎（东南大学移动通信全国重点实验室 + 南京紫金山实验室；arXiv 首次提交 2026 年 6 月 30 日）针对宏基站规划的核心循环困境——规划需要现场测量、测量又需要已部署的网络——提出**纯开放地理数据构建的数字孪生**。孪生含两个学习组件。其一，**免采样无线电地图预测器**：4 通道混合输入（6–300 m 三维建筑高度图、基站位置/天线高度、建筑电导率图、建筑介电常数图），毫秒级回归整幅 RSS 地图；训练数据为新构建并公开的公里级数据集——真实 OpenStreetMap 几何上 60+ km²、60,000 个 Sionna 射线追踪样本（80 个城区 × 30 种材质随机化 × 25 个基站位置）——相对二维输入基线 MSE 降 38%（PMNet 骨干 0.0203 → 0.0126），覆盖预测精度与基于实测采样的方案仅差 0.84 个百分点（0.8836 对 0.8920），且零现场测量。其二，**Map2Traj** 扩散式用户移动模型，仅以街道地图图像为条件，对未见区域零样本生成合成轨迹，聚合得到期望用户分布。

部署问题随之化为孪生之上的马尔可夫决策过程：空间结构化 **Soft Actor-Critic**（U-Net 演员/评论家）在每区约 15,000 个候选屋顶像素上输出概率图，放置 M ∈ {4,5,6} 个基站（53 dBm、3.5 GHz、−80 dBm 覆盖门限），最大化覆盖/吞吐加权目标。两个精化环节关键：训练后**局部搜索**利用毫秒级孪生评估在精化半径内逐基站再优化；**Wasserstein 距离部署缓冲区**（匈牙利算法匹配的部署集空间位移）保留结构多样解、克服局部最优。在西安测试区域，完整方案（DT-DRL+LS+Buffer）达到**理想基准（真值射线追踪 + 真实轨迹）的 98.9%**，同时相对穷举射线追踪搜索削减 **>99%** 优化开销。

## Key technical points (EN)
- Sample-free radio map: 4-channel input (3D heights + BS placement + conductivity + permittivity) → RSS map in ms; PMNet/ViT exploit the EM channels, U-Net limited by receptive field.
- New public dataset: 60,000 Sionna ray-traced samples, 60+ km² real OSM geometry, 80 areas × 30 material randomizations × 25 placements — far beyond prior 256×256 m uniform-material sets.
- Map2Traj: street-map-conditioned DDPM generating zero-shot trajectories → expected user density without any real trajectory data.
- MDP: 3-channel state (candidate map with inhibition radius, deployed BSs, composite radio map); action = pixel; reward = incremental coverage/throughput gain (β blend).
- Spatially structured SAC (U-Net actor/critic, dual critics, auto-entropy) + local-search refinement + Wasserstein-diversity buffer (Hungarian matching; replace-if-similar, append-if-diverse).
- Results (Xi'an, M=4–6, 3.5 GHz, 53 dBm, −80 dBm threshold): 98.9% of genie-aided RT benchmark; >99% overhead cut; radio-map MSE −38%, CPA gap to sample-based 0.84 pp.

## Key technical points (ZH)
- 免采样无线电地图：4 通道输入（3D 高度 + 基站布置 + 电导率 + 介电常数）→ 毫秒级 RSS 图；PMNet/ViT 能利用电磁通道，U-Net 受感受野所限。
- 新公开数据集：60,000 个 Sionna 射线追踪样本、60+ km² 真实 OSM 几何、80 区 × 30 材质随机化 × 25 布置——远超此前 256×256 m 均匀材质数据集。
- Map2Traj：街道图条件 DDPM 零样本生成轨迹 → 无需任何真实轨迹数据即得期望用户密度。
- MDP：3 通道状态（含抑制半径的候选图、已部署基站、复合无线电地图）；动作为像素坐标；奖励为覆盖/吞吐增量（β 加权）。
- 空间结构化 SAC（U-Net 演员/评论家、双评论家、自动熵温度）+ 局部搜索精化 + Wasserstein 多样性缓冲（匈牙利匹配；相似则择优替换、多样则追加）。
- 结果（西安，M=4–6，3.5 GHz，53 dBm，−80 dBm 门限）：达理想基准 98.9%；开销降 >99%；无线电地图 MSE −38%，与实测采样方案覆盖精度差 0.84 pp。

## Why it matters / what's new (EN)
The KB's digital-twin thread has used twins to *operate* networks — ARIADNE's Sionna-twin link adaptation (05-29), twin-fidelity-aware xApp arbitration (07-28), five-state microwave-backhaul twins (07-26) — but not to *plan* them; this is the first entry where the twin replaces the site survey itself. The claim that matters is quantified circular-dependency removal: geographic data alone (OSM + materials) gets within 0.84 pp of measurement-calibrated coverage prediction, and the end-to-end planner reaches 98.9% of a genie that has ground-truth ray tracing and real user trajectories. The released kilometer-scale materials-aware radio-map dataset is the durable artifact — the radio-map-prediction literature has been starved of exactly this. From the You Xiaohu / Purple Mountain 6G orbit, it also signals where China's flagship 6G lab is taking digital twins: from research prop to deployment tooling. Held from the 08-18/08-19 runs under the entry cap; ingested this run on full-text read.

## Why it matters / what's new (ZH)
KB 的数字孪生线索此前都在用孪生*运营*网络——ARIADNE 的 Sionna 孪生链路自适应（05-29）、孪生保真度感知 xApp 仲裁（07-28）、微波回传五态孪生（07-26）——而非*规划*网络；本条目首次让孪生取代选址勘测本身。关键主张是量化的循环依赖消除：仅凭地理数据（OSM + 材质）即可与实测校准的覆盖预测差距缩至 0.84 个百分点，端到端规划器达到握有真值射线追踪与真实用户轨迹的"神谕"基准的 98.9%。公开的公里级材质感知无线电地图数据集是持久贡献——无线电地图预测领域恰恰长期缺此。出自尤肖虎/紫金山实验室 6G 体系，也预示中国旗舰 6G 实验室对数字孪生的走向：从研究道具到部署工具。该文曾因条目上限在 08-18/08-19 两次运行中被暂挂，本次全读后收录。

## Images
![System model: geographic data-informed digital twin for BS deployment | 系统模型：地理数据驱动的基站部署数字孪生](https://arxiv.org/html/2608.14599v1/x1.png)
![Framework schematic: radio map prediction + Map2Traj + DRL deployment | 框架示意：无线电地图预测 + Map2Traj + DRL 部署](https://arxiv.org/html/2608.14599v1/x2.png)
