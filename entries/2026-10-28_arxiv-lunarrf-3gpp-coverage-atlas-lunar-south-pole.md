---
id: 2026-10-28_arxiv-lunarrf-3gpp-coverage-atlas-lunar-south-pole
date_published: 2026-10-25
date_found: 2026-10-28
type: academic-paper
technology: cellular
title_en: "LunarRF: A Terrain-Aware Propagation Engine and Pole-Wide 3GPP Surface Coverage Atlas of the Lunar South Pole"
title_zh: "LunarRF：地形感知传播引擎与月球南极全域 3GPP 地表覆盖图集"
url: "https://arxiv.org/abs/2610.34554"
source_quality: full
topics: [3GPP, lunar-surface-communications, Artemis, coverage-planning, ITU-R-P.1812, Delta-Bullington, digital-elevation-model, GPU, site-selection]
topic_primary: ntn
topics_secondary: [5g-nr, cellular-spectrum]
novelty_score: 4
---

## Summary (EN)
Christopher J. Santorelli and Alexander M. Wyglinski (Worcester Polytechnic Institute) present LunarRF, a GPU system that computes where 3GPP (LTE/5G NR) cellular links are physically possible across the lunar south pole, and the pole-wide coverage atlas produced with it. The paper is a preprint dated 19 October 2026. It starts from the observation that Artemis surface operations are expected to rely on 3GPP links between lander, Lunar Terrain Vehicle, astronauts on EVA and unattended instruments, while no public product shows achievable coverage across the region. The authors cite the March 2025 Nokia Bell Labs Lunar Surface Communications System, an LTE network that powered on aboard the IM-2 lander but never connected to a rover because the lander came to rest on its side.

The engine casts 8,192 radial profiles from each of 11,827 candidate mast sites on an orbit-adjusted LOLA elevation model, takes the viewshed, and evaluates ITU-R P.1812 Delta-Bullington propagation on every profile, continuous through the radio horizon. An order-independent resolver merges the footprints per 20 m cell. The atlas covers the disc south of 80 degrees S at 20 m resolution for four SFCG-recommended surface bands plus the 1.8 GHz IM-2 demonstration band (1.8 to 25.375 GHz), storing best-server power and identity, redundancy count, line of sight and coverability per cell. With every candidate mast active, 90.5% of the disc is coverable at 1.8 GHz, 59% at 5.855 GHz and 10% at 25.375 GHz (84%, 43% and 5% after a measured 3-4 dB engine optimism correction). The atlas and the candidate table are released with a DOI.

## Summary (ZH)
Christopher J. Santorelli 与 Alexander M. Wyglinski（伍斯特理工学院）提出 LunarRF：一个 GPU 系统，用于计算月球南极全域哪些位置在物理上可建立 3GPP（LTE/5G NR）蜂窝链路，并给出据此生成的全域覆盖图集。论文为 2026 年 10 月 19 日的预印本。出发点是：阿尔忒弥斯（Artemis）地表作业预计依赖着陆器、月面地形车、舱外活动宇航员与无人仪器之间的 3GPP 链路，但目前没有公开产品展示该区域可达的覆盖。作者引用了 2025 年 3 月诺基亚贝尔实验室的月面通信系统（Lunar Surface Communications System）：该 LTE 网络在 IM-2 着陆器上通电，但因着陆器侧翻，未能与月球车建立连接。

引擎在轨道校正的 LOLA 高程模型上，对 11,827 个候选桅杆站点中的每一个投射 8,192 条径向剖面，计算可视域，并在每条剖面上连续穿过无线电地平线地评估 ITU-R P.1812 Delta-Bullington 传播。与顺序无关的合并器按 20 m 栅格合并各站点覆盖。图集覆盖 80 度南纬以南的圆盘，分辨率 20 m，包含四个 SFCG 推荐的月面频段及 1.8 GHz 的 IM-2 演示频段（1.8 至 25.375 GHz），每个栅格记录最佳服务功率与标识、冗余数、视距和可覆盖性。所有候选桅杆都启用时，1.8 GHz 下 90.5% 的区域可覆盖，5.855 GHz 为 59%，25.375 GHz 为 10%（按实测 3-4 dB 的引擎乐观偏差修正后分别为 84%、43%、5%）。图集与候选站点表附 DOI 公开发布。

## Key technical points (EN)
- Geometry: a 4 m mast and a 1.5 m receiver on a smooth 1,737.4 km sphere have a combined radio horizon of only 6.0 km (3.7 km plus 2.3 km), so local relief rather than transmit range governs coverage.
- Candidate masts: 11,827 sites enumerated by stated rules; each yields 8,192 radial profiles; propagation is ITU-R P.1812 Delta-Bullington evaluated continuously through the radio horizon.
- Validation: the engine is checked against a parabolic-equation solver, ray tracing and analytic solutions; swapping Deygout for Delta-Bullington, or adding terrain noise at the level of the published DEM height-error map, moves the coverable class on under 1% of a mast's disc on average.
- Range per mast: a mast covers about 90% of its visible area within its link-budget range at every band; the range shrinks from 22 km to 1.6 km across the bands, and a 20 dB stronger budget reaches visible terrain 100 km away. No band is terrain-limited.
- Permanently shadowed regions: 61% of the PSR area in the study region has line of sight to at least one permitted site and 59% is reachable at 1.8 GHz (53% at 2.58 GHz). Coverage is effectively single-server at 25.375 GHz.
- The nine current Artemis regions are 85-99% coverable at 1.8 GHz and 22-85% at 5.855 GHz.
- Data-quality finding: local-maximum site selection on the PDS LDEM_80S_20M product picks orbit-track artefacts of 20-257 m at about one site in ten, so the atlas uses the orbit-adjusted PGDA product.
- Released products: full-resolution atlas, a compact 160 m release product, per-region 20 m windows and the 11,827-site candidate table.

## Key technical points (ZH)
- 几何：在半径 1,737.4 km 的光滑球体上，4 m 桅杆与 1.5 m 接收机的联合无线电地平线仅 6.0 km（3.7 km 加 2.3 km），因此决定覆盖的是局部地形起伏而非发射距离。
- 候选桅杆：按明确规则枚举 11,827 个站点；每个站点产生 8,192 条径向剖面；传播采用 ITU-R P.1812 Delta-Bullington，连续穿越无线电地平线。
- 验证：引擎与抛物方程求解器、射线追踪和解析解对照；把 Deygout 换成 Delta-Bullington，或按已发布 DEM 高度误差图的量级加入地形噪声，平均仅使一座桅杆圆盘内不足 1% 的面积改变可覆盖类别。
- 单桅杆范围：在各频段下，一座桅杆在其链路预算范围内覆盖约 90% 的可视面积；范围从 22 km 缩小到 1.6 km，而链路预算增强 20 dB 可到达 100 km 外的可视地形；没有任何频段受地形限制。
- 永久阴影区：研究区内 61% 的永久阴影区面积至少对一个允许站点有视距，1.8 GHz 下 59% 可达（2.58 GHz 为 53%）；25.375 GHz 下覆盖实质上为单服务节点。
- 当前九个阿尔忒弥斯区域在 1.8 GHz 下 85-99% 可覆盖，5.855 GHz 下 22-85%。
- 数据质量发现：在 PDS LDEM_80S_20M 产品上取局部极大值选站，约每十个站点就有一个选中 20-257 m 的轨道轨迹伪影，因此图集采用轨道校正的 PGDA 产品。
- 发布内容：全分辨率图集、160 m 的精简发布产品、分区域 20 m 窗口，以及 11,827 个站点的候选表。

## Why it matters / what's new (EN)
The paper turns the 3GPP lunar-surface network premise into a quantified, band-by-band coverage map and shows that the answer depends heavily on frequency: low-band (1.8 GHz) service reaches most of the pole, while 25 GHz-class links are effectively single-server and cover about a tenth. It also documents a practical pitfall in public elevation products. The results are screening-level estimates under a stated link budget and a propagation model, not field measurements, and the work is an unreviewed preprint.

## Why it matters / what's new (ZH)
该论文把月面 3GPP 网络这一前提变成按频段量化的覆盖图，并表明结论强烈依赖频率：低频段（1.8 GHz）可覆盖南极大部分区域，而 25 GHz 量级的链路实质上为单服务节点，仅覆盖约十分之一。论文还记录了公开高程产品中的一个实际陷阱。结果是在给定链路预算和传播模型下的筛选级估计，并非现场测量，且这是尚未评审的预印本。

## Images

None.
