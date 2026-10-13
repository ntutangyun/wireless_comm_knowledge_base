---
id: 2026-10-13_arxiv-beaver-gpu-sharing-vran-ml-aerial
date_published: 2026-10-01
date_found: 2026-10-13
type: academic-paper
technology: cellular
title_en: "Beaver: Elastic GPU Sharing between ML and Latency-Critical vRAN Workloads"
title_zh: "Beaver：机器学习与时延敏感型 vRAN 工作负载之间的弹性 GPU 共享"
url: "https://arxiv.org/abs/2610.02522"
source_quality: abstract_only
topics: [vRAN, GPU-sharing, NVIDIA-Aerial, AI-RAN, LLM-serving, SM-allocation, HBM-bandwidth]
topic_primary: cellular-ai
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)
Yuncheng Yao, Zhenzhou Qi, Junyao Zheng, Chung-Hsuan Tung, Danyang Zhuo and Tingjun Chen describe Beaver, a GPU-sharing system that lets virtualized RAN (vRAN) workloads and machine-learning services run on the same GPUs, where the vRAN side is latency-critical and the ML side is best-effort. Beaver resizes the vRAN's streaming-multiprocessor allocation per slot based on the scheduled workload, and modifies compiled ML kernels so that they release HBM bandwidth during the vRAN's memory-heavy phases.

The authors evaluate it with NVIDIA Aerial, multi-cell workloads, cellular traces, production inference kernels and full LLM serving. On an H200, Beaver keeps vRAN p99.9 latency under the 1.5 ms uplink deadline while preserving 74% of Llama-3.3-70B serving throughput; no deadline misses were observed under replayed cellular traces; a 375 us downlink deadline is protected; and the system works on A100, GB10 and GH200 GPUs. (This entry is based on the arXiv abstract only; architectural details beyond it are not summarised.)

## Summary (ZH)
Yuncheng Yao、Zhenzhou Qi、Junyao Zheng、Chung-Hsuan Tung、Danyang Zhuo 与 Tingjun Chen 介绍 Beaver，这是一种 GPU 共享系统，使虚拟化 RAN（vRAN）工作负载与机器学习服务能够运行在同一批 GPU 上，其中 vRAN 侧对时延敏感，ML 侧为尽力而为。Beaver 根据调度的工作负载按时隙调整 vRAN 的流式多处理器（SM）分配，并修改已编译的 ML 内核，使其在 vRAN 访存密集阶段释放 HBM 带宽。

作者使用 NVIDIA Aerial、多小区工作负载、蜂窝流量轨迹、生产级推理内核以及完整的 LLM 服务进行评估。在 H200 上，Beaver 使 vRAN 的 p99.9 时延保持在 1.5 ms 的上行时限之内，同时保留 Llama-3.3-70B 服务吞吐量的 74%；在回放的蜂窝轨迹下未观察到时限违规；可保护 375 us 的下行时限；并可在 A100、GB10 与 GH200 GPU 上运行。（本条目仅依据 arXiv 摘要，摘要之外的架构细节未概述。）

## Key technical points (EN)
- Per-slot resizing of the vRAN streaming-multiprocessor allocation based on scheduled workload.
- Compiled ML kernels modified to release HBM bandwidth during memory-heavy vRAN phases.
- H200: vRAN p99.9 latency under the 1.5 ms uplink deadline with 74% of Llama-3.3-70B serving throughput preserved.
- No observed deadline misses under replayed cellular traces; protects a 375 us downlink deadline.
- Works on A100, GB10 and GH200; evaluated with NVIDIA Aerial and full LLM serving.

## Key technical points (ZH)
- 依据调度负载按时隙调整 vRAN 的流式多处理器分配。
- 修改已编译的 ML 内核，使其在 vRAN 访存密集阶段释放 HBM 带宽。
- H200：vRAN p99.9 时延低于 1.5 ms 上行时限，同时保留 Llama-3.3-70B 服务吞吐量的 74%。
- 回放蜂窝轨迹下未观察到时限违规；可保护 375 us 下行时限。
- 可在 A100、GB10 与 GH200 上运行；以 NVIDIA Aerial 与完整 LLM 服务评估。

## Why it matters / what's new (EN)
Beaver reports that vRAN uplink and downlink deadlines can be held while a large LLM shares the same GPU, with 74% of the LLM throughput retained on an H200; details beyond the abstract are not covered here.

## Why it matters / what's new (ZH)
Beaver 报告称，在大型 LLM 共享同一 GPU 的情况下仍可满足 vRAN 上下行时限，并在 H200 上保留 74% 的 LLM 吞吐量；摘要之外的细节本条目未涉及。

## Images
None.
