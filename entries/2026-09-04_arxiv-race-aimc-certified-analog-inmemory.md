---
id: 2026-09-04_arxiv-race-aimc-certified-analog-inmemory
date_published: 2026-09-02
date_found: 2026-09-04
type: academic-paper
technology: edge-ai
title_en: "RACE-AIMC: Selective Inference for Heterogeneous Analog In-Memory Accelerators at the Edge"
title_zh: "RACE-AIMC：面向边缘异构模拟存内计算加速器的选择性推理"
url: "https://arxiv.org/abs/2609.03149"
source_quality: full
topics: [analog-in-memory-computing, AIMC, selective-inference, statistical-certification, chip-variability, energy-efficiency]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Analog in-memory computing (AIMC) accelerators run neural-network inference by doing arithmetic directly inside the memory array that stores the weights, rather than shuttling weights back and forth to a separate processor, which saves energy. The catch is that the physical devices storing those weights are imperfect — programming errors, electrical noise, limited-resolution converters, and outright broken cells all distort the computation, and every physical chip is distorted in its own individual way. A system with several such chips available then faces a choice with no good default: run all of them and combine the answers (safe, but energy-wasteful), or trust a single chip (cheap, but with no guarantee of how often it will be wrong).

RACE-AIMC (Risk-Aware Certified Ensemble for AIMC), from WD Research (Western Digital), resolves that choice statistically instead of by guesswork. Offline, it splits calibration data into three independent sets — one to estimate each accelerator's own systematic bias, one to select the single best-performing accelerator for a given energy budget (maximizing a coverage-per-energy score) and tune its confidence threshold, and one held out purely to compute a mathematically exact, finite-sample upper confidence bound on how often that accelerator will be wrong when it chooses to answer. Online, only the one selected accelerator is powered; a lightweight confidence check (comparing its top-two output logits against the frozen threshold) decides whether to accept its answer or defer to a fallback path, such as digital inference.

In simulation on CIFAR-10 with a compact CNN, using six simulated AIMC accelerator profiles with independently varying noise, fault rates, energy, and latency, RACE-AIMC's certified error bound stayed under the paper's 10% risk target in all five independent runs (mean bound 7.83% +/- 0.89%, with 70.88% +/- 0.98% of inputs answered directly by the single selected chip), while cutting the paper's modeled energy use by 69.02% +/- 0.53% relative to always running and averaging all six accelerators. The selected chip alone also outperformed blind six-chip averaging (81.00% vs. 75.32% forced accuracy) because noisy chips degrade an ensemble's combined logits. The authors are explicit that the accelerator profiles are simulator-generated rather than fabricated silicon, and that the energy figures are modeled component-level costs rather than full-chip hardware measurements; the statistical certificate itself also requires exchangeability between calibration and deployment data, so drift from temperature, aging, or distribution shift invalidates the guarantee until it is recomputed.

## Summary (ZH)

模拟存内计算（AIMC）加速器通过直接在存储权重的存储阵列内部完成算术运算来执行神经网络推理，而不是在独立处理器与存储器之间来回搬运权重，从而节省能耗。问题在于，存储这些权重的物理器件并不完美——编程误差、电气噪声、有限分辨率的模数转换器，以及彻底损坏的存储单元，都会扭曲计算结果，而且每块物理芯片被扭曲的方式各不相同。当一个系统拥有多块这样的芯片时，就会面临一个没有好选项的抉择：要么全部运行并综合结果（安全但浪费能量），要么信任单块芯片（成本低，但对其出错频率没有任何保证）。

来自西部数据研究院（WD Research）的 RACE-AIMC（面向 AIMC 的风险感知认证集成方法）用统计方法而非凭猜测来解决这一抉择。离线阶段，它将校准数据划分为三个独立子集——一个用于估计各加速器自身的系统性偏差；一个用于在给定能耗预算下选出单块表现最优的加速器（最大化"每能耗覆盖率"评分）并调优其置信度阈值；还有一个完全独立留出、仅用于计算一个数学上严格的、有限样本的置信上界，即该加速器在选择作答时的出错频率上限。在线阶段，仅启用该被选中的单块加速器；一个轻量级置信度检查（将其输出中排名前两位的 logit 与冻结阈值比较）决定接受其答案，还是转交给回退路径（例如数字推理）处理。

在 CIFAR-10 数据集、使用一个紧凑 CNN 的仿真实验中，采用六个噪声、故障率、能耗与延迟各不相同的模拟 AIMC 加速器仿真画像，RACE-AIMC 的认证误差上界在全部五次独立运行中均低于论文设定的 10% 风险目标（平均上界 7.83% ± 0.89%，其中 70.88% ± 0.98% 的输入由该单块被选中芯片直接作答），同时相比"始终运行并平均全部六块加速器结果"的方案，论文建模的能耗降低 69.02% ± 0.53%。被选中的单块芯片本身的表现也优于六块芯片的盲目平均（强制作答准确率 81.00% 对比 75.32%），原因是含噪芯片会拉低集成后综合 logit 的质量。作者明确说明，所用加速器画像为仿真生成而非实际流片芯片，能耗数据也是建模的组件级成本而非整芯片硬件实测；此外该统计认证本身要求校准数据与部署数据满足可交换性，温度漂移、器件老化或分布偏移都会使该保证失效，须重新计算认证。

## Key technical points (EN)

- **Problem**: physical AIMC chips are each distorted in their own way by programming error, noise, ADC/DAC resolution limits, and stuck faults; running all available chips as an ensemble is safe but energy-wasteful, trusting one blindly gives no error guarantee.
- **Offline phase**: calibration data split three ways — hardware-bias estimation, accelerator selection + confidence-threshold tuning (maximizing coverage-per-energy), and a held-out certificate set producing a finite-sample statistical upper bound on error rate (via Clopper-Pearson binomial bounds).
- **Online phase**: only the single selected accelerator runs; a top-two-logit confidence check accepts or defers to a fallback, at the cost of "one analog inference, one comparison, one decision."
- **Evaluation**: CIFAR-10 + compact CNN, six simulated AIMC accelerator profiles (A0-A5, 8-bit conductance devices, differential weight encoding), risk target 10%, design target 8%.
- **Headline numbers**: certified risk bound 7.83% +/- 0.89% (5/5 runs under the 10% target); 70.88% +/- 0.98% coverage answered directly; 69.02% +/- 0.53% modeled energy savings vs. always-on six-chip ensemble; single selected chip (81.00% forced accuracy) beats blind six-chip averaging (75.32%).
- **Disclosed limitations**: accelerator profiles are simulator-generated, not fabricated silicon; energy figures are modeled component-level costs, not full-chip hardware measurements; the certificate requires exchangeability and must be recomputed after distribution shift.
- **Authors / venue**: Osama Yousuf and Martin Lueker-Boden, WD Research (Western Digital), San Jose, CA; posted to arXiv, no conference venue stated.

## Key technical points (ZH)

- **问题**：每块物理 AIMC 芯片都会因编程误差、噪声、ADC/DAC 分辨率限制及损坏单元而各自产生独特的计算扭曲；将所有可用芯片作为集成运行安全但浪费能量，盲目信任单块芯片则没有误差保证。
- **离线阶段**：将校准数据划分为三部分——用于硬件偏差估计、用于加速器选择与置信度阈值调优（最大化"每能耗覆盖率"），以及一个独立留出的认证集，用于通过 Clopper-Pearson 二项分布界计算有限样本的误差率统计上界。
- **在线阶段**：仅运行被选中的单块加速器；通过比较排名前两位的 logit 进行置信度检查，决定接受作答还是转入回退路径，代价仅为"一次模拟推理、一次比较、一次决策"。
- **评测设置**：CIFAR-10 数据集配合一个紧凑 CNN，六个仿真 AIMC 加速器画像（A0–A5，8 位电导器件，差分权重编码），风险目标 10%，设计目标 8%。
- **核心数据**：认证风险上界 7.83% ± 0.89%（五次运行全部低于 10% 目标）；70.88% ± 0.98% 的输入由单块芯片直接作答；相比始终运行的六芯片集成，建模能耗降低 69.02% ± 0.53%；被选中的单块芯片强制作答准确率（81.00%）优于六芯片盲目平均（75.32%）。
- **已披露的局限性**：加速器画像为仿真生成，并非实际流片芯片；能耗数据为建模的组件级成本，而非整芯片硬件实测；该认证要求校准数据与部署数据可交换，分布发生偏移后须重新计算认证。
- **作者/发表渠道**：Osama Yousuf 与 Martin Lueker-Boden，西部数据研究院（WD Research），美国加州圣何塞；发布于 arXiv，未注明会议/期刊。

## Why it matters / what's new (EN)

This KB already tracks several edge-ai-silicon approaches to unreliable or resource-constrained hardware — the stochastic-computing MTJ in-memory architecture in `2026-09-02_arxiv-falcon-mtj-fault-tolerant-in-memory-edge-ai` tolerates noise inside the compute fabric itself, whereas RACE-AIMC takes the opposite approach: it accepts that individual analog chips are unreliable and wraps a statistically rigorous accept/defer decision layer around a cheap single chip instead of paying for redundancy. The distinguishing, and most defensible, part of the contribution is the exactness of the guarantee — a finite-sample confidence bound rather than an empirical average — though the paper's own limitations section is equally important context: these are simulated accelerator profiles and modeled energy numbers, not measurements on fabricated silicon, so the 69% energy-saving figure should be read as a systems-design result rather than a validated hardware claim.

## Why it matters / what's new (ZH)

本 KB 已收录多种应对不可靠或资源受限硬件的边缘 AI 芯片方案——`2026-09-02_arxiv-falcon-mtj-fault-tolerant-in-memory-edge-ai` 中的随机计算 MTJ 存内架构是在计算结构本身内部容忍噪声，而 RACE-AIMC 采取相反思路：承认单块模拟芯片本身不可靠，转而在一块低成本单芯片外部包裹一层具有统计严谨性的"接受/转交"决策层，而不是为冗余付出代价。该工作最具区分度、也最站得住脚的部分，在于其保证的精确性——一个有限样本置信上界，而非经验平均值；不过论文自身的局限性说明同样是重要背景：这些是仿真生成的加速器画像与建模能耗数据，而非实际流片芯片上的实测，因此 69% 的节能数字应被视为系统设计层面的结果，而非经过验证的硬件实测结论。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
