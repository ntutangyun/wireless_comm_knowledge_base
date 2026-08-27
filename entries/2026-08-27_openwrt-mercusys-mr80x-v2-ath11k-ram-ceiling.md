---
id: 2026-08-27_openwrt-mercusys-mr80x-v2-ath11k-ram-ceiling
date_published: 2026-08-26
date_found: 2026-08-27
type: community-signal
technology: wifi
title_en: "OpenWrt forum: Mercusys MR80X v2 port runs both Wi-Fi radios on a patched ath11k, but upstream ships Wi-Fi disabled — 256 MB RAM is the ceiling"
title_zh: "OpenWrt 论坛：水星 MR80X v2 移植用打补丁的 ath11k 驱动跑通双频 Wi-Fi，但上游合入版本关闭了 Wi-Fi——256 MB 内存是天花板"
url: "https://forum.openwrt.org/t/mercusys-mr80x-v2-working-openwrt-with-patched-ath11k/252380"
source_quality: full
topics: [OpenWrt, ath11k, IPQ50xx, Wi-Fi 6, device support, driver memory footprint, NAND ECC, calibration data]
topic_primary: wifi7-deployment
topics_secondary: []
novelty_score: 1
---

## Summary (EN)

A month-long OpenWrt forum port thread (opened 2026-08-02, still active 2026-08-26) documents bringing a low-cost AX3000 router — the Mercusys MR80X v2 — up on OpenWrt with **both Wi-Fi radios working under a patched `ath11k` driver**, and then submitting the port upstream with **Wi-Fi deliberately disabled**. The stated reason is blunt: "256 MB is too little for ath11k." With both radios up the board is left with roughly 50 MB free RAM, which the porter judged too thin to be the configuration OpenWrt supports by default, so the upstream submission matches the wired-only posture already used for similar IPQ50xx-class devices.

The debugging path is the more transferable part of the thread. The device's instability turned out not to be a RAM problem at all but five separate board-integration faults: the NAND ECC strength was configured at 8-bit where the hardware uses 4-bit, which was **silently corrupting the radio calibration data** read out of flash; the RTL8367S switch reset line is GPIO 26, not the GPIO 39 the vendor material implies; the CPU-to-switch link had to run at 1G SGMII rather than 2.5G HSGMII to be stable; `DEVICE_DTS_CONFIG` had to be pinned to `config@mp02.1` to match the board machine ID; and pinctrl inheritance had to be removed to keep serial-console RX alive. After those fixes the DSA switch maps correctly, MAC addresses are extracted from flash at runtime, sysupgrade and NAND boot work, and the CPU port reaches 2.5 Gbps.

## Summary (ZH)

一条持续一个月的 OpenWrt 论坛移植帖（2026-08-02 开帖，2026-08-26 仍在更新）记录了把低价 AX3000 路由器水星 MR80X v2 移植到 OpenWrt 的过程：作者用**打了补丁的 `ath11k` 驱动跑通了双频 Wi-Fi**，但向上游提交时**主动关闭了 Wi-Fi**。理由很直接——"256 MB 内存对 ath11k 来说太小了"。双射频同时工作时，板子只剩约 50 MB 空闲内存，作者认为这不足以作为 OpenWrt 默认支持的配置，因此上游提交沿用了同类 IPQ50xx 设备"仅有线"的做法。

帖中更有普适价值的是调试路径。设备的不稳定根本不是内存问题，而是五个各自独立的板级集成缺陷：NAND ECC 强度被配成 8 bit，而硬件实际用 4 bit，这**在无声无息中损坏了从 flash 读出的射频校准数据**；RTL8367S 交换芯片的复位脚是 GPIO 26，而非厂商资料暗示的 GPIO 39；CPU 与交换芯片之间的链路必须跑 1G SGMII 而不是 2.5G HSGMII 才稳定；`DEVICE_DTS_CONFIG` 必须固定为 `config@mp02.1` 以匹配板子的 machine ID；还必须去掉 pinctrl 继承才能保住串口控制台的 RX。修完之后，DSA 交换端口映射正确、MAC 地址在运行时从 flash 提取、sysupgrade 与 NAND 启动均正常、CPU 端口达到 2.5 Gbps。

## Key technical points (EN)

- Device: Mercusys MR80X v2 (AX3000 class, Qualcomm IPQ50xx family + RTL8367S switch), 256 MB RAM.
- Both Wi-Fi radios function on a **patched `ath11k`**; free RAM with both radios active is ~50 MB.
- Upstream submission intentionally ships **wired-only** — "256 MB is too little for ath11k" — matching the posture taken for comparable devices.
- NAND ECC strength misconfigured (8-bit vs the hardware's 4-bit) was **silently corrupting Wi-Fi calibration data** read from flash — the failure looked like RAM exhaustion but was not.
- Switch reset GPIO is 26, not the documented 39; CPU link must be 1G SGMII, not 2.5G HSGMII, for stability.
- `DEVICE_DTS_CONFIG = config@mp02.1` required to match the board machine ID; pinctrl inheritance removed to preserve serial-console RX.
- Working after fixes: DSA port mapping, runtime MAC extraction, sysupgrade, NAND boot, 2.5 Gbps CPU port.

## Key technical points (ZH)

- 设备：水星 MR80X v2（AX3000 级，高通 IPQ50xx 系列 + RTL8367S 交换芯片），256 MB 内存。
- 双频 Wi-Fi 在**打补丁的 `ath11k`** 上可用；双射频同时开启时空闲内存约 50 MB。
- 上游提交刻意只支持**有线**——"256 MB 对 ath11k 太小"——与同类设备的处理方式一致。
- NAND ECC 强度配置错误（配成 8 bit，硬件实为 4 bit）会**无声损坏从 flash 读出的 Wi-Fi 校准数据**——现象看起来像内存耗尽，实际不是。
- 交换芯片复位脚为 GPIO 26 而非资料所写的 39；CPU 链路必须跑 1G SGMII 而非 2.5G HSGMII 才稳定。
- 需要把 `DEVICE_DTS_CONFIG` 设为 `config@mp02.1` 以匹配板子 machine ID；去掉 pinctrl 继承以保住串口 RX。
- 修复后可用：DSA 端口映射、运行时 MAC 提取、sysupgrade、NAND 启动、2.5 Gbps CPU 端口。

## Why it matters / what's new (EN)

This thread puts a number on something the open-source Wi-Fi community usually discusses only in the abstract: the **RAM footprint of a modern Wi-Fi 6 driver stack is now large enough to price a whole class of shipping routers out of open-source Wi-Fi support**. The hardware runs both radios fine — the port proves it — yet 256 MB leaves so little headroom that the maintainer-facing decision is to ship the device wired-only. As vendors keep building sub-$40 AX3000 boxes on 256 MB, the practical effect is a growing population of Wi-Fi 6 hardware that third-party firmware can boot but not usefully use as an access point. That is a directly relevant datapoint for anyone planning open-firmware Wi-Fi experiments on commodity boards.

The debugging chain is worth recording separately: an ECC-strength mismatch quietly corrupting **radio calibration data** is a failure mode that presents as flaky RF or apparent memory pressure rather than as a flash error, and the thread is a clean worked example of isolating it. The GPIO and SerDes-rate corrections are the usual reminder that vendor board documentation for these low-cost designs is unreliable.

## Why it matters / what's new (ZH)

这条帖子给一个开源 Wi-Fi 社区常常只在抽象层面讨论的问题标上了具体数字：**现代 Wi-Fi 6 驱动栈的内存占用，已经大到足以把一整类在售路由器排除在开源 Wi-Fi 支持之外**。硬件本身跑双射频没问题——移植结果证明了这一点——但 256 MB 剩余空间太小，以至于面向维护者的决定是让该设备只支持有线。随着厂商继续用 256 MB 打造 40 美元以下的 AX3000 产品，实际后果是：越来越多的 Wi-Fi 6 硬件第三方固件能启动，却无法真正当作接入点使用。对任何打算在通用板卡上做开源固件 Wi-Fi 实验的人来说，这是一个直接相关的数据点。

调试链条本身也值得单独记录：ECC 强度不匹配悄悄损坏**射频校准数据**，其表现是 RF 不稳定或看似内存压力，而不是 flash 报错，这条帖子是隔离该故障的一个干净范例。GPIO 与 SerDes 速率的纠正则再次提醒：这类低成本设计的厂商板级资料并不可靠。
