---
id: 2026-10-20_arxiv-temporal-vs-spectral-csi-reporting-wifi-isac-80211bf
date_published: 2026-10-16
date_found: 2026-10-20
technology: wifi
type: academic-paper
title_en: "Temporal vs Spectral Resolution in CSI Reporting for Wi-Fi ISAC"
title_zh: "面向 Wi-Fi ISAC 的 CSI 上报：时间分辨率与频谱分辨率的比较"
url: "https://arxiv.org/abs/2610.23422"
source_quality: full
topics: [802.11bf, WiFi-sensing, CSI feedback, ISAC, human activity recognition]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

Zakeri (Centre for Wireless Communications, Oulu), Roy (University of Washington), Nguyen and Juntti (Oulu) study CSI feedback for Wi-Fi sensing such as human activity recognition (HAR), where the feedback takes resources away from data communication (arXiv 2610.23422, eess.SP, submitted 16 October 2026). They explore two IEEE 802.11bf dimensions: reporting intensity (temporal resolution) and the number of reported subcarriers (spectral resolution).

On the temporal side they compare periodic, random and 802.11bf threshold-based reporting at matched average rates; on the spectral side, uniform decimation and the proposed block-mean grouping (averaging adjacent subcarriers) at matched report sizes. They also propose reporting the mean CSI accumulated since the last report instead of an instantaneous frame, with the same report size. Report cost follows the 802.11bf size formula (c_h = 28 and c_v = 29 octets per the paper) and is expressed relative to full CSI; threshold reporting adds a per-instant overhead. The AP reconstructs the sequence with zero-order hold, and classification uses a CNN combined with a GRU and temporal pyramid pooling (1, 2 and 4 segments).

Evaluation uses three public datasets (SignFi, NTU-Fi HAR, CSI-HAR), each with T = 200 sounding instances, with leave-one-user-out on SignFi (5 folds), the fixed split on NTU-Fi HAR and leave-one-subject-out on CSI-HAR (3 folds), 50 Monte Carlo runs. Reported results: on SignFi the proposed scheme reaches 57.5% at 1.7% of full-CSI cost (34.5% for periodic instant-payload reporting with uniform grouping at the same cost), 61.5% at 6.5% and 63.1% at 12.9%, versus 62.6% for full CSI; on NTU-Fi HAR it reaches 97.2% at 1.1% cost versus 98.6% for full CSI; on CSI-HAR full CSI is 49.5% and periodic reporting exceeds it from about 7.7% cost. The abstract states that periodic reporting with mean payload and block-mean grouping improves accuracy by up to 53 percentage points at equal overhead, that temporal resolution is generally more cost-effective than spectral resolution, and that with at most 7.7% of full-CSI feedback cost the scheme achieves 96-98% of full-CSI accuracy (the body reports 95.7-98.3%).

## Summary (ZH)

Zakeri（奥卢大学无线通信中心）、Roy（华盛顿大学）、Nguyen 与 Juntti（奥卢）研究 Wi-Fi 感知（如人体活动识别 HAR）所需的 CSI 反馈，该反馈会占用数据通信资源（arXiv 2610.23422，eess.SP，2026 年 10 月 16 日提交）。论文考察 IEEE 802.11bf 的两个维度：上报强度（时间分辨率）与上报子载波数（频谱分辨率）。

时间维度上，在相同平均速率下比较周期、随机与 802.11bf 阈值触发上报；频谱维度上，在相同上报大小下比较均匀抽取与所提的块均值分组（对相邻子载波取平均）。论文还提出上报自上次上报以来累积的平均 CSI，而非瞬时帧，上报大小相同。上报开销依 802.11bf 的大小公式计算（论文取 c_h = 28、c_v = 29 字节），以相对完整 CSI 的比例表示；阈值触发会带来每个时刻的额外开销。AP 以零阶保持重建序列，分类使用 CNN 结合 GRU 与时间金字塔池化（1、2、4 段）。

评估使用三个公开数据集（SignFi、NTU-Fi HAR、CSI-HAR），每个含 T = 200 个探测时刻；SignFi 采用留一用户法（5 折），NTU-Fi HAR 采用固定划分，CSI-HAR 采用留一受试者法（3 折），蒙特卡洛 50 次。结果：SignFi 上所提方案在完整 CSI 开销的 1.7% 时达 57.5%（同开销下周期瞬时载荷+均匀分组为 34.5%），6.5% 时 61.5%，12.9% 时 63.1%，完整 CSI 为 62.6%；NTU-Fi HAR 上 1.1% 开销时达 97.2%，完整 CSI 为 98.6%；CSI-HAR 上完整 CSI 为 49.5%，周期上报约在 7.7% 开销起超过它。摘要称周期上报配合均值载荷与块均值分组在相同开销下准确率最多提升 53 个百分点，时间分辨率通常比频谱分辨率更具成本效益，且在不超过完整 CSI 反馈开销 7.7% 时达到完整 CSI 准确率的 96-98%（正文给出 95.7-98.3%）。

## Key technical points (EN)

- Two 802.11bf knobs studied: temporal resolution (report intensity) and spectral resolution (subcarriers per report).
- Proposed: mean-CSI-since-last-report payload and block-mean subcarrier grouping, compared against instantaneous payload and uniform decimation at matched cost.
- Cost model follows the 802.11bf report-size formula; AP reconstructs with zero-order hold.
- CNN-GRU classifier with temporal pyramid pooling on SignFi, NTU-Fi HAR and CSI-HAR.
- Reported: 97.2% at 1.1% cost on NTU-Fi HAR (full CSI 98.6%); 57.5% at 1.7% cost on SignFi (full CSI 62.6%).

## Key technical points (ZH)

- 研究 802.11bf 的两个调节维度：时间分辨率（上报强度）与频谱分辨率（每次上报的子载波数）。
- 所提方案：自上次上报以来的平均 CSI 载荷与块均值子载波分组，在相同开销下与瞬时载荷、均匀抽取对比。
- 开销模型依 802.11bf 上报大小公式；AP 以零阶保持重建。
- 在 SignFi、NTU-Fi HAR、CSI-HAR 上使用带时间金字塔池化的 CNN-GRU 分类器。
- 报告结果：NTU-Fi HAR 上 1.1% 开销达 97.2%（完整 CSI 98.6%）；SignFi 上 1.7% 开销达 57.5%（完整 CSI 62.6%）。

## Why it matters / what's new (EN)

The paper frames CSI feedback cost under the 802.11bf report-size model and compares reporting schedules and subcarrier reductions on public datasets. The abstract and body differ slightly on the headline percentages (96-98% versus 95.7-98.3%). The body does not state the 53-point comparison explicitly; it is consistent with the SignFi result of 63.1% for the proposed scheme at 12.9% cost versus 9.7% for the standard threshold scheme just above its 13.3% minimum cost.

## Why it matters / what's new (ZH)

论文在 802.11bf 上报大小模型下刻画 CSI 反馈开销，并在公开数据集上比较上报时序与子载波缩减方式。摘要与正文在核心百分比上略有出入（96-98% 对 95.7-98.3%）。正文未明确给出 53 个百分点的对比；该数字与 SignFi 上所提方案在 12.9% 开销时达 63.1%、而标准阈值方案在其 13.3% 最低开销之上仅 9.7% 的结果一致。

## Images

![Accuracy versus CSI-report cost Pareto, SignFi | SignFi 数据集上准确率与 CSI 上报开销的帕累托曲线](https://arxiv.org/html/2610.23422v1/Figures/fig_pareto_SignFi.png)
