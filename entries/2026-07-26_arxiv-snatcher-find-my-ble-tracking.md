---
id: 2026-07-26_arxiv-snatcher-find-my-ble-tracking
date_published: 2026-06-19
date_found: 2026-07-26
type: academic-paper
technology: bluetooth
title_en: "Snatcher: Apple's Find My network lets strangers physically locate lost devices — three BLE weaknesses, 90%+ recovery-by-attacker success at 30 m"
title_zh: "Snatcher：苹果查找网络令陌生人可物理定位丢失设备——三处 BLE 弱点，30 米内攻击者定位成功率超 90%"
url: "https://arxiv.org/abs/2606.21067"
source_quality: full
topics: [BLE, Find-My, privacy, tracking, MAC-randomization, security]
topic_primary: bt-security
topics_secondary: [bt-location, bt-le]
novelty_score: 4
---

## Summary (EN)

Ren, Zhang, Liu and Li (CCS '26) show that Apple's Find My network — roughly a billion BLE devices acting as a crowdsourced finding mesh — leaks enough to let a stranger physically walk to a lost device before its owner does. The attack tool, Snatcher, runs as an ordinary Android app using only the phone's microphone, IMU and standard BLE APIs; no SDR, no rooted device, no special hardware.

Three protocol weaknesses make it work. First, a cleartext discovery beacon: lost devices advertise an unencrypted static identifier (type 0x12), so an attacker can pick separated devices out of ambient BLE traffic instantly and without authentication. Second, unauthenticated acoustic actuation — any non-owner can connect to a lost accessory such as an AirTag or AirPods and trigger its sound, turning the anti-loss feature into an attacker-controlled beacon (connection works up to ~80 m; useful acoustics to ~30 m). Third, extended identity persistence: AirTag MAC rotation runs on roughly a 24-hour period, far longer than any theft window.

Snatcher escalates through three levels. Level 1 uses the attacker's own body as an acoustic shield to score bearing, then iteratively re-triggers the sound while walking — 85–92% success within 30 m in quiet settings, 202 s and 34.5 m walked for a 30 m target (path efficiency 0.89). Level 2 handles silent devices (iPhone, Watch) by fusing noisy RSSI with pedestrian dead reckoning under Bayesian uncertainty weighting, holding 90% success at 30 m where naive gradient-following gets 40%. Level 3 defeats MAC randomization outright by clustering addresses on RSSI signature plus rotation timing — 98% clustering accuracy even against a hypothetical 30-second rotation period. Tests spanned office, corridor, canteen and parking-lot environments; devices enter the exploitable "Separated" state after only 8–13 minutes and 11–19 m.

## Summary (ZH)

Ren、Zhang、Liu 与 Li（CCS '26）指出，苹果的"查找"（Find My）网络——约十亿台 BLE 设备构成的众包寻物网状网——泄露的信息足以让陌生人比失主更早步行找到丢失设备。攻击工具 Snatcher 是一个普通 Android 应用，仅使用手机麦克风、惯性测量单元（IMU）和标准 BLE 接口；无需软件无线电、无需 root、无需专用硬件。

三处协议弱点使攻击成立。其一，明文发现信标：丢失设备广播未加密的静态标识符（类型 0x12），攻击者无需认证即可从环境 BLE 流量中瞬间识别出处于分离状态的设备。其二，未认证的声音触发——任何非所有者都能连接 AirTag、AirPods 等丢失配件并触发其发声，把防丢功能变成攻击者可控的信标（连接可达约 80 米，有效声学范围约 30 米）。其三，身份持久化过长：AirTag 的 MAC 轮换周期约 24 小时，远超任何盗窃时间窗。

Snatcher 分三级递进。第一级利用攻击者自身身体作为声学屏障进行方位打分，再边走边反复触发发声——安静环境 30 米内成功率 85–92%，针对 30 米目标耗时 202 秒、步行 34.5 米（路径效率 0.89）。第二级应对无声设备（iPhone、Watch），以贝叶斯不确定性加权融合含噪 RSSI 与行人航位推算，30 米处保持 90% 成功率，而朴素梯度跟踪法仅 40%。第三级直接击破 MAC 随机化：依据 RSSI 特征与轮换时序对地址聚类，即便面对假想的 30 秒轮换周期仍达 98% 聚类准确率。测试覆盖办公室、走廊、食堂和停车场四种环境；设备仅需 8–13 分钟、11–19 米即进入可被利用的"分离"状态。

## Key technical points (EN)

- Cleartext type-0x12 static identifier in lost-device BLE advertisements enables unauthenticated separation detection.
- Anyone can connect to a separated AirTag/AirPods and trigger its sound — no ownership check (connect ≤80 m, acoustics ≤30 m).
- AirTag MAC rotation ≈24 h; Level-3 clustering on RSSI signature + rotation timing hits 98% accuracy even at a 30 s rotation.
- Level 1 (acoustic bearing): 85–92% success ≤30 m, 202 s, 0.89 path efficiency; Level 2 (RSSI+IMU Bayesian fusion): 90% vs 40% baseline at 30 m.
- Commodity Android implementation only; "Separated" state reached after 8–13 min and 11–19 m of owner separation.
- Authors frame the root problem as a three-way conflict between privacy protection, anti-stalking design, and physical device security.

## Key technical points (ZH)

- 丢失设备 BLE 广播中的明文 type-0x12 静态标识符使得无需认证即可检测分离状态。
- 任何人都能连接处于分离状态的 AirTag/AirPods 并触发发声——无所有权校验（连接 ≤80 米，声学 ≤30 米）。
- AirTag MAC 轮换约 24 小时；第三级基于 RSSI 特征 + 轮换时序的聚类，即使轮换周期缩至 30 秒仍达 98% 准确率。
- 第一级（声学测向）：30 米内成功率 85–92%，耗时 202 秒，路径效率 0.89；第二级（RSSI+IMU 贝叶斯融合）：30 米处 90%，基线仅 40%。
- 仅需商用 Android 实现；设备在与所有者分离 8–13 分钟、11–19 米后进入"分离"状态。
- 作者将根因归结为隐私保护、防跟踪设计与设备物理安全之间的三方冲突。

## Why it matters / what's new (EN)

The bt-security bin has covered pairing/authentication weaknesses and BLE IoT authentication design, but this is the first entry on the *finding-network* attack surface — a category where the security goal inverts. Anti-stalking mandates (making trackers discoverable and audible to non-owners, post-AirTag-stalking regulation) directly create the primitive Snatcher exploits; you cannot simultaneously make a tracker easy for a victim to detect and hard for a thief to home in on. That tension is now empirically quantified rather than theorized. It also sets a concrete bar for MAC-randomization design across the whole ecosystem: 30-second rotation is not sufficient when RSSI-plus-timing clustering achieves 98% linkage, which bears on channel-sounding and BLE location privacy work in the bt-location bin (compare 2605.17094 PAwR-based connectionless channel sounding). Apple mitigations were not disclosed in the paper.

## Why it matters / what's new (ZH)

bt-security 分类此前覆盖配对/认证弱点与 BLE IoT 认证设计，但这是首个针对*寻物网络*攻击面的条目——在该场景中安全目标本身发生了反转。防跟踪监管要求（使追踪器对非所有者可发现、可发声，源自 AirTag 跟踪事件后的立法）恰恰构造了 Snatcher 所利用的原语：无法既让受害者容易发现追踪器，又让窃贼难以循迹定位。这一张力如今被实证量化而非停留在理论层面。它同时为整个生态的 MAC 随机化设计设定了具体门槛：当 RSSI 加时序聚类可达 98% 关联准确率时，30 秒轮换并不足够——这一结论对 bt-location 分类中的信道探测与 BLE 位置隐私工作具有直接影响（可对照 2605.17094 基于 PAwR 的无连接信道探测）。论文未披露苹果方面的缓解措施。
