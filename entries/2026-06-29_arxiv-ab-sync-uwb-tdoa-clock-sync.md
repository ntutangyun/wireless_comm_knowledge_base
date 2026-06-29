---
id: 2026-06-29_arxiv-ab-sync-uwb-tdoa-clock-sync
date_published: 2026-06-26
date_found: 2026-06-29
technology: uwb
type: academic-paper
title_en: "AB-Sync: Attention-Based Slot-Level Clock Synchronization for UWB-TDOA Localization Networks"
title_zh: "AB-Sync：面向 UWB-TDOA 定位网络的基于注意力的时隙级时钟同步方法"
url: "https://arxiv.org/abs/2606.28087"
source_quality: abstract_only
topics: [UWB, TDOA, localization, clock-synchronization, TDMA]
topic_primary: uwb-ranging
topics_secondary: [uwb-radar]
novelty_score: 3
---

## Summary (EN)
AB-Sync targets the clock-synchronization problem that limits indoor UWB time-difference-of-arrival (TDOA) localization. TDOA fixes a tag's position from the differences in signal arrival time across fixed anchors, so a sub-nanosecond timing error between anchors translates directly into a centimeter-scale position error. Existing wireless clock-sync schemes estimate each anchor's clock state once per synchronization *stage* and then apply that estimate across the many transmission *slots* inside the stage — a coarse-grained correction laid over a fine-grained transmission structure.

The paper's central observation is this **granularity mismatch**: in a TDMA-based UWB system the clock-speed ratio between anchors drifts measurably from slot to slot, but stage-level estimation forces a single ratio onto the whole stage. AB-Sync closes the gap with an attention mechanism that operates at slot-level granularity, modeling the relationship between each slot's clock-speed ratio and the fluctuations of neighboring clocks to produce a precise per-slot timestamp mapping. Crucially, it does this purely as a post-processing/estimation refinement — it adds no extra synchronization frames or air-time overhead.

Reported gains over the Deferred+3S-KF baseline: TDOA ranging standard deviation down 9.4%, static localization accuracy up 18.6%, and in multi-tag experiments an average 5.3% STD reduction across slots (up to 16.2% on the best slot). The result is a drop-in accuracy improvement for TDMA UWB anchor infrastructures without changing the over-the-air protocol.

## Summary (ZH)
AB-Sync 针对制约室内 UWB 到达时间差（TDOA）定位精度的时钟同步问题。TDOA 通过信号到达各固定锚点的时间差来确定标签位置，因此锚点间亚纳秒级的计时误差会直接转化为厘米级的定位误差。现有无线时钟同步方案在每个同步**阶段**只估计一次锚点时钟状态，并将该估计套用到该阶段内的众多传输**时隙**上——即用粗粒度校正去覆盖细粒度的传输结构。

本文的核心观察是这种**粒度失配**：在基于 TDMA 的 UWB 系统中，锚点之间的时钟速率比在时隙间存在可测量的漂移，而阶段级估计却把单一比值强加于整个阶段。AB-Sync 用一个在时隙级粒度上运作的注意力机制弥合该差距：它建模每个时隙的时钟速率比与邻近时钟波动之间的关系，从而得到精确的逐时隙时间戳映射。关键在于，这完全是作为估计/后处理的精化来实现的——不增加任何额外同步帧或空口开销。

相较 Deferred+3S-KF 基线的增益：TDOA 测距标准差下降 9.4%，静态定位精度提升 18.6%；在多标签实验中各时隙平均标准差下降 5.3%（最佳时隙最高 16.2%）。其效果是在不改变空口协议的前提下，为 TDMA UWB 锚点基础设施带来即插即用的精度提升。

## Key technical points (EN)
- Problem: stage-level clock-state estimation is too coarse for slot-level TDMA transmission → granularity mismatch drives residual TDOA error.
- Mechanism: attention model relates each slot's clock-speed ratio to neighboring-clock fluctuations → precise per-slot timestamp mapping.
- Zero added air-time overhead — it is an estimation refinement, not a new sync exchange.
- Results vs Deferred+3S-KF: −9.4% TDOA ranging STD, +18.6% static localization accuracy, −5.3% avg multi-tag slot STD (up to −16.2%).
- Authors: Lyu, Tian, Qin, Q. Liu, M. Liu. Submitted 2026-06-26.

## Key technical points (ZH)
- 问题：阶段级时钟状态估计对时隙级 TDMA 传输过于粗糙 → 粒度失配带来残余 TDOA 误差。
- 机制：注意力模型将每个时隙的时钟速率比与邻近时钟波动相关联 → 精确的逐时隙时间戳映射。
- 零额外空口开销——属于估计精化，而非新增同步交互。
- 相较 Deferred+3S-KF：TDOA 测距标准差 −9.4%、静态定位精度 +18.6%、多标签各时隙平均标准差 −5.3%（最高 −16.2%）。
- 作者：Lyu、Tian、Qin、刘庆文、刘明清，2026-06-26 提交。

## Why it matters / what's new (EN)
The KB's UWB bin is dominated by 802.15.4ab silicon (ST64UWB, imec NBA receiver, Infineon TSL100, Calterah, Ceva IP) and ranging-security work; AB-Sync adds an algorithm-side contribution to `uwb-ranging` — accuracy that comes from estimator design rather than new RF. Its reusable idea is naming and fixing the stage-vs-slot granularity mismatch in TDMA clock sync, an error source that hardware link-budget gains (NBA, narrowband assist) do not address. It complements the silicon entries by improving what existing anchor deployments can extract from the same waveform.

## Why it matters / what's new (ZH)
本 KB 的 UWB 分区以 802.15.4ab 芯片（ST64UWB、imec NBA 接收机、Infineon TSL100、Calterah、Ceva IP）与测距安全研究为主；AB-Sync 为 `uwb-ranging` 补充了算法侧贡献——精度来自估计器设计而非新的射频硬件。其可复用思想是识别并修复 TDMA 时钟同步中"阶段 vs 时隙"的粒度失配，这一误差来源是硬件链路预算增益（NBA、窄带辅助）所无法解决的。它与芯片类条目互补，提升了既有锚点部署从同一波形中可提取的精度上限。
