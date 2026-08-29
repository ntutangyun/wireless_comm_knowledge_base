---
id: 2026-08-29_arxiv-quantum-secure-time-transfer-satellites
date_published: 2026-08-25
date_found: 2026-08-29
type: academic-paper
technology: satellite
title_en: "Quantum-Secure Time Transfer for satellites (UNSW) — an entanglement-based QSTT demonstration over an emulated 63 dB LEO downlink: 63 ps GPS-free clock precision, 3.29 bit/s finite-key QKD rate and a 30x improvement over Micius"
title_zh: "面向卫星的量子安全时间传递（QSTT，UNSW）——在模拟 63 dB 损耗 LEO 下行信道上的纠缠式实验演示：63 ps 级不依赖 GPS 的时钟同步精度、3.29 bit/s 有限码长密钥率，较墨子号提升约 30 倍"
url: "https://arxiv.org/abs/2608.24092"
source_quality: full
topics: [QKD, quantum-secure-time-transfer, entanglement, PNT, time-synchronization, GPS-free, post-quantum-cryptography, spoofing-resistance, optical-downlink, Micius]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)
Adhikari, Rani, Gupta, Ai and Malaney (arxiv quant-ph, 25 Aug 2026) report a laboratory demonstration of **Quantum-Secure Time Transfer (QSTT)** aimed at satellite-to-ground links. The premise is that the timing layer of space infrastructure is now a named attack surface: GPS/GNSS-disciplined clocks, NTP and White Rabbit are all vulnerable to jamming, meaconing, delay attacks and spoofing, and a satellite whose clock can be walked off by an adversary loses ranging, TDD framing and log integrity at once. QSTT replaces the trusted external time reference with the temporal correlation of entangled photon pairs, so both the *synchronization* and the *confidentiality/authenticity* of the exchanged time tags come from the same quantum channel.

The entangled-photon source is a **type-0 PPKTP crystal in a Sagnac interferometer** (1x2x30 mm, 3.425 um grating, 405.5 nm CW pump, degenerate 811 nm output) rather than the type-II source flown on Micius. Type-0 phase matching raises pair-generation brightness by roughly two orders of magnitude (>10^6 pairs/s/mW at 0.5 mW; 4.4x10^8 pairs/s at 14 mW) at the cost of polarization visibility, measured here at 88% with a Bell parameter S = 2.48. The satellite channel is emulated on a 1.2 m free-space bench with variable attenuators summing to **63 dB total loss** (32.5 dB on Alice's arm, 30.5 dB on Bob's), chosen so that the coincidence-to-generation ratio matches the loss regime Micius actually experienced; 216 coincidences/s are recovered at the receivers.

Synchronization runs in two stages with no external time source: a coarse millisecond alignment from first-detection events, then a fine-alignment algorithm that exploits the photon-pair temporal correlation, giving precision Delta = sigma_ex / sqrt(R_c * T_acq) — with a measured 467 +/- 56 ps system jitter, 250 ms acquisition and the observed coincidence rate, this lands at **~63 ps**, tracking clock drift up to 70 ns/s continuously. Time tags are then protected in layers: the first timestamp plus selected difference tags are one-time-padded with QKD key material, the bulk of the tag stream is protected by an obfuscated cascade of AES-256 and Ascon whose instruction sequence is seeded from post-quantum keys and a pre-shared secret, and Wegman-Carter MACs keyed from QKD bits authenticate the exchange. Measured QKD performance over the emulated channel is **3.29 bit/s finite-key (Serfling bound, security parameter 1e-10)** and 13.13 bit/s asymptotic at 7.1% QBER — about 30x the Micius entanglement-based results (0.12 / 0.43 bit/s) under comparable loss. The authors are explicit that the AES seeding step buys throughput at the price of computational rather than information-theoretic security.

## Summary (ZH)
Adhikari、Rani、Gupta、Ai 与 Malaney（arxiv quant-ph，2026 年 8 月 25 日）报告了一项面向星地链路的**量子安全时间传递（QSTT）**实验室演示。其出发点是：空间基础设施的授时层已成为明确的攻击面——GPS/GNSS 驯服时钟、NTP 与 White Rabbit 均易受干扰、转发欺骗、时延攻击与欺骗信号影响，而一颗时钟可被对手牵引的卫星会同时失去测距、TDD 帧定时与日志完整性。QSTT 用纠缠光子对的时间关联取代可信外部时间基准，使交换时标的*同步*与*机密性/真实性*来自同一条量子信道。

纠缠光源采用置于 Sagnac 干涉仪中的 **type-0 PPKTP 晶体**（1x2x30 mm，光栅周期 3.425 um，405.5 nm 连续波泵浦，简并输出 811 nm），而非墨子号所用的 type-II 光源。type-0 相位匹配将光子对产生亮度提高约两个数量级（0.5 mW 泵浦下 >10^6 对/s/mW；14 mW 下 4.4x10^8 对/s），代价是偏振可见度下降，本文实测 88%，Bell 参量 S = 2.48。卫星信道在 1.2 m 自由空间实验台上以可变衰减器模拟，**总损耗 63 dB**（Alice 臂 32.5 dB、Bob 臂 30.5 dB），其取值使符合计数与产生率之比匹配墨子号实际经历的损耗区间；接收端恢复出 216 符合计数/s。

同步分两级进行且不依赖任何外部时间源：先由首个探测事件做毫秒级粗对齐，再用利用光子对时间关联的精对齐算法，精度为 Delta = sigma_ex / sqrt(R_c * T_acq)——在实测 467 +/- 56 ps 系统抖动、250 ms 采集时长与上述符合率下，精度约为 **63 ps**，并可连续跟踪高达 70 ns/s 的时钟漂移。时标随后被分层保护：首个时间戳与选定的差分时标用 QKD 密钥做一次一密；时标流主体由 AES-256 与 Ascon 组成的混淆级联加密保护，其指令序列由后量子密钥与预共享秘密种子生成；并以 QKD 比特为密钥的 Wegman-Carter 消息认证码完成认证。在模拟信道上实测 QKD 性能为**有限码长密钥率 3.29 bit/s（Serfling 界，安全参数 1e-10）**、渐近密钥率 13.13 bit/s，QBER 为 7.1%——在可比损耗条件下约为墨子号纠缠式结果（0.12 / 0.43 bit/s）的 30 倍。作者明确指出：以 QKD 密钥为 AES 播种换取了吞吐，但由此得到的是计算安全而非信息论安全。

## Key technical points (EN)
- **Threat framing:** classical time transfer (GNSS-disciplined clocks, NTP, White Rabbit) is jammable/spoofable/delay-attackable; QSTT derives both timing and key material from entangled pairs, removing the external time reference as a trust anchor.
- **Source:** type-0 PPKTP Sagnac EPS, 405.5 nm CW pump -> degenerate 811 nm pairs; >10^6 pairs/s/mW at 0.5 mW; 4.4x10^8 pairs/s at 14 mW; visibility 88%, S = 2.48 (type-0 trades visibility for ~100x brightness vs type-II).
- **Channel emulation:** 1.2 m free-space bench + variable attenuators, 63 dB total (32.5 / 30.5 dB per arm, each including 8 dB coupling+detection); 216 coincidences/s; loss regime matched to Micius via the R_c/G ratio.
- **Two-stage GPS-free sync:** stage 1 coarse ms-level offset from first detections; stage 2 fine alignment on photon-pair correlation; precision Delta = sigma_ex/sqrt(R_c*T_acq) = ~63 ps with sigma_ex = 467 +/- 56 ps, T_acq = 250 ms; continuous compensation of 20-70 ns/s drift.
- **Layered time-tag protection:** QKD-OTP on the first timestamp + selected diff-time tags; obfuscated cascaded AES-256/Ascon on the bulk stream with PQC-seeded instruction sequences and a pre-shared key; Wegman-Carter authentication from QKD bits.
- **Measured results:** finite key 3.29 bit/s at security parameter 1e-10 (Serfling), asymptotic 13.13 bit/s, QBER 7.1%, 33-minute QKD sessions, 6-minute continuous sync runs; detectors Excelitas AQRH-14-FC (100 counts/s dark), Swabian Ultra time tagger (42 ps resolution), 400 ps coincidence window.
- **Comparison to Micius (2020):** type-II vs type-0 source; 5.9x10^6 pairs/s @30 mW vs 4.4x10^8 @14 mW; 2.2 vs 216 coincidences/s; 0.12 -> 3.29 bit/s finite key; 0.43 -> 13.13 bit/s asymptotic; adds GPS-free sync and the QSTT layer that Micius did not have.
- **Stated limitation:** everything is hardware-measured but on an *emulated* channel (no orbital link, no pointing/acquisition/tracking, no atmospheric turbulence or day-sky background); AES seeding yields computational, not information-theoretic, security for the bulk tag stream.

## Key technical points (ZH)
- **威胁建模：** 经典时间传递（GNSS 驯服时钟、NTP、White Rabbit）可被干扰、欺骗与时延攻击；QSTT 从纠缠光子对中同时导出定时与密钥材料，去除外部时间基准这一信任锚点。
- **光源：** type-0 PPKTP Sagnac 纠缠源，405.5 nm 连续波泵浦 -> 简并 811 nm 光子对；0.5 mW 下 >10^6 对/s/mW，14 mW 下 4.4x10^8 对/s；可见度 88%、S = 2.48（type-0 以可见度换取相对 type-II 约百倍亮度）。
- **信道模拟：** 1.2 m 自由空间光路 + 可变衰减器，总损耗 63 dB（两臂 32.5 / 30.5 dB，各含 8 dB 耦合与探测损耗）；符合计数 216/s；通过 R_c/G 比值将损耗区间对齐到墨子号实测条件。
- **两级无 GPS 同步：** 第一级由首个探测事件获得毫秒级粗偏移；第二级基于光子对时间关联做精对齐；精度 Delta = sigma_ex/sqrt(R_c*T_acq)，在 sigma_ex = 467 +/- 56 ps、T_acq = 250 ms 下约 63 ps；可连续补偿 20-70 ns/s 的时钟漂移。
- **时标分层保护：** 首个时间戳与选定差分时标用 QKD 一次一密；主体时标流用 AES-256/Ascon 混淆级联加密，其指令序列由后量子密钥与预共享密钥播种；以 QKD 比特为密钥的 Wegman-Carter 认证。
- **实测结果：** 安全参数 1e-10 下有限码长密钥率 3.29 bit/s（Serfling 界）、渐近 13.13 bit/s、QBER 7.1%；QKD 会话 33 分钟、连续同步演示 6 分钟；探测器 Excelitas AQRH-14-FC（暗计数 100/s），Swabian Ultra 时间标记器（42 ps 分辨率），符合窗 400 ps。
- **与墨子号（2020）对比：** type-II 与 type-0 光源；30 mW 下 5.9x10^6 对/s 对比 14 mW 下 4.4x10^8 对/s；符合率 2.2 对比 216 counts/s；有限码长密钥率 0.12 -> 3.29 bit/s；渐近 0.43 -> 13.13 bit/s；并新增墨子号所不具备的无 GPS 同步与 QSTT 层。
- **明示局限：** 所有数据均为硬件实测，但信道为*模拟*（无在轨链路，无捕获跟踪瞄准，无大气湍流与白天天光背景）；以 AES 播种的主体时标流只具备计算安全，而非信息论安全。

## Why it matters / what's new (EN)
The satellite bin's security thread has so far been about *detecting* attacks on the PNT layer — GNSS spoofing of UAV swarms and CORS-network integrity monitoring (08-12), VLM and SLM cross-checks of GNSS against vehicle dynamics (07-28, 08-20), the Jammertest Norway interference dataset (08-18), RF-fingerprint authentication of Iridium downlinks (08-20) and SAR downlinks (08-21). This entry is the first at the *prevention* end of the same problem: instead of detecting that a time reference has been manipulated, it removes the manipulable reference altogether. It also updates the KB's single prior quantum-flavoured satellite entry (2026-05-29_arxiv-quantum-safe-ike-satellite, a PQC key-exchange design) with actual bench numbers.

The reason this one clears the bar that three earlier satellite-QKD papers did not (2608.12659 twin-field ISL QKD, 08-18; 2608.20088 hybrid fibre/free-space squeezed-state QKD, 08-21; 2608.21968 QEYSSat digital twin, 08-25 — all dropped as simulation-only with no demonstrated link) is that the entire chain here is hardware-measured on a real optical bench, with the satellite geometry entering only as a calibrated 63 dB attenuation matched to a flown mission's loss budget. That gives a defensible apples-to-apples 30x claim against Micius, which is what makes the result legible to a communications audience: the practical objection to entanglement-based satellite QKD has always been key rate under 60+ dB downlink loss, and a type-0 source plus GPS-free correlation-based sync moves that number by an order of magnitude and a half while adding a service (secure time) that space systems need independently of key distribution. Novelty is scored 3 rather than 4 because the link is emulated on a 1.2 m bench — no pointing, tracking, turbulence or sky background — and because the bulk-encryption layer falls back to AES, so the information-theoretic guarantee covers only part of the stream. Taxonomy note: this is now roughly the eleventh security-flavoured satellite entry parked in `sat-ai` for want of a dedicated bin.

## Why it matters / what's new (ZH)
知识库卫星条目的安全线索此前一直集中在对 PNT 层攻击的*检测*——无人机集群 GNSS 欺骗与 CORS 网络完整性监测（08-12）、以视觉/语言模型交叉核验 GNSS 与车辆动力学（07-28、08-20）、挪威 Jammertest 干扰数据集（08-18）、铱星下行射频指纹认证（08-20）与 SAR 下行认证（08-21）。本条目是同一问题在*预防*端的第一条：与其检测时间基准是否被操纵，不如整体移除这个可被操纵的基准。它同时也为知识库中唯一一条量子相关的卫星条目（2026-05-29_arxiv-quantum-safe-ike-satellite，一项后量子密钥交换设计）补上了实测数据。

本文之所以能越过此前三篇卫星 QKD 论文未能越过的门槛（2608.12659 星间双场 QKD，08-18 丢弃；2608.20088 光纤/自由空间混合压缩态 QKD，08-21 丢弃；2608.21968 QEYSSat 数字孪生，08-25 丢弃——均为纯仿真、无实际链路演示），在于其整条链路都在真实光学平台上实测，卫星几何仅以一个标定到已飞行任务损耗预算的 63 dB 衰减进入实验。这使得相对墨子号的 30 倍提升成为可对照的结论，也正是该结果对通信读者有意义之处：纠缠式卫星 QKD 长期以来的现实质疑就是 60 dB 以上下行损耗下的密钥率，而 type-0 光源加上基于符合关联的无 GPS 同步把这个数字提升了一个半数量级，同时附带提供了空间系统本身就需要的"安全授时"服务。新颖度评 3 而非 4，原因是链路仍是 1.2 m 台面模拟——无捕获跟踪瞄准、无湍流与天光背景——且主体加密回落到 AES，信息论安全只覆盖码流的一部分。分类备注：这已是约第 11 条因缺少专用条目库而暂放入 `sat-ai` 的安全类卫星条目。
