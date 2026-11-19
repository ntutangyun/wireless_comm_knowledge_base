---
id: 2026-11-19_arxiv-bjas-budgeted-joint-action-search-satellite-edge-offloading
date_published: 2026-11-14
date_found: 2026-11-19
technology: edge-ai
type: academic-paper
title_en: "Budgeted Decision-Model-Guided Joint-Action Search for Satellite Edge Computing (IoT task offloading and power allocation over simulated LEO uplinks)"
title_zh: "面向卫星边缘计算的预算化决策模型引导联合动作搜索（仿真 LEO 上行链路上的物联网任务卸载与功率分配）"
url: "https://arxiv.org/abs/2611.19225"
source_quality: full
topics: [satellite-edge-computing, task-offloading, power-allocation, LLM-guided-search, solver-latency, IoT]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

The paper addresses task offloading in satellite edge computing, where IoT terminals with limited local computing and no terrestrial edge server can offload to satellites. Each terminal generates one indivisible task of a given size and compute demand, which runs either locally or entirely on one satellite. The solver jointly chooses which terminal uses which satellite and its transmit power, to minimise average task-completion latency (upload plus computation delay).

Search methods that use large language models (LLMs) are reported to produce high-quality allocations but pay for repeated model requests in solver time. The proposed budgeted joint-action search (BJAS) is a decision-model-guided solver whose bounded candidate pools combine single-terminal updates with power-inheriting offload replacements for batched selection, retaining two-terminal coordination without enumerating extra power vectors.

Link computed over: simulated satellite uplinks. The setup is a spherical-Earth geometry with terminals sampled over a ground region, satellites at LEO altitude with a minimum service elevation, Rician fading, subchannelised uplink and a receive-gain model. No over-the-air measurement is involved.

## Summary (ZH)

本文研究卫星边缘计算中的任务卸载：本地算力有限且无法接入地面边缘服务器的物联网终端可将任务卸载到卫星。每个终端产生一个不可分割、具有给定大小与计算需求的任务，任务要么在本地执行，要么整体在某一颗卫星上执行。求解器联合决定每个终端使用哪颗卫星及其发射功率，以最小化平均任务完成时延（上传时延加计算时延）。

据文中介绍，基于大语言模型（LLM）的搜索方法能给出高质量分配，但重复的模型请求会增加求解时间。所提预算化联合动作搜索（BJAS）是一种决策模型引导的求解器，其有界候选池把单终端更新与继承功率的卸载替换结合起来做批量选择，在不枚举额外功率向量的情况下保留双终端协同。

所经链路：仿真的卫星上行链路。设置为球形地球几何，终端在地面区域内采样，卫星位于 LEO 高度并设最小服务仰角，采用莱斯衰落、子信道化上行与接收增益模型。不涉及空口实测。

## Key technical points (EN)

- Across 60 completed runs per method, BJAS reduces mean total solver time by 97.16% relative to the LLM-generated offloading baseline while reaching a mean task-completion latency close to the LLM baseline.
- BJAS also reaches lower mean task-completion latency than the tested genetic algorithm (400 individuals, 350 generations) and a DDPG adaptation.
- Model-request latency: BJAS median 0.298 s (P95 0.335 s, 25 requests per run, 62.3% of its solver time on requests); the LLM baseline median 9.100 s (P95 11.919 s, 50 requests per run, 97.5% of solver time on requests).
- The LLM baseline generates a complete allocation as one JSON response per round, starts from the best of 100 feasible random allocations and runs up to 50 rounds; experiments ran on a 24-core workstation.
- Tasks are indivisible and results are simulation-only; the paper has been submitted to IEEE and is not yet peer-reviewed.

## Key technical points (ZH)

- 每种方法 60 次完成的运行中，BJAS 相对 LLM 生成卸载基线将平均总求解时间减少 97.16%，同时平均任务完成时延接近 LLM 基线。
- BJAS 的平均任务完成时延也低于所测的遗传算法（400 个个体、350 代）与 DDPG 适配方案。
- 模型请求时延：BJAS 中位数 0.298 s（P95 0.335 s，每次运行 25 次请求，请求占其求解时间的 62.3%）；LLM 基线中位数 9.100 s（P95 11.919 s，每次运行 50 次请求，请求占求解时间的 97.5%）。
- LLM 基线每轮以一个 JSON 响应生成完整分配，从 100 个可行随机分配中的最优者起步，最多运行 50 轮；实验在一台 24 核工作站上进行。
- 任务不可分割，结果仅来自仿真；论文已提交 IEEE，尚未经同行评审。

## Why it matters / what's new (EN)

This adds a satellite-link offloading data point, and it frames a practical cost of LLM-in-the-loop resource allocation: the solver's own latency. The 97.16% solver-time reduction is relative to a specific LLM baseline configuration in a simulator, so it should be read as a comparison of search procedures, not as an end-to-end satellite measurement. Related satellite computing entries in the KB include the in-orbit split inference and the collaborative edge AI on inter-satellite links entries.

## Why it matters / what's new (ZH)

本文增加了一个卫星链路卸载的数据点，并指出 LLM 参与资源分配的一个现实代价：求解器自身的时延。97.16% 的求解时间降幅是相对某一特定 LLM 基线配置、在仿真器中得到的，应视作搜索流程的比较，而非端到端的卫星实测。KB 中相关的卫星计算条目包括在轨拆分推理与星间链路协同边缘 AI 等。

## Images

![BJAS concept: decision-model-guided joint-action search for satellite offloading | BJAS 概念：卫星卸载的决策模型引导联合动作搜索](https://arxiv.org/html/2611.19225v1/bjas-concept.png)
