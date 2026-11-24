---
id: 2026-11-24_wifinow-deutsche-telekom-speedport7-rdk-6ghz-ai-home-wifi
date_published: 2026-10-27
date_found: 2026-11-24
technology: wifi
type: industry-news
title_en: "Deutsche Telekom on open-source home gateways, 6 GHz for the mass market and AI-assisted Wi-Fi support (Wi-Fi NOW interview with Pedro Bandeira)"
title_zh: "德国电信谈开源家庭网关、面向大众市场的 6 GHz 与 AI 辅助 Wi-Fi 支持（Wi-Fi NOW 对 Pedro Bandeira 的访谈）"
url: "https://wifinowglobal.com/news-blog/a-conversation-with-deutsche-telekom-open-source-6-ghz-and-ai-are-reinventing-home-wi-fi-says-svp-pedro-bandeira/"
source_quality: full
topics: [Wi-Fi 7, 6 GHz, RDK, Speedport 7, home gateway, Wi-Fi 8, edge AI, Deutsche Telekom]
topic_primary: wifi7-deployment
topics_secondary: [spectrum-policy, ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
Wi-Fi NOW (Claus Hetting, 27 October 2026) reports a conversation at Wi-Fi World Congress Europe with Pedro Bandeira, Senior Vice President of Home Products at Deutsche Telekom (DT), on the operator's home-gateway strategy. The article's lead points are that DT is moving toward a more open, vendor-independent home Wi-Fi ecosystem, is reconsidering its approach to 6 GHz, and is preparing to bring AI into the connected home.

On the Speedport 7 Wi-Fi 7 gateway, the article says the gateway uses MediaTek silicon while its Wi-Fi mesh extenders are based on Qualcomm chipsets, orchestrated with Airties mesh-management software inside the RDK open-source ecosystem. Bandeira is quoted calling it "the most fragmented ecosystem from a hardware point of view that we have launched ever"; per the article it reached product maturity faster than DT's previous German gateway launches, with development completed in approximately half the originally estimated time. DT decided to adopt RDK in late 2019 after evaluating several open-source alternatives, and the article gives the decisive factor as RDK already being proven at scale with millions of deployed devices. The change meant sourcing hardware independently and writing its own software; the first 12 to 18 months were challenging, after which DT can use multiple OEMs with essentially identical products and customer experiences. DT has built its own RDK-based CPE management platform using the WebPA approach and open-source components originally contributed by Comcast, managing millions of devices across multiple countries.

On 6 GHz, the article says the original Speedport 7 does not support the band, reflecting a decision made when compatible client devices were uncommon and a strategy of tying 6 GHz to the fastest fibre (XGS-PON) offers. DT has launched its first 6 GHz-capable residential product in Europe in Slovakia, combining XGS-PON with 6 GHz Wi-Fi, and its strategy for Germany is under review, citing 5 GHz congestion and growing availability of 6 GHz client devices. Bandeira is quoted: "for the future, we will very, very likely have a mass market approach to 6 GHz in the sense that all of our products should support 6 GHz." On Wi-Fi 8, the article says consumers are increasingly satisfied with existing performance, so DT expects to keep introducing new generations at the premium end before extending them to the mass market. On AI, DT already collects data from gateways, RDK clients, Airties software and cybersecurity services and now uses AI to analyse client behaviour, recognise error patterns and resolve connectivity problems faster. Bandeira expects NPU-equipped hardware, which DT already has in set-top boxes, to appear in gateways, and describes using a TV or smartphone app conversational interface to solve Wi-Fi problems.

## Summary (ZH)
Wi-Fi NOW（Claus Hetting，2026 年 10 月 27 日）报道了在 Wi-Fi World Congress Europe 上与德国电信（DT）家庭产品高级副总裁 Pedro Bandeira 的对话，内容涉及该运营商的家庭网关策略。文章的要点是：DT 正走向更开放、不依赖单一厂商的家庭 Wi-Fi 生态，正重新考虑其 6 GHz 策略，并准备把 AI 引入联网家庭。

关于 Speedport 7 Wi-Fi 7 网关，文章称网关采用 MediaTek 芯片，其 Wi-Fi mesh 扩展器基于 Qualcomm 芯片组，由 Airties 的 mesh 管理软件在 RDK 开源生态中统一编排。Bandeira 被引述称这是“我们推出过的硬件层面最碎片化的生态”；据文章所述，它达到产品成熟度的速度快于 DT 此前的德国网关发布，开发在大约一半的原预估时间内完成。DT 于 2019 年末在评估多种开源方案后决定采用 RDK，文章给出的决定性因素是 RDK 已在数百万台设备上规模验证。这一转变意味着独立采购硬件、自行开发软件；最初 12 至 18 个月颇具挑战，此后 DT 可使用多家 OEM 并提供基本一致的产品与用户体验。DT 已基于 RDK 自建 CPE 管理平台，采用 WebPA 方式及最初由 Comcast 贡献的开源组件，管理多国数百万台设备。

关于 6 GHz，文章称最初的 Speedport 7 不支持该频段，原因是当时兼容的客户端设备少见，且策略是把 6 GHz 与最快的光纤（XGS-PON）套餐绑定。DT 已在斯洛伐克推出其在欧洲的首款支持 6 GHz 的家庭产品，将 XGS-PON 与 6 GHz Wi-Fi 结合，其德国策略正在重新评估，理由是 5 GHz 拥塞和 6 GHz 客户端设备日益增多。Bandeira 被引述称：“未来我们很可能采取面向大众市场的 6 GHz 策略，即我们所有产品都应支持 6 GHz。”关于 Wi-Fi 8，文章称消费者对现有性能越来越满意，因此 DT 预计继续先在高端产品中引入新一代，再逐步扩展到大众市场。关于 AI，DT 已从网关、RDK 客户端、Airties 软件和网络安全服务中收集数据，现在用 AI 分析客户端行为、识别错误模式并更快解决连接问题。Bandeira 预计 DT 机顶盒中已有的 NPU 硬件将出现在网关中，并描述了通过电视或手机应用的对话界面来解决 Wi-Fi 问题。

## Key technical points (EN)
- Speedport 7: MediaTek gateway silicon, Qualcomm-based mesh extenders, Airties mesh management, RDK software stack; development completed in approximately half the originally estimated time (article, attributed to Bandeira).
- RDK adoption decision dated to late 2019; DT's RDK-based CPE management platform uses the WebPA approach with open-source components originally contributed by Comcast.
- First 6 GHz-capable DT residential product in Europe is in Slovakia (XGS-PON plus 6 GHz Wi-Fi); the German 6 GHz approach is under review.
- DT expects new Wi-Fi generations to arrive first at the premium end of the portfolio, and the article notes longer gateway lifetimes make commercial sense given residential CPE cost.
- AI: analysis of client behaviour and error patterns across gateway, RDK client, Airties and cybersecurity data; NPUs already in DT set-top boxes; stated aim of distributing AI workloads across devices in the home.

## Key technical points (ZH)
- Speedport 7：MediaTek 网关芯片、基于 Qualcomm 的 mesh 扩展器、Airties mesh 管理、RDK 软件栈；开发在大约一半的原预估时间内完成（文章所述，归于 Bandeira）。
- RDK 采用决定的时间为 2019 年末；DT 基于 RDK 的 CPE 管理平台采用 WebPA 方式，并使用最初由 Comcast 贡献的开源组件。
- DT 自己在欧洲的首款支持 6 GHz 的家庭产品位于斯洛伐克（XGS-PON 加 6 GHz Wi-Fi）；德国的 6 GHz 方案正在重新评估。
- DT 预计新一代 Wi-Fi 先出现在产品组合的高端，文章指出，鉴于家庭 CPE 的成本，延长网关使用寿命在商业上合理。
- AI：基于网关、RDK 客户端、Airties 与网络安全数据，分析客户端行为与错误模式；DT 机顶盒已配备 NPU；目标是在家庭内各设备间分布 AI 工作负载。

## Why it matters / what's new (EN)
The KB already holds operator and vendor Wi-Fi 8 and 6 GHz items; this entry adds an operator's own account of a multi-vendor RDK gateway programme and of a 6 GHz strategy under review, with a likely shift toward the mass market, including DT's stated reason for a staggered Wi-Fi 8 introduction. The article is an interview write-up and gives no product dates for a 6 GHz Speedport or for Wi-Fi 8 gateways.

## Why it matters / what's new (ZH)
知识库已有运营商与厂商的 Wi-Fi 8 与 6 GHz 条目；本条目补充了运营商自述的多厂商 RDK 网关项目，以及正在重新评估、很可能转向大众市场的 6 GHz 策略，包括 DT 对分阶段引入 Wi-Fi 8 所给出的理由。该文为访谈整理，未给出支持 6 GHz 的 Speedport 或 Wi-Fi 8 网关的产品时间。

## Images
![Wi-Fi NOW article image for the Deutsche Telekom interview | Wi-Fi NOW 德国电信访谈文章配图](https://cdn.wifinowglobal.com/uploads/2026/10/600SquareDT-e1793112534572.png)
