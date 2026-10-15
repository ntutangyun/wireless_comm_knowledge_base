---
id: 2026-10-15_arxiv-nas-timers-ntn-standards-directions
date_published: 2026-10-10
date_found: 2026-10-15
type: academic-paper
technology: cellular
title_en: "NAS Timers for Non-Terrestrial Networks: Current Standards and Directions"
title_zh: "面向非地面网络的 NAS 定时器：现行标准与发展方向"
url: "https://arxiv.org/abs/2610.15211"
source_quality: full
topics: [NTN, NAS, TS-24.501, T3510, T3550, T3560, LEO, registration, 5GMM, 5GSM]
topic_primary: ntn
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
Cheng Liu and Peng Hu (University of Manitoba) review how 5G Non-Access Stratum (NAS) response-supervision timers behave over satellite access. The article is organised as: the 3GPP timer framework (Section II), the limits of selecting a timer value by satellite NG-RAN RAT type (Section III), directions for finer-grained timer configuration (Section IV), and a registration case study (Section V).

On the standards side, the paper reports that TS 24.501 introduced satellite-specific timer values and selection by satellite NG-RAN RAT type in Rel-17, with corrections and clarifications in Rel-18 and Rel-19. The extended values apply to NR(MEO) and NR(GEO), while NR(LEO) keeps the normal 5GS values; for registration, T3510 is 15 s normally and 27 s with the extension, and T3550 and T3560 are 6 s and 11 s. The selected value is fixed when the procedure starts and is not recalculated until the procedure completes, restarts or aborts. A change request (CR 7143 rev. 1) proposed updating running NAS timers during inter-orbit mobility; it was postponed at CT1#160 and did not change the normative baseline.

The paper argues that within one LEO network, UEs can see different control-path delays (inter-satellite link hops, gateway attachment, terrestrial transport, queueing and core-function processing), yet NR(LEO) instances of the same timer share one value. It organises candidate refinements along two separate dimensions: configuration granularity (RAT type, groups of procedures sharing observable conditions, or a value per UE) and information scope (owner-local selection versus selection assisted by another entity). Any refinement must respect the TS 24.501 timer lifecycle, so the information must reach the timer owner before the procedure starts.

The case study simulates a terrestrial AMF behind one gateway and a 14-satellite relay chain at 550 km, with registration bursts of 3,000, 4,000 and 5,000 UEs. It compares the NR(LEO) baseline (T3510 = 15 s, T3550 = T3560 = 6 s), an AstroTimer-based common value per timer and load, and a per-UE location-aware (LA) method.

## Summary (ZH)
Cheng Liu 与 Peng Hu（曼尼托巴大学）回顾了 5G 非接入层（NAS）响应监督定时器在卫星接入下的行为。文章结构为：3GPP 定时器框架（第二节）、按卫星 NG-RAN RAT 类型选择定时器取值的局限（第三节）、更细粒度定时器配置的方向（第四节）以及注册流程案例研究（第五节）。

标准方面，论文指出 TS 24.501 在 Rel-17 引入了卫星专用定时器取值及按卫星 NG-RAN RAT 类型选择的规则，并在 Rel-18 和 Rel-19 中作了修正与澄清。扩展取值适用于 NR(MEO) 和 NR(GEO)，NR(LEO) 仍使用正常的 5GS 取值；就注册流程而言，T3510 正常为 15 s、启用扩展为 27 s，T3550 和 T3560 分别为 6 s 和 11 s。所选取值在流程开始时确定，直到流程完成、重启或中止才会重新计算。一份变更请求（CR 7143 rev. 1）曾提议在跨轨道移动期间更新运行中的 NAS 定时器，但在 CT1#160 上被推迟，未改变规范基线。

论文认为，同一 LEO 网络内的 UE 可能面对不同的控制路径时延（星间链路跳数、关口站接入、地面传输、排队以及核心网功能处理），而同一定时器的 NR(LEO) 实例共用一个取值。论文把候选改进沿两个相互独立的维度组织：配置粒度（按 RAT 类型、按共享可观测条件的流程分组、或按 UE 取值）和信息范围（定时器所有者本地选择，或由其他实体协助选择）。任何改进都须遵守 TS 24.501 的定时器生命周期，因此信息必须在流程开始前到达定时器所有者。

案例研究仿真了经单一关口站连接的地面 AMF 和 550 km 高度的 14 颗卫星中继链，注册突发规模为 3,000、4,000 和 5,000 个 UE。对比对象为 NR(LEO) 基线（T3510 = 15 s，T3550 = T3560 = 6 s）、基于 AstroTimer 的按定时器与负载取公共值的配置，以及按 UE 的位置感知（LA）方法。

## Key technical points (EN)
- Timer ownership matters: 5GMM timers are held by the UE or AMF, 5GSM timers by the UE or SMF. T3510 spans REGISTRATION REQUEST to REGISTRATION ACCEPT (including authentication and security mode exchanges), the T3560 intervals supervise those exchanges separately on the AMF side, and T3550 covers only REGISTRATION ACCEPT to REGISTRATION COMPLETE.
- Rel-19 made explicit that the satellite-specific timer extensions do not apply to NR(LEO).
- Without message loss, the NR(LEO) baseline registers every UE at 3,000 UEs but with a 41.27% T3510 expiry rate; at 4,000 and 5,000 UEs the expiry rate rises to 83.35% and 99.83% and registration success falls to 60.78% and 0.82%.
- AstroTimer registers every UE at all three loads with T3510 expiry rates of 22.12 to 23.29%; LA records no expiry and completes every registration in one attempt.
- LA reduces mean registration time relative to AstroTimer by 20.2 to 21.0% overall, and by 39.6 to 41.6% on eight-hop paths.
- Under message loss (3,000 UEs, 0 to 50% configured loss), the baseline registers more UEs than AstroTimer or LA from 20% onward; at 50% success rates are 40.30%, 29.30% and 29.07% (baseline, AstroTimer, LA). Mean failure-detection time is about 115 s for the baseline and about 118 s for AstroTimer.
- Group-level and per-UE values both need calibration against premature-expiry risk and against recovery delay after loss.

## Key technical points (ZH)
- 定时器归属很重要：5GMM 定时器由 UE 或 AMF 持有，5GSM 定时器由 UE 或 SMF 持有。T3510 覆盖从 REGISTRATION REQUEST 到 REGISTRATION ACCEPT（含鉴权与安全模式交互），T3560 的多个区间在 AMF 侧分别监督这些交互，T3550 仅覆盖从 REGISTRATION ACCEPT 到 REGISTRATION COMPLETE。
- Rel-19 明确了卫星专用定时器扩展不适用于 NR(LEO)。
- 无消息丢失时，NR(LEO) 基线在 3,000 个 UE 下全部注册成功，但 T3510 超时率为 41.27%；4,000 与 5,000 个 UE 时超时率升至 83.35% 和 99.83%，注册成功率降至 60.78% 和 0.82%。
- AstroTimer 在三种负载下均使全部 UE 注册成功，T3510 超时率为 22.12% 至 23.29%；LA 无超时，且全部注册一次完成。
- 与 AstroTimer 相比，LA 使平均注册时间总体缩短 20.2% 至 21.0%，八跳路径上缩短 39.6% 至 41.6%。
- 存在消息丢失时（3,000 个 UE，配置丢包 0 至 50%），自 20% 起基线注册的 UE 多于 AstroTimer 和 LA；50% 时成功率分别为 40.30%、29.30% 和 29.07%（基线、AstroTimer、LA）。失败检测的平均时间基线约为 115 s，AstroTimer 约为 118 s。
- 分组取值与按 UE 取值都需要针对过早超时风险和丢包后的恢复时延进行校准。

## Why it matters / what's new (EN)
The KB's earlier NAS-timer entry (2026-07-28_arxiv-location-aware-nas-timers-ntn) covers a per-UE location-aware timer method; this article steps back to the TS 24.501 baseline and lays out the design space (granularity versus information scope) together with a registration case study that includes message loss. The case study shows a trade-off rather than a one-sided gain: per-UE values avoid long-path expiries, while the baseline's shorter timers recover earlier under heavy loss. Results come from simulation with specified assumptions, not from a deployed system.

## Why it matters / what's new (ZH)
知识库此前的 NAS 定时器条目（2026-07-28_arxiv-location-aware-nas-timers-ntn）讨论的是按 UE 的位置感知定时器方法；本文则回到 TS 24.501 基线，梳理设计空间（粒度与信息范围），并给出包含消息丢失情形的注册案例研究。案例研究显示的是权衡而非单向收益：按 UE 取值避免了长路径超时，而基线较短的定时器在严重丢包下恢复更早。结果来自带明确假设的仿真，而非实际部署系统。
