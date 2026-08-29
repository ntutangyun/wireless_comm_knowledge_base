---
id: 2026-08-29_arxiv-fr3-mixer-first-receiver-tradeoffs
date_published: 2026-08-23
date_found: 2026-08-29
type: academic-paper
technology: cellular
title_en: "Interference-Tolerant Mixer-First Receivers for FR3: Design Principles and Tradeoffs"
title_zh: "面向 FR3 的抗干扰 Mixer-First 接收机：设计原则与折中"
url: "https://arxiv.org/abs/2608.22647"
source_quality: full
topics: [FR3, upper-mid-band, mixer-first-receiver, N-path-filter, harmonic-rejection, blocker-tolerance, IIP3, noise-figure, LO-phase-noise, RF-frontend, 6G]
topic_primary: cellular-spectrum
topics_secondary: [6g-vision, 5g-nr]
novelty_score: 2
---

## Summary (EN)

Everything the industry says it wants from FR3 — the 7.125-24.25 GHz upper mid-band that is supposed to bridge sub-6 GHz coverage and mmWave capacity — depends on a receiver that does not exist yet in production form. FR3 is not a clean band. It is fragmented into non-contiguous sub-bands shared with incumbent satellite, radar and radio-astronomy services (the NTIA's initial US study focus is 7.125-8.4 GHz), so a 6G radio operating there must hop across fragments while surviving strong nearby blockers, and must do it with modulation bandwidths in the hundreds of megahertz. Mixer-first receivers — which drop the low-noise amplifier entirely and let an N-path switching mixer present a frequency-translated baseband impedance at the RF port — are the natural architecture for that job, because their selectivity tunes with the local oscillator instead of with fixed RF resonators. This paper is the systematic treatment of what happens when you actually try to build one at FR3.

The organizing insight is that the frequency-translational property lets you implement selectivity, linearization and noise cancellation *at baseband* and have them appear at RF. That is what makes frequency-agile FR3 operation feasible at all. The price is that the dominant design constraints migrate: they stop being RF-filter problems and become mixer parasitics, baseband circuit robustness and multi-phase clock generation. Nearly every technique the paper surveys — higher-order baseband impedance synthesis, cascaded N-path filtering, active and passive harmonic rejection, bottom-plate mixing, clock boosting and bootstrapping, linearized baseband amplifiers, RF and baseband noise cancellation — works well at sub-6 GHz and degrades at FR3 through one of those three channels.

The quantitative picture the survey assembles is unusually concrete about limits. Selectivity: active baseband impedance synthesis reaches 40-80 dB/dec roll-off, but multi-loop stability and blocker-driven baseband nonlinearity erode it, and higher-order baseband impedance is preferred over cascaded N-path filters at FR3 because it tolerates parasitics and switch loss better. Harmonic rejection: 35-42 dB for a plain eight-phase mixer at 0.5 GHz, 60-70 dB with RF weighting plus cascaded N-path filters, >80 dB with digital adaptive cancellation, ~45-50 dB for passive charge-sharing approaches below 4 GHz — but all of it depends on eight accurate 12.5%-duty-cycle clock phases, which get harder as frequency rises. Linearity: best reported in-band IIP3 of 18 dBm at 8 GHz (clock bootstrapping plus baseband amplifier linearization), out-of-band IIP3 of 44 dBm at Δf/BW = 12 (bottom-plate mixing), third-harmonic blocker P1dB of 14 dBm at 1 GHz (passive harmonic rejection). Noise: 1.5-2.0 dB NF for RF noise-cancelling designs below 3 GHz, but 4.0-6.0 dB across 1-8 GHz in 22 nm FDSOI with clock bootstrapping, and 4.2 dB across the 12.3-14.5 GHz FR3 band in 16 nm FinFET with a harmonically enhanced Class-F oscillator.

The clock is where FR3 bites hardest, and the paper makes the scaling explicit. Divider-based non-overlapping generation needs an input at 4x the LO for eight phases — 40 GHz for a 10 GHz LO. Measured clock power runs 7 mW/GHz at 1 GHz and 4.7 mW/GHz at 6 GHz in 28 nm CMOS, so clock generation becomes the dominant power consumer as FR3 frequencies rise. Worse, third-harmonic rejection degrades as HR3 = tan²(π/8) / [(σ_A/12)² + (σ_φ/4)²], meaning HR3 falls about 6 dB whenever either the frequency or the RMS timing jitter doubles; because VCO power scales as 1/σ_j⁴, holding 50 fs of jitter at 8 GHz costs roughly 16x the oscillator power it costs at 4 GHz. Overlapping-phase generation via passive polyphase networks and phase interpolation avoids the high-speed dividers (input at f_LO rather than 4·f_LO) at the cost of charge loss between overlapping phases, which degrades gain and noise figure unless mitigated with inductive/reactive networks.

The design guidance that falls out is coherent: push selectivity, linearity and noise cancellation to baseband and let frequency translation carry them to RF; prefer eight-phase *overlapping* clock generation to keep the input clock rate and power down; prefer passive harmonic rejection over active RF weighting because it adds fewer lossy switches; use on-chip inductors and transformers, which are higher-Q and physically smaller at FR3, to resonate out parasitic capacitance, provide passive gain and act as harmonic traps; and budget for clock generation as the dominant power line item from the start.

## Summary (ZH)

业界对 FR3（7.125–24.25 GHz 上中频段，被寄望于衔接 sub-6 GHz 的覆盖与毫米波的容量）的全部期待，都依赖于一种目前尚无量产形态的接收机。FR3 不是一段干净的频谱。它被切成多个不连续子带，与在用的卫星、雷达和射电天文业务共享（美国 NTIA 的首批研究重点是 7.125–8.4 GHz），因此在该频段工作的 6G 射频必须在碎片之间跳变、同时扛住近端强阻塞信号，而且要在数百兆赫兹的调制带宽下做到这一切。Mixer-first 接收机——干脆去掉低噪放，让 N 路开关混频器在射频端口呈现一个被频率搬移的基带阻抗——正是这项任务的天然架构，因为它的选择性随本振调谐，而不是靠固定的射频谐振器。这篇论文系统处理的，正是当你真的试图在 FR3 上把它做出来时会发生什么。

贯穿全文的核心洞察是：频率搬移特性让你可以在**基带**实现选择性、线性化与噪声抵消，并让它们在射频端呈现出来。这才使得频率捷变的 FR3 工作成为可能。代价是主导性的设计约束发生了迁移：它们不再是射频滤波器问题，而变成了混频器寄生、基带电路鲁棒性与多相时钟产生。论文梳理的几乎每一项技术——高阶基带阻抗综合、级联 N 路滤波、有源与无源谐波抑制、底极板混频、时钟升压与自举、线性化基带放大器、射频与基带噪声抵消——在 sub-6 GHz 都工作良好，而到了 FR3 都会通过上述三条通道之一而劣化。

论文汇总的定量图景对"边界在哪里"说得异常具体。选择性：有源基带阻抗综合可达 40–80 dB/dec 的滚降，但多环路稳定性与阻塞信号引起的基带非线性会侵蚀它；在 FR3 上高阶基带阻抗优于级联 N 路滤波器，因为前者对寄生与开关损耗的容忍度更高。谐波抑制：0.5 GHz 处普通八相混频器为 35–42 dB，加射频加权与级联 N 路滤波器可达 60–70 dB，数字自适应抵消可超过 80 dB，4 GHz 以下的无源电荷共享方案约为 45–50 dB——但这一切都依赖八路精确的 12.5% 占空比时钟相位，而频率越高越难维持。线性度：已报道的最佳带内 IIP3 为 8 GHz 处 18 dBm（时钟自举加基带放大器线性化），带外 IIP3 为 Δf/BW = 12 时 44 dBm（底极板混频），三次谐波阻塞 P1dB 为 1 GHz 处 14 dBm（无源谐波抑制）。噪声：3 GHz 以下射频噪声抵消方案可做到 1.5–2.0 dB 噪声系数，但 22 nm FDSOI 加时钟自举在 1–8 GHz 为 4.0–6.0 dB，16 nm FinFET 配谐波增强 Class-F 振荡器在 12.3–14.5 GHz 的 FR3 频段为 4.2 dB。

时钟是 FR3 咬得最狠的地方，论文把这个标度关系写得很明确。基于分频器的非交叠相位产生，要八相就需要 4 倍本振的输入时钟——10 GHz 本振对应 40 GHz。28 nm CMOS 下实测时钟功耗为 1 GHz 处 7 mW/GHz、6 GHz 处 4.7 mW/GHz，因此随着 FR3 频率上升，时钟产生会成为接收机的功耗大头。更糟的是三次谐波抑制按 HR3 = tan²(π/8) / [(σ_A/12)² + (σ_φ/4)²] 退化，意味着频率翻倍或均方根定时抖动翻倍，HR3 就下降约 6 dB；而 VCO 功耗随 1/σ_j⁴ 变化，因此在 8 GHz 维持 50 fs 抖动所需的振荡器功耗，约为 4 GHz 处的 16 倍。用无源多相网络加相位内插产生交叠相位可以避开高速分频器（输入只需 f_LO 而非 4·f_LO），代价是相位交叠期间的电荷损失会劣化增益与噪声系数，除非用电感/电抗网络加以补偿。

由此得出的设计指引是自洽的：把选择性、线性度与噪声抵消推到基带，让频率搬移把它们带到射频；优先采用八相**交叠**时钟产生，以压低输入时钟频率与功耗；优先采用无源谐波抑制而非有源射频加权，因为前者引入的有损开关更少；充分利用片上电感与变压器（在 FR3 上 Q 值更高、面积更小）来谐振掉寄生电容、提供无源增益并充当谐波陷阱；并且从一开始就把时钟产生当作首要功耗项来做预算。

## Key technical points (EN)

- **FR3 context**: 7.125-24.25 GHz, fragmented and incumbent-dense (satellite, radar, radio astronomy); NTIA's initial US study range is 7.125-8.4 GHz. Wide fractional bandwidth plus ~400 MHz modulation bandwidth raises baseband dynamic-range demands.
- **Mixer-first principle**: N-path switching mixer driven by multiphase LO makes the RF-port impedance a frequency-translated copy of the baseband impedance; input matching approximately R_S ≈ R_sw + γ_N·Z_BB(0). No LNA, so there is no pre-mixer gain to mask downstream noise.
- **Central switch tradeoff**: wider switches lower on-resistance (less conduction loss and thermal noise) but raise parasitic capacitance and LO driver power (P_LO ≈ α·N·C_g·f_CK·V_CK²). Minimizing R_sw alone is not the right objective.
- **Selectivity**: dual negative/positive feedback networks give 40 dB/dec with tuning across 0.2-8.0 GHz; negative-RC dual-pole networks give 40-80 dB/dec. Higher-order baseband impedance is preferred at FR3 over cascaded N-path filters, which suffer from internal-node parasitics and the noise/nonlinearity of the required active isolation.
- **Harmonic rejection**: HRM with three sub-mixers at {0°, -45°, -90°} and weights {1, √2, 1} nominally cancels 3rd and 5th harmonics. Reported: 35-42 dB (basic eight-phase, 0.5 GHz), 60-70 dB (RF weighting + cascaded N-path), >80 dB (digital adaptive), 45-50 dB (passive charge-sharing, sub-4 GHz, with H3-B1dB of 14 dBm at 1 GHz).
- **Linearization**: bottom-plate mixing → +10 dB IB-IIP3 and +6 dB OOB-IIP3, but its baseband capacitor parasitics accumulate at the RF node. Clock boosting → boosting factor falls from 1.9 at 0.1 GHz to 1.5 at 3 GHz as recharge time shrinks. Clock bootstrapping → IB-IIP3 of 12-18 dBm over 1-8 GHz. Linearized baseband amplifier → high IB linearity across 10-35 GHz, at a direct NF penalty from the added matching resistance.
- **Best reported linearity**: IB-IIP3 18 dBm at 8 GHz; OOB-IIP3 44 dBm at Δf/BW = 12; H3-B1dB 14 dBm at 1 GHz.
- **Noise**: F = 1 + R_sw/R_s + (R_s+R_sw)²/(R_s·R_sh) + (R_s+R_sw)²/(γ_N·R_s·R_F) + k·R_n/R_s. RF noise cancellation → sub-2 dB NF over multi-octave bandwidths, blocker NF 4-5 dB, and HR3/HR5 lifted from 40 dB to 60 dB; baseband noise cancellation → 2.5-5 dB NF across 1-6 GHz. FR3-relevant results: 4.0-6.0 dB (1-8 GHz, 22 nm FDSOI), 4.2 dB (12.3-14.5 GHz, 16 nm FinFET), 2.4-4.7 dB (3.7-6.5 GHz, 45 nm SOI, eight-phase with 12.5% overlap).
- **Clock generation is the FR3 bottleneck**: eight non-overlapping phases need f_in = 4·f_CK (40 GHz for a 10 GHz LO). Measured 7 mW/GHz at 1 GHz and 4.7 mW/GHz at 6 GHz in 28 nm CMOS. HR3 = tan²(π/8)/[(σ_A/12)² + (σ_φ/4)²], so HR3 drops ~6 dB per doubling of frequency or jitter; since P_VCO ∝ 1/σ_j⁴, holding 50 fs at 8 GHz costs ~16x the VCO power needed at 4 GHz.
- **Overlapping phases** via passive polyphase networks and LO-rate phase interpolation need only f_in = f_LO, but overlap causes charge loss on the capacitors, degrading gain and NF unless inductive/reactive paths are added.
- **Stated design guidance**: implement selectivity/linearity/noise cancellation at baseband; prefer overlapping eight-phase clock generation; prefer passive over active harmonic rejection; exploit on-chip inductors/transformers (higher Q and smaller at FR3) to resonate parasitics, add passive gain and trap harmonics; budget clock generation as the dominant power consumer.

## Key technical points (ZH)

- **FR3 背景**：7.125–24.25 GHz，频段碎片化且在用业务密集（卫星、雷达、射电天文）；美国 NTIA 的首批研究范围是 7.125–8.4 GHz。大相对带宽加上约 400 MHz 的调制带宽，抬高了基带动态范围要求。
- **Mixer-first 原理**：由多相本振驱动的 N 路开关混频器，使射频端口阻抗成为基带阻抗的频率搬移版本；输入匹配近似为 R_S ≈ R_sw + γ_N·Z_BB(0)。由于没有低噪放，也就没有前级增益来掩盖后级噪声。
- **核心开关折中**：更宽的开关降低导通电阻（减少导通损耗与热噪声），但抬高寄生电容与本振驱动功耗（P_LO ≈ α·N·C_g·f_CK·V_CK²）。单纯最小化 R_sw 并不是正确目标。
- **选择性**：正负反馈双网络可给出 40 dB/dec 滚降并在 0.2–8.0 GHz 内调谐；负 RC 双极点网络可给出 40–80 dB/dec。在 FR3 上高阶基带阻抗优于级联 N 路滤波器，后者受内部节点寄生以及所需有源隔离的噪声与非线性拖累。
- **谐波抑制**：谐波抑制混频器用 {0°, -45°, -90°} 三个子混频器配 {1, √2, 1} 权重，理想情况下抵消三次与五次谐波。已报道结果：35–42 dB（0.5 GHz 基本八相）、60–70 dB（射频加权 + 级联 N 路）、>80 dB（数字自适应抵消）、45–50 dB（4 GHz 以下无源电荷共享，1 GHz 处三次谐波阻塞 P1dB 为 14 dBm）。
- **线性化**：底极板混频 → 带内 IIP3 +10 dB、带外 IIP3 +6 dB，但其基带电容寄生会累积到射频节点。时钟升压 → 升压系数从 0.1 GHz 的 1.9 降到 3 GHz 的 1.5，因为充电时间被压缩。时钟自举 → 1–8 GHz 内带内 IIP3 为 12–18 dBm。线性化基带放大器 → 在 10–35 GHz 保持高带内线性度，代价是新增匹配电阻的热噪声直接抬高噪声系数。
- **最佳线性度报道值**：8 GHz 处带内 IIP3 18 dBm；Δf/BW = 12 时带外 IIP3 44 dBm；1 GHz 处三次谐波阻塞 P1dB 14 dBm。
- **噪声**：F = 1 + R_sw/R_s + (R_s+R_sw)²/(R_s·R_sh) + (R_s+R_sw)²/(γ_N·R_s·R_F) + k·R_n/R_s。射频噪声抵消 → 多倍频程内噪声系数低于 2 dB，阻塞噪声系数 4–5 dB，并把 HR3/HR5 从 40 dB 提升到 60 dB；基带噪声抵消 → 1–6 GHz 内 2.5–5 dB。与 FR3 相关的结果：4.0–6.0 dB（1–8 GHz，22 nm FDSOI）、4.2 dB（12.3–14.5 GHz，16 nm FinFET）、2.4–4.7 dB（3.7–6.5 GHz，45 nm SOI，八相 12.5% 交叠）。
- **时钟产生是 FR3 的瓶颈**：八路非交叠相位需要 f_in = 4·f_CK（10 GHz 本振即 40 GHz）。28 nm CMOS 实测为 1 GHz 处 7 mW/GHz、6 GHz 处 4.7 mW/GHz。HR3 = tan²(π/8)/[(σ_A/12)² + (σ_φ/4)²]，因此频率或抖动每翻一倍，HR3 下降约 6 dB；又因 P_VCO ∝ 1/σ_j⁴，在 8 GHz 维持 50 fs 抖动所需 VCO 功耗约为 4 GHz 处的 16 倍。
- **交叠相位方案**：用无源多相网络加本振速率的相位内插，只需 f_in = f_LO，但相位交叠会造成电容上的电荷损失，劣化增益与噪声系数，除非引入电感/电抗通路补偿。
- **论文给出的设计指引**：把选择性/线性度/噪声抵消放到基带实现；优先采用交叠八相时钟产生；优先无源谐波抑制而非有源射频加权；利用片上电感与变压器（FR3 下 Q 更高、面积更小）谐振掉寄生、提供无源增益并充当谐波陷阱；从一开始就把时钟产生列为首要功耗项。

## Why it matters / what's new (EN)

The KB's FR3 shelf has been filling from the top down and is now noticeably missing its bottom layer. `2026-08-15_ntia-4-4ghz-study-cleared-four-band-6g-pipeline` and `2026-08-20_ntia-2-7ghz-relocation-plan-spectrumgov` cover the US federal band pipeline; `2026-06-13_arxiv-fr3-terrestrial-ntn-spectrum-sharing` and `2026-08-26_arxiv-upper-midband-spectrum-sharing-shades` study sharing and inter-operator cooperation in the band with ray tracing; `2026-06-09_arxiv-spectrum-aggregation-6g-ca-vs-dc` weighs aggregation strategies; `2026-07-11_ericsson-kt-midband-fdd-massive-mimo` is a vendor mid-band deployment. All of them assume a radio that can tune across fragmented FR3 sub-bands and reject the incumbents next door. This is the first entry in the KB about *that radio's front end* — the layer where the assumption is either paid for or falsified.

That makes it a useful reality check on the spectrum-policy entries. The FR3 sharing literature routinely assumes a receiver that hops fragments and nulls incumbent energy; this paper prices the assumption. Third-harmonic rejection degrades roughly 6 dB for every doubling of carrier frequency at fixed jitter, and holding a given jitter target costs oscillator power as 1/σ_j⁴ — so the interference tolerance that a sharing study takes as a parameter is, in silicon, a steep function of where in the 7-24 GHz range you operate. Similarly, the best FR3-band noise figures reported here (4-6 dB across 1-8 GHz, 4.2 dB at 12.3-14.5 GHz) are 2-4 dB worse than what the same architectures achieve below 3 GHz, which propagates directly into the link budgets that FR3 coverage claims rest on.

It is a survey and tutorial rather than a new circuit, so novelty is 2 — but it is a survey with a thesis (move the hard work to baseband and let frequency translation carry it up; the residual constraints are parasitics, baseband robustness and clock generation) and with the numbers attached. For the KB it opens an empty cell: RF front-end hardware feasibility, a layer the corpus has otherwise touched only obliquely through testbed papers.

## Why it matters / what's new (ZH)

知识库的 FR3 书架一直是自上而下填充的，如今底层的缺失已相当明显。`2026-08-15_ntia-4-4ghz-study-cleared-four-band-6g-pipeline` 与 `2026-08-20_ntia-2-7ghz-relocation-plan-spectrumgov` 覆盖了美国联邦频段规划；`2026-06-13_arxiv-fr3-terrestrial-ntn-spectrum-sharing` 与 `2026-08-26_arxiv-upper-midband-spectrum-sharing-shades` 用射线追踪研究该频段的共享与运营商间协作；`2026-06-09_arxiv-spectrum-aggregation-6g-ca-vs-dc` 权衡了聚合策略；`2026-07-11_ericsson-kt-midband-fdd-massive-mimo` 是厂商的中频段部署。它们全都默认存在一部能在碎片化 FR3 子带间调谐、并抑制隔壁在用业务的射频。本条目是知识库中第一条讨论**这部射频前端**的内容——正是那个"默认"要么被兑现、要么被证伪的层次。

正因如此，它对频谱政策类条目构成了一次有用的现实校验。FR3 共享文献惯常假设接收机能跨碎片跳变并抑制在用业务的能量；本文给这个假设标了价。在抖动固定时，载频每翻一倍，三次谐波抑制约退化 6 dB；而维持某一抖动指标的振荡器功耗按 1/σ_j⁴ 增长——因此共享研究里作为参数取值的"抗干扰能力"，在硅上其实是你工作在 7–24 GHz 何处的陡峭函数。同样，这里报道的 FR3 频段最佳噪声系数（1–8 GHz 的 4–6 dB、12.3–14.5 GHz 的 4.2 dB）比同类架构在 3 GHz 以下的成绩差 2–4 dB，而这会直接传导到 FR3 覆盖主张所依赖的链路预算上。

它是综述与教程而非新电路，因此新颖度定为 2——但这是一篇有明确论点（把难题搬到基带、让频率搬移把它带上去；剩余约束是寄生、基带鲁棒性与时钟产生）并且附带完整数据的综述。对知识库而言，它打开了一个空白格：射频前端的硬件可行性，此前语料库只在测试床论文中间接触及过这一层。

## Images

![FR3 spectrum allocation and its non-contiguous sub-bands | FR3 频谱划分及其不连续子带](https://arxiv.org/html/2608.22647v1/figs/FR3.png)
![Mixer-first receiver architecture with N-path switching mixers and baseband impedance | 采用 N 路开关混频器与基带阻抗的 mixer-first 接收机架构](https://arxiv.org/html/2608.22647v1/figs/MFRX.png)
![Third-harmonic rejection versus clock jitter across 1-8 GHz | 1–8 GHz 范围内三次谐波抑制随时钟抖动的变化](https://arxiv.org/html/2608.22647v1/figs/HR3_jitter.png)
