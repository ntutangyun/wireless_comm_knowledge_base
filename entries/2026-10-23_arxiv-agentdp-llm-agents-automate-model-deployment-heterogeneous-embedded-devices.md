---
id: 2026-10-23_arxiv-agentdp-llm-agents-automate-model-deployment-heterogeneous-embedded-devices
date_published: 2026-10-22
date_found: 2026-10-23
technology: edge-ai
type: academic-paper
title_en: "AgentDP: LLM agents that automate model optimization and adaptation for heterogeneous embedded AI devices"
title_zh: "AgentDP：用 LLM 智能体自动完成异构嵌入式 AI 设备的模型优化与适配"
url: "https://arxiv.org/abs/2610.30760"
source_quality: full
topics: [model-deployment, LLM-agents, operator-aware-partition, inference-engines, embedded-AI, Jetson-Nano, Raspberry-Pi, hyperparameter-reuse]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference, edge-orchestration]
novelty_score: 3
---

## Summary (EN)

AgentDP addresses the step between a pre-trained open-source model and a working deployment on an embedded device: model optimization and adaptation (O&A). The paper's motivation is that different devices favour different inference engines (it cites TensorRT as suited to Jetson Nano and ONNX Runtime to Raspberry Pi), no single engine supports every operator of a model such as Mask R-CNN, so models often fall back to slower CPU execution, and getting good results takes repeated expert trial and error.

The system uses LLM agents to automate the whole O&A process through three modules. A user-requirement standardization module turns free-form requirements into a clear specification. An operator-aware model partition splits a model so that different parts run on different inference engines on the same device. A configuration-reuse module retrieves hyperparameter configurations from earlier tasks (stored as finite-state machines in a graph database) rather than searching again. The implementation is about 2,683 lines of Python using LangChain, web-search tools, a vector database for device profiles and Optuna for hyperparameter search, with GPT-4o as the backend LLM; the agent runs on an edge server and controls target devices over a local network.

The evaluation deploys models on three embedded devices (a Raspberry Pi, a Jetson Nano and an embedded mini PC). The authors report that automating the full process cuts model adaptation time by up to 80% relative to manual O&A and reaches higher task accuracy than the baselines (more than 13% on average). A user study with 20 participants (10 experts, 10 semi-experts) is reported to show generalisability across free-form requirements.

## Summary (ZH)

AgentDP 解决的是预训练开源模型到嵌入式设备可用部署之间的一步：模型优化与适配（O&A）。论文的动机是：不同设备适合不同的推理引擎（文中举例 TensorRT 适合 Jetson Nano，ONNX Runtime 适合树莓派），没有单一引擎能支持 Mask R-CNN 这类模型的全部算子，因此模型常回退到较慢的 CPU 执行，而要得到好结果需要专家反复试错。

系统用 LLM 智能体通过三个模块自动完成整个 O&A 过程。用户需求标准化模块把自由形式的需求转为清晰的规格。算子感知的模型划分把一个模型拆开，使不同部分在同一设备上由不同推理引擎执行。配置复用模块从以往任务中检索超参数配置（以有限状态机形式存于图数据库），而不是重新搜索。实现约 2,683 行 Python，使用 LangChain、网络搜索工具、保存设备画像的向量数据库以及用于超参数搜索的 Optuna，后端 LLM 为 GPT-4o；智能体运行在边缘服务器上，通过局域网控制目标设备。

评估在三种嵌入式设备（树莓派、Jetson Nano 和嵌入式迷你 PC）上部署模型。作者报告，全流程自动化相比人工 O&A 将模型适配时间最多缩短 80%，任务精度高于基线（平均高出 13% 以上）。一项 20 人（10 名专家、10 名半专家）的用户研究被报告显示出对自由形式需求的泛化能力。

## Key technical points (EN)

- Problem framing: engine-device mismatch (no engine covers all operators), device-specific engine choice, and manual iterative refinement.
- Operator-aware partition: different sub-graphs of one model run on different inference engines on the same device, avoiding whole-model CPU fallback.
- Configuration reuse: prior hyperparameter configurations are retrieved from a graph store of finite-state machines instead of re-searching for each new task.
- Stack: LangChain agents, Tavily and Firecrawl web search, Chroma vector DB, Neo4j graph DB, Optuna, GPT-4o backend, sandboxed Python executor, remote-control interface to devices.
- Setup facts: three embedded devices connected to an edge server via a router; the backend LLM is a cloud model (a stated design choice); inference and evaluation run on the device and only results are returned.
- Reported results: up to 80% less adaptation time, over 13% higher accuracy on average than baselines; user study N=20.

## Key technical points (ZH)

- 问题界定：引擎与设备不匹配（没有引擎覆盖全部算子）、设备相关的引擎选择，以及人工迭代优化。
- 算子感知划分：同一模型的不同子图在同一设备上由不同推理引擎运行，避免整模型回退到 CPU。
- 配置复用：从有限状态机的图存储中检索以往的超参数配置，而不是对每个新任务重新搜索。
- 技术栈：LangChain 智能体、Tavily 与 Firecrawl 网络搜索、Chroma 向量库、Neo4j 图库、Optuna、GPT-4o 后端、沙箱 Python 执行器、设备远程控制接口。
- 设置事实：三种嵌入式设备经路由器连接到边缘服务器；后端 LLM 为云端模型（作者的设计选择）；推理与评估在设备上执行，仅回传结果。
- 报告结果：适配时间最多减少 80%，精度平均比基线高 13% 以上；用户研究 N=20。

## Why it matters / what's new (EN)

It targets a practical bottleneck in edge AI: the engineering effort of fitting one model to many device types. The 80% and 13% figures come from the authors' own three-device testbed and baselines, so they show the approach is workable there. The authors use a cloud LLM (GPT-4o) as the agent backend by design, while keeping model inference and evaluation on the target device to preserve data privacy; only inference results are sent back to the agent.

## Why it matters / what's new (ZH)

它针对边缘 AI 的一个实际瓶颈：把一个模型适配到多种设备所需的工程投入。80% 与 13% 的数字来自作者自己的三设备测试平台和基线，说明该方法在其中可行。作者有意采用云端 LLM（GPT-4o）作为智能体后端，同时将模型推理与评估完全留在目标设备上以保护数据隐私，仅把推理结果回传给智能体。

## Images

*(No redistributable images for this entry.)*
