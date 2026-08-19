---
id: 2026-08-19_tches-fast-hrp-uwb-security-testing
date_published: 2026-01-16
date_found: 2026-08-19
type: academic-paper
technology: uwb
title_en: "FAST: Fast and Accurate Security Testing of HRP UWB Chips (importance-sampling estimation of Ghost-Peak success rates on Qorvo DWM3000, NXP SR040/SR150)"
title_zh: "FAST：HRP UWB 芯片的快速精确安全测试——用重要性采样估计 Ghost Peak 距离缩短攻击成功率（Qorvo DWM3000、NXP SR040/SR150 实测）"
url: "https://doi.org/10.46586/tches.v2026.i1.500-532"
source_quality: full
topics: [UWB, HRP, 802.15.4z, STS, secure-ranging, Ghost-Peak, distance-reduction, importance-sampling, DWM3000, Trimension]
topic_primary: uwb-security
topics_secondary: [uwb-ranging, uwb-fi-ra]
novelty_score: 3
---

## Summary (EN)

An ETH Zurich / University of Genoa team (Graciana Aad, Giovanni Camurati, Matteo Dell'Amico, Srdjan Capkun) publishes **FAST** in IACR TCHES Vol. 2026 No. 1 (pp. 500–532; received Jul 2025, published 16 Jan 2026, CC-BY, code on Zenodo record 17295874). The problem: IEEE 802.15.4z HRP UWB protects ranging with the 4096-pulse Scrambled Timestamp Sequence (STS), but the standard does not say how a receiver must *verify* the STS, so every commercial chip runs a proprietary cross-correlation / leading-edge algorithm whose security level has no closed-form expression. Random-guess distance-reduction attacks such as Ghost Peak (up to 4% success on Apple U1) exploit exactly that verification slack. Evaluators — chip makers, integrators, certification labs — therefore need to *measure* how often a random-STS injection is accepted, but naive testing of a success rate near 2^-20 or lower would need millions of trials per configuration.

FAST solves this with **importance sampling**: because the tester knows the STS the victim expects (dev-kit key/IV/counter, or decoded over the air), it can bias the injected packet to contain a chosen number n_c of correct pulses out of 4096, then re-weight the observed accept/reject outcomes to recover the unbiased success rate with a 90% confidence interval. A ~500-sample calibration phase picks the sampling distribution that minimises estimator variance; ~5,000–10,000 test samples per scenario are then enough to pin down rates from 2^-10 down to the brute-force floor of 2^-128, whereas naive sampling could not observe a single success at 2^-15 in 10,000 tries. Attack signals are generated in software (standard MP-SRRC pulses, 802.15.4a channel models, LoS/NLoS) and injected via an R&S SMW200A signal generator, either through coax into a Qorvo DWM3000EVB (with dev-kit diagnostics: STS quality, STS_TOAST flags, full CIR) or over the air into two NXP Trimension chips (SR040 + SR150 running the MK UWB Kit two-way-ranging demo, distance readout only, in an anechoic box with a DWM3000 as reactive trigger).

Findings: on the DWM3000, an attack alone (no legitimate signal) never succeeds (< 2^-128) because the main-peak check is strict, but a Ghost-Peak style reactive injection *on top of* the legitimate signal passes the more tolerant early-peak (backsearch) check; earliest accepted advancement ~248 ns (up to ~74 m if all packets are attacked, ~20 m if one DS-TWR packet is). Sweeping the three documented verification registers, STS_MNTH has the strongest effect (2^-12.5 at 0x10 to < 2^-128 at 0x4C), STS_NTM goes from 2^-12 at 12 to 2^-56.7 at 31, STS_PMULT hardly matters; at −50 dBm the false-rejection cost of stricter thresholds is small, but becomes problematic in weak-signal NLoS channels. Attacker-to-main-peak amplitude ratio saturates above ~0.75. The PURE receiver (absolute CIR-peak threshold, Coppola et al. 2024) implemented on the same chip drops from 2^-14.8 to 2^-35.4 as its threshold rises 300→500. On the closed NXP parts, the SR040 sits around 2^-41 to 2^-98 and rejects attacks with a normal preamble-to-STS ratio (suggesting a preamble/STS consistency check), whereas the SR150 default demo accepts random-STS injections at ~2^-13 to 2^-17 — and both the DWM3000 and SR150 also accept STSs with *all bits flipped* (two-sided acceptance). The authors stress FAST measures insecurity against a *specific* attack strategy, not a general security level, and argue the same importance-sampling recipe applies to any ranging system with a guessed secret field (LRP UWB, Wi-Fi 802.11az secure LTF, Bluetooth Channel Sounding, GNSS spreading-code authentication).

## Summary (ZH)

苏黎世联邦理工与热那亚大学团队（Graciana Aad、Giovanni Camurati、Matteo Dell'Amico、Srdjan Capkun）在 IACR TCHES 2026 年第 1 期（第 500–532 页；2025 年 7 月投稿，2026 年 1 月 16 日发表，CC-BY，代码见 Zenodo 17295874）提出 **FAST**。问题背景：IEEE 802.15.4z HRP UWB 用 4096 脉冲的加扰时间戳序列（STS）保护测距，但标准并未规定接收机如何*校验* STS，因此各商用芯片都跑着自家的互相关/前沿检测算法，安全等级没有闭式表达；Ghost Peak 之类的随机猜测距离缩短攻击（对 Apple U1 成功率高达 4%）正是利用这一校验松弛。芯片厂、集成商、认证实验室需要*实测*随机 STS 注入被接受的概率，但对 2^-20 及以下的成功率，朴素测试每个配置都要数百万次尝试。

FAST 的做法是**重要性采样**：测试者知道被测芯片期望的 STS（开发套件的 key/IV/counter，或空口解码得到），于是可以让注入包在 4096 个脉冲中恰好含 n_c 个正确脉冲，再按采样偏置对接受/拒绝结果重新加权，恢复无偏成功率及 90% 置信区间。约 500 个样本的标定阶段先找到最小化估计方差的采样分布；随后每个场景 5,000–10,000 个测试样本即可把 2^-10 到暴力破解下限 2^-128 的成功率量出来，而朴素采样在 2^-15 时 1 万次都观察不到一次成功。攻击信号在软件中生成（标准 MP-SRRC 脉冲、802.15.4a 信道模型、LoS/NLoS），经 R&S SMW200A 信号源注入：或通过同轴线接入 Qorvo DWM3000EVB（可读 STS 质量、STS_TOAST 标志、完整 CIR），或在电波暗箱中空口注入两颗 NXP Trimension（SR040 + SR150 跑 MK UWB Kit 双向测距演示，只能读距离，用一块 DWM3000 做反应式触发）。

结论：在 DWM3000 上，单独发攻击（无合法信号）永远失败（< 2^-128），因为主峰校验很严；但 Ghost Peak 式的叠加在合法信号之上的反应式注入能通过更宽松的早峰（回溯）校验，可提前约 248 ns（全部报文被攻时相当于约 74 m，仅攻一条 DS-TWR 报文约 20 m）。扫描三个已文档化的校验寄存器：STS_MNTH 影响最大（0x10 时 2^-12.5，0x4C 时 < 2^-128），STS_NTM 从 12 的 2^-12 到 31 的 2^-56.7，STS_PMULT 几乎无影响；−50 dBm 下收紧门限的误拒代价很小，但在弱信号 NLoS 信道下会成为问题。攻击/主峰幅度比在约 0.75 以上饱和。同一芯片上实现的 PURE 接收机（绝对 CIR 峰值门限，Coppola 等 2024）门限从 300 提到 500，成功率从 2^-14.8 降到 2^-35.4。封闭的 NXP 器件中，SR040 约在 2^-41 到 2^-98，且对正常前导码/STS 幅度比的攻击予以拒绝（暗示有前导码与 STS 一致性校验）；SR150 默认演示则以约 2^-13 到 2^-17 接受随机 STS 注入——而且 DWM3000 与 SR150 都会接受*所有比特翻转*的 STS（双侧接受域）。作者强调 FAST 度量的是对*特定*攻击策略的不安全度而非通用安全等级，并指出同一重要性采样配方适用于任何带猜测秘密字段的测距系统（LRP UWB、Wi-Fi 802.11az 安全 LTF、蓝牙信道探测、GNSS 扩频码认证）。

## Key technical points (EN)

- **Gap addressed:** 802.15.4z standardises STS *generation* (AES-CTR, 4096 pulses) but not STS *verification*; commercial HRP receivers use proprietary cross-correlation + leading-edge (backsearch) logic with no closed-form security level.
- **Method:** importance sampling over the number of correct pulses n_c in the injected STS (evaluator knows the expected STS); adaptive calibration (~500 samples) then ~5k–10k weighted test samples per scenario; reports success rate + 90% CI; 2^-128 used as the key-brute-force floor.
- **Setup:** software-generated attack waveforms → R&S SMW200A; coax into Qorvo DWM3000EVB (nRF52 DK host, dev-kit diagnostics) and PURE-on-DWM3000; over-the-air into NXP SR040/SR150 two-way ranging in an anechoic box, with a DWM3000 sniffer as reactive Ghost-Peak trigger and an oscilloscope to decode the live STS.
- **DWM3000 results:** attack-alone < 2^-128; reactive injection on top of legitimate signal ~2^-10 to 2^-12 at defaults; STS_MNTH sweep 2^-12.5 → < 2^-128, STS_NTM 12→31 gives 2^-12 → 2^-56.7, STS_PMULT negligible; max accepted advancement ~248 ns; success saturates for attacker/main-peak ratio > 0.75; chip accepts all-bits-flipped STS.
- **PURE receiver:** absolute-threshold acceptance 300/400/500 → 2^-14.8 / 2^-23.7 / 2^-35.4; security–reliability trade-off becomes acute only in weak-signal NLoS channels.
- **NXP results:** SR040 ~2^-41 (pre2sts 0.25) to ~2^-98 (pre2sts 1.0), i.e. lowering the preamble amplitude is needed for the attack; SR150 default demo ~2^-13 to 2^-17 with little pre2sts dependence; SR150 two-sided acceptance, SR040 one-sided.
- **Naive vs FAST:** at STS_NTM=16 naive testing saw zero successes in 10,016 samples; FAST estimated 2^-14.8 (CI 2^-15.3…2^-14.5) from ~9.8k samples.
- **Scope:** measures insecurity to a chosen attack family (random-guess / Ghost Peak), not a general bound; requires knowledge of the expected STS and an accept/reject observable; code released (Zenodo 17295874).

## Key technical points (ZH)

- **针对的空白：** 802.15.4z 规定了 STS 的*生成*（AES-CTR，4096 脉冲）却未规定*校验*；商用 HRP 接收机采用私有的互相关 + 前沿（回溯）逻辑，安全等级无闭式表达。
- **方法：** 对注入 STS 中正确脉冲数 n_c 做重要性采样（评测者已知期望 STS）；约 500 样本自适应标定，随后每场景约 5k–10k 加权测试样本；输出成功率与 90% 置信区间；以 2^-128 作为密钥暴力破解下限。
- **平台：** 软件生成攻击波形 → R&S SMW200A；同轴接入 Qorvo DWM3000EVB（nRF52 DK 主控，可读开发套件诊断）及 DWM3000 上的 PURE；在电波暗箱中空口注入 NXP SR040/SR150 双向测距，用一块 DWM3000 嗅探器做反应式 Ghost Peak 触发，示波器解码实时 STS。
- **DWM3000 结果：** 单独攻击 < 2^-128；叠加合法信号的反应式注入在默认配置约 2^-10 到 2^-12；STS_MNTH 扫描 2^-12.5 → < 2^-128，STS_NTM 12→31 对应 2^-12 → 2^-56.7，STS_PMULT 影响可忽略；最大可接受提前量约 248 ns；攻击/主峰幅度比 > 0.75 后成功率饱和；芯片接受全比特翻转的 STS。
- **PURE 接收机：** 绝对门限 300/400/500 → 2^-14.8 / 2^-23.7 / 2^-35.4；仅在弱信号 NLoS 信道下安全—可靠性折中才变得尖锐。
- **NXP 结果：** SR040 约 2^-41（pre2sts 0.25）到约 2^-98（pre2sts 1.0），即攻击需压低前导码幅度；SR150 默认演示约 2^-13 到 2^-17，对 pre2sts 不敏感；SR150 为双侧接受域，SR040 为单侧。
- **朴素 vs FAST：** STS_NTM=16 时朴素测试 10,016 个样本零成功；FAST 用约 9.8k 样本估出 2^-14.8（区间 2^-15.3…2^-14.5）。
- **适用范围：** 度量对选定攻击族（随机猜测/Ghost Peak）的不安全度而非通用上界；需要已知期望 STS 与可观测的接受/拒绝信号；代码已开源（Zenodo 17295874）。

## Why it matters / what's new (EN)

This is the first entry in the KB's uwb-security bin with a primary focus on secure ranging itself, and the first peer-reviewed 2026 evidence on how the *shipping* HRP silicon behind FiRa / CCC Digital Key / Aliro actually behaves under random-STS injection. Earlier KB coverage treats security as a feature claim (Infineon AIROC TSL100 secure ranging, 2026-06-27; CSA Aliro 1.0 relay-resistance via UWB, 2026-08-18; NXP NCJ29D6 for BMW, 2026-08-05); FAST supplies the missing measurement methodology and concrete numbers: default DWM3000 configurations sit near 2^-10 to 2^-12 per attempt, the register STS_MNTH is the lever that buys 2^-128, and two of the three tested chips accept fully-inverted STSs. For FiRa Plugfest #2 (Sep 15–17, hosted by ST) and any 4ab certification programme, an importance-sampling test like FAST is the practical way to certify a security level for a proprietary receiver — the paper explicitly targets manufacturers testing interoperating chips. It also generalises to Wi-Fi 802.11az secure LTF and Bluetooth Channel Sounding (KB bt-channel-sounding), so the methodology is cross-technology. Ingested as an in-window catch-up (published Jan 2026; TCHES is not on the arxiv listing the scout normally sweeps).

## Why it matters / what's new (ZH)

这是本 KB uwb-security 类目中第一条以安全测距本身为主题的条目，也是 2026 年首个经同行评审、直接说明 FiRa / CCC 数字钥匙 / Aliro 背后*量产* HRP 芯片在随机 STS 注入下真实表现的证据。此前 KB 对安全性的覆盖都停留在特性声明层面（Infineon AIROC TSL100 安全测距，2026-06-27；CSA Aliro 1.0 依赖 UWB 抗中继，2026-08-18；NXP NCJ29D6 供 BMW，2026-08-05）；FAST 补上了缺失的测量方法与具体数字：DWM3000 默认配置每次尝试约 2^-10 到 2^-12，STS_MNTH 是把成功率压到 2^-128 的杠杆，三颗被测芯片中有两颗接受全反相的 STS。对 FiRa Plugfest #2（9 月 15–17 日，ST 主办）及任何 4ab 认证项目而言，FAST 这类重要性采样测试是为私有接收机认证安全等级的现实路径——论文明确面向需要测试互操作芯片的厂商。它还可推广到 Wi-Fi 802.11az 安全 LTF 与蓝牙信道探测（KB bt-channel-sounding），方法论是跨技术的。作为窗口内补录收录（2026 年 1 月发表；TCHES 不在本 scout 常规扫描的 arxiv 列表内）。
