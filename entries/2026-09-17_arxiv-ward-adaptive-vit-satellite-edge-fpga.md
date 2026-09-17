---
id: 2026-09-17_arxiv-ward-adaptive-vit-satellite-edge-fpga
date_published: 2026-07-20
date_found: 2026-09-17
technology: edge-ai
type: academic-paper
title_en: "WARD: Runtime Workload-Adaptive Vision Transformer Framework for Dependable Edge AI"
title_zh: "WARD：面向可靠边缘 AI 的运行时工作负载自适应视觉 Transformer 框架"
url: "https://arxiv.org/abs/2609.17556"
source_quality: full
topics: [Vision-Transformer, FPGA-accelerator, fault-tolerance, satellite-edge]
topic_primary: edge-ai-silicon
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

**Dating note:** the paper's arXiv v1 submission date is 2026-07-20 although its identifier falls in the September 2026 listing window; `date_published` follows the submission date.

The paper (Mahdi Taheri, Pramit Kumar Bhaduri, Mohammad Masoumi, Ali Mahani) targets edge AI accelerators whose operating conditions genuinely change at runtime — the motivating case is satellite onboard intelligence, where available solar power, radiation exposure and sensor drift vary without any possibility of manual intervention. The authors' framing is that existing fault-tolerance methods assume static conditions, continual-learning methods ignore concurrent hardware faults during online adaptation, and runtime-adaptive reliability frameworks have rarely actually been deployed on programmable AI accelerators. WARD's answer is to partition a pretrained Vision Transformer channel-wise into two physically isolated subnetworks (embedding dimension D split into two S=D/2 halves with independent parameter storage, preventing a fault in one path from propagating to the other), then expose four operating modes selectable at runtime: Full-Precision (the unpartitioned original 192-dim ViT, maximum accuracy under benign conditions), Low-Power (a single 96-dim subnetwork active, minimum compute), High-Reliability (both subnetworks run concurrently with output voting for fault tolerance), and Adaptive (one subnetwork frozen for inference while the other continues online learning on a fault-resilient parameter subset identified offline via statistical fault injection). A runtime controller continuously monitors available power (via an orbital energy model), hardware reliability (an ECC monitor) and model behavior (the disagreement rate between the two subnetworks), and picks a mode by prioritizing power availability first, then reliability response to radiation exposure and detected faults.

The system was implemented on a real programmable hardware platform, "PERUN," built around a Rocket Chip RISC-V core acting as the runtime management unit, connected over AXI to external DDR memory with dedicated Code RAM/Link RAM for instruction and connectivity configuration and four interrupt sources mapped to the four operating modes; the paper describes PERUN as an extension of an existing programmable FPGA accelerator (FGPU) and presents this as going "beyond software simulation," though it names no specific FPGA device or board, and the orbital power/radiation conditions driving mode switches are simulated. The model is a ViT-Tiny pretrained on ImageNet-21K and fine-tuned on the EuroSAT satellite-imagery dataset (10 classes, ~27,000 images). Reliability testing follows a statistical fault-injection methodology (Leveugle et al.), injecting faults at the most-significant exponent bit during inference. Headline numbers: clean accuracy of 96.11% in Full-Precision mode; a network-level failure rate of 1.79% (95% CI 0.23-3.34%) for the split architecture under statistical fault injection on subnet A; CPU-measured latencies of 84.3 ms/batch (Low-Power and Adaptive), 167.2 ms/batch (High-Reliability) and 241.7 ms/batch (Full-Precision), with High-Reliability's measured execution overhead on PERUN averaging 1.96x (range 1.79-2.14x); hardware overhead under 5% of LUT/BRAM resources; a runtime mode-transition time of 50 clock cycles; fault detection within 7 steps via a rolling monitoring window (0 steps for catastrophic failures); a 307x reduction in the monitored fault space (45,954,368 candidate injection sites down to 149,568) from restricting monitoring to the exponent MSB within the twelve highest-vulnerability parameter groups, and a separately-derived protected (frozen) parameter set of 18.5% per subnet (266,218 of 1,436,074); and representative power draws of 3.995 W (Full-Precision), 3.586 W (Low-Power) and 3.995 W (High-Reliability). Accuracy under a distribution shift (clean vs. "shifted" inputs) was 96.11%/94.83% (FP), 92.80%/86.48% (HR), 90.63%/85.02% (LP) and 92.46%/85.76% (Adaptive).

## Summary (ZH)

**日期说明：** 本文 arXiv v1 的提交日期为 2026-07-20，尽管其编号落在 2026 年 9 月的列表窗口内；`date_published` 采用提交日期。

本文（Mahdi Taheri、Pramit Kumar Bhaduri、Mohammad Masoumi、Ali Mahani）针对的是运行条件在运行时会真正发生变化的边缘 AI 加速器，其驱动场景是卫星星载智能——可用太阳能功率、辐射暴露与传感器漂移都会变化，且不存在人工干预的可能。作者指出，现有容错方法大多假设运行条件静态不变，持续学习方法在在线适应期间忽视并发的硬件故障，而运行时自适应可靠性框架在可编程 AI 加速器上鲜有真正落地。WARD 的方案是将一个预训练视觉 Transformer 按通道划分为两个物理隔离的子网络（嵌入维度 D 拆分为两个 S=D/2 的部分，各自拥有独立参数存储，防止一条路径的故障传播到另一条），并对外提供四种可在运行时选择的工作模式：全精度模式（不做拆分的原始 192 维 ViT，在良性条件下追求最高精度）、低功耗模式（仅激活单个 96 维子网络，追求最小算力）、高可靠模式（两个子网络并行运行并对输出进行投票以实现容错）以及自适应模式（一个子网络冻结用于推理，另一个在离线统计故障注入所确定的、具备故障韧性的参数子集上持续在线学习）。运行时控制器持续监测可用功率（基于轨道能量模型）、硬件可靠性（ECC 监测器）与模型行为（两个子网络之间的分歧率），并优先依据功率可用性选择模式，其次响应辐射暴露与检测到的故障。

该系统实现于一个真实的可编程硬件平台 "PERUN"，其核心为担任运行时管理单元的 Rocket Chip RISC-V 内核，通过 AXI 总线连接外部 DDR 内存，并配有专用的代码 RAM/链路 RAM 用于指令与连接配置，四个中断源分别对应四种工作模式；论文将 PERUN 描述为对现有可编程 FPGA 加速器（FGPU）的扩展，并称其“超越了纯软件仿真”，但未点名具体的 FPGA 器件或开发板；驱动模式切换的轨道功率/辐射条件也是模拟产生的。所用模型为在 ImageNet-21K 上预训练、并在 EuroSAT 卫星影像数据集（10 类，约 27,000 张图像）上微调的 ViT-Tiny。可靠性测试遵循统计故障注入方法（Leveugle 等），在推理过程中向最高有效指数位注入故障。核心数据：全精度模式下的干净准确率为 96.11%；拆分架构在针对子网 A 的统计故障注入下的网络级失效率为 1.79%（95% 置信区间 0.23%-3.34%）；在 CPU 上测得的每批延迟为低功耗与自适应模式 84.3 毫秒、高可靠模式 167.2 毫秒、全精度模式 241.7 毫秒，而高可靠模式在 PERUN 上实测的执行开销平均为 1.96 倍（区间 1.79-2.14 倍）；硬件开销低于 LUT/BRAM 资源的 5%；运行时模式切换耗时 50 个时钟周期；借助滚动监测窗口在 7 步内完成故障检测（灾难性故障为 0 步）；将监测限定于十二个最高脆弱性参数组的指数最高有效位，使受监测故障空间缩减 307 倍（候选注入点从 45,954,368 降至 149,568）；另外独立导出的受保护（冻结）参数集占每个子网的 18.5%（1,436,074 个参数中的 266,218 个）；典型功耗为全精度模式 3.995 瓦、低功耗模式 3.586 瓦、高可靠模式 3.995 瓦。在分布偏移下（干净输入 vs. "偏移"输入）的准确率分别为：全精度 96.11%/94.83%、高可靠 92.80%/86.48%、低功耗 90.63%/85.02%、自适应 92.46%/85.76%。

## Key technical points (EN)

- **Architecture**: pretrained ViT channel-wise split into two physically isolated 96-dim subnetworks (from a 192-dim original); four runtime-selectable modes — Full-Precision, Low-Power (one subnetwork), High-Reliability (both + output voting), Adaptive (one frozen, one continually learning on a fault-resilient parameter subset).
- **Runtime controller**: monitors power (orbital energy model), reliability (ECC monitor) and inter-subnetwork disagreement rate; prioritizes power availability, then radiation/fault response.
- **Hardware**: "PERUN" — an extension of an existing programmable FPGA accelerator (FGPU) with a Rocket Chip RISC-V runtime-management core, AXI-connected DDR, dedicated Code/Link RAM and four mode-mapped interrupt sources; the paper presents it as going beyond software simulation but names no FPGA device/board, and the orbital power/radiation conditions are simulated.
- **Model/data**: ViT-Tiny (ImageNet-21K pretrained) fine-tuned on EuroSAT (10 classes, ~27,000 satellite images); fault injection at the exponent MSB per Leveugle et al.'s statistical methodology.
- **Headline numbers**: 96.11% clean accuracy (FP); 1.79% network-level failure rate for the split architecture under statistical fault injection (95% CI 0.23-3.34%); CPU latencies 84.3 ms/batch (LP) vs. 167.2 ms/batch (HR) vs. 241.7 ms/batch (FP), HR execution overhead on PERUN 1.96x avg; <5% LUT/BRAM hardware overhead; 50-clock-cycle mode transitions; fault detection in 7 steps (0 for catastrophic faults); 307x reduction in the monitored fault space; 18.5% of parameters per subnet frozen as reliability-critical.

## Key technical points (ZH)

- **架构**：预训练 ViT 按通道拆分为两个物理隔离的 96 维子网络（原始为 192 维）；提供四种可在运行时选择的模式——全精度、低功耗（单子网络）、高可靠（双子网络+输出投票）、自适应（一个冻结、另一个在故障韧性参数子集上持续学习）。
- **运行时控制器**：监测功率（轨道能量模型）、可靠性（ECC 监测器）与子网络间分歧率；优先依据功率可用性，其次响应辐射与故障。
- **硬件**：“PERUN”——对现有可编程 FPGA 加速器（FGPU）的扩展，配有担任运行时管理单元的 Rocket Chip RISC-V 内核、通过 AXI 连接的 DDR、专用代码/链接 RAM 及四个模式映射中断源；论文称其超越了纯软件仿真，但未点名具体 FPGA 器件/开发板，且轨道功率/辐射条件为模拟产生。
- **模型/数据**：在 ImageNet-21K 上预训练、于 EuroSAT（10 类，约 27,000 张卫星影像）上微调的 ViT-Tiny；按 Leveugle 等人的统计方法在指数最高有效位注入故障。
- **核心数字**：全精度干净准确率 96.11%；拆分架构在统计故障注入下的网络级失效率 1.79%（95% 置信区间 0.23%-3.34%）；CPU 上每批延迟：低功耗 84.3 毫秒 vs. 高可靠 167.2 毫秒 vs. 全精度 241.7 毫秒，高可靠模式在 PERUN 上的执行开销平均 1.96 倍；硬件开销低于 LUT/BRAM 资源的 5%；模式切换耗时 50 个时钟周期；故障检测 7 步完成（灾难性故障 0 步）；受监测故障空间缩减 307 倍；每个子网有 18.5% 的参数作为可靠性关键参数被冻结。

## Why it matters / what's new (EN)

The KB's edge-ai-silicon entries have so far mostly covered fabricated accelerator chips characterized for raw throughput/power/energy-per-inference (e.g. ETHEREAL, BrainScaleS-2, FALCON). WARD is a different angle on the same bin: a runtime-reconfigurable reliability/power/accuracy trade-off implemented on real programmable hardware, with the fault-tolerance mechanism (channel-wise redundancy, voting, fault-resilient continual learning) and the runtime controller as the actual contribution rather than the silicon substrate itself. Its home-domain framing (satellite onboard intelligence with variable solar power and radiation) is a genuinely different deployment shape than the mobile/embedded-camera framing that dominates this bin so far.

## Why it matters / what's new (ZH)

知识库中现有的边缘 AI 芯片类条目此前大多聚焦于实际流片加速器的原始吞吐/功耗/单次推理能耗表征（如 ETHEREAL、BrainScaleS-2、FALCON）。WARD 则从另一个角度切入同一分类：在真实可编程硬件上实现的、可运行时重构的可靠性/功耗/精度权衡机制，其贡献在于容错机制本身（按通道冗余、投票、故障韧性持续学习）与运行时控制器，而非底层芯片工艺。其应用场景（具有可变太阳能功率与辐射条件的卫星星载智能）也与该分类此前以移动/嵌入式摄像头为主的部署形态有明显不同。

## Images

![PERUN hardware architecture (High-Reliability configuration) | PERUN 硬件架构（高可靠配置）](https://arxiv.org/html/2609.17556v1/figures/PERUN_architecture_2.png)
