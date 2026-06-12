---
id: 2026-06-12_imec-802154ab-nba-receiver-rfic2026
date_published: 2026-06-09
date_found: 2026-06-12
type: industry-news
title_en: "imec Unveils World's First IEEE 802.15.4ab-Compliant Narrowband-Assist UWB Receiver: 4x Ranging Distance at <6 mW"
title_zh: "imec 发布全球首款符合 IEEE 802.15.4ab 的窄带辅助 UWB 接收机：测距距离提升 4 倍、功耗低于 6 mW"
url: "https://www.iotinsider.com/industries/communications/imec-unveils-worlds-first-ieee-802-15-4ab-uwb-receiver/"
source_quality: full
topics: [802.15.4ab, UWB, NBA, ranging, RFIC, imec]
topic_primary: uwb-ranging
topics_secondary: [uwb-fi-ra]
technology: uwb
novelty_score: 3
---

## Summary (EN)
At the IEEE MTT-S RF Integrated Circuits Symposium (RFIC, San Francisco, June 2026), the Belgian research institute imec presented what it describes as the world's first narrowband receiver chip compliant with the upcoming IEEE 802.15.4ab UWB standard. The 22 nm CMOS receiver implements the standard's narrowband assistance (NBA) radio path — the companion narrowband link that 802.15.4ab adds alongside the impulse-radio UWB channel to coordinate ranging sessions cheaply — and consumes less than 6 mW.

The headline claim is a fourfold increase in UWB ranging distance attributable to the NBA-assisted architecture, and a 32-fold overall ranging improvement when the full transceiver architecture is compared against conventional implementations. The receiver achieves a 3.2 dB noise figure and a 9 dB dynamic-range improvement over state-of-the-art designs. Robustness against co-located Wi-Fi is a central design goal: the front end combines a second-order transimpedance amplifier with precision filtering and an adaptive clip detector that monitors interference levels and automatically engages additional filtering and gain control when a strong interferer appears, tolerating Wi-Fi blockers at roughly −32 dBm.

The chip slots into a rapidly forming 802.15.4ab silicon ecosystem the KB has been tracking: STMicroelectronics' ST64UWB (the first fully integrated 4ab SoC with NBA), CEVA's licensable 4ab IP, and Calterah's Dubhe SoC. imec's contribution is the research-grade receiver demonstrating how much of the standard's promised link-budget and coexistence gain the NBA path can actually deliver in silicon.

## Summary (ZH)
在 IEEE MTT-S 射频集成电路研讨会（RFIC，旧金山，2026 年 6 月）上，比利时研究机构 imec 展示了其描述为全球首款符合即将发布的 IEEE 802.15.4ab UWB 标准的窄带接收机芯片。该 22 nm CMOS 接收机实现了标准中的窄带辅助（NBA）射频路径——802.15.4ab 在脉冲无线电 UWB 信道之外新增的伴随窄带链路，用于以低成本协调测距会话——功耗低于 6 mW。

核心指标是：得益于 NBA 辅助架构，UWB 测距距离提升 4 倍；完整收发机架构与传统实现相比，整体测距性能提升 32 倍。接收机噪声系数为 3.2 dB，动态范围较最先进设计提升 9 dB。对共存 Wi-Fi 的鲁棒性是其核心设计目标：前端将二阶跨阻放大器与精密滤波结合，并配备自适应削波检测器，实时监测干扰水平，在强干扰出现时自动启用额外滤波与增益控制，可容忍约 −32 dBm 的 Wi-Fi 阻塞信号。

该芯片融入了本知识库一直跟踪的、正在快速成形的 802.15.4ab 硅生态：意法半导体的 ST64UWB（首款集成 NBA 的完整 4ab SoC）、CEVA 的可授权 4ab IP、加特兰的 Dubhe SoC。imec 的贡献在于以研究级接收机实证 NBA 路径在硅片上究竟能兑现多少标准承诺的链路预算与共存增益。

## Key technical points (EN)
- World-first IEEE 802.15.4ab-compliant narrowband-assist (NBA) receiver chip; 22 nm CMOS, <6 mW.
- 4x UWB ranging-distance increase from the NBA-assisted design; 32x overall ranging improvement for the full transceiver architecture vs conventional implementations.
- 3.2 dB noise figure; 9 dB dynamic-range improvement over state-of-the-art.
- Wi-Fi coexistence: adaptive clip detector + second-order transimpedance amplifier + precision filtering; tolerates ~−32 dBm Wi-Fi blockers by auto-engaging extra filtering/gain control.
- Presented at IEEE MTT-S RFIC Symposium, San Francisco, June 2026 (Anoop Bhat, senior researcher).

## Key technical points (ZH)
- 全球首款符合 IEEE 802.15.4ab 的窄带辅助（NBA）接收机芯片；22 nm CMOS，功耗 <6 mW。
- NBA 辅助设计带来 4 倍 UWB 测距距离提升；完整收发机架构较传统实现整体测距性能提升 32 倍。
- 噪声系数 3.2 dB；动态范围较最先进设计提升 9 dB。
- Wi-Fi 共存：自适应削波检测器 + 二阶跨阻放大器 + 精密滤波；通过自动启用额外滤波/增益控制容忍约 −32 dBm 的 Wi-Fi 阻塞。
- 2026 年 6 月在旧金山 IEEE MTT-S RFIC 研讨会发表（高级研究员 Anoop Bhat）。

## Why it matters / what's new (EN)
The KB's 802.15.4ab thread so far has been commercial silicon announcements (2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist, 2026-05-26_ceva-waves-uwb-ip-802154ab, 2026-06-04_calterah-dubhe-uwb-soc-802154ab) quoting standard-level range claims. This entry adds the first published receiver-level measurement set for the NBA path itself — noise figure, dynamic range, blocker tolerance — and quantifies the Wi-Fi-coexistence mechanism, which is the key deployment question for UWB ranging in 2.4/5/6 GHz-dense environments.

## Why it matters / what's new (ZH)
本知识库的 802.15.4ab 线索此前均为商业芯片发布（2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist、2026-05-26_ceva-waves-uwb-ip-802154ab、2026-06-04_calterah-dubhe-uwb-soc-802154ab），引用的是标准层面的距离声称。本条目首次提供了 NBA 路径本身的接收机级实测数据——噪声系数、动态范围、阻塞容限——并量化了 Wi-Fi 共存机制，而这正是 UWB 测距在 2.4/5/6 GHz 密集环境中部署的关键问题。

## Images
![imec's IEEE 802.15.4ab narrowband-assist UWB receiver chip | imec 的 IEEE 802.15.4ab 窄带辅助 UWB 接收机芯片](https://www.iotinsider.com/wp-content/uploads/2026/06/Imec_UWB.jpg)
