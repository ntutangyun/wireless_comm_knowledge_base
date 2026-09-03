---
id: 2026-09-03_arxiv-trisla-preventive-closed-loop-slicing
date_published: 2026-09-01
date_found: 2026-09-03
type: academic-paper
technology: cellular
title_en: "TriSLA: A Preventive and Closed-Loop SLA-Aware Architecture for Multidomain Decision-Making with Explainable AI in 5G Networks"
title_zh: "TriSLA：面向5G网络多域决策的预防性闭环SLA保障架构（含可解释AI）"
url: "https://arxiv.org/abs/2609.01293"
source_quality: full
topics: [network-slicing, SLA-assurance, XAI, admission-control, RAN-TN-5GC, free5GC, closed-loop]
topic_primary: network-slicing
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Abel J. R. Lisboa, Gustavo Z. Bruno and Cristiano B. Both (arXiv v1, 1 Sep 2026) present TriSLA, a multidomain 5G architecture that aims to guarantee Service Level Agreements (SLAs) for network slices by combining preventive, pre-instantiation feasibility checks with continuous closed-loop runtime supervision. The paper's stated motivation is that today's SLA management is largely reactive — violations are detected only after service degradation — which is unreliable for mission-critical slices spanning disaggregated, dynamic multidomain infrastructure (RAN, Transport Network, 5G Core). The authors also identify a second gap: AI-driven orchestration decisions are often opaque black boxes, so operators cannot audit why a slice request was accepted, renegotiated, or rejected.

TriSLA is organized into three tiers across a five-phase, 21-interaction workflow. An Intelligence Layer (Cognitive Admission Plane) — SLA Intake Gateway, SEM-CSMF (ontology-driven semantic normalization into NEST profiles), an ML-NSMF feasibility classifier, and a Decision Engine issuing ACCEPT / RENEGOTIATE / REJECT outcomes with asynchronous SHAP-based XAI attributions — handles preventive admission. An Execution Layer (NASP Adapter plus RAN/TN/5GC domain controllers) decomposes accepted requests into coordinated provisioning tasks. An Observability & Runtime Assurance Layer aggregates RAN PRB, TN latency/jitter/loss and 5GC CPU/memory telemetry and runs an Observe-Analyze-Decide closed loop that detects drift and triggers remediation.

The prototype is a Kubernetes deployment (free5GC v3.1.1 as the 5G Core, UERANSIM as the RAN emulator, Mininet+ONOS as the Transport domain, Prometheus/Grafana/OpenTelemetry/Jaeger for observability) evaluated under eight controlled stress scenarios (C0 normal through C7 compound multidomain stress) over a 240-request admission workload. Semantic SLA processing averages 25.37±3.38 ms. Among five candidate ML feasibility classifiers, XGBoost reaches the top accuracy (99.51±0.33%) but the authors default to Random Forest (98.68±0.48% accuracy) for its TreeSHAP compatibility and low-latency explainability; the full predictive-plus-XAI-attribution pipeline runs in 231.66 ms (XAI computed asynchronously so the immediate admission response is 113.07 ms). Against a reactive always-accept baseline (51.2% runtime SLA satisfaction) and a static-threshold baseline (80.4%), TriSLA's preventive admission (51.25% direct accept, 2.08% renegotiate, 46.67% reject) achieves 100% runtime SLA compliance on all 123 admitted slices — eliminating post-deployment violations entirely. The closed-loop runtime-assurance cycle averages 4224±9 ms end to end, of which active remediation is only 52±7 ms (1.2%) — detection delay and revalidation dominate — and all 12 injected anomalies across the C1-C3 scenarios were successfully restored to compliance. End-to-end admission latency across the full workflow averages 4046.3±736.5 ms, with multidomain resource provisioning (M03) accounting for roughly 70% of that time; the cognitive admission stages themselves add negligible overhead.

## Summary (ZH)

Abel J. R. Lisboa、Gustavo Z. Bruno 与 Cristiano B. Both（arXiv v1，2026年9月1日）提出 TriSLA，一种面向5G网络的多域架构，通过将实例化前的预防性可行性检查与持续的闭环运行时监督相结合，来保障网络切片的服务等级协议（SLA）。论文指出的动机是：当前 SLA 管理大多是被动式的——只有在服务已经劣化之后才能检测到违规——这对于跨越 RAN、传输网络（TN）、5G 核心网（5GC）等分散且动态的多域基础设施的关键任务切片而言并不可靠。作者还指出第二个缺口：AI 驱动的编排决策往往是不透明的黑盒，运营商无法审计切片请求被接受、重新协商或拒绝的原因。

TriSLA 组织为三层，贯穿一个五阶段、21次交互的工作流。智能层（认知准入平面）——SLA 接入网关、SEM-CSMF（本体驱动的语义归一化，转换为 NEST 配置文件）、ML-NSMF 可行性分类器，以及发出 ACCEPT/RENEGOTIATE/REJECT 判定并异步生成基于 SHAP 的 XAI 归因的决策引擎——负责预防性准入。执行层（NASP 适配器加 RAN/TN/5GC 域控制器）将已接受的请求分解为协同的资源开通任务。可观测性与运行时保障层聚合 RAN PRB、TN 时延/抖动/丢包以及 5GC CPU/内存遥测数据，并运行"观察-分析-决策"闭环，检测偏移并触发补救。

原型基于 Kubernetes 部署（free5GC v3.1.1 作为5G核心网、UERANSIM 作为 RAN 仿真器、Mininet+ONOS 作为传输域、Prometheus/Grafana/OpenTelemetry/Jaeger 用于可观测性），在8种受控压力场景（C0正常至C7复合多域压力）下、以240个请求的准入负载进行评估。语义 SLA 处理平均耗时 25.37±3.38 毫秒。在五个候选 ML 可行性分类器中，XGBoost 准确率最高（99.51±0.33%），但作者默认采用随机森林（准确率98.68±0.48%），因其兼容 TreeSHAP、可实现低延迟可解释性；完整的预测加 XAI 归因流水线耗时 231.66 毫秒（XAI 异步计算，因此即时准入响应仅需 113.07 毫秒）。相比被动式"全接受"基线（运行时 SLA 满足率51.2%）与静态阈值基线（80.4%），TriSLA 的预防性准入（51.25% 直接接受、2.08% 重新协商、46.67% 拒绝）使全部123个已准入切片达到100%的运行时 SLA 合规率——完全消除部署后违规。闭环运行时保障周期平均端到端耗时 4224±9 毫秒，其中主动补救仅占52±7毫秒（1.2%）——检测延迟与重新验证占主导；在 C1-C3 场景中注入的全部12次异常均被成功恢复至合规状态。完整工作流的端到端准入延迟平均为4046.3±736.5毫秒，其中多域资源开通（M03）约占总耗时的70%；认知准入阶段本身带来的开销可忽略不计。

## Key technical points (EN)
- Problem: reactive SLA monitoring detects violations only after degradation; AI-driven orchestration is typically an unauditable black box.
- Architecture: 3-tier, 5-phase, 21-interaction pipeline — Intelligence Layer (semantic intake, ML feasibility inference, XAI-backed decision engine) → Execution Layer (NASP Adapter, RAN/TN/5GC domain controllers) → Observability & Runtime Assurance Layer (telemetry aggregation, Observe-Analyze-Decide closed loop).
- Prototype: Kubernetes, free5GC v3.1.1, UERANSIM, Mininet+ONOS, Prometheus/Grafana/OpenTelemetry/Jaeger.
- Classifier comparison: Random Forest, XGBoost, LightGBM, LSTM, MLP — XGBoost highest accuracy (99.51%) but Random Forest chosen as default for TreeSHAP-compatible low-latency explainability (98.68% accuracy).
- Headline result: 100% runtime SLA satisfaction for admitted slices vs 80.4% (static threshold) and 51.2% (reactive always-accept) baselines, across a 240-request, 8-scenario stress workload.
- Latency budget: semantic processing 25.37 ms; predictive+XAI pipeline 231.66 ms (immediate response 113.07 ms, XAI async); closed-loop remediation cycle 4224 ms total but only 52 ms (1.2%) is active correction; end-to-end admission 4046.3 ms, ~70% consumed by multidomain provisioning.

## Key technical points (ZH)
- 问题：被动式 SLA 监控只能在服务劣化后才能检测到违规；AI 驱动的编排通常是不可审计的黑盒。
- 架构：三层、五阶段、21次交互的流水线——智能层（语义接入、ML 可行性推理、带 XAI 的决策引擎）→ 执行层（NASP 适配器、RAN/TN/5GC 域控制器）→ 可观测性与运行时保障层（遥测聚合、"观察-分析-决策"闭环）。
- 原型：基于 Kubernetes，采用 free5GC v3.1.1、UERANSIM、Mininet+ONOS、Prometheus/Grafana/OpenTelemetry/Jaeger。
- 分类器对比：随机森林、XGBoost、LightGBM、LSTM、MLP——XGBoost 准确率最高（99.51%），但因兼容 TreeSHAP、支持低延迟可解释性，默认采用随机森林（准确率98.68%）。
- 核心结果：在包含240个请求、8种场景的压力测试负载下，已准入切片的运行时 SLA 满足率达100%，相比静态阈值基线（80.4%）与被动全接受基线（51.2%）大幅提升。
- 延迟预算：语义处理25.37毫秒；预测加XAI流水线231.66毫秒（即时响应113.07毫秒，XAI异步执行）；闭环补救周期总计4224毫秒，但主动纠正仅占52毫秒（1.2%）；端到端准入延迟4046.3毫秒，其中约70%消耗在多域资源开通环节。

## Why it matters / what's new (EN)
This knowledge base's network-slicing coverage already includes declarative orchestration (METIS, 08-04), online admission pricing (OPA, 08-05), stateful cross-slice migration (Orchra, 08-24) and a capability broker for workflow QoS (08-29), but none of those entries combine *preventive* (pre-instantiation) feasibility gating with *explainable* admission decisions and a measured closed-loop runtime-assurance cycle in one integrated, RAN+TN+5GC prototype. TriSLA's contribution is quantitative evidence that pushing feasibility evaluation before resource commitment — rather than reacting after the fact — can drive post-deployment violations to zero, while keeping the added cognitive-layer latency (25-232 ms) small relative to the multidomain provisioning time it precedes (2.7+ seconds). It is the first entry here that explicitly measures the cost of *explainability* itself (TreeSHAP attribution latency) as a first-class part of the admission workflow rather than an offline add-on.

## Why it matters / what's new (ZH)
本知识库的网络切片部分已有声明式编排（METIS，08-04）、在线准入定价（OPA，08-05）、有状态跨切片迁移（Orchra，08-24）以及面向工作流 QoS 的能力中介（08-29）等条目，但均未在同一个整合 RAN+TN+5GC 的原型中，将*预防性*（实例化前）可行性把关与*可解释*准入决策及经实测的闭环运行时保障周期结合在一起。TriSLA 的贡献在于提供量化证据：将可行性评估前置到资源承诺之前（而非事后被动响应），可将部署后违规降至零，同时新增的认知层延迟（25-232毫秒）相对其之前的多域资源开通耗时（2.7秒以上）保持较小。这是本知识库中首个把*可解释性本身的代价*（TreeSHAP归因延迟）作为准入流程一等公民、而非离线附加项来实测的条目。

## Images
