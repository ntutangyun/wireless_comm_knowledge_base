---
id: 2026-11-12_arxiv-leo-beam-hopping-replanning-budget-grant-free
date_published: 2026-11-05
date_found: 2026-11-12
technology: satellite
type: academic-paper
title_en: "Re-Planning Budgets under Admission Control in Grant-Free LEO Beam-Hopping Access"
title_zh: "免授权 LEO 波束跳变接入中准入控制下的重规划预算"
url: "https://arxiv.org/abs/2611.07592"
source_quality: full
topics: [LEO, beam hopping, grant-free access, admission control, scheduling, renewal process]
topic_primary: leo-constellations
topics_secondary: [sat-iot]
novelty_score: 3
---

## Summary (EN)

Park and Ko (Korea University; arXiv, 5 Nov 2026) bound how far a LEO beam-hopping visit order can be reordered before grant-free update delivery drops beyond a set tolerance. The guarantee covers a protected beam's spatially averaged long-run delivery rate relative to optimised periodic service. Beams are grouped and illuminated in turn; re-planning (for example on a priority change from an external controller) changes only the visit order.

The analysis shows that with fixed admission the reward can become convex at long revisit intervals, so irregular visits may help, whereas interval-specific admission makes the reward concave and periodic service optimal at a fixed mean. The resulting budget needs no revisit-interval distribution and extends to independent stationary renewal updates.

## Summary (ZH)

Park 与 Ko（高丽大学；arXiv，2026 年 11 月 5 日）给出了 LEO 波束跳变访问顺序在免授权更新投递率下降超过设定容限之前最多可被重排的幅度。该保证针对受保护波束相对于优化周期服务的空间平均长期投递率。波束被分组轮流照射；重规划（例如外部控制器改变优先级）仅改变访问顺序。

分析表明，固定准入下长重访间隔时回报可能变为凸函数，因此不规则访问可能有利；而按间隔设定准入则使回报为凹，在均值固定时周期服务最优。所得预算无需重访间隔分布，并可扩展到独立平稳更新过程。

## Key technical points (EN)

- Model: G beam groups, each visit with L slots and M resources per slot; Poisson device updates, only the latest update kept and unsent reports expire after each visit; admission probability p.
- Result: exact worst-case loss is attained by alternating two orders; the largest budget for tolerance delta is computable without the revisit-interval distribution.
- Example (40 groups, 40 resources, collision law): raising tolerance from 0% to 1% raises the permitted displacement from 17 to 24 positions; displacement 25 exceeds the tolerance (1.261% loss).
- Admission: full admission loses 3.6% at periodic service; at interval variability 0.6, revisit-conditioned admission loses 0.859% versus 3.728% for optimised static admission.
- Scheduling: at the 1% budget, a per-frame linear-assignment scheduler retains over 90% of the unrestricted waiting-cost reduction.
- Limits: unrestricted reordering can cost one tagged beam 40.8%; guarantee is spatially averaged and assumes exogenous re-planning, homogeneous loading and one-visit expiry.

## Key technical points (ZH)

- 模型：G 个波束组，每次访问含 L 个时隙、每时隙 M 个资源；设备更新服从泊松过程，仅保留最新更新，未发送报告在每次访问后过期；准入概率 p。
- 结果：最坏情况损失精确地在交替两种顺序时取得；对容限 delta 的最大预算无需重访间隔分布即可计算。
- 示例（40 组、40 个资源、碰撞模型）：容限由 0% 提高到 1%，允许位移由 17 增至 24 个位置；位移 25 超出容限（损失 1.261%）。
- 准入：周期服务下全准入损失 3.6%；在间隔变异度 0.6 时，按重访间隔准入损失 0.859%，优化静态准入为 3.728%。
- 调度：在 1% 预算下，逐帧线性指派调度器保留无限制情形下等待成本降低的 90% 以上。
- 局限：无限制重排可使单个受标记波束损失 40.8%；保证为空间平均，并假设外部重规划、负载同质与单次访问后过期。

## Why it matters / what's new (EN)

The KB's beam-hopping entries mostly address scheduling, forecasting, coordination and attacks; this paper asks how far a hop order can be re-ordered for priority changes while bounding the delivery loss for grant-free update traffic. Analytical with Monte Carlo validation.

## Why it matters / what's new (ZH)

KB 中的波束跳变条目多涉及调度、预测、协同与攻击；本文讨论为优先级变化重排跳变顺序时可重排的幅度，并约束免授权更新业务的投递损失。以解析为主并辅以蒙特卡洛验证。

## Images

None.
