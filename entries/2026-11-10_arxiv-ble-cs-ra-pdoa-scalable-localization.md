---
id: 2026-11-10_arxiv-ble-cs-ra-pdoa-scalable-localization
date_published: 2026-11-06
date_found: 2026-11-10
type: academic-paper
technology: bluetooth
title_en: "Scalable BLE Channel Sounding Localization with Ranging-Assisted PDoA"
title_zh: "基于测距辅助 PDoA 的可扩展 BLE 信道探测定位"
url: "https://arxiv.org/abs/2611.09451"
source_quality: full
topics: [BLE, channel-sounding, PDoA, localization, multipath, super-resolution, passive-anchors, body-shadowing]
topic_primary: bt-channel-sounding
topics_secondary: [bt-location]
novelty_score: 3
---

## Summary (EN)

This arXiv preprint (Jorg Wieme, Eli De Poorter, Jeroen Hoebeke; IDLab, Ghent University-imec; eess.SP, submitted Nov 6, 2026; 14 pages; simulator source code published on imec's GitLab; funded by the imec ICON project UBIWAU) addresses two limits of Bluetooth Channel Sounding (CS) for multi-anchor localization. First, standard CS is a connection-oriented two-way exchange, so anchors are ranged one after another and airtime and latency grow with the anchor count. Second, BLE's limited bandwidth lets direct and reflected paths combine, which biases phase-slope range estimates. A passive broadcast would let many anchors hear one transmission, but a receive-only anchor can cancel the unknown tag phase only against other anchors, which leaves a ratio of channel responses rather than the channel response that conventional super-resolution estimators need.

The proposed Ranging-Assisted Phase Difference of Arrival (RA-PDoA) architecture has one active anchor run a standard two-way CS exchange while several synchronised, receive-only passive anchors observe the same transmissions. The active anchor's response supplies the reference from which a channel response is recovered at each passive anchor, so super-resolution delay estimation (with model-order selection and per-link estimator selection) works without extra ranging exchanges. The coarse round-trip-time arrival information is then used to bound the position search and reject inconsistent range solutions. The ranging airtime per localization cycle is independent of the number of anchors.

The evaluation is a Python Monte Carlo simulator of the CS physical layer with a first-order image-source multipath model, body shadowing, and swept impairments (anchor synchronisation offset, per-tone timing jitter, local-oscillator calibration, cable/group delay, anchor survey error). Against the authors' earlier broadcast PDoA baseline, the 90th-percentile localization error under body shadowing falls from 175.3 cm to 95.5 cm, and the solver divergence seen in 3.6% of baseline estimates is eliminated. The authors state that the results are a simulation-based feasibility study that assumes a synchronised anchor backbone, a known transmit epoch and first-order specular reflections.

## Summary (ZH)

这篇 arXiv 预印本（Jorg Wieme、Eli De Poorter、Jeroen Hoebeke；根特大学-imec IDLab；eess.SP，2026 年 11 月 6 日提交；共 14 页；仿真器源码已发布在 imec GitLab；由 imec ICON 项目 UBIWAU 资助）针对蓝牙信道探测（Channel Sounding，CS）在多锚点定位中的两个局限。其一，标准 CS 是面向连接的双向交换，各锚点只能依次测距，空口时间和时延随锚点数增长。其二，BLE 带宽有限，直达径与反射径叠加，会使基于相位斜率的测距产生偏差。被动广播可以让多个锚点同时收到一次发射，但只收不发的锚点只能把未知的标签相位与其他锚点相互抵消，得到的是信道响应之比，而不是常规超分辨估计器所需的信道响应本身。

所提出的测距辅助相位差到达（RA-PDoA）架构由一个主动锚点执行标准双向 CS 交换，同时若干同步的只收型被动锚点观测同一批发射。主动锚点的响应提供参考，使每个被动锚点能够恢复信道响应，从而无需额外测距交换即可进行超分辨时延估计（含模型阶数选择和逐链路估计器选择）。随后利用粗略的往返时间到达信息限定位置搜索范围，并剔除不一致的距离解。每个定位周期的测距空口时间与锚点数量无关。

评估使用基于 Python 的 CS 物理层蒙特卡洛仿真器，采用一阶镜像源多路径模型、人体遮挡，并扫描多种非理想因素（锚点同步偏移、逐音调定时抖动、本振校准、线缆/群时延、锚点勘测误差）。与作者此前的广播式 PDoA 基线相比，人体遮挡条件下的 90 分位定位误差由 175.3 cm 降至 95.5 cm，并消除了基线中 3.6% 估计出现的求解器发散。作者说明，该结果为基于仿真的可行性研究，假设有同步的锚点回传、已知的发射时刻，并采用一阶镜面反射。

## Key technical points (EN)

- **Problem**: sequential two-way CS ranging scales airtime and latency with anchor count; phase-slope ranging is biased by multipath within BLE's limited bandwidth.
- **Architecture**: one active anchor performs a standard two-way CS exchange (phase-based ranging plus round-trip time); N passive receive-only anchors listen to the same transmissions, with an active-anchor selection criterion based on received power.
- **Channel recovery**: a derived identity lets passive anchors reconstruct a channel response suitable for super-resolution (MUSIC-type) delay estimation, using the active link as reference.
- **Estimation chain**: model-order selection, per-link estimator selection (switching on a threshold chosen on separate seeds), coarse time-of-arrival bounds, then a bounded numerical position solution.
- **Headline numbers (simulation)**: CEP90 175.3 cm to 95.5 cm under body shadowing; baseline solver divergence of 3.6% removed; airtime per cycle independent of anchor count.
- **Infrastructure analysis**: mitigating the multipath-induced accuracy floor makes the synchronisation, per-tone jitter, oscillator, cable-delay and survey-error requirements for a target accuracy quantifiable.
- **Stated limits**: simulation only, first-order specular reflections, synchronised anchor backbone, known transmit epoch, active-anchor criterion evaluated on true (not noisy) received power.

## Key technical points (ZH)

- **问题**：顺序双向 CS 测距使空口时间和时延随锚点数增长；在 BLE 有限带宽内，多径使相位斜率测距产生偏差。
- **架构**：一个主动锚点执行标准双向 CS 交换（相位测距加往返时间）；N 个只收型被动锚点监听同一批发射，并依据接收功率选择主动锚点。
- **信道恢复**：推导出的恒等式使被动锚点以主动链路为参考，重建适用于超分辨（MUSIC 类）时延估计的信道响应。
- **估计流程**：模型阶数选择、逐链路估计器选择（切换阈值在独立随机种子上确定）、粗略到达时间约束，再进行带约束的数值位置求解。
- **主要数据（仿真）**：人体遮挡下 CEP90 由 175.3 cm 降至 95.5 cm；消除基线 3.6% 的求解器发散；每周期空口时间与锚点数无关。
- **基础设施分析**：缓解多径导致的精度下限后，达到目标精度所需的同步、逐音调抖动、振荡器、线缆时延和勘测误差要求变得可以量化。
- **作者声明的局限**：仅为仿真，采用一阶镜面反射，需同步的锚点回传和已知发射时刻，主动锚点判据使用真实（非含噪）接收功率。

## Why it matters / what's new (EN)

Earlier Channel Sounding entries in the KB mostly concern point-to-point ranging accuracy, attacks and simulator impairments. This paper looks at the next step, how many anchors can share one CS exchange, by splitting the roles into one active and several passive anchors and showing, in simulation, what that does to airtime, multipath robustness and synchronisation requirements. The question of sequential ranging cost versus passive reception is also central to UWB localization. Treat the numbers as a feasibility study on a modelled channel; there is no hardware measurement, and the design needs a synchronised anchor backbone.

## Why it matters / what's new (ZH)

知识库此前的信道探测条目主要涉及点对点测距精度、攻击以及仿真器非理想因素。本文关注下一步问题，即多少个锚点可以共用一次 CS 交换：通过划分为一个主动锚点和若干被动锚点，在仿真中展示其对空口时间、多径鲁棒性和同步要求的影响。顺序测距开销与被动接收之间的权衡，同样是 UWB 定位的核心问题。数值应视为建立在模型信道上的可行性研究，没有硬件实测，且该设计需要同步的锚点回传。

## Images

No figures are embedded; see the arXiv HTML rendering (https://arxiv.org/html/2611.09451v1) for the paper's figures.
