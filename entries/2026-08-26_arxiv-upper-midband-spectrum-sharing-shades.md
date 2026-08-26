---
id: 2026-08-26_arxiv-upper-midband-spectrum-sharing-shades
date_published: 2026-08-24
date_found: 2026-08-26
type: academic-paper
technology: cellular
title_en: "5 Shades of Cooperation: Spectrum Sharing in the Upper-Mid Band (FR3)"
title_zh: "合作的五个层级：上中频段（FR3）频谱共享"
url: "https://arxiv.org/abs/2608.23170"
source_quality: full
topics: [FR3, upper-mid-band, 7GHz, spectrum-sharing, inter-operator, MU-MIMO, beamforming, nulling, interference-management, Sionna-RT, ray-tracing, MNO-cooperation]
topic_primary: cellular-spectrum
topics_secondary: [cellular-massive-mimo, 6g-vision]
novelty_score: 3
---

## Summary (EN)
A Politecnico di Milano team (Ceresoli, Mezzavilla, Filippini, Capone) quantifies how much inter-operator cooperation is actually needed to share the upper-mid band (FR3). The setting: exclusively licensed spectrum carved into fixed frequency-orthogonal blocks leaves capacity idle under heterogeneous, time-varying traffic, while FR3 at 7 GHz — the leading 6G candidate band — has wider beams and stronger inter-cell coupling than mmWave, so full-band reuse across operators lives or dies on spatial interference management.

The paper frames sharing as a continuum of five "shades": S0 orthogonal blocks (no cross-operator interference, heavy multiplexing loss); S1 non-cooperative full-band reuse (each operator nulls only its own users); S2 "selfish" cooperation (cross-operator victim protection at half strength, needs foreign CSI); S3 "selfless" cooperation (foreign victims protected equally to own users); and S4 scheduling-aware cooperation (upper bound, requires knowing foreign operators' live schedules). The mechanism is two-weight MU-MIMO precoding with long-term beamforming over frequency-averaged spatial covariances, plus correlation-aware scheduling solved by column generation. Evaluation is site-specific: a Sionna-RT ray-traced university campus with 27 base stations (3 operators x 9 sectors), 256-antenna 16x16 UPAs, 100 MHz at 7 GHz, 10 UEs per sector, 20 Monte Carlo drops. Result: cooperative shades S2/S3 reach ~75 Mbps median and ~117 Mbps mean per-UE rate versus 30/24 Mbps median for orthogonal/non-cooperative — a >2.5x median gain — and S2's half-weight nulling nearly matches S3, i.e. most of the benefit needs only modest, standardizable CSI metadata exchange. Full schedule sharing (S4, 119 Mbps median) adds ~50% more but is operationally impractical.

## Summary (ZH)
米兰理工团队（Ceresoli、Mezzavilla、Filippini、Capone）量化了共享上中频段（FR3）究竟需要多深的运营商间合作。背景：按固定正交频块独占授权的频谱在异构、时变业务下大量闲置；而 7 GHz 的 FR3——6G 主候选频段——波束比毫米波更宽、小区间耦合更强，跨运营商全频段复用的成败完全取决于空间干扰管理。

论文把共享表述为五个"层级"的连续谱：S0 正交频块（无跨运营商干扰、多路复用损失大）；S1 非合作全频段复用（各运营商只对自家用户做置零）；S2"利己"合作（对他网受害者以半强度保护，需要对方 CSI）；S3"利他"合作（他网受害者与自家用户同等保护）；S4 调度感知合作（上界，需知晓他网实时调度）。机制是双权重 MU-MIMO 预编码 + 基于频率平均空间协方差的长期波束赋形，配合列生成求解的相关性感知调度。评估是站点级的：Sionna-RT 射线追踪的大学校园、27 个基站（3 运营商 x 9 扇区）、256 天线 16x16 UPA、7 GHz 100 MHz、每扇区 10 个 UE、20 次蒙特卡洛。结果：合作层级 S2/S3 达到每 UE 中位速率约 75 Mbps、均值约 117 Mbps，而正交/非合作仅 30/24 Mbps 中位——中位增益超过 2.5 倍；且 S2 的半权重置零几乎追平 S3，即大部分收益只需适度的、可标准化的 CSI 元数据交换。完整调度共享（S4，中位 119 Mbps）再增约 50%，但运营上不现实。

## Key technical points (EN)
- Five-shade continuum: S0 orthogonal / S1 non-cooperative reuse / S2 selfish cooperation (foreign-victim nulling weight xi = mu/2) / S3 selfless (xi = mu) / S4 scheduling-aware upper bound.
- Precoding: two-weight MU-MIMO (own-user weight mu, foreign-victim weight xi) with long-term beamforming over frequency-averaged spatial covariances — no instantaneous cross-operator CSI needed for S2/S3.
- Correlation-aware scheduling via column generation; 500 most-probable joint scheduling states retained for tractable ergodic evaluation.
- Scenario: ray-traced (Sionna RT, ITU concrete materials) campus, 27 BSs = 3 MNOs x 3 sites x 3 sectors, 16x16 UPAs (256 elements), 7 GHz / 100 MHz, 10 UEs per sector, 20 Monte Carlo realizations.
- Per-UE rates (median/mean, Mbps): S0 30.1/38.4; S1 24.5/78.1; S2-S3 ~75/117-118; S4 119.1/130.7. Cooperative shades >2.5x median over both S0 and S1.
- Key insight: S2 ≈ S3 once residual leakage falls below the noise floor — half-strength victim protection captures nearly all the cooperative gain, so the required inter-MNO exchange is modest and standardizable.
- FR3-specific motivation: wider beams than mmWave mean nulling (not just beam separation) is the binding resource; the paper trades spatial DoF for interference suppression.
- Fresh v1 submitted 2026-08-24, cs.NI; no prior-venue banner — passes the postprint guard.

## Key technical points (ZH)
- 五层级连续谱：S0 正交 / S1 非合作复用 / S2 利己合作（他网受害者置零权重 xi = mu/2）/ S3 利他（xi = mu）/ S4 调度感知上界。
- 预编码：双权重 MU-MIMO（自家用户权重 mu、他网受害者权重 xi）+ 基于频率平均空间协方差的长期波束赋形——S2/S3 不需要跨运营商瞬时 CSI。
- 列生成求解相关性感知调度；保留 500 个最可能联合调度状态以实现可计算的遍历评估。
- 场景：射线追踪（Sionna RT，ITU 混凝土材质）校园、27 基站 = 3 运营商 x 3 站址 x 3 扇区、16x16 UPA（256 阵元）、7 GHz / 100 MHz、每扇区 10 UE、20 次蒙特卡洛。
- 每 UE 速率（中位/均值，Mbps）：S0 30.1/38.4；S1 24.5/78.1；S2-S3 约 75/117-118；S4 119.1/130.7。合作层级中位速率较 S0 与 S1 均超 2.5 倍。
- 核心洞察：残余泄漏降至噪声底以下后 S2 ≈ S3——半强度受害者保护已捕获几乎全部合作增益，所需运营商间交换适度且可标准化。
- FR3 特有动机：波束比毫米波宽，置零（而非单纯波束分离）成为紧约束资源；论文用空间自由度换取干扰抑制。
- 2026-08-24 提交的新 v1，cs.NI；无既往发表标记——通过重印守卫。

## Why it matters / what's new (EN)
The KB's FR3 thread has covered coexistence with incumbents (terrestrial/satellite FR3 coexistence, 06-13) and FR3 hardware, and the cellular-spectrum bin is dominated by regulator-side items (NTIA/FCC band pipeline); this is the first entry on *operator-to-operator* sharing mechanics inside a candidate 6G band — the question regulators will implicitly delegate to MNOs if upper-mid-band licenses are issued with sharing conditions. The five-shade framing is a useful vocabulary: it turns "should operators share FR3?" into "which coordination artifacts must be exchanged for which fraction of the gain," and the headline finding — half-strength victim nulling with only statistical CSI captures nearly all of the >2.5x median gain, while live schedule sharing adds 50% more but is impractical — is exactly the kind of result that shapes what an inter-operator interface would need to standardize (covariance/CSI metadata, not schedules). The site-specific ray-traced methodology (real campus geometry, 3 overlapping MNO deployments) also raises the evidence bar over the stochastic-geometry sharing literature. Caveats: single scenario, fixed load, and the column-generation scheduler's scalability is untested beyond 27 BSs. Watch for follow-ups linking the shades to concrete 3GPP/ETSI sharing frameworks and to the US lower-3/7-8 GHz sharing debates already in the KB.

## Why it matters / what's new (ZH)
知识库的 FR3 线索此前覆盖与既有系统的共存（地面/卫星 FR3 共存，06-13）与 FR3 硬件，蜂窝频谱栏目则以监管侧条目为主（NTIA/FCC 频段管线）；这是首个关于候选 6G 频段内*运营商对运营商*共享机制的条目——若上中频段牌照附带共享条件，这正是监管者将隐式下放给运营商的问题。五层级表述提供了有用的词汇：它把"运营商该不该共享 FR3"转化为"为获得多大比例的增益需要交换哪些协调工件"；而核心发现——仅用统计 CSI 的半强度受害者置零即可捕获超 2.5 倍中位增益的几乎全部，实时调度共享再加 50% 但不现实——恰是决定运营商间接口需要标准化什么（协方差/CSI 元数据而非调度信息）的那类结果。站点级射线追踪方法（真实校园几何、3 个重叠运营商部署）也把证据标准抬高于随机几何共享文献。注意：单一场景、固定负载，列生成调度器在 27 基站以上的可扩展性未验证。关注后续将五层级对接具体 3GPP/ETSI 共享框架、以及与库中已有的美国 lower-3/7-8 GHz 共享辩论的联动。

## Images
