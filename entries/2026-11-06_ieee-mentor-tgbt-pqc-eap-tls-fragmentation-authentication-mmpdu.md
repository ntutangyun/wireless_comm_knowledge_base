---
id: 2026-11-06_ieee-mentor-tgbt-pqc-eap-tls-fragmentation-authentication-mmpdu
date_published: 2026-11-05
date_found: 2026-11-06
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbt: PQC and EAP fragmentation — EAP-TLS round trips with ML-DSA certificates, and options for longer Authentication MMPDUs (DCN 11-26-2256r0, Qualcomm)"
title_zh: "IEEE 802.11 TGbt：PQC 与 EAP 分片——使用 ML-DSA 证书时的 EAP-TLS 往返次数，以及加长 Authentication MMPDU 的方案（DCN 11-26-2256r0，Qualcomm）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2256"
source_quality: full
topics: [802.11bt, TGbt, PQC, EAP-TLS, 802.1X, Authentication frame, MMPDU, fragmentation]
topic_primary: security-privacy
topics_secondary: [wifi8-uhr]
novelty_score: 3
---

## Summary (EN)

DCN 11-26-2256r0, "PQC and EAP fragmentation", is a 16-slide deck by Jouni Malinen (Qualcomm) dated 5 November 2026 and uploaded to TGbt. Its abstract states that it "discusses impact of PQC to EAP-TLS fragmentation and proposes potential approaches to reduce the time it takes to complete full authentication with a remote authentication server."

The deck first sets out a worked example. It uses the mandatory-to-implement security profile 18 with PQC profile 2 (ECP group 20 / P-384, ML-KEM-768), EAP-TLS over TLS 1.3 with cipher suite TLS_AES_256_GCM_SHA384 and X25519MLKEM768 key exchange, a simple PKI, and X.509 ML-DSA certificates (id-ml-dsa-87) with a 7598-byte user certificate. The frame exchange lists the Security Profile element and a 7-byte PQC Parameter element in the first two frames, then EAP messages of 1518 bytes (ClientHello), 21376 bytes (server ServerHello through Finished) and 19962 bytes (client Certificate through Finished), and a closing exchange of PQC Parameter elements of 1239 and 1143 bytes.

The deck then counts server-to-client round trips as a function of the EAP-TLS fragmentation threshold. It gives 34 round trips at 1400 bytes (the threshold it describes as commonly used today), 23 at 2100, 13 at 4000, 10 at 8000, 6 at 16000 and 4 at 32000. It states that each round trip could take over 100 ms if the authentication server is not at the venue, giving about 3 seconds of extra latency at the 1400-byte threshold, and that supporting the maximum MMPDU length helps only moderately (34 to 23).

The proposals are: split fragmentation on the server-to-AP path from the AP-to-STA path, with the AP reassembling EAP-TLS messages from the server first (using RadSec so that TCP carries the large message with several segments in flight), and then forwarding to the STA in one longer Authentication MMPDU assembled from several Authentication frames. The deck states this would take the roughly 15.5 round trips of the 21376-byte message down to about 0.5 over the high-latency AP-to-server path, from 34 to the ideal 4. For the AP-to-STA hop it notes that 802.1X in Authentication frames is limited by maximum MMPDU length (per 802.11bi-2026, not yet modified by P802.11bt), that deployed devices often cannot handle Authentication MMPDUs longer than about 1500 octets, and that a mechanism to combine multiple Authentication frames into a longer MMPDU has been proposed in TGbt. It also shows two options for moving the final PQC Parameter element exchange into earlier frames to remove one over-the-air round trip.

## Summary (ZH)

DCN 11-26-2256r0《PQC and EAP fragmentation》是 Jouni Malinen（Qualcomm）于 2026 年 11 月 5 日上传到 TGbt 的 16 页演示文稿。其摘要写明：讨论 PQC 对 EAP-TLS 分片的影响，并提出若干可缩短与远端认证服务器完成完整认证所需时间的方案。

文稿先给出一个具体示例：采用必选实现的安全配置 18 与 PQC 配置 2（ECP 组 20 / P-384、ML-KEM-768），TLS 1.3 之上的 EAP-TLS，密码套件 TLS_AES_256_GCM_SHA384，密钥交换 X25519MLKEM768，简单 PKI，X.509 ML-DSA 证书（id-ml-dsa-87），用户证书 7598 字节。帧交互中，前两帧携带安全配置元素和 7 字节的 PQC Parameter 元素；随后是 1518 字节（ClientHello）、21376 字节（服务器 ServerHello 至 Finished）和 19962 字节（客户端 Certificate 至 Finished）的 EAP 消息，最后交换 1239 字节和 1143 字节的 PQC Parameter 元素。

文稿接着按 EAP-TLS 分片门限统计服务器与客户端之间的往返次数：门限 1400 字节（文稿称之为目前常用值）时为 34 次，2100 时 23 次，4000 时 13 次，8000 时 10 次，16000 时 6 次，32000 时 4 次。文稿指出，若认证服务器不在现场，每次往返可能超过 100 ms，在 1400 字节门限下额外时延约 3 秒；支持最大 MMPDU 长度只能带来有限改善（34 降至 23）。

文稿提出：把服务器到 AP 路径的分片与 AP 到 STA 路径的分片拆开，由 AP 先从服务器重组 EAP-TLS 消息（使用 RadSec，由 TCP 承载并允许多个报文同时在途），再用由多个 Authentication 帧组合而成的一个更长的 Authentication MMPDU 转发给 STA。文稿称，这样 21376 字节消息的约 15.5 次往返在高时延的 AP 到服务器路径上只需约 0.5 次，整体从 34 次降到理想的 4 次。对 AP 到 STA 一跳，文稿指出基于 Authentication 帧的 802.1X 受最大 MMPDU 长度限制（按 802.11bi-2026，P802.11bt 尚未修改），已部署设备往往无法收发超过约 1500 字节的 Authentication MMPDU，而把多个 Authentication 帧合并为更长 MMPDU 的机制已在 TGbt 中被提出。文稿还给出两种把最后一轮 PQC Parameter 元素交换提前到更早帧中的方式，以省去一次空口往返。

## Key technical points (EN)

- **DCN 11-26-2256r0 · TGbt** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2256&is_year=2026) PQC and EAP fragmentation. Jouni Malinen (Qualcomm), 16 slides, dated 2026-11-05.
- Example message sizes: ClientHello 1518 bytes; server flight 21376 bytes; client flight 19962 bytes; PQC Parameter elements 7 bytes in the first two frames and 1239 / 1143 bytes at the end.
- Round trips by EAP-TLS fragmentation threshold: 1400 B = 34; 2100 B = 23; 4000 B = 13; 8000 B = 10; 16000 B = 6; 32000 B = 4 (ideal: 4, of which the first 1 and last 1.5 occur regardless of fragmentation).
- Stated cost: over 100 ms per round trip with a non-local server, so about 3 seconds extra at 1400 B; PMKSA caching and EAP-TLS session resumption would become strongly needed to hide it.
- Proposal 1: reassemble at the AP and use RadSec/TCP on the server-to-AP leg; carry the message to the STA as one long Authentication MMPDU built from several Authentication frames.
- Considerations listed for Authentication MMPDU design: an optional way to learn the real maximum Authentication MMPDU length both sides support (for example, indicate it in the first two Authentication MMPDUs and use the minimum); optional negotiated combination of multiple Authentication frames, not limited to PQC; prefer extensions implementable in upper-layer software so deployed devices can be upgraded.
- Proposal 2: two options (opt 1 and opt 2) that move the closing PQC Parameter element exchange into earlier frames to save one over-the-air round trip.
- Summary slide: the changes "could be made optional, i.e., negotiated based on AP/STA capabilities".

## Key technical points (ZH)

- **DCN 11-26-2256r0 · TGbt** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2256&is_year=2026) PQC 与 EAP 分片。Jouni Malinen（Qualcomm），16 页，文稿日期 2026-11-05。
- 示例消息大小：ClientHello 1518 字节；服务器侧 21376 字节；客户端侧 19962 字节；PQC Parameter 元素在前两帧为 7 字节，结尾处为 1239 / 1143 字节。
- 按 EAP-TLS 分片门限的往返次数：1400 B = 34；2100 B = 23；4000 B = 13；8000 B = 10；16000 B = 6；32000 B = 4（理想值为 4，其中最前 1 次和最后 1.5 次与分片无关）。
- 文稿给出的代价：服务器不在本地时每次往返超过 100 ms，1400 B 门限下额外约 3 秒；此时将强烈依赖 PMKSA 缓存与 EAP-TLS 会话恢复来掩盖时延。
- 方案 1：在 AP 重组，服务器到 AP 段使用 RadSec/TCP；向 STA 以由多个 Authentication 帧组合而成的一个长 Authentication MMPDU 发送。
- 文稿列出的 Authentication MMPDU 设计考虑：可选机制，用于获知双方真实支持的最大 Authentication MMPDU 长度（例如在前两个 Authentication MMPDU 中指示并取较小值）；可协商的多 Authentication 帧合并能力，不限于 PQC；优先考虑可在上层软件实现的扩展，以便已部署设备升级。
- 方案 2：两种（opt 1、opt 2）把结尾的 PQC Parameter 元素交换提前到更早帧中的做法，以节省一次空口往返。
- 总结页：相关改动"可设为可选，即按 AP/STA 能力协商"。

## Why it matters / what's new (EN)

The deck quantifies one effect of larger post-quantum credentials on 802.1X authentication carried in Authentication frames: the round-trip count rises sharply as the EAP-TLS fragmentation threshold falls, and each extra round trip is paid across both the server-AP and AP-STA paths. It ties the options to Authentication MMPDU length handling in TGbt rather than to a new cryptographic mechanism. The KB's earlier TGbt digest threads cover PQC profiles and proof-of-work enhancements (for example 2026-07-11_ieee-mentor-tgbt-digest); this document is a latency-focused companion to them. It is a presentation, not a text proposal, so no change to a draft is specified here.

## Why it matters / what's new (ZH)

该文稿量化了较大的后量子凭据对承载于 Authentication 帧中的 802.1X 认证的一项影响：EAP-TLS 分片门限越小，往返次数越多，且每次额外往返都要同时经过服务器到 AP 与 AP 到 STA 两段路径。文稿把方案与 TGbt 中 Authentication MMPDU 长度的处理联系起来，而非提出新的密码机制。本 KB 此前的 TGbt 摘要（例如 2026-07-11_ieee-mentor-tgbt-digest）涉及 PQC 配置与工作量证明增强；本文档是与之配套、聚焦时延的材料。它是演示文稿而非文本提案，因此未规定对草案的具体修改。
