---
id: 2026-09-16_arxiv-galileo-sas-authenticated-timing
date_published: 2026-09-14
date_found: 2026-09-16
type: academic-paper
technology: satellite
title_en: "First Galileo SAS Authenticated Time Solution"
title_zh: "首个基于伽利略 SAS 认证信号的授时方案"
url: "https://arxiv.org/abs/2609.15824"
source_quality: full
topics: [Galileo, SAS, GNSS-authentication, OSNMA, E6-C, PNT-security]
topic_primary: ngso-regulation
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Galan-Figueras, Fernandez-Hernandez, De Wilde, Terris-Gallego, Seco-Granados, O'Driscoll, De Bast, and Pollin (KU Leuven; DG DEFIS, European Commission; Septentrio, part of Hexagon; Univ. Autonoma de Barcelona / CERES / IEEC; and an independent consultant in Cork, Ireland) submitted a paper on 2026-09-14 titled "First Galileo SAS Authenticated Time Solution." The paper addresses GNSS spoofing vulnerabilities by computing a timing solution from Galileo's Signal Authentication Service (SAS), which authenticates the E6-C ranging signal itself rather than the navigation data message (the function already covered by OSNMA). The authors state they present, "to the authors' knowledge, for the first time, a timing solution computed from an authenticated civil GNSS signal."

The method uses a snapshot software receiver — a Septentrio Mosaic G5 prototype SDR — to record E6-C signals at 10 MHz sampling with 2-bit quantization, taking 50 ms RF snapshots every 200 ms in synchronisation with Galileo System Time. It decrypts Re-Encrypted Code Sequences (RECS) using TESLA keys - for this proof of concept retrieved over an internet side channel from the public OSNMAlib API - then correlates them against the recorded Encrypted Code Sequences (ECS) to extract an authenticated pseudorange. The timing equation isolates receiver clock bias as the only unknown, with geometric range, satellite clock bias, and ionospheric/tropospheric delay all supplied externally (RINEX ephemeris obtained via a secure side channel, the NeQuickG ionosphere model, and the Saastamoinen troposphere model with the Niell mapping function), plus a precisely surveyed static antenna position. The paper notes that an operational receiver would instead take these parameters from E1-B and authenticate them with OSNMA.

SAS currently operates on only two Galileo satellites in elliptical orbit, with a maximum of one visible at any given location at a time, so the method was calibrated over four satellite passes (two of E14 and two of E18, all recorded in an open-sky environment near Leuven, Belgium) (mean estimated instrumental clock bias of 5.366 microseconds) and evaluated over a 210-minute pass of satellite E18 on 2026-09-09. After removing the estimated instrumental bias, the timing solution achieved an RMS error of 20.0 ns (5.99 m). Authentication latency is at least 10 seconds, with authenticated epochs available every 30 seconds.

## Summary (ZH)

Galan-Figueras、Fernandez-Hernandez、De Wilde、Terris-Gallego、Seco-Granados、O'Driscoll、De Bast 与 Pollin（分别来自鲁汶大学；欧盟委员会 DG DEFIS；Septentrio（隶属 Hexagon）；巴塞罗那自治大学 CERES/IEEC；以及一位常驻爱尔兰科克的独立顾问）于 2026 年 9 月 14 日提交了题为《First Galileo SAS Authenticated Time Solution》的论文。该论文针对 GNSS 欺骗（spoofing）风险，提出利用伽利略信号认证服务（SAS）计算授时解——SAS 认证的是 E6-C 测距信号本身，而非导航电文数据（该功能已由 OSNMA 覆盖）。作者称，"据作者所知，这是首次由经过认证的民用 GNSS 信号计算出的授时解"。

该方法使用一台快照式软件接收机——Septentrio Mosaic G5 原型 SDR——以 10 MHz 采样率、2 比特量化录制 E6-C 信号，每 200 毫秒进行一次与伽利略系统时间同步的 50 毫秒射频快照。接收机利用 TESLA 密钥（本概念验证中通过互联网侧信道从公开的 OSNMAlib API 获取）解密重加密码序列（RECS），再将其与录制的加密码序列（ECS）进行相关运算，从而提取经认证的伪距。授时方程中仅将接收机钟差设为未知量，几何距离、卫星钟差以及电离层/对流层延迟均由外部提供（经安全侧信道获取的 RINEX 星历、NeQuickG 电离层模型，以及配合 Niell 映射函数的 Saastamoinen 对流层模型），并配合精确测量的静态天线位置。论文指出，实际运行的接收机将改为从 E1-B 获取这些参数并用 OSNMA 认证。

由于 SAS 目前仅在两颗处于椭圆轨道的伽利略卫星上运行，且任一地点同一时刻最多只能看到一颗，团队基于四次卫星过境（E14 与 E18 各两次，均记录于比利时鲁汶附近的开阔天空环境）进行了标定（估计平均仪器钟差为 5.366 微秒），并在 2026 年 9 月 9 日对 E18 卫星长达 210 分钟的一次过境进行了评估。在扣除估计的仪器偏差后，授时解的均方根误差为 20.0 纳秒（合 5.99 米）。认证延迟至少为 10 秒，认证历元每 30 秒可用一次。

## Key technical points (EN)

- **Contribution (paper's own claim):** "the first timing solution computed from an authenticated civil GNSS signal" — using Galileo SAS on the E6-C signal, as distinct from OSNMA's navigation-message authentication.
- **Signal chain:** Septentrio mosaic-G5 snapshot SDR (internal prototype firmware), 10 MHz sampling, 2-bit quantization, 50 ms RF snapshots every 200 ms synchronised to GST; RECS decrypted with TESLA keys (fetched here from the public OSNMAlib API) and correlated against recorded ECS to obtain an authenticated pseudorange.
- **Timing model:** pseudorange equation ρ = r + b − dt·c + I + T + ε_ρ, solved for receiver clock bias b, with geometric range, satellite clock bias, and atmospheric delays supplied by RINEX ephemeris, NeQuickG, and Saastamoinen models.
- **Availability constraint:** SAS is active on only two elliptical-orbit Galileo satellites (E14 and E18, 180 degrees apart in a common plane with eccentricity 0.162), with at most one visible at a time from a given location.
- **Results:** mean instrumental clock bias of 5.366 μs from four calibration passes; RMS timing error of 20.0 ns (5.99 m) over a 210-minute pass of satellite E18 on 2026-09-09 after bias removal; minimum authentication latency of 10 s; authenticated epochs every 30 s.

## Key technical points (ZH)

- **贡献（论文自述）：** "首次由经过认证的民用 GNSS 信号计算出授时解"——使用伽利略 SAS 对 E6-C 信号进行认证，区别于 OSNMA 对导航电文的认证。
- **信号处理链：** Septentrio mosaic-G5 快照式 SDR（内部原型固件），10 MHz 采样，2 比特量化，每 200 毫秒进行一次与 GST 同步的 50 毫秒射频快照；利用 TESLA 密钥（本文自公开 OSNMAlib API 获取）解密 RECS，与录制的 ECS 相关运算得到经认证的伪距。
- **授时模型：** 伪距方程 ρ = r + b − dt·c + I + T + ε_ρ，仅将接收机钟差 b 设为未知量，几何距离、卫星钟差及大气延迟分别由 RINEX 星历、NeQuickG 与 Saastamoinen 模型提供。
- **可用性限制：** SAS 目前仅在两颗椭圆轨道伽利略卫星（E14 与 E18，同一轨道面内相隔 180 度，偏心率 0.162）上运行，同一地点同一时刻最多可见一颗。
- **结果：** 四次标定过境得到的平均仪器钟差为 5.366 微秒；2026 年 9 月 9 日对 E18 卫星长达 210 分钟过境的评估中，扣除仪器偏差后授时均方根误差为 20.0 纳秒（合 5.99 米）；最小认证延迟为 10 秒，认证历元每 30 秒可用一次。

## Why it matters / what's new (EN)

The paper frames this as a feasibility demonstration ahead of full SAS operational deployment, distinct from OSNMA (which authenticates the navigation message, not the ranging code itself). The reported accuracy is stated by the authors to be consistent with expected residual errors from orbit, atmospheric, and multipath effects in a single-satellite, single-frequency scenario — i.e., a proof of concept rather than an operational-grade result, constrained today by SAS's two-satellite deployment.

## Why it matters / what's new (ZH)

论文将此定位为在 SAS 全面运营部署之前的可行性验证，区别于 OSNMA（后者认证导航电文，而非测距码本身）。作者指出，所报告的精度与单星、单频场景下轨道、大气及多径效应带来的预期残余误差相符——即这是一项概念验证，而非可运行级别的结果，且目前受限于 SAS 仅两颗卫星的部署规模。

## Images

None.
