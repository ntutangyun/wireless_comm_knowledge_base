---
id: 2026-05-05_arxiv-mac-rerandomization-runtime
date_published: 2024-05-24
date_found: 2026-05-05
type: academic-paper
title_en: "Over-the-Air Runtime Wi-Fi MAC Address Re-randomization"
title_zh: "运行时空中 Wi-Fi MAC 地址再随机化"
url: "https://arxiv.org/abs/2405.15747"
source_quality: full
topics: [802.11, security, MAC-layer, privacy]
novelty_score: 3
---

## Summary (EN)

Jin & Papadimitratos (KTH) tackle a long-standing Wi-Fi privacy gap: while modern OSes randomize the MAC address **at association time** (the 802.11aq / locally-administered-bit style randomization that Apple, Google, and Microsoft now ship), the address remains **constant for the duration of an associated session**. Any passive observer can therefore link every frame from a connected client (and its uplink/downlink correspondent) for as long as the connection lives — minutes to hours in laptop / phone scenarios, sometimes days for IoT devices. Disconnect-and-reconnect-style re-randomization breaks the connection, re-runs DHCP / 4-way handshake, and is incompatible with real-time / always-on workloads.

The proposed scheme **re-randomizes the over-the-air MAC every T seconds without disconnection and without any new 802.11 frames or Information Elements**. Both endpoints (STA and AP) keep the original "connection MAC" locally for the upper protocol stack, then on the radio compute a new MAC address as `SHA256(connection_MAC ‖ PTK ‖ ⌊t_epoch / T⌋)[0..6]` (with the U/L and multicast bits adjusted to keep the address well-formed). Because both sides hold the PTK from the original 4-way handshake and have synchronised clocks, they independently derive identical addresses — no signaling exchange is needed. Conversion happens at the driver layer just before FCS calculation; upper protocols (IP, TCP, application) never see the change.

The paper notes this scheme is **only privacy-secure on WPA3** (with SAE) — a passive WPA2 eavesdropper that captured the 4-way handshake and knows the passphrase can derive the same PTK and therefore re-link the addresses. It also presents OTA performance results on commodity hardware showing that the scheme works without throughput regression at typical T values (10–60 s), with the only practical pitfall being **PN (packet-number) wraparound at MAC switch boundaries** — they show how to align the PN-high counter with the re-randomization epoch so that PN never resets at a switch.

## Summary (ZH)

KTH 的 Jin 和 Papadimitratos 解决了 Wi-Fi 一项长期存在的隐私缺口：现代操作系统（Apple、Google、Microsoft）虽然在**关联时**随机化 MAC 地址（802.11aq / 本地管理位风格），但该地址**在已关联会话期间保持不变**。被动观察者可在整个连接生命周期（笔电/手机数分钟到数小时，IoT 设备可能数天）跟踪所连接客户端及其上下行通信对端的全部帧。断链重连式的再随机化会破坏连接、重跑 DHCP/四次握手，无法适配实时与常驻型工作负载。

该方案**每 T 秒在空中接口上再随机化 MAC 地址，无需断链，也不引入任何新的 802.11 帧或 IE**。STA 与 AP 在本地为上层协议栈保留原始"连接 MAC"，并在射频层独立计算新 MAC：`SHA256(connection_MAC ‖ PTK ‖ ⌊t_epoch / T⌋)[0..6]`（并调整 U/L 位与组播位以构成合法 MAC）。由于双方在四次握手中已持有同一 PTK 且时钟同步，可独立推导出相同地址——无需任何信令交互。转换发生在驱动层 FCS 计算之前；上层协议（IP、TCP、应用）完全感知不到变化。

论文指出该方案**仅在 WPA3（含 SAE）下能保证隐私安全**——WPA2 下被动窃听者只要捕获过四次握手并知道口令即可推出同一 PTK，从而重新关联地址。论文还在通用硬件上提供了 OTA 性能数据，证明在典型 T 值（10–60 秒）下方案不会降低吞吐；唯一实操陷阱是**MAC 切换瞬间 PN（包号）回绕**——文中给出了将 PN-high 计数器与再随机化周期对齐的对策，使 PN 在切换点不重置。

## Key technical points (EN)

- Re-randomization input: `SHA256(connection_MAC ‖ PTK ‖ ⌊t_epoch / T⌋)`; first 6 bytes used after U/L + multicast bit fixup.
- Synchronisation is implicit (time + shared key), not signaled — no over-the-air negotiation traffic.
- Driver-layer rewrite: upper layers see the original MAC; RF emits the rotated address; reverse mapping at receiver before delivering to the stack.
- PN wrap handling: align the high-order half of the 6-octet packet number with the re-randomization epoch so each MAC always starts with a fresh PN window.
- Privacy holds only under WPA3; WPA2 observers with the passphrase can re-link.

## Key technical points (ZH)

- 再随机化输入：`SHA256(connection_MAC ‖ PTK ‖ ⌊t_epoch / T⌋)`；取前 6 字节并调整 U/L 与组播位。
- 同步采用隐式方式（时间 + 共享密钥），不通过信令——空中接口无任何额外协商流量。
- 驱动层重写：上层协议看到的是原始 MAC，射频发出的是轮换地址；接收端在交付到协议栈前完成反向映射。
- PN 回绕处理：将 6 字节 PN 的高位部分与再随机化周期对齐，确保每个 MAC 都从一个全新的 PN 窗口开始。
- 隐私保护仅在 WPA3 下成立；WPA2 下，已知口令的观察者能重建关联。

## Why it matters / what's new (EN)

The KB already contains entries on **CSI / RFF-based device fingerprinting** (`2026-05-04_arxiv-csi-rff-microsignals-fingerprinting`, `2026-05-04_arxiv-statefi-fsm-device-fingerprinting`) — which attack identity at the *physical* layer regardless of MAC. This paper attacks the *complementary* identity surface: making MAC linkability disappear during a session. The two layers are orthogonal — a MAC-rerandomized device with an unsuppressed RFF is still trackable via PHY fingerprint, and vice versa, so a complete privacy story would need both, ideally with the same epoch boundary.

The mechanism is observable on the wire (a Wi-Fi adapter that suddenly changes its MAC mid-session while keeping the same QoS / sequence-number continuity is a distinctive signature), which makes it a candidate for both interop testing and *detection of unsanctioned use* (e.g. on enterprise networks that disallow client MAC rotation). The "no new IE, no signaling" design is exactly what wirelessly-deployable schemes need; the cost is the WPA3-only constraint.

## Why it matters / what's new (ZH)

本 KB 已收录基于 **CSI / RFF 的设备指纹识别**（`2026-05-04_arxiv-csi-rff-microsignals-fingerprinting`、`2026-05-04_arxiv-statefi-fsm-device-fingerprinting`），它们在物理层攻击设备身份，与 MAC 无关。本文攻击的是**互补的**身份面：让 MAC 在会话内不可链接。两层正交——只做 MAC 再随机化但 RFF 不抑制的设备仍可被 PHY 指纹追踪，反之亦然；完整的隐私方案需要两者协同，最好共享同一再随机化周期。

该机制具备上线可观测性（一个 Wi-Fi 网卡在保持 QoS / 序号连续性的同时半路改 MAC 是相当独特的特征），既适合互操作测试，也可用于**未授权使用的检测**（例如禁止客户端轮换 MAC 的企业网络）。"零新 IE、零信令"的设计正是无线侧可部署方案所需要的；代价是仅在 WPA3 下成立。

## Images

![Figure 1: PN-high / PN-low split aligned with re-randomization epoch | 图 1：PN 高/低半字与再随机化周期对齐](https://arxiv.org/html/2405.15747v1/x1.png)
![Figure 2: driver-layer MAC conversion flow (upper-stack vs over-the-air) | 图 2：驱动层 MAC 转换流程（上层协议栈 vs 空中接口）](https://arxiv.org/html/2405.15747v1/x2.png)
![Figure 4: STA/AP epoch-synchronisation example with PTK-derived addresses | 图 4：STA/AP 基于 PTK 的周期同步示例](https://arxiv.org/html/2405.15747v1/x4.png)
