---
id: 2026-08-18_arxiv-temperature-aware-rff-ble
date_published: 2026-07-27
date_found: 2026-08-18
type: academic-paper
technology: bluetooth
title_en: "Device temperature breaks BLE RF fingerprints: CFO drifts with a 30–56 °C warm-up and unseen-temperature accuracy falls to ~40%; feeding the device's own temperature reading into the classifier restores >97%"
title_zh: "设备温度会破坏 BLE 射频指纹：30–56 °C 升温过程中 CFO 漂移、未见温度下准确率跌至约 40%；把设备自报温度喂给分类器可恢复到 >97%"
url: "https://arxiv.org/abs/2607.25070"
source_quality: full
topics: [BLE, RF-fingerprint, temperature, CFO, device-authentication, physical-layer-security, ESP32-C3]
topic_primary: bt-security
topics_secondary: [security-privacy]
novelty_score: 3
---

## Summary (EN)

Albousayri and Hamdaoui (Oregon State University; accepted at NoF 2026, the 17th International Conference on Network of the Future; arxiv July 27, 2026) quantify a failure mode of RF fingerprinting (RFFP) that is usually folded into "channel variability": the transmitter's own temperature. Using 12 Seeed XIAO ESP32-C3 BLE transmitters and a USRP B210 receiver, they show that as a device warms from about 30 °C to 56 °C over a 20-minute run, its carrier frequency offset (CFO) — the dominant feature most fingerprint classifiers lean on — drifts strongly with temperature, and that this drift confuses a classifier more than a change of location does. A model trained on early, cool-device frames collapses to roughly 40% identification accuracy at temperatures it has not seen.

The proposed remedy is a temperature-aware framework. Each device encodes its internal temperature-sensor reading in the last two bytes of its BLE advertising payload; the receiver captures raw I/Q (256 samples per frame as a 2×256 tensor), passes it through a CNN encoder, concatenates the resulting embedding with the reported temperature, and feeds the pair to an MLP classifier. The intent is that the model learns the trajectory of each device's impairment signature as a function of temperature rather than a single static point. Training uses 5,000 frames from the first three minutes of each capture (70/10/20 split) and evaluation slides one-minute windows across the rest of the warm-up.

Three propagation settings are tested: 1.5 m line-of-sight (~30 dB SNR), 1.5 m behind a metal obstruction (~20 dB), and 7.5 m in a fading environment (~18 dB). Same-location results: the temperature-aware model holds above 97% across all temperatures, a temperature-invariant baseline sits near 90% then degrades to ~40% at unseen temperatures, and a temperature-unaware baseline lands around 40%. Cross-location (train Loc1, test Loc2): the proposed model declines only to ~92%, while the baselines fall to 60% and 20%. Behaviour is consistent whichever of the three locations is used for training. Stated limitations: the scheme requires devices to transmit temperature honestly and accurately, and evaluation used discrete temperature bands rather than a continuous sweep.

## Summary (ZH)

Albousayri 与 Hamdaoui（俄勒冈州立大学；被 NoF 2026——第 17 届未来网络国际会议——录用；arxiv 2026 年 7 月 27 日）量化了射频指纹（RFFP）中一种通常被笼统归入"信道变化"的失效模式：发射机自身的温度。他们用 12 台 Seeed XIAO ESP32-C3 BLE 发射端与一台 USRP B210 接收机证明：设备在 20 分钟运行中从约 30 °C 升温到 56 °C 时，多数指纹分类器最依赖的载波频偏（CFO）随温度显著漂移，其对分类器造成的混淆甚至大于换位置带来的影响。用早期"冷机"帧训练的模型，在未见过的温度下识别准确率跌到约 40%。

提出的对策是温度感知框架：每台设备把内部温度传感器读数编码进 BLE 广播负载的最后两个字节；接收端捕获原始 I/Q（每帧 256 个采样，构成 2×256 张量），经 CNN 编码器得到嵌入，再与上报温度拼接后送入 MLP 分类器。目的是让模型学习每台设备损伤签名随温度变化的轨迹，而不是一个静态点。训练使用每次抓取前三分钟的 5,000 帧（70/10/20 划分），评估则在余下升温过程上滑动一分钟窗口。

三种传播场景：1.5 m 视距（约 30 dB SNR）、1.5 m 金属遮挡（约 20 dB）、7.5 m 衰落环境（约 18 dB）。同位置结果：温度感知模型在所有温度下保持 97% 以上；温度不变基线先约 90%、在未见温度下退化到约 40%；温度无感基线约 40%。跨位置（Loc1 训练、Loc2 测试）：所提模型仅降至约 92%，基线则跌到 60% 与 20%。无论用三处中哪一处训练，行为都一致。声明的局限：方案要求设备诚实且准确地发送温度，且评估用的是离散温度段而非连续扫描。

## Key technical points (EN)

- Finding: BLE transmitter CFO correlates strongly with device temperature over a 30–56 °C warm-up; temperature shift confuses RFFP classifiers more than a location change.
- Framework: temperature carried in the last 2 bytes of the BLE advertising payload; CNN on 2×256 raw I/Q → embedding ⊕ temperature → MLP classifier.
- Testbed: 12 ESP32-C3 XIAO transmitters, USRP B210 receiver; Loc1 1.5 m LoS (~30 dB), Loc2 1.5 m metal NLoS (~20 dB), Loc3 7.5 m fading (~18 dB); 5,000 training frames from first 3 min, 1-min sliding evaluation windows.
- Same-location: >97% (temperature-aware) vs ~90%→~40% (temperature-invariant) vs ~40% (temperature-unaware) at unseen temperatures.
- Cross-location Loc1→Loc2: ~92% vs 60% vs 20%; consistent across training locations.
- Limits: depends on device-reported temperature; discrete temperature bands.

## Key technical points (ZH)

- 发现：BLE 发射端 CFO 在 30–56 °C 升温过程中与温度强相关；温度变化对 RFFP 分类器的干扰大于位置变化。
- 框架：温度放在 BLE 广播负载最后 2 字节；CNN 处理 2×256 原始 I/Q → 嵌入 ⊕ 温度 → MLP 分类器。
- 测试床：12 台 ESP32-C3 XIAO 发射端、USRP B210 接收机；Loc1 1.5 m 视距（约 30 dB）、Loc2 1.5 m 金属非视距（约 20 dB）、Loc3 7.5 m 衰落（约 18 dB）；前 3 分钟 5,000 帧训练，1 分钟滑窗评估。
- 同位置：未见温度下 >97%（温度感知）vs 约 90%→约 40%（温度不变）vs 约 40%（温度无感）。
- 跨位置 Loc1→Loc2：约 92% vs 60% vs 20%；各训练位置结果一致。
- 局限：依赖设备自报温度；离散温度段。

## Why it matters / what's new (EN)

Existing KB fingerprint entries treat robustness as a channel/receiver problem (2026-08-12_arxiv-rff-authentication-theory-framework models the transmitter–channel–receiver cascade; 2026-08-06_arxiv-horffi-open-set-rf-fingerprint addresses open-set unknown devices). This paper isolates a transmitter-internal variable — die temperature — and shows on commodity BLE silicon that it alone can take a fingerprint classifier from >90% to ~40%, which is directly relevant to BLE because low-cost peripherals use inexpensive crystals whose CFO tracks temperature, and because devices heat up during normal operation within minutes. It also proposes an unusually simple fix that fits BLE well: piggyback the on-die temperature reading in the advertising payload and condition the classifier on it. Read together with the same group's impersonation-attack paper (2026-08-18_arxiv-rff-impersonation-attack-ble-hwe), the two entries frame both sides of BLE RFFP in 2026 — attackers can synthesise a target's impairment signature, and defenders must first ensure the legitimate signature is stable enough to be worth defending. Caveats: self-reported temperature is itself spoofable, and results are on one transmitter family with SDR reception.

## Why it matters / what's new (ZH)

KB 已有的指纹条目把稳健性视为信道/接收机问题（2026-08-12_arxiv-rff-authentication-theory-framework 建模发射机–信道–接收机级联；2026-08-06_arxiv-horffi-open-set-rf-fingerprint 处理开集未知设备）。本文单独分离出一个发射机内部变量——芯片温度——并在商用 BLE 芯片上证明仅它一项就能把指纹分类器从 >90% 拉到约 40%。这与 BLE 直接相关：低成本外设用的是廉价晶振，其 CFO 随温度变化，且设备在正常工作几分钟内就会升温。文章还给出一个非常简单、契合 BLE 的修补：把片上温度读数搭载在广播负载里，让分类器以它为条件。与同一团队的仿冒攻击论文（2026-08-18_arxiv-rff-impersonation-attack-ble-hwe）合读，两条目勾勒出 2026 年 BLE 射频指纹的攻防两面——攻击者能合成目标的损伤签名，防御者则得先保证合法签名足够稳定、值得防御。注意事项：自报温度本身可被伪造；结果基于单一发射端家族与 SDR 接收。

## Images

![Identification accuracy vs temperature and location, and CFO vs temperature, for 12 BLE devices | 12 台 BLE 设备的识别准确率随温度/位置变化，以及 CFO 随温度变化](https://arxiv.org/html/2607.25070v1/Temp_overview1.png)
![Proposed temperature-aware RFFP framework: CNN embedding concatenated with reported temperature | 所提温度感知 RFFP 框架：CNN 嵌入与上报温度拼接](https://arxiv.org/html/2607.25070v1/Temp_overview2-v2.png)
