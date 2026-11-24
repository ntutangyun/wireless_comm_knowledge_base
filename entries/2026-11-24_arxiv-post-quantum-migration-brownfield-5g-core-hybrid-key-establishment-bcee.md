---
id: 2026-11-24_arxiv-post-quantum-migration-brownfield-5g-core-hybrid-key-establishment-bcee
date_published: 2026-11-20
date_found: 2026-11-24
type: academic-paper
technology: cellular
title_en: "Post-Quantum Migration in Brownfield 5G Core Networks: Verified Hybrid Key Establishment, Performance, and Rollback"
title_zh: "棕地 5G 核心网的后量子迁移：经验证的混合密钥建立、性能与回退"
url: "https://arxiv.org/abs/2611.27735"
source_quality: full
topics: [post-quantum-cryptography, 5G-core, service-based-architecture, TLS-1.3, X25519MLKEM768, Open5GS, hybrid-key-establishment, rollback]
topic_primary: cellular-security
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Shubham Verma (Centre for Development of Telematics, C-DOT, New Delhi) evaluates a way to introduce hybrid post-quantum/traditional key establishment into a 5G Core without modifying the source code of the participating network functions (NFs). Two externally deployed Boundary Cryptographic Execution Entities (BCEEs, realized with nghttpx) mediate one Open5GS AMF-NRF Service-Based Interface (SBI) path, and the TLS 1.3 key-establishment profile on the segment between the two BCEEs is switched between classical X25519 and the hybrid X25519MLKEM768 group. The paper reports packet evidence of the negotiated group, latency over 120 NF-registration transactions, and packet-verified manual rollback. The paper is marked as accepted at ICCSAI 2026.

## Summary (ZH)

Shubham Verma（印度电信发展中心 C-DOT，新德里）评估了一种在不修改参与网络功能（NF）源代码的前提下，向 5G 核心网引入混合后量子/传统密钥建立的方法。两个外部部署的边界密码执行实体（BCEE，以 nghttpx 实现）对一条 Open5GS AMF-NRF 服务化接口（SBI）路径进行中介，两个 BCEE 之间链路段上的 TLS 1.3 密钥建立配置在经典 X25519 与混合 X25519MLKEM768 组之间切换。论文给出了协商所用组的抓包证据、120 次 NF 注册事务的时延，以及经抓包验证的手动回退。该论文标注为已被 ICCSAI 2026 接收。

## Key technical points (EN)

- Setup: three states are compared. C0 is the native AMF-NRF path with no mediation; C1 is the BCEE-mediated path with classical TLS 1.3 X25519 on the inter-BCEE segment (S2); C2 uses the same mediated topology with X25519MLKEM768 (RFC 10024 NamedGroup 4588, 0x11EC) on S2. The NF-facing legs (S1, S3) were plaintext HTTP in the laboratory and are outside the hybrid scope; endpoint authentication on S2 still uses the existing classical certificate signatures, and post-quantum authentication is described as a separate migration step.
- Testbed: containerized Open5GS v2.7.6, nghttpx/nghttp2 1.63.0, OpenSSL 3.0.13 with oqsprovider 0.12.0-dev, in an Ubuntu 22.04 VM (4 vCPUs, 8 GB RAM) on a laptop host. The authors note that OpenSSL 3.5 and later support X25519MLKEM768 natively, and re-baselining onto such a release is listed as next-stage work.
- Packet evidence: in a synchronized C2 capture the ClientHello offers NamedGroup 4588 with a 1216-byte key share and the ServerHello selects it with a 1120-byte key share. An NF-instance identifier is the same on the AMF-originated request, the mediated request and the NRF 201 Created response. All 60 C1 trials showed NamedGroup 29 (32/32-byte shares) and all 60 C2 trials NamedGroup 4588.
- Functional validation: PUT (NF registration, 201 Created), POST (NRF subscription, 201 Created), GET (NF-resource retrieval, 200 OK) and PATCH (NF-profile update, 204 No Content, repeated at about 10-s intervals) completed through the hybrid-mediated path.
- Latency: a pre-specified balanced 12-block sequence (six blocks per state, ten fresh registrations per block, 120 observations, all retained) gave a median AMF-facing NF-registration latency of 22.968 ms (C1) and 26.351 ms (C2), a +3.383 ms (14.73%) difference with a whole-block 95% bootstrap CI of [1.193, 7.872] ms. Median S2 TLS-establishment time rose from 10.652 ms to 15.251 ms (+4.599 ms, 43.2%). The authors state both are system-level runtime effects and do not isolate the key-encapsulation cost.
- Rollback: separate captures show C2 to C1 (NamedGroup 4588 then 29) and C1 to C0 (no frames on port 8443; the AMF reaches the NRF directly on port 7777), with successful SBI procedures after each. Each reversal was exercised once, so the result supports operational reversibility rather than transition-time statistics.
- Stated scope limits: one AMF-NRF relationship on a single virtualized host, fresh connections rather than connection reuse; next-stage work lists additional NF pairs, connection reuse, CPU and memory cost, BCEE placements, failover, post-quantum authentication and automated crypto-state monitoring. The paper distinguishes the BCEE role from the 3GPP Service Communication Proxy (SCP).

## Key technical points (ZH)

- 设置：对比三种状态。C0 为无中介的原生 AMF-NRF 路径；C1 为经 BCEE 中介的路径，两个 BCEE 之间的链路段（S2）使用经典 TLS 1.3 X25519；C2 保持相同的中介拓扑，在 S2 上使用 X25519MLKEM768（RFC 10024 NamedGroup 4588，0x11EC）。面向 NF 的链路段（S1、S3）在实验室中为明文 HTTP，不在混合保护范围内；S2 上的端点认证仍使用现有经典证书签名，后量子认证被描述为单独的迁移步骤。
- 测试床：容器化 Open5GS v2.7.6、nghttpx/nghttp2 1.63.0、带 oqsprovider 0.12.0-dev 的 OpenSSL 3.0.13，运行于笔记本主机上的 Ubuntu 22.04 虚拟机（4 vCPU、8 GB 内存）。作者指出 OpenSSL 3.5 及之后版本原生支持 X25519MLKEM768，迁移到此类版本被列为下一阶段工作。
- 抓包证据：在同步的 C2 抓包中，ClientHello 提供 NamedGroup 4588 及 1216 字节密钥共享，ServerHello 选择该组并携带 1120 字节密钥共享。AMF 发出的请求、中介后的请求以及 NRF 的 201 Created 响应中 NF 实例标识相同。全部 60 次 C1 试验均为 NamedGroup 29（32/32 字节共享），全部 60 次 C2 试验均为 NamedGroup 4588。
- 功能验证：PUT（NF 注册，201 Created）、POST（NRF 订阅，201 Created）、GET（NF 资源获取，200 OK）和 PATCH（NF 配置更新，204 No Content，约每 10 秒重复一次）均通过混合中介路径完成。
- 时延：预先设定的均衡 12 块序列（每种状态 6 块，每块 10 次新注册，共 120 个观测，全部保留）显示，面向 AMF 一侧的 NF 注册时延中位数在 C1 为 22.968 ms，C2 为 26.351 ms，差值 +3.383 ms（14.73%），整块自助法 95% 置信区间为 [1.193, 7.872] ms。S2 TLS 建立时间中位数从 10.652 ms 升至 15.251 ms（+4.599 ms，43.2%）。作者声明两者都是系统级运行效应，并不单独反映密钥封装的代价。
- 回退：另行抓包显示 C2 到 C1（先出现 NamedGroup 4588，随后为 29）以及 C1 到 C0（端口 8443 上无报文；AMF 直接经端口 7777 访问 NRF），每次回退之后 SBI 流程均成功。每种回退只执行一次，因此结果支持的是操作上的可回退性，而非切换时间统计。
- 文中声明的范围限制：仅一对 AMF-NRF 关系、单台虚拟化主机、新建连接而非连接复用；下一阶段工作包括更多 NF 对、连接复用、CPU 与内存开销、BCEE 部署位置、故障切换、后量子认证和自动化密码状态监控。论文区分了 BCEE 角色与 3GPP 服务通信代理（SCP）。

## Why it matters / what's new (EN)

The distinguishing element is the packet-level evidence chain: the same NF-instance identifier is followed across the mediated request, the TLS session and the response, the negotiated group is read from the handshake rather than inferred from successful SBI traffic, and both rollback steps are captured. The evidence comes from one AMF-NRF path on a single laptop-hosted VM, and the paper itself reads the latencies as comparative system measurements, not production benchmarks.

## Why it matters / what's new (ZH)

其区别点在于抓包层面的证据链：同一 NF 实例标识被贯穿于中介请求、TLS 会话与响应之间，所协商的组是从握手中读取而非由 SBI 流量成功与否推断，并且两步回退均有抓包记录。证据来自单台笔记本虚拟机上的一条 AMF-NRF 路径，论文自身也将时延解读为比较性的系统测量，而非生产基准。

## Images

None.
