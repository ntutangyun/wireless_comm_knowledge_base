---
id: 2026-08-31_arxiv-leo-beam-scheduling-com-pnt-fused
date_published: 2026-08-28
date_found: 2026-08-31
type: academic-paper
title_en: "Beam Scheduling for Joint Communications and PNT from LEO: Two Closed-Form Policies, and Why the Gap Between Them Is an Equatorial Belt"
title_zh: "低轨星座通信与 PNT 联合波束调度：两种闭式策略，以及二者差距为何集中在赤道带"
url: "https://arxiv.org/abs/2608.28217"
technology: satellite
source_quality: full
topics: [LEO-PNT, fused-PNT, beam-scheduling, multibeam, Walker-constellation, GNSS-free, NTN, availability, in-beam-ranging]
topic_primary: leo-constellations
topics_secondary: [sat-direct-device]
novelty_score: 3
---

## Summary (EN)

Future broadband LEO constellations are expected to deliver positioning, navigation and timing (PNT) as a **native service alongside broadband**, breaking the GNSS dependency that 5G NR NTN inherited when Release 17 assumed a GNSS-capable UE that pre-compensates its own timing advance and Doppler from GNSS-derived position plus broadcast ephemeris. That shortcut couples connectivity to an external navigation system: a GNSS outage degrades not only positioning but the ability of the NTN link to close its synchronisation loops. Alejandro Gonzalez-Garrido and co-authors (corresponding author at the European Commission) ask the concrete engineering question that follows — **how should a multibeam LEO satellite split its beams and power between a communication (COM) service and a PNT service, when COM keeps absolute priority?**

The paper's reframing is that PNT availability is not a geometry problem but a **beam-power budget** problem. Two independent ceilings bound the 95%-of-time PNT availability metric: a *geometric* ceiling (the share of cells that see at least K_min = 4 satellites often enough) and a *budget* ceiling (how many cells the fleet's finite beam count can actually hold). For the reference instance — a Walker 24 x 11 constellation, 264 satellites, 55 degree inclination, 1200 km, N_max = 150 beams per satellite, 21,380 ground cells, 1440 slots of 60 s over a full day — geometry is generous at 92.9% but the budget bound is only 36.7%, a factor 2.5 below, and the affordable cells huddle at the equator where the overlap (and hence cost) is lowest. Two cheap fixes move the budget: requiring "at least K_min" ranging beams rather than all visible satellites makes the per-cell cost uniform at 4 and lifts the bound to 48.7%; and because a ranging waveform is recovered by correlation, **PNT beams can be radiated at a fraction of COM power** — a mere 2.8 dB per-beam backoff (X >= 1.91, i.e. two PNT beams per COM-beam power unit) is enough to reach the geometric ceiling.

With that budget unlocked, the paper compares **two scheduling policies**, both closed form at the COM-priority operating point so that no per-slot optimisation is needed. (a) **Co-satellite sharing**: a beam carries either COM or ranging, never both, so a cell already served with COM must collect its K_min ranging beams from *other* satellites in view — requiring m_g >= K_min + 1 on busy cells. Robustness comes from a **two-tier power discipline**: ranging beams aimed at a COM-served cell back off to 1/X_hot (X_hot = 20, i.e. -13 dB) so the aggregate carrier-to-interference floor stays inside the COM link budget, while beams aimed at traffic-free cells stay louder at 1/X_free. (b) **In-beam ranging**: the COM waveform itself embeds the ranging signal, so the serving beam counts as one of the K_min sources and the +1 requirement disappears.

Over the 24-hour reference campaign, with no COM/PNT power differentiation at all the 95% availability collapses to 0.0% (homogeneous traffic) and 74.1% (population-weighted, and only ocean cells comply — denying availability precisely where the users are). Co-satellite sharing reaches **70.5% / 88.2%**; in-beam ranging hits the **92.9% geometric ceiling** on both profiles. Both serve 100% of COM demand. The most useful result is geographic: the cells that only in-beam ranging recovers (4,789 homogeneous, 1,015 population-weighted) concentrate in the **thin-overlap equatorial belt** at median |lat| ~ 9 degrees, because that is exactly where m_g = K_min and any busy slot breaks the +1 requirement — Africa gains the most (+40.1% / +36.6%), followed by the Americas and Asia.

## Summary (ZH)

未来的宽带低轨星座被期望把定位、导航与授时（PNT）作为与宽带并列的**原生服务**提供，从而摆脱 5G NR NTN 继承下来的 GNSS 依赖：Release 17 假设终端自身具备 GNSS 能力，用 GNSS 定位结果加广播星历自行预补偿定时提前量与多普勒。这个捷径把连接性绑在了外部导航系统上——一次 GNSS 中断损害的不只是定位，还包括 NTN 链路闭合同步环路的能力。Alejandro Gonzalez-Garrido 等（通讯作者供职于欧盟委员会）由此提出一个具体的工程问题：**在通信（COM）保持绝对优先的前提下，多波束低轨卫星应如何在通信与 PNT 之间分配波束与功率？**

论文的关键重构是：PNT 可用性不是几何问题，而是**波束功率预算**问题。95% 时间可用性指标受两个独立上界约束：*几何*上界（能足够频繁地看到至少 K_min = 4 颗卫星的小区面积占比）与*预算*上界（星座有限的波束总数实际能维持多少小区）。在参考算例中——Walker 24 x 11 星座、264 颗卫星、倾角 55 度、高度 1200 km、每星 N_max = 150 个波束、21,380 个地面小区、全天 1440 个 60 s 时隙——几何上界高达 92.9%，而预算上界仅 36.7%，相差 2.5 倍，且能负担的小区都挤在重叠度（即成本）最低的赤道附近。两项低成本改动即可抬升预算：把服务规则从"所有可见卫星"放宽为"至少 K_min 颗"，使每小区成本统一为 4，上界升至 48.7%；又因为测距波形靠相关接收，**PNT 波束可以用远低于 COM 的功率发射**——仅需 2.8 dB 的每波束回退（X >= 1.91，即一份 COM 波束功率可换两个 PNT 波束）就足以触达几何上界。

预算解开之后，论文比较**两种调度策略**，二者在 COM 优先的工作点上均为闭式解，无需逐时隙优化。(a) **同星共享**：一个波束要么承载 COM 要么承载测距，绝不兼任，因此已被 COM 服务的小区必须从*其他*可见卫星收集 K_min 个测距波束——忙小区需满足 m_g >= K_min + 1。稳健性由**两级功率纪律**保证：指向 COM 小区的测距波束回退到 1/X_hot（X_hot = 20，即 -13 dB），使 COM 接收机看到的总载干比底线仍落在链路预算之内；而指向无业务小区的波束保持较高的 1/X_free。(b) **波束内测距**：COM 波形本身嵌入测距信号，服务波束即可算作 K_min 个源之一，+1 的额外要求随之消失。

在 24 小时参考仿真中，若 COM 与 PNT 完全不做功率区分，95% 可用性坍缩到 0.0%（均匀话务）与 74.1%（人口加权，且只有海洋小区达标——恰恰在有用户的地方拒绝服务）。同星共享达到 **70.5% / 88.2%**；波束内测距在两种话务分布下都触及 **92.9% 的几何上界**。两者都 100% 满足 COM 需求。最有用的结果是地理性的：只有波束内测距才能挽回的小区（均匀 4,789 个、人口加权 1,015 个）集中在**重叠稀薄的赤道带**（中位纬度约 9 度），因为那里恰好 m_g = K_min，任何一个忙时隙都会打破 +1 要求——非洲收益最大（+40.1% / +36.6%），其次是美洲与亚洲。

## Key technical points (EN)

- **Problem**: multibeam LEO payload sharing between COM and PNT ("fused PNT"), evaluated at the operating point where COM has full priority and all serviceable demand must be served.
- **Metric**: share of coverage area whose PNT service reaches 95%-of-time availability; at gamma = 0.95 only 72 of 1440 daily slots may miss PNT.
- **Two ceilings**: eta_pnt <= min(eta_geo, eta_bud). Reference instance: eta_geo = 92.9% (19,865 of 21,380 cells) vs eta_bud = 36.7% if every visible satellite must range — a 2.5x gap; affordable cells cluster at median |lat| = 10.5 degrees.
- **Cost-uniformity fix**: serving with "at least K_min = 4" ranging beams instead of all m_g in view makes b_g = 4 for every cell, taking the budget bound 36.7% -> 48.7% (with a cyclic rest rotation that exploits the allowed 1 - gamma idle fraction).
- **Processing-gain fix**: PNT beams transmit at 1/X of COM beam power. Reaching the ceiling needs only X >= 1.91, i.e. **-2.8 dB per-beam backoff**.
- **Two-tier power discipline**: X_hot = 20 (-13 dB) for ranging beams on a COM-served cell so the pre-despreading C/I floor of 10log10(X_hot / K_min) stays compatible with the COM link budget; X_free = 5-6 on traffic-free cells; at most K_min ranging beams admitted per busy cell so aggregate interference is bounded by construction.
- **Policy (b) co-satellite sharing**: no waveform change, no payload coherence requirement, standard ranging receiver; costs the m_g >= K_min + 1 eligibility penalty on busy cells.
- **Policy (a) in-beam ranging**: ranging embedded in the COM waveform; needs onboard phase coherence between components and a receiver able to extract pseudoranges from a communication signal (a JCAP-class redesign of both link ends).
- **Results (24 h, Walker 24x11, 264 sats, 1200 km, i = 55 deg)**: no power differentiation -> 0.0% / 74.1%; co-satellite sharing -> **70.5% (homogeneous) / 88.2% (population-weighted)**; in-beam ranging -> **92.9% = geometric ceiling** on both; 100% of COM demand served in all cases; neither policy needs a scheduler at nominal load.
- **Where the gap lives**: cells recovered only by in-beam ranging concentrate at median |lat| ~ 9 degrees (thin-overlap equatorial belt); per-region gain largest in Africa (+40.1% homogeneous, +36.6% population-weighted).
- **Sensitivity table** (all on top of the "at least K_min" rule): N_max 200/250/286 -> 65.0/81.2/92.9%; altimeter or clock aiding (K_min = 3) -> 65.0% and raises the geometric ceiling itself to 95.4%; PNT beam width 200/207 km -> 86.7/92.9%; restricting the denominator to inhabited cells -> 96.0% with 3,473 spare cells for oceanic corridors.
- **Traffic models**: homogeneous keeps 33.0% of cells busy on average; population-weighted concentrates the same load on 10.2% of cells (per-satellite COM load mean 26.1 / 8.2 beams, peaks 60 / 88).

## Key technical points (ZH)

- **问题**：多波束低轨载荷在 COM 与 PNT 之间的分配（"融合 PNT"），工作点设定为 COM 完全优先且所有可服务需求必须被满足。
- **指标**：PNT 服务达到 95% 时间可用性的覆盖面积占比；gamma = 0.95 时，全天 1440 个时隙中最多只能有 72 个缺失 PNT。
- **两个上界**：eta_pnt <= min(eta_geo, eta_bud)。参考算例中 eta_geo = 92.9%（21,380 个小区中的 19,865 个），而若要求所有可见卫星都测距则 eta_bud 仅 36.7%——相差 2.5 倍；可负担小区集中在中位纬度 10.5 度。
- **成本均一化改动**：把服务规则改为"至少 K_min = 4 颗"而非全部 m_g 颗，使每小区 b_g = 4，预算上界由 36.7% 升至 48.7%（并利用允许的 1 - gamma 空闲比例做循环轮休）。
- **处理增益改动**：PNT 波束以 COM 波束功率的 1/X 发射。达到上界只需 X >= 1.91，即**每波束回退 2.8 dB**。
- **两级功率纪律**：指向 COM 小区的测距波束取 X_hot = 20（-13 dB），使解扩前的 C/I 底线 10log10(X_hot / K_min) 仍与 COM 链路预算相容；无业务小区取 X_free = 5-6；每个忙小区最多接纳 K_min 个测距波束，从构造上限定总干扰。
- **策略 (b) 同星共享**：无需改波形、无需载荷相干性要求、测距接收机与专用导航服务一致；代价是忙小区的 m_g >= K_min + 1 资格惩罚。
- **策略 (a) 波束内测距**：测距嵌入 COM 波形；需要星上两路信号相位相干，以及能从通信信号中提取伪距的接收机（链路两端的 JCAP 级重设计）。
- **结果（24 小时，Walker 24x11，264 星，1200 km，倾角 55 度）**：不做功率区分 -> 0.0% / 74.1%；同星共享 -> **70.5%（均匀）/ 88.2%（人口加权）**；波束内测距 -> 两种分布下均 **92.9% = 几何上界**；三种情形下 COM 需求均 100% 满足；额定负载下两种策略都不需要调度器。
- **差距所在**：只有波束内测距才能挽回的小区集中在中位纬度约 9 度的赤道稀重叠带；分区收益以非洲最大（均匀 +40.1%，人口加权 +36.6%）。
- **敏感性分析**（均在"至少 K_min"规则之上）：N_max 取 200/250/286 -> 65.0/81.2/92.9%；高度计或钟差辅助（K_min = 3）-> 65.0%，并把几何上界本身抬到 95.4%；PNT 波束宽度 200/207 km -> 86.7/92.9%；把分母限制为有人居住小区 -> 96.0%，且尚余 3,473 个小区可用于海洋走廊。
- **话务模型**：均匀分布下平均 33.0% 的小区处于忙态；人口加权把同样的总负载集中到 10.2% 的小区（每星 COM 负载均值 26.1 / 8.2 个波束，峰值 60 / 88）。

## Why it matters / what's new (EN)

The KB's LEO-PNT thread now has a **payload-economics** entry to sit between its user-side and regulatory-side pieces. The 2026-08-15 SSB-positioning work asked what accuracy a communication signal can yield; the 2026-08-20 ground-space reference-network work asked how the infrastructure is coordinated; the 2026-08-28 Xona Pulsar authorisation established the right to broadcast a navigation signal beside GPS. This paper answers the question that determines whether any of that scales: **what fraction of the payload does PNT actually cost, and where does the money run out?** Its answer inverts the intuitive framing — geometry is almost never the binding constraint in a dense broadband constellation; the beam-power budget is, and it binds by a factor of 2.5.

Two results generalise beyond the reference constellation. First, the **-2.8 dB insight**: because ranging is recovered by correlation and communication is not, the two services are not equally expensive per beam, and the entire feasibility question turns on acknowledging that asymmetry — a system that budgets PNT beams at COM power gets 0.0% availability under uniform traffic. Second, the **equatorial-belt geography** of the gap gives an operator a deployment sequence rather than a binary choice: co-satellite sharing deploys on today's payloads and already closes the mid-latitude bands, and the waveform redesign that in-beam ranging demands can be deferred to a second generation, because under realistic population-weighted traffic it is worth only 4.7 percentage points — but under uniformly loaded cells it is worth 22.4, the difference between a regional and a near-global availability guarantee.

## Why it matters / what's new (ZH)

知识库的低轨 PNT 主线现在补上了一块**载荷经济学**的拼图，位于用户侧与监管侧之间。2026-08-15 的 SSB 定位工作问的是通信信号能给出多高精度；2026-08-20 的天地基准网协调工作问的是基础设施如何配合；2026-08-28 的 Xona Pulsar 授权确立了在 GPS 邻频广播导航信号的权利。本文回答的则是决定上述一切能否规模化的问题：**PNT 实际消耗多少载荷份额，钱又是在哪里用尽的？** 其答案颠覆了直觉框架——在密集宽带星座中，几何几乎从不是约束瓶颈，波束功率预算才是，而且它以 2.5 倍的幅度收紧。

有两个结论可以推广到参考星座之外。其一是**-2.8 dB 洞见**：测距靠相关接收而通信不然，两种业务的每波束成本本就不对等，整个可行性问题都取决于是否承认这一不对称——按 COM 功率给 PNT 波束做预算的系统，在均匀话务下可用性为 0.0%。其二是差距的**赤道带地理特征**，它给运营商的不是二选一，而是部署顺序：同星共享用今天的载荷即可上线，且已经能覆盖中纬度带；波束内测距所要求的波形重设计可以推迟到第二代——因为在现实的人口加权话务下它只值 4.7 个百分点，但在均匀负载下值 22.4 个百分点，是区域性保障与准全球性保障之间的分野。

## Images

![Beam-cell layout of a single satellite in the reference Walker 24x11 constellation | 参考 Walker 24x11 星座中单星的波束-小区布局](https://arxiv.org/html/2608.28217v1/single_satellite_beam_cells_example.png)
![Overlap multiplicity m_g on the ground cells: 4 near the equator, up to 14 in the +/-50 degree bands | 地面小区的重叠度 m_g：赤道附近为 4，正负 50 度带最高达 14](https://arxiv.org/html/2608.28217v1/escenario_overlap_s0.png)
![Eligibility availability, giving the 92.9% geometric ceiling of the scenario | 资格可用性图，给出该场景 92.9% 的几何上界](https://arxiv.org/html/2608.28217v1/escenario_disponibilidad.png)
![What in-beam ranging buys under population-weighted traffic: recovered cells concentrate in the equatorial belt | 人口加权话务下波束内测距的增益：挽回的小区集中在赤道带](https://arxiv.org/html/2608.28217v1/comparacion_soluciones_pop.png)
