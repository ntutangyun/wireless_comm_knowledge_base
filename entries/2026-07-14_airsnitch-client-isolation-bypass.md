---
id: 2026-07-14_airsnitch-client-isolation-bypass
date_published: 2026-02-23
date_found: 2026-07-14
type: academic-paper
title_en: "AirSnitch: Demystifying and Breaking Client Isolation in Wi-Fi Networks"
title_zh: "AirSnitch：揭示并突破 Wi-Fi 网络中的客户端隔离机制"
url: "https://www.ndss-symposium.org/ndss-paper/airsnitch-demystifying-and-breaking-client-isolation-in-wi-fi-networks/"
source_quality: full
topics: [802.11, security, client-isolation, GTK, MitM]
topic_primary: security-privacy
topics_secondary: [roaming-mobility]
novelty_score: 3
---

## Summary (EN)
AirSnitch is a systematic security analysis of **client isolation** — the feature (variously called "client isolation", "AP isolation", "guest network isolation", or "station-to-station blocking") that public and enterprise Wi-Fi deployments rely on to stop one associated client from reaching another on the same BSS. The authors (UC Riverside + Mathy Vanhoef's DistriNet group at KU Leuven, presented at NDSS 2026) show that this protection is far weaker than operators assume: **every router and network they tested was vulnerable to at least one of three attacks**, and none was immune to all three. The root causes are cross-layer: the keys and enforcement that are supposed to keep clients apart are managed inconsistently between the Wi-Fi link layer and the IP/routing layer.

The paper decomposes client isolation across three layers — Wi-Fi encryption, packet switching, and packet routing — and finds a distinct flaw at each. First, the **group temporal key (GTK)** that protects broadcast/multicast frames is shared among all associated stations and improperly managed, so an attacker who holds it can craft frames that the AP will deliver directly to a victim, bypassing switch-level isolation. Second, isolation is enforced at the MAC layer but frequently **not re-checked at the IP layer**: by injecting packets that carry the gateway's MAC address (Layer 2) but a victim's IP address (Layer 3), an attacker "bounces" traffic through the gateway back to an isolated peer. Third, weak synchronization of client identity across the stack lets an attacker **spoof MAC addresses to intercept both uplink and downlink** traffic of another client, achieving a full machine-in-the-middle (MitM) position.

The three primitives are named **Abusing-GTK**, **Gateway Bouncing**, and **Machine-in-the-Middle**. Because the attacks exploit the interaction of multiple protocols and standards rather than a single implementation bug, the authors argue that no single vendor can fully see or fix the problem — mitigation requires coordination across the IEEE standards, device manufacturers, and network operators. The team released tooling to test networks for these client-isolation flaws.

## Summary (ZH)
AirSnitch 对 Wi-Fi 的**客户端隔离**（client isolation，又称 AP 隔离、访客网络隔离、站间阻断）机制做了系统性安全分析。公共热点与企业部署普遍依赖该功能来阻止同一 BSS 下的一个已关联客户端访问另一个客户端。作者（加州大学河滨分校与 KU Leuven 的 Mathy Vanhoef 团队，发表于 NDSS 2026）证明该保护远比运营商设想的脆弱：**所测试的每一款路由器和网络都至少可被三种攻击之一攻破**，无一能同时抵御全部三种。根因是跨层的——本应隔离客户端的密钥与执行逻辑在 Wi-Fi 链路层与 IP/路由层之间管理不一致。

论文将客户端隔离拆解到三层——Wi-Fi 加密、包交换、包路由——并在每层各发现一处缺陷。其一，保护广播/组播帧的**组临时密钥（GTK）**由所有已关联站点共享且管理不当，掌握 GTK 的攻击者可构造帧让 AP 直接投递给受害者，绕过交换层隔离。其二，隔离在 MAC 层执行但常**未在 IP 层复核**：攻击者注入携带网关 MAC 地址（二层）但受害者 IP 地址（三层）的报文，使流量经网关"反弹"回被隔离的对端。其三，客户端身份在协议栈中同步薄弱，攻击者可**伪造 MAC 地址以拦截**另一客户端的上下行流量，达成完整的中间人（MitM）。

三种原语分别命名为 **Abusing-GTK**、**Gateway Bouncing** 与 **Machine-in-the-Middle**。由于攻击利用的是多协议、多标准的交互而非单一实现漏洞，作者认为任何单一厂商都无法完整看清或修复该问题——缓解需要 IEEE 标准、设备厂商与网络运营商的协同。团队公开了用于检测客户端隔离缺陷的工具。

## Key technical points (EN)
- **Abusing-GTK:** the shared broadcast group temporal key is improperly managed; a holder can inject frames the AP forwards to a victim, defeating switch-layer isolation.
- **Gateway Bouncing:** MAC-layer isolation isn't mirrored at the IP layer; packets with the gateway MAC + victim IP get routed back to an isolated peer.
- **Machine-in-the-Middle:** weak cross-stack client-identity synchronization + MAC spoofing yields full bidirectional interception.
- **Coverage:** every tested router/network fell to ≥1 primitive; none resisted all three.
- **Cross-layer root cause:** encryption, switching, and routing each enforce (or fail to enforce) isolation differently — a single-vendor fix is insufficient.
- Authors released evaluation tooling; presented at NDSS 2026 (UC Riverside + KU Leuven DistriNet).

## Key technical points (ZH)
- **Abusing-GTK：** 共享的广播组临时密钥管理不当，持有者可注入被 AP 转发给受害者的帧，击穿交换层隔离。
- **Gateway Bouncing：** MAC 层隔离未在 IP 层镜像；携带网关 MAC + 受害者 IP 的报文经路由反弹回被隔离对端。
- **Machine-in-the-Middle：** 跨栈客户端身份同步薄弱 + MAC 伪造，实现完整双向拦截。
- **覆盖面：** 所测每台路由器/网络均被至少一种原语攻破，无一能全部抵御。
- **跨层根因：** 加密、交换、路由三层对隔离的执行各不相同——单厂商修复不足以解决。
- 作者公开了检测工具；发表于 NDSS 2026（UC Riverside + KU Leuven DistriNet）。

## Why it matters / what's new (EN)
This is the first structured, cross-layer treatment of Wi-Fi client isolation as a security property — earlier work (e.g. ARP-spoofing analyses) looked at single-layer symptoms, whereas AirSnitch shows the isolation guarantee itself is systematically breakable because it is defined and enforced across three independent layers with no unifying key/identity model. It extends the KB's `security-privacy` bin, which to date has centered on management-frame protection, EPPKE/privacy (TGbi), and post-quantum crypto agility (TGbt); client isolation on **public/guest networks** is a distinct and widely-deployed trust boundary. The finding is directly relevant to enterprise and hospitality Wi-Fi and to the coexistence of isolation with roaming/MLO, where a client's identity is deliberately mobile across links.

## Why it matters / what's new (ZH)
这是首次将 Wi-Fi 客户端隔离作为安全属性做系统性、跨层的处理——早期工作（如 ARP 欺骗分析）只看单层症状，而 AirSnitch 表明隔离保证本身可被系统性突破，因为它跨三个相互独立的层定义与执行，缺乏统一的密钥/身份模型。它扩展了 KB 的 `security-privacy` 分箱——此前该箱聚焦于管理帧保护、EPPKE/隐私（TGbi）与后量子密码敏捷性（TGbt）；而**公共/访客网络**上的客户端隔离是一条独立且广泛部署的信任边界。该发现与企业及酒店 Wi-Fi、以及隔离与漫游/MLO 共存（客户端身份在多链路间有意移动）直接相关。
