---
id: 2026-09-03_arxiv-space-generative-ai-solar-harvesting
date_published: 2026-09-01
date_found: 2026-09-03
type: academic-paper
technology: satellite
title_en: "Space Generative AI with Solar Energy Harvesting"
title_zh: "太阳能采集驱动的空间生成式 AI"
url: "https://arxiv.org/abs/2609.01062"
source_quality: full
topics: [generative-AI, diffusion-model, DDIM, solar-energy-harvesting, onboard-computing, computation-communication-tradeoff, Lambert-W, closed-form-policy, orbital-computing]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)
Zhang, Huang, Wang and Huang (The University of Hong Kong) study a solar-powered satellite that runs an onboard latent diffusion model (LDM) to generate text-to-image content for remote-region users and must then transmit the result to the ground before an energy or deadline budget runs out. The paper's stated problem is a **computation-communication trade-off unique to orbital solar harvesting**: running more DDIM denoising steps improves the onboard CLIP similarity score of the generated image (their tractable proxy for semantic quality) but consumes energy and time that would otherwise be available for downlink transmission, while the satellite's harvested power follows a predictable but non-monotonic profile — a cosine-shaped sunlit phase, zero power during eclipse, and a second cosine-shaped sunlit phase — driven purely by orbital geometry rather than by any control decision.

The authors first solve a pure communication-throughput maximization problem (fixed generation depth n): they prove a **separation principle** showing the optimal waiting time before starting generation should always be the earliest energy-feasible value, decoupling it from the transmit-power policy; the optimal cumulative transmission energy then equals the lower convex envelope of the residual available-energy curve, yielding constant-power control when the harvested-energy curve is concave (task confined to one sunlit half) and a piecewise constant-then-cosine-tracking policy when the task spans an eclipse-to-sunlight transition. Building on this, they formulate the **joint C² utility-maximization problem** — maximizing a weighted sum of CLIP score and delivered throughput over the discrete DDIM step count n plus the continuous waiting-time/power policy — and prove that in the dominant constant-power regime the utility is concave in n, giving a **closed-form step-selection policy expressed via the Lambert W function** (the principal branch W0 in the communication-dominant, communication-abundant case ΔE > 0, and the secondary branch W−1 in the computation-dominant case), reducing online decision complexity from O(|steps|) exhaustive search to O(1).

Evaluated against fixed computation-centric (n=10, max steps) and fixed communication-centric (n=4, min steps) baselines plus an exhaustive-search ground truth, the closed-form policy tracks the exhaustive-search optimum across sweeps of the quality-throughput weighting λ, initial energy, deadline and bandwidth. Across the orbital cycle it interpolates correctly at both extremes — approaching the communication-centric baseline in low-energy regimes (avoiding transmission failure) and the computation-centric baseline in high-energy regimes (maximizing generation quality) — with the largest end-to-end CLIP-score gain over both fixed baselines occurring in the moderate-energy middle regime; during eclipse specifically, the fixed computation-centric baseline's transmission fails outright (CLIP score drops to zero) while the proposed policy scales back denoising steps to preserve a non-zero deliverable image.

## Summary (ZH)
香港大学的 Zhang、Huang、Wang 与 Huang 研究一颗太阳能供电卫星：它在星上运行潜在扩散模型（LDM）为偏远地区用户生成文本到图像内容，并须在能量或时限预算耗尽前将结果传回地面。论文提出的问题是**轨道太阳能采集所特有的计算-通信权衡**：增加 DDIM 去噪步数可提升生成图像的星上 CLIP 相似度分数（作者用作语义质量的可计算代理指标），但会消耗原本可用于下行传输的能量与时间；而卫星采集到的功率遵循一条可预测但非单调的曲线——余弦形光照段、日食期间为零、再进入第二段余弦形光照段——完全由轨道几何决定，与任何控制决策无关。

作者首先求解一个纯通信吞吐量最大化问题（固定生成深度 n）：证明了一条**分离原理**，即开始生成前的最优等待时间应始终取能量可行的最早取值，从而与传输功率策略解耦；随后最优累计传输能量等于剩余可用能量曲线的下凸包络，当采集能量曲线为凹（任务局限于单段光照期内）时给出恒功率控制，当任务跨越日食-光照转换时给出"先恒功率后余弦跟踪"的分段策略。在此基础上，作者提出**联合 C² 效用最大化问题**——在离散 DDIM 步数 n 与连续的等待时间/功率策略上，最大化 CLIP 分数与传输吞吐量的加权和——并证明在主导的恒功率区间内该效用关于 n 是凹函数，从而给出**以 Lambert W 函数表达的闭式步数选择策略**（通信为约束资源时取主分支，计算为约束资源时取次分支），将在线决策复杂度从 O(|步数|) 的穷举搜索降至 O(1)。

相对固定"以计算为中心"（n=10，最大步数）与固定"以通信为中心"（n=4，最小步数）两条基线，以及穷举搜索给出的真值，闭式策略在质量-吞吐量权重 λ、初始能量、时限与带宽等参数扫描中均能贴合穷举搜索的最优解。在整个轨道周期内，该策略在两个极端场景下均能正确收敛——低能量区间趋近于以通信为中心的基线（避免传输失败），高能量区间趋近于以计算为中心的基线（最大化生成质量）——而相对两条固定基线的端到端 CLIP 分数增益在能量适中的中间区间最大；尤其在日食期间，固定"以计算为中心"基线的传输彻底失败（CLIP 分数降为零），而所提策略会主动削减去噪步数，以保住一张非零的可交付图像。

## Key technical points (EN)
- **System model:** anti-nadir-mounted solar panel, orbital power profile P(t) = P0·cos(ωt) during two sunlit phases separated by a zero-power eclipse; onboard LDM text-to-image pipeline (text encoder → n-step DDIM denoising in latent space → VAE decode); linear generation-time model t2 = c1·n + c2 at fixed 300 W compute power; downlink modeled via Shannon capacity r(t) = B·log2(1 + Pcomm(t)·g(t)/(N0B)).
- **Metrics:** onboard CLIP score S(n) ≈ c3·n + c4 (quality proxy, increasing in steps) and delivered throughput R = ∫r(τ)dτ (communication proxy) — the paper's tractable stand-ins for "generation quality" and "transmission reliability."
- **Problem 1 (throughput maximization, fixed n):** Proposition 1 (separation principle) — optimal waiting time t1* is the earliest energy-feasible value, decoupling waiting-time choice from power-policy optimization; Theorem 1 shows optimal cumulative transmission energy is the lower convex envelope of residual available energy, giving constant-power control in the concave (single-sunlit-phase) case and a piecewise constant/cosine-tracking policy in the convex (eclipse-spanning) case.
- **Problem 3 (joint C² utility maximization):** Proposition 2 decomposes the mixed discrete-continuous problem into an outer search over n with the P1 subproblem solved per candidate; Corollary 1 shows utility is concave in n in the dominant constant-power regime; Theorem 2 gives the closed-form solution via the Lambert W function (principal branch W0 when communication-abundant, secondary branch W-1 when computation-abundant), cutting online complexity from O(|steps set|) to O(1).
- **Evaluation setup:** compute power 300 W, bandwidth 5 kHz, task window T = 3 s, DDIM steps ∈ {4,...,10}, solar panel area 2.0 m², initial energy E0 = 400 J, Sun-synchronous LEO orbital parameters, 12 GHz downlink carrier with 53 dB transmit gain; baselines are exhaustive search, fixed computation-centric (n=10) and fixed communication-centric (n=4).
- **Headline results:** closed-form step count tracks the exhaustive-search optimum across λ/energy/deadline/bandwidth sweeps; largest end-to-end CLIP-score gain over both fixed baselines occurs in the moderate-energy middle regime; during eclipse the computation-centric baseline's delivered CLIP score collapses to zero (transmission failure) while the proposed policy preserves a non-zero score by adaptively reducing denoising depth; without solar energy harvesting at low initial energy, computation-centric fails to complete transmission at all.

## Key technical points (ZH)
- **系统模型：** 背地固定安装的太阳能板，轨道功率曲线 P(t)=P0·cos(ωt)，两段光照期间被一段零功率日食隔开；星上 LDM 文本到图像流程（文本编码器 → 潜空间 n 步 DDIM 去噪 → VAE 解码）；固定 300 W 计算功率下的线性生成时间模型 t2=c1·n+c2；下行链路以香农容量建模 r(t)=B·log2(1+Pcomm(t)·g(t)/(N0B))。
- **指标：** 星上 CLIP 分数 S(n)≈c3·n+c4（质量代理指标，随步数递增）与交付吞吐量 R=∫r(τ)dτ（通信代理指标）——论文用以表征"生成质量"与"传输可靠性"的可计算替代量。
- **问题一（固定 n 的吞吐量最大化）：** 命题 1（分离原理）——最优等待时间 t1* 取能量可行的最早值，使等待时间选择与功率策略优化解耦；定理 1 表明最优累计传输能量等于剩余可用能量的下凸包络，在凹（单段光照期内）情形给出恒功率控制，在凸（跨日食）情形给出"先恒功率、后余弦跟踪"的分段策略。
- **问题三（联合 C² 效用最大化）：** 命题 2 将混合离散-连续问题分解为对 n 的外层搜索，每个候选 n 下求解问题一子问题；推论 1 证明在主导的恒功率区间内效用关于 n 为凹函数；定理 2 给出以 Lambert W 函数表达的闭式解（通信资源充裕时取主分支 W0，计算资源充裕时取次分支 W-1），将在线复杂度从 O(|步数集合|) 降至 O(1)。
- **评估设置：** 计算功率 300 W，带宽 5 kHz，任务窗口 T=3 秒，DDIM 步数 ∈ {4,…,10}，太阳能板面积 2.0 平方米，初始能量 E0=400 焦耳，太阳同步 LEO 轨道参数，12 GHz 下行载波、53 dB 发射增益；基线为穷举搜索、固定"以计算为中心"（n=10）与固定"以通信为中心"（n=4）。
- **主要结果：** 闭式步数选择在 λ、能量、时限、带宽等参数扫描中均贴合穷举搜索最优解；相对两条固定基线的端到端 CLIP 分数增益在能量适中的中间区间最大；日食期间，"以计算为中心"基线的交付 CLIP 分数直接归零（传输失败），而所提策略通过自适应削减去噪深度保住非零分数；在初始能量较低且无太阳能采集时，"以计算为中心"基线完全无法完成传输。

## Why it matters / what's new (EN)
This knowledge base's satellite-AI coverage has an active orbital-computing thread (06-13 space-data-center placement survey, 08-03 Stride in-orbit edge computing, 08-17 dual-layer OTA federated learning, 08-18 orbital-AI-computing carbon accounting, 08-24 BUPT in-orbit AI infrastructure case studies, 08-26 SatDL data-redistribution training) that has so far covered inference/training workloads and their energy/carbon footprint, but not generative AI specifically. This is this knowledge base's first entry pairing an onboard generative model (latent diffusion, text-to-image) with the constraint that dominates every other orbital-computing entry here — solar energy availability — and the first to derive a closed-form (Lambert-W) online policy for a joint generation-depth/transmit-power decision rather than a learned or heuristic controller, complementing the thread's mostly empirical/systems-measurement entries with a theoretically grounded control-policy contribution.

## Why it matters / what's new (ZH)
本知识库的卫星 AI 板块已有一条活跃的在轨计算脉络（06-13 空间数据中心选址综述、08-03 Stride 在轨边缘计算、08-17 双层空对空联邦学习、08-18 在轨 AI 计算碳核算、08-24 北邮在轨 AI 基础设施实测案例、08-26 SatDL 数据再分配训练），此前覆盖的是推理/训练负载及其能耗与碳足迹，但尚未涉及生成式 AI。本条目是知识库中首个将星上生成模型（潜在扩散、文本到图像）与该板块几乎所有在轨计算条目共同面对的约束——太阳能可用性——结合起来的条目，也是首个针对"生成深度/发射功率"联合决策给出闭式（Lambert W）在线策略、而非学习式或启发式控制器的条目，为这一脉络此前以实测/系统度量为主的内容补充了一个理论基础扎实的控制策略贡献。

## Images

None.
