---
id: 2026-09-17_arxiv-optical-inter-satellite-link-channel-model
date_published: 2026-09-15
date_found: 2026-09-17
technology: satellite
type: academic-paper
title_en: "Analytical Channel Modeling and Stability Aware Optimization of Optical Inter Satellite Links"
title_zh: "面向星间光链路的解析信道建模与稳定性感知优化"
url: "https://arxiv.org/abs/2609.17431"
source_quality: full
topics: [optical-ISL, pointing-jitter, free-space-optics, outage-probability]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Safi, Wang, Haas, and Tavakkolnia (LiFi Research and Development Centre, Department of Engineering, University of Cambridge) and Mast (European Space Agency) submitted this paper on 2026-09-15, with acknowledged support from an ESA grant for developing a high-speed optical inter-satellite link (OISL) terminal. The authors' starting point is that OISLs are becoming central to high-capacity LEO constellations because they avoid RF spectrum congestion and offer lower size/weight/power than RF inter-satellite links, but their extreme beam directionality makes link reliability highly sensitive to platform-induced pointing jitter. They note that most existing analytical models either assume perfect tracking at one end of the link or treat one terminal's pointing error as deterministic — an approximation reasonable for asymmetric links like ground-to-air, but which the authors say becomes unrealistic for symmetric OISLs where both satellites carry similar optical terminals and experience comparable jitter.

The paper derives closed-form statistical expressions — using Gaussian main-lobe approximations for the transmitter's far-field pattern and the receiver's coupling efficiency — for the channel-gain distribution, outage probability, and ergodic capacity of an OISL under independent pointing errors at *both* terminals simultaneously, validated against Monte Carlo simulation and against exact diffraction-based/Airy-pattern calculations. The central finding, which the authors call a "weakest-link principle," is that outage probability is governed by whichever terminal has worse pointing stability, and that improving the already-stronger terminal yields only a limited power-offset gain — whereas the ergodic-capacity penalty (throughput loss) depends on the *combined* stability of both terminals, a distinction the paper says prior power-centric OISL design approaches have not captured.

A worked LEO-GEO link example illustrates the practical design implication: for a less-stable LEO terminal (5 microrad pointing jitter) working against a stable GEO terminal (1 microrad), both starting from an identical 10 microrad beam, the paper's optimization (equation 50 in the text) suggests widening the LEO beam divergence to 5x the GEO beam's divergence (a 50 microrad beam for LEO vs 10 microrad for GEO) — but the paper states that doing so imposes a (50/10)^2 = 25, or approximately 14 dB, transmit-power penalty on the LEO terminal to preserve the same link budget, which the authors note "may be prohibitive for a small satellite with limited power resources," forcing a designer to either accept a higher outage probability or invest in better pointing control instead.

## Summary (ZH)

Safi、Wang、Haas 与 Tavakkolnia（剑桥大学工程系 LiFi 研发中心）以及 Mast（欧洲航天局 ESA）于 2026 年 9 月 15 日提交本文，论文致谢中提到获得了 ESA 一项面向高速星间光链路（OISL）终端研发项目的资助支持。作者的出发点是：由于能够避开射频频谱拥堵、且体积/重量/功耗均低于射频星间链路，OISL 正成为高容量 LEO 星座的核心组成部分；但其极窄的波束方向性使链路可靠性对平台引起的指向抖动高度敏感。作者指出，现有大多数解析模型要么假设链路一端实现完美跟踪，要么将某一终端的指向误差视为确定性量——这一近似对地-空等非对称链路是合理的，但作者认为，对于双方均配备相近光学终端、面临相近抖动水平的对称型 OISL 而言，这一假设已不再合理。

论文推导出一套解析（闭式）统计表达式——通过对发射端远场方向图与接收端耦合效率采用高斯主瓣近似——用于刻画在*两个*终端同时存在独立指向误差情况下 OISL 的信道增益分布、中断概率与遍历容量，并通过蒙特卡洛仿真以及基于严格衍射/艾里斑模型的计算进行了验证。论文得出的核心结论——作者称之为"最弱环节原则"——是：中断概率由指向稳定性较差的那一端终端决定，仅提升本已较稳定的一端只能带来有限的功率增益；而遍历容量损失（吞吐量下降）则取决于*两个*终端稳定性的综合作用——作者指出，以往以功率为中心的 OISL 设计方法并未捕捉到这一区别。

论文以一个 LEO-GEO 链路算例说明了实际设计含义：针对指向抖动 5 微弧度的 LEO 终端与 1 微弧度的 GEO 终端（二者初始波束发散角同为 10 微弧度），论文的优化结果（正文中式 50）建议将 LEO 波束发散角展宽至 GEO 波束发散角的 5 倍（LEO 为 50 微弧度，GEO 为 10 微弧度）——但论文指出，这样做会给 LEO 终端带来 (50/10)² = 25 即约 14 dB 的发射功率代价，以维持相同链路预算；作者指出，这对"功率资源有限的小卫星而言可能是难以承受的"，因此设计者只能在接受更高中断概率与投入更好的指向控制之间做出取舍。

## Key technical points (EN)

- **Gap addressed**: existing OISL pointing-error models typically fix one terminal as deterministic/perfectly-tracked; this paper derives a joint closed-form model for independent pointing errors at *both* terminals simultaneously.
- **Method**: Gaussian main-lobe approximation of the transmitter far-field pattern and receiver coupling efficiency, transforming the diffraction-based channel response into closed-form channel-gain distribution, outage probability, and (single-integral) exact finite-SNR ergodic capacity expressions for both coherent and direct-detection OISL.
- **Weakest-link principle**: outage decay is governed by the less-stable terminal; improving the stronger terminal yields only a bounded power-offset benefit.
- **Throughput vs reliability distinction**: ergodic-capacity penalty depends on combined stability of both terminals, unlike outage probability — the paper frames this as a "fundamental distinction between reliability and throughput metrics."
- **Validation**: closed-form results checked against exact diffraction-based and Airy-pattern calculations, confirmed accurate within the nominal pointing-accuracy range of operational OISLs.
- **Design example**: rebalancing a LEO (5 microrad jitter) vs GEO (1 microrad jitter) link by widening the LEO beam to a 5:1 beam-divergence ratio (50 microrad vs 10 microrad) costs the LEO terminal a (50/10)^2 = 25 (~14 dB, the paper's own figure) transmit-power penalty to hold the link budget — a tradeoff the authors flag as potentially prohibitive for small, power-constrained satellites.

## Key technical points (ZH)

- **解决的问题**：现有 OISL 指向误差模型通常将一端终端视为确定性/完美跟踪；本文推导出针对*两个*终端同时存在独立指向误差的联合闭式模型。
- **方法**：对发射端远场方向图与接收端耦合效率采用高斯主瓣近似，将基于衍射的信道响应转化为闭式的信道增益分布、中断概率，以及（单重积分形式的）相干与直接检测两种 OISL 的精确有限信噪比遍历容量表达式。
- **最弱环节原则**：中断概率的衰减规律由稳定性较差的一端终端决定；提升本已较稳定的一端仅能带来有限的功率增益。
- **吞吐量与可靠性的区分**：与中断概率不同，遍历容量损失取决于两端终端稳定性的综合作用——论文将其定位为"可靠性指标与吞吐量指标之间的本质区别"。
- **验证**：闭式结果与基于严格衍射及艾里斑模型的计算进行了对比，在运行中 OISL 常见的指向精度范围内证实具有较高准确性。
- **设计算例**：为在 LEO（指向抖动 5 微弧度）与 GEO（1 微弧度）链路间重新平衡，将 LEO 波束展宽至 5:1 的发散角比（LEO 为 50 微弧度，GEO 为 10 微弧度）——但这会使 LEO 终端为维持相同链路预算而承受 (50/10)² = 25 即约 14 dB（论文自陈数值）的发射功率代价；作者指出，这对功率资源有限的小卫星而言可能难以承受。

## Why it matters / what's new (EN)

The KB's existing optical-ISL coverage (`2026-09-07` Telesat/Cailabs entry) is about ground-station-network business partnerships for optical connectivity; this paper instead supplies the underlying physical-layer channel model. Its stated contribution over prior OISL pointing-error literature is dropping the "one terminal is deterministic" simplification that made asymmetric-link results (ground-to-air, deep-space downlink) inapplicable to symmetric satellite-to-satellite links, and showing that reliability and throughput are optimized by different stability metrics — a distinction with direct design consequences (per the paper's own example, balancing the two terminals' stability can cost the less-stable terminal roughly 14 dB of transmit power).

## Why it matters / what's new (ZH)

知识库现有的星间光链路相关条目（2026-09-07 Telesat/Cailabs 条目）关注的是面向光通信的地面站网络商业合作；本文则提供了其背后的物理层信道模型。相较于以往的 OISL 指向误差文献，本文的自陈贡献在于摒弃了"其中一端终端为确定性量"的简化假设——该假设使得原本针对非对称链路（地-空、深空下行）得出的结果并不适用于对称的星间链路——并证明可靠性与吞吐量分别由不同的稳定性指标决定，这一区分具有直接的设计意义（按论文自身算例，为平衡两端终端的稳定性，可能需要让较不稳定的一端付出约 14 dB 的发射功率代价）。

## Images

None.
