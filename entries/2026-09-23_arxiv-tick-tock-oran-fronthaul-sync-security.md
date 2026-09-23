---
id: 2026-09-23_arxiv-tick-tock-oran-fronthaul-sync-security
date_published: 2026-09-18
date_found: 2026-09-23
type: academic-paper
technology: cellular
title_en: "Tick-Tock on the Open Fronthaul: Securing Synchronization in O-RAN"
title_zh: "开放前传网络中的时钟博弈：O-RAN 同步安全防护"
url: "https://arxiv.org/abs/2609.22525"
source_quality: full
topics: [O-RAN, open-fronthaul, PTP, IEEE-1588, TESLA, ASCON, DU-RU, timing-security]
topic_primary: cellular-security
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)

Yiwei Zhang, Enrico Pisanti, Imtiaz Karim, Subangkar Karmaker Shanto and Elisa Bertino address a gap the paper says current O-RAN specifications acknowledge but leave unresolved: the Precision Time Protocol (PTP / IEEE 1588) carrying synchronization between the Distributed Unit (DU) and Radio Units (RUs) over the open fronthaul lacks mandatory authentication or integrity protection. The threat model covers a man-in-the-middle on the fronthaul link who can eavesdrop, inject, forge, drop, replay PTP packets or introduce asymmetric delay to bias timing estimates, plus an adversary who partially compromises an RU and extracts locally stored key material to forge messages later without needing persistent control. Citing prior work, the paper notes that spoofing, replay and delay-manipulation attacks against unprotected PTP can degrade synchronization accuracy or disrupt service within seconds in a production RAN.

The authors design PRTESLA-C, a protection mechanism combining three ideas: (1) per-round delayed key disclosure using independent one-way key chains for the Sync and Delay message domains; (2) lightweight ASCON-based message authentication that avoids long-lived receiver-held secrets; and (3) an "apply-then-verify-and-correct" paradigm, where an RU applies a timing sample immediately (to preserve the real-time control loop) and verifies its authenticity asynchronously once the corresponding key is disclosed, rolling back only on verification failure. Evaluated on an O-RAN-like fronthaul testbed (Intel Core i7 DU/RU hosts, Mellanox ConnectX-4 NICs with hardware PTP timestamping over 25 GbE, plus a multi-RU emulation and an srsRAN-based E2E test (DU-side gNB, RU emulator and UE)), PRTESLA-C's clock-offset and frequency-correction accuracy is reported as statistically indistinguishable from an unauthenticated PTP baseline and from simple shared-key MAC schemes, while a conventional "verify-then-apply" TESLA variant is shown to degrade synchronization accuracy by roughly six orders of magnitude because it stalls the real-time control loop while waiting for key disclosure. CPU overhead stayed under 1% on both DU and RU (about 0.45%/0.73% respectively); under simulated man-in-the-middle tampering the RMS clock offset grows with attack rate, from roughly 25 ns at 10% to roughly 135 ns at 50% (read from Fig. 5), without persistent drift at any tested rate; replay attempts were rejected via monotonicity checks and were indistinguishable from ordinary packet loss. The end-to-end srsRAN test completed DU-RU setup and UE attachment normally with the scheme enabled.

## Summary (ZH)

Yiwei Zhang、Enrico Pisanti、Imtiaz Karim、Subangkar Karmaker Shanto 与 Elisa Bertino 针对论文指出的一处现有 O-RAN 规范虽已承认但尚未解决的缺口展开研究：在开放前传网络中，承载分布单元（DU）与射频单元（RU）之间同步信息的精确时间协议（PTP / IEEE 1588）缺乏强制性的认证或完整性保护。论文的威胁模型涵盖了位于前传链路上的中间人攻击者——其可窃听、注入、伪造、丢弃、重放 PTP 报文，或引入非对称时延以偏移时间估计；同时也涵盖了部分攻陷某个 RU 并提取其本地存储密钥材料的攻击者，使其无需持续控制该 RU 即可在事后伪造消息。论文引用既有研究指出：针对未受保护 PTP 的欺骗、重放与时延操纵攻击，可在数秒内降低生产环境 RAN 的同步精度甚至中断服务。

作者提出了 PRTESLA-C 防护机制，融合三项设计：其一，针对 Sync 与 Delay 两个消息域分别使用独立的单向密钥链，实现"逐轮延迟密钥披露"；其二，采用基于轻量级 ASCON 算法的消息认证，避免接收端长期持有共享密钥；其三，采用"先应用、后验证与纠正"范式——RU 立即应用收到的时间采样（以保持实时控制回路不被打断），并在对应密钥披露后异步验证其真实性，仅在验证失败时回滚。该方案在一个类 O-RAN 前传测试床上进行了评估（采用 Intel Core i7 主机构建 DU/RU、搭配支持硬件 PTP 时间戳的 Mellanox ConnectX-4 网卡并通过 25 GbE 互联，另有多 RU 仿真环境及基于 srsRAN 的端到端测试（DU 侧 gNB、RU 模拟器与 UE）。结果显示，PRTESLA-C 在时钟偏移与频率校正精度方面与未认证的 PTP 基线以及简单共享密钥 MAC 方案在统计上难以区分；而传统的"先验证、后应用"TESLA 变体由于在等待密钥披露期间阻塞了实时控制回路，其同步精度出现了约六个数量级的劣化。CPU 开销在 DU 与 RU 上均低于 1%（分别约为 0.45% 与 0.73%）；在模拟中间人篡改攻击下，均方根时钟偏移随攻击比例上升：10% 时约 25 纳秒，50% 时约 135 纳秒（读自图 5），各测试比例下均无持续漂移；重放尝试通过单调性检查被拒绝，其影响与普通丢包无法区分。启用该方案后，基于 srsRAN 的端到端测试中 DU-RU 建立及 UE 附着均正常完成。

## Key technical points (EN)

- Threat model: MITM on the open fronthaul (spoof/inject/forge/drop/replay PTP, asymmetric-delay bias) plus partial RU key-material compromise for later forgery without persistent access.
- PRTESLA-C mechanism: per-round delayed key disclosure over independent Sync/Delay one-way key chains + ASCON-based lightweight MAC + "apply-then-verify-and-correct" (immediate application, asynchronous verification, rollback only on failure).
- Testbed: O-RAN-like fronthaul with hardware-PTP-timestamped 25 GbE links, multi-RU network-namespace emulation, and an srsRAN DU-side gNB / RU emulator / UE end-to-end integration test.
- Accuracy statistically indistinguishable from unauthenticated PTP and shared-key MAC baselines; a "verify-then-apply" TESLA variant instead degrades timing accuracy by ~6 orders of magnitude by stalling the control loop.
- Overhead: <1% CPU on DU (~0.45%) and RU (~0.73%); bandwidth overhead concentrated in lower-rate Follow_Up/Delay_Resp messages (46 bytes each) vs. per-message overhead in shared-key schemes.
- Under MITM tampering: RMS clock offset grows with attack rate, from roughly 25 ns at 10% to roughly 135 ns at 50% (read from Fig. 5), without persistent drift at any tested rate; replay attempts rejected via monotonicity checks.

## Key technical points (ZH)

- 威胁模型：开放前传上的中间人攻击（欺骗/注入/伪造/丢弃/重放 PTP 报文、非对称时延偏移），以及部分攻陷 RU 密钥材料以便事后伪造、无需持续控制的攻击者。
- PRTESLA-C 机制：基于独立 Sync/Delay 单向密钥链的逐轮延迟密钥披露 + 基于 ASCON 的轻量级 MAC 认证 + "先应用、后验证与纠正"范式（立即应用、异步验证、仅在失败时回滚）。
- 测试床：采用硬件 PTP 时间戳、25 GbE 链路的类 O-RAN 前传环境，多 RU 网络命名空间仿真，以及基于 srsRAN 的 DU 侧 gNB / RU 仿真器 / UE 端到端集成测试。
- 精度与未认证 PTP 及共享密钥 MAC 基线在统计上难以区分；而"先验证、后应用"的 TESLA 变体因阻塞控制回路，同步精度劣化约六个数量级。
- 开销：DU、RU 上 CPU 占用均低于 1%（分别约 0.45%、0.73%）；带宽开销集中在低频率的 Follow_Up/Delay_Resp 消息中（各 46 字节），优于共享密钥方案对每条消息均附加开销的做法。
- 在中间人篡改攻击下：均方根时钟偏移随攻击比例上升，10% 时约 25 纳秒，50% 时约 135 纳秒（读自图 5），各测试比例下均无持续漂移；重放尝试通过单调性检查被拒绝。

## Why it matters / what's new (EN)

The KB's existing O-RAN security entries (e.g. `2026-09-09_arxiv-queryable-graph-oran-security-framework`) address knowledge-graph-based threat cataloguing rather than the fronthaul timing plane itself; this is the first entry in this KB to address PTP/synchronization security specifically within O-RAN's open fronthaul, with a concrete authenticated-timing protocol validated on hardware-timestamped links and an end-to-end srsRAN integration.

## Why it matters / what's new (ZH)

知识库现有的 O-RAN 安全相关条目（如 `2026-09-09_arxiv-queryable-graph-oran-security-framework`）关注的是基于知识图谱的威胁编目，而非前传时钟同步平面本身；本条目是本知识库中首次专门针对 O-RAN 开放前传中的 PTP/同步安全问题展开研究，提出了在硬件时间戳链路上验证过的具体认证同步协议，并完成了基于 srsRAN 的端到端集成测试。
