---
id: 2026-09-10_arxiv-sdn-5g-satcom-maritime-carrier-strike-group
date_published: 2026-09-04
date_found: 2026-09-10
type: academic-paper
technology: cellular
title_en: "SDN-Orchestrated Dual-Path 5G/SATCOM Maritime Communications for Carrier Strike Groups"
title_zh: "面向航母打击群的 SDN 编排双路径 5G/SATCOM 海上通信"
url: "https://arxiv.org/abs/2609.05729"
source_quality: full
topics: [SDN, SDR, dual-path-failover, AMC, Rician-fading, Gilbert-Elliott, rain-attenuation, GEO-satellite, maritime, MILCOM]
topic_primary: ntn
topics_secondary: [network-slicing]
novelty_score: 3
---

## Summary (EN)
Avinash Srinivasan, Dalibor Spanjevic, Kevin H. Nguyen, Bannon Ireton, and Christopher B. Landis (arXiv v1, 4 Sep 2026; Cyber Science Department, US Naval Academy, with co-authors from the Carey Business School, Johns Hopkins University, and the US Navy; accepted for the 2026 IEEE Military Communications Conference, MILCOM 2026 — the paper carries a disclaimer that its views are not official US Navy or DoD policy, and it abstracts away from any specific country's carrier strike group) present an integrated Software-Defined Networking / Software-Defined Radio (SDN/SDR) framework that unifies a 5G link and a satellite communications (SATCOM) link under one control plane for a naval Carrier Strike Group (CSG), automatically failing traffic over between the two paths rather than relying on statically configured, hardware-centric routing. The motivating problem is that a CSG's communications must survive distance-dependent degradation, rain fade, fading, and intermittent outages, and that existing naval networks neither prioritize tactical traffic over administrative traffic intelligently nor fail over automatically when the preferred path degrades.

The simulated topology places a 5G gNodeB and a centralized SDN controller on the aircraft carrier, five escort ships at baseline separations of about 20 km (ranging 1.1-44 km), a geostationary (GEO) satellite relay for ship-to-shore traffic, and a shore command node. The SDN controller classifies and routes per packet: small tactical packets (256 bytes, 100 ms deadline) prefer the lowest-latency 5G path when the destination is in range, the link is in a good state, and SINR supports at least the minimum modulation; larger administrative packets (4 kB) prefer satellite unless the rain-fade margin is exceeded; on a primary-path failure the controller reroutes automatically with a configurable processing delay, and AES-256-GCM encryption is applied to tactical traffic that crosses SATCOM. The 5G link is modeled with Rician fading and Adaptive Modulation and Coding (AMC) across three range-dependent bands (high-band <=1.6 km, mid-band 1.6-20 km, low-band 20-55 km, from BPSK at 2 dB SINR up to 256-QAM at 22 dB); the Ku-band SATCOM link uses the ITU-R P.618/P.838 rain-attenuation model driven by one year (May 2025-April 2026) of real 15-minute-interval regional rain-rate observations at a fixed 45-degree elevation to the GEO relay; both links additionally carry a two-state Gilbert-Elliott availability model.

Evaluated over 60 independent trials of 50,000 packets each (using common random numbers so all three routing modes see identical conditions within a trial, with paired t-tests at 95% confidence), the SDN dual-path mode reaches 93.09% packet delivery reliability at the Norfolk, VA baseline region, versus 36.22% for a 5G-only static baseline and 89.87% for a SATCOM-only static baseline — a +56.87 percentage-point gain over 5G-only (95% CI [56.79, 56.95]) and a +3.22 point gain over SATCOM-only (95% CI [3.12, 3.31]). The gain holds across three additional regions with different rain climatology (Norwegian Sea, Philippine Sea, North Pacific storm track: 88.4-91.3% SDN reliability, tracking each region's peak rain rate more than its latitude) and is largely insensitive to Rician K-factor (reliability varies less than 0.5 percentage points across K = 0-16). An AMC ablation shows the trade-off underlying the tactical path: without AMC (fixed high modulation), the 5G tactical deadline-miss rate is 100%; with AMC it drops to about 74% (still limited chiefly by the GEO relay's propagation delay exceeding the 100 ms tactical deadline when satellite is used), while AMC also reduces mean 5G throughput on successful packets from about 112 Mbps (fixed modulation) to about 49 Mbps.

## Summary (ZH)
Avinash Srinivasan、Dalibor Spanjevic、Kevin H. Nguyen、Bannon Ireton 与 Christopher B. Landis（arXiv v1，2026 年 9 月 4 日；已被 2026 年 IEEE 军事通信会议 MILCOM 2026 接收）提出一个集成的软件定义网络/软件定义无线电（SDN/SDR）框架，将航母打击群（CSG）的 5G 链路与卫星通信（SATCOM）链路统一到同一控制平面之下，在两条路径之间实现自动故障转移，而非依赖静态配置的、以硬件为中心的路由方式。研究动机在于：CSG 的通信必须在距离相关的信号劣化、降雨衰落、多径衰落及间歇性中断等条件下保持可用，而现有海军网络既无法智能地优先处理战术流量而非行政流量，也无法在首选路径劣化时自动完成故障转移。

论文中模拟的拓扑结构为：航母搭载一个 5G gNodeB 与一个集中式 SDN 控制器，五艘护航舰艇以约 20 公里的基线间距分布（范围 1.1-44 公里），一颗地球静止轨道（GEO）卫星中继负责舰艇到岸的通信，以及一个岸基指挥节点。SDN 控制器对每个数据包进行分类与路由：小型战术数据包（256 字节，100 毫秒时限）在目的地在覆盖范围内、链路处于良好状态且信噪比满足最低调制方式要求时，优先选择时延最低的 5G 路径；较大的行政数据包（4 KB）则优先选择卫星路径，除非超出降雨衰落余量；一旦主路径失效，控制器将以可配置的处理时延自动重新路由，且跨越 SATCOM 传输的战术流量采用 AES-256-GCM 加密。5G 链路采用莱斯衰落与自适应调制编码（AMC）建模，划分为三个与距离相关的频段（高频段 ≤1.6 公里、中频段 1.6-20 公里、低频段 20-55 公里，调制方式从 2 dB 信噪比下的 BPSK 到 22 dB 信噪比下的 256-QAM）；Ku 频段 SATCOM 链路采用 ITU-R P.618/P.838 降雨衰减模型，并以 2025 年 5 月至 2026 年 4 月一整年、以 15 分钟为间隔的真实区域降雨率观测数据驱动，仰角固定为 45 度指向 GEO 中继；两条链路还叠加了双状态 Gilbert-Elliott 可用性模型。

在 60 次独立试验（每次 50,000 个数据包，使用公共随机数以确保三种路由模式在同一试验内面对相同条件，并采用 95% 置信度的配对 t 检验）中，SDN 双路径模式在弗吉尼亚州诺福克基准区域实现了 93.09% 的数据包送达可靠性，而静态 5G-only 基线仅为 36.22%，静态 SATCOM-only 基线为 89.87%——相对 5G-only 提升 56.87 个百分点（95% 置信区间 [56.79, 56.95]），相对 SATCOM-only 提升 3.22 个百分点（95% 置信区间 [3.12, 3.31]）。该增益在另外三个降雨气候不同的区域（挪威海、菲律宾海、北太平洋风暴路径：SDN 可靠性 88.4%-91.3%，与各区域峰值降雨率的相关性强于与纬度的相关性）同样成立，且对莱斯 K 因子的敏感性很低（K 值在 0-16 范围内变化时，可靠性差异不超过 0.5 个百分点）。一项 AMC 消融实验揭示了战术路径背后的权衡：若不使用 AMC（固定高阶调制），5G 战术时限错失率为 100%；启用 AMC 后降至约 74%（此时主要受限于 GEO 中继的传播时延超过 100 毫秒战术时限这一因素，当使用卫星路径时尤为明显），同时 AMC 也使成功送达数据包的 5G 平均吞吐量从固定调制下的约 112 Mbps 降至约 49 Mbps。

## Key technical points (EN)
- SDN controller on the carrier performs per-packet classification (tactical 256B/100ms-deadline vs. administrative 4kB) and routes between a 5G path and a GEO-relay SATCOM path with automatic failover; AES-256-GCM applied to tactical traffic crossing SATCOM.
- 5G link: Rician fading + AMC across 3 range bands (high <=1.6km, mid 1.6-20km, low 20-55km; BPSK@2dB to 256-QAM@22dB). SATCOM link: Ku-band, ITU-R P.618/P.838 rain model driven by a real one-year (May 2025-Apr 2026) 15-minute regional rain-rate dataset at 45-degree elevation to a GEO relay. Both links also carry a 2-state Gilbert-Elliott availability model.
- Evaluation: 60 independent trials x 50,000 packets, common random numbers across routing modes, paired t-tests at 95% CI.
- Norfolk baseline: SDN dual-path 93.09% reliability vs. 36.22% (5G-only) and 89.87% (SATCOM-only) — +56.87pp over 5G-only (CI [56.79,56.95]), +3.22pp over SATCOM-only (CI [3.12,3.31]).
- Holds across 4 geographic regions (Norfolk, Norwegian Sea, Philippine Sea, North Pacific storm track: 88.4-91.3% SDN reliability), tracking peak rain rate more than latitude; reliability varies <0.5pp across Rician K-factor 0-16.
- AMC ablation: without AMC, 5G tactical deadline-miss rate = 100%; with AMC, ~74% (residual misses driven mainly by GEO propagation delay exceeding the 100ms tactical deadline); AMC also cuts mean 5G throughput on successful packets from ~112 Mbps (fixed modulation) to ~49 Mbps.
- SDN advantage is largest in the joint low-Rician-K / high-Gilbert-Elliott-bad-probability stress region; 5G path utilization falls from ~35% at 0.5x baseline ship spacing to <10% at 3x spacing as ships disperse beyond band range.

## Key technical points (ZH)
- 航母上的 SDN 控制器对每个数据包进行分类（战术类 256 字节/100 毫秒时限 vs. 行政类 4 KB），并在 5G 路径与经 GEO 中继的 SATCOM 路径之间自动路由与故障转移；跨 SATCOM 传输的战术流量采用 AES-256-GCM 加密。
- 5G 链路：莱斯衰落 + AMC，划分为三个距离频段（高频段 ≤1.6 公里、中频段 1.6-20 公里、低频段 20-55 公里；调制方式从 2 dB 信噪比的 BPSK 到 22 dB 信噪比的 256-QAM）。SATCOM 链路：Ku 频段，采用 ITU-R P.618/P.838 降雨模型，由 2025 年 5 月至 2026 年 4 月一整年、15 分钟间隔的真实区域降雨率数据驱动，仰角 45 度指向 GEO 中继。两条链路均叠加双状态 Gilbert-Elliott 可用性模型。
- 评估方法：60 次独立试验，每次 50,000 个数据包，各路由模式采用公共随机数以保证条件一致，并进行 95% 置信度的配对 t 检验。
- 诺福克基准区域：SDN 双路径可靠性 93.09%，高于静态 5G-only 的 36.22% 与静态 SATCOM-only 的 89.87%——相对 5G-only 提升 56.87 个百分点（置信区间 [56.79, 56.95]），相对 SATCOM-only 提升 3.22 个百分点（置信区间 [3.12, 3.31]）。
- 该优势在另外三个地理区域（挪威海、菲律宾海、北太平洋风暴路径，SDN 可靠性 88.4%-91.3%）同样成立，且与各区域峰值降雨率的相关性强于与纬度的相关性；莱斯 K 因子在 0-16 范围内变化时，可靠性差异小于 0.5 个百分点。
- AMC 消融实验：不使用 AMC 时，5G 战术时限错失率为 100%；启用 AMC 后降至约 74%（剩余错失主要由 GEO 传播时延超过 100 毫秒战术时限导致）；AMC 同时使成功送达数据包的 5G 平均吞吐量从固定调制下的约 112 Mbps 降至约 49 Mbps。
- SDN 的优势在莱斯 K 因子低、Gilbert-Elliott 故障概率高的联合压力场景中最为显著；随着舰艇间距从基线的 0.5 倍扩大到 3 倍并超出频段覆盖范围，5G 路径的使用率从约 35% 降至不足 10%。

## Why it matters / what's new (EN)
The KB's NTN bin has so far focused on 3GPP-defined non-terrestrial-network integration (direct-to-device, NTN federation architectures) and satellite-side coverage measurement. This entry is different in kind: it is a military dual-path failover architecture that treats a commercial-style 5G link and a classical GEO SATCOM link as two independently modeled, SDN-orchestrated paths rather than an integrated 3GPP NTN waveform, evaluated with a full statistical protocol (60 trials, paired t-tests, real one-year regional rain data) across four geographically distinct operating regions — the first entry in the bin addressing operational-resilience orchestration between terrestrial cellular and satellite links rather than either technology alone.

## Why it matters / what's new (ZH)
知识库 NTN 栏目此前主要聚焦于 3GPP 定义的非地面网络集成（直连设备、NTN 联邦架构）以及卫星侧的覆盖测量。本条目性质不同：它是一种军用双路径故障转移架构，将商用式 5G 链路与经典 GEO SATCOM 链路作为两条独立建模、由 SDN 编排的路径处理，而非一体化的 3GPP NTN 波形，并采用完整的统计评估方法（60 次试验、配对 t 检验、真实的一整年区域降雨数据）在四个地理条件迥异的作战区域进行了验证——是该栏目中首个聚焦于地面蜂窝链路与卫星链路之间"运行韧性编排"、而非单一技术本身的条目。

## Images
![Packet delivery reliability comparison across SDN dual-path, 5G-only, and SATCOM-only routing modes at the Norfolk baseline region | 诺福克基准区域内 SDN 双路径、5G-only 与 SATCOM-only 三种路由模式的数据包送达可靠性对比](https://arxiv.org/html/2609.05729v1/Fig1_Reliability.png)
