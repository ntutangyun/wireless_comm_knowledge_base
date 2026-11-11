---
id: 2026-11-11_ieee-mentor-win-sg-panasonic-time-varying-interference-par-need-dcn-2282
date_published: 2026-11-10
date_found: 2026-11-11
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WIN SG: Interference Considerations for WIN PAR — time-varying interference and proposed PAR 5.5 text (DCN 11-26-2282r1, Panasonic)"
title_zh: "IEEE 802.11 WIN SG：WIN PAR 的干扰考量——时变干扰与拟议 PAR 5.5 文本（DCN 11-26-2282r1，松下）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2282&is_year=2026"
source_quality: full
topics: [WIN, Wi-Fi 9, PAR, interference, OBSS, latency predictability, tail latency]
topic_primary: wifi8-uhr
topics_secondary: [rtwt-latency]
novelty_score: 2
---

## Summary (EN)

DCN 11-26-2282r1, "Interference Considerations for WIN PAR" (Rithwik Premanand, Panasonic; WIN SG; 13 slides; r1 uploaded 10 November 2026, title-slide date 2026-11-10), discusses the relevance of time-varying interference to WIN use cases and performance requirements, identifies potential causes, and proposes a clarification to Section 5.5 (Need for the Project) of the WIN draft PAR (cited as 11-26/1834r0). The slides recall that the existing 5.5 text already lists emerging applications (physical AI, humanoid robotics, autonomous industrial operations), OBSS, in-BSS and in-device interference, uplink-heavy bursty delay-sensitive feedback traffic, and needs for higher throughput and better latency predictability.

The contribution lists causes of time-varying interference: OBSS transmissions with changing traffic activity, in-BSS simultaneous-transmission activity and residual inter-user interference, intermittent in-device co-located radios, and bursty or frequency-hopping transmissions from other systems. It argues that application traffic characteristics do not describe the temporal behaviour of interference, and that similar average interference levels can have different temporal structure (burst duration, inter-burst interval, duty cycle).

A simplified packet-overlap model illustrates the point: two periodic interference patterns with the same 20% duty cycle, 10 dB ON-state INR, 20 dB desired-link SNR and 1 ms packet airtime (so the same nominal mean-power SINR of 15 dB), differing only in timing (0.5 ms ON / 2 ms OFF versus 5 ms ON / 20 ms OFF). With 1200-byte payloads and an interference-free throughput of about 8 Mb/s, and counting a packet as failed if it overlaps any ON period, delivered throughput is 3.20 Mb/s for 0.5 ms bursts and 6.08 Mb/s for 5 ms bursts (a table also lists 4.80 Mb/s at 1 ms and 6.24 Mb/s at 10 ms). The proposed 5.5 addition states that the temporal characteristics of interference, including intermittent activity and burst duration, may affect WLAN throughput and latency predictability even under similar average interference levels. The last slide has two straw polls: one on adding 'interference from one or more OBSSs' wording to the first sentence of 5.5, and one on adding the temporal-characteristics sentence.

## Summary (ZH)

DCN 11-26-2282r1《Interference Considerations for WIN PAR》（Rithwik Premanand，松下；WIN SG；共 13 页；r1 于 2026 年 11 月 10 日上传，标题页日期 2026-11-10）讨论时变干扰与 WIN 用例及性能需求的相关性，指出可能成因，并建议澄清 WIN 草案 PAR（引用为 11-26/1834r0）第 5.5 节（项目必要性）。幻灯片回顾，现有 5.5 节已列出新兴应用（物理 AI、人形机器人、自主工业运行）、OBSS、BSS 内与设备内干扰、上行为主且突发、对时延敏感的反馈流量，以及更高吞吐与更可预测时延的需求。

文稿列出时变干扰的成因：活动随时间变化的 OBSS 传输、BSS 内同时传输活动与残余用户间干扰、同设备内共置无线电的间歇工作，以及其他系统的突发或跳频传输。其论点是：应用流量特征并不描述干扰的时间行为，而平均干扰水平相近时，干扰的时间结构（突发时长、突发间隔、占空比）可以不同。

一个简化的分组重叠模型说明了这一点：两种周期性干扰模式具有相同的 20% 占空比、10 dB 的 ON 状态 INR、20 dB 的期望链路 SNR 和 1 ms 分组空口时间（因此标称平均功率 SINR 同为 15 dB），仅时间结构不同（0.5 ms 开 / 2 ms 关，对比 5 ms 开 / 20 ms 关）。载荷 1200 字节、无干扰吞吐约 8 Mb/s，只要分组与任何 ON 段重叠即判为失败，则 0.5 ms 突发的有效吞吐为 3.20 Mb/s，5 ms 突发为 6.08 Mb/s（表中另列 1 ms 为 4.80 Mb/s、10 ms 为 6.24 Mb/s）。拟议的 5.5 节增补写明：干扰的时间特性，包括间歇活动与突发时长，即使在平均干扰水平相近时，也可能影响 WLAN 吞吐与时延可预测性。末页有两个 straw poll：一是在 5.5 首句中加入“来自一个或多个 OBSS 的干扰”的措辞，二是加入关于干扰时间特性的句子。

## Key technical points (EN)

- Target: WIN draft PAR 5.5 (Need for the Project); adds temporal characteristics of interference to the stated need.
- Causes listed: OBSS, in-BSS, in-device (intermittent co-located radios), other over-the-air bursty or frequency-hopping systems.
- Model: same 20% duty cycle, 15 dB nominal SINR, packet counted failed on any overlap with an ON period.
- Result: about 8 Mb/s interference-free; 3.20 Mb/s (0.5 ms bursts), 4.80 (1 ms), 6.08 (5 ms), 6.24 (10 ms).
- Proposed additions (bold on slide 11): 'interference from one or more OBSSs' in the existing first sentence, and a new sentence that the temporal characteristics of interference, including intermittent activity and burst duration, may affect WLAN throughput and latency predictability even under similar average interference levels; the existing worst-case latency and jitter sentence is unchanged.
- Two SPs: one per proposed addition.

## Key technical points (ZH)

- 对象：WIN 草案 PAR 5.5（项目必要性）；在既有必要性表述中加入干扰的时间特性。
- 所列成因：OBSS、BSS 内、设备内（共置无线电间歇工作）、其他空口突发或跳频系统。
- 模型：同为 20% 占空比、标称 SINR 15 dB，分组与 ON 段有任何重叠即判失败。
- 结果：无干扰约 8 Mb/s；0.5 ms 突发 3.20 Mb/s，1 ms 4.80，5 ms 6.08，10 ms 6.24。
- 拟议增补（幻灯片 11 中加粗）：在既有首句中加入“来自一个或多个 OBSS 的干扰”，并新增一句：干扰的时间特性（包括间歇活动与突发时长）即使在平均干扰水平相近时也可能影响 WLAN 吞吐与时延可预测性；既有关于最坏情况时延与抖动的句子未改动。
- 两个 SP：每项拟议增补各一个。

## Why it matters / what's new (EN)

The deck is one of several WIN SG inputs on PAR wording in recent weeks (the KB also holds the WIN SG vehicular-requirements and draft PAR/CSD text digest, 2026-11-04_ieee-mentor-win-sg-vehicular-operation-requirements-par-csd-draft-text-digest, and the Charter coexistence deck 2026-11-11_ieee-mentor-win-sg-charter-lbt-on-off-nr-wifi-coexistence-robust-wifi9-dcn-1927). Its contribution is a narrow one: a worked example, from a simplified model rather than a full MAC simulation, of why equal average interference can give different throughput, used to motivate a one-sentence PAR addition.

## Why it matters / what's new (ZH)

本文稿是近几周多份关于 PAR 措辞的 WIN SG 输入之一（KB 另有 WIN SG 车载需求与 PAR/CSD 草案文本摘要 2026-11-04_ieee-mentor-win-sg-vehicular-operation-requirements-par-csd-draft-text-digest，以及 Charter 共存文稿 2026-11-11_ieee-mentor-win-sg-charter-lbt-on-off-nr-wifi-coexistence-robust-wifi9-dcn-1927）。其贡献范围较窄：用简化的模型（而非完整 MAC 仿真）给出一个算例，说明平均干扰相同却可能得到不同吞吐，并以此支持在 PAR 中增加一句话。

## Images

None.
