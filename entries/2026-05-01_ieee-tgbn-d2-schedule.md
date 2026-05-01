---
id: 2026-05-01_ieee-tgbn-d2-schedule
date_found: 2026-05-01
type: ieee-document
title_en: "IEEE 802.11bn (Wi-Fi 8 / UHR) — TGbn status: D2.0 ballot July 2026, May 2028 ratification target"
title_zh: "IEEE 802.11bn（Wi-Fi 8 / UHR）—— TGbn 进展：D2.0 投票延至 2026 年 7 月，目标 2028 年 5 月批准"
url: "https://www.ieee802.org/11/Reports/tgbn_update.htm"
source_quality: full
topics: [802.11bn, MAC-layer, PHY-layer, MLO]
novelty_score: 5
---

## Summary (EN)

The IEEE 802.11bn Task Group (TGbn) — codifying Wi-Fi 8 / Ultra High Reliability — has finalized the schedule slip first hinted at the March 2026 plenary in Vancouver. Draft 2.0 letter ballot, originally targeted for May 2026, has shifted to July 2026 after roughly 1,800 comments from LB291 (D1.0 letter ballot) were resolved through D1.4. Approximately 60% of D1.0 technical comments have been addressed; the remaining 40% will be handled before D2.0 freeze. The May 2028 final IEEE-SA Sponsor Ballot / RevCom approval target remains intact despite the D2.0 slip.

The amendment's scope is now stable: the three headline reliability targets (≥25% throughput uplift at a given SINR, 25% reduction in p95 latency, 25% reduction in MPDU loss especially across BSS transitions) survive into D2.0. Major technical features being added include distributed RUs, Enhanced Long Range PPDUs (ELR), coordinated spatial reuse, unequal modulation across spatial streams (UEQM), and multi-AP coordination (MAPC) primitives. The amendment operates between 1 GHz and 7.250 GHz with backwards compatibility maintained for 2.4 / 5 / 6 GHz legacy devices.

## Summary (ZH)

IEEE 802.11bn 工作组（TGbn）—— 即 Wi-Fi 8 / 超高可靠性（UHR）的标准化任务组 —— 已经正式确认了 2026 年 3 月温哥华全会上预告的排期延后。Draft 2.0 letter ballot 原定 2026 年 5 月，目前推迟到 2026 年 7 月；起因是 LB291（D1.0 letter ballot）阶段提交的约 1,800 条意见在 D1.4 之前已陆续解决。约 60% 的 D1.0 技术意见已处理完毕，剩余 40% 将在 D2.0 冻结前消化。尽管 D2.0 延后两个月，最终 IEEE-SA Sponsor Ballot / RevCom 批准时间仍维持在 2028 年 5 月。

修订案的范围目前稳定下来：三大可靠性指标（在给定 SINR 下吞吐量提升 ≥25%、p95 时延降低 25%、MPDU 丢包率降低 25%，尤其针对跨 BSS 切换场景）将延续到 D2.0。主要新增技术特性包括分布式 RU（distributed RU）、增强长距 PPDU（ELR）、协同空间复用、空间流不等调制（UEQM）以及多 AP 协调（MAPC）相关原语。本修订案工作频段覆盖 1 GHz 到 7.250 GHz，并对 2.4 / 5 / 6 GHz 现有设备保持向后兼容。

## Key technical points (EN)

- **Schedule (current):** D1.4 in development → D2.0 LB July 2026 → D3.0 LB Jan 2027 → D4.0 SA-Ballot May 2027 → final WG approval Mar 2028 → RevCom May 2028
- **Three headline targets:** +25% throughput at fixed SINR, −25% p95 latency, −25% MPDU loss (esp. inter-BSS transitions)
- **New PHY features in D1.x:** distributed RUs, Enhanced Long Range PPDUs (ELR), unequal modulation (UEQM)
- **New MAC features:** coordinated spatial reuse, multi-AP coordination (MAPC) primitives
- **Frequency scope:** 1 GHz – 7.250 GHz with legacy 2.4 / 5 / 6 GHz coexistence

## Key technical points (ZH)

- **当前排期：** D1.4 制定中 → D2.0 LB 2026 年 7 月 → D3.0 LB 2027 年 1 月 → D4.0 SA-Ballot 2027 年 5 月 → 工作组终批 2028 年 3 月 → RevCom 2028 年 5 月
- **三大目标：** 固定 SINR 下吞吐 +25%、p95 时延 −25%、MPDU 丢包率 −25%（特别是跨 BSS 切换场景）
- **D1.x 新增 PHY 特性：** 分布式 RU、增强长距 PPDU（ELR）、空间流不等调制（UEQM）
- **新增 MAC 特性：** 协同空间复用、多 AP 协调（MAPC）原语
- **工作频段：** 1 GHz – 7.250 GHz，与 2.4 / 5 / 6 GHz 既有设备共存

## Why it matters / what's new (EN)

First entry on TGbn timeline in this KB. Future updates should track:

- D2.0 letter-ballot opening (expected July 2026) — major comment volume expected
- Specific MAPC primitive proposals
- ELR PPDU format details
- Inter-BSS reliability mechanisms — likely the most active design cluster, since it forces new on-the-wire signaling

The May 2026 → July 2026 slip is a 2-month delay that does not cascade — the delta is being absorbed in D2.0/D3.0 prep timeline. Worth flagging if it widens.

## Why it matters / what's new (ZH)

本 KB 中关于 TGbn 时间线的首条记录。后续更新应重点追踪：

- D2.0 letter ballot 的开启（预计 2026 年 7 月）—— 预计还会出现大量意见
- 具体的 MAPC 原语提案
- ELR PPDU 帧格式细节
- 跨 BSS 可靠性机制 —— 由于必然引入新的空口信令，预计是当前最活跃的设计集群

2026 年 5 月延到 7 月只是 2 个月的局部延迟，并未级联到后续节点 —— 该延迟被吸收在 D2.0 / D3.0 之间的准备阶段。如果该延迟进一步扩大，则需要重点关注。

## Images

![LB291 (D1.0) comment resolution status, March 2026 Vancouver | LB291（D1.0）评论解决进度，2026 年 3 月温哥华会议](https://www.ieee802.org/11/Reports/IEEE%20P802.11%20-%20TASK%20GROUP%20BN%20(UHR)%20-%20GROUP%20INFORMATION%20UPDATE_files/image004.png)
