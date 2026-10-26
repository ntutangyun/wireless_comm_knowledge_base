---
id: 2026-10-26_audioxpress-cloud2gnd-aurawave-v1-3-aw100-auracast-dev
date_published: 2026-10-23
date_found: 2026-10-26
type: industry-news
technology: bluetooth
title_en: "Cloud2GND releases Aurawave Audio Framework v1.3 and the AW100 Configuration Tool for Auracast development on the Ezurio BL5340PA (nRF5340)"
title_zh: "Cloud2GND 发布 Aurawave 音频框架 v1.3 与 AW100 配置工具，用于基于 Ezurio BL5340PA（nRF5340）的 Auracast 开发"
url: "https://audioxpress.com/news/cloud-gnd-releases-aurawave-audio-framework-v-and-aw-configuration-tool-for-auracast-development"
source_quality: full
topics: [Auracast, LE-Audio, Aurawave, Cloud2GND, nRF5340, USB-Audio-Class-2, broadcast-source, broadcast-sink]
topic_primary: bt-le-audio
topics_secondary: [bt-le]
novelty_score: 2
---

## Summary (EN)

audioXpress (João Martins, 23 October 2026) reports that Cloud2GND released Aurawave Audio Framework v1.3 and a graphical AW100 Configuration Tool, extending the Bluetooth LE Audio and Auracast platform it develops with Ezurio (formerly Laird Connectivity). v1.3 retunes the 48 kHz presets with a default high-reliability mode, adds 24 kHz presets for phones and hearing aids (the article also says compatible phones can display encrypted broadcasts and configured stream names), and adds prefix-based discovery for standalone receivers, with preferences stored in flash so that receivers connect automatically as matching broadcasts become available. It also adds preferred audio-location tags for true wireless stereo receivers and USB Audio Class 2 input/output on Windows, macOS, Linux, Android and iOS.

The AW100 hardware comes in analog-plus-digital and digital-only versions built on the Ezurio BL5340PA module (Nordic nRF5340 with nRF21540 front-end); the analog version adds an AKM AK4558 stereo codec. The configuration tool (Windows, and macOS on Apple silicon with macOS 15 or later) handles standalone setup, stream parameters, broadcast discovery, QR code generation and USB firmware updates. The article also says Cloud2GND will preview an AW100-PRO prototype at AES Nashville and that the full Aurawave Pro roadmap is due in Q1 2027. Cloud2GND is described as supporting and licensing the Packetcraft Bluetooth LE stack under an agreement with Synaptics.

## Summary (ZH)

audioXpress（João Martins，2026 年 10 月 23 日）报道，Cloud2GND 发布了 Aurawave 音频框架 v1.3 与图形化 AW100 配置工具，扩展其与 Ezurio（前身为 Laird Connectivity）共同开发的蓝牙 LE Audio 与 Auracast 平台。v1.3 重新调校了 48 kHz 预设并提供默认的高可靠模式，新增面向手机与助听器的 24 kHz 预设（文章还称兼容手机可显示加密广播及已配置的流名称），并为独立接收器增加基于前缀的发现功能，偏好设置存于闪存，匹配的广播出现时接收器自动连接。同时新增面向真无线立体声接收器的首选音频位置标签，以及 Windows、macOS、Linux、Android 和 iOS 上的 USB Audio Class 2 音频输入输出。

AW100 硬件分模数结合版与纯数字版，基于 Ezurio BL5340PA 模块（Nordic nRF5340 搭配 nRF21540 前端）；模拟版另加 AKM AK4558 立体声编解码器。配置工具（Windows，以及需 Apple silicon 与 macOS 15 或更高版本的 macOS）负责独立设置、流参数、广播发现、二维码生成和 USB 固件升级。文章还称 Cloud2GND 将在 AES Nashville 展示 AW100-PRO 原型，完整的 Aurawave Pro 路线图预计于 2027 年第一季度公布。文章称 Cloud2GND 依据与 Synaptics 的协议支持并授权 Packetcraft 蓝牙 LE 协议栈。

## Key technical points (EN)

- **v1.3 audio presets**: 48 kHz presets retuned (default high-reliability mode); new 24 kHz presets for phone and hearing aid compatibility.
- **Standalone receivers**: prefix-based broadcast discovery, preferences stored in flash, automatic connection when matching broadcasts appear.
- **TWS**: preferred audio-location tags for separate stereo receivers.
- **USB Audio Class 2**: audio in/out on Windows, macOS, Linux, Android, iOS.
- **Hardware**: Ezurio BL5340PA (nRF5340 + nRF21540); analog version adds AKM AK4558 codec; USB-C power/audio/control; 40-pin expansion (I2S, serial, GPIO); AT-command interface; SWD for custom firmware.
- **Earlier v1.2**: two separate audio feeds in one Auracast broadcast, independent sink operation, automatic resynchronisation.

## Key technical points (ZH)

- **v1.3 音频预设**：重新调校 48 kHz 预设（默认高可靠模式）；新增 24 kHz 预设以兼容手机与助听器。
- **独立接收器**：基于前缀的广播发现，偏好存于闪存，匹配广播出现时自动连接。
- **TWS**：为分离的立体声接收器提供首选音频位置标签。
- **USB Audio Class 2**：支持 Windows、macOS、Linux、Android、iOS 的音频输入输出。
- **硬件**：Ezurio BL5340PA（nRF5340 + nRF21540）；模拟版加 AKM AK4558 编解码器；USB-C 供电/音频/控制；40 针扩展口（I2S、串口、GPIO）；AT 命令接口；SWD 用于自定义固件。
- **此前的 v1.2**：单个 Auracast 广播内两路独立音频、独立接收端运行、自动重新同步。

## Why it matters / what's new (EN)

This is a vendor-tooling release note showing what an Auracast source/sink development kit exposes: preset sample rates, encrypted-broadcast display on phones, discovery by name prefix and USB audio bridging. It is a product announcement; the capabilities listed are the vendor's, as relayed by the trade article.

## Why it matters / what's new (ZH)

这是一则厂商工具发布说明，展示了 Auracast 源/接收端开发套件所提供的能力：预设采样率、手机上显示加密广播、按名称前缀发现以及 USB 音频桥接。这属于产品公告；所列功能为厂商所述，由行业媒体转述。
