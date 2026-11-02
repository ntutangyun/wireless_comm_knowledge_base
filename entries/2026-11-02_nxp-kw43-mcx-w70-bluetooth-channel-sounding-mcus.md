---
id: 2026-11-02_nxp-kw43-mcx-w70-bluetooth-channel-sounding-mcus
date_published: 2026-10-27
date_found: 2026-11-02
type: industry-news
technology: bluetooth
title_en: "NXP KW43 and MCX W70: cost- and size-optimised Bluetooth 6.x MCUs with a localization compute engine for Channel Sounding"
title_zh: "NXP KW43 与 MCX W70：面向成本与尺寸优化、带定位计算引擎的蓝牙 6.x 信道探测 MCU"
url: "https://www.nxp.com/company/about-nxp/smarter-world-blog/BL-ADVANCING-SECURE-MCX-W70-KW43"
source_quality: full
topics: [Bluetooth-Channel-Sounding, NXP, KW43, MCX-W70, automotive-digital-key, SESIP, PSA, post-quantum]
topic_primary: bt-channel-sounding
topics_secondary: [bt-location, bt-security]
novelty_score: 2
---

## Summary (EN)

An NXP Smarter World blog post (Manisha Nandkumar Phadke and Rakshit Grover, 27 October 2026) introduces two wireless microcontrollers aimed at designs where cost, board size or power are constrained: KW43 for automotive and MCX W70 for industrial and IoT. Both are described as Bluetooth 6.x parts built to run Bluetooth Channel Sounding (BCS), which the post describes as combining round-trip time (RTT) and phase-based ranging (PBR) to improve the accuracy and security of distance measurement and to reduce latency. The post states "centimeter-level accuracy" for BCS and says Bluetooth 6.3 refinements improve ranging time and reduce processing overhead, but gives no measured figures for either.

The post places the two parts in cost-, size- or power-critical applications and calls the first-generation KW47 and MCX W72 (launched 2025) "the go-to devices" where greater scalability is required. Both share the family's common platform, whose core is a dedicated localization compute engine (LCE) that accelerates BCS positioning algorithms (NXP says execution time drops by nearly 45%). Compared with the first generation, the new parts replace the per-core memory blocks with a unified memory architecture. Security is also re-partitioned: much of the EdgeLock functionality moves from a separate hardware enclave to IP-based security implemented in software, which NXP says does not compromise security. The parts are stated to be certified to SESIP Level 3 and PSA Level 3 and to be PQC-ready.

KW43 is qualified to AEC-Q100 Grade 2, offers CAN and LIN options and targets digital car keys; MCX W70 is based on the MCX W72 platform, supports Zigbee, Thread for Matter, Aliro and Bluetooth LE, and targets asset tracking, smart home, building automation and lighting. Both are already sampling, with broad availability targeted for Q2 2027, and NXP describes them as pre-certified with evaluation kits available.

## Summary (ZH)

NXP Smarter World 博客（Manisha Nandkumar Phadke 与 Rakshit Grover，2026 年 10 月 27 日）介绍了两款面向成本、板面积或功耗受限设计的无线微控制器：面向汽车的 KW43 与面向工业及物联网的 MCX W70。文章称两者均为可运行蓝牙信道探测（Bluetooth Channel Sounding，BCS）的蓝牙 6.x 器件；BCS 结合往返时间（RTT）与基于相位的测距（PBR），以提高测距精度与安全性并降低时延。文章称 BCS 可达"厘米级精度"，并称蓝牙 6.3 的改进缩短了测距时间、降低了处理开销，但均未给出实测数据。

文章将两款器件定位于成本、尺寸或功耗关键的应用，并称第一代 KW47 与 MCX W72（2025 年推出）是需要更高可扩展性时的“首选器件”。两者沿用该系列的通用平台，其核心是加速 BCS 定位算法的专用定位计算引擎（LCE，NXP 称算法执行时间缩短近 45%）。与上一代相比，新器件以统一内存架构取代每个内核独立的存储块。安全设计同样重新划分：EdgeLock 的大部分功能由独立硬件安全区转为以软件实现的基于 IP 的安全，NXP 称这不会削弱安全性。文章称这些器件已通过 SESIP 3 级与 PSA 3 级认证，并"支持后量子密码（PQC-ready）"。

KW43 通过 AEC-Q100 Grade 2 认证，提供 CAN 与 LIN 选项，面向数字车钥匙；MCX W70 基于 MCX W72 平台，支持 Zigbee、面向 Matter 的 Thread、Aliro 与蓝牙 LE，面向资产追踪、智能家居、楼宇自动化与照明。两款器件已开始送样，计划 2027 年第二季度全面供货，NXP 称其已预认证并提供评估套件。

## Key technical points (EN)

- **Two parts, two markets**: KW43 (automotive, AEC-Q100 Grade 2, CAN and LIN options, digital key) and MCX W70 (industrial/IoT, built on the MCX W72 platform).
- **Channel Sounding**: BCS combines RTT and PBR; the post claims centimeter-level accuracy and cites Bluetooth 6.3 refinements for ranging time and processing overhead, with no numbers.
- **Localization compute engine (LCE)**: dedicated block for BCS positioning algorithms; NXP states a nearly 45% reduction in algorithm execution time.
- **Unified memory architecture** replaces the separate per-core memory blocks of the first generation.
- **Security**: EdgeLock functions largely re-implemented as IP-based software security instead of a separate enclave; SESIP Level 3 and PSA Level 3; described as PQC-ready; family certifications also listed include ISO 21434, CE RED, IEC 62443 and NIST CAVP.
- **Protocols (MCX W70)**: multiple 2.4 GHz standards including Zigbee, Thread for Matter and Aliro, alongside Bluetooth LE.
- **Availability**: sampling now; broad availability targeted Q2 2027; evaluation kits offered.
- **Not stated in the post**: ranging accuracy figures, power consumption, memory sizes, clock speeds, pricing.

## Key technical points (ZH)

- **两款器件、两个市场**：KW43（汽车，AEC-Q100 Grade 2，提供 CAN 与 LIN 选项，数字车钥匙）与 MCX W70（工业/物联网，基于 MCX W72 平台）。
- **信道探测**：BCS 结合 RTT 与 PBR；文章称可达厘米级精度，并提到蓝牙 6.3 在测距时间与处理开销上的改进，均无具体数字。
- **定位计算引擎（LCE）**：加速 BCS 定位算法的专用模块；NXP 称算法执行时间缩短近 45%。
- **统一内存架构**取代第一代每个内核独立的存储块。
- **安全**：EdgeLock 功能大部分改为基于 IP 的软件安全而非独立安全区；SESIP 3 级与 PSA 3 级；称支持后量子密码；列出的系列认证还包括 ISO 21434、CE RED、IEC 62443 与 NIST CAVP。
- **协议（MCX W70）**：支持多种 2.4 GHz 标准，包括 Zigbee、面向 Matter 的 Thread 与 Aliro，以及蓝牙 LE。
- **供货**：已送样；计划 2027 年第二季度全面供货；提供评估套件。
- **文章未给出**：测距精度数据、功耗、存储容量、时钟频率、价格。

## Why it matters / what's new (EN)

This is a vendor blog, so every capability above is NXP's own claim. What it adds to the KB's Channel Sounding thread is a silicon-side data point on how NXP cost-reduces its BCS platform: the same LCE-based platform with a unified memory and a security partition moved from enclave to software. The KB's other Channel Sounding silicon entries cover Silicon Labs BG2B, Nordic nRF54L parts and Atmosic ATM53; the automotive-qualified, CAN/LIN-equipped variant is the new angle here.

## Why it matters / what's new (ZH)

这是一篇厂商博客，上述能力均为 NXP 自述。它为知识库的信道探测主线补充了一个芯片侧数据点：NXP 如何为其 BCS 平台降本：沿用基于 LCE 的同一平台，采用统一内存，并将安全分区由安全区转向软件。知识库中其他信道探测芯片条目涵盖 Silicon Labs BG2B、Nordic nRF54L 系列与 Atmosic ATM53；带车规认证与 CAN/LIN 接口的变体是此处的新角度。
