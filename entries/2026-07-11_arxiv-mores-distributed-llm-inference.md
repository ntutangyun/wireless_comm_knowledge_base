---
id: 2026-07-11_arxiv-mores-distributed-llm-inference
date_published: 2026-07-09
date_found: 2026-07-11
type: academic-paper
technology: cellular
title_en: "MORES: Mobile Reasoning-as-a-Service via distributed LLM inference-time scaling across device and edge"
title_zh: "MORES：通过设备-边缘分布式 LLM 推理时扩展实现移动推理即服务"
url: "https://arxiv.org/abs/2607.08116"
source_quality: abstract_only
topics: [LLM, edge-inference, computation-offloading, MEC, inference-time-scaling]
topic_primary: mec
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)

MORES (Liu, Du, Huang — the HKU mobile edge-intelligence group) proposes "Mobile Reasoning-as-a-Service": resource-limited mobile devices access LLM *reasoning* capability as a network service by partitioning hidden-state computation between the local device and edge/cloud servers over a wireless link. Rather than shipping whole prompts to the cloud or squeezing a small model on-device, the framework scales inference-time compute elastically — the device runs what it can, and "recurrent steps" of additional reasoning are offloaded on demand.

A learning-based controller jointly tunes the number of recurrent reasoning steps and a transmission pruning rate (how much hidden state actually crosses the wireless link), trading accuracy, latency, and bandwidth. The paper reports roughly 18% system-throughput improvement over baseline offloading approaches. The access network is treated generically as a wireless uplink/downlink; the mechanism is squarely in the multi-access edge computing (MEC) tradition of the authors' group.

## Summary (ZH)

MORES（Liu、Du、Huang——港大移动边缘智能团队）提出"移动推理即服务"：资源受限的移动设备通过无线链路将隐藏状态计算在本地设备与边缘/云服务器之间划分，以网络服务的形式获得 LLM *推理*能力。不同于将整个提示送云或在端侧硬塞小模型，该框架弹性扩展推理时计算——设备先算力所能及，额外的"循环推理步"按需卸载。

一个基于学习的控制器联合调节循环推理步数与传输剪枝率（多少隐藏状态真正跨越无线链路），在精度、时延与带宽之间权衡。论文报告相较基线卸载方案约 18% 的系统吞吐提升。接入网被泛化处理为无线上/下行；机制完全处于作者团队的多接入边缘计算（MEC）传统之中。

## Key technical points (EN)

- Hidden-state partitioning: device computes locally, offloads additional recurrent reasoning steps to edge/cloud on demand.
- Joint control of recurrent-step count and transmission pruning rate — the two knobs of the accuracy/latency/bandwidth trade.
- ~18% system-throughput improvement over baseline offloading reported.
- Access network generic ("wireless"); no 802.11- or NR-specific mechanism.

## Key technical points (ZH)

- 隐藏状态划分：设备本地计算，按需将额外循环推理步卸载到边缘/云。
- 联合控制循环步数与传输剪枝率——精度/时延/带宽权衡的两个旋钮。
- 报告相较基线卸载约 18% 系统吞吐提升。
- 接入网泛化（"无线"）；无 802.11 或 NR 专属机制。

## Why it matters / what's new (EN)

The mec bin has classic computation-offloading entries; MORES is the first in the KB to offload *inference-time scaling* specifically — the reasoning-step dimension that current LLM serving exposes — rather than whole-model or layer-split offload. The transmission-pruning knob (sending less hidden state) is the interesting network-facing idea: it makes reasoning depth a bandwidth-elastic quantity.

## Why it matters / what's new (ZH)

mec 板块已有经典计算卸载条目；MORES 是 KB 中首个专门卸载*推理时扩展*的工作——即当前 LLM 服务暴露的推理步维度——而非整模型或分层切分卸载。传输剪枝旋钮（少传隐藏状态）是面向网络的亮点：它使推理深度成为一个带宽弹性量。
