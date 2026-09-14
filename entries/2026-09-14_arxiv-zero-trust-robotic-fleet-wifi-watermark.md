---
id: 2026-09-14_arxiv-zero-trust-robotic-fleet-wifi-watermark
date_published: 2026-09-04
date_found: 2026-09-14
technology: wifi
type: academic-paper
title_en: "Practical Zero-Trust for Mission-Critical Robotic Fleets via Hardware Attestation and Packet Timing Watermarking"
title_zh: "面向关键任务机器人集群的实用零信任方案：硬件证明与数据包时序水印"
url: "https://arxiv.org/abs/2609.05741"
source_quality: full
topics: [security-privacy, deauthentication, rogue-AP, TPM, SIEM]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

This paper (accepted for the 2026 IEEE World Forum on Public Safety Technology) proposes a three-layer zero-trust security framework for mission-critical robotic fleets that communicate over Wi-Fi, and validates it on a real testbed rather than in simulation. The three layers are: a hardware root of trust (a TPM 2.0 coprocessor performing Endorsement Key attestation, measured at 314 ms initialization overhead), a centralized SIEM (Security Information and Event Management) pipeline built on the ELK Stack (Elasticsearch, Logstash, Kibana) fed by lightweight data shippers, and a packet-layer defense using a non-cryptographic Inter-Packet Delay (IPD) timing watermark with Gaussian-distributed timing offsets. The Wi-Fi-specific piece of the SIEM layer runs Kismet for out-of-band RF spectrum monitoring, which the authors use to detect Layer 2 attacks directly at the 802.11 management-frame level — specifically, unauthenticated deauthentication frames that spoof the access point's MAC address, and ARP-table inconsistencies indicating a rogue device on the network.

The testbed is a TurtleBot3 Burger mobile robot connected over an IEEE 802.11n network to a Raspberry Pi 4 access point (hostapd/RaspAP) at a 50 Hz control-loop frequency, with the TurtleBot3's onboard Raspberry Pi 4B running ROS 2 Humble over eProsima Fast DDS and a Raspberry Pi 5 acting as the centralized security operations center. The adversary was a Raspberry Pi 4B running Kali Linux, paired with a TP-Link AC600 USB Wi-Fi adapter. Reported results: the IPD kurtosis watermark achieved a 20/20 detection rate against active man-in-the-middle injection attacks (with 19/20 correct pass-through under legitimate, unattacked conditions), using a baseline kurtosis acceptance band of 2.8 ≤ K ≤ 3.2 that attacks reliably pushed outside; ARP-poisoning detection achieved 10/10 on unauthorized IP-to-MAC mappings; and Kismet's out-of-band monitoring successfully intercepted and alerted on the deauthentication-flood attack in real time.

## Summary (ZH)

这篇论文（已被 2026 年 IEEE 公共安全技术世界论坛录用）针对通过 Wi-Fi 通信的关键任务机器人集群，提出了一套三层零信任安全框架，并在真实测试平台（而非仿真环境）上进行了验证。三层分别是：硬件信任根（一枚执行背书密钥证明的 TPM 2.0 协处理器，实测初始化开销为 314 毫秒）、基于 ELK 技术栈（Elasticsearch、Logstash、Kibana）并由轻量级数据采集器供数的集中式 SIEM（安全信息与事件管理）流水线，以及采用高斯分布时序偏移、非加密型包间延迟（IPD）时序水印的数据包层防御。SIEM 层中与 Wi-Fi 直接相关的部分运行 Kismet 进行带外射频频谱监测，作者借此在 802.11 管理帧层面直接检测二层攻击——具体包括伪造接入点 MAC 地址的未经认证解除认证（deauth）帧，以及指示网络中存在恶意设备的 ARP 表不一致情况。

测试平台为一台 TurtleBot3 Burger 移动机器人，通过 IEEE 802.11n 网络以 50 Hz 控制回路频率连接至一台运行 hostapd/RaspAP 的树莓派 4 接入点；TurtleBot3 机载的树莓派 4B 运行 ROS 2 Humble（基于 eProsima Fast DDS），集中式安全运营中心由树莓派 5 担任。攻击方为运行 Kali Linux 的树莓派 4B，搭配 TP-Link AC600 USB Wi-Fi 适配器。报告结果：IPD 峰度水印对主动中间人注入攻击的检测率达到 20/20（在合法、无攻击条件下的正确放行率为 19/20），所用基线峰度接受区间为 2.8 ≤ K ≤ 3.2，攻击会可靠地将峰度值推出该区间；ARP 投毒检测对未授权 IP-MAC 映射的检测率达到 10/10；Kismet 的带外监测成功实时拦截了解除认证洪泛攻击并生成告警。

## Key technical points (EN)

- Three independent defensive layers: TPM 2.0 hardware attestation (Endorsement Key, 314 ms init overhead), ELK-based centralized SIEM telemetry, and a non-cryptographic IPD timing watermark.
- Wi-Fi-specific detection is delegated to Kismet's out-of-band RF monitoring: catches unauthenticated 802.11 deauthentication frames spoofing the AP's MAC address, and cross-checks ARP tables for rogue devices, feeding alerts into the Kibana dashboard alongside in-band telemetry.
- IPD watermark: Gaussian-distributed timing offsets embedded in packet inter-arrival times; MITM injection detected via a shift in the sample kurtosis (K) of the observed IPD distribution outside a 2.8–3.2 baseline band.
- Real hardware, not simulation: TurtleBot3 Burger (onboard Raspberry Pi 4B running ROS 2 Humble / Fast DDS) + Raspberry Pi 4 AP (hostapd/RaspAP) + Raspberry Pi 5 SOC, over 802.11n at a 50 Hz control loop; adversary used a Raspberry Pi 4B running Kali Linux, paired with a TP-Link AC600 adapter.
- Headline numbers: 20/20 MITM-injection detection (19/20 correct pass-through under legitimate, unattacked conditions), 10/10 ARP-poisoning detection, real-time deauth-flood interception via Kismet.
- Accepted for the 2026 IEEE World Forum on Public Safety Technology (WF-PST).

## Key technical points (ZH)

- 三个独立防御层：TPM 2.0 硬件证明（背书密钥，初始化开销 314 毫秒）、基于 ELK 的集中式 SIEM 遥测，以及非加密型 IPD 时序水印。
- Wi-Fi 特定的检测工作交由 Kismet 的带外射频监测完成：捕获伪造 AP MAC 地址的未经认证 802.11 解除认证帧，并交叉核验 ARP 表以发现恶意设备，将告警与带内遥测一并送入 Kibana 仪表盘。
- IPD 水印：在数据包到达间隔中嵌入高斯分布的时序偏移；通过观测到的 IPD 分布样本峰度（K）偏离 2.8–3.2 基线区间来检测中间人注入攻击。
- 真实硬件而非仿真：TurtleBot3 Burger（机载运行 ROS 2 Humble / Fast DDS 的树莓派 4B）+ 树莓派 4 接入点（hostapd/RaspAP）+ 作为安全运营中心的树莓派 5，通过 802.11n 网络以 50 Hz 控制回路运行；攻击方使用运行 Kali Linux 的树莓派 4B，搭配 TP-Link AC600 适配器。
- 核心数据：中间人注入攻击检测率 20/20（合法、无攻击条件下正确放行 19/20），ARP 投毒检测率 10/10，Kismet 实现解除认证洪泛攻击的实时拦截。
- 已被 2026 年 IEEE 公共安全技术世界论坛（WF-PST）录用。

## Why it matters / what's new (EN)

Most Wi-Fi security work this KB has tracked either proposes a cryptographic protocol change (post-quantum PAKE, EPPKE) or a purely software/ML detection layer. This paper's contribution is a real-hardware zero-trust integration that integrates 802.11-specific detection (deauth-frame spoofing, rogue-device ARP behavior) with a generic, non-cryptographic packet-timing side channel, evaluated end-to-end on an actual robotic-fleet control loop rather than a synthetic dataset. The perfect or near-perfect detection numbers (20/20, 10/10) come with real testbed caveats (a single robot, a single access point, a controlled Kali-based adversary) that a larger multi-robot, multi-AP deployment would need to confirm.

## Why it matters / what's new (ZH)

本知识库此前跟踪的大多数 Wi-Fi 安全研究，要么提出密码学协议层面的改动（后量子 PAKE、EPPKE），要么是纯软件/机器学习检测层。这篇论文的贡献在于一次真实硬件上的零信任集成：将 802.11 特定的检测（解除认证帧伪造、恶意设备的 ARP 行为）与一种通用的、非加密的数据包时序侧信道整合在一起，并在真实机器人集群控制回路上进行端到端评估，而非依赖合成数据集。近乎完美的检测数据（20/20、10/10）附带真实测试平台的局限性（单台机器人、单个接入点、受控的基于 Kali 的攻击方），更大规模的多机器人、多接入点部署仍需进一步验证。

## Images

None.
