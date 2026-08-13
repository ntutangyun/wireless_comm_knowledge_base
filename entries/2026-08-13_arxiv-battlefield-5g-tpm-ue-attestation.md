---
id: 2026-08-13_arxiv-battlefield-5g-tpm-ue-attestation
date_published: 2026-08-11
date_found: 2026-08-13
type: academic-paper
technology: cellular
title_en: "Battlefield 5G: Dual-PKI and TPM-Based UE Attestation for Tactical 5G Standalone Networks"
title_zh: "战场 5G：面向战术 5G 独立组网的双 PKI 与 TPM 终端证明机制"
url: "https://arxiv.org/abs/2608.11293"
source_quality: full
topics: [5G-SA, security, TPM, PKI, attestation, MILCOM]
topic_primary: cellular-security
topics_secondary: [5g-nr]
novelty_score: 2
---

## Summary (EN)
Emran et al. (INL/GMU consortium; arXiv 11 Aug 2026; accepted at MILCOM 2026; routed from the shared cs.CR security sweep) close a known gap in 5G standalone security for high-assurance deployments: standard 3GPP registration authenticates the SIM credential, not the *device* — a transplanted SIM, tampered firmware, or rogue certificate rides straight through. Their framework inserts device authentication **before** standard registration, without modifying 3GPP messaging.

The design layers two independent X.509 challenges — an outer challenge at the gNodeB and an inner challenge at the AMF (Access and Mobility Management Function) — hence "dual-PKI," so compromising one tier does not admit the device. Hardware trust comes from **TPM 2.0 attestation**: Platform Configuration Register quotes prove boot integrity. Integration is non-intrusive: RRC forwarding gates plus save-and-replay of the standard message flow, keeping the 3GPP procedures byte-compatible.

The prototype defends against SIM-transplant, rogue-certificate, firmware-tampering, and replay attacks; the cost is onboarding latency growing from 1886 ms to 2260 ms (+373.4 ms pre-authentication overhead across six trials).

## Summary (ZH)
Emran 等（INL/GMU 团队；2026 年 8 月 11 日 arXiv；MILCOM 2026 录用；经共享 cs.CR 安全扫描路由）弥补了高保障场景下 5G 独立组网安全的已知缺口：标准 3GPP 注册认证的是 SIM 凭据而非*设备*本身——移植的 SIM、被篡改的固件或伪造证书均可直接通过。该框架在标准注册**之前**插入设备认证，且不修改 3GPP 消息。

设计叠加两个独立的 X.509 挑战——gNodeB 处的外层挑战与 AMF（接入与移动性管理功能）处的内层挑战——即"双 PKI"，攻破单层不足以放行设备。硬件信任来自 **TPM 2.0 证明**：以平台配置寄存器（PCR）引用证明启动完整性。集成方式非侵入：RRC 转发门控加标准消息流的保存-重放，保持 3GPP 流程字节兼容。

原型可防御 SIM 移植、伪造证书、固件篡改与重放攻击；代价是入网时延从 1886 ms 增至 2260 ms（六次试验平均增加 373.4 ms 预认证开销）。

## Key technical points (EN)
- Gap: 3GPP registration authenticates the SIM, not the device; tactical networks need device-and-boot-integrity proof.
- Dual-PKI: independent outer (gNodeB) and inner (AMF) X.509 challenges — two trust tiers must both pass.
- TPM 2.0 PCR quotes attest boot integrity; RRC forwarding gates + save-and-replay keep 3GPP messaging unmodified.
- Defends SIM-transplant / rogue-cert / firmware-tamper / replay; +373.4 ms onboarding overhead (1886→2260 ms).

## Key technical points (ZH)
- 缺口：3GPP 注册认证 SIM 而非设备；战术网络需要设备与启动完整性证明。
- 双 PKI：gNodeB 外层与 AMF 内层独立 X.509 挑战——两级信任必须同时通过。
- TPM 2.0 PCR 引用证明启动完整性；RRC 转发门控 + 保存-重放保持 3GPP 消息不变。
- 防御 SIM 移植/伪造证书/固件篡改/重放；入网开销 +373.4 ms（1886→2260 ms）。

## Why it matters / what's new (EN)
The KB's cellular-security bin has tracked protocol-level analyses; this is its first *pre-registration device-attestation architecture*, and the non-intrusive integration pattern (gate + save-and-replay around unmodified 3GPP flows) is the transferable idea — the same pattern could retrofit attestation onto private-5G enterprise deployments, which the private-5G market growth entries make increasingly relevant.

## Why it matters / what's new (ZH)
KB 蜂窝安全类目此前多为协议层分析；本条目是首个*注册前设备证明架构*，其非侵入集成模式（在不修改 3GPP 流程外围加门控与保存-重放）是可迁移的思想——同一模式可为私有 5G 企业部署加装设备证明，而私有 5G 的市场增长使这一点日益相关。
