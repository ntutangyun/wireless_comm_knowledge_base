---
id: 2026-11-10_ieee-mentor-win-sg-ai-services-traffic-states-multi-flow-dcn-2054
date_published: 2026-11-08
date_found: 2026-11-10
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WIN SG: AI services traffic characteristics in Wi-Fi networks - traffic-state evolution and multi-flow service dependencies (DCN 11-26-2054r1, Huawei)"
title_zh: "IEEE 802.11 WIN SG：Wi-Fi 网络中 AI 业务的流量特征——流量状态演进与多流业务依赖（DCN 11-26-2054r1，华为）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2054"
source_quality: full
topics: [WIN, 802.11bx, AI traffic, traffic state, SCS, MAC]
topic_primary: wifi-for-ai
topics_secondary: [wifi8-uhr, ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

DCN 11-26-2054r1, "AI Services Traffic Characteristics in Wi-Fi Networks", is an 11-slide WIN SG deck by Ming Zhao (Huawei) dated 2026-11-08 (revision 1 uploaded 8 November 2026, 23:04 ET). The deck states that the WIN SG was established to design next-generation PHY and MAC layers that efficiently support AI traffic and services, and that understanding how AI-service traffic differs from conventional workloads is needed to identify MAC/PHY enhancements.

It develops two examples. The first is a generative-AI coding service: a laptop or other client sends prompts, code context and files over Wi-Fi to a local AI compute platform (an AP-provided local compute resource, with cloud also drawn), which performs inference and returns generated code or suggestions. The deck describes traffic moving through service states (Idle, UL-dominant context upload, local processing, interactive token/audio/intermediate-response exchange, DL-dominant response delivery) and observes that traffic direction and demand change with the state and that state transitions may show temporal predictability. The second is a multi-flow service such as smart glasses or embodied AI, where camera, sensor, user-query, response, map/localization, telemetry and motion-control flows coexist, may carry different QoS requirements, but share a service context and dependencies; multiple SCS flows may coexist within one AI service.

The stated considerations are traffic-state awareness (anticipating upcoming demand) and multi-flow / service awareness (knowing which flows are related), with the claimed benefits being proactive scheduling and resource reservation, joint scheduling across related flows, more predictable latency and better channel utilization. The closing slide suggests the group prioritize AI for Wi-Fi (AI-assisted PHY/MAC decisions in the BSS/OBSS), offering two alternative amendment-scope sentences: a <WIN> capability for adapting to AI traffic and services, or enhancements across infrastructure, Mobile AP and peer-to-peer topologies to adapt to emerging application traffic such as AI. The deck contains no measurements; it is a position and framing contribution.

## Summary (ZH)

DCN 11-26-2054r1《AI Services Traffic Characteristics in Wi-Fi Networks》是 Ming Zhao（华为）的 11 页 WIN SG 文稿，日期 2026-11-08（r1 于 2026 年 11 月 8 日美东 23:04 上传）。文稿指出，WIN SG 的成立是为设计能高效支持 AI 流量与业务的下一代 PHY 与 MAC，而理解 AI 业务流量与传统负载的差异，是确定 MAC/PHY 增强项的前提。

文稿展开两个例子。其一是生成式 AI 编码服务：笔记本或其他终端经 Wi-Fi 将提示词、代码上下文和文件发送到本地 AI 算力平台（由 AP 提供的本地计算资源，图中同时画出云端），平台完成推理后返回生成的代码或建议。文稿将流量划分为多个业务状态（空闲、上行为主的上下文上传、本地处理、token/音频/中间响应的交互交换、下行为主的结果下发），并观察到流量方向和需求随状态变化、状态转移可能具有一定的时间可预测性。其二是智能眼镜或具身智能等多流业务：摄像头、传感器、用户查询、响应、地图/定位、遥测与运动控制等流并存，QoS 要求可能不同，但共享业务上下文和依赖关系；同一 AI 业务内可能同时存在多条 SCS 流。

文稿提出的考虑点为流量状态感知（预判即将到来的需求）与多流/业务感知（识别哪些流相关），所述收益包括主动调度与资源预留、相关流联合调度、时延更可预测以及信道利用率提升。最后一页建议本组优先考虑 AI for Wi-Fi（BSS/OBSS 内 AI 辅助的 PHY/MAC 决策），另给出两种备选修正案范围表述：适应 AI 流量/业务的 <WIN> 能力；跨基础设施、Mobile AP 与点对点拓扑、使 WLAN 适应 AI 等新兴应用流量的增强。文稿不含实测数据，属于立场与框架类贡献。

## Key technical points (EN)

- WIN SG deck by Ming Zhao (Huawei), DCN 11-26-2054r1, dated 2026-11-08; references 11-26/1440r4, 1012, 1626r0, 1634r0 and 1698r0.
- Example 1: generative-AI coding service over Wi-Fi to local edge compute; stages Request / Context Upload / Initial Processing / Interactive Exchange / Refined Processing / Clarification / Code Generation / Response Delivery.
- Stated observation: traffic direction and demand change with AI service state; the current state may indicate the traffic expected next.
- Example 2: smart glasses / embodied AI with concurrent camera, sensor, query, response, map/localization, telemetry and motion-control flows; several SCS flows may coexist within one service.
- Stated implication: per-flow treatment may not capture inter-flow relationships; MAC design may move from per-flow to traffic-state and AI-service-level awareness.
- Suggested group direction: prioritize AI for Wi-Fi (AI-assisted PHY/MAC decisions in the BSS/OBSS), with two alternative amendment-scope sentences (a <WIN> capability for adapting to AI traffic/services; enhancements across infrastructure, Mobile AP and peer-to-peer topologies to adapt to emerging application traffic such as AI).
- No simulation or measurement results are presented.

## Key technical points (ZH)

- Huawei Ming Zhao 的 WIN SG 文稿，DCN 11-26-2054r1，日期 2026-11-08；引用 11-26/1440r4、1012、1626r0、1634r0、1698r0。
- 示例一：经 Wi-Fi 访问本地边缘算力的生成式 AI 编码服务；阶段包括请求、上下文上传、初步处理、交互交换、精细处理、澄清、代码生成与结果下发。
- 文稿的观察：流量方向与需求随 AI 业务状态变化，当前状态可提示接下来预期的流量。
- 示例二：智能眼镜/具身智能，摄像头、传感器、查询、响应、地图/定位、遥测与运动控制等流并发；同一业务内可有多条 SCS 流。
- 文稿的含义陈述：逐流处理可能无法体现流间关系；MAC 设计可从逐流感知转向流量状态与 AI 业务级感知。
- 对本组的建议方向：优先考虑 AI for Wi-Fi（BSS/OBSS 内 AI 辅助的 PHY/MAC 决策），另给出两种备选修正案范围表述（适应 AI 流量/业务的 <WIN> 能力；跨基础设施、Mobile AP 与点对点拓扑、使 WLAN 适应 AI 等新兴应用流量的增强）。
- 文稿未给出仿真或实测结果。

## Why it matters / what's new (EN)

The deck is a framing contribution inside the WIN SG's scope discussion: it names two concrete AI-service traffic patterns (state-dependent UL/DL alternation and multi-flow services with shared context) and attaches proposed amendment-scope wording to them. It sits alongside the earlier WIN SG entries on requirements and features in this KB (for example 2026-09-16_ieee-mentor-win-sg-wifi9-par-and-features-digest) and the Wi-Fi-for-AI topic's existing AI-traffic coverage. Because it carries no data, its claims about predictability and benefit are the contributor's stated expectations.

## Why it matters / what's new (ZH)

该文稿是 WIN SG 范围讨论中的框架性贡献：给出两种具体的 AI 业务流量模式（随状态变化的上下行交替，以及共享上下文的多流业务），并将拟议的修正案范围措辞与之关联。它与本知识库中此前关于 WIN SG 需求与特性的条目（如 2026-09-16_ieee-mentor-win-sg-wifi9-par-and-features-digest）以及 Wi-Fi-for-AI 主题下已有的 AI 流量内容相互补充。由于文稿不含数据，其关于可预测性与收益的论述属于贡献者所述的预期。

## Images

None.
