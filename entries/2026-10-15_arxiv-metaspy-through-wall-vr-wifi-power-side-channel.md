---
id: 2026-10-15_arxiv-metaspy-through-wall-vr-wifi-power-side-channel
date_published: 2026-10-11
date_found: 2026-10-15
technology: wifi
type: academic-paper
title_en: "Penetrating the Reality Wall: Long-Range and Through-Wall AR/VR Privacy Eavesdropping via Wireless Power Side Channel"
title_zh: "穿透现实之墙：基于无线功率侧信道的远距离穿墙 AR/VR 隐私窃听"
url: "https://arxiv.org/abs/2610.15865"
source_quality: full
topics: [Wi-Fi, side channel, VR, privacy, traffic analysis, MetaSpy]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

The paper (Ni, Sun, Zhou, Du, Zhao, Wang; arXiv 2610.15865, first submitted 11 October 2026) analyses a power side channel on the network connection of AR/VR headsets. The authors propose MetaSpy, which passively captures the power of Wi-Fi signals transmitted by the router of an adjacent room, through a wall and at a stated distance of 5.0 to 8.0 m, and uses it to infer what the headset user does. The stated key insight is that different VR interactions produce different network traffic loads, which in turn change the power of the Wi-Fi signal. The attacker needs no malware on the headset, no line of sight, no prior knowledge of the device and no joined shared virtual space.

MetaSpy first identifies the device type from the captured power trace and then infers three levels of behaviour: (i) user interactions such as browsing websites, running AR/VR apps and in-app activities; (ii) VR-specific activities in games, with Population: ONE given as the example; and (iii) avatar-based user re-identification and virtual keystrokes corresponding to head movements. The capture hardware is a custom-built wireless power sniffer (an Arduino Nano MCU sampling at 20 kHz) covering the 2.4 and 5 GHz bands.

The evaluation covers four commercial headsets (Meta Oculus Quest 2, PICO 4, Meta Quest 3, Meta Quest Pro) and 20 recruited participants with IRB approval. The router was a Huawei Pro 2, with the sniffer behind a 6.7 cm plastic wall at 5.0 m as the primary setting, and all evaluations ran over Wi-Fi 5 (802.11ac); the paper argues the principle still holds under Wi-Fi 6/7 because aggregate AP power scales with downlink traffic volume. Reported results include 89.2% overall accuracy in distinguishing 50 websites and 97.9% overall accuracy in recognising 50 customised avatars. Accuracy is higher in the single-router home and corridor settings than in the multi-router office and cafe settings, where the paper reports average accuracies of 83.6% and 83.2% for inferring in-device interactions.

The paper also evaluates two countermeasures. Signal obfuscation (an extra nearby router generating random transmissions) lowered accuracy by an average of 46.8%, 49.5%, 33.4% and 36.8% for websites, apps, in-app activities and VR-specific activities; dynamic transmission power lowered it by 33.6%, 35.7%, 25.8% and 25.2%. The authors note that redundant packets cost power and nearby Wi-Fi sources can interfere with each other, and that dynamic power cannot guarantee link quality. They list as a limitation that the attacker must place a sniffer in an adjacent space within 5.0 to 8.0 m of the router, and describe MetaSpy as a proof of concept.

## Summary (ZH)

论文（Ni、Sun、Zhou、Du、Zhao、Wang；arXiv 2610.15865，2026 年 10 月 11 日首次提交）分析了 AR/VR 头显网络连接上的功率侧信道。作者提出 MetaSpy：被动捕获相邻房间中路由器发射的 Wi-Fi 信号功率，隔墙、距离为文中所述的 5.0 至 8.0 m，并据此推断头显用户的行为。文中给出的核心见解是：不同的 VR 交互会产生不同的网络流量负载，进而改变 Wi-Fi 信号功率。攻击者无需在头显上植入恶意软件，无需视距，无需事先了解设备，也无需加入共享虚拟空间。

MetaSpy 先根据捕获的功率轨迹识别设备类型，再推断三个层次的行为：（i）用户交互，如浏览网站、运行 AR/VR 应用和应用内活动；（ii）游戏中特有的 VR 活动，文中以 Population: ONE 为例；（iii）基于头像的用户再识别，以及与头部运动对应的虚拟键盘按键推断。采集硬件是自制的无线功率嗅探器（采样率 20 kHz 的 Arduino Nano 微控制器），覆盖 2.4 和 5 GHz 频段。

评估涵盖四款商用头显（Meta Oculus Quest 2、PICO 4、Meta Quest 3、Meta Quest Pro）和 20 名经 IRB 批准招募的参与者。路由器为华为 Pro 2，主要设置是嗅探器位于 6.7 cm 厚塑料墙后 5.0 m 处，所有评估均在 Wi-Fi 5（802.11ac）下进行；论文认为该原理在 Wi-Fi 6/7 下仍然成立，因为 AP 的总功率随下行流量大小变化。报告的结果包括：区分 50 个网站的总体准确率 89.2%，识别 50 个自定义头像的总体准确率 97.9%。单路由器的家庭和走廊场景准确率高于多路由器的办公室和咖啡馆场景，后者推断设备内交互的平均准确率分别为 83.6% 和 83.2%。

论文还评估了两种对策。信号混淆（在附近增加一台路由器随机发送数据）使网站、应用、应用内活动和 VR 特有活动的准确率平均分别下降 46.8%、49.5%、33.4% 和 36.8%；动态发射功率使其分别下降 33.6%、35.7%、25.8% 和 25.2%。作者指出冗余数据包会增加功耗、附近的 Wi-Fi 源会相互干扰，且动态功率无法保证链路质量。他们把攻击者必须在距路由器 5.0 至 8.0 m 的相邻空间放置嗅探器列为局限，并称 MetaSpy 为概念验证。

## Key technical points (EN)

- Attack: passive capture of through-wall Wi-Fi signal power from the router connected to an AR/VR headset; no malware, line of sight, prior device knowledge or shared virtual space is assumed.
- Inference levels: device type; websites, apps and in-app activities; VR-specific game activities; avatar re-identification and virtual keystrokes.
- Hardware: custom wireless power sniffer (Arduino Nano, 20 kHz sampling) for 2.4 and 5 GHz; stated attack distance 5.0 to 8.0 m, primary setting 5.0 m behind a 6.7 cm plastic wall.
- Setup: four commercial headsets, 20 participants, Huawei Pro 2 router, evaluations over Wi-Fi 5 only.
- Results: 89.2% for 50 websites, 97.9% for 50 avatars; 83.6% and 83.2% average interaction-inference accuracy in multi-router office and cafe settings.
- Countermeasures tested: signal obfuscation (accuracy down 33.4% to 49.5% on average) and dynamic transmission power (down 25.2% to 35.7%).

## Key technical points (ZH)

- 攻击方式：被动捕获与 AR/VR 头显相连的路由器穿墙后的 Wi-Fi 信号功率；不假设恶意软件、视距、对设备的事先了解或共享虚拟空间。
- 推断层次：设备类型；网站、应用和应用内活动；游戏中特有的 VR 活动；头像再识别与虚拟键盘按键。
- 硬件：自制无线功率嗅探器（Arduino Nano，20 kHz 采样），覆盖 2.4 和 5 GHz；文中所述攻击距离 5.0 至 8.0 m，主要设置为 6.7 cm 塑料墙后 5.0 m。
- 设置：四款商用头显、20 名参与者、华为 Pro 2 路由器，仅在 Wi-Fi 5 下评估。
- 结果：50 个网站 89.2%，50 个头像 97.9%；多路由器的办公室和咖啡馆场景中设备内交互推断平均准确率分别为 83.6% 和 83.2%。
- 测试的对策：信号混淆（准确率平均下降 33.4% 至 49.5%）和动态发射功率（下降 25.2% 至 35.7%）。

## Why it matters / what's new (EN)

The KB's security-privacy bin already covers Wi-Fi sensing-based tracking and PHY-layer information hiding (for example 2026-10-12_arxiv-cotrack-cross-room-passive-wifi-tracking and 2026-10-13_arxiv-secrets-in-preamble-wifi-lstf-phy-hiding); this entry adds a paper that infers application-level behaviour on a Wi-Fi-connected device from received signal power alone. The paper itself describes MetaSpy as a proof of concept evaluated with heuristic settings, on Wi-Fi 5 hardware only.

## Why it matters / what's new (ZH)

本知识库的安全与隐私主题已收录基于 Wi-Fi 感知的跟踪和物理层信息隐藏（例如 2026-10-12_arxiv-cotrack-cross-room-passive-wifi-tracking 与 2026-10-13_arxiv-secrets-in-preamble-wifi-lstf-phy-hiding）；本条目补充了一篇仅凭接收信号功率推断 Wi-Fi 连接设备上应用层行为的论文。论文自身称 MetaSpy 为以启发式设置评估的概念验证，且仅在 Wi-Fi 5 硬件上测试。
