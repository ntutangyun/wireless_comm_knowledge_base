---
id: 2026-10-27_arxiv-f1-midhaul-rogue-o-du-attack-6g-oriented-oran-testbed
date_published: 2026-10-24
date_found: 2026-10-27
type: academic-paper
technology: cellular
title_en: "Security evaluation of 6G-oriented and O-RAN networks through targeted attacks"
title_zh: "通过定向攻击评估面向 6G 与 O-RAN 网络的安全性"
url: "https://arxiv.org/abs/2610.33526"
source_quality: full
topics: [O-RAN, F1-interface, midhaul-security, rogue-O-DU, SCTP, F1AP, NEA0, srsRAN, Open5GS, FlexRIC, OCPP]
topic_primary: cellular-security
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)
Apostolos Valiakos, Dimitrios Psaltis, Alexios Lekidis, Nikolaos Kekatos and Elpiniki Papageorgiou (University of Thessaly; EU XTRUST-6G project) evaluate a targeted attack chain against a virtualised, 6G-oriented O-RAN testbed in which the F1 midhaul between the O-CU and O-DU is reachable by an attacker and transport-layer protection is not enabled. The attacker model is an adversary positioned inside the IP midhaul network; the paper states that it does not assume compromise of the core, subscriber credentials or the CU/DU binaries.

The paper walks through four phases: passive reconnaissance of the unencrypted F1 Setup Request to learn the DU's identifiers (gNB ID, DU ID, PLMN, NR cell identity), a targeted denial of service on the F1 association, introduction of a rogue O-DU presenting the observed parameters, and interception of user-plane traffic. The testbed has five VMs (Open5GS core, srsRAN Project CU, DU on a ZeroMQ virtual radio link, FlexRIC Near-RT RIC acting as a passive monitor, and a srsUE emulating an EV charger) plus an attacker VM. The cell is on band 3 FDD with 10 MHz and 15 kHz subcarrier spacing.

In the evaluated configuration the legitimate O-DU lost its midhaul connection and the O-CU accepted the rogue O-DU's setup request without raising an alarm. With the null ciphering algorithm (NEA0) in use, the attacker could extract plaintext OCPP application messages, including the idTag identifier and metering values (meterValues, meterStop), from the F1-U traffic. Message modification and command injection were not tested.

## Summary (ZH)
Apostolos Valiakos、Dimitrios Psaltis、Alexios Lekidis、Nikolaos Kekatos 与 Elpiniki Papageorgiou（色萨利大学；欧盟 XTRUST-6G 项目）评估了针对虚拟化、面向 6G 的 O-RAN 测试平台的一条定向攻击链：O-CU 与 O-DU 之间的 F1 中传可被攻击者访问，且未启用传输层保护。攻击者模型为位于 IP 中传网络内部的对手；论文声明不假设核心网、用户凭据或 CU/DU 二进制被攻陷。

论文依次描述四个阶段：对未加密 F1 建立请求的被动侦察以获取 DU 标识（gNB ID、DU ID、PLMN、NR 小区标识）、对 F1 关联的定向拒绝服务、使用所观察参数引入伪造 O-DU，以及对用户面流量的截获。测试平台含五台虚拟机（Open5GS 核心网、srsRAN Project CU、通过 ZeroMQ 虚拟无线链路连接的 DU、仅作被动监控的 FlexRIC Near-RT RIC，以及模拟电动车充电桩的 srsUE）和一台攻击者虚拟机。小区工作于 band 3 FDD，带宽 10 MHz，子载波间隔 15 kHz。

在所评估的配置中，合法 O-DU 失去中传连接，O-CU 接受了伪造 O-DU 的建立请求而未触发任何告警。在使用空加密算法（NEA0）的情况下，攻击者可从 F1-U 流量中提取明文 OCPP 应用消息，包括 idTag 标识以及计量值（meterValues、meterStop）。消息篡改和命令注入未被测试。

## Key technical points (EN)
- Scope statement: results apply to the evaluated unprotected or misconfigured private O-RAN deployment, and the paper does not claim success against deployments with authenticated, encrypted F1 transport, strong CU-DU identity validation and PDCP ciphering.
- The O-CU validated the F1 Setup Request against configured identifiers, which the attacker had observed in plaintext; the paper ties the outcome to the absence of mutual authentication at that stage.
- The paper motivates NEA0 by operator choices in private 5G and low-cost IoT modems (reduced computational load and latency) and shows the resulting exposure of application data on F1-U.
- Testbed software: srsRAN Project release_24_10 branch for CU and DU, Open5GS with two S-NSSAI entries, FlexRIC with E2SM-KPM and E2SM-RC, srsUE in NR SA mode.
- Evaluated impact: availability disruption and confidentiality exposure; integrity attacks (metering manipulation, OCPP command injection) are identified as plausible but not experimentally validated.
- Stated future work: rogue O-RU insertion, E2 interface manipulation, adversarial interaction with Near-RT RIC applications, and anomaly detection for SCTP and F1AP traffic, monitoring of unexpected O-DU reconnections and identity validation before accepting F1 associations.

## Key technical points (ZH)
- 范围声明：结果适用于所评估的未受保护或配置不当的私有 O-RAN 部署；论文不声称对启用了经认证加密 F1 传输、强 CU-DU 身份校验和 PDCP 加密的部署同样有效。
- O-CU 依据已配置的标识校验 F1 建立请求，而这些标识可被攻击者以明文观察到；论文将结果归因于该阶段缺少双向认证。
- 论文指出私有 5G 和低成本物联网调制解调器中运营商为降低计算负载与时延而采用 NEA0，并展示了由此导致的 F1-U 上应用数据暴露。
- 测试平台软件：CU 与 DU 使用 srsRAN Project release_24_10 分支，Open5GS 含两个 S-NSSAI 条目，FlexRIC 支持 E2SM-KPM 与 E2SM-RC，srsUE 工作于 NR SA 模式。
- 评估的影响：可用性中断与机密性暴露；完整性攻击（计量值篡改、OCPP 命令注入）被认为可能发生，但未经实验验证。
- 作者提出的后续工作：伪造 O-RU 的引入、E2 接口操纵、针对 Near-RT RIC 应用的对抗交互，以及 SCTP 与 F1AP 流量的异常检测、对 O-DU 异常重连的监测和接受 F1 关联前的身份校验。

## Why it matters / what's new (EN)
The paper documents, on a fully virtualised open-source stack, what an F1 midhaul compromise yields when transport protection and mutual authentication are absent and user-plane ciphering is null, and it names the mitigations it considers essential: mutual authentication between RAN components, F1-C/F1-U protection and continuous midhaul monitoring. It is a single-scenario virtual testbed (ZeroMQ radio, one UE) and the authors limit the claims to the unprotected configuration.

## Why it matters / what's new (ZH)
论文在全虚拟化开源协议栈上记录了：在缺少传输保护和双向认证、用户面加密为空的情况下，F1 中传被攻陷会带来什么后果，并指出它认为必不可少的缓解措施：RAN 组件间的双向认证、F1-C/F1-U 保护以及对中传的持续监控。这是单一场景的虚拟测试平台（ZeroMQ 无线链路、单个 UE），作者把结论限定在未受保护的配置内。

## Images

None.
