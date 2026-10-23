---
id: 2026-10-23_arxiv-rrm-gpt-autoregressive-foundation-model-nr-scheduling-grants
date_published: 2026-10-03
date_found: 2026-10-23
type: academic-paper
technology: cellular
title_en: "RRM-GPT: A Framework and Vision for Radio Resource Management Foundation Models"
title_zh: "RRM-GPT：无线资源管理基础模型的框架与愿景"
url: "https://arxiv.org/abs/2610.04296"
source_quality: full
topics: [RRM, foundation-model, autoregressive, transformer, scheduling, scheduling-grant, behavioral-cloning, reinforcement-learning, 5G-NR, pretraining]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
The paper (8 pages; authors from the University of Calgary and Ericsson Canada) proposes RRM-GPT, an autoregressive framework for radio resource management (RRM) foundation models. RRM decisions are treated as sequences of fields defined by the standard (for a scheduling grant: user, timing, link adaptation, resource allocation, control signalling) and generated one field at a time, as a language model generates text. An encoder maps heterogeneous network observations into a common token representation and a decoder emits the decision conditioned on the network state and the fields already committed.

The paper's structure: how a scheduling grant maps onto a token sequence (including a table comparing text tokens with grant, muting and handover fields); the encoder and decoder with constraint masking of infeasible field values; pretraining on unannotated network logs; post-training by behavioural cloning or reinforcement learning; two reuse scopes (function-specific model across deployments, and a shared model across RRM functions such as scheduling, handover and load management); and a 5G NR scheduling case study.

## Summary (ZH)
该论文（8 页；作者来自卡尔加里大学与爱立信加拿大）提出 RRM-GPT，一种面向无线资源管理（RRM）基础模型的自回归框架。RRM 决策被视为由标准定义的字段序列（以调度授权为例：用户、定时、链路自适应、资源分配、控制信令），像语言模型生成文本那样逐字段生成。编码器把异构的网络观测映射为统一的 token 表示，解码器在网络状态与已生成字段的条件下输出决策。

论文结构：调度授权如何映射为 token 序列（含一张对比文本 token 与授权、静默、切换字段的表）；带不可行字段值约束掩码的编码器与解码器；基于无标注网络日志的预训练；通过行为克隆或强化学习的后训练；两种复用范围（跨部署的单功能模型，以及跨调度、切换、负载管理等 RRM 功能共享的模型）；以及一个 5G NR 调度案例研究。

## Key technical points (EN)
- Grant as sequence: the generated fields are, in order, selected user, data-slot offset, MCS, PRB count, starting PRB, control-channel aggregation level and starting CCE, followed by an end-of-sequence token that closes the slot decision. Infeasible values are removed before each choice, with constraints updated after each generated field.
- Case-study data: logs from a system-level 5G NR simulator with a reference scheduler; urban macrocell at 3.5 GHz, 40 MHz, 106 PRBs, numerology 1, TDD pattern of three DL slots then one UL slot, users requesting back-to-back 100 KB FTP files. The training set has about 6.5 million grants (runs up to 60 s; 5, 10 or 20 active users at 50 km/h in a 1 km-radius cell). Evaluation uses 637,000 held-out grants of the same scenario plus 158,000 grants from a separate static-user scenario (167 m radius) excluded from training.
- Model: encoder and decoder of two Transformer layers each, embedding dimension 256, four heads, about 4.3 million parameters, trained for 50 epochs with AdamW and batch size 128.
- Results under autoregressive rollout (mobile test set): grant-issued accuracy 93% DL and 83% UL, with timing and aggregation-level accuracy equal to those figures; initial-transmission MCS mean absolute error 1.0 (DL) and 1.2 (UL) indices. Under teacher forcing all accuracy-scored fields exceed 95% and UL starting-PRB MAE falls from 2.8 to 0.1, which the authors read as error propagation explaining much of the rollout mismatch.
- Generalisation: a separate figure compares the mobile test set with the unseen static-user scenario; the paper states that the model transfers learned behaviour to the unseen scenario without adaptation (static-test grant-issued accuracy about 98% DL and 93% UL in the figure).
- Post-training options discussed but not evaluated in the case study: behavioural cloning of a reference controller, reinforcement learning with operator-defined rewards (throughput, latency, fairness, energy), and multi-objective conditioning.

## Key technical points (ZH)
- 授权即序列：生成字段依次为所选用户、数据时隙偏移、MCS、PRB 数、起始 PRB、控制信道聚合等级和起始 CCE，最后以序列结束 token 结束该时隙的决策。每次选择前先剔除不可行取值，并在每生成一个字段后更新约束。
- 案例研究数据：来自带参考调度器的系统级 5G NR 仿真器的日志；城区宏小区，3.5 GHz、40 MHz、106 个 PRB、numerology 1，TDD 模式为 3 个下行时隙后接 1 个上行时隙，用户连续请求 100 KB 的 FTP 文件。训练集约 650 万条授权（运行时长至多 60 s；半径 1 km 小区内 5、10 或 20 个以 50 km/h 移动的活跃用户）。评估使用同一场景留出的 63.7 万条授权，以及完全不在训练中的另一静止用户场景（半径 167 m）的 15.8 万条授权。
- 模型：编码器与解码器各 2 层 Transformer，嵌入维度 256、4 个注意力头，约 430 万参数，用 AdamW、批大小 128 训练 50 个 epoch。
- 自回归展开下的结果（移动测试集）：授权发出准确率下行 93%、上行 83%，定时与聚合等级的准确率与之相同；初传 MCS 的平均绝对误差为 1.0（下行）和 1.2（上行）个索引。在教师强制下，所有计准确率的字段均超过 95%，上行起始 PRB 的 MAE 由 2.8 降到 0.1，作者据此认为误差传播是展开时失配的主要来源。
- 泛化：另一幅图对比了移动测试集与未见过的静止用户场景；论文称模型无需自适应即可把所学行为迁移到未见场景（图中静止测试集授权发出准确率约为下行 98%、上行 93%）。
- 讨论但案例研究中未评估的后训练选项：对参考控制器的行为克隆、以运营商自定义奖励（吞吐、时延、公平性、能效）进行的强化学习，以及多目标条件化。

## Why it matters / what's new (EN)
The paper is a framework and vision piece with a single simulator-based case study, not a deployment result; the reference scheduler and logs are synthetic and the cross-function (scheduling plus handover plus load management) sharing is described but not demonstrated. Its contribution to the cellular-ai bin is a concrete token vocabulary for NR scheduling grants and an accuracy breakdown showing which grant fields are hard to reproduce autoregressively (grant issuance, starting PRB), alongside a path from log pretraining to operator-specific objectives.

## Why it matters / what's new (ZH)
该论文是框架与愿景性文章，只有一个基于仿真器的案例研究，并非部署结果；参考调度器与日志均为合成数据，跨功能（调度、切换、负载管理）共享只是描述而未被演示。它对蜂窝 AI 主题的贡献在于：给出了 NR 调度授权的具体 token 词表，以及说明哪些授权字段难以自回归复现（授权发出、起始 PRB）的准确率分解，并描述了从日志预训练到面向运营商目标的后训练路径。

## Images

None.
