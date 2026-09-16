---
id: 2026-09-16_wifinow-uwb-price-accuracy-deployment-economics
date_published: 2026-09-15
date_found: 2026-09-16
type: industry-news
technology: uwb
title_en: "Guest analysis: why UWB's centimetre accuracy hasn't translated into deployment — anchor density, FCC power limits, and what 802.15.4ab's Multi-Millisecond Ranging actually fixes"
title_zh: "客座分析：UWB 厘米级精度为何难以转化为实际部署——锚点密度、FCC 功率限制，以及 802.15.4ab 多毫秒测距（MMS）究竟解决了什么"
url: "https://wifinowglobal.com/news-blog/guest-blog-if-uwb-is-so-accurate-why-is-no-one-deploying-it-the-price-accuracy-equation-is-off/"
source_quality: full
topics: [802.15.4ab, MMS, anchor-density, FCC-Part-15, deployment-cost, warehouse-RTLS, indoor-positioning]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

On 15 September 2026, Wi-Fi NOW Global published a guest-blog analysis by Randy Aneke of embedUR arguing that UWB's well-documented centimetre-level accuracy has not translated into broad real-world deployment because the cost driver is anchor infrastructure density, not the radio chip. The article states that current UWB real-time-location-system (RTLS) deployment guidance calls for an anchor roughly every 15 to 20 metres in open space — about one anchor per 100 to 200 square metres — with a tighter grid required around steel racking and thick walls, and a minimum of three non-collinear anchors for 2D positioning (four for 3D); a single distribution centre can require dozens of anchors under this guidance. The piece frames the underlying constraint as regulatory: UWB has operated under two FCC Part 15 power limits unchanged since 2002 — an average limit of -41.3 dBm per MHz (averaged over 1 millisecond) and a 0 dBm peak limit in any 50 MHz slice of spectrum. It then examines IEEE 802.15.4ab's Multi-Millisecond Ranging (MMS) mode, which spreads a ranging exchange's pulses across up to 16 one-millisecond slots so a receiver can integrate energy across the whole window and extend usable range without exceeding the average-power ceiling. The article notes that range-extension figures vary by source — its comparison table cites ST (~18 dB), imec (a four-fold range increase with narrowband assistance) and IEEE — and cautions that "the multiple is the chipmaker's claim, not the standard's promise." It reconciles the figures through the two FCC limits: the average rule and the 0 dBm/50 MHz peak rule leave "roughly 24 dB" of room between them, "and ST's 18 dB spends most of it"; once a burst hits the peak cap, every further decibel must come from the receiver combining more fragments, which is where the 3 dB per doubling of the integration window comes from. Its central argument is that MMS does not lower total deployment cost so much as redistribute it, into three areas: receiver power/energy consumption (longer listening windows cost battery life), airtime/channel capacity (longer multi-fragment exchanges consume more of the shared channel), and interoperability complexity (the article states there are three different MMS implementation modes and that compatibility between them is not automatic). The piece rests this on Cisco's RTLS design guidance, which it quotes as saying "geometry, not signal strength, decides accuracy": extended range only reduces anchor count in open-floor, line-of-sight-limited layouts where range was the binding constraint, whereas in multi-floor buildings or dense steel racking the anchor requirement was already driven by needing geometric diversity around obstructions, not signal reach, so MMS is not expected to meaningfully reduce anchor counts there. The article also states that no published anchor-spacing guidance yet exists for 802.15.4ab-era deployments, which it reads as evidence that range claims are currently ahead of the field-engineering data needed to turn them into a lower installed-anchor bill.

## Summary (ZH)

2026年9月15日，Wi-Fi NOW Global 发布了一篇由 embedUR 的 Randy Aneke 撰写的客座分析文章，指出UWB广为人知的厘米级测距精度之所以未能转化为广泛的实际部署，根本原因在于成本驱动因素是锚点（anchor）基础设施的部署密度，而非射频芯片本身。文章称，当前UWB实时定位系统（RTLS）的部署指南建议：在开阔空间中每15至20米布设一个锚点——约合每100至200平方米一个锚点；在钢制货架及厚墙体周围则需要更密集的布点；二维定位至少需要3个非共线锚点，三维定位需要4个。按此指南，一座配送中心可能需要多达数十个锚点。文章将这一制约因素归结为监管层面：自2002年以来，UWB一直受FCC Part 15 两项功率限制约束且从未改变——平均功率限值为每兆赫兹 -41.3 dBm（以1毫秒为平均窗口），以及在任意50 MHz频谱区间内 0 dBm 的峰值限制。文章随后分析了IEEE 802.15.4ab 的多毫秒测距（Multi-Millisecond Ranging，MMS）模式：该模式将一次测距交互的脉冲分散到最多16个1毫秒时隙中，使接收机能够在整个窗口内累积能量，从而在不超过平均功率上限的前提下延伸有效测距范围。文章指出，不同来源给出的测距范围提升幅度说法不一——其对比表格引用了 ST（约 18 dB）、imec（在窄带辅助下测距范围提升约 4 倍）与 IEEE 三方数据——并提醒"这一倍数是芯片厂商的说法，而非标准的承诺"。文章用两项 FCC 限制来调和这些数字：平均功率规则与 0 dBm／50 MHz 峰值规则之间留出的空间"约为 24 dB"，"而 ST 的 18 dB 已用掉其中大部分"；一旦突发达到峰值上限，此后每增加一分贝都只能靠接收机合并更多分段获得，这正是"积分窗口每翻一倍约 3 dB"的由来。文章的核心论点是：MMS并未真正降低总体部署成本，而是将成本转移到了三个方面——接收机功耗（更长的监听窗口消耗更多电池电量）、空口/信道容量（更长的多分段交互占用更多共享信道资源），以及互操作复杂度（文章称MMS存在三种不同的实现模式，且这些模式之间的兼容性并非自动保证）。文章据此引用 Cisco 的 RTLS 设计指南——"决定精度的是几何布局，而非信号强度"：测距范围的延伸只有在开阔楼层、视距受限而成为瓶颈的场景中才能真正减少锚点数量；而在多楼层建筑或密集钢制货架环境中，锚点数量本就是由绕开障碍物所需的几何多样性决定，而非信号覆盖距离，因此MMS预计难以在这类场景中显著减少锚点数量。文章还指出，目前尚未有任何已发布的、面向802.15.4ab时代部署的锚点间距指南，作者将此视为一个证据：范围提升的宣传目前领先于将其转化为更低锚点安装成本所需的现场工程数据。

## Key technical points (EN)

- UWB RTLS deployment guidance (as cited by the article): one anchor per ~15-20 m in open space (~100-200 sqm/anchor), tighter spacing near steel racking/thick walls, minimum 3 non-collinear anchors for 2D positioning / 4 for 3D — a single distribution centre can need dozens of anchors.
- Two FCC Part 15 UWB power limits, both unchanged since 2002: average -41.3 dBm/MHz (1 ms averaging window) and 0 dBm peak in any 50 MHz slice.
- IEEE 802.15.4ab Multi-Millisecond Ranging (MMS): spreads a ranging exchange across up to 16 one-millisecond slots so a receiver can integrate energy over the full window, extending usable range without exceeding the average-power cap.
- Range-extension figures cited (article's comparison table, sources ST / imec / IEEE): ST ~18 dB; imec ~4x range increase with narrowband assistance. The article notes "the multiple is the chipmaker's claim, not the standard's promise" and reconciles the numbers via the two FCC limits, which leave "roughly 24 dB" of headroom between them — ST's 18 dB "spends most of it", and beyond the peak cap further gain comes only at ~3 dB per doubling of the number of combined fragments.
- MMS is framed as redistributing deployment cost rather than cutting it: (1) higher receiver power/energy draw from longer listening windows, (2) reduced airtime/channel capacity from longer multi-fragment exchanges, (3) added interoperability complexity — three distinct MMS implementation modes with compatibility not automatic between them.
- Core thesis, quoted by the article from Cisco's RTLS design guidance: "geometry, not signal strength, decides accuracy" — extended range helps mainly in open, line-of-sight-limited layouts; multi-floor and dense-racking deployments need their anchor count for geometric diversity around obstructions, so MMS range gains are not expected to meaningfully reduce anchor counts there.
- The article states no published anchor-spacing guidance yet exists for the 802.15.4ab/MMS era.

## Key technical points (ZH)

- 文章引用的UWB RTLS部署指南：开阔空间约每15-20米一个锚点（约每100-200平方米一个），钢制货架/厚墙体附近需更密集布点；二维定位至少需3个非共线锚点，三维需4个——单座配送中心可能需要数十个锚点。
- 两项自2002年以来未曾改变的FCC Part 15 UWB功率限制：平均功率 -41.3 dBm/MHz（1毫秒平均窗口），以及任意50 MHz频谱区间内0 dBm的峰值限制。
- IEEE 802.15.4ab 多毫秒测距（MMS）：将一次测距交互分散到最多16个1毫秒时隙中，使接收机可在整个窗口内累积能量，在不突破平均功率上限的前提下延伸有效测距范围。
- 文中引用的测距范围提升数据（对比表格，来源为 ST／imec／IEEE）：ST 约 18 dB；imec 在窄带辅助下约 4 倍测距范围提升。文章提醒"这一倍数是芯片厂商的说法，而非标准的承诺"，并用两项 FCC 限制加以调和：二者之间约有 24 dB 的余量，ST 的 18 dB 已用掉其中大部分；超过峰值上限后，增益只能靠合并更多分段获得，约为每翻一倍 3 dB。
- 文章将MMS定性为"转移"而非"降低"部署成本：（1）更长的监听窗口导致接收机功耗上升；（2）更长的多分段交互占用更多空口/信道容量；（3）增加互操作复杂度——MMS存在三种不同实现模式，彼此间兼容性并非自动保证。
- 核心论点（文章引自 Cisco 的 RTLS 设计指南）："决定精度的是几何布局，而非信号强度"——测距范围延伸主要在视距受限的开阔场景中起作用；多楼层与密集货架场景中的锚点数量本就是为绕开障碍物获得几何多样性而设，MMS带来的测距范围提升预计难以显著减少这些场景下的锚点数量。
- 文章指出，目前尚无任何已发布的、面向802.15.4ab/MMS 时代部署的锚点间距指南。

## Why it matters / what's new (EN)

The KB's UWB bin has so far tracked the 802.15.4ab silicon wave (ST64UWB, Ceva-Waves, Calterah Dubhe, imec's narrowband-assist receiver), FiRa/CCC/CSA application-layer certification, and — as of 2026-09-14 — the FCC's own Part 15 rulemaking review. This is the bin's first entry to connect those threads through a deployment-economics lens rather than a chip, standard, or regulatory-process lens: it explicitly ties the FCC's unchanged 2002-era power limits (the same regulatory ceiling the 09-14 NPRM entry covers) to why anchor density, not radio capability, has been the practical bottleneck for UWB RTLS rollouts, and it puts the MMS range-extension claims already logged in this KB's ST64UWB and imec entries into a critical frame — separating "range extension via longer energy-integration windows" from "accuracy improvement," and arguing the former mainly pays off in the specific case of open, line-of-sight-limited layouts rather than universally cutting anchor counts. As a single-author guest-blog analysis rather than a vendor announcement or a peer-reviewed study, its quantitative claims (the 18 dB / 4x / ~24 dB / ~3 dB figures, the anchor-density numbers) are presented here as the author's own reported figures, not independently verified by this knowledge base.

## Why it matters / what's new (ZH)

本知识库的UWB板块此前追踪了802.15.4ab芯片浪潮（ST64UWB、Ceva-Waves、Calterah Dubhe、imec窄带辅助接收机）、FiRa/CCC/CSA应用层认证，以及（自2026-09-14起）FCC自身对Part 15规则的审查程序。本条目是该板块首次从"部署经济学"视角而非芯片、标准或监管程序视角，将这几条线索串联起来：文章明确将FCC自2002年以来从未改变的功率限制（与09-14条目所涉NPRM针对的正是同一监管上限）与"锚点密度而非射频能力才是UWB RTLS落地实际瓶颈"这一论断直接挂钩，并对本知识库此前在ST64UWB与imec条目中记录的MMS测距范围提升说法给出了一种批判性解读——将"通过更长能量积分窗口实现的测距范围延伸"与"精度提升"区分开来，并指出前者主要在视距受限的开阔场景中才真正有效，而非普遍性地减少锚点数量。由于本文是单一作者的客座分析，而非厂商官方公告或经同行评审的研究，其中的量化数据（18 dB／4 倍／约 24 dB／约 3 dB 等数字，以及锚点密度数据）在本条目中均作为作者本人给出的数据进行转述，并未经本知识库独立核实。

## Images

None.
