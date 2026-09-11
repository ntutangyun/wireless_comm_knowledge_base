---
id: 2026-09-11_arxiv-blockchain-multi-operator-oran-pfs
date_published: 2026-09-07
date_found: 2026-09-11
type: academic-paper
technology: cellular
title_en: "Blockchain-Based Proportional Fair Scheduling for Multi-Operator O-RAN"
title_zh: "面向多运营商 O-RAN 的区块链化比例公平调度"
url: "https://arxiv.org/abs/2609.07473"
source_quality: full
topics: [O-RAN, proportional-fair-scheduling, blockchain, smart-contracts, spectrum-sharing, resource-pooling]
topic_primary: open-ran
topics_secondary: [network-slicing, cellular-security]
novelty_score: 3
---

## Summary (EN)
Kun Huang, Xintong Ling, Meining Wu, Jiaheng Wang, Zhi Ding, and Xiqi Gao (arXiv v1, 7 Sep 2026; Southeast University's National Mobile Communications Research Laboratory and Purple Mountain Laboratories, Nanjing, with UC Davis) address a trust gap in O-RAN's disaggregated architecture: its open interfaces make cross-operator spectrum/resource sharing technically possible, but proportional fair scheduling (PFS) across operators normally assumes each side honestly reports channel state and honors the scheduling outcome — an assumption that does not hold among competing, mutually distrustful operators. Without a verifiable enforcement mechanism, operators can free-ride or defect from cooperative scheduling agreements, eroding the benefits multi-operator pooling should provide.

The paper proposes BC-PFS: proportional fair scheduling executed on-chain via four Solidity smart contracts — a Registration contract mapping addresses to verified operator/user identities, a Status Reporting contract that validates submitted channel-state information and derives transmission rates, a Scheduling contract that computes each user-operator pair's PFS priority score (instantaneous rate divided by historical throughput) and selects the highest-priority user per operator on-chain, and a Settlement contract that computes and permanently records cross-operator service charges. Consensus runs on a permissioned ledger jointly maintained by the participating operators, for which the paper suggests protocols such as Raft, giving transparent, immutable, and automatically-enforced scheduling without a trusted intermediary. Alongside the system design, the authors derive the user average throughput via both probabilistic and ordinary-differential-equation (ODE) approaches, expand the resulting semi-closed-form result into a summation via the inclusion-exclusion principle, and give a simplified closed form for the case of near-uniform rate distributions, then define a pooling-gain function ψ(N,K) = KN·ln(ω(KN)/ω(N)) (K = operator count, N = users per operator, ω = harmonic number) and prove it is strictly increasing in both K and N — i.e., cooperative multi-operator scheduling provably never underperforms isolated single-operator scheduling, and the advantage grows the more operators and users join.

Simulations (Rayleigh fading, 50 ms coherence/scheduling interval, K = 2-5 operators, N = 2-10 users per operator, 1 MHz per operator, average SNR -20 to -10 dB) confirm the simplified closed form tracks the exact simulated throughput closely when the operators' rate distributions are close to uniform, and that BC-PFS consistently outperforms isolated single-network PFS as well as max-sum and max-min fair baselines, with the utility gap widening monotonically as K and N grow. The pooling-gain predictions match simulated values and show quasi-linear scaling at larger network sizes; when rate distributions are less uniform, actual gains exceed the closed-form prediction because BC-PFS additionally exploits the extra multi-user diversity across operators. The paper does not report concrete latency or gas-cost numbers for the on-chain execution itself, framing the contribution as the trust-and-fairness mechanism plus its analytical performance model rather than a deployment-latency study.

## Summary (ZH)
Kun Huang、Xintong Ling、Meining Wu、Jiaheng Wang、Zhi Ding 与 Xiqi Gao（arXiv v1，2026 年 9 月 7 日；东南大学移动通信国家重点实验室与南京紫金山实验室，合作单位为加州大学戴维斯分校）针对 O-RAN 解耦架构中的一个信任缺口展开研究：O-RAN 的开放接口在技术上使跨运营商的频谱/资源共享成为可能，但跨运营商的比例公平调度（PFS）通常假设各方如实上报信道状态并遵守调度结果——而在相互竞争、彼此不信任的运营商之间，这一假设并不成立。若缺乏可验证的执行机制，运营商可能"搭便车"或违背合作调度协议，从而侵蚀多运营商资源池化本应带来的收益。

论文提出 BC-PFS：通过四份 Solidity 智能合约在链上执行比例公平调度——注册合约将地址映射为经过验证的运营商/用户身份；状态上报合约验证提交的信道状态信息并推算传输速率；调度合约为每个用户-运营商配对计算 PFS 优先级分数（瞬时速率除以历史吞吐量），并在链上为每个运营商选出优先级最高的用户；结算合约计算并永久记录跨运营商的服务费用。共识运行在由参与运营商共同维护的许可制账本上，论文建议可采用 Raft 等共识协议，从而在无需可信中介的情况下实现透明、不可篡改且自动强制执行的调度。除系统设计外，作者还通过概率方法与常微分方程（ODE）两条路径推导了多运营商资源池化下的用户平均吞吐量，基于容斥原理将半闭式结果展开为求和形式，并针对速率分布接近均匀的情形给出了简化闭式解；进而定义池化增益函数 ψ(N,K) = KN·ln(ω(KN)/ω(N))（K 为运营商数、N 为每运营商用户数、ω 为调和数），并证明其在 K 和 N 上均严格单调递增——即合作式多运营商调度在理论上绝不会劣于孤立的单运营商调度，且随着运营商与用户数量增加，优势会持续扩大。

仿真（瑞利衰落，相干/调度间隔 50 毫秒，运营商数 K = 2-5，每运营商用户数 N = 2-10，每运营商带宽 1 MHz，平均信噪比 -20 至 -10 dB）证实：当运营商速率分布接近均匀时，简化闭式解与精确仿真吞吐量高度吻合；BC-PFS 在效用上持续优于孤立单网络 PFS 以及最大和、最大最小公平等基线，且随着 K 与 N 的增长，效用差距单调扩大。池化增益的理论预测与仿真结果相符，并在网络规模较大时呈现准线性增长；当速率分布不那么均匀时，实际增益会超过闭式解的预测值，原因是 BC-PFS 还额外利用了跨运营商的多用户分集增益。论文未给出链上执行本身的具体时延或 Gas 成本数据，其贡献定位在信任与公平机制本身及其解析性能模型，而非部署时延方面的实测研究。

## Key technical points (EN)
- Four on-chain Solidity smart contracts (Registration, Status Reporting, Scheduling, Settlement) execute proportional fair scheduling across mutually distrustful O-RAN operators, with a permissioned ledger jointly maintained by the operators (the paper suggests protocols such as Raft) providing transparent, immutable enforcement.
- On-chain PFS priority score = instantaneous rate / historical throughput, computed and selected per operator inside the Scheduling contract; Settlement contract automates and permanently records cross-operator billing.
- Derives the user average throughput via both probabilistic and ODE approaches, expands the semi-closed-form result by inclusion-exclusion, and gives a simplified closed form for near-uniform operator rate distributions; defines pooling gain psi(N,K) = KN*ln(omega(KN)/omega(N)) and proves it strictly increasing in both operator count K and per-operator user count N.
- Simulation (K=2-5 operators, N=2-10 users/operator, Rayleigh fading, -20 to -10 dB SNR): BC-PFS beats isolated single-network PFS and max-sum/max-min baselines, with the gap widening monotonically in K and N.
- Pooling-gain theory matches simulation and shows quasi-linear scaling at larger network sizes; actual gains exceed the closed-form prediction when rate distributions are less uniform, due to extra cross-operator diversity.
- No concrete on-chain latency/gas-cost figures reported — contribution is the trust/fairness mechanism and its analytical model, not a deployment-overhead measurement.

## Key technical points (ZH)
- 四份链上 Solidity 智能合约（注册、状态上报、调度、结算）在相互不信任的 O-RAN 运营商之间执行比例公平调度，并通过由运营商共同维护的许可制账本（论文建议可采用 Raft 等协议）实现透明、不可篡改的强制执行。
- 链上 PFS 优先级分数 = 瞬时速率 / 历史吞吐量，在调度合约内按运营商计算并选出对应用户；结算合约自动计算并永久记录跨运营商计费。
- 通过概率方法与常微分方程（ODE）两条路径推导用户平均吞吐量，基于容斥原理将半闭式结果展开为求和形式，并给出适用于运营商速率分布接近均匀情形的简化闭式解；定义池化增益 psi(N,K) = KN*ln(omega(KN)/omega(N))，并证明其在运营商数 K 与每运营商用户数 N 上均严格单调递增。
- 仿真（K=2-5 个运营商，每运营商 N=2-10 个用户，瑞利衰落，信噪比 -20 至 -10 dB）：BC-PFS 优于孤立单网络 PFS 以及最大和/最大最小公平基线，且差距随 K 与 N 增长单调扩大。
- 池化增益理论与仿真结果吻合，在网络规模较大时呈现准线性增长；当速率分布不均匀时，实际增益会超出闭式解预测值，原因在于额外的跨运营商多用户分集增益。
- 论文未给出链上执行的具体时延或 Gas 成本数据——其贡献定位于信任/公平机制本身及其解析模型，而非部署开销的实测研究。

## Why it matters / what's new (EN)
The KB has no prior entry combining blockchain-based trust enforcement with O-RAN's cross-operator resource-sharing promise. Most existing O-RAN entries in this KB address the RIC/xApp control-plane or AI-driven RAN optimization within a single operator's network; this paper instead tackles the multi-operator trust problem that has to be solved before cross-operator spectrum pooling (a stated O-RAN goal) can be relied upon in practice, and backs the mechanism with a provable monotonic pooling-gain theorem rather than just a simulation claim.

## Why it matters / what's new (ZH)
知识库此前没有条目将基于区块链的信任强制机制与 O-RAN 所承诺的跨运营商资源共享结合在一起。现有的 O-RAN 相关条目大多聚焦于单一运营商网络内的 RIC/xApp 控制面或 AI 驱动的 RAN 优化；而本文处理的是跨运营商频谱池化（O-RAN 明确提出的目标之一）要真正落地前必须解决的多运营商信任问题，并以一个可证明的单调池化增益定理为该机制提供支撑，而不仅仅是仿真层面的论断。

## Images
![Pooling gain under different network settings (contour plot over users-per-network and network count) | 不同网络规模设置下的池化增益（按每网用户数与网络数的等值线图）](https://arxiv.org/html/2609.07473v1/Fig9.png)
