---
id: 2026-10-16_ieee-mentor-tgm-tgbt-deprecating-cck-pqc-fils-shared-key-digest
date_published: 2026-10-15
date_found: 2026-10-16
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGm/TGbt Mentor digest — 2026-10-16 (Deprecating CCK proposal for 2.4 GHz; PQC-enhanced FILS shared key; TGbt security-profile consistency CRs)"
title_zh: "IEEE 802.11 TGm/TGbt Mentor 当日摘要 — 2026-10-16（2.4 GHz 弃用 CCK 提案；PQC 增强的 FILS 共享密钥；TGbt 安全配置集一致性 CR）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=000m"
source_quality: full
topics: [TGm, REVmf, TGbt, CCK, 802.11b, PQC, FILS, ML-KEM, security-privacy]
topic_primary: security-privacy
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

Mentor rows above the previous watermark (11-26-2013), uploaded 14-15 October 2026, add three TGm documents (DCNs 2017, 2018, 2019) and one TGbt presentation (DCN 2016). The digest also covers new revisions of TGm DCN 1633 (r12, 15 October) and two TGbt comment-resolution documents (DCNs 1994 and 1995, uploaded 12 October) that the earlier TGbt digest did not cover. The bodies of DCNs 2016, 2017, 1994, 1995 and 2019 were read; DCNs 2018 and 1633 are listed from their titles.

DCN 11-26-2017r0 "Deprecating CCK" (Matthew B. Shoemake, Peritum LLC; dated 2026-10-15) is a short slide deck whose abstract supports deprecating CCK and whose conclusion slide scopes this to 2.4 GHz operation. Its slides argue that BCC provides about 3 dB more coding gain than CCK (citing minimum-sensitivity values of -76 dBm for CCK 11 Mbps versus -79 dBm for OFDM-BCC 12 Mbps in IEEE Std 802.11-2020), that non-HT OFDM gives 12 M complex channel uses per second against 11 M for CCK (9.1 percent more), and that CCK's single-byte payload granularity and lower PAPR do not justify keeping it. It also recounts that the FCC spreading requirement associated with CCK's origin was removed in 2002. A 2.4 GHz beacon survey in Carmel, Indiana on 15 October 2026 (205,191 verified beacons, channels 1-13, 92 BSSIDs) found 50 BSSIDs beaconing at 1 Mbps DSSS, 0 at 5.5/11 Mbps CCK and 42 at 6 Mbps OFDM; 18 of the 92 BSSIDs (19.6 percent) advertised CCK rates as basic, which the deck says can be handled by removing CCK rates from the basic rate set in software, because a STA lacking required rates would fail the association check in 11.3.5.3(f).

DCN 11-26-2016r0 "PQC for FILS shared key" (Fei Liu, Huawei; dated 2026-10-08) proposes a PQC-enhanced FILS shared-key authentication with perfect forward secrecy. It keeps the authentication algorithm number 5 exchange used by FILS shared key with PFS, defines new AKM suite(s) and a security profile, carries the ML-KEM encapsulation key in Authentication frame 1 and the ciphertext in Authentication frame 2 (with optional ephemeral Diffie-Hellman public keys), mandates association frame encryption, and gives a new PMK/PTK derivation in which the ML-KEM shared secret is added to the PMK input and the PTK is derived with HKDF.

DCNs 11-26-1994r0 and 11-26-1995r0 (Fei Liu and Jiawei Wu, Huawei; dated 2026-09-30, uploaded 12 October) are TGbt comment resolutions for CIDs 499 and 500. CID 499 states that the current text lets a rekeying 4-way handshake message 1 indicate a different security profile than the one used in association (e.g. 18 instead of 17); the proposed text has the Authenticator indicate the same security profile number as sent during association and the Supplicant verify it, discarding the message otherwise. CID 500 states the same downgrade concern for PMK caching in PQC 802.1X; the proposed change records the security profile number in the PMKSA (and PMK-R0 security association) and has the AP check consistency during PMK caching.

Also in the window: DCN 11-26-2019r0 (TGmf October-November teleconference agenda, which states the purpose of moving LB295 on D3.0 toward recirculation), DCN 11-26-2018 r0-r2 (REVmf motion comments for 16 October), and further revisions of DCN 11-26-1633 (Intel, "CR for control frame protection", now r12). DCNs 2018 and 1633 were not opened; the agenda (DCN 2019) was read.

## Summary (ZH)

DCN 高于上次水位（11-26-2013）、于 2026 年 10 月 14-15 日上传的 Mentor 条目包括 3 份 TGm 文档（DCN 2017、2018、2019）和 1 份 TGbt 演示稿（DCN 2016）。本摘要还覆盖 TGm DCN 1633 的新版本（r12，10 月 15 日）以及此前 TGbt 摘要未覆盖的 2 份 TGbt 评论解决文档（DCN 1994、1995，10 月 12 日上传）。DCN 2016、2017、1994、1995、2019 已读正文；DCN 2018 与 1633 仅依据标题列出。

DCN 11-26-2017r0《Deprecating CCK》（Matthew B. Shoemake，Peritum LLC；日期 2026-10-15）是一份简短的幻灯片，摘要声明支持弃用 CCK，结论页将其限定于 2.4 GHz 运行。幻灯片论证：BCC 的编码增益比 CCK 约高 3 dB（引用 IEEE Std 802.11-2020 中 CCK 11 Mbps 最低灵敏度 -76 dBm 与 OFDM-BCC 12 Mbps 的 -79 dBm），非 HT OFDM 每秒复信道使用数为 12 M，CCK 为 11 M（多 9.1%），CCK 的单字节载荷粒度和较低的 PAPR 不足以保留它；并回顾与 CCK 起源相关的 FCC 扩频要求已于 2002 年取消。2026 年 10 月 15 日在美国印第安纳州 Carmel 做的 2.4 GHz 信标调查（205,191 个有效信标，信道 1-13，92 个 BSSID）显示：50 个 BSSID 以 1 Mbps DSSS 发信标，0 个以 5.5/11 Mbps CCK，42 个以 6 Mbps OFDM；92 个中有 18 个（19.6%）把 CCK 速率通告为基本速率，文档称可通过软件把 CCK 速率从基本速率集中移除来解决，因为缺少所需速率的 STA 会无法通过 11.3.5.3(f) 的关联检查。

DCN 11-26-2016r0《PQC for FILS shared key》（Fei Liu，华为；日期 2026-10-08）提出带完美前向保密的 PQC 增强 FILS 共享密钥认证：沿用 FILS 共享密钥 PFS 使用的认证算法号 5 的交互，定义新的 AKM 套件和安全配置集，在认证帧 1 中携带 ML-KEM 封装密钥、认证帧 2 中携带密文（可选携带临时 DH 公钥），强制关联帧加密，并给出新的 PMK/PTK 派生：ML-KEM 共享密钥加入 PMK 输入，PTK 用 HKDF 派生。

DCN 11-26-1994r0 与 11-26-1995r0（Fei Liu、Jiawei Wu，华为；日期 2026-09-30，10 月 12 日上传）是针对 CID 499 和 500 的 TGbt 评论解决。CID 499 指出现有文本允许重密钥 4 次握手消息 1 指示与关联时不同的安全配置集（如以 18 代替 17）；建议文本要求认证方使用与关联时相同的安全配置集编号，请求方校验，不一致则丢弃消息。CID 500 对 PQC 802.1X 的 PMK 缓存提出同样的降级担忧；建议在 PMKSA（及 PMK-R0 安全关联）中记录安全配置集编号，并由 AP 在 PMK 缓存时检查一致性。

同窗口还有：DCN 11-26-2019r0（TGmf 10-11 月电话会议议程，称目的为推动 D3.0 上的 LB295 进入重新投票）、DCN 11-26-2018 r0-r2（10 月 16 日 REVmf 动议评论）以及 DCN 11-26-1633（Intel，"CR for control frame protection"，已到 r12）的新版本。DCN 2018 与 1633 未打开阅读；议程（DCN 2019）已读。

## Key technical points (EN)

- **DCN 11-26-2017r0 · TGm** — Deprecating CCK. Matthew B. Shoemake (Peritum LLC). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2017&is_year=2026). Claims: BCC about 3 dB more coding gain; OFDM 12 M vs CCK 11 M complex channel uses/s; survey 0 of 92 BSSIDs beaconing CCK; 18 of 92 advertise CCK as basic.
- **DCN 11-26-2016r0 · TGbt** — PQC for FILS shared key. Fei Liu (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2016&is_year=2026). ML-KEM encapsulation key/ciphertext carried in the AAN-5 authentication frames; mandatory association frame encryption; HKDF-based PTK derivation.
- **DCN 11-26-1994r0 · TGbt** — CR for Rekey (CID 499). Fei Liu, Jiawei Wu (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1994&is_year=2026). Same security profile number required in rekey message 1 as in association.
- **DCN 11-26-1995r0 · TGbt** — CR for security profile (CID 500). Fei Liu, Jiawei Wu (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1995&is_year=2026). Security profile number stored in the PMKSA and the PMK-R0/PMK-R1 security associations, with consistency checks on PMK caching and in the FT protocol.
- **DCN 11-26-2019r0 · TGm** — REVmf October-November teleconference agenda. Michael Montemurro (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2019&is_year=2026). Body read.
- **DCN 11-26-2018 r0-r2 · TGm** — REVmf Motion Comments - 16OCT26. Michael Montemurro (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2018&is_year=2026). Title only.
- **DCN 11-26-1633r12 · TGm** — CR for control frame protection. Po-Kai Huang (Intel). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1633&is_year=2026). Title only; revisions r10-r12 uploaded 7-15 October.

## Key technical points (ZH)

- **DCN 11-26-2017r0 · TGm** — Deprecating CCK。Matthew B. Shoemake（Peritum LLC）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2017&is_year=2026)。主张：BCC 编码增益高约 3 dB；OFDM 每秒复信道使用 12 M 对 CCK 11 M；92 个 BSSID 中 0 个以 CCK 发信标；18 个把 CCK 通告为基本速率。
- **DCN 11-26-2016r0 · TGbt** — PQC for FILS shared key。Fei Liu（华为）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2016&is_year=2026)。ML-KEM 封装密钥/密文承载于 AAN-5 认证帧；强制关联帧加密；基于 HKDF 的 PTK 派生。
- **DCN 11-26-1994r0 · TGbt** — CR for Rekey（CID 499）。Fei Liu、Jiawei Wu（华为）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1994&is_year=2026)。重密钥消息 1 须使用与关联时相同的安全配置集编号。
- **DCN 11-26-1995r0 · TGbt** — CR for security profile（CID 500）。Fei Liu、Jiawei Wu（华为）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1995&is_year=2026)。安全配置集编号存入 PMKSA 及 PMK-R0/PMK-R1 安全关联，并在 PMK 缓存和 FT 协议中做一致性检查。
- **DCN 11-26-2019r0 · TGm** — REVmf 10-11 月电话会议议程。Michael Montemurro（华为）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2019&is_year=2026)。已读正文。
- **DCN 11-26-2018 r0-r2 · TGm** — REVmf Motion Comments - 16OCT26。Michael Montemurro（华为）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2018&is_year=2026)。仅标题。
- **DCN 11-26-1633r12 · TGm** — CR for control frame protection。Po-Kai Huang（Intel）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1633&is_year=2026)。仅标题；r10-r12 于 10 月 7-15 日上传。

## Why it matters / what's new (EN)

The CCK deck is a TGm contribution that argues from published link-level numbers and a one-site survey; the survey is a single location and date as stated in the deck, so it is a data point, not a deployment statistic. It sits beside the TGm D3.0 comment-resolution activity already in this KB (see 2026-10-12_ieee-mentor-tgm-tgbt-decoyauth-pqc-digest).

On the TGbt side, the FILS shared-key presentation extends the PQC profile mechanism to another authentication path, and the two CRs address security-profile consistency for rekeying and PMK caching; the FILS deck's PTK derivation uses the same HKDF form as the PQC PTK derivation covered in the 2026-10-12 TGbt digest. Only DCN bodies for the items marked above were read.

## Why it matters / what's new (ZH)

CCK 幻灯片是一份 TGm 贡献，依据已发表的链路级数值和一处地点的调查进行论证；文档自述调查仅限单一地点与日期，因此是一个数据点，而非部署统计。它与本知识库中已有的 TGm D3.0 评论解决活动并行（见 2026-10-12_ieee-mentor-tgm-tgbt-decoyauth-pqc-digest）。

TGbt 方面，FILS 共享密钥演示把 PQC 配置集机制扩展到另一条认证路径，两份 CR 则针对重密钥与 PMK 缓存中的安全配置集一致性；FILS 演示稿中的 PTK 派生采用了与 2026-10-12 TGbt 摘要所述 PQC PTK 派生相同的 HKDF 形式。仅上文标注的条目读取了 DCN 正文。
