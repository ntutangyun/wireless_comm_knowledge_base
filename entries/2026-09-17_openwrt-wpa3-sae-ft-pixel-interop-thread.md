---
id: 2026-09-17_openwrt-wpa3-sae-ft-pixel-interop-thread
date_published: 2026-09-16
date_found: 2026-09-17
type: community-signal
technology: wifi
title_en: "OpenWrt forum isolates a Pixel 8 WPA3 failure to the SAE + 802.11r combination after the Android 17 September update; the fix set makes GCMP-256 and SAE-EXT-KEY opt-in outside EHT compatibility mode"
title_zh: "OpenWrt 论坛将 Android 17 九月更新后 Pixel 8 的 WPA3 连接失败定位到 SAE 与 802.11r 的组合；修复补丁把 GCMP-256 和 SAE-EXT-KEY 在 EHT 兼容模式之外改为默认关闭"
url: "https://forum.openwrt.org/t/google-pixel-phones-wi-fi-encryption-wpa3-sae-problems/251780"
source_quality: full
topics: [WPA3, SAE, 802.11r, fast-transition, GCMP-256, SAE-EXT-KEY, hostapd, OpenWrt, interoperability]
topic_primary: security-privacy
topics_secondary: [roaming-mobility]
novelty_score: 2
---

## Summary (EN)

An OpenWrt forum thread that began on 2026-07-10 as a workaround post for a Google Pixel 10a refusing to authenticate against an OpenWrt access point in WPA2/WPA3 transition mode (`sae-mixed`) was revived on 2026-09-16 with a new failure after Google's Android 17 September (QPR1) Pixel update. One user reports that a Pixel 8 that had been connecting to a GL.iNet MT6000 on OpenWrt 25.12.5 (r33051) stopped connecting to a WPA3-only (`sae`) network with 802.11r fast transition, 802.11k and 802.11v enabled, while a Pixel 7a on the same access point kept working; another reports a Pixel 10a on the same day's update connecting without issues. A Pixel 8 Pro owner then narrows the failure with a three-way test: SAE (`sae-mixed`) with 802.11r enabled fails, with "did not acknowledge authentication response" in the hostapd log; SAE with 802.11r disabled works; WPA2-PSK (`psk2`) with 802.11r enabled works. On that setup it is specifically the SAE + fast-transition combination that breaks, not fast transition alone and not SAE alone.

The thread's maintainer replies point to a specific patch series as the likely fix. OpenWrt pull request #23009 ("Improve WPA 3 compatibility and add additional options", merged to main on 2026-05-02 and backported to the 25.12 branch as #23011 on 2026-07-21) states that it activates features that are mandatory in Wi-Fi 7 and makes optional ones user-configurable, and that this "should fix some compatibility problems we see with Pixel 10 and other wifi devices": GCMP-256 is only activated in EHT by default, the SAE-EXT-KEY AKM is advertised on EHT APs, and beacon protection is enabled by default with PMF. The follow-up #24041 ("wifi-scripts: ucode: disable options with interoperability problems", merged 2026-07-06) documents what went wrong with the first set: advertising GCMP-256 by default caused several clients to fail to associate and connect again with CCMP only (it names Nanoleaf devices, a Motorola/Unisoc phone and a Linux/iwd laptop), and the FT-SAE-EXT-KEY AKM that is added automatically once fast transition is enabled kept a Samsung Galaxy Tab S10 FE from associating and made a Poco X6 reboot shortly after connecting. The follow-up adds `gcmp256` and `sae_ext_key` UCI options and defaults both on only where the WPA3 Specification v3.5 makes them mandatory and where they are carried in a separate RSN Override element that legacy clients ignore, i.e. Compatibility mode (`sae-compat`) BSSes on an EHT htmode; both default off for WPA3-Personal (`sae`) and Transition (`sae-mixed`) mode and on non-EHT BSSes. It also gates GCMP-256 on the driver actually advertising the cipher suite via nl80211.

The thread's practical advice, as given by its regulars: do not use `sae-mixed` at all but either `sae-compat` or two separate SSIDs for WPA2 and WPA3; the earlier `sae-mixed+ccmp` cipher-forcing workaround did not help the original poster's Pixel 10a on a MediaTek MT79xx-based Cudy RE3000; and for users still on the 25.12.5 release, which does not carry the later fixes, `option wpa_pairwise 'CCMP'` and `option sae_ext_key 0` are suggested as config-level mitigations, with a pointer to a second thread (Dynalink DL-WRX36 / IPQ8072A) where the same change helped a Pixel 9a. Engagement at fetch time: 18 posts, 855 views, 15 likes.

## Summary (ZH)

一条始于 2026-07-10 的 OpenWrt 论坛帖子，最初是一篇针对 Google Pixel 10a 在 WPA2/WPA3 过渡模式（`sae-mixed`）下拒绝向 OpenWrt 接入点认证的绕过方法记录；2026-09-16，该帖在 Google 的 Android 17 九月（QPR1）Pixel 更新后因一个新故障而复活。一位用户报告，原本能正常连接 GL.iNet MT6000（OpenWrt 25.12.5，r33051）的 Pixel 8，在开启了 802.11r 快速切换、802.11k 与 802.11v 的纯 WPA3（`sae`）网络上无法再连接，而同一接入点上的 Pixel 7a 依然正常；另一位用户报告更新到同一天版本的 Pixel 10a 连接无异常。随后一位 Pixel 8 Pro 用户用三组对照试验缩小了范围：SAE（`sae-mixed`）加开启 802.11r 失败，hostapd 日志中出现 "did not acknowledge authentication response"；SAE 不开 802.11r 正常；WPA2-PSK（`psk2`）加开启 802.11r 正常。在该环境下，出问题的正是 SAE 与快速切换的组合，而不是单独的快速切换或单独的 SAE。

帖子中维护者的回复把可能的修复指向一组具体补丁。OpenWrt 拉取请求 #23009（"Improve WPA 3 compatibility and add additional options"，2026-05-02 合入 main，2026-07-21 以 #23011 回合到 25.12 分支）说明它启用了 Wi-Fi 7 中强制的特性并把可选项交给用户配置，并称这"应能修复我们在 Pixel 10 和其他 Wi-Fi 设备上看到的一些兼容性问题"：GCMP-256 默认只在 EHT 中启用、在 EHT 接入点上通告 SAE-EXT-KEY AKM、在启用 PMF 时默认开启信标保护。后续的 #24041（"wifi-scripts: ucode: disable options with interoperability problems"，2026-07-06 合入）记录了第一组补丁带来的问题：默认通告 GCMP-256 导致多种终端无法关联、只提供 CCMP 时又能连上（它点名了 Nanoleaf 设备、一台 Motorola/Unisoc 手机和一台 Linux/iwd 笔记本），而一旦开启快速切换就会自动加入的 FT-SAE-EXT-KEY AKM 使一台三星 Galaxy Tab S10 FE 无法关联、并让一台 Poco X6 在连接后不久重启。该后续补丁新增了 `gcmp256` 与 `sae_ext_key` 两个 UCI 选项，并且只在 WPA3 规范 v3.5 将其列为强制、且它们位于旧终端会忽略的独立 RSN Override 元素中的场合默认开启，即运行 EHT htmode 的兼容模式（`sae-compat`）BSS；在 WPA3-Personal（`sae`）与过渡模式（`sae-mixed`）下、以及非 EHT 的 BSS 上，两者均默认关闭。它还把 GCMP-256 的通告限制在驱动通过 nl80211 实际报告支持该密码套件的情况下。

帖子常客给出的实用建议是：干脆不要用 `sae-mixed`，改用 `sae-compat` 或为 WPA2 和 WPA3 分别设置两个 SSID；早先"强制 CCMP"（`sae-mixed+ccmp`）的绕过办法对楼主那台基于联发科 MT79xx 的 Cudy RE3000 上的 Pixel 10a 无效；对于仍在使用不含后续修复的 25.12.5 正式版的用户，建议在配置层面尝试 `option wpa_pairwise 'CCMP'` 与 `option sae_ext_key 0`，并指向另一条帖子（Dynalink DL-WRX36 / IPQ8072A），其中同样的改动解决了一台 Pixel 9a 的问题。抓取时的参与度：18 条回复、855 次浏览、15 个赞。

## Key technical points (EN)

- **Symptom (Sept 2026)**: after the Android 17 September (QPR1) Pixel update, a Pixel 8 stops joining a WPA3-only OpenWrt 25.12.5 network with 802.11r/k/v enabled; a Pixel 7a on the same AP is unaffected; a Pixel 10a on the same update connects normally.
- **Isolation**: on a Pixel 8 Pro, `sae-mixed` + 802.11r fails ("did not acknowledge authentication response" in hostapd), `sae-mixed` without 802.11r works, `psk2` + 802.11r works.
- **Original symptom (July 2026)**: a Pixel 10a in `sae-mixed` does not attempt authentication at all and shows "check password" for any PSK; forcing CCMP alone (`sae-mixed+ccmp`) did not fix it on a MediaTek MT79xx-based AP.
- **Fix set**: PR #23009 (main 2026-05-02; 25.12 backport #23011 2026-07-21) and PR #24041 (main 2026-07-06). #24041 adds `gcmp256` and `sae_ext_key` UCI options and defaults both on only for `sae-compat` BSSes on an EHT htmode, off for `sae` and `sae-mixed` and on non-EHT BSSes; GCMP-256 is also gated on the phy advertising cipher suite 00-0F-AC:9 via nl80211.
- **Named interoperability failures in the PR text**: GCMP-256 offered as pairwise cipher: Nanoleaf devices, a Motorola/Unisoc phone, a Linux/iwd laptop fail to associate; FT-SAE-EXT-KEY AKM: Samsung Galaxy Tab S10 FE cannot associate, Poco X6 reboots after connecting.
- **Standards basis cited**: WPA3 Specification v3.5 makes GCMP-256 and SAE-EXT-KEY mandatory only when the BSS enables EHT or MLO; for HE and below they are recommended.
- **Mitigations given in-thread**: avoid `sae-mixed` (use `sae-compat` or split SSIDs); on 25.12.5, try `option wpa_pairwise 'CCMP'` and/or `option sae_ext_key 0`.

## Key technical points (ZH)

- **症状（2026 年 9 月）**：Android 17 九月（QPR1）Pixel 更新后，一台 Pixel 8 无法再加入开启了 802.11r/k/v 的纯 WPA3 OpenWrt 25.12.5 网络；同一接入点上的 Pixel 7a 不受影响；同一更新的 Pixel 10a 正常连接。
- **定位**：在 Pixel 8 Pro 上，`sae-mixed` 加 802.11r 失败（hostapd 报 "did not acknowledge authentication response"），`sae-mixed` 不开 802.11r 正常，`psk2` 加 802.11r 正常。
- **最初症状（2026 年 7 月）**：Pixel 10a 在 `sae-mixed` 下完全不尝试认证，任何密码都提示"请检查密码"；在基于联发科 MT79xx 的接入点上单独强制 CCMP（`sae-mixed+ccmp`）无效。
- **修复补丁**：PR #23009（main 2026-05-02；25.12 回合 #23011 2026-07-21）与 PR #24041（main 2026-07-06）。#24041 新增 `gcmp256` 与 `sae_ext_key` UCI 选项，仅对运行 EHT htmode 的 `sae-compat` BSS 默认开启，对 `sae`、`sae-mixed` 及非 EHT BSS 默认关闭；GCMP-256 还需 phy 通过 nl80211 报告支持密码套件 00-0F-AC:9。
- **PR 文本中点名的互操作故障**：把 GCMP-256 作为成对密码套件提供时，Nanoleaf 设备、一台 Motorola/Unisoc 手机、一台 Linux/iwd 笔记本无法关联；FT-SAE-EXT-KEY AKM 使三星 Galaxy Tab S10 FE 无法关联、Poco X6 连接后重启。
- **引用的标准依据**：WPA3 规范 v3.5 仅在 BSS 启用 EHT 或 MLO 时把 GCMP-256 与 SAE-EXT-KEY 列为强制；HE 及以下为推荐。
- **帖内给出的缓解办法**：避免 `sae-mixed`（改用 `sae-compat` 或拆分 SSID）；在 25.12.5 上尝试 `option wpa_pairwise 'CCMP'` 和/或 `option sae_ext_key 0`。

## Why it matters / what's new (EN)

What is new on 2026-09-16 is a clean, reproducible isolation of a post-update regression to one protocol combination (SAE together with 802.11r fast transition) on a named phone and OS build, with a hostapd log line to match, plus the observation that sibling Pixel models on the same update behave differently. Read together with the two pull requests the thread cites, it documents a concrete interoperability problem of the WPA3 transition period: the access point advertises the cipher and AKM set the Wi-Fi 7 profile requires (GCMP-256, SAE-EXT-KEY, and FT-SAE-EXT-KEY once roaming is on), and a range of pre-EHT clients respond by failing to associate, by refusing to attempt authentication, or in one case by rebooting. OpenWrt's response, moving those elements to an RSN Override element in compatibility mode and defaulting them off elsewhere, is now in its snapshots but not yet in the 25.12.5 release that the affected users run, so the thread is also a record of the gap between a merged fix and a shipped one. It is worth watching for the same SAE + FT symptom reported against vendor firmware after the same Pixel update, which would say whether the trigger is on the client side or in the default set the AP offers.

## Why it matters / what's new (ZH)

2026-09-16 的新内容，是把一个系统更新后出现的回退问题干净、可复现地定位到一个协议组合（SAE 与 802.11r 快速切换同时开启），并附上具体机型、系统版本和对应的 hostapd 日志行，同时观察到同一更新下的同系列 Pixel 机型表现不同。结合帖子引用的两个拉取请求来看，它记录了 WPA3 过渡期一个具体的互操作问题：接入点按 Wi-Fi 7 规范要求通告了密码套件和 AKM 集合（GCMP-256、SAE-EXT-KEY，以及开启漫游后的 FT-SAE-EXT-KEY），而一系列 EHT 之前的终端对此的反应是无法关联、拒绝尝试认证，甚至在一个案例中重启。OpenWrt 的应对——把这些元素放进兼容模式下的 RSN Override 元素、在其他模式下默认关闭——已经进入快照版本，但尚未进入受影响用户使用的 25.12.5 正式版，因此这条帖子同时也记录了"修复已合入"与"修复已发布"之间的落差。值得关注的是同一 Pixel 更新后，厂商固件上是否也出现同样的 SAE 加 FT 症状，这将说明触发点在客户端一侧还是在接入点默认通告的集合上。

## Images

None.
