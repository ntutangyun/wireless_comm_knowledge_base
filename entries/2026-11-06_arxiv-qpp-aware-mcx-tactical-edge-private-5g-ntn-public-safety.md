---
id: 2026-11-06_arxiv-qpp-aware-mcx-tactical-edge-private-5g-ntn-public-safety
date_published: 2026-11-03
date_found: 2026-11-06
type: academic-paper
technology: cellular
title_en: "QPP-Aware MCX over Tactical Edge 3D Networks in Public-Safety Communications"
title_zh: "公共安全通信中基于战术边缘三维网络的 QPP 感知任务关键业务（MCX）"
url: "https://arxiv.org/abs/2611.05165"
source_quality: full
topics: [MCX, MCPTT, MCVideo, MCData, QPP, ARP, Open5GS, PCF, tactical-edge, Starlink-backhaul, public-safety, IMS]
topic_primary: 5g-nr
topics_secondary: [ntn, network-slicing]
novelty_score: 3
---

## Summary (EN)

José Oliveira and co-authors (Instituto de Telecomunicacoes, Aveiro, Portugal; the manuscript uses an IEEE OJ-COMS template and is not marked as accepted) propose a mission-critical communications system for disaster scenarios. It supports 3GPP Mission Critical Push-to-Talk (MCPTT), Mission Critical Video (MCVideo) and Mission Critical Data (MCData) over a private 5G standalone network with non-terrestrial (satellite) backhaul, deployed at the tactical edge.

Two ideas are combined. First, a context-aware Quality, Priority and Pre-emption (QPP) mechanism adapts network resources to the operational state of the active mission-critical service: extensions to the Open5GS Policy Control Function (PCF) and Session Management Function (SMF) map the N5 resPrio attribute to configurable ARP parameters so priority and pre-emption can be updated for an existing flow without session re-establishment. Second, service and media functions (the UPF and RTPengine) are placed at the tactical edge while IMS and service control stay centralised, so only signalling crosses the satellite link. The authors report that the initial implementation was contributed upstream to Open5GS (a pull request).

## Summary (ZH)

José Oliveira 等（葡萄牙阿威罗电信研究所；稿件采用 IEEE OJ-COMS 模板，未标注为已接收）提出一种面向灾害场景的任务关键通信系统。它在带有非地面（卫星）回传的 5G 独立组网专网上、于战术边缘部署，支持 3GPP 任务关键一键通（MCPTT）、任务关键视频（MCVideo）和任务关键数据（MCData）。

方案结合了两点。其一是上下文感知的质量、优先级与抢占（QPP）机制，按当前任务关键业务的运行状态调整网络资源：对 Open5GS 策略控制功能（PCF）和会话管理功能（SMF）的扩展把 N5 的 resPrio 属性映射到可配置的 ARP 参数，使已有流的优先级与抢占无需重建会话即可更新。其二是把业务与媒体功能（UPF 和 RTPengine）放到战术边缘，而 IMS 与业务控制保持集中，因此只有信令穿越卫星链路。作者表示初始实现已作为拉取请求贡献给上游 Open5GS。

## Key technical points (EN)

- Testbed: a tactical radio node (mini-PC running Amarisoft 5G gNB software with a USRP B210, NR band n77, 40 MHz) and a central service node hosting the Open5GS core, a Kamailio-based IMS, the MCX common services and a custom SIP application server; the satellite path is a Starlink backhaul. Experiments use up to 64 simulated UEs.
- Three configurations: S1 terrestrial backhaul with centralised media processing; S2 satellite backhaul with centralised media processing; S3 satellite backhaul with edge media processing (UPF and RTPengine moved to the tactical edge).
- Transport results (95th percentile MCPTT audio transport delay): 117.53 ms in the centralised satellite case against 57.50 ms with edge media, a reduction of about 60 ms; packet loss falls from 9.78% to 0.36%, which the authors describe as comparable to, and in these runs slightly better than, the terrestrial baseline.
- Access time: the protocol-level MCPTT access time rises from a median of 47.84 ms (P95 67.16 ms) on S1 to 90.78 ms (P95 114.24 ms) on S2, and to 149.25 ms (P95 184.52 ms) on S3, which the authors describe as consistent with IMS and service-control signalling still crossing the satellite backhaul; the comparison does not isolate the cause. The 184.52 ms figure stays below the 300 ms reference the authors use for established calls, although isolated maxima above 300 ms occurred in S2 and S3 (355.98 and 341.63 ms).
- MCData: reliable SIP message distribution at the tested rates, with all 63,000 expected recipient deliveries reported and no timeout or worker failure in any scenario.
- Default priorities follow 3GPP 5QI mappings (for example 5QI 65 for MCPTT voice and 67 for MCVideo); an emergency transition updates the priority on an existing flow while preserving its 5QI and QFI.

## Key technical points (ZH)

- 测试床：战术无线电节点（运行 Amarisoft 5G gNB 软件的迷你 PC 加 USRP B210，NR n77 频段，40 MHz）与中心业务节点（承载 Open5GS 核心网、基于 Kamailio 的 IMS、MCX 公共服务和自定义 SIP 应用服务器）；卫星路径为 Starlink 回传。实验最多使用 64 个模拟 UE。
- 三种配置：S1 为地面回传加集中式媒体处理；S2 为卫星回传加集中式媒体处理；S3 为卫星回传加边缘媒体处理（UPF 与 RTPengine 移至战术边缘）。
- 传输结果（MCPTT 音频传输时延第 95 百分位）：集中式卫星情形为 117.53 ms，边缘媒体为 57.50 ms，约降低 60 ms；丢包率由 9.78% 降至 0.36%，作者称其与地面基线相当，且在这些运行中略优。
- 接入时间：协议级 MCPTT 接入时间由 S1 的中位数 47.84 ms（P95 67.16 ms）升至 S2 的 90.78 ms（P95 114.24 ms），再升至 S3 的 149.25 ms（P95 184.52 ms），作者认为这与 IMS 及业务控制信令仍穿越卫星回传相符，但该对比未能分离具体原因。184.52 ms 低于作者对已建立呼叫采用的 300 ms 参考值，但 S2 与 S3 中出现过个别超过 300 ms 的最大值（355.98 与 341.63 ms）。
- MCData：在测试速率下 SIP 消息分发可靠，报告全部 63,000 次预期接收均已送达，三个场景中均无超时或工作进程故障。
- 默认优先级遵循 3GPP 的 5QI 映射（如 MCPTT 语音用 5QI 65，MCVideo 用 67）；紧急状态转换在保持 5QI 与 QFI 不变的情况下更新已有流的优先级。

## Why it matters / what's new (EN)

The paper gives measured numbers for where to put media functions when the backhaul is a satellite link, and what that costs in call setup. The result is a trade-off rather than a free win, since moving the UPF and media to the edge cut audio transport delay and loss while measured MCPTT access time rose, which the authors describe as consistent with signalling still crossing the satellite path. The evidence comes from one tactical testbed with simulated UEs and an upstream-contributed Open5GS change, not from a field deployment with real users, and the manuscript is a preprint template that does not state acceptance.

## Why it matters / what's new (ZH)

该论文给出了实测数字：当回传是卫星链路时媒体功能应放在哪里，以及这对呼叫建立意味着什么代价。结果是一种权衡而非白拿的收益：把 UPF 与媒体移到边缘降低了音频传输时延和丢包，但实测的 MCPTT 接入时间上升，作者认为这与信令仍穿越卫星路径相符。证据来自带模拟 UE 的单个战术测试床和贡献给上游的 Open5GS 修改，而非有真实用户的外场部署，且该稿件是未说明接收状态的预印本模板。

## Images

None.
