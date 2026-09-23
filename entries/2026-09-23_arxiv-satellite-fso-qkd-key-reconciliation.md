---
id: 2026-09-23_arxiv-satellite-fso-qkd-key-reconciliation
date_published: 2026-09-22
date_found: 2026-09-23
technology: satellite
type: academic-paper
title_en: "Key Reconciliation with RC-LDPC/Error Estimation for Satellite-based FSO/QKD Systems"
title_zh: "面向卫星 FSO/QKD 系统的 RC-LDPC 密钥协调与误码率估计方法"
url: "https://arxiv.org/abs/2609.25646"
source_quality: full
topics: [QKD, FSO, key-reconciliation, RC-LDPC, Starlink, secret-key-throughput]
topic_primary: leo-constellations
novelty_score: 3
---

## Summary (EN)

Nguyen, Le, Jaiswal, R., and Pham (University of Aizu, IIT Roorkee, IIT Indore) published this paper (accepted to IEEE Transactions on Vehicular Technology, DOI 10.1109/TVT.2026.3725740) on 2026-09-22. It addresses key reconciliation — the post-processing step that turns a satellite quantum key distribution (QKD) link's noisy, correlated raw keys into an identical secret key — for satellite-based free-space-optical (FSO) QKD, where fluctuating quantum bit-error rates (QBER) caused by weather, atmospheric turbulence, and satellite mobility make the usual "blind" adaptive-rate reconciliation (which starts from a high code rate and iterates down on failure) costly in communication rounds and latency.

The proposed scheme combines protograph rate-compatible LDPC (RC-LDPC) codes — a nested-syndrome code family spanning five rates (0.9 to 0.5) at 10,000- and 40,000-bit block lengths — with a syndrome-based QBER estimator that predicts the needed code rate directly from a minimum-row-weight syndrome subset, without disclosing extra information, so fewer reconciliation rounds are needed than with blind rate iteration. The authors develop what they describe as the first end-to-end analytical secret-key-throughput (SKT) framework that accounts for imperfect QBER estimation (via a closed-form misestimation probability derived from the incomplete beta function) alongside a full FSO channel model (cloud attenuation, Gamma-Gamma turbulence, pointing-error loss), and find that an Exponentiated Weibull distribution fits the simulated block-wise QBER distribution with R-squared above 0.99, enabling closed-form SKT computation. In a case study built from a real Starlink-1293 pass geometry over Japan (23 Dec 2021) with a moving ground-vehicle receiver, the proposed scheme outperforms blind reconciliation across the tested cloud-liquid-water range (e.g. roughly 2.4 vs 1.6 Mbps at 5 mg/m3 for 40,000-bit blocks, read from Fig. 9a), with larger gains at higher public-channel rates and more code rates; error estimation reduces the number of required communication rounds; imperfect QBER estimation itself costs roughly 14% SKT with m_d=100, shrinking to roughly 7% with m_d=500, at public-channel rates above ~0.5 Gbps (Fig. 11).

## Summary (ZH)

Nguyen、Le、Jaiswal、R. 与 Pham（会津大学、印度理工学院鲁尔基分校、印度理工学院印多尔分校）于 2026 年 9 月 22 日发表本文（已被 IEEE Transactions on Vehicular Technology 接收，DOI 10.1109/TVT.2026.3725740）。文章针对卫星自由空间光（FSO）量子密钥分发（QKD）中的密钥协调问题——即把卫星 QKD 链路中带噪声、相关的原始密钥后处理为完全一致的最终密钥这一步骤——展开研究：由于天气、大气湍流及卫星机动性导致量子误码率（QBER）剧烈波动，常规"盲"自适应速率协调（从高码率起步、失败后逐步降低码率）会带来较多通信轮次和延迟开销。

该方案将原型图速率兼容 LDPC（RC-LDPC）码（一种嵌套校验子结构、覆盖 0.9 至 0.5 五档码率、分组长度为 10000 及 40000 比特的码族）与一种基于校验子的 QBER 估计方法相结合：后者利用最小行重校验子子集直接预测所需码率，且无需额外信息披露，从而比盲目逐档尝试码率所需的协调轮次更少。作者构建了他们所称的首个端到端解析式密钥安全吞吐量（SKT）框架，该框架同时考虑了不完美 QBER 估计的影响（通过基于不完全贝塔函数推导的闭式误估计概率）以及完整的 FSO 信道模型（云层衰减、Gamma-Gamma 湍流、指向误差损耗），并发现指数化 Weibull 分布可以以高于 0.99 的 R² 拟合仿真得到的分组级 QBER 分布，从而实现 SKT 的闭式计算。在一项基于 2021 年 12 月 23 日 Starlink-1293 卫星过境日本上空、地面接收端为移动车辆的真实案例研究中，所提方案在所测试的云液态水含量范围内均优于传统盲协调（例如在 5 mg/m³、40000 比特分组长度下约为 2.4 对 1.6 Mbps，读自 Fig. 9a），且在公共信道速率更高、码率档位更多时增益更大；误码率估计减少了所需的通信轮次；不完美 QBER 估计本身在公共信道速率高于约 0.5 Gbps 时（Fig. 11），在 m_d=100 时约造成 14% 的 SKT 损失，在 m_d=500 时降至约 7%。

## Key technical points (EN)

- **Scheme**: protograph RC-LDPC codes (5 rates, 0.9-0.5; block lengths 10,000/40,000 bits) combined with a syndrome-based QBER estimator (closed-form estimator rho-hat = phi^-1(w)) that lets the sender predict the needed code rate directly, reducing the number of required communication rounds versus blind reconciliation.
- **SKT framework**: models secret-key throughput over a full superframe (quantum phase + post-processing phase), incorporating mutual-information terms for the legitimate pair and an eavesdropper, plus a full FSO channel model with cloud attenuation, Gamma-Gamma turbulence, and pointing-error loss; misestimation probability derived in closed form via the incomplete beta function.
- **QBER distribution fit**: tested Normal, Log-Normal, Weibull, and Exponentiated Weibull against 10,000 simulated samples per scenario; Exponentiated Weibull achieved R-squared above 0.99 across parameter settings, enabling closed-form SKT computation without per-scenario Monte Carlo.
- **Starlink-1293 case study (23 Dec 2021, Japan pass, moving ground vehicle)**: the proposed scheme outperforms blind reconciliation across the tested cloud-liquid-water range (e.g. roughly 2.4 vs 1.6 Mbps at 5 mg/m3 for 40,000-bit blocks, read from Fig. 9a), with larger gains at higher public-channel rates and more code rates; error estimation reduces the number of required communication rounds; imperfect estimation costs roughly 14% SKT with m_d=100, shrinking to roughly 7% with m_d=500, at public-channel rates above ~0.5 Gbps (Fig. 11).
- **Design guidance**: the case study selects a transmit power of 25 dBm for t in [80, 160] s and 28 dBm otherwise, and a modulation-depth range, to balance the legitimate receiver's QBER against the eavesdropper's information gain, plus a minimum public-channel rate (~0.5 Gbps) needed to sustain target SKT before propagation delay dominates.

## Key technical points (ZH)

- **方案设计**：将原型图 RC-LDPC 码（5 档码率 0.9-0.5，分组长度 10000/40000 比特）与基于校验子的 QBER 估计方法（闭式估计量 ρ̂ = φ⁻¹(w)）结合，使发送方可直接预测所需码率，相较盲协调减少所需的通信轮次。
- **SKT 框架**：对完整超帧（量子阶段+后处理阶段）的密钥安全吞吐量建模，纳入合法双方及窃听者的互信息项，并结合包含云层衰减、Gamma-Gamma 湍流及指向误差损耗的完整 FSO 信道模型；误估计概率通过不完全贝塔函数以闭式给出。
- **QBER 分布拟合**：对每种场景使用 10000 个仿真样本，分别测试正态、对数正态、Weibull 及指数化 Weibull 分布的拟合效果；指数化 Weibull 在各参数设置下均取得高于 0.99 的 R²，从而无需针对每个场景单独进行蒙特卡洛仿真即可闭式计算 SKT。
- **Starlink-1293 案例研究（2021 年 12 月 23 日，日本上空过境，地面接收端为移动车辆）**：所提方案在所测试的云液态水含量范围内均优于传统盲协调（例如在 5 mg/m³、40000 比特分组长度下约为 2.4 对 1.6 Mbps，读自 Fig. 9a），且在公共信道速率更高、码率档位更多时增益更大；误码率估计减少了所需的通信轮次；不完美估计在公共信道速率高于约 0.5 Gbps 时（Fig. 11），在 m_d=100 时约造成 14% 的 SKT 损失，在 m_d=500 时降至约 7%。
- **设计指导**：案例研究中在 t∈[80, 160] 秒时段选择发射功率为 25 dBm，其余时段为 28 dBm，并选定相应调制深度范围，以平衡合法接收方的 QBER 与窃听者的信息增益，并给出维持目标 SKT 所需的最低公共信道速率（约 0.5 Gbps），超过该速率后传播时延将成为主导因素。

## Why it matters / what's new (EN)

The KB's satellite-quantum thread so far has one entry on quantum-network routing over Starlink TLE data (2609.19561, ingested 2026-09-18); this paper covers the complementary post-processing layer — key reconciliation — with a case study using a real Starlink-1293 pass geometry (from its TLE), and its own claim of a first end-to-end SKT framework that jointly accounts for imperfect QBER estimation and full atmospheric channel effects gives this KB's growing satellite-QKD coverage a concrete, quantified throughput-and-latency benchmark rather than only a routing-layer perspective.

## Why it matters / what's new (ZH)

知识库中关于卫星量子通信的条目此前有一篇涉及基于 Starlink 轨道数据的量子网络路由（2609.19561，于 2026-09-18 收录）；本文覆盖的是与之互补的后处理层——密钥协调，并采用基于 Starlink-1293 真实轨道（TLE）几何的案例研究进行验证。论文自称构建了首个同时考虑不完美 QBER 估计与完整大气信道效应的端到端 SKT 框架，为知识库中日益增多的卫星 QKD 相关条目提供了一个具体、量化的吞吐量与时延基准，而不仅仅是路由层视角。

## Images

None.
