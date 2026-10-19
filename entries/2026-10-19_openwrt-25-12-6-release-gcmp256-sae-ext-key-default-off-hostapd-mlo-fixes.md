---
id: 2026-10-19_openwrt-25-12-6-release-gcmp256-sae-ext-key-default-off-hostapd-mlo-fixes
date_published: 2026-10-18
date_found: 2026-10-19
type: community-signal
technology: wifi
title_en: "OpenWrt 25.12.6 stops offering GCMP-256 and SAE-EXT-KEY by default after about 15% of clients proved incompatible, and fixes hostapd Wi-Fi 7 MLO parsing flaws"
title_zh: "OpenWrt 25.12.6 默认不再提供 GCMP-256 与 SAE-EXT-KEY（约 15% 终端不兼容），并修复 hostapd 的 Wi-Fi 7 MLO 解析漏洞"
url: "https://forum.openwrt.org/t/openwrt-25-12-6-service-release/254604"
source_quality: full
topics: [OpenWrt, WPA3, GCMP-256, SAE-EXT-KEY, 802.11r, hostapd, MLO, client interoperability, security release]
topic_primary: security-privacy
topics_secondary: [mlo, roaming-mobility]
novelty_score: 3
---

## Summary (EN)

The OpenWrt forum announcement of the sixth service release of the 25.12 stable series (posted 2026-10-18) lists two Wi-Fi items among its main changes. First, a default change: releases 25.12.0 to 25.12.5 offered the GCMP-256 pairwise cipher and, in some configurations, the SAE-EXT-KEY key management (SAE-GDH) on WPA3 networks with Wi-Fi 6 (HE) or Wi-Fi 7 (EHT), but not as the Wi-Fi Alliance deployment guide describes. The announcement says this caused connection problems, for example with Pixel 10 phones and with 802.11r Fast Transition. From 25.12.6, GCMP-256 and SAE-EXT-KEY are no longer offered by default in `sae` and `sae-mixed` modes (only CCMP and plain SAE), the `rsn_override` option is removed, and a new `sae-compat` mode ("WPA2-PSK/WPA3-SAE Compatibility Mode" in LuCI) is added as a fallback if some clients have problems with `sae` or `sae-mixed`.

Second, security fixes: the release picks up the hostapd security advisory 2026-1 for missing validation when parsing Multi-Link Element information (invalid management frames sent without authentication could crash hostapd or wpa_supplicant or cause small memory corruption; in AP mode only Wi-Fi 7 capable setups are affected, while in client mode wpa_supplicant is affected in general), plus a NULL-pointer fix in APuP beacon handling (disabled by default) and an EAP server certificate subject check fix in Mbed TLS builds. The release also updates uhttpd, Mbed TLS, OpenSSL, wolfSSL and the Linux kernel (6.12.112) for further vulnerabilities. Early replies report successful upgrades on several devices and one report of dead Ethernet ports on two Linksys MX5500 units.

## Summary (ZH)

OpenWrt 论坛发布的 25.12 稳定系列第六个维护版本公告（2026-10-18）在主要变更中列出两项与 Wi-Fi 相关的内容。其一是默认值调整：25.12.0 至 25.12.5 在支持 Wi-Fi 6（HE）或 Wi-Fi 7（EHT）的 WPA3 网络上提供 GCMP-256 成对密码套件，并在部分配置下提供 SAE-EXT-KEY 密钥管理（SAE-GDH），但方式与 Wi-Fi 联盟部署指南的描述不一致。公告称这导致了连接问题，例如 Pixel 10 手机以及 802.11r 快速切换场景。自 25.12.6 起，`sae` 与 `sae-mixed` 模式默认不再提供 GCMP-256 和 SAE-EXT-KEY（仅 CCMP 与普通 SAE），移除 `rsn_override` 选项，并新增 `sae-compat` 模式（LuCI 中为"WPA2-PSK/WPA3-SAE 兼容模式"）供部分终端在 `sae` 或 `sae-mixed` 下出现问题时使用。

其二是安全修复：该版本纳入了 hostapd 安全公告 2026-1，修复解析多链路元素（MLE）信息时缺少校验的问题（未经认证发送的无效管理帧可导致 hostapd 或 wpa_supplicant 崩溃或造成小范围内存破坏；AP 模式下仅支持 Wi-Fi 7 的配置受影响，客户端模式下 wpa_supplicant 普遍受影响），以及 APuP 信标处理中的空指针问题（默认关闭）和 Mbed TLS 构建中 EAP 服务器证书主题检查的问题。该版本还更新了 uhttpd、Mbed TLS、OpenSSL、wolfSSL 和 Linux 内核（6.12.112）以修复其他漏洞。早期回帖中多位用户报告升级顺利，另有用户称两台 Linksys MX5500 升级后有线网口失效。

## Key technical points (EN)

- Stated reason for the default change: when the Wi-Fi Alliance-recommended configuration was enabled in the development branch, about 15% of client devices in use proved incompatible. Named examples: some clients (Nanoleaf devices, a Motorola/Unisoc phone, Linux laptops using iwd) fail to connect when GCMP-256 is offered, already on Wi-Fi 6; with 802.11r enabled, FT-SAE-EXT-KEY prevents some clients connecting (Galaxy Tab S10 FE) or makes them reboot shortly after connecting (Poco X6).
- The announcement notes that the WPA3 specification makes GCMP-256 and SAE-EXT-KEY mandatory for Wi-Fi 7 and recommends them otherwise; the release notes describe the reworked defaults as following the WPA3 specification and deployment guide, while leaving the two options available as opt-in. It points to a hostap mailing-list discussion (July 2026) and OpenWrt pull request 23009 for details.
- `sae-compat` mode: WPA2 clients see a normal WPA2 network, while clients that support RSN overriding use WPA3.
- hostapd advisory 2026-1: bounds and link-ID validation fixes in Basic Multi-Link Element parsing and association-rejection handling (the upstream advisory, published 2026-06-05, lists eight upstream commits and provides five patches rebased onto v2.11).

## Key technical points (ZH)

- 默认值调整的理由：在开发分支启用 Wi-Fi 联盟推荐配置后发现，约 15% 在用终端不兼容。公告列举的例子：部分终端（Nanoleaf 设备、一款 Motorola/Unisoc 手机、使用 iwd 的 Linux 笔记本）在提供 GCMP-256 时无法连接，且在 Wi-Fi 6 下就会出现；开启 802.11r 后，FT-SAE-EXT-KEY 会使部分终端无法连接（Galaxy Tab S10 FE），或在连接后不久重启（Poco X6）。
- 公告指出，WPA3 规范对 Wi-Fi 7 强制要求 GCMP-256 和 SAE-EXT-KEY，对其他情形则为推荐；发布说明称新的默认值是按照 WPA3 规范和部署指南重新调整的，这两项选项仍可手动开启。细节见 hostap 邮件列表（2026 年 7 月）的讨论和 OpenWrt 拉取请求 23009。
- `sae-compat` 模式：WPA2 终端看到的是普通 WPA2 网络，支持 RSN 覆盖的终端则使用 WPA3。
- hostapd 公告 2026-1：修复基本多链路元素解析及关联拒绝处理中的边界与链路 ID 校验问题（上游公告发布于 2026-06-05，列出八个上游提交，并提供五个基于 v2.11 重定基的补丁）。

## Why it matters / what's new (EN)

This is a release announcement posted by the project's maintainers on the community forum; the 15% figure and the client list are their statement and were not independently measured here. It is a public data point on how many deployed clients fail on the WPA3 options that the WPA3 specification makes mandatory for Wi-Fi 7, and it shows an open-source AP stack choosing to withhold those options by default. It follows the September forum thread on Pixel phones failing against WPA3 and 802.11r, which is already in the knowledge base, and it records the hostapd 2026-1 multi-link parsing fixes reaching a shipping firmware release. The hostapd advisory dates from June 2026 and the release from 2026-10-18.

## Why it matters / what's new (ZH)

这是项目维护者在社区论坛发布的版本公告；15% 这一比例及终端名单为其陈述，此处未做独立测量。它提供了一个公开数据点：WPA3 规范对 Wi-Fi 7 强制要求的选项在已部署终端上有多大比例会失败；同时也显示开源 AP 协议栈选择默认不提供这些选项。它承接了知识库中已有的、关于 Pixel 手机在 WPA3 与 802.11r 下连接失败的 9 月论坛帖子，并记录了 hostapd 2026-1 多链路解析修复进入正式固件版本。hostapd 公告发布于 2026 年 6 月，该版本发布于 2026-10-18。

## Images

None.
