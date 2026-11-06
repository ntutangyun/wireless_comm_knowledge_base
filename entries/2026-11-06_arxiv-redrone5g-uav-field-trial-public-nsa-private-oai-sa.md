---
id: 2026-11-06_arxiv-redrone5g-uav-field-trial-public-nsa-private-oai-sa
date_published: 2026-11-04
date_found: 2026-11-06
type: academic-paper
technology: cellular
title_en: "ReDrone5G: Field Trial Evaluation of Remote UAV Media and Control over Public and Private 5G Networks"
title_zh: "ReDrone5G：公网与专网 5G 上远程无人机媒体与控制的外场试验评估"
url: "https://arxiv.org/abs/2611.07068"
source_quality: full
topics: [UAV, drone-media, field-trial, 5G-NSA, 5G-SA, OpenAirInterface, uplink-video, MAVLink, private-5G]
topic_primary: 5g-nr
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)

Kashif Mehmood, Tu Dac Ho, Katina Kralevska (NTNU, Trondheim) and Haci Mehmet Guzey (Sivas University of Science and Technology) present ReDrone5G, an end-to-end platform for drone-assisted live media production, which combines high-rate uplink video, continuous telemetry and latency-sensitive command and control on a moving aerial platform. The same drone, video, telemetry/control and monitoring stack was flown over two deployments: Turkcell's commercial 5G non-standalone (NSA) network in Sivas, Turkiye, and a private OpenAirInterface (OAI) standalone (SA) testbed in Trondheim, Norway.

The stack uses MediaMTX-based video streaming, MAVLink telemetry and control, and Prometheus/Grafana observability backed by InfluxDB, on a Pixhawk Cube flight controller with a DJI Action 4 camera and a cellular UE. The authors treat the two trials as complementary, non-equivalent field deployments rather than a controlled A/B comparison, and they list the differences that confound it: operator routing, load, a Tailscale/WireGuard VPN overlay needed on the public path, and the fact that only application-level measurements are available on the commercial network.

## Summary (ZH)

Kashif Mehmood、Tu Dac Ho、Katina Kralevska（NTNU，特隆赫姆）与 Haci Mehmet Guzey（锡瓦斯科技大学）提出 ReDrone5G，这是一个面向无人机辅助直播制作的端到端平台，在移动空中平台上同时承载高速率上行视频、持续遥测和时延敏感的指令控制。同一套无人机、视频、遥测/控制和监测软件栈在两种部署上飞行：土耳其锡瓦斯的 Turkcell 商用 5G 非独立组网（NSA）网络，以及挪威特隆赫姆基于 OpenAirInterface（OAI）的独立组网（SA）专网测试床。

软件栈采用基于 MediaMTX 的视频流、MAVLink 遥测与控制，以及以 InfluxDB 为后端的 Prometheus/Grafana 观测，硬件为 Pixhawk Cube 飞控、DJI Action 4 相机和蜂窝 UE。作者把两次试验视为互补但不等价的外场部署，而非受控的 A/B 对比，并列出了混杂因素：运营商路由、负载、公网路径上必需的 Tailscale/WireGuard VPN 叠加层，以及商用网络上只能获得应用层测量。

## Key technical points (EN)

- Trial structure: three phases. Phase 1 validated the airborne platform over direct radio control and Wi-Fi links; Phase 2 validated two simultaneous PDU sessions and indoor baselines on the private OAI deployment, with one airborne UE and no competing UEs (so it shows concurrent sessions and traffic separation, not slice isolation); Phase 3 was the end-to-end field flights.
- Target KPIs were set per traffic class: control RTT below 150 ms, control jitter below 50 ms, video latency below 100 ms, video jitter below 20 ms, video throughput at least 10 Mbps and telemetry at least 0.05 Mbps.
- Public NSA versus private SA (means over one-second windows, 15,976 and 18,657 windows): control RTT 98 ms (p95 150 ms) against 67.5 ms (p95 73 ms); video latency 77.5 ms (p95 105 ms, about 93% under 100 ms) against 43.1 ms (p95 51 ms); video throughput 5.6 Mbps against 14.6 Mbps, with under 1% of public windows reaching 10 Mbps against over 99% private; control jitter was lower on the public path (11.2 ms) than the private one (24.3 ms), both under target.
- The private deployment exposed uplink SNR (mostly 12.5-20 dB, mean near 15 dB), RSRP (about -95 to -90 dBm), MCS, PRB and BLER, which the authors describe as consistent with a generally reliable link during the flights; they state causal relationships need further controlled or time-aligned analysis.
- The authors do not attribute the gap solely to private versus public networking because path, load and VPN usage also differ between trials.

## Key technical points (ZH)

- 试验结构：分三个阶段。第一阶段在直接无线电遥控和 Wi-Fi 链路上验证机载平台；第二阶段在 OAI 专网上验证两个并发 PDU 会话和室内基线，仅有一个机载 UE 且无竞争 UE（因此只证明并发会话和流量分离，而非切片隔离）；第三阶段为端到端外场飞行。
- 按业务类别设定目标 KPI：控制往返时延低于 150 ms，控制抖动低于 50 ms，视频时延低于 100 ms，视频抖动低于 20 ms，视频吞吐不低于 10 Mbps，遥测不低于 0.05 Mbps。
- 公网 NSA 与专网 SA 对比（按一秒窗口取均值，分别 15,976 与 18,657 个窗口）：控制往返时延 98 ms（p95 150 ms）对 67.5 ms（p95 73 ms）；视频时延 77.5 ms（p95 105 ms，约 93% 低于 100 ms）对 43.1 ms（p95 51 ms）；视频吞吐 5.6 Mbps 对 14.6 Mbps，公网仅不到 1% 的窗口达到 10 Mbps，专网超过 99%；控制抖动公网（11.2 ms）低于专网（24.3 ms），均在目标之内。
- 专网部署可观测上行 SNR（多在 12.5-20 dB，均值约 15 dB）、RSRP（约 -95 至 -90 dBm）、MCS、PRB 和 BLER，作者认为这与飞行期间总体可靠的链路一致；并声明因果关系还需要进一步的受控或时间对齐分析。
- 作者没有把差距仅归因于专网与公网，因为两次试验的路径、负载和 VPN 使用也不同。

## Why it matters / what's new (EN)

The authors note that commercial and experimental 5G environments are rarely evaluated with the same UAV application workflow, and the paper is candid that the public result characterises the whole commercial path including operator routing and a VPN overlay. The contribution is a reusable trial platform and KPI framework plus two application-level measurement sets, not a controlled comparison of NSA and SA. Its stated takeaway is that public 5G suffices for feasibility validation while private 5G is better for repeatable experimentation, tuning and future service assurance. Limits: one drone, no competing traffic, and slice isolation or prioritisation under congestion were not evaluated.

## Why it matters / what's new (ZH)

作者指出，商用与实验性 5G 环境很少用同一套无人机应用流程评估；论文也坦率说明公网结果刻画的是包含运营商路由与 VPN 叠加层的整条商用路径。其贡献是一个可复用的试验平台与 KPI 框架，加上两组应用层测量数据，而不是 NSA 与 SA 的受控对比。论文给出的结论是：公网 5G 足以做可行性验证，专网更适合可重复实验、调优和未来的服务保障。局限：仅一架无人机、无竞争流量，且未评估拥塞下的切片隔离或优先级。

## Images

None.
