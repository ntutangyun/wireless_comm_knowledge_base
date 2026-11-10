---
id: 2026-11-10_arxiv-srs-svd-vs-csirs-pmi-5g-beamforming-link-level
date_published: 2026-11-06
date_found: 2026-11-10
type: academic-paper
technology: cellular
title_en: "Link-Level Performance Comparison of 5G Beamforming: Reciprocity-Based SVD vs. Codebook-Based Precoding"
title_zh: "5G 波束赋形链路级性能对比：基于互易性的 SVD 与基于码本的预编码"
url: "https://arxiv.org/abs/2611.09763"
source_quality: full
topics: [5G-NR, SRS, CSI-RS, PMI, Type-I-codebook, SVD-precoding, channel-reciprocity, mid-band-MIMO, ray-tracing, precoding-selection]
topic_primary: 5g-nr
topics_secondary: [cellular-massive-mimo]
novelty_score: 3
---

## Summary (EN)

Shuvo, Dogan-Tusha and Ghosh (University of Notre Dame, submitted to IEEE ICC 2027) compare the two downlink precoding routes that 3GPP NR defines for mid-band TDD MIMO: uplink SRS with reciprocity-based SVD precoding, and downlink CSI-RS with codebook-based PMI feedback (Type-I single-panel). The comparison is an end-to-end 3GPP-compliant link-level simulation of the PDSCH chain at 3.75 GHz with 100 MHz bandwidth, a 192-element gNB virtualised into 32 CSI-RS ports, the 3GPP Release 19 handheld UE antenna model (four UE ports), and MATLAB ray-traced channels in Manhattan and Chicago urban canyons.

The finding is that neither scheme is uniformly better. CSI-RS/PMI serves weak and shadowed users better and lowers outage, while SRS/SVD reaches higher spectral efficiency and supports multi-layer transmission for users with strong channels. The authors then show that a simple logistic regression on CSI-RSRP and CQI can pick the better scheme per user with about 90% accuracy, with a spectral efficiency close to an oracle that always picks the best one.

## Summary (ZH)

Shuvo、Dogan-Tusha 与 Ghosh（美国圣母大学，投稿 IEEE ICC 2027）比较了 3GPP NR 在中频段 TDD MIMO 中定义的两条下行预编码路径：基于上行 SRS 的互易性 SVD 预编码，以及基于下行 CSI-RS 与 PMI 反馈的码本预编码（Type-I 单面板）。比较采用端到端、符合 3GPP 的 PDSCH 链路级仿真：3.75 GHz、100 MHz 带宽，192 阵元 gNB 虚拟化为 32 个 CSI-RS 端口，采用 3GPP Release 19 手持终端天线模型（4 个终端端口），信道来自 MATLAB 射线追踪（曼哈顿与芝加哥城市峡谷）。

结论是两种方案没有哪一个处处占优。CSI-RS/PMI 对弱信道和被遮挡用户更好、中断更少；SRS/SVD 则在强信道用户上获得更高频谱效率并支持多层传输。作者进一步表明，基于 CSI-RSRP 与 CQI 的简单逻辑回归即可按用户选择更优方案，准确率约 90%，频谱效率接近始终选最优方案的理想情形。

## Key technical points (EN)

- Setup: Type-I single-panel codebook is the PMI case because it is the most widely deployed; the UE reports the precoder maximising post-equalisation SINR, with a 6 dB CSI-RS power boost. For SRS-SVD, full-band SRS without frequency hopping is used, perfect hardware calibration and reciprocity are assumed, and the precoder is the dominant right-singular vectors. Both schemes use 16-PRB subband precoding and layers 1 to 4.
- Why a crossover appears: SRS is limited by UE transmit power, so the gNB's channel estimate is poor for weak users, which cancels the benefit of unquantised SVD beamforming. In Manhattan, users for whom CSI-RS/PMI is best show a median SRS estimation NMSE of +18 dB against +3 dB for CSI-RS; users for whom SRS-SVD is best show -15 dB against -29 dB.
- Manhattan results: 63 users do better with SRS-SVD against 45 with CSI-RS/PMI. A rank above one is optimal for 35% of users with SRS-SVD against 7% with CSI-RS/PMI. Mean SE is 7.1 bps/Hz for SRS-SVD against 5.1 bps/Hz for CSI-RS/PMI, but for the bottom 30% of users it is 0.2 against 0.7 bps/Hz. Chicago is a near tie (43 users prefer SRS-SVD, 42 CSI-RS/PMI); outage is 27% with CSI-RS/PMI against 45% with SRS-SVD.
- Metrics: empirical SE comes from a sweep over layers and MCS 0 to 27 (256-QAM table) at the highest MCS with BLER below 10%; Shannon SE is computed in addition. Both show the same crossover. Results on the statistical CDL-C channel also show it.
- Selection rule: logistic regression on CSI-RSRP and CQI (or SRS-RSRP, available at the gNB without UE feedback) predicts the better scheme with about 90% accuracy.
- Stated limits: single-user MIMO only, perfect calibration for SRS-SVD, a Type-I codebook only (not Type-II), and MATLAB's LS channel estimator in place of proprietary commercial estimators.

## Key technical points (ZH)

- 设置：PMI 方案选用部署最广的 Type-I 单面板码本；终端上报使后均衡 SINR 最大的预编码，并采用 6 dB 的 CSI-RS 功率提升。SRS-SVD 使用不跳频的全带 SRS，假设硬件校准与信道互易完美，预编码取主右奇异向量。两种方案均采用 16 PRB 子带预编码，层数 1 到 4。
- 出现交叉的原因：SRS 受终端发射功率限制，gNB 对弱用户的信道估计较差，抵消了无量化 SVD 波束赋形的收益。在曼哈顿场景中，CSI-RS/PMI 最优的用户 SRS 估计 NMSE 中位数为 +18 dB（CSI-RS 为 +3 dB）；SRS-SVD 最优的用户则为 -15 dB（CSI-RS 为 -29 dB）。
- 曼哈顿结果：63 个用户用 SRS-SVD 更好，45 个用 CSI-RS/PMI 更好。SRS-SVD 下 35% 的用户最优秩大于 1，CSI-RS/PMI 下仅 7%。平均频谱效率 SRS-SVD 为 7.1 bps/Hz，CSI-RS/PMI 为 5.1 bps/Hz，但最差 30% 用户分别为 0.2 与 0.7 bps/Hz。芝加哥场景接近持平（43 个用户偏好 SRS-SVD，42 个偏好 CSI-RS/PMI）；中断率 CSI-RS/PMI 为 27%，SRS-SVD 为 45%。
- 指标：经验频谱效率由层数与 MCS 0 到 27（256QAM 表）扫描得到，取 BLER 低于 10% 的最高 MCS；另计算香农频谱效率。两者呈现相同的交叉现象，统计 CDL-C 信道上的结果亦然。
- 选择规则：基于 CSI-RSRP 与 CQI（或 gNB 无需终端反馈即可得到的 SRS-RSRP）的逻辑回归，预测更优方案的准确率约 90%。
- 论文自述的局限：仅限单用户 MIMO，SRS-SVD 假设校准完美，仅考虑 Type-I 码本（未含 Type-II），并以 MATLAB 的 LS 信道估计代替商用厂商的专有估计器。

## Why it matters / what's new (EN)

Mid-band active antenna systems are the main capacity layer of commercial 5G, and the paper argues the better choice varies per user with link budget and propagation environment. This paper gives a per-user, ray-traced comparison with a Release 19 UE antenna model and shows that the answer depends on link budget, which motivates adaptive selection rather than a fixed scheme. The results come from simulation with idealised calibration, so the absolute numbers should not be read as field performance.

## Why it matters / what's new (ZH)

中频段有源天线系统是商用 5G 的主要容量层，论文指出更优方案随用户链路预算与传播环境而变化。本文给出按用户的射线追踪对比并采用 Release 19 终端天线模型，表明结论取决于链路预算，因而适合自适应选择而非固定方案。结果来自校准理想化的仿真，绝对数值不应视为实网性能。

## Images

![Link-level simulation framework: CSI acquisition via CSI-RS with Type-I PMI or SRS with SVD, followed by the NR PDSCH chain over a ray-traced channel | 链路级仿真框架：CSI-RS+Type-I PMI 或 SRS+SVD 获取信道，随后经射线追踪信道的 NR PDSCH 链路](https://arxiv.org/html/2611.09763v1/Figures/fig_lls_block_wide.png)
![Empirical and Shannon spectral efficiency of SRS-SVD vs CSIRS-PMI in the Manhattan deployment | 曼哈顿场景下 SRS-SVD 与 CSIRS-PMI 的经验与香农频谱效率对比](https://arxiv.org/html/2611.09763v1/Figures/Manhattan_F4.png)
