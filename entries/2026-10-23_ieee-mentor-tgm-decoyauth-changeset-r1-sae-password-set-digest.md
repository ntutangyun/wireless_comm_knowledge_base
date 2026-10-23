---
id: 2026-10-23_ieee-mentor-tgm-decoyauth-changeset-r1-sae-password-set-digest
date_published: 2026-10-22
date_found: 2026-10-23
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGm Mentor digest — 2026-10-23 (DCN 11-26-1982r1, DecoyAuth changeset: normative text for selecting among an AP password set in SAE)"
title_zh: "IEEE 802.11 TGm Mentor 当日摘要 — 2026-10-23（DCN 11-26-1982r1，DecoyAuth 变更集：在 SAE 中从 AP 密码集合内选择密码的规范性文本）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=1982&is_year=2026"
source_quality: full
topics: [TGm, REVmf, SAE, DecoyAuth, Password Identifier, hash-to-element, WPA3]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

DCN 11-26-1982r1, "DecoyAuth support for SAE" (Jeff Hansen, Alta Labs, 22 October 2026), is revision 1 of the DecoyAuth changeset first uploaded on 7 October as r0 and summarised in [2026-10-12_ieee-mentor-tgm-tgbt-decoyauth-pqc-digest](2026-10-12_ieee-mentor-tgm-tgbt-decoyauth-pqc-digest.md). It is written as proposed normative changes to IEEE Std 802.11-2024. The document states that it adds selection from an AP password set to SAE, using DecoyAuth, either without a Password Identifier or within a set selected by a Password Identifier (PID), and that it specifies capability negotiation, the encoded candidate elements, their transport and authentication processing, while existing SAE key derivation and Confirm formats are retained. Its deployment examples are marked informative.

The informative examples describe DecoyAuth without a PID as preserving the password-only joining experience of PPSK/MPSK while requiring DecoyAuth support at both the AP and the non-AP STA, and state that ordinary SAE with PIDs can address some of the same deployment needs but requires identifier-and-password provisioning. In the combined approach one tenant uses one PID with separate private and guest passwords and another tenant uses a different PID with its own passwords; which password authenticated can select different VLANs, rate limits or filtering policies, and a no-PID set can coexist. The text states that a PID selects a set, is not a secret or authorization credential, and is not concealed by DecoyAuth when sent in plaintext; the same password configured under different public PIDs can be tried by its holder under each, so distinct passwords are needed for tenant isolation. The contribution states it does not change ordinary SAE.

The editing instructions add two extension elements (DecoyAuth Control and DecoyAuth Values) to Table 9-130, a status code SAE_DECOYAUTH_FRAGMENT to Table 9-80, Table 9-70 rows 27a/27b in the Authentication frame, SAE-processing amendments in 12.4.7.3 and 12.4.7.5, a new subclause 12.4.9 (DecoyAuth) and a PICS entry in Annex B; codepoints are TBD. Clause 12.4.9.1 requires the hash-to-element method with ECC groups having nonzero curve parameters a and b and p congruent to 3 modulo 4, requires Group 19 support, and excludes hunting-and-pecking, FFC groups, SAE-PK and MBSS. A local policy is disabled, optional or required: in optional mode an incompatible peer falls back to ordinary SAE with one locally selected matching password, while in required mode inability to use DecoyAuth fails authentication and the STA does not fall back.

In 12.4.9.2 the AP selects the entries whose identifier matches the received PID octet for octet (zero-length identifiers when the element is absent), with N candidates, 1 ≤ N ≤ 512. For each candidate it derives the password element, computes an abscissa x_i = OS2IP(SHA-256(password)) mod p (required to be pairwise distinct within the set), encodes each candidate commit element as a randomized pair (u_i, v_i) (12.4.9.3), and builds polynomials U and V of degree less than N through those points. The transmitted Values string is the concatenated coefficients of U then V, 2NL octets in total, while the FFE field of the AP Commit carries a zero-filled placeholder. The non-AP STA evaluates U and V at its own x, decodes the commit element and continues with ordinary SAE Confirm; the AP checks the received Confirm against every candidate without terminating at the first match, selects the first matching candidate, and deletes unselected candidate secrets (12.4.9.7). When the frame would exceed its permitted size, Values are sent in a fragmented exchange of up to 1900 data octets per fragment (C = ceil(T/1900)) using Authentication frames with status SAE_DECOYAUTH_FRAGMENT, with the non-AP STA requesting each next index through a Fragment Request field in the DecoyAuth Control element (12.4.9.5).

## Summary (ZH)

DCN 11-26-1982r1《DecoyAuth support for SAE》（Jeff Hansen，Alta Labs，2026 年 10 月 22 日）是 10 月 7 日以 r0 首次上传的 DecoyAuth 变更集的第 1 次修订，r0 内容见 [2026-10-12_ieee-mentor-tgm-tgbt-decoyauth-pqc-digest](2026-10-12_ieee-mentor-tgm-tgbt-decoyauth-pqc-digest.md)。该文档以对 IEEE Std 802.11-2024 的拟议规范性修改形式撰写。文档称，它借助 DecoyAuth 为 SAE 增加从 AP 密码集合中选择的能力，既可不带密码标识符（Password Identifier，PID），也可在由 PID 选定的集合内进行；并规定了能力协商、编码后的候选元素、其传输方式以及认证处理，现有 SAE 密钥派生与 Confirm 格式保持不变。其部署示例标注为资料性内容。

资料性示例称，不带 PID 的 DecoyAuth 保留了 PPSK/MPSK 仅凭密码的入网体验，但要求 AP 与非 AP STA 双方都支持 DecoyAuth；带 PID 的普通 SAE 可以满足部分相同的部署需求，但需要配置"标识符加密码"而不仅是密码。在组合方式中，租户 A 使用一个 PID 并配有各自独立的私有密码和访客密码，租户 B 使用另一个 PID 及其自己的密码；通过哪个密码完成认证可以选用不同的 VLAN、速率限制或过滤策略，且无 PID 的集合可以并存。文本指出，PID 用于选定一个集合，它不是秘密或授权凭据，以明文发送时 DecoyAuth 也不对其加以隐藏；同一个密码若配置在不同的公开 PID 之下，其持有者可在各个 PID 下尝试，因此租户隔离需要使用不同的密码。该提案声明不改变普通 SAE。

编辑指令向表 9-130 增加两个扩展元素（DecoyAuth Control 与 DecoyAuth Values），向表 9-80 增加状态码 SAE_DECOYAUTH_FRAGMENT，向认证帧的表 9-70 增加 27a/27b 两行，修改 12.4.7.3 与 12.4.7.5 中的 SAE 处理，新增子条款 12.4.9（DecoyAuth），并在附录 B 增加 PICS 条目；码点均待定。12.4.9.1 要求使用哈希到元素（hash-to-element）方法，ECC 组需满足曲线参数 a、b 非零且 p ≡ 3 (mod 4)，必须支持 Group 19，并排除 hunting-and-pecking、FFC 组、SAE-PK 与 MBSS。本地策略分为禁用、可选与强制：可选模式下，对端不兼容时回退到使用本地选定的一个匹配密码的普通 SAE；强制模式下若无法使用 DecoyAuth 则认证失败，STA 不回退。

在 12.4.9.2 中，AP 选择标识符与所收到的 PID 逐字节相同的条目（元素缺失时则选择零长度标识符的条目），候选数为 N，1 ≤ N ≤ 512。对每个候选，AP 派生密码元素，计算横坐标 x_i = OS2IP(SHA-256(密码)) mod p（要求集合内两两互异），将每个候选的 commit 元素编码为随机化的一对 (u_i, v_i)（12.4.9.3），并构造经过这些点、次数小于 N 的多项式 U 与 V。传输的 Values 字符串是 U、V 系数的依次串接，共 2NL 个八位组，而 AP Commit 的 FFE 字段携带全零占位。非 AP STA 用自己的 x 对 U、V 求值，解码出 commit 元素后继续进行普通的 SAE Confirm；AP 用每个候选逐一校验收到的 Confirm，不在首次匹配时终止，选取第一个匹配的候选，并删除未被选中的候选秘密（12.4.9.7）。当帧长度会超限时，Values 通过分片交换发送，每片最多 1900 个数据八位组（C = ceil(T/1900)），使用状态码为 SAE_DECOYAUTH_FRAGMENT 的认证帧，非 AP STA 通过 DecoyAuth Control 元素中的 Fragment Request 字段请求下一个片序号（12.4.9.5）。

## Key technical points (EN)

- **DCN 11-26-1982r1 · TGm** — DecoyAuth Changeset (DecoyAuth support for SAE). Jeff Hansen (Alta Labs). Proposed normative changes to IEEE Std 802.11-2024; r1 uploaded 22-Oct-2026 (r0 on 7-Oct). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1982&is_year=2026)
- DecoyAuth Control element (9.4.2.316): Version 1, Mode 1 = optional / 2 = required, optional 2-octet Fragment Request (zero-based index; value equal to the fragment count requests the final AP SAE Commit). DecoyAuth Values element (9.4.2.317): 1 to 251 data octets, consecutive elements concatenated; not MAC fragmentation.
- Applicability (12.4.9.1): hash-to-element only; ECC groups with p ≡ 3 mod 4 and nonzero a, b; Group 19 shall be supported; not with hunting-and-pecking, FFC, SAE-PK or MBSS; policy dot11RSNAConfigDecoyAuthMode disabled / optional / required; the non-AP STA initiates and an AP shall not initiate DecoyAuth for a peer that did not request it.
- AP commitment (12.4.9.2): 1 ≤ N ≤ 512 candidates; a nonempty PID with no applicable entry is rejected with UNKNOWN_PASSWORD_IDENTIFIER and does not fall back to the no-identifier set; abscissas x_i = OS2IP(SHA-256(π_i)) mod p must be pairwise distinct; the same randB/maskB are used for all candidates; Values = coefficients of U then V.
- Transport (12.4.9.5): Authentication algorithm 3, transaction sequence 1; AP Commit uses status SAE_HASH_TO_ELEMENT with a zero-filled FFE placeholder; fragmented exchange with a header of Version, Fragment Index, Fragment Count and Total Length (T a positive multiple of 2L and at most 1024L) and up to 1900 fragment-data octets.
- Selection (12.4.9.7) and PMKSA (12.4.9.9): the AP verifies Confirm against every candidate, with no externally observable indication of the matching index; selecting an identifier alone does not grant the policy of any entry; PMKSA reuse retains the selected authorization context; the 4-Way Handshake and FT key hierarchy are unchanged.

## Key technical points (ZH)

- **DCN 11-26-1982r1 · TGm** —— DecoyAuth 变更集（DecoyAuth support for SAE）。Jeff Hansen（Alta Labs）。对 IEEE Std 802.11-2024 的拟议规范性修改；r1 于 2026-10-22 上传（r0 为 10 月 7 日）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1982&is_year=2026)
- DecoyAuth Control 元素（9.4.2.316）：Version 为 1，Mode 取值 1 = 可选 / 2 = 强制，另有可选的 2 字节 Fragment Request（从 0 起的片序号；取值等于分片总数表示请求最终的 AP SAE Commit）。DecoyAuth Values 元素（9.4.2.317）：1 至 251 个数据八位组，连续元素拼接；不属于 MAC 分片。
- 适用条件（12.4.9.1）：仅使用 hash-to-element；ECC 组需 p ≡ 3 (mod 4) 且 a、b 非零；必须支持 Group 19；不与 hunting-and-pecking、FFC、SAE-PK 或 MBSS 共用；策略 dot11RSNAConfigDecoyAuthMode 为禁用/可选/强制；由非 AP STA 发起，AP 不得对未请求 DecoyAuth 的对端发起。
- AP 承诺（12.4.9.2）：1 ≤ N ≤ 512 个候选；非空 PID 若无对应条目则以 UNKNOWN_PASSWORD_IDENTIFIER 拒绝，且不回退到无标识符集合；横坐标 x_i = OS2IP(SHA-256(π_i)) mod p 必须两两互异；所有候选共用同一组 randB/maskB；Values 为 U 与 V 的系数依次串接。
- 传输（12.4.9.5）：认证算法号 3，事务序号 1；AP Commit 使用状态码 SAE_HASH_TO_ELEMENT 并以全零占位填充 FFE；分片交换含 Version、Fragment Index、Fragment Count 与 Total Length 头部（T 为 2L 的正整数倍且不超过 1024L），每片最多 1900 个数据八位组。
- 选择（12.4.9.7）与 PMKSA（12.4.9.9）：AP 对每个候选校验 Confirm，外部不可观察到匹配的候选序号；仅选择标识符不会授予任何条目的策略；PMKSA 复用时保留所选的授权上下文；4 次握手与 FT 密钥层级不变。

## Why it matters / what's new (EN)

The r0 changeset, summarised in the 2026-10-12 digest, defined password-only selection and excluded the Password Identifier element. r1 extends DecoyAuth to sets selected by a Password Identifier, adds the PID matching and no-fallback rules, and adds informative deployment examples; the candidate bound, polynomial Values encoding, fragment sizes and optional/required modes were already in r0. The document is a contribution to the TGm (REVmf) maintenance thread, so its status is a proposal for editors and the group to consider, not an adopted text.

## Why it matters / what's new (ZH)

2026-10-12 摘要所概述的 r0 变更集只定义了仅凭密码的选择，并排除了 Password Identifier 元素。r1 将 DecoyAuth 扩展到由 PID 选定的密码集合，增加了 PID 匹配与不回退规则，并加入资料性部署示例；候选上限、基于多项式的 Values 编码、分片大小和可选/强制模式在 r0 中已经存在。该文档是向 TGm（REVmf）维护线程提交的贡献，其状态是供编辑与工作组考虑的提案，而非已被采纳的文本。
