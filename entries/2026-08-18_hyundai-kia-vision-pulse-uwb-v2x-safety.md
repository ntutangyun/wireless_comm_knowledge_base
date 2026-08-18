---
id: 2026-08-18_hyundai-kia-vision-pulse-uwb-v2x-safety
date_published: 2026-01-30
date_found: 2026-08-18
type: industry-news
technology: uwb
title_en: "Hyundai Motor and Kia unveil 'Vision Pulse': UWB time-of-flight ranging to Digital Key 2 modules for beyond-line-of-sight collision warning"
title_zh: "现代汽车与起亚发布 Vision Pulse：复用 Digital Key 2 的 UWB 飞行时间测距，实现视线外碰撞预警"
url: "https://www.hyundaimotorgroup.com/en/news/hyundai-motor-and-kia-unveil-vision-pulse-driver-safety-technology-that-detects-beyond-obstacles"
source_quality: full
topics: [UWB, automotive, V2P, collision-avoidance, Digital-Key-2, time-of-flight, Hyundai, Kia]
topic_primary: uwb-ranging
topics_secondary: [uwb-fi-ra]
novelty_score: 2
---

## Summary (EN)

On 30 January 2026 Hyundai Motor Company and Kia announced **Vision Pulse**, a driver-safety technology in pre-development that repurposes the vehicle's UWB radio — the same modules that already ship for their Digital Key 2 phone-as-key feature — as a beyond-line-of-sight object detector. Rather than radar-style reflection sensing, Vision Pulse is cooperative: the car's UWB modules exchange pulses with UWB-equipped devices carried by nearby people and vehicles (smartphones, wearables, trackers) and compute relative position from signal time-of-flight, so a pedestrian or cyclist behind a parked truck or around a blind corner is "seen" before any camera, LiDAR or radar has a sightline. Prediction algorithms then track multiple fast-moving objects simultaneously and raise alerts.

The companies quote a positional accuracy of about 10 cm within a 100 m radius, over 99% detection accuracy at night and in adverse weather (UWB is unaffected by lighting or precipitation), 1–5 ms communication latency, and GHz-scale bandwidth that keeps interference low. Vehicles that already carry Digital Key 2 UWB hardware need no additional parts; other vehicles would need supplementary UWB modules. Hyundai/Kia frame the approach as reducing dependence on expensive LiDAR/radar for certain vulnerable-road-user scenarios. Two industrial pilots are cited: forklift-versus-worker collision prevention at Kia's PBV Conversion Center in Hwaseong (running since 2025), and a planned trial with Busan Port Authority (agreement signed October 2025) covering industrial mobility in container terminals and hinterland areas. Series-production application is still under evaluation.

## Summary (ZH)

2026 年 1 月 30 日，现代汽车与起亚发布处于预研阶段的驾驶安全技术 **Vision Pulse**，将车辆已随 Digital Key 2 手机钥匙功能量产的 UWB 射频模块，转用为“视线之外”的目标探测器。它并非雷达式的反射感知，而是协作式的：车载 UWB 模块与附近行人和车辆携带的 UWB 设备（智能手机、可穿戴设备、追踪器）交换脉冲，通过信号飞行时间计算相对位置，使停靠卡车后方或盲区拐角的行人、骑行者在摄像头、激光雷达或毫米波雷达获得视线之前即被“看见”。预测算法随后同时跟踪多个高速移动目标并发出预警。

两家公司给出的指标为：100 m 半径内约 10 cm 的定位精度、夜间及恶劣天气下超过 99% 的检测准确率（UWB 不受光照与降水影响）、1–5 ms 的通信时延，以及 GHz 级带宽带来的低干扰。已搭载 Digital Key 2 UWB 硬件的车辆无需增加零部件，其他车辆需加装 UWB 模块。现代／起亚将其定位为在特定弱势道路使用者场景下降低对昂贵激光雷达／雷达的依赖。文中引用两项工业试点：起亚华城 PBV 转换中心自 2025 年起进行的叉车—工人防碰撞试验，以及与釜山港务局（2025 年 10 月签约）计划开展的集装箱码头及腹地工业移动设备试验。量产应用仍在评估中。

## Key technical points (EN)

- **Cooperative ToF ranging, not radar** — car UWB modules range to UWB-carrying phones/wearables/trackers; position from time-of-flight, so detection works through occlusions where reflection-based sensors fail.
- **Reuse of Digital Key 2 hardware** — the CCC-style digital-key UWB anchors already in the vehicle become the sensing front-end; no extra hardware on equipped models, add-on modules otherwise.
- **Quoted figures** — ~10 cm accuracy within a 100 m radius; >99% detection in night/adverse weather; 1–5 ms communication latency; GHz bandwidth for interference robustness.
- **Multi-target prediction** — proprietary algorithms track several high-speed objects around the vehicle at once and trigger warnings.
- **Pilots** — Kia PBV Conversion Center (Hwaseong) forklift/worker collision prevention since 2025; Busan Port Authority terminal trial planned under an October 2025 agreement.
- **Status** — pre-development concept; mass-production timing not committed.

## Key technical points (ZH)

- **协作式飞行时间测距而非雷达** —— 车载 UWB 模块与携带 UWB 的手机／可穿戴／追踪器测距，由飞行时间得出位置，因此在反射式传感器失效的遮挡场景仍可探测。
- **复用 Digital Key 2 硬件** —— 车内已有的 CCC 式数字钥匙 UWB 锚点成为感知前端；已配车型无需新增硬件，其他车型加装模块。
- **公布指标** —— 100 m 半径内约 10 cm 精度；夜间／恶劣天气 >99% 检测率；1–5 ms 通信时延；GHz 带宽抗干扰。
- **多目标预测** —— 自研算法同时跟踪车辆周围多个高速目标并触发预警。
- **试点** —— 起亚华城 PBV 转换中心叉车／工人防碰撞（2025 年起）；依据 2025 年 10 月协议计划在釜山港务局码头开展试验。
- **状态** —— 预研概念；量产时间未承诺。

## Why it matters / what's new (EN)

Existing KB automotive-UWB entries are all about the key itself — NXP Trimension in BMW Digital Key Plus with in-cabin presence radar (2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key), Infineon's ASIL-B UWB for safety functions (2026-06-27_infineon-airoc-tsl100-uwb-asilb) — and the only vehicle-to-infrastructure UWB item is academic (2026-08-15_arxiv-gaia-uwb-workzone-denoiser). Vision Pulse is the first OEM statement that the digital-key UWB anchors are also a *vehicle-to-pedestrian ranging sensor*, which changes the cost calculus for UWB in cars (one radio, three jobs: key, in-cabin sensing, external VRU detection) and creates a concrete pull for UWB in phones/wearables/tags beyond finding and access. The 100 m / 10 cm figures also foreshadow the longer-range modes (multi-millisecond ranging, narrowband assist) that 802.15.4ab silicon (2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist) is designed to deliver. Ingested as a deliberate late catch-up (announcement Jan-2026, inside the 12-month window) because the bin had no vehicle-to-pedestrian coverage; novelty 2 because it is a concept with pilots, not a shipping system, and detection depends on the other party carrying UWB.

## Why it matters / what's new (ZH)

知识库现有的汽车 UWB 条目均围绕钥匙本身——宝马 Digital Key Plus 中的 NXP Trimension 及舱内在场雷达（2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key）、英飞凌面向安全功能的 ASIL-B UWB（2026-06-27_infineon-airoc-tsl100-uwb-asilb）——唯一的车路 UWB 条目为学术工作（2026-08-15_arxiv-gaia-uwb-workzone-denoiser）。Vision Pulse 是首个由主机厂明确提出“数字钥匙 UWB 锚点同时也是*车对行人测距传感器*”的案例，改变了车载 UWB 的成本账（一套射频，三项任务：钥匙、舱内感知、车外弱势道路使用者探测），并为手机／可穿戴／标签中的 UWB 创造了寻物与门禁之外的具体需求。100 m／10 cm 的指标也预示了 802.15.4ab 芯片（2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist）所设计的更长距离模式（多毫秒测距、窄带辅助）。作为有意的迟到补录收入（2026 年 1 月发布，在 12 个月窗口内），因该板块此前无车对行人覆盖；新颖度 2，因其为带试点的概念而非量产系统，且探测依赖对方携带 UWB 设备。

## Images

![Vision Pulse concept: UWB ranging from the vehicle to UWB-equipped road users hidden behind obstacles | Vision Pulse 概念：车辆与遮挡物后携带 UWB 设备的道路使用者进行 UWB 测距](https://www.hyundaimotorgroup.com/image/upload/asset_library/MDA00000000000075507/c72ebb8102d94a159849e0bd2d7b575b.jpg)
![Vision Pulse detection scenario illustration | Vision Pulse 探测场景示意](https://www.hyundaimotorgroup.com/image/upload/asset_library/MDA00000000000075509/152821644f8a45b18ea34b4cf0cfda47.jpg)
![Industrial pilot: forklift and worker collision prevention | 工业试点：叉车与工人防碰撞](https://www.hyundaimotorgroup.com/image/upload/asset_library/MDA00000000000075510/b8a430d191b94267883f1319533803ee.jpg)
