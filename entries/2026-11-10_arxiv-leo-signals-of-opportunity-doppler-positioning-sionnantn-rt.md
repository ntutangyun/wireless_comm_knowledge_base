---
id: 2026-11-10_arxiv-leo-signals-of-opportunity-doppler-positioning-sionnantn-rt
date_published: 2026-11-02
date_found: 2026-11-10
technology: satellite
type: academic-paper
title_en: "Beyond GNSS: Leveraging LEO Satellite Signals of Opportunity for Doppler Positioning"
title_zh: "超越 GNSS：利用 LEO 卫星机会信号进行多普勒定位"
url: "https://arxiv.org/abs/2611.03440"
source_quality: full
topics: [LEO, Doppler-positioning, signals-of-opportunity, GNSS-denied, ray-tracing, Sionna]
topic_primary: leo-constellations
topics_secondary: [ntn]
novelty_score: 3
---

## Summary (EN)

Hasan, Kabir, Han, Shin and Poor (arXiv, 17 pages, submitted 2 Nov 2026) present an overview article on user-terminal positioning from the Doppler shift of LEO satellite signals used as signals of opportunity (SOPs). The authors note that most LEO satellites lack dedicated navigation signals, so SOP approaches repurpose existing communication signals and use public two-line element (TLE) files for orbit information, with ephemeris errors limiting accuracy. The article covers the principles, challenges and enabling technologies, positions Doppler-based positioning against code-phase and carrier-phase pseudorange methods (the former hampered by asynchronous satellite clocks, the latter by carrier-ambiguity resolution), and names differential positioning and ephemeris-correction algorithms as mitigations.

To support realistic and reproducible evaluation beyond stochastic channel models, the paper proposes SionnaNTN-RT, a ray-tracing framework for non-terrestrial networks built on Sionna, enabling end-to-end simulation of Doppler-based positioning. In the simulations, plain Doppler positioning shows kilometre-level errors from ephemeris inaccuracy; differential Doppler reaches about 2.9–5.8 m 3D RMSE and the authors' earlier ephemeris-correcting 3DPose method about 0.8–1.2 m, in both open-sky and urban scenes. The article closes with future research directions.

## Summary (ZH)

Hasan、Kabir、Han、Shin 与 Poor（arXiv，17 页，2026 年 11 月 2 日提交）发表综述性文章，讨论将 LEO 卫星信号作为机会信号（SOP）、利用其多普勒频移进行用户终端定位。作者指出多数 LEO 卫星没有专用导航信号，因此 SOP 方法复用现有通信信号，并使用公开的两行轨道根数（TLE）文件获取轨道信息，星历误差会限制精度。文章涵盖基本原理、挑战与使能技术，并将多普勒定位与码相位和载波相位伪距方法对比（前者受卫星时钟异步困扰，后者受载波整周模糊度求解困扰），同时将差分定位与星历修正算法列为缓解手段。

为在随机信道模型之外支持真实且可复现的评估，论文提出 SionnaNTN-RT，一个基于 Sionna 的非地面网络射线追踪框架，可对基于多普勒的定位进行端到端仿真。仿真中，普通多普勒定位因星历误差呈公里级误差；差分多普勒的三维 RMSE 约 2.9–5.8 m，作者此前提出的带星历修正的 3DPose 方法约 0.8–1.2 m，开阔天空与城区场景均如此。文末给出未来研究方向。

## Key technical points (EN)

- Premise: most LEO satellites have no dedicated navigation signal; SOP approaches reuse communication signals and public TLE orbit data, so ephemeris error limits accuracy.
- Comparison: Doppler-based positioning avoids asynchronous-clock issues of code-phase pseudorange and carrier-ambiguity resolution of carrier-phase methods.
- Mitigations named: differential positioning with a base receiver; dedicated ephemeris-correction algorithms.
- Tool: SionnaNTN-RT, ray-tracing framework for NTN on Sionna for end-to-end Doppler-positioning simulation.
- Simulations cover ephemeris and multipath errors in urban and open-sky settings; future directions are outlined.

## Key technical points (ZH)

- 前提：多数 LEO 卫星无专用导航信号；SOP 方法复用通信信号与公开 TLE 轨道数据，星历误差限制精度。
- 对比：多普勒定位避开码相位伪距的时钟异步问题与载波相位方法的整周模糊度求解。
- 提及的缓解手段：基于基准接收机的差分定位；专用星历修正算法。
- 工具：SionnaNTN-RT，基于 Sionna 的 NTN 射线追踪框架，用于多普勒定位端到端仿真。
- 仿真涵盖城区与开阔天空下的星历与多径误差；并给出未来方向。

## Why it matters / what's new (EN)

The KB already has LEO Doppler navigation geometry (2026-09-17) and SSB-based LEO positioning (2026-08-15) entries. This one is a tutorial-style overview of the SOP Doppler approach plus a ray-tracing simulation tool, rather than a new estimator, so its contribution is the framing and the reproducible simulator.

## Why it matters / what's new (ZH)

KB 已有 LEO 多普勒导航几何（2026-09-17）与基于 SSB 的 LEO 定位（2026-08-15）条目。本条目是对 SOP 多普勒方法的教程式综述加射线追踪仿真工具，而非新的估计器，其贡献在于框架梳理与可复现的仿真器。

## Images

