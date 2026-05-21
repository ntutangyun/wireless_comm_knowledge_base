---
id: 2026-05-21_arxiv-iterate-ebpf-rate-control
date_published: 2026-05-04
date_found: 2026-05-21
type: academic-paper
title_en: "IteRate: Autonomous AI Synthesis of In-Kernel eBPF Wi-Fi Rate Control Algorithms"
title_zh: "IteRate：内核 eBPF Wi-Fi 速率控制算法的自主 AI 合成"
url: "https://arxiv.org/abs/2605.02542"
source_quality: full
topics: [agentic-AI, rate-control, eBPF, MAC-layer]
topic_primary: agentic-wifi
topics_secondary: [ai-for-wifi]
novelty_score: 4
---

## Summary (EN)
IteRate is an autonomous AI research system that closes the loop on Wi-Fi rate control algorithm development — from hypothesis generation to in-kernel deployment and evaluation. Built by researchers at MIT CSAIL, the system uses a multi-agent AI architecture to conduct the full scientific cycle: formulating hypotheses, writing eBPF programs that run inside the Linux kernel, deploying them over-the-air to Wi-Fi devices, collecting fine-grained per-frame telemetry (MCS, retry counts), and iterating based on experimental evidence, all without human intervention.

The system makes three contributions. First, a novel kernel module that exposes per-frame hardware telemetry — including modulation and coding scheme (MCS) indices and per-frame retry counts — to eBPF programs, enabling data-driven rate control logic that runs safely inside the kernel. Second, a structured agentic architecture employing specialized agents for algorithm design, experiment execution, and data analysis, coordinated via a hypothesis-driven research protocol with persistent knowledge. Third, a closed-loop pipeline that automates cross-compilation, deployment, and evaluation of in-kernel logic onto embedded Wi-Fi targets.

Evaluated on a 58-node testbed across five workloads, IteRate's synthesized rate controllers achieved 21% faster web-page loads, 7% higher video QoE, and 21% higher peak throughput relative to Minstrel-HT — the de facto Linux Wi-Fi rate control algorithm that has remained largely unchanged for over a decade. The work demonstrates that AI agents equipped with kernel-level instrumentation and a disciplined scientific workflow can effectively automate the design and optimization of fundamental Wi-Fi MAC-layer algorithms.

## Summary (ZH)
IteRate 是一个自主 AI 研究系统，实现了 Wi-Fi 速率控制算法从假设生成到内核部署与评估的闭环开发。该系统由 MIT CSAIL 研究人员构建，利用多智能体 AI 架构执行完整的科学研究周期：提出假设、编写在 Linux 内核中运行的 eBPF 程序、通过空口部署到 Wi-Fi 设备、采集细粒度逐帧遥测数据（MCS、重传次数），并基于实验证据迭代改进，全程无需人工干预。

系统有三个贡献。其一，一个新颖的内核模块，将逐帧硬件遥测（包括 MCS 索引和逐帧重传次数）暴露给 eBPF 程序，使数据驱动的速率控制逻辑能在内核中安全运行。其二，一个结构化智能体架构，由专门负责算法设计、实验执行和数据分析的智能体组成，通过假设驱动的科研协议与持久化知识进行协调。其三，一个自动化闭环流水线，实现内核逻辑的交叉编译、部署及在嵌入式 Wi-Fi 目标上的评估。

在 58 节点测试床上跨五种工作负载的评估中，IteRate 合成的速率控制器相对 Minstrel-HT（十多年来基本未变的 Linux Wi-Fi 速率控制算法）实现了 21% 的网页加载加速、7% 的视频体验质量提升和 21% 的峰值吞吐提升。该工作证明，配备内核级测量手段和规范科研流程的 AI 智能体，能够有效自动化 Wi-Fi MAC 层基础算法的设计与优化。

## Key technical points (EN)
- **Multi-agent AI architecture**: Specialized agents for algorithm design (generates eBPF C code), experiment execution (deploys to testbed), and data analysis (evaluates telemetry); coordinated via hypothesis-driven protocol
- **Kernel-level eBPF rate control**: Novel kernel module exposes per-frame MCS, retry counts, and hardware TX/RX statistics to eBPF programs running inside the Linux kernel (mac80211/minstrel integration)
- **Closed-loop pipeline**: Automated cross-compilation for embedded Wi-Fi SoCs, over-the-air deployment, telemetry collection, and iterative refinement — no human in the loop
- **58-node testbed, 5 workloads**: Web browsing, video streaming, bulk transfer, VoIP, and mixed traffic
- **Results vs Minstrel-HT**: 21% faster page loads, 7% higher video QoE, 21% higher peak throughput
- **Persistent knowledge**: Agent maintains memory of past experiments to avoid repeating failed hypotheses

## Key technical points (ZH)
- **多智能体 AI 架构**：专门负责算法设计（生成 eBPF C 代码）、实验执行（部署至测试床）和数据分析（评估遥测）的智能体，通过假设驱动协议协调
- **内核级 eBPF 速率控制**：新颖内核模块将逐帧 MCS、重传次数及硬件 TX/RX 统计暴露给在 Linux 内核中运行的 eBPF 程序（mac80211/minstrel 集成）
- **闭环流水线**：面向嵌入式 Wi-Fi SoC 的自动化交叉编译、空口部署、遥测采集和迭代改进——全程无需人工干预
- **58 节点测试床，5 种工作负载**：网页浏览、视频流、大文件传输、VoIP 和混合流量
- **相对 Minstrel-HT 的结果**：页面加载快 21%，视频 QoE 高 7%，峰值吞吐高 21%
- **持久化知识**：智能体维护过往实验记忆，避免重复失败的假设

## Why it matters / what's new (EN)
This is the first demonstration of an AI agent autonomously writing, deploying, and iterating on in-kernel Wi-Fi MAC algorithms in a closed loop. Prior work on AI-for-WiFi focused on using ML to make rate-control decisions (e.g., neural networks selecting MCS); IteRate goes further by having the AI design the algorithm itself — the agent writes the eBPF code that becomes the rate controller. This shifts the role of AI from parameter-tuning to algorithm-design, with implications beyond rate control: the same architecture could be applied to scheduling, AQM, or spatial-reuse algorithms. The eBPF integration is particularly notable because it allows safe in-kernel experimentation without kernel recompilation, lowering the barrier for future AI-driven MAC innovation. Compared to existing KB entries on agentic Wi-Fi (2026-05-19_arxiv-composable-agentic-nextg which argues for composable architectures, and earlier WirelessAgent entries which use LLMs for configuration), IteRate operates at a deeper level — the agent's output is kernel code that directly controls the radio.

## Why it matters / what's new (ZH)
这是首次展示 AI 智能体在闭环中自主编写、部署和迭代内核 Wi-Fi MAC 算法。此前的 AI-for-WiFi 工作聚焦于使用 ML 做出速率控制决策（如神经网络选择 MCS）；IteRate 更进一步，让 AI 设计算法本身——智能体编写成为速率控制器的 eBPF 代码。这将 AI 的角色从参数调优转向算法设计，其影响超越速率控制：同一架构可应用于调度、AQM 或空间复用算法。eBPF 集成尤为值得关注，因为它允许安全的内核内实验而无需重新编译内核，降低了未来 AI 驱动 MAC 创新的门槛。与 KB 中已有的智能体 Wi-Fi 条目（2026-05-19_arxiv-composable-agentic-nextg 主张可组合架构，以及更早的使用 LLM 进行配置的 WirelessAgent 条目）相比，IteRate 在更深层次运行——智能体的输出是直接控制射频的内核代码。
