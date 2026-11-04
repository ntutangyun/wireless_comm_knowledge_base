---
id: 2026-11-04_arxiv-joint-delay-doppler-multipath-leo-channels
date_published: 2026-11-02
date_found: 2026-11-04
technology: satellite
type: academic-paper
title_en: "Joint Delay-Doppler Modeling of Multipath LEO Channels"
title_zh: "多径 LEO 信道的时延-多普勒联合建模"
url: "https://arxiv.org/abs/2611.02350"
source_quality: full
topics: [LEO, NTN, channel-model, delay-Doppler, K-factor, TR-38.811, QuaDRiGa, geometry-based-stochastic-model]
topic_primary: ntn
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Chiu and Roy (arXiv, 2 Nov 2026) build a geometry-based stochastic channel model for a ground terminal during a LEO satellite pass. The model is driven by the slant range, elevation and azimuth of the satellite, and it generates joint delay, Doppler/phase and per-component power profiles over the pass. The authors say the 3GPP NTN pipeline (TR 38.811 on top of TR 38.901) adds elevation-dependent parameters to a terrestrial 2-D model, does not specify time correlation between elevation-conditioned realisations, and takes some parameters from a 20 km HAPS geometry.

The ground scene places buildings as a 2-D Poisson point process with Rayleigh-distributed heights and uniformly distributed wall orientations. Three non-direct components are modelled: wall reflections (Fresnel coefficients, finite-wall and specular-geometry conditions), ground reflection, and roof-edge diffraction (UTD wedge coefficient). Blockage and path existence are handled with indicator functions, and the result is a locally wide-sense-stationary tapped-delay-line impulse response. Closed-form expressions for LoS probability, K-factor, delay spread, Doppler spread and a stationarity interval follow from the Poisson scene statistics.

Scenario settings are 550 km altitude, 2 GHz carrier, an overhead pass and a 2 km city radius, with urban and rural parameter sets. With an omnidirectional antenna the LoS probability, delay spread and K-factor trends broadly match TR 38.811 versus elevation. With a beamforming terminal antenna (sigma = 20 degrees, urban) the K-factor peaks at 21.7 dB near 40 degrees elevation and falls to 17.5 dB at 80 degrees, a mid-elevation peak the authors note is not predicted by TR 38.811 or 6G NTN. Doppler spreads are smaller than in the authors' earlier model and in QuaDRiGa because path existence is accounted for. The authors state that diffuse and vegetation scattering are omitted and that the 3GPP and 6G-NTN scene parameters are undisclosed, so the comparison is of trends rather than a matched validation. The paper links open-source code.

## Summary (ZH)

Chiu 与 Roy（arXiv，2026 年 11 月 2 日）为 LEO 过顶期间的地面终端构建了基于几何的随机信道模型。模型由卫星的斜距、仰角和方位角驱动，生成整个过顶过程中的时延、多普勒/相位以及各分量功率的联合剖面。作者指出，3GPP NTN 流程（在 TR 38.901 之上的 TR 38.811）只是在地面 2-D 模型上加入随仰角变化的参数，未规定不同仰角实现之间的时间相关性，且部分参数取自 20 km HAPS 几何。

地面场景把建筑物建模为二维泊松点过程，高度服从瑞利分布，墙体朝向均匀分布。模型包含三类非直射分量：墙面反射（菲涅耳系数、有限墙面与镜面几何条件）、地面反射和屋顶边缘绕射（UTD 劈形系数）。阻挡和路径存在性用指示函数处理，最终得到局部广义平稳的抽头延迟线冲激响应。由泊松场景统计可推出 LoS 概率、K 因子、时延扩展、多普勒扩展和平稳区间的闭式表达。

场景设置为 550 km 轨道高度、2 GHz 载频、过顶轨迹和 2 km 城区半径，分城区与乡村两套参数。全向天线下，LoS 概率、时延扩展和 K 因子随仰角的趋势与 TR 38.811 大体吻合。采用波束赋形终端天线（sigma = 20 度，城区）时，K 因子在约 40 度仰角处达到 21.7 dB 峰值，到 80 度降至 17.5 dB；作者指出这种中仰角峰值在 TR 38.811 与 6G NTN 中均未被预测。由于考虑了路径存在性，多普勒扩展小于作者此前的模型以及 QuaDRiGa。作者说明模型未包含漫散射与植被散射，且 3GPP 与 6G-NTN 的场景参数未公开，因此比较针对趋势而非严格匹配验证。论文提供开源代码链接。

## Key technical points (EN)

- Inputs: slant range, elevation, azimuth over a pass; outputs: joint delay-Doppler statistics and temporal CIR evolution.
- Scene: Poisson-distributed buildings; components are wall reflection, ground reflection and roof-edge diffraction (UTD, n = 3/2).
- Urban LoS: ground reflection carries 69-79% of non-direct power (10-80 degrees); in rural scenes 89-92%.
- 95% of wall-reflected power lies below an excess delay that falls from 170 ns to 2.0 ns as elevation goes from 20 to 80 degrees.
- Stationarity time generally shrinks with elevation (about 5 s near 85 degrees); a rural hump of about 33 s appears near 45 degrees.
- Rural LoS delay spread decreases with elevation, whereas TR 38.811 predicts an increase (paper's comparison).

## Key technical points (ZH)

- 输入为过顶期间的斜距、仰角与方位角；输出为联合时延-多普勒统计及信道冲激响应的时间演化。
- 场景为泊松分布建筑；分量包括墙面反射、地面反射与屋顶边缘绕射（UTD，n = 3/2）。
- 城区 LoS：地面反射占非直射功率的 69-79%（10-80 度）；乡村为 89-92%。
- 仰角从 20 度升至 80 度时，95% 墙面反射功率所对应的额外时延由 170 ns 降至 2.0 ns。
- 平稳时间总体随仰角减小（85 度附近约 5 s）；乡村在 45 度附近出现约 33 s 的隆起。
- 乡村 LoS 时延扩展随仰角下降，而 TR 38.811 预测为上升（论文对比结果）。

## Why it matters / what's new (EN)

It gives an openly available, scene-driven alternative for generating LEO NTN channels over a whole pass, which the authors argue the 3GPP statistical pipeline does not provide. The beamformed K-factor behaviour is the notable departure from the 3GPP trend. It complements the simulation-tool entries in the KB, such as the LEO direct-to-device MU-MIMO study (2026-11-03_arxiv-downlink-mu-mimo-leo-direct-to-device), which rely on the 3GPP NTN channel.

## Why it matters / what's new (ZH)

它提供了一种公开可得、由场景驱动的方法，可生成整个过顶期间的 LEO NTN 信道，作者认为 3GPP 统计流程并不提供这一点。波束赋形下的 K 因子行为是与 3GPP 趋势的主要差异。它补充了 KB 中依赖 3GPP NTN 信道的仿真类条目，例如 LEO 直连终端下行 MU-MIMO 研究（2026-11-03_arxiv-downlink-mu-mimo-leo-direct-to-device）。
