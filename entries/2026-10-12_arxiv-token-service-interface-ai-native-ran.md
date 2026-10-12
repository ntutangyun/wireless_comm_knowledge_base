---
id: 2026-10-12_arxiv-token-service-interface-ai-native-ran
date_published: 2026-10-02
date_found: 2026-10-12
type: academic-paper
technology: cellular
title_en: "A Token Service Interface for AI-Native RANs"
title_zh: "面向 AI 原生 RAN 的令牌服务接口"
url: "https://arxiv.org/abs/2610.02618"
source_quality: full
topics: [AI-native-RAN, token-communication, embodied-AI, decoupled-access, PDU-set, cross-layer-control, VLA]
topic_primary: cellular-ai
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)
Jianan Zhang, Peng Li, and Xiang Cheng (Peking University, School of Electronics) address a gap in how AI-native radio access networks (RANs) handle the token streams exchanged by generative and embodied AI services, such as a vision-language-action (VLA) drone-inspection agent that produces observations, language context, and control outputs across successive inference rounds. Conventional flow descriptors describe little beyond average rate and delay, giving the RAN no way to know whether partial delivery of a token set is still useful, whether future emissions are predictable, or whether a set depends on retained execution state. The paper organizes the communication-relevant properties of an AI service into three dimensions — service semantics (what outcome is requested: a "soft" token set tolerates partial/selective delivery, a "hard" set such as a structured action command requires complete, correctly ordered delivery), temporal semantics (when it matters: deadlines, useful lifetime, prefill/decode phase distinctions), and stateful semantics (which execution context a token set belongs to, including retained state that should survive a radio handover) — and proposes a Token Service Interface (TSI) that binds these as a descriptor between the application, the RAN, and the edge runtime, with explicit field ownership and admission feedback (accept the requested target, propose a feasible alternative, or reject). TSI extends Release-18 PDU-set QoS (which carries at most one delay budget and error rate per QoS flow direction) by allowing per-token-set declared deadlines and reliability targets, and by having the system runtime supply execution-aware readiness forecasts rather than relying only on flow-level periodicity assistance information.

A drone-inspection case study over a decoupled RAN (a macro downlink base station 250 m from the drone and a nearby uplink base station 60 m away) quantifies the effect of exposing this semantic information to network decisions. Weighting token sets by (saliency-derived) importance rather than treating them equally cuts required uplink radio resource by 27.1% under coupled access and by 41.3% under decoupled access to meet the same expected-weighted-delivery target; the coupled-to-decoupled resource-saving ratio is itself 24.3% higher when saliency weighting is used (coupled-to-decoupled cost ratios of 17.1 vs 21.2). The relative benefit of importance weighting shrinks as the delivery-utility target gets stricter — from 59% at a 0.5 utility quantile target down to 12% at 0.95 — because higher targets leave less room to omit low-value token sets. For temporal semantics, an exact readiness forecast lets grant preparation finish before payload arrival; without it, preparation consumes a fraction η of the 50 ms window, and widening η from 10% to 50% widens the utility gap — at q = 0.75 and η = 0.3, utility falls to 0.6364, a 15.1% relative loss. Sizing a history-preserving edge-reasoning component's retained context (using Qwen2.5-7B: 28 layers, 4 KV heads/layer, 128 elements/head, 56 KiB per token at 16-bit precision) at 8,192 context tokens (448 MiB of KV state), an offline oracle that forwards during brief visits and migrates for the final residence reduces mean additional latency by 26.4% versus fixed anchoring and 56.8% versus migration at every handover, and cuts migration-induced execution pauses from five to one.

## Summary (ZH)
Jianan Zhang、Peng Li 与 Xiang Cheng（北京大学电子学院）针对 AI 原生无线接入网（RAN）在处理生成式与具身 AI 服务所交换的令牌（token）流时存在的空白展开研究，例如一个视觉-语言-行动（VLA）无人机巡检智能体，在连续多轮推理中产生观测、语言上下文与控制输出。传统的流量描述符除了平均速率与时延外几乎不传递任何信息，RAN 因此无法判断某个令牌集的部分交付是否仍有价值、未来的发送是否可预测，或某个令牌集是否依赖需保留的执行状态。论文将 AI 服务与通信相关的属性归纳为三个维度——服务语义（请求的是什么结果："软"令牌集可容忍部分/选择性交付，而如结构化动作指令这样的"硬"令牌集则要求完整且顺序正确的交付）、时间语义（何时重要：截止时间、有效生命周期、预填充/解码阶段的区分）、状态语义（该令牌集属于哪个执行上下文，包括应在无线切换后仍得以保留的状态）——并提出了一种"令牌服务接口"（Token Service Interface, TSI），将上述信息作为描述符绑定在应用、RAN 与边缘运行时之间，明确字段归属与接纳反馈（接受请求目标、提出可行的替代方案，或拒绝）。TSI 在 Release 18 的 PDU 集服务质量（QoS）机制（每个 QoS 流方向最多只能携带一个时延预算与一个误码率）基础上进行扩展，允许按令牌集声明截止时间与可靠性目标，并由系统运行时提供面向执行状态的就绪预测，而非仅依赖流级周期性辅助信息。

论文通过一个基于解耦 RAN（宏下行基站距无人机 250 米，邻近的上行基站距无人机 60 米）的无人机巡检案例，量化了将这类语义信息暴露给网络决策所带来的效果。相较于对所有令牌集一视同仁，按（基于显著性推导的）重要性加权可在耦合接入下将所需上行无线资源削减 27.1%，在解耦接入下削减 41.3%，同时达到相同的期望加权交付目标；在采用显著性加权时，耦合到解耦的资源节省比例本身还要再提高 24.3%（耦合到解耦的成本比分别为 17.1 与 21.2）。重要性加权带来的相对收益会随交付效用目标趋严而缩小——在效用分位数目标为 0.5 时收益为 59%，而在 0.95 时降至 12%，因为更高的目标留给省略低价值令牌集的空间更小。在时间语义方面，精确的就绪预测可使授权准备在载荷到达前完成；若无此预测，准备过程将占用 50 毫秒窗口中比例为 η 的时间，η 从 10% 增至 50% 时效用差距随之扩大——在 q=0.75、η=0.3 时效用降至 0.6364，相对损失 15.1%。在对保留历史的边缘推理组件所需上下文规模进行测算时（以 Qwen2.5-7B 为例：28 层、每层 4 个 KV 头、每头 128 个元素，16 位精度下每个令牌占 56 KiB），在 8,192 个上下文令牌（448 MiB KV 状态）下，离线理想策略（短暂驻留时转发、最终驻留时迁移）相较固定锚定与每次切换均迁移两种基线，分别将平均附加时延降低 26.4% 和 56.8%，并将迁移导致的执行暂停从 5 次减为 1 次。

## Key technical points (EN)
- Proposes a Token Service Interface (TSI): a per-token-set descriptor binding service semantics (delivery requirement), temporal semantics (deadline/useful lifetime), and stateful semantics (execution-context reference) between application, RAN, and edge runtime.
- Extends Release-18 PDU-set QoS, which carries at most one delay budget/error rate per flow direction, to per-token-set declared targets plus execution-aware readiness forecasts from the system runtime.
- Drone-inspection case study over a decoupled RAN: importance-aware (saliency-weighted) allocation cuts required uplink resource by 27.1% (coupled access) and 41.3% (decoupled access) versus equal weighting, for the same delivery target.
- The coupled-to-decoupled resource-saving ratio is 24.3% higher with saliency weighting than without (coupled-to-decoupled cost ratios of 17.1 vs 21.2).
- Importance-weighting benefit shrinks from 59% (0.5 utility-quantile target) to 12% (0.95 target) as delivery strictness increases.
- Advance preparation from readiness forecasts: without it, utility at q = 0.75 and a 0.3 preparation fraction falls to 0.6364 (15.1% relative loss); the gap widens as the preparation fraction grows from 10% to 50%.
- At 8,192 context tokens (448 MiB KV state), an offline oracle (forward during brief visits, migrate for the final residence) reduces mean additional latency by 26.4% vs. fixed anchoring and 56.8% vs. migration at every handover, cutting migration-induced execution pauses from five to one.
- Edge-reasoning retained-context sizing example uses Qwen2.5-7B (28 layers, 4 KV heads/layer, 128 elements/head, 56 KiB/token at 16-bit precision).

## Key technical points (ZH)
- 提出令牌服务接口（TSI）：一种按令牌集划分的描述符，在应用、RAN 与边缘运行时之间绑定服务语义（交付要求）、时间语义（截止时间/有效生命周期）与状态语义（执行上下文引用）。
- 在 Release 18 PDU 集 QoS（每个流方向最多一个时延预算/误码率）基础上扩展为按令牌集声明目标，并由系统运行时提供面向执行状态的就绪预测。
- 基于解耦 RAN 的无人机巡检案例：相较于等权重分配，重要性加权（基于显著性）在相同交付目标下，于耦合接入场景削减所需上行资源 27.1%，于解耦接入场景削减 41.3%。
- 采用显著性加权时，耦合到解耦的资源节省比例还要再提高 24.3%（耦合到解耦的成本比分别为 17.1 与 21.2）。
- 随着交付严格度提高，重要性加权带来的收益从效用分位数目标 0.5 时的 59% 降至 0.95 时的 12%。
- 基于就绪预测的提前准备：若无提前准备，在 q=0.75、准备时间占比 0.3 时效用降至 0.6364（相对损失 15.1%）；准备时间占比从 10% 增至 50% 时差距扩大。
- 在 8,192 个上下文令牌（448 MiB KV 状态）下，离线理想策略（短暂驻留时转发、最终驻留时迁移）相较固定锚定降低平均附加时延 26.4%，相较每次切换均迁移降低 56.8%，并将迁移导致的执行暂停从 5 次减为 1 次。
- 边缘推理保留上下文的规模测算示例采用 Qwen2.5-7B（28 层，每层 4 个 KV 头，每头 128 个元素，16 位精度下每令牌 56 KiB）。

## Why it matters / what's new (EN)
The KB's cellular-ai bin has mostly covered AI used to optimize RAN internals (scheduling, energy, GPU sharing); this entry addresses the opposite direction — how the RAN should expose delivery-relevant semantics to AI applications that themselves generate and consume token streams — and is the first in the bin to extend Release-18 PDU-set QoS specifically for generative/embodied-AI traffic with quantified resource savings from a concrete decoupled-RAN case study.

## Why it matters / what's new (ZH)
知识库 cellular-ai 栏目此前的内容大多聚焦于"用 AI 优化 RAN 内部机制"（调度、能耗、GPU 共享）；本条目则关注相反的方向——RAN 应如何向本身产生并消费令牌流的 AI 应用暴露与交付相关的语义信息，并且是该栏目中首个专门针对生成式/具身 AI 流量扩展 Release-18 PDU 集 QoS 机制、并通过具体的解耦 RAN 案例给出量化资源节省数据的条目。

## Images

None.
