---
id: 2026-10-23_arxiv-ray-traced-digital-twin-5g-nr-ul-tdoa-openairinterface
date_published: 2026-10-09
date_found: 2026-10-23
type: academic-paper
technology: cellular
title_en: "A Ray-Traced Digital Twin for 5G NR Positioning with OpenAirInterface"
title_zh: "基于 OpenAirInterface 的 5G NR 定位射线追踪数字孪生"
url: "https://arxiv.org/abs/2610.13138"
source_quality: full
topics: [5G-NR-positioning, UL-TDoA, digital-twin, Sionna-RT, OpenAirInterface, SRS, LMF, NRPPa, HDOP, distributed-antenna]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
The paper (8 pages; submitted to the 22nd Wireless On-demand Network systems and Services Conference) builds a ray-traced digital twin of EURECOM's GEO-5G outdoor testbed. Channels computed by Sionna RT over a 3D site model drive an unmodified OpenAirInterface (OAI) 5G stack, whose SRS-based uplink time-difference-of-arrival (UL-TDoA) positioning pipeline then produces position fixes. The key modelling choice is that each of the eight distributed gNB antenna elements is an independent radio device, so per-antenna absolute delays survive.

Following the paper: motivation and related work; twin architecture (reference deployment, scene and propagation, distributed-antenna channel model, OAI integration through the vrtsim virtual radio and FlatBuffers over nanomsg); UL-TDoA measurement chain and geometric conditioning (dilution of precision); experimental setup with two scenes and two bandwidths; results; and a layout-change experiment that the physical testbed cannot perform.

## Summary (ZH)
该论文（8 页；投稿至第 22 届 Wireless On-demand Network systems and Services Conference）构建了 EURECOM GEO-5G 室外测试床的射线追踪数字孪生。由 Sionna RT 在 3D 场地模型上计算的信道驱动未经修改的 OpenAirInterface（OAI）5G 协议栈，其基于 SRS 的上行到达时间差（UL-TDoA）定位流程随后给出位置解。关键建模选择是把 8 个分布式 gNB 天线单元各自建模为独立的射频设备，从而保留各天线的绝对时延。

按论文顺序：动机与相关工作；孪生架构（参考部署、场景与传播、分布式天线信道模型、通过 vrtsim 虚拟射频和 nanomsg 上的 FlatBuffers 与 OAI 集成）；UL-TDoA 测量链与几何条件（精度稀释）；含两个场景与两种带宽的实验设置；结果；以及物理测试床无法完成的布局改变实验。

## Key technical points (EN)
- Reference deployment: two O-RAN radio units, each with four spatially separated directional elements (sub-array A of 36.0 m on the south terrace, sub-array B of 15.0 m on the north rooftop, centroids 42.19 m apart), band n78 at 3.6192 GHz. Element separations run from about 60 to 217 wavelengths, so a plane-wave synthetic-array model would discard the per-element absolute delays that TDoA needs; arrival at the farthest element trails the nearest by up to 109 ns.
- Channel pipeline: Sionna RT shooting-and-bouncing plus image method (max depth 10, diffuse scattering off, fixed seed so runs are bit-identical), converted to 71 absolute-delay taps per antenna pair using the OAI front-end sample rate; delay normalisation disabled. The emulator is deterministic with zero noise, so reported errors are biases, not noise realisations.
- Two configurations: 40 MHz (106 PRBs) and 100 MHz (273 PRBs) at 30 kHz SCS, each with 16 UE positions per scene, in the EURECOM scene and in the Munich scene shipped with Sionna RT (same array geometry carried over by a distance-preserving transform).
- Results with the as-deployed two-height array (horizontal error): EURECOM median 1.20 m (40 MHz) and 0.95 m (100 MHz), with 11/16 and 12/16 fixes inside 1.5 m; Munich median 0.98 m and 0.71 m. One Munich fix at 40 MHz is off by 19.07 m, attributed by the authors to a first arrival assigned to a neighbouring tap at a poorly conditioned position. The paper compares like statistics only: the EURECOM 100 MHz 90th percentile (1.80 m) falls inside the 1-2 m 90th percentile reported for the physical deployment, while Munich (2.32 m) and the 40 MHz sweeps (up to 5.39 m) do not; the authors call the comparison indicative rather than like-for-like and warn against reading medians against it.
- Geometry explains the error: dividing horizontal error by HDOP gives an implied range-difference error of about 0.31 m (1.02 ns) in three of four sweeps, which the authors relate to the 1.017 ns UL-RTOA reporting granularity.
- Bandwidth finding: widening from 40 to 100 MHz does not improve a typical position (median paired change zero in both scenes); it shortens the error tail (EURECOM max 3.81 to 2.73 m; Munich max 19.07 to 3.70 m). RMS height error stays about 3.5-3.7 m (EURECOM) and 2.2-2.3 m (Munich) despite a 2.5x occupied-bandwidth change.
- Layout experiment: height is observable through essentially one linear combination of measurements because both antenna groups have near-identical heights within a group; a height-alternating layout is reported to cut RMS height error by a factor of four while leaving horizontal geometry unchanged.
- Stated limits: the eight emulated antennas share one clock with no per-branch delay or phase offset, so the twin is perfectly synchronised and does not reproduce the dominant error source of the physical TDoA deployment; sixteen positions per sweep; no sensitivity study over ray-tracing depth; the two bandwidth configurations differ in several parameters at once.

## Key technical points (ZH)
- 参考部署：两个 O-RAN 射频单元，各带 4 个空间分离的定向单元（子阵列 A 位于南侧平台，长 36.0 m；子阵列 B 位于北侧屋顶，长 15.0 m；两者质心相距 42.19 m），n78 频段、3.6192 GHz。单元间距约为 60 至 217 个波长，因此平面波合成阵列模型会丢弃 TDoA 所需的各单元绝对时延；到达最远单元的时间最多比最近单元晚 109 ns。
- 信道流程：Sionna RT 的射线发射-弹跳加镜像法（最大深度 10，关闭漫散射，固定种子使各次运行逐位一致），利用 OAI 前端采样率转换为每个天线对 71 个绝对时延抽头；关闭时延归一化。仿真器确定且噪声为零，因此所报误差是偏差而非噪声实现。
- 两种配置：30 kHz 子载波间隔下 40 MHz（106 PRB）和 100 MHz（273 PRB），每个场景 16 个 UE 位置，分别在 EURECOM 场景和 Sionna RT 自带的慕尼黑场景中（同一阵列几何通过保距变换迁移）。
- 按实际部署的双高度阵列所得结果（水平误差）：EURECOM 中位数 1.20 m（40 MHz）和 0.95 m（100 MHz），分别有 11/16 与 12/16 个定位解落在 1.5 m 内；慕尼黑中位数 0.98 m 与 0.71 m。慕尼黑 40 MHz 的一个定位解偏差 19.07 m，作者归因于在条件较差的位置上首达径被分配到相邻抽头。论文只比较同类统计量：EURECOM 100 MHz 的 90 百分位（1.80 m）落在物理部署报告的 1-2 m（90 百分位）范围内，而慕尼黑（2.32 m）与 40 MHz 扫描（最高 5.39 m）不在其中；作者称该比较只是指示性的、并非同条件对比，并提醒不要把中位数与之对照。
- 几何解释误差：用水平误差除以 HDOP，四组扫描中有三组得到约 0.31 m（1.02 ns）的隐含距离差误差，作者将其与 1.017 ns 的 UL-RTOA 上报粒度相联系。
- 带宽发现：从 40 MHz 增至 100 MHz 并不改善典型位置的精度（两个场景的配对变化中位数均为零），而是缩短误差尾部（EURECOM 最大值由 3.81 m 降到 2.73 m；慕尼黑由 19.07 m 降到 3.70 m）。尽管占用带宽变化 2.5 倍，高度的 RMS 误差仍约为 3.5-3.7 m（EURECOM）和 2.2-2.3 m（慕尼黑）。
- 布局实验：由于每组天线内部高度几乎相同，高度基本只通过测量量的一个线性组合可观测；采用高度交错布局据报告可使高度 RMS 误差降低为原来的四分之一，同时水平几何保持不变。
- 论文说明的局限：8 个仿真天线共用一个时钟、无各支路时延或相位偏移，孪生是完全同步的，因此不能复现物理 TDoA 部署的主要误差来源；每次扫描仅 16 个位置；未做射线追踪深度的敏感性研究；两种带宽配置同时在多个参数上不同。

## Why it matters / what's new (EN)
The paper is a simulation study of a twin; it has not been compared against measurements from the physical site (listed as future work), its comparison with the testbed's published 1-2 m 90th-percentile accuracy is described by the authors as indicative only, and it states that the twin omits the testbed's synchronisation error. Its practical contribution for the 5g-nr bin is a recipe for keeping per-antenna absolute delays when emulating distributed gNB antennas with Sionna RT and OAI, plus what-if results (bandwidth versus tail error, antenna height diversity versus vertical error) that a field campaign could not produce cheaply.

## Why it matters / what's new (ZH)
该论文是对孪生系统的仿真研究；尚未与物理站点的测量进行对比（作者列为未来工作），与测试床已发表的 1-2 m（90 百分位）精度的比较被作者称为仅具指示性，并明确说明孪生省略了测试床的同步误差。对 5G NR 主题的实际贡献在于：给出用 Sionna RT 与 OAI 仿真分布式 gNB 天线时保留各天线绝对时延的做法，以及外场测试难以低成本得到的假设性结果（带宽与误差尾部、天线高度分集与垂直误差）。

## Images

None.
