---
id: 2026-08-17_starlink-pop-satellite-assignment-cross-us
date_published: 2026-08-17
date_found: 2026-08-17
type: academic-paper
technology: satellite
title_en: "A Cross-US View of Starlink's PoP and Satellite Assignment Strategy to Mobile Users — a 6,100 km driving campaign reveals Voronoi-tessellation PoP assignment and per-beam-load-governed performance"
title_zh: "跨美视角下 Starlink 面向移动用户的 PoP 与卫星分配策略——6,100 公里驾车实测揭示 Voronoi 镶嵌式 PoP 分配与由每波束负载决定的性能"
url: "https://doi.org/10.1145/3789240.3827596"
source_quality: full
topics: [Starlink, PoP-assignment, satellite-scheduling, mobility, Voronoi-tessellation, H3, per-beam-load, network-measurement, V1-V2-generation]
topic_primary: starlink
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)
Wang, Zhao, Feng, Yu, Pan and Koutsonikolas (Northeastern University + University of Victoria, LEO-NET '26, ACM online 17 Aug 2026, Denver) present the first country-scale characterization of how Starlink assigns Points of Presence (PoPs) and orbital satellites to *mobile* users in the US. Prior Starlink measurement work overwhelmingly studied stationary terminals; the policies governing mobility had never been resolved. The team ran a 6,100 km cross-country driving campaign from Boston to Los Angeles in August 2025, spanning 20 states and latitudes 34.1°N (LAX) to 44.9°N (Minneapolis), engineered to cross 7 Starlink PoPs (LGA, IAD, ORD, MSP, DEN, SLC, LAX). Hardware was a Starlink Gen3 dish on a Roam Unlimited plan, rooftop-mounted on an SUV at ~3° tilt, feeding a Beelink mini-PC; 6 cloud VMs (Akamai Linode + GCP) were deployed near the PoPs for server-proximate measurement. The 30-hour dataset covers TCP downlink throughput (Nuttcp/BBR, 120 s intervals), ICMP RTT to both VMs (E2E) and the CGNAT gateway 100.64.0.1 (GW RTT, 10 ms), UT gRPC telemetry (192.168.100.1:9200), DNS PTR records for PoP identification, and satellite ephemeris via TLE + a mobile-optimized satellite-ID technique cross-referenced to the GCAT catalog.

Three findings. **(1) PoP assignment follows a Voronoi tessellation** over the 13 known US PoP locations — the driven serving-boundary crossings track Voronoi edges closely, matching prior community speculation that Starlink partitions serving regions using Uber's H3 (resolution-5) hexagonal index, which is itself Voronoi-constructed. But documented *deviations* exist: the DEN–ORD cutoff tracks the Iowa–Nebraska state line (administrative-boundary adjustment); ORD's serving area extends into Iowa beyond its Voronoi cell (higher IXP capacity — 1,000 Gbps vs MSP's 400 Gbps — and content-provider proximity); and MIA's boundary shifts eastward over the Atlantic (maritime/cruise-ship support). **(2) PoP-level performance is highly diverse**: median TCP DL throughput ranges SLC 272.7 Mbps > DEN 249.6 > LGA 230.7 > LAX 214.9 > ORD 177.2 > MSP 142.6 > IAD 139.5 Mbps — nearly 2× spread — with GW RTT (21.9–26.3 ms) tracking the throughput ranking, plausibly driven by terrain-induced sky obstruction. **(3) Satellite generations are assigned uniformly**: across measurement windows the UT contacted 1,399 unique V2 (49%) and 1,461 unique V1 (51%) satellites, proportional to the documented 55/45 deployment split; V2@43° and V1@53° dominate, but throughput differences between generation–inclination combos are marginal (GW RTT within 2.3 ms at a PoP). The authors conclude that **per-beam load, not satellite capability, governs user-perceived performance** — because V1/V2 at 43°/53° operate at similar 525–550 km altitudes and user experience is set by per-beam bandwidth and the number of users sharing a beam. The dataset is released publicly.

## Summary (ZH)
Wang、Zhao、Feng、Yu、Pan 与 Koutsonikolas（美国东北大学 + 维多利亚大学，LEO-NET '26，ACM 2026 年 8 月 17 日在线，丹佛）首次在全国尺度上刻画了 Starlink 如何为*移动*用户分配接入点（PoP）与在轨卫星。此前的 Starlink 实测绝大多数针对固定终端，移动场景的分配策略从未被厘清。团队于 2025 年 8 月完成从波士顿到洛杉矶、跨越 20 个州、纬度 34.1°N（洛杉矶）至 44.9°N（明尼阿波利斯）的 6,100 公里驾车测量，路线专门穿越 7 个 Starlink PoP（LGA、IAD、ORD、MSP、DEN、SLC、LAX）。硬件为 Roam Unlimited 套餐下的 Starlink 三代天线，以约 3° 倾角安装于 SUV 车顶，接 Beelink 迷你主机；并在 PoP 附近部署 6 台云虚机（Akamai Linode + GCP）以实现临近服务器测量。30 小时数据集涵盖 TCP 下行吞吐（Nuttcp/BBR，120 秒窗口）、到虚机（端到端）与 CGNAT 网关 100.64.0.1 的 ICMP RTT（网关 RTT，10 ms）、UT 的 gRPC 遥测（192.168.100.1:9200）、用于识别 PoP 的 DNS PTR 记录，以及经 TLE + 面向移动 UT 优化的卫星识别技术并与 GCAT 目录交叉比对得到的卫星星历。

三点发现。**(1) PoP 分配遵循 Voronoi 镶嵌**：驾车实测的服务边界切换紧贴由 13 个已知美国 PoP 构造的 Voronoi 边，印证了社区此前关于 Starlink 用 Uber H3（5 级）六边形索引（其本身即由 Voronoi 构造）划分服务区的推测。但存在有据可查的*偏离*：DEN–ORD 分界沿爱荷华–内布拉斯加州界（行政边界修正）；ORD 服务区越出其 Voronoi 单元延伸进爱荷华（IXP 容量更高——1,000 Gbps 对 MSP 的 400 Gbps——且靠近内容提供商）；MIA 边界向大西洋东移（服务邮轮等海事用户）。**(2) PoP 级性能差异显著**：TCP 下行吞吐中位数为 SLC 272.7 > DEN 249.6 > LGA 230.7 > LAX 214.9 > ORD 177.2 > MSP 142.6 > IAD 139.5 Mbps，近 2 倍差距，网关 RTT（21.9–26.3 ms）与吞吐排名一致，可能由地形遮挡驱动。**(3) 卫星代际分配均匀**：测量窗内 UT 接触 1,399 颗独立 V2（49%）与 1,461 颗独立 V1（51%）卫星，与已部署 55/45 比例相称；V2@43° 与 V1@53° 为主导组合，但各代际–倾角组合间吞吐差异很小（同一 PoP 内网关 RTT 差 ≤2.3 ms）。作者据此得出：**决定用户可感知性能的是每波束负载，而非卫星能力**——因为 43°/53° 上的 V1/V2 工作在相近的 525–550 km 高度，用户体验由每波束带宽与共享该波束的用户数决定。数据集已公开发布。

## Key technical points (EN)
- **Campaign:** 6,100 km Boston→LA drive (Aug 2025), 20 states, 7 PoPs, 30-hour dataset; Starlink Gen3 UT (Roam Unlimited) + 6 PoP-proximate VMs (Linode/GCP); a supplementary Dallas→Miami drive validates southern PoPs (DFW/ATL/MIA).
- **PoP-ID method:** DNS PTR records `customer.<pop>.pop.starlinkisp.net` (Starlink moved to a GeoIP `pops.csv` mapping after Oct 2025; the paper uses live PTR captures).
- **Assignment law:** Voronoi tessellation over 13 US PoPs (≈ H3 res-5), with adjustments for administrative boundaries (state lines), IXP capacity, content availability, and maritime coverage (MIA extends over the Atlantic).
- **Performance:** median TCP DL 139.5–272.7 Mbps across the 7 PoPs (~2× spread); GW RTT 21.9–26.3 ms tracks throughput; western PoPs (LAX/SLC/DEN) + LGA = high tier, central (MSP/ORD) + IAD = low tier.
- **Satellite assignment:** V2 49% / V1 51% unique contacts (proportional to 55/45 deployment); V2@43° and V1@53° dominant; inclinations 43/53/70/97.6° all observed; generation/inclination differences in throughput and GW RTT marginal (≤2.3 ms within-PoP, ≤5.4 ms across).
- **Conclusion:** per-beam load, not per-satellite capability, governs user-perceived throughput/latency; V1/V2 at 43°/53° share 525–550 km altitude (FCC filings).

## Key technical points (ZH)
- **测量：** 6,100 km 波士顿→洛杉矶（2025 年 8 月），20 州，7 个 PoP，30 小时数据集；Starlink 三代 UT（Roam Unlimited）+ 6 台临近 PoP 的虚机（Linode/GCP）；另有一段达拉斯→迈阿密补充测量验证南部 PoP（DFW/ATL/MIA）。
- **PoP 识别：** DNS PTR 记录 `customer.<pop>.pop.starlinkisp.net`（Starlink 于 2025 年 10 月后改用 GeoIP `pops.csv` 映射；本文使用实时 PTR 抓取）。
- **分配规律：** 基于 13 个美国 PoP 的 Voronoi 镶嵌（≈ H3 5 级），并按行政边界（州界）、IXP 容量、内容可用性与海事覆盖（MIA 延伸至大西洋）作修正。
- **性能：** 7 个 PoP 的 TCP 下行中位数 139.5–272.7 Mbps（约 2 倍差距）；网关 RTT 21.9–26.3 ms 与吞吐一致；西部 PoP（LAX/SLC/DEN）+ LGA 为高档，中部（MSP/ORD）+ IAD 为低档。
- **卫星分配：** V2 49% / V1 51% 独立接触数（与 55/45 部署相称）；V2@43° 与 V1@53° 主导；43/53/70/97.6° 倾角均被观测；代际/倾角对吞吐与网关 RTT 影响甚微（同 PoP 内 ≤2.3 ms，跨 PoP ≤5.4 ms）。
- **结论：** 决定用户可感知吞吐/时延的是每波束负载而非单星能力；43°/53° 上的 V1/V2 共享 525–550 km 高度（FCC 申报）。

## Why it matters / what's new (EN)
The KB's Starlink measurement thread has been throughput/latency-centric (2026-07-09 BBRv3-Starlink global study, 2026-06-30 latency region signatures, 2026-06-03 Mapping the Storm) but never explained the *infrastructure-assignment* layer beneath those numbers. This is the first entry to reverse-engineer the PoP-assignment policy itself — a concrete, testable model (Voronoi over 13 PoPs ≈ H3 res-5, plus four named override rules) that turns Starlink's opaque serving-region logic into something reproducible, and it does so under mobility, which prior fixed-site work structurally could not. The per-beam-load conclusion is the operationally important one: it says a user's throughput is set by how many peers share their beam, not by which satellite generation happens to be overhead — so capacity-planning and fairness questions live at the beam scheduler, not the constellation composition. The public dataset (route telemetry + PoP IXP/IPv6 auxiliaries) gives the community a mobility performance baseline at PoP granularity that did not exist before. Caveats the authors flag: each PoP-to-PoP boundary is crossed at most once (boundary geometry is dominant-pattern, not fully sculpted), and DEN/MSP throughput is depressed by non-co-located VMs.

## Why it matters / what's new (ZH)
知识库的 Starlink 实测线索此前以吞吐/时延为中心（2026-07-09 BBRv3 全球研究、2026-06-30 时延区域签名、2026-06-03 "绘制风暴"），却从未解释这些数字之下的*基础设施分配*层。本条目首次逆向还原了 PoP 分配策略本身——给出一个具体、可检验的模型（13 个 PoP 上的 Voronoi ≈ H3 5 级，外加四条具名修正规则），把 Starlink 不透明的服务区逻辑变为可复现之物，且是在移动场景下完成——这是以往固定站点研究在结构上无法做到的。每波束负载这一结论最具运营意义：它表明用户吞吐由与其共享波束的对等用户数决定，而非头顶恰好是哪一代卫星——因此容量规划与公平性问题存在于波束调度器，而非星座代际构成。公开数据集（路线遥测 + PoP 的 IXP/IPv6 辅助数据）为社区提供了此前不存在的、PoP 粒度的移动性能基线。作者指出的限制：每个 PoP 间边界最多穿越一次（边界几何只呈现主导模式，未完全刻画）；DEN/MSP 吞吐因虚机非同址而被压低。
