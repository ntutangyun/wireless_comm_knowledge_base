---
id: 2026-10-12_arxiv-weaver-ai-ran-gpu-sharing-fm-training
date_published: 2026-09-28
date_found: 2026-10-12
type: academic-paper
technology: cellular
title_en: "Weaver: A System for AI-RAN Compute Sharing with Foundation Model Training"
title_zh: "Weaver：面向 AI-RAN 算力共享与基础模型训练的系统"
url: "https://arxiv.org/abs/2609.35276"
source_quality: full
topics: [AI-RAN, GPU-sharing, foundation-model-training, GreenContexts, O-RAN, MAC-scheduler, decentralized-training]
topic_primary: cellular-ai
topics_secondary: [mec, open-ran]
novelty_score: 4
---

## Summary (EN)
Leyang Xue, Tianxin Wang, Xin Zhe Khooi, Jiaxun Yang, Dheeraj Mahendiran, Yufeng Xia, Mun Choon Chan, Myungjin Lee, and Mahesh K. Marina (University of Edinburgh; National University of Singapore; Cisco Research) present what they state is the first characterization of spare GPU capacity on AI-RAN infrastructure — cell sites equipped with GPU-accelerated hardware that can colocate non-RAN workloads with primary RAN processing — measured at both micro-scale (across transmission slots within a cell site) and macro-scale (across sites). Their analysis finds that 40-85% of GPU capacity on such infrastructure is unused; this spare capacity is temporally bursty at individual sites (tracking bursty RAN traffic) but spatially complementary across sites, meaning aggregating spare capacity across a deployment can smooth out what looks highly variable at any single site. The authors frame foundation model (FM) training — one of the most compute-intensive AI workloads — as a representative, challenging non-RAN workload to test whether this spare capacity can be safely and efficiently harnessed, motivated by a back-of-the-envelope calculation that one GH200-class server (~1 PFLOP) per 20 cells across the roughly 20 million 4G/5G RAN cells worldwide would total about 1 ZFLOP, which the authors say could potentially rival today's ~4 ZFLOPS of deployed GPU capacity.

To harness this safely, the paper presents WEAVER, which adopts a RAN-first design built on two components. First, a RAN-centric spare-compute controller is embedded directly inside the MAC scheduler (rather than relying on external prediction of RAN GPU demand as in prior work), performing compute-aware scheduling that smooths RAN-related GPU usage despite inherent RAN traffic burstiness, using GreenContexts-based dynamic GPU sharing to unlock maximal usable spare capacity while enforcing per-slot deadlines that guarantee RAN performance is not degraded. Second, a two-level elastic FM-training framework adapts to the resulting dynamic, heterogeneous spare capacity: at the inter-site level, a centralized coordinator dynamically redistributes training computation and selectively reconfigures model layout across cell sites only when long-term compute/traffic shifts occur; at the intra-site level, GEMM operations that dominate FM training are split into fine-grained, elastic tiles matching instantaneous available spare compute. A publish-subscribe interface couples the two components so FM training continuously adapts to the RAN-approved spare GPU resource at each site. On an O-RAN-aligned system prototype, WEAVER creates up to 4.9x more usable spare compute than baseline approaches and utilizes up to 83% of the available spare capacity. On a multi-site testbed, WEAVER improves FM training throughput by 2.1-3.7x over baseline approaches, and the authors report that the controller achieves this without degrading RAN performance on a live 5G NR stack.

## Summary (ZH)
Leyang Xue、Tianxin Wang、Xin Zhe Khooi、Jiaxun Yang、Dheeraj Mahendiran、Yufeng Xia、Mun Choon Chan、Myungjin Lee 与 Mahesh K. Marina（爱丁堡大学；新加坡国立大学；思科研究院）提出了据作者所述是首个针对 AI-RAN 基础设施（配备 GPU 加速硬件、可将非 RAN 工作负载与主 RAN 处理共置的蜂窝站点）空闲 GPU 算力的刻画研究，测量范围涵盖微观尺度（单一站点内的传输时隙之间）与宏观尺度（跨站点）。分析发现，此类基础设施中 40%–85% 的 GPU 算力处于闲置状态；这部分空闲算力在单一站点内呈现出明显的时间突发性（随 RAN 业务波动而变化），但在跨站点维度上呈现出空间互补性，意味着将空闲算力跨部署汇聚可以平滑掉单一站点视角下看似剧烈的波动。作者将基础模型（FM）训练——最为计算密集的 AI 工作负载之一——作为检验该空闲算力能否被安全高效利用的代表性、具有挑战性的非 RAN 工作负载，其研究动机来自一项粗略估算：若在全球约 2000 万个 4G/5G RAN 小区中每 20 个小区部署一台 GH200 级服务器（约 1 PFLOP），总算力约 1 ZFLOP，作者认为这有望与当前全球已部署的约 4 ZFLOPS GPU 算力相提并论。

为安全地利用这部分算力，论文提出了 WEAVER 系统，采用"RAN 优先"的设计理念，由两个组件构成。其一，一个以 RAN 为中心的空闲算力控制器被直接嵌入 MAC 调度器内部（而非像既有工作那样依赖对 RAN GPU 需求的外部预测），执行计算感知调度，在 RAN 业务固有突发性的情况下仍能平滑 RAN 相关的 GPU 使用，并借助基于 GreenContexts 的动态 GPU 共享机制，在强制执行逐时隙截止期限以保证 RAN 性能不受影响的前提下，释放出最大可用的空闲算力。其二，一个两级弹性 FM 训练框架以适配由此产生的动态、异构的空闲算力：在站点间层面，一个集中式协调器仅在长期算力/业务发生变化时，才动态地在各蜂窝站点间重新分配训练计算并有选择地重构模型布局；在站点内层面，主导 FM 训练计算量的通用矩阵乘法（GEMM）运算被拆分为细粒度、弹性的计算块，以匹配瞬时可用的空闲算力。一个发布/订阅接口将这两个组件耦合起来，使 FM 训练能够持续适配各站点经 RAN 批准的空闲 GPU 资源。在与 O-RAN 对齐的系统原型上，WEAVER 相较基线方法最多可创造 4.9 倍更多可用空闲算力，并利用高达 83% 的可用空闲容量。在多站点测试床上，WEAVER 相较基线方法将 FM 训练吞吐量提升 2.1 至 3.7 倍，作者报告该控制器在实时 5G NR 协议栈上实现这些增益时未降低 RAN 性能。

## Key technical points (EN)
- First characterization (per the authors) of spare GPU capacity on AI-RAN infrastructure at micro-scale (within-site, across transmission slots) and macro-scale (across sites): 40-85% of GPU capacity is unused, temporally bursty per-site but spatially complementary across sites.
- Back-of-the-envelope estimate: one GH200-class server (~1 PFLOP) per 20 cells across ~20 million global 4G/5G RAN cells would total ~1 ZFLOP, which the authors say could potentially rival today's ~4 ZFLOPS of deployed GPU capacity.
- WEAVER's RAN-centric spare-compute controller is embedded directly in the MAC scheduler (not an external predictor) and uses GreenContexts-based dynamic GPU sharing with per-slot deadline enforcement.
- Two-level elastic FM-training framework: inter-site centralized redistribution on long-term shifts; intra-site fine-grained, elastic GEMM tiling matched to instantaneous spare compute; coupled via a publish-subscribe interface.
- On an O-RAN-aligned prototype: up to 4.9x more usable spare compute and up to 83% spare-capacity utilization versus baselines.
- On a multi-site testbed: 2.1-3.7x FM training throughput improvement over baseline approaches.

## Key technical points (ZH)
- 据作者所述，这是首个在微观尺度（站点内、跨传输时隙）与宏观尺度（跨站点）同时刻画 AI-RAN 基础设施空闲 GPU 算力的研究：40%–85% 的 GPU 算力处于闲置状态，单站点内具有时间突发性，但跨站点呈现空间互补性。
- 粗略估算：若在全球约 2000 万个 4G/5G RAN 小区中每 20 个小区部署一台 GH200 级服务器（约 1 PFLOP），总算力约 1 ZFLOP，作者认为这有望与当前全球已部署的约 4 ZFLOPS GPU 算力相提并论。
- WEAVER 的 RAN 中心式空闲算力控制器直接嵌入 MAC 调度器内部（而非外部预测器），采用基于 GreenContexts 的动态 GPU 共享机制，并强制执行逐时隙截止期限。
- 两级弹性 FM 训练框架：站点间层面仅在长期变化时进行集中式重分配；站点内层面将 GEMM 运算拆分为匹配瞬时空闲算力的细粒度弹性计算块；两者通过发布/订阅接口耦合。
- 在与 O-RAN 对齐的原型系统上：相较基线最多创造 4.9 倍更多可用空闲算力，空闲容量利用率最高达 83%。
- 在多站点测试床上：FM 训练吞吐量相较基线方法提升 2.1 至 3.7 倍。

## Why it matters / what's new (EN)
The authors present it as the first characterization of spare GPU capacity in AI-RAN systems; within this KB's cellular-ai bin it is the first entry pairing such a characterization with a working system and quantified training-throughput gains (2.1-3.7x) on a multi-site testbed.

## Why it matters / what's new (ZH)
作者称其为首个针对 AI-RAN 系统空闲 GPU 算力的刻画研究；在本知识库 cellular-ai 栏目中，这是首个将此类刻画与可运行系统及多站点测试床上量化的训练吞吐量增益（2.1–3.7 倍）相结合的条目。

## Images

None.
