---
id: 2026-10-23_arxiv-radiodreamer-world-model-radio-map-forecasting-bs-power-downtilt
date_published: 2026-10-21
date_found: 2026-10-23
type: academic-paper
technology: cellular
title_en: "RadioDreamer: A World Model for Radio Map Forecasting and Imagination-Based Optimization"
title_zh: "RadioDreamer：用于无线电地图预测与想象式优化的世界模型"
url: "https://arxiv.org/abs/2610.29382"
source_quality: full
topics: [radio-map, world-model, latent-dynamics, transmit-power, antenna-downtilt, RSRP, SINR, Sionna-RT, network-optimization, transformer]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
The paper (10 pages) presents RadioDreamer, a two-stage world model for radio maps. Stage I learns action-conditioned multi-step evolution of RSRP and SINR maps in a latent space from base-station (BS) actions, the static urban scene and moving-object states. Stage II freezes that model and uses it to roll out counterfactual latent trajectories, so a policy for BS transmit power and electrical downtilt can be trained by imagination rather than by trial and error on a physical network.

Following the paper: problem setting (a radio environment discretised into a spatial grid, BS actions given by power and downtilt, moving vehicles and pedestrians); the two-stage framework with a Cellular-Aware Transformer block and region-adaptive (dynamic-mask) supervision; imagination planning with a reward model, actor and critic; and an evaluation on a simulated Sionna RT dataset with three research questions on forecasting, generalisation and planning.

## Summary (ZH)
该论文（10 页）提出 RadioDreamer，一种面向无线电地图的两阶段世界模型。第一阶段在潜空间中，依据基站（BS）动作、静态城市场景与运动物体状态，学习 RSRP 与 SINR 地图的动作条件多步演化。第二阶段冻结该模型，用它展开反事实的潜空间轨迹，使得针对基站发射功率与电子下倾角的策略可以通过“想象”训练，而不必在实际网络上试错。

按论文顺序：问题设定（离散为空间栅格的无线电环境、由功率与下倾角给出的基站动作、移动的车辆与行人）；含 Cellular-Aware Transformer 块与区域自适应（动态掩码）监督的两阶段框架；带奖励模型、行动者与评论者的想象式规划；以及在仿真的 Sionna RT 数据集上围绕预测、泛化与规划三个研究问题的评估。

## Key technical points (EN)
- Dataset (simulated, because the authors note no public real-world dataset provides radio maps synchronised with time-varying BS power and downtilt): Sionna RT at 3.5 GHz, ray tracing with line-of-sight and specular reflection up to depth 4; three urban scenes (Street Canyon, Etoile, Munich), 120 m x 80 m regions at 2.5 m resolution (48 x 32 maps); episodes of 32 frames with 100 moving objects and 2-6 active BSs, transmit power 10-30 dBm and downtilt in {0, 3.75, 7.5, 11.25, 15} degrees; 3,600 training, 480 validation and 960 test episodes per scene (about 484k frames in total). Models see 16 frames and forecast the next 16 RSRP and SINR maps.
- Protocols: T1 unseen trajectory seeds, T2 unseen BS coordinates, T3 unseen BS coordinates plus held-out mobility regimes. Baselines: 3GPP TR 38.901 UMi, static radio-map networks (RadioUNet, PMNet, Pathloss-PINN, IPP-Net, Height-RM-CNN) and a generic Dreamer-RSSM world model. Metrics: full-map MAE, dynamic-region MAE and signal-direction accuracy.
- Forecasting: the paper reports a mean 25.2% reduction in full-map error (15.9%-35.4% per setting) over the strongest baseline and up to 45.2% in dynamic regions, with signal-direction accuracy around 80% against 48-54% for the best baselines. In the generalisation protocols (H = 8) the error reduction over Dreamer-RSSM is 9.6%-26.9%, 20.3% on average.
- Planning task: choose power and downtilt for every active BS over a 16-step episode to improve coverage and cell-edge quality (using RSRP and SINR thresholds and the worst-5% RSRP region); an actor-critic is trained purely on latent imagination with a pretrained KPI reward model. Imagination-based planning improves accumulated return by 8.8% over RM-based SAC (a model-free policy optimised on radio-map observations) and by 2.0% over planning on decoded radio maps.
- Hardware used for experiments: Intel Core i7-14700KF, 32 GB RAM, NVIDIA RTX 5070 Ti 16 GB.
- Future work named by the authors: incorporating real-world measurements, unified training across multiple urban scenes, and broader planning and optimisation tasks. (All reported results use the Sionna RT dataset described above.)

## Key technical points (ZH)
- 数据集（为仿真数据，作者指出目前没有公开的真实数据集提供与随时间变化的基站功率和下倾角同步的无线电地图）：Sionna RT，3.5 GHz，射线追踪考虑视距与镜面反射，最大深度 4；三个城市场景（Street Canyon、Etoile、Munich），120 m x 80 m 区域、2.5 m 分辨率（48 x 32 的地图）；每个 episode 含 32 帧、100 个运动物体和 2-6 个活跃基站，发射功率 10-30 dBm，下倾角取自 {0, 3.75, 7.5, 11.25, 15} 度；每个场景 3600 个训练、480 个验证、960 个测试 episode（共约 48.4 万帧）。模型观察 16 帧并预测随后 16 张 RSRP 与 SINR 地图。
- 评估协议：T1 为未见过的轨迹种子，T2 为未见过的基站坐标，T3 为未见过的基站坐标加留出的移动模式。基线包括 3GPP TR 38.901 UMi、静态无线电地图网络（RadioUNet、PMNet、Pathloss-PINN、IPP-Net、Height-RM-CNN）和通用的 Dreamer-RSSM 世界模型。指标为全图 MAE、动态区域 MAE 和信号方向准确率。
- 预测：论文报告相对每种设置下最强基线，全图误差平均降低 25.2%（各设置 15.9%-35.4%），动态区域最多降低 45.2%，信号方向准确率约 80%，而最佳基线为 48-54%。在泛化协议（H = 8）下，相对 Dreamer-RSSM 的误差降低为 9.6%-26.9%，平均 20.3%。
- 规划任务：在 16 步的 episode 内为每个活跃基站选择功率与下倾角，以改善覆盖和小区边缘质量（使用 RSRP、SINR 阈值以及最差 5% RSRP 区域）；行动者-评论者仅在潜空间想象中、借助预训练的 KPI 奖励模型训练。想象式规划使累计回报比 RM-based SAC（直接在无线电地图观测上优化的无模型策略）高 8.8%，比在解码后无线电地图上规划高 2.0%。
- 实验硬件：Intel Core i7-14700KF、32 GB 内存、16 GB 显存的 NVIDIA RTX 5070 Ti。
- 作者列出的未来工作：引入真实测量数据、跨多个城市场景的统一训练，以及更全面的网络规划与优化任务。（文中所有结果均基于上述 Sionna RT 数据集。）

## Why it matters / what's new (EN)
The evidence is entirely simulated, so the 25.2% forecasting and 8.8% planning gains show the approach works on Sionna RT data rather than on live networks. For the cellular-ai bin it is an example of treating BS-configuration optimisation as planning in a learned latent model: instead of predicting a static radio map or learning a policy from trial-and-error, the model is conditioned on BS power and downtilt, so candidate configurations can be compared in latent space before touching a physical network.

## Why it matters / what's new (ZH)
证据完全来自仿真，因此预测提升 25.2% 与规划提升 8.8% 说明的是该方法在 Sionna RT 数据上有效，而非在实网中有效。对蜂窝 AI 主题而言，它是把基站配置优化看作在所学潜空间模型中进行规划的一个例子：模型不是预测静态无线电地图，也不是通过试错学习策略，而是以基站功率和下倾角为条件，因此可以在接触物理网络之前于潜空间中比较候选配置。

## Images

None.
