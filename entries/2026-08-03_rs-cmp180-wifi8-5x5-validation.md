---
id: 2026-08-03_rs-cmp180-wifi8-5x5-validation
date_published: 2026-03-05
date_found: 2026-08-03
type: industry-news
title_en: "Rohde & Schwarz CMP180 validates Qualcomm Wi-Fi 8 platforms: 5x5 MIMO, finer MCS adaptation and distributed-tone RUs tested on pre-standard silicon"
title_zh: "罗德与施瓦茨 CMP180 完成高通 Wi-Fi 8 平台验证：在预标准芯片上测试 5x5 MIMO、更细粒度 MCS 自适应与分布式音调 RU"
url: "https://www.rohde-schwarz.com/us/about-us/news-press/all-news/rohde-schwarz-enables-rapid-validation-of-next-gen-wi-fi-8-networking-platforms-including-5x5-mimo-capabilities_229356-1611946.html"
source_quality: full
topics: [802.11bn, WiFi-8, test-equipment, 5x5-MIMO, DRU, products]
topic_primary: wifi8-uhr
topics_secondary: []
novelty_score: 1
---

## Summary (EN)

Rohde & Schwarz announced (5 March 2026) that Qualcomm completed validation and performance testing of its Wi-Fi 8 (802.11bn) networking platforms using the R&S CMP180 radio communication tester. Three pre-standard UHR capabilities were exercised on real silicon across 2.4, 5, and 6 GHz: 5x5 MIMO operation (the fifth spatial stream aimed at raising per-link throughput headroom), finer-grained modulation-and-coding-scheme steps that let rate adaptation track real-time radio conditions more closely, and distributed-tone resource units (DRU) that spread a client's uplink energy across the channel to extract more transmit power under PSD-constrained regulatory regimes.

No performance numbers were disclosed; the announcement's significance is ecosystem-stage rather than mechanism-level. It is one leg of a broader test-equipment race around 802.11bn: R&S has also demonstrated first Wi-Fi 8 RF signaling tests with Broadcom and is collaborating with NETGEAR on Wi-Fi 8 AP validation, per an August Wi-Fi NOW roundup that surfaced this thread. This entry is a deliberate catch-up ingest — the KB's Wi-Fi 8 coverage had chip announcements (Filogic 8000, BCM6718) and standards mechanics but no test-and-validation datapoint confirming which UHR features are actually exercised on pre-standard hardware.

## Summary (ZH)

罗德与施瓦茨于 2026 年 3 月 5 日宣布，高通已使用 R&S CMP180 无线通信综测仪完成其 Wi-Fi 8（802.11bn）网络平台的验证与性能测试。三项预标准 UHR 能力在真实芯片上跨 2.4、5、6 GHz 三频段得到验证：5x5 MIMO（第五条空间流，用于提升单链路吞吐上限）、更细粒度的 MCS 档位（使速率自适应更贴近实时无线信道状态），以及分布式音调资源单元（DRU，将客户端上行能量分散到整个信道，在受 PSD 限制的监管制度下获得更高发射功率）。

公告未披露性能数据；其意义在于生态阶段信号而非机制层面。这是围绕 802.11bn 的测试仪器竞赛的一环：据 Wi-Fi NOW 8 月周报，R&S 还与 Broadcom 演示了首个 Wi-Fi 8 射频信令测试，并与 NETGEAR 合作进行 Wi-Fi 8 AP 验证。本条目为有意补录——本库的 Wi-Fi 8 覆盖已有芯片发布（Filogic 8000、BCM6718）和标准进展，但缺少确认哪些 UHR 特性已在预标准硬件上实际验证的测试环节数据点。

## Key technical points (EN)

- R&S CMP180 tester validated Qualcomm Wi-Fi 8 platform silicon across 2.4/5/6 GHz.
- Features exercised: 5x5 MIMO, finer MCS granularity for real-time link adaptation, and distributed-tone resource units (DRU) for uplink power under PSD limits.
- No throughput/latency numbers published — ecosystem-readiness signal, not a benchmark.
- Part of a wider 802.11bn test-equipment thread: R&S + Broadcom first RF signaling tests; R&S + NETGEAR AP validation ongoing.

## Key technical points (ZH)

- R&S CMP180 综测仪跨 2.4/5/6 GHz 验证高通 Wi-Fi 8 平台芯片。
- 验证特性：5x5 MIMO、更细粒度 MCS 档位的实时链路自适应、以及 PSD 限制下提升上行功率的分布式音调资源单元（DRU）。
- 未公布吞吐/时延数据——属生态就绪信号，非性能基准。
- 属于更广的 802.11bn 测试仪器主线：R&S 与 Broadcom 的首个射频信令测试、与 NETGEAR 的 AP 验证均在进行中。

## Why it matters / what's new (EN)

The KB's wifi8-uhr bin tracks mechanisms (NPCA, P-EDCA, DSO, MAPC — see 2026-07-24_arxiv-wifi8-uhr-mechanisms-verification) and chip launches, but until now had no visibility into the validation layer that sits between draft text and shipping product. That 5x5 MIMO and DRU — two of 802.11bn's PHY-side differentiators — are already being exercised on Qualcomm silicon with commercial test equipment is the concrete signal that these features will survive into first-generation hardware. It also confirms the pre-standard cadence: validation started while TGbn was still resolving D2.0 comments (2026-07-22_ieee-80211bn-d2-approval-wifi9-sg).

## Why it matters / what's new (ZH)

本库 wifi8-uhr 板块此前追踪的是机制（NPCA、P-EDCA、DSO、MAPC——见 2026-07-24_arxiv-wifi8-uhr-mechanisms-verification）与芯片发布，但一直缺少介于草案文本与量产产品之间的「验证层」可见性。5x5 MIMO 与 DRU——802.11bn 两项 PHY 侧差异化特性——已在高通芯片上用商用测试仪器验证，这是它们将进入第一代硬件的具体信号。它同时印证了预标准节奏：验证工作在 TGbn 仍在处理 D2.0 意见期间（2026-07-22_ieee-80211bn-d2-approval-wifi9-sg）就已展开。

## Images

![Rohde & Schwarz CMP180 radio communication tester | 罗德与施瓦茨 CMP180 无线通信综测仪](https://assets.rohde-schwarz.com/public/image/products/test-and-measurement/wireless-device-testers-and-systems/wireless-tester-rf-analyzer/generator/cmp180/cmp180-radio-communication-tester-front-low-rohde-schwarz_200_63979_2880_1620_1.jpg)
