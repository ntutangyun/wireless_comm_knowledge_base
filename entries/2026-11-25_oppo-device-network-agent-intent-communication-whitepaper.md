---
id: 2026-11-25_oppo-device-network-agent-intent-communication-whitepaper
date_published: 2026-11-05
date_found: 2026-11-25
technology: edge-ai
type: industry-news
title_en: "OPPO publishes a device-network agent intent-communication white paper at the China Mobile Global Partner Conference (commercial cellular network)"
title_zh: "OPPO 在中国移动全球合作伙伴大会发布端网智能体意图通信白皮书（运营商商用网络）"
url: "https://www.oppo.com/cn/newsroom/press/550/"
source_quality: full
topics: [intent-communication, device-network-agents, 3GPP-SA2, structured-intent, 6G]
topic_primary: edge-ai-networking
topics_secondary: [edge-orchestration]
novelty_score: 2
---

## Summary (EN)

On 5 November 2026, at the China Mobile Global Partner Conference in Guangzhou, OPPO released a white paper on device-network agent intent communication (端网智能体意图通信). OPPO's press release says the white paper defines intent communication as "a device-network communication mode whose interaction object is the service goal rather than the means of implementation", moving communication from "transmitting data" to "transmitting intent".

In the described flow, a user or application states an expectation in natural language or in structured form (for example stable service for a 4K live stream or a competitive game). The device converts it into a standardised, verifiable structured intent, and the network performs intent parsing, task planning and service invocation, with device-side and network-side agents cooperating to close the loop; the user does not touch signalling or resource scheduling. The release says intent communication does not replace the existing communication system but adds semantic orchestration on top of the 3GPP system, coexisting with existing signalling and deploying gradually.

Link: cellular (operator commercial network and 3GPP). The release states that OPPO's structured-intent proposal, submitted to 3GPP SA2 in August 2025, was jointly supported by 15 companies and entered the 3GPP 6G technical report TR 23.801-01 as a baseline scheme, and, in describing OPPO's earlier trials and tests, names China Mobile, Ericsson, China Telecom Research Institute, ZTE and Qualcomm as partners in those activities (not as co-authors of the white paper). The page lists no individual authors, and describes the white paper's architecture, interaction flow and future-challenges sections without detailing them.

## Summary (ZH)

2026 年 11 月 5 日，在广州举行的中国移动全球合作伙伴大会上，OPPO 发布了端网智能体意图通信白皮书。OPPO 新闻稿称白皮书将意图通信定义为"一种以业务目标而非实现手段为交互对象的端网通信模式"，推动通信从"传数据"走向"传意图"。

按所述流程，用户或应用以自然语言或结构化方式表达期望（例如为 4K 直播或游戏对战提供稳定保障）；终端将其转换为标准化、可验证的结构化意图，网络完成意图解析、任务规划和服务调用，端侧与网侧智能体协同完成闭环，用户无需接触信令和资源调度。新闻稿称，意图通信并非替代现有通信体系，而是在 3GPP 体系之上增加语义编排能力，与既有信令并存并渐进部署。

所经链路：蜂窝（运营商商用网络与 3GPP）。新闻稿称，OPPO 于 2025 年 8 月在 3GPP SA2 提出的结构化意图通信方案获得 15 家公司联合支持，并作为基线方案进入 3GPP 6G 技术报告 TR 23.801-01；新闻稿在回顾 OPPO 此前的试验与测试时提及中国移动、爱立信、中国电信研究院、中兴通讯和高通等合作方（并非白皮书合著方）。页面未列出个人作者，白皮书的架构与交互流程、未来挑战等章节仅被提及，未展开。

## Key technical points (EN)

- Example given in the release, on OPPO Find N6 over an operator commercial network: game-link latency falls from 423 ms to 43 ms, and live-stream uplink bandwidth rises from 0.82 Mbps to 3.93 Mbps. The release does not describe the test conditions in the page text.
- Beneficiaries named: developers can declare needs in service terms instead of adapting to private interfaces of multiple chip platforms; device and chip vendors carry a lighter protocol burden; operators can offer tiered experience commitments by scenario.
- Described flow: terminal generates structured intent, network parses, plans and invokes services, and device-network multi-agents close the loop.

## Key technical points (ZH)

- 新闻稿给出的示例（OPPO Find N6，运营商商用网络）：游戏链路时延由 423 ms 降至 43 ms，直播上行带宽由 0.82 Mbps 提升至 3.93 Mbps。页面正文未说明测试条件。
- 所列受益方：开发者可用业务语言声明需求，而不必适配多个芯片平台的私有接口；终端与芯片厂商的协议负担减轻；运营商可按场景提供分级体验承诺。
- 所述流程：终端生成结构化意图，网络解析、规划并调用服务，端网多智能体协同完成闭环。

## Why it matters / what's new (EN)

The item sits in the agents-over-wireless-networks bin: agents on the device and in the network exchange structured intents to configure cellular service, rather than shipping data. It is a vendor press release; the latency and bandwidth figures are OPPO's own example numbers and no independent measurement or white-paper text was available.

## Why it matters / what's new (ZH)

该条目属于无线网络上的智能体类：端侧与网侧智能体交换结构化意图来配置蜂窝业务，而不是传输数据。这是厂商新闻稿；时延与带宽数字是 OPPO 自己给出的示例，未能获得独立测量或白皮书正文。
