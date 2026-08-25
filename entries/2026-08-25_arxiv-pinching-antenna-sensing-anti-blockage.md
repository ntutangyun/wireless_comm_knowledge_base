---
id: 2026-08-25_arxiv-pinching-antenna-sensing-anti-blockage
date_published: 2026-08-22
date_found: 2026-08-25
type: academic-paper
technology: cellular
title_en: "Sensing-Assisted Anti-Blockage Pinching-Antenna Systems for Indoor Immersive Communications"
title_zh: "面向室内沉浸式通信的感知辅助抗遮挡夹持天线系统"
url: "https://arxiv.org/abs/2608.21859"
source_quality: full
topics: [pinching-antenna, PASS, mmWave, blockage, FMCW-radar, ISAC, indoor-XR, waveguide, 28GHz, beam-management]
topic_primary: 6g-vision
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
Yi Hong, Yalin Liu, Yulei Wang and Yaru Fu (Hong Kong Metropolitan University + South-Central Minzu University, Wuhan) present the first sensing-assisted anti-blockage design for pinching-antenna systems (PASS) — the emerging 6G radio-access concept in which a low-cost radiating point is mechanically "pinched" onto a ceiling-mounted dielectric waveguide and can slide along it. Prior PASS work optimizes antenna placement against stochastic blockage models; this paper instead has the pinching antenna characterize real obstacles in real time: an FMCW radar transceiver rides with the antenna, which performs controlled micro-movements along the waveguide during a sensing phase, forming a synthetic linear array from M collected chirps, then serves the user over a stable LoS link in the communication phase (a sensing-movement-communication frame with duty cycle η).

The sensing chain runs FFT to a delay-DOA feature matrix, median-based amplitude thresholding, beat-frequency ranging, user localization with elevation compensation, and obstacle-coordinate calibration. From the estimated obstacle position the system computes a physical blockage zone on the waveguide (the geometric shadow), dilates it into a robust blockage zone with a safety margin covering sensing uncertainty, latency and obstacle velocity, and restricts the antenna to the complementary safe zone — operating in safety mode (optimal position already safe) or escaping mode (boundary repositioning / zone crossing). A closed-form solution sets scanning velocity to the motor maximum and minimizes η subject to angular-resolution and QoS constraints. At 28 GHz / 400 MHz bandwidth in a 10x10x3 m room with a walking pedestrian (500 Mbps QoS), the design holds blockage-induced outage to 0.9% across user positions versus 29.5-64.1% for fixed/conventional baselines, sustaining 2,850-3,000 Mbps; sensitivity analysis shows v_p^max >= 6 m/s and a 15-25 degree angular-resolution requirement are needed (a 30-degree / 12 m/s corner degrades sensing and pushes outage to 5.6%).

## Summary (ZH)
香港都会大学与中南民族大学（武汉）的 Yi Hong、Yalin Liu、Yulei Wang、Yaru Fu 提出了首个面向夹持天线系统（PASS）的感知辅助抗遮挡设计。PASS 是新兴的 6G 无线接入概念：低成本辐射点被机械"夹持"在天花板介质波导上并可沿波导滑动。以往 PASS 工作基于随机遮挡模型优化天线位置；本文则让夹持天线实时刻画真实障碍物：FMCW 雷达收发器随天线移动，在感知阶段沿波导做受控微移动、由 M 个 chirp 构成合成线性阵列，在通信阶段以稳定 LoS 链路服务用户（感知-移动-通信帧结构，占空比 η）。

感知链路依次执行 FFT 得到时延-DOA 特征矩阵、基于中值的幅度门限、差拍频率测距、带仰角补偿的用户定位以及障碍物坐标校准。系统据此在波导上计算物理遮挡区（几何阴影），再按感知不确定性、时延与障碍物速度膨胀为鲁棒遮挡区，将天线限制在其补集安全区内——分为安全模式（最优位置本就安全）与逃逸模式（边界重定位/跨区）。闭式解将扫描速度设为电机上限，并在角分辨率与 QoS 约束下最小化 η。在 28 GHz / 400 MHz 带宽、10x10x3 m 房间、行走行人场景（500 Mbps QoS）下，遮挡致中断率在各用户位置保持 0.9%（固定/常规基线为 29.5%-64.1%），吞吐维持 2850-3000 Mbps；敏感性分析表明需要 v_p^max >= 6 m/s 与 15-25 度角分辨率要求（30 度 / 12 m/s 极端配置使感知退化、中断升至 5.6%）。

## Key technical points (EN)
- First anti-blockage PASS design driven by real-time obstacle sensing rather than stochastic blockage models: an FMCW radar rides the mechanically movable pinching antenna on the ceiling waveguide.
- Sensing-movement-communication frame: micro-movement at scanning velocity v_scan during T_s = ηT_frame builds a synthetic linear array; communication resumes for (1-η)T_frame.
- Five-step sensing pipeline: FFT to delay-DOA matrix -> median amplitude thresholding -> beat-frequency distance/DoA estimation -> user localization with elevation compensation -> obstacle-coordinate calibration excluding the user's own return.
- Blockage-zone geometry on the waveguide: physical shadow zone dilated into a robust zone (margin covers sensing error, latency, obstacle velocity); antenna operates in safety or escaping mode within the safe zone.
- Closed-form duty-cycle optimum: v_scan* = v_p^max; η* = min(λ_s/(2 T_frame sin(Δθ_req) v_p^max), η_max), subject to (1-η)R_c >= R_QoS.
- Numbers (28 GHz, 400 MHz, 10x10x3 m, pedestrian R=0.25 m/H=1.8 m): outage 0.9% vs 29.5-64.1% baselines; throughput 2,850-3,000 Mbps; needs v_p^max >= 6 m/s, Δθ_req 15-25 degrees (worst corner: 5.6% outage).
- No 3GPP mechanism yet — PASS is a pre-standard 6G candidate technology; the contribution is the sensing/mobility protocol layer above the waveguide hardware.

## Key technical points (ZH)
- 首个以实时障碍物感知（而非随机遮挡模型）驱动的 PASS 抗遮挡设计：FMCW 雷达随可机械移动的夹持天线沿天花板波导运动。
- 感知-移动-通信帧结构：T_s = ηT_frame 内以扫描速度 v_scan 微移动构成合成线性阵列；其余 (1-η)T_frame 恢复通信。
- 五步感知流水线：FFT 得时延-DOA 矩阵 -> 中值幅度门限 -> 差拍频率测距/DoA 估计 -> 带仰角补偿的用户定位 -> 排除用户回波的障碍物坐标校准。
- 波导上的遮挡区几何：物理阴影区按感知误差、时延与障碍物速度膨胀为鲁棒区；天线在安全区内以安全/逃逸两模式运行。
- 闭式占空比最优解：v_scan* = v_p^max；η* = min(λ_s/(2 T_frame sin(Δθ_req) v_p^max), η_max)，约束 (1-η)R_c >= R_QoS。
- 核心数字（28 GHz、400 MHz、10x10x3 m、行人 R=0.25 m/H=1.8 m）：中断率 0.9%（基线 29.5%-64.1%）；吞吐 2850-3000 Mbps；需 v_p^max >= 6 m/s、Δθ_req 15-25 度（最差配置中断 5.6%）。
- 尚无 3GPP 机制——PASS 属预标准 6G 候选技术；贡献在波导硬件之上的感知/移动协议层。

## Why it matters / what's new (EN)
This is the KB's first pinching-antenna entry, opening coverage of a 6G radio-access candidate that has generated a large research wave since NTT DOCOMO's original waveguide demonstration: instead of steering beams electronically around blockages, PASS physically relocates the radiating point. The paper is notable for moving PASS from placement theory to an operational protocol — a concrete sensing-movement-communication frame with a closed-form sensing duty cycle, plus a robust-blockage-zone construction that explicitly budgets sensing uncertainty and mechanical latency. The near-zero outage result (0.9% vs 29.5-64.1%) quantifies what mechanical antenna mobility buys in dynamic indoor blockage, the binding scenario for mmWave XR. It also lands squarely in the ISAC current running through the cellular bins (the radar and the communicator share the same moving aperture), but from a hardware angle no existing entry touches. Caveats: single-user, single-obstacle cylinder models, simulation-level evaluation, and no standards hook yet — watch for PASS appearing in 6G workshop/pre-standardization agendas.

## Why it matters / what's new (ZH)
这是知识库首个夹持天线条目，开启了对一项 6G 无线接入候选技术的覆盖——自 NTT DOCOMO 最初的波导演示以来，该方向已形成大规模研究浪潮：PASS 不靠电子波束绕开遮挡，而是物理移动辐射点。本文的价值在于把 PASS 从布放理论推进到可运行协议——具体的感知-移动-通信帧结构、闭式感知占空比，以及显式预算感知不确定性与机械时延的鲁棒遮挡区构造。近零中断结果（0.9% 对 29.5%-64.1%）量化了机械天线移动性在动态室内遮挡（mmWave XR 的关键场景）中的收益。它也正落在贯穿蜂窝各栏目的 ISAC 潮流之中（雷达与通信共享同一移动孔径），但切入角度是现有条目未触及的硬件层。注意事项：单用户、单圆柱障碍物模型、仿真级评估、尚无标准挂钩——关注 PASS 进入 6G 研讨会/预标准化议程的信号。

## Images
