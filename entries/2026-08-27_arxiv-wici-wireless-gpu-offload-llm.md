---
id: 2026-08-27_arxiv-wici-wireless-gpu-offload-llm
date_published: 2026-08-25
date_found: 2026-08-27
technology: wifi
type: academic-paper
title_en: "WiCi: Wireless GPU Computing Infrastructure — remoting CUDA over Wi-Fi for on-device LLM inference"
title_zh: "WiCi：无线 GPU 计算基础设施——通过 Wi-Fi 远程调用 CUDA 以支撑端侧大模型推理"
url: "https://arxiv.org/abs/2608.24204"
source_quality: full
topics: [WiFi-6, 802.11ax, edge-computing, LLM-inference, computation-offload, RTT]
topic_primary: wifi-for-ai
topics_secondary: [rtwt-latency]
novelty_score: 3
---

## Summary (EN)

WiCi (Yibin Shen, Wei Li, Kaiqiang Xu, Zili Meng; arXiv 2608.24204, submitted 25 Aug 2026) asks whether a mobile device can borrow a server-grade GPU that sits *one Wi-Fi hop away* — mounted on or beside the home/office router — instead of shipping the inference request to the cloud. The motivating gap is stark: mobile GPUs trail server GPUs by 100–350× in compute, while physically attaching a server GPU to a handheld is impossible (2–3 kg, ~600 W). Cloud inference solves the compute problem but is expensive and getting worse as agentic workloads multiply request volume. WiCi's position is that the *local* wireless hop is the right place to put the boundary, and that the engineering problem is not bandwidth but round-trip amplification.

Architecturally, WiCi intercepts **CUDA driver API calls at the user-space driver level** and forwards them over the Wi-Fi link to a GPU host. The authors argue this interception point is the only workable one: application-level rewriting does not scale across apps, and kernel-level hijacking costs a reported 51× slowdown because trivial operations expand into 800+ round trips. WiCi replaces NVIDIA's CUDA runtime library with its own proxy, keeps model tensors and pre/post-processing on the mobile client, and forwards GPU work to a server thread per client — relying on native CUDA contexts for isolation rather than building its own resource manager. Transport is TCP with a custom fragmentation header.

The Wi-Fi-specific engineering is the interesting part, and it decomposes into three obstacles the paper measures directly. **(1) Bulk tensor transfer**: naively loading Falcon-40B across the link takes ~1380 s versus 85 s locally, so WiCi content-addresses tensors by MD5 and caches them on the server's disk, transmitting each tensor only on first sight. **(2) Call-count amplification**: a single 180-token inference issues 20,000+ CUDA calls, and at Wi-Fi RTT this inflates median per-call latency by 483×; WiCi batches calls along both dependent and independent patterns for an 80.4% RTT reduction. **(3) Recurring computation patterns**: token generation repeats near-identical call sequences, so WiCi records and replays traces for a further 20.4% RTT saving. Figure 7 in the paper makes the thesis explicit — Wi-Fi RTT is the dominant cost, and the lever is *reducing the number of link traversals*, not increasing throughput.

Evaluation runs on Wi-Fi 6 (802.11ax): Raspberry Pi 5 clients with Intel AX200NGW adapters as the wireless stations, an RTX 4090D / i7-14700K server wired to the router, and Qwen 0.6B–32B plus Falcon-40B under llama.cpp against MMLU, GSM8K and Alpaca. Headline results: time-to-first-token cut by up to 90%, token rate roughly 39× local mobile inference for the same model, model load 36% faster with caching, and 65–80% of native server-GPU performance end to end. Falcon-40B — a model the client simply cannot host — reaches 0.66–0.71 normalised token rate. Multi-client operation degrades gracefully; the authors treat scheduling across clients as orthogonal future work.

## Summary (ZH)

WiCi（Yibin Shen、Wei Li、Kaiqiang Xu、Zili Meng；arXiv 2608.24204，2026 年 8 月 25 日提交）提出的问题是：移动设备能否借用"一个 Wi-Fi 跳之外"的服务器级 GPU——即挂在路由器上或紧邻路由器的 GPU——而不是把推理请求送往云端。动机很直接：移动 GPU 与服务器 GPU 的算力差距达 100–350 倍，而把服务器 GPU 直接装进手持设备在物理上不可行（2–3 公斤、约 600 W）。云端推理解决了算力问题，但成本高昂，且在智能体（agentic）范式下请求量激增使成本进一步恶化。WiCi 的主张是：本地无线跳才是划分边界的正确位置，而真正的工程难点不是带宽，而是往返次数的放大。

架构上，WiCi 在**用户态驱动层拦截 CUDA 驱动 API 调用**，并经 Wi-Fi 链路转发给 GPU 主机。作者论证这是唯一可行的拦截点：应用层改写无法跨应用扩展，内核层劫持则带来约 51 倍的性能损失——因为一个简单操作会被展开成 800 多次往返。WiCi 用自研代理替换 NVIDIA 的 CUDA 运行时库，把模型张量与前后处理保留在移动端，将 GPU 计算转发到服务器上"每客户端一线程"的执行体，并直接依赖原生 CUDA 上下文做资源隔离，而非自建资源管理器。传输层为 TCP，并附加自定义分片头。

真正有意思的是 Wi-Fi 相关的工程处理，论文把它拆成三个可量化的障碍。**（1）大块张量搬运**：朴素加载 Falcon-40B 需约 1380 秒，而本地仅需 85 秒；WiCi 用 MD5 对张量做内容寻址并缓存在服务器磁盘上，每个张量只在首次出现时传输。**（2）调用次数放大**：一次 180 token 的推理会发出 20000 多次 CUDA 调用，在 Wi-Fi 往返时延下单次调用的中位时延被放大 483 倍；WiCi 沿"有依赖"与"无依赖"两种模式做调用批处理，往返开销下降 80.4%。**（3）重复计算模式**：token 生成阶段反复出现几乎相同的调用序列，WiCi 记录并重放这些轨迹，再省下 20.4% 的往返开销。论文图 7 把论点讲得很直白——Wi-Fi 往返时延是主导成本，杠杆在于**减少链路穿越次数**，而不是提高吞吐。

实验在 Wi-Fi 6（802.11ax）上进行：以配备 Intel AX200NGW 网卡的 Raspberry Pi 5 作为无线站点，服务器为 RTX 4090D + i7-14700K 并有线接入路由器，模型覆盖 Qwen 0.6B–32B 与 Falcon-40B（llama.cpp），数据集为 MMLU、GSM8K、Alpaca。主要结果：首 token 时延最多降低 90%，同模型下 token 速率约为端侧本地推理的 39 倍，配合缓存后模型加载快 36%，端到端可达原生服务器 GPU 性能的 65–80%。客户端根本无法容纳的 Falcon-40B 也达到 0.66–0.71 的归一化 token 速率。多客户端场景下性能平滑退化；作者把跨客户端调度列为正交的后续工作。

## Key technical points (EN)

- **Interception point is the design decision.** User-space CUDA driver API interception sits between two unworkable extremes — per-application rewriting (unscalable) and kernel-level hijacking (51× penalty, 800+ round trips for trivial commands).
- **Wi-Fi RTT, not Wi-Fi throughput, is the bottleneck.** Median per-call latency inflates 483× when a chatty PCIe-shaped API is stretched across a wireless link; 20,000+ CUDA calls back a single 180-token generation.
- **Three-layer mitigation stack**: MD5 content-addressed tensor caching on the server (kills the ~1380 s cold model load), dependent/independent call batching (−80.4% RTT), and trace replay of recurring token-generation call sequences (−20.4% RTT on top).
- **State placement**: model tensors and pre/post-processing stay on the client; only GPU-bound computation crosses the link. Per-client server threads use native CUDA contexts for isolation.
- **Transport**: plain TCP with a custom fragmentation header — no MLO, no R-TWT, no 802.11-layer scheduling assistance is used or assumed.
- **Measured on Wi-Fi 6**: Raspberry Pi 5 + Intel AX200NGW client, RTX 4090D server wired to the router. TTFT −90%, token rate ~39× local, 65–80% of native server-GPU performance, Falcon-40B enabled at 0.66–0.71 normalised token rate.
- **Explicitly unaddressed**: multi-client scheduling, contention between concurrent offloading stations, and any use of 802.11 QoS/latency mechanisms.

## Key technical points (ZH)

- **拦截点的选择就是核心设计决策。** 用户态 CUDA 驱动 API 拦截处在两个不可行极端之间——逐应用改写（无法扩展）与内核层劫持（51 倍损失，简单命令即 800 多次往返）。
- **瓶颈是 Wi-Fi 往返时延，而非 Wi-Fi 吞吐。** 把原本面向 PCIe 的"高频小消息"API 拉长到无线链路上，单次调用中位时延放大 483 倍；一次 180 token 的生成背后是 20000 多次 CUDA 调用。
- **三层缓解栈**：服务器侧基于 MD5 的张量内容寻址缓存（消除约 1380 秒的冷启动模型加载）、有依赖/无依赖两类调用批处理（往返开销 −80.4%）、以及对重复 token 生成调用序列的轨迹重放（在此基础上再 −20.4%）。
- **状态放置**：模型张量与前后处理留在客户端，只有 GPU 计算跨越链路；服务器侧每客户端一线程，依靠原生 CUDA 上下文实现隔离。
- **传输**：纯 TCP 加自定义分片头——没有使用也没有假设 MLO、R-TWT 或任何 802.11 层的调度辅助。
- **在 Wi-Fi 6 上实测**：Raspberry Pi 5 + Intel AX200NGW 客户端，RTX 4090D 服务器有线接入路由器。首 token 时延 −90%，token 速率约为本地 39 倍，端到端达原生服务器 GPU 的 65–80%，并使 Falcon-40B 可用（归一化 token 速率 0.66–0.71）。
- **明确未处理的问题**：多客户端调度、并发卸载站点之间的竞争，以及任何 802.11 QoS / 低时延机制的利用。

## Why it matters / what's new (EN)

The `wifi-for-ai` bin has so far collected the *standards* side of AI offload — `2026-07-19_ieee-p802-11bu-draft-par-ai-offload` (the P802.11bu PAR that first named an AI-offload project) and `2026-05-24_qualcomm-wwc-ai-traffic-architecture-rethink` — plus one measurement-driven MAC finding, `2026-08-04_arxiv-wifi-broadcast-rate-edge-llm`, which showed the basic-rate broadcast cap penalising collaborative edge MoE inference. WiCi is the first entry in this bin that builds and measures a *complete* Wi-Fi-hop offload system end to end, and its diagnosis is the useful contribution: the binding constraint on Wi-Fi-borne compute offload is round-trip count, not link capacity. That reframing is directly relevant to what the 11bu PAR will have to specify — a link-layer mechanism that helps a chatty offload session will be one that reduces or amortises medium traversals (aggregation, scheduled bidirectional service periods), not one that raises PHY rate.

It also sharpens a gap worth watching. WiCi deliberately uses nothing from the 802.11 toolbox — no MLO, no R-TWT service periods, no QoS characteristics — and still gets 65–80% of native GPU performance on Wi-Fi 6 with a single client. That leaves the multi-station case (several devices simultaneously renting the same router-attached GPU, each generating tens of thousands of small request/response exchanges) completely open, and it is exactly the case where `2026-08-04_arxiv-wifi-broadcast-rate-edge-llm`'s contention findings and the R-TWT/`rtwt-latency` mechanisms would start to bind. Note also that the preprint lists no institutional affiliations (contact is a project domain), so treat the evaluation as a single-lab result pending peer review.

## Why it matters / what's new (ZH)

`wifi-for-ai` 分类此前收录的主要是 AI 卸载的**标准侧**内容——`2026-07-19_ieee-p802-11bu-draft-par-ai-offload`（首次为 AI 卸载项目命名的 P802.11bu PAR）与 `2026-05-24_qualcomm-wwc-ai-traffic-architecture-rethink`——外加一项以测量驱动的 MAC 发现 `2026-08-04_arxiv-wifi-broadcast-rate-edge-llm`（基本速率广播上限拖累协作式边缘 MoE 推理）。WiCi 是该分类中第一个把"经 Wi-Fi 跳卸载"的完整系统搭起来并端到端实测的条目，而它的诊断结论才是真正有价值的部分：**制约 Wi-Fi 承载计算卸载的是往返次数，而不是链路容量**。这一重新表述与 P802.11bu 未来必须规定的内容直接相关——真正能帮到高频交互式卸载会话的链路层机制，应当是减少或摊薄介质穿越次数的机制（聚合、双向调度服务期），而不是提升 PHY 速率的机制。

它同时凸显了一个值得关注的空白。WiCi 刻意没有动用任何 802.11 工具箱里的能力——没有 MLO、没有 R-TWT 服务期、没有 QoS 特性——在 Wi-Fi 6 单客户端下仍拿到原生 GPU 性能的 65–80%。这就把多站点场景完全留白：多台设备同时"租用"同一台挂在路由器上的 GPU，每台都产生数万次小型请求/响应交互——而这恰恰是 `2026-08-04_arxiv-wifi-broadcast-rate-edge-llm` 的竞争结论以及 R-TWT / `rtwt-latency` 类机制开始起作用的场景。另需注意：该预印本未列出任何机构署名（联系方式为项目域名），因此在同行评审之前，应把评测结果视为单一实验室结论。

## Images

![WiCi overview: mobile client renting a router-attached server GPU over Wi-Fi | WiCi 总览：移动客户端经 Wi-Fi 租用挂在路由器上的服务器 GPU](https://arxiv.org/html/2608.24204v1/intro.png)
![The local NVIDIA GPU software stack and where WiCi cuts it | 本地 NVIDIA GPU 软件栈以及 WiCi 的切分位置](https://arxiv.org/html/2608.24204v1/local_infra.png)
