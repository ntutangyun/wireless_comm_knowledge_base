---
id: 2026-09-04_arxiv-ble-spam-flooding-iot-agility-defense
date_published: 2026-06-19
date_found: 2026-09-04
type: academic-paper
technology: bluetooth
title_en: "Quantifying the Impact of Stealthy BLE Spam & Flooding Attacks on IoT Environments"
title_zh: "量化隐蔽式 BLE 垃圾广播与泛洪攻击对物联网环境的影响"
url: "https://arxiv.org/abs/2606.21016"
source_quality: full
topics: [BLE, security, flooding, spam, denial-of-service, IoMT, SMT, formal-methods]
topic_primary: bt-security
topics_secondary: [bt-le]
novelty_score: 3
---

## Summary (EN)

This paper (Rauf, Martinez, Mohsen; submitted Jun-19-2026, cs.CR) quantifies how much damage a stealthy Bluetooth Low Energy (BLE) advertisement-flooding attack can do to nearby IoT and Internet-of-Medical-Things (IoMT) devices, and proposes an SMT-specified defense that raises the attacker's cost rather than trying to block the attack outright.

BLE's advertising mechanism — lightweight, unauthenticated broadcast on three fixed channels, designed for fast device discovery — is also its weakness: an attacker can flood those channels with unauthorized connection or advertising requests using nothing more than a Flipper Zero, HackRF, or an Android phone, exhausting nearby devices' resources and disrupting legitimate communication, all without any pairing or authentication step. The authors formalize two attacker models: a **static** attacker (fixed spam rate against a victim with a constant duty cycle) and an **agile** attacker (dynamically adjusting transmission rate in response to observed channel conditions). They derive a probability-of-spam-success model as a function of duty cycle (DC), spam rate (SR), and time window, and extend it to multiple coordinated attackers via a complement-probability formula.

On a real testbed — benign devices (Govee smart thermo-hygrometer, Samsung Galaxy Watch 4, Apple AirTags), three victim hosts (Samsung Galaxy S8, Apple iPad 9th gen, Dell Inspiron 14/Windows 11), a Flipper Zero as the attacker, and an nRF52840 dongle running Nordic's nRF Sniffer + Wireshark as the capture instrument, all within 1 meter in an open office — one-hour captures showed spam traffic climbing from 0% (baseline) to 29.84% of all captured packets at a 100 ms spam interval, and to 68.01% at a 20 ms interval, with the crossover point where spam traffic starts to dominate legitimate traffic occurring around a 43 ms interval. Two independent 100 ms-rate attackers combine to a 40–60% success probability; three reach 60–80%, approaching the impact of a single 20 ms spammer.

As a defense, the authors propose randomizing the defender's own duty cycle over time ("agility-based deterrence") rather than trying to filter or authenticate advertisements. Modeled against 10 agile attackers, a static defender's disruption probability approaches certainty (~1.0), while an agile defender caps the attackers' maximum success probability at roughly 22% — the paper frames this as multiplying the attacker's effective cost rather than eliminating the attack. The adaptive part is implemented as a Satisfiability Modulo Theories (SMT) constraint-satisfaction problem: instead of continuously minimizing the spam-success probability, the defender fixes an acceptable threshold T (e.g. 0.35) and queries in real time whether any duty-cycle/spam-rate combination would violate it.

The authors state their own limitations plainly: the nRF52840 sniffer can only monitor one BLE advertising channel at a time (no true simultaneous multi-channel capture), congestion and channel hopping increase missed packets, the defense is evaluated as a mathematical/simulation model rather than deployed on real radios ("translating this potential into practice remains a significant challenge"), the attack experiments use fixed-delay spam intervals rather than bursty or synchronized adversary strategies, and testing was confined to a single small open-office environment.

## Summary (ZH)

本文（Rauf、Martinez、Mohsen，2026 年 6 月 19 日提交，cs.CR）量化了隐蔽式蓝牙低功耗（BLE）广播泛洪攻击能对附近物联网及医疗物联网（IoMT）设备造成多大损害，并提出一种以 SMT 形式化描述的防御方案——其思路是提高攻击者的攻击成本，而非试图彻底阻断攻击。

BLE 的广播机制——在三条固定信道上进行轻量、无认证的广播，专为快速设备发现设计——同时也是其弱点所在：攻击者仅凭 Flipper Zero、HackRF 或一部安卓手机，就能向这些信道灌入未经授权的连接或广播请求，耗尽附近设备的资源并干扰合法通信，且全程无需任何配对或认证步骤。作者将攻击者形式化为两种模型：**静态**攻击者（以固定垃圾发送速率攻击占空比恒定的受害者）与**敏捷**攻击者（根据观测到的信道状况动态调整发送速率）。他们推导出一个以占空比（DC）、垃圾发送速率（SR）与时间窗口为函数的"垃圾攻击成功概率"模型,并通过互补概率公式将其扩展到多个协同攻击者的场景。

在真实测试床上——良性设备包括 Govee 智能温湿度计、三星 Galaxy Watch 4、苹果 AirTag，三台受害主机为三星 Galaxy S8、苹果第 9 代 iPad、戴尔 Inspiron 14（Windows 11），攻击设备为 Flipper Zero，抓包仪器为运行 Nordic nRF Sniffer 与 Wireshark 的 nRF52840 加密狗，所有设备均置于 1 米范围内的开放办公环境中——一小时抓包结果显示：垃圾流量占比从基线的 0% 上升到 100 ms 发送间隔下的 29.84%，再到 20 ms 间隔下的 68.01%，垃圾流量开始压过合法流量的交叉点约出现在 43 ms 间隔处。两个各以 100 ms 速率独立攻击的攻击者组合后成功概率达 40%–60%；三个这样的攻击者可达 60%–80%，接近单个 20 ms 攻击者的影响。

在防御方面，作者提出的方案是让防御端随时间随机化自身的占空比（"基于敏捷性的威慑"），而非试图过滤或认证广播报文。针对 10 个敏捷攻击者建模的结果显示：静态防御方的被干扰概率趋近于必然（约 1.0）,而敏捷防御方能将攻击者的最大成功概率上限压制在约 22%——论文将此定性为提高攻击者的有效成本，而非消除攻击本身。自适应部分通过可满足性模理论（SMT）约束满足问题实现：防御方并非持续最小化垃圾攻击成功概率，而是预先设定一个可接受阈值 T（例如 0.35），并实时查询是否存在会违反该阈值的占空比/发送速率组合。

作者明确自陈了若干局限:nRF52840 嗅探器一次只能监测一条 BLE 广播信道，无法真正同时进行多信道抓包；信道拥塞与跳频会增加丢包；防御方案仅以数学/仿真模型评估，尚未部署到真实射频硬件上（"将这一潜力转化为实践仍是一项重大挑战"）；攻击实验采用固定延迟的垃圾发送间隔，而非突发或同步式的对抗策略；测试范围局限于单一的小型开放办公环境。

## Key technical points (EN)

- Two formalized attacker models: static (fixed spam rate, constant victim duty cycle) and agile (dynamically adjusts spam rate to observed channel conditions).
- Spam-success probability model: P_Spam = DC × SR × Δt (bounded to [0,1]); multi-attacker case via complement probability P_Spam(AOS) = 1 − ∏(1 − P_Spam^i).
- Testbed: Govee thermo-hygrometer / Galaxy Watch 4 / AirTags as benign devices; Galaxy S8, iPad 9th gen, Dell Inspiron 14 (Windows 11) as victims; Flipper Zero as attacker; nRF52840 dongle + nRF Sniffer + Wireshark as capture instrument; all within 1 m in an open office.
- One-hour capture results: 0% spam at baseline → 29.84% at 100 ms spam interval → 68.01% at 20 ms interval; legitimate-vs-spam crossover near a 43 ms interval.
- Multi-attacker results: two 100 ms-rate attackers combine to 40–60% success; three reach 60–80%, approaching the impact of a single 20 ms spammer.
- Defense: "agility-based deterrence" — defender randomizes its own duty cycle over time. Modeled vs. 10 agile attackers: static defender's disruption probability → ~1.0; agile defender caps attackers' max success at ~22%.
- Defense implementation: SMT constraint-satisfaction (not continuous optimization) — defender sets an acceptable threshold T (e.g. 0.35) and queries in real time whether a duty-cycle/spam-rate combination would violate it.
- Stated limits: single-channel-at-a-time sniffer (no true simultaneous multi-channel capture); defense validated only as a model/simulation, not deployed on real radios; fixed-delay attacker intervals only; single small open-office test environment.

## Key technical points (ZH)

- 两种形式化攻击者模型:静态(固定垃圾发送速率,受害者占空比恒定)与敏捷(根据观测信道状况动态调整发送速率)。
- 垃圾攻击成功概率模型:P_Spam = DC × SR × Δt(限制在 [0,1] 区间);多攻击者场景通过互补概率公式 P_Spam(AOS) = 1 − ∏(1 − P_Spam^i) 计算。
- 测试床:良性设备为 Govee 温湿度计、Galaxy Watch 4、AirTag;受害主机为 Galaxy S8、第 9 代 iPad、戴尔 Inspiron 14(Windows 11);攻击设备为 Flipper Zero;抓包仪器为 nRF52840 加密狗 + nRF Sniffer + Wireshark;所有设备均在 1 米范围内的开放办公环境中。
- 一小时抓包结果:基线垃圾流量占比 0% → 100 ms 发送间隔下 29.84% → 20 ms 间隔下 68.01%;合法流量与垃圾流量的交叉点约在 43 ms 间隔处。
- 多攻击者结果:两个 100 ms 速率攻击者组合成功概率达 40%–60%;三个可达 60%–80%,接近单个 20 ms 攻击者的影响。
- 防御方案:"基于敏捷性的威慑"——防御端随时间随机化自身占空比。针对 10 个敏捷攻击者建模:静态防御方被干扰概率趋近于约 1.0;敏捷防御方将攻击者最大成功概率上限压制在约 22%。
- 防御实现方式:基于可满足性模理论(SMT)的约束满足问题(而非持续优化)——防御方设定可接受阈值 T(如 0.35),实时查询是否存在会违反该阈值的占空比/发送速率组合。
- 作者自陈局限:嗅探器一次仅能监测单一信道(无法真正同时多信道抓包);防御方案仅经模型/仿真验证,未部署至真实射频硬件;攻击实验仅采用固定延迟间隔;测试环境局限于单一小型开放办公室。

## Why it matters / what's new (EN)

The KB's `bt-security` bin so far covers pairing/link-layer exploits (Stealtooth silent auto-pairing, NFT-based access-control gaps), tracking/re-identification attacks (Snatcher against Apple Find My, association-based privacy attacks), and RF-fingerprinting attacks — but nothing yet on **availability**: denial-of-service via advertisement-channel flooding, which needs no pairing, no authentication bypass, and no cryptographic weakness to exploit, only BLE's open broadcast design itself. This paper adds that missing angle with a concrete quantitative bridge from attack parameters (duty cycle, spam rate) to measured outcomes (crossover interval, multi-attacker success probability) on a real commodity-device testbed, and pairs it with a defense mechanism (SMT-based agile duty-cycle randomization) that is unusual for this bin in being formally specified rather than just empirically tuned. The result should be read as a bounded, honestly-scoped academic contribution — the defense is validated only in simulation, not on real radios — rather than a deployable product, but it gives the bin its first quantified DoS-class threat model.

## Why it matters / what's new (ZH)

KB 的 `bt-security` 分箱此前覆盖了配对/链路层漏洞利用(Stealtooth 静默自动配对、基于 NFT 的访问控制缺口)、追踪/重识别攻击(针对 Apple Find My 的 Snatcher、基于关联的隐私攻击)以及射频指纹攻击——但此前尚无关于**可用性**层面的条目:即无需配对、无需绕过认证、也无需利用任何密码学弱点,仅凭 BLE 开放式广播设计本身即可发起的广播信道泛洪拒绝服务攻击。本文补上了这一缺口,提供了从攻击参数(占空比、垃圾发送速率)到实测结果(交叉间隔、多攻击者成功概率)之间具体的量化联系,测试床为商用设备测试床,并配以一套防御机制(基于 SMT 的敏捷占空比随机化)——该机制以形式化规约而非仅凭经验调参为特色,这在本分箱中较为少见。应将本文的结果视为一项边界清晰、如实自陈局限的学术贡献——其防御方案仅在仿真中得到验证，尚未部署于真实射频硬件——而非可直接部署的产品,但它为本分箱补上了第一个经量化的拒绝服务类威胁模型。
