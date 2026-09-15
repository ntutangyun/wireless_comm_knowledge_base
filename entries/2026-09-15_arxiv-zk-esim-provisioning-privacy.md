---
id: 2026-09-15_arxiv-zk-esim-provisioning-privacy
date_published: 2026-09-07
date_found: 2026-09-15
type: academic-paper
technology: cellular
title_en: "ZK-eSIM: A Privacy-Centric Zero-Knowledge Approach for eSIM Provisioning"
title_zh: "ZK-eSIM：面向 eSIM 配置流程的隐私优先零知识证明方案"
url: "https://arxiv.org/abs/2609.07654"
source_quality: full
topics: [eSIM, RSP, GSMA, zero-knowledge-proof, unlinkability, privacy]
topic_primary: cellular-security
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Liza Ahmad, Quan Shi, Joshua Haworth, Yilu Dong, Prosanta Gope, Behzad Abdolmaleki and Syed Rafiul Hussain present ZK-eSIM, a privacy-preserving redesign of GSMA's Consumer Remote SIM Provisioning (RSP) workflow, accepted to ACM CCS 2026. The paper identifies three concrete privacy risks in conventional RSP: (R1) the device's permanent identifier (EID) is bound to subscriber account data during profile ordering, letting operators and SM-DP+ servers link the two; (R2) the same long-lived EID is reused across independent profile downloads, so an SM-DP+ can infer that separate downloads belong to the same eUICC even across different operators sharing infrastructure; and (R3) long-lived certificate material exchanged during authentication acts as a persistent device fingerprint even if the EID itself is hidden. The authors motivate the work by citing Juniper Research's finding that travel-eSIM usage was up 85% in 2025, which multiplies the number of provisioning events a device is exposed to.

ZK-eSIM replaces direct EID disclosure with zero-knowledge proofs of device eligibility across a sequence of protocol phases. In Registration (Phase 0.a), the device presents its EID to the MNO for eligibility/KYC checks — this phase is not designed to hide the user's identity from the issuer, since mandatory subscriber registration means the MNO learns the subscriber's identity here — and, once eligibility is established, the eUICC receives an unlinkable eligibility credential bound to it via blind signature. Per-session Certificate Initialisation (Phase 0.b) has the device derive a fresh ephemeral keypair and prove in zero knowledge that the new key belongs to the same eligibility-checked device, receiving a short-lived, time-bounded pseudonym certificate. In the Pseudonymous Profile Request (Phase 1), the device derives a per-session pseudonym and proves possession of a valid eligibility credential without disclosing the EID to the MNO's provisioning-side view, while separately encrypting the EID under a law-enforcement-agency (LEA) public key for escrow. The MNO then authorises the order (Phase 2) using only a hashed pseudonym and a one-time token, before Unlinkable Download Initialisation and Privacy-Preserving Profile Provisioning (Phases 3–4) complete delivery via the pseudonym certificate. Two supporting procedures complete the design: per-epoch Settlement reconciling one-time tokens between MNO and SM-DP+, and accountable Deanonymisation, in which the LEA alone decrypts the MNO-held escrowed EID under a warrant and the MNO then resolves it against KYC records — the paper states that "no single entity can unilaterally deanonymise a user" because identifying a specific subscriber requires this joint LEA–MNO step, even though EID decryption itself is performed solely by the LEA. A Java Card applet prototype was implemented on a test eUICC (sysmoEUICC1-C2T) together with a modified open-source SM-DP+ server (osmo-smdpp) and Local Profile Assistant (lpac), using a simplified EC-based Schnorr proof for identity, SHA256-based commitments during certificate initialisation, and ECDH for key agreement (the paper cites BBS+ credentials only as one possible instantiation of the eligibility credential, and treats Pedersen commitments only in its appendix construction, not the prototype). Averaged over 25 runs, the end-to-end cryptographic cost rises from 53.660s (commercial RSP: Certificate Initialisation 7ms, Order Profile 1073ms, Profile Download 52580ms) to 98.199s for ZK-eSIM (Registration 9964ms, Certificate Initialisation 10448ms, Order Profile 18432ms, Profile Download 59355ms) — an approximate 83% increase in cryptographic processing time. The newly introduced Registration phase (absent from commercial RSP, since it happens once before protocol initialisation) is one contributing factor; considering only the phases already present in commercial RSP, the cost increases by about 64%, with the two zero-knowledge-proof phases — Certificate Initialisation and Order/Profile-Request processing — contributing the most (+10.441s and +17.359s respectively). The paper additionally proves session unlinkability and both MNO- and SM-DP+-side unforgeability (Theorems 1–3), and reports a server-side load test scaling to 1,000,000 concurrent download requests, with peak memory staying near 1 GB across all three server roles.

## Summary (ZH)

Liza Ahmad、Quan Shi、Joshua Haworth、Yilu Dong、Prosanta Gope、Behzad Abdolmaleki 与 Syed Rafiul Hussain 提出了 ZK-eSIM，一套针对 GSMA 消费级远程 SIM 配置（Remote SIM Provisioning, RSP）流程的隐私保护重新设计方案，已被 ACM CCS 2026 接收。论文指出传统 RSP 存在三个具体隐私风险：（R1）设备的永久标识符（EID）在订购配置文件阶段与订阅账户数据绑定，使运营商与 SM-DP+ 服务器能够将二者关联；（R2）同一长期 EID 在多次独立的配置文件下载中被重复使用，使得即便跨越共享基础设施的不同运营商，SM-DP+ 也能推断出不同下载来自同一 eUICC；（R3）认证阶段交换的长期证书材料即便在 EID 本身被隐藏的情况下，也会成为持久性的设备指纹。作者援引 Juniper Research 的数据——2025 年旅行 eSIM 使用量增长了 85%——作为研究动机，这使得单台设备暴露于更多配置流程之中。

ZK-eSIM 用零知识证明取代了直接披露 EID 的做法，涵盖一系列协议阶段：在注册阶段（Phase 0.a），设备向 MNO 出示 EID 以完成资格审查/KYC——该阶段的目的并非在注册环节向签发方隐藏用户身份（由于强制性的用户实名注册要求，MNO 会在此阶段获知用户身份），而是在资格审查通过后，eUICC 通过盲签名获得一份与其绑定、但后续可不可关联使用的资格凭证。按会话进行的证书初始化阶段（Phase 0.b）中，设备派生出全新的临时密钥对，并以零知识方式证明该密钥属于同一已通过资格审查的设备，从而获得有效期受限的短期化名证书。化名请求阶段（Phase 1）中，设备派生出按会话变化的化名，并证明其持有有效的资格凭证，而不向 MNO 在配置侧的视图泄露 EID，同时将 EID 用执法机构（LEA）的公钥加密后交由托管。随后 MNO 仅凭化名哈希与一次性令牌完成订单授权（Phase 2），再由"解除可关联下载初始化"与"隐私保护配置文件配置"两阶段（Phase 3–4）通过化名证书完成交付。两个配套流程完善了整体设计：按周期在 MNO 与 SM-DP+ 之间核对一次性令牌的结算流程，以及可问责的去匿名化流程——由 LEA 单独在授权令状下解密 MNO 保存的托管 EID 密文，随后 MNO 将其与 KYC 记录进行比对。论文写明"任何单一实体均无法单方面对用户去匿名化"，这里"去匿名化"（即定位到具体用户）需要 LEA 与 MNO 联合完成，尽管 EID 密文本身仅由 LEA 单方解密。作者在一枚测试 eUICC（sysmoEUICC1-C2T）上实现了 Java Card applet 原型，并配合修改后的开源 SM-DP+ 服务器（osmo-smdpp）与本地配置文件助手（lpac），采用简化版基于椭圆曲线的 Schnorr 身份证明、证书初始化阶段使用基于 SHA256 的承诺，以及用于密钥协商的 ECDH（论文中 BBS+ 凭证仅作为资格凭证的一种可选实现方式被提及，Pedersen 承诺也仅出现在附录构造中，均未用于原型实现）。在 25 次运行的平均结果中，端到端加密成本从商用 RSP 的 53.660 秒（证书初始化 7 毫秒、订购配置文件 1073 毫秒、配置文件下载 52580 毫秒）上升至 ZK-eSIM 的 98.199 秒（注册 9964 毫秒、证书初始化 10448 毫秒、订购配置文件 18432 毫秒、配置文件下载 59355 毫秒），加密处理时间增加约 83%。新增的注册阶段（商用 RSP 中不存在，因为该步骤发生在协议初始化之前）是差异的原因之一；若仅统计商用 RSP 已有的各阶段，成本增幅约为 64%，其中两个包含零知识证明的阶段——证书初始化与订单/配置文件请求处理——贡献了最大部分增量（分别为 +10.441 秒与 +17.359 秒）。论文还证明了会话不可关联性以及 MNO 侧与 SM-DP+ 侧的不可伪造性（定理 1–3），并报告了服务器端负载测试，并发下载请求规模扩展至 1,000,000 次，三种服务器角色的峰值内存均维持在约 1 GB 左右。

## Key technical points (EN)

- Three named privacy risks in conventional GSMA RSP: R1 identity-EID binding at subscription, R2 cross-session EID linkability across profile downloads (including across operators sharing SM-DP+ infrastructure), R3 certificate-chain fingerprinting even when EID is hidden.
- Phased protocol: Registration/Phase 0.a (EID presented for eligibility/KYC — not hidden from the MNO at this step — issuing a blind-signed eligibility credential), Certificate Initialisation/Phase 0.b (fresh ephemeral keypair + ZK proof of same-device continuity, issuing a short-lived pseudonym certificate), Pseudonymous Profile Request/Phase 1 (per-session pseudonym, ZK proof of eligibility without disclosing EID to the MNO's provisioning view, EID encrypted to the LEA's public key for escrow), Order Authorisation/Phase 2 (MNO authorises using only a hashed pseudonym + one-time token), Phases 3–4 (Unlinkable Download Initialisation and Privacy-Preserving Provisioning), plus supporting Settlement and Deanonymisation procedures.
- One-time authorization tokens bound to (hashed pseudonym, cert hash, MNO id, expiry) with a spent-token list at the SM-DP+ to block replay/double-spend.
- Accountability: the LEA alone decrypts the MNO-held escrowed EID under a warrant; deanonymizing a specific user then requires the MNO to resolve that EID against KYC records — so no single party can unmask a user unilaterally, even though decryption itself is a single-party (LEA) operation.
- Prototype: Java Card applet on a test eUICC (sysmoEUICC1-C2T), modified open-source LPA (lpac) and SM-DP+ server (osmo-smdpp); a simplified EC-Schnorr identity proof, SHA256-based commitments (certificate initialisation), and ECDH — BBS+-style credentials are cited only as one possible instantiation and Pedersen commitments appear only in the appendix construction, not the prototype.
- Headline cost numbers (Table 2, averaged over 25 runs): commercial RSP end-to-end 53.660s (Certificate Init 7ms, Order Profile 1073ms, Profile Download 52580ms, no Registration phase) vs. ZK-eSIM 98.199s (Registration 9964ms, Certificate Init 10448ms, Order Profile 18432ms, Profile Download 59355ms) — roughly an 83% increase in cryptographic processing time; restricted to phases commercial RSP already has, the increase is ~64%, with the two ZK-proof phases (Certificate Init, Order/Profile-Request) contributing the most (+10.441s, +17.359s).
- Also proves session unlinkability and MNO-/SM-DP+-side unforgeability (Theorems 1–3) and reports a server load test to 1,000,000 concurrent download requests (peak memory ~1 GB across all three server roles).
- 22-page paper, accepted ACM CCS 2026.

## Key technical points (ZH)

- 传统 GSMA RSP 中的三项具名隐私风险：R1 订阅阶段身份与 EID 绑定；R2 跨配置文件下载的 EID 可关联性（包括跨运营商共享 SM-DP+ 基础设施的情形）；R3 即便 EID 被隐藏，证书链仍可作为设备指纹。
- 分阶段协议：注册／Phase 0.a（出示 EID 以完成资格审查/KYC——该阶段并不向 MNO 隐藏 EID——随后通过盲签名签发资格凭证）、证书初始化／Phase 0.b（生成全新临时密钥对并以零知识证明其与同一已通过资格审查设备的连续性，签发短期化名证书）、化名请求／Phase 1（派生按会话变化的化名，零知识证明资格凭证有效且不向 MNO 在配置侧的视图泄露 EID，同时将 EID 用 LEA 公钥加密托管）、订单授权／Phase 2（MNO 仅凭化名哈希与一次性令牌完成授权）、Phase 3–4（解除可关联下载初始化与隐私保护配置文件配置），以及配套的结算与去匿名化流程。
- 一次性授权令牌绑定至（化名哈希、证书哈希、MNO 标识、有效期），SM-DP+ 维护已使用令牌列表以阻止重放/双花。
- 可问责性：LEA 在授权令状下单方解密 MNO 保存的托管 EID 密文；若要将其定位到具体用户，还需 MNO 将其与 KYC 记录比对——因此任何单一实体均无法单方面揭露用户身份，尽管密文解密本身是 LEA 单方操作。
- 原型实现：一枚测试 eUICC（sysmoEUICC1-C2T）上的 Java Card applet、修改版开源 LPA（lpac）与 SM-DP+ 服务器（osmo-smdpp）；采用简化版基于椭圆曲线的 Schnorr 身份证明、证书初始化阶段使用基于 SHA256 的承诺，以及 ECDH——BBS+ 风格凭证仅作为资格凭证的一种可选实现被提及，Pedersen 承诺也仅出现在附录构造中，均未用于原型。
- 核心开销数据（表 2，25 次运行均值）：商用 RSP 端到端 53.660 秒（证书初始化 7 毫秒、订购配置文件 1073 毫秒、配置文件下载 52580 毫秒，无注册阶段）；ZK-eSIM 端到端 98.199 秒（注册 9964 毫秒、证书初始化 10448 毫秒、订购配置文件 18432 毫秒、配置文件下载 59355 毫秒）——加密处理时间增加约 83%；若仅统计商用 RSP 已有阶段，增幅约为 64%，其中两个包含零知识证明的阶段（证书初始化、订单/配置文件请求处理）贡献最大（分别 +10.441 秒、+17.359 秒）。
- 论文还证明了会话不可关联性以及 MNO 侧、SM-DP+ 侧的不可伪造性（定理 1–3），并报告了并发下载请求规模扩展至 1,000,000 次的服务器负载测试（三种服务器角色峰值内存均约 1 GB）。
- 论文共 22 页，已被 ACM CCS 2026 接收。

## Why it matters / what's new (EN)

This KB already carries one eSIM-privacy entry, Di5Guise/vSIM (2026-06-17), which attacks device-profile linkability from the TEE/device-attestation side of 5G-AKA. ZK-eSIM targets a different layer entirely — the GSMA RSP provisioning protocol itself, before any profile or 5G-AKA credential exists on the device — and covers the ordering/download workflow end to end (registration, certificate issuance, request, delivery) rather than a single attestation step. It is also the first entry in this KB to pair a cellular privacy redesign with an explicit, protocol-level lawful-escrow mechanism (joint LEA+MNO deanonymization) rather than treating privacy and accountability as a trade-off resolved outside the protocol.

## Why it matters / what's new (ZH)

本知识库此前已收录一篇 eSIM 隐私相关条目 Di5Guise/vSIM（2026-06-17），其攻击面位于 5G-AKA 的 TEE/设备证明一侧的设备-配置文件可关联性问题。ZK-eSIM 针对的是完全不同的层面——GSMA RSP 配置协议本身，其作用时点早于设备上出现任何配置文件或 5G-AKA 凭证之前——并覆盖了订购到下载的完整流程（注册、证书签发、请求、交付），而非单一的证明步骤。这也是本知识库首次收录一篇将蜂窝隐私重新设计与协议层面显式的合法托管机制（LEA 与 MNO 联合去匿名化）相结合的条目，而非将隐私与可问责性的权衡留给协议之外解决。

## Images

![ZK-eSIM protocol phase overview: registration, certificate initialisation, pseudonymous request and provisioning | ZK-eSIM 协议阶段总览：注册、证书初始化、化名请求与配置流程](https://arxiv.org/html/2609.07654v1/overview.png)
![Java Card applet test setup used for the ZK-eSIM prototype evaluation | ZK-eSIM 原型评估所用的 Java Card applet 测试环境](https://arxiv.org/html/2609.07654v1/applet_test_setup.png)
