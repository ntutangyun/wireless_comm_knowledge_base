---
id: 2026-05-29_arxiv-quantum-safe-ike-satellite
date_published: 2026-05-27
date_found: 2026-05-29
type: academic-paper
technology: satellite
title_en: "Efficient and quantum-safe IKE protocols for satellite communications"
title_zh: "面向卫星通信的高效抗量子 IKE 协议"
url: "https://arxiv.org/abs/2605.28660"
source_quality: abstract_only
topics: [satellite-security, IKE, IKEv2, post-quantum, PQC, key-exchange, harvest-now-decrypt-later]
topic_primary: leo-constellations
topics_secondary: [sat-iot]
novelty_score: 3
---

## Summary (EN)
De Zuane, Baldi, Santini, Anchelergues, Romano, Cammarano and Grosso (Università Politecnica delle Marche and partners) adapt the Internet Key Exchange (IKE) protocol — the handshake that sets up IPsec security associations — for satellite links, where two constraints bite at once: onboard resource limits and long propagation latency, plus the need to resist future quantum attackers. IKE on a satellite link is expensive (every round trip costs hundreds of milliseconds, and onboard terminals are compute-constrained), and its classical Diffie-Hellman key exchange is vulnerable to "harvest-now, decrypt-later" attacks where an adversary records today's traffic to decrypt once a quantum computer exists.

The work proposes IKE variants that combine low-complexity cryptographic designs tuned for satellite links (reducing computational and bandwidth demand on constrained terminals) with post-quantum cryptography (PQC), and hybrid classical+PQC modes intended to manage the migration period (so a break in either the classical or the PQC primitive alone doesn't compromise the session). The framing is deliberately incremental: rather than redesign IKE wholesale, they modify standard IKE for the satellite context while folding in PQC, bridging legacy crypto and emerging PQC standards. The paper is a 6-page presentation paper accepted at IEEE LANMAN 2026.

## Summary (ZH)
De Zuane、Baldi、Santini、Anchelergues、Romano、Cammarano 与 Grosso（马尔凯理工大学及合作方）将互联网密钥交换协议（IKE，建立 IPsec 安全关联的握手）适配到卫星链路。卫星链路同时面临两重约束：星上资源受限与长传播时延，外加抵御未来量子攻击者的需求。在卫星链路上运行 IKE 代价高昂（每次往返耗时数百毫秒，星上终端算力受限），而其经典 Diffie-Hellman 密钥交换易受"先截获、后解密"攻击——攻击者今日记录流量，待量子计算机出现后再解密。

该工作提出 IKE 变体，将面向卫星链路调优的低复杂度密码设计（降低受限终端的算力与带宽需求）与后量子密码（PQC）相结合，并采用经典+PQC 的混合模式以管理迁移期（使经典或 PQC 原语单独被攻破都不致危及会话）。其思路刻意采用渐进式：不整体重设 IKE，而是为卫星场景修改标准 IKE 并融入 PQC，衔接既有密码与新兴 PQC 标准。该论文为 IEEE LANMAN 2026 录用的 6 页报告论文。

## Key technical points (EN)
- Problem: IKE on satellite links — onboard compute limits + long RTT make the handshake costly; classical DH is quantum-vulnerable (harvest-now-decrypt-later).
- Approach: low-complexity IKE variants for satellite + PQC integration + hybrid classical/PQC modes for migration.
- Stance: modify standard IKE for the satellite context rather than redesign; bridge legacy and PQC standards.
- Venue: IEEE LANMAN 2026 (6-page presentation paper).
- source_quality: abstract_only — summary from the abstract; full evaluation numbers not captured.

## Key technical points (ZH)
- 问题：卫星链路上的 IKE——星上算力受限 + 长 RTT 使握手代价高；经典 DH 易受量子威胁（先截获后解密）。
- 方法：面向卫星的低复杂度 IKE 变体 + PQC 集成 + 经典/PQC 混合迁移模式。
- 立场：为卫星场景修改标准 IKE 而非重设；衔接既有与 PQC 标准。
- 出处：IEEE LANMAN 2026（6 页报告论文）。
- source_quality：abstract_only——摘要总结，未捕获完整评测数字。

## Why it matters / what's new (EN)
This is the KB's first satellite-side security/PQC entry; existing security coverage is Wi-Fi (BFI, WPA3, FTM) and the Bluetooth TGbt PQC track. It extends the post-quantum-migration theme to the satellite link layer, where the long-RTT + onboard-constraint combination makes naive PQC-IKE (with larger keys/more round trips) especially painful — hence the low-complexity + hybrid framing. Note a taxonomy gap: the satellite technology has no dedicated security bin, so this is filed under leo-constellations; a `sat-security` topic may be warranted if more such work appears.

## Why it matters / what's new (ZH)
这是本 KB 首个卫星侧安全/PQC 条目；现有安全内容集中在 Wi-Fi（BFI、WPA3、FTM）与蓝牙 TGbt 的 PQC 线。它把"后量子迁移"主题延伸到卫星链路层——长 RTT 加星上约束的组合使朴素的 PQC-IKE（更大密钥/更多往返）尤为吃力，故采用低复杂度 + 混合的思路。注意一个分类缺口：卫星技术下无专门的安全分箱，故本条目暂归入 leo-constellations；若此类工作增多，或应新增 `sat-security` 主题。
