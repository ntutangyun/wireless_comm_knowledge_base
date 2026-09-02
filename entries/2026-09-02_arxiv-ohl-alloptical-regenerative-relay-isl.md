---
id: 2026-09-02_arxiv-ohl-alloptical-regenerative-relay-isl
date_published: 2026-08-28
date_found: 2026-09-02
type: academic-paper
technology: satellite
title_en: "All-optical hard-limiter regenerative relaying closes most of the amplify-forward-vs-decode-forward gap on pointing-impaired multi-hop inter-satellite M-PAM links, with closed-form SER and a Markov end-to-end model"
title_zh: "全光硬限幅器再生中继在指向误差多跳星间 M-PAM 链路上大幅缩小放大转发与译码转发间的差距，并给出闭式误码率与端到端马尔可夫模型"
url: "https://arxiv.org/abs/2608.28864"
source_quality: full
topics: [inter-satellite-link, free-space-optical, optical-hard-limiter, M-PAM, multi-hop-relay, pointing-error, EDFA, Markov-chain, closed-form-SER]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 2
---

## Summary (EN)
Ghanbari, Dabiri, Ali, Ammuri, Hasna, Tavakkolnia, and Qaraqe address a design gap in multi-hop optical inter-satellite links (ISLs): amplify-and-forward (AF) relays stay all-optical and low-latency but let noise accumulate across hops, while decode-and-forward (DF) relays regenerate a clean signal but pay for it with optical-to-electrical-to-optical (O/E/O) conversion, latency, and onboard power. Their proposed relay makes symbol-level decisions directly in the optical intensity domain using a bank of parallel optical hard-limiters (OHLs), each comparing a split fraction of the received power against a fixed threshold; the pattern of thresholds crossed forms a thermometer code that is decoded straight into a regenerated, clean M-ary pulse-amplitude-modulation (M-PAM) symbol — no electrical conversion required.

Because pointing-induced fading (from platform vibration and beam misalignment) makes the received power's scale unpredictable even with a fixed threshold bank, the relay pairs the OHL decision stage with a block-wise variable-gain EDFA law that stabilizes the effective channel gain toward a target value, defining three regimes: a deep-fade outage region (gain saturates, decision collapses to the lowest symbol), a threshold-stable region where the OHL thresholds are placed exactly at the midpoints between the target-scaled M-PAM levels, and a too-strong-signal region where the gain floors out. The paper derives closed-form per-hop symbol-error-rate (SER) expressions (splitting the noise into a signal-ASE-dominant term and a constant-noise-dominant term, evaluated via incomplete gamma functions) and then models the chain of regenerated symbols across H hops as a finite-state Markov chain on the M-ary alphabet — because after each optical regeneration, the previous hop's analog noise is not carried forward as a waveform, only the discrete symbol decision is. The end-to-end SER falls out of the trace of the product of per-hop transition matrices (or, for identical hops, the matrix's eigenvalues raised to the H-th power).

Monte Carlo simulation, full numerical integration of the exact SER expression, and the closed-form formula agree closely across the tested range. At H=4 hops, M=4 PAM, and 25 dBm transmit power, the proposed relay reaches an end-to-end SER around 10^-5 — about 5 dB worse than an ideal DF relay but roughly 50x better than AF; at H=12 hops the gap to DF widens only modestly (proposed ~8x10^-5 vs. DF ~10^-6) while AF degrades to ~3x10^-2. Splitting a fixed 5,000 km total distance into more, shorter hops improves end-to-end SER faster than the extra regeneration steps add error, because shorter hops mean tighter beam-pointing tolerance relative to beam footprint. Pointing jitter is the dominant sensitivity: raising the angular jitter from 2 to 4 microradians raises the high-power SER floor by roughly 600x.

## Summary (ZH)
Ghanbari、Dabiri、Ali、Ammuri、Hasna、Tavakkolnia 与 Qaraqe 针对多跳光星间链路（ISL）中继设计中的一个空白展开研究：放大转发（AF）中继保持全光、低时延，但噪声会随跳数累积；译码转发（DF）中继能再生出干净信号，但代价是光-电-光（O/E/O）转换、时延与星上功耗。他们提出的中继直接在光强域做符号级判决——通过一组并联光硬限幅器（OHL），每路比较接收功率的一部分与固定门限，各门限被触发的模式构成温度计编码，直接译码为再生的、干净的 M 元脉冲幅度调制（M-PAM）符号，无需电域转换。

由于指向误差引起的衰落（平台振动与光束失准所致）会使接收功率的量级即便在固定门限组下也难以预测，该中继将 OHL 判决级与逐块可变增益 EDFA 律相配合，将有效信道增益稳定到目标值附近，并据此划分出三种工作区：深衰落中断区（增益饱和，判决塌缩为最低符号）、门限稳定区（OHL 门限恰好置于按目标值缩放后相邻 M-PAM 电平的中点）、以及信号过强区（增益触底）。论文推导了逐跳符号错误率（SER）的闭式表达式（将噪声拆分为信号-ASE 主导项与恒定噪声主导项，通过不完全伽马函数求值），随后将 H 跳中再生符号序列建模为在 M 元字母表上的有限状态马尔可夫链——因为每次光域再生后，前一跳的模拟噪声不会作为波形分量继续传递，只有离散符号判决被延续。端到端 SER 由逐跳转移矩阵之积的迹给出（若各跳相同，则由该矩阵特征值的 H 次幂给出）。

蒙特卡洛仿真、精确 SER 表达式的完整数值积分与闭式公式在测试范围内高度吻合。在 H=4 跳、M=4 PAM、25 dBm 发射功率下，所提中继端到端 SER 约为 10^-5——比理想 DF 中继差约 5 dB，但比 AF 好约 50 倍；H=12 跳时与 DF 的差距仅小幅扩大（所提方案约 8x10^-5，DF 约 10^-6），而 AF 则退化至约 3x10^-2。在固定 5,000 公里总距离下拆分为更多、更短的跳段时，端到端 SER 的改善速度快于额外再生环节引入误差的速度，因为更短的跳段意味着相对于光斑更严格的对准容差。指向抖动是最主要的敏感因素：角抖动从 2 微弧度增至 4 微弧度，会使高功率区 SER 底噪抬升约 600 倍。

## Key technical points (EN)
- **Architecture:** all-optical regenerative relay = OHL bank (M-1 parallel comparators against fixed thresholds) + block-wise variable-gain EDFA, no O/E/O conversion; decision is a thermometer code mapped to a symbol count.
- **Channel model:** Gaussian-beam propagation + Rayleigh-distributed pointing-error radial displacement gives a channel-gain CDF F(h) = (h/A)^xi, xi = pointing-error severity parameter (beam radius^2 / (4 x hop-distance^2 x angular-jitter variance)).
- **Gain law:** receiver EDFA gain G(h) = clip[gamma0 / (h x transmit-EDFA-gain)] between G_min and G_max, defining outage / threshold-stable / gain-floor regimes with closed-form transition boundaries h_L, h_U.
- **Noise model:** four independent components (transmit-ASE, receive-ASE, background, implementation/thermal), aggregated into a per-symbol conditional Gaussian decision statistic.
- **Closed-form SER:** two-region variance partition (signal-ASE-dominant vs. constant-noise-dominant) evaluated via incomplete gamma functions; validated against Monte Carlo and full numerical integration.
- **End-to-end model:** regenerated symbols form a finite-state Markov chain across hops; end-to-end SER = 1 - trace(product of per-hop transition matrices)/M, or eigenvalue-based for identical hops.
- **Headline numbers:** H=4, M=4, 25 dBm: proposed ~10^-5 SER vs. DF ~10^-6 (5 dB gap) vs. AF ~10^-3 (50x worse); H=12: proposed ~8x10^-5 vs. DF ~10^-6 vs. AF ~3x10^-2. Increasing hop count over a fixed total distance improves SER (shorter hops = tighter pointing tolerance relative to beam footprint). Angular jitter 2 to 4 microradians raises the SER floor ~600x.
- **Sim parameters:** wavelength 1550 nm, hop distance 500-600 km, beam waist 0.0675 m, receive aperture 0.05 m, pointing jitter 1-4 microrad, M in {4,8,16}, transmit power -15 to +25 dBm, up to H=12 hops.
- **Not shown:** no atmospheric turbulence, no correlated-channel-across-hops modeling, no relay-selection/routing optimization, no forward-error-correction exploiting the structured (nearest-neighbor) transition-matrix error pattern the authors flag as future work.

## Key technical points (ZH)
- **架构：** 全光再生中继 = OHL 组（M-1 路并联比较器，对比固定门限）+ 逐块可变增益 EDFA，无需 O/E/O 转换；判决为温度计编码，映射为符号计数。
- **信道模型：** 高斯光束传播 + 瑞利分布指向误差径向位移，给出信道增益 CDF F(h) = (h/A)^xi，xi 为指向误差严重度参数（光斑半径平方 /（4 x 跳距平方 x 角抖动方差））。
- **增益律：** 接收端 EDFA 增益 G(h) = clip[gamma0 /（h x 发射端 EDFA 增益）] 在 G_min 与 G_max 之间截断，划定中断区/门限稳定区/增益触底区，并给出闭式转移边界 h_L、h_U。
- **噪声模型：** 四个独立分量（发射端 ASE、接收端 ASE、背景噪声、实现/热噪声）汇总为每符号条件高斯判决统计量。
- **闭式 SER：** 二区间方差划分（信号-ASE 主导 vs. 恒定噪声主导），通过不完全伽马函数求值；与蒙特卡洛及完整数值积分验证一致。
- **端到端模型：** 各跳再生符号构成有限状态马尔可夫链；端到端 SER = 1 -（逐跳转移矩阵之积的迹）/M，各跳相同时可用特征值表达。
- **关键数值：** H=4、M=4、25 dBm 下：所提方案约 10^-5，DF 约 10^-6（差距 5 dB），AF 约 10^-3（差 50 倍）；H=12 时：所提方案约 8x10^-5，DF 约 10^-6，AF 约 3x10^-2。固定总距离下增加跳数可改善 SER（更短跳段意味着相对光斑更严格的对准容差）。角抖动从 2 增至 4 微弧度，使 SER 底噪抬升约 600 倍。
- **仿真参数：** 波长 1550nm，跳距 500-600 公里，发射光斑半径 0.0675m，接收孔径 0.05m，指向抖动 1-4 微弧度，M∈{4,8,16}，发射功率 -15 至 +25 dBm，最多 H=12 跳。
- **未涉及：** 未建模大气湍流、未建模跨跳信道相关性、未做中继选择/路由优化，也未针对作者指出的转移矩阵中"最近邻"结构化误差模式设计前向纠错方案（列为未来工作）。

## Why it matters / what's new (EN)
The KB's optical-ISL entries so far (sub-THz/optical relay surveys, hybrid fiber-FSO backhaul) have stayed mostly at the link-budget or architecture-survey level. This is the first entry with a concrete, closed-form regenerative-relay design that sits deliberately between AF and DF: it keeps the "no E/O conversion" latency and complexity advantage of AF while suppressing the noise-accumulation problem that makes AF unusable past a few hops, closing most (though not all) of the gap to DF. The Markov-chain end-to-end model is the reusable mechanism here — because optical regeneration discards the analog noise waveform at every hop and forwards only a discrete symbol, multi-hop SER reduces to a matrix trace/eigenvalue calculation instead of a per-hop noise-cascade simulation, which is a cheap way to evaluate large constellations' relay chains at design time. The reported structured (nearest-neighbor) error pattern in the transition matrix is also a concrete hook for a future entry on FEC/interleaving tuned to this relay's specific error statistics.

## Why it matters / what's new (ZH)
知识库此前的光学 ISL 相关条目（亚太赫兹/光学中继综述、光纤-FSO 混合回传）多停留在链路预算或架构综述层面。本条目是第一篇给出具体、闭式的再生中继设计、且刻意定位于 AF 与 DF 之间的条目：它保留了 AF"无需 E/O 转换"的低时延与低复杂度优势，同时抑制了使 AF 在跳数增多后即不可用的噪声累积问题，从而缩小（但未完全消除）与 DF 的差距。这里值得记住的可复用机制是端到端马尔可夫链模型——由于光域再生在每一跳都丢弃了模拟噪声波形、仅传递离散符号判决，多跳 SER 计算被简化为矩阵求迹/特征值运算，而非逐跳噪声级联仿真，这为在设计阶段评估大型星座中继链路提供了低成本手段。论文报告的转移矩阵中结构化（最近邻）误差模式，也为未来关于针对该中继特定误差统计量身定制 FEC/交织方案的条目提供了具体线索。
