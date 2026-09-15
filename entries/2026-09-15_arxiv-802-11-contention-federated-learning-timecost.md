---
id: 2026-09-15_arxiv-802-11-contention-federated-learning-timecost
date_published: 2026-09-11
date_found: 2026-09-15
technology: wifi
type: academic-paper
title_en: "Hidden in Rounds: Predicting the Time Cost of 802.11 Contention in Federated Learning"
title_zh: "隐藏在轮次之中：预测联邦学习中 802.11 竞争接入的时间成本"
url: "https://arxiv.org/abs/2609.12903"
source_quality: full
topics: [802.11, CSMA-CA, MAC-layer, federated-learning, Bianchi-model]
topic_primary: wifi-for-ai
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

This paper (Satwat Bashir, Tasos Dagiuklas; Department of Computer Science, London South Bank University, UK) studies federated learning (FL) clients that share a single IEEE 802.11 CSMA/CA channel to send model updates to an aggregator, and asks specifically how MAC-layer contention shapes the *time* it takes to reach a target accuracy — as opposed to the round count, which is what most FL-over-wireless literature reports. The authors argue that existing convergence analyses model the channel as an i.i.d. per-client loss probability tied to physical-layer parameters, which does not describe how a contention-based medium (where loss and delay emerge from competition for the channel) actually responds to client density and offered load. Their method is deliberately decoupled: an ns-3 simulation of an 802.11g DCF single-cell network (one AP, N stations, single collision domain, fixed 24 Mbit/s rate so contention rather than rate adaptation drives results) measures the frame-delivery ratio p_f(N, L) and the saturation throughput R_sat(N) across a sweep of 6 client densities (10-100 stations) and 6 offered-load levels (0.80-2.00x capacity); a separate PyTorch FedAvg trainer then uses p_f purely as an update-admission probability and assigns each round an estimated communication duration via T_comm = N x S / (p_f x R_sat(N)), where S is the ~178 KB model-update size. The ns-3 contention model itself is validated against the analytical Bianchi saturation-throughput model, agreeing within a mean 8.6% (at most 12%) error across densities.

Across 720 FedAvg runs (2 datasets: Fashion-MNIST and CIFAR-10; 2 data-split regimes: i.i.d. and non-i.i.d. Dirichlet; 6 densities x 6 loads; 5 seeds), every run reached its predefined target accuracy within the round budget. The central finding is a sharp asymmetry, illustrated on Fashion-MNIST (i.i.d.): offered load barely moves rounds-to-target (at N=50, rounds-to-target stays near 8.6 as load rises from light to saturated even though per-round frame-delivery falls from 1.00 to 0.39) but drives roughly a 2.5x increase in communication time-to-target over the same range (52s to 133s); at saturated load, client density has an even larger effect on communication time, growing it from about 6 seconds at N=10 to 640 seconds at N=100 (nearly two orders of magnitude) while rounds-to-target grows only from 2.6 to 16.6. CIFAR-10 shows the same pattern: at N=50, communication time-to-target rises from 39s (light load) to 104s (saturated load) while rounds-to-target stays near 4.7, and at saturated load it rises from 6s at N=10 to 463s at N=100. A Bianchi-anchored estimator built from ordinary least squares on N and p_f predicts communication time-to-target with a mean absolute percentage error (MAPE) of 2.3% to 10.2% across held-out density/load extrapolation and leave-one-out tests — measured against the communication time constructed from Eq. (1), not against independently measured completion time. A channel-free reference regression, which receives neither p_f nor R_sat (so it is not an equal-input comparison), shows larger errors on several tests (up to 152%), though the paper notes the two methods use different channel information and does not present this as a controlled comparison. A second experiment compares uniform per-round client participation against a "persistent heterogeneous participation" arm, where each client's participation probability is fixed from its own measured, distance-correlated frame-delivery ratio (Pearson correlation between distance and delivery ratio: -0.60 to -0.82); across five seeds, neither the worst-class nor the excluded-class accuracy gap between the two arms reaches statistical significance, though the confidence intervals are described as wide.

## Summary (ZH)

这篇论文（Satwat Bashir、Tasos Dagiuklas，英国伦敦南岸大学计算机科学系）研究了共享同一条 IEEE 802.11 CSMA/CA 信道向聚合方发送模型更新的联邦学习（FL）客户端，具体考察 MAC 层的竞争接入如何影响达到目标精度所需的"时间"——而非大多数"FL 越过无线信道"文献所报告的轮次数量。作者指出，现有的收敛性分析通常将信道抽象为与物理层参数相关的、各客户端独立同分布的丢包概率，这并不能刻画一个基于竞争的信道（其丢包与时延源于对信道的争用）在面对不同客户端密度和负载时的真实响应。他们采用了刻意解耦的方法：先用 ns-3 仿真一个基于 802.11g DCF 的单小区网络（一个接入点、N 个站点，构成单一冲突域，固定 24 Mbit/s 速率以确保竞争而非速率自适应主导结果），在 6 种客户端密度（10 至 100 个站点）与 6 种负载水平（容量的 0.80 至 2.00 倍）的扫描组合下，测得逐帧交付率 p_f(N, L) 与饱和吞吐量 R_sat(N)；随后一个独立的基于 PyTorch 的 FedAvg 训练器仅将 p_f 用作更新接纳概率，并通过 T_comm = N × S / (p_f × R_sat(N))（S 约为 178 KB 的模型更新大小）为每一轮分配一个估计的通信时长。ns-3 的竞争模型本身与解析的 Bianchi 饱和吞吐量模型进行了校验，各密度下的平均误差为 8.6%（最高 12%）。

在 720 次 FedAvg 运行（2 个数据集：Fashion-MNIST 与 CIFAR-10；2 种数据划分方式：独立同分布与非独立同分布 Dirichlet 划分；6 种密度 × 6 种负载；5 个随机种子）中，所有运行均在轮次预算内达到了预设目标精度。核心发现体现出明显的不对称性，以 Fashion-MNIST（独立同分布）为例：负载水平几乎不影响达到目标所需的轮次数（在 N=50 时，即便逐轮交付率从 1.00 降至 0.39，达到目标所需轮次仍稳定在约 8.6 轮附近），但在同一负载区间内会使达到目标的通信耗时增加约 2.5 倍（从 52 秒增至 133 秒）；在饱和负载下，客户端密度对通信耗时的影响更为显著，从 N=10 时约 6 秒增长到 N=100 时的 640 秒（接近两个数量级），而同期达到目标所需轮次仅从 2.6 增至 16.6。CIFAR-10 呈现相同模式：在 N=50 时，通信耗时随负载从 39 秒升至 104 秒，而所需轮次稳定在约 4.7 轮；在饱和负载下，随密度增加通信耗时从 6 秒升至 463 秒。一个基于 N 和 p_f 做普通最小二乘回归构建的 Bianchi 锚定估计器，在留出的密度/负载外推及留一法测试中，对通信耗时的平均绝对百分比误差（MAPE）为 2.3% 至 10.2%——该误差是相对于由公式 (1) 构建出的通信耗时而言，并非相对于独立测量的完成时间。一个不接收 p_f 或 R_sat 输入的无信道信息参照回归（因此并非同输入基线对比）在部分测试中误差更大（最高达 152%），但作者指出两种方法使用的信道信息不同，并未将其作为受控对比呈现。第二组实验比较了均匀逐轮参与与"持续性异质参与"（每个客户端的参与概率固定为其自身测得的、与距离相关的交付率，距离与交付率的皮尔逊相关系数为 -0.60 至 -0.82）；在五个随机种子上，两种方案之间无论是最差类别精度差还是被排除类别精度差均未达到统计显著性，但作者指出置信区间较宽。

## Key technical points (EN)

- Decoupled design: ns-3 measures frame-delivery ratio p_f(N, L) and saturation throughput R_sat(N) for an 802.11g DCF single-cell network (one AP, one collision domain); a separate PyTorch FedAvg trainer uses p_f only as an update-admission probability, never replaying ns-3 packet traces.
- Communication-time estimate: T_comm(N, p_f) = N x S / (p_f x R_sat(N)), S ~178 KB (LeNet-style CNN update size).
- ns-3 contention model validated against the analytical Bianchi saturation-throughput model: mean 8.6% error, at most 12%, across densities.
- 720 runs total: 2 datasets (Fashion-MNIST, CIFAR-10) x 2 splits (i.i.d., Dirichlet non-i.i.d.) x 6 densities (10-100) x 6 offered loads (0.80-2.00x) x 5 seeds. All runs reach target accuracy within the round budget.
- Asymmetry (Fashion-MNIST, i.i.d.): at N=50, offered load barely changes rounds-to-target (~8.6) despite frame-delivery ratio falling 1.00 -> 0.39, but communication time-to-target rises ~2.5x (52s -> 133s); at saturated load, across density (N=10 -> 100) communication time-to-target rises ~2 orders of magnitude (6s -> 640s) while rounds-to-target only rises 2.6 -> 16.6. CIFAR-10 shows the same pattern: at N=50, communication time-to-target rises 39s -> 104s with load while rounds-to-target stays ~4.7; at saturated load across density it rises 6s -> 463s.
- Bianchi-anchored estimator: MAPE 2.3%-10.2% on held-out density/load extrapolation and leave-one-out tests, measured against communication time constructed from Eq. (1) (not independently measured completion time); a channel-free reference regression that receives no p_f/R_sat input reaches up to 152% error on some tests, though the comparison is not controlled for equal inputs.
- Persistent heterogeneous participation (client admission probability tied to its own distance-correlated frame-delivery ratio, Pearson r -0.60 to -0.82 vs. distance) shows no statistically significant worst-class or excluded-class accuracy gap vs. uniform participation over 5 seeds, though CIs are wide.
- Code and configurations released at github.com/satwatbashir/Contention-FL.

## Key technical points (ZH)

- 解耦设计：ns-3 测量 802.11g DCF 单小区网络（一个接入点、单一冲突域）的逐帧交付率 p_f(N, L) 与饱和吞吐量 R_sat(N)；独立的 PyTorch FedAvg 训练器仅将 p_f 用作更新接纳概率，不回放 ns-3 的数据包轨迹。
- 通信时间估计公式：T_comm(N, p_f) = N × S / (p_f × R_sat(N))，S 约为 178 KB（LeNet 风格 CNN 更新大小）。
- ns-3 竞争模型与解析 Bianchi 饱和吞吐量模型校验：各密度下平均误差 8.6%，最高 12%。
- 共 720 次运行：2 个数据集（Fashion-MNIST、CIFAR-10）× 2 种划分（独立同分布、Dirichlet 非独立同分布）× 6 种密度（10-100）× 6 种负载（容量的 0.80-2.00 倍）× 5 个随机种子。所有运行均在轮次预算内达到目标精度。
- 不对称性（Fashion-MNIST，独立同分布）：在 N=50 时，即便逐轮交付率从 1.00 降至 0.39，负载几乎不改变达到目标所需轮次（约 8.6 轮），但通信耗时上升约 2.5 倍（52 秒到 133 秒）；在饱和负载下随密度变化（N=10 到 100），通信耗时上升近两个数量级（6 秒到 640 秒），而所需轮次仅从 2.6 增至 16.6。CIFAR-10 呈现相同模式：N=50 时通信耗时随负载从 39 秒升至 104 秒，所需轮次稳定在约 4.7 轮；饱和负载下随密度通信耗时从 6 秒升至 463 秒。
- Bianchi 锚定估计器：在留出的密度/负载外推及留一法测试中 MAPE 为 2.3%-10.2%（该误差相对于公式 (1) 构建出的通信耗时而言，并非独立测得的完成时间）；不接收 p_f/R_sat 的无信道信息参照回归在部分测试中误差最高可达 152%，但该对比并非同输入受控对比。
- 持续性异质参与（客户端接纳概率固定为其自身、与距离相关的交付率，与距离的皮尔逊相关系数为 -0.60 至 -0.82）相较均匀参与，在五个随机种子上未检测到统计显著的最差类别或被排除类别精度差，但作者指出置信区间较宽。
- 代码与配置已发布于 github.com/satwatbashir/Contention-FL。

## Why it matters / what's new (EN)

This KB has tracked several papers coupling AI workloads to the Wi-Fi link (e.g. 2026-08-27_arxiv-wici-wireless-gpu-offload-llm on GPU offload over Wi-Fi, 2026-08-04_arxiv-wifi-broadcast-rate-edge-llm on broadcast rate for edge LLM traffic), but this is the first in this KB's coverage to isolate MAC-layer contention specifically as the driver of federated-learning *time*-to-target (as opposed to round count), and to show the two metrics diverge sharply: standard FL-over-wireless literature that reports rounds-to-target would conclude offered load "has almost no effect," a conclusion the authors show does not carry over to the estimated communication time constructed via Eq. (1). The Bianchi-anchored estimator gives a way to predict that constructed time cost from client density N and the ns-3-measured frame-delivery ratio, without needing to run the full FL trainer.

## Why it matters / what's new (ZH)

本知识库此前跟踪过多篇将 AI 工作负载与 Wi-Fi 链路耦合的论文（如探讨 GPU 通过 Wi-Fi 卸载的 2026-08-27_arxiv-wici-wireless-gpu-offload-llm，以及探讨边缘 LLM 流量广播速率的 2026-08-04_arxiv-wifi-broadcast-rate-edge-llm），但这是本知识库收录中首篇专门将 MAC 层竞争接入分离出来，作为联邦学习达到目标精度所需"时间"（而非轮次数）的驱动因素来研究的论文，并揭示了这两个指标会显著背离：按轮次数衡量的传统无线联邦学习文献会得出负载"几乎没有影响"的结论，而作者证明这一结论并不适用于通过公式 (1) 构建出的估计通信耗时。Bianchi 锚定估计器提供了一种基于客户端密度 N 与 ns-3 测得的逐帧交付率来预测这一构建耗时成本的方法，而无需运行完整的 FL 训练器。

## Images

None.
