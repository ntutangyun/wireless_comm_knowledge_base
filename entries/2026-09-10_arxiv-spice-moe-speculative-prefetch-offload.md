---
id: 2026-09-10_arxiv-spice-moe-speculative-prefetch-offload
date_published: 2026-08-21
date_found: 2026-09-10
type: academic-paper
technology: edge-ai
title_en: "SPICE: Speculative Prefetching with Low-Rank Expert Surrogates and Heterogeneous Orchestration for MoE Inference Acceleration"
title_zh: "SPICE：面向 MoE 推理加速的低秩专家代理投机预取与异构编排"
url: "https://arxiv.org/abs/2608.21240"
source_quality: full
topics: [MoE-offloading, speculative-prefetching, CPU-GPU-orchestration, PCIe, consumer-GPU]
topic_primary: compute-offloading
topics_secondary: [edge-ai-silicon, on-device-inference]
novelty_score: 3
---

## Summary (EN)

Mixture-of-Experts (MoE) LLMs decouple model capacity from compute cost via sparse activation, but their expert parameters often exceed a single GPU's memory, making inference latency dominated by host-to-device PCIe transfers as experts are swapped in. SPICE (accepted to ASP-DAC 2027) addresses this with a two-part mechanism: a lightweight draft model, trained to align with the target MoE architecture, uses a confidence-aware adaptive lookahead algorithm to speculatively prefetch the experts it predicts will be needed; when a prediction misses, SPICE does not simply fall back to a full-cost fetch — low-confidence misses are approximated in place by the resident shared expert combined with low-rank expert (LoRE) surrogates, while the exact residual computation is offloaded to the CPU and executed asynchronously alongside ongoing GPU work.

Evaluated on DeepSeek-V2-Lite and Qwen2-57B-A14B, SPICE is tested across three genuinely different GPU/host configurations: an RTX 5090 with 128GB host DRAM, an entry-level RTX 4060 with 16GB host DRAM, and an NVIDIA A800 80GB PCIe (PCIe 4.0 x16, ~512 GB DDR4 host DRAM, Intel Xeon Gold 5320) datacenter GPU — spanning consumer edge/workstation tiers as well as a datacenter reference point, all under single-GPU-plus-CPU-offload orchestration rather than a multi-GPU serving cluster. SPICE reports up to 3.12x speedup in Time Per Output Token (TPOT) with minimal reported quality loss. The paper's own framing of the contribution is that effective MoE offloading requires not just predicting which experts will be needed next, but deciding which prediction misses are worth approximating, which require exact recovery, and where that exact work should execute.

## Summary (ZH)

混合专家（MoE）大模型通过稀疏激活将模型容量与计算成本解耦，但其专家参数体量往往超出单块 GPU 的显存容量，使得推理时延主要受专家换入时主机到设备 PCIe 传输的制约。SPICE（已被 ASP-DAC 2027 接收）提出一种两段式机制加以应对：一个与目标 MoE 架构对齐训练的轻量草稿模型，借助置信度感知的自适应前瞻算法，投机式地预取其预测将被用到的专家；当预测命中失败时，SPICE 并不简单退回到全成本重新获取——置信度较低的未命中会由常驻共享专家结合低秩专家（LoRE）代理就地近似，而精确的残差计算则被卸载至 CPU，与 GPU 上正在进行的计算异步并行执行。

SPICE 在 DeepSeek-V2-Lite 与 Qwen2-57B-A14B 上评测，并在三种确有差异的 GPU/主机配置下进行测试：配备 128GB 主机 DDR5 内存的 RTX 5090、配备 16GB 主机 DDR4 内存的入门级 RTX 4060，以及数据中心级 NVIDIA A800 80GB——覆盖了消费级/工作站边缘档位与数据中心参照点，且均采用单 GPU 加 CPU 卸载的编排方式，而非多 GPU 服务集群。SPICE 在每输出 token 时间（TPOT）上报告最高 3.12 倍加速，且质量损失极小。论文自身对贡献的定位是：有效的 MoE 卸载不仅需要预测接下来会用到哪些专家，还需要决定哪些预测失误值得近似处理、哪些必须精确恢复，以及精确计算应在何处执行。

## Key technical points (EN)

- **Problem**: MoE expert parameters exceed single-GPU memory; inference latency is dominated by host-to-device PCIe expert transfers.
- **Mechanism**: confidence-aware speculative expert prefetching via a lightweight aligned draft model + adaptive lookahead; on low-confidence misses, approximate in place via resident shared expert + low-rank expert (LoRE) surrogates while offloading exact residual computation to the CPU, run asynchronously with GPU work.
- **Models**: DeepSeek-V2-Lite, Qwen2-57B-A14B.
- **Hardware tested**: RTX 5090 (PCIe 4.0 x8, 128GB host DRAM), RTX 4060 (PCIe 4.0 x8, 16GB host DRAM), NVIDIA A800 80GB — single-GPU-plus-CPU-offload setups, not a multi-GPU cluster.
- **Results**: up to 3.12x speedup in Time Per Output Token (TPOT) with minimal reported quality loss.
- **Venue**: accepted to ASP-DAC 2027 (Asia and South Pacific Design Automation Conference).

## Key technical points (ZH)

- **问题**：MoE 专家参数超出单 GPU 显存；推理时延主要受主机到设备的 PCIe 专家传输制约。
- **机制**：通过对齐目标架构的轻量草稿模型 + 自适应前瞻算法实现置信度感知的专家投机预取；对低置信度未命中，由常驻共享专家 + 低秩专家（LoRE）代理就地近似，同时将精确残差计算卸载至 CPU，与 GPU 工作异步并行。
- **模型**：DeepSeek-V2-Lite、Qwen2-57B-A14B。
- **测试硬件**：RTX 5090（PCIe 4.0 x8，128GB 主机内存）、RTX 4060（PCIe 4.0 x8，16GB 主机内存）、NVIDIA A800 80GB——均为单 GPU 加 CPU 卸载配置，而非多 GPU 集群。
- **结果**：每输出 token 时间（TPOT）最高加速 3.12 倍，质量损失极小。
- **发表**：已被 ASP-DAC 2027（亚太设计自动化会议）接收。

## Why it matters / what's new (EN)

This KB's compute-offloading bin has mostly covered device-cloud or device-device split inference (e.g. 2026-09-03 AceSpec, 2026-09-01 Multi-SPIN); SPICE addresses a different offload boundary — within a single workstation/edge machine, between GPU and CPU/host memory — for MoE models specifically, a model family this KB has not previously covered from the offloading angle. Testing explicitly on an entry-level RTX 4060 alongside a datacenter A800 is a useful evidentiary anchor: it grounds the "GPU memory doesn't fit the experts" problem in a genuinely edge/workstation-scale GPU rather than only a datacenter accelerator, closing a backlog item this scout had left unreviewed since 2026-08-31.

## Why it matters / what's new (ZH)

本知识库 compute-offloading 分类此前主要覆盖设备-云端或设备-设备间的拆分推理（如 2026-09-03 收录的 AceSpec、2026-09-01 收录的 Multi-SPIN）；SPICE 关注的是另一种卸载边界——在单台工作站/边缘机器内部、GPU 与 CPU/主机内存之间——并专门针对 MoE 模型，这是本知识库此前从卸载角度尚未覆盖的模型家族。明确在入门级 RTX 4060 与数据中心级 A800 上同时测试，为「GPU 显存放不下专家」这一问题提供了扎实的实证锚点，使其真正落在边缘/工作站级 GPU 而非仅数据中心加速卡上，同时也补齐了本侦察员自 2026-08-31 以来一直未评审的一项待办条目。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
