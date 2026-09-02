---
id: 2026-09-02_arxiv-doppler-fso-multicarrier-leo-ici
date_published: 2026-08-31
date_found: 2026-09-02
type: academic-paper
technology: satellite
title_en: "Doppler in multicarrier free-space optical LEO links survives photodetection as electrical-domain phase rotation plus inter-carrier interference — pilot-aided correction fixes it below normalized Doppler 0.1, an unavoidable BER floor remains above it"
title_zh: "多载波自由空间光 LEO 链路中的多普勒效应在光电探测后仍以电域相位旋转与子载波间干扰形式残留——归一化多普勒低于 0.1 时导频辅助校正有效，高于该值则存在不可消除的误码率底噪"
url: "https://arxiv.org/abs/2608.30794"
source_quality: full
topics: [free-space-optical, Doppler, DCO-OFDM, inter-carrier-interference, common-phase-error, pilot-aided-estimation, IM/DD, inter-satellite-link, LEO-to-ground]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 2
---

## Summary (EN)
Abid, Khalighi, and Safari take on a piece of received wisdom about optical satellite links: that intensity-modulation/direct-detection (IM/DD) systems are immune to Doppler's phase effects because photodetection strips the optical carrier's phase before the electrical signal is ever formed. They show this is only true for single-carrier IM/DD; once multicarrier schemes such as DC-biased optical OFDM (DCO-OFDM) are used — which need Hermitian-symmetric subcarrier data specifically so the time-domain signal comes out real-valued and intensity-modulable — a "baseband-equivalent phase" survives inside that Hermitian-symmetric electrical representation, and high relative velocity between a LEO satellite and its ground station (or between two LEO satellites on an inter-satellite link) reintroduces Doppler as a visible electrical-domain impairment after all.

They model the Doppler-induced time-scaling of the received signal (from a constant radial velocity between transmitter and receiver) as a frequency shift applied to the analytic (Hermitian-symmetric) signal, characterized by a normalized Doppler parameter mu = Doppler-frequency / subcarrier-spacing, evaluated conservatively at the worst-case band-edge subcarrier. After N-point DFT demodulation, the received per-subcarrier symbol decomposes via a Dirichlet-kernel coefficient into two mechanisms: a common-phase error (CPE) term (all subcarriers rotated by the same phase) from the zero-lag kernel coefficient, and inter-carrier interference (ICI) from the kernel's non-zero-lag side-lobes, which mix energy from every other subcarrier into each one. At mu=0 both effects vanish exactly, confirming the model reduces correctly to the no-Doppler case.

Using orbital mechanics for a 500 km LEO altitude, they compute realistic operating points: mu is about 0.05 for a LEO-to-ground-station link and about 0.1 for an inter-satellite link between counter-rotating LEO satellites (relative velocity ~15.2 km/s), with mu=0.2 included as a stress case. Simulating 4096-subcarrier DCO-OFDM at 50 kHz subcarrier spacing, uncorrected BER degrades by roughly 2 dB at mu=0.05, 5-6 dB at mu=0.1, and hits an unrecoverable floor above 10^-2 at mu=0.2. A simple pilot-aided per-symbol CPE estimator (32 pilot subcarriers, phase estimated from the correlation between received and known pilot symbols) recovers most of the loss for mu up to about 0.1, leaving only a 1-2 dB residual penalty from the now-dominant ICI; at mu=0.2 the same correction still helps substantially but a roughly 10^-3 BER floor remains because ICI, not CPE, now dominates and needs a time-varying-channel equalizer the paper does not develop.

## Summary (ZH)
Abid、Khalighi 与 Safari 检验了关于光学卫星链路的一条常见认知：强度调制/直接探测（IM/DD）系统因光电探测在电信号形成前即剥离了光载波相位，故而对多普勒的相位效应免疫。他们证明这一结论仅对单载波 IM/DD 成立；一旦采用如直流偏置光 OFDM（DCO-OFDM）等多载波方案——为使时域信号取实值以支持强度调制，该方案要求子载波数据满足厄米对称——厄米对称电域表示内部仍会保留一种"基带等效相位"，而 LEO 卫星与地面站之间（或星间链路两颗 LEO 卫星之间）的高相对速度，会使多普勒重新以可见的电域损伤形式出现。

他们将（由发射与接收端间恒定径向速度引起的）多普勒诱导时间尺度变化，建模为施加于解析（厄米对称）信号上的频移，用归一化多普勒参数 mu（多普勒频率 / 子载波间隔）刻画，并保守地在最差情形的带边子载波处求值。经 N 点 DFT 解调后，每子载波接收符号通过狄利克雷核系数分解为两种机制：零时延核系数产生的共相误差（CPE，所有子载波旋转相同相位），以及核函数非零时延旁瓣产生的子载波间干扰（ICI，将其余每个子载波的能量混入本子载波）。在 mu=0 时二者精确消失，确认模型能正确退化为无多普勒情形。

利用 500 公里 LEO 高度的轨道力学，他们计算出现实工作点：LEO-地面站链路的 mu 约为 0.05，反向旋转 LEO 卫星间星间链路（相对速度约 15.2 km/s）的 mu 约为 0.1，另纳入 mu=0.2 作为压力测试情形。对 4096 子载波、50 kHz 子载波间隔的 DCO-OFDM 仿真显示：未校正误码率在 mu=0.05 时劣化约 2 dB，mu=0.1 时劣化 5-6 dB，mu=0.2 时出现高于 10^-2 且不可消除的底噪。简单的导频辅助逐符号 CPE 估计器（32 个导频子载波，相位由接收符号与已知导频符号的相关求出）在 mu 达到约 0.1 之前能恢复大部分损失，仅留下由此时占主导的 ICI 引起的 1-2 dB 残余损失；在 mu=0.2 时同一校正仍有明显帮助，但由于此时 ICI（而非 CPE）占主导、需要论文未展开的时变信道均衡器，约 10^-3 的误码率底噪依然存在。

## Key technical points (EN)
- **Core claim:** multicarrier IM/DD (DCO-OFDM) is NOT immune to Doppler despite photodetection stripping optical-carrier phase, because Hermitian-symmetric subcarrier data preserves a baseband-equivalent phase that Doppler still rotates.
- **Doppler model:** time-scaling from constant radial velocity approximated as an SSB frequency shift on the analytic signal; normalized Doppler mu = Doppler-frequency/subcarrier-spacing, evaluated at the worst-case band-edge subcarrier.
- **Impairment decomposition:** Dirichlet-kernel coefficients split into zero-lag (common-phase error, CPE, same rotation on every subcarrier) and non-zero-lag (inter-carrier interference, ICI, cross-subcarrier energy leakage); model correctly collapses to zero at mu=0.
- **Operating points from orbital mechanics:** 500 km LEO altitude gives mu~0.045 (~0.05) for LEO-to-ground, mu~0.1 for inter-satellite links between counter-rotating LEOs (relative velocity ~15.2 km/s); mu=0.2 as stress test.
- **Sim setup:** N=4096 subcarriers, 50 kHz subcarrier spacing, 4/8-QAM Gray-mapped, 32 pilot subcarriers, no cyclic prefix (isolates Doppler from delay spread), AWGN only (no turbulence/fading modeled).
- **Headline BER numbers:** uncorrected penalty ~2 dB at mu=0.05, ~5-6 dB at mu=0.1, floor >=10^-2 at mu=0.2; pilot-aided CPE correction leaves ~1-2 dB residual at mu<=0.1 but only reduces (not eliminates) the mu=0.2 floor to ~10^-3.
- **Pilot sensitivity:** 8 pilots leave a ~10^-4 floor; 32 pilots suppress it to ~10^-5 with diminishing returns beyond 32 (at mu=0.05, 8-QAM).
- **Regime split:** CPE-limited regime (mu<=0.1) is fixable with a simple per-symbol phase estimator; ICI-limited regime (mu>=0.2) needs a time-varying-channel equalizer the authors cite but do not develop.

## Key technical points (ZH)
- **核心论点：** 多载波 IM/DD（DCO-OFDM）并不因光电探测剥离光载波相位而对多普勒免疫，因为厄米对称子载波数据保留了一种基带等效相位，多普勒仍会使其旋转。
- **多普勒建模：** 将恒定径向速度引起的时间尺度变化近似为施加于解析信号上的单边带频移；归一化多普勒 mu = 多普勒频率/子载波间隔，在最差情形带边子载波处求值。
- **损伤分解：** 狄利克雷核系数分解为零时延项（共相误差 CPE，所有子载波相同旋转）与非零时延项（子载波间干扰 ICI，跨子载波能量泄漏）；模型在 mu=0 时正确退化为零。
- **由轨道力学得出的工作点：** 500 公里 LEO 高度下，LEO-地面链路 mu 约为 0.045（约 0.05），反向旋转 LEO 星间链路（相对速度约 15.2 km/s）mu 约为 0.1；另纳入 mu=0.2 作压力测试。
- **仿真设置：** N=4096 子载波，子载波间隔 50 kHz，4/8-QAM 格雷映射，32 导频子载波，无循环前缀（以隔离多普勒与时延扩展影响），仅 AWGN（未建模湍流/衰落）。
- **关键误码率数值：** 未校正劣化在 mu=0.05 时约 2 dB，mu=0.1 时约 5-6 dB，mu=0.2 时底噪 ≥10^-2；导频辅助 CPE 校正在 mu≤0.1 时残余约 1-2 dB，但在 mu=0.2 时仅能将底噪降至约 10^-3 而无法消除。
- **导频数量敏感性：** 8 个导频留有约 10^-4 底噪；32 个导频将其压低至约 10^-5，超过 32 个后收益递减（mu=0.05、8-QAM 情形下）。
- **区间划分：** CPE 主导区间（mu≤0.1）可通过简单逐符号相位估计器解决；ICI 主导区间（mu≥0.2）需要作者引用但未展开的时变信道均衡器。

## Why it matters / what's new (EN)
The KB's optical-ISL / FSO satellite entries have so far covered relay architecture (the same-day OHL regenerative-relay entry), sub-THz/optical link surveys, and hybrid fiber-FSO backhaul, but nothing at the waveform-and-synchronization level for optical multicarrier links. This entry corrects a specific, reusable piece of intuition — "direct detection kills Doppler-phase sensitivity" — that holds for single-carrier IM/DD but not for the Hermitian-symmetric multicarrier schemes (DCO-OFDM, ACO-OFDM) that give optical links their spectral-efficiency advantage. The mu-threshold framing (CPE-fixable below ~0.1, ICI-floored above it) gives a concrete design rule: LEO-to-ground links sit comfortably in the fixable regime, but faster-relative-velocity inter-satellite links sit right at the boundary, and any future higher-bandwidth or larger-constellation ISL design pushing mu past 0.1-0.2 will need real ICI equalization, not just pilot-based phase tracking. Read together with the OHL regenerative-relay entry from the same arxiv batch, both papers are converging on the physical-layer details of multi-hop optical satellite meshes as a KB sub-thread worth tracking.

## Why it matters / what's new (ZH)
知识库此前的光学 ISL/FSO 卫星条目已涵盖中继架构（同日的 OHL 全光再生中继条目）、亚太赫兹/光学链路综述、以及光纤-FSO 混合回传，但尚无涉及光学多载波链路波形与同步层面的条目。本条目纠正了一条具体、可复用的直觉误区——"直接探测消除了多普勒相位敏感性"——该说法对单载波 IM/DD 成立，但对赋予光学链路频谱效率优势的厄米对称多载波方案（DCO-OFDM、ACO-OFDM）并不成立。其 mu 阈值框架（低于约 0.1 时 CPE 可校正，高于该值则受 ICI 底噪限制）给出了具体设计准则：LEO-地面链路稳处于可校正区间，而相对速度更高的星间链路恰好处于边界附近，未来任何将 mu 推高至 0.1-0.2 以上的更高带宽或更大规模星座 ISL 设计，都需要真正的 ICI 均衡，而非仅靠基于导频的相位跟踪。与同一 arxiv 批次的 OHL 全光再生中继条目对照阅读，两篇论文正共同勾勒出多跳光学卫星网状链路物理层细节这一值得持续跟踪的知识库子脉络。
