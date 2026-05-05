---
id: 2026-05-03_ieee-11bp-amp-ul-channel-access
date_published: 2026-05-01
date_found: 2026-05-03
type: proposal
title_en: "IEEE 802.11bp — UL Channel Access for Non-AP AMP STA (Qualcomm, May 2026 pre-interim)"
title_zh: "IEEE 802.11bp —— 非 AP AMP 站点的上行信道接入（Qualcomm，2026 年 5 月会前）"
url: "https://mentor.ieee.org/802.11/dcn/26/11-26-0802-00-00bp-ul-channel-access-for-non-ap-amp-sta.docx"
source_quality: snippet_only
topics: [802.11bp, MAC-layer, IoT]
topic_primary: amp-iot
topics_secondary: []
novelty_score: 4
---

## Summary (EN)

Qualcomm's Sanket Kalamkar (DCN 11-26/802, posted 01-May-2026) tables an uplink channel-access procedure for ambient-power non-AP STAs in **TGbp** (Ambient Power Communications, the new task group targeting backscatter / energy-harvesting Wi-Fi IoT stations). The procedure differs structurally from EDCA / TXOP: AMP STAs can't tolerate the energy cost of CCA + retries the way mains-powered stations can, so the access procedure is gated by the AP and uses a one-shot deterministic schedule rather than contention.

TGbp is one of the three task groups expected to start an initial WG ballot on D1.0 from the May 2026 Antwerp session, alongside TGbi (privacy) and TGbt (post-quantum). That means the structural shape of the AMP MAC is being locked in right now.

## Summary (ZH)

Qualcomm 的 Sanket Kalamkar（DCN 11-26/802，2026 年 5 月 1 日提交）为 **TGbp**（Ambient Power Communications，专攻反向散射 / 能量采集 Wi-Fi IoT 站点的新 Task Group）下的环境取电非 AP STA 提交了上行信道接入流程。该流程与 EDCA / TXOP 在结构上不同：AMP STA 无法承受 CCA + 重试的能量成本（不像市电供电的 STA 那样），因此接入流程由 AP 门控，使用「一次性确定性调度」而非竞争。

TGbp 是三个预计在 2026 年 5 月 Antwerp 会议起步 D1.0 初版工作组投票的 TG 之一，另两者是 TGbi (隐私) 与 TGbt (后量子)。也就是说 AMP MAC 的结构形态正在此刻被锁定。

## Key technical points (EN)

- AP-gated UL access — AMP STA never performs CCA on its own.
- One-shot deterministic schedule replaces backoff + retry.
- Aimed at energy budgets where every CCA cycle is too expensive.
- Sits inside TGbp, currently at pre-D1.0 (initial ballot expected from May 2026 session).
- Companion contributions in the same window: bistatic backscatter (11-26/783, 821) and broader AMP-MAC framing.

## Key technical points (ZH)

- AP 门控上行接入 —— AMP STA 自己绝不做 CCA。
- 一次性确定性调度取代退避 + 重试。
- 面向「每次 CCA 周期都太贵」的能量预算。
- 隶属 TGbp，目前处于 D1.0 前期（预期 5 月会议起初版投票）。
- 同窗口的伴随贡献：双站点反向散射（11-26/783, 821）与更宽的 AMP-MAC 框架。

## Why it matters / what's new (EN)

TGbp is a brand-new structural surface: an entire MAC dialect for radios that don't have batteries. The contribution surface is fresh — most of the basic decisions (CCA on/off, contention vs. schedule, frame format) are still up for grabs. Researchers and standards contributors can shape the structural defaults right now. From a market perspective, AMP IoT is the natural successor to RFID + LoRa for "tags everywhere" deployments.

## Why it matters / what's new (ZH)

TGbp 是一个全新的结构性面：为没有电池的射频量身打造的整套 MAC 方言。贡献面非常新鲜 —— 多数基础决策（CCA 开关、竞争 vs 调度、帧格式）都还在博弈。从专利流水线视角看，这是高新颖性的领域。从市场视角看，AMP IoT 是 RFID + LoRa 的自然后继者，面向「到处都是标签」的部署。
