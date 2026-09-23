---
id: 2026-09-23_arxiv-hymn-benchmark-uwb-ble-wifi-positioning
date_published: 2026-09-22
date_found: 2026-09-23
type: academic-paper
technology: uwb
title_en: "From Least Squares to Deep Learning: Benchmarking Indoor Positioning on the HYMN Multi-Technology Dataset"
title_zh: "从最小二乘到深度学习：基于 HYMN 多技术数据集的室内定位方法基准测试"
url: "https://arxiv.org/abs/2609.25835"
source_quality: full
topics: [UWB, BLE, WiFi-FTM, indoor-positioning, benchmark, deep-learning, sensor-fusion]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

On 22 September 2026, Paul Schwarzbach and Muhammad Ammad posted "From Least Squares to Deep Learning: Benchmarking Indoor Positioning on the HYMN Multi-Technology Dataset" to arxiv (eess.SP). The paper is a follow-on analysis built on the HYMN dataset that the same lab introduced earlier this year (arxiv 2604.25541, covered in this KB's 2026-05-03 entry) — a HYMN dataset (five technologies; this paper uses the UWB, BLE and Wi-Fi FTM ranges), namely time-synchronised UWB, Bluetooth Low Energy (BLE), and Wi-Fi fine-timing-measurement (FTM) ranging data collected against millimetre-precision ground truth (a Leica TS16 total station) at 48 reference points across a 44 m x 18 m industrial hall in Torgau, Germany, with over 60,000 ranging measurements per technology from 10 UWB two-way-ranging anchors, 5 BLE phase-based-ranging beacons, and 6 Wi-Fi FTM access points. Using this fused multi-technology data, the authors evaluate four positioning methods spanning a spectrum from classical geometry to deep learning: iterative least squares (ILS), Huber-weighted robust least squares (RLS), a Bayesian grid filter (BGF, 0.5 m grid cells with per-technology noise models and constant-velocity motion updates), and a ResNet regressor mapping multi-channel likelihood maps to coordinates, the last evaluated under two distinct protocols — random-split (which tests interpolation between seen locations) and spatial holdout (which tests generalisation to entirely unseen reference points). The paper's central motivating observation is that per-technology ranging quality spans roughly two orders of magnitude in this deployment (median ranging residual: UWB 0.27 m, Wi-Fi FTM 1.46 m, BLE 4.76 m), which caps the performance of any geometric solver that weighs all anchors/technologies equally. Reported median/P95 positioning errors: ILS 3.616 m / 18.659 m; RLS 1.075 m / 5.684 m; BGF 0.444 m / 6.295 m; ResNet under random-split 0.554 m / 1.314 m; ResNet under spatial holdout 3.222 m / 7.565 m. The headline finding is that the Bayesian grid filter is competitive with — and on median error slightly better than — the deep-learning regressor, with the ResNet's advantage concentrated at the tail (95th percentile) under the random-split protocol; but holding reference points out of the ResNet's training set (the spatial holdout protocol) increases its median error nearly six-fold (0.554 m to 3.222 m), a result the authors present as evidence that a substantial part of the deep-learning method's apparent advantage under random splits reflects interpolation between nearby seen locations rather than genuine generalisation to new positions. The dataset and evaluation code are released publicly (Zenodo DOI 10.5281/zenodo.17979434 for the dataset; GitHub repo TUD-ITVS/hymn-localization-ipin2026 and a companion Zenodo DOI 10.5281/zenodo.20058106 for the code), both confirmed live.

## Summary (ZH)

2026年9月22日，Paul Schwarzbach 与 Muhammad Ammad 在 arxiv（eess.SP 类别）发布了论文《从最小二乘到深度学习：基于 HYMN 多技术数据集的室内定位方法基准测试》（From Least Squares to Deep Learning: Benchmarking Indoor Positioning on the HYMN Multi-Technology Dataset）。该论文是同一实验室今年早些时候提出的 HYMN 数据集（arxiv 2604.25541，已收录于本知识库2026-05-03的条目；该 HYMN 数据集共含五种技术，本文使用其中的 UWB、BLE 与 Wi-Fi FTM 测距数据）之上的后续分析——具体为在德国托尔高（Torgau）一座44米×18米工业厂房内、48个参考点处采集的、与毫米级真值（Leica TS16 全站仪）同步的UWB、蓝牙低功耗（BLE）与Wi-Fi精细计时测量（FTM）测距数据，由10个UWB双向测距锚点、5个基于相位的BLE测距信标与6个Wi-Fi FTM接入点采集，每种技术均超过60,000次测距测量。基于这一融合的多技术数据，作者评估了从经典几何方法到深度学习方法的四种定位方法：迭代最小二乘（ILS）、基于 Huber 加权的鲁棒最小二乘（RLS）、贝叶斯网格滤波器（BGF，0.5米网格单元，含按技术区分的噪声模型与匀速运动更新），以及将多通道似然图映射为坐标的 ResNet 回归模型——后者在两种不同协议下评估：随机划分（检验对已见位置的插值能力）与空间留出（检验对完全未见参考点的泛化能力）。论文的核心出发点是：在该部署环境中，各技术的测距质量相差约两个数量级（测距残差中位数：UWB为0.27米，Wi-Fi FTM为1.46米，BLE为4.76米），这限制了任何对所有锚点/技术等权处理的几何求解器的性能上限。报告的定位误差中位数/P95分别为：ILS 3.616米／18.659米；RLS 1.075米／5.684米；BGF 0.444米／6.295米；随机划分下的 ResNet 0.554米／1.314米；空间留出下的 ResNet 3.222米／7.565米。核心发现是：贝叶斯网格滤波器的中位数误差表现与深度学习回归模型相当，甚至略优，而 ResNet 的优势主要体现在随机划分协议下的尾部（第95百分位）；但当把参考点从 ResNet 的训练集中留出（空间留出协议）时，其中位数误差增大近六倍（0.554米升至3.222米），作者以此说明：深度学习方法在随机划分下表现出的明显优势，相当一部分其实反映的是对邻近已见位置的插值能力，而非真正对新位置的泛化能力。数据集与评估代码已公开发布（数据集 Zenodo DOI 10.5281/zenodo.17979434；代码见 GitHub 仓库 TUD-ITVS/hymn-localization-ipin2026 及配套 Zenodo DOI 10.5281/zenodo.20058106），均已确认可正常访问。

## Key technical points (EN)

- Builds on the HYMN dataset (arxiv 2604.25541, KB 2026-05-03; five technologies — this paper uses the UWB, BLE and Wi-Fi FTM ranges): fused UWB + BLE + Wi-Fi FTM ranging at 48 reference points in a 44 m x 18 m industrial hall (Torgau, Germany), millimetre ground truth via Leica TS16 total station, >60,000 ranging measurements per technology (10 UWB anchors, 5 BLE beacons, 6 Wi-Fi FTM APs).
- Per-technology ranging quality spans ~2 orders of magnitude (median residual): UWB 0.27 m, Wi-Fi FTM 1.46 m, BLE 4.76 m — caps any geometry-based solver that weighs anchors/technologies equally.
- Four methods compared: iterative least squares (ILS), Huber-weighted robust least squares (RLS, delta=1.0 m), a Bayesian grid filter (BGF, 0.5 m cells, per-technology noise + constant-velocity motion model), and a ResNet regressor over multi-channel likelihood maps.
- ResNet evaluated under two protocols: random-split (interpolation between seen locations) and spatial holdout (generalisation to unseen reference points).
- Median / P95 positioning error: ILS 3.616 m / 18.659 m; RLS 1.075 m / 5.684 m; BGF 0.444 m / 6.295 m; ResNet random-split 0.554 m / 1.314 m; ResNet spatial-holdout 3.222 m / 7.565 m.
- Headline: BGF is competitive with (slightly better median than) the deep-learning regressor; ResNet's advantage concentrates at the 95th-percentile tail under random-split. Spatial holdout increases ResNet median error ~5.8x (0.554 m -> 3.222 m), exposing an interpolation-vs-generalisation gap invisible under random splits.
- Dataset (Zenodo DOI 10.5281/zenodo.17979434) and code (GitHub TUD-ITVS/hymn-localization-ipin2026; Zenodo DOI 10.5281/zenodo.20058106) both released publicly under MIT license, confirmed live.

## Key technical points (ZH)

- 基于 HYMN 数据集（arxiv 2604.25541，本知识库2026-05-03条目；该数据集共含五种技术，本文使用其中 UWB、BLE 与 Wi-Fi FTM 测距数据）：在德国托尔高一座44米×18米工业厂房、48个参考点处融合采集UWB+BLE+Wi-Fi FTM测距数据，采用 Leica TS16 全站仪提供毫米级真值，每种技术测距测量超过60,000次（10个UWB锚点、5个BLE信标、6个Wi-Fi FTM接入点）。
- 各技术测距质量相差约两个数量级（测距残差中位数）：UWB为0.27米，Wi-Fi FTM为1.46米，BLE为4.76米——限制了对所有锚点/技术等权处理的几何求解器的性能上限。
- 对比四种方法：迭代最小二乘（ILS）、基于 Huber 加权的鲁棒最小二乘（RLS，δ=1.0米）、贝叶斯网格滤波器（BGF，0.5米网格，含按技术区分的噪声模型与匀速运动模型），以及基于多通道似然图的 ResNet 回归模型。
- ResNet 在两种协议下评估：随机划分（对已见位置的插值能力）与空间留出（对未见参考点的泛化能力）。
- 定位误差中位数／P95：ILS 3.616米／18.659米；RLS 1.075米／5.684米；BGF 0.444米／6.295米；随机划分下的 ResNet 0.554米／1.314米；空间留出下的 ResNet 3.222米／7.565米。
- 核心发现：BGF 的中位数表现与深度学习回归模型相当（甚至略优），ResNet 的优势主要体现在随机划分协议下的第95百分位尾部。空间留出协议下 ResNet 的中位数误差增大约5.8倍（0.554米升至3.222米），揭示了随机划分掩盖的"插值 vs 泛化"差距。
- 数据集（Zenodo DOI 10.5281/zenodo.17979434）与代码（GitHub 仓库 TUD-ITVS/hymn-localization-ipin2026；配套 Zenodo DOI 10.5281/zenodo.20058106）均以 MIT 许可公开发布，已确认可正常访问。

## Why it matters / what's new (EN)

This is a direct, citable follow-on to the KB's 2026-05-03 HYMN dataset entry, closing the loop from "here is a new multi-technology ranging dataset" to "here is what four representative positioning-method families actually achieve on it, and why." It adds concretely to the KB's small but growing tooling/benchmark lineage (alongside RadioRange, KB 2026-08-17, and the ceiling-radar FMCW/IR-UWB/Wi-Fi comparison, KB 2026-08-21): rather than a new algorithm claiming a headline accuracy number, its contribution is a public, code-and-data-backed demonstration that a classical Bayesian grid filter can match a deep-learning regressor on median accuracy, and that random-split evaluation protocols common in this literature can substantially overstate a learned model's real-world generalisation, a methodological caution relevant to any future UWB-fusion positioning paper this bin ingests.

## Why it matters / what's new (ZH)

本条目是本知识库2026-05-03 HYMN数据集条目的直接后续研究，补全了从"这是一个新的多技术测距数据集"到"四类代表性定位方法在其上的实际表现及原因"这一闭环。它为本知识库规模虽小但持续增长的工具/基准测试类条目（与 RadioRange，KB 2026-08-17，以及天花板雷达 FMCW/IR-UWB/Wi-Fi 对比，KB 2026-08-21 并列）增添了具体内容：其贡献并非提出一种号称达到某个精度指标的新算法，而是以公开的代码与数据证明——经典的贝叶斯网格滤波器在中位数精度上可与深度学习回归模型相当，且该领域常见的随机划分评估协议可能显著高估学习模型的真实泛化能力，这一方法论提醒对本板块未来收录的任何UWB融合定位论文都具有参考价值。

## Images

None.
