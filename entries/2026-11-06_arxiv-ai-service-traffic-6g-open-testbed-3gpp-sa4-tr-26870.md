---
id: 2026-11-06_arxiv-ai-service-traffic-6g-open-testbed-3gpp-sa4-tr-26870
date_published: 2026-11-04
date_found: 2026-11-06
type: academic-paper
technology: cellular
title_en: "Characterizing AI Service Traffic for 6G: An Open Testbed and Initial Results from 3GPP SA4"
title_zh: "面向 6G 的 AI 业务流量刻画：开放测试床与 3GPP SA4 的初步结果"
url: "https://arxiv.org/abs/2611.07250"
source_quality: full
topics: [AI-traffic, 3GPP-SA4, TR-26.870, TR-22.870, agent-traffic, MCP, A2A, netem, uplink-downlink-ratio, 6G]
topic_primary: 6g-vision
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Imed Bouazizi (Qualcomm Technologies) describes the open testbed behind the measurement study that 3GPP SA4 documents in draft Technical Report 26.870, and analyses the results recorded in version 0.6.2 of the report and its companion workbook. The study measures traffic from AI services under controlled network conditions to inform 6G design, with the results organised around five RAN2 question families (the first being uplink-heavy traffic).

The testbed is split into three components: a network emulation and packet-analysis package built on Linux traffic control (HTB rate limiting, netem delay, jitter, loss and reordering, an IFB device for ingress shaping, tcpdump captures), an orchestrator that runs a scenario-by-profile test matrix, and a dataset component that turns captures and session records into labelled flows. The catalogue has more than 60 scenario definitions covering hosted model providers, a self-hosted vLLM server, chat, MCP tool-using agents, browser and computer use, image generation, multimodal and video understanding, real-time voice, agent-to-agent (A2A) tasks and a personal-assistant agent runtime.

## Summary (ZH)

Imed Bouazizi（高通）介绍了 3GPP SA4 在技术报告草案 TR 26.870 中记录的测量研究所用的开放测试床，并分析了报告 0.6.2 版及其配套工作簿中记录的结果。该研究在受控网络条件下测量 AI 业务的流量，为 6G 设计提供依据，结果围绕五组 RAN2 问题展开（第一组是上行为主的流量）。

测试床分为三个部分：基于 Linux 流量控制（HTB 限速、netem 时延/抖动/丢包/乱序、用于入口整形的 IFB 设备、tcpdump 抓包）的网络仿真与包分析软件包；按“场景×网络配置”矩阵运行实验的编排器；以及把抓包和会话记录转成带标签流的数据集组件。场景目录包含 60 多个定义，涵盖托管模型服务商、自托管 vLLM 服务器、聊天、使用 MCP 工具的智能体、浏览器与电脑操作、图像生成、多模态与视频理解、实时语音、智能体间（A2A）任务以及个人助理智能体运行时。

## Key technical points (EN)

- Network profiles: a catalogue of profiles combines deployment reference points and stress cases, including a 6G ITU HRLLC point (1 ms delay, 0.2 ms jitter, 300 Mbit/s), 5G urban (20 ms, 100 Mbit/s), Wi-Fi good (30 ms, 50 Mbit/s), cell edge (120 ms, Gilbert-Elliott loss 1%, 5 Mbit/s), LEO satellite (22 ms), GEO satellite (340 ms) and congested (200 ms, 3% loss, 1 Mbit/s), plus 5QI anchors derived from the packet delay budget. The paper notes the 6G profile uses an ITU-R M.2160 reference point and does not implement or validate an IMT-2030 radio system, and notes that an emulator needs to state whether it represents an ordered service such as PDCP in-sequence delivery.
- Uplink-to-downlink ratios span more than six orders of magnitude across application types (image generation about 7.5e-5; non-real-time video understanding about 300 in the main local campaign and about 915 in another), while chat and computer control are closer to balanced. A personal-assistant agent shows 0.007 at its local control interface and 0.50 on its wide-area egress, so the measurement layer changes the answer.
- Deterministic agent signalling follows the configured round-trip delay. In a tokenised-video experiment with 125 questions per profile, the number of correct answers changes by at most three through 10% independent uplink loss; larger losses reduce accuracy, but the available repetitions do not establish a tolerance threshold.
- Emulator caveats the author identifies: per-packet jitter introduces reordering, correlated random-loss settings suppress rare loss events, and a Gilbert-Elliott parameter mapping changes the stationary loss rate. The paper concludes that results should be reported by scenario, measurement layer and versioned network configuration, and that loopback and wide-area paths must be kept apart.
- Data handling: provider and model names can be replaced by neutral labels in exported results, and the paper cautions that sharing captures needs a separate payload and metadata review because encrypted AI traffic can still expose structure through packet size, direction and timing.

## Key technical points (ZH)

- 网络配置：配置目录结合部署参考点与压力场景，包括 6G ITU HRLLC 点（时延 1 ms、抖动 0.2 ms、300 Mbit/s）、5G 城区（20 ms、100 Mbit/s）、Wi-Fi 良好（30 ms、50 Mbit/s）、小区边缘（120 ms、Gilbert-Elliott 丢包 1%、5 Mbit/s）、LEO 卫星（22 ms）、GEO 卫星（340 ms）和拥塞（200 ms、丢包 3%、1 Mbit/s），以及由分组时延预算推导的 5QI 锚点。论文指出 6G 配置采用 ITU-R M.2160 参考点，并未实现或验证 IMT-2030 无线系统，并指出仿真器需说明是否代表如 PDCP 按序递交那样的有序服务。
- 上行/下行比在不同应用之间跨越六个以上数量级（图像生成约 7.5e-5；非实时视频理解在主本地测试中约 300，在另一测试中约 915），而聊天和电脑操作则更接近平衡。个人助理智能体在其本地控制接口为 0.007，在广域出口为 0.50，因此测量层不同，结论也不同。
- 确定性的智能体信令遵循所配置的往返时延。在每个配置 125 个问题的分词视频实验中，10% 独立上行丢包下正确答案数变化至多三个；更大的丢包会降低准确率，但现有重复次数不足以确定容忍门限。
- 作者指出的仿真器注意事项：逐包抖动会引入乱序，相关随机丢包设置会抑制罕见的丢包事件，Gilbert-Elliott 参数映射会改变稳态丢包率。论文结论是结果应按场景、测量层和带版本的网络配置报告，且必须区分回环路径与广域路径。
- 数据处理：导出结果中可把服务商和模型名换成中性标签；论文提醒共享抓包需要另行审查载荷和元数据，因为加密的 AI 流量仍可能通过包长、方向和时间暴露结构。

## Why it matters / what's new (EN)

This is a standards-process artefact: it exposes how the 3GPP SA4 AI-traffic measurements were produced and where they can mislead, which matters to anyone reading numbers from TR 26.870 as inputs to 6G RAN design. The author works at a company that participates in the study, and the TR is a draft (version 0.6.2), so the figures are provisional. The paper is deliberately cautious: the emulator limits and the provisional, pooled campaign data mean it supports characterisation by scenario rather than universal AI-traffic constants, and it makes no claim about a deployed network.

## Why it matters / what's new (ZH)

这是一份标准化流程中的成果：它说明了 3GPP SA4 的 AI 流量测量是如何得到的、哪些地方可能产生误导，对把 TR 26.870 的数字当作 6G RAN 设计输入的读者很重要。作者所在公司参与了该研究，且 TR 仍是草案（0.6.2 版），因此数字是暂定的。论文刻意保持谨慎：仿真器的局限与暂定、合并的多批测试数据意味着它支持按场景刻画，而非得出普适的 AI 流量常数，也不对实际部署网络作出结论。

## Images

None.
