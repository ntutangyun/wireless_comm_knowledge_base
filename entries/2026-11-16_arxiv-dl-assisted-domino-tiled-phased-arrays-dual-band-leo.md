---
id: 2026-11-16_arxiv-dl-assisted-domino-tiled-phased-arrays-dual-band-leo
date_published: 2026-11-11
date_found: 2026-11-16
technology: satellite
type: academic-paper
title_en: "Deep Learning-Assisted Optimization of Large Domino-Tiled Phased Arrays for Dual-Band LEO Satellite Communications"
title_zh: "面向双频段 LEO 卫星通信的大型多米诺拼贴相控阵的深度学习辅助优化"
url: "https://arxiv.org/abs/2611.15390"
source_quality: full
topics: [phased array, domino tiling, sidelobe level, Tabu search, CNN surrogate, Ku-band, user terminal antenna]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Mashayekhi and Askari (Isfahan University of Technology; arXiv eess.SP, 11 Nov 2026; stated as submitted to IEEE Transactions on Antennas and Propagation for possible publication) study domino tiling of large phased arrays, in which two adjacent elements share one transmit/receive module and so halve the module count. Searching irregular tilings needs many radiation-pattern evaluations whose cost grows quickly with aperture, so the paper proposes a hybrid framework: a local-flip Markov chain generates tilings, a Tabu Search optimises them, and a CNN surrogate gates which candidates receive a full array-factor evaluation.

The framework is then applied to a 36x36 circularly polarised dual-band array for LEO satellite communications at 11.2 GHz (receive) and 14.0 GHz (transmit).

## Summary (ZH)

Mashayekhi 与 Askari（伊斯法罕理工大学；arXiv eess.SP，2026 年 11 月 11 日；文中称已投稿 IEEE Transactions on Antennas and Propagation，以供可能发表）研究大型相控阵的多米诺拼贴：相邻两个阵元共用一个收发模块，使模块数减半。搜索不规则拼贴需要大量方向图评估，其代价随口径迅速增长，因此本文提出混合框架：局部翻转马尔可夫链生成拼贴，Tabu 搜索进行优化，CNN 代理模型决定哪些候选值得做完整阵因子评估。

该框架随后应用于 LEO 卫星通信的 36x36 圆极化双频段阵列，接收 11.2 GHz、发射 14.0 GHz。

## Key technical points (EN)

- Tiling generation: perfect matchings of the grid graph via a local-flip Markov chain, reported about 5.2x faster than a randomised greedy baseline with near-balanced horizontal/vertical domino counts.
- Fitness: mean directivity minus mean sidelobe level (SLL) across four azimuth steering angles at theta0 = 45 degrees. On a 20x20 aperture Tabu Search gave the lowest SLL at comparable directivity versus GA, SA and ILS.
- CNN gate: predicts whether a tiling's multi-angle SLL is favourable; validation accuracy 82.62% (20x20) to 92.47% (50x50). Admitted candidates are still scored exactly, so a misclassification can only skip a good candidate.
- At a budget of 8,000 candidates the gate cuts full evaluations by 60.6-70.6% and speeds the search 2.56-3.80x for 20x20 to 100x100 apertures, with fitness differences of at most 0.14.
- Dual-band LEO array: 36x36, 648 dominoes, element spacing 11.71 mm; scans to 50 degrees without grating lobes; peak SLL -17.4 dB (11.2 GHz) and -15.2 dB (14.0 GHz) at 50 degrees against a -13.5 dB target; broadside realised gain 34.24 and 36.46 dBi.
- Stated limitations: array-factor model with no mutual coupling, no prototype or full-wave validation, a 1.7 dB margin at 50 degrees in the upper band, timings dependent on the MATLAB/GPU setup.

## Key technical points (ZH)

- 拼贴生成：通过局部翻转马尔可夫链生成网格图的完美匹配，据报比随机贪心基线快约 5.2 倍，水平/垂直多米诺数量接近平衡。
- 适应度：θ0 = 45 度下四个方位角扫描方向上平均方向性减平均副瓣电平（SLL）。在 20x20 口径上，Tabu 搜索相比 GA、SA 与 ILS 在方向性相当时 SLL 最低。
- CNN 门控：预测拼贴的多角度 SLL 是否有利；验证准确率 82.62%（20x20）至 92.47%（50x50）。被放行的候选仍做精确评估，因此误判只会漏掉好候选。
- 在 8,000 个候选的预算下，门控使完整评估减少 60.6-70.6%，对 20x20 至 100x100 口径的搜索加速 2.56-3.80 倍，适应度差异至多 0.14。
- 双频 LEO 阵列：36x36，648 个多米诺，阵元间距 11.71 mm；可扫描至 50 度且无栅瓣；50 度时峰值 SLL 在 11.2 GHz 为 -17.4 dB、14.0 GHz 为 -15.2 dB，目标为 -13.5 dB；轴向实现增益 34.24 与 36.46 dBi。
- 作者承认的局限：阵因子模型未含互耦，无样机或全波验证，高频段 50 度时余量仅 1.7 dB，耗时依赖 MATLAB/GPU 环境。

## Why it matters / what's new (EN)

The work shows a surrogate-gated search that lowers the cost of designing module-sparse phased arrays for Ku-band LEO terminals, with exact scoring retained for admitted candidates. All results are simulation-based.

## Why it matters / what's new (ZH)

该工作展示了一种代理模型门控的搜索方法，降低了为 Ku 频段 LEO 终端设计模块稀疏相控阵的成本，且被放行候选仍保留精确评分。所有结果均基于仿真。

## Images

None.
