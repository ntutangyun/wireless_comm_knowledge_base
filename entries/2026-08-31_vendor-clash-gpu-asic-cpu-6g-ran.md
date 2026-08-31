---
id: 2026-08-31_vendor-clash-gpu-asic-cpu-6g-ran
date_published: 2026-08-25
date_found: 2026-08-31
type: industry-news
technology: cellular
title_en: "Ericsson, Nokia and Samsung split three ways on 6G RAN compute: is the TTI budget an argument for GPUs, ASICs or CPUs?"
title_zh: "爱立信、诺基亚、三星在 6G RAN 算力路线上三分：TTI 预算究竟支持 GPU、ASIC 还是 CPU？"
url: "https://www.lightreading.com/6g/ericsson-nokia-and-samsung-clash-over-6g-s-need-for-nvidia"
source_quality: full
topics: [AI-RAN, 6G, GPU, ASIC, vRAN, TTI, spectral-efficiency, Nvidia, CUDA, neural-network-accelerator, baseband]
topic_primary: cellular-ai
topics_secondary: [6g-vision, open-ran]
novelty_score: 3
---

## Summary (EN)

A Light Reading report by Iain Morris (25 August 2026) puts the three major non-Chinese RAN vendors on record, in their own words, over a question that has been implicit in AI-RAN coverage for a year: does 6G actually *require* GPUs in the radio access network? The answers diverge sharply, and — more usefully for a technical reader — they diverge over the same physical constraint, the transmission time interval.

**Nokia argues yes.** CTO Pallavi Mahajan's case is that GPUs unlock classes of algorithm that custom silicon simply cannot run, naming reproducing-kernel-Hilbert-space machine-learning techniques that demand large amounts of vector computation. Nokia's commercial position matches: roughly ten months before the article it accepted a **$1 billion investment from Nvidia**, committed to building RAN software on **CUDA**, and stated that its forthcoming Marvell custom silicon will be its last. The quantitative claims attached are a target of **doubling spectral efficiency by 2028**, and a new GPU card that stays inside a **190-watt power envelope** while delivering **1.5x capacity** and **2x spectral-efficiency** improvement, with **software-only upgrades for six years** without hardware change.

**Ericsson argues no** — and grounds the refusal in the TTI. Michael Begley (RAN Compute) and Gabriel Foglander (RAN Strategy) make the point that a RAN inference must complete inside the transmission time interval, cited at **500 microseconds**; a model that misses that deadline has produced a useless answer. That deadline, they argue, caps practical RAN models at **tens of thousands of parameters** rather than the millions-to-billions where GPU throughput dominates, so purpose-built ASICs — including Ericsson's own neural-network accelerator, a programmable matrix core inside its MIMO radios for AI scheduling and beamforming — remain the better performance-per-watt choice. The company's formal line is that "GPUs are one option for 6G and AI RAN, not the only one."

**Samsung takes a third position**: neither GPU-only nor CPU-only fits 6G. Its analogy is CPUs as versatile SUVs against GPUs as specialised sports cars; CPUs are the natural foundation for the majority of RAN workloads under TTI constraints, while GPUs may pay off on specifically intensive workloads where the throughput gain does not cost latency headroom. Samsung's investment is concentrated in virtualised RAN on Intel CPUs rather than custom silicon.

## Summary (ZH)

Light Reading 记者 Iain Morris 于 2026 年 8 月 25 日的报道，让三家主要非中国 RAN 厂商就一个在 AI-RAN 报道中隐含了一年的问题公开表态：6G 是否**必须**在无线接入网中使用 GPU？答案分歧鲜明；而对技术读者更有价值的是，三方的分歧围绕同一个物理约束展开——传输时间间隔（TTI）。

**诺基亚认为必须。** CTO Pallavi Mahajan 的论点是：GPU 解锁了定制芯片根本无法运行的一类算法，并具名提到需要大量向量计算的再生核希尔伯特空间（RKHS）机器学习方法。诺基亚的商业站位与此一致：约在文章发表前十个月，它接受了 **英伟达 10 亿美元投资**，承诺基于 **CUDA** 构建 RAN 软件，并表示即将推出的 Marvell 定制芯片将是其最后一代。相关量化主张为：**2028 年频谱效率翻倍**的目标；新款 GPU 板卡在 **190 瓦功耗包络**内实现 **1.5 倍容量**与 **2 倍频谱效率**提升，且可在**六年内仅靠软件升级**而无需更换硬件。

**爱立信认为不必**——并把否定论据落在 TTI 上。Michael Begley（RAN 算力）与 Gabriel Foglander（RAN 战略）指出，RAN 推理必须在传输时间间隔内完成，文中引述为 **500 微秒**；错过该期限的模型给出的答案已然无用。他们据此认为，该期限把实用的 RAN 模型规模限制在**数万参数**量级，而非 GPU 吞吐占优的百万至十亿量级；因此专用 ASIC——包括爱立信自研的神经网络加速器，即置于其 MIMO 射频中、用于 AI 调度与波束成形的可编程矩阵核——在每瓦性能上仍是更优选择。公司的正式表述是："GPU 是 6G 与 AI RAN 的一个选项，而非唯一选项。"

**三星持第三种立场**：纯 GPU 与纯 CPU 都不适合 6G。其比喻是 CPU 如多用途 SUV、GPU 如专用跑车；在 TTI 约束下，CPU 是绝大多数 RAN 负载的天然基础，而 GPU 可能在特定的高强度负载上带来回报——前提是吞吐收益不侵蚀时延余量。三星的投入集中在基于英特尔 CPU 的虚拟化 RAN，而非定制芯片。

## Key technical points (EN)

- Shared constraint framing all three positions: RAN inference must complete within the transmission time interval, cited in the article as 500 microseconds; a late result is a useless result.
- Ericsson's derived limit: the TTI deadline caps practical RAN AI models at tens of thousands of parameters, not the millions-to-billions scale at which GPU throughput advantages appear.
- Ericsson hardware: purpose-built RAN ASICs including a "neural network accelerator" — a programmable matrix core inside MIMO radios — used for AI-assisted scheduling and beamforming.
- Ericsson's formal position: "GPUs are one option for 6G and AI RAN, not the only one."
- Nokia's algorithmic argument (CTO Pallavi Mahajan): GPUs enable reproducing-kernel-Hilbert-space machine-learning methods requiring heavy vector computation that custom silicon cannot run.
- Nokia commercial commitments: ~$1bn Nvidia investment accepted roughly ten months earlier; RAN software to be built on CUDA; forthcoming Marvell custom silicon described as the company's last.
- Nokia quantitative claims: spectral efficiency doubling targeted by 2028; new GPU card within a 190 W envelope delivering 1.5x capacity and 2x spectral efficiency; software-only upgrades for six years without hardware change.
- Samsung's position: neither GPU-only nor CPU-only; CPUs as the natural foundation for most RAN workloads under TTI constraints, GPUs justified only for intensive workloads where throughput gains do not consume latency headroom. Investment concentrated in vRAN on Intel CPUs.
- Named sources: Michael Begley (Ericsson, RAN Compute), Gabriel Foglander (Ericsson, RAN Strategy), Pallavi Mahajan (Nokia CTO).
- The article contains no direct references to 3GPP Release 21 or to AI-native air-interface specification work — the disagreement is about implementation substrate, not about what the standard will require.
- Guards: article carries its own 25 August 2026 datestamp and named byline; all figures above are as reported by the vendors and are vendor claims, not measurements.

## Key technical points (ZH)

- 贯穿三方立场的共同约束：RAN 推理必须在传输时间间隔内完成，文中引述为 500 微秒；迟到的结果即无用的结果。
- 爱立信由此推出的上限：TTI 期限把实用 RAN AI 模型限制在数万参数量级，而非 GPU 吞吐优势显现的百万至十亿量级。
- 爱立信硬件：专用 RAN ASIC，含"神经网络加速器"——置于 MIMO 射频内的可编程矩阵核——用于 AI 辅助调度与波束成形。
- 爱立信正式立场："GPU 是 6G 与 AI RAN 的一个选项，而非唯一选项。"
- 诺基亚的算法论据（CTO Pallavi Mahajan）：GPU 使得需要大量向量计算的再生核希尔伯特空间机器学习方法成为可能，而定制芯片无法运行这类算法。
- 诺基亚的商业承诺：约十个月前接受英伟达约 10 亿美元投资；RAN 软件将基于 CUDA 构建；即将推出的 Marvell 定制芯片被描述为该公司最后一代。
- 诺基亚量化主张：2028 年频谱效率翻倍目标；新 GPU 板卡在 190 W 包络内实现 1.5 倍容量与 2 倍频谱效率；六年内仅软件升级、无需更换硬件。
- 三星立场：纯 GPU 与纯 CPU 皆不适用；TTI 约束下 CPU 是多数 RAN 负载的天然基础，GPU 仅在吞吐收益不消耗时延余量的高强度负载上才成立。投入集中于基于英特尔 CPU 的 vRAN。
- 具名信源：Michael Begley（爱立信，RAN 算力）、Gabriel Foglander（爱立信，RAN 战略）、Pallavi Mahajan（诺基亚 CTO）。
- 文章未直接提及 3GPP Release 21 或 AI 原生空口规范工作——分歧点在于实现基底，而非标准将要求什么。
- 守卫说明：文章自带 2026-08-25 日期戳与具名署名；上述数字均为厂商所述主张，非实测结果。

## Why it matters / what's new (EN)

This knowledge base has been tracking an AI-RAN vendor divergence as a narrative axis since Ericsson's AI-in-RAN software launch and Nokia's commercial AI-RAN platform were recorded weeks apart — CPU/ASIC software against a GPU platform. What was missing was the *technical* argument underneath the commercial positioning, stated by the vendors themselves rather than inferred from product launches. This report supplies it, and the useful surprise is that both sides reason from the same constraint. The transmission time interval is a hard real-time deadline, not a throughput budget, and it is the pivot on which the whole disagreement turns: Ericsson reads a 500 µs deadline as an upper bound on model size that makes GPU throughput irrelevant, while Nokia reads it as compatible with algorithm families whose per-inference vector work is large but bounded. That reframes a procurement debate into a falsifiable engineering question — what is the largest model class that closes timing inside a TTI on each substrate — and it is exactly the question that measurement work can settle.

The entry also completes the vendor triangle. Samsung had been present in this KB mainly through vRAN milestones rather than a stated 6G compute philosophy, and its position turns out not to be a midpoint between the other two but a different axis: hardware-agnostic virtualisation on merchant CPUs, with GPUs admitted only as a conditional accelerator. Read together with the O-RAN work on moving beamforming processing out to the radio unit and with processor-level CU/DU characterisation research, a coherent open question emerges across the KB — where in a disaggregated RAN does AI compute physically belong, and what does the latency budget at each point allow?

Caveats to keep in view: every number here is a vendor claim carried in trade press, not an independent measurement, and each vendor's technical argument aligns conveniently with capital it has already committed — Nvidia's investment in Nokia, Ericsson's ASIC programme, Samsung's Intel-based vRAN base. The 500 µs TTI figure is also a representative value rather than a universal one, and the ceiling it implies would move with slot configuration and with how much of an inference can be pipelined across intervals. Watch for independent benchmarks of model size versus TTI closure on each substrate, for whether 3GPP Release 21 6G work adopts any AI feature whose complexity settles the argument by fiat, and for whether Nokia's 190 W / 1.5x capacity card claim is reproduced in an operator trial.

## Why it matters / what's new (ZH)

本库自爱立信 AI-in-RAN 软件发布与诺基亚商用 AI-RAN 平台相隔数周被记录以来，一直把"AI-RAN 厂商路线分化"作为一条叙事主轴跟踪——CPU/ASIC 软件路线对 GPU 平台路线。此前缺失的，是商业站位之下的**技术**论证，且需由厂商自己说出而非从产品发布中推断。本报道补上了这一环，而有价值的意外之处在于：双方是从同一个约束出发推理的。传输时间间隔是硬实时期限，而非吞吐预算，整场分歧正围绕它旋转：爱立信把 500 µs 期限读作模型规模的上限，从而使 GPU 吞吐变得无关；诺基亚则把它读作与某类算法相容——这类算法的单次推理向量工作量虽大但有界。这就把一场采购辩论重构为可证伪的工程问题：在每种基底上，能在一个 TTI 内收敛的最大模型类别是什么——而这恰恰是实测工作可以裁决的问题。

本条目也补齐了厂商三角。三星此前在本库中主要以 vRAN 里程碑出现，而非以明确的 6G 算力哲学出现；如今看来，它的立场并非另两者的中点，而是另一条轴：基于商用 CPU 的硬件无关虚拟化，仅有条件地接纳 GPU 作为加速器。把它与 O-RAN 将波束成形处理外移至射频单元的工作、以及 CU/DU 处理器级刻画研究并读，本库层面浮现出一个连贯的开放问题——在解耦 RAN 中，AI 算力在物理上究竟该落在何处，各落点的时延预算又允许什么？

需持续留意的保留意见：此处每个数字都是行业媒体转述的厂商主张，而非独立实测；且每家厂商的技术论证都恰好与其已投入的资本相吻合——英伟达对诺基亚的投资、爱立信的 ASIC 计划、三星基于英特尔的 vRAN 基座。500 µs 的 TTI 数值也是代表值而非普适值，其隐含的上限会随时隙配置、以及推理可跨间隔流水化的程度而移动。关注要点：针对"模型规模 vs TTI 收敛"在各基底上的独立基准测试；3GPP Release 21 的 6G 工作是否会采纳某个复杂度足以直接裁决此争论的 AI 特性；以及诺基亚 190 W / 1.5 倍容量的板卡主张能否在运营商试验中被复现。

## Images
