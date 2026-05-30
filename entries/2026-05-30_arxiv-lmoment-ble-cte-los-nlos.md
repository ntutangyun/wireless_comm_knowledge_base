---
id: 2026-05-30_arxiv-lmoment-ble-cte-los-nlos
date_published: 2026-02-01
date_found: 2026-05-30
type: academic-paper
title_en: "L-Moment-Based LOS and NLOS Channel Characterization via Four-Parameter Kappa Distribution for AoA BLE CTE Measurements"
title_zh: "基于 L 矩与四参数 Kappa 分布的 BLE CTE 到达角测量视距/非视距信道表征"
url: "https://arxiv.org/abs/2602.01229"
source_quality: full
topics: [BLE, AoA, CTE, channel-model, indoor-positioning, L-moments]
topic_primary: bt-location
topics_secondary: [bt-le]
technology: bluetooth
novelty_score: 3
---

## Summary (EN)
Talebian, Mahmood, and Gidlund tackle a gap in Bluetooth Low Energy (BLE) direction-finding: the channel models used for Angle-of-Arrival (AoA) positioning assume flat-fading statistics that break down in cluttered indoor settings, and few public datasets pair line-of-sight (LOS) and non-line-of-sight (NLOS) measurements at IQ level under matched geometry. The paper introduces an L-moment-based statistical framework and fits a four-parameter Kappa distribution to the per-packet channel response extracted from BLE Constant Tone Extension (CTE) measurements.

The method leans on the L-moment Ratio Diagram (LMRD) — a robust, outlier-resistant alternative to conventional moment fitting — to quantify tail heaviness and asymmetry of the fading distribution, and adds self-supervised clustering over the L-moment statistics to improve LOS/NLOS separability. A paired-geometry campaign collected 132,000 labelled CTE packets from commercial off-the-shelf BLE modules under matched anchor–tag placements, with univariate and multivariate preprocessing to strip anomalous samples.

Results: 92% of the feature-wise variance differences between LOS and NLOS were statistically significant; NLOS distributions showed markedly heavier tails and stronger asymmetry; and the four-parameter Kappa fit delivered substantially better L-moment goodness-of-fit than standard models, especially for NLOS. The framework gives BLE positioning systems a principled NLOS-detection and channel-modelling primitive grounded in measured data.

## Summary (ZH)
Talebian、Mahmood 与 Gidlund 针对蓝牙低功耗（BLE）测向中的一个缺口展开研究：到达角（AoA）定位所用的信道模型通常假设平坦衰落统计，但在杂乱的室内环境中并不成立；且公开数据集很少在相同几何条件下、以 IQ 级别同时提供视距（LOS）与非视距（NLOS）配对测量。论文提出一种基于 L 矩的统计框架，对从 BLE 恒定音调扩展（CTE）测量中提取的逐包信道响应拟合四参数 Kappa 分布。

方法核心是 L 矩比图（LMRD）——一种相比传统矩估计更稳健、抗离群点的工具——用以刻画衰落分布的尾部厚重程度与不对称性，并在 L 矩统计量上施加自监督聚类以提升 LOS/NLOS 的可分性。配对几何测量活动用商用现成 BLE 模块在匹配的锚点–标签布置下采集了 132,000 个带标签 CTE 包，并以单变量与多变量准则做预处理剔除异常样本。

结果：LOS 与 NLOS 之间 92% 的逐特征方差差异具有统计显著性；NLOS 分布呈现明显更厚的尾部与更强的不对称性；四参数 Kappa 拟合的 L 矩拟合优度显著优于标准模型，尤其在 NLOS 条件下。该框架为 BLE 定位系统提供了一个建立在实测数据之上、原理清晰的 NLOS 检测与信道建模基元。

## Key technical points (EN)
- Fits a four-parameter Kappa distribution to per-packet BLE CTE channel responses; uses the L-moment Ratio Diagram for robust, outlier-resistant fitting.
- Self-supervised clustering over L-moment statistics improves LOS vs NLOS separability without hand-labelled features.
- Dataset: 132,000 labelled CTE packets, COTS BLE modules, paired LOS/NLOS anchor–tag geometry, IQ-level data.
- 92% of feature-wise LOS/NLOS variance differences statistically significant; NLOS = heavier tails + stronger asymmetry.
- Kappa fit beats standard fading models on L-moment goodness-of-fit, especially for NLOS.

## Key technical points (ZH)
- 对逐包 BLE CTE 信道响应拟合四参数 Kappa 分布；用 L 矩比图实现稳健、抗离群点的拟合。
- 在 L 矩统计量上做自监督聚类，无需手工标注特征即可提升 LOS/NLOS 可分性。
- 数据集：132,000 个带标签 CTE 包，商用 BLE 模块，配对 LOS/NLOS 锚点–标签几何，IQ 级数据。
- 92% 的逐特征 LOS/NLOS 方差差异具统计显著性；NLOS 表现为更厚尾部与更强不对称。
- Kappa 拟合在 L 矩拟合优度上优于标准衰落模型，NLOS 条件下尤为明显。

## Why it matters / what's new (EN)
The KB's existing BLE direction-finding entries focus on DOA estimators and ToA security; this adds the channel-statistics layer underneath them. A measured, IQ-level paired LOS/NLOS dataset plus a robust L-moment fitting recipe is exactly what downstream AoA/positioning algorithms need for NLOS mitigation. It complements the connectionless Channel Sounding work (`2026-05-24_arxiv-connectionless-ble-cs-pawr`) by characterising the propagation environment those ranging systems must survive.

## Why it matters / what's new (ZH)
KB 中现有的 BLE 测向条目聚焦于 DOA 估计器与 ToA 安全；本文补上了其底层的信道统计层。一份实测、IQ 级的配对 LOS/NLOS 数据集，加上稳健的 L 矩拟合方法，正是下游 AoA/定位算法做 NLOS 抑制所需。它与无连接信道探测工作（`2026-05-24_arxiv-connectionless-ble-cs-pawr`）互补——刻画了这些测距系统必须应对的传播环境。
