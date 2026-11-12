---
id: 2026-11-12_arxiv-starlink-pseudorange-pnt-mock-fused-leo-gnss
date_published: 2026-11-10
date_found: 2026-11-12
technology: satellite
type: academic-paper
title_en: "Toward Pseudorange-Based PNT with Starlink: A Mock Fused LEO-GNSS Implementation"
title_zh: "迈向基于伪距的 Starlink PNT：模拟融合式 LEO-GNSS 实现"
url: "https://arxiv.org/abs/2611.13655"
source_quality: full
topics: [Starlink, PNT, pseudorange, time of arrival, Ku-band, fused LEO GNSS, positioning]
topic_primary: starlink
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Morgan, Komodromos, Qin, Graff, Clements, Morrison and Humphreys (UT Austin and CesiumAstro; arXiv, 10 Nov 2026; an extension of the group's earlier conference paper) report field results for pseudorange-based positioning, navigation and timing using Starlink downlinks. They emulate a "fused" architecture in which a communications constellation also offers a secondary PNT service, arguing that stand-alone opportunistic use of Starlink falls short of GNSS-level accuracy because of irregular frame timing and poor public ephemerides.

The mock system extracts time-of-arrival (TOA) measurements from live Ku-band downlinks and pairs them with beam-specific orbit and clock models supplied as if by the operator. A control-segment station with a 90 cm dish tracks one satellite and provides demodulated payload data as pilots; a user terminal with an 80 mm feedhorn and 25 MHz of bandwidth records the same signals. In a 13-minute January 2025 recording covering six satellites, the best method reports 95% bounds of 2.33 m horizontal, 3.37 m vertical and 11.19 ns timing.

## Summary (ZH)

Morgan、Komodromos、Qin、Graff、Clements、Morrison 与 Humphreys（德克萨斯大学奥斯汀分校与 CesiumAstro；arXiv，2026 年 11 月 10 日；为该团队此前会议论文的扩展）报告了利用 Starlink 下行信号进行基于伪距的定位、导航与授时（PNT）的外场结果。他们模拟了一种"融合"架构，即通信星座同时提供次要的 PNT 服务；作者认为，由于帧时序不规则且公开星历精度较差，单独机会式使用 Starlink 难以达到 GNSS 级精度。

该模拟系统从实时 Ku 频段下行信号中提取到达时间（TOA）测量，并结合按波束的轨道与时钟模型（按运营商提供的方式给出）。控制段站点使用 90 cm 天线跟踪单颗卫星并提供解调后的载荷数据作为导频；用户终端采用 80 mm 馈源、25 MHz 带宽记录同一信号。在 2025 年 1 月一段覆盖六颗卫星的 13 分钟录制数据中，最佳方法给出的 95% 界为水平 2.33 m、垂直 3.37 m、授时 11.19 ns。

## Key technical points (EN)

- Frame structure: 750 Hz frames beginning with primary and secondary synchronization sequences (coherently integrable); up to 128 beams per roughly 20 km service cell; beam assignments held over 15 s intervals whose boundaries appear approximately aligned with GPS time (citing prior work).
- Clock model: GNSS-disciplined base clock driving separate frame, sample and carrier clocks, which the paper uses to explain code-carrier divergence.
- Data aiding: four pilot-allocation strategies compared (PSS+SSS only with no capacity loss; optimal pilots with 1.17% capacity loss; worst-case allocation with 1.17% loss; full 25 MHz band with 10.35% loss).
- Estimation: weighted nonlinear batch least squares over a position plus clock-trajectory state; public space-track ephemerides (roughly 10 m accuracy).
- Results (95%): super-resolution TOA 2.33 m horizontal / 3.37 m vertical / 11.19 ns; nearest-sample 2.47 / 3.62 / 11.86; optimal-pilots 3.03 / 4.35 / 14.45.
- Stated limits: six satellites over 13 minutes, static user, stable OCXO clock, demodulated payload data supplied as pilots, single RF chain.
- Authors state a real service would need operator-side ephemeris monitoring to a few metres and satellite clocks to about 10 ns.

## Key technical points (ZH)

- 帧结构：750 Hz 帧，以主、辅同步序列开头（可相干积分）；每个约 20 km 的服务小区最多 128 个波束；波束分配保持 15 s 间隔，其边界似与 GPS 时间大致对齐（引自已有工作）。
- 时钟模型：由 GNSS 驯服的基准时钟驱动独立的帧、采样与载波时钟，论文以此解释码-载波发散。
- 数据辅助：比较四种导频分配策略（仅 PSS+SSS，无容量损失；最优导频，容量损失 1.17%；最坏情况分配，损失 1.17%；整个 25 MHz 频带，损失 10.35%）。
- 估计：对位置与时钟轨迹状态进行加权非线性批处理最小二乘；使用公开 space-track 星历（精度约 10 m）。
- 结果（95%）：超分辨率 TOA 为水平 2.33 m / 垂直 3.37 m / 11.19 ns；最近采样 2.47 / 3.62 / 11.86；最优导频 3.03 / 4.35 / 14.45。
- 论文自述局限：13 分钟内仅六颗卫星、静止用户、稳定 OCXO 时钟、以解调载荷数据代替导频、单射频链。
- 作者指出，真实服务需运营商将星历监测到数米量级、卫星时钟到约 10 ns。

## Why it matters / what's new (EN)

Existing KB entries cover LEO Doppler positioning, SSB-based LEO positioning bounds and a fused beam-scheduling design; this paper adds measured pseudorange results from live Starlink Ku-band downlinks with an explicit pilot-cost trade-off. The setup is an emulation with operator-side data supplied by the experimenters, not an operator-provided service.

## Why it matters / what's new (ZH)

KB 现有条目涉及 LEO 多普勒定位、基于 SSB 的 LEO 定位界以及融合波束调度设计；本文补充了来自实时 Starlink Ku 频段下行信号的伪距实测结果，并给出明确的导频开销权衡。该实验为模拟设置，运营商侧数据由实验者提供，并非运营商实际提供的服务。

## Images

None.
