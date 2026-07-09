---
id: 2026-07-09_ieee-mentor-tgbi-tgm-preplenary-digest
date_published: 2026-07-09
date_found: 2026-07-09
type: ieee-document
title_en: "IEEE 802.11 TGbi + TGm (REVmf) Mentor digest — pre-Montreal-plenary wave"
title_zh: "IEEE 802.11 TGbi 与 TGm（REVmf）Mentor 摘要——蒙特利尔全会前贡献潮"
url: https://mentor.ieee.org/802.11/documents?is_year=2026
source_quality: snippet_only
topics: [802.11bi, REVmf, TGm, privacy, ballot]
topic_primary: security-privacy
topics_secondary: [wifi8-uhr]
novelty_score: 1
---

## Summary (EN)

Maintenance-and-completion work across two groups in the May 18 - July 8 window. TGbi (enhanced data privacy) posted 8 contributions, all in SA-recirculation endgame mode: the SA recirc-1 ballot comments compilation (1204, Po-Kai Huang), a 5-revision misc-CID CR (1211), CR for CID R1-10 (1215), misc comments (1280, Jerome Henry), teleconference minutes (1220, 1226), and proposed fixes for a DS MAC-address collision check (1230, Po-Kai Huang) — a late correctness fix in the randomized/changing MAC address machinery at the heart of 11bi. The amendment is clearly in its final balloting cycles.

TGm posted 17 contributions on REVmf (the 802.11 roll-up revision), all LB294 comment resolution: miscellaneous CR batches (1233 Youhan Kim, 1242 Asterjadhi, 1252/1253 Edward Au), D2.0 implementation CIDs (1200, Brian Hart), an EHT-SIG user-specific-field CR (1250, Panasonic/Urabe), a three-document debate on LB294 CID 1079 (discussion + resolutions A and B, 1274-1276, Guido Hiertz, Ericsson), BTM-request abridging (1216, Brian Hart), and June telecon/ad-hoc minutes. Routine but high-volume — the roll-up is absorbing Wi-Fi 7-era text while UHR development continues in parallel.

## Summary (ZH)

5 月 18 日至 7 月 8 日窗口内两个组的维护与收官工作。TGbi（增强数据隐私）上传 8 份贡献，全部处于 SA 再流转收官模式：SA 第一轮再流转投票意见汇编（1204，Po-Kai Huang）、五次修订的杂项 CID 决议（1211）、CID R1-10 决议（1215）、杂项意见（1280，Jerome Henry）、电话会纪要（1220、1226），以及 DS MAC 地址冲突检查的修复提案（1230，Po-Kai Huang）——这是 11bi 核心的随机化/可变 MAC 地址机制中一处后期正确性修复。该修正案显然已进入最终投票周期。

TGm 就 REVmf（802.11 汇总修订版）上传 17 份贡献，全部是 LB294 评论决议：杂项决议批次（1233 Youhan Kim、1242 Asterjadhi、1252/1253 Edward Au）、D2.0 实现类 CID（1200，Brian Hart）、EHT-SIG 用户特定字段决议（1250，松下/Urabe）、围绕 LB294 CID 1079 的三文辩论（讨论 + 方案 A/B，1274-1276，Guido Hiertz，爱立信）、BTM 请求精简（1216，Brian Hart）及 6 月电话会/专题会纪要。常规但量大——汇总修订正在吸收 Wi-Fi 7 时代文本，与 UHR 开发并行推进。

## Key technical points (EN)

- **DCN 11-26-1204 · TGbi** — SA recirc-1 ballot comments (Po-Kai Huang, Intel); with 1211 (misc CR, rev 5), 1215, 1280 — 11bi is in SA-ballot endgame.
- **DCN 11-26-1230 · TGbi** — Proposed fixes for DS MAC address collision check (Po-Kai Huang). Late correctness fix where randomized MAC addressing meets the distribution system.
- **DCN 11-26-1274/1275/1276 · TGm** — Discussion + Resolutions A/B for LB294 CID 1079 (Guido Hiertz, Ericsson). A contested REVmf comment argued via competing resolution documents.
- **DCN 11-26-1250 · TGm** — LB294 CR for CID 1076, User Specific field in EHT-SIG (Yoshio Urabe, Panasonic) — Wi-Fi 7 PHY text absorbed into the roll-up.
- **DCN 11-26-1200/1216 · TGm** — D2.0 implementation CIDs; Abridged-in-BTMreq (Brian Hart, Cisco).
- Volume signal: 17 TGm + 8 TGbi documents of pure comment resolution — no new mechanisms, as expected for maintenance groups.

## Key technical points (ZH)

- **DCN 11-26-1204 · TGbi** — SA 第一轮再流转投票意见（Po-Kai Huang，英特尔）；配合 1211（杂项决议，rev 5）、1215、1280——11bi 处于 SA 投票收官。
- **DCN 11-26-1230 · TGbi** — DS MAC 地址冲突检查修复提案（Po-Kai Huang）。随机化 MAC 地址与分发系统交汇处的后期正确性修复。
- **DCN 11-26-1274/1275/1276 · TGm** — LB294 CID 1079 的讨论与 A/B 两案（Guido Hiertz，爱立信）。以对立决议文档展开的争议性评论。
- **DCN 11-26-1250 · TGm** — LB294 CID 1076 决议，EHT-SIG 用户特定字段（Yoshio Urabe，松下）——Wi-Fi 7 PHY 文本并入汇总修订。
- **DCN 11-26-1200/1216 · TGm** — D2.0 实现类 CID；BTM 请求精简（Brian Hart，思科）。
- 体量信号：TGm 17 份 + TGbi 8 份纯评论决议——维护组如预期无新机制。

## Why it matters / what's new (EN)

TGbi reaching SA recirculation means the 802.11 privacy amendment (randomized/changing MAC addresses, reduced identifiable information) is quarters away from publication — directly upstream of the client-privacy behaviour changes the KB's security-privacy bin tracks in OS vendors. The DS MAC-collision fix (1230) is worth watching as the last functional change likely to land. REVmf's LB294 grind is context for everything else: it fixes the baseline text that TGbn/TGbt build on.

## Why it matters / what's new (ZH)

TGbi 进入 SA 再流转意味着 802.11 隐私修正案（随机化/可变 MAC 地址、减少可识别信息）距发布只剩数个季度——直接上游影响本 KB security-privacy 主题跟踪的操作系统厂商客户端隐私行为变化。DS MAC 冲突修复（1230）值得关注，可能是最后一个落地的功能性改动。REVmf 的 LB294 决议是其他一切的上下文：它固化了 TGbn/TGbt 所依赖的基线文本。
