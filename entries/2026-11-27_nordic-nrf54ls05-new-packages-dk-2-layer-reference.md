---
id: 2026-11-27_nordic-nrf54ls05-new-packages-dk-2-layer-reference
date_published: 2026-11-06
date_found: 2026-11-27
type: industry-news
technology: bluetooth
title_en: "Nordic DevZone: nRF54LS05A and nRF54LS05B get three smaller QFN packages, a distributor-sold DK and a 2-layer reference design"
title_zh: "Nordic DevZone：nRF54LS05A/B 新增三种更小的 QFN 封装、经销商渠道开发套件与两层板参考设计"
url: "https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog/posts/nrf54ls05a-and-nrf54ls05b-dk-at-distributors-new-packages-and-a-2-layer-reference-design"
source_quality: full
topics: [BLE, nRF54L-Series, nRF54LS05, QFN, reference-design, development-kit]
topic_primary: bt-le
topics_secondary: []
novelty_score: 2
---

## Summary (EN)
A Nordic Semiconductor DevZone post by Pawel Kanafek, dated 6 November 2026, covers availability updates for the nRF54LS05A and nRF54LS05B SoCs. The nRF54LS05 development kit, for both SoCs, is now sold through Nordic's distribution partners. The SoCs, previously offered only in QFN48, are listed in three further packages: QFN24 (4 x 4 mm, 13 GPIO), QFN32 (5 x 5 mm, 21 GPIO) and QFN40 (5 x 5 mm, 29 GPIO), all at early-sampling status, alongside QFN48 (6 x 6 mm, 37 GPIO) in mass production.

The post also announces a 2-layer reference design for the QFN48 package, described as simpler and cheaper to build than a 4-layer board; Nordic advises copying the RF section exactly (component values, layout, stack-up). A reply in the comments says no 2-layer reference currently exists for the nRF54L05.

## Summary (ZH)
Nordic Semiconductor DevZone 上由 Pawel Kanafek 撰写、日期为 2026 年 11 月 6 日的文章，介绍了 nRF54LS05A 与 nRF54LS05B 两款 SoC 的供货更新。适用于这两款 SoC 的 nRF54LS05 开发套件现已通过 Nordic 的分销合作伙伴销售。这两款 SoC 此前仅有 QFN48 封装，现新增三种封装：QFN24（4 x 4 mm，13 个 GPIO）、QFN32（5 x 5 mm，21 个 GPIO）和 QFN40（5 x 5 mm，29 个 GPIO），均为早期送样状态；QFN48（6 x 6 mm，37 个 GPIO）已量产。

文章还发布了面向 QFN48 封装的两层板参考设计，称其比四层板更简单、成本更低；Nordic 建议完全照搬射频部分（元件参数、布局、叠层）。评论中的回复称，目前尚无针对 nRF54L05 的两层板参考设计。

## Key technical points (EN)
- Packages and status: QFN24 (QBAA) 4 x 4 mm / 13 GPIO, QFN32 (QCAA) 5 x 5 mm / 21 GPIO, QFN40 (QDAA) 5 x 5 mm / 29 GPIO, all early sampling; QFN48 (QFAA) 6 x 6 mm / 37 GPIO, mass production.
- Memory and CPU as listed in the post: 128 MHz Arm Cortex-M33, 0.5 MB NVM, 64 KB RAM (nRF54LS05A) or 96 KB RAM (nRF54LS05B), 3x SPI/TWI/UART.
- Radio: ultra-low-power 2.4 GHz radio for Bluetooth LE and 2.4 GHz proprietary protocols, with the qualified Bluetooth LE stack shared with the rest of the nRF54L Series. Compared with the wider series, the post lists Channel Sounding, 802.15.4 and the RISC-V coprocessor as not included.
- Other features listed: global RTC available in System OFF; a baseline security configuration intended to support regulatory compliance; nRF Connect SDK 3.4.2 at production-ready maturity.
- Compatibility: the A and B variants are drop-in replacements in every package; QFN48 and QFN40 are pin-compatible with nRF54L05, nRF54L10 and nRF54L15 in the same package, but the LS parts have more GPIO, so a design review may be needed.
- Learning resource mentioned: a 2-3 hour nRF54L Series Express course that needs no hardware.

## Key technical points (ZH)
- 封装与状态：QFN24（QBAA）4 x 4 mm / 13 GPIO、QFN32（QCAA）5 x 5 mm / 21 GPIO、QFN40（QDAA）5 x 5 mm / 29 GPIO，均为早期送样；QFN48（QFAA）6 x 6 mm / 37 GPIO，已量产。
- 存储与处理器（按文章所列）：128 MHz Arm Cortex-M33、0.5 MB NVM、64 KB RAM（nRF54LS05A）或 96 KB RAM（nRF54LS05B）、3 个 SPI/TWI/UART。
- 射频：超低功耗 2.4 GHz 无线电，支持蓝牙 LE 与 2.4 GHz 私有协议，蓝牙 LE 协议栈经过认证，并与 nRF54L 系列其他产品共用。与整个系列相比，文章列出不包含信道探测（Channel Sounding）、802.15.4 和 RISC-V 协处理器。
- 其他列出的特性：System OFF 模式下全局 RTC 可用；旨在支持合规要求的基线安全配置；nRF Connect SDK 3.4.2（生产就绪成熟度）。
- 兼容性：A、B 两个型号在各封装下可直接互换；QFN48 与 QFN40 同封装下与 nRF54L05、nRF54L10、nRF54L15 引脚兼容，但 LS 型号 GPIO 更多，可能需要设计复核。
- 提到的学习资源：无需硬件的 2-3 小时 nRF54L 系列速成课程。

## Why it matters / what's new (EN)
This is a product-availability update rather than a new Bluetooth mechanism. It adds package, DK-availability and reference-design detail for the nRF54LS05 parts, which the KB so far mentions only as excluded from Channel Sounding support in the 2026-11-05 Nordic iPhone Channel Sounding entry. The post itself is the source for all numbers above; nothing here is independently verified.

## Why it matters / what's new (ZH)
这是产品供货信息更新，而非新的蓝牙机制。它补充了 nRF54LS05 系列的封装、开发套件供货与参考设计信息；知识库此前仅在 2026-11-05 的 Nordic iPhone 信道探测条目中提到该系列不支持信道探测。以上数字均来自该文章本身，未经独立核实。

## Images
No figures are embedded; see the source post for the package and reference-design images.
