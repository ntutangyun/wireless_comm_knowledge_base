---
id: 2026-11-05_arxiv-mmwave-ue-positioning-blockage-limits-isac-assisted-handover
date_published: 2026-10-30
date_found: 2026-11-05
type: academic-paper
technology: cellular
title_en: "mmWave UE Positioning Under Blockage: Limits for ISAC-Assisted Handover"
title_zh: "毫米波阻挡下的 UE 定位：ISAC 辅助切换的极限"
url: "https://arxiv.org/abs/2611.00453"
source_quality: full
topics: [mmWave, positioning, SRS, position-error-bound, blockage, proactive-handover, digital-twin, ISAC, O-RU]
topic_primary: 5g-nr
topics_secondary: [6g-vision, open-ran]
novelty_score: 3
---

## Summary (EN)

Seyed Bagher Hashemi Natanzi and Bo Tang (Worcester Polytechnic Institute) ask whether the radio units serving a user can localize it accurately enough, from its uplink sounding reference signals (SRS), to support proactive handover before a passing body blocks a millimeter-wave link. A companion study by the same authors found that a blockage-aware handover planner beats the 3GPP A5 event only if the user position error is about 8-13 cm per horizontal axis, and that meter-level error removes the benefit.

The setting is an urban street canyon served by two O-RAN radio units (O-RUs). The paper derives single-epoch position error bounds (equivalent Fisher information) that treat synchronisation and array-calibration errors as Bayesian priors, with two models of a blocked line of sight and with or without reflected paths of known geometry supplied by a digital twin. It then tests two uplink estimators in ray-traced held-out scenarios: a dominant-path estimator with an extended Kalman filter, and a map-aided multipath tracker that associates extracted paths with virtual anchors of the digital twin.

## Summary (ZH)

Seyed Bagher Hashemi Natanzi 与 Bo Tang（伍斯特理工学院）研究：服务某用户的射频单元能否利用其上行探测参考信号（SRS）把用户定位得足够准确，以便在行人等遮挡毫米波链路之前提前切换。同一作者的配套研究发现，只有当用户位置误差约为每个水平轴 8-13 cm 时，感知遮挡的切换规划器才优于 3GPP A5 事件，米级误差会使收益消失。

场景是由两个 O-RAN 射频单元（O-RU）服务的城市街道峡谷。论文推导单时刻位置误差界（等效 Fisher 信息），把同步误差和阵列校准误差作为贝叶斯先验，考虑两种被遮挡 LOS 模型，并区分是否有数字孪生提供的已知几何反射径。随后在光线追踪的保留场景中测试两种上行估计器：带扩展卡尔曼滤波的主径估计器，以及把提取的路径与数字孪生虚拟锚点关联的地图辅助多径跟踪器。

## Key technical points (EN)

- With line of sight to both O-RUs, array calibration rather than bandwidth limits the LoS-only bound.
- Blockage degrades the LoS-only bound sharply; known reflections keep the map-aided bound low. When both O-RUs are blocked (3.0% of epochs) the LoS-only bound is singular, and those epochs are treated as having no fix.
- The simple dominant-path estimator makes mostly systematic multipath errors that grow around blockage onsets; with its positions, proactive handover becomes worse than the 3GPP A5 baseline.
- The map-aided multipath tracker cuts the median position error from 12 cm to 3.7 cm and removes the significant penalty versus A5 at link margins of 15 dB and above, but does not yet beat the baseline.
- Absolute gains are small: at 15 dB margin A5 has an outage of 1.88 s per UE-minute, and the relative change is -5.7% with exact positions and -5.2% with bound-level map-aided positions.
- Open code and scripts for every reported number are linked in the paper.

## Key technical points (ZH)

- 当两个 O-RU 均有视距时，限制仅 LoS 误差界的是阵列校准而非带宽。
- 遮挡会使仅 LoS 误差界急剧恶化；已知反射径则使地图辅助误差界保持较低。两个 O-RU 同时被遮挡的时刻（占 3.0%）仅 LoS 误差界奇异，这些时刻按无定位结果处理。
- 简单的主径估计器主要产生系统性多径误差，在遮挡起始处增大；使用其位置时，主动切换反而差于 3GPP A5 基线。
- 地图辅助多径跟踪器把中位位置误差从 12 cm 降到 3.7 cm，并在链路余量 15 dB 及以上时消除了相对 A5 的显著劣势，但尚未超过基线。
- 绝对增益很小：余量 15 dB 时 A5 的中断为每 UE 每分钟 1.88 s，使用精确位置的相对变化为 -5.7%，使用达到误差界水平的地图辅助位置为 -5.2%。
- 论文提供了开源代码以及生成每个数字的脚本。

## Why it matters / what's new (EN)

The paper quantifies what SRS-based uplink positioning must achieve for sensing-assisted handover to pay off, and reports that a simple estimator can make handover worse than the reactive 3GPP event. Limits stated by the authors: one street canyon with two O-RUs, specular paths up to order 2 without diffuse scattering, fully digital arrays read out in one symbol, an exact map in both the bound and the tracker, opaque knife-edge blockers, single-epoch bounds that ignore tracking, and synthetic position errors independent across epochs. The tracker does not reach the small gain of exact positions, and the cause of the remaining gap is left open.

## Why it matters / what's new (ZH)

论文量化了基于 SRS 的上行定位需要达到何种精度，感知辅助切换才有收益，并指出简单估计器可能使切换比 3GPP 的反应式事件更差。作者自述的局限：仅一个含两个 O-RU 的街道峡谷、至多二阶镜面路径且无漫散射、单符号读出的全数字阵列、误差界与跟踪器中均使用精确地图、不透明刀锋遮挡体、忽略跟踪的单时刻误差界，以及各时刻独立的合成位置误差。跟踪器尚未达到精确位置带来的小幅增益，剩余差距的原因尚无定论。

## Images

None.
