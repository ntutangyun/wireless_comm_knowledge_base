---
id: 2026-07-11_arxiv-bessel-beam-thz-ue-uncertainty
date_published: 2026-07-08
date_found: 2026-07-11
type: academic-paper
technology: cellular
title_en: "Bessel beam optimization for near-field THz communications under UE location uncertainty: closed-form cone-angle rules"
title_zh: "UE 位置不确定下近场太赫兹通信的贝塞尔波束优化：闭式锥角规则"
url: "https://arxiv.org/abs/2607.07069"
source_quality: full
topics: [THz, 6G, near-field, Bessel-beam, beamforming, positioning-uncertainty]
topic_primary: 6g-vision
topics_secondary: [cellular-massive-mimo]
novelty_score: 3
---

## Summary (EN)

Ericsson Research and KTH authors (Jolly, Petrov, Fodor, Björnson) solve a practical blocker for near-field THz links: Bessel beams resist diffraction and are natural candidates for 100-1000 GHz access, but choosing the beam's cone angle has required exhaustive search — infeasible per-UE — or heuristics that waste spectral efficiency, especially when the UE's location is only imperfectly known. The paper derives a "peak-alignment principle" from a stationary-phase approximation: modelling the planar array as annular rings whose contributions cohere at specific axial distances yields closed-form rules mapping UE location statistics directly to a near-optimal cone angle.

For a known location the rule is θ* = arctan(D_AP/(2√2μ)); under Gaussian or uniform location uncertainty, first-order corrections (calibrated coefficients α=0.22, β=0.40) shift the effective focus. Across 100-1000 GHz, 300-800 elements, and both uncertainty regimes, the closed forms land within 0.06% of exhaustive-search spectral efficiency at O(1) complexity — first such result for planar arrays; prior art covered linear arrays with perfect position knowledge.

## Summary (ZH)

爱立信研究院与 KTH 的作者（Jolly、Petrov、Fodor、Björnson）解决了近场太赫兹链路的一个实际障碍：贝塞尔波束抗衍射，是 100-1000 GHz 接入的天然候选，但其锥角选择此前依赖穷举搜索——无法按 UE 逐一执行——或浪费频谱效率的启发式，在 UE 位置仅有不精确估计时尤甚。论文从驻相近似推导出"峰值对齐原理"：将平面阵列建模为在特定轴向距离相干叠加的环形单元，得到将 UE 位置统计量直接映射为近优锥角的闭式规则。

位置确定时规则为 θ* = arctan(D_AP/(2√2μ))；在高斯或均匀位置不确定性下，一阶修正（标定系数 α=0.22、β=0.40）会平移有效焦点。在 100-1000 GHz、300-800 天线单元及两种不确定性范式下，闭式解以 O(1) 复杂度达到与穷举搜索相差 0.06% 以内的频谱效率——是平面阵列上的首个此类结果；先前工作仅覆盖已知精确位置的线性阵列。

## Key technical points (EN)

- Peak-alignment principle via stationary-phase approximation: annular-ring coherence determines the axial power peak.
- Closed-form cone angle: θ* = arctan(D_AP/(2√2μ)) deterministic; μ−0.22σ (Gaussian) / μ−0.40σ (uniform) corrections under uncertainty.
- Max spectral-efficiency error vs exhaustive search: 0.057% (deterministic), 0.0072% (Gaussian), 0.0047% (uniform).
- O(1) complexity; validated 100-1000 GHz, 300-800 elements, planar arrays.

## Key technical points (ZH)

- 经驻相近似的峰值对齐原理：环形单元相干性决定轴向功率峰。
- 闭式锥角：确定位置时 θ* = arctan(D_AP/(2√2μ))；不确定时修正为 μ−0.22σ（高斯）/ μ−0.40σ（均匀）。
- 相对穷举搜索的最大频谱效率误差：0.057%（确定）、0.0072%（高斯）、0.0047%（均匀）。
- O(1) 复杂度；在 100-1000 GHz、300-800 单元的平面阵列上验证。

## Why it matters / what's new (EN)

The 6g-vision bin's THz coverage has been visionary rather than deployable; this is the opposite — an Ericsson-authored closed-form that turns Bessel-beam configuration from an offline search problem into an online lookup, explicitly robust to positioning error (the regime real 6G positioning will deliver). It also quietly couples the THz-access and positioning threads: beam configuration now consumes location *statistics*, not point estimates.

## Why it matters / what's new (ZH)

6g-vision 板块的太赫兹内容此前偏愿景而非可部署；本文相反——爱立信署名的闭式解将贝塞尔波束配置从离线搜索问题变为在线查表，且对定位误差显式鲁棒（这正是真实 6G 定位所能提供的精度范围）。它还悄然耦合了太赫兹接入与定位两条线索：波束配置如今消费的是位置*统计量*而非点估计。
