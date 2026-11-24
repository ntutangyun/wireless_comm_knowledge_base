---
id: 2026-11-24_arxiv-environment-aware-6g-network-planning-any-to-any-channel-knowledge-map
date_published: 2026-11-18
date_found: 2026-11-24
type: academic-paper
technology: cellular
title_en: "Towards Environment-Aware 6G Network Planning: An Any-to-Any Channel Knowledge Map Approach"
title_zh: "迈向环境感知的 6G 网络规划：任意到任意信道知识地图方法"
url: "https://arxiv.org/abs/2611.23724"
source_quality: full
topics: [channel-knowledge-map, network-planning, IRS-deployment, base-station-reconfiguration, ray-tracing, coverage-optimization, live-network-trial, SS-RSRP]
topic_primary: 6g-vision
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

Chen, Li, Guo, Lai, Li, Shen, Zhu, Xu, Zhang and Luo propose a network-planning framework built on any-to-any (X2X) channel knowledge maps (CKMs), which describe channels between arbitrary transmitter-receiver location pairs. The framework has three stages: constructing CKMs from environment information, sparse measurements or both; using them to predict coverage and optimize node deployment and configuration; and calibrating and refining with field measurements. The article gives simulation case studies of indoor IRS deployment and outdoor base-station (BS) deployment, plus two live-network trials.

## Summary (ZH)

Chen、Li、Guo、Lai、Li、Shen、Zhu、Xu、Zhang 与 Luo 提出一个基于任意到任意（X2X）信道知识地图（CKM）的网络规划框架，该地图描述任意收发位置对之间的信道。框架分三个阶段：由环境信息、稀疏测量或两者共同构建 CKM；利用 CKM 预测覆盖并优化节点部署与配置；再用现场测量进行校准与细化。文章给出室内 IRS 部署和室外基站（BS）部署的仿真案例，以及两项现网试验。

## Key technical points (EN)

- Stage 1 (CKM construction): map type and spatial resolution are chosen per planning task. Construction methods named in the article include ray tracing, signal processing and wireless radiance fields; environment information may include scene geometry and material properties, and the article discusses implementation tradeoffs across stages.
- Stage 2 (deployment and configuration): the maps are used to predict coverage and optimize node placement and configuration under service requirements and practical constraints such as permitted mounting regions.
- Simulation, indoor IRS: a real office at CUHK-Shenzhen with a single-antenna BS at 10 dBm and a 16x16-element IRS with four-level phase control; 16 candidate sites on the permitted wall and 97 service-region grids (0.6 m side). Average received power over the region rises from -90.85 dBm without an IRS to -72.03 dBm with the selected deployment, versus an average of -74.42 dBm across the 16 candidate-site deployments.
- Simulation, outdoor BSs: three single-antenna 10 dBm BSs on the campus, 98 feasible sites, 2,741 grids (5 m side), coverage defined as SINR of at least 5 dB. Greedy selection followed by local refinement gives 88.1% coverage, versus 81.2% for greedy alone and an average 55.9% for random three-site choices from the same 98 candidates.
- Live trial, indoor IRS (3.5 GHz picocell, adjacent stairwell, 21 grids of 1.2 m, smartphone-measured received power): relative to no IRS, empirical deployment improved average and minimum received power in weak-coverage regions by 1.31 dB and 1.95 dB, and CKM-enabled deployment by 3.25 dB and 4.07 dB (additional 1.94 dB and 2.12 dB over the empirical scheme). IRS reflections were configured with received-power-feedback blind beamforming.
- Live trial, outdoor BS reconfiguration (SS-RSRP, existing BS with fixed site, hardware and mechanical orientation; adjustable coverage mode, electronic azimuth/tilt and SSB power bias): an initial CKM from Sionna RT was calibrated with measurements under the original configuration by an additive spatial residual correction. Over 48 common 5 m grids, CKM-enabled reconfiguration improved mean received power by 5.71 dB over the original setting and 3.22 dB over a geometry-based setting; P10 gains were 5.64 dB and 2.57 dB.
- Stage 3 (field calibration): measurements are used to check prediction accuracy and deployment performance and to feed corrections back into the CKM and the deployment.

## Key technical points (ZH)

- 第一阶段（CKM 构建）：根据规划任务选择地图类型和空间分辨率。文章提到的构建方法包括射线追踪、信号处理和无线辐射场；环境信息可包括场景几何和材料属性，文章还讨论了各阶段实现上的权衡。
- 第二阶段（部署与配置）：利用地图预测覆盖，并在业务要求和实际约束（如允许的安装区域）下优化节点位置与配置。
- 仿真，室内 IRS：位于 CUHK-Shenzhen 的真实办公室，单天线 BS 发射功率 10 dBm，IRS 为 16x16 阵元、四级相位控制；允许墙面上有 16 个候选站点，服务区划分为 97 个网格（边长 0.6 m）。区域平均接收功率从无 IRS 时的 -90.85 dBm 提升至所选部署的 -72.03 dBm，16 个候选站点部署的平均值为 -74.42 dBm。
- 仿真，室外 BS：校园内三个 10 dBm 单天线 BS，98 个可行站点，2,741 个网格（边长 5 m），覆盖定义为 SINR 不低于 5 dB。贪心选择加局部细化的覆盖率为 88.1%，仅贪心为 81.2%，从同样 98 个候选中随机选三个站点的平均覆盖率为 55.9%。
- 现网试验，室内 IRS（3.5 GHz 微微小区，相邻楼梯间，21 个 1.2 m 网格，用智能手机测量接收功率）：相对于无 IRS，经验式部署使弱覆盖区域的平均和最小接收功率分别提升 1.31 dB 和 1.95 dB，而 CKM 部署分别提升 3.25 dB 和 4.07 dB（比经验式方案多 1.94 dB 和 2.12 dB）。IRS 反射采用基于接收功率反馈的盲波束成形配置。
- 现网试验，室外 BS 重配置（SS-RSRP，既有 BS，站点、硬件和机械朝向固定；可调覆盖模式、电子方位角/下倾角和 SSB 功率偏置）：用 Sionna RT 构建初始 CKM，再以原配置下的测量通过加性空间残差修正加以校准。在 48 个共同的 5 m 网格上，CKM 重配置使平均接收功率比原设置提高 5.71 dB，比基于几何的设置提高 3.22 dB；P10 增益分别为 5.64 dB 和 2.57 dB。
- 第三阶段（现场校准）：用测量检验预测精度和部署性能，并把修正反馈到 CKM 与部署中。

## Why it matters / what's new (EN)

The distinguishing element is pairing a three-stage CKM planning workflow with measured live-network results for both IRS placement and BS parameter reconfiguration, where measurements under the original configuration calibrate the map. Each trial covers one site with a small grid (21 and 48 measurement grids), so the dB gains describe those scenes only.

## Why it matters / what's new (ZH)

其区别点在于把三阶段的 CKM 规划流程与 IRS 选址和 BS 参数重配置两类现网实测结果结合起来，并用原始配置下的测量对地图进行校准。每项试验只涉及一个站点和较少的测量网格（21 个和 48 个），因此这些 dB 增益只描述这些场景。

## Images

None.
