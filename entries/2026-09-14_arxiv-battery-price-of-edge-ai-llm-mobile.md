---
id: 2026-09-14_arxiv-battery-price-of-edge-ai-llm-mobile
date_published: 2026-07-10
date_found: 2026-09-14
type: academic-paper
technology: edge-ai
title_en: "The Battery Price of edge AI: A study of the Environmental Impact of LLM Inference on Mobile Devices"
title_zh: "边缘 AI 的电池代价：移动设备上大模型推理环境影响研究"
url: "https://arxiv.org/abs/2609.11940"
source_quality: full
topics: [on-device-inference, energy-measurement, quantization, embodied-carbon, sustainability]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

This paper (lead author Édouard Guégain, Greenspector; co-author Tristan Coignion, affiliation not stated in the paper) runs a measured comparison of on-device large language model (LLM) inference against server-side batched inference, evaluating 18 model configurations across three families (Llama 3.2 1B/3B, Gemma 3 1B/4B, Qwen 3 1.7B/4B) at three quantization levels (Q2_K, Q4_0, Q6_K), plus a server-only F16 accuracy baseline (F16 could not complete the performance/energy profiling and was evaluated for accuracy alone, on the server only), predominantly on one real smartphone (17 of the 18 configurations on iPhone 14 / Apple A15 Bionic, with Pixel 8 / Google Tensor G3 covering the remainder) and a server (NVIDIA A100-SXM4-40GB + AMD EPYC 7513). It measures energy per generated token, inter-token latency, accuracy, and models battery-cycle consumption, then folds in device manufacturing (embodied) carbon to compute a full lifecycle environmental-impact figure — not just an operational-electricity one.

**Note on dating:** the paper's own page states a submission date of 2026-07-10, roughly two months before the 2609.xxxxx arXiv id under which it became visible in this scout's dated listing sweep on 2026-09-14 — a submission-vs-announcement lag. This is a distinct phenomenon from the prior-publication backfill pattern flagged in some other KB entries (e.g. the 2026-09-07 Para-Pipe and 2026-09-10 Elastoformer entries, which backfilled papers already published elsewhere — Para-Pipe's own entry records zero submission-to-arXiv lag — rather than exhibiting this kind of delayed listing appearance). `date_published` is set to the paper's own stated date rather than the arXiv announcement-id month.

## Summary (ZH)

本文（第一作者 Édouard Guégain，隶属 Greenspector；合著者 Tristan Coignion 在论文中未标注所属机构）对端侧大模型（LLM）推理与服务器端批处理推理进行了实测对比：主要在一部真实智能手机上（18 种配置中有 17 种在 iPhone 14 / Apple A15 Bionic 上完成，其余配置在 Pixel 8 / Google Tensor G3 上完成），以及一台服务器（NVIDIA A100-SXM4-40GB + AMD EPYC 7513）上，评测了三个模型家族（Llama 3.2 1B/3B、Gemma 3 1B/4B、Qwen 3 1.7B/4B）在三种量化精度（Q2_K、Q4_0、Q6_K）下共 18 种配置，另加一个仅在服务器上评测的 F16 精度基线（F16 无法完成性能/能耗画像，仅用于服务器端的准确率评测）。论文测量了每 token 能耗、逐 token 延迟、准确率，并建模了电池循环消耗，进而纳入设备制造（内含碳）排放，计算出完整生命周期的环境影响数字——而非仅仅是运行时电耗。

**关于日期的说明：** 论文自身页面标注提交日期为 2026-07-10，比本侦察在 2026-09-14 的定期列表扫描中看到其出现所对应的 2609.xxxxx arXiv 编号早约两个月——这是一种「提交—公告」滞后现象。这与本知识库其他条目所记录的「延迟列表可见」模式（例如 2026-09-07 收录的 Para-Pipe 与 2026-09-10 收录的 Elastoformer 条目）不同：那些条目属于对已在别处发表论文的补录（Para-Pipe 自身条目记载其提交 arXiv 与出现之间零滞后），而非本文这种提交—公告滞后。`date_published` 采用论文自身标注日期，而非 arXiv 公告编号所对应的月份。

## Key technical points (EN)

- **Headline comparison**: on-device inference is on average 3x less energy-efficient per token than server-side batched inference; a single-user, non-batched server configuration is itself 5.4x less energy-efficient than the batched baseline (measured on the A100 server, not on the phones).
- **Quantization-energy relationship differs by platform**: on the A100 server, energy is non-monotonic in bit-width — Q4_0 (4-bit) achieves *lower* energy per token than both the more aggressive Q2_K (2-bit) and the less aggressive Q6_K (6-bit), because Q4_0 benefits from optimized Tensor Core integer kernels on the A100 while Q2_K pays an unpacking-overhead penalty. On the phones, by contrast, inference is primarily memory- and DRAM-energy-bound, so reductions in model size (lower bit-width) instead yield *greater* energy savings — the opposite dependence from the server case, so "more aggressive quantization = less energy" holds on mobile but not on the server.
- **Pareto front**: 8 of the 18 model/quantization configurations lie on the accuracy-energy Pareto front, giving a concrete basis for a battery-aware model router that switches configuration by task or battery state.
- **Lifecycle carbon result**: accounting for device manufacturing, on-device inference produces 5-7x more CO2-equivalent emissions per token than batched-server inference, and 88-90% of that on-device impact is attributable to embodied (manufacturing) carbon rather than electricity consumption — modeled at 500-2,000 battery full-charge-cycle device lifespans (1,000 as the central assumption). Note: the paper is internally inconsistent on this figure — its abstract states 88-90%, while its Discussion and Conclusion sections instead state 84-87%; this entry follows the abstract's figure.
- **Hardware/models**: iPhone 14 (A15 Bionic), Pixel 8 (Tensor G3); NVIDIA A100-SXM4-40GB + EPYC 7513 server; Llama 3.2, Gemma 3, Qwen 3 families at 1-4B parameters.

## Key technical points (ZH)

- **核心对比**：端侧推理平均每 token 能耗效率比服务器批处理推理低 3 倍；单用户、非批处理的服务器配置本身能耗效率又比批处理基线低 5.4 倍（该测量在 A100 服务器上进行，而非手机上）。
- **量化—能耗关系因平台而异**：在 A100 服务器上，能耗与量化位宽呈非单调关系——Q4_0（4-bit）的每 token 能耗反而低于更激进的 Q2_K（2-bit）与更保守的 Q6_K（6-bit），原因是 Q4_0 能利用 A100 上优化过的 Tensor Core 整数内核，而 Q2_K 需承担解包开销。相反，在手机上，推理主要受内存与 DRAM 能耗瓶颈限制，因此模型体积（位宽）越小反而能带来更大的节能——这与服务器端的规律恰好相反，即「量化越激进越省电」这一直觉在手机上成立，但在服务器上不成立。
- **帕累托前沿**：18 种模型/量化配置中有 8 种位于「准确率—能耗」帕累托前沿上，为构建按任务或电量状态切换配置的「电量感知模型路由器」提供了具体依据。
- **全生命周期碳排放结果**：计入设备制造环节后，端侧推理每 token 的二氧化碳当量排放比批处理服务器推理高 5-7 倍，其中 88%-90% 的端侧影响来自设备制造（内含碳），而非用电——建模基于 500-2,000 次满充循环的设备寿命假设（以 1,000 次为中心值）。注：该数字在论文内部并不一致——摘要中给出的是 88%-90%，而正文的讨论与结论部分给出的却是 84%-87%；本条目采用摘要中的数字。
- **硬件/模型**：iPhone 14（A15 Bionic）、Pixel 8（Tensor G3）；NVIDIA A100-SXM4-40GB + EPYC 7513 服务器；Llama 3.2、Gemma 3、Qwen 3 家族，参数量 1-4B。

## Why it matters / what's new (EN)

This is a rare independent, measured (not vendor-claimed) lifecycle study directly against this domain's most persistent disclosure gap: flagship on-device AI announcements (Aion, AFM 3, VENTUNO Q, and others already in this KB) routinely omit device-side energy or environmental figures entirely. The paper's central finding runs counter to the implicit local-first sustainability narrative this KB has repeatedly encountered in home-AI-assistant and AI-PC coverage: on-device inference is not automatically greener than cloud inference once manufacturing carbon and the batching advantage are counted, and the quantization-energy relationship is non-monotonic rather than "more compression = always better," a nuance that matters for anyone building a battery-aware model router. It complements rather than duplicates this KB's existing on-device measurement entries (e.g. the phase-level energy-profiling paper from 2026-09-03) by adding the manufacturing/lifecycle lens those measurement papers do not cover.

## Why it matters / what's new (ZH)

这是一项罕见的独立实测（而非厂商宣称）全生命周期研究，直接触及本领域最持续存在的「披露缺口」：本知识库已收录的多个旗舰级端侧 AI 发布（Aion、AFM 3、VENTUNO Q 等）普遍完全未披露设备侧能耗或环境影响数字。本文的核心发现与本知识库在「家庭 AI 助手」「AI PC」条目中反复遇到的「本地优先=更环保」隐含叙事相悖：一旦计入制造环节碳排放与批处理优势，端侧推理并不天然比云端推理更环保；量化—能耗关系也并非单调（并非「压缩越激进越省电」），这一细节对构建电量感知模型路由器具有实际意义。本文与本知识库已有的端侧实测条目（如 2026-09-03 收录的分阶段能耗画像论文）形成互补而非重复，补上了那些测量类论文尚未覆盖的「制造/全生命周期」视角。

## Images

*(No redistributable images for this entry — text-only extraction from the arXiv HTML rendering, no figures reproduced.)*
