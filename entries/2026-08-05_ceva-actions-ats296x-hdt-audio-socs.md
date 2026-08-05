---
id: 2026-08-05_ceva-actions-ats296x-hdt-audio-socs
date_published: 2026-08-04
date_found: 2026-08-05
type: industry-news
technology: bluetooth
title_en: "Ceva and Actions Technology launch ATS296X — HDT-based audio SoCs with first native Bluetooth lossless multichannel audio"
title_zh: "Ceva 与炬芯科技发布 ATS296X——基于 HDT 的音频 SoC，首次实现蓝牙原生无损多声道音频"
url: "https://audioxpress.com/news/ceva-and-actions-technology-collaborate-to-bring-bluetooth-hdt-audio-chips-to-market"
source_quality: full
topics: [BLE, HDT, LE-Audio, SoC]
topic_primary: bt-le-audio
topics_secondary: [bt-le]
novelty_score: 2
---

## Summary (EN)
Ceva and Actions Technology announced (August 4, 2026) the ATS296X series of Bluetooth audio system-on-chips built on Ceva's Bluetooth High Data Throughput (HDT) platform — one of the industry's earliest commercial HDT implementations, arriving days after the Bluetooth SIG opened the draft HDT specification for public review. The SoCs combine Ceva-Waves Bluetooth controller, modem, RF and protocol-stack IP with Ceva's Audio DSP IP for the audio processing pipeline, plus a dual-RF design proprietary to Actions Technology. HDT lifts peak Bluetooth LE throughput from 2 Mbps to roughly 7.5 Mbps.

The headline capability is what the partners describe as the first native Bluetooth support for lossless multichannel audio. Target products span Bluetooth speakers and soundbar systems with wireless satellite speakers and subwoofers (where multichannel over Bluetooth removes the proprietary 5 GHz links such systems use today), wireless microphones, ultra-low-latency gaming audio, and accelerated over-the-air software updates. The partnership is long-running — Ceva IP inside Actions Technology chips has shipped in over 100 million wireless audio SoCs.

The ATS296X series is currently in interoperability testing while HDT specification ratification is pending; Ceva says it has participated in four industry interoperability events. Taken together with the SIG's late-2026 adoption target, the announcement signals that IP vendors and fabless audio-chip makers are queuing silicon to land at, or shortly after, the moment HDT is formally adopted into the Core Specification.

## Summary (ZH)
Ceva 与炬芯科技（Actions Technology）于 2026 年 8 月 4 日发布基于 Ceva 蓝牙高数据吞吐（HDT）平台的 ATS296X 系列蓝牙音频 SoC——业界最早的商用 HDT 实现之一，且发布时点紧随蓝牙 SIG 公开 HDT 规范草案数日之后。该系列芯片集成 Ceva-Waves 蓝牙控制器、调制解调器、射频与协议栈 IP，配合 Ceva 音频 DSP IP 构建音频处理管线，并采用炬芯自有的双射频（dual-RF）设计。HDT 将蓝牙 LE 峰值吞吐从 2 Mbps 提升至约 7.5 Mbps。

其旗舰能力是双方所称的首个蓝牙原生无损多声道音频支持。目标产品覆盖带无线卫星音箱与低音炮的蓝牙音箱/回音壁系统（蓝牙多声道传输可取代此类系统现今使用的私有 5 GHz 链路）、无线麦克风、超低时延游戏音频，以及加速的 OTA 软件升级。两家公司合作已久——搭载 Ceva IP 的炬芯芯片已在无线音频 SoC 市场出货超过 1 亿颗。

ATS296X 系列目前正在进行互操作性测试，等待 HDT 规范正式批准；Ceva 表示已参加四场行业互操作性活动。结合 SIG 2026 年底的采纳目标来看，此次发布表明 IP 供应商与无晶圆音频芯片厂商正排队部署硅片，以便在 HDT 正式纳入核心规范之际或之后不久落地。

## Key technical points (EN)
- ATS296X series: Bluetooth audio SoCs on Ceva's HDT platform — Ceva-Waves BT controller/modem/RF/stack IP + Ceva Audio DSP IP + Actions dual-RF design.
- HDT peak throughput ~7.5 Mbps (vs 2 Mbps LE today) enables the claimed first native Bluetooth lossless multichannel audio.
- Targets: soundbars/speakers with wireless satellites and subwoofers, wireless microphones, ultra-low-latency gaming audio, faster OTA updates.
- Status: in interoperability testing; HDT ratification pending; Ceva has joined four industry interop events.
- Partnership scale: >100 million wireless audio SoCs shipped with Ceva IP inside Actions chips.

## Key technical points (ZH)
- ATS296X 系列：基于 Ceva HDT 平台的蓝牙音频 SoC——Ceva-Waves 蓝牙控制器/调制解调器/射频/协议栈 IP + Ceva 音频 DSP IP + 炬芯双射频设计。
- HDT 峰值吞吐约 7.5 Mbps（现行 LE 为 2 Mbps），支撑其宣称的首个蓝牙原生无损多声道音频。
- 目标产品：带无线卫星音箱/低音炮的回音壁与音箱系统、无线麦克风、超低时延游戏音频、更快的 OTA 升级。
- 状态：互操作性测试中；HDT 规范批准待定；Ceva 已参加四场行业互操作活动。
- 合作规模：搭载 Ceva IP 的炬芯芯片已出货逾 1 亿颗无线音频 SoC。

## Why it matters / what's new (EN)
This is the KB's second named-silicon HDT signal and its first from the licensable-IP path: 2026-07-13_rohde-realtek-first-ble-hdt-test-solution documented Realtek's in-house HDT chips plus test tooling, while this entry shows HDT reaching the merchant audio-SoC market through Ceva IP — the same IP-then-silicon diffusion pattern the KB recorded for UWB (2026-05-26_ceva-waves-uwb-ip-802154ab). The "lossless multichannel" claim also concretizes HDT's audio use case beyond generic "hi-res streaming": replacing the proprietary 5 GHz links inside home-theater speaker sets with standard Bluetooth is a specific, sizable product category. Notably, both this and the draft-spec release (2026-08-05_bluetooth-sig-hdt-draft-spec-public-review) landed in the same week — the HDT commercialization wave is synchronizing ahead of the late-2026 Core adoption.

## Why it matters / what's new (ZH)
这是 KB 中第二个具名硅片的 HDT 信号，也是首个来自可授权 IP 路径的信号：2026-07-13_rohde-realtek-first-ble-hdt-test-solution 记录了瑞昱自研 HDT 芯片与测试工具，而本条目显示 HDT 正通过 Ceva IP 进入第三方音频 SoC 市场——与 KB 在 UWB 领域记录的"IP 先行、硅片跟进"扩散模式（2026-05-26_ceva-waves-uwb-ip-802154ab）如出一辙。"无损多声道"的宣称也把 HDT 的音频用例从泛泛的"高解析度流媒体"落到实处：用标准蓝牙取代家庭影院音箱组内部的私有 5 GHz 链路，是一个具体且可观的产品品类。值得注意的是，本条目与 HDT 草案公开（2026-08-05_bluetooth-sig-hdt-draft-spec-public-review）落在同一周——HDT 商业化浪潮正在 2026 年底核心规范采纳之前同步就位。
