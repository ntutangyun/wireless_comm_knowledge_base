---
id: 2026-08-13_ieee-mentor-tgbn-digest
date_published: 2026-08-13
date_found: 2026-08-13
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — 2026-08-13"
title_zh: "IEEE 802.11 TGbn Mentor 当日摘要 — 2026-08-13"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bn
source_quality: snippet_only
topics: [TGbn, 802.11bn, TWT, power-save, TSF]
topic_primary: energy-power-save
topics_secondary: [wifi8-uhr, rtwt-latency]
novelty_score: 1
---

## Summary (EN)
TGbn received one new contribution in this window: Espressif's "End of DL Traffic for SP (EODTSP) and Partial TSF Timer" (11-26-1540, r0 uploaded 11 Aug, r1 on 12 Aug 2026) — a client-power-save proposal in the service-period signaling space.

## Summary (ZH)
本窗口内 TGbn 收到一份新贡献：Espressif 的"服务期下行结束指示（EODTSP）与部分 TSF 定时器"（11-26-1540，r0 于 8 月 11 日、r1 于 8 月 12 日上传）——属于服务期信令方向的客户端省电提案。

## Key technical points (EN)
- **DCN 11-26-1540-01 · TGbn** — "End of DL Traffic for SP (EODTSP) and Partial TSF Timer". Baoyu Sun (Espressif Systems). Signals the end of downlink traffic within a service period so a STA can stop listening early, paired with a partial TSF timer for lighter time-sync in low-power operation; r1 followed r0 within a day.

## Key technical points (ZH)
- **DCN 11-26-1540-01 · TGbn** — "服务期下行结束指示（EODTSP）与部分 TSF 定时器"。Baoyu Sun（Espressif Systems）。在服务期内指示下行流量结束，使 STA 可提前停止监听；配合部分 TSF 定时器在低功耗运行下实现更轻量的时间同步；r1 在 r0 上传次日即跟进。

## Why it matters / what's new (EN)
Espressif — an IoT-silicon vendor — pushing service-period termination signaling into TGbn continues the trend of low-power stakeholders shaping UHR beyond raw reliability (the 20 MHz-only IoT device class in Wi-Fi 7 certification set the precedent). EODTSP is mechanically adjacent to R-TWT service periods, so it may interact with the latency track's SP scheduling. Title/author only (doc body account-gated).

## Why it matters / what's new (ZH)
IoT 芯片厂商 Espressif 向 TGbn 推动服务期终止信令，延续了低功耗阵营在纯可靠性之外塑造 UHR 的趋势（Wi-Fi 7 认证中的 20 MHz-only IoT 设备类别即为先例）。EODTSP 在机制上与 R-TWT 服务期相邻，可能与时延方向的 SP 调度产生交互。仅含标题/作者（正文需账号访问）。
