---
id: 2026-10-16_arxiv-bounding-mobile-latency-mno-exit-points
date_published: 2026-10-13
date_found: 2026-10-16
type: academic-paper
technology: cellular
title_en: "Bounding Mobile Latency from Network Interconnections"
title_zh: "从网络互联界定移动网络时延"
url: "https://arxiv.org/abs/2610.19156"
source_quality: full
topics: [mobile-latency, MNO, exit-points, PLMN, traceroute, backhaul, hot-potato-routing, facility-location, CDN, measurement]
topic_primary: 5g-nr
topics_secondary: [mec]
novelty_score: 3
---

## Summary (EN)
Shefali Tushar Kulkarni and John Heidemann (USC Information Sciences Institute) ask what latency cost a mobile network operator's exit points impose, where an exit point is the place traffic leaves the operator's network and enters the public Internet. The paper, published at AINTEC 2026 (Taipei) with this version adding appendices, develops a method to infer exit points from existing mobile traceroutes and applies it to the three largest U.S. operators. It reports that AT&T, T-Mobile and Verizon funnel nationwide traffic through only 9, 5 and 9 exits, that paths through these exits add a median of 62.1 ms (AT&T), 43.9 ms (T-Mobile) and 49.1 ms (Verizon) over an ideal direct path, and that even granting each operator its existing exits at the speed of light in fibre, a median of 23.6, 37.2 and 46.9 ms remains that distance cannot explain.

To see whether better placement could help, the authors compare actual with theoretically optimal placements using the same number of exits and find the current placements 18 to 66% above the population-weighted optimum and 32 to 72% above the market-share-weighted optimum. They conclude the gap is small in absolute terms: perfect placement would recover only a few milliseconds of the tens that remain, and the inflation users experience comes mainly from routing and other overhead. The paper states that once a service has five well-placed exits, additional exits reduce mean per-capita latency by under 1%.

## Summary (ZH)
Shefali Tushar Kulkarni 与 John Heidemann（南加州大学信息科学研究所）探讨移动网络运营商的出口点（流量离开运营商网络进入公共互联网的位置）带来多大的时延代价。该论文发表于 AINTEC 2026（台北），本版增加了附录；文中提出一种从既有移动 traceroute 中推断出口点的方法，并应用于美国三大运营商。结果显示 AT&T、T-Mobile 与 Verizon 分别仅通过 9、5、9 个出口承载全国流量，经这些出口的路径相对理想直连路径的中位数额外时延分别为 62.1 ms（AT&T）、43.9 ms（T-Mobile）和 49.1 ms（Verizon）；即便允许各运营商保留现有出口并假设路径以光纤中光速传播，仍有中位数 23.6、37.2 和 46.9 ms 的时延无法用距离解释。

为判断更优布局能否改善，作者将实际布局与相同出口数量下的理论最优布局比较，发现当前布局比按人口加权的最优值高 18% 至 66%，比按市场份额加权的最优值高 32% 至 72%。他们的结论是：这一差距的绝对值很小，完美布局只能挽回剩余数十毫秒中的几毫秒，用户感受到的时延膨胀主要来自路由及其他开销。论文指出，一旦有五个位置良好的出口，再增加出口对人均平均时延的降低不足 1%。

## Key technical points (EN)
- Exit points are identified as the first hop in a traceroute where the path moves from an operator IP to a public IP belonging to a different autonomous system; the operator is determined with address-to-AS data and locations are inferred with IP2Location geolocation and, for handsets, recorded cell-tower IDs because GPS is often unavailable.
- Primary data are ShipTraceroute (hourly traceroutes from three phones, one per U.S. operator, mailed across 40 states in 2021): 1,592 successful traceroutes for AT&T, 1,720 for Verizon and 872 for T-Mobile; targets include UCSD, Google and Netflix servers.
- Validation of exit locations uses an independent 2024 mobile traceroute collection from a replication study; the authors note the 2021 data are five years old and the 2024 data two years old, and say their results are consistent over time.
- Latency is split into exit-point detour (distance to the exit and onward to the server at the speed of light in fibre, about 200 km per millisecond) and routing/other delay; the paper observes hot-potato-like behaviour, for example AT&T handsets in Nebraska and Kansas exit through Chicago rather than Los Angeles, even though Los Angeles lies on the path to the San Diego target.
- Optimal-placement comparison treats exit siting as a facility-location problem weighted by U.S. population by county and by state-level market share as a proxy for each operator's subscribers.
- The authors present the work as the first to explore how much latency the operator backhaul and exit points add, and say the approach extends to other regions and operators.

## Key technical points (ZH)
- 出口点定义为 traceroute 中路径从运营商 IP 转入属于另一自治系统的公网 IP 的第一跳；运营商通过地址到 AS 的映射确定，位置通过 IP2Location 地理定位推断，对手机则因 GPS 常不可用而使用记录的基站 ID。
- 主要数据为 ShipTraceroute（2021 年在 40 个州邮寄三部手机，每家美国运营商一部，每小时一次 traceroute）：AT&T 1,592 条、Verizon 1,720 条、T-Mobile 872 条成功 traceroute；目标包括 UCSD、Google 与 Netflix 的服务器。
- 出口位置用一项复现研究中独立的 2024 年移动 traceroute 数据集验证；作者指出 2021 年数据已有五年、2024 年数据已有两年，并称结果随时间保持一致。
- 时延分解为出口绕行（到出口再到服务器的距离，以光纤中约每毫秒 200 km 计）与路由及其他时延；论文观察到类似热土豆路由的行为，例如 AT&T 在内布拉斯加与堪萨斯的手机经芝加哥而非洛杉矶离网，尽管洛杉矶就在前往圣迭戈目标的路径上。
- 最优布局比较将出口选址视为设施选址问题，以各县美国人口加权，并以州级市场份额作为各运营商用户数的代理。
- 作者称这是首个探讨运营商回传与出口点增加多少时延的工作，并称该方法可推广到其他地区与运营商。

## Why it matters / what's new (EN)
The KB's latency material mostly concerns radio-side behaviour (scheduling, handover, deterministic cycles) or edge computing; this paper looks at the core-to-Internet boundary and reports that, for the three U.S. operators, much of the remaining mobile latency is not removable by moving exit points. It bears on how far MEC and CDN placement can help, since the authors note CDN nodes usually sit just outside the operator network and some requests still reach regional cloud data centres. The inference rests on a small number of phones per operator and on city-level geolocation that the authors note can err by tens of kilometres (adequate, they argue, for latency shifts of tens of milliseconds), so the exit counts and detour figures are estimates rather than operator-confirmed topology.

## Why it matters / what's new (ZH)
知识库中的时延内容多涉及无线侧行为（调度、切换、确定性周期）或边缘计算；本文关注核心网到互联网的边界，并报告对于这三家美国运营商，剩余的移动时延有相当部分无法通过调整出口点消除。它也关系到 MEC 与 CDN 部署能起多大作用，因为作者指出 CDN 节点通常位于运营商网络之外，部分请求仍需到达区域云数据中心。该推断基于每家运营商少量手机的数据以及城市级地理定位（作者指出其误差可达数十公里，但认为足以检测数十毫秒量级的时延变化），因此出口数量与绕行数值属于估计，而非运营商确认的拓扑。
