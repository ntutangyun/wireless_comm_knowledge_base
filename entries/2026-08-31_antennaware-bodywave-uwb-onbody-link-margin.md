---
id: 2026-08-31_antennaware-bodywave-uwb-onbody-link-margin
date_published: 2026-02-23
date_found: 2026-08-31
type: industry-news
technology: uwb
title_en: "AntennaWare BodyWave × SynchronicIT omlox: attacking UWB body-blockage at the antenna, 6–12 dB NLOS link margin on body-worn and on-metal tags"
title_zh: "AntennaWare BodyWave × SynchronicIT omlox：从天线层面解决 UWB 人体遮挡，可穿戴与贴金属标签的 NLOS 链路余量提升 6–12 dB"
url: "https://antennaware.com/resources/news/antennaware-synchronicit-uwb-rtls-partnership"
source_quality: full
topics: [UWB, RTLS, antenna design, body blockage, NLOS, omlox, wearable tags, link budget, SynchronicIT, AntennaWare]
topic_primary: uwb-ranging
topics_secondary: [uwb-fi-ra]
novelty_score: 2
---

## Summary (EN)

AntennaWare (Belfast) and SynchronicIT (Netherlands) announced a partnership on 2026-02-23 that pairs AntennaWare's proprietary **BodyWave** antenna technology with SynchronicIT's **omlox Tag Stack**, targeting the accuracy and reliability of UWB real-time location systems in non-line-of-sight conditions. A joint demonstration was shown at Embedded World 2026 (booth 3-423).

The problem BodyWave addresses is the one that dominates real-world UWB error budgets for tags that people actually carry: **body blocking and body absorption**. A UWB radio mounted on a conductive surface — a human body, an animal, or a metal asset — detunes the antenna. The result is an unreliable link, which in practice pushes deployments away from mission-critical, real-time use cases and toward tolerant, non-real-time asset tracking. AntennaWare's claim is that its antenna design keeps working on those conductive surfaces where conventional tag antennas fail, and it quantifies the benefit as **6 to 12 dB of link-margin improvement in NLOS conditions** for on-body and on-metal applications. The company reduces that to a slogan with a clear engineering meaning: **"double the distance, half the power."** Since free-space path loss is 20 dB per decade of range, roughly 6 dB of margin buys a doubling of range — or, held at constant range, the same margin can be spent on transmit power and therefore battery life. Both matter for coin-cell wearable tags.

SynchronicIT is the UWB module vendor whose omlox-compliant tags, anchors and auto-topology location engine already appear in this KB as the hardware half of NXP's omlox Starter Kit (`2026-08-15_nxp-omlox-uwb-rtls-starter-kit`). Folding BodyWave into the omlox Tag Stack means the antenna improvement arrives inside an open-standard industrial locating stack rather than as a one-off module design. Quotes come from Dr Gareth Conway (CEO and co-founder, AntennaWare) and Vincent Van Der Locht (CEO, SynchronicIT), the latter framing the link-margin gain as what is needed "to transform the UWB market for human-centric applications."

**Dating and ingest note.** This item surfaced in a late-August sweep with a search-engine attribution of "August 2026"; the article's own datestamp is **23 February 2026**, and the Embedded World reference (March 2026) corroborates the earlier date. It is ingested as a deliberate in-window backfill, not as fresh news — see the rationale in the next section.

## Summary (ZH)

AntennaWare（贝尔法斯特）与 SynchronicIT（荷兰）于 2026-02-23 宣布合作，将 AntennaWare 自有的 **BodyWave** 天线技术与 SynchronicIT 的 **omlox Tag Stack** 结合，目标是提升 UWB 实时定位系统（RTLS）在非视距条件下的精度与可靠性。双方在 Embedded World 2026 展会（3-423 展位）进行了联合演示。

BodyWave 针对的是真实世界中主导 UWB 误差预算的那个问题——对人们实际随身携带的标签而言尤其如此：**人体遮挡与人体吸收**。当 UWB 射频被安装在导电表面上（人体、动物或金属资产）时，天线会失谐。结果是链路不可靠，实践中这会把部署从关键任务、实时场景推向容忍度更高的非实时资产跟踪。AntennaWare 声称其天线设计在常规标签天线失效的导电表面上依然有效，并把收益量化为：可穿戴与贴金属应用在 **NLOS 条件下链路余量提升 6 至 12 dB**。公司将其归纳为一句有明确工程含义的口号：**"距离翻倍，功耗减半"**。由于自由空间路径损耗为每十倍距离 20 dB，约 6 dB 余量大致换来一倍距离——或者在距离不变的前提下，同样的余量可以折算成发射功率、进而折算成电池寿命。对纽扣电池供电的可穿戴标签而言，两者都很重要。

SynchronicIT 是一家 UWB 模组厂商，其符合 omlox 规范的标签、锚点与自动拓扑定位引擎已经作为 NXP omlox 入门套件的硬件部分出现在本 KB 中（`2026-08-15_nxp-omlox-uwb-rtls-starter-kit`）。把 BodyWave 并入 omlox Tag Stack，意味着这项天线改进是在一个开放标准的工业定位协议栈内交付，而不是作为一次性的模组设计。引语来自 AntennaWare 首席执行官兼联合创始人 Dr Gareth Conway 与 SynchronicIT 首席执行官 Vincent Van Der Locht，后者将链路余量的提升描述为"改变以人为中心的 UWB 市场"所必需的条件。

**日期与收录说明。** 该条目在 8 月下旬的扫描中被搜索引擎标注为"2026 年 8 月"；但文章自身的日期戳为 **2026 年 2 月 23 日**，且文中提及的 Embedded World（2026 年 3 月）也佐证了较早的日期。本条目按窗口内的有意回填收录，而非当作最新新闻——理由见下一节。

## Key technical points (EN)

- **Failure mode targeted:** detuning of the tag antenna when mounted on a conductive surface (human body, animal, metal asset), producing body blocking and body absorption — the dominant NLOS impairment for worn tags.
- **Headline claim:** **6–12 dB link-margin improvement in NLOS** for on-body and on-metal applications, versus conventional tag antennas.
- **Engineering translation:** "double the distance, half the power" — at ~20 dB per decade of free-space path loss, ~6 dB of margin is roughly a 2× range gain, or the same margin traded for transmit power and hence battery life.
- **Integration path:** BodyWave antenna technology combined with SynchronicIT's **omlox Tag Stack**, i.e. delivered inside the open omlox industrial-locating interoperability standard rather than as a bespoke module.
- **Partners:** AntennaWare (proprietary BodyWave design for body-worn and metal-adjacent antennas) + SynchronicIT (Netherlands UWB module vendor; also the hardware partner in NXP's omlox Starter Kit).
- **Stated market consequence:** unreliable on-body links are what confine UWB tags to non-real-time asset tracking; the partners position the link-margin gain as the unlock for mission-critical, human-centric real-time use cases.
- **Named principals:** Dr Gareth Conway (CEO and co-founder, AntennaWare); Vincent Van Der Locht (CEO, SynchronicIT).
- **Demonstration:** joint demo at Embedded World 2026, booth 3-423.
- **Dating:** article's own datestamp 2026-02-23; the "August 2026" attribution seen in search results is engine noise, not the publication date.

## Key technical points (ZH)

- **针对的失效模式：** 标签天线安装在导电表面（人体、动物、金属资产）上时发生失谐，产生人体遮挡与人体吸收——这是可穿戴标签最主要的 NLOS 损伤来源。
- **核心声明：** 可穿戴与贴金属应用相较常规标签天线，**NLOS 链路余量提升 6–12 dB**。
- **工程含义换算：** "距离翻倍，功耗减半"——按自由空间路径损耗每十倍距离约 20 dB 计算，约 6 dB 余量大致对应 2 倍距离增益；或在距离不变时把该余量折算为发射功率，从而折算为电池寿命。
- **集成路径：** BodyWave 天线技术与 SynchronicIT 的 **omlox Tag Stack** 结合，即在开放的 omlox 工业定位互操作标准内交付，而非定制模组。
- **合作方：** AntennaWare（BodyWave 自有设计，面向可穿戴与贴金属场景的天线）+ SynchronicIT（荷兰 UWB 模组厂商；同时也是 NXP omlox 入门套件的硬件合作方）。
- **所述市场后果：** 正是不可靠的贴身链路把 UWB 标签限制在非实时资产跟踪场景；合作方把链路余量提升定位为解锁关键任务、以人为中心的实时场景的关键。
- **具名负责人：** AntennaWare 首席执行官兼联合创始人 Dr Gareth Conway；SynchronicIT 首席执行官 Vincent Van Der Locht。
- **演示：** Embedded World 2026 展会 3-423 展位联合演示。
- **日期：** 文章自身日期戳为 2026-02-23；搜索结果中出现的"2026 年 8 月"归属是引擎噪声，并非发布日期。

## Why it matters / what's new (EN)

**Backfill rationale: this KB's UWB bin has no antenna-layer coverage at all.** Every RTLS and ranging entry so far attacks the accuracy problem somewhere above the antenna — at the silicon (`2026-08-15_nxp-omlox-uwb-rtls-starter-kit` on the Trimension SR048, `2026-08-19_qorvo-uwb-rtls-enterprise-wifi-access-points` on anchors inside Wi-Fi APs), at the protocol and interop layer (`2026-08-04_fira-plugfests-uwb-interop-program`), or in the estimator (`2026-08-15_arxiv-uwb-amr-auto-anchor-calibration`, `2026-08-17_arxiv-radiorange-ranging-simulator`, `2026-08-21_hn-12urenloop-uwb-runner-tracking-lps`). A grep of the UWB entries for antenna / body-blockage terms returns only papers where the body is the *subject* of sensing (`2026-05-24_arxiv-uwb-fat-body-composition`), never the *obstruction*. Yet body blockage is precisely what the algorithm papers in this bin spend their pages compensating for after the fact — the NLOS-robust estimators exist because the link is bad. A 6–12 dB claim at the antenna is an attempt to make the link good instead, and it belongs alongside them for comparison.

The claim is also economically legible in a way most RTLS marketing is not. Link margin is fungible: spend it on range and you need fewer anchors for the same coverage; spend it on transmit power and a coin-cell wearable tag runs materially longer. Both are the actual cost drivers of an industrial UWB deployment — anchor count and battery-swap labour — so an antenna-level gain propagates directly into deployment economics rather than into a datasheet accuracy figure. Note that the numbers here are vendor claims from a partnership announcement, with no independent measurement and no test methodology published; they should be read as a positioning statement, not as a validated result. The KB's test-and-measurement entries (`2026-08-23_litepoint-st64uwb-4ab-phy-validation`) are the model for what third-party verification of such a claim would look like.

Finally, the SynchronicIT thread is worth following. The same Dutch module vendor now appears twice in this KB — as NXP's omlox tag and anchor hardware partner, and here as the integrator of a third-party antenna into the omlox Tag Stack. That is what an open interoperability standard is supposed to enable: a component-level improvement (an antenna) reaching an installed stack without a system redesign, which is the industrial-RTLS analogue of the consumer-tag second-sourcing pattern recorded in `2026-08-29_eetasia-consumer-uwb-tag-architecture-convergence`.

## Why it matters / what's new (ZH)

**回填理由：本 KB 的 UWB 分区此前完全没有天线层面的覆盖。** 迄今为止所有 RTLS 与测距条目都是在天线之上的某个层面攻击精度问题——在芯片层（`2026-08-15_nxp-omlox-uwb-rtls-starter-kit` 的 Trimension SR048、`2026-08-19_qorvo-uwb-rtls-enterprise-wifi-access-points` 的 Wi-Fi AP 内置锚点）、在协议与互操作层（`2026-08-04_fira-plugfests-uwb-interop-program`），或在估计器层（`2026-08-15_arxiv-uwb-amr-auto-anchor-calibration`、`2026-08-17_arxiv-radiorange-ranging-simulator`、`2026-08-21_hn-12urenloop-uwb-runner-tracking-lps`）。对 UWB 条目按"天线／人体遮挡"关键词做 grep，只会命中把人体作为**感知对象**的论文（`2026-05-24_arxiv-uwb-fat-body-composition`），从不命中把人体作为**遮挡物**的内容。然而人体遮挡恰恰是本分区那些算法论文事后花大量篇幅去补偿的东西——NLOS 鲁棒估计器之所以存在，正是因为链路本身很差。在天线端提出 6–12 dB 的改进，是试图直接把链路做好，理应与它们并列以供比较。

该声明在经济层面也比多数 RTLS 营销话术更可解读。链路余量是可置换的：用于距离，则同样覆盖面积所需锚点更少；用于发射功率，则纽扣电池可穿戴标签的续航显著延长。这两者正是工业 UWB 部署的真实成本驱动因素——锚点数量与换电池的人力——因此天线层面的增益会直接传导到部署经济性，而不仅仅体现为数据手册上的精度数字。需要注意，此处数字来自合作公告中的厂商声明，既无独立测量也未公布测试方法学；应当视为定位性表述而非已验证结果。本 KB 的测试与测量类条目（`2026-08-23_litepoint-st64uwb-4ab-phy-validation`）正是此类声明若要获得第三方验证应有的样子。

最后，SynchronicIT 这条线索值得继续跟踪。这家荷兰模组厂商如今在本 KB 中出现了两次——一次作为 NXP omlox 标签与锚点的硬件合作方，一次（即本条）作为把第三方天线整合进 omlox Tag Stack 的集成方。这正是开放互操作标准本应带来的效果：一项元器件级改进（一款天线）无需系统重新设计即可进入既有协议栈；它是 `2026-08-29_eetasia-consumer-uwb-tag-architecture-convergence` 所记录的消费级标签第二货源化模式在工业 RTLS 领域的对应物。
