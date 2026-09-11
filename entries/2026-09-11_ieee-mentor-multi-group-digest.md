---
id: 2026-09-11_ieee-mentor-multi-group-digest
date_published: 2026-09-10
date_found: 2026-09-11
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 Mentor digest — WIN SG security directions, TGbn BSS-transition/OMP, TGm LB295 comment resolutions (2026-09-10)"
title_zh: "IEEE 802.11 Mentor 摘要 — WIN SG 安全方向、TGbn BSS 迁移/OMP、TGm LB295 意见处理（2026-09-10）"
url: https://mentor.ieee.org/802.11/documents?is_year=2026
source_quality: snippet_only
topics: [WIN-SG, TGbn, TGm, REVmf, 802.11-WG, WLAN-sensing, OMP, PQC]
topic_primary: wifi8-uhr
topics_secondary: [security-privacy, roaming-mobility, rtwt-latency, sensing]
novelty_score: 1
---

## Summary (EN)

Three groups uploaded new content on 2026-09-10. The WIN SG (WLAN Intelligent Networking Study Group, the Wi-Fi 9 precursor group this KB has tracked since 2026-08-27) posted two documents inside this run's scan window: a security-enhancement proposal for MAPC in WIN, and a broader "WIN Security Directions" scoping document (a third, DCN 1588r0 "View on 11bX: Device Experience Revolution for Next Generation Wi-Fi" by Jack Lee of Samsung, was uploaded at 21:09 ET, after this run's scan cutoff, and is deferred to the next digest) — its first security-strategy document, following its first concrete technical contribution (uplink MU-MIMO precoding) recorded yesterday. TGbn (Ultra High Reliability) uploaded a BSS-transition evaluation document and a letter-ballot comment resolution on OMP, which the document expands as ultra-high reliability (UHR) operating mode and parameters. TGm (REVmf, the 802.11 maintenance revision) uploaded two WLAN-sensing comment-resolution documents whose comments both resolve against REVmf D3.0, cited in the documents as Letter Ballot 295. The Timelines page records TGmf's D3.0 WG Letter Ballot closing at 95% on 2026-08-31 (`2026-09-10_ieee-tgbt-d10-lb297-89pct`), which this KB reads as the same ballot (see also `2026-09-02_ieee-mentor-tgm-revmf-lb295-digest`).

## Summary (ZH)

三个小组于 2026-09-10 上传了新内容。WIN SG（WLAN 智能网络研究组，本知识库自 2026-08-27 起跟踪的 Wi-Fi 9 前身研究组）在本次运行的扫描窗口内上传了两份文档：一份针对 WIN 中 MAPC 的安全增强提案，以及一份更宏观的「WIN Security Directions」（WIN 安全方向）范围界定文档（第三份 DCN 1588r0「View on 11bX: Device Experience Revolution for Next Generation Wi-Fi」，作者 Jack Lee（三星），于 21:09 ET 上传，晚于本次扫描截止时点，顺延至下一份摘要）——这是该组的首份安全战略类文档，紧随昨日记录的其首份具体技术贡献（上行 MU-MIMO 预编码）之后。TGbn（超高可靠性）上传了一份 BSS 迁移评估文档，以及一份针对 OMP 的信函投票意见处理提案——文档中将该缩写展开为「超高可靠性（UHR）工作模式与参数」。TGm（REVmf，802.11 维护性修订）上传了两份 WLAN 感知相关的意见处理文档，其意见均针对 REVmf D3.0 处理，文档中标注为第 295 号信件投票（LB295）。Timelines 页面记录 TGmf 的 D3.0 工作组信函投票已于 2026-08-31 以 95% 通过率结束（`2026-09-10_ieee-tgbt-d10-lb297-89pct`），本知识库将两者视为同一次投票（另见 `2026-09-02_ieee-mentor-tgm-revmf-lb295-digest`）。

## Key technical points (EN)

- **DCN 11-26-1763r0/r1 · WIN SG** — "WIN Security Directions". Tao Chun Lee (MediaTek), r0 uploaded 10-Sep-2026 11:51 ET, r1 10-Sep-2026 11:54 ET. A scoping document naming three security directions for WIN: a post-quantum-cryptography hybrid hierarchy (vendor- and region-specific extensions above the IEEE-level ML-KEM baseline), authentication/authorization/accounting (AAA) for AI services under AI Offload, and defences against misuse, downgrade and denial-of-service attacks. It follows the group's first concrete technical contribution yesterday (uplink MU-MIMO precoding, `2026-09-10_ieee-mentor-tgbq-win-aio-digest`). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1763&is_year=2026)
- **DCN 11-26-1676r0 · WIN SG** — "security enhancement in MAPC for WIN". Jay Yang (ZTE), uploaded 10-Sep-2026 20:40 ET. Proposes a security enhancement specific to Multi-AP Coordination (MAPC) as used within WIN. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1676&is_year=2026)
- **DCN 11-26-1661r0 · TGbn** — "Evaluation of SMD BSS Transition for PAR Verification". Akira Kishida (NTT), uploaded 10-Sep-2026 11:20 ET. An evaluation document assessing a BSS-transition mechanism against the task group's PAR (Project Authorization Request) verification criteria. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1661&is_year=2026)
- **DCN 11-26-1678r0 · TGbn** — "LB296 CR for OMP part 1". Gaurang Naik (Qualcomm), uploaded 10-Sep-2026 19:14 ET. A comment resolution against Letter Ballot 296 (the D2.0 recirculation ballot this KB recorded closing at 77% on 2026-09-02, `2026-09-04_ieee-tgbn-d20-lb296-recirc-77pct`). It is the first instalment of the OMP comment resolutions, covering 70 CIDs from LB296. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1678&is_year=2026)
- **DCN 11-26-1727r0 · TGm** — "Proposed Resolution to CID 2050". Claudio da Silva (MediaTek), uploaded 10-Sep-2026 12:39 ET. A WLAN-sensing comment resolution against REVmf D3.0 (LB295), proposing to delete Tables 9-160/9-162, which duplicate subcarrier indices already defined for the EHT Compressed Beamforming Report field, and to correct typos in Table 9-161 (Ng = 8). Co-authored with Stephen Shellhammer (Qualcomm), Narengerile (Huawei) and Cheng Chen (Intel). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1727&is_year=2026)
- **DCN 11-26-1728r0 · TGm** — "Proposed Resolutions to CIDs 2012, 2053, and 2054". Claudio da Silva (MediaTek), uploaded 10-Sep-2026 12:39 ET. Further WLAN-sensing LB295 resolutions against REVmf D3.0, including disambiguating 11.56.1.4.2 (sensing measurement session for unassociated STAs). Co-authored with Chaoming Luo (OPPO), Ali Raissinia (Qualcomm) and the same Qualcomm/Huawei/Intel group. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1728&is_year=2026)

## Key technical points (ZH)

- **DCN 11-26-1763r0/r1 · WIN SG** — "WIN 安全方向"。Tao Chun Lee（联发科），r0 于 2026-09-10 11:51 ET 上传，r1 于 11:54 ET 上传。一份界定 WIN 三条安全方向的文档：后量子密码（PQC）混合层级（在 IEEE 层 ML-KEM 基线之上叠加厂商与区域特定扩展）、AI Offload 下 AI 服务的认证/授权/计费（AAA），以及针对滥用、降级与拒绝服务攻击的防御。该文档紧随该组昨日首份具体技术贡献（上行 MU-MIMO 预编码，`2026-09-10_ieee-mentor-tgbq-win-aio-digest`）之后。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1763&is_year=2026)
- **DCN 11-26-1676r0 · WIN SG** — "面向 WIN 的 MAPC 安全增强"。Jay Yang（中兴），2026-09-10 20:40 ET 上传。针对 WIN 中所用多 AP 协调（MAPC）提出的专门安全增强方案。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1676&is_year=2026)
- **DCN 11-26-1661r0 · TGbn** — "SMD BSS 迁移的 PAR 验证评估"。Akira Kishida（NTT），2026-09-10 11:20 ET 上传。针对某 BSS 迁移机制、依据任务组 PAR（项目授权请求）验证标准进行的评估文档。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1661&is_year=2026)
- **DCN 11-26-1678r0 · TGbn** — "OMP 第一部分的 LB296 意见处理"。Gaurang Naik（高通），2026-09-10 19:14 ET 上传。针对第 296 号信件投票（本知识库记录其 D2.0 再循环投票已于 2026-09-02 以 77% 通过率结束，`2026-09-04_ieee-tgbn-d20-lb296-recirc-77pct`）的意见处理提案，为 OMP 意见处理提案的第一部分，涵盖 LB296 的 70 条 CID。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1678&is_year=2026)
- **DCN 11-26-1727r0 · TGm** — "CID 2050 的拟处理意见"。Claudio da Silva（联发科），2026-09-10 12:39 ET 上传。一份针对 REVmf D3.0（LB295）的 WLAN 感知意见处理提案，建议删除表 9-160/9-162——这两张表重复了已为 EHT 压缩波束成形报告字段定义的子载波索引——并修正表 9-161 中的笔误（Ng = 8）。共同作者包括 Stephen Shellhammer（高通）、Narengerile（华为）与 Cheng Chen（英特尔）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1727&is_year=2026)
- **DCN 11-26-1728r0 · TGm** — "CID 2012、2053 及 2054 的拟处理意见"。Claudio da Silva（联发科），2026-09-10 12:39 ET 上传。针对 REVmf D3.0 的进一步 WLAN 感知 LB295 意见处理提案，其中包括厘清 11.56.1.4.2（面向未关联 STA 的感知测量会话）。共同作者包括 Chaoming Luo（OPPO）、Ali Raissinia（高通），以及同一组高通/华为/英特尔作者。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1728&is_year=2026)

## Why it matters / what's new (EN)

WIN SG's second day of concrete content (following yesterday's first technical contribution) opens with security scoping rather than more PHY/MAC mechanism work — a "Security Directions" document sets direction rather than proposing normative text, though it names concrete mechanisms — ISO 3166-1 region codes, security profile numbers, and a proof-of-work bound to the KEM encapsulation-key hash. TGbn's two uploads are comment-resolution and evaluation work against ballots this KB has already recorded numeric outcomes for (LB296 at 77%, REVmf's D3.0 WG Letter Ballot at 95%) rather than new mechanisms. None of the six documents inside this run's scan window rises to the level of a new mechanism this KB hasn't seen before, which is why this digest carries the default novelty score.

## Why it matters / what's new (ZH)

WIN SG 内容产出的第二天（继昨日首份技术贡献之后）以安全方向的范围界定开篇，而非进一步的 PHY/MAC 机制工作——「安全方向」文档是设定方向而非提出规范性文本，但其中点名了具体机制——ISO 3166-1 区域代码、安全配置档编号，以及绑定到 KEM 封装密钥哈希的工作量证明。TGbn 的两份上传均为针对本知识库已记录数值结果的投票（LB296 通过率 77%，REVmf D3.0 工作组信函投票通过率 95%）所做的意见处理与评估工作，而非新机制。本次扫描窗口内的六份文档均未达到本知识库此前从未见过的新机制水平，因此本摘要沿用默认新颖度评分。

## Images

None.
