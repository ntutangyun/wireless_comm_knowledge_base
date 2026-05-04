---
id: 2026-05-04_arxiv-policy-driven-drl-nru-wifi-coexistence
date_published: 2026-05-01
date_found: 2026-05-04
type: academic-paper
title_en: "A Policy-Driven DRL Framework for System-Level Tradeoff Control in NR-U/Wi-Fi Coexistence"
title_zh: "面向 NR-U / Wi-Fi 共存的策略驱动 DRL 框架：系统级折衷控制"
url: "https://arxiv.org/abs/2605.00457"
source_quality: full
topics: [802.11, 6GHz, agentic-AI, MAC-layer, scheduling]
novelty_score: 3
---

## Summary (EN)

Chou, Yu, Chen, and Wang (Academia Sinica CITI + National Taiwan Normal University, arxiv 2605.00457, submitted May 1 2026) introduce a deep-reinforcement-learning controller for NR-U/Wi-Fi coexistence in unlicensed bands that — unlike fixed-protocol Listen-Before-Talk (LBT) — treats the **TXOP duration as a continuous control variable** and learns adaptive policies via a deep Q-network. The framework's core contribution is a **policy layer expressed entirely through reward design**: by changing the reward function shape, the operator can pick the operating point on a fairness↔throughput↔QoS surface without changing the model architecture or the MAC parameters.

Three reward shapes give three operating-point families: **Q1 (Absolute Fairness)** — strict threshold penalties enforcing Jain-index ≥ 0.9 between Wi-Fi and NR-U; **Q2 (Moderate Fairness)** — relaxed bounds, recovering 68.22% throughput vs Q1; **Q2-u (Utility-Based Fairness)** — concave utility functions for diminishing-return QoS, delivering 177.6% utility improvement vs Q2. Across a Wi-Fi CSMA/CA Markov-chain coexisting with an NR-U LBT channel-access model, the DQN converges 30.7% faster than tabular Q-learning, narrows the Wi-Fi throughput gap by ~72% under dense scenarios (N=10 stations), and improves fairness 83.5% over a baseline LBT scheduler.

Conceptually, the paper joins a small but growing line of work that **separates the policy declaration from the optimisation engine** — operators specify what they want (a reward shape), and the learner figures out the parameter trajectory. This is in the same spirit as `arxiv-llm-6ghz-wifi-nru-coexistence` (where an LLM proposes alpha-fairness parameters that a deterministic optimiser executes) but with a fully-DRL, no-LLM stack and a tighter reward-design surface.

## Summary (ZH)

Chou、Yu、Chen、Wang（中研院 CITI + 国立台湾师范大学，arxiv 2605.00457，2026 年 5 月 1 日提交）提出了一个面向非授权频段 NR-U / Wi-Fi 共存的深度强化学习控制器：与固定 LBT 协议参数不同，它把 **TXOP 时长当作连续控制变量**，通过深度 Q 网络学习自适应策略。框架核心贡献是 **完全用奖励设计表达"策略层"**——只需改变奖励函数形状，运营商即可在公平性 ↔ 吞吐 ↔ QoS 折衷面上选择运行点，而不必修改模型架构或 MAC 参数。

三种奖励形式给出三类运行点：**Q1（绝对公平）**——严格阈值惩罚，强制 Wi-Fi 与 NR-U 的 Jain index ≥ 0.9；**Q2（适度公平）**——放宽约束，相对 Q1 回收 68.22% 吞吐；**Q2-u（基于效用的公平）**——凹效用函数描述边际递减 QoS，相对 Q2 带来 177.6% 效用提升。在 Wi-Fi CSMA/CA Markov 链与 NR-U LBT 信道接入模型共存的实验下，DQN 比表格式 Q-learning 收敛快 30.7%，N=10 站密集场景下 Wi-Fi 吞吐差距收窄约 72%，相对基线 LBT 调度器公平性改善 83.5%。

概念上，该工作加入了 **策略声明与优化引擎相分离** 的研究脉络——运营商声明"想要什么"（奖励形状），学习器负责参数轨迹。其精神与 `arxiv-llm-6ghz-wifi-nru-coexistence`（LLM 提出 alpha-fairness 参数，由确定性优化器执行）一致，但栈全为 DRL（无 LLM），且奖励设计接口更紧凑。

## Key technical points (EN)

- **Control variable:** TXOP duration treated as continuous adjustable; not a binary access decision.
- **Policy via reward design:** three reward shapes (threshold-based Q1, relaxed Q2, utility-based Q2-u) parameterise the operator's choice on the fairness/throughput/QoS surface.
- **Threshold-based reward (Q1, Q2):** penalises throughput-ratio deviations |s_t − 1| > D1, allows controlled imbalance for D2 < deviation ≤ D1, rewards near-balance.
- **Utility-based reward (Q2-u):** concave utility models diminishing-return user QoS — captures the "10% more throughput on top of 90% is worth less than 10% more on top of 50%" intuition.
- **Headline numbers:** Jain ≥ 0.9 (Q1, up to 0.999 at Priority 4); throughput +68.22% Q2 vs Q1; utility +177.6% Q2-u vs Q2; fairness +83.5% vs baseline LBT; convergence 30.7% faster vs tabular Q-learning; Wi-Fi gap −72% at N=10.
- **MDP formulation:** Wi-Fi CSMA/CA + NR-U LBT modelled as joint Markov environment; DQN agent observes throughput / fairness state, acts on TXOP.

## Key technical points (ZH)

- **控制变量：** 把 TXOP 时长视为连续可调，而非二元接入决策。
- **奖励设计即策略：** 三种奖励形状（阈值型 Q1、放宽型 Q2、效用型 Q2-u）参数化运营商在公平/吞吐/QoS 折衷面上的选择。
- **阈值型奖励（Q1、Q2）：** 对吞吐比偏差 |s_t − 1| > D1 重罚，对 D2 < 偏差 ≤ D1 容忍可控失衡，对接近平衡给奖。
- **效用型奖励（Q2-u）：** 凹函数刻画 QoS 边际递减——捕获"在 90% 之上再涨 10% 远不如在 50% 之上再涨 10% 有价值"的直觉。
- **关键数值：** Jain ≥ 0.9（Q1 在 Priority 4 时高达 0.999）；Q2 vs Q1 吞吐 +68.22%；Q2-u vs Q2 效用 +177.6%；相对基线 LBT 公平性 +83.5%；DQN 收敛比表格 Q-learning 快 30.7%；N=10 时 Wi-Fi 缺口降低 72%。
- **MDP 建模：** Wi-Fi CSMA/CA 与 NR-U LBT 联合 Markov 环境；DQN 智能体观察吞吐 / 公平状态，对 TXOP 施加动作。

## Why it matters / what's new (EN)

The KB had two NR-U / Wi-Fi coexistence entries: `arxiv-bf-ax-coexistence-ns3` (deterministic ns-3 measurement of 802.11bf-on-ax overhead) and `arxiv-llm-6ghz-wifi-nru-coexistence` (LLM proposes alpha-fairness, optimiser executes). 2605.00457 is the **pure-DRL, reward-shaping-as-policy** point in that design space. Compared to the LLM orchestrator, this is cheaper at runtime (no per-decision LLM call), and the policy surface is exposed via three small reward parameters rather than a free-form prompt. Compared to fixed LBT, it shows that exposing TXOP as a learner action and letting the reward shape the operating point can simultaneously improve fairness *and* throughput against the LBT baseline — they aren't a strict tradeoff once the access duration becomes elastic. The result strengthens the broader thesis (already visible in `arxiv-llm-6ghz-wifi-nru-coexistence` and `arxiv-mab-llm-mlo-channel-allocation`) that next-gen unlicensed-band coexistence is moving from fixed-protocol arbitration to learner-controlled MAC parameters with operator-declared policy.

## Why it matters / what's new (ZH)

KB 已有两条 NR-U / Wi-Fi 共存条目：`arxiv-bf-ax-coexistence-ns3`（ns-3 测量 802.11bf-on-ax 开销）和 `arxiv-llm-6ghz-wifi-nru-coexistence`（LLM 提议 alpha-fairness，优化器执行）。2605.00457 是设计空间中"**纯 DRL + 奖励塑形即策略**"的另一个点。相比 LLM 编排，该方案运行时更便宜（每次决策无须 LLM 调用），策略面通过三个小的奖励参数暴露，而不是一段自由形式的 prompt。相比固定 LBT，它表明将 TXOP 作为学习器动作并让奖励决定运行点，可以同时改善公平性*和*吞吐相对 LBT 基线的水平——一旦接入时长变得有弹性，二者就不再是严格折衷。该结果强化了 KB 在 `arxiv-llm-6ghz-wifi-nru-coexistence`、`arxiv-mab-llm-mlo-channel-allocation` 中已经显现的更大主题：下一代非授权频段共存正从固定协议仲裁，迁移到由运营商声明策略 + 学习器控制 MAC 参数的范式。

## Images

![DRL control architecture for NR-U/Wi-Fi TXOP scheduling | NR-U / Wi-Fi 共存下的 DRL TXOP 调度控制架构](https://arxiv.org/html/2605.00457v1/x3.png)
![Wi-Fi CSMA/CA Markov chain model used in coexistence study | 共存研究中的 Wi-Fi CSMA/CA Markov 链模型](https://arxiv.org/html/2605.00457v1/x1.png)
