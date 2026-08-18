---
id: 2026-08-18_lockheed-verizon-netsense-5g-drone-sensing
date_published: 2026-08-12
date_found: 2026-08-18
type: industry-news
technology: cellular
title_en: "Lockheed Martin, Verizon, NVIDIA, Keysight and ODC Demonstrate NetSense: Drone Detection from Existing 5G RF Measurements"
title_zh: "洛克希德·马丁、Verizon、NVIDIA、Keysight 与 ODC 演示 NetSense：利用现网 5G 射频测量数据探测无人机"
url: "https://news.lockheedmartin.com/2026-08-12-Lockheed-Martin,-Verizon,-Keysight,-ODC-and-Astris-AI-Demonstrate-Technology-for-Public-Airspace-Protection-with-NVIDIA-Technology"
source_quality: full
topics: [ISAC, AI-RAN, drone-detection, UAS, Verizon, NVIDIA-AI-Aerial, RF-sensing, network-as-a-sensor, counter-UAS]
topic_primary: cellular-ai
topics_secondary: [5g-nr, 6g-vision, open-ran]
novelty_score: 2
---

## Summary (EN)
On 12 August 2026 Lockheed Martin announced (Bethesda, MD press release; trade coverage in Light Reading 13 Aug and Telecoms.com 12 Aug) that its **NetSense Airspace Awareness-as-a-Service** system had completed a live demonstration in a high-traffic urban area near **Miami** in July, detecting, tracking and "maintaining custody" of unmanned aircraft systems (UAS) using **Verizon's existing 5G network** with no modification to the deployed cellular radios. The sensing chain is entirely software: **ODC's AI-native RAN software** exposes the RF measurement data already flowing through the RAN, **NVIDIA's AI Aerial platform** analyses RF-signal disturbances in real time, and Lockheed Martin's own warning-and-tracking algorithms turn the disturbance patterns into drone identification, flight-path prediction and automated real-time alerts. **Keysight** supplied the RF simulation/modelling platform used to validate the system, and **Astris AI** (Lockheed's commercial AI subsidiary) is the go-to-market vehicle. Verizon's Anil Guntupali described the concept as "applying AI to the RF signal measurement data already traversing our 5G infrastructure ... turning our network into an intelligent sensing platform" — the network doing "airspace sensing as a second job".

The announcement is the first named-operator, named-vendor commercialisation of the "cellular network as a passive drone sensor" idea that the KB has so far only seen at research and testbed level. Lockheed says pilots will run in H2 2026 and early 2027 with general availability in 2027 as a subscription service for airports, stadiums, utilities, schools, hospitals and other critical infrastructure; the roadmap "includes broader 5G and future 6G deployment", aligning it with 3GPP's ISAC track. Trade coverage adds that Telecoms.com reports detection at 300–400 ft altitude and that a drone with all of its own radios switched off can still trigger an alert because the system watches what happens to the downlink signals the towers already transmit — while Light Reading notes that the parties declined to state detection range, the number of cell sites needed per coverage area, or false-alarm figures, so the technical envelope of the demonstration is still undisclosed.

## Summary (ZH)
2026 年 8 月 12 日，洛克希德·马丁（马里兰州贝塞斯达新闻稿；Light Reading 8 月 13 日、Telecoms.com 8 月 12 日跟进报道）宣布其 **NetSense“空域感知即服务”**系统已于 7 月在**迈阿密**附近的高流量城区完成实地演示：在**不改动任何现网蜂窝射频设备**的前提下，利用 **Verizon 现有 5G 网络**探测、跟踪并持续“保持锁定”无人机（UAS）。整条感知链路完全由软件构成：**ODC 的 AI 原生 RAN 软件**输出 RAN 中本已流转的射频测量数据，**NVIDIA AI Aerial 平台**实时分析射频信号扰动，洛克希德自研的告警与跟踪算法再把扰动模式转化为无人机识别、航迹预测与自动实时告警。**Keysight** 提供用于系统验证的射频仿真/建模平台，**Astris AI**（洛克希德的商业化 AI 子公司）负责面向客户的部署。Verizon 的 Anil Guntupali 将其概括为“把 AI 应用于已经在 5G 基础设施中流转的射频测量数据……让网络成为智能感知平台”——网络把空域感知当作“第二份工作”。

这是知识库迄今见到的第一例由具名运营商与具名厂商共同推动“蜂窝网络作无源无人机传感器”概念商业化的案例——此前只停留在研究与测试床层面。洛克希德计划 2026 年下半年至 2027 年初开展试点，2027 年以订阅服务形式正式商用，面向机场、体育场、公用事业、学校、医院等关键基础设施；路线图“包括更广泛的 5G 及未来 6G 部署”，与 3GPP 的 ISAC 路线相呼应。行业报道补充：Telecoms.com 称探测高度为 300–400 英尺，且无人机即便关闭机上全部无线电仍会触发告警，因为系统监测的是基站本已发射的下行信号所受的扰动；而 Light Reading 指出各方拒绝披露探测距离、单位覆盖所需站点数与虚警率，演示的技术包络仍未公开。

## Key technical points (EN)
- Sensing modality: passive analysis of RF measurement data already collected by the 5G RAN (no dedicated radar waveform, no new radios) — AI models infer drone presence from disturbances of the network's own transmissions; reported to work even when the drone's own radios are off.
- Software stack: ODC AI-native RAN software (measurement exposure) → NVIDIA AI Aerial (real-time RF-disturbance analytics, AI-RAN compute) → Lockheed Martin warning/tracking algorithms (identification, path prediction, alerting); Keysight RF simulation for validation.
- Demonstration: July 2026, urban Miami area on Verizon's commercial 5G spectrum; drones detected and continuously tracked, alerts generated automatically; trade press cites ~300–400 ft altitude.
- Undisclosed: detection range, cell-site density required, false-alarm/miss rates, which 5G bands/measurement types are used.
- Commercial model: Airspace Awareness-as-a-Service subscription; pilots H2 2026–early 2027 for "select urgent-need customers", GA 2027; roadmap to broader 5G and future 6G (ISAC) deployment.
- Target sites: airports, power plants, stadiums, schools, hospitals, government facilities and other critical infrastructure.

## Key technical points (ZH)
- 感知方式：对 5G RAN 本已采集的射频测量数据做无源分析（无专用雷达波形、不新增射频设备）——AI 模型从网络自身发射信号所受的扰动中推断无人机存在；报道称无人机关闭自身无线电仍可被探测。
- 软件栈：ODC AI 原生 RAN 软件（测量数据暴露）→ NVIDIA AI Aerial（实时射频扰动分析、AI-RAN 算力）→ 洛克希德告警/跟踪算法（识别、航迹预测、告警）；Keysight 射频仿真用于验证。
- 演示：2026 年 7 月，迈阿密城区、Verizon 商用 5G 频谱；无人机被探测并持续跟踪，自动生成告警；行业报道称高度约 300–400 英尺。
- 未披露：探测距离、所需站点密度、虚警/漏检率、所用 5G 频段与测量类型。
- 商业模式：“空域感知即服务”订阅制；2026 下半年至 2027 年初面向“少数紧急需求客户”试点，2027 年正式商用；路线图延伸至更广 5G 与未来 6G（ISAC）部署。
- 目标场景：机场、电厂、体育场、学校、医院、政府设施等关键基础设施。

## Why it matters / what's new (EN)
The KB's ISAC coverage is standards- and research-side: the 3GPP ISAC release ladder (2026-08-13_arxiv-isac-3gpp-5ga-to-6g-evolution, where Release-20's monostatic baseline explicitly targets drone detection), the O-RAN ISAC multi-UAV tracking simulation testbed (2026-08-13_arxiv-multi-uav-tracking-oran-isac-testbed) and the 5G-ISAC UAV sensing work (2026-08-08_arxiv-5g-isac-uav-oran-sensing). NetSense is the first commercial-track data point: a Tier-1 US operator, an AI-RAN compute vendor and a defence prime putting a dated pilot/GA schedule on the same use case, using only existing 5G infrastructure plus software. Two things are notable for the technical reader. First, the architecture is a concrete instance of the "AI-RAN as a sensing substrate" thesis — the same GPU/AI-RAN stack (NVIDIA Aerial, cf. 2026-07-19_nokia-commercial-ai-ran-platform-e3-dapps and 2026-08-07_arxiv-ocudu-gpu-cuda-5g-phy) is being monetised for a non-communications service before 3GPP-native sensing arrives. Second, what is *not* disclosed (range, site density, false-alarm rate) is exactly what the KB's testbed entries quantify, so the two lines of evidence are complementary rather than redundant. Treat the performance claims as vendor-stated; no independent measurement has been published.

## Why it matters / what's new (ZH)
知识库对 ISAC 的覆盖此前集中在标准与研究侧：3GPP ISAC 版本阶梯（2026-08-13_arxiv-isac-3gpp-5ga-to-6g-evolution，其中 Release-20 的单站基线明确以无人机探测为目标）、O-RAN ISAC 多无人机跟踪仿真测试床（2026-08-13_arxiv-multi-uav-tracking-oran-isac-testbed）以及 5G-ISAC 无人机感知研究（2026-08-08_arxiv-5g-isac-uav-oran-sensing）。NetSense 是第一个商业化轨道上的数据点：一家美国一线运营商、一家 AI-RAN 算力厂商与一家国防主承包商，为同一用例给出了明确的试点/商用时间表，且仅依赖现有 5G 基础设施加软件。对技术读者有两点值得关注。其一，该架构是“AI-RAN 作为感知底座”论点的具体实例——同一套 GPU/AI-RAN 栈（NVIDIA Aerial，参见 2026-07-19_nokia-commercial-ai-ran-platform-e3-dapps 与 2026-08-07_arxiv-ocudu-gpu-cuda-5g-phy）在 3GPP 原生感知落地之前就已被用于非通信业务变现。其二，未披露的内容（距离、站点密度、虚警率）恰恰是知识库测试床条目所量化的，因此两条证据线互补而非重复。性能声明均为厂商自述，尚无独立测量发布。
