---
id: 2026-09-21_arxiv-metarl-clustered-bs-sampling-edge-caching
date_published: 2026-09-14
date_found: 2026-09-21
type: academic-paper
technology: cellular
title_en: "Fast-Convergent Meta-RL via Gradient-Clustered BS Sampling for Edge Caching"
title_zh: "基于梯度聚类基站采样的快速收敛元强化学习边缘缓存方法"
url: "https://arxiv.org/abs/2609.16370"
source_quality: full
topics: [edge-caching, meta-reinforcement-learning, PPO, MAML, base-stations]
topic_primary: mec
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)

This paper (Niknia, Wang — Lassonde School of Engineering, York University) addresses a scaling bottleneck in meta-reinforcement-learning-based edge caching across many independent base stations (BSs), each with its own request rate and content-popularity profile. Prior meta-RL caching frameworks learn a shared policy initialization (Model-Agnostic Meta-Learning, MAML-style) that adapts to any BS with a few local updates, but the meta-gradient at each meta-iteration must be estimated from only a small subset of BSs; sampling that subset uniformly at random produces a high-variance gradient estimate that the authors say existing frameworks leave unaddressed.

Each BS runs a local Proximal Policy Optimization (PPO) agent formulated as a Semi-Markov Decision Process over content popularity, size, lifetime, and importance. The paper's proposed fix — gradient-clustered sampling (MGCS) — groups BSs by local gradient similarity and draws from every cluster in proportion to its size at each meta-iteration, rather than sampling uniformly at random. The authors prove, via an ANOVA-style decomposition of gradient variance, that this yields a strictly lower-variance meta-gradient estimator than uniform random sampling under BS heterogeneity, and show the existing MAML convergence guarantee still holds with total variance replaced by the (smaller) within-cluster variance.

Simulations compare MGCS against uniform random meta-training (MAML-RS), transfer learning (TL) from a single source BS, and learning-from-scratch (LfS) at held-out BSs. During meta-training, MGCS drops below a meta-loss of 1800 within 20 meta-iterations, converging to a final meta-loss of 1447+/-122 versus 1961+/-300 for random sampling — roughly a 26% reduction in converged meta-loss, with visibly smaller iteration-to-iteration fluctuation. On two held-out BSs spanning the difficulty range (an "easy" BS with Zipf skewness 1 and request rate 5, and a "difficult" BS with skewness 0.22 and request rate 1.13), cache hits after adaptation (per 1,000 requests) were: TL 550/294, LfS 596/333, MAML-RS 593/367, MGCS 607/366 (easy/difficult). MGCS, MAML-RS and learning-from-scratch are comparable on both held-out BSs (easy 607 / 593 / 596; difficult 366 / 367 / 333) — the paper calls MGCS and MAML-RS indistinguishable there — so MGCS's advantage is that it reaches that quality with substantially fewer meta-training steps; all meta-learning variants beat plain transfer learning, which the authors attribute to negative transfer.

## Summary (ZH)

这篇论文（作者 Niknia、Wang，来自约克大学 Lassonde 工程学院）针对基于元强化学习的边缘缓存在跨多个独立基站（BS）场景下的一个扩展性瓶颈：每个基站都有各自的请求速率与内容热度分布。此前的元强化学习缓存框架学习一个共享的策略初始化（模型无关元学习，MAML 风格），可通过少量本地更新适应任意基站，但每次元迭代的元梯度只能从一小部分基站中估计得到；若对该子集进行均匀随机采样，会产生高方差的梯度估计，作者指出现有框架均未解决这一问题。

每个基站运行一个本地的近端策略优化（PPO）智能体，将问题建模为关于内容热度、大小、生命周期与重要性的半马尔可夫决策过程（SMDP）。论文提出的改进方法——梯度聚类采样（MGCS）——按局部梯度相似性对基站进行分组，并在每次元迭代中按各簇规模比例从每个簇中抽取样本，而非均匀随机采样。作者通过类 ANOVA 的梯度方差分解证明，在基站异质性条件下，该方法能得到严格低于均匀随机采样方差的元梯度估计量，并证明现有 MAML 收敛性保证在总方差替换为（更小的）簇内方差后依然成立。

仿真将 MGCS 与均匀随机元训练（MAML-RS）、来自单一源基站的迁移学习（TL）以及从零开始学习（LfS）在留出基站上的表现进行了对比。元训练过程中，MGCS 在 20 次元迭代内即将元损失降至 1800 以下，最终收敛于元损失 1447±122，而随机采样的最终值为 1961±300——元损失降低约 26%，且迭代间波动明显更小。在两个覆盖难度区间的留出基站上（"简单"基站 Zipf 偏度为 1、请求率为 5；"困难"基站偏度为 0.22、请求率为 1.13），适应后每 1000 次请求的缓存命中数分别为：TL 为 550/294，LfS 为 596/333，MAML-RS 为 593/367，MGCS 为 607/366（简单/困难）。在两个留出基站上 MGCS、MAML-RS 与从零学习表现相当（简单：607/593/596；困难：366/367/333），论文称 MGCS 与 MAML-RS 基本无差别；MGCS 的优势在于达到该质量所需的元训练步数明显更少；所有元学习方法均优于纯迁移学习，作者将后者的劣势归因于负迁移。

## Key technical points (EN)

- Problem: high-variance meta-gradient estimation slows meta-RL training for caching policies shared across many heterogeneous, independent BSs.
- Each BS: local PPO agent formulated as an SMDP over content popularity, size, lifetime, importance; shared meta-policy trained via a MAML-style outer loop.
- Proposed fix: gradient-clustered BS sampling (MGCS) — cluster BSs by local gradient similarity, sample proportionally from each cluster per meta-iteration.
- Theoretical result: ANOVA-style variance decomposition proves MGCS is a strictly lower-variance meta-gradient estimator than uniform random sampling under BS heterogeneity; MAML convergence guarantee holds with within-cluster variance replacing total variance.
- Meta-training: MGCS converges to meta-loss 1447+/-122 vs. 1961+/-300 for random sampling (~26% reduction), reaching sub-1800 loss within 20 meta-iterations.
- Held-out BS adaptation (cache hits per 1,000 requests, easy/difficult BS): TL 550/294, LfS 596/333, MAML-RS 593/367, MGCS 607/366 — MGCS, MAML-RS and learning-from-scratch are comparable (the paper calls MGCS and MAML-RS indistinguishable); MGCS's advantage is reaching that quality with substantially fewer meta-training steps.

## Key technical points (ZH)

- 问题：在跨多个异质、独立基站共享缓存策略的场景下，高方差的元梯度估计拖慢了元强化学习的训练速度。
- 每个基站：运行本地 PPO 智能体，将问题建模为关于内容热度、大小、生命周期、重要性的 SMDP；共享元策略通过 MAML 风格的外层循环训练。
- 提出方法：梯度聚类基站采样（MGCS）——按局部梯度相似性对基站分组，每次元迭代按簇规模比例采样。
- 理论结果：类 ANOVA 方差分解证明，在基站异质性条件下 MGCS 严格优于均匀随机采样的方差；MAML 收敛性保证在以簇内方差替代总方差后依然成立。
- 元训练表现：MGCS 收敛后的元损失为 1447±122，随机采样为 1961±300（降低约 26%），且在 20 次元迭代内即降至 1800 以下。
- 留出基站适应结果（每 1000 次请求的缓存命中数，简单/困难基站）：TL 为 550/294，LfS 为 596/333，MAML-RS 为 593/367，MGCS 为 607/366——MGCS、MAML-RS 与从零学习表现相当（论文称 MGCS 与 MAML-RS 基本无差别），MGCS 的优势在于达到该质量所需的元训练步数明显更少。

## Why it matters / what's new (EN)

The KB's MEC bin has no prior meta-RL or RL-for-content-caching entry; this is the first, and it targets the BS-sampling variance problem inside the meta-training loop itself (rather than the caching policy design), with a closed-form variance-reduction proof and matched or improved adaptation quality at lower training cost versus uniform-random meta-training.

## Why it matters / what's new (ZH)

本知识库 MEC 分类下此前没有元强化学习或 RL 内容缓存条目；本条目为首条，并专门针对元训练循环内部的基站采样方差问题本身（而非缓存策略设计）进行理论刻画，给出了方差降低的闭式证明，并在训练成本更低的情况下达到或优于均匀随机元训练的适应质量。

## Images
![Meta-training loss: gradient-clustered sampling (MGCS) versus uniform random sampling | 元训练损失曲线：梯度聚类采样（MGCS）与均匀随机采样对比](https://arxiv.org/html/2609.16370v1/figures/meta_loss.png)
