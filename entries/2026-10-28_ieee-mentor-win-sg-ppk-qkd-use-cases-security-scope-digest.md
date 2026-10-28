---
id: 2026-10-28_ieee-mentor-win-sg-ppk-qkd-use-cases-security-scope-digest
date_published: 2026-10-27
date_found: 2026-10-28
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WIN SG Mentor digest — 2026-10-28 (\"The use cases of PPK in 802.11\": four post-quantum pre-shared-key use cases, one infrastructure BSS and three MAPC with QKD, DCN 2052r0)"
title_zh: "IEEE 802.11 WIN SG Mentor 当日摘要 — 2026-10-28（《PPK 在 802.11 中的用例》：四个后量子预共享密钥用例，一个基础设施 BSS、三个结合 QKD 的 MAPC 场景，DCN 2052r0）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2052"
source_quality: full
topics: [WIN-SG, PPK, RFC 8784, RFC 9867, QKD, MAPC, post-quantum, security, PAR scope]
topic_primary: security-privacy
topics_secondary: [wifi8-uhr, mapc-cosr]
novelty_score: 2
---

## Summary (EN)

The WIN Study Group has one new document in the latest listing: DCN 11-26-2052r0, "The use cases of PPK in 802.11" (Jay Yang et al., ZTE). It is listed with an upload time of 27 October 2026 (the DCN was allocated on 22 October).

The background slide cites uncertainty about current asymmetric-key post-quantum algorithms, the global deployment status of quantum key distribution (QKD), and references arguing that symmetric keys remain secure and usable in a quantum era. It then says the contribution presents use cases of applying symmetric keys to 802.11 authentication "based on the PPK (Post-Quantum Preshared key) concept defined in RFC 8784 and RFC 9867". Four use cases follow. Use case 1 (infrastructure BSS): a PPK plus PPK_ID provisioned by an administrator and stored on a USB drive; the slide says this may be deployed in "super security" scenarios such as finance, banking and power systems, where the system must run stably without change for a long period, and that PQC combined with PPK keeps the network reliable even if the PQC is later broken. Use case 2 (MAPC with an embedded QKD source collocated with the AP): MAPC APs exchange the PPK_ID on the APs' operating channel while the QKD key is exchanged between two QKD sources on a quantum channel. Use case 3 (MAPC with the embedded QKD of an Optical Transport Network, OTN): the APs again exchange PPK_ID over the air and obtain the same QKD key from a single QKD source embedded in the associated OTN. Use case 4: the same, but the QKD key is exchanged between two QKD sources embedded in different OTNs. The summary restates the four use cases (PPK in infrastructure BSS in "super security environments", PPK/QKD in several MAPC scenarios), and the penultimate slide carries a straw poll: "Do you agree that security enhancement is in the scope of WIN?" The reference list includes 26/1676 "security enhancement in MAPC for WIN" (cited as reference [1]) and 26/154 "Next Generation After 802.11bn". The slides give no poll result.

## Summary (ZH)

WIN 研究组在最新列表中有一份新文档：DCN 11-26-2052r0《The use cases of PPK in 802.11》（ZTE 的 Jay Yang 等）。列表显示其上传时间为 2026 年 10 月 27 日（该 DCN 于 10 月 22 日分配）。

背景页引用了对当前非对称密钥后量子算法安全性的不确定、量子密钥分发（QKD）的全球部署现状，以及论证对称密钥在量子时代仍然安全可用的参考文献；随后说明本贡献介绍把对称密钥应用于 802.11 认证的用例，“基于 RFC 8784 与 RFC 9867 定义的 PPK（后量子预共享密钥）概念”。接着给出四个用例。用例 1（基础设施 BSS）：由管理员配置的 PPK 与 PPK_ID 存放在 U 盘中；幻灯片称其可部署于金融、银行、电力系统等“超高安全”场景，这类系统要求长期稳定运行、不做改动，并称 PQC 与 PPK 结合可在 PQC 日后被攻破时仍保证网络可靠。用例 2（AP 同址嵌入 QKD 源的 MAPC）：MAPC 各 AP 在 AP 的工作信道上交换 PPK_ID，QKD 密钥则在量子信道上由两个 QKD 源之间交换。用例 3（利用光传送网 OTN 内嵌 QKD 的 MAPC）：各 AP 同样在空口交换 PPK_ID，并从所关联 OTN 内嵌的同一个 QKD 源获得相同的 QKD 密钥。用例 4：同上，但 QKD 密钥在嵌入于不同 OTN 的两个 QKD 源之间交换。总结页重述四个用例（“超高安全环境”下基础设施 BSS 中的 PPK、若干 MAPC 场景中的 PPK/QKD），倒数第二页是一个 straw poll：“你是否同意安全增强属于 WIN 的范围？”参考文献包括 26/1676《security enhancement in MAPC for WIN》（引用为参考文献 [1]）和 26/154《Next Generation After 802.11bn》。幻灯片未给出投票结果。

## Key technical points (EN)

- **DCN 11-26-2052r0 · WIN SG** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2052&is_year=2026) The use cases of PPK in 802.11. Jay Yang et al. (ZTE). 10 slides.
- Basis stated on the slides: PPK (Post-Quantum Preshared key) as defined in RFC 8784 and RFC 9867, applied to 802.11 authentication.
- Use case 1: infrastructure BSS, PPK + PPK_ID provisioned by an admin on a USB drive; targeted at finance, banking and power systems; PQC + PPK to stay reliable if PQC is broken.
- Use case 2: MAPC with a QKD source collocated with each AP; PPK_ID exchanged on the AP operating channel, QKD key over a quantum channel.
- Use case 3: MAPC with the QKD embedded in a single OTN; same QKD key obtained from that source. Use case 4: QKD key exchanged between sources in different OTNs.
- Straw poll on the slides: "Do you agree that security enhancement is in the scope of WIN?" (no result shown). References include 26/1676 "security enhancement in MAPC for WIN" (cited as reference [1]).

## Key technical points (ZH)

- **DCN 11-26-2052r0 · WIN SG** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2052&is_year=2026) The use cases of PPK in 802.11。Jay Yang 等（ZTE）。共 10 页。
- 幻灯片所述依据：RFC 8784 与 RFC 9867 定义的 PPK（后量子预共享密钥），应用于 802.11 认证。
- 用例 1：基础设施 BSS，由管理员配置的 PPK + PPK_ID 存于 U 盘；面向金融、银行、电力系统；PQC + PPK 在 PQC 被攻破时仍保持可靠。
- 用例 2：每个 AP 同址嵌入 QKD 源的 MAPC；PPK_ID 在 AP 工作信道上交换，QKD 密钥走量子信道。
- 用例 3：QKD 内嵌于单个 OTN 的 MAPC；从该源获得相同 QKD 密钥。用例 4：QKD 密钥在不同 OTN 内嵌的源之间交换。
- 幻灯片上的 straw poll：“你是否同意安全增强属于 WIN 的范围？”（未显示结果）。参考文献包括 26/1676《security enhancement in MAPC for WIN》（引用为参考文献 [1]）。

## Why it matters / what's new (EN)

The deck raises a scope question for the WIN Study Group by example: whether security enhancement, in the form of PPK-based authentication with QKD-sourced keys for MAPC, belongs in WIN. The slides themselves cite 26/1676 on MAPC security. Related WIN scope discussions: [2026-09-16_ieee-mentor-win-sg-wifi9-par-and-features-digest](2026-09-16_ieee-mentor-win-sg-wifi9-par-and-features-digest.md), [2026-10-22_ieee-mentor-win-sg-s1g-scope-par-change-digest](2026-10-22_ieee-mentor-win-sg-s1g-scope-par-change-digest.md). The quantum-channel elements are described only at the level of the slides' diagrams and one-line captions; no frame or field is defined.

## Why it matters / what's new (ZH)

这份文档以用例的方式向 WIN 研究组提出范围问题：以 PPK 认证并为 MAPC 引入 QKD 来源密钥的“安全增强”是否属于 WIN。幻灯片自己引用了关于 MAPC 安全的 26/1676。相关 WIN 范围讨论见 [2026-09-16_ieee-mentor-win-sg-wifi9-par-and-features-digest](2026-09-16_ieee-mentor-win-sg-wifi9-par-and-features-digest.md)、[2026-10-22_ieee-mentor-win-sg-s1g-scope-par-change-digest](2026-10-22_ieee-mentor-win-sg-s1g-scope-par-change-digest.md)。量子信道相关部分仅以幻灯片图示和一行说明呈现，没有定义任何帧或字段。
