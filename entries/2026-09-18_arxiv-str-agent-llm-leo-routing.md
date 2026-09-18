---
id: 2026-09-18_arxiv-str-agent-llm-leo-routing
date_published: 2026-09-17
date_found: 2026-09-18
technology: satellite
type: academic-paper
title_en: "STR-Agent: An LLM-Driven Agent for QoS-Aware Routing in LEO Satellite Networks"
title_zh: "STR-Agent：面向 LEO 卫星网络 QoS 感知路由的大语言模型驱动智能体"
url: "https://arxiv.org/abs/2609.20347"
source_quality: full
topics: [LEO-routing, LLM-agent, QoS, Walker-Delta-constellation, fine-tuning]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Lu, Peng, Sun, Wang, Guo, and Xu (Beijing University of Posts and Telecommunications, State Key Laboratory of Networking and Switching Technology) submitted this paper on 2026-09-17. The authors frame the problem as a gap in existing LEO routing research: prior learning-based routing methods optimize a fixed, predefined objective (e.g., minimize delay, or minimize delay subject to a throughput constraint) and cannot flexibly rebalance latency, throughput, load-balancing, and reliability across heterogeneous services, and they separately assume that service type and QoS requirements arrive as structured inputs rather than the natural-language requests real users issue.

To address this, the authors propose STR-Agent (Satellite Task-aware Routing Agent), which unifies four modules in a "perceive-execute-reflect" loop: a Perception Module that converts natural-language service requests into structured routing semantics; an Execution Module that performs tool-based hop-by-hop forwarding; an Experience Buffer that accumulates routing outcomes; and a Reflection Module that adjusts the service-to-routing-policy mapping based on real-time congestion and historical outcomes, rather than using one fixed routing objective. The Perception Module is built on a fine-tuned Qwen2.5-7B model, using a domain-specific supervised fine-tuning (SFT) dataset the authors constructed for LEO service-request understanding.

The authors evaluate STR-Agent in a simulated Walker-Delta LEO constellation (1,584 satellites at 550 km altitude, 23.28 GHz carrier, 2 GHz bandwidth). On intent-understanding accuracy, the base Qwen2.5-7B model scores 45.4% on average across three service classes (delay-sensitive, bandwidth-sensitive, best-effort); adding task-specific prompting raises this to 80.74%; and the authors' supervised fine-tuning raises it further to 92.45%. On routing performance against DQ-Dijkstra and QSMR baselines under a Poisson traffic model, the fine-tuned STR-Agent reduces end-to-end delay for delay-sensitive traffic from 696.01 ms (QSMR) to 260.11 ms at 270 Mbps load; reduces average per-hop queue length from 1.06 to 0.71 and per-hop queuing delay from 5.22 ms to 2.50 ms compared with DQ-Dijkstra at the same load; and reduces average hop count for best-effort traffic from 53.03 (QSMR) to 25.94 at 270 Mbps. A separate ablation isolating the Reflection Module shows it reduces average delay from 1,320 ms to 1,200 ms at 600 Mbps under high load, with the gap widening as load increases and negligible difference at light load (350-400 Mbps). Code is released at github.com/IntelliSensing/STR-Agent.

## Summary (ZH)

Lu、Peng、Sun、Wang、Guo 与 Xu（北京邮电大学，网络与交换技术国家重点实验室）于 2026 年 9 月 17 日提交本文。作者将问题定位为现有 LEO 路由研究的一个空白：既有的基于学习的路由方法通常针对固定的预定义目标进行优化（如最小化时延，或在满足某项吞吐量约束下最小化时延），难以灵活地在时延、吞吐量、负载均衡与可靠性之间按不同业务需求重新权衡；同时，这些方法普遍假设业务类型与 QoS 需求以结构化输入的形式给出，而非真实用户发出的自然语言请求。

为此，作者提出 STR-Agent（卫星任务感知路由智能体），将四个模块统一在"感知-执行-反思"闭环中：感知模块将自然语言业务请求转换为结构化路由语义；执行模块基于工具进行逐跳转发；经验缓冲区累积路由结果；反思模块根据实时拥塞状况与历史结果动态调整"业务-路由策略"映射，而非依赖单一固定的路由目标。感知模块基于经过微调的 Qwen2.5-7B 模型构建，并使用作者为 LEO 业务请求理解专门构建的领域特定监督微调（SFT）数据集。

作者在仿真的 Walker-Delta LEO 星座（1,584 颗卫星，高度 550 公里，载频 23.28 GHz，带宽 2 GHz）中评估 STR-Agent。在意图理解准确率方面，基础 Qwen2.5-7B 模型在时延敏感、带宽敏感、尽力而为三类业务上的平均准确率为 45.4%；加入任务特定提示后提升至 80.74%；经作者的监督微调后进一步提升至 92.45%。在与 DQ-Dijkstra 和 QSMR 基线对比的路由性能方面，采用泊松流量模型时，微调后的 STR-Agent 在 270 Mbps 负载下将时延敏感业务的端到端时延从 QSMR 的 696.01 毫秒降至 260.11 毫秒；在同等负载下相较 DQ-Dijkstra 将平均每跳队列长度从 1.06 降至 0.71、每跳排队时延从 5.22 毫秒降至 2.50 毫秒；在 270 Mbps 负载下将尽力而为业务的平均跳数从 QSMR 的 53.03 降至 25.94。另一项针对反思模块的消融实验显示，在 600 Mbps 高负载下反思模块可将平均时延从 1,320 毫秒降至 1,200 毫秒，且随负载升高差距增大，在 350-400 Mbps 轻负载下差异可忽略。代码已发布于 github.com/IntelliSensing/STR-Agent。

## Key technical points (EN)

- **Architecture**: unifies Perception (NL request to structured routing semantics), Execution (tool-based hop-by-hop forwarding), Experience Buffer, and Reflection (dynamic service-to-policy remapping) in one agent loop, rather than optimizing a single fixed routing objective.
- **Perception model**: fine-tuned Qwen2.5-7B via LoRA (rank 8, scaling factor 16, dropout 0.05, learning rate 2e-4, batch size 64, 3 epochs) on a purpose-built LEO service-request SFT dataset.
- **Simulation setup**: Walker-Delta constellation (Np=72, Nm=22, F=39) = 1,584 satellites at 550 km, 23.28 GHz carrier, 2 GHz bandwidth, 35 dBW EIRP, Gr/Ts=6.8 dB/K, 8-PSK at target BER 1e-7.
- **Intent-understanding accuracy**: Base model 45.4% -> Prompt-based 80.74% -> SFT-based 92.45% (average across delay-sensitive, bandwidth-sensitive, best-effort classes); best-effort requests are hardest (8.27% for the base model) due to weaker semantic cues.
- **Routing performance vs. DQ-Dijkstra / QSMR** (270 Mbps load): end-to-end delay 696.01 ms -> 260.11 ms; per-hop queue length 1.06 -> 0.71; per-hop queuing delay 5.22 ms -> 2.50 ms; average hop count 53.03 -> 25.94.
- **Reflection Module ablation**: at 600 Mbps, average delay drops from 1,320 ms (No Reflect) to 1,200 ms (Full), with the gap widening under higher congestion.
- **Code release**: github.com/IntelliSensing/STR-Agent.

## Key technical points (ZH)

- **架构**：将感知（自然语言请求转结构化路由语义）、执行（基于工具的逐跳转发）、经验缓冲区与反思（业务-策略动态重映射）统一于同一智能体闭环，而非优化单一固定路由目标。
- **感知模型**：基于 LoRA（秩 8，缩放因子 16，dropout 0.05，学习率 2e-4，批大小 64，训练 3 轮）对 Qwen2.5-7B 进行微调，训练数据为作者专门构建的 LEO 业务请求 SFT 数据集。
- **仿真设置**：Walker-Delta 星座（Np=72，Nm=22，F=39）共 1,584 颗卫星，高度 550 公里，载频 23.28 GHz，带宽 2 GHz，发射 EIRP 35 dBW，Gr/Ts=6.8 dB/K，8-PSK 调制，目标误码率 1e-7。
- **意图理解准确率**：基础模型 45.4% -> 基于提示 80.74% -> 基于 SFT 92.45%（时延敏感、带宽敏感、尽力而为三类平均）；尽力而为请求最难识别（基础模型仅 8.27%），原因是语义线索较弱。
- **路由性能对比 DQ-Dijkstra / QSMR**（270 Mbps 负载）：端到端时延 696.01 毫秒 -> 260.11 毫秒；每跳队列长度 1.06 -> 0.71；每跳排队时延 5.22 毫秒 -> 2.50 毫秒；平均跳数 53.03 -> 25.94。
- **反思模块消融**：600 Mbps 负载下，平均时延从 1,320 毫秒（无反思）降至 1,200 毫秒（完整版），且随拥塞加剧差距增大。
- **代码开源**：github.com/IntelliSensing/STR-Agent。

## Why it matters / what's new (EN)

This KB's LEO-routing thread has so far covered onboard autonomous/topology-driven routing (2026-09-09 GNSS onboard routing) and multi-orbit orchestration papers, generally with fixed or predefined optimization objectives. STR-Agent's distinguishing contribution, per the paper's own framing, is treating QoS-aware LEO routing as a closed-loop "intent-to-routing" problem: translating unstructured natural-language service requests into structured routing semantics via a fine-tuned LLM, then adapting the routing policy in real time via a reflection loop rather than committing to one fixed objective at training time.

## Why it matters / what's new (ZH)

知识库现有的 LEO 路由相关条目此前主要涉及星载自主/拓扑驱动路由（2026-09-09 GNSS 星载路由条目）以及多轨道编排类论文，普遍采用固定或预定义的优化目标。按论文自身的表述，STR-Agent 的区别性贡献在于将 QoS 感知的 LEO 路由问题定位为一个闭环的"意图到路由"问题：通过微调后的大语言模型将非结构化的自然语言业务请求转换为结构化路由语义，再通过反思闭环实时调整路由策略，而非在训练阶段就固定单一优化目标。

## Images

None.
