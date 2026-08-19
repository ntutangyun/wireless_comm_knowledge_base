---
id: 2026-08-19_arxiv-exposed-starlink-hosts-security-posture
date_published: 2026-08-17
date_found: 2026-08-19
type: academic-paper
technology: satellite
title_en: "Exposed Starlink hosts run older, more vulnerable OSes and protocols than the rest of the Internet: UCLA Censys study of ~33,000 Starlink-AS hosts finds 9× per-capita OS-CVE rate in Haiti, 6× in Colombia, 70 % FortiOS routers in South America, and an insecure-protocol ratio >1 across Latin America, West Africa, Eastern Europe and Southeast Asia"
title_zh: "暴露在公网的 Starlink 主机比互联网整体运行更旧、更脆弱的操作系统与协议：UCLA 基于 Censys 对约 33,000 台 Starlink AS 主机的研究发现海地人均 OS-CVE 率高 9 倍、哥伦比亚 6 倍、南美 70% 为 FortiOS 路由器，拉美/西非/东欧/东南亚不安全协议比值均 >1"
url: "https://arxiv.org/abs/2608.16839"
source_quality: full
topics: [Starlink, Internet-measurement, Censys, exposed-hosts, CVE, FortiOS, TLS, SSH, SMBv1, security-posture, digital-divide, policy, IMC-PRIMES]
topic_primary: starlink
topics_secondary: [leo-constellations, ngso-regulation]
novelty_score: 2
---

## Summary (EN)
Elamri, Zanoria, Zhi, Du and Izhikevich (UCLA; short paper published at the ACM IMC PRIMES workshop, October 2025; posted to arxiv cs.NI on 17 Aug 2026 under CC BY 4.0) present a measurement-driven look at the *security posture* of hosts reachable through Starlink, motivated by the constellation's growth from ~2 million users (2023) to over 7 million (2025) in largely rural and previously unserved regions. Using Censys IPv4/IPv6 service scans from 7 April 2025, they label every host inside Starlink's autonomous system as a "Starlink host" (~33,000) and compare it against a country-balanced random sample of non-Starlink hosts (up to 10,000 per country from 230 million, giving 1.78 million). OS and protocol banners are joined to NIST NVD CVEs (2020–2025) by wildcard-matching CPE strings, producing CVE–host pairs; a per-country **"Starlink insecurity ratio"** is defined as the fraction of Starlink hosts running outdated protocols (old TLS versions, weak SSH cipher suites, legacy SMBv1) divided by the same fraction across all hosts.

Findings: a large share of exposed Starlink hosts are routers, with OS mix varying sharply by continent — 70 % of exposed South American Starlink hosts run Fortinet FortiOS versus under 20 % in Europe (FortiOS is only 15.7 % of non-Starlink hosts in South America). Starlink hosts show significantly higher OS-CVE rates than non-Starlink hosts, with a geography that does not mirror the non-Starlink ranking: Haiti's per-capita OS-vulnerability rate on Starlink hosts is nine times higher, Colombia's six times. The insecurity ratio exceeds 1 (Starlink comparatively less secure) across Central and South America, West Africa, Eastern Europe and Southeast Asia, and is below 1 in the mapped green countries. The authors frame this as a policy question — how ISPs, manufacturers and governments should push safer defaults so that connectivity expansion through satellite ISPs does not erode global Internet resilience — and offer the study as a discussion basis rather than a root-cause analysis. Two pages plus figures; no attribution of the disparity to Starlink itself versus the CPE population in newly connected regions is attempted.

## Summary (ZH)
Elamri、Zanoria、Zhi、Du 与 Izhikevich（UCLA；短文发表于 ACM IMC PRIMES 研讨会，2025 年 10 月；2026 年 8 月 17 日以 CC BY 4.0 上传 arxiv cs.NI）从测量角度考察经 Starlink 可达主机的*安全态势*，动因是该星座用户从约 200 万（2023）增长到逾 700 万（2025），且多在农村与此前无服务地区。他们使用 2025 年 4 月 7 日的 Censys IPv4/IPv6 服务扫描，把 Starlink 自治系统内的所有主机标为"Starlink 主机"（约 33,000 台），并与按国家均衡的非 Starlink 随机样本比较（从 2.3 亿台中每国最多抽 10,000 台，共 178 万台）。操作系统与协议横幅通过 CPE 字符串通配匹配与 NIST NVD 的 2020–2025 CVE 关联，得到 CVE–主机对；每国定义 **"Starlink 不安全比值"**——运行过时协议（旧版 TLS、弱 SSH 密码套件、遗留 SMBv1）的 Starlink 主机占比除以全部主机中的同一占比。

发现：暴露的 Starlink 主机中很大一部分是路由器，操作系统构成随大洲差异极大——南美暴露 Starlink 主机 70% 运行 Fortinet FortiOS，欧洲不到 20%（南美非 Starlink 主机中 FortiOS 仅占 15.7%）。Starlink 主机的 OS-CVE 率显著高于非 Starlink 主机，且地理分布与非 Starlink 排名不一致：海地 Starlink 主机的人均 OS 漏洞率高 9 倍，哥伦比亚高 6 倍。不安全比值在中南美、西非、东欧与东南亚均大于 1（Starlink 相对更不安全），在图中绿色国家小于 1。作者将其定位为政策问题——ISP、厂商与政府应如何推动更安全的默认配置，使卫星 ISP 带来的连接扩张不侵蚀全球互联网韧性——并强调该研究是讨论基础而非根因分析。全文两页加图；未尝试区分差异源于 Starlink 本身还是新联网地区的 CPE 设备群。

## Key technical points (EN)
- **Data:** Censys IPv4+IPv6 scans, 7 Apr 2025; Starlink host = any host in Starlink's AS (~33,000); non-Starlink comparison set 1.78 M (≤10 K per country sampled from 230 M).
- **Vulnerability join:** NIST NVD CVEs 2020–2025 matched to host CPE strings by wildcard → CVE–host pairs.
- **Metric:** per-country Starlink insecurity ratio = share of Starlink hosts on outdated protocols (old TLS, weak SSH ciphers, SMBv1) ÷ same share for all hosts.
- **Device mix:** exposed Starlink hosts predominantly routers; South America 70 % FortiOS vs Europe <20 % (non-Starlink South America 15.72 %).
- **CVE disparities:** Haiti 9× per-capita OS-CVE rate on Starlink hosts, Colombia 6×; top-12 country ranking differs between Starlink and non-Starlink hosts.
- **Protocol disparities:** ratio >1 in Central/South America, West Africa, Eastern Europe, Southeast Asia; <1 elsewhere.
- **Venue:** ACM IMC PRIMES workshop (Oct 2025), 2-page short study; policy framing (ISPs / manufacturers / governments, safer defaults).

## Key technical points (ZH)
- **数据：** Censys IPv4+IPv6 扫描，2025 年 4 月 7 日；Starlink 主机 = Starlink AS 内任意主机（约 33,000）；非 Starlink 对照集 178 万（从 2.3 亿中每国最多抽 1 万）。
- **漏洞关联：** NIST NVD 2020–2025 CVE 与主机 CPE 字符串通配匹配 → CVE–主机对。
- **指标：** 每国 Starlink 不安全比值 = 运行过时协议（旧 TLS、弱 SSH 密码套件、SMBv1）的 Starlink 主机占比 ÷ 全部主机同一占比。
- **设备构成：** 暴露的 Starlink 主机以路由器为主；南美 70% FortiOS，欧洲 <20%（南美非 Starlink 15.72%）。
- **CVE 差异：** 海地 Starlink 主机人均 OS-CVE 率 9 倍、哥伦比亚 6 倍；前 12 国排名在 Starlink 与非 Starlink 主机间不同。
- **协议差异：** 中南美、西非、东欧、东南亚比值 >1；其他地区 <1。
- **发表：** ACM IMC PRIMES 研讨会（2025 年 10 月），两页短文；政策框架（ISP / 厂商 / 政府，更安全默认配置）。

## Why it matters / what's new (EN)
The KB's Starlink measurement thread has been about *performance* — queuing and buffer behaviour (2026-05-29), weather sensitivity (2026-06-03), RTT region signatures (2026-06-30), BBRv3 (2026-07-09), PoP/satellite assignment (2026-08-17) — and its security thread about the *space segment* (flight-software trust boundaries 2026-08-17, GNSS jamming/spoofing 2026-07-28 / 2026-08-12 / 2026-08-18, unwanted emissions 2026-08-18). This is the first entry on the **security posture of the LEO user population itself**: what is reachable behind Starlink CGNAT/public addressing and how patched it is. The result is modest in method (one Censys snapshot, AS-based labelling, banner-derived CPE matching, a 2-page workshop paper published ten months ago) but the disparity it documents — order-of-magnitude higher per-capita OS-CVE exposure in Haiti and Colombia, a FortiOS-heavy router population in South America, an insecurity ratio above 1 exactly in the regions LEO broadband is meant to serve — is a new operational axis for the constellation debate: rapid coverage expansion into under-served regions is also a rapid expansion of poorly maintained edge devices, and neither the constellation operator nor NTN standards address it. Interpretive caution: the paper does not separate a Starlink effect from a newly-connected-region effect (the same CPE population might look identical on a terrestrial ISP), IPv6/CGNAT visibility differs across countries, and the snapshot predates Starlink's 2026 growth; a longitudinal follow-up or a matched-region comparison would be needed before drawing regulatory conclusions.

## Why it matters / what's new (ZH)
知识库的 Starlink 测量脉络此前关注*性能*——排队与缓冲行为（2026-05-29）、天气敏感性（2026-06-03）、RTT 区域特征（2026-06-30）、BBRv3（2026-07-09）、PoP/卫星分配（2026-08-17）——其安全脉络关注*空间段*（飞行软件信任边界 2026-08-17、GNSS 压制/欺骗 2026-07-28 / 2026-08-12 / 2026-08-18、无用发射 2026-08-18）。本条目首次涉及 **低轨用户群体自身的安全态势**：Starlink CGNAT/公网地址之后有什么可达、补丁状况如何。方法上偏简（单次 Censys 快照、按 AS 标注、横幅推导的 CPE 匹配、十个月前发表的两页研讨会短文），但其记录的差异——海地与哥伦比亚人均 OS-CVE 暴露高一个数量级、南美以 FortiOS 为主的路由器群体、不安全比值恰在低轨宽带意图服务的地区大于 1——为星座讨论提供了新的运营维度：向欠服务地区的快速覆盖扩张同时也是维护不善的边缘设备的快速扩张，而星座运营商与 NTN 标准均未涉及。解读须谨慎：论文未区分 Starlink 效应与新联网地区效应（同一 CPE 群体在地面 ISP 上可能表现相同），各国 IPv6/CGNAT 可见性不同，快照亦早于 Starlink 2026 年的增长；在得出监管结论前需要纵向跟踪或匹配地区对比。
