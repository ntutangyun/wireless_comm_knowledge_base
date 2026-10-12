---
id: 2026-10-12_arxiv-aerial-5g-gnb-oai-arm-testbed
date_published: 2026-10-04
date_found: 2026-10-12
type: academic-paper
technology: cellular
title_en: "Toward Lightweight Aerial 5G gNBs: Reproducible OAI Testbed on Commodity ARM Platforms"
title_zh: "面向轻量化空中 5G 基站：基于商用 ARM 平台的可复现 OAI 测试床"
url: "https://arxiv.org/abs/2610.05007"
source_quality: full
topics: [OpenAirInterface, CU/DU-split, F1-interface, UAV, aerial-RAN, ARM, software-defined-radio, public-warning-system]
topic_primary: 5g-nr
topics_secondary: [ntn]
novelty_score: 3
---

## Summary (EN)
Marc Duboc and Ammar El Falou (King Abdullah University of Science and Technology, KAUST) address a hard systems constraint for UAV-mounted cellular base stations: every gram and watt spent on RAN compute competes directly with flight duration. Using the 3GPP F1 split, they keep the 5G Core (5GC) and central unit (CU) on the ground and design the intended airborne unit around only the backhaul endpoint, DU, and radio (bench-tested; no flight trials). They implement this in OpenAirInterface (OAI) on two off-the-shelf ARM platforms — Raspberry Pi 5 and Jetson Orin Nano — rather than custom avionics, connected to a USRP B210 software-defined radio, a commercial handset as the real UE, and three backhaul paths for F1: wired Ethernet, Wi-Fi/GRE, and 5G/WireGuard (via an independent donor gNB).

Three measured results answer the paper's research questions. First, on the cost of moving the DU from x86 to commodity ARM: on Ethernet, x86/Jetson/Pi 5 split DUs reach 99.4/87.9/61.8 Mb/s downlink and 22.6/18.1/15.4 Mb/s uplink, so Jetson preserves 88.4% of x86 downlink throughput and Pi 5 preserves 62.2%; the Jetson/x86 ratio stays at 87.5-89.0% across all three F1 bearers, making Jetson the strongest performance-preserving choice among the tested embedded candidates. Second, on untethering F1: the 5G/WireGuard backhaul preserves 76.4-77.1% of each host's wired downlink rate. Third, on failure diagnosis: a controlled link-adaptation intervention (moving the dominant Modulation and Coding Scheme from MCS 3 to MCS 26) recovers a 4.25x throughput collapse, raising split downlink from 23.4 to 99.4 Mb/s, and synchronized monolithic-vs-split telemetry narrows the likely cause of the remaining monolithic–split gap to split-path scheduling/timing behavior (qualitative evidence), rather than RF quality, Ethernet capacity, F1-U backlog or sustained CPU saturation. The fully validated Jetson/B210/RM500Q-GL airborne electronics weigh 657.4 g and draw about 28 W under sustained traffic (757.4 g with integration allowance). Beyond raw throughput, the paper documents and releases an OAI patch implementing the F1AP Write-Replace Warning procedure, which carries a Public Warning System (PWS) message from the ground CU to the remote DU for scheduling as SIB8, validated end-to-end on a commercial handset — the authors state this is, to their knowledge, the first public OAI implementation demonstrating PWS delivery through an actual CU/DU split. All testbed artifacts (OAI patch, payload specification, and measurement methodology) are released publicly for reproducibility on laboratory-accessible hardware; experiments were run inside a Faraday cage on an isolated test PLMN.

## Summary (ZH)
Marc Duboc 与 Ammar El Falou（阿卜杜拉国王科技大学，KAUST）针对无人机搭载蜂窝基站面临的一项严苛系统性约束展开研究：每一克重量和每一瓦功耗用于 RAN 计算，都直接与飞行续航时间形成竞争。他们利用 3GPP F1 分离架构，将 5G 核心网（5GC）与中心单元（CU）留在地面，将预期的空中单元设计为仅含回传端点、DU 与射频（台架测试，未进行飞行试验）。该方案基于 OpenAirInterface（OAI）在两款现成 ARM 平台——Raspberry Pi 5 与 Jetson Orin Nano——上实现，而非定制航电设备，并连接 USRP B210 软件定义无线电、一台作为真实 UE 的商用手机，以及三种 F1 回传路径：有线以太网、Wi-Fi/GRE，以及经由独立施主基站的 5G/WireGuard。

论文通过三项实测结果回答了研究问题。第一，关于将 DU 从 x86 迁移至商用 ARM 的代价：在以太网回传下，x86/Jetson/Pi 5 分离式 DU 下行速率分别达到 99.4/87.9/61.8 Mb/s，上行为 22.6/18.1/15.4 Mb/s，即 Jetson 保留了 x86 下行吞吐量的 88.4%，Pi 5 则保留 62.2%；在全部三种 F1 回传方式下，Jetson 与 x86 的比值均稳定在 87.5%–89.0%，使其成为所测嵌入式方案中性能保留最优的选择。第二，关于 F1 去线化的代价：5G/WireGuard 回传保留了各主机有线下行速率的 76.4%–77.1%。第三，关于故障诊断：一次受控的链路自适应干预（将主导调制编码方案由 MCS 3 调整为 MCS 26）挽回了 4.25 倍的吞吐量崩溃，将分离式下行速率从 23.4 Mb/s 提升至 99.4 Mb/s，而同步采集的"整体式 vs 分离式"遥测数据将剩余整体式/分离式差距的可能原因收窄至分离路径上的调度/时序行为（定性证据），而非射频质量、以太网容量、F1-U 积压或持续 CPU 饱和。经完整验证的 Jetson/B210/RM500Q-GL 空中电子设备重 657.4 克，持续通信时功耗约 28 瓦（计入集成冗余后为 757.4 克）。除原始吞吐量数据外，论文还记录并公开发布了一个 OAI 补丁，实现了 F1AP 的"写-替换预警"（Write-Replace Warning）流程，可将公共预警系统（PWS）消息从地面 CU 传送至远端 DU 并作为 SIB8 调度，并在商用手机上完成端到端验证——作者表示，就其所知，这是首个公开的、通过真实 CU/DU 分离架构演示 PWS 消息送达的 OAI 实现。全部测试床工件（OAI 补丁、载荷规格与测量方法）均已公开发布以便复现，实验在法拉第笼内的隔离测试 PLMN 上进行。

## Key technical points (EN)
- 3GPP F1 split keeps 5GC/CU on the ground; airborne payload is reduced to backhaul endpoint + DU + radio, built on commodity ARM (Raspberry Pi 5, Jetson Orin Nano) rather than custom avionics.
- Jetson preserves 88.4% of x86 split-DU Ethernet downlink throughput (87.5-89.0% consistently across Ethernet, Wi-Fi/GRE, and 5G/WireGuard bearers); Pi 5 preserves 62.2%.
- 5G/WireGuard backhaul preserves 76.4-77.1% of each host's wired downlink rate.
- A controlled MCS 3->26 link-adaptation intervention recovers a 4.25x throughput collapse (23.4 -> 99.4 Mb/s split DL); residual mono/split gap narrowed to scheduling/timing behavior.
- Validated Jetson/B210/RM500Q-GL airborne electronics: 657.4 g, ~28 W under sustained traffic (757.4 g with integration allowance).
- Released OAI patch implements F1AP Write-Replace Warning (PWS/SIB8) from ground CU to remote DU, validated on a commercial handset — stated by the authors to be the first public OAI implementation to demonstrate this over an actual CU/DU split.
- 400-observation host-bearer benchmark (20 repetitions x host x bearer) under a fixed B210/UE/n78/106-PRB access profile; all artifacts released for reproducibility.

## Key technical points (ZH)
- 3GPP F1 分离架构将 5GC/CU 留在地面，空中载荷精简为回传端点 + DU + 射频，基于商用 ARM 平台（Raspberry Pi 5、Jetson Orin Nano）而非定制航电实现。
- Jetson 保留了 x86 分离式 DU 以太网下行吞吐量的 88.4%（在以太网、Wi-Fi/GRE、5G/WireGuard 三种回传方式下稳定保持 87.5%–89.0%）；Pi 5 保留 62.2%。
- 5G/WireGuard 回传保留各主机有线下行速率的 76.4%–77.1%。
- 受控的 MCS 由 3 调整为 26 的链路自适应干预挽回 4.25 倍吞吐量崩溃（分离式下行由 23.4 提升至 99.4 Mb/s）；剩余的整体式/分离式差距收窄为调度/时序行为问题。
- 经验证的 Jetson/B210/RM500Q-GL 空中电子设备重 657.4 克，持续通信时功耗约 28 瓦（计入集成冗余为 757.4 克）。
- 公开发布的 OAI 补丁实现了 F1AP"写-替换预警"（PWS/SIB8）从地面 CU 到远端 DU 的传递，并在商用手机上完成验证——作者称这是首个公开展示该功能在真实 CU/DU 分离架构上实现的 OAI 实现。
- 在固定的 B210/UE/n78/106-PRB 接入配置下完成 400 次观测的主机-承载基准测试（每主机×承载 20 次重复）；全部工件已公开发布以便复现。

## Why it matters / what's new (EN)
This paper provides a reproducible, publicly released measurement of how much radio performance a UAV-oriented split gNB gives up by using laboratory-accessible ARM compute instead of x86, plus a concrete payload/power budget (657.4 g, ~28 W) and a validated PWS-over-F1 (CU/DU split) capability that the authors state, to their knowledge, no earlier public OAI implementation has demonstrated.

## Why it matters / what's new (ZH)
论文给出了一项可复现、已公开发布的实测，量化了面向无人机的分离式基站在使用实验室可及的 ARM 计算平台而非 x86 时所牺牲的射频性能，并给出具体的载荷/功耗预算（657.4 克、约 28 瓦），以及一项经验证的 F1（CU/DU 分离）PWS 下发能力——作者表示，就其所知，此前没有公开的 OAI 实现演示过该能力。

## Images

None.
