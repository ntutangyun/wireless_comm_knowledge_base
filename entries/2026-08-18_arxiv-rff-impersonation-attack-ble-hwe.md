---
id: 2026-08-18_arxiv-rff-impersonation-attack-ble-hwe
date_published: 2026-07-06
date_found: 2026-08-18
type: academic-paper
technology: bluetooth
title_en: "Replicating the Signature: unsupervised targeted impersonation of BLE RF fingerprints from a different transceiver — >97% success by direct injection, ~40–50% over-the-air against 31 enrolled devices"
title_zh: "复制签名：用另一台收发机对 BLE 射频指纹做无监督定向仿冒——直接注入成功率 >97%，31 台注册设备下空口攻击成功率约 40–50%"
url: "https://arxiv.org/abs/2607.05549"
source_quality: full
topics: [BLE, RF-fingerprint, impersonation, physical-layer-security, device-authentication, SDR, ESP32-C3]
topic_primary: bt-security
topics_secondary: [security-privacy]
novelty_score: 3
---

## Summary (EN)

Albousayri and Hamdaoui (Oregon State University; accepted at PST 2026, the 23rd International Conference on Privacy, Security and Trust; arxiv July 6, 2026) present an impersonation attack on radio-frequency fingerprinting (RFFP) — the physical-layer authentication technique that identifies a transmitter by the small hardware impairments (CFO, I/Q imbalance, DC offset, filter/modulator parameters) imprinted on its waveform. The distinguishing assumption is the threat model: prior RFFP attacks assume the adversary can query or gradient-probe the victim classifier; here the paper adds a **No-Access** attacker who owns neither the classifier nor the victim receiver and mounts the attack from a completely different transceiver at a different location, alongside the conventional Full-Access and Limited-Access (surrogate-model) settings.

The method, called HWE (hardware-impairment estimation), trains an unsupervised neural encoder that estimates eight impairment parameters of a target device (carrier frequency offset, phase offset, I/Q gain and phase imbalance, DC offset, Gaussian filter bandwidth-time product, frequency deviation, and related modulator parameters) directly from captured I/Q of BLE advertising frames. A signal generator then synthesises fresh BLE frames — with any payload the attacker chooses — and stamps the estimated impairments onto them before transmission on an SDR. An HWE+ variant adds gradient-based refinement of the impairment vector against a surrogate classifier when one is available. Two deployment strategies are evaluated: direct injection of the crafted I/Q into the victim receiver chain, and over-the-air (OTA) transmission across line-of-sight and non-line-of-sight paths.

The testbed uses 31 Seeed Studio XIAO ESP32-C3 BLE transmitters and two Ettus USRP B210 receivers on three BLE channels (2.406, 2.408, 2.434 GHz), with CNN, Transformer and RNN fingerprint classifiers. Headline results: direct-injection targeted attack success rate (TASR) exceeds 97% under all three threat models; with all 31 devices enrolled, TASR is 39.6–50.3%; OTA performance degrades gracefully with distance and multipath, and a calibration step recovers roughly 20 percentage points. The authors report that their targeted success rate exceeds existing baselines by more than 80%. Across data representations, phase-derivative features gave the lowest attack success and are flagged as a candidate defence; the attack otherwise transfers across classifier architectures and input representations.

## Summary (ZH)

Albousayri 与 Hamdaoui（俄勒冈州立大学；被 PST 2026——第 23 届隐私、安全与信任国际会议——录用；arxiv 2026 年 7 月 6 日）提出一种针对射频指纹（RFFP）的仿冒攻击。RFFP 是物理层认证技术，靠发射机在波形上留下的微小硬件损伤（CFO、I/Q 失衡、直流偏置、滤波器/调制器参数）来识别设备。本文的关键区别在威胁模型：以往的 RFFP 攻击假定攻击者能查询或梯度探测受害分类器；本文新增了 **No-Access（零访问）** 攻击者——既没有分类器也没有受害者接收机，从一台完全不同、位置也不同的收发机发动攻击——并与传统的 Full-Access 与 Limited-Access（代理模型）设定并列评估。

方法称为 HWE（硬件损伤估计）：训练一个无监督神经编码器，直接从捕获的 BLE 广播帧 I/Q 中估计目标设备的八项损伤参数（载波频偏、相位偏移、I/Q 增益与相位失衡、直流偏置、高斯滤波器带宽时间积、频偏、以及相关调制器参数）。随后信号生成器合成新的 BLE 帧——负载可由攻击者任意指定——把估计出的损伤"盖章"到帧上，再由 SDR 发射。HWE+ 变体在有代理分类器时对损伤向量做基于梯度的精修。评估了两种投放方式：把伪造 I/Q 直接注入受害接收链，以及在视距/非视距路径上的空口（OTA）发射。

测试床包括 31 台 Seeed Studio XIAO ESP32-C3 BLE 发射端与两台 Ettus USRP B210 接收机，覆盖三个 BLE 信道（2.406、2.408、2.434 GHz），指纹分类器涵盖 CNN、Transformer 与 RNN。核心结果：直接注入下的定向攻击成功率（TASR）在三种威胁模型下均超过 97%；31 台设备全部注册时 TASR 为 39.6–50.3%；OTA 性能随距离与多径平滑下降，一步校准可挽回约 20 个百分点。作者称其定向成功率比现有基线高出 80% 以上。在各种数据表示中，相位导数特征的攻击成功率最低，被标记为候选防御；此外攻击可跨分类器架构与输入表示迁移。

## Key technical points (EN)

- Threat models: Full-Access (victim receiver + classifier), Limited-Access (victim receiver, surrogate classifier), No-Access (attacker's own SDR, different location) — the last is the new, realistic case.
- HWE: unsupervised encoder estimates eight impairments (CFO, phase offset, I/Q imbalance, DC offset, BT product, frequency deviation, etc.) from BLE advertising I/Q; generator embeds them into arbitrary-payload BLE frames; HWE+ adds surrogate-guided gradient refinement.
- Testbed: 31 ESP32-C3 XIAO BLE transmitters, 2 USRP B210 receivers, channels 2.406/2.408/2.434 GHz; CNN/Transformer/RNN classifiers.
- Direct injection: >97% targeted success under all threat models; 31-device enrolment: 39.6–50.3% TASR; OTA degrades with distance/multipath, calibration recovers ~20 points; >80% above prior baselines.
- Phase-derivative input representation is the most attack-resistant of those tested; the authors position it as a defence direction.

## Key technical points (ZH)

- 威胁模型：Full-Access（受害接收机+分类器）、Limited-Access（受害接收机+代理分类器）、No-Access（攻击者自有 SDR、不同位置）——最后一种是新增且最贴近现实的情形。
- HWE：无监督编码器从 BLE 广播帧 I/Q 中估计八项损伤（CFO、相位偏移、I/Q 失衡、直流偏置、BT 积、频偏等）；生成器把它们嵌入任意负载的 BLE 帧；HWE+ 增加代理分类器引导的梯度精修。
- 测试床：31 台 ESP32-C3 XIAO BLE 发射端、2 台 USRP B210 接收机、信道 2.406/2.408/2.434 GHz；CNN/Transformer/RNN 分类器。
- 直接注入：三种威胁模型下定向成功率 >97%；31 台注册设备：TASR 39.6–50.3%；OTA 随距离/多径下降，校准挽回约 20 个百分点；比既有基线高 80% 以上。
- 相位导数输入表示在所测方案中最抗攻击，作者将其列为防御方向。

## Why it matters / what's new (EN)

The KB's RF-fingerprint coverage so far is Wi-Fi-framed and mostly defensive or theoretical (2026-08-12_arxiv-rff-authentication-theory-framework, 2026-08-06_arxiv-horffi-open-set-rf-fingerprint, 2026-05-04_arxiv-csi-rff-microsignals-fingerprinting), while the Bluetooth security bin holds protocol- and ecosystem-level attacks (2026-07-26_arxiv-snatcher-find-my-ble-tracking, 2026-05-26_arxiv-toa-ranging-ngd-attack-bt-cs, 2026-08-13_arxiv-association-privacy-wifi-p2p-ble). This is the first entry that attacks the PHY-layer identity of BLE devices themselves, and it removes the assumption that made most earlier RFFP attacks impractical: the adversary no longer needs the victim's classifier or receiver, only its own SDR and captured advertising frames. For anyone proposing RFFP as a lightweight second factor for BLE peripherals — a natural fit given advertising frames are unencrypted and abundant — the result sets an expectation: an unsupervised impairment estimator plus signal synthesis is enough to reach near-perfect success at the I/Q level and tens of percent over the air. The paper's own pointer to phase-derivative features as the most robust representation is a concrete, cheap hardening lever. Caveats: single low-cost transmitter family (ESP32-C3), SDR receivers rather than commercial BLE controllers, and OTA numbers depend on a calibration step.

## Why it matters / what's new (ZH)

KB 目前的射频指纹条目都以 Wi-Fi 为框架，且以防御或理论为主（2026-08-12_arxiv-rff-authentication-theory-framework、2026-08-06_arxiv-horffi-open-set-rf-fingerprint、2026-05-04_arxiv-csi-rff-microsignals-fingerprinting），而蓝牙安全分箱收录的是协议层与生态层攻击（2026-07-26_arxiv-snatcher-find-my-ble-tracking、2026-05-26_arxiv-toa-ranging-ngd-attack-bt-cs、2026-08-13_arxiv-association-privacy-wifi-p2p-ble）。本条是首个直接攻击 BLE 设备物理层身份的条目，并且拿掉了让此前多数 RFFP 攻击不切实际的那个假设：攻击者不再需要受害者的分类器或接收机，只需自己的 SDR 与捕获的广播帧。对于想把 RFFP 当作 BLE 外设轻量第二因子的方案——考虑到广播帧未加密且数量充足，这本是很自然的选择——该结果给出了预期：无监督损伤估计加信号合成，就足以在 I/Q 层面达到近乎完美的成功率、在空口达到几十个百分点。论文自身指出相位导数特征是最稳健的表示，这是一条具体且廉价的加固手段。注意事项：仅单一低成本发射端家族（ESP32-C3）、接收端为 SDR 而非商用 BLE 控制器、OTA 数字依赖校准步骤。

## Images

![Threat-model anatomy: Full-Access, Limited-Access and No-Access attackers | 威胁模型剖析：Full-Access、Limited-Access 与 No-Access 攻击者](https://arxiv.org/html/2607.05549v1/ATK_LVL3_v2.png)
![HWE attack pipeline: unsupervised impairment estimation feeding a BLE signal generator | HWE 攻击流水线：无监督损伤估计驱动 BLE 信号生成器](https://arxiv.org/html/2607.05549v1/HWE_ATK.png)
![Deployment strategies: direct injection vs over-the-air on the ESP32-C3 / USRP B210 testbed | 投放方式：ESP32-C3 / USRP B210 测试床上的直接注入与空口攻击](https://arxiv.org/html/2607.05549v1/Attack_ScenariosWired.png)
