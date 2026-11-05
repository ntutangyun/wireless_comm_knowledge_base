---
id: 2026-11-05_arxiv-gtac-graph-transformer-actor-critic-mu-mimo-user-grouping
date_published: 2026-11-02
date_found: 2026-11-05
type: academic-paper
technology: cellular
title_en: "GTAC: A Graph-Transformer Actor-Critic for Carrier-Aware MU-MIMO User Grouping"
title_zh: "GTAC：面向载波感知 MU-MIMO 用户分组的图 Transformer Actor-Critic"
url: "https://arxiv.org/abs/2611.03922"
source_quality: full
topics: [MU-MIMO, user-grouping, AI-native-RAN, deep-reinforcement-learning, PPO, graph-transformer, GPU, proportional-fair, cuMAC]
topic_primary: cellular-massive-mimo
topics_secondary: [cellular-ai, open-ran]
novelty_score: 3
---

## Summary (EN)

Yan Huang, Charles Santhosam Lourdu Raja and Rajesh Gadiyar (NVIDIA) propose GTAC, a deep reinforcement learning architecture for massive MU-MIMO user grouping that targets long-term proportional-fair (PF) utility under practical stack constraints. The paper's motivation is the "carrier-aware" coupling in NR scheduling: a single MCS must be applied across all PRBGs and spatial layers carrying a UE's transport block, so a weak PRBG lowers a UE's grant-wide goodput and groups that look good per PRBG may be poor across the carrier. Grouping must also fit a sub-100 microsecond budget inside a 0.5 ms slot (30 kHz subcarrier spacing).

GTAC has a shared graph-transformer encoder with spatial-edge-biased attention that injects inter-UE MU-MIMO compatibility into the attention, a pointer-decoder actor that emits UE selections per PRBG, and a multi-stage transformer critic that models MCS coupling across PRBGs and layers and accounts for available radio resources. Training clones a non-real-time teacher policy, warms up the critic, then runs two-stage PPO: first on a narrow 4-PRBG power-matched carrier, then on the full carrier with a KL policy anchor.

## Summary (ZH)

Yan Huang、Charles Santhosam Lourdu Raja 与 Rajesh Gadiyar（NVIDIA）提出 GTAC，一种面向大规模 MU-MIMO 用户分组的深度强化学习架构，目标是在实际协议栈约束下最大化长期比例公平（PF）效用。其动机是 NR 调度中的"载波感知"耦合：承载某 UE 传输块的所有 PRBG 与空间层必须使用同一个 MCS，因此一个较差的 PRBG 会拉低该 UE 整个授权的吞吐，按单个 PRBG 看起来较优的分组在整个载波上可能并不好。分组还须在 0.5 ms 时隙（30 kHz 子载波间隔）内满足低于 100 微秒的预算。

GTAC 包含：带空间边偏置注意力的共享图 Transformer 编码器（把 UE 间的 MU-MIMO 兼容性注入注意力）、按 PRBG 输出 UE 选择的指针解码器 actor，以及建模跨 PRBG 与层的 MCS 耦合并计入可用无线资源的多阶段 Transformer critic。训练先克隆一个非实时的教师策略，预热 critic，再进行两阶段 PPO：先在 4 个 PRBG、功率匹配的窄载波上训练，再在全载波上加入 KL 策略锚。

## Key technical points (EN)

- Evaluation setup: full 100 MHz carrier with 17 PRBGs; K = 32 UEs in the latency test; metrics are carrier SE, PF utility and 5th-percentile (cell-edge) UE throughput.
- Baselines: the non-real-time teacher reaches 11.31 bit/s/Hz and 3.04 Mbit/s cell-edge; NVIDIA Aerial cuMAC (a GPU semi-orthogonal grouping heuristic) reaches 8.31 bit/s/Hz and 2.67 Mbit/s.
- Results: the cloned policy reaches 11.21 bit/s/Hz (99.1% of teacher SE, 99.6% of teacher PF utility); after two-stage PPO the selected policy reaches 12.62 bit/s/Hz (11.6% above the teacher, 51.9% above cuMAC, 12.6% above the clone) with 104.1% of the teacher PF utility and 3.06 Mbit/s cell-edge throughput. One checkpoint with higher SE (12.74 bit/s/Hz) was excluded because its cell-edge throughput (3.01 Mbit/s) fell below the teacher's.
- Latency: a CUDA implementation (CUDA Graph, three fused kernels, FP16 tensor-core multiplication with FP32 accumulation) on an RTX PRO 4500 Blackwell GPU gives 67.6 microsecond median and 69.6 microsecond p99 encoder-actor inference, under the 100 microsecond target; the CPU actor (52 of the platform's 72 Neoverse-V2 cores) takes 4.2 ms median, and the teacher takes 10.2 ms median on the GPU and 46.1 ms on CPU.
- Precoding assumption in the model: eigen-regularized zero-forcing with SRS-based channel estimates under reciprocity and imperfect CSI.

## Key technical points (ZH)

- 评估设置：100 MHz 全载波，17 个 PRBG；时延测试中 K = 32 个 UE；指标为载波频谱效率、PF 效用和第 5 百分位（小区边缘）UE 吞吐。
- 基线：非实时教师策略为 11.31 bit/s/Hz、边缘吞吐 3.04 Mbit/s；NVIDIA Aerial cuMAC（基于 GPU 的半正交分组启发式）为 8.31 bit/s/Hz、2.67 Mbit/s。
- 结果：克隆得到的策略达到 11.21 bit/s/Hz（教师 SE 的 99.1%、PF 效用的 99.6%）；两阶段 PPO 之后入选策略达到 12.62 bit/s/Hz，比教师高 11.6%，比 cuMAC 高 51.9%，比克隆策略高 12.6%，PF 效用为教师的 104.1%，边缘吞吐 3.06 Mbit/s。一个 SE 更高（12.74 bit/s/Hz）的检查点因边缘吞吐（3.01 Mbit/s）低于教师而被排除。
- 时延：在 RTX PRO 4500 Blackwell GPU 上的 CUDA 实现（CUDA Graph、三个融合核、FP16 张量核乘法加 FP32 累加）编码器-actor 推理中位 67.6 微秒、p99 为 69.6 微秒，低于 100 微秒目标；CPU actor（占平台 72 个 Neoverse-V2 核中的 52 个）中位 4.2 ms；教师策略在 GPU 上中位 10.2 ms，在 CPU 上 46.1 ms。
- 模型中的预编码假设：基于 SRS 信道估计（利用互易性、含非理想 CSI）的特征值正则化迫零（eigen-RZF）。

## Why it matters / what's new (EN)

The paper presents a learned MU-MIMO grouping policy that models the carrier-wide common-MCS coupling and meets a per-slot GPU latency target, framed by the authors as motivated by AI-native RAN efforts (AI-RAN Alliance, SoftBank AITRAS, NVIDIA Aerial). Caveats: results come from simulation on one carrier configuration with a single cell, the paper is marked as submitted to IEEE ICC 2027, the authors are from the GPU vendor whose cuMAC is the main real-time baseline, and the best policy is selected among checkpoints using the teacher's PF and cell-edge values as acceptance criteria.

## Why it matters / what's new (ZH)

论文给出了一种学习式 MU-MIMO 分组策略：它建模了全载波共用 MCS 的耦合，并满足单时隙 GPU 时延目标；作者将其动机归于 AI 原生 RAN 相关工作（AI-RAN Alliance、SoftBank AITRAS、NVIDIA Aerial）。需要注意：结果来自单小区、单一载波配置的仿真；论文标注为投稿 IEEE ICC 2027；作者来自 cuMAC 所属的 GPU 厂商，而 cuMAC 正是主要的实时基线；最优策略是以教师的 PF 与边缘吞吐为验收条件从多个检查点中挑选的。

## Images

None.
