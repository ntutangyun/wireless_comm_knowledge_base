---
id: 2026-11-25_arxiv-cgspec-multi-client-edge-cloud-speculative-decoding-emulated-5g-4g
date_published: 2026-11-23
date_found: 2026-11-25
technology: edge-ai
type: academic-paper
title_en: "CGSpec: Consistency-Guided Speculative Decoding with Overlap-Aware Verification Scheduling for Edge-Cloud Inference (emulated 5G/4G client links)"
title_zh: "CGSpec：面向端云推理的一致性引导投机解码与重叠感知验证调度（仿真 5G/4G 客户端链路）"
url: "https://arxiv.org/abs/2611.30455"
source_quality: full
topics: [speculative-decoding, edge-cloud-inference, LLM-serving, verification-scheduling, network-emulation]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

In collaborative speculative decoding, edge clients draft tokens locally and a shared cloud model verifies them. The paper (Xidian University, University of Vaasa, University of Helsinki) argues that draft-target disagreement wastes communication and verification resources and that heterogeneous client return times complicate shared-verifier scheduling. CGSpec addresses this with three parts: consistency-guided state sensing, a nomination-and-competition candidate tree, and an overlap-aware verification scheduler.

State sensing compares draft and target next-token distributions over an aligned top-5 support using JS divergence; the target's top-5 is piggybacked on the existing verification response, so no extra RPC is needed. The divergence sets a scale variable that controls the tree's growth (active paths, depth, per-parent width, node budget). The scheduler estimates remaining verification rounds and client return times, then prioritises requests by overlap slack.

Link: emulated 5G-like and 4G-like client links, not over-the-air. The communication module injects waiting time from message size, uplink/downlink bandwidth, propagation delay and jitter, while model forward passes run on real GPUs. The three profiles are 5G-like (45 ms RTT, 3 ms jitter, 30/200 Mbps up/down), 4G-like (70 ms RTT, 10 ms jitter, 3/10 Mbps) and weak 4G (100 ms RTT, 10 ms jitter, 2/10 Mbps), assigned 3/2/3 across 8 clients and 5/6/5 across 16 clients. The authors state that the emulation does not fully capture time-varying wireless bandwidth, packet loss or handover events, and that the clients are A40 GPUs rather than mobile devices.

## Summary (ZH)

在协同投机解码中，边缘客户端在本地起草 token，由共享的云端模型验证。论文（西安电子科技大学、瓦萨大学、赫尔辛基大学）指出，草稿与目标分布的不一致会浪费通信与验证资源，而客户端返回时间的异质性使共享验证器的调度变得复杂。CGSpec 为此设计三部分：一致性引导的状态感知、"提名-竞争"候选树，以及重叠感知的验证调度器。

状态感知在对齐的 top-5 支撑集上用 JS 散度比较草稿与目标的下一 token 分布；目标的 top-5 随既有验证响应一并返回，无需额外 RPC。该散度设定一个尺度变量，用以控制候选树的增长（活跃路径、深度、每父节点宽度、节点预算）。调度器估计剩余验证轮数和客户端返回时间，并按重叠余量对请求排序。

所经链路：仿真的 5G 类和 4G 类客户端链路，并非空口。通信模块依据消息大小、上下行带宽、传播时延和抖动注入等待时间，模型前向计算则在真实 GPU 上运行。三种配置为：类 5G（RTT 45 ms、抖动 3 ms、上/下行 30/200 Mbps）、类 4G（RTT 70 ms、抖动 10 ms、3/10 Mbps）和弱 4G（RTT 100 ms、抖动 10 ms、2/10 Mbps），在 8 个客户端中按 3/2/3 分配，在 16 个客户端中按 5/6/5 分配。作者说明该仿真未能充分体现随时间变化的无线带宽、丢包和切换，且客户端为 A40 GPU 而非移动设备。

## Key technical points (EN)

- Setup: verifier on an AMD Instinct MI250, clients on NVIDIA A40; four model pairs (Qwen3-14B/0.6B, Qwen3-14B/1.7B, Vicuna-7B-v1.3/160M, Qwen3-32B/1.7B); datasets C4, WikiText-2 and SpecBench; temperature 0, 128-token cap, 128 requests per run, 5 seeds; 24 configurations (4 pairs x 3 datasets x 2 client counts).
- Baselines: Target-AR, EAGLE-3, SLED and SpecEdge (the primary collaborative reference).
- Versus SpecEdge, CGSpec raises system throughput by 12.2% (8 clients) and 10.2% (16 clients), and mean client throughput by 14.0% and 33.0%.
- Versus SLED, system throughput is +58.3% (8 clients) and +64.6% (16 clients); versus EAGLE-3, +81.2% and +95.7%.

## Key technical points (ZH)

- 设置：验证器运行于 AMD Instinct MI250，客户端为 NVIDIA A40；四组模型对（Qwen3-14B/0.6B、Qwen3-14B/1.7B、Vicuna-7B-v1.3/160M、Qwen3-32B/1.7B）；数据集为 C4、WikiText-2 和 SpecBench；温度 0，128 token 上限，每次运行 128 个请求，5 个随机种子；共 24 种配置（4 模型对 x 3 数据集 x 2 种客户端数）。
- 基线：Target-AR、EAGLE-3、SLED 和 SpecEdge（主要的协同参考方案）。
- 相对 SpecEdge，CGSpec 将系统吞吐提升 12.2%（8 客户端）和 10.2%（16 客户端），将平均客户端吞吐提升 14.0% 和 33.0%。
- 相对 SLED，系统吞吐 +58.3%（8 客户端）和 +64.6%（16 客户端）；相对 EAGLE-3 为 +81.2% 和 +95.7%。

## Why it matters / what's new (EN)

The link enters the design through communication cost: draft-target disagreement wastes uplink and verification work, and heterogeneous client return times (set by the emulated 5G/4G profiles) drive the scheduler. The gains are measured on emulated links with datacentre-class client GPUs, so they are not evidence of behaviour on real radio links or mobile devices.

## Why it matters / what's new (ZH)

链路通过通信代价进入设计：草稿与目标的不一致会浪费上行与验证工作，而由仿真 5G/4G 配置决定的异质客户端返回时间驱动调度器。增益是在仿真链路和数据中心级客户端 GPU 上测得的，因此不能说明在真实无线链路或移动设备上的表现。

## Images

![CGSpec overview | CGSpec 总体框架](https://arxiv.org/html/2611.30455v1/newoverview.png)
