---
id: 2026-06-04_calterah-dubhe-uwb-soc-802154ab
date_published: 2026-01-05
date_found: 2026-06-04
type: industry-news
technology: uwb
title_en: "Calterah Dubhe UWB SoC: a 2T4R IEEE 802.15.4ab chip integrating ranging and radar, verified on Rohde & Schwarz CMP200"
title_zh: "加特兰 Dubhe UWB SoC：集测距与雷达于一体的 2T4R IEEE 802.15.4ab 芯片，经罗德与施瓦茨 CMP200 验证"
url: "https://www.webwire.com/ViewPressRel.asp?aId=348707"
source_quality: full
topics: [UWB, 802.15.4ab, automotive, digital-car-key, radar, BLE-assisted-MMS, FiRa]
topic_primary: uwb-ranging
topics_secondary: [uwb-radar]
novelty_score: 2
---

## Summary (EN)

Calterah announced the Dubhe UWB SoC at CES 2026, positioning it as "the world's first UWB chip to fully comply with the new IEEE 802.15.4ab standard." Its distinguishing feature is a 2T4R (two-transmit, four-receive) front end that integrates both precise ranging/positioning and radar sensing on a single die, so a car can use one chip for digital-key distance measurement and for in-cabin/around-vehicle radar functions (child-presence detection, intrusion detection, kick-to-open tailgate) without separate components. The part is built on a 22-nm process.

For ranging, Dubhe uses BLE-Assisted-MMS (Bluetooth-Low-Energy-assisted multi-millisecond) operation — BLE bootstraps and assists the UWB multi-millisecond ranging session — and claims reliable measurement beyond 400 m, including positioning through five vehicles in an underground garage. Calterah cites 32% lower transmit power and 56% lower receive power versus comparable solutions. IEEE 802.15.4ab PHY functionality was verified using Rohde & Schwarz's CMP200 radio communication tester, a FiRa-Consortium-certified platform, with Calterah and R&S jointly demonstrating the ecosystem at CES 2026 (announced January 5, 2026).

## Summary (ZH)

加特兰（Calterah）在 CES 2026 上发布 Dubhe UWB SoC，称其为"全球首颗完全符合新版 IEEE 802.15.4ab 标准的 UWB 芯片"。其最大特点是 2T4R（两发四收）前端，将高精度测距/定位与雷达感知集成于单颗芯片，使汽车可用一颗芯片同时完成数字钥匙测距与车内/车周雷达功能（儿童遗留检测、入侵检测、踢脚感应尾门），无需分立器件。该芯片采用 22 纳米工艺。

测距方面，Dubhe 采用 BLE-Assisted-MMS（蓝牙低功耗辅助的多毫秒测距）方式——由 BLE 引导并辅助 UWB 的多毫秒测距会话——宣称可在超过 400 米范围内可靠测量，并能在地下车库中穿透五辆车实现定位。加特兰称其发射功耗较同类方案降低 32%、接收功耗降低 56%。其 IEEE 802.15.4ab 物理层功能经罗德与施瓦茨 CMP200 无线通信测试仪（FiRa 联盟认证平台）验证，加特兰与 R&S 在 CES 2026 联合演示整套生态（发布于 2026 年 1 月 5 日）。

## Key technical points (EN)

- **First fully 802.15.4ab-compliant SoC claim**: PHY verified on Rohde & Schwarz CMP200 (FiRa-certified tester).
- **2T4R, ranging + radar on one die**: single chip serves digital-key positioning and radar sensing (CPD, intrusion, kick-to-open).
- **BLE-Assisted-MMS ranging**: BLE assists the UWB multi-millisecond ranging session; >400 m reliable range, through-five-vehicles underground.
- **22-nm process**; 32% lower TX power, 56% lower RX power vs comparable solutions.
- **Target**: automotive digital car key + in/around-vehicle sensing. Announced CES 2026 (Jan 5, 2026).

## Key technical points (ZH)

- **宣称首颗完全符合 802.15.4ab 的 SoC**：物理层经罗德与施瓦茨 CMP200（FiRa 认证测试仪）验证。
- **2T4R，单芯片集测距+雷达**：一颗芯片兼顾数字钥匙定位与雷达感知（儿童遗留、入侵、踢脚开门）。
- **BLE-Assisted-MMS 测距**：BLE 辅助 UWB 多毫秒测距会话；>400 米可靠测距，地下穿透五辆车。
- **22 纳米工艺**；发射功耗降 32%、接收功耗降 56%（对比同类方案）。
- **目标**：汽车数字钥匙 + 车内/车周感知。发布于 CES 2026（2026-01-05）。

## Why it matters / what's new (EN)

This adds a third independent 802.15.4ab silicon data point to the KB alongside STMicroelectronics' ST64UWB (`2026-05-25_stmicroelectronics-st64uwb-802154ab`) and CEVA's Ceva-Waves UWB IP (`2026-05-26_ceva-waves-uwb-ip-802154ab`), confirming the pre-ratification 4ab silicon race is now multi-vendor. Dubhe's distinctive angle is the 2T4R single-die integration of ranging *and* radar (most early 4ab parts lead with ranging) and the explicit BLE-Assisted-MMS long-range mode (>400 m, through-five-vehicles), which together push 802.15.4ab toward the automotive sensing+access convergence rather than ranging alone. The Rohde & Schwarz CMP200 verification is also a useful concrete signal that FiRa-certified 4ab PHY test equipment is in the field.

## Why it matters / what's new (ZH)

本条目为 KB 增添了第三个独立的 802.15.4ab 硅片数据点，与意法半导体 ST64UWB（`2026-05-25_stmicroelectronics-st64uwb-802154ab`）和 CEVA 的 Ceva-Waves UWB IP（`2026-05-26_ceva-waves-uwb-ip-802154ab`）并列，印证标准定案前的 4ab 硅片竞赛已是多厂商格局。Dubhe 的独特之处在于 2T4R 单芯片集成测距*与*雷达（多数早期 4ab 芯片以测距为主），以及明确的 BLE-Assisted-MMS 远距模式（>400 米、穿透五辆车）——二者共同把 802.15.4ab 推向"汽车感知+门禁"融合，而非仅测距。罗德与施瓦茨 CMP200 验证也是一个具体信号：FiRa 认证的 4ab 物理层测试设备已就位。
