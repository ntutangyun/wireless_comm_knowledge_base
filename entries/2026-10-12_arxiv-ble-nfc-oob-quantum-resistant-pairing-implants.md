---
id: 2026-10-12_arxiv-ble-nfc-oob-quantum-resistant-pairing-implants
date_published: 2026-10-06
date_found: 2026-10-12
technology: bluetooth
type: academic-paper
title_en: "Plug-and-Play Quantum-Resistant BLE Pairing for Medical Implants via NFC Out-of-Band"
title_zh: "面向医疗植入设备、经 NFC 带外通道实现的即插即用抗量子蓝牙低功耗配对方案"
url: "https://arxiv.org/abs/2610.07870"
source_quality: full
topics: [BLE, pairing, NFC, OOB, post-quantum, Kyber, SABER, implantable-medical-device]
topic_primary: bt-security
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

This paper (Javaid, Hassan, Umer, Panagiotou, Strydis, Bhatti, Pasha, Siddiqi; submitted Oct 6, 2026; accepted for presentation at IEEE HealthCom 2026, Oct 19-21, New York) addresses Bluetooth Low Energy (BLE) pairing for implantable medical devices (IMDs). Mainstream MITM-resistant BLE pairing methods — Numeric Comparison and Passkey Entry — require a user interface that IMDs inherently lack, making Near-Field Communication (NFC)-assisted Out-of-Band (OOB) pairing an attractive alternative. The authors identify two weaknesses in existing NFC-assisted OOB schemes: the classical BLE key exchange they authenticate remains vulnerable to quantum attacks, and the NFC channel itself is susceptible to eavesdropping and active injection under stronger threat models. Their proposed protocol performs a post-quantum key encapsulation mechanism (KEM) entirely over the NFC channel, so no shared secret is ever transmitted over NFC, while also reducing long-range RF exposure during pairing. The protocol requires no modification to the BLE stack and is designed to inherently resist RF battery-depletion attacks.

The proof-of-concept testbed used an ESP32-S3 microcontroller paired with an NXP PN532 NFC transceiver over SPI, programmed from a Samsung Galaxy A54 (Android 14). The three-phase protocol runs entirely over NFC: the programmer generates a KEM key pair and sends the public key to the IMD using stop-and-wait fragmentation (34-byte headers, up to 200-byte payloads per frame); the IMD encapsulates a shared secret and returns the ciphertext using the same fragmentation scheme; both sides then derive a symmetric key for subsequent authenticated encryption over BLE. The resulting key secures an application-layer (GATT) channel; the protocol does not perform BLE SMP pairing, since Android restricts OOB bond creation to system-privileged apps. End-to-end sessions took 11.4-20.7 seconds, with the authors noting NFC transport — not cryptographic computation — dominates that overhead (KEM computation is under 0.25% of session time).

The threat model treats the BLE channel as fully adversary-controlled (Dolev-Yao: eavesdrop, inject, replay, delay), while the NFC channel is assumed vulnerable only to passive eavesdropping, since the authors state active injection/relay on NFC requires physical proximity ("passive NFC eavesdropping is feasible at distances of up to approximately 10 m under favorable conditions" vs. "practical active injection and relay attacks are generally limited to distances below approximately 0.5 m"). Two families of post-quantum KEMs were evaluated: Kyber (512/768/1024, Module-LWE-based, the basis for NIST's standardized ML-KEM) and SABER (LightSABER/SABER/FireSABER, Module-LWR-based, SABER being a Round-3 NIST finalist). Battery-life modeling used measured currents (25 mA NFC, 35 mA BLE at 80 MHz, via a 1-ohm current-sense resistor and oscilloscope) against a 1.5 Ah/3.3 V cell under a pacemaker-style usage model (20 microjoules per heartbeat, 70 bpm, one 60-second BLE session daily, monthly NFC re-pairing). Relative to the insecure "Just Works" baseline, the projected battery-life overhead was under 0.57% for Kyber-1024 and 0.56% for FireSABER.

The authors state the current 11.4-20.7 second exchange duration suits infrequent, supervised medical procedures rather than frequent re-pairing, and identify NFC transport — not the post-quantum cryptography — as the bottleneck to optimize next, naming larger NFC payloads, higher bit rates, fewer acknowledgment round trips, and hardware acceleration as future directions.

## Summary (ZH)

这篇论文（作者 Javaid、Hassan、Umer、Panagiotou、Strydis、Bhatti、Pasha、Siddiqi，提交于 2026 年 10 月 6 日；已被 IEEE HealthCom 2026 大会接收，将于 10 月 19-21 日在纽约展示）关注植入式医疗设备（IMD）的蓝牙低功耗（BLE）配对问题。主流抗中间人（MITM）BLE 配对方式——数字比较与密钥输入——都需要用户界面，而 IMD 本身不具备这种界面，这使近场通信（NFC）辅助的带外（OOB）配对成为颇具吸引力的替代方案。作者指出现有 NFC 辅助 OOB 方案存在两个弱点：其所认证的经典 BLE 密钥交换仍易受量子攻击；同时在更强的威胁模型下，NFC 通道本身也易受窃听与主动注入攻击。他们提出的协议将后量子密钥封装机制（KEM）完全运行在 NFC 通道之上，确保共享密钥从不经由 NFC 传输，同时降低配对过程中长距离射频（RF）暴露；该协议无需对 BLE 协议栈做任何修改，且设计上天然抵抗 RF 电池耗尽攻击。

概念验证测试平台采用 ESP32-S3 微控制器，通过 SPI 连接 NXP PN532 NFC 收发器，由一台三星 Galaxy A54（Android 14）手机充当编程器。三阶段协议全程经由 NFC 完成：编程器生成 KEM 密钥对并通过"停等式"分片（34 字节头部，每帧最多 200 字节数据）将公钥发送给 IMD；IMD 封装共享密钥并以同样的分片方式返回密文；双方随后派生出对称密钥，用于后续 BLE 上的认证加密通信。所得密钥用于保护应用层（GATT）安全通道；该协议并不执行 BLE SMP 配对，因为 Android 仅允许系统特权应用创建 OOB 绑定。端到端会话耗时 11.4-20.7 秒，作者指出瓶颈在于 NFC 传输本身而非密码学计算（KEM 计算耗时占会话总时长不到 0.25%）。

威胁模型将 BLE 通道视为完全受攻击者控制（Dolev-Yao 模型：可窃听、注入、重放、延迟），而 NFC 通道仅被假定易受被动窃听，因为作者指出 NFC 上的主动注入/中继攻击需要物理近距离接触（"在有利条件下，被动 NFC 窃听在约 10 米距离内可行"，而"实际可行的主动注入与中继攻击通常被限制在约 0.5 米以内"）。论文评估了两类后量子 KEM：Kyber（512/768/1024，基于模格错误学习 Module-LWE，是 NIST 标准化 ML-KEM 的基础）与 SABER（LightSABER/SABER/FireSABER，基于模格舍入学习 Module-LWR，其中 SABER 曾是 NIST 第三轮决赛方案）。电池寿命建模基于实测电流（80 MHz 下 NFC 为 25 mA、BLE 为 35 mA，经 1 欧姆电流检测电阻与示波器测得），结合 1.5 Ah/3.3V 电池与起搏器式使用模型（每次心跳 20 微焦、心率 70 次/分、每日一次 60 秒 BLE 会话、每月一次 NFC 重新配对）。相对于不安全的"Just Works"基线方案，Kyber-1024 的电池寿命额外开销低于 0.57%，FireSABER 低于 0.56%。

作者说明当前 11.4-20.7 秒的交换耗时适合不频繁、有人值守的医疗场景，而非频繁的重新配对；并指出真正需要优化的瓶颈是 NFC 传输本身而非后量子密码学计算，提出更大的 NFC 负载、更高的比特率、更少的确认往返次数，以及硬件加速作为未来优化方向。

## Key technical points (EN)

- **Problem**: IMDs lack a UI for MITM-resistant BLE pairing (Numeric Comparison / Passkey Entry), forcing reliance on NFC-assisted OOB pairing; existing schemes authenticate a quantum-vulnerable classical key exchange and leave the NFC channel itself exposed to eavesdropping/injection.
- **Protocol**: a post-quantum KEM runs entirely over NFC in three phases (public-key transfer, ciphertext transfer, symmetric-key derivation) using stop-and-wait fragmentation (34-byte headers, up to 200-byte payloads); no BLE stack modification required.
- **Testbed**: ESP32-S3 + NXP PN532 NFC transceiver (SPI), programmer = Samsung Galaxy A54 (Android 14).
- **KEM schemes evaluated**: Kyber-512/768/1024 (Module-LWE, basis of NIST ML-KEM) and LightSABER/SABER/FireSABER (Module-LWR, SABER a Round-3 NIST finalist).
- **Timing**: end-to-end sessions 11.4-20.7 s; NFC transport (not crypto) is the dominant cost (KEM compute <0.25% of session time).
- **Threat model**: BLE fully adversary-controlled (Dolev-Yao); NFC assumed vulnerable only to passive eavesdropping (stated feasible to ~10 m) since active injection/relay on NFC is stated to require <~0.5 m proximity.
- **Battery impact**: measured 25 mA (NFC) / 35 mA (BLE) currents against a 1.5 Ah/3.3V cell under a pacemaker usage model; projected battery-life overhead <0.57% (Kyber-1024) and <0.56% (FireSABER) vs. insecure Just Works.
- **Stated limits**: exchange duration suits infrequent supervised re-pairing, not frequent use; NFC transport throughput is the named optimization target, alongside hardware acceleration.

## Key technical points (ZH)

- **问题**：IMD 缺乏支持抗 MITM BLE 配对（数字比较/密钥输入）所需的用户界面，因而依赖 NFC 辅助 OOB 配对；现有方案认证的经典密钥交换易受量子攻击，且 NFC 通道本身仍暴露于窃听/注入风险。
- **协议**：后量子 KEM 完全在 NFC 上以三阶段运行（公钥传输、密文传输、对称密钥派生），采用停等式分片（34 字节头部，每帧最多 200 字节负载）；无需修改 BLE 协议栈。
- **测试平台**：ESP32-S3 + NXP PN532 NFC 收发器（SPI），编程器为三星 Galaxy A54（Android 14）。
- **评估的 KEM 方案**：Kyber-512/768/1024（Module-LWE，NIST ML-KEM 标准基础）与 LightSABER/SABER/FireSABER（Module-LWR，SABER 为 NIST 第三轮决赛方案）。
- **耗时**：端到端会话 11.4-20.7 秒；瓶颈在 NFC 传输而非密码学计算（KEM 计算占会话时间不到 0.25%）。
- **威胁模型**：BLE 通道完全受攻击者控制（Dolev-Yao 模型）；NFC 通道仅假定易受被动窃听（声称约 10 米内可行），因主动注入/中继攻击被认为需要约 0.5 米内的物理接近。
- **电池影响**：实测电流为 NFC 25 mA、BLE 35 mA，结合 1.5 Ah/3.3V 电池与起搏器式使用模型；相对不安全的 Just Works 方案，预计电池寿命额外开销 Kyber-1024 低于 0.57%、FireSABER 低于 0.56%。
- **作者说明的局限**：交换耗时适合不频繁、有人值守的重新配对场景，而非高频使用；NFC 传输吞吐量是明确指出的优化目标，硬件加速是补充方向。

## Why it matters / what's new (EN)

The KB's existing bt-security entries cover BLE address-randomization re-identification (2026-09-23), protocol-agnostic PHY info hiding (2026-09-23), advertisement-channel spam/flooding DoS (2026-09-04), RF-fingerprint impersonation (2026-08-18), and Find My-based tracking (2026-07-26). This paper adds a distinct angle: hardening the BLE OOB-pairing bootstrap itself against a *future* quantum adversary, specifically for the implantable-medical-device case where UI-based pairing methods are unavailable. Its concrete contribution is a quantified answer to whether post-quantum KEMs are affordable on a battery-constrained IMD platform — under the paper's own usage model, the answer is yes (sub-1% battery-life overhead), with NFC link throughput, not cryptographic cost, identified as the real constraint.

## Why it matters / what's new (ZH)

知识库现有的 bt-security 条目涵盖了 BLE 地址随机化再识别（2026-09-23）、协议无关的物理层信息隐藏（2026-09-23）、广播信道垂钓/泛洪拒绝服务攻击（2026-09-04）、射频指纹冒充攻击（2026-08-18）以及基于 Find My 的追踪（2026-07-26）。本文补充了一个不同的角度：针对植入式医疗设备这一无法使用基于界面的配对方式的场景，加固 BLE OOB 配对的启动环节本身，以抵御*未来*的量子攻击者。其具体贡献是量化回答了后量子 KEM 在电池受限的 IMD 平台上是否可负担这一问题——在论文自身的使用模型下，答案是可以（电池寿命额外开销低于 1%），而真正的制约因素被确认为 NFC 链路吞吐量，而非密码学计算成本。
