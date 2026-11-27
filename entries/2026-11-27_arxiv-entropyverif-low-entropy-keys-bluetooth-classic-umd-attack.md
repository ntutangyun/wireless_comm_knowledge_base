---
id: 2026-11-27_arxiv-entropyverif-low-entropy-keys-bluetooth-classic-umd-attack
date_published: 2026-11-25
date_found: 2026-11-27
type: academic-paper
technology: bluetooth
title_en: "Small Leaks Sink Great Ships: Automated Analysis of Protocols That Tolerate Low-Entropy Keys (EntropyVerif; Unilateral Multi-Downgrade attack on Bluetooth Classic)"
title_zh: "小泄漏沉大船：对容忍低熵密钥的协议进行自动化分析（EntropyVerif；针对经典蓝牙的单侧多次降级攻击）"
url: "https://arxiv.org/abs/2611.33595"
source_quality: full
topics: [Bluetooth-Classic, BLE-pairing, KNOB, formal-verification, Tamarin, key-length-downgrade, WPA2-PSK, low-entropy-keys]
topic_primary: bt-security
topics_secondary: []
novelty_score: 4
---

## Summary (EN)
The paper (Wuhan University and Shandong University; accepted at NDSS 2027, 22-26 March 2027, Seoul) addresses protocols that tolerate low-entropy keys for user-friendliness, backward compatibility or constrained devices: WPA2-PSK, Bluetooth Low Energy (BLE) and Bluetooth Classic (BC). The authors state that symbolic protocol verifiers assume perfect encryption and so cannot reason about brute-force attackers, and that earlier work handled this with protocol-specific, manually written rules that reveal a chosen key to the attacker.

They propose a protocol-agnostic symbolic methodology built on three abstractions: a message-derivation fact (MDerive) that captures the prerequisites of a brute-force attempt independently of concrete function symbols; a three-tier breaking-oracle design (value-breaking, relationship-breaking, message-derivation) that composes with the standard Dolev-Yao attacker; and a graded bit-level attacker model that bounds the key length the attacker can exhaust. The methodology is implemented as EntropyVerif, a syntax-sugar extension of the Tamarin prover in which users label low-entropy terms; it emits standard Tamarin rules and leaves the Tamarin backend unmodified.

Applied to three case studies, EntropyVerif rediscovers the PMKID attack on WPA2-PSK, and the KNOB and Method Confusion attacks on BLE pairing. Applied to BC session establishment (six device configurations, under two attacker grades) it finds what the authors call the Unilateral Multi-Downgrade (UMD) attack, which they report has been responsibly disclosed to the Bluetooth SIG. The paper includes a performance evaluation and a discussion of limits and of possible changes to the BC specification.

## Summary (ZH)
本文（武汉大学与山东大学；已被 NDSS 2027 录用，2027 年 3 月 22-26 日，首尔）关注为了易用性、向后兼容或资源受限设备而容忍低熵密钥的协议：WPA2-PSK、低功耗蓝牙（BLE）和经典蓝牙（BC）。作者指出，符号化协议验证工具假定加密是完美的，因此无法推理暴力破解型攻击者；此前的工作依靠针对具体协议、人工编写的规则，把选定的密钥直接泄露给攻击者。

作者提出一种与协议无关的符号化方法，基于三个抽象：消息推导事实 MDerive，用于刻画暴力破解尝试的前提条件，且与具体函数符号无关；三层"破解预言机"设计（值破解、关系破解、消息推导），可与标准 Dolev-Yao 攻击者组合；以及分级的比特级攻击者模型，限定攻击者能够穷举的密钥长度。该方法实现为 EntropyVerif——Tamarin 证明器的语法糖扩展，用户标注低熵项后，它生成标准的 Tamarin 规则，Tamarin 后端无需修改。

在三个案例研究中，EntropyVerif 重新发现了针对 WPA2-PSK 的 PMKID 攻击，以及针对 BLE 配对的 KNOB 和 Method Confusion 攻击。应用于 BC 会话建立（六种设备配置、两种攻击者等级）时，它发现了作者称为"单侧多次降级（UMD）攻击"的新攻击，作者称已向蓝牙技术联盟（Bluetooth SIG）负责任地披露。论文还包含性能评估，以及对局限性和 BC 规范可能修改方向的讨论。

## Key technical points (EN)
- Background modelled in the paper: BLE pairing negotiates a long-term key with key sizes of 7-16 bytes, and the key-size negotiation and truncation phases lack integrity protection. In BC, after pairing the devices share a link key; session establishment covers link connection, authentication (Legacy or Secure), key-size negotiation and session-key derivation, and the key-size negotiation phase is unprotected.
- BC device types: three key-length ranges (Secure: 16 bytes only; Enhanced: 7-16 bytes; Legacy: 1-16 bytes) combined with three Secure Connections support classes (Secure Connections only, both, Legacy only), giving six configurations. The paper notes that the Core Specification is inconsistent on the minimum key size (version 5.2 and later say 7 octets for L_max shall and L_min should; another passage requires only 1 to 16; version 5.1 and earlier allow 1 byte).
- Attacker grades: a "semi-attacker" can brute-force keys shorter than half the full length and a "quart-attacker" those shorter than a quarter. In the BLE model the authors assume devices support 8-16 byte keys and that the attacker can brute-force 8 bytes or fewer.
- UMD attack: with a central that accepts only 16-byte keys and a peripheral that supports 1-16 bytes, the attacker first downgrades both devices to a Legacy session, then induces the peripheral to use a 4-byte session key and brute-forces those 4 bytes; repeating this three more times recovers the full session key. With n downgrade steps of equal size the work is n x 2^(128/n); for n = 16 the paper states the complexity falls from 2^128 to 2^12.
- BC results (Table IV): the paper concludes BC session security depends largely on the minimum key length the peripheral supports; compatibility with legacy devices makes repeated downgrade possible. Verification times in the table range from about 18 s to about 99,172 s.
- BLE results: with the authors' corrected model that includes session-key derivation, both KNOB and Method Confusion are found; they state the earlier BLE model they compare against found KNOB only because it let the long-term key protect traffic directly.
- Cost: on three Alipay payment-protocol models with a low-entropy password but no reachable attack, annotation did not change any verdict and added about 12 s to two models and about 4 minutes to the third. In BC proofs, added facts account for 86.4% of proof steps. Hand-written tactics are needed (six lines per BLE tactic, fourteen for BC).
- Stated limits: the attacker only recomputes functions forward and matches exactly; the budget on key length is chosen by the modeller; private functions are not supported; the worst BC configuration takes about 9.9 x 10^4 s.
- Spec changes the authors suggest to the Bluetooth SIG: a hard floor on session-key length, bilateral confirmation of any key-length downgrade, and binding short-key negotiations to the BDADDR pair that created the long-term key.

## Key technical points (ZH)
- 论文建模的背景：BLE 配对协商长期密钥，密钥长度为 7-16 字节，密钥长度协商与截断阶段缺乏完整性保护。BC 配对后双方共享链路密钥；会话建立包括链路连接、认证（Legacy 或 Secure）、密钥长度协商和会话密钥派生，密钥长度协商阶段同样不受保护。
- BC 设备类型：三种密钥长度范围（Secure：仅 16 字节；Enhanced：7-16 字节；Legacy：1-16 字节）与三类安全连接支持情况（仅安全连接、两者皆支持、仅 Legacy）组合，共六种配置。论文指出核心规范对最小密钥长度的表述不一致（5.2 及之后版本称 L_max 必须、L_min 应当至少为 7 字节；另一处只要求 1 至 16；5.1 及更早版本允许 1 字节）。
- 攻击者等级："半攻击者"可暴力破解短于全长一半的密钥，"四分之一攻击者"则为短于四分之一的密钥。在 BLE 模型中，作者假设设备支持 8-16 字节密钥，且攻击者能暴力破解 8 字节及以下的密钥。
- UMD 攻击：中心设备只接受 16 字节密钥，外设支持 1-16 字节；攻击者先把双方降级到 Legacy 会话，再诱使外设使用 4 字节会话密钥并暴力破解这 4 字节；再重复三次即可恢复完整会话密钥。若分 n 步、每步长度相等，计算量为 n x 2^(128/n)；论文称 n = 16 时复杂度由 2^128 降到 2^12。
- BC 结果（表 IV）：论文结论是 BC 会话安全很大程度上取决于外设支持的最小密钥长度；兼容 Legacy 设备使得反复降级成为可能。表中验证耗时从约 18 秒到约 99,172 秒不等。
- BLE 结果：在作者加入会话密钥派生的修正模型下，KNOB 与 Method Confusion 均被发现；作者称其所比较的早期 BLE 模型之所以能发现 KNOB，是因为它让长期密钥直接保护流量。
- 开销：在三个含低熵口令但不存在可达攻击的支付宝支付协议模型上，标注未改变任何验证结论，其中两个模型增加约 12 秒，第三个增加约 4 分钟。BC 证明中，新增事实占证明步骤的 86.4%。需要手写策略（每个 BLE 策略六行，BC 十四行）。
- 论文自述的局限：攻击者只做前向重算并精确匹配；密钥长度预算由建模者选定；不支持私有函数；最慢的 BC 配置约需 9.9 x 10^4 秒。
- 作者向蓝牙技术联盟建议的规范修改：为会话密钥长度设置硬性下限、对任何密钥长度降级要求双方确认、将短密钥协商绑定到创建长期密钥的 BDADDR 对。

## Why it matters / what's new (EN)
Per the authors, the contributions are the protocol-agnostic methodology, a Tamarin front end that needs no kernel change, automatic rediscovery of PMKID, KNOB and Method Confusion, and a new BC attack that, to their knowledge, is the first protocol-level BC attack found by a symbolic verifier (the authors' claim). Earlier KB entries on Bluetooth security are device or implementation oriented (for example a Zephyr controller advisory and BLE pairing hardening for implants); this paper analyses the specification-level negotiation of key length in BC and BLE. The paper itself says the UMD attack is a design weakness, not an implementation bug, and that it was reported to the Bluetooth SIG on 15 July 2024; per the paper, the SIG replied on 7 February 2025 that it considers the reported scenario practical. The attack was found and validated in the symbolic model only; no real devices were tested.

## Why it matters / what's new (ZH)
据作者所述，论文的贡献包括：与协议无关的方法、无需修改内核的 Tamarin 前端、自动重新发现 PMKID、KNOB 和 Method Confusion，以及一种 BC 新攻击——据作者所知，这是符号化验证工具首次发现的 BC 协议级攻击（作者自述）。知识库中此前的蓝牙安全条目多偏向设备或实现层面（例如 Zephyr 控制器公告、植入式设备的 BLE 配对加固）；本文分析的是 BC 与 BLE 规范层面的密钥长度协商。论文自述 UMD 攻击是设计缺陷而非实现缺陷，并已于 2024 年 7 月 15 日报告给蓝牙技术联盟；据论文所述，联盟于 2025 年 2 月 7 日回复，认为论文所报告的场景是可行的。该攻击仅在符号模型中发现和验证，未使用真实设备测试。

## Images
No figures are embedded; see the arXiv HTML rendering (https://arxiv.org/html/2611.33595v1) for the paper's figures.
