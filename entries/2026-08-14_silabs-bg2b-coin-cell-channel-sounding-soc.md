---
id: 2026-08-14_silabs-bg2b-coin-cell-channel-sounding-soc
date_published: 2026-08-04
date_found: 2026-08-14
type: industry-news
technology: bluetooth
title_en: "Silicon Labs BG2B: 1.1 µA coin-cell Bluetooth 6 SoC with full Channel Sounding (Mode 3 + NADM + Inline PCT) claiming both Apple and Google ranging-spec compliance"
title_zh: "Silicon Labs BG2B：1.1 µA 纽扣电池级蓝牙 6 SoC，完整信道探测（Mode 3 + NADM + Inline PCT），宣称同时符合苹果与谷歌测距互操作规范"
url: "https://www.cnx-software.com/2026/08/04/bg2b-lowest-power-bluetooth-le-soc-from-silicon-labs/"
source_quality: full
topics: [BLE, Channel-Sounding, Bluetooth-6, low-power, secure-ranging, CAN-FD, Cyber-Resilience-Act]
topic_primary: bt-channel-sounding
topics_secondary: [bt-le, bt-security]
novelty_score: 2
---

## Summary (EN)

Silicon Labs announced the **BG2B** on August 4, 2026 — its lowest-power Bluetooth LE SoC to date and the company's first to bring the **full Bluetooth 6 Channel Sounding feature set to a coin-cell-class part**. The Arm Cortex-M33 (80 MHz) SoC sleeps at **1.1 µA (EM2, 16 kB RAM retention)** / 0.17 µA in EM4, runs at 23 µA/MHz, and draws 3.1 mA in RX — 14–15% lower MCU active current than the incumbent BG22/BG22L. Radio: BLE 6 with Channel Sounding plus 2.4 GHz proprietary modes, +8 dBm TX, −106.8 dBm sensitivity at 125 kbps.

The Channel Sounding implementation is the notable part: BG2B supports **Mode 3** (concurrent phase-based ranging *and* round-trip-time measurement — CS's most secure variant), the **Normalized Attack Detector Metric (NADM)** for detecting relay/interception attempts, and **Inline Phase Correction Term (Inline PCT)** for oscillator-offset correction (the Core 6.3 accuracy feature). Silicon Labs claims compliance with **both Apple's and Google's Bluetooth Channel Sounding interoperability specifications** — positioning against Nordic's nRF54L15, which has publicly demonstrated interop only with Google's Pixel 10 ranging stack. Security is Secure Vault High (PSA Level 3 target), announced five weeks before the EU Cyber Resilience Act's Article 14 vulnerability-reporting deadline (September 11, 2026). Distinctive integration: a **CAN-FD controller** on a BLE SoC, targeting wireless diagnostics for vehicles and industrial equipment. Availability is early-engagement now, volume launch 2027; accuracy claims are so far unverified by independent benchmarks.

## Summary (ZH)

Silicon Labs 于 2026 年 8 月 4 日发布 **BG2B**——该公司迄今功耗最低的蓝牙 LE SoC，也是其首款把**完整蓝牙 6 信道探测（Channel Sounding）特性集带入纽扣电池级器件**的芯片。这颗 Arm Cortex-M33（80 MHz）SoC 睡眠电流 **1.1 µA（EM2，保留 16 kB RAM）**、EM4 深睡 0.17 µA，运行功耗 23 µA/MHz，接收电流 3.1 mA——MCU 有效电流比现役 BG22/BG22L 低 14–15%。射频侧：BLE 6 + 信道探测，兼容 2.4 GHz 私有协议，发射功率 +8 dBm，125 kbps 下灵敏度 −106.8 dBm。

其信道探测实现是亮点：BG2B 支持 **Mode 3**（相位测距 PBR 与往返时延 RTT 并发——CS 最安全的模式）、用于检测中继/截获攻击的 **NADM**（归一化攻击检测度量），以及修正振荡器偏移的 **Inline PCT**（内联相位校正项，Core 6.3 的精度特性）。Silicon Labs 宣称同时符合**苹果与谷歌两家的蓝牙信道探测互操作规范**——直接对位 Nordic nRF54L15（后者目前只公开演示过与谷歌 Pixel 10 测距栈的互操作）。安全侧为 Secure Vault High（目标 PSA Level 3 认证），发布时点恰在欧盟《网络弹性法案》第 14 条漏洞报告义务生效（2026 年 9 月 11 日）前五周。集成上的独特之处：BLE SoC 上集成 **CAN-FD 控制器**，面向车辆与工业设备的无线诊断。目前为早期客户合作阶段，2027 年量产上市；精度指标尚无独立基准测试验证。

## Key technical points (EN)

- Cortex-M33 @ 80 MHz, 1016 kB flash, 64/128 kB SRAM; QFN40 (5×5 mm) and QFN48 (6×6 mm) packages.
- Power: 1.1 µA EM2 sleep (16 kB retention), 1.5 µA (128 kB), 0.17 µA EM4; 23 µA/MHz active; RX 3.1 mA, TX 4.1 mA @ 0 dBm.
- Channel Sounding: Mode 3 (concurrent PBR + RTT), NADM attack detection, Inline PCT oscillator-offset correction — the full secure-ranging stack, not a PBR-only subset.
- Claimed conformance to both Apple and Google CS interoperability specifications — the cross-ecosystem smartphone-ranging claim no competitor has made publicly.
- Secure Vault High: hardware AES/ChaCha20-Poly1305/SHA/ECDSA/Ed25519, TRNG, TrustZone, secure boot; PSA Level 3 target, timed against the EU CRA enforcement calendar.
- 1× CAN-FD interface plus 2× 12-bit 1 Msps ADCs, 4× constant-current LED sinks, PDM mic input — unusual peripheral mix pairing BLE ranging with wired industrial/automotive buses.
- Target: secure ranging/digital key, asset tracking, electronic shelf labels, vehicle diagnostics; early access now, launch 2027.

## Key technical points (ZH)

- Cortex-M33 @ 80 MHz，1016 kB 闪存，64/128 kB SRAM；QFN40（5×5 mm）与 QFN48（6×6 mm）封装。
- 功耗：EM2 睡眠 1.1 µA（保留 16 kB）/1.5 µA（128 kB），EM4 0.17 µA；运行 23 µA/MHz；接收 3.1 mA，发射 4.1 mA @ 0 dBm。
- 信道探测：Mode 3（PBR + RTT 并发）、NADM 攻击检测、Inline PCT 振荡器偏移校正——完整安全测距栈，而非仅 PBR 子集。
- 宣称同时符合苹果与谷歌的 CS 互操作规范——目前尚无竞品公开做出的跨生态手机测距声明。
- Secure Vault High：硬件 AES/ChaCha20-Poly1305/SHA/ECDSA/Ed25519、TRNG、TrustZone、安全启动；目标 PSA Level 3，节奏对准欧盟 CRA 执法时间表。
- 1× CAN-FD 接口，另有 2× 12 位 1 Msps ADC、4× 恒流 LED 驱动、PDM 麦克风输入——把 BLE 测距与有线工业/车载总线并置的少见外设组合。
- 目标场景：安全测距/数字钥匙、资产追踪、电子价签、车辆诊断；现处早期合作阶段，2027 年上市。

## Why it matters / what's new (EN)

The KB's Channel Sounding thread so far tracks Nordic silicon (nRF54L15 Tag, 2026-07-06), measurement innovation (Metirionic angle-from-CS, 2026-08-03), and test tooling (R&S/Realtek HDT, 2026-07-13) — this is the **first Silicon Labs entry and the first CS part positioned on power budget rather than feature count**: full Mode-3 secure ranging in a chip meant to sit on one coin cell for years, which is exactly the profile of the door locks, tags, and shelf labels CS is supposed to unlock. Two ecosystem signals stand out. First, the claim of conformance to *both* Apple's and Google's CS interoperability specs is the first public acknowledgment that smartphone-side CS ranging now has two competing certification targets — silicon vendors are being forced to certify against both, an interop-fragmentation dynamic worth tracking as CS deployments scale. Second, the launch is explicitly timed to the EU Cyber Resilience Act's September 2026 enforcement — the first KB evidence of the CRA directly shaping Bluetooth silicon positioning. Caveat: accuracy claims are vendor-stated, with no independent benchmarks until volume availability in 2027.

## Why it matters / what's new (ZH)

本 KB 的信道探测主线迄今覆盖 Nordic 硅片（nRF54L15 Tag，2026-07-06）、测量创新（Metirionic CS 测角，2026-08-03）与测试工装（R&S/Realtek HDT，2026-07-13）——本条是**第一条 Silicon Labs 条目，也是第一款以功耗预算而非特性数量定位的 CS 器件**：在一颗准备靠单粒纽扣电池运行数年的芯片里放入完整 Mode-3 安全测距，恰是 CS 想要解锁的门锁、标签、电子价签的目标画像。两个生态信号值得注意。其一，宣称同时符合苹果与谷歌两套 CS 互操作规范，首次公开印证手机侧 CS 测距已形成两个相互竞争的认证目标——芯片厂被迫双重认证，这种互操作碎片化动态在 CS 规模化部署中值得持续跟踪。其二，发布节奏明确对准欧盟《网络弹性法案》2026 年 9 月的执法节点——KB 中第一份 CRA 直接影响蓝牙芯片市场定位的证据。注意：精度指标均为厂商自述，2027 年量产前没有独立基准测试。
