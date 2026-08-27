---
id: 2026-08-27_spacex-starmind-orbital-data-center-constellation
date_published: 2026-08-04
date_found: 2026-08-27
type: satellite-news
technology: satellite
title_en: "SpaceX names its orbital compute constellation 'Starmind' and details the AI1 satellite with Nvidia — up to 1,000,000 spacecraft at 500–2,000 km under FCC file SAT-LOA-20260108-00016, 18.3–19.3 / 28.6–29.1 GHz feeder links and a petabit-scale optical mesh into Starlink"
title_zh: "SpaceX 将其在轨算力星座命名为 \"Starmind\"，并联合英伟达公布 AI1 卫星细节——FCC 申请 SAT-LOA-20260108-00016 下最多 100 万颗航天器、轨道高度 500–2,000 km，18.3–19.3 / 28.6–29.1 GHz 馈电链路，并以拍比特级光网格并入 Starlink"
url: "https://docs.fcc.gov/public/attachments/DA-26-113A1.txt"
source_quality: full
topics: [orbital-data-center, Starmind, AI1, SpaceX, Nvidia, optical-inter-satellite-links, Ka-band-feeder, NGSO-licensing, in-orbit-compute, Starlink-mesh]
topic_primary: leo-constellations
topics_secondary: [sat-ai, ngso-regulation, starlink]
novelty_score: 3
---

## Summary (EN)
SpaceX has given its orbital-compute programme a name and a first-generation spacecraft. On 4 August 2026 the company detailed **Starmind**, a constellation of AI data-centre satellites, and its first-generation vehicle **AI1**, built around Nvidia silicon under a jointly announced compute-payload partnership. The regulatory skeleton had already been laid earlier in the year: the FCC Space Bureau's public notice **DA 26-113** (released 4 February 2026) accepted for filing SpaceX's application **SAT-LOA-20260108-00016** (call sign **S00798**) for the "SpaceX Orbital Data Center System" — a new NGSO system of **up to one million satellites**.

The licence request is unusual in shape as well as scale. Satellites are spread across shells spanning up to 50 km each between **500 km and 2,000 km**, at **30-degree and sun-synchronous inclinations** — the sun-synchronous choice being a power decision rather than a coverage one, keeping arrays in near-continuous illumination. RF is deliberately thin for a constellation of this size: **18.3–19.3 GHz space-to-Earth** and **28.6–29.1 GHz Earth-to-space** feeder links only, with the heavy lifting assigned to **high-bandwidth optical inter-satellite links**. The stated architecture meshes those optical links into the existing Starlink constellation, so Starlink becomes the transport fabric and the data centre becomes another class of node on it rather than a standalone network. Comment deadlines on the application ran 6 / 16 / 23 March 2026.

On the hardware side, AI1 is reported to carry Nvidia's next-generation **Vera CPU and Rubin GPU**, with roughly **75 m solar arrays**, **30 m radiative cooling panels** and a peak electrical budget near **250 kW** per spacecraft — figures that place a single AI1 an order of magnitude above a Starlink V3 in both power and thermal-rejection area. Optical links into Starlink are quoted at roughly **1 Tbps**. The stated schedule is pilot payload flights on Starlink V3 hardware later in 2026, two AI1 prototypes in early 2027, and volume production late 2027 at the Bastrop, Texas "Gigasat" facility, with Musk claiming meaningful scale by 2028. SpaceX's own framing in the filing is characteristically grand — a first step toward "a Kardashev II-level civilization."

## Summary (ZH)
SpaceX 为其在轨算力计划确定了名称与第一代星型。2026 年 8 月 4 日，公司公布了 **Starmind**——一个由 AI 数据中心卫星组成的星座——以及第一代星型 **AI1**，其核心为英伟达芯片，双方同时宣布了算力载荷合作。监管框架此前已经铺好：FCC 空间局公告 **DA 26-113**（2026 年 2 月 4 日发布）受理了 SpaceX 的申请 **SAT-LOA-20260108-00016**（呼号 **S00798**），即 "SpaceX 轨道数据中心系统"，一个**最多 100 万颗卫星**的全新 NGSO 系统。

该申请不仅规模罕见，形态也不寻常。卫星分布在 **500 km 至 2,000 km** 之间、每层跨度最多 50 km 的多个轨道壳层内，倾角为 **30 度与太阳同步**——选择太阳同步更多是供电决策而非覆盖决策，目的是让太阳翼近乎持续受照。对这种体量的星座而言，射频申请显得刻意"清瘦"：仅 **18.3–19.3 GHz 空对地**与 **28.6–29.1 GHz 地对空**馈电链路，繁重的传输任务交给**高带宽星间光链路**。申报架构将这些光链路并入既有 Starlink 星座，于是 Starlink 成为承载织物，数据中心成为其上的另一类节点，而非独立网络。申请的意见征询截止日期为 2026 年 3 月 6 / 16 / 23 日。

硬件方面，据报道 AI1 搭载英伟达下一代 **Vera CPU 与 Rubin GPU**，配约 **75 m 太阳翼**、**30 m 辐射散热板**，单星峰值电功率接近 **250 kW**——这一量级使单颗 AI1 在功率与散热面积上都比 Starlink V3 高出一个数量级。并入 Starlink 的光链路速率据称约 **1 Tbps**。公布的时间表为：2026 年内先在 Starlink V3 硬件上做试点载荷飞行，2027 年初发射两颗 AI1 原型，2027 年底在德州 Bastrop 的 "Gigasat" 工厂量产；马斯克称 2028 年可达可观规模。SpaceX 在申请中的自我定位一如既往地宏大——迈向 "卡尔达舍夫 II 型文明" 的第一步。

## Key technical points (EN)
- **Regulatory event key:** FCC ICFS file **SAT-LOA-20260108-00016**, call sign **S00798**, accepted for filing by public notice **DA 26-113** released 4 Feb 2026; system name "SpaceX Orbital Data Center System". Comments 6 Mar, responses 16 Mar, replies 23 Mar 2026.
- **Scale:** up to **1,000,000 satellites** — roughly two orders of magnitude above the Starlink Gen2 authorisation.
- **Orbits:** 500–2,000 km, shells spanning up to 50 km each, inclinations 30° and sun-synchronous (SSO chosen for continuous solar illumination, not ground coverage).
- **Spectrum requested:** space-to-Earth **18.3–19.3 GHz**, Earth-to-space **28.6–29.1 GHz** — feeder-link-only Ka allocations; no user-terminal service bands, consistent with a compute constellation rather than a broadband one.
- **Backhaul:** high-bandwidth **optical inter-satellite links**, meshed into the operational Starlink constellation; ~1 Tbps per optical link reported, described as a "petabit-scale optical communications network" in aggregate.
- **AI1 spacecraft (reported):** Nvidia **Vera CPU + Rubin GPU**; ~**75 m solar arrays**; ~**30 m radiative cooling panels**; ~**250 kW** peak compute power; per-module AI throughput quoted at up to ~25× an H100.
- **Timeline (stated):** pilot compute payloads on Starlink V3 hardware later in 2026 → two AI1 prototypes early 2027 → volume production late 2027 at the Bastrop, TX "Gigasat" plant → "significant scale" claimed for 2028.
- **Architectural consequence:** the RF/optical split makes the constellation's usable capacity a function of optical-mesh routing and thermal rejection, not of licensed RF bandwidth — the Ka feeder pair is a control/egress path, not the data plane.

## Key technical points (ZH)
- **监管事件键：** FCC ICFS 文件 **SAT-LOA-20260108-00016**，呼号 **S00798**，由 2026 年 2 月 4 日发布的公告 **DA 26-113** 受理；系统名称 "SpaceX Orbital Data Center System"。意见 3 月 6 日、答复 3 月 16 日、再答复 3 月 23 日。
- **规模：** 最多 **1,000,000 颗卫星**——比 Starlink Gen2 的许可量高出约两个数量级。
- **轨道：** 500–2,000 km，每层跨度最多 50 km，倾角 30° 与太阳同步（选太阳同步是为持续光照，而非地面覆盖）。
- **申请频段：** 空对地 **18.3–19.3 GHz**，地对空 **28.6–29.1 GHz**——纯馈电链路 Ka 频段；未申请用户终端业务频段，符合"算力星座"而非"宽带星座"的定位。
- **回传：** 高带宽**星间光链路**，并入在运的 Starlink 星座；据称单条光链路约 1 Tbps，整体被描述为"拍比特级光通信网络"。
- **AI1 星型（据报道）：** 英伟达 **Vera CPU + Rubin GPU**；约 **75 m** 太阳翼；约 **30 m** 辐射散热板；峰值算力功耗约 **250 kW**；单模组 AI 吞吐据称最高约为 H100 的 25 倍。
- **时间表（公布值）：** 2026 年内在 Starlink V3 硬件上试点算力载荷 → 2027 年初两颗 AI1 原型 → 2027 年底德州 Bastrop "Gigasat" 工厂量产 → 号称 2028 年达到"可观规模"。
- **架构后果：** 射频/光的分工使星座可用容量取决于光网格路由与散热排热能力，而非许可射频带宽——那对 Ka 馈电频段是控制/出口通道，不是数据面。

## Why it matters / what's new (EN)
The knowledge base has been tracking orbital computing as a research thread all summer — the space-data-centre survey (06-13), Stride's revisiting-aware in-orbit edge computing (08-03), OTA federated aggregation (08-17), carbon accounting for orbital AI (08-18), BUPT's measured in-orbit AI-infrastructure systems (08-24) and SatDL's data-logistics layer (08-26) — but had no entry for the largest concrete industrial programme in that space. Starmind fills that gap and reframes the thread: the papers above optimise learning and inference *within* small satellite compute budgets, while SpaceX is proposing to remove the budget constraint by flying 250 kW spacecraft with 30 m radiators. Whether that closes thermally and economically is the open question the research thread should now be measured against.

Three details matter for the communications side specifically. First, the **spectrum request is feeder-link-only Ka** — SpaceX is explicitly not asking for user-service bands, which means the constellation's data plane is optical and its regulatory exposure is far narrower than a broadband NGSO of comparable size would be. Second, **meshing into Starlink** rather than building a parallel network makes Starlink's optical fabric the shared substrate for both broadband and compute traffic — a routing and scheduling problem that directly echoes the ISL-contention modelling in the SatDL and Stride entries. Third, **one million satellites at 500–2,000 km** is a coexistence event as much as a compute one: it lands squarely on the LEO-capacity and collision-dynamics literature the bin has been logging (08-26 stochastic LEO capacity drop) and on the measured-emission / radio-astronomy coexistence thread opened by SNIFFLES (08-18).

Novelty is 3 rather than 4 because most of the AI1 hardware figures come from company presentation and press coverage rather than an engineering filing, and because nothing has flown: the FCC has accepted the application for filing, not granted it. The verifiable core is the docket itself. Track this by the event key **SAT-LOA-20260108-00016 / S00798** — the grant decision, the 2026 Starlink-V3 pilot payload, and the first AI1 prototype launch are three distinct future landing events, each earning its own entry only on confirmation.

## Why it matters / what's new (ZH)
本条目库整个夏天都在跟踪"在轨计算"这条研究主线——空间数据中心综述（06-13）、Stride 重访感知在轨边缘计算（08-03）、空中计算联邦聚合（08-17）、在轨 AI 碳核算（08-18）、北邮在轨 AI 基础设施实测系统（08-24）、以及 SatDL 的数据物流层（08-26）——却始终没有该领域最大的具体产业计划的条目。Starmind 补上了这一空缺，并重构了这条主线：上述论文都在小卫星有限算力预算**之内**优化训练与推理，而 SpaceX 提出的是用 250 kW、带 30 m 散热板的航天器直接取消这一预算约束。它在热控与经济性上能否闭合，正是这条研究主线今后应被对照检验的问题。

对通信侧而言有三点尤其关键。其一，**频谱申请仅限 Ka 馈电链路**——SpaceX 明确没有申请用户业务频段，意味着该星座的数据面在光域，其监管暴露面远小于同等规模的宽带 NGSO。其二，**并入 Starlink** 而非另建平行网络，使 Starlink 的光织物成为宽带流量与算力流量共享的底座——这正是 SatDL 与 Stride 条目中 ISL 争用建模所指向的路由与调度问题。其三，**500–2,000 km 上的百万颗卫星**既是算力事件也是共存事件：它直接落在本条目库一直记录的 LEO 容量与碰撞动力学文献（08-26 随机 LEO 容量论文，未收录）之上，也落在 SNIFFLES（08-18）开启的实测辐射／射电天文共存主线之上。

新颖度评 3 而非 4：AI1 的多数硬件数字来自公司发布与媒体报道而非工程申报文件，且尚无实物入轨——FCC 只是"受理"了申请，并未核准。可核验的硬核部分是申请档案本身。请以事件键 **SAT-LOA-20260108-00016 / S00798** 跟踪：核准裁决、2026 年 Starlink V3 试点载荷、首批 AI1 原型发射，是三个彼此独立的未来落地事件，各自只有在确认后才应写入新条目。
