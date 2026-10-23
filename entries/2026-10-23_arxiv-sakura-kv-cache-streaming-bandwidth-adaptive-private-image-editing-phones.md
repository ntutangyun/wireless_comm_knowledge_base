---
id: 2026-10-23_arxiv-sakura-kv-cache-streaming-bandwidth-adaptive-private-image-editing-phones
date_published: 2026-10-21
date_found: 2026-10-23
technology: edge-ai
type: academic-paper
title_en: "SAKURA: bandwidth-adaptive streaming of reusable attention KV state from cloud to phone for private diffusion-transformer image editing"
title_zh: "SAKURA：面向手机端隐私图像编辑的、随带宽自适应的云到端可复用注意力 KV 状态流式传输"
url: "https://arxiv.org/abs/2610.29733"
source_quality: full
topics: [diffusion-transformer, KV-cache, cloud-edge-collaboration, bandwidth-adaptation, image-editing, on-device-inference, 5G-traces]
topic_primary: compute-offloading
topics_secondary: [on-device-inference, edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

SAKURA targets image-editing services built on diffusion transformers (DiTs), such as face swapping and virtual try-on, where requests share common templates so the attention key-value (KV) state for a template can be precomputed and reused. Keeping request-specific inference on the phone avoids uploading personal images and prompts, but the reusable state is large and grows with the number of templates, so it cannot all be stored on the device. Storing it in the cloud moves the transfer onto the inference path, where, the authors argue, it can be slower than computing on the device under fluctuating mobile networks.

The system has three parts. An offline, token-importance-aware compression step builds the cache (weighted low-rank factorization with progressive rank and bit-plane packing). At runtime a monitor, a transfer-window controller and a configuration allocator choose the cache representation for each upcoming shard from the measured bandwidth. A pipelined runtime overlaps cache transfer and reconstruction with on-device execution.

Evaluation uses three editing tasks and two diffusion models (including FLUX2) on a OnePlus 15 phone (Snapdragon 8 Elite Gen 5, 16 GB RAM) against a cloud server holding the caches. Bandwidth is shaped with Linux tc replaying 603 seconds of per-second downlink traces from the 5Gophers commercial-5G dataset, plus one run on a Wi-Fi 6 (5 GHz) network placed at a stationary location as an ideal case. Baselines are uniform integer quantisation and CacheGen adapted to DiT. The authors report latency reductions of 1.82x versus the adapted CacheGen and 3.27x versus on-device generation, and 3.06x lower cache storage than an uncompressed cache, with image quality measured by PSNR and SSIM against an FP16-cache reference.

## Summary (ZH)

SAKURA 面向基于扩散 Transformer（DiT）的图像编辑服务（如换脸、虚拟试穿）。这类请求共享常见模板，因此模板对应的注意力键值（KV）状态可预先计算并复用。把请求相关的推理留在手机上可避免上传个人图像和提示词，但可复用状态体积大且随模板数增长，无法全部存放在设备上。存放在云端则把传输放到了推理路径上，作者认为在波动的移动网络下，这可能比在设备端计算更慢。

系统包含三部分。离线的、感知 token 重要性的压缩步骤构建缓存（加权低秩分解，配合渐进式秩与比特平面打包）。运行时由监测器、传输窗口控制器和配置分配器依据实测带宽，为每个即将到来的分片选择缓存表示。流水线运行时让缓存传输与重建同设备端执行重叠。

评估使用三个编辑任务和两个扩散模型（含 FLUX2），在一台 OnePlus 15 手机（骁龙 8 Elite Gen 5，16 GB 内存）上进行，云服务器保存缓存。带宽用 Linux tc 回放 5Gophers 商用 5G 数据集中 603 秒的逐秒下行吞吐轨迹来整形，另有一组在固定位置的 Wi-Fi 6（5 GHz）网络上作为理想情形。基线为统一整数量化和适配到 DiT 的 CacheGen。作者报告延迟相对适配后的 CacheGen 降低 1.82 倍、相对设备端生成降低 3.27 倍，缓存存储相对未压缩缓存降低 3.06 倍，图像质量以相对 FP16 缓存的 PSNR 和 SSIM 衡量。

## Key technical points (EN)

- Workload premise: template-based DiT editing makes KV state reusable across requests; state size scales with template count, forcing a cloud-held store.
- Offline: cache-row weights derived from masked queries, weighted low-rank factorization, progressive rank and bit-plane packing so one stored object serves several bandwidth budgets.
- Online: runtime monitor, transfer-window controller and configuration allocator pick the representation per shard from current bandwidth.
- Execution: pipelined transfer, reconstruction and on-device compute overlap; baselines are IntQ (fixed bit-width from initial bandwidth, minimum INT2) and CacheGen adapted to DiT.
- Setup facts: one phone model, a single 12-core/64 GB cloud server, 100 randomly sampled start points per workload in the 5G trace; the Wi-Fi 6 case is a stationary single location.
- Scope: the contribution is the cache-streaming policy and codec, not the radio link; the traces are an evaluation input.

## Key technical points (ZH)

- 工作负载前提：基于模板的 DiT 编辑使 KV 状态可跨请求复用；状态规模随模板数增长，只能存放在云端。
- 离线：由掩码查询导出缓存行权重，做加权低秩分解，并用渐进式秩与比特平面打包，使同一份存储对象能适配多种带宽预算。
- 在线：运行时监测器、传输窗口控制器和配置分配器依据当前带宽为每个分片选择表示。
- 执行：传输、重建与设备端计算流水线重叠；基线为 IntQ（按初始带宽确定固定位宽，最低 INT2）和适配到 DiT 的 CacheGen。
- 设置事实：单一手机型号，一台 12 核/64 GB 云服务器，5G 轨迹中每个工作负载随机抽取 100 个起点；Wi-Fi 6 情形为固定的单一位置。
- 范围：贡献在于缓存流式传输策略与编解码，而非无线链路；轨迹只是评估输入。

## Why it matters / what's new (EN)

It is a concrete example of a compute-placement decision driven by measured link bandwidth: whether to ship precomputed state or recompute locally, and at what fidelity. The numbers come from one phone and replayed traces, so the speedups characterise this design on that setup rather than phones in general.

## Why it matters / what's new (ZH)

这是由实测链路带宽驱动算力布局决策的具体例子：是传输预计算状态还是在本地重算，以及以何种保真度传输。数字来自一款手机和回放的轨迹，因此加速比描述的是该设计在此设置下的表现，而非手机的普遍情形。

## Images

*(No redistributable images for this entry.)*
