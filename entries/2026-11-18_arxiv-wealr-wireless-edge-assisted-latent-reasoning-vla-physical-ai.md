---
id: 2026-11-18_arxiv-wealr-wireless-edge-assisted-latent-reasoning-vla-physical-ai
date_published: 2026-11-14
date_found: 2026-11-18
technology: edge-ai
type: academic-paper
title_en: "WEALR: a constrained-RL agent picks local vs. edge execution and the latent-reasoning threshold of a VLA model from the uplink rate (feasibility-weighted success 90%, simulated link)"
title_zh: "WEALR：约束强化学习智能体依据上行速率选择 VLA 模型的本地/边缘执行位置与潜在推理阈值（可行性加权成功率约 90%，仿真链路）"
url: "https://arxiv.org/abs/2611.19131"
source_quality: full
topics: [vla, latent-reasoning, collaborative-inference, constrained-rl, physical-ai, uplink-rate]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration, task-oriented-communication]
novelty_score: 3
---

## Summary (EN)

This paper (University of Ottawa, submitted to IEEE ICC) considers a physical-AI device (PAD) running a vision-language-action (VLA) model with a recurrent latent-reasoning step, served by an indoor base station with a co-located edge server. For each task request an agent chooses where to run inference (onboard or on the edge) and a latent-reasoning convergence threshold, trading task success against latency, PAD energy and edge reasoning cost. The problem is cast as a constrained Markov decision process and solved with a Lagrangian-constrained trust-region method (TRPO-Lag).

Evaluation uses an offline, profile-driven simulator: 2,400 recorded VLA rollouts over four LIBERO task suites, latency and GPU power profiled on an RTX 4090 and scaled to emulate a Jetson Thor, and ray-traced wireless channels from the DeepMIMO I3_2p4 scenario with three line-of-sight and two non-line-of-sight device positions. Link computed over: a simulated indoor cellular base-station link (ray-traced, not over-the-air).

## Summary (ZH)

本文（渥太华大学，投稿 IEEE ICC）考虑一个运行带循环潜在推理步骤的视觉-语言-动作（VLA）模型的物理 AI 设备（PAD），由带同址边缘服务器的室内基站提供服务。对每个任务请求，智能体选择推理位置（本地或边缘）与潜在推理收敛阈值，在任务成功率与时延、PAD 能耗及边缘推理成本之间权衡。问题被表述为约束马尔可夫决策过程，用拉格朗日约束的信赖域方法（TRPO-Lag）求解。

评估采用离线、基于画像的仿真器：4 个 LIBERO 任务套件上的 2,400 条 VLA 回放，时延与 GPU 功耗在 RTX 4090 上画像并换算以模拟 Jetson Thor，无线信道取自 DeepMIMO I3_2p4 场景的射线追踪，含 3 个视距与 2 个非视距设备位置。所经链路：仿真的室内蜂窝基站链路（射线追踪，非空口实测）。

## Key technical points (EN)

- Feasibility-weighted task success: TRPO-Lag about 90%, versus about 85% for PPO-Lag, 73% for CPO and 64% for a task-and-rate-aware heuristic; the abstract's "up to 23%" corresponds to the CPO comparison. Unconstrained PPO reaches only about 4%.
- Most methods reach about 97% raw task success; the difference is whether SLO, energy and edge-cost constraints are respected.
- Channel awareness: TRPO-Lag rarely offloads below roughly 25 Mbps uplink rate and offloads with about 88% probability at high rates; its SLO violation rate is about 2.2% (PPO-Lag about 3%, CPO about 3.4%, PPO/TRPO near 19%).
- Task awareness: long-horizon LIBERO-10 requests use a stricter threshold in about 82% of cases, and Spatial and LIBERO-10 suites are offloaded in 63.0% and 67.9% of requests.

## Key technical points (ZH)

- 可行性加权任务成功率：TRPO-Lag 约 90%，PPO-Lag 约 85%，CPO 约 73%，任务与速率感知启发式约 64%；摘要中的"最高 23%"对应与 CPO 的比较。无约束 PPO 仅约 4%。
- 多数方法的原始任务成功率约 97%；差别在于是否满足 SLO、能耗与边缘成本约束。
- 信道感知：TRPO-Lag 在上行速率低于约 25 Mbps 时很少卸载，高速率时卸载概率约 88%；其 SLO 违反率约 2.2%（PPO-Lag 约 3%，CPO 约 3.4%，PPO/TRPO 接近 19%）。
- 任务感知：长时域的 LIBERO-10 请求约 82% 采用更严格阈值，Spatial 与 LIBERO-10 套件分别有 63.0% 与 67.9% 的请求被卸载。

## Why it matters / what's new (EN)

It makes the uplink rate an explicit input to a VLA model's offload-or-not and reasoning-depth decision, and shows the learned policy stays away from offloading when the link is slow. The evidence is an offline profile-driven simulation with scaled hardware costs and a six-page conference submission, so the numbers are relative to the paper's own baselines.

## Why it matters / what's new (ZH)

它把上行速率明确作为 VLA 模型"是否卸载、推理多深"决策的输入，并表明学得的策略在链路较慢时避免卸载。证据来自带硬件成本换算的离线画像仿真和一篇六页的会议投稿，数字仅相对论文自身的基线。

## Images

![WEALR framework overview | WEALR 框架概览](https://arxiv.org/html/2611.19131v1/Figures/WEALR_Figure.png)
