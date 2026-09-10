---
id: 2026-09-10_arxiv-battery-aware-rsma-solar-cellfree-leo
date_published: 2026-09-08
date_found: 2026-09-10
type: academic-paper
technology: satellite
title_en: "Battery-Aware Rate-Splitting Multiple Access for Solar-Powered Cell-Free LEO Satellite Networks"
title_zh: "面向太阳能供电无蜂窝 LEO 卫星的电池感知速率分裂接入：以 1.7% 的能效代价将近电池耗尽时隙占比从 24.84% 降至 6.82%"
url: "https://arxiv.org/abs/2609.09445"
source_quality: full
topics: [rate-splitting-multiple-access, cell-free-satellite, energy-harvesting, battery-management, Lyapunov-optimization, LEO-downlink]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Wali Ullah Khan (SnT, University of Luxembourg) and Muhammad Adil (Department of Electronics Engineering, University of Rome Tor Vergata) address a gap in cell-free low-Earth-orbit (LEO) satellite downlink design: prior cell-free LEO and RSMA studies optimise communication performance without explicitly coupling resource allocation to the physical, finite-battery state of solar-powered serving satellites, which the authors note can let an "energy-efficient" transmission decision remain aggressive right before or during an eclipse interval (when solar harvesting stops). The paper develops battery-aware one-layer rate-splitting multiple access (BA-RSMA) for a fixed-cluster, solar-powered cell-free LEO downlink, in which a perturbed physical-battery Lyapunov queue directly couples common/private RSMA power allocation to each satellite's stored energy. The design adds robust energy-causality constraints that hold under bounded harvesting uncertainty, and allows harvest curtailment once a battery reaches saturation (to avoid wasted/over-charge harvesting). Under a fixed-precoder scalar effective-channel model, the authors apply dual and quadratic transforms to turn the coupled problem into convex fixed-auxiliary resource-allocation subproblems solved via monotonic alternating updates. Numerical cross-validation against a direct nonlinear-programming reference shows a maximum relative objective gap below 2.8x10^-7 across 12 representative slot-and-battery-state instances, confirming the convex reformulation is tight. In a 20-random-seed, battery-stressed experiment, BA-RSMA achieves 1.631 Mbit/J energy efficiency and reduces the fraction of time slots with near-battery-depletion from 24.84% (under a Myopic-RSMA baseline that allocates power for communication performance alone) to 6.82%, at a cost of only a 1.7% reduction in energy efficiency relative to that continuous Myopic-RSMA baseline; BA-RSMA also exceeds both NOMA and OMA baselines in energy efficiency under the tested conditions.

## Summary (ZH)
Khan（卢森堡大学 SnT）与 Adil（罗马第二大学电子工程系）针对无蜂窝低地球轨道（LEO）卫星下行链路设计中的一个空白展开研究：以往的无蜂窝 LEO 与速率分裂多址（RSMA）研究在优化通信性能时，并未将资源分配与太阳能供电服务卫星的实际有限电池状态显式耦合，作者指出，这可能导致所谓"高能效"的传输决策在食影区间（太阳能采集停止期间）来临前后仍保持激进。论文针对固定簇、太阳能供电的无蜂窝 LEO 下行链路，提出电池感知单层速率分裂多址（BA-RSMA）：通过一个扰动的物理电池 Lyapunov 队列，将 RSMA 公共/私有流功率分配直接与每颗卫星的储能状态耦合。该设计还加入了在有界采集不确定性下仍然成立的稳健能量因果约束，并允许电池达到饱和后削减采集量（以避免过充或浪费采集能量）。在固定预编码矩阵的标量等效信道模型下，作者运用对偶变换与二次变换，将耦合问题转化为可通过单调交替更新求解的凸固定辅助变量资源分配子问题。与直接非线性规划参考解的数值交叉验证表明，在 12 个代表性时隙-电池状态实例中，最大相对目标函数差距低于 2.8×10^-7，证实了该凸重构的紧致性。在一项 20 个随机种子的电池压力测试实验中，BA-RSMA 实现了 1.631 Mbit/J 的能效，并将近电池耗尽时隙的比例从仅以通信性能为目标的 Myopic-RSMA 基准方案下的 24.84% 降至 6.82%，代价仅为相较该连续 Myopic-RSMA 基准方案 1.7% 的能效下降；在所测试条件下，BA-RSMA 的能效也优于 NOMA 与 OMA 基准方案。

## Key technical points (EN)
- **Gap addressed:** prior cell-free LEO / RSMA / energy-harvesting satellite work does not explicitly couple one-layer RSMA common/private power allocation to the physical finite-battery state of solar-powered serving satellites under bounded harvesting uncertainty.
- **Method:** battery-aware one-layer RSMA (BA-RSMA) -- a perturbed physical-battery Lyapunov queue couples power allocation to stored energy; robust energy-causality constraints hold under bounded harvesting uncertainty; harvest curtailment is allowed once the battery saturates.
- **Solution technique:** fixed-precoder scalar effective-channel model; dual and quadratic transforms yield convex fixed-auxiliary subproblems solved by monotonic alternating updates.
- **Numerical validation:** cross-validated against a direct nonlinear-programming reference -- maximum relative objective gap below 2.8x10^-7 over 12 representative slot/battery-state instances.
- **Stressed-experiment results (20 random seeds):** BA-RSMA reaches 1.631 Mbit/J energy efficiency; reduces near-battery-depletion time-slot fraction from 24.84% (Myopic-RSMA baseline) to 6.82%, at only a 1.7% energy-efficiency cost relative to the continuous Myopic-RSMA baseline.
- **Baseline comparison:** BA-RSMA exceeds both NOMA and OMA baselines in energy efficiency under the tested conditions.
- **Format:** a short letter (arxiv comment lists 6 pages, 4 figures); future work flagged by the authors as dynamic clustering and geometry-based multi-layer RSMA.

## Key technical points (ZH)
- **研究空白：** 以往的无蜂窝 LEO / RSMA / 能量采集卫星研究，未将单层 RSMA 公共/私有流功率分配与有界采集不确定性下太阳能供电服务卫星的实际有限电池状态显式耦合。
- **方法：** 电池感知单层 RSMA（BA-RSMA）——通过一个扰动的物理电池 Lyapunov 队列将功率分配与储能状态耦合；在有界采集不确定性下保持稳健的能量因果约束；电池饱和后允许削减采集量。
- **求解技术：** 固定预编码矩阵的标量等效信道模型；运用对偶变换与二次变换，将问题转化为可通过单调交替更新求解的凸固定辅助变量子问题。
- **数值验证：** 与直接非线性规划参考解进行交叉验证——在 12 个代表性时隙/电池状态实例中，最大相对目标函数差距低于 2.8×10^-7。
- **压力测试结果（20 个随机种子）：** BA-RSMA 实现 1.631 Mbit/J 能效；将近电池耗尽时隙比例从 Myopic-RSMA 基准方案下的 24.84% 降至 6.82%，相较该连续 Myopic-RSMA 基准方案仅带来 1.7% 的能效下降。
- **基准对比：** 在所测试条件下，BA-RSMA 的能效优于 NOMA 与 OMA 基准方案。
- **篇幅：** 短篇 letter 形式（arxiv 备注为 6 页 4 图）；作者指出的未来工作方向为动态聚簇与基于几何的多层 RSMA。

## Why it matters / what's new (EN)
The leo-constellations bin has prior entries on cell-free LEO downlinks and on energy-harvesting-aware resource allocation for NTN IoT devices (2026-08-08 AoI-NTN probe-before-transmit), but this is the first entry to couple RSMA power-splitting directly to the *satellite's own* physical battery state (rather than a ground device's) via a Lyapunov queue with robust energy causality, and the first to quantify the energy-efficiency cost of avoiding near-battery-depletion in this setting: a 1.7% EE penalty buys a roughly 3.6x reduction in near-depletion time slots (24.84% to 6.82%), with the convex reformulation validated to within 2.8x10^-7 of a direct nonlinear-programming solution.

## Why it matters / what's new (ZH)
leo-constellations 分箱此前已有关于无蜂窝 LEO 下行链路，以及面向 NTN 物联网设备的能量采集感知资源分配的条目（2026-08-08 AoI-NTN 先探测后发送方案），但本条目是首个通过带稳健能量因果约束的 Lyapunov 队列，将 RSMA 功率分配直接与*卫星自身*（而非地面设备）的物理电池状态耦合的条目，也是首个在该场景下量化"避免接近电池耗尽"所需能效代价的条目：1.7% 的能效代价换来近电池耗尽时隙比例约 3.6 倍的降低（从 24.84% 降至 6.82%），且该凸重构已被验证与直接非线性规划解的差距在 2.8×10^-7 以内。

## Images

None.
