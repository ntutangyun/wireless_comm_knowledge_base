---
id: 2026-08-26_arxiv-nft-soft-pairing-bluetooth-access-control
date_published: 2026-08-24
date_found: 2026-08-26
type: academic-paper
technology: bluetooth
title_en: "NFT 'soft pairing' for Bluetooth service access control: decoupling authorization from pairing via on-chain user/device token binding (ERC1155, MetaMask + Raspberry Pi prototype, ~1.09 s authentication, 93.4% batch-mint gas reduction)"
title_zh: "面向蓝牙服务访问控制的 NFT『软配对』：通过链上用户/设备代币双向绑定将授权与配对解耦（ERC1155，MetaMask + 树莓派原型，认证约 1.09 秒，批量铸造省 93.4% gas）"
url: "https://arxiv.org/abs/2608.22754"
source_quality: full
topics: [Bluetooth, access-control, pairing, authorization, blockchain, NFT, ERC1155, revocation, challenge-response]
topic_primary: bt-security
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Liang, Chen, Wu, Peng, Sun, and Wang (arxiv 2608.22754, cs.CR, submitted August 24, 2026; 9 pages, 4 figures, 3 tables, no venue stated) start from an architectural observation about Bluetooth access control: pairing implicitly grants persistent, all-or-nothing service access — once two devices are bonded, there is no native way to authorize a specific user for a specific service for a bounded time, to transfer that authorization, or to revoke it short of deleting the bond. Their proposal, "NFT soft pairing," keeps the native Bluetooth pairing/link layer untouched and adds an application-layer authorization overlay backed by a blockchain: a three-layer architecture with a Bluetooth layer for connectivity, a blockchain layer for trusted execution and on-chain state, and an application layer where the authorization logic lives.

Two token types carry the model: Non-Fungible Bluetooth Tokens (NFBTs) are user-side access credentials, and Non-Fungible Device Tokens (NFDTs) represent device identities. A bidirectional on-chain binding between an NFBT and an NFDT constitutes the revocable, verifiable "soft pairing." At access time the user proves ownership of a valid NFBT through a challenge–response signature (a fresh random nonce defeats replay); the device recovers the signer address via ECDSA, then performs a read-only view call against the chain — signer address + NFBT ID + device identifier — to check live authorization state before granting service access. Because verification is a view call, no transaction or block confirmation is on the access path.

The prototype uses Ethereum smart contracts, a Vue.js + Web3.js DApp with MetaMask for user signing, and a Raspberry Pi 4B as the Bluetooth service device (the paper references Classic BR/EDR but is thin on transport specifics — no GATT/profile or role details). Measured authentication overhead totals ~1.09 s versus direct Bluetooth: 0.335 ms challenge generation, 990.26 ms MetaMask user signing (the dominant term), 104.36 ms blockchain verification. Credential issuance on ERC1155 costs 134,625 gas per mintNFBT() and 197,441 gas per registerDevice(); batch-minting 15 credentials cuts gas by approximately 93.4% versus one-by-one issuance. Validation scenarios confirm expired tokens and missing NFBTs are denied and revocation takes effect dynamically. Comparison to prior work is qualitative only (certificate-based schemes are dismissed for centralized-CA risk; protocol-layer mitigations for poor compatibility), and there is no formal threat model or security proof.

## Summary (ZH)

Liang、Chen、Wu、Peng、Sun、Wang（arxiv 2608.22754，cs.CR，2026 年 8 月 24 日提交；9 页、4 图、3 表，未注明目标会议）从蓝牙访问控制的一个架构性观察出发：配对隐含地授予持久的、全有或全无的服务访问权——两台设备一旦完成绑定，原生机制无法做到"授权特定用户在限定时间内使用特定服务"、无法转让该授权，也无法在不删除绑定的前提下撤销它。他们提出的"NFT 软配对"不改动蓝牙原生配对/链路层，而是在应用层叠加一个由区块链支撑的授权层：三层架构中，蓝牙层负责连接，区块链层负责可信执行与链上状态，应用层承载授权逻辑。

模型由两类代币承载：非同质化蓝牙代币（NFBT）是用户侧访问凭证，非同质化设备代币（NFDT）代表设备身份。NFBT 与 NFDT 之间的链上双向绑定即构成可撤销、可验证的"软配对"关系。访问时，用户通过挑战-应答签名证明持有有效 NFBT（动态生成的随机 nonce 防重放）；设备用 ECDSA 恢复签名者地址，再以只读 view 调用查询链上状态——签名者地址 + NFBT ID + 设备标识——确认实时授权后才放行服务访问。由于验证是 view 调用，访问路径上不需要交易上链或区块确认。

原型采用以太坊智能合约、Vue.js + Web3.js DApp 配 MetaMask 完成用户签名、树莓派 4B 作为蓝牙服务设备（论文提及经典蓝牙 BR/EDR，但传输层细节较薄——未说明 GATT/profile 或主从角色）。实测认证开销相对直连蓝牙共约 1.09 秒：挑战生成 0.335 毫秒、MetaMask 用户签名 990.26 毫秒（占主导）、链上验证 104.36 毫秒。凭证发行基于 ERC1155：mintNFBT() 134,625 gas，registerDevice() 197,441 gas；批量铸造 15 张凭证较逐张发行省约 93.4% gas。验证场景确认过期代币与无 NFBT 均被拒绝、撤销动态生效。与已有工作的对比仅为定性（基于证书的方案因中心化 CA 风险被排除；协议层缓解因兼容性差被排除），且没有形式化威胁模型或安全证明。

## Key technical points (EN)

- Problem framed: native Bluetooth pairing conflates link establishment with authorization — persistent, all-or-nothing, non-transferable, revocable only by unbonding; the overlay decouples them with zero protocol-stack modification.
- Token model: NFBT (user credential) + NFDT (device identity); their bidirectional on-chain binding is the revocable "soft pairing" record; ERC1155 multi-token standard enables batch issuance (93.4% gas reduction at 15 credentials).
- Access flow: challenge–response with fresh random nonce → ECDSA signer recovery on the device → read-only on-chain view call (signer address, NFBT ID, device ID) → grant/deny; no block confirmation on the access path, but the device must be able to query the chain at access time.
- Measured overhead: ~1.09 s total authentication vs direct Bluetooth (challenge 0.335 ms, MetaMask signing 990.26 ms, chain verification 104.36 ms) — user-interaction signing, not blockchain, is the bottleneck.
- Gas: mintNFBT() 134,625; buyNFBT() 95,598; softPairingEstablished() 132,615; registerDevice() 197,441.
- Security scope: motivated against downgrade-to-Just-Works, method-confusion, pairing-confusion, and Stealtooth attacks; replay countered by nonce; scenario table covers expired/missing/revoked tokens. No formal adversary model; comparison to prior blockchain-IoT access control is qualitative only.
- Prototype: Ethereum + Vue.js/Web3.js DApp + MetaMask; Raspberry Pi 4B as the Bluetooth service device; Classic BR/EDR referenced, transport/profile details unspecified.

## Key technical points (ZH)

- 问题界定：蓝牙原生配对把链路建立与授权混为一体——持久、全有或全无、不可转让、只能通过解除绑定撤销；该覆盖层在零协议栈改动下将二者解耦。
- 代币模型：NFBT（用户凭证）+ NFDT（设备身份）；二者的链上双向绑定即可撤销的"软配对"记录；ERC1155 多代币标准支持批量发行（15 张凭证省 93.4% gas）。
- 访问流程：新鲜随机 nonce 的挑战-应答 → 设备端 ECDSA 恢复签名者地址 → 只读链上 view 调用（签名者地址、NFBT ID、设备 ID）→ 放行/拒绝；访问路径无需区块确认，但设备在访问时必须能查询链。
- 实测开销：认证总计约 1.09 秒（挑战 0.335 ms、MetaMask 签名 990.26 ms、链上验证 104.36 ms）——瓶颈是用户交互签名而非区块链。
- Gas：mintNFBT() 134,625；buyNFBT() 95,598；softPairingEstablished() 132,615；registerDevice() 197,441。
- 安全范围：动机对标 Just Works 降级、method confusion、pairing confusion、Stealtooth 等攻击；nonce 防重放；场景表覆盖过期/缺失/撤销代币。无形式化敌手模型；与既有区块链-IoT 访问控制的对比仅为定性。
- 原型：以太坊 + Vue.js/Web3.js DApp + MetaMask；树莓派 4B 作蓝牙服务设备；提及经典 BR/EDR，传输/profile 细节未说明。

## Why it matters / what's new (EN)

The durable idea here is the gap it names, not the blockchain dressing: Bluetooth genuinely lacks a service-level authorization layer — bonding is a link-layer trust decision that silently becomes a permanent application-layer permission, which is why shared devices (rental scooters, hotel locks, fleet equipment, hearing-aid fitting) all reinvent proprietary cloud-token schemes on top of GATT/RFCOMM. This paper is the first KB entry to attack that seam directly, and its "decouple authorization from pairing, keep the stack untouched, make grants revocable/transferable/expirable" framing is transferable even if one swaps the chain for an ordinary server. The honest caveats are significant: blockchain-token access control for IoT is a crowded genre and the Bluetooth-specific contribution is mostly the NFBT/NFDT binding abstraction; the device must be online to the chain at access time (contradicting Bluetooth's offline-capable model, and no caching/offline fallback is described); the ~1 s added latency is dominated by MetaMask interaction; there is no venue, no formal threat model, and only qualitative comparison to prior art. Within the KB's bt-security bin — previously attack-focused (Snatcher Find My tracking, CS ToA-reduction, RFF impersonation) — this is the first defensive/architectural access-control entry, and the first blockchain-flavored Bluetooth entry; novelty 2 reflects a real gap plus a measured working prototype, capped by the well-trodden genre and unproven practicality.

## Why it matters / what's new (ZH)

这篇论文真正耐久的是它点出的缺口，而非区块链包装：蓝牙确实缺少服务级授权层——绑定本是链路层的信任决策，却悄然变成永久的应用层许可，这正是共享设备（租赁滑板车、酒店门锁、车队设备、助听器验配）都要在 GATT/RFCOMM 之上各自重造私有云端令牌方案的原因。本文是知识库中第一篇直接切入这条缝隙的条目，其"授权与配对解耦、协议栈不动、授权可撤销/可转让/可过期"的框架即使把链换成普通服务器也依然成立。诚实的局限同样明显：区块链代币式 IoT 访问控制是拥挤的研究方向，蓝牙特有的贡献主要是 NFBT/NFDT 绑定抽象；设备在访问时必须能连上链（与蓝牙可离线工作的模型相悖，文中未描述缓存/离线回退）；约 1 秒的附加时延由 MetaMask 交互主导；无目标会议、无形式化威胁模型、与既有工作仅有定性对比。在知识库此前以攻击为主的 bt-security 栏目（Snatcher Find My 追踪、CS ToA 缩距攻击、RFF 冒充）中，这是第一篇防御性/架构性访问控制条目，也是第一篇区块链主题的蓝牙条目；novelty 2 反映"真实缺口 + 有实测的可用原型"，但受制于方向拥挤与实用性未证。

## Images
