---
id: 2026-09-04_arxiv-h3dnas-onnx-3d-pointcloud-compression
date_published: 2026-09-02
date_found: 2026-09-04
type: academic-paper
technology: edge-ai
title_en: "H3DNAS: Hardware-Aware ONNX-Native 3D Point Cloud Model Compression"
title_zh: "H3DNAS：面向硬件感知的 ONNX 原生 3D 点云模型压缩"
url: "https://arxiv.org/abs/2609.02684"
source_quality: full
topics: [ONNX, neural-architecture-search, model-compression, point-cloud, source-code-free, Jetson-Orin-Nano]
topic_primary: edge-model-efficiency
topics_secondary: [edge-ai-silicon]
novelty_score: 3
---

## Summary (EN)

Deploying 3D point-cloud models on edge hardware such as the NVIDIA Jetson Orin Nano is tightly constrained by compute and memory budgets, and the paper identifies a practical obstacle to compressing these models in the real world: existing compression methods require access to the model's original source code, architecture-class definition, or gradient access — none of which is available for the ONNX (Open Neural Network Exchange) binaries that vendors and model repositories actually distribute. H3DNAS (Indian Institute of Technology Jodhpur) is a hardware-aware compression framework designed to operate directly on ONNX computational graphs with none of those requirements.

Its method has two parts. A Channel Dependency Graph (CDG) classifies every ONNX operator into one of four constraint classes (channel-generating, channel-transparent, channel-constraining, channel-terminating) and proves that the resulting free-parameter fraction is a topological invariant computable in linear time — a provable compression ceiling that holds regardless of the actual weight values, enforced by five constraint rules covering static shapes, dynamic tensor equality, grouped-convolution immutability, classification-head fixity, and normalization-parameter locking. A two-stage hierarchical search then compresses within that ceiling: Stage 1 does structural pruning via L1-norm channel importance and a label-free "output fidelity" proxy (cosine similarity between base and pruned logits on 32 random inputs) to cheaply pre-screen candidates before full evaluation; Stage 2 applies GhostConv structural mutation (replacing a standard convolution with a cheaper primary-plus-depthwise-ghost-branch pair) to the Pareto-optimal Stage-1 candidates. The whole pipeline operates on frozen `onnx.ModelProto` graphs via ONNX graph surgery, using `onnx2torch` only to reconstruct trainable modules for the final fine-tuning step.

Evaluated on PointNet, PointNet++ (SSG), and PointMLP against the ModelNet40 classification benchmark, targeting a Jetson Orin Nano 8GB budget (under 4B FLOPs, 20M parameters, 50MB, 50ms P50 latency measured via OnnxRuntime CPU), H3DNAS reduces parameters by 65.5% (PointNet), 43.2% (PointNet++), and 49.1% (PointMLP), with FLOPs reductions in the same range and accuracy changes within one point of the uncompressed baseline (e.g. PointNet 90.32% to 90.28%). The compressed PointNet model comes in at 1.19M parameters (from 3.46M), a 63.4% FLOPs reduction, 4.65MB (from 13.32MB), and 6.02ms P50 latency (from 11.98ms, a 1.99x speedup) — well inside the Jetson budget on every dimension. The paper reports these compression ratios as comparable to or exceeding prior methods that do require source-code access (matching CP3's 43% parameter reduction on PointNet++, for example), and validates the graph-surgery approach across 29 ONNX Model Zoo architectures spanning seven model families with no invalid graphs produced (a safety backstop reverted 3 of the 29 to their unpruned graphs where structural constraints blocked the 50% cut).

## Summary (ZH)

在 NVIDIA Jetson Orin Nano 等边缘硬件上部署 3D 点云模型，受到算力与内存预算的严格限制，而论文指出了在现实场景中压缩此类模型面临的一个实际障碍：现有压缩方法通常需要访问模型的原始源代码、架构类定义或梯度信息——而这些恰恰是厂商与模型仓库实际分发的 ONNX（开放神经网络交换格式）二进制文件所不具备的。H3DNAS（印度理工学院焦特布尔分校）是一套硬件感知压缩框架，设计为可直接在 ONNX 计算图上运行，无需满足上述任何前提条件。

其方法包含两部分。"通道依赖图"（CDG）将每个 ONNX 算子归入四类约束类别之一（生成通道、透传通道、约束通道、终止通道），并证明由此得到的"自由参数比例"是一个可在线性时间内计算的拓扑不变量——即一个与实际权重取值无关、可证明成立的压缩上限，由五条约束规则（涵盖静态形状、动态张量相等性、分组卷积不可变性、分类头固定性、归一化参数锁定）保证有效性。随后的两阶段分层搜索在该上限范围内进行压缩：第一阶段基于 L1 范数通道重要性与一种无需标签的"输出保真度"代理指标（对 32 个随机输入计算原始与剪枝后 logit 的余弦相似度）进行结构化剪枝，以低成本预筛选候选方案后再进行完整评估；第二阶段对第一阶段帕累托最优的候选方案应用 GhostConv 结构变异（将标准卷积替换为更廉价的"主分支+深度可分离幽灵分支"组合）。整条流程完全基于冻结的 `onnx.ModelProto` 计算图、通过 ONNX 图手术方式运行，仅在最终微调阶段借助 `onnx2torch` 重建可训练模块。

在 PointNet、PointNet++（SSG 版）与 PointMLP 上、基于 ModelNet40 分类基准评测，并以 Jetson Orin Nano 8GB 为目标预算（4B FLOPs 以内、2000 万参数以内、50MB 以内、通过 OnnxRuntime CPU 测得的 P50 延迟 50ms 以内），H3DNAS 分别将参数量降低 65.5%（PointNet）、43.2%（PointNet++）与 49.1%（PointMLP），FLOPs 降幅相近，准确率变化均在未压缩基线的 1 个百分点以内（例如 PointNet 从 90.32% 变为 90.28%）。压缩后的 PointNet 模型最终为 119 万参数（原 346 万）、FLOPs 降低 63.4%、4.65MB（原 13.32MB）、P50 延迟 6.02ms（原 11.98ms，1.99 倍加速）——在 Jetson 预算的各项指标上均留有充裕余量。论文指出，这些压缩比例可与甚至优于此前需要源代码访问权限的方法相媲美（例如在 PointNet++ 上匹配了 CP3 方法 43% 的参数降幅），并在跨越七个模型家族的 29 个 ONNX Model Zoo 架构上验证了该图手术方法，未产生任何非法计算图（其中 3 个模型因结构约束无法完成 50% 剪枝，由安全回退机制还原为未剪枝图）。

## Key technical points (EN)

- **Problem**: existing model-compression methods require source code / architecture definitions / gradient access, which vendor-distributed ONNX binaries do not provide.
- **Channel Dependency Graph (CDG)**: classifies ONNX operators into 4 constraint classes (channel-generating / transparent / constraining / terminating), proves the free-parameter fraction is a topological invariant computable in O(|V|+|E|) time — a provable compression ceiling independent of weight values, enforced by 5 constraint rules.
- **Two-stage search**: Stage 1 = L1-norm structural pruning + label-free "output fidelity" pre-screening (cosine similarity on 32 random inputs, top-15 candidates advance); Stage 2 = GhostConv structural mutation on Pareto-optimal Stage-1 candidates.
- **Pipeline**: operates entirely on frozen `onnx.ModelProto` graphs via ONNX graph surgery; no PyTorch/TensorFlow framework APIs invoked except `onnx2torch` for final fine-tuning.
- **Target hardware**: NVIDIA Jetson Orin Nano 8GB, budget <=4B FLOPs / <=20M params / <=50MB / <=50ms P50 latency (OnnxRuntime CPU, batch=1).
- **Headline numbers**: parameter reduction 65.5% (PointNet), 43.2% (PointNet++), 49.1% (PointMLP), each within ~1pp accuracy of baseline; compressed PointNet = 1.19M params (from 3.46M) / 63.4% FLOPs reduction / 4.65MB (from 13.32MB) / 6.02ms P50 (from 11.98ms, a 1.99x speedup), all comfortably inside the Jetson budget; validated across 29 ONNX Model Zoo architectures / 7 model families with zero invalid graphs (a safety backstop reverted 3 of the 29 to their unpruned graphs where structural constraints blocked the 50% cut).
- **Affiliation**: Indian Institute of Technology Jodhpur; no conference venue stated.

## Key technical points (ZH)

- **问题**：现有模型压缩方法需要源代码、架构定义或梯度访问权限，而厂商分发的 ONNX 二进制文件并不提供这些条件。
- **通道依赖图（CDG）**：将 ONNX 算子归入 4 类约束类别（生成通道/透传通道/约束通道/终止通道），证明自由参数比例是一个可在 O(|V|+|E|) 时间内计算的拓扑不变量——一个与权重取值无关、可证明成立的压缩上限，由 5 条约束规则保证有效性。
- **两阶段搜索**：第一阶段为基于 L1 范数的结构化剪枝，配合无需标签的"输出保真度"预筛选（对 32 个随机输入计算余弦相似度，前 15 个候选进入完整评估）；第二阶段对第一阶段帕累托最优候选应用 GhostConv 结构变异。
- **流程**：完全基于冻结的 `onnx.ModelProto` 计算图、通过 ONNX 图手术方式运行；除最终微调阶段使用 `onnx2torch` 外，不调用任何 PyTorch/TensorFlow 框架 API。
- **目标硬件**：NVIDIA Jetson Orin Nano 8GB，预算为 4B FLOPs 以内 / 2000 万参数以内 / 50MB 以内 / P50 延迟 50ms 以内（OnnxRuntime CPU，批大小为 1）。
- **核心数据**：参数量降低 65.5%（PointNet）、43.2%（PointNet++）、49.1%（PointMLP），准确率变化均在基线约 1 个百分点以内；压缩后的 PointNet 为 119 万参数（原 346 万）/FLOPs 降低 63.4%/4.65MB（原 13.32MB）/P50 延迟 6.02ms（原 11.98ms，1.99 倍加速），各项指标均在 Jetson 预算内留有充裕余量；在跨越 7 个模型家族的 29 个 ONNX Model Zoo 架构上完成验证，未产生任何非法计算图（其中 3 个模型因结构约束无法完成 50% 剪枝，由安全回退机制还原为未剪枝图）。
- **所属机构**：印度理工学院焦特布尔分校；未注明会议/期刊。

## Why it matters / what's new (EN)

This complements this KB's existing edge-model-efficiency coverage (e.g. `2026-09-01_arxiv-goe-tactical-edge-cpu-compression`, `2026-08-31_apple-afm3-flash-resident-sparse-on-device-model`) with a distinct and practically motivated angle: most compression work assumes access to a model's training-time source, but a growing share of real-world edge deployment starts from a vendor-shipped ONNX binary with none of that available. The Channel Dependency Graph's provable, weight-independent compression ceiling is a genuinely different mechanism from the gradient- or activation-based importance scoring most NAS/pruning pipelines use, and the paper backs the source-code-free claim with a 29-architecture validation sweep rather than asserting it on the three benchmark models alone.

## Why it matters / what's new (ZH)

本条目为本 KB 已有的 edge-model-efficiency 相关内容（如 `2026-09-01_arxiv-goe-tactical-edge-cpu-compression`、`2026-08-31_apple-afm3-flash-resident-sparse-on-device-model`）补充了一个具体且具有现实动机的新视角：大多数压缩工作假设可以访问模型训练时的源代码，但现实世界中越来越多的边缘部署场景，起点只是厂商分发的 ONNX 二进制文件，不具备上述任何条件。"通道依赖图"所提供的、与权重取值无关、可证明成立的压缩上限，与大多数 NAS/剪枝流程所依赖的基于梯度或激活的重要性评分机制有本质不同；论文也并未仅凭三个基准模型就断言其"无需源代码"的能力，而是通过对 29 个架构的验证扫描予以支撑。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
