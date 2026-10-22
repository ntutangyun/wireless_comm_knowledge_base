---
id: 2026-10-22_arxiv-qdgsp-quantum-seeded-pq-group-signatures-5g-v2x
date_published: 2026-10-19
date_found: 2026-10-22
type: academic-paper
technology: cellular
title_en: "Quantum-Seeded Distributed Post-Quantum Group Signatures for 5G V2X Communications"
title_zh: "面向 5G V2X 通信的量子播种分布式后量子群签名"
url: "https://arxiv.org/abs/2610.27316"
source_quality: full
topics: [V2X, 5G, post-quantum, group-signature, SPHINCS+, WOTS+, ML-DSA, QKD, ETSI-ITS, DENM, C-ITS]
topic_primary: cellular-security
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
P. Blanco-Casal, P. Rejo-Iglesias, D. Cajaraville-Aboy, J. Vecino-Penas, R. P. Diaz-Redondo, A. Fernandez-Vilas and M. Fernandez Veiga (atlanTTic Research Center, Universidade de Vigo) propose qDGSP, a post-quantum security infrastructure for vehicle-to-everything (V2X) messaging over 5G access. The paper (submitted to IEEE) starts from two weaknesses of today's European C-ITS security: ECDSA signatures that a quantum adversary breaks, and pseudonym certificates whose unlinkability depends on how often they rotate rather than on cryptography.

qDGSP uses a hash-based dynamic group signature scheme (DGSP, built on SPHINCS+ and WOTS+) split between a central controller and roadside verifiers. Group keys are derived deterministically from quantum key distribution (QKD) seeds fetched over the ETSI GS QKD 014 interface, so no group-signature secret crosses the classical channel. The scheme is bound to ETSI DENM hazard messages through a signed role container that drives role-based dissemination, plus a semantic revocation cycle triggered by role-policy violations. A second mode, qDGSP-EA (Ephemeral Association), binds one short-lived ML-DSA-65 key to a single group signature for the duration of a vehicle's stay in one roadside cell, so messages are unlinkable across cells and linkable within one.

On a containerised Rust testbed with emulated 5G delay and loss profiles and load levels dimensioned from a real ETSI ITS capture, median end-to-end latency stayed within the 100 ms ETSI budget for every variant. The qDGSP-EA intra-cell DENM matched the NIST ML-DSA-65 baseline on the wire, and under load EA mode raised delivery from roughly 78% to 93%.

## Summary (ZH)
P. Blanco-Casal、P. Rejo-Iglesias、D. Cajaraville-Aboy、J. Vecino-Penas、R. P. Diaz-Redondo、A. Fernandez-Vilas 与 M. Fernandez Veiga（维戈大学 atlanTTic 研究中心）提出 qDGSP，一种面向 5G 接入上车联万物（V2X）消息的后量子安全基础设施。论文已提交 IEEE。其出发点是当前欧洲 C-ITS 安全的两个弱点：ECDSA 签名可被量子攻击者破解，以及假名证书的不可链接性取决于轮换频率而非密码学。

qDGSP 采用基于哈希的动态群签名方案（DGSP，建立在 SPHINCS+ 与 WOTS+ 之上），在中心控制器与路侧验证器之间分布式部署。群密钥由经 ETSI GS QKD 014 接口获取的量子密钥分发（QKD）种子确定性地派生，因此群签名的任何秘密都不经过经典信道。该方案通过带签名的角色容器绑定到 ETSI DENM 危险告警消息，用于基于角色的分发，并配有由角色策略违规触发的语义撤销流程。第二种模式 qDGSP-EA（Ephemeral Association，临时关联）把一个短期 ML-DSA-65 密钥绑定到一个群签名上，有效期为车辆驻留在某一路侧小区内的时间，使消息跨小区不可链接、同一小区内可链接。

在一个容器化的 Rust 测试平台上（模拟 5G 时延与丢包特性，负载水平参照真实 ETSI ITS 抓包确定），所有变体的端到端时延中位数都保持在 ETSI 的 100 ms 预算内。qDGSP-EA 的小区内 DENM 在线路上的大小与 NIST ML-DSA-65 基线相当，在负载下 EA 模式把送达率从约 78% 提高到 93%。

## Key technical points (EN)
- Three problems treated jointly: secret distribution (group key material not shipped over a classical channel), integrity of anonymity (high-entropy QKD seeds instead of software pseudorandom generators), and quality of service (100 ms DENM budget on a radio that fragments large messages).
- Fragmentation is the dominant cost: with 1 400 B effective MTUs, a single DGSP-256s transmission spans 23 IP fragments (38 for DGSP-256f). At 1% per-packet loss the paper computes about 20.6% (and 31.7%) datagram loss for those two; end-to-end delivery measured at one transmission per DENM falls to 77.0% (DGSP-256s) and 63.0% (DGSP-256f) from 100% for single-fragment schemes.
- The qDGSP-EA intra-cell DENM is 3 429 B against 3 442 B for ML-DSA-65, three fragments in both cases; the EA Announce message, sent once per cell, is 34 006 B in 25 fragments.
- Measured costs: signing with DGSP-256s takes 4 ms in median against 2 ms for ML-DSA-65 and 21 ms for Falcon-512; verification is the expensive side of DGSP (11 ms, p95 13 ms, and 22 ms for DGSP-256f) while the EA intra-cell DENM verifies in under 1 ms. Every median end-to-end latency meets the 100 ms budget (slowest is Falcon-512 at 65 ms, then DGSP-256f at 62 ms with p95 67.9 ms). Conditioned on arrival, the DENM is within budget in at least 95% of cases for the eight DENM-carrying schemes. ETSI DENM repetitions recover delivery: above 95% from four to six repetitions.
- Amortisation: with one alert per cell the EA mode is 16.5% more expensive in bytes and 20.0% in CPU (the EA Announce is paid without being shared); break-even lies between one and three alerts, and the saving reaches 78.7% in bytes and 76.0% in CPU at ten alerts per cell.
- A certificate pool of 32 WOTS+ keys costs 6.6 s of provisioning in median and 100 keys 19.7 s, off the critical path (V2N core plane).
- Residual exposure stated by the authors: deterministic seeding gives every verifier the manager secret, so opening, revocation and certification are confined to the controller by deployment policy, not cryptography; a compromised verifier could correlate one user's signatures (pseudonymous linkability) but not tie an identifier to a real vehicle.
- Out of scope: physical attacks on on-board units, attacks on the QKD network (trusted-node model assumed) and the wired backhaul. Code is released on GitLab.

## Key technical points (ZH)
- 联合处理三个问题：秘密分发（群密钥材料不经经典信道传输）、匿名性完整性（用高熵 QKD 种子取代软件伪随机数发生器）以及服务质量（在会对大消息分片的无线链路上满足 DENM 100 ms 预算）。
- 分片是主要代价：按 1 400 B 有效 MTU 计，一次 DGSP-256s 传输跨越 23 个 IP 分片（DGSP-256f 为 38 个）。在每包 1% 丢包下，论文算得这两者的数据报丢失概率约为 20.6% 与 31.7%；按每条 DENM 发送一次测得的端到端送达率，单分片方案为 100%，DGSP-256s 降至 77.0%，DGSP-256f 降至 63.0%。
- qDGSP-EA 的小区内 DENM 为 3 429 B，ML-DSA-65 为 3 442 B，二者均为三个分片；每个小区发送一次的 EA Announce 消息为 34 006 B、25 个分片。
- 实测开销：DGSP-256s 签名中位数 4 ms，ML-DSA-65 为 2 ms，Falcon-512 为 21 ms；DGSP 的开销主要在验证端（11 ms，p95 13 ms；DGSP-256f 为 22 ms），而 EA 小区内 DENM 验证不到 1 ms。各方案端到端时延中位数均满足 100 ms 预算（最慢是 Falcon-512 的 65 ms，其次是 DGSP-256f 的 62 ms，p95 为 67.9 ms）。在 DENM 到达的前提下，八种携带 DENM 的方案至少 95% 的情况在预算内。ETSI DENM 重复发送可恢复送达率：4 至 6 次重复后超过 95%。
- 摊销：每小区仅 1 条告警时 EA 模式更贵（字节多 16.5%、CPU 多 20.0%，因为 EA Announce 没有被分摊）；盈亏平衡点在 1 至 3 条告警之间，每小区 10 条告警时字节节省 78.7%、CPU 节省 76.0%。
- 32 个 WOTS+ 密钥的证书池供应耗时中位数 6.6 s，100 个为 19.7 s，发生在关键路径之外（V2N 核心网平面）。
- 作者说明的残余暴露：确定性播种使每个验证器都持有管理者秘密，因此打开签名、撤销和证书签发由部署策略而非密码学限制在控制器内；被攻陷的验证器可关联同一用户的签名（假名级可链接性），但无法把标识符与真实车辆关联。
- 范围之外：车载单元的物理攻击、QKD 网络攻击（假定可信节点模型）以及有线回传。代码已发布在 GitLab。

## Why it matters / what's new (EN)
The paper addresses V2X over 5G access (ETSI ITS DENM traffic) and puts numbers on the cost of moving a hash-based post-quantum group signature into a 100 ms hazard-warning path, where wire size and IP fragmentation, not signing time, dominate. The measurements come from the authors' emulated testbed (emulated 5G links, load dimensioned from one real ETSI ITS capture), not from a live cellular network, and QKD is assumed available at roadside nodes. For the cellular-security bin it adds a V2X/PQC data point alongside the core-network and baseband entries; there is no existing entry on group signatures for C-ITS.

## Why it matters / what's new (ZH)
本文面向 5G 接入上的 V2X（ETSI ITS DENM 业务），量化了把基于哈希的后量子群签名放入 100 ms 危险告警路径的代价：起主导作用的是线路大小与 IP 分片，而不是签名时间。测量数据来自作者的仿真测试平台（模拟 5G 链路，负载参照一次真实 ETSI ITS 抓包确定），而非实际蜂窝网络，并且假定路侧节点具备 QKD 能力。对蜂窝安全主题而言，它在核心网与基带条目之外补充了 V2X/后量子的数据点；KB 中此前没有关于 C-ITS 群签名的条目。

## Images

None.
