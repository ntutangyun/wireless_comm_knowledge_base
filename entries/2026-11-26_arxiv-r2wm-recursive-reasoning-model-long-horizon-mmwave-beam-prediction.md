---
id: 2026-11-26_arxiv-r2wm-recursive-reasoning-model-long-horizon-mmwave-beam-prediction
date_published: 2026-11-21
date_found: 2026-11-26
type: academic-paper
technology: cellular
title_en: "R2WM: Recursive Reasoning Wireless Model for Long-Horizon mmWave Beam Prediction"
title_zh: "R2WM：面向长时域毫米波波束预测的递归推理无线模型"
url: "https://arxiv.org/abs/2611.28774"
source_quality: full
topics: [beam-prediction, mmWave, recursive-reasoning, transformer, DeepMIMO, beam-management, LLM-for-wireless, AoD]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

Yunxiao Tian, Li Qiao, Ziwei Wan, Andrey Ivanov and Zhen Gao (Beijing Institute of Technology, The University of Hong Kong and Skoltech; accepted as a Correspondence in IEEE Transactions on Vehicular Technology, per the arXiv comments) propose R2WM for long-horizon mmWave beam prediction. Given 40 past beam indices and angles of departure (AoDs) at 16 ms steps, it predicts the next 10 beams (160 ms), aiming to lengthen beam-training intervals. R2WM repeatedly updates coupled latent and prediction states through one shared causal-attention backbone before jointly decoding the future beam indices, so computational depth grows without adding parameters.

The comparison target is a prompt-as-prefix LLM predictor (PaP-LLM, a frozen GPT-2 backbone) and two recurrent baselines. On DeepMIMO outdoor scenario O1 with a 64-element ULA and a 64-codeword codebook, R2WM reaches an average normalized beamforming gain of 0.9597 over 10 steps against 0.8629 for PaP-LLM, with 99.1% fewer parameters and 59.1% fewer counted FLOPs.

## Summary (ZH)

Yunxiao Tian、Li Qiao、Ziwei Wan、Andrey Ivanov 与 Zhen Gao（北京理工大学、香港大学与 Skoltech；据 arXiv 备注已被 IEEE Transactions on Vehicular Technology 接收为 Correspondence）提出用于长时域毫米波波束预测的 R2WM。给定间隔 16 ms 的 40 个历史波束索引与离开角（AoD），预测未来 10 个波束（160 ms），目标是延长波束训练间隔。R2WM 通过同一个共享的因果注意力主干反复更新耦合的隐状态与预测状态，再联合解码未来波束索引，从而在不增加参数量的情况下增加计算深度。

对比对象是提示前缀式 LLM 预测器（PaP-LLM，冻结的 GPT-2 主干）及两种循环网络基线。在 DeepMIMO 室外场景 O1、64 阵元 ULA 与 64 码字码本下，R2WM 在 10 步上的平均归一化波束赋形增益为 0.9597，PaP-LLM 为 0.8629，参数量减少 99.1%，统计的 FLOPs 减少 59.1%。

## Key technical points (EN)

- Table II (standard 64-antenna, mixed-speed setting): Cascaded LSTM 0.791 M parameters, 0.092 GFLOPs/sample, average gain 0.8313; ODE-LSTM 0.922 M, 0.449 GFLOPs, 0.8490; PaP-LLM 749.632 M, 528.352 GFLOPs, 0.8629; R2WM 7.016 M, 216.204 GFLOPs, 0.9597. At the final (10th) step R2WM reaches 0.9306 versus 0.8079 for PaP-LLM. The recurrent baselines are cheaper but have lower gain.
- Data: DeepMIMO O1 trajectories at 28 GHz, speeds nominally 5, 10, 15 and 20 m/s (+/-20%), 100 steps per trajectory, 82,944 training and 9,216 test samples; trained on a single RTX 4090.
- Transfer without retraining: 28 GHz to 60 GHz, average gain 0.9597 to 0.9608 for R2WM (PaP-LLM 0.8629 to 0.8621); a beam-index-only variant (R2WM-ID) goes from 0.9413 at BS1 to 0.9445 at BS2; trained at 64 antennas and tested at 32 antennas with the 64-codeword codebook, 0.9783 (PaP-LLM 0.9090). The authors note normalization is per array, so these measure relative beam-selection quality, not absolute array gain.
- Ablations: removing the AoD embedding lowers average gain to 0.9413; replacing causal with noncausal attention lowers it to 0.9473. Reducing recursion from (3,4) to (1,1) lowers average gain from 0.9597 to 0.8933 at the same 7.016 M parameters; the (3,1) configuration cuts batch-amortized time by 58.1% and FLOPs by 59.9% relative to (3,4). A nonrecursive Transformer of similar size gives lower gain at lower computation.
- Stated limits: simulation on DeepMIMO single-user, single-BS data; end-to-end inference latency on base-station hardware, multi-user and multi-BS extensions are future work.

## Key technical points (ZH)

- 表 II（标准 64 天线、混合速度）：Cascaded LSTM 0.791 M 参数、0.092 GFLOPs/样本、平均增益 0.8313；ODE-LSTM 0.922 M、0.449 GFLOPs、0.8490；PaP-LLM 749.632 M、528.352 GFLOPs、0.8629；R2WM 7.016 M、216.204 GFLOPs、0.9597。在最后（第 10）步，R2WM 为 0.9306，PaP-LLM 为 0.8079。循环网络基线计算更省，但增益较低。
- 数据：DeepMIMO O1 轨迹，28 GHz，名义速度 5、10、15、20 m/s（±20%），每条轨迹 100 步，训练样本 82,944、测试样本 9,216；在单张 RTX 4090 上训练。
- 无需重训的迁移：28 GHz 到 60 GHz，R2WM 平均增益由 0.9597 变为 0.9608（PaP-LLM 由 0.8629 变为 0.8621）；仅用波束索引的变体 R2WM-ID 由 BS1 的 0.9413 变为 BS2 的 0.9445；64 天线训练、32 天线测试并保持 64 码字码本时为 0.9783（PaP-LLM 0.9090）。作者指出归一化按各阵列分别进行，因此衡量的是相对波束选择质量而非绝对阵列增益。
- 消融：去掉 AoD 嵌入使平均增益降至 0.9413；将因果注意力换为非因果使其降至 0.9473。参数量同为 7.016 M 时，递归配置由 (3,4) 降到 (1,1)，平均增益由 0.9597 降至 0.8933；(3,1) 相对 (3,4) 将批摊销时间减少 58.1%、FLOPs 减少 59.9%。规模相近的非递归 Transformer 增益较低、计算量也较低。
- 作者说明的局限：基于 DeepMIMO 单用户、单基站数据的仿真；基站硬件上的端到端推理时延、多用户与多基站扩展留作未来工作。

## Why it matters / what's new (EN)

This entry addresses terrestrial mmWave beam management with a 7 M-parameter model that the authors position against a large pretrained LLM backbone (PaP-LLM); it relates to the KB's AI-for-RAN material (topic cellular-ai). The headline trade-off, as the authors report, is gain versus computation at fixed parameter count. All evidence is ray-traced simulation, and counted FLOPs exclude some operations (such as Conv1d), per the paper.

## Why it matters / what's new (ZH)

本条目针对地面毫米波波束管理，采用约 7 M 参数的模型，作者将其与大型预训练 LLM 主干（PaP-LLM）相对照；与 KB 中面向 RAN 的 AI 内容（主题 cellular-ai）相关。如作者所报告，主要权衡在于固定参数量下的增益与计算量。所有证据来自射线追踪仿真，且按论文说明，统计的 FLOPs 不含 Conv1d 等部分算子。

## Images

None.
