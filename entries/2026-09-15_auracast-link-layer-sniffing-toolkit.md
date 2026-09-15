---
id: 2026-09-15_auracast-link-layer-sniffing-toolkit
date_published: 2026-09-14
date_found: 2026-09-15
type: community-signal
technology: bluetooth
title_en: "Researcher publishes Link-Layer Bluetooth Auracast sniffing toolkit built on patched Zephyr firmware"
title_zh: "研究者发布基于打过补丁的 Zephyr 固件的蓝牙 Auracast 链路层嗅探工具集"
url: "https://insinuator.net/2026/09/auracast-part2/"
source_quality: full
topics: [Bluetooth Auracast, LE Audio, Broadcast Isochronous Streams, Zephyr RTOS, nRF52840, packet sniffing, Wireshark]
topic_primary: bt-security
topics_secondary: [bt-le-audio]
novelty_score: 1
---

## Summary (EN)

Security researcher Dennis Heinze published Part II of a Bluetooth Auracast research series on insinuator.net (2026-09-14), this time focused on capturing Auracast broadcast audio streams at the Link Layer rather than through the host stack. The article's starting point is that the host/controller split in a normal Bluetooth stack hides information from software running above the controller: the OS only ever sees already-reassembled, valid audio data, not the individual retransmitted and pre-transmitted PDUs the controller receives over the air. To get at that lower-level traffic, the author patched the open-source Zephyr RTOS Bluetooth Low Energy controller firmware running on Nordic Semiconductor nRF52840 USB dongles so it forwards raw Link Layer packets instead of only delivering reassembled audio. Testing against a real Auracast source — a Samsung Galaxy S23 broadcasting audio — the author documents that the phone sends one retransmission and one pre-transmission for every original PDU (three times the strictly required PDU count) across 18 subevents per BIG (Broadcast Isochronous Group) event; a "greedy" capture mode that records all three copies gets "pretty good" coverage with only occasional PDUs dropped. Encryption introduces two separate problems rather than one: on unencrypted streams the controller's Message Integrity Check (MIC) simply passes, but on encrypted streams the controller normally discards any PDU it cannot MIC-verify without knowing the Broadcast Code, so the author patches the controller to skip the MIC check and just pad out the expected PDU size instead. Separately, because the sniffer cannot decrypt encrypted BIG_CHANNEL_MAP_IND control PDUs, it misses any channel-map updates the broadcaster sends, derives the wrong channel-hopping sequence from that point on, and gradually loses synchronization to the stream — a planned fix is to instead read the current channel map from the (always plaintext) BIGInfo whenever an encrypted control PDU arrives. The post releases three companion tools: an updated Auracast Hacker's Toolkit (dual-serial-interface sniffing, scanning and packet dumping), a Wireshark extcap plugin for parsing the captured packets directly in Wireshark, and a standalone Auracast Packet Visualizer web app for timeline-based PDU inspection. It builds on ERNW's Part I (Dennis Heinze and Frieder Steinmetz, January 2025), which covered Auracast's Broadcast Code and released a brute-force cracking tool, "biscrack".

## Summary (ZH)

安全研究者 Dennis Heinze 在 insinuator.net 上发布了蓝牙 Auracast 研究系列的第二篇（2026-09-14），这次的重点是绕开主机协议栈、直接在链路层捕获 Auracast 广播音频流。文章的出发点是：常规蓝牙协议栈中主机/控制器的分层结构，会对运行在控制器之上的软件隐藏信息——操作系统只能看到已经重组完成、校验通过的音频数据，而看不到控制器在空口实际收到的一个个重传与预传输 PDU。为了拿到这一层数据，作者对开源 Zephyr RTOS 的蓝牙低功耗控制器固件打了补丁，运行在 Nordic Semiconductor 的 nRF52840 USB 加密狗上，使其转发原始链路层数据包，而不是只交付已重组的音频。作者用一台真实的 Auracast 广播源——正在广播音频的三星 Galaxy S23——做测试，记录到该手机在每个 BIG（广播等时组）事件的 18 个子事件中，对每一个原始 PDU 都额外发送一次重传与一次预传输（总量是严格所需 PDU 数的三倍）；采用"贪婪"抓取模式记录全部三份副本可获得"相当不错"的覆盖率，只会偶尔丢失个别 PDU。加密带来的其实是两个独立的问题，而非一个：对未加密流，控制器的消息完整性校验（MIC）本身会正常通过；而对加密流，控制器在不知道 Broadcast Code 的情况下无法通过 MIC 校验、因而会丢弃相应 PDU，作者为此对控制器打补丁，使其跳过 MIC 校验、仅按 MIC 占用的字节数补齐预期包长。另一个独立问题是：由于嗅探器无法解密加密的 BIG_CHANNEL_MAP_IND 控制 PDU，一旦广播方发送信道映射更新，嗅探器就会错过它，从此推导出错误的跳频序列，并逐渐与该流失去同步——作者计划的修复方案是，每当收到一个加密的控制 PDU 时，改为直接从（始终明文的）BIGInfo 中读取当前信道映射。文章同时发布了三个配套工具：更新版的 Auracast Hacker's Toolkit（支持双串口嗅探、扫描与数据包转储）、一个可在 Wireshark 中直接解析所捕获数据包的 extcap 插件，以及一个独立的 Auracast Packet Visualizer 网页应用，用于按时间线检视 PDU。该系列建立在 ERNW 于 2025 年 1 月发布的第一篇（作者 Dennis Heinze 与 Frieder Steinmetz）之上，第一篇覆盖了 Auracast 的 Broadcast Code 机制，并发布了暴力破解工具 "biscrack"。

## Key technical points (EN)

- Problem addressed: the host/controller boundary in a standard Bluetooth stack hides retransmitted/pre-transmitted PDUs from the OS — only reassembled, already-valid audio reaches software above the controller.
- Method: patched Zephyr RTOS BLE controller firmware on Nordic nRF52840 USB dongles to forward raw Link Layer packets instead of reassembled audio.
- Measured redundancy (Samsung Galaxy S23 as the Auracast source): one retransmission + one pre-transmission per original PDU (3x the minimum PDU count), across 18 subevents per BIG event.
- Capture quality: a "greedy" mode capturing all three PDU copies achieves "pretty good" coverage with only occasional drops.
- Two distinct encryption-related problems: (1) the controller normally discards encrypted PDUs it can't MIC-verify without the Broadcast Code — fixed by patching the controller to skip the MIC check; (2) the sniffer can't decrypt BIG_CHANNEL_MAP_IND control PDUs, so it misses channel-map updates, derives a wrong hopping sequence, and gradually loses sync — a planned fix reads the current channel map from the always-plaintext BIGInfo instead.
- Tools released: Auracast Hacker's Toolkit (updated, dual-serial sniffing/scanning/dumping), a Wireshark extcap plugin, and a standalone Auracast Packet Visualizer web app.
- Prior work: builds on ERNW's Part I (Dennis Heinze and Frieder Steinmetz, January 2025), which covered the Auracast Broadcast Code and released the "biscrack" brute-force tool.

## Key technical points (ZH)

- 要解决的问题：标准蓝牙协议栈中主机/控制器的分界，会对操作系统隐藏重传与预传输的 PDU——只有已重组、校验通过的音频才会到达控制器之上的软件。
- 方法：对运行在 Nordic nRF52840 USB 加密狗上的 Zephyr RTOS 蓝牙低功耗控制器固件打补丁，使其转发原始链路层数据包，而非重组后的音频。
- 实测冗余度（以三星 Galaxy S23 作为 Auracast 广播源）：每个原始 PDU 额外有一次重传加一次预传输（是最低所需 PDU 数量的 3 倍），分布在每个 BIG 事件的 18 个子事件中。
- 抓取质量：采集全部三份副本的"贪婪"模式可获得"相当不错"的覆盖率，只偶尔丢包。
- 加密带来两个独立问题：（1）控制器在不知道 Broadcast Code 的情况下无法对加密 PDU 完成 MIC 校验，通常会将其丢弃——解决办法是为控制器打补丁使其跳过 MIC 校验；（2）嗅探器无法解密 BIG_CHANNEL_MAP_IND 控制 PDU，因而会错过信道映射更新、推导出错误的跳频序列并逐渐失步——计划中的修复方案是改为从始终明文的 BIGInfo 中读取当前信道映射。
- 发布的工具：更新版 Auracast Hacker's Toolkit（双串口嗅探/扫描/转储）、一个 Wireshark extcap 解析插件，以及独立的 Auracast Packet Visualizer 网页应用。
- 前序工作：建立在 ERNW 于 2025 年 1 月发布的第一篇（作者 Dennis Heinze 与 Frieder Steinmetz）之上，该篇覆盖了 Auracast 的 Broadcast Code 机制，并发布了暴力破解工具 "biscrack"。

## Why it matters / what's new (EN)

The KB's existing Auracast mentions have been brief, in-passing references within standards- and product-facing entries (the Bluetooth Core 6.3 spec release note on Auracast-adjacent positioning; the NearLink Starlink E2.0 audio entry positioning it against Auracast on lossless quality) rather than dedicated Auracast coverage. This is the first entry documenting independent, tool-releasing security research into Auracast at the radio/Link-Layer level — a different kind of scrutiny than a spec mention or a product comparison, and the kind of open tooling (a patched open-source controller, a Wireshark plugin) that lowers the bar for anyone else who wants to inspect or audit Auracast broadcasts in the field.

## Why it matters / what's new (ZH)

知识库此前提及 Auracast 之处，均是标准与产品类条目中的简短带过（蓝牙核心 6.3 规范条目中关于 Auracast 邻近定位用例的说明；NearLink 星闪 E2.0 音频条目将其与 Auracast 在无损音质上作对比），而非专门的 Auracast 报道。本条目是第一条记录了针对 Auracast 的独立安全研究、且随文发布配套工具的条目，其审视角度（射频/链路层）不同于规范提及或产品对比，而所发布的开放工具（打过补丁的开源控制器固件、Wireshark 插件）也降低了其他人在实地检视或审计 Auracast 广播的门槛。

## Images

None.
