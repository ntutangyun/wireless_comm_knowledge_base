---
id: 2026-11-19_lkml-ath12k-qcn9575-wifi8-bringup-series
date_published: 2026-11-18
date_found: 2026-11-19
type: industry-news
technology: wifi
title_en: "Qualcomm posts ath12k bring-up series for QCN9575, a Wi-Fi 8 (802.11bn) PCIe chip, to linux-wireless"
title_zh: "高通向 linux-wireless 提交 ath12k 驱动对 QCN9575 的初始支持补丁，这是一款 Wi-Fi 8（802.11bn）PCIe 芯片"
url: "https://lore.kernel.org/lkml/20261118-wifi8_qcn9575_bringup-v2-0-d81a3046290e@oss.qualcomm.com/"
source_quality: full
topics: [Wi-Fi 8, 802.11bn, Linux kernel, ath12k, QCN9575, Qualcomm, open-source driver]
topic_primary: wifi8-uhr
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

On 2026-11-18 a Qualcomm engineer posted version 2 of a 15-patch series, "wifi: ath12k: add initial Wi-Fi 8 support for QCN9575", to the ath-next tree (linux-wireless, ath12k and LKML lists); version 1 was posted on 2026-11-12. The cover letter describes QCN9575 as a Wi-Fi 8 (802.11bn) PCIe device that "represents a new hardware family distinct from the existing Wi-Fi 7 devices (QCN9274, IPQ5424)", supporting 2.4, 5 and 6 GHz across up to two radios.

The series is scaffolding only: it adds a new `ATH12K_DEVICE_FAMILY_WIFI8` family tag and a dedicated `wifi8/` subdirectory inside the existing ath12k driver, and states that "no protocol-level 802.11bn features are enabled yet". The device's PCI ID is deliberately left out of the ID table, so no physical device can probe with this series alone; Qualcomm says the remaining enablement (control path, data path setup, MAC datapath) will follow as a separate series. The story reached this KB through a Phoronix article (2026-11-18) linked on Hacker News.

## Summary (ZH)

2026-11-18，一位高通工程师向 ath-next 代码树（抄送 linux-wireless、ath12k 和 LKML 邮件列表）提交了一组 15 个补丁的第 2 版，标题为"wifi: ath12k: add initial Wi-Fi 8 support for QCN9575"；第 1 版提交于 2026-11-12。封面信把 QCN9575 描述为一款 Wi-Fi 8（802.11bn）PCIe 设备，"属于一个有别于现有 Wi-Fi 7 设备（QCN9274、IPQ5424）的新硬件系列"，支持 2.4、5 和 6 GHz，最多两个射频。

这组补丁只是搭框架：它在现有 ath12k 驱动中新增 `ATH12K_DEVICE_FAMILY_WIFI8` 系列标记和专门的 `wifi8/` 子目录，并明确写道"尚未启用任何协议层的 802.11bn 功能"。该设备的 PCI ID 被有意排除在 ID 表之外，因此仅靠这组补丁没有任何实体设备能被识别加载；高通表示其余的使能工作（控制面、数据面初始化、MAC 数据通路）将作为后续补丁组另行提交。本条经由 Phoronix 的报道（2026-11-18）及其 Hacker News 转帖进入本知识库。

## Key technical points (EN)

- Patch 1 adds the device-tree binding for QCN9575. Patch 2 moves PCI window register constants from `pci.c` into per-device structures so Wi-Fi 7 and Wi-Fi 8 parts can define independent window layouts.
- Patches 3–4 extend the shared QMI layer: a larger WLAN config message describing the copy-engine (CE) and service-pipe count QCN9575 needs, and support for downloading an extended firmware binary.
- Patches 5–13 build the `wifi8/` hardware scaffolding: hw_params, HAL register table, HAL ops and descriptors, unified firmware image support, MHI channel/event config, CE and service pipe map, WMI resource config, hw ops.
- Patches 14–15 add a mac80211 ops skeleton and the Wi-Fi 8 PCI driver scaffolding; stubs keep every patch bisect-safe.
- Validation: boot-validated on internal firmware `WLAN.WBO.1.0-01410-QCAHKSWPL_SILICONZ-1` together with the not-yet-posted enablement patches. v2 changes address review comments from "sashiko" (an AI-based review tool, per Phoronix) on the PCI-window refactor.

## Key technical points (ZH)

- 补丁 1 新增 QCN9575 的设备树绑定；补丁 2 把 PCI 窗口寄存器常量从 `pci.c` 移入每款设备各自的结构体，使 Wi-Fi 7 与 Wi-Fi 8 芯片可以各自定义窗口布局。
- 补丁 3–4 扩展共享的 QMI 层：更大的 WLAN 配置消息，用于描述 QCN9575 所需的拷贝引擎（CE）和服务管道数量；并支持下载扩展固件二进制。
- 补丁 5–13 搭建 `wifi8/` 硬件框架：hw_params、HAL 寄存器表、HAL 操作与描述符、统一固件镜像支持、MHI 通道/事件配置、CE 与服务管道映射、WMI 资源配置、硬件操作函数。
- 补丁 14–15 加入 mac80211 操作骨架和 Wi-Fi 8 PCI 驱动框架；用桩函数保证每个补丁单独都可二分定位（bisect-safe）。
- 验证：在内部固件 `WLAN.WBO.1.0-01410-QCAHKSWPL_SILICONZ-1` 上、配合尚未提交的使能补丁完成了启动验证。第 2 版的改动是回应"sashiko"（据 Phoronix，为基于 AI 的审查工具）对 PCI 窗口重构补丁的意见。

## Why it matters / what's new (EN)

This is public upstream driver code naming a specific Qualcomm 802.11bn chip and showing how the Wi-Fi 8 family is being structured in Linux: as a separate hardware family under the existing ath12k driver rather than a new driver. It carries no 802.11bn protocol features yet, so it says nothing about which Wi-Fi 8 capabilities the chip supports; the follow-up control-path and datapath series is where that will appear. Phoronix's article describes ath12k as a new driver; the cover letter shows it is the existing ath12k driver gaining a Wi-Fi 8 family.

## Why it matters / what's new (ZH)

这是公开的上游驱动代码，点名了一款具体的高通 802.11bn 芯片，并展示了 Wi-Fi 8 系列在 Linux 中的组织方式：作为现有 ath12k 驱动下的一个独立硬件系列，而不是一个新驱动。它目前不含任何 802.11bn 协议功能，因此看不出该芯片支持哪些 Wi-Fi 8 能力；这些要等后续的控制面和数据通路补丁组。Phoronix 的报道把 ath12k 说成新驱动；封面信表明实际上是现有 ath12k 驱动新增了 Wi-Fi 8 系列。

## Images

None.
