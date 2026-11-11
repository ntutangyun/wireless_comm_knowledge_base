---
id: 2026-11-11_ieee-mentor-win-sg-charter-lbt-on-off-nr-wifi-coexistence-robust-wifi9-dcn-1927
date_published: 2026-11-10
date_found: 2026-11-11
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WIN SG: Intelligent Coexistence for Wi-Fi 9 against Non-LBT Aggressors — NR LBT ON vs OFF comparison and proposed WIN PAR/CSD text (DCN 11-26-1927r1, Charter Communications)"
title_zh: "IEEE 802.11 WIN SG：面向 Wi-Fi 9 的非 LBT 干扰源智能共存——NR 开启/关闭 LBT 对比及拟议 WIN PAR/CSD 文本（DCN 11-26-1927r1，Charter Communications）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=1927&is_year=2026"
source_quality: full
topics: [WIN, Wi-Fi 9, coexistence, LBT, AFC, 6 GHz, U-NII-7, 6G, NR]
topic_primary: spectrum-policy
topics_secondary: [wifi8-uhr]
novelty_score: 3
---

## Summary (EN)

DCN 11-26-1927r1, "Intelligent Coexistence for Wi-Fi 9 against Non-LBT Aggressors" (Mehdi Ganji et al., Charter Communications; WIN SG; 16 slides; r1 uploaded 10 November 2026, title-slide date 2026-11-10), follows two earlier Charter contributions that the slides cite as 11-26/0878r0 (July 2026, regulatory asymmetry) and 11-26/1668r0 (September 2026, system-level NR/Wi-Fi simulation of harm to Wi-Fi). The slides recap the setting: several 3GPP contributions target a 6G uplink boost in U-NII-7 at Standard Power (up to 36 dBm EIRP) without listen-before-talk, under the FCC AFC exemption; the deck notes that a scheduled uplink does not contend for the medium, so Wi-Fi, which defers to energy above -62 dBm, carries the coexistence burden. The earlier simulation found Wi-Fi degraded in all four scenarios (up to 70% goodput loss, x20/x25 mean DL/UL latency, x3 MPDU retries).

In response to group feedback asking for an additional reference point, this contribution adds an LBT gate to every NR transmitter (TRP before each downlink slot, CPE before each uplink slot), using an NR-U-style threshold of -72 dBm per 20 MHz (-65 dBm over the 100 MHz carrier), checked once per slot with no random back-off. Setup per the slides: U-NII-7 at 6785 MHz, 100 MHz NR carrier, 7 sites, 36 dBm EIRP; Wi-Fi is 802.11be at 80 MHz (channel 167) co-channel with NR, 7 APs x 4 STAs, FTP-3 traffic at 1 Gbps per AP (80% DL); four deployments (A: outdoor CPE to indoor AP through a wall; B: rooftop CPE to indoor AP through a wall; C: indoor, same room; D: rooftop CPE and strand-mounted outdoor AP). The single-AP reference without NR delivers 731.7 Mbps DL and 195.7 Mbps UL.

Reported aggregate (DL+UL) goodput, LBT OFF versus LBT ON, as a share of the 1 Gbps offered load: A 82% / 84%, B 70% / 82%, C 17% / 79%, D 24% / 70% (standalone reference 93%). In C and D (NR above the ED threshold) LBT OFF drove roughly 250k / 228k ED deferrals per AP and average latency of about 2.0 s / 1.9 s, versus 425 ms / 416 ms with LBT ON. The deck concludes that mandatory LBT remains the primary regulatory remedy, but that 802.11 may be unable to influence other technologies; it therefore outlines a "robust Wi-Fi" direction: identify the interference source (time pattern, occupied bandwidth, direction of arrival; examples given are 6G-UB scheduled slots, Bluetooth 625 microsecond slots with 1-2 MHz hops, UWB short bursts about 500 MHz wide), then adapt EDCA, spatial reuse (OBSS-PD-like), hybrid beamforming nulls, operating-bandwidth switching, and scheduled access. It closes with proposed text for the WIN PAR (5.5 and 5.2.b) and CSD (1.2.1) and a straw poll on whether robustness to non-incumbent inter-system interference should be a WIN target.

## Summary (ZH)

DCN 11-26-1927r1《Intelligent Coexistence for Wi-Fi 9 against Non-LBT Aggressors》（Mehdi Ganji 等，Charter Communications；WIN SG；共 16 页；r1 于 2026 年 11 月 10 日上传，标题页日期 2026-11-10）延续 Charter 此前两份文稿（幻灯片引用为 11-26/0878r0，2026 年 7 月，监管不对称；11-26/1668r0，2026 年 9 月，NR/Wi-Fi 系统级仿真显示对 Wi-Fi 的损害）。幻灯片回顾背景：多份 3GPP 文稿瞄准 U-NII-7 频段的 6G 上行增强，采用标准功率（最高 36 dBm EIRP）且不做先听后说（LBT），依据 FCC 的 AFC 豁免；文稿指出，被调度的上行不竞争信道，而 Wi-Fi 会在能量高于 -62 dBm 时退避，共存负担全部落在 Wi-Fi 一侧。此前仿真显示四种场景下 Wi-Fi 均受损（吞吐最多损失 70%，DL/UL 平均时延约 x20/x25，MPDU 重传约 x3）。

应工作组反馈提出的额外对照要求，本文稿给每个 NR 发射端加入 LBT 门限（TRP 在每个下行时隙前、CPE 在每个上行时隙前检测），采用 NR-U 类阈值：每 20 MHz -72 dBm（100 MHz 载波上为 -65 dBm），每时隙检测一次、无随机退避。仿真设置据幻灯片：U-NII-7（6785 MHz），100 MHz NR 载波，7 个站点，36 dBm EIRP；Wi-Fi 为 802.11be、80 MHz（信道 167），与 NR 同频，7 个 AP x 每 AP 4 个 STA，FTP-3 流量每 AP 1 Gbps（80% 下行）；四种部署（A：室外 CPE 经墙至室内 AP；B：屋顶 CPE 经墙至室内 AP；C：室内同房间；D：屋顶 CPE 与吊线安装的室外 AP）。无 NR 的单 AP 基准为下行 731.7 Mbps、上行 195.7 Mbps。

以 1 Gbps offered load 为分母，聚合（DL+UL）吞吐占比，LBT 关闭 / 开启：A 82% / 84%，B 70% / 82%，C 17% / 79%，D 24% / 70%（独立基准 93%）。在 C、D（NR 超过 ED 门限）LBT 关闭时每 AP 约 25 万 / 22.8 万次 ED 退避，平均时延约 2.0 s / 1.9 s，LBT 开启后降至 425 ms / 416 ms。文稿的结论是：强制 LBT 仍是主要的监管补救手段，但 802.11 可能无法影响其他技术，因此给出“鲁棒 Wi-Fi”方向：先识别干扰源（时域活动模式、占用带宽、到达方向；举例为 6G-UB 的调度时隙、Bluetooth 625 微秒时隙与 1-2 MHz 跳频、UWB 约 500 MHz 的短突发），再调整 EDCA、空间复用（类 OBSS-PD）、混合波束成形零陷、工作带宽切换与调度接入。文末给出 WIN PAR（5.5 与 5.2.b）和 CSD（1.2.1）的拟议文本，以及“是否将对非在位者系统间干扰的鲁棒性作为 WIN 目标”的 straw poll。

## Key technical points (EN)

- Adds an NR-U-style LBT gate (-72 dBm per 20 MHz; -65 dBm over the 100 MHz carrier; once per slot, no random back-off) to every NR TRP and CPE as the new reference point requested by the group.
- Aggregate Wi-Fi goodput, LBT OFF vs ON (share of 1 Gbps offered): A 82%/84%, B 70%/82%, C 17%/79%, D 24%/70%; standalone 93%.
- ED deferrals per AP in C/D: about 250k / 228k (LBT OFF) vs 34k / 44k (LBT ON); average DL/UL latency about 2024 / 1942 ms vs 425 / 416 ms.
- Two harm categories restated: channel-access denial via CCA-ED, and interference (mid-PPDU A-MPDU corruption, raised interference floor lowering MCS).
- Why current tools fall short (as stated): EDCA assumes everyone contends; OBSS-PD and NPCA act only on a decoded Wi-Fi preamble; puncturing/DSO assume narrowband interference.
- Proposed "robust Wi-Fi" steps: identify the source by time/frequency/space signature, then adapt EDCA, spatial reuse, hybrid beamforming, bandwidth switching beyond CSA, scheduled access around the aggressor's pattern.
- Proposed PAR 5.5 / 5.2.b and CSD 1.2.1 wording plus an SP on adopting robustness to non-incumbent inter-system interference as a WIN target.

## Key technical points (ZH)

- 为每个 NR TRP 与 CPE 加入 NR-U 类 LBT 门限（每 20 MHz -72 dBm；100 MHz 载波上 -65 dBm；每时隙一次、无随机退避），作为工作组要求的新对照。
- Wi-Fi 聚合吞吐，LBT 关闭 vs 开启（占 1 Gbps offered load 比例）：A 82%/84%，B 70%/82%，C 17%/79%，D 24%/70%；独立基准 93%。
- C/D 场景每 AP 的 ED 退避次数：LBT 关闭约 25 万 / 22.8 万，开启后 3.4 万 / 4.4 万；平均 DL/UL 时延约 2024 / 1942 ms 降至 425 / 416 ms。
- 重申两类损害：经 CCA-ED 的信道接入被拒，以及干扰（PPDU 中途的 A-MPDU 损坏、干扰底噪抬高导致 MCS 下降）。
- 文稿指出现有手段的不足：EDCA 假设所有节点都竞争；OBSS-PD 与 NPCA 只对可解码的 Wi-Fi 前导码生效；打孔/DSO 假设窄带干扰。
- 拟议“鲁棒 Wi-Fi”步骤：按时/频/空特征识别干扰源，再调整 EDCA、空间复用、混合波束成形、超越 CSA 的带宽切换、围绕干扰源活动规律的调度接入。
- 给出 PAR 5.5 / 5.2.b 与 CSD 1.2.1 的拟议措辞，并以 SP 询问是否将对非在位者系统间干扰的鲁棒性列为 WIN 目标。

## Why it matters / what's new (EN)

This is the follow-up to the September non-LBT simulation entry (2026-09-16_ieee-mentor-nr-wifi-non-lbt-coexistence-sim): the group asked for an LBT-ON reference, and this deck supplies it with the same four-scenario framework, quantifying how much of the harm LBT removes (for example C: 17% to 79%). It also shifts from describing harm to proposing a WIN scope item, with draft PAR/CSD text and a straw poll, so the outcome of that poll is a useful item to watch. The figures are simulation results from the contributors, not measurements.

## Why it matters / what's new (ZH)

本文稿是 9 月非 LBT 仿真条目（2026-09-16_ieee-mentor-nr-wifi-non-lbt-coexistence-sim）的后续：工作组要求补充 LBT 开启的对照，本文稿沿用同样的四场景框架给出结果，量化了 LBT 消除损害的程度（例如场景 C：17% 提升至 79%）。同时它由“描述损害”转向提出 WIN 范围条目，附带 PAR/CSD 拟议文本与 straw poll，该投票结果值得跟踪。文中数据为提交方的仿真结果，并非实测。

## Images

None.
