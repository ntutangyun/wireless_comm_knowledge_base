---
id: 2026-10-19_arxiv-isac-3gpp-rel19-rel20-sensing-framework-uav-rcs
date_published: 2026-10-16
date_found: 2026-10-19
type: academic-paper
technology: cellular
title_en: "Integrated Sensing and Communication in 3GPP: Standardization, Performance Evaluation, and Experimental Validation Toward 6G"
title_zh: "3GPP 中的通感一体化：面向 6G 的标准化、性能评估与实验验证"
url: "https://arxiv.org/abs/2610.22995"
source_quality: full
topics: [ISAC, 3GPP, Release-19, Release-20, TR-38.765, TS-23.137, SenF, NsAP, UAV-sensing, RCS, predictive-handover, 6G]
topic_primary: 6g-vision
topics_secondary: [5g-nr, cellular-ai]
novelty_score: 4
---

## Summary (EN)
Gosan Noh, Gebremeskel Seiley Abraha, Joshua Yabana, Nathaniel Foli, Michael Ankomah Asare, Evelyn Seyram Kakah, Mildred Nyantakyiwaa Okyere, De-Roy Ekow Sagoe, Shrayan Das, Pekka Kyosti, Junhyeong Kim, Kyoung-Jae Lee and Eunkyung Kim present a 27-page article that follows integrated sensing and communication (ISAC) through 3GPP standardisation. It starts from Release 19 service requirements and target-aware channel modelling, moves through the Release 20 New Radio (NR) sensing evaluation framework, RAN procedures and system architecture, and then discusses directions toward 6G.

The article pairs the review with three pieces of evidence. The first simulation case study compares hard-decision, soft-decision and hybrid fusion for unmanned aerial vehicle (UAV) sensing across multiple transmission and reception points (TRPs), reporting detection, false alarms and conditional position and velocity accuracy. The second compares ideal and practical sensing-assisted predictive handover with conventional handover, accounting for sensing error and information age. The third is a testbed measurement study of monostatic and bistatic UAV radar cross sections (RCS) across frequencies, platforms and observation angles. The closing sections list open challenges in multi-node fusion, resource and interference management, network evolution, security, privacy and reproducible evaluation, and tie the pieces into a staged evaluation roadmap.

## Summary (ZH)
Gosan Noh、Gebremeskel Seiley Abraha、Joshua Yabana、Nathaniel Foli、Michael Ankomah Asare、Evelyn Seyram Kakah、Mildred Nyantakyiwaa Okyere、De-Roy Ekow Sagoe、Shrayan Das、Pekka Kyosti、Junhyeong Kim、Kyoung-Jae Lee 与 Eunkyung Kim 发表了一篇 27 页的文章，沿 3GPP 标准化脉络梳理通感一体化（ISAC）。文章从 Release 19 的业务需求与面向目标的信道建模出发，经由 Release 20 新空口（NR）感知评估框架、RAN 流程与系统架构，再讨论面向 6G 的方向。

文章在综述之外给出三类证据。第一个仿真案例比较了多发送接收点（TRP）下无人机（UAV）感知的硬判决、软判决与混合融合，报告检测率、虚警以及条件位置与速度精度。第二个案例比较理想与实际的感知辅助预测切换及常规切换，并计入感知误差与信息龄。第三是基于测试平台的测量研究，刻画不同频率、平台与观测角下 UAV 的单站与双站雷达散射截面（RCS）。结尾部分列出多节点融合、资源与干扰管理、网络演进、安全、隐私和可复现评估方面的开放问题，并将各部分串联为分阶段的评估路线图。

## Key technical points (EN)
- Release 20 RAN1 evaluation framework: TR 38.765 sets an initial framework for gNB-based UAV sensing (radio assumptions, sensing metrics, performance objectives). RAN3 covers sensing-task control and information transfer between the gNB and a new sensing function (SenF); SA2 covers core-network functions to manage sensing requests and deliver results.
- Protocol stack: the article reports that TR 38.765 concludes the SCTP-based protocol stack should be adopted for sensing-data transmission in a potential normative phase, with NsAP over SCTP/IP for sensing signalling. NsAP procedures described include Sensing Initiation (request, response or failure; one-time, periodic or event-triggered reporting), Modification, Abort and Failure Indication.
- Reporting levels: four gNB-to-SenF levels, A (channel-like amplitude and phase) to D (object-level states), trade transport and central processing load against local processing at the gNB. Level C is described as the practical baseline because it keeps information useful for multi-gNB fusion without sending raw samples.
- Architecture: TR 23.700-14 is the Stage 2 study baseline, being developed normatively in TS 23.137. The baseline assumes gNB-based sensing within a single PLMN, one SenF per request, aerial-object detection and tracking as the initial service, and no dedicated sensing-data storage function. An untrusted Application Function reaches the SenF through the NEF (N33, SEN1); a trusted one can use SEN3.
- Scope of the NR ISAC work item: centred on gNB-based monostatic sensing for UAV targets, with no general UE impact.
- UAV RCS campaign: a DJI Phantom 2 on a turntable rotated in 1-degree steps, measured with a Keysight PNA-X over 11 to 26 GHz (2001 points) in a controlled indoor non-anechoic environment, plus Mini 2, M350 RTK and Phantom 3 data sets. Bistatic geometry used 2.6 m legs with the bistatic angle varied from 0 to 90 degrees in 15-degree steps.
- Measured behaviour: RCS depends jointly on frequency, aspect, platform and geometry; monostatic RCS was generally higher than bistatic for the sampled geometries; the frequency response has local peaks and notches; frequency-averaged azimuthal RCS can be fitted by a log-normal distribution whose parameters vary with platform and band.
- Fusion case study: the article states that hybrid fusion detects four percentage points more targets than hard-decision fusion, with thresholds calibrated to a common 1% Type-1 false-alarm budget.

## Key technical points (ZH)
- Release 20 RAN1 评估框架：TR 38.765 为基于 gNB 的 UAV 感知建立了初步框架（无线假设、感知指标、性能目标）。RAN3 研究 gNB 与新增感知功能（SenF）之间的感知任务控制与信息传递；SA2 研究管理感知请求并交付结果的核心网功能。
- 协议栈：文章称 TR 38.765 结论为，在潜在的规范化阶段，感知数据传输宜采用基于 SCTP 的协议栈，感知信令采用 SCTP/IP 之上的 NsAP。所述 NsAP 流程包括感知发起（请求、响应或失败；一次性、周期或事件触发上报）、修改、终止与失败指示。
- 上报层级：gNB 到 SenF 共有 A（类信道的幅相）至 D（目标级状态）四个层级，在传输与集中处理负载和 gNB 本地处理之间折中。C 级被描述为实用基线，因为它保留了对多 gNB 融合有用的信息而无需传输原始样本。
- 架构：TR 23.700-14 是 Stage 2 研究基线，正在 TS 23.137 中规范化。基线假设在单个 PLMN 内由 gNB 感知、每个请求对应一个 SenF、以空中目标检测与跟踪为初始业务，且没有专门的感知数据存储功能。不受信任的应用功能（AF）经 NEF（N33、SEN1）访问 SenF，受信任的 AF 可使用 SEN3。
- NR ISAC 工作项范围：以 gNB 为主的单站 UAV 目标感知，对 UE 无通用影响。
- UAV RCS 测量：DJI Phantom 2 置于转台上以 1 度步进旋转，使用 Keysight PNA-X 在 11 至 26 GHz（2001 点）、受控室内非消声环境下测量，另有 Mini 2、M350 RTK 与 Phantom 3 数据集。双站几何采用 2.6 m 的两段距离，双站角以 15 度步进在 0 至 90 度间变化。
- 测量现象：RCS 同时取决于频率、视角、平台与几何；在所采样几何下单站 RCS 总体高于双站；频率响应存在局部峰与谷；频率平均的方位 RCS 可用对数正态分布拟合，参数随平台与频段而异。
- 融合案例：文章称，在统一的 1% 第一类虚警预算下，混合融合比硬判决融合多检测 4 个百分点的目标。

## Why it matters / what's new (EN)
The article collects the Release 19 and Release 20 sensing building blocks (service requirements, TR 38.901 target-aware channel model, TR 38.765 evaluation framework, SenF-gNB procedures, TS 23.137 architecture) in one place and attaches simulation and measurement evidence to them. The authors state the Release 20 baseline is intentionally narrow (gNB-based UAV sensing within one PLMN), and that broader target classes, sensing modes (including UE participation and multi-node operation), frequency ranges and network roles remain study directions. The RCS data are a limited sample of small consumer UAVs under non-identical measurement conditions, which the article itself describes as a descriptive rather than a controlled comparison.

## Why it matters / what's new (ZH)
文章把 Release 19 与 Release 20 的感知构件（业务需求、TR 38.901 面向目标的信道模型、TR 38.765 评估框架、SenF-gNB 流程、TS 23.137 架构）汇集在一处，并为其配上仿真与测量证据。作者指出 Release 20 基线刻意收窄（单个 PLMN 内基于 gNB 的 UAV 感知），更广的目标类别、感知模式（含 UE 参与与多节点）、频段和网络角色仍属研究方向。RCS 数据仅是小型消费级无人机在不完全一致的测量条件下的有限样本，文章自身也称其为描述性而非受控的比较。
