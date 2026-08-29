---
id: 2026-08-29_arxiv-multi-ue-networked-sensing-6g-pmn
date_published: 2026-08-26
date_found: 2026-08-29
type: academic-paper
technology: cellular
title_en: "Multi-UE Networked Sensing: A New Paradigm for 6G Perceptive Mobile Networks"
title_zh: "多 UE 组网感知：面向 6G 感知型移动网络的新范式"
url: "https://arxiv.org/abs/2608.25597"
source_quality: full
topics: [ISAC, networked-sensing, perceptive-mobile-networks, bistatic, multi-view-fusion, OFDMA, SDMA, TDMA, CSI, clock-offset, 6G-DISAC]
topic_primary: 6g-vision
topics_secondary: [5g-nr, cellular-massive-mimo]
novelty_score: 2
---

## Summary (EN)

Networked sensing — fusing observations from several distributed nodes so a network can see a target from more than one angle — is the step that turns integrated sensing and communications from a per-link capability into infrastructure-scale perception. Almost all of the existing work does it on the infrastructure side: multiple *cooperating receivers*, typically base stations, jointly process signals from one transmitter. That multi-CoopRx architecture works, but it asks for densely deployed BSs, tight inter-BS synchronization, rigorous interference management and high-capacity backhaul to ship sensing data around — which is precisely the cost structure that keeps it out of real deployments.

This article, from J. Andrew Zhang's group at UTS with Wymeersch (Chalmers), Masouros (UCL) and Y. Jay Guo, proposes the mirror image: keep the single base station and move the diversity to the *users*. In multi-UE sensing, multiple non-cooperative UEs each form a bistatic sensing link with a common BS, and the sensing information — extracted from uplink signals, downlink signals, or both — is fused at that one BS. The observation that makes this work is simple and, the authors argue, underexploited: geographically proximate UEs frequently illuminate or observe the *same* targets from different spatial perspectives, so their sensing parameters (delay, Doppler, angle, amplitude) are different but *correlated*. That correlation, arising from common target geometry and shared propagation environment, is free prior information for parameter estimation, target association and fusion — and it arrives without any inter-UE cooperation, without inter-BS synchronization, and without a sensing backhaul.

Three architectures are laid out. **Uplink-only**: several UEs transmit to a BS which exploits direct and reflected components; each UE-BS pair is a distinct bistatic geometry, so transmitter-side spatial diversity gives multiple views at a single receiver, and the whole thing rides existing cellular protocols with minimal extra signalling. **Downlink-assisted**: distributed UEs receive BS downlink, extract sensing features locally (delay, Doppler, angle, target signatures) and report *compressed* measurements rather than raw signals; because downlink is broadcast, a single transmission can be observed by every UE in the cell, which buys far denser spatial sampling at the cost of a reporting path. **Hybrid**: both at once, which matters because uplink and downlink observations are not redundant — in FDD they are on different bands and therefore different channels, and even in TDD they differ in resource allocation, beamforming, reference signals and timing.

The multiple-access scheme turns out to shape what sensing is even possible, and the paper tabulates it: TDMA buys Doppler resolution and estimation range but limits simultaneous multi-view diversity and slows the sensing update rate; OFDMA buys delay resolution and range (localized subcarrier blocks can be stitched into aggregate bandwidth, interleaved allocation enlarges the unambiguous delay range) at the cost of fragmented spectrum and frequency-synchronization requirements; SDMA buys angular resolution and virtual aperture but brings inter-user interference and processing complexity. The conclusion is that future systems may need *sensing-aware multiple-access design*, with resource allocation jointly optimized against sensing objectives rather than communication alone.

The signal-processing pipeline has three stages. Bistatic offset cancellation comes first, because clock-induced carrier-frequency, phase and timing offsets vary per UE and are typically far larger than the target-induced variations of interest; per-subcarrier cross-correlation and signal-ratio processing against a locally constructed reference (one antenna, one subcarrier, a dominant path, or a signal subspace) removes the common offsets while preserving relative delay, Doppler and angle. The catch, stated plainly, is that these operations convert absolute parameters into relative ones and can themselves damage the correlation structure the whole method depends on — recovering absolute parameters needs an anchor path, calibration or bidirectional signalling. Correlation-aware parameter estimation follows, in four families (geometry-constrained/structured sparse recovery, statistical estimation, subspace methods, learning-assisted), and then multi-view fusion at measurement, feature or semantic level via Bayesian inference, factor graphs and message passing. A numerical example applies Bayesian compressive sensing to uplink multi-UE sensing with each UE on 128 localized subcarriers at 10 dB SNR, and shows delay and Doppler estimation accuracy improving with the number of jointly processed UEs against per-UE independent processing.

## Summary (ZH)

组网感知——把多个分布节点的观测融合起来，让网络能从多个角度看同一个目标——是把通感一体化从单链路能力推进到基础设施级感知的关键一步。现有工作几乎都做在基础设施侧：多个**协作接收机**（通常是基站）联合处理来自单一发射机的信号。这种 multi-CoopRx 架构确实有效，但它要求基站密集部署、基站间紧同步、严格的干扰管理，以及用于搬运感知数据的大容量回传——而这正是让它难以真正落地的成本结构。

这篇文章来自悉尼科技大学 J. Andrew Zhang 团队，合作者包括 Wymeersch（查尔姆斯）、Masouros（UCL）与 Y. Jay Guo，提出了一个镜像方案：保留单基站，把分集搬到**用户侧**。在多 UE 感知中，多个互不协作的 UE 各自与同一个基站构成双基地感知链路，感知信息（从上行信号、下行信号或两者中提取）在这一个基站上融合。支撑这一思路的观察很朴素，作者认为长期被低估：地理上相近的 UE 经常从不同空间视角照射或观测**同一个**目标，因此它们的感知参数（时延、多普勒、角度、幅度）彼此不同却**相关**。这种源自共同目标几何与共享传播环境的相关性，对参数估计、目标关联与融合而言是免费的先验信息——而且它不需要 UE 之间协作，不需要基站间同步，也不需要感知专用回传。

文章给出三种架构。**纯上行**：若干 UE 向基站发送，基站利用直射与反射分量；每个 UE—基站对构成一条独立的双基地几何，因此发射侧空间分集在单一接收机处产生多视角观测，且整套机制沿用现有蜂窝协议、附加信令极少。**下行辅助**：分布的 UE 接收基站下行，在本地提取感知特征（时延、多普勒、角度、目标特征），上报**压缩后**的测量而非原始信号；由于下行是广播，一次基站发送可被小区内所有 UE 同时观测，以一条上报通道换来密得多的空间采样。**混合**：两者并用，其意义在于上下行观测并不冗余——FDD 下二者在不同频段因而信道不同，即便 TDD 下也会因资源分配、波束赋形、参考信号与发送时刻而不同。

多址方式会直接决定哪些感知是可能的，文章为此列了表：TDMA 换来多普勒分辨率与估计范围，代价是同时多视角分集受限、感知更新率下降；OFDMA 换来时延分辨率与范围（局部化子载波块可拼接成聚合带宽，交织分配则扩大无模糊时延范围），代价是频谱资源碎片化、频率同步要求与调度复杂度；SDMA 换来角度分辨率与虚拟孔径，代价是多用户干扰与处理复杂度。由此得出的结论是：未来系统可能需要**感知感知型多址设计**，把资源分配与感知目标联合优化，而不只对通信目标优化。

信号处理流水线分三段。首先是双基地偏差消除，因为时钟带来的载波频偏、相位偏与定时偏逐 UE 不同，且通常远大于我们真正关心的目标引起的变化；以本地构造的参考信号（某根天线、某个子载波、某条主导径，或更进一步的信号子空间）做逐子载波互相关与信号比值处理，可以消掉共同偏差而保留相对时延、多普勒与角度。文章坦率地指出其代价：这类运算把绝对参数变成了相对参数，并且可能损伤整套方法所依赖的相关结构——要恢复绝对参数就需要锚径、校准或双向信令。之后是相关性感知的参数估计，分为四类（几何约束/结构化稀疏恢复、统计估计、子空间方法、学习辅助），再之后是测量级、特征级或语义级的多视角融合，手段包括贝叶斯推断、因子图与消息传递。数值示例在每个 UE 占用 128 个局部化子载波、SNR 为 10 dB 的上行多 UE 感知设置下应用贝叶斯压缩感知，显示时延与多普勒估计精度随联合处理的 UE 数增加而优于逐 UE 独立处理的基线。

## Key technical points (EN)

- **Paradigm shift**: from multi-CoopRx (many cooperating BS receivers, one transmitter) to multi-UE single-BS multistatic sensing — diversity generated by distributed UEs with *no* inter-UE cooperation, fusion at one BS.
- **Why it is cheaper**: removes the multi-CoopRx requirements for dense BS deployment, tight inter-BS synchronization, inter-BS interference management and high-capacity sensing backhaul.
- **The exploited structure**: proximate UEs observe common targets from different perspectives, producing sensing parameters (delay, Doppler, angle, amplitude) that are different but correlated through common target geometry and bistatic relationships — correlation usable as prior information.
- **Three architectures**: uplink-only (transmitter-side spatial diversity, aligns with current cellular protocols, minimal signalling), downlink-assisted (broadcast means many observers per transmission; UEs report compressed features, not raw signals), hybrid (uplink and downlink are complementary, not redundant — different bands in FDD, different resources/beams/reference signals even in TDD).
- **Coherent vs non-coherent**: non-coherent processing needs no stringent inter-UE synchronization and buys coverage, observability, robustness and separability; coherent processing adds SNR gain, bandwidth aggregation and distributed aperture formation but requires accurate synchronization, calibration and UE geometry.
- **Multiple-access shapes sensing** (Table 1): TDMA → Doppler resolution/range, but limited simultaneous multi-view diversity and lower update rate. OFDMA → delay resolution and enlarged unambiguous range (localized blocks stitch into wider bandwidth; interleaved allocation adds frequency-sampling diversity), at the price of fragmented spectrum, frequency-sync requirements and scheduling complexity. SDMA → angular resolution and virtual aperture, at the price of inter-user interference and complexity.
- **Pilot vs payload**: CSI from pilots is the main vehicle; using data payloads is harder because superimposed multi-user time-domain signals defeat conventional matched-filter processing (sensing must move to a domain where users separate — frequency, spatial or code), and decision-directed reconstruction errors distort the very correlation structure the method exploits.
- **Offset cancellation caveat**: per-subcarrier cross-correlation / signal-ratio processing against a constructed reference removes UE-dependent clock offsets but yields *relative* parameters; recovering absolute values needs an anchor path, calibration or bidirectional signalling, and naive processing can destroy the inter-UE correlation.
- **Estimation families** (Table 2): geometry-constrained and structured sparse recovery (MMV-CS, sparse Bayesian learning), statistical estimation (joint ML/MAP, Bayesian tracking), subspace methods (joint/distributed MUSIC, ESPRIT, tensor-ESPRIT), and learning-assisted (deep unfolding, GNNs, physics-informed) — each with stated limitations.
- **Numerical illustration**: uplink multi-UE sensing, 128 localized subcarriers per UE in OFDMA, SNR = 10 dB; Bayesian compressive sensing exploiting propagation-delay correlation across nearby UEs improves delay and Doppler estimation accuracy versus independent per-UE processing as the number of jointly processed UEs grows.
- **Scope**: framework extends to multiple cooperating BSs, and beyond cellular to Wi-Fi, low-altitude networks and LoRa. Funded in part by the EU Horizon SNS JU project 6G-DISAC.

## Key technical points (ZH)

- **范式转变**：从 multi-CoopRx（多个协作基站接收、单发射机）转向多 UE 单基站多基地感知——分集由分布的 UE 产生且 UE 之间**无需**协作，融合在单一基站完成。
- **成本为何更低**：免除了 multi-CoopRx 对基站密集部署、基站间紧同步、基站间干扰管理与大容量感知回传的要求。
- **被利用的结构**：邻近 UE 从不同视角观测同一目标，产生的感知参数（时延、多普勒、角度、幅度）彼此不同，却通过共同的目标几何与双基地关系而相关——这种相关性可作为先验信息使用。
- **三种架构**：纯上行（发射侧空间分集，贴合现有蜂窝协议、附加信令极少）、下行辅助（广播意味着一次发送有众多观测者；UE 上报压缩特征而非原始信号）、混合（上下行互补而非冗余——FDD 下频段不同，即使 TDD 下资源、波束与参考信号也不同）。
- **相干与非相干**：非相干处理不要求 UE 间严格同步，换来覆盖、可观测性、鲁棒性与可分性；相干处理额外带来 SNR 增益、带宽聚合与分布式孔径，但需要精确同步、校准与 UE 几何信息。
- **多址方式塑造感知能力**（表 1）：TDMA → 多普勒分辨率与估计范围提升，但同时多视角分集受限、更新率下降。OFDMA → 时延分辨率提升、无模糊范围扩大（局部化子载波块可拼成更宽带宽，交织分配增加频域采样分集），代价是频谱碎片化、频率同步要求与调度复杂度。SDMA → 角度分辨率与虚拟孔径提升，代价是多用户干扰与处理复杂度。
- **导频与数据载荷**：主要载体是从导频估计的 CSI；直接用数据载荷更难，因为多用户叠加的时域信号让传统匹配滤波失效（感知必须搬到用户可分的域——频域、空域或码域），且判决反馈重构的误差会扭曲该方法赖以工作的相关结构。
- **偏差消除的代价**：以构造参考信号做逐子载波互相关/信号比值处理能消除逐 UE 的时钟偏差，但得到的是**相对**参数；恢复绝对值需要锚径、校准或双向信令，而处理不当会破坏 UE 之间的相关性。
- **估计方法四大类**（表 2）：几何约束与结构化稀疏恢复（MMV-CS、稀疏贝叶斯学习）、统计估计（联合 ML/MAP、贝叶斯跟踪）、子空间方法（联合/分布式 MUSIC、ESPRIT、张量 ESPRIT）、学习辅助（深度展开、GNN、物理约束学习）——各自局限均已列明。
- **数值示例**：上行多 UE 感知，OFDMA 下每个 UE 占 128 个局部化子载波，SNR = 10 dB；利用邻近 UE 之间传播时延相关性的贝叶斯压缩感知，其时延与多普勒估计精度随联合处理的 UE 数增加而优于逐 UE 独立处理。
- **适用范围**：框架可扩展至多基站协作，并可超出蜂窝用于 Wi-Fi、低空网络与 LoRa。部分由欧盟 Horizon SNS JU 项目 6G-DISAC 资助。

## Why it matters / what's new (EN)

The KB's cellular ISAC shelf is well stocked but architecturally lopsided. `2026-08-13_arxiv-isac-3gpp-5ga-to-6g-evolution` traces the Rel-19 → Rel-20 → 6G standards ladder; `2026-05-30_arxiv-native-isac-oran-6g` and `2026-08-08_arxiv-5g-isac-uav-oran-sensing` put sensing inside the O-RAN control loop; `2026-08-23_arxiv-oai-symbol-domain-ofdm-radar-e2sm` runs symbol-domain OFDM radar inside a live OAI gNB; `2026-08-13_arxiv-multi-uav-tracking-oran-isac-testbed` tracks targets with a testbed. Every one of them puts the sensing intelligence on the *infrastructure* side. This entry is the first in the KB to argue that the scaling resource is the UE population itself — that increasing UE density is a sensing asset rather than an interference problem — and to work out what that implies.

The specific contribution worth carrying forward is the link between multiple access and sensing capability. The KB already holds entries where a scheduler decision changes what the network can perceive (the OAI OFDM-radar work aligns its carrier to the tuning grid to fix phase rotation; the ISAC-UAV entry repurposes uplink SRS as passive radar without changing NR). This article generalizes that into a table: TDMA, OFDMA and SDMA each expose a *different* sensing resource, so a scheduler is implicitly choosing a sensing modality every time it allocates. "Sensing-aware multiple access" — jointly optimizing resource allocation against sensing objectives — is a concrete research direction and a plausible standards hook for Rel-21 ISAC work.

Two honest limitations keep the novelty at 2 rather than 3. This is a magazine-format vision article (9 pages, 3 figures, 3 tables) with a single illustrative simulation rather than a system evaluation, and it carries no 3GPP mechanism proposal — no signalling design, no reference-signal change, no reporting format for the compressed downlink-assisted features it depends on. It is a well-argued architecture and a research agenda, and it should be read as the companion problem statement to the implementation-side ISAC entries rather than as a result.

## Why it matters / what's new (ZH)

知识库的蜂窝 ISAC 书架内容不少，但架构上明显偏向一侧。`2026-08-13_arxiv-isac-3gpp-5ga-to-6g-evolution` 梳理了 Rel-19 → Rel-20 → 6G 的标准阶梯；`2026-05-30_arxiv-native-isac-oran-6g` 与 `2026-08-08_arxiv-5g-isac-uav-oran-sensing` 把感知放进 O-RAN 控制环；`2026-08-23_arxiv-oai-symbol-domain-ofdm-radar-e2sm` 在真实 OAI gNB 内跑符号域 OFDM 雷达；`2026-08-13_arxiv-multi-uav-tracking-oran-isac-testbed` 用测试床做目标跟踪。它们无一例外把感知智能放在**基础设施**侧。本条目是知识库中第一条主张"可扩展资源其实是 UE 群体本身"的工作——把 UE 密度上升视为感知资产而非干扰负担——并系统推演了这一主张的含义。

真正值得带走的具体贡献，是多址方式与感知能力之间的联系。知识库里已有若干条目显示调度决策会改变网络能感知到什么（OAI 的 OFDM 雷达工作把载波对齐到调谐栅格以修正相位旋转；ISAC-UAV 条目在不改动 NR 的前提下把上行 SRS 复用为无源雷达）。本文把这一点推广成一张表：TDMA、OFDMA、SDMA 各自暴露**不同的**感知资源，因此调度器每做一次资源分配，实际上都在隐式地选择一种感知模态。"感知感知型多址"——把资源分配与感知目标联合优化——既是一个具体的研究方向，也是 Rel-21 ISAC 工作一个合理的标准切入点。

有两点如实的局限，使其新颖度定为 2 而非 3。这是一篇杂志体的展望文章（9 页、3 图、3 表），只有一个示意性仿真而非系统评测；且它没有给出任何 3GPP 机制提案——没有信令设计，没有参考信号改动，也没有为其所依赖的下行辅助压缩特征定义上报格式。它是一份论证扎实的架构与研究议程，应当被当作实现侧 ISAC 条目的配套问题陈述来读，而不是一份结果。
