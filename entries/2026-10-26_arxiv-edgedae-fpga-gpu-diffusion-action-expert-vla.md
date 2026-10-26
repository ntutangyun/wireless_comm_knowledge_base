---
id: 2026-10-26_arxiv-edgedae-fpga-gpu-diffusion-action-expert-vla
date_published: 2026-09-28
date_found: 2026-10-26
technology: edge-ai
type: academic-paper
title_en: "EdgeDAE: splitting a tiny vision-language-action model between a Jetson GPU and a Kria FPGA for the diffusion action expert"
title_zh: "EdgeDAE：把小型视觉-语言-动作模型拆分到 Jetson GPU 与 Kria FPGA 上，由 FPGA 运行扩散动作专家"
url: "https://arxiv.org/abs/2610.00311"
source_quality: full
topics: [vision-language-action, diffusion-action-expert, FPGA, Jetson-Orin-Nano, Kria-KR260, NF4, INT8, heterogeneous-acceleration, robotics]
topic_primary: edge-ai-silicon
topics_secondary: [compute-offloading, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

EdgeDAE, from the University of California, Irvine (EECS), targets the Diffusion Action Expert (DAE), the iterative denoising head of Vision-Language-Action (VLA) robot policies. The authors argue that on an edge GPU the DAE is memory-bound, because parameters are reloaded from DRAM at every denoising step, while the vision-transformer backbone parallelises well. They therefore partition the model: the vision transformer and language pipeline run on a Jetson Orin Nano (MAXN_SUPER mode) and the DAE runs on a Xilinx Kria KR260 FPGA at 250 MHz with all parameters held on chip in BRAM/URAM. The two boards exchange data over 1 Gbps Ethernet with UDP, with about 70 microseconds of measured transfer latency.

The FPGA design co-optimises quantisation, fixed-point arithmetic and a hardware random-number path (4-way Xorshift128 with Box-Muller; a 256-entry sigmoid lookup for SiLU). Two weight formats are used: INT8 per-channel, and NF4 in groups of 16 with 16-bit fixed-point scales, keeping input and output projections at INT8 under NF4. Models are Octo-Small (ViT-S, about 27M parameters) and Octo-Base (ViT-B, about 93M), sharing a DAE with 20 DDPM steps and a 28-dimensional action.

Reported results versus the Jetson-only baseline: end-to-end latency 104.18 ms to 49.50 ms for Octo-Small (52.5% lower, 2.10x throughput, 9.60 to 20.20 it/s) and 142.59 ms to 87.39 ms for Octo-Base (38.7% lower, 1.63x). DAE latency on the FPGA is 1.38 ms (INT8) to 3.14 ms (NF4, Base). The authors report about 17.3x higher energy efficiency than an RTX 4090 for Octo-Small INT8 (1.467 versus 0.085 it/J), and 1.13x versus the Jetson-only baseline for Octo-Base.

## Summary (ZH)

EdgeDAE 来自加州大学尔湾分校电气工程与计算机科学系，针对视觉-语言-动作（VLA）机器人策略中的扩散动作专家（DAE），即其迭代去噪的动作头。作者认为在边缘 GPU 上 DAE 受内存限制，因为每个去噪步都要从 DRAM 重新加载参数，而视觉 Transformer 主干则容易并行化。因此他们对模型做划分：视觉 Transformer 与语言流水线运行在 Jetson Orin Nano（MAXN_SUPER 模式）上，DAE 运行在 250 MHz 的 Xilinx Kria KR260 FPGA 上，所有参数常驻片上 BRAM/URAM。两块板通过 1 Gbps 以太网和 UDP 交换数据，实测传输时延约 70 微秒。

FPGA 设计协同优化量化、定点运算和硬件随机数通路（4 路 Xorshift128 加 Box-Muller；SiLU 使用 256 项 sigmoid 查找表）。使用两种权重格式：INT8 逐通道，以及 16 个权重一组并带 16 位定点缩放的 NF4，NF4 下输入和输出投影保持 INT8。模型为 Octo-Small（ViT-S，约 27M 参数）和 Octo-Base（ViT-B，约 93M），二者共用含 20 个 DDPM 步、28 维动作的 DAE。

相对仅用 Jetson 的基线，报告结果为：Octo-Small 端到端时延从 104.18 ms 降至 49.50 ms（降低 52.5%，吞吐 2.10 倍，9.60 升至 20.20 it/s）；Octo-Base 从 142.59 ms 降至 87.39 ms（降低 38.7%，1.63 倍）。FPGA 上 DAE 时延为 1.38 ms（INT8）至 3.14 ms（Base 的 NF4）。作者报告 Octo-Small INT8 的能效约为 RTX 4090 的 17.3 倍（1.467 对 0.085 it/J），Octo-Base 相对仅用 Jetson 的基线为 1.13 倍。

## Key technical points (EN)

- Partition rationale: the DAE's repeated parameter loads are DRAM-bound on a GPU; holding them in BRAM/URAM removes that traffic.
- Resource use on the KR260 (144 BRAM, 64 URAM): INT8 uses 56 URAM tiles; NF4-g16 uses 28 to 32 URAM but 139 to 140 BRAM tiles (96.5 to 97.2%), leaving little headroom.
- Action quality on the Bridge dataset (1,000 episodes): Octo-Base success 87.51% (INT8) and 85.90% (NF4) versus 87.49% FP32; Octo-Small 83.74% (INT8) and 82.59% (NF4) versus 84.06% FP32; a mixed INT4 configuration collapses to roughly 0% success.
- The ViT-B backbone accounts for about 97.9% of Octo-Base's EdgeDAE latency, which limits the Base gain.
- The RTX 4090 comparison uses figures taken from the official Octo repository and an assumed 200 W power bound rather than measured power.
- Evaluation covers only the Bridge dataset.

## Key technical points (ZH)

- 划分理由：DAE 反复加载参数，在 GPU 上受 DRAM 限制；把参数放入 BRAM/URAM 可消除这部分访存。
- KR260 资源占用（144 个 BRAM、64 个 URAM）：INT8 用 56 个 URAM；NF4-g16 用 28 至 32 个 URAM，但用掉 139 至 140 个 BRAM（96.5% 至 97.2%），余量很小。
- Bridge 数据集动作质量（1,000 个回合）：Octo-Base 成功率 INT8 为 87.51%、NF4 为 85.90%，FP32 为 87.49%；Octo-Small INT8 为 83.74%、NF4 为 82.59%，FP32 为 84.06%；混合 INT4 配置成功率坍缩至约 0%。
- ViT-B 主干约占 Octo-Base 的 EdgeDAE 时延的 97.9%，限制了 Base 的收益。
- 与 RTX 4090 的对比使用取自官方 Octo 仓库的数据和假定的 200 W 功耗上限，而非实测功耗。
- 评估只覆盖 Bridge 数据集。

## Why it matters / what's new (EN)

It is a concrete two-board split of one robot-policy model by workload character, with the inter-board link measured at about 70 microseconds, and it reports the accuracy cost of the chosen quantisation. The results rest on one edge GPU, one FPGA board, two small Octo models and one dataset, and the energy comparison to a desktop GPU relies on an assumed power figure.

## Why it matters / what's new (ZH)

这是按负载特性把一个机器人策略模型拆分到两块板上的具体实例，板间链路实测约 70 微秒，并报告了所选量化的精度代价。结果基于一块边缘 GPU、一块 FPGA 板、两个小型 Octo 模型和一个数据集，与桌面 GPU 的能效对比依赖假定的功耗数值。

## Images

*(No redistributable images for this entry.)*
