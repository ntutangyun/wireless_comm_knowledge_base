---
id: 2026-09-11_arxiv-tuav-ntn-vs-terrestrial-5g-dense-urban
date_published: 2026-09-09
date_found: 2026-09-11
type: academic-paper
technology: cellular
title_en: "Tethered UAVs for Dense Urban Connectivity"
title_zh: "面向密集城市连接的系留无人机"
url: "https://arxiv.org/abs/2609.10414"
source_quality: full
topics: [tethered-UAV, NTN, dense-urban, 3GPP-TR-38.901, line-of-sight, altitude-optimization]
topic_primary: ntn
topics_secondary: [5g-nr]
novelty_score: 2
---

## Summary (EN)
German Svistunov and Azim Akhtarshenas (arXiv v1, 9 Sep 2026) evaluate the downlink performance of 5G non-terrestrial networks realized via tethered UAV (TUAV)-mounted base stations against conventional terrestrial 5G in a realistic dense-urban setting, using a 3GPP-compliant hexagonal deployment (19 sites, 57 sectors, 500 m inter-site distance, 3.5 GHz carrier, 100 MHz bandwidth, 570 uniformly distributed outdoor users) with a typical dense-urban building size of 40.8 m and street width of 16.9 m (ITU-R P.1410-6 dense-urban parameters feeding the LoS-probability geometry). The simulator extends the 3GPP TR 38.811 NTN channel model, which is specified only above 8 km, down to 100-1000 m, substituting the geometry-based line-of-sight probability model of Saboor et al. (IEEE OJ-COMS, 2024) with ITU-R P.1410-6 dense-urban geometry parameters, rather than the high-altitude regime typical of HAPS/satellite NTN studies.

The central finding is that TUAV altitude trades off two competing effects: raising the platform improves line-of-sight probability to ground users (roughly doubling from 0.2 at 100 m to 0.4 at 200 m, with minimum elevation angle improving from about 17 degrees to 31 degrees), but raising it further also increases propagation loss and widens the footprint of the downward-pointing DFT beams, so interference growth eventually dominates the useful signal. The paper identifies 200 m as the practical sweet spot for this scenario: at that altitude the TUAV-mounted base station delivers 140 Mbps median per-user throughput versus 100 Mbps for the terrestrial baseline (a 40% improvement), and the gain is largest precisely for cell-edge users, where 5th-percentile throughput rises from 20 Mbps (terrestrial) to 30 Mbps (TUAV, a 50% improvement). At the highest altitude tested (1000 m), the analysis shows the interference-growth effect can dominate the useful-signal gain, making further altitude increases impractical. The paper separately notes that most NTN scenarios still outperform the terrestrial case in the low-SINR region.

## Summary (ZH)
German Svistunov 与 Azim Akhtarshenas（arXiv v1，2026 年 9 月 9 日）在符合 3GPP 规范的密集城市场景中（19 个站点、57 个扇区，站间距 500 米，载频 3.5 GHz，带宽 100 MHz，570 个均匀分布的室外用户，典型密集城市建筑尺寸 40.8 米、街道宽度 16.9 米，为 ITU-R P.1410-6 密集城市参数，用于视距概率几何计算），对比评估了由系留无人机（TUAV）搭载基站实现的 5G 非地面网络（NTN）与传统地面 5G 基站的下行性能。该仿真器将仅适用于 8 公里以上的 3GPP TR 38.811 NTN 信道模型下延至 100–1000 米，并改用 Saboor 等人（IEEE OJ-COMS，2024）提出的基于几何的视距概率模型，配合 ITU-R P.1410-6 密集城市几何参数，而非 HAPS/卫星类 NTN 研究通常关注的高空区间。

核心发现是：TUAV 的高度在两种相互竞争的效应之间进行权衡——提升平台高度会改善对地面用户的视距概率（从 100 米时的 0.2 大致翻倍至 200 米时的 0.4，最小仰角也从约 17 度提升至约 31 度），但高度进一步提升也会增加传播损耗，并使向下指向的 DFT 波束覆盖范围扩大，最终使干扰增长超过有用信号。论文将 200 米确定为该场景下的实用最佳高度：在该高度下，TUAV 搭载基站的用户中位吞吐量为 140 Mbps，而地面基线为 100 Mbps（提升 40%），且增益在小区边缘用户处最为显著——第 5 百分位吞吐量从地面方案的 20 Mbps 提升至 TUAV 方案的 30 Mbps（提升 50%）。而在测试的最高高度（1000 米）下，分析表明干扰增长效应可能会超过有用信号增益，使继续增加高度不再可行。论文另外指出，在低 SINR 区间，多数 NTN 场景仍优于地面方案。

## Key technical points (EN)
- 3GPP-compliant hexagonal dense-urban simulation: 19 sites / 57 sectors, 500 m inter-site distance, 3.5 GHz / 100 MHz, 570 outdoor users, typical dense-urban building size 40.8 m / street width 16.9 m (ITU-R P.1410-6), terrestrial BS at 25 m baseline.
- Extends the 3GPP TR 38.811 NTN channel model (specified above 8 km) down to the 100-1000 m TUAV regime, using the geometry-based LoS-probability model of Saboor et al. (IEEE OJ-COMS 2024) with ITU-R P.1410-6 dense-urban parameters.
- LoS probability roughly doubles from 0.2 (100 m) to 0.4 (200 m); minimum elevation angle improves from ~17 deg to ~31 deg over the same range.
- 200 m identified as the practical optimum: 140 Mbps median throughput vs. 100 Mbps terrestrial (+40%); 30 Mbps vs. 20 Mbps at the 5th percentile / cell edge (+50%).
- At 1000 m, growing interference from a wider visible cell footprint can dominate the LoS gain, eroding the advantage over terrestrial deployment.

## Key technical points (ZH)
- 符合 3GPP 规范的密集城市六边形仿真场景：19 个站点/57 个扇区，站间距 500 米，载频 3.5 GHz/带宽 100 MHz，570 个室外用户，典型密集城市建筑尺寸 40.8 米/街道宽度 16.9 米（ITU-R P.1410-6），地面基站基线高度 25 米。
- 将 3GPP TR 38.811 NTN 信道模型（原仅适用于 8 公里以上）下延至 100–1000 米的系留无人机区间，采用 Saboor 等人（IEEE OJ-COMS 2024）的基于几何视距概率模型与 ITU-R P.1410-6 密集城市参数。
- 视距概率从 100 米时的 0.2 大致翻倍至 200 米时的 0.4；同一区间内最小仰角从约 17 度提升至约 31 度。
- 200 米被确定为该场景下的实用最优高度：中位吞吐量 140 Mbps，优于地面方案的 100 Mbps（提升 40%）；第 5 百分位（小区边缘）吞吐量 30 Mbps，优于地面方案的 20 Mbps（提升 50%）。
- 在 1000 米高度下，因可见小区范围扩大而增长的干扰可能超过视距增益，从而削弱相对地面部署的优势。

## Why it matters / what's new (EN)
Existing NTN entries in the KB cluster around HAPS/satellite-tier altitudes and RIS/relay architectures. This is the first entry in the ntn bin to quantify the specific low-altitude tethered-UAV regime (100-1000 m) against terrestrial 5G with a 3GPP-compliant dense-urban model, and to identify a concrete non-monotonic altitude trade-off (LoS gain vs. interference growth) with a numeric sweet spot, complementing the KB's existing UAV-as-gNB entries (e.g. the 2026-08-23 Place-Slice-Schedule O-RAN UAV-gNB entry) which focus on control-plane orchestration rather than the physical-layer altitude trade-off itself.

## Why it matters / what's new (ZH)
知识库现有的 NTN 相关条目多集中于 HAPS/卫星级别的高度以及 RIS/中继架构。本条目是 ntn 分类下首个针对系留无人机专属的低空区间（100-1000 米）、基于符合 3GPP 规范的密集城市模型与地面 5G 进行量化对比的条目，并给出了一个具体的、非单调的高度权衡关系（视距增益 vs. 干扰增长）及其数值上的最佳点，与知识库中已有的"无人机作为 gNB"条目（如 2026-08-23 的 Place-Slice-Schedule O-RAN 无人机基站条目）形成互补——后者关注控制面编排，而非物理层本身的高度权衡问题。

## Images
![TUAV network deployment geometry in the dense-urban scenario | 密集城市场景下的系留无人机网络部署几何示意图](https://arxiv.org/html/2609.10414v1/Figure/network_deployment.png)
![CDFs of average effective SINR and UE throughput, terrestrial vs. TUAV at 100-1000 m | 平均有效 SINR 与用户吞吐量的 CDF 对比：地面基站与 100–1000 米系留无人机](https://arxiv.org/html/2609.10414v1/Figure/TUAV_performance_vertical.png)
