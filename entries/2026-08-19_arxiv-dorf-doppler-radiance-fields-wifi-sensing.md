---
id: 2026-08-19_arxiv-dorf-doppler-radiance-fields-wifi-sensing
date_published: 2026-08-09
date_found: 2026-08-19
type: academic-paper
technology: wifi
title_en: "DoRF++: Spherical Representation Learning over Doppler Radiance Fields for Robust Wi-Fi Sensing"
title_zh: "DoRF++：基于多普勒辐射场的球面表示学习，实现跨用户稳健的 Wi-Fi 手势感知"
url: "https://arxiv.org/abs/2608.08381"
source_quality: full
topics: [WiFi-sensing, CSI, 802.11bf, Doppler, HAR, gesture-recognition, Transformer, cross-user-generalization]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
Hasanzadeh and Valaee (University of Toronto) attack the perennial weakness of Wi-Fi CSI activity recognition — models that work for the people and rooms they were trained on and collapse elsewhere — with an idea imported from computer vision. Their Doppler Radiance Field (DoRF, first sketched at IEEE CAMSAP 2025 / ICASSP 2026) treats the several Doppler-velocity projections that can be extracted from CSI (one per antenna / delay-separated path) as sparse, unposed "virtual camera views" of a single latent three-dimensional motion sequence, in direct analogy to how NeRF recovers a 3-D volume from 2-D images with unknown camera poses. A regularised matrix factorisation jointly infers the latent 3-D motion and the "effective Doppler directions" along which each observation was projected; the recovered motion is then re-projected onto an equiangular grid of directions on the unit sphere, giving a standardised spherical Doppler representation that no longer depends on which physical antenna saw what.

DoRF++ is the learning stage built for that representation. Because the field lives on a sphere, the authors replace an ordinary Transformer with a spherical Transformer: quadrature-aware attention that accounts for the non-uniform sampling density of the equiangular grid, and relative positional biases expressed with Legendre polynomials of the angle between directions, so that the model's notion of similarity is invariant to global rotations or reflections of the recovered coordinate frame (an inherent ambiguity of unposed factorisation). Random-convolution temporal features, spherical tokenisation, per-antenna DoRF construction and antenna-level max-pooling complete the pipeline shown in Fig. 4.

Evaluation uses the authors' UTHAMO-5G hand-gesture set: 10 adults, four deliberately similar gestures (circle, left–right, up–down, push–pull), 800 five-second trials, recorded in an 11 m × 5.6 m office with four 4-antenna ASUS RT-AC86U units — one transmitter and three passive receiver APs on 5 GHz / 80 MHz / 256 subcarriers, positioned for LOS (AP1), clear sightline (AP2) and NLOS behind cabinets (AP3). Under strict leave-one-subject-out testing, averaged over the three receivers, DoRF++ reaches 67.1 % four-class accuracy against 61.2 % for DoRF, 54.9 % for MORIC (delay-separated Doppler projections with order-invariant aggregation), 39.8 % for APNSS+APSC, 32.4 % for the CSI-ratio model, and ~28–30 % for magnitude-based AMAP/CMAP/CapsHAR baselines. Per-receiver numbers expose geometry dependence: 80.4 % on the LOS AP, 66.7 % on AP2, 54.2 % on the obstructed AP3. Pairwise tests on AP1 show "circle" is separated at 92–96 % while left–right vs push–pull remains confusable (75.2 %), consistent with their similarity under rotations of the coordinate frame. The authors frame the single-multi-antenna-AP result as the practically relevant one for 802.11bf-style deployments and note that transmitter–receiver–subject–reflector geometry still dominates.

## Summary (ZH)
Hasanzadeh 与 Valaee（多伦多大学）用一个借自计算机视觉的思路，攻击 Wi-Fi CSI 活动识别的老问题——模型对训练时的人和房间有效，换个环境即失效。其多普勒辐射场（DoRF，初版发表于 IEEE CAMSAP 2025 / ICASSP 2026）将可从 CSI 提取的多个多普勒速度投影（每天线/每时延分离路径各一）视为同一潜在三维运动序列的稀疏、无位姿"虚拟相机视图"，直接类比 NeRF 从位姿未知的二维图像恢复三维体。正则化矩阵分解联合推断潜在三维运动与每个观测所对应的"有效多普勒方向"；随后把恢复的运动重新投影到单位球上的等角方向网格，得到不再依赖具体物理天线的标准化球面多普勒表示。

DoRF++ 是为该表示设计的学习阶段。由于场定义在球面上，作者用球面 Transformer 取代普通 Transformer：采用考虑等角网格采样密度不均的求积感知注意力，以及用方向间夹角的勒让德多项式表达的相对位置偏置，使模型的相似度概念对恢复坐标系的全局旋转或反射保持不变（这是无位姿分解固有的歧义）。随机卷积时域特征、球面 token 化、逐天线 DoRF 构建与天线级最大池化构成图 4 所示的完整流程。

评估使用作者自建的 UTHAMO-5G 手势数据集：10 名成人、四种刻意相近的手势（画圈、左右、上下、推拉）、800 条 5 秒试次，在 11 m×5.6 m 办公室中用四台 4 天线 ASUS RT-AC86U 采集——一台发射、三台无源接收 AP，5 GHz/80 MHz/256 子载波，分别布置为视距（AP1）、通视（AP2）与柜后非视距（AP3）。在严格留一受试者测试下、对三台接收机取平均，DoRF++ 四分类精度 67.1%，DoRF 为 61.2%，MORIC（时延分离多普勒投影 + 顺序不变聚合）54.9%，APNSS+APSC 39.8%，CSI 比值模型 32.4%，基于幅度的 AMAP/CMAP/CapsHAR 约 28–30%。分接收机结果暴露出几何依赖：视距 AP 80.4%、AP2 66.7%、被遮挡的 AP3 仅 54.2%。AP1 上的两两测试显示"画圈"可在 92–96% 精度上分离，而左右 vs 推拉仍易混淆（75.2%），与两者在坐标旋转下的相似性一致。作者认为单台多天线 AP 的结果对 802.11bf 式部署最具实际意义，并指出发射机–接收机–受试者–反射体几何仍是主导因素。

## Key technical points (EN)
- DoRF: CSI-derived Doppler-velocity projections modelled as unposed virtual-camera views of a latent 3-D motion; regularised matrix factorisation recovers motion + effective Doppler directions; re-projection onto an equiangular spherical grid.
- DoRF++: spherical Transformer with quadrature-aware attention and Legendre-polynomial relative positional bias → invariance to global rotation/reflection of the recovered frame.
- Dataset UTHAMO-5G: 10 subjects, 4 similar gestures, 800 trials, 5 GHz / 80 MHz / 256 subcarriers, 1 Tx + 3 passive 4-antenna RT-AC86U receivers (LOS / clear / NLOS placements), 100 Hz resampled 5 s segments.
- Leave-one-subject-out, 3-AP average: DoRF++ 67.1 % vs DoRF 61.2 %, MORIC 54.9 %, APNSS+APSC 39.8 %, CSI-ratio 32.4 %, CapsHAR 30.1 %, AMAP 28.9 %, CMAP 27.8 %.
- Single-receiver: 80.4 % (LOS AP1), 66.7 % (AP2), 54.2 % (NLOS AP3) — geometry still dominates.
- Pairwise on AP1: circle 92.3–95.9 %; left–right vs push–pull 75.2 %.
- Prior versions: CAMSAP 2025 and ICASSP 2026; this is the full journal-style paper with the spherical-learning extension.

## Key technical points (ZH)
- DoRF：将 CSI 导出的多普勒速度投影建模为潜在三维运动的无位姿虚拟相机视图；正则化矩阵分解恢复运动与有效多普勒方向；再投影到等角球面网格。
- DoRF++：球面 Transformer，含求积感知注意力与勒让德多项式相对位置偏置 → 对恢复坐标系的全局旋转/反射不变。
- 数据集 UTHAMO-5G：10 名受试者、4 种相近手势、800 试次、5 GHz/80 MHz/256 子载波、1 发 + 3 台无源 4 天线 RT-AC86U 接收（视距/通视/非视距布置）、5 s 片段重采样至 100 Hz。
- 留一受试者、3 AP 平均：DoRF++ 67.1%，DoRF 61.2%，MORIC 54.9%，APNSS+APSC 39.8%，CSI 比值 32.4%，CapsHAR 30.1%，AMAP 28.9%，CMAP 27.8%。
- 单接收机：80.4%（视距 AP1）、66.7%（AP2）、54.2%（非视距 AP3）——几何仍是主导。
- AP1 两两分类：画圈 92.3–95.9%；左右 vs 推拉 75.2%。
- 前身版本：CAMSAP 2025 与 ICASSP 2026；本文为含球面学习扩展的完整期刊式论文。

## Why it matters / what's new (EN)
Cross-user generalisation is the recurring theme of the sensing-csi bin — self-supervised pretraining (2026-05-16_arxiv-csi-jepa), simulation-calibrated augmentation (2026-07-04_arxiv-csi-simulation-agc-calibration), Koopman forecasting (2026-08-18_arxiv-koala-koopman-csi-motion-forecast) and language alignment have each been tried. DoRF++ is the first entry to reframe the *representation* geometrically: instead of learning invariances from data, it reconstructs a device-agnostic 3-D motion field and then makes the classifier provably indifferent to the frame ambiguity that reconstruction leaves behind. The gains are real but modest in absolute terms (67 % four-class leave-one-subject-out on 10 users), the dataset is small, and the strong per-AP spread (54–80 %) shows placement still matters more than the model. It is nonetheless a clean, physics-grounded direction that fits the 802.11bf multi-antenna-AP setting and is worth tracking as the Toronto group extends it.

## Why it matters / what's new (ZH)
跨用户泛化是 sensing-csi 分区反复出现的主题——自监督预训练（2026-05-16_arxiv-csi-jepa）、仿真校准增强（2026-07-04_arxiv-csi-simulation-agc-calibration）、Koopman 预测（2026-08-18_arxiv-koala-koopman-csi-motion-forecast）与语言对齐都已被尝试。DoRF++ 是首个从几何上重构"表示"本身的条目：不再从数据中学习不变性，而是重建与设备无关的三维运动场，再让分类器对重建遗留的坐标系歧义在结构上不敏感。收益真实但绝对值不高（10 名用户留一受试者四分类 67%），数据集较小，且各 AP 间 54–80% 的巨大差异表明布置仍比模型更重要。但它是一个干净、物理接地的方向，契合 802.11bf 多天线 AP 场景，值得随多伦多团队的后续扩展持续跟踪。

## Images
![DoRF idea: multipath Doppler projections as multi-view observations, in analogy to NeRF | DoRF 思路：多径多普勒投影类比 NeRF 的多视角观测](https://arxiv.org/html/2608.08381v1/dorfidea.png)
![DoRF++ pipeline: CSI → Doppler → per-antenna DoRF → spherical tokens → quadrature-aware attention → classification | DoRF++ 流程：CSI → 多普勒 → 逐天线 DoRF → 球面 token → 求积感知注意力 → 分类](https://arxiv.org/html/2608.08381v1/Diagram.png)
