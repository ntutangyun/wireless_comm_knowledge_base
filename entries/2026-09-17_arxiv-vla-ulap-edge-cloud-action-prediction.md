---
id: 2026-09-17_arxiv-vla-ulap-edge-cloud-action-prediction
date_published: 2026-09-16
date_found: 2026-09-17
technology: edge-ai
type: academic-paper
title_en: "VLA-ULAP: Interleaving Cloud VLA Calls with Ultra-Lightweight Local Action Prediction at the Edge"
title_zh: "VLA-ULAP：在边缘交替使用云端 VLA 调用与超轻量本地动作预测"
url: "https://arxiv.org/abs/2609.18663"
source_quality: full
topics: [VLA, edge-cloud-split, robotics, speculative-execution]
topic_primary: compute-offloading
topics_secondary: [on-device-inference]
novelty_score: 4
---

## Summary (EN)

The paper (Deyu Cao, Ryuji Oi, Kosuke Matsushima, Yuxuan Pan, Ziheng Wang, Daichi Fujiki, Atsutake Kosuge) targets robots that run large vision-language-action (VLA) policies remotely because the robot's own battery cannot sustain continuous GPU inference — the authors note a 58 Wh battery would supply only about 32 minutes of GPU energy at sustained inference draw, on top of host and motor power. Remote inference solves the power problem but adds communication delay and jitter that hurts latency-sensitive tasks. VLA-ULAP's answer is not to replace the cloud VLA but to interleave it with a very small local predictor: an Ultra-Lightweight Local Action Predictor (ULAP) of roughly 7.4M parameters — about 1/400 the size of the GR00T N1.7 baseline it is evaluated against (3B parameters) — built from a frozen Theia-Tiny visual encoder (5.52M parameters), a compact Transformer (1.422M), a state MLP (350.8K) and an action head (89.4K). ULAP takes the current camera view, robot state and the executed-action history and predicts the next action chunk directly in a single forward pass, without VLA hidden states or online verification, so it can run independently on the robot whenever the scheduler decides not to call the remote VLA. Only ULAP is trained (via Smooth-L1 action-level distillation on successful base-policy trajectories); the VLA and vision encoder stay frozen. Two scheduling variants decide when to call the cloud VLA versus predict locally: a fixed schedule that spaces local decisions evenly, and a risk-aware schedule that prioritizes VLA calls when the current input is far from the training distribution.

Evaluation spans LIBERO (40 manipulation tasks across four suites, tested with GR00T N1.7 and VLA-JEPA base policies, 2,000 episodes per condition), RoboCasa (24 kitchen tasks with a Cosmos-Policy base, including an object-generalization train/eval split, 1,200 episodes), a physical SO-101 arm on a LeKiwi mobile manipulator doing pick-and-place (ping-pong ball into bowl, glue stick into cup; 75 trials per task, 50 in-distribution/25 out-of-distribution), and LIBERO-Safety, two latency-sensitive dynamic obstacle-avoidance tasks. Remote inference ran on an RTX A6000 (300 W max; the physical ping-pong condition ran GR00T on an A100), local inference on a Jetson Orin Nano (15 W DVFS mode). Headline results: on LIBERO with GR00T N1.7, removing 50.7% of VLA calls still yields 88.50% success (95.0% of baseline); pushed to 91.8% call reduction, success falls to 78.20%. On LIBERO with VLA-JEPA, removing 76.7% of calls yields 94.65% success (95.8% of baseline) while using 49.2% less inference time and 51.0% less GPU energy than an ACT baseline at comparable success, and 77.1% less time / 79.9% less energy than SP-VLA at its 87.25% success point. On RoboCasa with Cosmos-Policy, removing 48.8% of calls retains 97.5% of baseline success. On the physical robot, VLA-ULAP reduced VLA calls by 52.3% (ping-pong) and 62.8% (glue-stick) while retaining 95.2% and 100.0% of baseline success respectively on the full 75-trial sets, and the paper reports per-inference costs of 19.9 ms / 0.183 J for ULAP on the Jetson Orin Nano versus 284.3 ms / 50.55 J for GR00T N1.7 on the RTX A6000 (93.0% less time, 99.6% less energy per call). On the two LIBERO-Safety dynamic tasks, VLA-ULAP scheduling improved success over a π0.5 baseline by +11.0 and +15.5 percentage points (88.5% and 65.5% success) while still cutting VLA calls by roughly half.

## Summary (ZH)

本文（Deyu Cao、Ryuji Oi、Kosuke Matsushima、Yuxuan Pan、Ziheng Wang、Daichi Fujiki、Atsutake Kosuge）针对的场景是：机器人依赖远程运行大型视觉-语言-动作（VLA）策略，因为机器人自身电池无法支撑持续的 GPU 推理——作者指出，一块 58 Wh 电池在持续推理功耗下仅能支撑约 32 分钟的 GPU 能耗，还不算主机和电机的功耗。远程推理解决了功耗问题，却带来影响延迟敏感任务的通信时延与抖动。VLA-ULAP 的做法不是取代云端 VLA，而是让其与一个极小的本地预测器交替工作：超轻量本地动作预测器（ULAP）参数量约 740 万，约为其对比基线 GR00T N1.7（30 亿参数）的 1/400，由冻结的 Theia-Tiny 视觉编码器（552 万参数）、紧凑 Transformer（142.2 万）、状态 MLP（35.08 万）与动作头（8.94 万）组成。ULAP 接收当前摄像头画面、机器人状态与已执行动作历史，在单次前向传播中直接预测下一个动作片段，不依赖 VLA 隐藏状态或在线验证，因此在调度器决定不调用远程 VLA 时可独立在机器人本地运行。训练仅针对 ULAP（在成功的基础策略轨迹上通过 Smooth-L1 动作级蒸馏进行），VLA 与视觉编码器保持冻结。两种调度方案决定何时调用云端 VLA、何时本地预测：固定调度将本地决策均匀分布；风险感知调度则在当前输入偏离训练分布较远时优先调用 VLA。

评测覆盖 LIBERO（四个套件共 40 项操作任务，分别以 GR00T N1.7 与 VLA-JEPA 为基础策略，每种条件 2,000 回合）、RoboCasa（24 项厨房任务，以 Cosmos-Policy 为基础，含物体泛化训练/评测划分，共 1,200 回合）、搭载于 LeKiwi 移动操作平台上的真实 SO-101 机械臂抓取放置任务（乒乓球入碗、胶棒入杯；每任务 75 次试验，其中 50 次为分布内、25 次为分布外），以及 LIBERO-Safety 中两项延迟敏感的动态避障任务。远程推理运行于 RTX A6000（最大 300 W；真实机器人乒乓球任务中 GR00T 运行于 A100），本地推理运行于 Jetson Orin Nano（15 W DVFS 模式）。核心结果：在使用 GR00T N1.7 的 LIBERO 上，移除 50.7% 的 VLA 调用仍能获得 88.50% 的成功率（为基线的 95.0%）；将调用削减推高到 91.8% 时，成功率降至 78.20%。在使用 VLA-JEPA 的 LIBERO 上，移除 76.7% 的调用可获得 94.65% 的成功率（基线的 95.8%），在相近成功率下比 ACT 基线少用 49.2% 的推理时间和 51.0% 的 GPU 能耗，在 SP-VLA 87.25% 成功率的对比点上则少用 77.1% 的时间与 79.9% 的能耗。在使用 Cosmos-Policy 的 RoboCasa 上，移除 48.8% 的调用可保留基线成功率的 97.5%。在真实机器人上，VLA-ULAP 分别将乒乓球任务和胶棒任务的 VLA 调用减少 52.3% 与 62.8%，同时在全部 75 次试验中分别保留基线成功率的 95.2% 与 100.0%；论文报告 ULAP 在 Jetson Orin Nano 上单次推理为 19.9 毫秒 / 0.183 焦耳，而 GR00T N1.7 在 RTX A6000 上为 284.3 毫秒 / 50.55 焦耳（单次调用节省 93.0% 的时间、99.6% 的能耗）。在 LIBERO-Safety 的两项动态任务中，VLA-ULAP 调度相较 π0.5 基线成功率分别提升 11.0 与 15.5 个百分点（达到 88.5% 与 65.5%），同时仍将 VLA 调用量削减约一半。

## Key technical points (EN)

- **Design**: ULAP is ~7.4M parameters (1/400 of the GR00T N1.7 baseline) — frozen Theia-Tiny encoder (5.52M) + compact Transformer (1.422M) + state MLP (350.8K) + action head (89.4K); predicts the next action chunk in one forward pass from current camera view, robot state and executed-action history, with no VLA hidden-state dependency or online verification.
- **Training**: only ULAP trained, via Smooth-L1 action-level distillation on successful base-policy trajectories; the VLA and vision encoder remain frozen throughout.
- **Scheduling**: fixed (evenly spaced local decisions) vs. risk-aware (prioritizes VLA calls when the input is far from the training distribution) variants decide the local/remote split.
- **Hardware**: remote VLA on an RTX A6000 (300 W max, 48GB GDDR6); local ULAP on a Jetson Orin Nano (15 W DVFS mode, 8GB LPDDR5); physical robot is an SO-101 arm on a LeKiwi mobile manipulator.
- **Headline numbers**: up to 91.8% VLA-call reduction with 78.20% success (GR00T N1.7/LIBERO); 76.7% call reduction retaining 95.8% of baseline success with 49.2-79.1% less inference time and 51.0-79.9% less GPU energy vs. two baselines (VLA-JEPA/LIBERO); 52.3-62.8% call reduction on a physical robot retaining 95.2-100.0% of baseline success; per-call cost of 19.9 ms/0.183 J locally vs. 284.3 ms/50.55 J remotely.

## Key technical points (ZH)

- **设计**：ULAP 参数量约 740 万（为 GR00T N1.7 基线的 1/400）——冻结的 Theia-Tiny 编码器（552 万）+ 紧凑 Transformer（142.2 万）+ 状态 MLP（35.08 万）+ 动作头（8.94 万）；从当前摄像头画面、机器人状态与已执行动作历史出发，单次前向传播预测下一动作片段，不依赖 VLA 隐藏状态或在线验证。
- **训练**：仅训练 ULAP，在成功的基础策略轨迹上通过 Smooth-L1 动作级蒸馏完成；VLA 与视觉编码器全程冻结。
- **调度**：固定调度（本地决策均匀分布）与风险感知调度（输入偏离训练分布时优先调用 VLA）两种方案决定本地/远程的划分比例。
- **硬件**：远程 VLA 运行于 RTX A6000（最大 300 W，48GB GDDR6）；本地 ULAP 运行于 Jetson Orin Nano（15 W DVFS 模式，8GB LPDDR5）；真实机器人为搭载于 LeKiwi 移动平台上的 SO-101 机械臂。
- **核心数字**：VLA 调用削减 91.8% 时成功率为 78.20%（GR00T N1.7/LIBERO）；削减 76.7% 时保留基线 95.8% 的成功率，相较两个基线分别节省 49.2%-79.1% 的推理时间与 51.0%-79.9% 的 GPU 能耗（VLA-JEPA/LIBERO）；真实机器人上削减 52.3%-62.8% 的调用同时保留基线 95.2%-100.0% 的成功率；单次调用成本本地为 19.9 毫秒/0.183 焦耳，远程为 284.3 毫秒/50.55 焦耳。

## Why it matters / what's new (EN)

The KB's edge-cloud split literature to date has largely been framed as split/collaborative inference of a single model (partitioning layers, early exits, speculative decoding) or as routing whole requests between a small and large model. VLA-ULAP instead keeps the large cloud VLA as the primary policy and adds an independently-trained, drastically smaller local model that substitutes for it on a schedulable fraction of steps — the contribution is the interleaving/scheduling mechanism (fixed vs. risk-aware) and the demonstration, on a real physical robot rather than simulation alone, that this substitution can cut VLA calls by roughly half to three-quarters while retaining most of the baseline task success and cutting per-step energy by over 90%.

## Why it matters / what's new (ZH)

知识库此前关于边缘-云拆分的条目大多是围绕单一模型的拆分/协同推理（层划分、提前退出、投机解码），或是在小模型与大模型之间路由整个请求。VLA-ULAP 则不同：它保留云端大型 VLA 作为主策略，另外训练一个体量小得多、独立训练的本地模型，在可调度的部分步骤上替代云端调用——其贡献在于交替/调度机制本身（固定式 vs. 风险感知式），并且在真实物理机器人（而非仅仅仿真）上证明了这种替代可将 VLA 调用削减约一半到四分之三，同时保留大部分基线任务成功率，并将单步能耗降低超过 90%。

## Images

![ULAP edge deployment overview | ULAP 边缘部署概览](https://arxiv.org/html/2609.18663v1/figures/assets/ulap_deployment_generated_2026-09-15/edge.png)
