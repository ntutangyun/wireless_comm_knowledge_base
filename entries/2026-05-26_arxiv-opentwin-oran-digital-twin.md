---
id: 2026-05-26_arxiv-opentwin-oran-digital-twin
date_published: 2026-05-23
date_found: 2026-05-26
type: academic-paper
title_en: "OpenTwin: Digital Twin Driven Closed Loop KPM Inference and Control for Open RAN"
title_zh: "OpenTwin：面向开放 RAN 的数字孪生驱动闭环 KPM 推断与控制"
url: "https://arxiv.org/abs/2605.24662"
source_quality: abstract_only
topics: [O-RAN, RIC, digital-twin, xApp, energy-saving]
topic_primary: open-ran
topics_secondary: [cellular-ai, energy-power-save]
novelty_score: 3
---

## Summary (EN)
OpenTwin is a digital-twin framework for Open RAN that lets operators train and validate ML-driven xApps/rApps offline before touching the live network. It targets two well-known blockers to data-driven RAN control: key-performance-metric (KPM) data scarcity caused by O-RAN interface latency, and the operational risk of validating AI models directly on a production network. The twin is built on the open-source ns-O-RAN-flexRIC simulator and is deployed inside the non-RT RIC, consuming KPM streams over the O1 interface.

The core mechanism is a two-step learning pipeline. An XGBoost model learns the time-varying behaviour of the real network and emits the configuration parameters that drive the simulator, so the twin tracks the live deployment rather than a static scenario. A time-aware recursive least squares (RLS) tuner then continuously corrects residual deviations between the twin's KPMs and the measured ones. A deviation-aware scoring mechanism monitors twin fidelity and automatically triggers resynchronization when it detects network drift, which keeps the twin trustworthy over time instead of silently diverging.

The authors demonstrate the framework with an energy-saving xApp: control policies are first exercised against the twin, and only validated reconfigurations are pushed to the physical network. Reported results show the twin mirrors real-world KPMs with up to 96% accuracy and the xApp achieves significant energy reduction with no live-network disruption.

## Summary (ZH)
OpenTwin 是一个面向开放 RAN（O-RAN）的数字孪生框架，让运营商先在离线孪生体上训练并验证由 ML 驱动的 xApp/rApp，再下发到真实网络。它针对数据驱动 RAN 控制的两个常见障碍：因 O-RAN 接口时延导致的关键性能指标（KPM）数据稀缺，以及直接在生产网络上验证 AI 模型带来的运行风险。孪生体构建在开源仿真器 ns-O-RAN-flexRIC 之上，部署在 non-RT RIC 内，通过 O1 接口消费 KPM 数据流。

核心机制是两步学习流水线：先由 XGBoost 模型学习真实网络的时变行为，输出驱动仿真器的配置参数，使孪生体跟随真实部署而非固定场景；再由一个时间感知的递归最小二乘（RLS）调谐器持续校正孪生体 KPM 与实测值之间的残余偏差。一个偏差感知评分机制监控孪生保真度，在检测到网络漂移时自动触发重同步，避免孪生体随时间悄然发散、保持其可信度。

作者用一个节能 xApp 验证该框架：控制策略先在孪生体上演练，只有验证通过的重配置才下发到物理网络。结果显示孪生体复现真实 KPM 的准确率最高达 96%，节能 xApp 在不中断在网运行的前提下显著降低能耗。

## Key technical points (EN)
- Built on ns-O-RAN-flexRIC; the twin runs inside the **non-RT RIC** and ingests KPMs over the **O1 interface**.
- Two-step ML: **XGBoost** maps live network state → simulator config parameters; a **time-aware RLS tuner** continuously corrects twin-vs-real KPM deviation.
- **Deviation-aware scoring** monitors fidelity and auto-triggers resynchronization on detected drift.
- Use case: an **energy-saving xApp** validated in the virtual space before pushing reconfigurations live.
- Reported up to **96% KPM mirroring accuracy**; energy reduction with no live-network disruption.

## Key technical points (ZH)
- 基于 ns-O-RAN-flexRIC；孪生体运行于 **non-RT RIC** 内，经 **O1 接口** 摄取 KPM。
- 两步 ML：**XGBoost** 将实时网络状态映射为仿真器配置参数；**时间感知 RLS 调谐器** 持续校正孪生与真实 KPM 的偏差。
- **偏差感知评分** 监控保真度，检测到漂移时自动触发重同步。
- 用例：在虚拟空间验证 **节能 xApp**，再将重配置下发到真实网络。
- 报告 KPM 复现准确率最高 **96%**；节能且不中断在网运行。

## Why it matters / what's new (EN)
Digital twins for O-RAN are an active research line, but OpenTwin's contribution is the *self-correcting* loop: rather than a one-shot calibration, the XGBoost-parameterized simulator is continuously realigned by an online RLS tuner and a fidelity-scoring resync trigger. That directly attacks the "twin drifts away from reality" failure mode that limits the usefulness of offline RAN validation. It complements the AI-RAN / agentic-RAN entries already in the KB (e.g. the agentic-AI O-RAN optimization work) by focusing on the *safe-validation substrate* those control agents need rather than on the control policy itself.

## Why it matters / what's new (ZH)
面向 O-RAN 的数字孪生是活跃研究方向，而 OpenTwin 的贡献在于其 **自校正闭环**：不是一次性标定，而是用在线 RLS 调谐器与保真度评分重同步触发器持续校准由 XGBoost 参数化的仿真器。这直接针对限制离线 RAN 验证价值的"孪生体偏离现实"失效模式。它与 KB 中已有的 AI-RAN / 智能体 RAN 条目（如智能体 O-RAN 优化工作）互补——聚焦于这些控制智能体所需的 **安全验证底座**，而非控制策略本身。
