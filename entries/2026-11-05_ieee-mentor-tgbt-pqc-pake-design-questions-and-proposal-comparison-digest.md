---
id: 2026-11-05_ieee-mentor-tgbt-pqc-pake-design-questions-and-proposal-comparison-digest
date_published: 2026-11-04
date_found: 2026-11-05
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbt Mentor digest — 2026-11-05 (PQC PAKE: Cisco's design-question deck DCN 2235r0 and HPE's PAKE comparison deck DCN 1452r2)"
title_zh: "IEEE 802.11 TGbt Mentor 当日摘要 — 2026-11-05（后量子 PAKE：Cisco 的设计问题讨论稿 DCN 2235r0 与 HPE 的 PAKE 方案对比稿 DCN 1452r2）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2235"
source_quality: full
topics: [802.11bt, TGbt, post-quantum cryptography, PAKE, CPace, OQUAKE, ML-KEM, SAE]
topic_primary: security-privacy
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

TGbt had two PAKE-related slide decks on 4 November 2026. DCN 11-26-2235r0, "Some Issues to Discuss about PQC PAKEs" (slide byline Stephen Orr, Cisco, deck dated 2026-11-09; the Mentor listing shows the upload under Dan Harkins, HPE, with the title "pake_features_discussion"), says its purpose is to discuss aspects of PAKEs "in order to determine if there is any consensus to require them". It lists six questions: hybrid versus pure PQC; balanced versus augmented; sensitivity to message count and who sends last; specify fully in 11bt or reference an external document; standalone exchange or part of another exchange such as PASN; and whether to keep the current NIST-curve/ML-KEM pairings or add primitives.

DCN 11-26-1452r2, "Compare and Contrast PAKE Proposals" (Dan Harkins, HPE, deck dated 2026-07-14), advocates adopting a PAKE in the TGbt draft and compares the PAKE proposals before the group (11-26/0089r7, 11-26/1203r4, and a third, 11-26/1749r0). Harkins also uploaded new revisions of reference documents 89 (r8, "hpqc-pake"), 545 (r4, "pqc-unauth"), 546 (r7, "pqc-sig-auth") and 547 (r4, "pqc-no-sig-auth").

## Summary (ZH)

2026 年 11 月 4 日 TGbt 有两份与 PAKE 相关的幻灯片。DCN 11-26-2235r0《Some Issues to Discuss about PQC PAKEs》（幻灯片署名 Stephen Orr，Cisco，文稿日期 2026-11-09；Mentor 列表显示该文件由 Dan Harkins（HPE）上传，标题为“pake_features_discussion”）称其目的是讨论 PAKE 的若干方面，“以判断是否存在要求采用 PAKE 的共识”。文稿列出六个问题：混合与纯后量子；平衡式与增强式；对消息数量和最后发送方的敏感性；完全在 11bt 中规定还是引用外部文档；独立交互还是并入 PASN 等其他交互；保留现有 NIST 曲线与 ML-KEM 配对还是增加新原语。

DCN 11-26-1452r2《Compare and Contrast PAKE Proposals》（Dan Harkins，HPE，文稿日期 2026-07-14）主张在 TGbt 草案中采纳 PAKE，并对比组内的 PAKE 方案（11-26/0089r7、11-26/1203r4 及第三份 11-26/1749r0）。Harkins 还上传了参考文档 89（r8，“hpqc-pake”）、545（r4，“pqc-unauth”）、546（r7，“pqc-sig-auth”）、547（r4，“pqc-no-sig-auth”）的新版本；本摘要未读取这几份文档的正文。

## Key technical points (EN)

- **DCN 11-26-2235r0 · TGbt** — Some Issues to Discuss about PQC PAKEs. Stephen Orr (Cisco). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2235&is_year=2026). Slides define balanced (symmetric) PAKE, where each side uses the password (SAE is given as an example), versus augmented PAKE, where one side uses a verifier. Listed pros of balanced: usable peer-to-peer and client-server, with the con that an exposed password endangers future connections. Listed pros of augmented: if the server database is exposed the attacker cannot impersonate the client; cons: extra messages, memory and work, possibly an existing secure channel. On message order, the deck argues for ending the exchange with an AP-to-STA message so the AP can install the PTK before sending the last message. It lists "specify fully" versus "reference external document" and "standalone" versus "part of another exchange" with pros and cons for each. It notes 11bt currently pairs P-256 with ML-KEM-512, P-384 with ML-KEM-768 and P-521 with ML-KEM-1024, and that some CPace/OQUAKE configurations add x25519, X-Wing and scrypt.
- **DCN 11-26-1452r2 · TGbt** — Compare and Contrast PAKE Proposals. Dan Harkins (HPE). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1452&is_year=2026). The deck presents CPace plus OQUAKE as a hybrid PAKE (CPace hashes a password-derived generator to a curve; the ML-KEM encapsulation key is randomized and encrypted under the CPace secret; the two secrets are combined), and "+" variants as asymmetric (STA uses a password, AP a verifier). It states differences in the author's words, for example that 0089r7 reuses H2E and uses a 4-message exchange with identity protection, while 1203r4 uses an 8-message exchange and requires new crypto (argon2id or scrypt, x25519, X-Wing, SHA3/SHAKE256); 1749r0 is described as STA-initiated, needing a fifth message for mutual key confirmation. These are the presenter's own comparative statements, from a presentation that advocates one proposal.
- **Reference documents re-uploaded 4 Nov (Harkins, HPE):** DCN 89r8 hpqc-pake, 545r4 pqc-unauth, 546r7 pqc-sig-auth, 547r4 pqc-no-sig-auth, and 1452r2 pake-c-and-c. [document 89](https://mentor.ieee.org/802.11/documents?is_dcn=89&is_year=2026)

## Key technical points (ZH)

- **DCN 11-26-2235r0 · TGbt** — Some Issues to Discuss about PQC PAKEs。Stephen Orr（Cisco）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2235&is_year=2026)。幻灯片定义平衡式（对称）PAKE（双方都使用口令，以 SAE 为例）与增强式 PAKE（一方使用验证子）。所列平衡式优点：可用于点对点和客户端-服务器，缺点：口令泄露会危及此后所有连接。增强式优点：服务器数据库泄露时攻击者无法冒充客户端；缺点：额外消息、内存与计算，可能需要已有安全信道。关于消息顺序，文稿主张以 AP 到 STA 的消息结束交互，使 AP 可在发送最后一条消息前安装 PTK。文稿还列出“完全规定”与“引用外部文档”、“独立”与“并入其他交互”的利弊。文稿指出 11bt 目前将 P-256 与 ML-KEM-512、P-384 与 ML-KEM-768、P-521 与 ML-KEM-1024 配对，部分 CPace/OQUAKE 配置另增 x25519、X-Wing 与 scrypt。
- **DCN 11-26-1452r2 · TGbt** — Compare and Contrast PAKE Proposals。Dan Harkins（HPE）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1452&is_year=2026)。文稿将 CPace 加 OQUAKE 描述为混合 PAKE（CPace 将口令派生的生成元哈希到曲线；ML-KEM 封装密钥经随机化后用 CPace 秘密加密；两个秘密合并），“+”变体为非对称（STA 用口令，AP 用验证子）。文稿以作者口吻陈述差异，例如 0089r7 复用 H2E、采用 4 消息交互并带身份保护，而 1203r4 采用 8 消息交互并需要新密码学（argon2id 或 scrypt、x25519、X-Wing、SHA3/SHAKE256）；1749r0 被描述为由 STA 发起、需第 5 条消息完成双向密钥确认。这些是主讲人自己的对比说法，且该文稿主张其中一个方案。
- **11 月 4 日重新上传的参考文档（Harkins，HPE）：** DCN 89r8 hpqc-pake、545r4 pqc-unauth、546r7 pqc-sig-auth、547r4 pqc-no-sig-auth，以及 1452r2 pake-c-and-c。[89 号文档](https://mentor.ieee.org/802.11/documents?is_dcn=89&is_year=2026)

## Why it matters / what's new (EN)

The two decks together put the open PAKE design choices in front of TGbt: whether to require a PAKE at all, which proposal, and which structure. Neither is draft text. The Cisco deck frames questions with pros and cons; the HPE deck argues for a specific proposal, so its comparisons should be read as advocacy.

This extends the TGbt PQC threads in 2026-10-16_ieee-mentor-tgm-tgbt-deprecating-cck-pqc-fils-shared-key-digest and related earlier digests. Note the deck dates (Nov 9 and Jul 14) are the dates written on the slides, not the upload date.

## Why it matters / what's new (ZH)

两份文稿将 PAKE 的开放设计选择摆到 TGbt 面前：是否要求采用 PAKE、采用哪个方案、采用何种结构。二者均非草案文本。Cisco 的文稿以利弊形式提出问题；HPE 的文稿主张特定方案，其对比应视为倡议性陈述。

这延续了 2026-10-16_ieee-mentor-tgm-tgbt-deprecating-cck-pqc-fils-shared-key-digest 及此前相关摘要中的 TGbt 后量子议题。注意文稿日期（11 月 9 日与 7 月 14 日）是幻灯片上所写日期，并非上传日期。
