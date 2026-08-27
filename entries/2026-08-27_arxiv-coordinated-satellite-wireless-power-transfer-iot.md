---
id: 2026-08-27_arxiv-coordinated-satellite-wireless-power-transfer-iot
date_published: 2026-08-26
date_found: 2026-08-27
type: academic-paper
technology: satellite
title_en: "Power from Space: coordinated multi-satellite wireless power transfer for off-grid IoT (Oulu + KAUST) — coherent LEO coordination scales received power quadratically with satellite count, reaching tens of mW at 12 GHz where non-coherent stalls at sub-mW"
title_zh: "\"来自太空的电力\"：面向离网物联网的多星协同无线能量传输（奥卢大学 + KAUST）——相干协同使接收功率随卫星数呈平方增长，在 12 GHz 下可达数十毫瓦，而非相干方案停留在亚毫瓦量级"
url: "https://arxiv.org/abs/2608.25589"
source_quality: full
topics: [wireless-power-transfer, satellite-WPT, energy-harvesting, IoT, coherent-distributed-beamforming, power-spillover, inter-satellite-laser, metasurface, DMA, off-grid]
topic_primary: sat-iot
topics_secondary: [leo-constellations, sat-direct-device]
novelty_score: 2
---

## Summary (EN)
Osmel M. Rosabal, Amirhossein Azarbahram, Mateen Ashraf, Mohammad Shehab, Abdul Basit Khattak, Onel L. A. López and Mohamed-Slim Alouini (University of Oulu and KAUST; arxiv eess.SP, 26 Aug 2026, 7 pp, submitted to *IEEE Internet of Things Magazine*) sketch and then quantify an idea the satellite bin has not carried before: using a LEO constellation not to carry data to remote IoT devices but to **carry energy to them**. The motivation is the familiar off-grid deployment gap — sensors in deserts, oceans, forests and disaster zones where a battery swap is the whole operating cost — and the observation that satellite direct-to-device work has solved the connectivity half of that problem while leaving the power half untouched.

The paper first sets honest bounds on what microwave WPT can do. Over the 0.3–300 GHz range the physics is unforgiving: the Goldstone experiment reached ~50% end-to-end efficiency at kilometre scale, but a recent 10 km demonstration managed only **~1%**, and Japanese demonstrations span 50 m to 5 km. Rectenna (receiver) conversion efficiency reaches **up to 70%**, and transmit powers in the literature span watts to gigawatts. From orbit, none of those numbers survive a single-satellite budget — which is precisely the argument for coordination.

The core contribution is the **coordinated multi-satellite** evaluation. Five single-antenna ground devices inside a 2 km radius are served by satellites at **500 km altitude transmitting 1,000 W at 12 GHz**, under two coordination regimes. **Coherent** coordination — phase-aligned transmission so signals add in amplitude at the target — makes received power scale **quadratically** with satellite count; **non-coherent** coordination scales only **linearly**. The practical gap is large: non-coherent operation with a handful of satellites delivers **sub-milliwatt** power, while coherent coordination reaches **tens of milliwatts**. The authors anchor those numbers against application requirements, from **1.20 mW** for outdoor inventory tracking to **4.18 mW** for edge-AI sensing: configurations in the 1.20–2.50 mW band support inventory and remote monitoring, and only those above 4.18 mW cover all three target applications. Power **spillover** onto unintended locations is characterised statistically via CCDFs normalised to satellite count and average device power — the paper's acknowledgment that a space-to-ground power beam is also an interference and safety object, not just a link.

Two further axes are examined. **Inter-satellite laser WPT** — satellites charging each other rather than the ground — trades much higher free-space path loss for far longer reach, supporting distances on the order of **10³ km** versus **10² km** for microwave, at receiver efficiencies of **10–25%**; a pointing-loss study shows there is an **optimal transmit aperture** for each distance, since enlarging the aperture tightens the beam but sharpens pointing sensitivity. **Metasurfaces** — dynamic metasurface antennas on the satellite aperture and RIS on the ground — are proposed as the low-complexity route to the beamforming and beam management the coherent scheme demands. The challenge list is candid: **sub-nanosecond synchronisation** across spacecraft at 12 GHz, satellite energy autonomy through eclipse, laser safety, and channel-acquisition overhead under rapidly changing LEO geometry.

## Summary (ZH)
Osmel M. Rosabal、Amirhossein Azarbahram、Mateen Ashraf、Mohammad Shehab、Abdul Basit Khattak、Onel L. A. López 与 Mohamed-Slim Alouini（奥卢大学与 KAUST；arxiv eess.SP，2026 年 8 月 26 日，7 页，投稿 *IEEE Internet of Things Magazine*）提出并量化了一个本条目库此前未收录的思路：让 LEO 星座不是向偏远物联网设备**送数据**，而是向它们**送能量**。动机来自熟悉的离网部署缺口——沙漠、海洋、森林与灾区中的传感器，换一次电池就是全部运营成本——以及一个观察：卫星直连设备的工作已经解决了连接性这一半问题，供电那一半却仍空着。

论文首先为微波 WPT 划定诚实的边界。在 0.3–300 GHz 范围内，物理规律毫不留情：Goldstone 实验在公里尺度上达到约 50% 的端到端效率，但近期一次 10 km 演示只做到约 **1%**，日本的演示覆盖 50 m 至 5 km。整流天线（接收端）转换效率**最高约 70%**，文献中的发射功率跨度从瓦级到吉瓦级。从轨道上看，单星预算撑不住其中任何一个数字——这恰恰构成了"协同"的论据。

核心贡献是**多星协同**的评估。2 km 半径内的五个单天线地面设备，由 **500 km 高度、12 GHz、发射功率 1,000 W** 的卫星服务，比较两种协同机制。**相干**协同——相位对齐使信号在目标处按幅度相加——使接收功率随卫星数呈**平方**增长；**非相干**协同只呈**线性**增长。实际差距很大：少量卫星的非相干工作只能提供**亚毫瓦**功率，而相干协同可达**数十毫瓦**。作者将这些数字对标应用需求，从户外库存追踪的 **1.20 mW** 到边缘 AI 感知的 **4.18 mW**：落在 1.20–2.50 mW 区间的配置可支撑库存与远程监测，只有超过 4.18 mW 的配置才能覆盖全部三类应用。对非目标位置的功率**溢出**用按卫星数与平均设备功率归一化的互补累积分布函数做统计刻画——这是论文对"星地能量波束同时也是干扰与安全对象、而非仅仅一条链路"的正视。

论文还考察了另外两条轴。**星间激光 WPT**——卫星互相充电而非对地充电——以高得多的自由空间损耗换取远得多的作用距离，支持 **10³ km** 量级距离（微波为 **10² km** 量级），接收效率 **10–25%**；指向损耗研究表明每个距离都存在一个**最优发射孔径**，因为增大孔径虽收窄波束，却同时放大了指向敏感度。**超表面**——星上孔径的动态超表面天线与地面的 RIS——被提出为实现相干方案所需波束赋形与波束管理的低复杂度路径。挑战清单也很坦率：12 GHz 下跨航天器的**亚纳秒级同步**、卫星穿越地影期间的能量自给、激光安全，以及 LEO 几何快速变化下的信道获取开销。

## Key technical points (EN)
- **Premise:** satellite-enabled WPT to charge off-grid IoT devices, positioned as the energy counterpart to satellite direct-to-device connectivity.
- **Microwave WPT reality check:** 0.3–300 GHz band; ~50% end-to-end at Goldstone (km scale) but ~**1% over 10 km** in a recent demonstration; Japanese demos 50 m–5 km; rectenna efficiency up to **70%**; transmit powers watts → gigawatts.
- **Evaluation setup:** 5 single-antenna ground devices within a **2 km radius**, satellites at **500 km**, **1,000 W** transmit, **12 GHz**.
- **Coordination scaling law:** received power grows **quadratically** with satellite count under coherent coordination, **linearly** under non-coherent — the headline architectural result.
- **Delivered power:** sub-mW for a few non-coherently coordinated satellites → **tens of mW** for coherent coordination.
- **Application thresholds:** outdoor inventory **1.20 mW**, remote monitoring ~2.50 mW band, edge AI **4.18 mW**; only configurations above 4.18 mW serve all three.
- **Spillover:** statistical characterisation of power landing on undesired locations via CCDFs normalised to satellite count and average device power — treats the beam as an interference/safety object.
- **Inter-satellite laser WPT:** reach ~**10³ km** (vs ~10² km microwave) at receiver efficiency **10–25%**; an **optimal transmit aperture per distance** minimises pointing loss (aperture enlargement narrows the beam but increases pointing sensitivity).
- **Metasurfaces:** dynamic metasurface antennas (satellite aperture) + RIS (ground) proposed for lower-complexity beamforming, conversion efficiency and beam management.
- **Open challenges:** sub-nanosecond inter-satellite synchronisation at 12 GHz, autonomy through eclipse, laser safety, channel-acquisition overhead under fast LEO geometry change.

## Key technical points (ZH)
- **前提：** 用卫星为离网物联网设备无线供电，定位为卫星直连设备"连接性"的能量对偶。
- **微波 WPT 现实校准：** 0.3–300 GHz；Goldstone 在公里尺度达约 50% 端到端效率，但近期演示在 **10 km 上仅约 1%**；日本演示覆盖 50 m–5 km；整流天线效率最高 **70%**；发射功率从瓦级到吉瓦级。
- **评估设置：** **2 km 半径**内 5 个单天线地面设备，卫星高度 **500 km**，发射功率 **1,000 W**，频率 **12 GHz**。
- **协同标度律：** 相干协同下接收功率随卫星数呈**平方**增长，非相干下仅呈**线性**增长——这是核心架构结论。
- **可送达功率：** 少量卫星非相干协同为亚毫瓦级 → 相干协同可达**数十毫瓦**。
- **应用门限：** 户外库存 **1.20 mW**，远程监测约 2.50 mW 档，边缘 AI **4.18 mW**；只有超过 4.18 mW 的配置能同时服务三类应用。
- **功率溢出：** 用按卫星数与平均设备功率归一化的 CCDF 统计刻画落到非目标位置的功率——把波束当作干扰／安全对象来处理。
- **星间激光 WPT：** 作用距离约 **10³ km**（微波约 10² km），接收效率 **10–25%**；每个距离存在**最优发射孔径**以最小化指向损耗（增大孔径收窄波束但加剧指向敏感度）。
- **超表面：** 星上孔径的动态超表面天线 + 地面 RIS，作为降低波束赋形、能量转换效率与波束管理复杂度的路径。
- **待解挑战：** 12 GHz 下亚纳秒级星间同步、地影期间的能量自给、激光安全、LEO 几何快变下的信道获取开销。

## Why it matters / what's new (EN)
This is the satellite bin's **first wireless-power-transfer entry**, and it completes a pairing the bin had left one-sided. The 08-08 AoI-NTN energy-harvesting entry modelled an IoT node that spends stored energy to probe for LEO reachability and only transmits when the probe succeeds — energy as a scarce budget the node must ration. This paper asks the complementary question: what if the constellation *supplies* that budget? Read together they bracket the satellite-IoT power problem from both ends, and the numbers are close enough to be interesting — tens of milliwatts from a coherent constellation is the right order of magnitude for exactly the duty-cycled probe-and-transmit nodes the 08-08 model describes.

The **quadratic-versus-linear** scaling law is the piece worth remembering, because it makes coherent multi-satellite coordination not an optimisation but a feasibility precondition: at sub-milliwatt, non-coherent space WPT does not reach the lowest application threshold in the paper's own table, so the entire concept rests on maintaining phase coherence across spacecraft. That in turn makes the sub-nanosecond synchronisation challenge the paper lists the real gating item, and connects this work to the distributed-coherence problem the bin has seen from the communications side (multi-operator sharing 08-15, ISL scheduling). The spillover CCDF analysis is also a quietly important inclusion — a 1,000 W space-to-ground beam at 12 GHz sits in occupied Ku spectrum, and any real deployment would meet the same coexistence scrutiny the SNIFFLES emission measurements (08-18) opened up in this bin.

Novelty is 2, not 3. This is a **magazine vision article**: it reviews existing WPT limits, proposes an architecture, and evaluates it in simulation with a small, deliberately illustrative configuration (five devices, 2 km radius) — there is no hardware, no measured link, and no constellation-scale study. The comparison is between two coordination schemes rather than against a competing published system. What lifts it above a pure position paper is that the evaluation is honest about the failure mode (non-coherent does not clear the threshold) and about the externality (spillover). Watch for a follow-up with a constellation-scale coverage/duty-cycle analysis — how often a given ground device is inside a coherently-servable geometry is the number that would decide whether this is an architecture or a thought experiment.

## Why it matters / what's new (ZH)
这是卫星条目库的**第一条无线能量传输条目**，补齐了此前只有一侧的配对。08-08 的 AoI-NTN 能量收集条目建模的是：物联网节点花费储能去探测 LEO 可达性，探测成功才发射——能量是节点必须精打细算的稀缺预算。本文提出互补的问题：如果由星座来**供给**这份预算呢？两者合读，从两端夹住了卫星物联网的功率问题，而且数量级接近到值得注意——相干星座的数十毫瓦，正是 08-08 模型所描述的占空比式"探测—发射"节点所需的量级。

**平方对线性**的标度律是最值得记住的一点，因为它把相干多星协同从"优化手段"变成了"可行性前提"：在亚毫瓦水平上，非相干的空间 WPT 连论文自己表格中最低的应用门限都达不到，因此整个概念都押在跨航天器保持相位相干上。这也使论文列出的亚纳秒级同步挑战成为真正的卡点，并把该工作与本条目库从通信侧见到的分布式相干问题（08-15 多运营商共享、星间链路调度）连了起来。溢出 CCDF 分析同样是一个低调但重要的加分项——12 GHz 上 1,000 W 的星地能量波束位于已被占用的 Ku 频段，任何真实部署都会遭遇 SNIFFLES 辐射实测（08-18）在本条目库中开启的同一类共存审视。

新颖度评 2 而非 3。这是一篇**杂志愿景文章**：综述既有 WPT 极限、提出架构、并在一个刻意示意性的小配置（五设备、2 km 半径）上做仿真评估——没有硬件、没有实测链路、也没有星座尺度研究。比较对象是两种协同机制，而非已发表的竞争系统。让它高于纯立场文章的，是评估对失效模式（非相干达不到门限）与外部性（溢出）都不回避。值得关注是否会有星座尺度覆盖／占空比分析的后续——某个地面设备处于"可相干服务几何"内的时间占比，才是决定这究竟是一种架构还是一次思想实验的数字。
