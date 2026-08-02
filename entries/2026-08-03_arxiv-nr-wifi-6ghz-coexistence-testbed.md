---
id: 2026-08-03_arxiv-nr-wifi-6ghz-coexistence-testbed
date_published: 2026-07-30
date_found: 2026-08-03
type: academic-paper
title_en: "Coexistence of 5G NR and Wi-Fi 6E/7 at 6 GHz: hardware-in-the-loop interference measurements say VLP Wi-Fi cannot hurt licensed NR"
title_zh: "6 GHz 频段 5G NR 与 Wi-Fi 6E/7 共存实测：硬件在环干扰测量表明 VLP Wi-Fi 无法伤及授权 NR 接收机"
url: "https://arxiv.org/abs/2607.28213"
source_quality: full
topics: [6GHz, 5G-NR, WiFi-6E, coexistence, VLP, LBT, spectrum]
topic_primary: spectrum-policy
topics_secondary: [wifi7-deployment]
novelty_score: 3
---

## Summary (EN)

A University of Surrey (ICS/5G-6G Innovation Centre, Tafazolli group) team presents the first hardware-in-the-loop study of Wi-Fi 6E/7 interference into *both* the gNB uplink and UE downlink receiver chains of a licensed 5G NR system operating in the upper 6 GHz band (n102, 5925–6425 MHz). The testbed combines an OpenAirInterface 5G stack on USRP X310 SDRs (White Rabbit PTP-synchronised), a commercial TP-Link AXE5400 Wi-Fi 6E AP on 80 MHz channel 9 (~5985 MHz), and a passive RF combiner that injects controlled, calibrated Wi-Fi power into the NR receive paths while the Wi-Fi network carries sustained bidirectional load (three 8K video streams plus six 10 Gbit file transfers).

The headline result is a clean empirical protection threshold: neither NR receiver degrades measurably until injected Wi-Fi power exceeds −75 dBm. The UE downlink loses 10–25% throughput at −70 to −65 dBm and suffers radio-link failures above −60 dBm; the gNB uplink shows only a 1–2 dB SNR drop between −75 and −65 dBm, collapsing (6 dB SNR drop, 50% throughput loss) only at −64 dBm. Beacon-only Wi-Fi — the idle-network case — causes no impact at all up to −55 dBm.

The paper then converts these thresholds into coexistence geometry. A full-load gNB (66 dBm/20 MHz EIRP) creates a listen-before-talk exclusion zone of ~685 m within which a compliant VLP (very-low-power, 14 dBm EIRP) Wi-Fi device senses the gNB and defers, while the maximum distance at which that VLP device could deliver −75 dBm into an NR receiver is only ~112 m — a 6.1× spatial safety factor (4.9× under SSB-only loading). The authors conclude that the standard −62 dBm LBT energy-detection threshold is sufficient for n102 coexistence: a compliant VLP device vacates the channel long before its emissions could degrade either receiver, corroborating ECC Report 366's simulation-based findings with hardware-validated numbers.

## Summary (ZH)

萨里大学（ICS/5G-6G 创新中心，Tafazolli 团队）发表了首个同时覆盖 gNB 上行与 UE 下行接收链的硬件在环研究，测量 Wi-Fi 6E/7 对运行于上 6 GHz 频段（n102，5925–6425 MHz）的授权 5G NR 系统的干扰。测试平台由 USRP X310 SDR 上的 OpenAirInterface 5G 协议栈（White Rabbit PTP 同步）、商用 TP-Link AXE5400 Wi-Fi 6E AP（80 MHz 信道 9，约 5985 MHz）以及无源射频合路器组成；后者在 Wi-Fi 网络承载持续双向业务（3 路 8K 视频流 + 6 个 10 Gbit 文件传输）的同时，向 NR 接收路径注入受控、已校准的 Wi-Fi 功率。

核心结果是一个干净的经验保护门限：注入 Wi-Fi 功率超过 −75 dBm 之前，两个 NR 接收机均无可测退化。UE 下行在 −70 至 −65 dBm 时损失 10–25% 吞吐，高于 −60 dBm 时出现无线链路失败；gNB 上行在 −75 至 −65 dBm 区间仅有 1–2 dB SNR 下降，直到 −64 dBm 才崩塌（SNR 降 6 dB、吞吐损失 50%）。仅信标的空闲 Wi-Fi 场景在 −55 dBm 以内完全无影响。

论文进一步把这些门限换算成共存几何：满载 gNB（66 dBm/20 MHz EIRP）产生约 685 米的先听后发（LBT）排除区，合规 VLP（甚低功率，14 dBm EIRP）Wi-Fi 设备在区内会侦听到 gNB 并退避；而该 VLP 设备能把 −75 dBm 送达 NR 接收机的最大距离仅约 112 米——空间安全系数 6.1 倍（仅 SSB 负载时为 4.9 倍）。作者结论：标准的 −62 dBm LBT 能量检测门限对 n102 共存已经足够，为 ECC 报告 366 的仿真结论提供了硬件实证。

## Key technical points (EN)

- First HIL study covering both NR victim paths: Wi-Fi → UE downlink (C1) and Wi-Fi → gNB uplink (C2), with progressive power sweeps refined to 1–2 dB steps near thresholds.
- Protection threshold: no measurable degradation below −75 dBm injected Wi-Fi power at either receiver; beacon-only interference harmless up to −55 dBm.
- UE DL at 85 Mbit/s: 10–25% throughput loss at −70…−65 dBm, >50% loss and radio-link failures above −60 dBm; gNB UL: 6 dB SNR drop and 50% throughput loss at −64 dBm.
- Coexistence geometry: 685 m LBT exclusion zone (full-load gNB) vs 112 m VLP harm radius → 6.1× spatial safety margin; a 23 dBm UE triggers VLP deferral at ~43 m.
- Policy conclusion: the −62 dBm LBT ED threshold is sufficient for VLP Wi-Fi / licensed NR coexistence in band n102; real VLP duty cycles (3–5%) make the continuous-injection results a conservative worst case.

## Key technical points (ZH)

- 首个同时覆盖两条 NR 受害路径的 HIL 研究：Wi-Fi → UE 下行（C1）与 Wi-Fi → gNB 上行（C2），功率扫描在门限附近细化到 1–2 dB 步进。
- 保护门限：注入功率低于 −75 dBm 时两个接收机均无可测退化；仅信标干扰在 −55 dBm 以内无任何影响。
- 85 Mbit/s UE 下行：−70…−65 dBm 时吞吐损失 10–25%，高于 −60 dBm 时损失超 50% 并出现链路失败；gNB 上行在 −64 dBm 时 SNR 降 6 dB、吞吐损失 50%。
- 共存几何：685 米 LBT 排除区（满载 gNB）对 112 米 VLP 危害半径 → 6.1 倍空间安全裕度；23 dBm 的 UE 在约 43 米处即触发 VLP 退避。
- 政策结论：−62 dBm LBT 能量检测门限对 n102 频段 VLP Wi-Fi 与授权 NR 共存已经足够；真实 VLP 占空比（3–5%）使连续注入结果成为保守的最坏情形。

## Why it matters / what's new (EN)

The 6 GHz "Wi-Fi vs licensed mobile" fight is the KB's most active spectrum-policy thread — UK Ofcom's full-band hybrid framework (2026-07-22_uk-ofcom-full-band-6ghz-adoption), South Africa's standard-power AFC move (2026-07-10_south-africa-standard-power-6ghz-afc), and Costa Rica's full-band AFC (2026-07-22_costa-rica-full-band-6ghz-afc) all hinge on assumptions about how much unlicensed Wi-Fi actually hurts licensed systems sharing the band. This paper replaces those assumptions with hardware-measured thresholds and concludes the standard LBT mechanism already provides a ~6× spatial safety factor for VLP devices — direct empirical ammunition for the "sharing works" side of the European upper-6 GHz debate, and the first entry in this KB to quantify NR-receiver-side protection with a real 5G stack rather than simulation.

## Why it matters / what's new (ZH)

6 GHz「Wi-Fi 对授权移动」之争是本知识库最活跃的频谱政策主线——英国 Ofcom 全频段混合框架（2026-07-22_uk-ofcom-full-band-6ghz-adoption）、南非标准功率 AFC（2026-07-10_south-africa-standard-power-6ghz-afc）、哥斯达黎加全频段 AFC（2026-07-22_costa-rica-full-band-6ghz-afc）都建立在「非授权 Wi-Fi 究竟会对共享频段的授权系统造成多大伤害」的假设之上。本文用硬件实测门限取代这些假设，并得出标准 LBT 机制已为 VLP 设备提供约 6 倍空间安全系数的结论——为欧洲上 6 GHz 之争中「共享可行」一方提供了直接的实证弹药，也是本库首个用真实 5G 协议栈（而非仿真）量化 NR 接收机侧保护的条目。

## Images

![Testbed architecture: OAI 5G stack, USRP X310 nodes and passive RF combiner | 测试平台架构：OAI 5G 协议栈、USRP X310 节点与无源射频合路器](https://arxiv.org/html/2607.28213v1/x1.png)
![Spectral overlap of the 40 MHz NR carrier and 80 MHz Wi-Fi channel at ~5995 MHz | 40 MHz NR 载波与 80 MHz Wi-Fi 信道在约 5995 MHz 处的频谱重叠](https://arxiv.org/html/2607.28213v1/x2.png)
![UE downlink performance vs injected Wi-Fi interference power | UE 下行性能随注入 Wi-Fi 干扰功率的变化](https://arxiv.org/html/2607.28213v1/x3.png)
![gNB uplink performance vs injected Wi-Fi interference power | gNB 上行性能随注入 Wi-Fi 干扰功率的变化](https://arxiv.org/html/2607.28213v1/x4.png)
