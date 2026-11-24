---
id: 2026-11-24_arxiv-risk-aware-safe-hierarchical-learning-embb-urllc-resource-allocation-oran
date_published: 2026-11-18
date_found: 2026-11-24
type: academic-paper
technology: cellular
title_en: "Risk-Aware Safe Hierarchical Learning for Robust eMBB-URLLC Resource Allocation in O-RAN"
title_zh: "面向 O-RAN 中稳健 eMBB-URLLC 资源分配的风险感知安全分层学习"
url: "https://arxiv.org/abs/2611.24497"
source_quality: full
topics: [O-RAN, eMBB-URLLC, resource-allocation, hierarchical-reinforcement-learning, CVaR, conformal-prediction, RIC, PRB-allocation]
topic_primary: open-ran
topics_secondary: [network-slicing]
novelty_score: 3
---

## Summary (EN)

Hussain, Gurer, Kalem and Coleri propose a risk-aware, safe hierarchical learning framework for joint eMBB and URLLC resource allocation in Open RAN. A non-real-time policy sets slice-level resource-block and power budgets, near-real-time policies allocate resource blocks and transmit power among users, and an execution-time safety layer checks each URLLC user's service and corrects allocations through bounded resource transfers when feasible. The test checks use channel-prediction margins and conformal upper bounds on traffic demand, and the objectives use service-specific conditional value-at-risk (CVaR). The manuscript states that it was submitted to IEEE Transactions on Communications.

## Summary (ZH)

Hussain、Gurer、Kalem 与 Coleri 提出一种面向 Open RAN 中 eMBB 与 URLLC 联合资源分配的风险感知安全分层学习框架。非实时策略设定切片级的资源块和功率预算，近实时策略在用户间分配资源块和发射功率，执行时安全层检查每个 URLLC 用户的服务情况，并在可行时通过有界的资源转移修正分配。检验使用信道预测余量和流量需求的共形上界，目标函数使用针对各类业务的条件风险价值（CVaR）。稿件标明已提交至 IEEE Transactions on Communications。

## Key technical points (EN)

- Control structure: three levels follow the O-RAN split. The non-RT policy (1 s orchestration period) determines slice PRB and power budgets; near-RT policies (10 ms assignment interval) assign PRBs and power to users; the safety layer runs at execution. Training uses PPO in four alternating phases (assignment, budget, assignment, budget).
- Safety test: a deterministic per-user URLLC service test, derived with protected rates that account for CSI prediction errors and conformal upper bounds on traffic demand, is meant to satisfy the probabilistic URLLC requirement; the safety layer corrects allocations by bounded resource transfers when feasible. Service-specific CVaR objectives prioritize users with the highest URLLC deadline-miss ratios and lowest eMBB rates.
- Setup: a single cell with 6 URLLC and 8 eMBB users, 10 MHz carrier, 360 kHz PRBs, users initially 50-300 m from the base station with Gauss-Markov mobility, 256-bit URLLC packets with a 5 ms deadline, LSTM predictors for channel gain and next-slot arrivals. The authors state the miss-ratio target is a scheduling-level target, not a radio-link reliability target, since the model has no decoding errors.
- Baselines: Joint DRL, SafeSlice, two-timescale slicing and two fixed schedulers (fixed PF and fixed floor-first PF), all trained or run in the same single-cell setup; the paper notes adaptations made to the baselines (for example, fixed PF replacing the original schedulers).
- Nominal-load results: the framework is the only evaluated method that meets, on average, both the 5% URLLC deadline-miss target and the 2 Mbps worst-user eMBB rate criterion. Against the fixed schedulers it reduces the mean miss ratio by 64% (1.35% vs. 3.73%) and raises aggregate throughput by up to 16% (26.16 vs. 22.56 Mbps); only two-timescale slicing has higher aggregate throughput (29.83 Mbps), at a miss ratio of 7.03%. It meets the deadline-miss target in 95% of test runs and the worst-user rate criterion in 86.25%, versus 82.5% and at most 52.5% for the fixed schedulers.
- Sensitivity: at the nominal 24 PRBs the joint-satisfaction advantage is 84% versus 42.5% (fixed floor-first PF) and 36.75% (two-timescale slicing), narrowing to 99% versus 95% and 96.25% at 51 PRBs; at 11 PRBs no method meets both criteria; at light user load the fixed schedulers reach higher joint satisfaction (85% vs. 81%).
- Evaluation protocol: 10 training seeds and 40 common test environments, with ablations (removing CVaR terms, the safety layer, the demand or CSI margins, or the hierarchy) reported in a separate table.

## Key technical points (ZH)

- 控制结构：三层对应 O-RAN 的划分。非实时策略（1 s 编排周期）确定切片的 PRB 与功率预算；近实时策略（10 ms 分配间隔）为用户分配 PRB 和功率；安全层在执行时运行。训练采用 PPO，分为四个交替阶段（分配、预算、分配、预算）。
- 安全检验：每用户的确定性 URLLC 服务检验由考虑 CSI 预测误差的受保护速率和流量需求的共形上界推导得出，用以满足概率性的 URLLC 要求；安全层在可行时通过有界资源转移修正分配。针对各类业务的 CVaR 目标优先关照 URLLC 时限未达成比例最高和 eMBB 速率最低的用户。
- 设置：单小区，6 个 URLLC 用户和 8 个 eMBB 用户，10 MHz 载波，PRB 为 360 kHz，用户初始距基站 50-300 m 并采用 Gauss-Markov 移动模型，URLLC 包为 256 比特、时限 5 ms，使用 LSTM 预测信道增益和下一时隙到达量。作者说明，由于模型没有译码错误，未达成比例目标是调度层面的目标，而非无线链路可靠性目标。
- 基线：Joint DRL、SafeSlice、双时间尺度切片以及两种固定调度器（固定 PF 和固定 floor-first PF），均在相同的单小区设置下训练或运行；论文说明了对基线所做的适配（例如以固定 PF 取代原调度器）。
- 额定负载结果：该框架是被评估方法中唯一平均同时满足 5% URLLC 时限未达成目标和 2 Mbps 最差用户 eMBB 速率判据的方法。相比固定调度器，其平均未达成比例降低 64%（1.35% 对 3.73%），聚合吞吐量最多提高 16%（26.16 对 22.56 Mbps）；只有双时间尺度切片的聚合吞吐量更高（29.83 Mbps），但其未达成比例为 7.03%。该框架在 95% 的测试运行中满足时限未达成目标，在 86.25% 中满足最差用户速率判据，固定调度器分别为 82.5% 和至多 52.5%。
- 敏感性：在额定的 24 个 PRB 下，联合满足率优势为 84% 对 42.5%（固定 floor-first PF）和 36.75%（双时间尺度切片），在 51 个 PRB 时缩小为 99% 对 95% 和 96.25%；11 个 PRB 时没有方法同时满足两项判据；在轻负载用户数下固定调度器的联合满足率更高（85% 对 81%）。
- 评估方案：10 个训练种子、40 个共同测试环境，消融实验（去掉 CVaR 项、安全层、需求或 CSI 余量，或去掉分层）在单独的表中报告。

## Why it matters / what's new (EN)

The distinguishing element is placing a per-user execution-time safety check, built on CSI-prediction margins and conformal demand bounds, beneath a two-level O-RAN-style learned allocator and optimizing service-specific CVaR tails instead of averages. The results come from a single-cell simulation with 14 users and adapted baselines, and the advantage shrinks with larger carriers and loses at light user load.

## Why it matters / what's new (ZH)

其区别点在于，在两层 O-RAN 式学习型分配器之下加入基于 CSI 预测余量和共形需求上界的逐用户执行时安全检验，并针对各类业务的 CVaR 尾部而非平均值进行优化。结果来自含 14 个用户的单小区仿真和经过适配的基线，且优势随载波增大而缩小，在轻负载用户数下反而落后。

## Images

None.
