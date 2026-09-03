---
id: 2026-09-03_arxiv-skyshare-leo-ras-coexistence
date_published: 2026-09-01
date_found: 2026-09-03
type: academic-paper
technology: satellite
title_en: "SkyShare: Constellation-wide Sky Sharing for LEO–Radio Astronomy Coexistence"
title_zh: "SkyShare：面向 LEO 星座与射电天文共存的全星座天空共享调度"
url: "https://arxiv.org/abs/2609.00821"
source_quality: full
topics: [radio-astronomy, RFI, EPFD, spectrum-sharing, spot-beam-scheduling, Operational-Data-Sharing, ITU, min-cost-flow, MobiCom, Starlink, telescope-boresight-avoidance]
topic_primary: ngso-regulation
topics_secondary: [starlink, leo-constellations]
novelty_score: 3
---

## Summary (EN)
Mehri, Ron and Shah (NC State University), Sastry (University of Surrey) and Roy (University of Alabama in Huntsville) present **SkyShare**, accepted at MobiCom'26 (Austin, Oct 26–30, 2026), a constellation-wide scheduling system that protects radio astronomy (RAS) observation sites from LEO downlink interference while preserving network coverage. The paper's stated motivation is that today's deployed mitigation — SpaceX Starlink's Telescope Boresight Avoidance (TBA), a reactive, threshold-based scheme that disables or steers spot beams away once a satellite's angular separation from a telescope's boresight falls below a set threshold — has two limitations the authors identify: (1) it ignores *aggregate sidelobe interference* from many satellites simultaneously, which the paper shows accumulates into a residual noise floor that threshold tuning alone cannot suppress without further coverage loss, and (2) it produces persistent coverage gaps around RAS sites because it disables cells reactively rather than allocating capacity constellation-wide.

SkyShare works entirely in the control plane (no satellite hardware changes) by combining high-fidelity orbital prediction with an ITU-compliant Equivalent Power Flux-Density (EPFD) interference model and real-time observatory schedule data ingested via the Operational Data Sharing (ODS) framework — the same real-time RAS-metadata channel SpaceX and NRAO already use for TBA. Its two contributions are: an **EPFD-budgeted Region-of-Interest (RoI)** abstraction that bounds how much aggregate sidelobe interference is allowed to accumulate while restricting the optimization to a provably sufficient, minimal set of ground cells (making constellation-scale coordination computationally tractable); and **SkySched**, a flow-based beam–cell scheduling algorithm that the paper proves is min-cost-flow optimal in special cases and shows to be NP-hard in the general setting, for which it supplies a scalable near-optimal solver via feasibility repair.

Evaluated with real Starlink Gen2-mini constellation TLEs from CelesTrak over a simulated 24-hour period, against 25 of the ~50 operational single-dish Ku-band RAS sites worldwide (interferometric-array sites were excluded as more interference-tolerant), SkyShare is compared against Starlink's TBA and a Dynamic-TBA (DTBA) baseline that the authors construct by letting TBA's threshold parameters adapt for best-case coverage. Averaged across the 25 sites, SkyShare reduces unserved cells by up to 90.68% relative to the baselines while staying within EPFD limits; at 60° latitude — relevant to high-latitude European Ku-band sites such as Effelsberg and Mark II, where TBA degrades sharply from reduced satellite diversity — the improvement is 94.85% vs TBA and 92.72% vs DTBA. Forcing zero cell loss, SkyShare cuts mean EPFD by more than 48% (1-second scheduling window) and 41% (15-second window) relative to the baselines. For a representative 30 m Ku-band telescope, at zero coverage loss SkyShare achieves a 0.264 Jy sensitivity floor versus 0.530 Jy for TBA (a 3 dB improvement); allowing five unserved cells widens the gap to up to 15 dB better sensitivity, and even at a 60 m antenna diameter SkyShare still improves sensitivity by 3.38 dB.

## Summary (ZH)
NC State 大学的 Mehri、Ron、Shah，萨里大学的 Sastry，以及阿拉巴马大学亨茨维尔分校的 Roy 提出 **SkyShare**，已被 MobiCom'26（美国奥斯汀，2026 年 10 月 26–30 日）录用，是一套全星座调度系统，可在保护射电天文台（RAS）观测站免受 LEO 下行链路干扰的同时，维持网络覆盖。论文提出的动机是：目前已部署的缓解手段——SpaceX 星链的望远镜指向规避（Telescope Boresight Avoidance, TBA）是一种反应式、基于阈值的方案，当卫星与望远镜指向的角度间隔低于设定阈值时即关闭或转向波束——存在作者指出的两点局限：其一，它忽略了多颗卫星同时产生的 **旁瓣干扰累加效应**，论文证明这会累积成仅靠调整阈值也无法压制的残余噪声基底，除非进一步牺牲覆盖；其二，由于是反应式关闭波束而非在全星座范围内分配容量，它会在 RAS 站点周边造成持续的覆盖空洞。

SkyShare 完全运行在控制面（无需改动卫星硬件），将高精度轨道预测、符合 ITU 标准的等效功率通量密度（EPFD）干扰模型，以及通过运行数据共享（Operational Data Sharing, ODS）框架——即 SpaceX 与 NRAO 目前用于 TBA 的同一实时 RAS 元数据通道——获取的实时台站观测计划相结合。其两项贡献为：一是 **EPFD 预算约束下的兴趣区域（Region-of-Interest, RoI）** 抽象，限定允许累积的旁瓣干扰总量，同时将优化范围收缩到可证明充分的最小地面小区集合，从而使星座级协调在计算上可行；二是 **SkySched**，一种基于流的波束–小区调度算法，论文证明其在特殊情形下具有最小成本流最优性，在一般情形下问题为 NP 难，并为此给出通过可行性修复实现的可扩展近最优求解器。

评估使用 CelesTrak 提供的真实星链 Gen2-mini 星座 TLE 数据，模拟 24 小时窗口，针对全球约 50 个在运营单天线 Ku 频段 RAS 站点中的 25 个（干涉阵列站点因对干扰更具容忍度而被排除）。SkyShare 与星链 TBA 以及作者构造的动态 TBA（DTBA，令 TBA 阈值参数自适应以取得最佳覆盖）基线对比：在 25 个站点上平均，SkyShare 相对基线最多减少 90.68% 的未服务小区，同时保持在 EPFD 限值内；在 60° 纬度——即欧洲高纬度 Ku 频段站点（如 Effelsberg、Mark II）因卫星可见性下降而 TBA 表现急剧恶化的场景——相对 TBA 与 DTBA 分别提升 94.85% 与 92.72%。在强制零小区损失的条件下，SkyShare 使平均 EPFD 相对基线降低超过 48%（1 秒调度窗口）与 41%（15 秒窗口）。对一台典型的 30 米 Ku 频段望远镜，在零覆盖损失时 SkyShare 达到 0.264 Jy 的灵敏度下限，相较 TBA 的 0.530 Jy 提升 3 dB；允许 5 个未服务小区时差距扩大到最高 15 dB；即便天线口径达到 60 米，SkyShare 仍能带来 3.38 dB 的灵敏度提升。

## Key technical points (EN)
- **Baseline problem (as stated by the authors):** Starlink's deployed TBA reacts to instantaneous boresight angular separation only; it ignores aggregate sidelobe interference from many satellites and creates persistent coverage gaps near RAS sites.
- **EPFD-budgeted Region-of-Interest (RoI):** bounds residual sidelobe interference and restricts the scheduling optimization to a minimal, provably sufficient set of ground cells, making constellation-scale coordination tractable.
- **SkySched:** flow-based beam–cell assignment scheduler; the underlying LEO–RAS coexistence scheduling problem is shown NP-hard in general; SkySched is min-cost-flow optimal in special cases and near-optimal via feasibility repair otherwise. Requires no satellite hardware changes — control-plane only.
- **Data inputs:** high-fidelity orbital prediction + ITU-compliant EPFD modeling + real-time RAS schedules via the Operational Data Sharing (ODS) framework (the same channel already used by TBA).
- **Evaluation setup:** real Starlink Gen2-mini TLEs (CelesTrak), 24-hour simulated window, quasi-Earth-fixed H3 hex-grid cells (~252.9 km² each), Starlink antenna modeled as a 25×40 half-wavelength phased array, RAS antenna per ITU-R RA.1631, 25 of ~50 worldwide single-dish Ku-band RAS sites, compared against TBA and an author-constructed Dynamic-TBA (DTBA) upper-bound baseline.
- **Headline results:** up to 90.68% average reduction in unserved cells vs baselines within EPFD limits; 94.85%/92.72% improvement vs TBA/DTBA at 60° latitude; >48%/41% mean-EPFD reduction at zero cell loss (1s/15s windows); 3 dB sensitivity-floor improvement at zero coverage loss for a 30 m telescope, up to 15 dB at 5 unserved cells, 3.38 dB even at 60 m antenna diameter.

## Key technical points (ZH)
- **论文所述基线问题：** 星链已部署的 TBA 仅对瞬时指向角度间隔作出反应；忽略多颗卫星旁瓣干扰的累加效应，并在 RAS 站点周边造成持续覆盖空洞。
- **EPFD 预算约束兴趣区域（RoI）：** 限定残余旁瓣干扰的上限，并将调度优化限制在可证明充分的最小地面小区集合内，使星座级协调在计算上可行。
- **SkySched：** 基于流的波束–小区分配调度器；底层的 LEO–RAS 共存调度问题在一般情形下被证明为 NP 难；SkySched 在特殊情形下具有最小成本流最优性，其余情形通过可行性修复给出近最优解。完全运行在控制面，无需改动卫星硬件。
- **数据输入：** 高精度轨道预测 + 符合 ITU 标准的 EPFD 建模 + 经运行数据共享（ODS）框架获取的实时 RAS 观测计划（与 TBA 使用的同一通道）。
- **评估设置：** 使用 CelesTrak 真实星链 Gen2-mini TLE 数据，24 小时模拟窗口，准地固 H3 六边形网格小区（每个约 252.9 平方公里），星链天线建模为 25×40 半波长相控阵，RAS 天线参照 ITU-R RA.1631，覆盖全球约 50 个单天线 Ku 频段 RAS 站点中的 25 个，对比对象为 TBA 与作者构造的动态 TBA（DTBA）上界基线。
- **主要结果：** 相对基线未服务小区平均最多减少 90.68%，同时保持在 EPFD 限值内；60° 纬度相对 TBA/DTBA 分别提升 94.85%/92.72%；零小区损失下平均 EPFD 降低超过 48%/41%（1 秒/15 秒窗口）；30 米望远镜零覆盖损失时灵敏度下限提升 3 dB，允许 5 个未服务小区时最高提升 15 dB，即便 60 米口径仍提升 3.38 dB。

## Why it matters / what's new (EN)
This knowledge base's NGSO-regulation coverage has tracked LEO–RAS coexistence mostly from the *measurement* side — SNIFFLES I (2026-08-18) characterized what Starlink, OneWeb and Guowang actually radiate into protected radio-astronomy bands. SkyShare is the first entry on the *mitigation-system* side: rather than measuring the problem, it proposes and evaluates a concrete scheduling replacement for the reactive TBA mechanism SNIFFLES's own regulatory framing referenced, using the same real-world Starlink constellation geometry and the same ODS data-sharing channel already in production use. It is also the first entry in this knowledge base's satellite coverage to bring a min-cost-flow / NP-hardness formalization to a spectrum-coexistence scheduling problem, and — being MobiCom'26-accepted — represents a systems-networking (rather than purely EE/RF) treatment of the RAS-coexistence question the SNIFFLES entry opened.

## Why it matters / what's new (ZH)
知识库 ngso-regulation 板块此前对 LEO–RAS 共存的追踪主要来自*测量*一侧——SNIFFLES I（2026-08-18）刻画了星链、OneWeb 与国网实际向受保护射电天文频段辐射了什么。SkyShare 是*缓解系统*一侧的首个条目：它不是测量问题，而是针对 SNIFFLES 自身监管论述中提及的反应式 TBA 机制，提出并评估了一套具体的调度替代方案，使用了同样真实的星链星座几何数据，以及同一套已在生产环境中使用的 ODS 数据共享通道。这也是本知识库卫星板块首个将最小成本流 / NP 难形式化方法引入频谱共存调度问题的条目；作为 MobiCom'26 录用论文，它以系统网络视角（而非纯电磁/射频视角）回应了 SNIFFLES 条目开启的 RAS 共存议题。
