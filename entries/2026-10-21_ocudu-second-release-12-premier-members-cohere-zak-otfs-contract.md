---
id: 2026-10-21_ocudu-second-release-12-premier-members-cohere-zak-otfs-contract
date_published: 2026-10-19
date_found: 2026-10-21
type: community-signal
technology: cellular
title_en: "OCUDU's second open-source RAN release (8 October) adds beamforming and Rel-17 NTN; Mobile World Live reports 12 premier and 34 general members and a Zak-OTFS contract on an OCUDU stack"
title_zh: "OCUDU 第二版开源 RAN 软件（10 月 8 日）加入波束赋形与 Rel-17 NTN；Mobile World Live 报道有 12 家 Premier 与 34 家普通成员，并有基于 OCUDU 的 Zak-OTFS 合同"
url: "https://x.com/pulsone/status/2112219811589886384"
source_quality: full
topics: [OCUDU, open-source RAN, CU/DU, srsRAN, Rel-17 NTN, beamforming, Zak-OTFS, ISAC, Linux Foundation]
topic_primary: open-ran
topics_secondary: [6g-vision, ntn]
novelty_score: 3
---

## Summary (EN)

A post by Cohere Technologies on X (19 October) quotes a Mobile World Live interview, published 19 October, with Dr Tom Rondeau, principal director of the US Department of War's FutureG programme, about the OCUDU Ecosystem Foundation. OCUDU (Open Centralised Unit Distributed Unit) is a Linux Foundation project hosting open-source software for the RAN's central and distributed units. According to the interview, the project works to a six-month release cadence: the first release came in April and the second on 8 October.

Rondeau described the April release as mainly a re-architecture of Software Radio Systems' LTE-era code base into a basic 5G RAN that could place a call and usually carry a data connection from standard 5G UEs, with many 3GPP- and O-RAN-based interfaces. The October release focuses on radio performance: beamforming, more advanced multi-antenna support, non-public networks, resilience upgrades, bug fixes and support for more powerful phased-array radio units. It also incorporates the 3GPP Release 17 non-terrestrial network (NTN) specification, in response to developer requests.

## Summary (ZH)

Cohere Technologies 于 10 月 19 日在 X 上发帖，引用了 Mobile World Live 10 月 19 日发表的对美国战争部 FutureG 项目主管 Tom Rondeau 博士的访谈，内容涉及 OCUDU 生态基金会。OCUDU（Open Centralised Unit Distributed Unit）是 Linux 基金会旗下的项目，托管 RAN 中央单元与分布式单元的开源软件。访谈称该项目按六个月的节奏发布版本：首个版本在 4 月，第二版在 10 月 8 日。

Rondeau 称 4 月版本主要是对 Software Radio Systems 源自 LTE 时代的代码库进行重构，得到一个可建立呼叫、通常可为标准 5G UE 提供数据连接的基础 5G RAN，并包含大量基于 3GPP 与 O-RAN 的接口。10 月版本侧重无线性能：波束赋形、更高级的多天线支持、非公网、韧性增强、缺陷修复，以及对更强大相控阵无线单元的支持。应开发者的多次询问，该版本还纳入了 3GPP Release 17 非地面网络（NTN）规范。

## Key technical points (EN)

- Cadence: six-month releases; v1 in April (rebuilt basic 5G RAN), v2 on 8 October (beamforming, multi-antenna, non-public networks, resilience, phased-array radio support, Rel-17 NTN).
- Membership as reported by Mobile World Live: Samsung joined as a premier member in April, Qualcomm in May and Intel in August, giving 12 premier and 34 general members. Founding members included AMD, AT&T, Ericsson, Nokia, Nvidia, SoftBank Corp and Verizon; FutureG and the US National Spectrum Consortium agreed to back the foundation for three years, with funds to be appropriated by Congress.
- Roadmap: Rondeau said the aim is at least one "real champion" that has integrated OCUDU into a commercial release, and acknowledged "a year from now may be a little bit early"; integration in prototypes or test facilities would count.
- Cohere contract: a two-year contract awarded by Rondeau's office would use OCUDU to set up a call over the standard 5G NR waveform and then negotiate a switch to another waveform for the data plane, in Cohere's case Zak-OTFS (Orthogonal Time Frequency and Space), so that sensing and communications can be tested together on an OCUDU-based RAN stack. Completion is expected around the 2028 Los Angeles Olympics; the work will not be public in the way OCUDU is, but Cohere has committed to releasing the interfaces back into the project.
- Rondeau places integrated sensing and communication (ISAC) as one leg of 6G alongside connectivity and edge AI compute.

## Key technical points (ZH)

- 节奏：每六个月一个版本；v1 在 4 月（重构的基础 5G RAN），v2 在 10 月 8 日（波束赋形、多天线、非公网、韧性、相控阵无线单元支持、Rel-17 NTN）。
- 据 Mobile World Live 报道的成员情况：三星 4 月加入 Premier 成员，高通 5 月，英特尔 8 月，使 Premier 成员达 12 家、普通成员 34 家。创始成员包括 AMD、AT&T、爱立信、诺基亚、英伟达、软银和 Verizon；FutureG 与美国国家频谱联盟同意为该基金会提供三年支持，经费有待国会拨付。
- 路线图：Rondeau 表示目标是至少出现一家"真正的拥护者"，将 OCUDU 集成到商用版本中，并承认"一年后可能还太早"；集成到原型或测试设施也算数。
- Cohere 合同：由 Rondeau 办公室授予、为期两年的合同，将用 OCUDU 在标准 5G NR 波形上建立呼叫，再协商将数据面切换到另一种波形（Cohere 的方案为 Zak-OTFS，即正交时频空），以便联合测试感知与通信，基于 OCUDU 的 RAN 协议栈构建。预计在 2028 年洛杉矶奥运会前后完成；该工作不会像 OCUDU 那样公开，但 Cohere 已承诺将接口回馈到项目中。
- Rondeau 将通信感知一体化（ISAC）视为 6G 的一条主线，与连接和边缘 AI 算力并列。

## Why it matters / what's new (EN)

The KB already holds several research papers built on OCUDU, but none on the project itself. This item records the second release's feature set (including Rel-17 NTN support in an open-source CU/DU), the stated membership counts and the planned Zak-OTFS waveform-negotiation test on an OCUDU stack. The figures come from a Mobile World Live interview article and an X post quoting it; release details are the programme director's statements and the membership counts are the article's own reporting, not a release note. Social-signal item: the foundation's release notes and the Linux Foundation project page are not among the cellular scout's sources.

## Why it matters / what's new (ZH)

知识库中已有若干基于 OCUDU 的研究论文，但尚无关于该项目本身的条目。本条记录了第二版的功能范围（包括开源 CU/DU 中的 Rel-17 NTN 支持）、所述成员数量，以及在 OCUDU 协议栈上计划进行的 Zak-OTFS 波形协商测试。数字来自 Mobile World Live 的访谈报道及引用它的 X 帖子；版本内容为项目负责人的表述，成员数量为该文自身的报道，而非版本说明。社交信号条目：基金会的版本说明与 Linux 基金会项目页不在 cellular scout 的信息源之内。

## Images

None.
