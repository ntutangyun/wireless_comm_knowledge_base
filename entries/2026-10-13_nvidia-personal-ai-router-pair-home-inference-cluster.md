---
id: 2026-10-13_nvidia-personal-ai-router-pair-home-inference-cluster
date_published: 2026-09-07
date_found: 2026-10-13
technology: edge-ai
type: product
title_en: "NVIDIA Personal AI Router (PAIR): beta software that routes local inference requests across the machines on a home network"
title_zh: "NVIDIA Personal AI Router（PAIR）：在家庭网络内跨多台机器路由本地推理请求的测试版软件"
url: "https://www.sdxcentral.com/news/nvidia-brings-ai-data-center-networking-to-the-home-with-personal-ai-router/"
source_quality: full
topics: [PAIR, NVIDIA, home-inference-cluster, Ollama, LM-Studio, DGX-Spark, mTLS, local-AI-routing]
topic_primary: home-edge-ai
topics_secondary: [edge-orchestration, on-device-inference]
novelty_score: 3
---

## Summary (EN)

NVIDIA's Personal AI Router (PAIR), reported by SDxCentral on 7 September 2026, is open-source software in beta that links the computers on a home network into what NVIDIA calls a "personal home AI cluster." Despite the name it is not a networking appliance: it exposes one local endpoint to AI apps and agents and routes each independent inference request to whichever participating machine is available. The model itself is served by an existing engine on the chosen machine; Ollama and LM Studio are supported at launch.

According to the article and NVIDIA's product page, PAIR discovers participating systems, checks whether each is ready, schedules jobs and returns each response to the requesting application, so an agent sees a single connection while PAIR handles placement. Supported nodes are GeForce RTX (20 series and newer) machines, DGX Spark/GB10, and Macs with Apple M4 or newer; the page lists Windows 11, DGX OS, a Linux distribution and macOS Tahoe, and at least 8 GB RAM. Nodes must be on the same local network and talk over mutual TLS, with a six-digit PIN used to admit a machine to the cluster. No internet connection is needed during operation (one is needed to download models). NVIDIA's FAQ states PAIR does not merge devices into one virtual GPU: requests are placed whole on one node. The product page lists version 0.1.1 installers and a beta label, and says prompts, files and agent context stay on the local network; this privacy statement is NVIDIA's and the page offers no independent verification.

## Summary (ZH)

据 SDxCentral 2026 年 9 月 7 日报道，NVIDIA 的 Personal AI Router（PAIR）是一款开源的测试版软件，可把家庭网络中的多台电脑连接成 NVIDIA 所称的"个人家庭 AI 集群"。尽管名字里有"路由器"，它并不是网络设备：它向 AI 应用与智能体提供一个统一的本地入口，并把每个独立的推理请求路由给当前可用的参与机器。模型本身由所选机器上已有的推理引擎提供，发布时支持 Ollama 与 LM Studio。

据该文章与 NVIDIA 产品页，PAIR 会发现参与的系统、检查其是否就绪、调度任务并把每个响应返回给发起请求的应用，因此智能体只看到一个连接，由 PAIR 负责放置。支持的节点包括 GeForce RTX（20 系列及更新）机器、DGX Spark/GB10，以及 Apple M4 或更新的 Mac；页面列出 Windows 11、DGX OS、一个 Linux 发行版和 macOS Tahoe，内存至少 8 GB。各节点须在同一局域网内，并通过双向 TLS（mTLS）通信，以六位 PIN 码准入新机器。运行期间无需联网（下载模型时需要联网）。NVIDIA 的 FAQ 说明 PAIR 不会把设备合并为一个虚拟 GPU：请求以整体形式放置到某一个节点上。产品页列出 0.1.1 版安装包及 beta 标注，并称提示词、文件和智能体上下文保留在本地网络内；该隐私说法出自 NVIDIA，页面未提供独立验证。

## Key technical points (EN)

- Open-source, beta software (version 0.1.1 installers listed); not a hardware router.
- One local endpoint for apps and agents; PAIR discovers nodes, checks readiness, schedules each request and returns the response.
- Engines run the model on the selected machine; Ollama and LM Studio supported at launch.
- Nodes: GeForce RTX 20-series and newer, DGX Spark/GB10, Apple M4 or newer; at least 8 GB RAM; same local network required.
- Mutual TLS between nodes with a six-digit PIN to admit members; non-members are rejected.
- Requests are placed whole on one node; devices are not combined into a single virtual GPU (per NVIDIA's FAQ).
- No internet needed in operation; privacy statement is NVIDIA's, not independently verified.

## Key technical points (ZH)

- 开源的测试版软件（页面列出 0.1.1 版安装包）；并非硬件路由器。
- 为应用与智能体提供统一本地入口；PAIR 负责发现节点、检查就绪状态、调度每个请求并返回响应。
- 由推理引擎在所选机器上运行模型；发布时支持 Ollama 与 LM Studio。
- 节点：GeForce RTX 20 系列及更新、DGX Spark/GB10、Apple M4 或更新；内存至少 8 GB；须处于同一局域网。
- 节点间使用双向 TLS，以六位 PIN 码准入成员，非成员会被拒绝。
- 请求整体放置到某一节点；设备不会被合并为单一虚拟 GPU（依 NVIDIA 的 FAQ）。
- 运行期间无需联网；隐私说法出自 NVIDIA，未经独立验证。

## Why it matters / what's new (EN)

PAIR places each whole inference request on one available machine in the home rather than pooling GPUs. NVIDIA's accompanying blog reports one unofficial demo (a five-subagent workload averaging 18 minutes on a single laptop versus 8 min 48 s on a three-device PAIR cluster) and states it is not a general benchmark or a promise of linear scaling; no latency figures are given.

## Why it matters / what's new (ZH)

PAIR 将每个完整的推理请求放置到家中某一台可用机器上，而非合并 GPU。NVIDIA 随附博客给出了一次非正式演示（五个子智能体的工作负载在单台笔记本上平均耗时 18 分钟，在三台设备组成的 PAIR 集群上平均 8 分 48 秒），并声明这不是通用基准，也不代表线性扩展；未给出延迟数据。

## Images

*(No redistributable images for this entry.)*
