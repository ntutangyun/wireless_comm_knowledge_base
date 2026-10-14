---
id: 2026-10-14_arxiv-inference-on-demand-split-inference-5g-user-plane
date_published: 2026-10-10
date_found: 2026-10-14
technology: edge-ai
type: academic-paper
title_en: "Inference on Demand: exposing split AI inference as a CAMARA-style telco API with in-band tensor context in the 5G user plane"
title_zh: "按需推理（Inference on Demand）：将拆分式 AI 推理暴露为 CAMARA 风格的电信 API，并在 5G 用户面带内携带张量上下文"
url: "https://arxiv.org/abs/2610.15062"
source_quality: full
topics: [split-inference, CAMARA, 5G-UPF, GTP-U, FABRIC, ResNet18, network-API]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration, edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

Moreira and co-authors (accepted at the IEEE Future Networks World Forum 2026) observe that mobile networks transport the activation tensors of split inference but do not understand the inference session they belong to. They propose Inference-on-Demand (IoD), which has three parts: a CAMARA-style API through which an application requests a model, an admissible range of split points and a quantisation policy and receives a granted session with a MEC target and a data-plane metadata schema; a UE-side controller that selects the split point k at runtime; and a user-plane mechanism that carries the split point, tensor shape, data type and fragment information as a TLV in-band (GTP-U with an IPv6 Segment Routing header) so the UPF can account and forward inference traffic toward the MEC side.

The evaluation runs on the FABRIC testbed with a BESS-based UPF and a ResNet18-derived fire / no-fire classifier on 224x224 frames from the FLAME 2 aerial dataset. UE stress is injected per pod with ChaosMesh: CPU load (15 to 85%), network delay (5 to 90 ms) and jitter (1 to 20 ms), each sampled from bounded Beta(2,2) distributions. Static splits show the expected trade-off (shallow splits cut UE head time but send more bytes). The adaptive IoD policy settles near the middle of the frontier, about 4.0 ms of UE head inference and 1302 KB per frame, close to static k=3 but without choosing k in advance. As the number of active UE replicas grows from 1 to 10, the share of rounds in a network-protection regime rises from 7% to 45% and mean k rises from 3.14 to 3.90.

## Summary (ZH)

Moreira 等人（已被 IEEE Future Networks World Forum 2026 接收）指出，移动网络传输拆分推理的激活张量，却并不理解这些张量所属的推理会话。他们提出按需推理（IoD），包含三部分：一是 CAMARA 风格 API，应用通过它请求模型、可接受的拆分点范围和量化策略，并获得带有 MEC 目标与数据面元数据模式的会话；二是在运行时选择拆分点 k 的 UE 侧控制器；三是用户面机制，把拆分点、张量形状、数据类型与分片信息以 TLV 形式带内携带（GTP-U 加 IPv6 段路由头），使 UPF 能对推理流量计量并转发至 MEC 侧。

评测在 FABRIC 测试台上进行，使用基于 BESS 的 UPF，以及基于 ResNet18 的火灾/无火灾分类器，输入为 FLAME 2 航拍数据集的 224x224 帧。UE 压力通过 ChaosMesh 按 pod 注入：CPU 负载（15% 至 85%）、网络时延（5 至 90 ms）和抖动（1 至 20 ms），均取自有界 Beta(2,2) 分布。静态拆分呈现预期的折中（浅拆分减少 UE 头部耗时但发送更多字节）。自适应 IoD 策略落在前沿中段，约 4.0 ms 的 UE 头部推理和每帧 1302 KB，接近静态 k=3，但无需事先指定 k。随着活跃 UE 副本数从 1 增至 10，处于网络保护状态的轮次占比由 7% 升至 45%，平均 k 由 3.14 升至 3.90。

## Key technical points (EN)

- Three planes: CAMARA-style intent API (model, admissible split range, quantisation); UE-side runtime split selection; user-plane in-band split TLV (GTP-U + IPv6 SRH) parsed at the UPF.
- Testbed: FABRIC, BESS-based UPF, ResNet18 fire / no-fire on FLAME 2 frames (224x224); ChaosMesh per-pod UE stress: CPU 15 to 85%, delay 5 to 90 ms, jitter 1 to 20 ms, from bounded Beta(2,2) distributions.
- IoD operating point about 4.0 ms UE head inference and 1302 KB per frame, near static k=3 without fixing k beforehand.
- With 1 to 10 UE replicas: protection-regime rounds 7% to 45%; mean k 3.14 to 3.90.
- Code referenced at github.com/romoreira/NetAI-APP-Inference_on_Demand.

## Key technical points (ZH)

- 三个层面：CAMARA 风格意图 API（模型、可接受拆分范围、量化）；UE 侧运行时拆分选择；用户面带内拆分 TLV（GTP-U + IPv6 SRH），由 UPF 解析。
- 测试台：FABRIC、基于 BESS 的 UPF、FLAME 2 帧（224x224）上的 ResNet18 火灾/无火灾分类；ChaosMesh 按 pod 注入 UE 压力：CPU 15% 至 85%、时延 5 至 90 ms、抖动 1 至 20 ms，取自有界 Beta(2,2) 分布。
- IoD 工作点约为 UE 头部推理 4.0 ms、每帧 1302 KB，接近静态 k=3，但无需预先固定 k。
- UE 副本数 1 至 10：保护状态轮次占比 7% 至 45%；平均 k 3.14 至 3.90。
- 代码见 github.com/romoreira/NetAI-APP-Inference_on_Demand。

## Why it matters / what's new (EN)

The partitioning policy and the service abstraction are the AI-workload contribution, which is why it is filed here; the user-plane encoding and UPF handling are 5G infrastructure. Results come from the FABRIC testbed with pod-emulated UEs and injected CPU, delay and jitter stress, and a single small vision model, so they show the mechanism works rather than how it would behave on an operator network.

## Why it matters / what's new (ZH)

拆分策略与服务抽象属于 AI 工作负载方面的贡献，因此归入此处；用户面编码和 UPF 处理属于 5G 基础设施。结果来自 FABRIC 测试台（以 pod 模拟 UE，并注入 CPU、时延与抖动压力）和单一小型视觉模型，说明机制可行，而不代表在运营商网络中的表现。

## Images

*(No redistributable images for this entry.)*
