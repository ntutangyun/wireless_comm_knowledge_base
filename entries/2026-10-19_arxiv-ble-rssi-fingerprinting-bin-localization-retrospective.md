---
id: 2026-10-19_arxiv-ble-rssi-fingerprinting-bin-localization-retrospective
date_published: 2026-10-15
date_found: 2026-10-19
technology: bluetooth
type: academic-paper
title_en: "Retrospective Evaluation of Bluetooth RSSI Fingerprinting for Bin Localization on an Industrial Shop Floor"
title_zh: "工业车间料箱定位的蓝牙 RSSI 指纹法回溯评估"
url: "https://arxiv.org/abs/2610.22680"
source_quality: full
topics: [BLE, RSSI, fingerprinting, indoor-localization, asset-tracking, multilateration]
topic_primary: bt-location
topics_secondary: [bt-le]
novelty_score: 2
---

## Summary (EN)

This arXiv preprint (Saif Lakhani, cs.NI, submitted Oct 15, 2026) re-evaluates an archived 2019 prototype that tracked movable bins on an industrial floor using BLE beacons attached to the bins and fixed BLE relays on the walls. The paper separates two questions: whether a radio map can recognise readings from surveyed positions, and whether it can estimate coordinates at positions held out of training. The author argues that accuracy at repeatedly surveyed points should not be presented as continuous indoor localisation.

The dataset comes from an archival repository: measurements dated Jan 17 and Mar 1, 2019, 24 fixed relays, 202 beacon identifiers, observed coordinates spanning 149 m by 26 m. The Jan 17 session has 20,615 rows; after removing rows heard by fewer than three relays, 19,034 observations over 90 positions with 23 relay features remain. The Mar 1 data (313 rows) is used only as a diagnostic. RSSI magnitudes are used with 0 (no reception) mapped to a sentinel of 105; the relays also applied a Kalman filter in firmware whose parameters were not preserved. Methods compared are log-distance path-loss multilateration, distance-weighted kNN (k = 5), Random Forest (200 trees, no hyperparameter search) and a mean-coordinate baseline, evaluated on a random 70/30 row split (surveyed positions) and a grouped 70/30 split by coordinate (unseen positions).

On surveyed positions kNN reached a 0.00 m median (77.2% within 3 m, 94.2% within 10 m) and Random Forest a 0.66 m median (77.9% within 3 m, 96.3% within 10 m), while multilateration had a 15.03 m median. On unseen positions both learned models had a 9.42 m median (about 55% within 10 m), multilateration 19.41 m, and the mean-position baseline 19.62 m. The kNN 0.00 m median arises because 59.3% of its estimates exactly matched a recorded coordinate. The author concludes the results support RSSI fingerprinting for a fixed inventory of surveyed bin positions, not precise continuous localisation between survey points.

Stated limitations: a single industrial floor and primary survey date; no independent ground truth for motion within a bin area; several beacon IDs may share a coordinate; the random row split may place repeated fingerprints in both train and test, making it optimistic; median preprocessing and firmware Kalman filtering may make reported errors a lower bound for an unfiltered deployment. The author suggests a repeat dense-subset survey on a later date with grouped cross-validation across positions and sessions.

## Summary (ZH)

这篇 arXiv 预印本（Saif Lakhani，cs.NI，2026 年 10 月 15 日提交）重新评估了一个 2019 年的归档原型：该原型用附着在料箱上的 BLE 信标和墙面固定的 BLE 中继在工业车间内追踪可移动料箱。论文区分了两个问题：无线电地图能否识别已勘测位置的读数，以及能否估计训练中未出现位置的坐标。作者认为，在重复勘测点上的准确率不应被当作连续室内定位的准确率。

数据集来自归档仓库：测量日期为 2019 年 1 月 17 日和 3 月 1 日，24 个固定中继、202 个信标标识，观测坐标跨度 149 m × 26 m。1 月 17 日会话共 20,615 行；剔除被少于三个中继接收的行后，剩 19,034 条观测、90 个位置、23 个中继特征。3 月 1 日数据（313 行）仅作诊断。使用 RSSI 幅值，0（未接收）映射为哨兵值 105；中继固件中还应用了卡尔曼滤波，但其参数未保留。比较的方法包括对数距离路径损耗多边定位、距离加权 kNN（k = 5）、随机森林（200 棵树，未做超参搜索）和均值坐标基线，分别在随机 70/30 行划分（已勘测位置）和按坐标分组的 70/30 划分（未见位置）上评估。

在已勘测位置，kNN 中位误差 0.00 m（3 m 内 77.2%，10 m 内 94.2%），随机森林中位 0.66 m（3 m 内 77.9%，10 m 内 96.3%），多边定位中位 15.03 m。在未见位置，两种学习模型中位误差均为 9.42 m（约 55% 在 10 m 内），多边定位 19.41 m，均值位置基线 19.62 m。kNN 的 0.00 m 中位数源于其 59.3% 的估计恰好等于记录坐标。作者结论是：结果支持对固定的已勘测料箱位置清单使用 RSSI 指纹，但不支持在勘测点之间做精确的连续定位。

作者列出的局限：仅一个工业楼层和一个主要勘测日期；缺乏料箱区域内运动的独立真值；多个信标 ID 可能共用一个坐标；随机行划分可能使重复指纹同时出现在训练和测试集中，结果偏乐观；中值预处理和固件卡尔曼滤波可能使所报误差成为未滤波部署的下界。作者建议之后对稠密子集重复勘测，并做跨位置和跨会话的分组交叉验证。

## Key technical points (EN)

- **Setup**: 24 fixed BLE relays, 202 beacon IDs, 149 m x 26 m floor; 19,034 observations over 90 positions, 23 relay features (Jan 17, 2019 session).
- **Methods**: log-distance multilateration (q = 81.56 + 5.54 log10(d) on the unseen split), kNN (k=5), Random Forest (200 trees), mean-coordinate baseline.
- **Surveyed positions**: kNN median 0.00 m / mean 2.11 m; RF median 0.66 m / mean 2.07 m; multilateration median 15.03 m.
- **Unseen positions**: kNN and RF median 9.42 m (mean 10.24 / 10.09 m; 6.9% / 5.8% within 3 m); multilateration 19.41 m; mean baseline 19.62 m.
- **Caveat**: 59.3% of kNN estimates exactly equal a recorded coordinate, so the 0.00 m median reflects repeated vectors; the random-split result may be optimistic.
- **Conclusion**: fingerprinting works for a fixed inventory of surveyed positions, not continuous localisation between them.

## Key technical points (ZH)

- **设置**：24 个固定 BLE 中继、202 个信标 ID、149 m x 26 m 楼层；2019 年 1 月 17 日会话中 90 个位置共 19,034 条观测、23 个中继特征。
- **方法**：对数距离多边定位（未见划分上 q = 81.56 + 5.54 log10(d)）、kNN（k=5）、随机森林（200 棵树）、均值坐标基线。
- **已勘测位置**：kNN 中位 0.00 m / 均值 2.11 m；RF 中位 0.66 m / 均值 2.07 m；多边定位中位 15.03 m。
- **未见位置**：kNN 与 RF 中位 9.42 m（均值 10.24 / 10.09 m；3 m 内 6.9% / 5.8%）；多边定位 19.41 m；均值基线 19.62 m。
- **注意**：59.3% 的 kNN 估计恰等于已记录坐标，因此 0.00 m 中位数反映的是重复向量；随机划分结果可能偏乐观。
- **结论**：指纹法适用于固定的已勘测位置清单，不适用于其间的连续定位。

## Why it matters / what's new (EN)

The KB's bt-location coverage has leaned on Channel Sounding and direction finding. This entry is a sober, data-backed reminder of what plain RSSI fingerprinting can and cannot do on a real industrial floor: it separates "recognising a surveyed spot" from "localising", with a grouped split that exposes a roughly 9 m median error between survey points. It is a modest, single-site retrospective on 2019 hardware, so treat it as a calibration point rather than a new technique.

## Why it matters / what's new (ZH)

知识库中 bt-location 方面的内容主要集中在信道探测（Channel Sounding）和测向。本条目以数据清楚地说明了在真实工业车间中，纯 RSSI 指纹法能做什么、不能做什么：它把"识别已勘测地点"与"定位"区分开来，并通过分组划分暴露出勘测点之间约 9 m 的中位误差。这是对 2019 年硬件的单场地、小规模回溯研究，应视为校准参考而非新技术。
