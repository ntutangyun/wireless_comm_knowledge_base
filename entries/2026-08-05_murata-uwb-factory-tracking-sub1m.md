---
id: 2026-08-05_murata-uwb-factory-tracking-sub1m
date_published: 2026-07-09
date_found: 2026-08-05
type: product
title_en: "Murata launches UWB factory tracking system with sub-1-meter accuracy, 100+ receivers already live in its own plants"
title_zh: "村田推出亚米级 UWB 工厂定位系统：自家工厂已部署 100+ 接收器投入实际运行"
url: "https://jp.ibtimes.com/murata-launches-uwb-factory-tracking-system-sub-1-meter-accuracy-102554"
source_quality: full
technology: uwb
topics: [UWB, RTLS, indoor-positioning, industrial-IoT]
topic_primary: uwb-ranging
novelty_score: 1
---

## Summary (EN)

Murata Manufacturing announced on July 9, 2026 a high-precision UWB indoor positioning system for factories and logistics sites. In evaluations at Murata's own plants — including obstacle-heavy indoor environments — the system held positioning error under 1 meter (with the usual caveat that accuracy varies with installation environment). The system is not a lab demo: Murata reports it is already in practical operation at its own factories with more than 100 receivers installed, used to analyze worker traffic flows and improve operational efficiency.

The differentiating engineering claim is a proprietary receiver antenna designed to reduce sensitivity to installation angle. Conventional UWB RTLS deployments require careful anchor orientation surveys; an angle-tolerant antenna cuts the site-engineering cost that typically dominates industrial RTLS rollouts. Murata leverages UWB's wide bandwidth for time-of-flight measurement at the several-to-tens-of-centimeters level, then reports sub-1-m system-level accuracy in cluttered production floors.

Target use cases are worker movement tracking, goods/asset location management in factories and warehouses, and workflow management under labor shortages. Murata exhibited the system at the 52nd Plant Maintenance Show (Maintenance Resilience 2026, Tokyo Big Sight, July 15–17). The article does not disclose the UWB standard revision, band plan, or whether ranging is TDoA or TWR.

## Summary (ZH)

村田制作所（Murata）于 2026 年 7 月 9 日发布面向工厂与物流现场的高精度 UWB 室内定位系统。在村田自家工厂（含障碍物密集的室内环境）的评估中，系统将定位误差控制在 1 米以内（精度随安装环境不同而有差异）。该系统并非实验室演示：村田表示已在自家工厂投入实际运行，安装超过 100 台接收器，用于分析员工动线并改善运营效率。

其差异化工程点在于自研的接收天线，可降低对接收器安装角度的敏感性。传统 UWB RTLS 部署需要对锚点朝向做仔细勘测；角度容差天线能显著削减工业 RTLS 落地中占大头的现场工程成本。系统利用 UWB 宽带宽做信号飞行时间测量（可达数厘米至数十厘米量级），在杂乱产线环境中给出系统级亚米精度。

目标场景包括员工动线追踪、工厂/仓库的货物与资产定位管理，以及人手短缺下的工作流管理。村田已在第 52 届工厂维护展（Maintenance Resilience 2026，东京 Big Sight，7 月 15–17 日）展出该系统。报道未披露 UWB 标准版本、频段规划，以及采用 TDoA 还是 TWR 测距。

## Key technical points (EN)

- **Sub-1-m positioning error** in Murata's own-factory evaluations, including obstacle-dense indoor environments; underlying UWB ToF resolution at several-to-tens-of-cm level.
- **Proprietary angle-tolerant receiver antenna** — reduces sensitivity to anchor installation angle, lowering site survey/installation engineering effort.
- **Deployed at production scale before launch**: 100+ receivers live in Murata factories analyzing worker traffic flows — vendor dogfooding as the reference deployment.
- **Use cases**: worker tracking, asset/goods location in factories and warehouses, workflow management; pitched at digitalization under labor shortage.
- **Undisclosed**: standard revision (802.15.4z vs 4ab), frequency band, TDoA vs TWR architecture.

## Key technical points (ZH)

- **亚米级定位误差** — 在村田自家工厂（含障碍密集环境）评估中误差小于 1 米；底层 UWB 飞行时间分辨率达数厘米至数十厘米量级。
- **自研角度容差接收天线** — 降低对锚点安装角度的敏感性，减少现场勘测与安装工程量。
- **发布前已规模化部署**：自家工厂 100+ 接收器在线运行，用于员工动线分析——厂商自用即参考案例。
- **应用场景**：员工追踪、工厂/仓库资产与货物定位、工作流管理；面向人手短缺背景下的数字化。
- **未披露**：标准版本（802.15.4z 或 4ab）、频段、TDoA 还是 TWR 架构。

## Why it matters / what's new (EN)

This is the KB's first industrial RTLS (real-time location system) entry in the uwb-ranging bin, which so far covers silicon (ST64UWB, Calterah Dubhe), platform APIs (2026-07-28_apple-google-uwb-indoor-gps-platform), and algorithms (2026-06-29_arxiv-ab-sync-uwb-tdoa-clock-sync). Murata entering with a self-deployed, 100-plus-receiver system signals that component vendors are moving up the stack into turnkey positioning systems — and that the commercial fight in industrial UWB is about deployment cost (angle-tolerant antennas, installation simplicity), not raw ranging accuracy, which is treated as a solved commodity. It is a useful demand-side counterpoint to the consumer-centric digital-key thread (see 2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key).

## Why it matters / what's new (ZH)

这是本 KB 的 uwb-ranging 方向下首条工业 RTLS（实时定位系统）条目——该方向此前覆盖芯片（ST64UWB、Calterah Dubhe）、平台 API（苹果/谷歌室内 GPS 平台条目）与算法（AB-Sync 时钟同步）。村田以自家部署 100+ 接收器的系统入场，表明元器件厂商正沿产业链上移做交钥匙定位系统；同时也说明工业 UWB 的商业竞争焦点在部署成本（角度容差天线、安装简化）而非测距精度本身——后者已被视为成熟商品能力。它与消费侧数字钥匙脉络（见 NXP/宝马条目）形成了有价值的需求侧对照。
