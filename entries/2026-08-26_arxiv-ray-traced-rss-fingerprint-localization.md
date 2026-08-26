---
id: 2026-08-26_arxiv-ray-traced-rss-fingerprint-localization
date_published: 2026-08-24
date_found: 2026-08-26
type: academic-paper
technology: wifi
title_en: "Ray-Traced Augmentation for Signal Strength Based Localization"
title_zh: "射线追踪增强的 Wi-Fi RSS 指纹室内定位：标定数字孪生生成合成指纹"
url: "https://arxiv.org/abs/2608.23901"
source_quality: full
topics: [indoor-positioning, RSSI, fingerprinting, ray-tracing, digital-twin, deep-learning, Sionna]
topic_primary: ftm-ranging
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
Og, Sun, Nikolaidis and Ardakanian (University of Alberta / University of Waterloo; 28 pages, submitted 24 Aug 2026) attack the classic cost problem of Wi-Fi RSS fingerprint localization — building and maintaining a dense real-world fingerprint database — by generating the fingerprints synthetically from a calibrated ray-traced digital twin of the building. The pipeline converts a BIM building model into an RF propagation scene for NVIDIA's Sionna RT ray tracer, then calibrates it in two tiers: Stage I refines the material parameters via Bayesian optimization (Gaussian-process surrogate with Max-value Entropy Search acquisition), minimizing the discrepancy between simulated and measured RSS at just 34 calibration locations; Stage III adds a per-AP device calibration that computes the average simulated-vs-real offset per access point to absorb manufacturing spread, antenna-gain variation and environmental drift — applied by translating the real measurements rather than modifying the maps, so multiple client devices can share one twin.

The calibrated twin then produces RSS fingerprints at ~2,155 filtered synthetic locations — orders of magnitude more than were ever measured. For learning, the authors introduce image-like RSS representations: a binary matrix (1 where measured RSS falls in a bin whose size is set by that AP's offset standard deviation) and a multivalued matrix (Gaussian-weighted similarity between each cell's simulated RSS and the measurement), stacked per-AP along the channel dimension into a modified ResNet-18 that regresses (x, y) coordinates. Dual-band operation fuses 2.4 GHz and 5 GHz upstream (stacking both bands' matrices before the network), which beats downstream fusion of independent per-band estimates; 2.4 GHz alone calibrates better than 5 GHz (4.97 vs 7.27 dBm error), consistent with better material penetration.

Evaluated on the semi-basement level of Athabasca Hall (University of Alberta) with 10 APs and a Samsung Galaxy A15 collecting 15-second captures at 34 ground-truth points, a model trained exclusively on synthetic fingerprints achieves 3.05 ± 1.52 m mean error on real test data — 33.6% better than the strongest baseline (extendGAN+ at 4.59 m) and well ahead of RBF interpolation (4.52 m), convex-hull (5.58 m) and DBSCAN (7.06 m) approaches, with lower variance and roughly half the generation time of the GAN pipeline. The claimed novelty is the combination: physics-based GPU ray tracing with two-tier calibration (building materials + per-AP residuals), CNN-friendly binary/multivalued fingerprint encodings, and cross-band fusion — reaching state-of-the-art with no real fingerprints in the training set at all, only the 34-point calibration survey.

## Summary (ZH)
Og、Sun、Nikolaidis 与 Ardakanian（阿尔伯塔大学/滑铁卢大学；28 页，2026 年 8 月 24 日提交）针对 Wi-Fi RSS 指纹定位的经典成本问题——构建并维护高密度实测指纹库——提出从建筑物的标定射线追踪数字孪生中合成生成指纹。流程将 BIM 建筑模型转换为 NVIDIA Sionna RT 的射频传播场景，随后两级标定：第一级用贝叶斯优化（高斯过程代理 + 最大值熵搜索采集函数）精调材料参数，仅用 34 个标定点最小化仿真与实测 RSS 的差异；第三级做每 AP 设备标定，计算每个接入点的仿真-实测平均偏移，吸收制造离散、天线增益差异与环境漂移——通过平移实测值而非修改地图实现，使多种客户端设备可共享同一孪生。

标定后的孪生在约 2,155 个过滤后的合成位置生成 RSS 指纹——比实测规模高出数量级。学习侧提出类图像的 RSS 表示：二值矩阵（实测 RSS 落入按该 AP 偏移标准差设定的分箱则为 1）与多值矩阵（各栅格仿真 RSS 与实测值的高斯加权相似度），按 AP 沿通道维堆叠输入改造的 ResNet-18 回归 (x, y) 坐标。双频段采用上游融合（网络输入前堆叠 2.4/5 GHz 两组矩阵），优于各频段独立估计再合并的下游融合；单独看 2.4 GHz 标定误差低于 5 GHz（4.97 对 7.27 dBm），与其更强的材料穿透一致。

在阿尔伯塔大学 Athabasca Hall 半地下层（10 个 AP，Samsung Galaxy A15 在 34 个真值点各采集 15 秒）评估：仅用合成指纹训练的模型在真实测试集上平均误差 3.05 ± 1.52 m——比最强基线 extendGAN+（4.59 m）好 33.6%，也明显优于 RBF 插值（4.52 m）、凸包（5.58 m）与 DBSCAN（7.06 m），方差更小，生成时间约为 GAN 流水线一半。其宣称的新颖性在于组合：物理射线追踪 + 两级标定（建筑材料 + 每 AP 残差）、便于 CNN 的二值/多值指纹编码、跨频段融合——训练集中完全不含实测指纹（仅 34 点标定勘测）即达到最先进水平。

## Key technical points (EN)
- Pipeline: BIM → Sionna RT scene → Stage I Bayesian-optimization material calibration (GP surrogate, MES acquisition, 34 calibration points, ~30 s/evaluation) → Stage III per-AP offset calibration → ~2,155 synthetic fingerprint locations.
- Per-AP calibration translates the real measurements instead of editing the radio maps — one digital twin serves heterogeneous client devices.
- Representations: binary matrix (bin size = per-AP offset std dev) and multivalued matrix (Gaussian similarity); per-AP matrices stacked as CNN channels; modified ResNet-18 with regression head.
- Dual-band upstream fusion (2.4 + 5 GHz stacked pre-network) is the best configuration; 2.4 GHz calibrates to 4.97 dBm vs 7.27 dBm at 5 GHz.
- Synthetic-only training: 3.05 ± 1.52 m mean error on real test data — 33.6% better than extendGAN+ (4.59 m); best single-band 3.56 m (2.4 GHz multivalued); baselines: RBF 4.52 m, convex hull 5.58 m, DBSCAN 7.06 m.
- ~5.5 min generation vs ~11 min for extendGAN+ at an order of magnitude fewer required samples.
- Testbed: Athabasca Hall Level 1 (semi-basement), University of Alberta; 10 omnidirectional APs; Samsung Galaxy A15 5G at waist height.

## Key technical points (ZH)
- 流水线：BIM → Sionna RT 场景 → 第一级贝叶斯优化材料标定（GP 代理、MES 采集、34 个标定点、约 30 s/次评估）→ 第三级每 AP 偏移标定 → 约 2,155 个合成指纹位置。
- 每 AP 标定通过平移实测值而非修改无线电地图实现——一个数字孪生服务异构客户端设备。
- 表示：二值矩阵（分箱大小 = 每 AP 偏移标准差）与多值矩阵（高斯相似度）；按 AP 堆叠为 CNN 通道；改造 ResNet-18 回归坐标。
- 双频上游融合（2.4 + 5 GHz 网络前堆叠）为最佳配置；2.4 GHz 标定误差 4.97 dBm，5 GHz 为 7.27 dBm。
- 纯合成训练：真实测试集平均误差 3.05 ± 1.52 m——比 extendGAN+（4.59 m）好 33.6%；最佳单频 3.56 m（2.4 GHz 多值）；基线：RBF 4.52 m、凸包 5.58 m、DBSCAN 7.06 m。
- 生成耗时约 5.5 分钟，extendGAN+ 约 11 分钟，且所需样本少一个数量级。
- 测试床：阿尔伯塔大学 Athabasca Hall 半地下一层；10 个全向 AP；Samsung Galaxy A15 5G 腰部高度采集。

## Why it matters / what's new (EN)
The ftm-ranging bin's recent additions are model-side: GLocFM (2026-08-20_arxiv-glocfm-geometry-aware-wifi-localization) learns a geometry-aware foundation model from data, and RadioRange (2026-08-17_arxiv-radiorange-ranging-simulator, primary in the UWB bin) builds a digital-twin ranging simulator. This paper closes the loop between the two threads for the humblest and most deployable signal — plain RSS from unmodified APs and a stock smartphone: it shows a physics-based twin, calibrated with a one-afternoon 34-point survey, can replace the entire fingerprint-collection campaign that has kept RSS fingerprinting expensive since RADAR/Horus. The two-tier calibration design (global materials via BO + per-AP residual offsets applied to measurements, not maps) is the transferable idea — the same pattern applies to any simulation-to-reality RF gap, including sensing and coverage-planning twins. Fair caveats: single building level, 10 APs, one client device, and 3 m-class accuracy — useful for room-level services, not a competitor to 802.11az/bk time-based ranging where infrastructure supports it.

## Why it matters / what's new (ZH)
ftm-ranging 分区近期新增偏模型侧：GLocFM（2026-08-20_arxiv-glocfm-geometry-aware-wifi-localization）从数据学习几何感知基础模型，RadioRange（2026-08-17_arxiv-radiorange-ranging-simulator，主分区为 UWB）构建数字孪生测距仿真器。本文将两条线索在最朴素、最易部署的信号上闭环——未改动 AP 与普通智能手机的 RSS：一次下午即可完成的 34 点勘测标定的物理孪生，即可替代自 RADAR/Horus 以来使 RSS 指纹法昂贵的整个指纹采集流程。两级标定设计（贝叶斯优化全局材料 + 作用于测量值而非地图的每 AP 残差偏移）是可迁移的核心思想——同样适用于感知与覆盖规划等任何仿真-现实射频差距场景。客观局限：单一楼层、10 个 AP、单一客户端设备、3 m 级精度——适合房间级服务，在基础设施支持时并非 802.11az/bk 时间测距的竞争者。

## Images
![Model architecture: per-AP binary/multivalued RSS matrices stacked as channels into a modified ResNet-18 coordinate regressor | 模型架构：每 AP 二值/多值 RSS 矩阵按通道堆叠输入改造的 ResNet-18 坐标回归器](https://arxiv.org/html/2608.23901v1/x1.png)
![Athabasca Hall Level 1 digital building model used as the ray-tracing scene | 用作射线追踪场景的 Athabasca Hall 一层数字建筑模型](https://arxiv.org/html/2608.23901v1/Images/ATH-level-1-ortho-blender.png)
![Floor plan top view of the evaluation floor with AP placement | 评估楼层平面俯视图及 AP 布设](https://arxiv.org/html/2608.23901v1/Images/ATH-Floor-Top-View.png)
