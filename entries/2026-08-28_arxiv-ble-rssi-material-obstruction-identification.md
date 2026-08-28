---
id: 2026-08-28_arxiv-ble-rssi-material-obstruction-identification
date_published: 2026-07-31
date_found: 2026-08-28
type: academic-paper
technology: bluetooth
title_en: "Two stock nRF5340 kits and nothing but RSSI: a seven-feature threshold classifier separates a human body (5.71 dB SD, path-loss exponent 4.24) from glass and wood, but maps every untrained material onto the nearest trained class"
title_zh: "两块现货 nRF5340 开发板、只用 RSSI：一个七特征阈值分类器把人体（标准差 5.71 dB、路径损耗指数 4.24）与玻璃、木材区分开，却把每一种未训练过的材料都映射到最近的已训练类别上"
url: "https://arxiv.org/abs/2607.29110"
source_quality: full
topics: [BLE, RSSI, device-free-sensing, material-identification, path-loss-exponent, nRF5340, obstruction-detection, threshold-classifier]
topic_primary: bt-location
topics_secondary: [bt-le]
novelty_score: 2
---

## Summary (EN)

Aditi Tripathi, Janhavi Tiwari and Sachin Kadam posted a six-page preprint (arXiv 2607.29110, eess.SP, submitted July 31 2026, "submitted to a conference, under review") asking a deliberately narrow question: can ordinary RSSI readings from commodity BLE devices distinguish broad classes of line-of-sight obstruction, with no added sensor and no specialised RF instrumentation?

The rig is as plain as the question. Two Nordic nRF5340 development kits (dual-core Bluetooth 5.3 SoC, 2.4 GHz) act as transmitter and receiver, separated by a fixed line-of-sight path, with the material sample placed at the midpoint. A calibration sweep at 1–5 m first establishes the distance baseline: mean RSSI falls from **−54.85 dBm at 1 m to −87.06 dBm at 5 m**, roughly 8 dB per metre in this environment. Each obstruction trial then records an RSSI trace over a 0–300 s window. The critical processing step is session-matched subtraction of the unobstructed baseline, which the authors use to cancel offsets from distance, transmit power, receiver calibration, and slow environmental drift — without it the material signature is buried under exactly those terms.

From each trace they extract a seven-component feature vector: excess attenuation L_ex, RSSI standard deviation, interquartile range, the 10th and 90th percentiles, lag-one autocorrelation, and packet-loss rate. Note that four of the seven describe *variability* rather than mean attenuation — the paper's working hypothesis is that a material is identified more by how it makes the link fluctuate than by how much it attenuates. The classifier is a lightweight threshold rule over these features with the estimated path-loss exponent α̂ as the primary discriminant, chosen so it could run on the mote rather than a host.

Results are consistent with that hypothesis. The **human body** is the cleanest class by a wide margin — 5.71 dB standard deviation, 16.0 dB peak transient deviation, α̂ = 4.24 — followed by **wood** at 4.62 dB SD, 10.8 dB peak, α̂ = 3.20. Glass, ceramic, and the empty plastic bottle cluster tightly at 2.17–2.54 dB SD and are correspondingly harder to separate from each other. On the unknown trials the classifier correctly recovered human body, glass, and wood; it misassigned **paper → plastic bottle** and **brass → ceramic**, both of which were absent from the training set, which exposes the closed-set nature of the design: there is no reject option, so an unseen material is silently absorbed into the nearest trained class.

The authors are unusually candid about the limits. One transmitter–receiver pair, one incompletely documented indoor environment, and roughly five reconstructed sessions per material — few enough that material identity may be partly confounded with session-specific conditions. They state plainly that their records do not consistently document material thickness, exact orientation, moisture, BLE advertising channel, or transmit power, all of which move RSSI.

## Summary (ZH)

Aditi Tripathi、Janhavi Tiwari 与 Sachin Kadam 发布了一篇六页预印本（arXiv 2607.29110，eess.SP，2026 年 7 月 31 日提交，注明"已投会议、评审中"），提出了一个刻意收窄的问题：仅凭现货 BLE 设备的普通 RSSI 读数，能否在不加传感器、不用专用射频仪器的前提下，区分视距路径上的宽类别遮挡物？

装置和问题一样朴素。两块 Nordic nRF5340 开发板（双核 Bluetooth 5.3 SoC，2.4 GHz）分别作发射与接收，之间为固定视距链路，材料样本置于中点。先做一次 1–5 m 的标定扫描以建立距离基线：平均 RSSI 从 **1 m 处的 −54.85 dBm 降到 5 m 处的 −87.06 dBm**，在该环境下约为每米 8 dB。随后每次遮挡试验在 0–300 s 窗口内记录一条 RSSI 轨迹。关键的处理步骤是对无遮挡基线做同会话相减，作者以此抵消由距离、发射功率、接收机标定与缓慢环境漂移带来的偏置——若不做这一步，材料特征就恰好被这些项淹没。

他们从每条轨迹提取七维特征向量：超额衰减 L_ex、RSSI 标准差、四分位距、第 10 与第 90 百分位、一阶滞后自相关，以及丢包率。值得注意的是七项中有四项刻画的是*波动性*而非平均衰减——本文的工作假设是：材料更多地由"它让链路如何起伏"而非"它衰减了多少"来识别。分类器是这些特征之上的轻量阈值规则，以估计的路径损耗指数 α̂ 为主判别量，如此选择是为了能跑在节点上而非主机上。

结果与该假设一致。**人体**是分离度最高的类别，且优势明显——标准差 5.71 dB、峰值瞬态偏移 16.0 dB、α̂ = 4.24；其次是**木材**，标准差 4.62 dB、峰值 10.8 dB、α̂ = 3.20。玻璃、陶瓷与空塑料瓶紧密聚集在 2.17–2.54 dB 标准差区间，彼此之间相应地更难分开。在未知样本试验中，分类器正确识别出人体、玻璃与木材；但把 **纸张误判为塑料瓶**、**黄铜误判为陶瓷**，二者都不在训练集中——这暴露了设计的闭集本质：没有拒识选项，未见过的材料会被无声地吸收进最近的已训练类别。

作者对局限的坦率程度不多见。单一收发对、单一且记录不完整的室内环境、每种材料约五个重建会话——少到材料身份可能部分与会话特定条件混淆。他们明确写道：现有记录并未一致地记载材料厚度、精确朝向、湿度、BLE 广播信道或发射功率，而这些都会牵动 RSSI。

## Key technical points (EN)

- **Hardware**: two Nordic nRF5340 DKs (dual-core Bluetooth 5.3 SoC, 2.4 GHz) as TX and RX; no specialised RF sensing equipment, no additional sensor.
- **Distance baseline**: mean RSSI −54.85 dBm @ 1 m → −87.06 dBm @ 5 m (≈8 dB/m in the test environment), measured as a calibration sweep before the material trials.
- **Protocol**: material at the LOS midpoint between stationary TX and RX; 0–300 s RSSI trace per trial; **session-matched subtraction** of the unobstructed baseline to cancel distance, TX power, receiver-calibration, and slow-drift offsets.
- **Feature vector (7)**: excess attenuation L_ex, RSSI standard deviation, interquartile range, 10th percentile, 90th percentile, lag-one autocorrelation, packet-loss rate. Four of seven are variability measures, not mean attenuation.
- **Classifier**: lightweight threshold rules over the feature vector, with estimated path-loss exponent α̂ as the primary discriminant — chosen for on-node feasibility, not accuracy maximisation.
- **Trained classes (5)**: wood, ceramic, empty plastic bottle, glass, human body.
- **Per-material statistics (Table I)**: human body 5.71 dB SD / 16.0 dB peak transient deviation / α̂ = 4.24; wood 4.62 dB SD / 10.8 dB peak / α̂ = 3.20; glass, ceramic, plastic 2.17–2.54 dB SD.
- **Unknown-trial outcome (Table II)**: human body, glass, and wood correctly identified; **paper → plastic bottle** and **brass → ceramic** misassigned — both untrained materials, and the classifier has no reject option (closed-set design).
- **Stated limitations**: single TX–RX pair; incompletely documented indoor environment; ~5 reconstructed sessions per material, so identity may be confounded with session; thickness, orientation, moisture, BLE advertising channel, and TX power not consistently recorded.
- **Status**: 6 pages, 5 figures, submitted to a conference, under review — preprint, not peer-reviewed.

## Key technical points (ZH)

- **硬件**：两块 Nordic nRF5340 开发板（双核 Bluetooth 5.3 SoC，2.4 GHz）作收发端；无专用射频传感设备、无额外传感器。
- **距离基线**：平均 RSSI 1 m 处 −54.85 dBm → 5 m 处 −87.06 dBm（该测试环境下约 8 dB/m），在材料试验前作为标定扫描测得。
- **实验流程**：材料置于固定收发端之间的视距中点；每次试验记录 0–300 s 的 RSSI 轨迹；对无遮挡基线做**同会话相减**，以抵消距离、发射功率、接收机标定与缓慢漂移带来的偏置。
- **七维特征向量**：超额衰减 L_ex、RSSI 标准差、四分位距、第 10 百分位、第 90 百分位、一阶滞后自相关、丢包率。七项中有四项是波动性度量而非平均衰减。
- **分类器**：特征向量之上的轻量阈值规则，以估计路径损耗指数 α̂ 为主判别量——选择依据是可在节点侧运行，而非精度最大化。
- **已训练类别（5 类）**：木材、陶瓷、空塑料瓶、玻璃、人体。
- **逐材料统计（表 I）**：人体 标准差 5.71 dB / 峰值瞬态偏移 16.0 dB / α̂ = 4.24；木材 标准差 4.62 dB / 峰值 10.8 dB / α̂ = 3.20；玻璃、陶瓷、塑料 标准差 2.17–2.54 dB。
- **未知样本结果（表 II）**：人体、玻璃、木材识别正确；**纸张→塑料瓶**、**黄铜→陶瓷**误判——两者均未参与训练，且分类器没有拒识选项（闭集设计）。
- **作者声明的局限**：单一收发对；室内环境记录不完整；每种材料约 5 个重建会话，材料身份可能与会话条件混淆；厚度、朝向、湿度、BLE 广播信道与发射功率未被一致记录。
- **状态**：6 页、5 幅图，已投会议、评审中——预印本，未经同行评议。

## Why it matters / what's new (EN)

The Bluetooth sensing entries accumulated in this knowledge base so far sit at the phase-and-angle end of the spectrum — Channel Sounding PHY simulation, PAwR-based connectionless ranging, AoA direction finding with ML-assisted NLOS detection, phased-array-aided inertial navigation. All of them need either a new spec feature (CS, PAwR), a special antenna array, or IQ-level access. This paper occupies the opposite corner: it asks what is still extractable from the single scalar that *every* BLE stack has exposed since the beginning, on hardware that is already deployed by the billion. That corner is under-represented and worth a marker, because whatever falls out of it applies retroactively to installed devices rather than to a future silicon generation.

The transferable idea is the feature design rather than the accuracy number. Four of the seven features measure link *variability* — standard deviation, IQR, percentile spread, lag-one autocorrelation — and the results bear the hypothesis out: the human body, the one "material" that moves and contains water, separates by a mile on exactly those axes (5.71 dB SD, 16.0 dB peak deviation) while the rigid dielectrics collapse into an indistinct 2.17–2.54 dB cluster. Read as a presence/occupancy detector — human versus not-human — the method looks defensible on commodity hardware; read as a general material classifier it does not, and the paper's own unknown-trial table is the evidence. That distinction matters for the `bt-location` bin, where BLE occupancy sensing has real deployment relevance (see this run's companion entry on NLC occupancy sensing driving building HVAC).

The failure mode is the more instructive result. Paper mapping to plastic bottle and brass to ceramic is not tuning noise; it is the structural consequence of a closed-set threshold classifier with no reject option — an unseen material *must* land somewhere. Any practical device-free sensing system built on this pattern needs an out-of-distribution test before the class assignment, and that requirement is independent of how good the features are. Combined with the acknowledged confounds (five sessions per material; thickness, orientation, moisture, advertising channel, and TX power not consistently logged), the honest reading is a well-documented feasibility probe with a clearly stated evidence ceiling, not a validated classifier. Its value here is the feature set, the session-matched subtraction step, and the variability-over-attenuation framing — all reusable at a much higher evidence grade than the accuracy claims themselves.

## Why it matters / what's new (ZH)

本知识库迄今积累的蓝牙感知条目都落在"相位与角度"这一端——Channel Sounding 物理层仿真、基于 PAwR 的无连接测距、带 ML 辅助 NLOS 检测的 AoA 测向、相控阵辅助惯性导航。它们都需要一项新的规范特性（CS、PAwR）、一副专门的天线阵，或者 IQ 级别的访问权限。本文占据的是相反的角落：它追问的是，从**每一个** BLE 协议栈自始就暴露的那个单一标量里，在已经以十亿计部署的硬件上，还能榨出什么。这个角落此前在库中代表性不足，值得留一个标记，因为从中掉出来的任何东西都是**回溯性地**适用于已装机设备，而不是适用于下一代芯片。

可迁移的要点是特征设计，而不是那个准确率数字。七个特征里有四个度量的是链路的*波动性*——标准差、四分位距、百分位跨度、一阶滞后自相关——而结果印证了这一假设：人体，这个唯一会动且含水的"材料"，恰恰在这些轴上遥遥分离（标准差 5.71 dB、峰值偏移 16.0 dB），而刚性介质则塌缩成 2.17–2.54 dB 的一团难分。若把它读作在场/占用检测器（人 vs 非人），该方法在现货硬件上看起来是站得住的；若读作通用材料分类器，则站不住，而论文自己的未知样本表就是证据。这一区分对 `bt-location` 主题箱是有意义的，因为 BLE 占用感知具有真实的落地相关性（参见本次运行的姊妹条目：NLC 占用感知驱动建筑暖通空调）。

更有教益的结果其实是失效模式。纸张映射到塑料瓶、黄铜映射到陶瓷，并非调参噪声；这是一个没有拒识选项的闭集阈值分类器的结构性后果——未见过的材料**必然**要落到某处。任何以此模式构建的实用无设备感知系统，都需要在类别判定之前先做一次分布外检测，而这项要求与特征做得多好无关。再叠加作者已承认的混淆因素（每材料五个会话；厚度、朝向、湿度、广播信道与发射功率未被一致记录），诚实的读法是：一次记录良好、证据天花板被清楚声明的可行性探索，而非一个已验证的分类器。它在这里的价值是那套特征、那一步同会话基线相减，以及"重波动性、轻衰减量"的问题表述——这三者都能以远高于其准确率主张的证据等级被复用。
