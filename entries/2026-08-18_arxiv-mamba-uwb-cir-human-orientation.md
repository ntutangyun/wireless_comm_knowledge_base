---
id: 2026-08-18_arxiv-mamba-uwb-cir-human-orientation
date_published: 2026-06-24
date_found: 2026-08-18
type: academic-paper
technology: uwb
title_en: "Tracking the Turn: Mamba-Powered Human Orientation Detection using UWB"
title_zh: "追踪转身：基于 Mamba 的 UWB 信道冲激响应人体朝向检测"
url: "https://arxiv.org/abs/2606.26187"
source_quality: full
topics: [UWB, CIR, Mamba, human-orientation, DW1000, IPIN]
topic_primary: uwb-radar
topics_secondary: [uwb-ranging]
novelty_score: 2
---

## Summary (EN)

A Ghent University–imec (IDLab / WAVES) team (Mohammad Cheraghinia, Adnan Shahid, Jaron Fontaine, Cedric De Cock, David Plets, Eli De Poorter; submitted 24 Jun 2026, eess.SP, accepted at IPIN 2026) shows that the yaw orientation of a walking person can be estimated directly from the UWB channel impulse response (CIR) recorded by ordinary ranging anchors — no IMU, camera or extra sensor on the body. The insight is that the human body shadows and reflects the UWB pulse differently depending on which way the wearer faces relative to each anchor, so the multipath profile across several anchors encodes heading.

The testbed is five DW1000-based anchors at fixed positions and one wearable tag reporting at ~2.2 Hz; each anchor yields a 150-tap CIR. Three participants wore the tag on the chest, in a pocket, or on the arm; training/validation data came from in-place rotations at nine locations (80/20 split), and testing used walked trajectories with a motion-capture system supplying ground-truth position and 3×3 rotation matrices. The model embeds each anchor's CIR with multi-scale convolutions (kernels 3/5/7/15), applies FiLM-style body-part conditioning so the same network adapts to tag placement, processes the per-anchor sequence with four bidirectional Mamba (selective state-space) layers, and pools with a learnable query via multi-head cross-attention. Two Kalman-filter post-processors exploit temporal continuity: one smooths the yaw predictions alone, the other fuses them with the heading implied by tag displacement between time steps.

Raw Mamba output reaches 38.6° mean absolute error overall (chest 40.5°, pocket 41.3°, arm 35.8°), beating a Transformer baseline (45.2°) and a received-power lookup table (49.5°). Orientation-only Kalman filtering brings this to 33.4°, and the location-fused Kalman filter to 18.9° (pocket 13.0°, arm 17.9°, chest 24.1°) — a 51% reduction versus the raw network. The Mamba model is also lighter than the Transformer (409K parameters / 1.6 MB with linear complexity vs 1.14M / 4.4 MB with quadratic complexity). Limitations: three subjects in one controlled indoor testbed; broader-population generalisation is not yet shown.

## Summary (ZH)

根特大学–imec（IDLab／WAVES）团队（Mohammad Cheraghinia、Adnan Shahid、Jaron Fontaine、Cedric De Cock、David Plets、Eli De Poorter；2026 年 6 月 24 日提交，eess.SP，已被 IPIN 2026 录用）证明：仅利用普通测距锚点记录的 UWB 信道冲激响应（CIR），即可直接估计行走者的偏航朝向——身上无需 IMU、摄像头或任何额外传感器。其物理依据是人体对 UWB 脉冲的遮挡与反射随佩戴者相对各锚点的朝向而变化，因此多锚点的多径轮廓中蕴含朝向信息。

测试台由五个基于 DW1000 的固定锚点与一个约 2.2 Hz 上报的可穿戴标签组成，每个锚点输出 150 抽头 CIR。三名受试者分别将标签佩戴于胸前、口袋或手臂；训练／验证数据来自九个位置上的原地旋转（80/20 划分），测试数据为行走轨迹，动作捕捉系统提供位置与 3×3 旋转矩阵真值。模型用多尺度卷积（核 3/5/7/15）嵌入各锚点 CIR，用 FiLM 式身体部位条件化让同一网络适配不同佩戴位置，以四层双向 Mamba（选择性状态空间）层处理逐锚点序列，再用可学习查询经多头交叉注意力聚合。两种卡尔曼滤波后处理利用时间连续性：一种仅平滑偏航预测，另一种融合相邻时刻标签位移所隐含的航向。

Mamba 原始输出整体平均绝对误差 38.6°（胸 40.5°、口袋 41.3°、手臂 35.8°），优于 Transformer 基线（45.2°）与接收功率查表法（49.5°）。仅朝向卡尔曼滤波降至 33.4°，位置融合卡尔曼滤波降至 18.9°（口袋 13.0°、手臂 17.9°、胸 24.1°），较原始网络降低 51%。Mamba 模型也更轻量（409K 参数／1.6 MB、线性复杂度，对比 Transformer 1.14M／4.4 MB、二次复杂度）。局限：仅三名受试者、单一受控室内测试台，更大人群泛化尚未验证。

## Key technical points (EN)

- **Sensing on ranging hardware** — orientation is inferred from the CIR that 802.15.4-class UWB anchors already capture for ranging (five DW1000 anchors, 150-tap CIR, ~2.2 Hz tag rate); no additional radio, sensor or waveform.
- **Body-part-conditioned bidirectional Mamba** — multi-scale conv CIR embedding → FiLM conditioning on tag placement (chest/pocket/arm) → four bidirectional selective-state-space layers over the anchor sequence → learnable-query cross-attention pooling.
- **Kalman post-processing is the big lever** — 38.6° raw → 33.4° with yaw-only KF → 18.9° when tag-displacement heading is fused; pocket placement ends best (13.0°).
- **Baselines** — Transformer 45.2°, received-power rule-based 49.5°; Mamba is ~2.8× smaller (409K vs 1.14M params) with linear rather than quadratic sequence complexity.
- **Ground truth and protocol** — MoCap position + rotation matrices; in-place rotations at nine spots for training, walked trajectories for test; three participants.
- **Applications named** — museum guidance, smart-building access, and other human-environment interfaces where facing direction matters, not just position.

## Key technical points (ZH)

- **在测距硬件上实现感知** —— 朝向由 802.15.4 级 UWB 锚点为测距本就采集的 CIR 推断（五个 DW1000 锚点、150 抽头 CIR、标签约 2.2 Hz）；无需额外射频、传感器或波形。
- **身体部位条件化的双向 Mamba** —— 多尺度卷积 CIR 嵌入 → 按佩戴位置（胸／口袋／手臂）做 FiLM 条件化 → 四层双向选择性状态空间层处理锚点序列 → 可学习查询交叉注意力聚合。
- **卡尔曼后处理是主要增益来源** —— 原始 38.6° → 仅偏航 KF 33.4° → 融合标签位移航向 18.9°；口袋佩戴最终最优（13.0°）。
- **基线** —— Transformer 45.2°、接收功率规则法 49.5°；Mamba 参数量小约 2.8 倍（409K 对 1.14M），序列复杂度由二次降为线性。
- **真值与流程** —— 动捕位置 + 旋转矩阵；九个位置原地旋转用于训练，行走轨迹用于测试；三名受试者。
- **提及的应用** —— 博物馆导览、智能楼宇门禁及其他需要“面朝方向”而非仅位置的人机环境交互。

## Why it matters / what's new (EN)

The KB's UWB radar/sensing bin so far holds mm-level phase radar (2026-07-08_arxiv-uwb-radar-phase-multichannel), body-composition sensing (2026-05-24_arxiv-uwb-fat-body-composition) and a standard-compliant ISAC receiver (2026-08-17_arxiv-neuromorphic-isac-uwb-ris); its localization entries (2026-06-29_arxiv-ab-sync-uwb-tdoa-clock-sync, 2026-08-15_arxiv-uwb-amr-auto-anchor-calibration) treat the CIR only as a ranging input. This is the first entry that extracts a *semantic* human state — facing direction — from the ranging CIR of a deployed anchor network with a tag on the body, i.e. sensing as a free by-product of an existing positioning install rather than a separate radar mode. It is also the KB's first UWB use of a Mamba/state-space backbone, with the practical finding that fusing displacement heading via a Kalman filter matters more than the backbone choice. Late ingest from the arxiv listing's sub-fold (June paper found in August); novelty 2 given the small three-subject study and DW1000-era hardware.

## Why it matters / what's new (ZH)

知识库 UWB 雷达／感知板块此前包含毫米级相位雷达（2026-07-08_arxiv-uwb-radar-phase-multichannel）、体成分感知（2026-05-24_arxiv-uwb-fat-body-composition）与标准兼容通感一体化接收机（2026-08-17_arxiv-neuromorphic-isac-uwb-ris）；定位类条目（2026-06-29_arxiv-ab-sync-uwb-tdoa-clock-sync、2026-08-15_arxiv-uwb-amr-auto-anchor-calibration）仅把 CIR 当作测距输入。本条是首个从已部署锚点网络的测距 CIR（标签佩戴在身上）中提取“语义化”人体状态——面朝方向——的条目，即把感知作为现有定位部署的免费副产品，而非独立雷达模式。这也是知识库 UWB 板块首次出现 Mamba／状态空间骨干网络，其实用结论是：经卡尔曼滤波融合位移航向比骨干网络的选择更关键。属 arxiv 列表折叠区的迟到收录（6 月论文 8 月发现）；鉴于仅三名受试者与 DW1000 时代硬件，新颖度评为 2。

## Images

![Mamba model architecture: multi-scale CIR embedding, body-part conditioning, bidirectional Mamba layers and query pooling | Mamba 模型架构：多尺度 CIR 嵌入、身体部位条件化、双向 Mamba 层与查询聚合](https://arxiv.org/html/2606.26187v1/Mamba_model_Diagram.svg)
![CDF of yaw error across methods and Kalman-filter variants | 各方法及卡尔曼滤波变体的偏航误差 CDF](https://arxiv.org/html/2606.26187v1/summary_cdf.svg)
![Training layout: in-place rotations at nine locations under five anchors | 训练布局：五锚点下九个位置的原地旋转](https://arxiv.org/html/2606.26187v1/Train_data.svg)
![Walked test trajectory with location-fused Kalman filter output | 位置融合卡尔曼滤波输出的行走测试轨迹](https://arxiv.org/html/2606.26187v1/trajectory_kf_location.svg)
