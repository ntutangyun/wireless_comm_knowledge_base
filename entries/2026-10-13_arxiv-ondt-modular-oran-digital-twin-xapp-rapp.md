---
id: 2026-10-13_arxiv-ondt-modular-oran-digital-twin-xapp-rapp
date_published: 2026-10-06
date_found: 2026-10-13
type: academic-paper
technology: cellular
title_en: "ONDT: A Modular and Virtualized O-RAN Digital Twin for xApp/rApp Closed-Loop Experimentation"
title_zh: "ONDT：面向 xApp/rApp 闭环实验的模块化虚拟化 O-RAN 数字孪生"
url: "https://arxiv.org/abs/2610.07889"
source_quality: full
topics: [O-RAN, digital-twin, xApp, rApp, Near-RT-RIC, Non-RT-RIC, E2SM-KPM, E2SM-CCC, A1, energy-saving, Kubernetes]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Miguel Catalan-Cid, Joan Josep Aleixendri and August Betzler (i2CAT Foundation), George Oikonomou and Lydia Ntzogani (Juniper Networks) and David Reiss (UPC) present ONDT, a modular, virtualized, cloud-native O-RAN digital twin developed in the SNS SUNRISE-6G project. It gives an isolated, reproducible environment for validating xApps and rApps before live deployment, covering a Near-RT RIC, a Non-RT RIC and an emulated RAN domain.

ONDT is built as Kubernetes-orchestrated microservices, all stateless except a NATS message queue that carries asynchronous communication and holds configuration, history and runtime state. Northbound it has an NBI API server (validating requests against OpenAPI specs) and a read-only WebUI; a central Experiment Manager handles the experiment lifecycle; southbound it has a RIC adapter (implementation-agnostic internally, tailored to Juniper RICs) and a RAN-emulator adapter (validated with Keysight RICtest); Prometheus supports metrics and dataset generation. The Near-RT RIC side uses E2 telemetry and control with the KPM and RAN Control / Cell Configuration and Control (CCC) service models; the Non-RT RIC side uses A1 policies, the SMO framework and O1. Three workflows are described: a baseline experiment lifecycle (establishment, experiment, finalization), KPM monitoring with dataset generation (an xApp exports KPMs to Prometheus, an optional rApp stores CSVs in MinIO), and closed-loop control (a control rApp issues A1 policies, the xApp converts them to E2 control actions).

As a validation use case the authors run QoS-aware energy saving by selectively switching capacity cells ON/OFF at low load, using an operational MNO dataset converted to Keysight RICtest scenarios: three sites with high, moderate and light load, 100 MHz capacity cells and 50 MHz coverage cells, a 5 Mbps throughput request with 15% outage tolerance, and 72 hours of emulated traffic peaking at 1,000 active UEs and 4 Gbps aggregate. They report approximately 35% average energy savings at a cost of a 3-4 percentage-point increase in throughput outage. The validation checks workflow execution rather than optimizing the control algorithm; it covers one use case and specific platforms (Juniper RICs, Keysight RICtest), and transient simulator effects at UE-count changes produce non-representative low-throughput peaks.

## Summary (ZH)
Miguel Catalan-Cid、Joan Josep Aleixendri、August Betzler（i2CAT 基金会），George Oikonomou、Lydia Ntzogani（Juniper Networks）与 David Reiss（UPC）提出 ONDT，这是在 SNS SUNRISE-6G 项目中开发的模块化、虚拟化、云原生 O-RAN 数字孪生。它提供隔离且可复现的环境，用于在实际部署前验证 xApp 与 rApp，覆盖 Near-RT RIC、Non-RT RIC 及仿真 RAN 域。

ONDT 以 Kubernetes 编排的微服务构建，除 NATS 消息队列（承载异步通信并保存配置、历史与运行状态）外均为无状态。北向包括 NBI API 服务器（依据 OpenAPI 规范校验请求）与只读 WebUI；核心的实验管理器负责实验生命周期；南向包括 RIC 适配器（内部与具体实现无关，针对 Juniper RIC 做了定制）与 RAN 仿真器适配器（以 Keysight RICtest 验证）；Prometheus 支持指标与数据集生成。Near-RT RIC 侧使用 E2 遥测与控制，采用 KPM 与 RAN Control / Cell Configuration and Control（CCC）服务模型；Non-RT RIC 侧使用 A1 策略、SMO 框架与 O1。论文描述了三种工作流：基础实验生命周期（建立、实验、收尾）、KPM 监测与数据集生成（xApp 将 KPM 导出至 Prometheus，可选 rApp 将 CSV 存入 MinIO），以及闭环控制（控制 rApp 下发 A1 策略，xApp 转换为 E2 控制动作）。

作为验证用例，作者在低负载时选择性开关容量小区以实现 QoS 感知节能，使用转换为 Keysight RICtest 场景的运营商真实数据集：三个站点（高、中、低负载），100 MHz 容量小区与 50 MHz 覆盖小区，5 Mbps 吞吐需求与 15% 中断容忍度，72 小时仿真流量，峰值 1,000 个活跃终端、4 Gbps 聚合速率。结果为平均节能约 35%，代价是吞吐中断率上升 3–4 个百分点。该验证检查的是工作流执行，而非优化控制算法；仅覆盖一个用例与特定平台（Juniper RIC、Keysight RICtest），终端数量变化时仿真器的瞬态效应会产生不具代表性的低吞吐峰值。

## Key technical points (EN)
- Kubernetes microservice architecture; NATS queue is the only stateful component.
- Northbound: NBI API server (OpenAPI validation), read-only WebUI; central Experiment Manager for the experiment lifecycle; southbound: Juniper RIC adapter, Keysight RICtest RAN-emulator adapter.
- E2SM-KPM and E2SM-CCC for xApps; A1 policies, SMO and O1 for rApps.
- Three workflows: baseline lifecycle, KPM monitoring + dataset generation, closed-loop control.
- Energy-saving use case on real MNO load profiles (3 sites, 72 h, up to 1,000 UEs / 4 Gbps): ~35% average energy saving for a 3-4 pp rise in throughput outage.
- Validates workflow execution, not control-algorithm optimality; one use case and specific platforms.

## Key technical points (ZH)
- Kubernetes 微服务架构；NATS 队列是唯一有状态组件。
- 北向：NBI API 服务器（OpenAPI 校验）、只读 WebUI；核心的实验管理器负责实验生命周期；南向：Juniper RIC 适配器、Keysight RICtest RAN 仿真器适配器。
- xApp 使用 E2SM-KPM 与 E2SM-CCC；rApp 使用 A1 策略、SMO 与 O1。
- 三种工作流：基础生命周期、KPM 监测 + 数据集生成、闭环控制。
- 基于真实运营商负载曲线的节能用例（3 个站点、72 小时、最多 1,000 终端 / 4 Gbps）：平均节能约 35%，吞吐中断率上升 3–4 个百分点。
- 验证的是工作流执行而非控制算法最优性；仅一个用例与特定平台。

## Why it matters / what's new (EN)
ONDT documents a concrete, componentised way to rehearse xApp/rApp closed loops (E2 KPM/CCC plus A1) against an emulated RAN fed with operator load data before touching a live network, demonstrated on one energy-saving scenario.

## Why it matters / what's new (ZH)
ONDT 给出了一种具体的组件化方式：在接触实网之前，以运营商负载数据驱动仿真 RAN，演练 xApp/rApp 闭环（E2 KPM/CCC 加 A1），并以一个节能场景加以演示。

## Images
![ONDT architecture | ONDT 架构](https://arxiv.org/html/2610.07889v1/fig_arch.png)
![KPMs with the control rApp/xApp active | 启用控制 rApp/xApp 时的 KPM](https://arxiv.org/html/2610.07889v1/figures/results_with_rapp.png)
