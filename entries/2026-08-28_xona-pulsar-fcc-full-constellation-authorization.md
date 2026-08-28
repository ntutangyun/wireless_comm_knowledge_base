---
id: 2026-08-28_xona-pulsar-fcc-full-constellation-authorization
date_published: 2026-08-03
date_found: 2026-08-28
type: satellite-news
title_en: "FCC Clears Xona's Pulsar for Full Constellation Deployment — the First Commercial LEO-PNT Signal Licensed Beside GPS"
title_zh: "FCC 批准 Xona Pulsar 全星座部署——首个获许在 GPS 邻频广播的商业低轨导航信号"
url: "https://satnews.com/2026/08/03/fcc-authorizes-xona-space-systems-for-full-commercial-pulsar-leo-constellation-deployment/"
technology: satellite
source_quality: full
topics: [LEO-PNT, GNSS, Xona, Pulsar, FCC, L-band, spectrum, GPS]
topic_primary: ngso-regulation
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

On 3 August 2026 the FCC granted Xona Space Systems authorization to deploy and commercially operate its **Pulsar** low-Earth-orbit positioning, navigation and timing (PNT) constellation. It is the first time a US regulator has licensed a private operator to broadcast a radio-navigation signal in L-band spectrum adjacent to the GPS allocations — the band that more than six billion GNSS devices worldwide already listen to. The licence covers a planned **258-satellite** constellation, with an initial deployment tranche of 16 spacecraft authorized and milestone conditions requiring half the constellation on orbit by **July 2032** and the full network operational by **July 2035**. Six production-class spacecraft are slated to launch in **October 2026**, following the Pulsar-0 demonstrator that has flown more than **350 live transmission passes across four continents** since its mid-2025 launch.

The technical case for LEO-PNT is a straight consequence of orbital altitude. GPS broadcasts from ~20,200 km MEO; a LEO satellite at a few hundred kilometres is roughly 20–30× closer, and Xona claims a received signal **up to 100× stronger** than legacy GPS. That link-budget margin is what buys the capabilities the ground segment actually cares about: penetration through dense structural materials and foliage, resistance to jamming (a jammer must now overcome a much stronger wanted signal), and much faster geometric change for carrier-phase convergence. Xona also embeds a **dynamic cryptographic watermark** directly into the broadcast data stream — signal authentication designed to defeat spoofing — while keeping the waveform processable by legacy receiver hardware through software and firmware updates rather than new silicon.

The regulatory dimension is arguably the bigger story. Broadcasting beside GPS in a band shared with aviation safety-of-life services is one of the most tightly protected spectrum environments that exists; the FCC's grant is conditional and rests on waveform designs engineered to avoid interference with GPS, aeronautical radionavigation and other incumbents. Approving a *commercial* navigation broadcaster into that band sets a precedent that other LEO-PNT aspirants — and constellation operators considering GNSS-adjacent payloads — will now file against.

## Summary (ZH)

2026 年 8 月 3 日，美国联邦通信委员会（FCC）批准 Xona Space Systems 部署并商业运营其 **Pulsar** 低轨定位导航授时（PNT）星座。这是美国监管机构首次许可私营运营商在紧邻 GPS 频段的 L 波段广播无线电导航信号——该频段目前已有全球逾 60 亿台 GNSS 设备在接收。许可覆盖规划中的 **258 颗**卫星星座，首批授权部署 16 颗，并设有里程碑条件：**2032 年 7 月**前完成半数星座在轨、**2035 年 7 月**前全网投入运行。6 颗量产级航天器计划于 **2026 年 10 月**发射；此前的 Pulsar-0 验证星自 2025 年年中入轨以来已完成 **横跨四大洲的 350 余次实况发射通过**。

低轨 PNT 的技术依据直接来自轨道高度。GPS 从约 20,200 km 的中轨广播；数百公里高的低轨卫星距离近约 20–30 倍，Xona 宣称接收信号强度可达传统 GPS 的 **100 倍**。这一链路预算余量买到的正是地面段真正在意的能力：穿透密实建筑材料与树冠、抗干扰（干扰机现在必须压制强得多的有用信号），以及快得多的几何变化以加速载波相位收敛。Xona 还在广播数据流中直接嵌入**动态密码水印**——用于对抗欺骗的信号认证——同时通过软件与固件升级让存量接收机硬件即可处理该波形，无需更换芯片。

监管层面的意义可能更大。在与航空生命安全业务共用的频段中、紧邻 GPS 广播，是现存管制最严格的频谱环境之一；FCC 的批准是附条件的，建立在波形设计可避免对 GPS、航空无线电导航及其他在网业务造成干扰的基础上。批准一个*商业*导航广播方进入该频段，为后续其他低轨 PNT 申请者——以及考虑加装 GNSS 邻频载荷的星座运营商——树立了申报先例。

## Key technical points (EN)

- **Grant date:** 3 August 2026 — FCC authorization for full commercial deployment of the Pulsar LEO-PNT constellation.
- **Constellation:** 258 satellites planned; 16 spacecraft authorized in the initial tranche. Milestones: 50 % on orbit by July 2032, full constellation operational by July 2035.
- **Spectrum:** L-band, adjacent to the GPS allocations. First private operator licensed by the US government to broadcast a radionavigation signal in this band. Grant is conditional on waveforms engineered not to interfere with GPS, aeronautical radionavigation and other incumbents.
- **Signal strength:** claimed up to **100× stronger** than MEO GPS broadcasts, a direct consequence of LEO altitude (~20–30× closer than 20,200 km MEO).
- **Claimed capability:** penetration through dense structural materials and foliage; improved resilience where GPS is weak or contested.
- **Authentication:** a **dynamic cryptographic watermark** embedded in the broadcast data stream (anti-spoofing).
- **Backward compatibility:** legacy receiver hardware can process Pulsar via software/firmware updates — no new front-end silicon required.
- **Flight heritage:** Pulsar-0 demonstrator (launched mid-2025) completed 350+ live transmission passes across four continents.
- **Next launch:** six production-class spacecraft in October 2026, beginning continuous constellation assembly.
- Not disclosed in the public reporting: exact centre frequencies, docket/call sign, ranging accuracy figures, and convergence-time claims.

## Key technical points (ZH)

- **批准日期：** 2026 年 8 月 3 日——FCC 批准 Pulsar 低轨 PNT 星座全面商业部署。
- **星座规模：** 规划 258 颗；首批授权 16 颗。里程碑：2032 年 7 月前 50% 在轨，2035 年 7 月前全星座投运。
- **频谱：** L 波段，紧邻 GPS 频率分配。首个获美国政府许可在该频段广播无线电导航信号的私营运营商。批准附条件，波形须设计为不干扰 GPS、航空无线电导航及其他在网业务。
- **信号强度：** 宣称可达中轨 GPS 广播的 **100 倍**，直接源于低轨高度优势（比 20,200 km 中轨近约 20–30 倍）。
- **宣称能力：** 可穿透密实建筑材料与树冠；在 GPS 微弱或受扰环境下更具韧性。
- **认证机制：** 在广播数据流中嵌入**动态密码水印**（抗欺骗）。
- **后向兼容：** 存量接收机硬件经软件/固件升级即可处理 Pulsar 信号——无需新射频前端芯片。
- **在轨验证：** Pulsar-0 验证星（2025 年年中发射）已完成横跨四大洲的 350 余次实况发射通过。
- **下次发射：** 2026 年 10 月发射 6 颗量产级航天器，开始连续组网。
- 公开报道未披露：精确中心频率、案卷号/呼号、测距精度指标与收敛时间指标。

## Why it matters / what's new (EN)

This is the KB's first entry on the **regulatory** side of LEO-PNT, and it completes a triangle the KB has been building all month. The user side arrived with SSB-based positioning over NR-NTN (2026-08-15). The infrastructure side arrived with decentralized ground-to-space GNSS reference coordination (2026-08-20), which explicitly named Xona as the class of operator that would benefit from owning a constellation without owning a ground-station empire. This entry supplies the missing third leg: Xona now has the spectrum right to broadcast, not merely to receive — which is what turns "LEO constellation with GNSS receivers aboard" into "LEO constellation that *is* a navigation system."

It also reframes the KB's GNSS-vulnerability thread. Jammertest 2025 (2026-08-18), CORS-network integrity monitoring (2026-08-12), the IRISig spoofed-satellite RFF benchmark (2026-08-20) and the SLM spoofing-narrative work (2026-08-20) all treat GNSS weakness as something to *detect and mitigate at the receiver*. Pulsar attacks the same problem at the transmitter: 100× link margin raises the jamming power required by ~20 dB, and a cryptographic watermark makes spoofing a cryptographic problem rather than a signal-plausibility one. The open questions the public reporting does not answer are the ones that will decide whether this generalizes — actual centre frequencies and the interference analysis that satisfied the FCC, ranging accuracy and convergence time versus GPS + RTK/PPP, whether the watermark is verifiable open-loop or needs a subscription key path, and whether "legacy hardware via firmware update" survives contact with real automotive and smartphone GNSS front-ends. The July 2032 / July 2035 milestone conditions also make this a multi-year thread rather than a settled outcome; the October 2026 six-satellite launch is the next checkpoint.

## Why it matters / what's new (ZH)

这是知识库首条低轨 PNT **监管**侧条目，也补齐了本月一直在搭建的三角结构。用户侧由 NR-NTN 上的 SSB 定位补上（2026-08-15）。基础设施侧由去中心化的天地 GNSS 参考网协同补上（2026-08-20），该条目还明确点名 Xona 属于"拥有星座但没有地面站帝国"的受益运营商类型。本条目提供了缺失的第三条边：Xona 现在拥有了**广播**而非仅仅接收的频谱权利——正是这一点把"载有 GNSS 接收机的低轨星座"变成"本身就是导航系统的低轨星座"。

它也重构了知识库的 GNSS 脆弱性脉络。Jammertest 2025（2026-08-18）、CORS 网完好性监测（2026-08-12）、IRISig 欺骗卫星射频指纹基准（2026-08-20）与 SLM 欺骗叙事研究（2026-08-20），全部把 GNSS 的弱点当作*在接收端检测与缓解*的问题。Pulsar 则从发射端下手：100 倍链路余量把干扰机所需功率抬高约 20 dB，而密码水印把欺骗从"信号合理性判断"变成"密码学问题"。公开报道未回答的正是决定该路线能否推广的问题——真实中心频率与说服 FCC 的干扰分析、相对 GPS + RTK/PPP 的测距精度与收敛时间、水印是可开环验证还是需要订阅密钥通道，以及"存量硬件固件升级即可"能否在真实车规与手机 GNSS 前端上成立。2032 年 7 月 / 2035 年 7 月的里程碑条件也说明这是一条跨年度线索而非已定结局；2026 年 10 月的 6 星发射是下一个检查点。
