---
id: 2026-09-11_ieee-mentor-tgbt-pqc-pake-digest
date_published: 2026-09-10
date_found: 2026-09-11
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 Mentor digest — TGbt: PAKE and crypto-agility documents join the post-quantum thread (2026-09-10)"
title_zh: "IEEE 802.11 Mentor 摘要 — TGbt：PAKE 与加密敏捷性提案加入后量子密码学线程（2026-09-10）"
url: https://mentor.ieee.org/802.11/documents?is_year=2026
source_quality: snippet_only
topics: [TGbt, PQC, PAKE, KEM, crypto-agility, 802.11bt]
topic_primary: security-privacy
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

TGbt (Post-Quantum Cryptography) uploaded six new-DCN documents on 2026-09-10, five from Huawei and MediaTek authors plus one from ZTE. Two concern password-authenticated key exchange (PAKE): a Huawei design proposal for an "efficient signaling" PAKE (1739) and a companion Huawei PAKE-protocol document (1749). Two more address crypto agility: a MediaTek document on regional extensibility of the PQC algorithm set (1748) and a Huawei comment resolution generalizing the key-encapsulation-mechanism (KEM) container (1751). A fifth is a draft liaison letter to the IRTF (Internet Research Task Force), and a sixth, from ZTE, compares the proposed PQC key-exchange designs. This is this KB's first record of Huawei authorship in TGbt's PAKE thread, which it has otherwise tracked since 2026-07-17 as HPE's Dan Harkins' contribution (Harkins is the author of the widely-deployed SAE PAKE used in WPA3).

## Summary (ZH)

TGbt（后量子密码学）于 2026-09-10 上传了六份新编号文档，其中五份来自华为与联发科的作者，另有一份来自中兴。两份涉及口令认证密钥交换（PAKE）：一份华为提出的「高效信令设计」PAKE 方案（1739），以及一份配套的华为 PAKE 协议文档（1749）。另有两份处理加密敏捷性：联发科关于 PQC 算法集合区域可扩展性的文档（1748），以及华为将密钥封装机制（KEM）容器泛化的意见处理提案（1751）。第五份是致 IRTF（互联网研究任务组）的联络函草案；第六份来自中兴，对已提出的 PQC 密钥交换方案进行比较。这是本知识库首次记录华为在 TGbt 的 PAKE 线程中署名——此前该线程仅记录到 HPE 的 Dan Harkins（WPA3 所用、已广泛部署的 SAE PAKE 的作者）自 2026-07-17 起的贡献。

## Key technical points (EN)

- **DCN 11-26-1739r0 · TGbt** — "PAKE with Efficient Signaling Design". Ming Zhao (Huawei), uploaded 10-Sep-2026 02:16 ET. Proposes a PAKE design aimed at reducing signaling overhead relative to the design(s) already under discussion. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1739&is_year=2026)
- **DCN 11-26-1749r0 · TGbt** — "PQC PAKE protocol". Fei Liu (Huawei), uploaded 10-Sep-2026 05:05 ET. A companion protocol-level document for the PAKE thread, from the same company as the crypto-agility CR (1751) uploaded shortly after. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1749&is_year=2026)
- **DCN 11-26-1748r0 · TGbt** — "PQC Algorithm Regional Extensibility". Tao Chun Lee (MediaTek), uploaded 10-Sep-2026 11:13 ET. Proposes accommodating vendor-specific and region-specific PQC algorithm extensions above the IEEE-level ML-KEM baseline, using an ISO 3166-1 country code to distinguish regions, security profile numbers as entries and the PQC parameter element as a container, leaving regional bodies to define and certify region-specific content. It also covers exclusive versus non-exclusive parameter-element content and defences against misuse, downgrade and denial-of-service attacks, including a proof-of-work bound to the hash of the KEM encapsulation keys. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1748&is_year=2026)
- **DCN 11-26-1751r0 · TGbt** — "CR for crypto agility - general KEM container". Fei Liu (Huawei), uploaded 10-Sep-2026 05:11 ET. A comment resolution to CID 497 renaming the draft's "ML-KEM Encapsulation Key" and "ML-KEM Ciphertext" fields to generic "KEM Encapsulation Key" and "KEM Ciphertext", so additional KEM algorithms can be introduced without expanding the element each time. Co-authored by Fei Liu and Jiawei Wu (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1751&is_year=2026)
- **DCN 11-26-1555r0 · TGbt** — "The comparison of the proposed PQC key exchange". Jay Yang (ZTE), uploaded 10-Sep-2026 04:43 ET. Compares the PQC key-exchange designs currently on the table. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1555&is_year=2026)
- **DCN 11-26-1743r0 · TGbt** — "Draft liaison to IRTF". Fei Liu (Huawei), uploaded 10-Sep-2026 03:54 ET. Administrative liaison-letter draft to the IRTF; no protocol content of its own. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1743&is_year=2026)

## Key technical points (ZH)

- **DCN 11-26-1739r0 · TGbt** — "高效信令设计的 PAKE"。Ming Zhao（华为），2026-09-10 02:16 ET 上传。提出一种旨在相对现有讨论方案降低信令开销的 PAKE 设计。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1739&is_year=2026)
- **DCN 11-26-1749r0 · TGbt** — "PQC PAKE 协议"。Fei Liu（华为），2026-09-10 05:05 ET 上传。PAKE 线程的配套协议层文档，与稍后上传的加密敏捷性 CR（1751）出自同一公司。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1749&is_year=2026)
- **DCN 11-26-1748r0 · TGbt** — "PQC 算法区域可扩展性"。Tao Chun Lee（联发科），2026-09-10 11:13 ET 上传。提出在 IEEE 层 ML-KEM 基线之上容纳厂商特定与区域特定的 PQC 算法扩展：以 ISO 3166-1 国家代码区分区域，以安全配置档编号作为条目，以 PQC 参数元素作为容器，由区域机构负责定义并认证区域特定内容。文档还涉及参数元素内容的独占与非独占模式，以及针对滥用、降级与拒绝服务攻击的防御（包括绑定到 KEM 封装密钥哈希的工作量证明）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1748&is_year=2026)
- **DCN 11-26-1751r0 · TGbt** — "加密敏捷性 CR——通用 KEM 容器"。Fei Liu（华为），2026-09-10 05:11 ET 上传。针对 CID 497 的意见处理提案，将草案中的「ML-KEM 封装密钥」「ML-KEM 密文」字段改名为通用的「KEM 封装密钥」「KEM 密文」，使新增 KEM 算法时无需反复扩展该元素。共同作者为 Fei Liu 与 Jiawei Wu（华为）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1751&is_year=2026)
- **DCN 11-26-1555r0 · TGbt** — 「已提出的 PQC 密钥交换方案比较」。Jay Yang（中兴），2026-09-10 04:43 ET 上传。对当前在讨论中的 PQC 密钥交换方案进行比较。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1555&is_year=2026)
- **DCN 11-26-1743r0 · TGbt** — "致 IRTF 的联络函草案"。Fei Liu（华为），2026-09-10 03:54 ET 上传。致 IRTF 的行政性联络函草案，本身不含协议内容。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1743&is_year=2026)

## Why it matters / what's new (EN)

This is the first appearance of Huawei authorship in TGbt's PAKE-drafting thread in this KB — previously tracked only via HPE's Dan Harkins since `2026-07-17_ieee-mentor-montreal-plenary-closing-digest` (and again today via a same-day editorial revision of his own "hpqc-pake"/"pqc-unauth"/"pqc-sig-auth"/"pqc-no-sig-auth" reference documents, DCN 89/545/546/547, not separately detailed here as they are revision bumps). The two crypto-agility documents (1748 regional algorithm extensibility, 1751 general KEM container) address a structural question distinct from PAKE itself: how the draft accommodates multiple cryptographic algorithm choices — by region or by KEM type — without re-opening the protocol specification each time a new algorithm needs to be added. The algorithm-extendibility question is not new to the group: Huawei has run it since DCN 11-26-1064 "CR for PQC algorithm extendibility - part 1" in May 2026, which DCN 1748 itself cites. What today's wave adds to this KB's TGbt coverage is the key-exchange side.

## Why it matters / what's new (ZH)

这是本知识库首次记录华为在 TGbt 的 PAKE 起草线程中署名——此前该线程仅通过 HPE 的 Dan Harkins 追踪，始于 `2026-07-17_ieee-mentor-montreal-plenary-closing-digest`（今天他本人也对"hpqc-pake"/"pqc-unauth"/"pqc-sig-auth"/"pqc-no-sig-auth"等参考文档做了同日编辑性修订，DCN 89/545/546/547，因属修订版本升级，此处不单独展开）。两份加密敏捷性文档（1748 区域算法可扩展性、1751 通用 KEM 容器）处理的是与 PAKE 本身不同的结构性问题：草案如何在不必每次新增算法都重新开放协议规范的前提下，容纳按区域或按 KEM 类型划分的多种密码算法选择。算法可扩展性对该组而言并非新议题：华为自 2026 年 5 月的 DCN 11-26-1064「CR for PQC algorithm extendibility - part 1」起便在推进这一线索，DCN 1748 本身亦引用了该文档。今日这批文档为本知识库的 TGbt 覆盖新增的，是密钥交换这一侧。

## Images

None.
