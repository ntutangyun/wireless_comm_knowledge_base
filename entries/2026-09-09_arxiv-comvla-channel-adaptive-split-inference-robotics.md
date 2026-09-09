---
id: 2026-09-09_arxiv-comvla-channel-adaptive-split-inference-robotics
date_published: 2026-09-07
date_found: 2026-09-09
type: academic-paper
technology: edge-ai
title_en: "ComVLA: Communication-Aware Split Inference for VLA Models in 6G-Connected Robotics"
title_zh: "ComVLA：面向 6G 连接机器人的视觉-语言-动作模型通信感知拆分推理"
url: "https://arxiv.org/abs/2609.07838"
source_quality: full
topics: [split-inference, vision-language-action, robotics, channel-adaptive-token-pruning, 6G, Rayleigh-fading, Rician-fading]
topic_primary: compute-offloading
topics_secondary: [edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

ComVLA, from researchers at the Technical University of Berlin and Huawei's Heisenberg Research Center in Munich, addresses a robotics deployment problem: Vision-Language-Action (VLA) models that let mobile robots follow natural-language manipulation instructions are too large to run on the robot itself, so inference is commonly offloaded to the cloud — but the wireless link between robot and cloud limits how much visual sensing data the edge device can transmit per control step. The paper's contribution is coupling the visual token budget directly to the instantaneous wireless channel capacity, using language guidance to decide *which* tokens matter most rather than pruning to a fixed budget regardless of link conditions. This differs from prior split-inference token-pruning approaches, which the paper says assume a static budget, and from semantic-communication approaches, which require channel-specific codec retraining that ComVLA avoids.

Evaluated on OpenVLA-OFT fine-tuned on the LIBERO benchmark across four task suites (Spatial, Object, Goal, Long Horizon; 50 episodes x 10 tasks per suite), with a channel model defined by C_link = eta * W * T * log2(1+SNR) over 20 MHz bandwidth and a 50 ms control period, and tested under both Rayleigh and Rician (kappa=3.0) fading with CSI feedback delays up to 200 ms: at a token budget of 32 (down from 512 unpruned), ComVLA reduces cloud compute by 3.8x (8.8 to 2.3 TFLOPs) and per-step transmission data by 8x (1088 KB to 136 KB at FP16), cutting inference latency by 22% for a 1.5 percentage-point task-success cost (96.9% to 95.4%). Under Rician fading at 5 dB SNR on the Object suite specifically, ComVLA reaches 88.0% task success versus 56.2% for a random-pruning baseline (+31.8 points). Adding INT8 quantization on top of the K*=32 token budget halves the payload from 136 KB (FP16) to 68 KB (accuracy 95.3% to 95.4%).

## Summary (ZH)

ComVLA 由柏林工业大学与华为慕尼黑海森堡研究中心的研究者提出，针对的是一个机器人部署问题：让移动机器人遵循自然语言操作指令的视觉-语言-动作（VLA）模型体量过大，无法在机器人本体上运行，因此推理通常被卸载至云端——但机器人与云端之间的无线链路限制了边缘设备每个控制步能够传输的视觉感知数据量。本文的贡献在于将视觉 token 预算直接与瞬时无线信道容量耦合，利用语言引导来判断*哪些* token 更重要，而非不论链路状况如何都按固定预算裁剪。这不同于以往假设固定预算的拆分推理 token 裁剪方法，也不同于语义通信方案（后者需要针对信道进行编解码器的专门再训练，而 ComVLA 无需如此）。

评测基于在 LIBERO 基准上微调的 OpenVLA-OFT，涵盖四个任务集（空间、物体、目标、长时程；每套任务 50 幕 × 10 项任务），信道模型定义为 C_link = eta × W × T × log2(1+SNR)，带宽 20 MHz，控制周期 50 毫秒，并在瑞利衰落与莱斯衰落（kappa=3.0，含最多 200 毫秒的 CSI 反馈时延）两种条件下测试：在 token 预算为 32（相较未裁剪的 512 大幅降低）时，ComVLA 将云端算力需求降低 3.8 倍（8.8 降至 2.3 TFLOPs），单步传输数据量降低 8 倍（FP16 下由 1088 KB 降至 136 KB），推理时延降低 22%，任务成功率仅下降 1.5 个百分点（96.9% 降至 95.4%）。在物体任务集、莱斯衰落、5 dB 信噪比条件下，ComVLA 的任务成功率达到 88.0%，而随机裁剪基线仅为 56.2%（高出 31.8 个百分点）。在 K*=32 的 token 预算基础上叠加 INT8 量化，可将负载由 136 KB（FP16）减半至 68 KB（准确率 95.3% → 95.4%）。

## Key technical points (EN)

- **Problem**: VLA models too large for on-robot execution; cloud offload constrained by wireless link capacity per control step.
- **Mechanism**: language-guided visual token selection whose budget is coupled to instantaneous channel capacity C_link = eta*W*T*log2(1+SNR) (20 MHz bandwidth, 50 ms control period), rather than a fixed pruning budget or a retrained semantic-communication codec.
- **Model / benchmark**: OpenVLA-OFT fine-tuned on LIBERO, four task suites (Spatial, Object, Goal, Long Horizon), 50 episodes x 10 tasks each; SigLIP and DINOv2 visual encoders on the edge robot.
- **Channel conditions tested**: Rayleigh and Rician (kappa=3.0) fading, CSI feedback delay up to 200 ms.
- **Headline numbers (K*=32 tokens)**: 3.8x cloud-compute reduction (8.8→2.3 TFLOPs), 8x transmission-data reduction (1088→136 KB/step at FP16), 22% inference-latency reduction, task success 96.9%→95.4% (1.5 pp cost).
- **Fading robustness**: Rician 5 dB SNR, Object suite — 88.0% vs. 56.2% for random pruning (+31.8 pp).
- **Quantization stacking**: INT8 on top of K*=32 halves the payload from 136 KB (FP16) to 68 KB (accuracy 95.3%→95.4%).

## Key technical points (ZH)

- **问题**：VLA 模型体量过大，无法在机器人本体上运行；云端卸载受限于每个控制步的无线链路容量。
- **机制**：以语言引导的视觉 token 选择，其预算与瞬时信道容量 C_link = eta×W×T×log2(1+SNR)（20 MHz 带宽，50 毫秒控制周期）耦合，而非固定裁剪预算或需要重新训练的语义通信编解码器。
- **模型/基准**：在 LIBERO 基准上微调的 OpenVLA-OFT，四个任务集（空间、物体、目标、长时程），每套任务 50 幕 × 10 项；机器人本体使用 SigLIP 与 DINOv2 视觉编码器。
- **测试信道条件**：瑞利衰落与莱斯衰落（kappa=3.0），CSI 反馈时延最高 200 毫秒。
- **核心数字（K*=32 tokens）**：云端算力降低 3.8 倍（8.8→2.3 TFLOPs），单步传输数据降低 8 倍（FP16 下 1088→136 KB），推理时延降低 22%，任务成功率 96.9%→95.4%（下降 1.5 个百分点）。
- **衰落鲁棒性**：莱斯衰落、5 dB 信噪比、物体任务集——成功率 88.0%，而随机裁剪基线为 56.2%（高出 31.8 个百分点）。
- **量化叠加**：在 K*=32 基础上叠加 INT8 量化，将负载由 136 KB（FP16）减半至 68 KB（准确率 95.3%→95.4%）。

## Why it matters / what's new (EN)

The contribution is a compute/token-partitioning policy for an AI workload rather than a change to the wireless mechanism itself, which is why it sits alongside other wireless-adjacent offloading work in this KB (`2026-09-02_arxiv-prosthesis-5g-mec-edge-offloading`, `2026-09-03_arxiv-network-aware-ml-forecasting-wireless-aps`). Its distinctive move is tying the visual-token budget to instantaneous channel capacity, so the same policy degrades gracefully as SNR falls instead of failing at a fixed budget. The paper frames the setting as 6G robotics (a 6-page IEEE GLOBECOM 2026 paper per its arXiv comment).

## Why it matters / what's new (ZH)

本文的贡献是面向 AI 工作负载的算力/token 划分策略，而非对无线机制本身的改动，因此它与本知识库中其他与无线密切相关的卸载类研究并列（`2026-09-02_arxiv-prosthesis-5g-mec-edge-offloading`、`2026-09-03_arxiv-network-aware-ml-forecasting-wireless-aps`）。其独到之处在于把视觉 token 预算与瞬时信道容量绑定，因而同一策略在信噪比下降时能够平缓退化，而不是在固定预算下失效。论文将应用场景设定为 6G 机器人（据其 arXiv 说明，为一篇 6 页的 IEEE GLOBECOM 2026 论文）。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
