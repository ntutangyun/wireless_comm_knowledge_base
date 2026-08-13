---
id: 2026-08-13_arxiv-association-privacy-wifi-p2p-ble
date_published: 2026-08-11
date_found: 2026-08-13
type: academic-paper
title_en: "Association-based Privacy Attacks in Wireless Protocols: Formal Modeling and Mitigation"
title_zh: "无线协议中基于关联的隐私攻击：形式化建模与缓解"
url: "https://arxiv.org/abs/2608.11337"
source_quality: full
topics: [security, privacy, Wi-Fi-P2P, BLE, formal-verification, tracking]
topic_primary: security-privacy
topics_secondary: [bt-security]
novelty_score: 3
---

## Summary (EN)
Jangid, Engelmann and Lin (arXiv 11 Aug 2026, cs.CR; routed from the shared cs.CR security sweep) study a privacy attack class they call **association inference**: an attacker who can capture wireless frames — but holds no cryptographic keys — replays or relays association-phase traffic to learn *which devices belong together* (same owner, same trust group, previously paired), and from there profiles and tracks users. The attack surface is the authenticated-reconnection fast path that both Wi-Fi P2P and Bluetooth Low Energy optimize for: devices that share keys or sit on each other's allowlists answer reconnection probes differently from strangers, and that *difference in response behaviour* is itself an identifying signal, even when all payloads are encrypted.

Concretely, the vulnerable procedures are Wi-Fi P2P group formation / invitation / reconnection and BLE allowlist-based advertisement and connection establishment. By replaying a captured invitation or directed advertisement — or relaying it to a different location — the attacker gets a yes/no oracle on whether two devices share an association, defeating MAC-address randomization because the *relationship*, not the address, is the identifier.

The authors formally model the protocols and verify their proposed fixes against association-inference properties alongside established ones (well-authentication, frame opacity, no-desynchronization). The mitigation toolkit is threefold: **condition-oblivious responses** (a device answers reconnection stimuli identically whether or not it recognizes the peer), **replay resistance** (freshness binding so captured association material is single-use), and **distance bounding** (defeating relay by constraining round-trip time). The analysis surfaces both new and previously-known vulnerabilities, and the paper reports that its proposed design changes have been **acknowledged by both the Wi-Fi Alliance and the Bluetooth SIG**.

## Summary (ZH)
Jangid、Engelmann 与 Lin（2026 年 8 月 11 日 arXiv，cs.CR；经共享 cs.CR 安全扫描路由）研究一类他们称为**关联推断**的隐私攻击：能捕获无线帧但不持有任何密钥的攻击者，通过重放或中继关联阶段的流量，推断*哪些设备彼此关联*（同一主人、同一信任组、曾经配对），进而实现用户画像与跟踪。攻击面是 Wi-Fi P2P 与低功耗蓝牙（BLE）都为之优化的认证快速重连路径：共享密钥或互在允许列表（allowlist）中的设备，对重连探测的响应行为与陌生设备不同，而这种*响应行为差异*本身就是识别信号——即便所有载荷都已加密。

具体而言，脆弱流程包括 Wi-Fi P2P 组建/邀请/重连，以及 BLE 基于允许列表的广播与连接建立。攻击者重放捕获到的邀请帧或定向广播——或将其中继到另一地点——即可获得两设备是否存在关联的"是/否"预言机，使 MAC 地址随机化失效：因为标识符不再是地址，而是*关系*本身。

作者对协议做形式化建模，并针对关联推断属性及既有安全属性（良好认证、帧不透明性、无去同步）验证所提修复。缓解手段有三：**条件无关响应**（设备无论是否认识对端，对重连激励的应答完全一致）、**抗重放**（新鲜性绑定使捕获的关联材料一次性失效）、**距离约束**（以往返时延约束挫败中继）。分析发现了新旧多个漏洞，且论文报告其设计修改建议已获 **Wi-Fi Alliance 与 Bluetooth SIG 双双确认**。

## Key technical points (EN)
- **Attack class:** association inference — replay/relay of association-phase traffic as a keyless yes/no oracle on device relationships; defeats MAC randomization because the relationship is the identifier.
- **Vulnerable procedures:** Wi-Fi P2P group formation / invitation / authenticated reconnection; BLE allowlist advertisement + connection establishment.
- **Method:** formal protocol modeling; fixes verified against association-inference plus well-authentication, frame opacity, no-desynchronization.
- **Mitigations:** condition-oblivious responses; freshness-bound replay resistance; distance bounding against relay.
- **Impact:** new + known vulnerabilities documented; design changes acknowledged by Wi-Fi Alliance and Bluetooth SIG.

## Key technical points (ZH)
- **攻击类别：**关联推断——重放/中继关联阶段流量，构成无需密钥的设备关系"是/否"预言机；因标识符是关系而非地址，MAC 随机化失效。
- **脆弱流程：**Wi-Fi P2P 组建/邀请/认证重连；BLE 允许列表广播与连接建立。
- **方法：**协议形式化建模；针对关联推断及良好认证、帧不透明性、无去同步属性验证修复。
- **缓解：**条件无关响应；新鲜性绑定的抗重放；对抗中继的距离约束。
- **影响：**记录新旧漏洞；设计修改获 Wi-Fi Alliance 与 Bluetooth SIG 确认。

## Why it matters / what's new (EN)
The KB's device-privacy line has so far centred on *fingerprinting* individual devices despite MAC randomization (2026-06-26_arxiv-ml-mac-randomization-privacy: IE + timing features re-identify 22 devices at 89.6%). This paper opens a different axis: leaking the *relationship graph* between devices rather than device identity, using only replayed protocol stimuli — a class that IE/timing normalization defences do nothing against. It is also cross-technology by construction (the same allowlist-reconnection pattern appears in Wi-Fi P2P and BLE), and the dual WFA + Bluetooth SIG acknowledgement mirrors the two bodies' joint 6 GHz coexistence workstream (2026-07-10_wfa-bluetooth-sig-6ghz-coexistence) — standards-side attention to Wi-Fi/BT-spanning problems is visibly increasing. The condition-oblivious-response mitigation echoes the solicited-response protection direction already tracked in the KB's sensing-protection entries, now applied to association privacy.

## Why it matters / what's new (ZH)
KB 的设备隐私脉络此前集中在 MAC 随机化下对单个设备的*指纹识别*（2026-06-26_arxiv-ml-mac-randomization-privacy：IE+时序特征以 89.6% 重识别 22 台设备）。本文开辟了另一维度：仅用重放的协议激励泄露设备间的*关系图*而非设备身份——IE/时序归一化类防御对此完全无效。该工作天然跨技术（同样的允许列表重连模式出现在 Wi-Fi P2P 与 BLE 中），而 WFA 与 Bluetooth SIG 的双重确认与两组织的 6 GHz 共存联合工作（2026-07-10_wfa-bluetooth-sig-6ghz-coexistence）相呼应——标准侧对横跨 Wi-Fi/蓝牙问题的关注明显上升。其条件无关响应缓解与 KB 感知保护条目中已跟踪的按请求响应保护方向一脉相承，此处应用于关联隐私。
