---
id: 2026-10-22_arxiv-orbitweaver-resuming-vlm-inference-leo-satellite-interruptions
date_published: 2026-10-21
date_found: 2026-10-22
technology: edge-ai
type: academic-paper
title_en: "OrbitWeaver: resuming vision-language inference across onboard interruptions on LEO satellite payloads"
title_zh: "OrbitWeaver：在低轨卫星载荷上跨星载中断恢复视觉-语言推理"
url: "https://arxiv.org/abs/2610.29183"
source_quality: full
topics: [onboard-inference, checkpointing, vlm, leo-payload, jetson, kv-cache]
topic_primary: on-device-inference
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

The paper addresses running vision-language models (VLMs) on commercial off-the-shelf payloads aboard low-Earth-orbit satellites, so observation data can be processed without first being downlinked. A request may span several execution windows because power and thermal limits, fault-triggered reboots and competing payload demands interrupt it; each shutdown discards volatile activations and KV caches, so an unprotected request repeats its work after restart. The paper reports a worst case of reboots about once per minute, and gives the example that a typical 3-minute mission processes only 8 frames (more than 32K tokens).

OrbitWeaver checkpoints inference progress to non-volatile storage and restores it after a reboot. Phase-aware checkpointing picks recovery boundaries per phase: hidden states at layer boundaries for vision encoding, a 2D grid of token chunks and layer groups for prefill, and batched KV-cache checkpoints across several generated tokens for decoding, with a checksum-protected commit footer for crash consistency. Dependency-aware dynamic recovery treats restoration as an I/O-compute scheduling problem, overlapping SSD reads of weights and KV state with recomputation; the planner computes an optimal order within 100 ms for Qwen3-VL 8B when the layer group size is at least 2.

Experiments use two Jetson testbeds mirroring the payloads of two satellites (Orin NX 16 GB and AGX Orin 64 GB), Qwen3-VL 2B/4B/8B and MiniCPM-V 4.5 at W4A16 on LRS-VQA remote-sensing questions, with on-orbit telemetry traces. The authors report up to 4.07x end-to-end speedup over the evaluated baselines (geometric means 1.65x-2.95x), up to 3.56x less SSD write volume, and normal-path overhead within 5%. In a 72-hour deployment on two LEO satellites (25 requests each, Qwen3-VL 2B, 32K-token inputs), 41 of 50 requests were interrupted across 91 bus-enforced shutdowns and all 50 completed.

## Summary (ZH)

论文研究在低轨卫星的商用现货（COTS）载荷上运行视觉-语言模型（VLM），使观测数据无需先下传即可处理。由于功耗与热限制、故障触发的重启以及其他载荷的竞争，一个请求可能跨越多个执行窗口；每次关机都会丢弃易失的激活值与 KV 缓存，未受保护的请求在重启后需重复工作。论文报告最坏情况下约每分钟重启一次，并举例说明典型的 3 分钟任务只能处理 8 帧（超过 32K token）。

OrbitWeaver 将推理进度检查点保存到非易失存储，并在重启后恢复。阶段感知检查点按阶段选择恢复边界：视觉编码在层边界保存隐藏状态，预填充使用 token 块与层组构成的二维网格，解码则把若干生成 token 的 KV 缓存检查点合并批量写入，并用带校验和的提交尾部保证崩溃一致性。依赖感知的动态恢复把恢复视为 I/O 与计算的调度问题，让权重与 KV 状态的 SSD 读取与重算重叠；在层组大小不小于 2 时，规划器在 100 ms 内为 Qwen3-VL 8B 计算出最优执行顺序。

实验使用两台镜像两颗卫星载荷的 Jetson 测试平台（Orin NX 16 GB 与 AGX Orin 64 GB）、W4A16 的 Qwen3-VL 2B/4B/8B 与 MiniCPM-V 4.5，在 LRS-VQA 遥感问答上并结合在轨遥测轨迹。作者报告相对所评估基线最高 4.07 倍端到端加速（几何平均 1.65-2.95 倍）、SSD 写入量最多降低 3.56 倍、正常路径开销不超过 5%。在两颗低轨卫星上的 72 小时部署中（各 25 个请求，Qwen3-VL 2B、32K token 输入），50 个请求中有 41 个被中断，共发生 91 次总线强制关机，50 个请求全部完成。

## Key technical points (EN)

- Vision encoding checkpoints hidden states at layer boundaries because bidirectional attention prevents patch chunks from serving as recovery units.
- Storage uses append-only or contiguous layouts with a checksum-protected commit footer; recovery planning reduces to a subset dynamic program.
- Baselines: SONIC-layer, SONIC-chunk and HCache; speedups up to 4.07x, 2.89x and 2.67x respectively. SONIC was reimplemented for GPU and HCache was reimplemented from its paper.
- Write amplification figures come from MQSim replay of I/O traces, not measured device wear; normal-path extra energy is 3.75%-4.74%.
- Scope and assumptions: one request at a time on a single GPU (a stated design choice); radiation-induced storage corruption is stated as out of scope. Entry observations: most experiments run on Jetson testbeds rather than flight hardware, and only one remote-sensing dataset is used.

## Key technical points (ZH)

- 视觉编码在层边界保存隐藏状态，因为双向注意力使图像块无法作为恢复单元。
- 存储采用仅追加或连续布局并带校验和提交尾部；恢复规划归约为子集动态规划。
- 基线为 SONIC-layer、SONIC-chunk 与 HCache，加速最高分别为 4.07、2.89 与 2.67 倍；SONIC 为 GPU 重新实现，HCache 依据论文重新实现。
- 写放大数字来自 MQSim 对 I/O 轨迹的回放，而非实测器件磨损；正常路径额外能耗为 3.75%-4.74%。
- 范围与假设：单 GPU 一次处理一个请求（论文的设计选择）；辐射导致的存储损坏被明确列为范围之外。条目观察：多数实验在 Jetson 测试平台而非飞行硬件上进行，且仅使用一个遥感数据集。

## Why it matters / what's new (EN)

The entry adds an onboard-compute case to the on-device inference bin: LLM/VLM inference that must survive repeated power-driven shutdowns, with a 72-hour on-orbit deployment as the main in-orbit evidence. Most speedup numbers come from ground Jetson testbeds replaying telemetry, and the code release is not stated.

## Why it matters / what's new (ZH)

本条目为端侧推理分类增加了星载计算案例：LLM/VLM 推理需要在反复的供电驱动关机中存活，主要在轨证据是 72 小时的在轨部署。多数加速数字来自回放遥测的地面 Jetson 测试平台，论文未说明是否发布代码。

## Images

*(No redistributable images for this entry.)*
