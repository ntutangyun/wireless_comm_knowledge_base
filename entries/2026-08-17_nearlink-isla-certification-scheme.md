---
id: 2026-08-17_nearlink-isla-certification-scheme
date_published: 2026-01-08
date_found: 2026-08-17
type: nearlink-spec
technology: nearlink
title_en: "NearLink product certification goes operational: iSLA certification rules, first certificates, and a public conformance database"
title_zh: "星闪产品认证体系落地运行：iSLA 认证规则、首批证书与公开的一致性认证数据库"
url: "https://www.comentropy.org/en/2026/post/30253"
source_quality: full
topics: [NearLink, certification, conformance-testing, iSLA, market-access]
topic_primary: nearlink-sle
topics_secondary: [nearlink-slb, nearlink-automotive]
novelty_score: 2
---

## Summary (EN)

Consolidated coverage (deliberate backfill — this bin had standards entries but nothing on the conformance/market-access machinery that sits on top of them) of the International SparkLink Alliance (iSLA) product-certification scheme becoming operational across late 2025 and 2026. The alliance published its 星闪认证规则 (SparkLink Certification Rules) on October 15, 2025 (issued and implemented the same day), defining a certificate numbering scheme of `iSLA + 2-digit certification-body code + 4-digit year + "-" + 3-digit product-category code + 7-digit certificate sequence`. On January 8, 2026 the first batch of SparkLink certification certificates was issued and certification services fully launched. By February 9, 2026 (ITHome report) the alliance website had added a public 产品认证 (product certification) lookup under its Standards & Testing module — the first listed products were Huawei's FreeClip 2 and FreeBuds Pro 5 — with queryable access mode ({E/B/P} tri-mode classification) and capability generation (X.Y format; E1.0 = discoverable/connectable baseline, E2.0 = NearLink audio).

The test scope spans RF conformance (射频一致性), protocol conformance (协议一致性) and interoperability (互联互通), operating as a dual-track regime: alliance listing (联盟列名) run by iSLA plus MIIT model approval (型号核准). July 2026 certification-database sightings of unreleased Huawei HarmonyOS PCs show the practical three-tier structure per product: SLE RF conformance + basic-service-layer protocol conformance + application-profile (HID) conformance. Internationally, a July 10, 2026 Hetao/comentropy analysis reports a SparkLink wireless 360° surround-view system undergoing DEKRA CE certification testing with commercial opportunities already secured in Belgium, Finland and Spain — the first documented use of a Western third-party lab in the SparkLink market-access chain (标准—测试—认证—产品准入).

## Summary (ZH)

整合性条目（有意补录——本主题下已有标准类条目，但尚无覆盖标准之上的一致性认证与市场准入机制的条目），记录国际星闪无线短距通信联盟（iSLA）产品认证体系在 2025 年末至 2026 年间投入运行的全过程。联盟于 2025 年 10 月 15 日发布并同日实施《星闪认证规则》，规定证书编号格式为 `iSLA + 2 位认证机构代码 + 4 位年份 + "-" + 3 位产品类别代码 + 7 位证书序列号`。2026 年 1 月 8 日，首批星闪认证证书颁发，认证服务全面启动。至 2026 年 2 月 9 日（IT之家报道），联盟官网已在"标准与测试"板块新增"产品认证"公开查询入口——首批可查产品为华为 FreeClip 2 与 FreeBuds Pro 5——可查询接入模式（{E/B/P} 三模分类）与能力代际（X.Y 格式；E1.0 = 可发现、可连接基线，E2.0 = 星闪音频）。

测试范围涵盖射频一致性、协议一致性与互联互通测试，实行双轨制：联盟列名（iSLA 主导）+ 工信部型号核准。2026 年 7 月认证数据库中出现的未发布华为鸿蒙 PC 显示了单产品认证的实际三层结构：SLE 射频一致性 + 基础服务层协议一致性 + 应用层协议（HID）一致性。国际化方面，2026 年 7 月 10 日河套/共熵中心的分析报告称，星闪无线 360° 环视系统正在接受 DEKRA 的 CE 认证测试，并已在比利时、芬兰、西班牙获得商业机会——这是"标准—测试—认证—产品准入"链条中首次出现西方第三方实验室。

## Key technical points (EN)

- Certification rules issued & implemented 2025-10-15 by iSLA; certificate number = `iSLA + 2-digit body + 4-digit year + "-" + 3-digit category + 7-digit sequence`.
- First-batch certificates issued and certification services fully launched 2026-01-08.
- Public product-certification database live on the alliance site by 2026-02-09; first entries FreeClip 2 / FreeBuds Pro 5; queryable fields: access mode {E/B/P} and capability generation X.Y (E1.0 discoverable/connectable, E2.0 NearLink audio).
- Test scope: RF conformance + protocol conformance + interoperability; dual-track market access = iSLA alliance listing + MIIT model approval.
- Observed per-product three-tier structure (July 2026 database sightings): SLE RF conformance, basic-service-layer protocol conformance, application-profile (e.g. HID) conformance.
- International path: DEKRA CE certification testing of a SparkLink wireless 360° surround-view system; commercial traction in Belgium, Finland, Spain (as of 2026-07-10).
- Supporting infrastructure: OpenLab (Wuhan, since 2025-05-13) interoperability testing — 57 products from 44 vendors passed; 15 SparkLink standards in China's national-standard adoption (国标采信) pipeline.

## Key technical points (ZH)

- 认证规则由 iSLA 于 2025-10-15 发布并实施；证书编号 = `iSLA + 2 位机构代码 + 4 位年份 + "-" + 3 位产品类别 + 7 位序列号`。
- 2026-01-08 首批证书颁发、认证服务全面启动。
- 至 2026-02-09 联盟官网产品认证数据库上线；首批为 FreeClip 2 / FreeBuds Pro 5；可查字段：接入模式 {E/B/P} 与能力代际 X.Y（E1.0 可发现可连接，E2.0 星闪音频）。
- 测试范围：射频一致性 + 协议一致性 + 互联互通；市场准入双轨制 = iSLA 联盟列名 + 工信部型号核准。
- 单产品三层认证结构（2026 年 7 月数据库实测）：SLE 射频一致性、基础服务层协议一致性、应用层协议（如 HID）一致性。
- 国际化路径：DEKRA 对星闪无线 360° 环视系统进行 CE 认证测试；已在比利时、芬兰、西班牙获得商业机会（截至 2026-07-10）。
- 配套设施：OpenLab（武汉，2025-05-13 起）互联互通测试——44 家厂商 57 款产品通过；15 项星闪标准进入国标采信计划。

## Why it matters / what's new (EN)

This KB's NearLink standards coverage so far tracked the specifications themselves (SparkLink 1.0/2.0, the GB/T 46803 national standards) — the 2026-06-05 entry explicitly flagged the then-unannounced conformance/certification scheme as the missing piece. This entry closes that gap: certification is what turns a paper standard into an interoperable multi-vendor market, and NearLink now demonstrably has the full chain — published rules, numbered certificates, a public conformance database with capability-generation labeling, and a dual-track (alliance + regulator) access regime. Two structural signals stand out. First, the capability-generation labels (E1.0/E2.0) surfacing in a public database give third parties the first authoritative way to distinguish feature tiers across NearLink devices — analogous to Bluetooth SIG qualification listings. Second, the DEKRA CE testing with Belgian/Finnish/Spanish commercial traction is the first evidence of the certification chain reaching outside China, a concrete (if small) counterpoint to the "China-centric without standardisation" thesis in the April 2026 EE Times Asia analysis already in this KB. Watch items: the first non-Huawei brands appearing in the certification database, and whether automotive (car-key) products get their own category code as the car-key national standard finishes approval.

## Why it matters / what's new (ZH)

本知识库此前的星闪标准类条目跟踪的是规范本身（星闪 1.0/2.0、GB/T 46803 国家标准）——2026-06-05 条目曾明确指出当时尚未公布的一致性认证体系是缺失的一环。本条目补上了这一环：认证是把纸面标准变成可互操作的多厂商市场的关键机制，而星闪现在完整具备了这条链——已发布的规则、有编号的证书、带能力代际标注的公开一致性数据库、以及联盟+监管双轨准入。两个结构性信号值得注意。其一，公开数据库中的能力代际标签（E1.0/E2.0）首次让第三方能够权威区分星闪设备的功能层级——类似蓝牙 SIG 的资格认证列表。其二，DEKRA CE 测试及比利时/芬兰/西班牙的商业进展，是认证链条走出中国的首个实证，对本库中 2026 年 4 月 EE Times Asia"无标准化则困于中国市场"论断构成具体（虽然尚小）的反例。关注点：认证数据库中出现首批非华为品牌，以及随着车钥匙国家标准完成报批，汽车（车钥匙）产品是否获得独立的产品类别代码。

## Images

*(No redistributable images for this entry — the certification-database screenshots are hosted behind the alliance site.)*
