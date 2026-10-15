---
id: 2026-10-15_arxiv-bistatic-delay-doppler-3d-localization-distributed-wifi
date_published: 2026-10-11
date_found: 2026-10-15
technology: wifi
type: academic-paper
title_en: "Bistatic Delay-Doppler Sensing for 3D Target Localization in Distributed Wi-Fi Systems"
title_zh: "分布式 Wi-Fi 系统中面向三维目标定位的双基地时延-多普勒感知"
url: "https://arxiv.org/abs/2610.15641"
source_quality: full
topics: [802.11bf, Wi-Fi sensing, ISAC, delay-Doppler, Fisher information, localization]
topic_primary: sensing-csi
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

The paper (Hong, Ahmadi, Stifter, El Yacoubi, Shankar; University of Luxembourg SnT with IEE S.A. and Telecom SudParis; arXiv 2610.15641, first submitted 11 October 2026) asks how bistatic delay information changes the observability and localization performance of a 3D moving target in distributed Wi-Fi sensing. It is stated to be motivated by IEEE 802.11bf WLAN sensing and is accepted for presentation at the 1st IEEE Conference on Integrated Sensing and Communications (ISAC), Lisbon, 15-18 November 2026. The setup is one transmitter, several distributed receivers and one target with unknown position and velocity, in a sub-7 GHz bistatic geometry.

The authors compare a Doppler-only model with a delay-Doppler model in which delay-capable receivers also report bistatic path length. They derive the Fisher information matrix and the position equivalent FIM (EFIM) after eliminating the unknown velocity. Their observability result is that Doppler-only localization generically needs six receivers, while delay-Doppler localization can become locally identifiable with three receivers under non-degenerate geometry; for L receivers of which K provide delay, the necessary condition is stated as L + K >= 6 for L >= 3, which the paper specialises to L >= 6 for Doppler-only and L >= 3 for delay-Doppler. The paper points out that at L = 3 the delay-Doppler and delay-only position bounds coincide, so the recovered identifiability there comes entirely from the delay measurements. It also states that it does not claim a guarantee for every non-degenerate geometry, and that a full-rank EFIM does not imply a small error.

The simulations use a 5.8 GHz carrier, bandwidths of 20, 40, 80 and 160 MHz, 2,000 target states per configuration and receivers up to L = 6 placed at heights of 1.2 to 3.6 m with the transmitter at 2.5 m. The delay uncertainty is modelled as 0.50 m (bistatic path length) at 80 MHz and decreasing as bandwidth grows; the Doppler noise standard deviation is 0.0619 Hz. The results show the Doppler-only EFIM staying singular below six receivers while the delay-Doppler EFIM is nonsingular at three; wider bandwidth lowers the position error bound; and Doppler-only localization degrades faster than delay-Doppler as Doppler noise grows. In mixed architectures where all receivers measure Doppler and only K measure delay, (L, K) = (5, 1) has a median position error bound of about 0.63 m against about 0.56 m for Doppler-only (6, 0), and adding one delay-capable link to six receivers lowers it to about 0.36 m, while (3, 3) and (4, 2) are locally identifiable but still show multi-metre median bounds.

The authors state that the bounds are measurement-level, conditional on time-aligned receivers and correct cross-receiver association of a single-target path, and that they should not be read as end-to-end IEEE 802.11bf performance or as experimentally validated Wi-Fi sensing accuracy.

## Summary (ZH)

论文（Hong、Ahmadi、Stifter、El Yacoubi、Shankar；卢森堡大学 SnT、IEE S.A. 与 Telecom SudParis；arXiv 2610.15641，2026 年 10 月 11 日首次提交）研究双基地时延信息如何改变分布式 Wi-Fi 感知中三维运动目标的可观测性与定位性能。文中称其动机来自 IEEE 802.11bf WLAN 感知，并已被第一届 IEEE 集成感知与通信（ISAC）会议（里斯本，2026 年 11 月 15-18 日）接收宣读。场景为一个发射机、多个分布式接收机和一个位置与速度均未知的目标，采用 7 GHz 以下的双基地几何。

作者比较了仅多普勒模型与时延-多普勒模型，后者中具备时延能力的接收机还会报告双基地路径长度。他们推导了 Fisher 信息矩阵以及消除未知速度后的位置等效 FIM（EFIM）。可观测性结论是：仅多普勒定位通常需要六个接收机，而时延-多普勒定位在非退化几何下用三个接收机即可达到局部可辨识；对于 L 个接收机中 K 个提供时延的情形，必要条件在 L >= 3 时表述为 L + K >= 6，论文将其特化为仅多普勒 L >= 6、时延-多普勒 L >= 3。论文指出，L = 3 时时延-多普勒与仅时延的位置界重合，因此该处恢复的可辨识性完全来自时延测量。论文还说明，并不声称对所有非退化几何都成立，且满秩 EFIM 并不意味着误差小。

仿真使用 5.8 GHz 载频，带宽 20、40、80、160 MHz，每个配置 2,000 个目标状态，接收机最多 L = 6，高度 1.2 至 3.6 m，发射机高度 2.5 m。时延不确定度建模为 80 MHz 时 0.50 m（双基地路径长度），并随带宽增大而减小；多普勒噪声标准差为 0.0619 Hz。结果显示：接收机少于六个时仅多普勒 EFIM 保持奇异，而时延-多普勒 EFIM 在三个接收机时即非奇异；带宽越宽位置误差界越低；多普勒噪声增大时，仅多普勒定位比时延-多普勒退化得更快。在所有接收机测多普勒、仅 K 个测时延的混合架构中，(L, K) = (5, 1) 的位置误差界中位数约为 0.63 m，而仅多普勒 (6, 0) 约为 0.56 m，在六个接收机基础上增加一条具备时延能力的链路可降至约 0.36 m；(3, 3) 和 (4, 2) 局部可辨识，但中位数界仍为数米量级。

作者说明，这些界是测量层面的，以接收机时间对齐和单目标路径跨接收机正确关联为条件，不应被理解为端到端的 IEEE 802.11bf 性能，也不代表经实验验证的 Wi-Fi 感知精度。

## Key technical points (EN)

- Models compared: Doppler-only versus delay-Doppler measurements for one transmitter, L distributed receivers and one 3D target with unknown velocity.
- Derives the FIM and the position EFIM after eliminating velocity; Doppler-only needs six receivers generically, delay-Doppler can be locally identifiable with three under non-degenerate geometry.
- At L = 3 the delay-Doppler and delay-only position bounds coincide (identifiability comes from delay).
- Simulation: 5.8 GHz, 20-160 MHz bandwidths, delay uncertainty 0.50 m at 80 MHz, decreasing with bandwidth, Doppler noise 0.0619 Hz, 2,000 target states per configuration.
- Mixed architectures: (5, 1) median bound about 0.63 m versus about 0.56 m for Doppler-only (6, 0); (6, 1) about 0.36 m; (3, 3) and (4, 2) identifiable but with multi-metre bounds.
- Stated scope limits: measurement-level bounds, time-aligned receivers, correct association; not end-to-end 802.11bf performance.

## Key technical points (ZH)

- 比较的模型：针对一个发射机、L 个分布式接收机和一个速度未知的三维目标，仅多普勒与时延-多普勒测量。
- 推导 FIM 以及消除速度后的位置 EFIM；仅多普勒通常需要六个接收机，时延-多普勒在非退化几何下用三个即可局部可辨识。
- L = 3 时时延-多普勒与仅时延的位置界重合（可辨识性来自时延）。
- 仿真：5.8 GHz，带宽 20-160 MHz，80 MHz 时时延不确定度 0.50 m，随带宽增大而减小，多普勒噪声 0.0619 Hz，每个配置 2,000 个目标状态。
- 混合架构：(5, 1) 的中位数界约 0.63 m，仅多普勒 (6, 0) 约 0.56 m；(6, 1) 约 0.36 m；(3, 3) 与 (4, 2) 可辨识但界为数米。
- 论文声明的范围限制：测量层面的界、接收机时间对齐、正确关联；不代表端到端 802.11bf 性能。

## Why it matters / what's new (EN)

The KB's sensing-csi bin so far holds mostly CSI-learning and system papers (for example 2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder); this entry is an analytical, Fisher-information-based receiver-count result for distributed Wi-Fi sensing. The paper describes it as complementary to prior work on Doppler-based 3D localization with distributed bistatic Wi-Fi links and an RF digital twin. All figures are simulation results under idealised noise models.

## Why it matters / what's new (ZH)

本知识库的 sensing-csi 主题目前以 CSI 学习与系统类论文为主（例如 2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder）；本条目是针对分布式 Wi-Fi 感知、基于 Fisher 信息的接收机数量分析结果。论文称其与此前基于多普勒、使用分布式双基地 Wi-Fi 链路与射频数字孪生的三维定位工作互补。所有数据均来自理想化噪声模型下的仿真。
