---
id: 2026-10-29_arxiv-dp-ota-federated-learning-cell-free-mimo-thermal-noise
date_published: 2026-10-27
date_found: 2026-10-29
type: academic-paper
technology: cellular
title_en: "Privacy-Preserving Over-the-Air Federated Learning over Cell-Free Massive MIMO with User-Centric Clustering"
title_zh: "基于用户中心分簇的无蜂窝大规模 MIMO 隐私保护空中联邦学习"
url: "https://arxiv.org/abs/2610.37424"
source_quality: full
topics: [cell-free-massive-MIMO, over-the-air-computation, federated-learning, differential-privacy, user-centric-clustering, power-control, zCDP]
topic_primary: cellular-massive-mimo
topics_secondary: [cellular-ai, cellular-security]
novelty_score: 3
---

## Summary (EN)

Manobendu Sarker and Soumaya Cherkaoui (Polytechnique Montreal) design differentially private federated learning (FL) with over-the-air (OTA) aggregation on a user-centric cell-free massive MIMO uplink. Clipped local model updates are perturbed with Gaussian noise and sent simultaneously over a shared uplink; access points (APs) use local matched filtering and forward combined scalar statistics to a central processing unit. The authors observe that, under channel hardening, the thermal noise already present at reception can mask updates and so reduce or remove the artificial noise normally added for privacy.

Using this, they formulate a cross-layer problem that jointly chooses AP-UE association, per-UE transmit power and artificial-noise variance to minimise aggregation variance under per-UE zero-concentrated differential privacy constraints calibrated by an ergodic privacy accounting step. The mixed-integer non-convex problem is solved by alternating difference-of-convex power allocation and greedy coordinate-descent clustering. In simulation (36 APs with 4 antennas on a 500 m square, 20 single-antenna UEs, 1.9 GHz, 20 MHz, 3GPP UMi-NLOS path loss) the aggregation variance falls by up to 89% against conventional baselines, and federated training reaches about 97% test accuracy on MNIST at a relaxed privacy budget, with gains also reported on CIFAR-10. Under strict privacy budgets all baselines stay near chance.

## Summary (ZH)

Manobendu Sarker 与 Soumaya Cherkaoui（蒙特利尔理工学院）在用户中心的无蜂窝大规模 MIMO 上行链路上设计了带差分隐私的空中（OTA）聚合联邦学习。经裁剪的本地模型更新叠加高斯噪声后在共享上行链路同时发送，接入点（AP）进行本地匹配滤波，并把合并后的标量统计量转发给中央处理单元。作者指出，在信道硬化条件下，接收端固有的热噪声本身就能掩蔽更新，因而可以减少甚至免去通常为隐私而加入的人工噪声。

据此，他们建立跨层优化问题，联合选择 AP-UE 关联、各 UE 发射功率和人工噪声方差，以在由遍历隐私核算校准的逐 UE 零集中差分隐私约束下最小化聚合方差。该混合整数非凸问题通过交替的差分凸功率分配与贪心坐标下降分簇求解。仿真设置为 500 米见方区域内 36 个各配 4 天线的 AP、20 个单天线 UE、1.9 GHz、20 MHz、3GPP UMi-NLOS 路损；结果显示聚合方差比常规基线最多降低 89%，在宽松隐私预算下联邦训练在 MNIST 上达到约 97% 的测试精度，CIFAR-10 上也有增益；在严格隐私预算下所有基线都接近随机水平。

## Key technical points (EN)

- Setting: user-centric cell-free massive MIMO uplink, distributed combining (APs forward scalar statistics), analog OTA averaging at the central unit, orthogonal pilots.
- Key idea: thermal noise under channel hardening acts as a privacy-masking resource, lowering the artificial noise needed to meet the privacy constraint.
- Optimisation: joint AP-UE association, transmit powers and artificial-noise variances; the objective is aggregation variance taken from a convergence bound for non-convex FL over imperfect OTA channels.
- Regime structure: under stringent privacy (epsilon of about 5 or less) the optimum gives each UE one serving AP at minimum power (1 mW, roughly 23 dB below the cap) so thermal noise is maximised, and artificial noise accounts for about 98.5% of the objective at epsilon = 2; from about epsilon = 10 the artificial noise disappears and the system becomes interference/noise-limited, with the mean serving APs growing from 1.5 to 5.8 as epsilon rises to 100.
- Solver: alternating difference-of-convex power control and greedy coordinate-descent clustering.
- Results: up to 89% lower aggregation variance; about 97% MNIST accuracy at relaxed budgets; at epsilon = 2 all schemes are infeasible; evaluation is by simulation only.

## Key technical points (ZH)

- 场景：用户中心无蜂窝大规模 MIMO 上行，分布式合并（AP 转发标量统计量），中央单元做模拟 OTA 平均，采用正交导频。
- 核心思路：信道硬化下的热噪声可作为隐私掩蔽资源，降低满足隐私约束所需的人工噪声。
- 优化：联合 AP-UE 关联、发射功率与人工噪声方差；目标为由非凸 FL 在不完美 OTA 信道下的收敛界得到的聚合方差。
- 区间结构：在严格隐私（epsilon 约 5 及以下）时，最优解让每个 UE 只由一个 AP 服务并以最小功率发射（1 mW，约比上限低 23 dB），从而使热噪声最大；epsilon = 2 时人工噪声约占目标的 98.5%；约 epsilon = 10 起人工噪声消失，系统转为干扰/噪声受限，epsilon 升至 100 时平均服务 AP 数由 1.5 增至 5.8。
- 求解：交替的差分凸功率控制与贪心坐标下降分簇。
- 结果：聚合方差最多降低 89%；宽松预算下 MNIST 精度约 97%；epsilon = 2 时所有方案均不可行；仅有仿真评估。

## Why it matters / what's new (EN)

The authors note that most early OTA-FL frameworks assume single-cell topologies, where the worst-case device limits aggregation, while cell-free OTA-FL work left privacy out of the resource allocation. This paper ties privacy accounting directly to physical-layer choices and shows when a noisy link is an asset. Results are simulated with ideal assumptions on pilots and fronthaul, so practical gains are not yet established.

## Why it matters / what's new (ZH)

作者指出，早期 OTA-FL 框架多假设单小区，最差设备会限制聚合精度；而无蜂窝 OTA-FL 的资源分配又未考虑隐私。本文把隐私核算与物理层选择直接联系起来，并说明了何时"有噪声"的链路反而是资产。结果为仿真，对导频与前传采用理想假设，实际收益尚待验证。

## Images

None.
