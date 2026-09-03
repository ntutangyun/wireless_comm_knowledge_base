---
id: 2026-09-03_arxiv-agentic-ue-comimo-6g-terminals
date_published: 2026-09-02
date_found: 2026-09-03
type: academic-paper
technology: cellular
title_en: "Agentic UE-CoMIMO for 6G Terminals"
title_zh: "面向6G终端的智能体化用户端协作MIMO（Agentic UE-CoMIMO）"
url: "https://arxiv.org/abs/2609.02290"
source_quality: full
topics: [UE-CoMIMO, collaborative-MIMO, multi-device-cooperation, agentic-control, semantic-tokens, wearables, live-streaming]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

Chao-Kai Wen and co-authors (arXiv v1, 2 Sep 2026; submitted to IEEE for possible publication) propose Agentic UE-CoMIMO, a control framework for end-user-centric collaborative MIMO (paper title: "Agentic UE-CoMIMO for 6G Terminals: From Virtual Antenna Augmentation to AI-Native Virtualization"). The motivating asymmetry: base stations can deploy massive antenna arrays, but individual user devices are squeezed by form factor, thermal budget and power — smartphones support only a few antennas in sub-6 GHz bands and wearables often just one or two. UE-CoMIMO lets nearby devices form a virtual multi-antenna terminal to overcome this, and the paper extends the cooperation beyond the physical layer to communication, sensing, computing and task-relevant information exchange, arguing this requires a control layer that interprets user intent, selects cooperation mechanisms, and replans as conditions change.

The architecture has three tiers. Device micro-agents (on wearables such as smartwatches or AI glasses) report locally observable state — link quality, battery, temperature — tag traffic by type and deadline, and send fallback requests when conditions turn critical. A smartphone or CPE/Wi-Fi-AP hub agent acts as real-time coordinator, deciding device participation, roles, relay modes, traffic splitting/duplication, compute placement and semantic-token budget allocation (the smartphone hub is used in mobile scenarios; CPE/AP hubs in indoor settings for their stable power and favorable positioning). An edge/network agent at edge servers or RAN controllers supplies radio/sensing maps and large-model inference and issues a "policy envelope" — parameter ranges and security constraints the hub can act within autonomously, avoiding per-decision network approval while bounding local authority.

Two system-level scenario studies compare the agentic controller against fixed/reactive cellular baselines and a capability-matched myopic controller (same observations and action space, no prediction/planning). In creator-centric live streaming (AI glasses streaming first-person video over 5 GHz Wi-Fi to a smartphone hub while walking outdoor-to-indoor), cellular-only baselines stall at the O2I transition or cannot recover in RF dead zones; the myopic controller matches instantaneous quality but needs an average 18.6 Mbps encoded bitrate versus 8.8 Mbps for the agentic policy, and after 15 minutes the glasses retain 58% battery under the agentic policy versus 32% under the myopic one — over longer runs the myopic controller depletes the battery around minute 28 while the agentic policy sustains target quality to minute 36, a reported 22-47% more useful quality-seconds. The agentic policy achieves this by predicting the O2I transition, completing make-before-break handovers before links collapse, delegating to the CPE when available, and proactively cutting bitrate from thermal trajectory forecasts. In wearable-collaborative blind-spot sensing (a scooter's smartphone hub running bistatic radar via a smartwatch as primary receiver and scooter-mounted CPE as auxiliary, under body blockage and a transient CPE failure), the agentic policy maintains the warning signal for 98.7% of the interval the target is in the warning zone, versus 82.9% (reactive), 65.8% (static delegate-only) and 56.6% (no cooperation) — it detects CPE failure via a micro-agent token and immediately falls back to smartwatch sensing, while the reactive controller's warning gap exceeds one second from timeout-and-wakeup delay and the static baseline loses warning entirely until the target passes.

The paper closes with standardization needs it says the framework surfaces: dividing control authority between network-defined policy envelopes and fast local hub decisions; standardizing semantic-token headers (task identity, uncertainty, freshness, trust, resolution tier) while leaving payload representation vendor-specific for multi-vendor interoperability; trust/privacy safeguards (relay authentication, secure token exchange, explicit consent, malicious-device detection) given that cooperation spans personal devices, CPEs and public infrastructure; and validation beyond simulation — over-the-air calibrated models, measurement-based multi-device experiments, and conservative fallback behavior to avoid topology oscillation under partial observability.

## Summary (ZH)

Chao-Kai Wen 及合著者（arXiv v1，2026年9月2日；已投稿IEEE候选发表）提出智能体化UE-CoMIMO（Agentic UE-CoMIMO），一种面向终端用户中心协作MIMO的控制框架。其出发点是一种不对称性：基站可部署大规模天线阵列，而单个用户设备却受限于外形尺寸、热预算与功耗——智能手机在Sub-6 GHz频段通常只支持少数几根天线，可穿戴设备往往只有一到两根。UE-CoMIMO让邻近设备组成一个虚拟多天线终端来克服这一限制，本文进一步将协作范围从物理层扩展到通信、感知、计算与任务相关信息交换，并主张这需要一个能够解读用户意图、选择协作机制、并随条件变化重新规划的控制层。

该架构分为三层。设备微智能体（部署在智能手表、AI眼镜等可穿戴设备上）上报本地可观测状态——链路质量、电量、温度——按类型和截止时间为流量打标签，并在条件恶化到临界时发送回退请求。智能手机或CPE/Wi-Fi接入点作为中枢智能体，实时协调设备参与、角色分配、中继模式、流量分流/复制、计算部署位置以及语义令牌预算分配（移动场景下由智能手机充当中枢；室内场景则因电源稳定、位置有利而由CPE/AP充当中枢）。位于边缘服务器或RAN控制器的边缘/网络智能体提供无线电/感知地图与大模型推理，并下发一份"策略包络"——中枢可在其中自主决策的参数范围与安全约束，从而避免逐次决策都需网络审批，同时限定本地权限边界。

两项系统级场景研究将该智能体化控制器与固定/反应式蜂窝基线、以及能力匹配的短视（myopic）控制器（观测与动作空间相同，但无预测/规划能力）进行对比。在创作者中心的直播场景中（AI眼镜佩戴者从室外走入室内，通过5 GHz Wi-Fi向智能手机中枢直播第一人称视频），纯蜂窝基线在室外到室内（O2I）转换时卡顿，或在射频盲区无法恢复；短视控制器可达到相近的瞬时画质，但平均编码码率需18.6 Mbps，而智能体化策略仅需8.8 Mbps；15分钟后，智能体化策略下眼镜电量剩余58%，短视策略下仅剩32%——在更长时间运行中，短视控制器约在第28分钟耗尽电池，而智能体化策略能将目标画质维持至第36分钟，据报告可获得22%-47%更多"有效画质-秒"。智能体化策略实现这一点的方式是：预测O2I转换、在链路崩溃前完成先建后断切换、在CPE可用时委托给CPE，并根据热轨迹预测主动降低码率。在可穿戴协作盲区感知场景中（滑板车上的智能手机中枢，利用智能手表作为主接收机、车载CPE作为辅助接收机运行双基地雷达，同时经历身体遮挡与短暂CPE故障），智能体化策略在目标处于预警区间的时段内维持预警信号98.7%的时长，而反应式控制器为82.9%、静态（仅委托）基线为65.8%、无协作基线为56.6%——它通过微智能体令牌检测到CPE故障并立即回退至智能手表感知，而反应式控制器因超时与唤醒延迟造成的预警空档超过一秒，静态基线则在目标经过之前完全丢失预警。

论文最后指出该框架所暴露的标准化需求：在网络定义的策略包络与中枢的快速本地决策之间划分控制权限；标准化语义令牌的头部字段（任务身份、不确定性、新鲜度、信任度、分辨率层级），同时将负载表示留给厂商自定义以支持多厂商互操作；鉴于协作横跨个人设备、CPE与公共基础设施，需要信任/隐私保障（中继认证、令牌安全交换、明确用户同意、恶意设备检测）；以及超越仿真的验证——空口标定模型、基于实测的多设备实验，以及在部分可观测条件下避免拓扑震荡的保守回退行为。

## Key technical points (EN)
- Motivation: terminal-side antenna-count asymmetry vs base stations (form factor/thermal/power); extends cooperation beyond PHY to comms/sensing/compute/semantic-token exchange.
- Architecture: device micro-agents (wearables) -> smartphone/CPE hub agent (real-time coordinator) -> edge/network agent (policy envelope, radio/sensing maps, large-model inference).
- Control model: fast local hub decisions bounded by network-issued policy envelopes, avoiding per-decision network approval.
- Scenario 1 (live streaming, AI glasses O2I transition): agentic policy 8.8 Mbps avg bitrate vs myopic 18.6 Mbps at matched quality; battery 58% vs 32% at 15 min; 22-47% more useful quality-seconds; sustains target quality to 36 min vs 28 min.
- Scenario 2 (blind-spot sensing, smartwatch+CPE bistatic radar): agentic policy maintains warning 98.7% of target-in-zone interval vs 82.9% (reactive) / 65.8% (static) / 56.6% (no cooperation); recovers immediately from CPE failure via micro-agent token.
- Standardization gaps named: policy-envelope control-authority split, semantic-token header standardization (payload left vendor-specific), trust/privacy safeguards, over-the-air/measurement-based validation.

## Key technical points (ZH)
- 动机：终端侧天线数相对基站的不对称性（外形/散热/功耗受限）；将协作从物理层扩展到通信/感知/计算/语义令牌交换。
- 架构：设备微智能体（可穿戴）-> 智能手机/CPE中枢智能体（实时协调）-> 边缘/网络智能体（策略包络、无线电/感知地图、大模型推理）。
- 控制模型：快速的本地中枢决策受网络下发的策略包络约束，避免逐次决策审批。
- 场景一（直播，AI眼镜O2I转换）：智能体化策略平均码率8.8 Mbps，短视策略18.6 Mbps（画质相近）；15分钟电量58% vs 32%；有效画质-秒提升22%-47%；目标画质维持至36分钟 vs 28分钟。
- 场景二（盲区感知，智能手表+CPE双基地雷达）：智能体化策略在目标处于预警区间内维持预警98.7%的时长，反应式为82.9%、静态为65.8%、无协作为56.6%；通过微智能体令牌可在CPE故障后立即恢复。
- 提出的标准化缺口：策略包络下的控制权限划分、语义令牌头部字段标准化（负载留给厂商自定义）、信任/隐私保障、空口/实测验证。

## Why it matters / what's new (EN)
The KB has covered collaborative-sensing and cooperative-radio topics before, but has no prior entry on multi-device *terminal-side* MIMO cooperation controlled by a hierarchical agentic layer spanning wearables, a phone/CPE hub and the network edge. This is the KB's first UE-CoMIMO entry, and its contribution is a control-layer proposal validated by two concrete, quantified scenario studies (creator streaming, blind-spot sensing) rather than a PHY-layer cooperative-MIMO scheme alone — it treats "which devices cooperate, how, and when to fall back" as the object of agentic control, complementing the KB's existing AI-RAN (network-side) agent thread with a terminal-side counterpart.

## Why it matters / what's new (ZH)
知识库此前已涉及协作感知与协作无线电相关主题，但尚无关于由跨越可穿戴设备、手机/CPE中枢与网络边缘的分层智能体控制层所驱动的多设备*终端侧*MIMO协作的条目。这是知识库首个UE-CoMIMO条目，其贡献在于提出了一个控制层方案，并通过两项具体、量化的场景研究（创作者直播、盲区感知）加以验证，而非仅仅是一个物理层协作MIMO方案——它将"哪些设备协作、如何协作、何时回退"本身作为智能体控制的对象，为知识库既有的（网络侧）AI-RAN智能体主线补上了终端侧的对应条目。

## Images
