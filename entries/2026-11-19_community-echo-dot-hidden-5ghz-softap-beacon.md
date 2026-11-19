---
id: 2026-11-19_community-echo-dot-hidden-5ghz-softap-beacon
date_published: 2026-11-13
date_found: 2026-11-19
type: community-signal
technology: wifi
title_en: "Field report: a 5th-gen Echo Dot beacons a hidden, encrypted 5 GHz network on channel 149 that stays up with Amazon Sidewalk turned off"
title_zh: "社区实测：第五代 Echo Dot 在 5 GHz 149 信道上广播一个隐藏的加密网络，关闭 Amazon Sidewalk 后依然存在"
url: "https://tonym.us/amazon-echo-hidden-wifi-network.html"
source_quality: full
topics: [hidden SSID, SoftAP, beacon, locally administered MAC, smart speaker, RF monitoring, Amazon Echo]
topic_primary: security-privacy
topics_secondary: [wifi7-deployment]
novelty_score: 2
---

## Summary (EN)

A home-network blogger (Tony Metzidis, post dated 2026-11-13; linked on Hacker News on 2026-11-18) noticed two unknown BSSIDs with an empty SSID on the same 5 GHz channel as his own access points, and traced one of them (`62:45:b8:ec:07:a7`) to a 5th-generation Echo Dot. He used a Raspberry Pi 4 with a monitor-mode USB adapter (rtw88_8822bu), Kismet and `iw ... scan`, lists `nmcli` commands for others to check, and ruled out other devices one by one (mesh already disabled, a printer, a Fire TV Stick). Unplugging the Echo removed the BSSID from scan results within about 30 seconds; plugging it back in restored it. The beacon kept running after Amazon Sidewalk was disabled.

The author attributes three functions to the network, which he describes as a virtual SoftAP, citing unlinked Amazon filings and developer documentation: Wi-Fi provisioning of new devices (Frustration-Free Setup), multi-Echo wake-word arbitration, and Wi-Fi Direct links for stereo/home-theatre pairing. Amazon has not confirmed this. He reports finding no setting to disable it, and says he has reported it to Amazon support.

## Summary (ZH)

一位家庭网络博主（Tony Metzidis，文章日期 2026-11-13；2026-11-18 被转到 Hacker News）在自己接入点所在的 5 GHz 信道上发现两个 SSID 为空的陌生 BSSID，并将其中一个（`62:45:b8:ec:07:a7`）追查到一台第五代 Echo Dot。他用一台接了监听模式 USB 网卡（rtw88_8822bu）的树莓派 4，配合 Kismet 和 `iw ... scan`，给出了供读者自查的 `nmcli` 命令，并逐一排除其他设备（Mesh 早已关闭、打印机、Fire TV Stick）。拔掉 Echo 后约 30 秒该 BSSID 从扫描结果中消失，重新插上又出现。关闭 Amazon Sidewalk 后信标仍在发送。

作者引用未给出链接的亚马逊公开文件与开发者文档，认为这是一个虚拟 SoftAP（软 AP，设备自身模拟出的接入点），承担三项功能：为新设备配网（Frustration-Free Setup）、多台 Echo 间的唤醒词仲裁，以及用于立体声/家庭影院配对的 Wi-Fi Direct 链路；亚马逊未予证实。他表示没有找到可以关闭它的设置，并已向亚马逊客服反馈。

## Key technical points (EN)

- Observed network: hidden SSID, 5 GHz channel 149 (5745 MHz), encrypted (ESS Privacy, CCMP, PSK), beacon interval 100 TU.
- Two BSSIDs seen, `62:45:b8:ec:07:a7` (−46 dBm) and `62:45:b8:7c:b9:7e` (−72 dBm). The author notes the prefix is not in IEEE OUI listings and reads it as a locally administered address derived from the Echo's `60:45:b8` vendor prefix by setting the U/L bit.
- Author-stated airtime: about 0.1–0.3% channel utilization.
- Not confirmed: the interface names (`p2p0` / `ap0`) and whether the SoftAP shares the radio with the client connection.
- Author's workarounds: put Echo devices on a 2.4 GHz IoT SSID so the beacon leaves 5 GHz, and add the locally administered prefix to the controller's rogue-AP allowlist.

## Key technical points (ZH)

- 观测到的网络：隐藏 SSID，5 GHz 149 信道（5745 MHz），加密（ESS Privacy、CCMP、PSK），信标间隔 100 TU。
- 观测到两个 BSSID：`62:45:b8:ec:07:a7`（−46 dBm）和 `62:45:b8:7c:b9:7e`（−72 dBm）。作者指出该前缀不在 IEEE OUI 列表中，并判断它是由 Echo 的厂商前缀 `60:45:b8` 置位 U/L 比特得到的本地管理地址。
- 作者称其占用信道约 0.1–0.3%。
- 未经证实：接口名（`p2p0` / `ap0`），以及该 SoftAP 是否与客户端连接共用同一射频。
- 作者给出的应对办法：把 Echo 设备接到 2.4 GHz 的 IoT SSID 上，让信标离开 5 GHz；并把这一本地管理地址前缀加入控制器的非法 AP 白名单。

## Why it matters / what's new (EN)

It is a step-by-step, tool-documented observation that a mass-market smart speaker runs an always-on hidden 5 GHz BSS alongside its client link, on whatever channel the home network uses, with no user control. For anyone running rogue-AP detection or auditing channel occupancy, it shows up as an unknown hidden network with a non-registered MAC prefix. The observation itself is one user's measurement on one device; the functions attributed to the network are unconfirmed by Amazon.

## Why it matters / what's new (ZH)

这是一份步骤与工具过程完整的观测：一款大众市场的智能音箱在客户端连接之外，常驻运行一个隐藏的 5 GHz BSS，所在信道跟随家庭网络，用户无法控制。对做非法 AP 检测或信道占用审计的人来说，它表现为一个带未注册 MAC 前缀的陌生隐藏网络。该观测来自一位用户在一台设备上的测量；网络的用途未获亚马逊证实。

## Images

None.
