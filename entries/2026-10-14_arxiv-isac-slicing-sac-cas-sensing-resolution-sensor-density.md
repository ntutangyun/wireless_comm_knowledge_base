---
id: 2026-10-14_arxiv-isac-slicing-sac-cas-sensing-resolution-sensor-density
date_published: 2026-10-02
date_found: 2026-10-14
type: academic-paper
technology: cellular
title_en: "Performance Analysis of ISAC Slicing with Sensing-Assisted Communication and Communication-Assisted Sensing"
title_zh: "含感知辅助通信与通信辅助感知的 ISAC 网络切片性能分析"
url: "https://arxiv.org/abs/2610.03879"
source_quality: full
topics: [ISAC, network-slicing, SaaS, CaaS, SAC, CAS, bistatic-sensing, SLA-satisfaction]
topic_primary: network-slicing
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)
Daniel Campos and Jacek Kibilda (Commonwealth Cyber Initiative, Virginia Tech) analyze network slicing in a 6G integrated sensing and communication (ISAC) cell where sensing and communication are provisioned as separate slices (Sensing as a Service, SaaS; Communication as a Service, CaaS). They argue that treating them as independent slices misses two interdependencies: Sensing-Assisted Communication (SAC), where position estimates from sensing improve beamforming for served UEs, and Communication-Assisted Sensing (CAS), where communication links carry sensor reports to the base station in bi- and multistatic sensing.

Model: a single urban-microcell with an ISAC base station (3 sectors, ULAs, 35 dBm spread over 16 downlink beams) in a vehicular scenario; sensors, targets and UEs are placed by homogeneous Poisson point processes; sensors act as bistatic receivers and report once per OFDM frame. Communication uses the 3GPP TR 38.901 UMi street-canyon LOS model; sensing accuracy uses the square root of the Cramer-Rao bound for range and angle error, with processing gain from OFDM sensing. The SaaS SLA is a maximum position-estimation error and the CaaS SLA is a GBR-style minimum throughput per frame. The framework allocates bandwidth (normalized sensing bandwidth, NSB, being the sensing share of downlink bandwidth), beam time slots and target-sensor assignments, and reports network-level SLA satisfaction rate (SSR). A simulation tool is released on GitHub (DanteCampos/2026-ISAC-DJ) and results average 1000 realizations.

Results: at 100% NSB no CaaS SLA is met and at 0% NSB no SaaS SLA is met. With 5 sensors/km2 the low-demand scenario (150 targets, 50 UEs per km2) peaks at 79% SSR at 27% NSB (within 2 points over NSB 10-54%), while high demand (300 targets, 150 UEs per km2) peaks at 47% at 15% NSB over a narrower 7-20% interval. Raising only UE density cuts the peak by 18 points, raising only target density by 4 points, so CaaS demand dominates. Raising sensor density to 15/km2 adds about 12 points across demand scenarios. CaaS mean throughput peaks at 152 Mbps (5% NSB) in low demand and 29 Mbps (7% NSB) in high demand; raising UE density alone reduces it by about 73%, target density alone by about 39%. For SaaS, mean position error at 100% NSB with 5 sensors/km2 is 0.81 m (high demand) and 0.62 m (low demand), versus 0.11 m and 0.08 m with 15 sensors/km2. The authors conclude performance is constrained by sensing resolution, shaped by demand (especially CaaS) and scaled by sensor deployment, and suggest allocating just enough sensing bandwidth to resolve all vehicles. Results are numerical simulation with exhaustive best sensor selection; practical assignment algorithms are left for future work.

## Summary (ZH)
Daniel Campos 与 Jacek Kibilda（弗吉尼亚理工大学 Commonwealth Cyber Initiative）分析了 6G 集成感知与通信（ISAC）小区中的网络切片，其中感知与通信作为独立切片提供（感知即服务 SaaS；通信即服务 CaaS）。他们认为把二者当作互相独立的切片会忽略两种相互依赖：感知辅助通信（SAC），即感知得到的位置估计改善对被服务终端的波束赋形；以及通信辅助感知（CAS），即在双基地和多基地感知中，通信链路把传感器报告送到基站。

模型：单个城市微小区，ISAC 基站（3 个扇区、均匀线阵、35 dBm 分配到 16 个下行波束），车辆场景；传感器、目标与终端按齐次泊松点过程分布；传感器作为双基地接收机，每个 OFDM 帧上报一次。通信采用 3GPP TR 38.901 UMi 街道峡谷 LOS 模型；感知精度采用距离与角度误差的克拉美-罗界平方根，处理增益来自 OFDM 感知。SaaS 的 SLA 为最大位置估计误差，CaaS 的 SLA 为类似 GBR 的每帧最小吞吐量。框架分配带宽（归一化感知带宽 NSB，即感知占下行带宽的份额）、波束时隙以及目标-传感器分配，并报告网络级 SLA 满足率（SSR）。仿真工具已在 GitHub（DanteCampos/2026-ISAC-DJ）发布，结果为 1000 次实现的平均。

结果：NSB 为 100% 时没有任何 CaaS SLA 得到满足，NSB 为 0% 时没有任何 SaaS SLA 得到满足。在每平方公里 5 个传感器的条件下，低需求场景（每平方公里 150 个目标、50 个终端）在 27% NSB 处达到 79% SSR 峰值（NSB 10-54% 区间内与峰值相差不超过 2 个百分点），高需求场景（300 个目标、150 个终端）在 15% NSB 处峰值为 47%，区间更窄（7-20%）。仅提高终端密度使峰值下降 18 个百分点，仅提高目标密度下降 4 个百分点，说明 CaaS 需求起主导作用。将传感器密度提高到每平方公里 15 个，在各需求场景下约提高 12 个百分点。CaaS 平均吞吐量在低需求下峰值为 152 Mbps（5% NSB），高需求下为 29 Mbps（7% NSB）；仅提高终端密度使其降低约 73%，仅提高目标密度降低约 39%。SaaS 方面，每平方公里 5 个传感器、100% NSB 时平均位置误差在高需求下为 0.81 m、低需求下为 0.62 m，而每平方公里 15 个传感器时分别为 0.11 m 与 0.08 m。作者结论是性能受感知分辨率约束、受需求（尤其是 CaaS）塑造、并随传感器部署规模提升，并建议只分配刚好足以分辨所有车辆的感知带宽。结果为数值仿真，采用穷举的最优传感器选择；实用的分配算法留待后续研究。

## Key technical points (EN)
- **Framing**: ISAC slicing as separate SaaS (max position error) and CaaS (min throughput per frame) slices coupled by SAC and CAS.
- **Model**: single UMi cell, 3-sector ISAC BS (35 dBm, 16 beams), Poisson-distributed sensors/targets/UEs, bistatic sensing, CRLB-based accuracy, TR 38.901 UMi LOS.
- **Knobs**: normalized sensing bandwidth (NSB), beam time slots, target-sensor assignment, sensor density.
- **Results**: low demand peaks at 79% SSR (27% NSB), high demand 47% (15% NSB) at 5 sensors/km2; sensor density 15/km2 adds about 12 points; CaaS peak throughput 152 Mbps (low demand) vs 29 Mbps (high demand); SaaS error 0.81 / 0.62 m (5 sensors/km2) vs 0.11 / 0.08 m (15 sensors/km2).
- **Conclusion**: performance is constrained by resolution, shaped by demand, scaled by sensor deployment.
- **Limits**: numerical simulation, exhaustive sensor assignment; code on GitHub (DanteCampos/2026-ISAC-DJ).

## Key technical points (ZH)
- **框架**：ISAC 切片被视为分离的 SaaS（最大位置误差）与 CaaS（每帧最小吞吐量）切片，并由 SAC 与 CAS 耦合。
- **模型**：单个 UMi 小区，3 扇区 ISAC 基站（35 dBm，16 波束），泊松分布的传感器/目标/终端，双基地感知，基于 CRLB 的精度，TR 38.901 UMi LOS。
- **调节量**：归一化感知带宽（NSB）、波束时隙、目标-传感器分配、传感器密度。
- **结果**：每平方公里 5 个传感器时，低需求峰值 SSR 为 79%（27% NSB），高需求为 47%（15% NSB）；传感器密度提高到每平方公里 15 个约增加 12 个百分点；CaaS 峰值吞吐量低需求 152 Mbps、高需求 29 Mbps；SaaS 误差每平方公里 5 个传感器时 0.81 / 0.62 m，15 个传感器时 0.11 / 0.08 m。
- **结论**：性能受分辨率约束、由需求塑造、随传感器部署规模提升。
- **局限**：数值仿真、穷举传感器分配；代码见 GitHub（DanteCampos/2026-ISAC-DJ）。

## Why it matters / what's new (EN)
Records a system-level look at how bandwidth split, demand and sensor density trade off in an ISAC cell served as two slices. The figures come from the authors' own Monte Carlo simulation under their stated model, and are not measurements from a deployed network.

## Why it matters / what's new (ZH)
记录了对以两个切片提供服务的 ISAC 小区中带宽划分、需求与传感器密度如何权衡的系统级分析。数据来自作者在所述模型下的蒙特卡洛仿真，并非已部署网络的实测。

## Images
None.
