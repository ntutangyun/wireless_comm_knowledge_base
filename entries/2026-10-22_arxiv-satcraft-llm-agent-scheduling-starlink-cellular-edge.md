---
id: 2026-10-22_arxiv-satcraft-llm-agent-scheduling-starlink-cellular-edge
date_published: 2026-10-21
date_found: 2026-10-22
technology: satellite
type: academic-paper
title_en: "SatCraft: LLM-Agent Revision of Joint Computation and Transmission Scheduling Policies for Satellite-Cellular Edge Services"
title_zh: "SatCraft：由大语言模型智能体修订卫星-蜂窝边缘服务的计算与传输联合调度策略"
url: "https://arxiv.org/abs/2610.29588"
source_quality: full
topics: [Starlink, cellular, edge-services, scheduling, LLM-agent, policy-library, deadline-aware, measurement-driven]
topic_primary: sat-ai
topics_secondary: [starlink, leo-constellations]
novelty_score: 3
---

## Summary (EN)

Luo, Deng, Zhang, Yang and Chu (arXiv 2610.29588, submitted 21 October 2026) study mobile edge services that combine local computation with Starlink and cellular access in areas where terrestrial coverage is intermittent. The paper's example is an inspection vehicle that must deliver an urgent report and usable evidence before a deadline.

Each data product can be sent raw or processed first; processing reduces the transmitted data but adds delay and reveals a quality outcome. The shared constraints are one local processor, per-slot Starlink and cellular capacity, a cellular traffic budget and a cellular activation budget with a startup delay. The objective is to maximize the cumulative value of services completed by their deadlines with acceptable quality.

SatCraft uses a large language model agent that revises the executable code of the scheduling policy from execution feedback. Each revision passes static checks and a complete-run evaluation; valid policies enter a policy library (64 policies in the reported configuration), and a shallow decision-tree selector (depth up to 3, 11 features from the first 8 slots of access data) picks one policy per episode.

The evaluation uses 60 paired Starlink and cellular (AT&T or Verizon) drive-measurement traces from Alaska (June 2024) and Hawaii (August 2024), 119 one-second slots each, split into 960 workload cases. The Starlink median is 69.18 Mbit/s (Alaska) and 91.73 Mbit/s (Hawaii), against 7.87 and 8.91 Mbit/s for cellular. On the test set SatCraft reaches a cumulative value of 23,672, which is 3.61%-16.89% above the five baselines (EDF, Rolling, ADPRL, EdgeOPT, TF-DDRL), completes 91.09% of services, fully serves 270 of 360 cases, and takes a mean of 25.02 ms per scheduling call. The paper frames the workload-model processing cost and quality (rather than a concrete task) and the unmodelled uplink access and device energy as future work, not as limitations.

## Summary (ZH)

Luo、Deng、Zhang、Yang 和 Chu（arXiv 2610.29588，2026 年 10 月 21 日提交）研究在地面覆盖时断时续的区域，将本地计算与 Starlink 及蜂窝接入结合的移动边缘服务。论文的示例是一辆巡检车，需要在截止时间前交付紧急报告和可用证据。

每个数据产品既可以原始发送，也可以先处理；处理会减少传输数据量，但增加时延并产生质量结果。共享约束包括：一个本地处理器、每时隙 Starlink 与蜂窝容量、蜂窝流量预算，以及带启动延迟的蜂窝激活预算。目标是最大化在截止时间前以可接受质量完成的服务的累计价值。

SatCraft 使用大语言模型智能体，根据执行反馈修订调度策略的可执行代码。每次修订都要通过静态检查和完整运行评估；有效策略进入策略库（所报告配置中为 64 个策略），再由浅层决策树选择器（深度不超过 3，使用接入数据前 8 个时隙的 11 个特征）为每个回合选择一个策略。

评估使用 60 条配对的 Starlink 与蜂窝（AT&T 或 Verizon）路测轨迹，分别来自阿拉斯加（2024 年 6 月）和夏威夷（2024 年 8 月），每条 119 个一秒时隙，拆分为 960 个工作负载用例。Starlink 中位速率为 69.18 Mbit/s（阿拉斯加）和 91.73 Mbit/s（夏威夷），蜂窝为 7.87 和 8.91 Mbit/s。在测试集上，SatCraft 的累计价值为 23,672，比五个基线（EDF、Rolling、ADPRL、EdgeOPT、TF-DDRL）高 3.61%-16.89%，完成 91.09% 的服务，360 个用例中完整服务 270 个，每次调度调用平均耗时 25.02 ms。论文将处理成本与质量来自工作负载模型（而非具体任务）以及未建模的上行接入和设备能耗视为未来工作，而非局限。

## Key technical points (EN)

- **Setting**: local compute plus Starlink plus cellular; deadline- and quality-constrained services; raw-versus-processed choice per product.
- **Method**: LLM agent rewrites policy code from execution feedback; static checks and complete-run evaluation gate each revision.
- **Deployment form**: policy library (64 policies) with a depth-3 decision-tree selector over 11 features from the first 8 slots; one policy per episode.
- **Data**: 60 NUWiNS Starlink+cellular drive traces (Alaska, Hawaii), 119 one-second slots each; 360/240/360 development/validation/test cases.
- **Results**: cumulative value 23,672; +5.23% over TF-DDRL, +11.43% over EdgeOPT, +16.89% over ADPRL; 91.09% of services completed; 25.02 ms mean call time.
- **Scope and future work**: workload model rather than a concrete task and no uplink or device-energy model are framed by the paper as future work; two US regions is an observation of this entry.

## Key technical points (ZH)

- **场景**：本地计算加 Starlink 加蜂窝；受截止时间与质量约束的服务；每个产品可选原始或处理后发送。
- **方法**：LLM 智能体根据执行反馈改写策略代码；静态检查与完整运行评估把关每次修订。
- **部署形式**：策略库（64 个策略）加深度 3 的决策树选择器，使用前 8 个时隙的 11 个特征；每回合一个策略。
- **数据**：60 条 NUWiNS Starlink+蜂窝路测轨迹（阿拉斯加、夏威夷），每条 119 个一秒时隙；开发/验证/测试用例为 360/240/360。
- **结果**：累计价值 23,672；比 TF-DDRL 高 5.23%，比 EdgeOPT 高 11.43%，比 ADPRL 高 16.89%；完成 91.09% 的服务；平均调用耗时 25.02 ms。
- **范围与未来工作**：使用工作负载模型而非具体任务、无上行与设备能耗模型，论文视为未来工作；仅覆盖美国两个地区为本条目的观察。

## Why it matters / what's new (EN)

The paper pairs measured Starlink and cellular throughput traces with a scheduler whose policy code, rather than only its parameters, is revised by an LLM agent. Gains are reported against five named baselines on a held-out test split; all figures here are as stated in the paper.

## Why it matters / what's new (ZH)

论文把实测的 Starlink 与蜂窝吞吐轨迹同一个调度器结合，该调度器的策略代码（而不仅是参数）由 LLM 智能体修订。收益是在保留的测试集上对五个具名基线给出的；本文数字均来自论文。

## Images

None.
