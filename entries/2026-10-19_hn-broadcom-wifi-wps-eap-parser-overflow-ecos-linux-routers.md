---
id: 2026-10-19_hn-broadcom-wifi-wps-eap-parser-overflow-ecos-linux-routers
date_published: 2026-10-16
date_found: 2026-10-19
type: community-signal
technology: wifi
title_en: "Hexacon talk details a remotely triggerable 802.11 WPS parsing flaw in Broadcom's access-point SDK, found on ISP gateways in Belgium"
title_zh: "Hexacon 演讲披露博通接入点 SDK 中可远程触发的 802.11 WPS 解析漏洞，比利时运营商网关受影响"
url: "https://news.ycombinator.com/item?id=50122058"
source_quality: partial
topics: [Broadcom, WPS, EAP reassembly, eCos, access point security, ISP gateway, responsible disclosure, vulnerability research]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

A Hacker News thread (about 50 points, 9 comments, posted 2026-10-16) links the long-form write-up of a talk given at Hexacon in Paris on 2026-10-16 by researcher Quentin Kaiser, titled "One Parser, Two Bugs, Many Routers: Exploiting Broadcom WiFi Across eCos and Linux". According to the write-up, the flaw is in Broadcom's proprietary 802.11 implementation in its access-point SDK (a WPS EAP reassembly overflow), described as present since at least 2010, with an incomplete fix in 2018. It lists eCos-based platforms (BCM3380, BCM3383, BCM33834) and Linux-based platforms (BCM3390, BCM65xx, BCM68xx) as affected.

The author states that it can be triggered remotely over Wi-Fi without knowing the network key and without completing a normal WPS enrollment, and that it gives controlled information disclosure and arbitrary code execution. He reports demonstrating it on gateways of three of four Belgian ISPs (Proximus BBOX 3V+, several VOO models, Orange Belgium ASKEY TCG3000), and says none of these devices were fixed as of 2026-10-15. Per the write-up, Broadcom answered that a fix is available and declined to assign a CVE; the author followed a 90-day disclosure timeline that started on 2026-07-18. HN commenters mainly discuss the affected-unit estimate and Broadcom's stated position.

## Summary (ZH)

一条 Hacker News 帖子（约 50 分、9 条评论，发布于 2026-10-16）链接了研究者 Quentin Kaiser 于 2026-10-16 在巴黎 Hexacon 大会上所作演讲的长文版本，题为"One Parser, Two Bugs, Many Routers: Exploiting Broadcom WiFi Across eCos and Linux"。文章称漏洞位于博通接入点 SDK 的专有 802.11 实现中（WPS EAP 重组溢出），据称至少自 2010 年起就已存在，2018 年发布过不完整的修复。受影响平台包括基于 eCos 的 BCM3380、BCM3383、BCM33834，以及基于 Linux 的 BCM3390、BCM65xx、BCM68xx。

作者称，该漏洞可经 Wi-Fi 远程触发，无需知道网络密钥，也无需完成正常的 WPS 配网，可造成受控信息泄露和任意代码执行。他称已在比利时四家运营商中三家的网关上完成演示（Proximus BBOX 3V+、VOO 的多款型号、Orange Belgium 的 ASKEY TCG3000），并称截至 2026-10-15 这些设备均未修复。文章称博通回复修复已提供但不予分配 CVE；作者采用 90 天披露期，自 2026-07-18 起算。HN 评论主要围绕受影响设备数量的估算以及博通的表态。

## Key technical points (EN)

- Component: Broadcom's proprietary 802.11 stack as shipped in its access-point SDK; bug class per the write-up is an overflow when reassembling WPS EAP messages. Two reports were filed (one for the eCos platforms, one for the Linux platforms).
- Attack surface: pre-authentication, over the air; no PSK needed and no completed WPS enrollment. The author's demos run shellcode that returns the PSK over 802.11 frames, and a reverse shell carried over 802.11 frames.
- Scope claims (the author's own estimates, medium confidence per the write-up): roughly 850,000 Proximus, 500,000 VOO and 210,000 Orange Belgium gateways; Telenet unconfirmed. The author asks for help documenting affected vendors and publishes a fingerprinting script and YARA rule.
- Vendor position per the write-up: Broadcom said a fix exists and, per the author, recommended moving to hostapd instead, and declined to register a CVE; a CERT/CC case was closed on that basis.

## Key technical points (ZH)

- 组件：博通接入点 SDK 中自带的专有 802.11 协议栈；据文章，漏洞类型为重组 WPS EAP 消息时的溢出。作者提交了两份报告（分别对应 eCos 平台和 Linux 平台）。
- 攻击面：认证前、空口可达；无需 PSK，也无需完成 WPS 配网。作者的演示中，shellcode 通过 802.11 帧回传 PSK，并通过 802.11 帧承载反向 shell。
- 影响范围（作者自己的估算，文中标注为中等置信度）：Proximus 约 85 万、VOO 约 50 万、Orange Belgium 约 21 万台网关；Telenet 尚未确认。作者发布了指纹识别脚本和 YARA 规则，邀请大家协助统计受影响的厂商。
- 厂商立场（据文章）：博通称已有修复，并（据作者）建议改用 hostapd，并拒绝登记 CVE；CERT/CC 案件因此被关闭。

## Why it matters / what's new (EN)

This is a researcher's own disclosure, relayed by HN; the affected-device numbers, the 2010 origin and the account of Broadcom's replies are the author's statements and were not independently verified here. What it adds to the knowledge base is a documented example of a pre-authentication parsing bug in a vendor 802.11 stack that sits inside ISP-supplied gateways, where the update path runs through the ISP and the OEM rather than the chip vendor. The author argues that Broadcom's refusal to assign a CVE or communicate publicly is probably why so many OEMs did not ship the fix.

## Why it matters / what's new (ZH)

这是研究者本人的披露，经 HN 转载；受影响设备数量、2010 年起源以及对博通回复的转述均为作者陈述，此处未做独立核实。它给知识库增加的是一个有据可查的实例：厂商 802.11 协议栈中存在认证前即可触发的解析漏洞，且位于运营商提供的网关内，其更新路径要经过运营商和 OEM，而非芯片厂商。作者认为，博通拒绝分配 CVE、也未公开通报，很可能是众多 OEM 未打补丁的原因。

## Images

None.
