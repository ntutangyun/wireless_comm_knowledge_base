---
id: 2026-09-11_eutelsat-skynopy-global-akar-ground-network
date_published: 2026-09-10
date_found: 2026-09-11
type: satellite-news
technology: satellite
title_en: "Eutelsat and Skynopy Partner on 'Global AKAR' Software-Defined Ground Network, Targeting Sub-3-Minute LEO Downlink Latency"
title_zh: "Eutelsat 与 Skynopy 联合推出软件定义地面网络 'Global AKAR'，目标将低轨卫星下行时延压缩至 3 分钟以内"
url: "https://satnews.com/2026/09/10/eutelsat-and-skynopy-partner-to-launch-global-akar-software-defined-ground-network/"
source_quality: full
topics: [ground-station-as-a-service, software-defined-modem, teleport, S-band, X-band, Ka-band, cloud-orchestration]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 2
---

## Summary (EN)
Eutelsat Group and Skynopy signed a strategic partnership on 2026-09-09 at the International Space Summit in Paris to build "Global AKAR," a software-defined global ground network offering ground-station-as-a-service to commercial and defence LEO satellite operators. The system connects Eutelsat's international teleport footprint to Skynopy's software-defined modem technology and cloud orchestration framework, giving operators a single software interface to access downlinks across S, X, and Ka-band frequencies rather than building proprietary antenna networks or managing disparate ground contracts. The stated performance target is to cut downlink latency from the sector-typical roughly one hour down to under three minutes from satellite pass to cloud delivery, and the partners cite data-transfer speeds of up to 10 Gbps via software-defined RF processing, against standard ground-link throughputs of 1-2 Gbps. Deployment calls for more than 100 operational software-defined antennas across Eutelsat's designated teleport sites globally by the end of 2029, with initial software integration and site retrofits starting across European and international teleports through late 2026 to establish early-capacity LEO data downlinks ahead of full network scaling.

## Summary (ZH)
2026 年 9 月 9 日，在巴黎举行的国际太空峰会上，Eutelsat Group 与 Skynopy 签署战略合作协议，共同建设"Global AKAR"——一个面向商业及国防低轨卫星运营商、提供"地面站即服务"能力的软件定义全球地面网络。该系统将 Eutelsat 遍布全球的国际信关站（teleport）网络，与 Skynopy 的软件定义调制解调器技术及云编排框架相连接，使运营商能够通过统一的软件接口访问 S、X、Ka 三个频段的下行链路，而无需自建专有天线网络或管理分散的地面合同。其宣称的性能目标是将下行时延从行业典型的约一小时压缩至三分钟以内（自卫星过境至云端交付）；双方还称通过软件定义射频处理可实现最高 10 Gbps 的数据传输速率，而常规地面链路吞吐量为 1–2 Gbps。部署计划到 2029 年底前，在 Eutelsat 指定的全球信关站点部署超过 100 套可运行的软件定义天线；初期软件集成与站点改造将于 2026 年底前在欧洲及国际信关站陆续展开，以在全面扩容前建立早期低轨数据下行能力。

## Key technical points (EN)
- **Architecture:** couples Eutelsat's existing international teleport footprint with Skynopy's software-defined modem + cloud orchestration stack.
- **Interface:** single software interface across S-band, X-band, and Ka-band downlinks — so an operator need not build a proprietary antenna network or manage disparate ground contracts.
- **Performance target:** downlink latency reduced from the sector-typical ~1 hour to under 3 minutes from satellite pass to cloud delivery.
- **Throughput:** up to 10 Gbps via software-defined RF processing, versus standard ground-link throughputs of 1-2 Gbps.
- **Scale target:** 100+ operational software-defined antennas across designated Eutelsat teleport sites globally by end of 2029.
- **Rollout:** initial software integration and site retrofits across European/international teleports through late 2026, establishing early-capacity LEO downlinks ahead of full scaling.
- **Customer base:** LEO operators, Earth-observation constellations, orbital data centres and in-orbit servicing spacecraft, plus government space agencies and commercial defence providers.

## Key technical points (ZH)
- **架构：** 将 Eutelsat 现有的国际信关站网络，与 Skynopy 的软件定义调制解调器及云编排技术栈相结合。
- **接口：** 统一软件接口覆盖 S、X、Ka 三个频段下行链路——使运营商无需自建专有天线网络或管理分散的地面合同。
- **性能目标：** 下行时延从行业典型的约 1 小时压缩至 3 分钟以内（自卫星过境至云端交付）。
- **吞吐量：** 通过软件定义射频处理实现最高 10 Gbps，而常规地面链路吞吐量为 1–2 Gbps。
- **规模目标：** 到 2029 年底前，在 Eutelsat 指定的全球信关站点部署超过 100 套可运行的软件定义天线。
- **推进节奏：** 2026 年底前先在欧洲及国际信关站启动初期软件集成与站点改造，建立早期低轨下行能力，之后再全面扩容。
- **服务对象：** 低轨运营商、对地观测星座、在轨数据中心与在轨服务航天器，以及政府航天机构与商业国防供应商。

## Why it matters / what's new (EN)
This is the KB's first commercial/operator-side ground-station-as-a-service entry — earlier GSaaS coverage (2026-08-25_arxiv-star-gs-truthful-gsaas-scheduling) is an academic scheduling paper. It is also distinct from the physical-terminal procurement thread already tracked here (2026-09-08 Kymeta Osprey u8, 2026-09-09 AvL Technologies WGS terminals). Where those entries cover user/field terminal hardware, this entry covers the operator-facing ground-segment software layer that a constellation uses to get data down from orbit and onto the ground network — a different point in the space-to-ground chain. The headline metric (downlink latency cut from ~1 hour to under 3 minutes) is a concrete, falsifiable claim worth tracking as Global AKAR's 2026-2029 rollout proceeds, and — this KB's own comparison, not the source's — the multi-band (S/X/Ka) software abstraction sits conceptually near the neutral-host, multi-operator infrastructure-sharing model this KB has tracked via 2026-08-15_arxiv-satellite-infrastructure-sharing-cox-boolean and the Equatys "Space TowerCo" wholesale model (2026-08-14).

## Why it matters / what's new (ZH)
本条目是知识库首条厂商／运营商侧的「地面站即服务」条目——此前的 GSaaS 相关条目（2026-08-25_arxiv-star-gs-truthful-gsaas-scheduling）为学术调度论文。它同时区别于此前已跟踪的物理终端采购脉络（2026-09-08 Kymeta Osprey u8、2026-09-09 AvL Technologies WGS 终端）。那些条目涉及的是用户/野战终端硬件，而本条目涉及的是星座运营商用于将数据从轨道下传至地面网络所依赖的地面段软件层——处于天地链路中的不同环节。其核心指标（下行时延从约 1 小时压缩至 3 分钟以内）是一项具体且可验证的宣称，值得随着 Global AKAR 在 2026-2029 年间的推进持续跟踪；此外（以下为本知识库的自行比较，非来源所述），其多频段（S/X/Ka）软件抽象层的理念，也与知识库通过 2026-08-15_arxiv-satellite-infrastructure-sharing-cox-boolean 及 Equatys "Space TowerCo" 批发模式（2026-08-14）所跟踪的中立主机、多运营商基础设施共享模式存在概念上的关联。

## Images

None.
