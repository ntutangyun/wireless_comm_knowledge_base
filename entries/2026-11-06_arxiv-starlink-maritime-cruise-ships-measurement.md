---
id: 2026-11-06_arxiv-starlink-maritime-cruise-ships-measurement
date_published: 2026-11-04
date_found: 2026-11-06
technology: satellite
type: academic-paper
title_en: "A First Look at Starlink Maritime on Cruise Ships"
title_zh: "Starlink Maritime 邮轮场景初探：实测研究"
url: "https://arxiv.org/abs/2611.07191"
source_quality: full
topics: [Starlink, maritime, cruise-ship, measurement, PoP-handover, outages, onboard-network]
topic_primary: starlink
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Zhao, Malekinasab and Pan (University of Victoria, arXiv cs.NI, submitted 4 Nov 2026) measure Starlink Maritime service on two cruise ships. Utopia of the Seas (Royal Caribbean, 5,668 passengers) was measured for 83.5 hours in December 2025 between Port Canaveral and the Bahamas; Silver Muse (Silversea, 632 passengers) for 131.7 hours in July 2026 in the Adriatic, with port stays at Bari, Dubrovnik, Kotor, Hvar and Zadar. The method has three parts: user-terminal telemetry over the local gRPC interface sampled every 0.5 s, inside-out measurements from a passenger device (public-IP lookups, ICMP pings and, on Silver Muse, iPerf3), and outside-in ICMP probes from cloud servers near the serving PoPs. Both ships use a Peplink multi-WAN router spreading sessions across several flat high-performance terminals on business-plus plans.

Reported results: on Silver Muse the inside-out median latency was about 27 ms (95th percentile 41-44 ms) against an outside-in median of about 19-20 ms, so the onboard network adds roughly 8-9 ms at the median. Single-device iPerf3 downlink medians were 7.84 Mbps with BBR and 6.83 Mbps with CUBIC, with uplink around 4.5 Mbps. Aggregate terminal throughput had medians of 66.6/24.2 Mbps (down/up) on Utopia and 27.6/16.0 Mbps on Silver Muse, with busiest 60-second averages of 162.0/71.2 and 139.2/52.4 Mbps. Silver Muse logged 364 outages in 131.7 hours (84 of them obstruction outages, mostly while berthed in Dubrovnik) and Utopia 44 in 83.5 hours; most lasted about a second or less.

On routing and addressing: Utopia was served only by the Miami PoP, while Silver Muse was served by Sofia and Milan with five handovers. The terminal's reported country code follows maritime jurisdiction, changing at the 12-nautical-mile limit and reading XZ beyond it. The serving PoP follows neither jurisdiction nor distance alone and can change while the ship is berthed, and the public IP changes both at PoP handovers and when the router moves a device to a different terminal. The authors conclude that the onboard network and per-user rate limits shape passenger experience more than the satellite link does. Limits stated or implied: one passenger device per ship, two voyages, no systematic iPerf3 on Utopia, and obstruction, beam switching and multi-terminal aggregation left to future work.

## Summary (ZH)

Zhao、Malekinasab 与 Pan（维多利亚大学，arXiv cs.NI，2026 年 11 月 4 日提交）在两艘邮轮上测量了 Starlink Maritime 服务。Utopia of the Seas（皇家加勒比，5,668 名乘客）于 2025 年 12 月在卡纳维拉尔港至巴哈马航段测量 83.5 小时；Silver Muse（银海邮轮，632 名乘客）于 2026 年 7 月在亚得里亚海测量 131.7 小时，停靠巴里、杜布罗夫尼克、科托尔、赫瓦尔和扎达尔等港口。方法分三部分：通过本地 gRPC 接口以 0.5 s 间隔采集用户终端遥测；在乘客设备上做由内向外测量（公网 IP 查询、ICMP ping，Silver Muse 上还有 iPerf3）；以及从靠近服务 PoP 的云服务器做由外向内的 ICMP 探测。两艘船均使用 Peplink 多 WAN 路由器，将会话分摊到多个商务套餐的平板高性能终端上。

结果：Silver Muse 由内向外的中位时延约 27 ms（95 分位 41-44 ms），由外向内中位约 19-20 ms，即船上网络在中位数上增加约 8-9 ms。单设备 iPerf3 下行中位数为 BBR 7.84 Mbps、CUBIC 6.83 Mbps，上行约 4.5 Mbps。终端聚合吞吐中位数（下行/上行）在 Utopia 为 66.6/24.2 Mbps，在 Silver Muse 为 27.6/16.0 Mbps，最繁忙 60 秒均值分别为 162.0/71.2 与 139.2/52.4 Mbps。Silver Muse 在 131.7 小时内记录 364 次中断（其中 84 次为遮挡中断，多发生在杜布罗夫尼克停靠期间），Utopia 在 83.5 小时内 44 次；多数中断持续约 1 秒或更短。

路由与寻址方面：Utopia 仅由迈阿密 PoP 服务，Silver Muse 由索非亚与米兰 PoP 服务，共发生 5 次切换。终端上报的国家代码随海事管辖区变化，在 12 海里界限处改变，之外显示 XZ。服务 PoP 既不单纯跟随管辖区也不单纯跟随距离，甚至可在船只靠港期间变化；公网 IP 既会在 PoP 切换时变化，也会在路由器把设备迁移到另一终端时变化。作者的结论是：船上网络与按用户限速对乘客体验的影响大于卫星链路本身。文中明示或隐含的局限：每船仅一台乘客设备、仅两次航程、Utopia 未系统运行 iPerf3，遮挡、波束切换与多终端聚合留待未来研究。

## Key technical points (EN)

- Two ships: Utopia of the Seas (83.5 h, Dec 2025) and Silver Muse (131.7 h, Jul 2026); terminal telemetry every 0.5 s plus inside-out and outside-in probing.
- Silver Muse latency: inside-out median about 27 ms vs outside-in about 19-20 ms; onboard network adds about 8-9 ms at the median.
- Single-device iPerf3 (Silver Muse): downlink median 7.84 Mbps (BBR) / 6.83 Mbps (CUBIC); uplink about 4.5 Mbps.
- Aggregate terminal throughput medians: 66.6/24.2 Mbps (Utopia), 27.6/16.0 Mbps (Silver Muse).
- Outages: 364 in 131.7 h (Silver Muse, 84 obstruction) and 44 in 83.5 h (Utopia), mostly about 1 s or shorter.
- PoPs: Miami only on Utopia; Sofia and Milan with five handovers on Silver Muse; country code switches to XZ beyond 12 nautical miles; public IP changes at PoP handover and on terminal reassignment.

## Key technical points (ZH)

- 两艘船：Utopia of the Seas（83.5 小时，2025 年 12 月）与 Silver Muse（131.7 小时，2026 年 7 月）；终端遥测每 0.5 s 一次，辅以由内向外与由外向内探测。
- Silver Muse 时延：由内向外中位约 27 ms，由外向内约 19-20 ms；船上网络中位增加约 8-9 ms。
- 单设备 iPerf3（Silver Muse）：下行中位数 7.84 Mbps（BBR）/ 6.83 Mbps（CUBIC）；上行约 4.5 Mbps。
- 终端聚合吞吐中位数：Utopia 66.6/24.2 Mbps，Silver Muse 27.6/16.0 Mbps。
- 中断：Silver Muse 131.7 小时 364 次（其中 84 次遮挡），Utopia 83.5 小时 44 次，多数约 1 秒或更短。
- PoP：Utopia 仅迈阿密；Silver Muse 为索非亚与米兰，共 5 次切换；国家代码在 12 海里外变为 XZ；公网 IP 在 PoP 切换及终端重分配时改变。

## Why it matters / what's new (EN)

The KB's Starlink measurement entries so far cover queuing (2026-05-29 Starlink queuing characterization), weather vs performance (2026-06-03 Mapping the Storm) and PoP assignment for land-mobile users (2026-08-17_starlink-pop-satellite-assignment-cross-us). This paper adds a maritime deployment with a shared multi-terminal onboard network, where the measured bottleneck for a passenger is largely the ship's own network rather than the satellite link, and where IP geolocation and PoP selection behave differently from land.

## Why it matters / what's new (ZH)

KB 此前的 Starlink 测量条目涉及排队特性（2026-05-29 Starlink queuing characterization）、天气与性能关系（2026-06-03 Mapping the Storm）以及陆地移动用户的 PoP 分配（2026-08-17_starlink-pop-satellite-assignment-cross-us）。本文新增了海事部署场景：船上为多终端共享网络，乘客侧测得的瓶颈主要来自船上自身网络而非卫星链路，且 IP 地理定位与 PoP 选择的行为与陆地不同。

## Images

![Utopia of the Seas voyage GPS track | Utopia of the Seas 航程 GPS 轨迹](https://arxiv.org/html/2611.07191v1/gps_tracks.png)
