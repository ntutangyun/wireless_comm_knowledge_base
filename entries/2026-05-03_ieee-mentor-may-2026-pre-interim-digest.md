---
id: 2026-05-03_ieee-mentor-may-2026-pre-interim-digest
date_published: 2026-05-02
date_found: 2026-05-03
type: ieee-document
title_en: "IEEE 802.11 Mentor pre-interim digest — Apr-May 2026 contributions ahead of the Antwerp interim (May 10-15, 2026)"
title_zh: "IEEE 802.11 Mentor 会前文档摘要 —— 2026 年 4-5 月（Antwerp 临时会议前夕，5 月 10-15 日）"
url: "https://mentor.ieee.org/802.11/documents"
source_quality: full
topics: [802.11bn, 802.11bp, 802.11bi, 802.11bt, 802.11bq, 802.11br, MAC-layer, security, agentic-AI]
novelty_score: 4
---

## Summary (EN)

In the four weeks leading up to the May 10-15 2026 Antwerp wireless interim, the IEEE 802.11 Mentor portal saw a strong wave of task-group submissions across **six active task groups**. The pre-interim window is when the substantive contributions get tabled before face-to-face debate, so this digest captures the technical agenda that the working group will be voting on in Antwerp.

Highlights by task group:

- **TGbn (Wi-Fi 8 / Ultra High Reliability):** EPCS Context Transfer for Seamless Roaming (11-26/036r3, Samsung); P-EDCA Improved Spatial Reuse (11-26/826, Cisco); MAPC Security Protocol Updates (11-26/424r5, Huawei); LB291 Comment Resolution series for Seamless Roaming Parts 3+4 (multiple revisions, Qualcomm + others).
- **TGbi (Privacy / EPP):** EPPKE Authentication Comeback Mechanism (11-26/862, Qualcomm); EPSAE introduction (11-26/799, HPE) — privacy-enhanced association mechanisms.
- **TGbt (Post-Quantum Cryptography):** Two PQC variants of authentication tabled — pqc-sig-auth and pqc-no-sig-auth (11-26/546, 547; HPE). Initial WG ballot on D1.0 expected from the May 2026 session.
- **TGbp (Ambient Power Communications):** UL Channel Access for Non-AP AMP STA (11-26/802, Qualcomm) — channel access for ultra-low-power IoT stations. Initial WG ballot on D1.0 expected from May 2026.
- **TGbq (Integrated mmWave):** A-Control updates and MultiBSSID design (11-26/827, 819; OPPO).
- **TGbr (LiFi):** Wavelength Division Multiplexing proposals (11-26/831, pureLiFi).

## Summary (ZH)

在 2026 年 5 月 10–15 日 Antwerp 无线临时会议前的四周，IEEE 802.11 Mentor 门户出现了**六个活跃 Task Group** 的密集提交。会前窗口正是实质性贡献定稿、为面对面辩论做准备的时段，因此本摘要记录了工作组将在 Antwerp 投票的技术议程。

按 TG 列出要点：

- **TGbn (Wi-Fi 8 / 超高可靠性)：** EPCS 上下文转移用于无缝漫游（11-26/036r3，Samsung）；P-EDCA 改进的空间复用（11-26/826，Cisco）；MAPC 安全协议更新（11-26/424r5，Huawei）；LB291 评论决议系列（无缝漫游 第 3+4 部分，Qualcomm 与多家迭代）。
- **TGbi (隐私 / EPP)：** EPPKE 认证回归机制（11-26/862，Qualcomm）；EPSAE 引入（11-26/799，HPE）—— 隐私增强关联机制。
- **TGbt (后量子密码)：** 两种 PQC 认证变体上桌 —— pqc-sig-auth 与 pqc-no-sig-auth（11-26/546、547；HPE）。预期 D1.0 初版工作组投票从 5 月会议起步。
- **TGbp (环境取电通信)：** Non-AP AMP STA 的上行信道接入（11-26/802，Qualcomm）—— 面向超低功耗 IoT 站点的接入机制。预期 D1.0 初版工作组投票从 5 月会议起步。
- **TGbq (集成毫米波)：** A-Control 更新与 MultiBSSID 设计（11-26/827、819；OPPO）。
- **TGbr (LiFi)：** 波分复用提案（11-26/831，pureLiFi）。

## Key technical points (EN)

- **TGbn EPCS Context Transfer:** moves PMK / association context between APs to enable sub-millisecond seamless roaming without re-authentication.
- **TGbn P-EDCA:** parameterised EDCA tweak surfaced via CID 10740 to improve spatial reuse decisions.
- **TGbn MAPC Security:** updates to the multi-AP coordination security protocol (key derivation across coordinated APs).
- **TGbi EPPKE / EPSAE:** privacy-preserving association — keys derived without exposing long-term identifiers.
- **TGbt PQC auth:** lattice-based + signature-less PQC variants for the auth handshake (defence against harvest-now-decrypt-later).
- **TGbp AMP UL:** non-AP STA channel-access procedure for backscatter / ambient-power radios.
- **TGbq:** A-Control control-IDs and MultiBSSID extensions tailored to the integrated-mmWave operating mode.
- **TGbr:** PHY-layer wavelength-division multiplexing for visible-light Wi-Fi.

## Key technical points (ZH)

- **TGbn EPCS 上下文转移**：在 AP 间转移 PMK / 关联上下文，实现毫秒以下无重认证的无缝漫游。
- **TGbn P-EDCA**：经 CID 10740 提出的参数化 EDCA 微调，用以改进空间复用决策。
- **TGbn MAPC 安全**：多 AP 协调安全协议的更新（跨协调 AP 的密钥派生）。
- **TGbi EPPKE / EPSAE**：隐私保护型关联 —— 派生密钥而不泄露长期标识符。
- **TGbt PQC 认证**：用于认证握手的格基 + 无签名 PQC 变体（防御「先收今后解」）。
- **TGbp AMP UL**：面向反向散射 / 环境取电射频的非 AP STA 信道接入流程。
- **TGbq**：为集成毫米波操作模式定制的 A-Control 控制 ID 与 MultiBSSID 扩展。
- **TGbr**：可见光 Wi-Fi 的 PHY 层波分复用。

## Why it matters / what's new (EN)

The four-week pre-interim window concentrates the year's most-tabled contributions because contributors want time-on-the-floor in Antwerp. This digest is a cleaner snapshot of "what's actually changing in the standard right now" than the post-meeting plenary readouts captured in `ieee-march-2026-readout` and `ieee-january-2026-readout`. Three task groups (TGbi privacy, TGbt PQC, TGbp ambient power) are at D1.0 ballot — i.e., the structural shape of those amendments is locked in over the next 1-2 sessions. TGbn (Wi-Fi 8) is past D2.0 prep; the contributions in this window are LB291 comment resolutions, not architectural changes.

## Why it matters / what's new (ZH)

会前四周窗口集中了一年中数量最多的提交，因为投稿人都想在 Antwerp 拿到台面时间。本摘要比 `ieee-march-2026-readout` 与 `ieee-january-2026-readout` 中的会后总结更干净地呈现「标准当下正在发生什么」。其中三个 TG（TGbi 隐私、TGbt PQC、TGbp 环境取电）正处于 D1.0 ballot 阶段 —— 即这几个修订的结构形态将在未来 1-2 次会议锁定。TGbn (Wi-Fi 8) 已过 D2.0 准备期；本窗口的提交以 LB291 评论决议为主，并非架构性变更。
