---
id: 2026-11-06_arxiv-noma-coordinated-beam-hopping-vleo
date_published: 2026-11-05
date_found: 2026-11-06
technology: satellite
type: academic-paper
title_en: "NOMA Assisted Coordinated Beam Hopping for VLEO Satellite Communication Systems"
title_zh: "面向极低轨（VLEO）卫星通信的 NOMA 辅助协调波束跳变"
url: "https://arxiv.org/abs/2611.08174"
source_quality: full
topics: [VLEO, beam-hopping, NOMA, coordinated-beam-hopping, outage-analysis, Doppler, pointing-error]
topic_primary: leo-constellations
topics_secondary: [ntn]
novelty_score: 3
---

## Summary (EN)

Kang, Yue, Zhang, Li, Yang, Pan and Kang (Beijing Information Science and Technology University, Beijing Institute of Technology, Beihang University, CETC 54th Institute and CICT; arXiv cs.IT, submitted 5 Nov 2026) study NOMA-assisted coordinated beam hopping (CBH) for very-low-Earth-orbit satellites below about 450 km. VLEO offers lower delay and better link budgets than higher LEO, but fast geometry change, Doppler, atmospheric loss and pointing jitter complicate scheduling; the authors position the work against earlier NOMA beam-hopping studies that mostly assumed conventional LEO with simpler channels.

In the system model, several satellites each activate beams, and two beams from different satellites form a coordinated pair per slot serving two ordinary users and a mandatory ground station, which combines the two satellite branches by maximal-ratio combining. The channel includes Nakagami-m fading, slant-range path loss, a transmit antenna pattern with pointing error, atmospheric loss and residual Doppler loss, with quasi-static block fading over a 0.1 s slot. The sum-rate maximization under power-ordering, QoS, SIC and beam-activation constraints is split into a low-complexity decoupled algorithm: greedy beam-user selection by large-scale gain, then a discrete search over 33 power-allocation candidates. The paper also derives closed-form outage expressions with diversity orders (m for the weaker user, 2m for the stronger user and the ground station) and delay-limited throughput.

Simulation (11.7 GHz, 400 MHz bandwidth, 360 km altitude, 6 satellites, 24 candidate beams, 2 active beams per slot, 25 dBW per beam, Nakagami m = 2) shows NOMA-CBH ahead of OMA-CBH in sum rate, with the gap widening at higher power. Against exhaustive search the speedup grows from about 269x to about 4570x as candidate users go from 2 to 6. Averaged over nine spatial scenarios, delivered traffic is about 2.51 Gbps for NOMA-CBH, 2.18 Gbps for a fixed-power variant and 0.11 Gbps for random selection; at saturation about 5.18 Gbps (NOMA-CBH) versus 0.70 Gbps (OMA-CBH). NOMA-CBH stays relatively stable up to 2 degrees pointing standard deviation. Stated limits: the algorithm is suboptimal and verified against exhaustive search only on small setups; the scheduler is capacity-oriented rather than queue-aware. Not addressed in the paper: stale-CSI effects; each Monte Carlo realization spans 2.4 s (24 x 0.1 s slots).

## Summary (ZH)

Kang、Yue、Zhang、Li、Yang、Pan 与 Kang（北京信息科技大学、北京理工大学、北京航空航天大学、中国电科 54 所与中国信息通信科技集团）研究面向约 450 km 以下极低轨（VLEO）卫星的 NOMA 辅助协调波束跳变（CBH）（arXiv cs.IT，2026 年 11 月 5 日提交）。VLEO 相比更高轨道具有更低时延与更好的链路预算，但几何关系快速变化、多普勒、大气损耗与指向抖动使调度更复杂；作者将本文与此前多假设常规低轨与较简单信道的 NOMA 波束跳变研究区分开来。

系统模型中，多颗卫星各自激活波束，来自不同卫星的两个波束在每个时隙构成一对协调波束，服务两个普通用户与一个必须服务的地面站，地面站对两条卫星支路做最大比合并。信道包含 Nakagami-m 衰落、斜距路径损耗、带指向误差的发射天线方向图、大气损耗与残余多普勒损耗，并在 0.1 s 时隙内按准静态块衰落处理。在功率排序、QoS、SIC 与波束激活约束下的和速率最大化被拆分为低复杂度解耦算法：先按大尺度增益贪心选择波束-用户，再对 33 个功率分配候选做离散搜索。论文还推导了含分集阶数的闭式中断概率表达式（较弱用户为 m，较强用户与地面站为 2m）与时延受限吞吐。

仿真（11.7 GHz、400 MHz 带宽、360 km 高度、6 颗卫星、24 个候选波束、每时隙 2 个激活波束、每波束 25 dBW、Nakagami m = 2）显示 NOMA-CBH 的和速率高于 OMA-CBH，且功率越高差距越大。相对穷举搜索，候选用户数从 2 增至 6 时加速比由约 269 倍增至约 4570 倍。在九种空间场景上平均，实际交付流量约为：NOMA-CBH 2.51 Gbps、固定功率变体 2.18 Gbps、随机选择 0.11 Gbps；饱和时 NOMA-CBH 约 5.18 Gbps，OMA-CBH 约 0.70 Gbps。指向标准差在 2 度以内时 NOMA-CBH 相对稳定。作者自述局限：算法次优，仅在小规模设置下与穷举搜索对比；调度器面向容量而非感知队列。论文未涉及：过时 CSI 的影响；每次蒙特卡洛实现覆盖 2.4 s（24 个 0.1 s 时隙）。

## Key technical points (EN)

- Coordinated pair of beams from two satellites per slot serves two users plus a ground station that uses MRC over both branches.
- Channel: Nakagami-m, slant-range loss, antenna pattern with pointing error, atmospheric and residual-Doppler loss; 0.1 s quasi-static slot.
- Low-complexity decoupled algorithm: greedy beam-user selection, then search over 33 power candidates; speedup over exhaustive search about 269x to 4570x.
- Closed-form outage with diversity orders m (weaker user) and 2m (stronger user and ground station).
- Setup: 11.7 GHz, 400 MHz, 360 km, 6 satellites, 24 beams, 2 active per slot, 25 dBW.
- Saturation traffic about 5.18 Gbps (NOMA-CBH) vs 0.70 Gbps (OMA-CBH); stable up to 2 degree pointing standard deviation.

## Key technical points (ZH)

- 每时隙由两颗卫星的一对协调波束服务两个用户与一个地面站，地面站对两条支路做最大比合并。
- 信道：Nakagami-m、斜距损耗、含指向误差的天线方向图、大气与残余多普勒损耗；0.1 s 准静态时隙。
- 低复杂度解耦算法：贪心波束-用户选择，再搜索 33 个功率候选；相对穷举搜索加速约 269 倍至 4570 倍。
- 闭式中断表达式，分集阶数为 m（较弱用户）与 2m（较强用户与地面站）。
- 设置：11.7 GHz、400 MHz、360 km、6 颗卫星、24 个波束、每时隙 2 个激活、25 dBW。
- 饱和流量约 5.18 Gbps（NOMA-CBH）对 0.70 Gbps（OMA-CBH）；指向标准差 2 度以内相对稳定。

## Why it matters / what's new (EN)

The KB already has beam-hopping work aimed at DVB-style scheduling (2026-08-15 DVB beam hopping) and attack-side work on beam-hopping schedulers (2026-09-19_arxiv-janus-dos-beam-hopping-leo). This entry adds the VLEO regime with multi-satellite coordination and NOMA, with a closed-form outage analysis alongside a scheduling heuristic. It is analytical and simulation-based, and does not model stale CSI.

## Why it matters / what's new (ZH)

KB 已有面向 DVB 风格调度的波束跳变工作（2026-08-15 DVB beam hopping）以及针对波束跳变调度器的攻击侧工作（2026-09-19_arxiv-janus-dos-beam-hopping-leo）。本条目补充了结合多卫星协调与 NOMA 的 VLEO 场景，既有闭式中断分析也有调度启发式算法。其结论基于分析与仿真，且未建模过时 CSI。

## Images

![System model of NOMA-assisted coordinated beam hopping for VLEO | VLEO NOMA 辅助协调波束跳变系统模型](https://arxiv.org/html/2611.08174v1/vleo.png)
