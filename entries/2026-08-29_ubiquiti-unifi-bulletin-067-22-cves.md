---
id: 2026-08-29_ubiquiti-unifi-bulletin-067-22-cves
date_published: 2026-08-26
date_found: 2026-08-29
technology: wifi
type: industry-news
title_en: "Ubiquiti Security Advisory Bulletin 067: 22 UniFi CVEs, three at CVSS 10.0, nine of them in the Wi-Fi control plane"
title_zh: "Ubiquiti 067 号安全公告：22 个 UniFi 漏洞、3 个 CVSS 10.0，其中 9 个位于 Wi-Fi 控制面"
url: "https://beyondmachines.net/event_details/ubiquiti-patches-22-vulnerabilities-in-unifi-ecosystem-including-three-cvss-10-0-flaws-i-h-1-7-g"
source_quality: secondary
topics: [UniFi, Ubiquiti, CVE, UniFi-OS, authentication-bypass, CRLF, privilege-escalation, command-injection, enterprise-wifi]
topic_primary: security-privacy
topics_secondary: [wifi7-deployment]
novelty_score: 2
---

## Summary (EN)

On 26 August 2026 Ubiquiti published **Security Advisory Bulletin 067**, patching **22 vulnerabilities** across the UniFi ecosystem. Twenty-one are rated critical and one high, and **three carry the maximum CVSS score of 10.0**. What makes this more than a routine vendor patch cycle for a Wi-Fi knowledge base is the distribution: the bulletin is usually reported as a camera-and-VoIP story, but **nine of the CVEs land in UniFi OS and the UniFi Network Application** — the software that runs Ubiquiti's gateways, routers and access points. That is the Wi-Fi management control plane, not a peripheral app.

The three CVSS 10.0 entries are **CVE-2026-77537** (UniFi Protect ≤ 7.1.87, command injection on the host device via improper input validation), **CVE-2026-77550** (UniFi OS, full authentication bypass via a CRLF-sequence flaw), and **CVE-2026-77554** (UniFi Talk ≤ 5.2.7, command injection). Of these, CVE-2026-77550 is the one that matters most to a wireless operator: an unauthenticated attacker with network access bypasses authentication outright on UniFi OS devices, which is the administrative surface for the AP fleet.

The rest of the Wi-Fi-relevant set is a study in how many ways one management stack can be entered: **CVE-2026-77534** and **CVE-2026-77536** (CVSS 9.9, UniFi OS privilege escalation through improper access control), **CVE-2026-77539** and **CVE-2026-77540** (9.1, UniFi OS Server command injection), **CVE-2026-77535** (9.1, UniFi Network Application command injection), **CVE-2026-77541** (9.1, UniFi Network Application privilege escalation), **CVE-2026-77549** (9.0, a second CRLF authentication bypass in UniFi OS), and **CVE-2026-77545** (9.0, UniFi OS privilege escalation via leftover debug code).

Ubiquiti has not flagged active exploitation and urges immediate updating. The useful calibration is the vendor's own recent history: a structurally similar three-CVE chain patched in May 2026 went from patch publication to confirmed botnet exploitation in roughly **33 days**. That is the realistic size of the patch window, not an open-ended one.

## Summary (ZH)

2026 年 8 月 26 日，Ubiquiti 发布 **第 067 号安全公告**，一次性修复 UniFi 生态中的 **22 个漏洞**：21 个评为「严重」、1 个「高危」，其中 **3 个拿到 CVSS 满分 10.0**。对一个 Wi-Fi 知识库而言，这件事之所以不只是厂商例行补丁，关键在于漏洞的分布——外界报道多把它讲成「摄像头与 VoIP 的事」，但 **其中 9 个漏洞落在 UniFi OS 与 UniFi Network Application 上**，也就是运行 Ubiquiti 网关、路由器与无线接入点（AP）的那套软件。那是 Wi-Fi 的管理控制面，不是边缘应用。

3 个满分漏洞分别是：**CVE-2026-77537**（UniFi Protect ≤ 7.1.87，输入校验不当导致在宿主设备上命令注入）、**CVE-2026-77550**（UniFi OS，CRLF 序列缺陷导致完全绕过身份认证）、**CVE-2026-77554**（UniFi Talk ≤ 5.2.7，命令注入）。对无线运维方最要命的是 CVE-2026-77550：攻击者无需凭据、只要能访问网络，就能在 UniFi OS 设备上直接绕过认证——而那正是整片 AP 的管理入口。

其余与 Wi-Fi 相关的漏洞，几乎演示了「同一套管理栈能被从多少个方向打进去」：**CVE-2026-77534**、**CVE-2026-77536**（9.9，UniFi OS 访问控制不当导致提权）、**CVE-2026-77539**、**CVE-2026-77540**（9.1，UniFi OS Server 命令注入）、**CVE-2026-77535**（9.1，UniFi Network Application 命令注入）、**CVE-2026-77541**（9.1，UniFi Network Application 提权）、**CVE-2026-77549**（9.0，UniFi OS 中的第二个 CRLF 认证绕过）、**CVE-2026-77545**（9.0，UniFi OS 中残留调试代码导致提权）。

Ubiquiti 表示尚未发现在野利用，并敦促立即升级。真正有参考价值的标尺是该厂商自己近期的记录：2026 年 5 月修复的一组结构类似的三漏洞链，从补丁发布到确认被僵尸网络利用，只用了约 **33 天**。那才是补丁窗口的现实长度。

## Key technical points (EN)

- **Bulletin 067, published 26 August 2026**: 22 CVEs — 21 critical, 1 high; three at CVSS 10.0.
- **Nine CVEs sit in the Wi-Fi control plane** (UniFi OS / UniFi OS Server / UniFi Network Application), i.e. the gateway, router and AP management software — not in the camera/VoIP/door-access apps that headline most coverage.
- **CVE-2026-77550 (CVSS 10.0)** — CRLF-sequence flaw in UniFi OS giving an unauthenticated, network-adjacent attacker a **full authentication bypass** on affected devices and instances.
- **CVE-2026-77549 (CVSS 9.0)** — a *second*, independent CRLF authentication bypass in UniFi OS, indicating a class of input-handling defect rather than a single slip.
- **CVE-2026-77534 / 77536 (CVSS 9.9)** — UniFi OS privilege escalation via improper access control.
- **CVE-2026-77539 / 77540 (CVSS 9.1)** — command injection in UniFi OS Server.
- **CVE-2026-77535 (9.1) / CVE-2026-77541 (9.1)** — command injection and privilege escalation in the UniFi Network Application.
- **CVE-2026-77545 (CVSS 9.0)** — privilege escalation through **debug code left in a shipping build**.
- **CVE-2026-77537 / 77554 (CVSS 10.0)** — command injection in UniFi Protect (≤ 7.1.87) and UniFi Talk (≤ 5.2.7); not Wi-Fi, but they share the host device with the network stack, so a compromise there reaches the same box.
- **Exploitation timing benchmark**: no active exploitation flagged at disclosure, but the May 2026 three-CVE chain took roughly **33 days** from patch to confirmed botnet exploitation.
- **Sourcing caveat**: Ubiquiti's own advisory page (community.ui.com) is JavaScript-gated and could not be fetched directly; the CVE breakdown here comes from secondary security-press aggregation and should be re-checked against the vendor bulletin before operational use.

## Key technical points (ZH)

- **第 067 号公告，2026 年 8 月 26 日发布**：22 个 CVE——21 个严重、1 个高危；3 个 CVSS 10.0。
- **9 个 CVE 位于 Wi-Fi 控制面**（UniFi OS / UniFi OS Server / UniFi Network Application），即网关、路由器与 AP 的管理软件，而非多数报道所强调的摄像头 / VoIP / 门禁应用。
- **CVE-2026-77550（CVSS 10.0）**——UniFi OS 的 CRLF 序列缺陷，使未认证且可访问网络的攻击者**完全绕过身份认证**。
- **CVE-2026-77549（CVSS 9.0）**——UniFi OS 中**第二个**独立的 CRLF 认证绕过，说明这是一类输入处理缺陷，而不是单点失误。
- **CVE-2026-77534 / 77536（CVSS 9.9）**——UniFi OS 访问控制不当导致提权。
- **CVE-2026-77539 / 77540（CVSS 9.1）**——UniFi OS Server 命令注入。
- **CVE-2026-77535（9.1）/ CVE-2026-77541（9.1）**——UniFi Network Application 的命令注入与提权。
- **CVE-2026-77545（CVSS 9.0）**——出货版本中**残留调试代码**导致提权。
- **CVE-2026-77537 / 77554（CVSS 10.0）**——UniFi Protect（≤ 7.1.87）与 UniFi Talk（≤ 5.2.7）命令注入；本身不属 Wi-Fi，但与网络栈共处同一宿主设备，攻陷之后触达的是同一台机器。
- **利用时间标尺**：披露时未发现在野利用，但 2026 年 5 月那组三漏洞链，从补丁到确认被僵尸网络利用约 **33 天**。
- **来源说明**：Ubiquiti 官方公告页（community.ui.com）为 JavaScript 渲染，无法直接抓取；此处 CVE 明细来自安全媒体的二手汇总，投入运维使用前应与厂商原始公告核对。

## Why it matters / what's new (EN)

The `security-privacy` bin of this knowledge base is dominated by protocol-layer work — CSI leakage, probe-request fingerprinting, beamforming-feedback privacy, PQC negotiation. Those describe attacks on the *radio* interface. This entry is the other half of the threat model and the half the bin under-covers: **the Wi-Fi administrative plane**, where a single unauthenticated CRLF bug hands over the controller for an entire AP fleet without touching a single 802.11 frame.

Three things are worth extracting beyond the patch list. First, **the CRLF pattern repeats** — two independent authentication bypasses (CVE-2026-77550 and CVE-2026-77549) in the same OS from the same defect class in one bulletin. That is a header-parsing hygiene problem in the management HTTP surface, and it suggests more of the same is likely rather than exhausted. Second, **debug code shipped in a release build** (CVE-2026-77545) is a release-engineering failure, not a design failure, and it is the kind of defect that recurs unless the build process changes. Third, and most useful operationally, **the vendor's own May-2026 chain gives a measured 33-day patch-to-exploitation interval** — an unusually concrete number for a risk window that is normally argued in the abstract.

For anyone tracking enterprise and prosumer Wi-Fi deployment (`wifi7-deployment`), this also lands on a vendor whose appeal is precisely that one controller manages the whole estate. That consolidation is the product's value proposition and, in this bulletin, its blast radius: the same UniFi OS box that terminates the Wi-Fi management plane also hosts the camera and VoIP applications carrying the other two CVSS 10.0 bugs.

## Why it matters / what's new (ZH)

本知识库 `security-privacy` 分类目前以协议层工作为主——CSI 泄露、探测请求指纹、波束成形反馈隐私、后量子协商等，描述的都是对**射频接口**的攻击。本条目补的是威胁模型的另一半，也正是该分类覆盖不足的一半：**Wi-Fi 管理面**——一个未认证的 CRLF 缺陷，就能交出整片 AP 的控制器，而全程不需要碰任何一个 802.11 帧。

除补丁清单外，有三点值得单独记住。其一，**CRLF 模式重复出现**：同一份公告里，同一个操作系统中出现了两个来自同一缺陷类别的独立认证绕过（CVE-2026-77550 与 CVE-2026-77549）。这是管理侧 HTTP 接口的报文头解析卫生问题，意味着同类问题更可能尚未穷尽，而非已经清完。其二，**调试代码进入了正式发布版本**（CVE-2026-77545），这属于发布工程失误而非设计缺陷——除非构建流程改变，否则这类缺陷会反复出现。其三，也是运维上最有用的一点：**厂商自己 2026 年 5 月那条漏洞链给出了实测的 33 天「补丁—被利用」间隔**，为一个通常只能泛泛而谈的风险窗口提供了罕见的具体数字。

对关注企业级与高端消费级 Wi-Fi 部署（`wifi7-deployment`）的人来说，这件事还落在一家「一个控制器管理整片资产」正是其卖点的厂商身上。这种集中化既是产品价值，在本公告中也正是其爆炸半径：那台承载 Wi-Fi 管理面的 UniFi OS 设备，同时也运行着携带另外两个 CVSS 10.0 漏洞的摄像头与 VoIP 应用。
