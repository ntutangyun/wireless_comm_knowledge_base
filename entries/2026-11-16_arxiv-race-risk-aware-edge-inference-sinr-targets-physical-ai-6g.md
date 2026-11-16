---
id: 2026-11-16_arxiv-race-risk-aware-edge-inference-sinr-targets-physical-ai-6g
date_published: 2026-11-10
date_found: 2026-11-16
technology: edge-ai
type: academic-paper
title_en: "RACE: predicted action-failure risk and task criticality set per-observation SINR targets for uplink edge inference by Physical-AI devices (11% lower cost, simulated)"
title_zh: "RACE：以预测的动作失败风险与任务关键度为每次观测设定上行 SINR 目标，服务 Physical-AI 设备的边缘推理（仿真中成本降低 11%）"
url: "https://arxiv.org/abs/2611.14696"
source_quality: full
topics: [wireless-edge-inference, physical-ai, sinr-target, risk-aware, uplink-feature-transmission, llm-task-contract]
topic_primary: compute-offloading
topics_secondary: [task-oriented-communication, edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

This letter (submitted to IEEE for possible publication) considers a base station with an edge inference server serving several embodied "Physical-AI" devices. To spare device compute, all physical-action inference is offloaded: each device runs a fixed local feature extractor, sends the encoded features on the uplink, and executes the action the server returns. The authors argue that a fixed SINR requirement over-provisions low-risk observations (an empty corridor) and under-provisions high-risk ones (a partly occluded person), so the radio target should follow the risk of a wrong action.

RACE works on two timescales. A slow-timescale large language model reads task descriptions and feedback and proposes a physical criticality and a maximum action delay; a deterministic validator checks these against bounds and deadline feasibility, with a fallback for invalid proposals, so the LLM is not in the time-critical radio loop. A fast-timescale predictor estimates before each uplink the probability of an unacceptable action error, which with the criticality gives an adaptive SINR target, combined with a deadline-derived SINR requirement. A hybrid actor-critic (trained with PPO) then picks each device's inference configuration (feature size and edge-side model) and transmit power, while the base station computes receive beamformers analytically and applies a finite power-restoration step. Link computed over: a simulated 6G-style multi-antenna cellular uplink with interference between devices (Table I parameters); no over-the-air measurement.

## Summary (ZH)

这篇快报（已提交 IEEE 待发表）考虑一个带边缘推理服务器的基站为多个具身 "Physical-AI" 设备提供服务。为减轻设备算力负担，所有物理动作推理都被卸载：每个设备运行固定的本地特征提取器，经上行发送编码特征，并执行服务器返回的动作。作者指出，固定的 SINR 要求会对低风险观测（空走廊）过度配置，对高风险观测（被部分遮挡的行人）配置不足，因此无线目标应随错误动作的风险而变。

RACE 在两个时间尺度上工作。慢时间尺度上，大语言模型读取任务描述与反馈，提出物理关键度与最大动作时延；确定性校验器据界限与时限可行性检查这些提议，并对无效提议设有回退，使 LLM 不处于时间关键的无线环路中。快时间尺度上，预测器在每次上行前估计不可接受动作错误的概率，与关键度一起给出自适应 SINR 目标，再与由时限导出的 SINR 要求合并。随后混合 actor-critic（以 PPO 训练）为每个设备选择推理配置（特征大小与边缘侧模型）与发射功率，基站则以解析方式计算接收波束成形并执行有限步功率恢复。所经链路：仿真的 6G 风格多天线蜂窝上行，设备间存在干扰（参数见表 I）；无空口实测。

## Key technical points (EN)

- The objective is a joint accuracy-latency-energy cost under SINR, deadline and power constraints; the paper's headline is an 11% reduction in the average cost relative to the reliable fixed-high-SINR baseline, with near-zero constraint outage.
- Seven baselines are compared: fixed-high and fixed-low SINR, a risk-greedy heuristic, uncertainty-only (criticality removed), no-contract (average task contracts used for control but judged against actual requirements), fixed-config (middle inference configuration) and no-restoration.
- Fixed-low SINR shows higher outage from insufficient provisioning; no-contract and no-restoration also suffer severe outage, which the authors read as showing the need for task-specific requirements and the corrective power-restoration step.
- Across task-risk quantiles RACE spends less energy than fixed-high and uncertainty-only, and the comparison with uncertainty-only is used to show the extra benefit of modelling the consequence of an error and not only its likelihood.
- The LLM is represented in the simulations by its validated task-contract outputs rather than by running a live model, so the LLM contribution is not separately evaluated; training is centralised at the base station and the evaluation uses random seeds over simulated slots.

## Key technical points (ZH)

- 目标是在 SINR、时限与功率约束下的联合精度-时延-能耗代价；论文的核心结果是相对"可靠的固定高 SINR"基线，平均代价降低 11%，且约束违反近乎为零。
- 对比了七个基线：固定高与固定低 SINR、风险贪心启发式、仅不确定性（去除关键度）、无契约（用平均任务契约控制、按实际要求评判）、固定配置（取中间推理配置）以及无功率恢复。
- 固定低 SINR 因配置不足而中断率更高；无契约与无功率恢复同样出现严重中断，作者据此认为任务特定要求与功率恢复步骤都是必要的。
- 在各任务风险分位上，RACE 的能耗低于固定高与仅不确定性方案；与仅不确定性的对比用来说明，除了错误的可能性外，对错误后果建模还有额外收益。
- 仿真中的 LLM 以其经校验的任务契约输出代表，而非运行真实模型，因此 LLM 的贡献未被单独评估；训练集中在基站完成，评估使用多个随机种子下的仿真时隙。

## Why it matters / what's new (EN)

It ties the radio target for an offloaded inference directly to the consequence of a wrong action, with the LLM confined to a slow, validated planning role. The evidence is a simulated uplink with a learned policy, the gain is reported only against the baselines in the paper, and it is a short letter without hardware or an over-the-air link.

## Why it matters / what's new (ZH)

它把卸载推理的无线目标直接同错误动作的后果挂钩，并把 LLM 限定在缓慢且经校验的规划角色上。证据来自带学习策略的仿真上行，收益仅相对论文内的基线给出，且为没有硬件或空口链路的短篇快报。

## Images

![RACE average accuracy-latency-energy cost and constraint-outage rate against seven baselines | RACE 与七个基线的平均精度-时延-能耗代价及约束中断率对比](https://arxiv.org/html/2611.14696v1/Fig2.png)
