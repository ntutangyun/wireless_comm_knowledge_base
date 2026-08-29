---
id: 2026-08-29_eetasia-consumer-uwb-tag-architecture-convergence
date_published: 2026-06-18
date_found: 2026-08-29
type: industry-news
technology: uwb
title_en: "Consumer UWB tag teardowns converge on one architecture — and Moto Tag 2 swaps Qorvo for Giant Semi"
title_zh: "消费级 UWB 标签拆解显示架构趋同——Moto Tag 2 将 Qorvo 换成矽典微（Giant Semi）"
url: "https://www.eetasia.com/consumer-uwb-tags-show-architecture-convergence-as-bluetooth-channel-sounding-emerges/"
source_quality: full
topics: [UWB, item finders, teardown, BLE, Channel Sounding, NXP SR040, Giant Semi GT1500, Apple U1, Apple U2, Nordic nRF54L15, Atmosic]
topic_primary: uwb-ranging
topics_secondary: [uwb-fi-ra]
novelty_score: 2
---

## Summary (EN)

A teardown-led market analysis by Giorgio Zanella (Technotrend Market Research) published in EE Times Asia on 2026-06-18 compares the 2026 generation of consumer item-finder tags and reports that their **hardware architectures have converged on a single template**. Across Apple AirTag 2nd generation, Samsung Galaxy SmartTag, Motorola Moto Tag 2, Xiaomi Tag and ChangHong NeoTag, the same block diagram recurs: a BLE subsystem for discovery and ecosystem connectivity, a *separate* dedicated UWB subsystem for precision ranging, crystal timing resources, an acoustic alerting element, NFC, power management, and a coin-cell battery. The convergence is the finding — after several years in which UWB trackers were architecturally idiosyncratic, the premium tag is now a commodity design with interchangeable parts.

The supply-side consequence is the article's sharpest datapoint. Apple continues to use its own proprietary U1/U2 silicon and Samsung uses NXP's SR040, but **Motorola shifted the Moto Tag from Qorvo to Giant Semi's GT1500-series UWB SoC** — and did so *without redesigning the system*. The analysis calls this one of the first visible cases in the consumer tracker market of a Chinese UWB silicon vendor displacing an established Western supplier while the overall architecture stays fixed. That is exactly what architectural convergence implies commercially: once the block diagram is standard, the UWB die becomes a second-source-able component competing on price rather than on system integration.

The article's second contribution is a **three-layer location stack** model that explains how Bluetooth Channel Sounding fits alongside UWB rather than replacing it. Layer 1 is *BLE discovery* — crowdsourced detection through the Find My / Find Hub-class networks, which is what actually recovers a bag left in another country. Layer 2 is *BLE Channel Sounding* — ranging materially better than RSSI, riding the installed smartphone base, sitting between basic BLE and UWB in both accuracy and cost. Layer 3 is *UWB precision* — centimetre-level ranging for the final metres of a search. A given tracker implements one, two, or all three layers depending on where it sits on the cost/performance curve; that yields a clean market segmentation, with BLE-only vendors (Tile, Pebblebee, Chipolo) remaining viable at the cost-sensitive end, a new BLE + Channel Sounding middle tier opening up, and BLE + UWB reserved for premium designs. Silicon named as serving the emerging middle and low tiers includes Nordic Semiconductor's nRF54L15 and Atmosic's ATM3405.

The analysis closes on demand: airlines are increasingly integrating consumer trackers into baggage-recovery workflows, using the ecosystem's secure location-sharing features to give both the passenger and the operator visibility into a mishandled bag — a use case that pulls tag volume through an enterprise channel rather than pure retail.

## Summary (ZH)

Giorgio Zanella（Technotrend Market Research）于 2026-06-18 在 EE Times Asia 发表的拆解型市场分析，比较了 2026 世代的消费级物品追踪标签，结论是其**硬件架构已收敛为同一套模板**。在 Apple AirTag 二代、三星 Galaxy SmartTag、摩托罗拉 Moto Tag 2、小米标签与长虹 NeoTag 之间，反复出现同一张框图：负责发现与生态连接的 BLE 子系统、**独立**的专用 UWB 测距子系统、晶体定时资源、声音提示元件、NFC、电源管理，以及一枚纽扣电池。"趋同"本身就是发现——在 UWB 追踪器架构各行其是若干年之后，高端标签如今已成为零件可互换的通用设计。

供应链侧的后果是全文最锋利的数据点。苹果继续使用自研 U1/U2 芯片，三星采用 NXP SR040，而**摩托罗拉把 Moto Tag 的 UWB 从 Qorvo 换成了矽典微（Giant Semi）GT1500 系列 SoC**——并且**没有重新设计系统**。分析认为，这是消费追踪器市场上中国 UWB 芯片厂商在整体架构保持不变的前提下取代既有西方供应商的首批可见案例之一。这正是架构趋同在商业上的含义：一旦框图标准化，UWB 裸片就变成可第二货源化的元件，竞争维度从系统集成能力转向价格。

文章的第二项贡献是一个**三层定位栈**模型，用以说明蓝牙 Channel Sounding 是与 UWB 并存而非取代它。第一层是 *BLE 发现*——通过 Find My／Find Hub 一类众包网络进行探测，这才是真正能找回遗落在另一个国家的行李的能力。第二层是 *BLE Channel Sounding*——测距显著优于 RSSI，可复用既有手机存量，在精度与成本上都介于基础 BLE 与 UWB 之间。第三层是 *UWB 精测*——为搜寻的最后几米提供厘米级测距。具体产品按其在成本／性能曲线上的位置实现一层、两层或三层，由此形成清晰的市场分层：纯 BLE 厂商（Tile、Pebblebee、Chipolo）在成本敏感端依然可行，BLE + Channel Sounding 的新中间层正在打开，而 BLE + UWB 留给高端设计。文中点名服务于新兴中低层的芯片包括 Nordic 的 nRF54L15 与 Atmosic 的 ATM3405。

分析最后落到需求侧：航空公司正越来越多地把消费级追踪器纳入行李找回流程，借助生态的安全位置共享功能，让旅客与运营方同时掌握被错运行李的可见性——这一场景通过企业渠道而非纯零售拉动标签出货量。

## Key technical points (EN)

- **Converged block diagram** across AirTag 2nd gen, Galaxy SmartTag, Moto Tag 2, Xiaomi Tag, ChangHong NeoTag: BLE subsystem (discovery/connectivity) + *separate* dedicated UWB subsystem (precision ranging) + crystal timing + acoustic alerting + NFC + power management + coin cell.
- **Silicon roster:** Apple proprietary U1/U2; Samsung → NXP SR040; Motorola Moto Tag 2 → **Giant Semi GT1500-series** (migrated *from* Qorvo); Nordic nRF54L15 and Atmosic ATM3405 named for the emerging middle/low tiers.
- **Drop-in supplier substitution:** the Qorvo → Giant Semi switch was made **without a system redesign** — flagged as one of the first visible instances of a Chinese UWB vendor replacing an established Western supplier in consumer trackers.
- **Three-layer location stack:** (1) BLE discovery — crowdsourced detection via Find My / Find Hub-class networks; (2) BLE Channel Sounding — ranging materially better than RSSI on the installed smartphone base; (3) UWB precision — centimetre-level ranging for the final approach.
- **Segmentation follows the stack:** BLE-only (Tile, Pebblebee, Chipolo) at the cost-sensitive end; BLE + Channel Sounding as a new intermediate tier; BLE + UWB for premium designs. Channel Sounding is framed as *expanding* the addressable ranging market, not cannibalising UWB.
- **Demand channel:** airlines integrating trackers into baggage-recovery workflows via the ecosystems' secure location-sharing features.

## Key technical points (ZH)

- **趋同的框图**（AirTag 二代、Galaxy SmartTag、Moto Tag 2、小米标签、长虹 NeoTag 共有）：BLE 子系统（发现／连接）+ **独立**的专用 UWB 子系统（精确测距）+ 晶体定时 + 声音提示 + NFC + 电源管理 + 纽扣电池。
- **芯片名录：** 苹果自研 U1/U2；三星 → NXP SR040；摩托罗拉 Moto Tag 2 → **矽典微 GT1500 系列**（自 Qorvo 迁移而来）；Nordic nRF54L15 与 Atmosic ATM3405 被点名服务于新兴中低层。
- **可直接替换的供应商切换：** Qorvo → Giant Semi 的更换**未伴随系统重新设计**——被视为中国 UWB 厂商在消费追踪器领域取代既有西方供应商的首批可见案例之一。
- **三层定位栈：** (1) BLE 发现——经 Find My／Find Hub 一类网络的众包探测；(2) BLE Channel Sounding——在既有手机存量上实现显著优于 RSSI 的测距；(3) UWB 精测——最后接近阶段的厘米级测距。
- **分层决定分层市场：** 纯 BLE（Tile、Pebblebee、Chipolo）居成本敏感端；BLE + Channel Sounding 构成新的中间层；BLE + UWB 面向高端。Channel Sounding 被定位为**扩大**可寻址测距市场，而非蚕食 UWB。
- **需求渠道：** 航空公司借助生态的安全位置共享功能，把追踪器纳入行李找回流程。

## Why it matters / what's new (EN)

This is a **deliberate in-window backfill** (published 2026-06-18, inside the 12-month freshness window) filling a bin the KB had left empty from two directions at once. First, the UWB bin has no *consumer item-finder* coverage and no *silicon supply-chain* coverage: its product entries run from industrial RTLS (`2026-08-15_nxp-omlox-uwb-rtls-starter-kit`, `2026-08-19_qorvo-uwb-rtls-enterprise-wifi-access-points`, `2026-08-05_murata-uwb-factory-tracking-sub1m`) to maker kits (`2026-08-09_makerfabs-matouch-mauwb-positioning-board`), with the mass-market tag — by far the highest-volume UWB endpoint — entirely absent. Second, the Google Pixel Tag has been sitting as an unresolved watch item precisely because its UWB content was unconfirmed; this teardown analysis is the first entry that actually inspects what is inside this device class.

The Giant Semi datapoint is the one to carry forward. Prior entries have tracked the **802.15.4ab silicon race** at the leading edge — ST's ST64UWB (`2026-05-25`), Calterah's Dubhe, Ceva's 4ab IP, imec's narrowband-assist receiver — where the story is who ships the new PHY first. This article documents the *trailing* edge of the same market, where 4z-generation UWB has commoditised far enough that a tier-1 OEM can second-source the die with no board or firmware redesign. That is the same diffusion signal `2026-08-09_makerfabs-matouch-mauwb-positioning-board` flagged from the maker end, now confirmed at consumer volume and with a named challenger vendor. It also means the 4ab premium and the 4z commodity floor are separating into two distinct markets rather than one upgrade path.

The three-layer stack model is the KB's cleanest statement yet of the **UWB vs Bluetooth Channel Sounding** relationship, which has so far been split across technology bins: the KB's Channel Sounding entries (`2026-08-14_silabs-bg2b-coin-cell-channel-sounding-soc`, `2026-07-06_nordic-nrf54l15-tag-channel-sounding`, `2026-08-03_metirionic-cs-distance-angle-mars`) all live in the Bluetooth bin and are read as CS-vs-UWB competition. Framing CS as a *middle layer that expands the ranging market* rather than a substitute reconciles those entries with this one — and it predicts the segment to watch: BLE + CS tags without UWB, a tier that did not exist a year ago and whose first volume products are the concrete landing event to look for.

## Why it matters / what's new (ZH)

这是一次**有明确理由的窗口内回补**（发表于 2026-06-18，处于 12 个月新鲜度窗口内），一次性填补了本库在两个方向上的空白。其一，UWB 主题此前既无*消费级物品追踪器*覆盖，也无*芯片供应链*覆盖：其产品类条目从工业 RTLS（`2026-08-15_nxp-omlox-uwb-rtls-starter-kit`、`2026-08-19_qorvo-uwb-rtls-enterprise-wifi-access-points`、`2026-08-05_murata-uwb-factory-tracking-sub1m`）到创客套件（`2026-08-09_makerfabs-matouch-mauwb-positioning-board`），却完全缺失出货量最大的 UWB 终端形态——大众市场标签。其二，Google Pixel Tag 一直作为未决观察项挂着，原因正是其 UWB 内容未获证实；这篇拆解分析是本库第一条真正查看该品类内部构成的条目。

矽典微这一数据点最值得延续追踪。此前条目跟踪的是 **802.15.4ab 芯片竞赛**的前沿——ST 的 ST64UWB（`2026-05-25`）、Calterah Dubhe、Ceva 的 4ab IP、imec 的窄带辅助接收机——故事主线是谁先量产新 PHY。而本文记录的是同一市场的*后缘*：4z 世代 UWB 已商品化到一线 OEM 可以在不改板、不改固件的前提下更换第二货源。这与 `2026-08-09_makerfabs-matouch-mauwb-positioning-board` 从创客端给出的扩散信号一致，如今在消费量级上得到确认，并且出现了具名的挑战者厂商。这也意味着 4ab 高端与 4z 商品化底盘正在分化为两个独立市场，而非同一条升级路径。

三层定位栈模型是本库迄今对 **UWB 与蓝牙 Channel Sounding 关系**最清晰的表述。此前相关条目分散在不同技术主题下：库内的 Channel Sounding 条目（`2026-08-14_silabs-bg2b-coin-cell-channel-sounding-soc`、`2026-07-06_nordic-nrf54l15-tag-channel-sounding`、`2026-08-03_metirionic-cs-distance-angle-mars`）都归在 Bluetooth 主题，被读作 CS 对 UWB 的竞争。把 CS 定位为*扩大测距市场的中间层*而非替代品，既调和了那些条目与本条目的张力，也给出了值得关注的细分：无 UWB 的 BLE + CS 标签——一年前尚不存在的层级，其首批量产产品即为可核实的落地事件。
