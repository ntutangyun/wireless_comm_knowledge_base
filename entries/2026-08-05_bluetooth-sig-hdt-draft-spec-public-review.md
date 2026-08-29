---
id: 2026-08-05_bluetooth-sig-hdt-draft-spec-public-review
date_published: 2026-07-30
date_found: 2026-08-05
type: bluetooth-spec
technology: bluetooth
title_en: "Bluetooth SIG opens High Data Throughput (HDT) draft specification for public review — QPSK/QAM PHY, 7.5 Mbps, adoption slated for late 2026"
title_zh: "蓝牙 SIG 公开高数据吞吐（HDT）规范草案供公众评审——QPSK/QAM 物理层、7.5 Mbps，预计 2026 年底正式采纳"
url: "https://audioxpress.com/news/bluetooth-sig-encourages-developers-and-product-designers-to-review-available-high-data-throughput-hdt-draft-specification"
source_quality: full
topics: [BLE, HDT, LE-Audio, PHY]
topic_primary: bt-le
topics_secondary: [bt-le-audio]
novelty_score: 3
---

## Summary (EN)
The Bluetooth SIG has made a draft of the High Data Throughput (HDT) specification publicly available on bluetooth.com and is encouraging developers and product designers to review it ahead of planned adoption into the Bluetooth Core Specification in late 2026 (reported by audioXpress, July 30, 2026). This is the first time the technical content of HDT — the headline feature of the 2026 Bluetooth roadmap — is open for public reading, moving it from a promised capability (confirmed "for 2026" at the Core 6.3 release) to reviewable draft text.

The draft reveals the PHY design in more detail than any previous public communication. HDT introduces a new radio mode built on QPSK and QAM modulation running at 2 megasymbols per second with multiple bits carried per symbol, decoded with coherent detection — a significant departure for Bluetooth LE, whose existing PHYs are frequency-shift-keyed and non-coherently detected. The rate ladder spans 2, 3, 4, 6, and 7.5 Mbps (nearly 4x today's LE 2M PHY), with forward error correction applied at the physical layer for all bit rates. Above the PHY, HDT adds a flexible packet structure supporting payloads of roughly 8,000+ bytes, dynamic rate switching that adapts modulation to channel quality, and strengthened link-layer integrity protection with 64-bit and 128-bit Message Integrity Check options (versus 32-bit today).

Target use cases named by the SIG include high-resolution and lossless audio streaming, faster firmware updates and file transfers, multi-sensor IoT and wearable data streaming, and industrial/medical device telemetry. Feedback is routed to the Core Specification Working Group (core-main@bluetooth.org). With adoption expected in the late-2026 Core release, the draft publication effectively starts the countdown for the feature the whole 2026 Bluetooth ecosystem cycle has been building toward.

## Summary (ZH)
蓝牙 SIG 已在 bluetooth.com 公开高数据吞吐（HDT）规范草案，鼓励开发者与产品设计者在其于 2026 年底正式纳入蓝牙核心规范之前进行评审（audioXpress 2026 年 7 月 30 日报道）。这是 HDT——2026 年蓝牙路线图的旗舰特性——的技术内容首次向公众开放阅读，使其从 Core 6.3 发布时"确认 2026 年推出"的承诺，变为可审阅的草案文本。

草案以前所未有的细节披露了 PHY 设计。HDT 引入一种全新的无线电模式：基于 QPSK 与 QAM 调制、以每秒 200 万符号（2 Msym/s）运行、每符号承载多个比特，并采用相干检测解码——这对蓝牙 LE 是一次重大转变，因为现有 LE PHY 均为频移键控（FSK）加非相干检测。速率阶梯覆盖 2、3、4、6 与 7.5 Mbps（接近现有 LE 2M PHY 的 4 倍），且所有速率档均在物理层应用前向纠错（FEC）。在 PHY 之上，HDT 增加了支持约 8000 字节以上载荷的灵活分组结构、根据信道质量自适应切换调制的动态速率机制，以及强化的链路层完整性保护——消息完整性校验（MIC）提供 64 位与 128 位选项（现行为 32 位）。

SIG 列出的目标场景包括高解析度/无损音频流、更快的固件升级与文件传输、多传感器 IoT 与可穿戴数据流，以及工业/医疗设备遥测。反馈通过核心规范工作组（core-main@bluetooth.org）收集。随着正式采纳预计落在 2026 年底的核心规范版本，草案公开实质上启动了整个 2026 蓝牙生态周期所指向的这一特性的倒计时。

## Key technical points (EN)
- Draft HDT specification publicly downloadable on bluetooth.com; adoption into the Core Specification planned for late 2026.
- New PHY mode: QPSK and QAM at 2 Msym/s with coherent detection — Bluetooth LE's first move beyond non-coherent FSK.
- Five data rates: 2 / 3 / 4 / 6 / 7.5 Mbps; forward error correction at the PHY for all rates.
- Flexible packet structure with ~8,000+ byte payloads; dynamic, channel-quality-driven adaptive rate switching.
- Integrity hardening: 64-bit and 128-bit Message Integrity Check options (up from 32-bit).
- Use cases: hi-res/lossless audio, fast firmware/file transfer, multi-sensor wearable streaming, industrial and medical telemetry.

## Key technical points (ZH)
- HDT 规范草案已可在 bluetooth.com 公开下载；计划于 2026 年底纳入核心规范。
- 全新 PHY 模式：QPSK 与 QAM 调制、2 Msym/s 符号率、相干检测——蓝牙 LE 首次突破非相干 FSK。
- 五档速率：2 / 3 / 4 / 6 / 7.5 Mbps；所有速率档均在物理层应用前向纠错。
- 灵活分组结构，载荷约 8000 字节以上；基于信道质量的动态自适应速率切换。
- 完整性强化：消息完整性校验（MIC）提供 64 位与 128 位选项（现行为 32 位）。
- 用例：高解析度/无损音频、快速固件与文件传输、多传感器可穿戴数据流、工业与医疗遥测。

## Why it matters / what's new (EN)
The KB has tracked HDT through two prior stages: the spec-side promise (2026-05-24_bluetooth-core-6-3-spec-release — "HDT confirmed for 2026" plus HCI mask headroom reserved for it) and the ecosystem-side prerequisites (2026-07-13_rohde-realtek-first-ble-hdt-test-solution — first HDT silicon and test tooling, which already disclosed the five-rate 2–7.5 Mbps ladder and "three new modulation schemes"). This entry adds the third stage: the draft text itself is now public, and it names what those modulations actually are — QPSK/QAM with coherent detection at 2 Msym/s — along with the ~8 KB payload structure, PHY-level FEC across all rates, adaptive rate switching, and the 64/128-bit MIC upgrade, none of which were previously public. The late-2026 adoption target also pins the long-rumored timeline to the SIG's next bi-annual Core release (~Nov 2026), the exact milestone this KB's Bluetooth thread has been watching since May.

## Why it matters / what's new (ZH)
KB 此前从两个阶段跟踪 HDT：规范侧承诺（2026-05-24_bluetooth-core-6-3-spec-release——"HDT 确认 2026 年推出"及为其预留的 HCI 掩码空间）与生态侧前提（2026-07-13_rohde-realtek-first-ble-hdt-test-solution——首批 HDT 硅片与测试工具，已披露 2–7.5 Mbps 五档速率与"三种新调制方案"）。本条目补上第三阶段：草案文本本身已公开，并首次揭示这些调制的真身——2 Msym/s 的 QPSK/QAM 加相干检测——以及约 8 KB 的载荷结构、全速率档物理层 FEC、自适应速率切换和 64/128 位 MIC 升级，这些此前均未公开。2026 年底的采纳目标也把传闻已久的时间线钉在 SIG 下一个半年度核心规范版本（约 2026 年 11 月）——正是本 KB 蓝牙线索自 5 月以来一直关注的里程碑。

## Images
![Bluetooth HDT infographic — feature overview (1 of 2) | 蓝牙 HDT 信息图——特性总览（其一）](https://cdn.xingosoftware.com/audioxpress/images/fetch/dpr_1,w_765,h_430,c_fit/https%3A%2F%2Faudioxpress.com%2Fassets%2Fupload%2Fimages%2F1%2F20260803131554_BluetoothHDT-infographic-Jul2026-audioXpress-01-TWeb.jpg)
![Bluetooth HDT infographic — feature overview (2 of 2) | 蓝牙 HDT 信息图——特性总览（其二）](https://cdn.xingosoftware.com/audioxpress/images/fetch/dpr_1,w_765,h_430,c_fit/https%3A%2F%2Faudioxpress.com%2Fassets%2Fupload%2Fimages%2F1%2F20260803131554_BluetoothHDT-infographic-Jul2026-audioXpress-02-TWeb.jpg)
![Bluetooth HDT high-resolution audio use case | 蓝牙 HDT 高解析度音频用例](https://cdn.xingosoftware.com/audioxpress/images/fetch/dpr_1,w_765,h_430,c_fit/https%3A%2F%2Faudioxpress.com%2Fassets%2Fupload%2Fimages%2F1%2F20260803131554_BluetoothHDT-Generic-HiResAudio2-TWeb.jpg)
