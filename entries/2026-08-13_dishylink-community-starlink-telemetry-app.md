---
id: 2026-08-13_dishylink-community-starlink-telemetry-app
date_published: 2026-08-09
date_found: 2026-08-13
type: community-signal
technology: satellite
title_en: "Dishylink: open-source desktop telemetry app for Starlink kit surfaces the local dish API ecosystem"
title_zh: "Dishylink：开源 Starlink 桌面遥测应用，展现终端本地 API 生态"
url: "https://www.reddit.com/r/Starlink/comments/1vjx7qi/i_built_a_free_opensource_desktop_app_to_monitor/"
source_quality: full
topics: [Starlink, user-terminal, telemetry, community-tools]
topic_primary: starlink
topics_secondary: [sat-iot]
novelty_score: 2
---

## Summary (EN)

A community developer released **Dishylink**, a free, open-source desktop application (macOS, Windows, plus Chrome/Edge/Firefox browser extensions) that reads a Starlink user terminal's local telemetry over the LAN and presents a full monitoring surface: live throughput/latency/obstruction and hardware health, dish alignment guidance (target rotation and tilt with exact corrective nudges in degrees), a 3D overhead view of the satellite constellation with an estimate of which satellite the dish is currently using, an obstruction time-lapse map, per-client data usage, real-time and historical power draw, latency attribution (Starlink segment vs the user's own router), an alert/event log (dish or router unresponsive, overheating, weather), and controls for snow melt, sleep schedule, update window and reboots on supported firmware. The author states it supports every dish model tested including the new Gen 5, and that it runs entirely locally — no account, no backend, no analytics.

The launch thread reached roughly 540 upvotes and ~200 comments within days, making it one of the most engaged community-tooling posts on r/Starlink this year. Comment traffic doubles as a requirements list: the top request is support for **bypass mode** (users who bridge the Starlink router to their own network find the app cannot discover the dish at its fixed local address in their custom subnet), followed by Linux support and refinements like plan-class detection (a Roam plan shown as Residential) and satellite-handover logic (community members note the terminal re-targets satellites on ~15-second boundaries, so any "connected satellite" estimator must jump at least that often).

## Summary (ZH)

一位社区开发者发布了 **Dishylink**——免费开源的桌面应用（macOS、Windows，另有 Chrome/Edge/Firefox 浏览器扩展），通过局域网读取 Starlink 用户终端的本地遥测数据，提供完整的监控界面：实时吞吐、时延（延迟）、遮挡与硬件健康状态；天线对准指引（目标旋转与俯仰角，并给出精确到度的修正量）；头顶卫星星座的 3D 视图并估计当前接入的卫星；遮挡时间序列地图；按客户端设备细分的流量统计；实时与历史功耗；时延归因（区分 Starlink 段与用户自有路由器段）；告警与事件日志（终端或路由器失联、过热、天气影响）；以及融雪模式、休眠计划、更新窗口和重启等控制功能。作者称支持其测试过的所有天线型号（包括最新 Gen 5），且完全本地运行——无账号、无后端、无数据收集。

发布帖数天内获得约 540 赞和约 200 条评论，是 r/Starlink 今年参与度最高的社区工具帖之一。评论区本身就是一份需求清单：呼声最高的是 **bypass（桥接）模式**支持（将 Starlink 路由器桥接到自有网络的用户发现应用无法在自定义子网中按固定本地地址发现终端），其次是 Linux 支持，以及套餐类别识别（Roam 套餐被显示为 Residential）和卫星切换逻辑（社区指出终端约每 15 秒重新选星，因此"当前连接卫星"的估计器至少要按该节奏跳变）等细化改进。

## Key technical points (EN)

- Reads the user terminal's local (on-LAN) telemetry interface directly; no cloud dependency, works where the official mobile app is the only vendor-provided monitor.
- Feature surface: live link metrics, alignment guidance in degrees, 3D constellation/connected-satellite estimation, obstruction time-lapse, per-client usage accounting, power-draw history, latency attribution, alerting, and remote controls (snow melt / sleep / update window / reboot).
- Cross-platform delivery: native macOS/Windows apps plus browser extensions; Linux absent at launch.
- Community-identified gap: discovery fails in bypass mode (custom subnets) — the standard fixed dish address assumption breaks when the Starlink router is bridged.
- Satellite-handover cadence (~15 s re-targeting) surfaced by commenters as a constraint on connected-satellite estimation.

## Key technical points (ZH)

- 直接读取用户终端的本地（局域网内）遥测接口；不依赖云端，弥补了官方仅有手机 App 可用的监控空缺。
- 功能面：实时链路指标、以度为单位的对准指引、3D 星座与接入卫星估计、遮挡时间序列、按客户端的流量核算、功耗历史、时延归因、告警，以及远程控制（融雪/休眠/更新窗口/重启）。
- 跨平台交付：macOS/Windows 原生应用加浏览器扩展；发布时暂无 Linux 版本。
- 社区指出的缺口：bypass（桥接）模式下发现失败（自定义子网）——路由器被桥接后，默认的固定终端地址假设失效。
- 评论者指出终端约每 15 秒重新选星，这是"当前接入卫星"估计的一个约束条件。

## Why it matters / what's new (EN)

The KB tracks Starlink at the constellation, spectrum and service level; this is the first entry documenting the **user-terminal local-telemetry ecosystem** — the fact that the dish exposes enough local API surface for a third party to reconstruct nearly the entire official app, plus capabilities the official app lacks (per-client usage, power history, latency attribution). The thread's engagement (~540 points) and its comment-thread requirements list are a concrete community signal of unmet demand for richer terminal observability, desktop-class monitoring, and bypass-mode/self-hosted-network support in satellite consumer equipment.

## Why it matters / what's new (ZH)

本知识库此前对 Starlink 的跟踪集中在星座、频谱与业务层面；这是第一条记录**用户终端本地遥测生态**的条目——终端暴露的本地 API 已足以让第三方几乎完整复刻官方 App，甚至补齐官方所缺的能力（按客户端流量、功耗历史、时延归因）。该帖的高参与度（约 540 赞）及评论区的需求清单，具体反映了卫星消费级设备用户对更丰富的终端可观测性、桌面级监控以及桥接模式/自建网络支持的未满足需求。
