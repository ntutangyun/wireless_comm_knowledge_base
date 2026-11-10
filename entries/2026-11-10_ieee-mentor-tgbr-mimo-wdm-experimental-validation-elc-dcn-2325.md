---
id: 2026-11-10_ieee-mentor-tgbr-mimo-wdm-experimental-validation-elc-dcn-2325
date_published: 2026-11-09
date_found: 2026-11-10
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbr: Experimental validation of MIMO-WDM towards multi-domain channel aggregation in Enhanced Light Communications (DCN 11-26-2325r0, NYUAD)"
title_zh: "IEEE 802.11 TGbr：增强光通信（ELC）中面向多域信道聚合的 MIMO-WDM 实验验证（DCN 11-26-2325r0，纽约大学阿布扎比分校）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2325"
source_quality: full
topics: [802.11br, TGbr, ELC, LiFi, MIMO-WDM, channel aggregation, light communications]
topic_primary: wifi8-uhr
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

DCN 11-26-2325r0 (a same-titled DCN 2322r0 was also uploaded the same morning), "Experimental Validation of MIMO-WDM towards Multi-Domain Channel Aggregation", is a 5-slide TGbr deck by Amir Masood Khalid, Gyorkem Mutlu, Murat Uysal and Mahmoud Rasras (NYUAD Wireless Center), uploaded on 9 November 2026 at 09:27 ET. The abstract states it experimentally validates MIMO-WDM for multi-domain channel aggregation in IEEE 802.11br Enhanced Light Communications (ELC), building on previously proposed channel-mapping architectures, by combining spatial and wavelength multiplexing into parallel optical channels.

The setup uses a tri-band Wi-Fi 7 chipset with an IF-optical-front-end interface: two 5.2 GHz streams (local oscillators at 5.154 and 5.210 GHz) are up-converted onto separate optical carriers, one near 850 nm and one near 940 nm (VCSELs with matched optical filters, 40 nm FWHM), received by optical front ends and down-converted into a tri-band Wi-Fi 7 USB STA over a 180 cm link, with an Ethernet-attached iperf server. The slides report an overall chain EVM penalty of about 2.5 dB and no observable crosstalk between the two wavelengths, with 80 MHz channels.

Reported throughput: SISO cable-conducted 520 Mbps (720 Mbps PHY), SISO LiFi 390 Mbps (720 PHY), 2x2 MIMO cable-conducted 950 Mbps (1442 PHY, limited by the Gigabit Ethernet interface), 2x2 MIMO LiFi 640 Mbps (1050 PHY). The summary slide states a 66.7% throughput improvement over an unspecified baseline configuration; the deck's own table gives 640 vs 390 Mbps (about +64%) for 2x2 MIMO LiFi vs SISO LiFi. The summary also notes the 80 MHz demonstration was constrained by the Gigabit Ethernet interface (160 MHz at 5.2 GHz and 320 MHz at 6 GHz are planned), proposes WDM-MIMO as an optional channel-aggregation technique for consideration in the 802.11br draft, and lists FDM combined with WDM-MIMO and MLO as future work.

## Summary (ZH)

DCN 11-26-2325r0（同一天上午还上传了同题的 DCN 2322r0）《Experimental Validation of MIMO-WDM towards Multi-Domain Channel Aggregation》是 Amir Masood Khalid、Gyorkem Mutlu、Murat Uysal、Mahmoud Rasras（NYUAD 无线中心）的 5 页 TGbr 文稿，于 2026 年 11 月 9 日美东 09:27 上传。摘要称，该文稿在 IEEE 802.11br 增强光通信（ELC）中对用于多域信道聚合的 MIMO-WDM 进行实验验证，基于此前提出的信道映射架构，将空间复用与波长复用结合，形成并行光传输信道。

实验装置采用三频 Wi-Fi 7 芯片组并配有 IF-光前端接口：两路 5.2 GHz 流（本振 5.154 与 5.210 GHz）被上变频到两个独立光载波上，一个约 850 nm、一个约 940 nm（VCSEL 配匹配光滤波器，半高宽 40 nm），经光前端接收并下变频后进入三频 Wi-Fi 7 USB STA，链路长 180 cm，并连接以太网 iperf 服务器。幻灯片报告整条链路 EVM 代价约 2.5 dB，两个波长之间未观察到串扰，信道带宽为 80 MHz。

报告的吞吐量：SISO 线缆直连 520 Mbps（PHY 720 Mbps）、SISO LiFi 390 Mbps（PHY 720）、2x2 MIMO 线缆直连 950 Mbps（PHY 1442，受千兆以太网接口限制）、2x2 MIMO LiFi 640 Mbps（PHY 1050）。总结页称吞吐量相对未具体说明的基线配置提升 66.7%；文稿自身表格中 2x2 MIMO LiFi 与 SISO LiFi 为 640 对 390 Mbps（约 +64%）。总结还说明 80 MHz 演示受千兆以太网接口限制（计划在 5.2 GHz 做 160 MHz、在 6 GHz 做 320 MHz），提议将 WDM-MIMO 作为可选信道聚合技术纳入 802.11br 草案考虑，并把 FDM 与 WDM-MIMO、MLO 结合列为后续工作。

## Key technical points (EN)

- Two 5.2 GHz Wi-Fi 7 streams mapped to two optical wavelengths (~850 nm and ~940 nm VCSELs), 40 nm FWHM matched filters, 180 cm link, 80 MHz channel.
- Chain EVM penalty about 2.5 dB; no observable inter-wavelength crosstalk.
- Throughput: SISO LiFi 390 Mbps; 2x2 MIMO LiFi 640 Mbps; cable-conducted 2x2 950 Mbps (Gigabit Ethernet-limited).
- Stated 66.7% improvement over an unspecified baseline (table: 640 vs 390 Mbps); proposed as an optional channel-aggregation technique for the 802.11br draft.
- Future work: FDM combined with WDM-MIMO and MLO; 160 MHz (5.2 GHz) and 320 MHz (6 GHz) radios.

## Key technical points (ZH)

- 5.2 GHz Wi-Fi 7 的两路流映射到两个光波长（约 850 nm 与 940 nm VCSEL），40 nm 半高宽匹配滤波器，链路 180 cm，80 MHz 信道。
- 整链路 EVM 代价约 2.5 dB；未观察到波长间串扰。
- 吞吐量：SISO LiFi 390 Mbps；2x2 MIMO LiFi 640 Mbps；线缆直连 2x2 为 950 Mbps（受千兆以太网限制）。
- 文稿称相对未说明的基线提升 66.7%（表中为 640 对 390 Mbps），并提议作为 802.11br 草案的可选信道聚合技术。
- 后续工作：FDM 与 WDM-MIMO 及 MLO 结合；5.2 GHz 160 MHz 与 6 GHz 320 MHz 射频。

## Why it matters / what's new (EN)

This deck reports a bench demonstration in which an off-the-shelf Wi-Fi 7 chipset's two spatial streams are carried on two optical wavelengths. The throughput figures come from an 80 MHz demonstration limited by the Ethernet interface and are the authors' own bench numbers; the deck makes a proposal for optional inclusion but no adoption is implied. Related TGbr context is in the earlier TGbr entries in this KB.

## Why it matters / what's new (ZH)

该文稿给出一项台架演示，将现成 Wi-Fi 7 芯片组的两路空间流承载在两个光波长上。吞吐数字来自受以太网接口限制的 80 MHz 演示，是作者自己的台架数据；文稿提出的是可选纳入建议，并不意味着已被采纳。更多 TGbr 背景见本知识库此前的 TGbr 条目。

## Images

None.
