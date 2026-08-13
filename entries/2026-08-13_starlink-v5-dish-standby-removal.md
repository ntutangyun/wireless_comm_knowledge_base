---
id: 2026-08-13_starlink-v5-dish-standby-removal
date_published: 2026-08-06
date_found: 2026-08-13
type: community-signal
technology: satellite
title_en: "Starlink's V5 dish ships without Standby-mode support — community reads a plan-policy signal in a hardware spec"
title_zh: "Starlink V5 天线不再支持待机（Standby）模式——社区从硬件规格中读出套餐政策信号"
url: "https://www.reddit.com/r/Starlink/comments/1vhhrar/starlinks_new_v5_dish_doesnt_support_standby_mode/"
source_quality: full
topics: [Starlink, user-terminal, service-plans]
topic_primary: starlink
topics_secondary: [ngso-regulation]
novelty_score: 2
---

## Summary (EN)

Starlink's newly introduced **V5 user terminal does not support Standby mode**, the low-cost dormant state that lets seasonal users (vacation homes, RVs stored off-season) keep their service registered without paying for a full active month. The change was reported by PCMag and drew a ~200-upvote, 130-comment discussion on r/Starlink dominated by seasonal-use customers who rely on Standby on V4 and earlier dishes.

The technically notable part is the community's analysis of *where* the limitation lives. Multiple commenters — including users familiar with how the plan state machine works — point out that Standby is enforced **on the network/account side, not in terminal hardware**: a dish in Standby is simply a terminal whose service plan is throttled to a dormant tier, which no hardware generation should be unable to do. SpaceX's own wording ("not available" on V5, rather than "not supported") reinforces the reading that this is a **policy decision expressed as a hardware spec** — the top-voted comment's theory is that Standby is being phased out for new hardware to avoid a revolt from existing users, analogous to features being unbundled into subscriptions elsewhere in consumer hardware.

## Summary (ZH)

Starlink 新推出的 **V5 用户终端不支持待机（Standby）模式**——该低价休眠状态允许季节性用户（度假屋、淡季存放的房车）在不支付整月正常费用的情况下保留服务注册。该变化由 PCMag 报道，并在 r/Starlink 引发约 200 赞、130 条评论的讨论，参与者多为依赖 V4 及更早天线待机功能的季节性用户。

社区讨论中技术上最值得注意的是对该限制**位于何处**的分析。多位评论者（包括熟悉套餐状态机机制的用户）指出，待机模式是在**网络/账户侧而非终端硬件侧**实施的：处于待机的天线只是服务套餐被降到休眠档位的终端，任何硬件代际都不应"做不到"这一点。SpaceX 官方措辞用的是"not available"（不提供）而非"not supported"（不支持），进一步支持了"这是以硬件规格形式表达的政策决定"的解读——最高赞评论的推测是：待机模式正通过新硬件逐步淘汰，以避免直接取消引发现有用户反弹，类似消费硬件领域将既有功能拆分为订阅的做法。

## Key technical points (EN)

- V5 dish: Standby mode listed as not available; V4 and earlier retain it.
- Standby's enforcement point is the service-plan/network side (dormant service tier), not terminal silicon — the community consensus is that the restriction is artificial with respect to hardware capability.
- Practical impact: seasonal users upgrading to V5 lose the low-cost dormant option entirely; keeping V4 hardware becomes the workaround.
- Community reads this as a staged phase-out of the Standby plan via hardware generations, avoiding a change to existing users' terms.

## Key technical points (ZH)

- V5 天线：待机模式标注为不提供；V4 及更早型号保留。
- 待机的实施点在服务套餐/网络侧（休眠服务档位），而非终端芯片——社区共识是该限制相对硬件能力而言是人为设置的。
- 实际影响：升级到 V5 的季节性用户完全失去低价休眠选项；保留 V4 硬件成为规避手段。
- 社区解读：借硬件代际分阶段淘汰待机套餐，从而避免修改现有用户的条款。

## Why it matters / what's new (EN)

This is the first KB entry documenting a **capability regression across Starlink user-terminal generations**, and the mechanism matters: a service-plan policy surfacing as a hardware "spec" is a pattern worth tracking as LEO operators mature their pricing (the same lever could gate future features — roaming tiers, priority data — per hardware generation). It also quantifies a real segment of satellite-broadband demand (seasonal/intermittent service) that the current plan structure serves only through the legacy hardware it is now phasing out.

## Why it matters / what's new (ZH)

这是本知识库第一条记录 **Starlink 用户终端代际间能力回退**的条目，其机制值得关注：服务套餐政策以硬件"规格"的形式呈现，是 LEO 运营商定价体系成熟过程中值得跟踪的模式（同一手段未来也可按硬件代际控制漫游档位、优先流量等功能）。它同时量化了卫星宽带需求中真实存在的季节性/间歇性使用群体——现行套餐结构只能通过正被淘汰的旧硬件来服务这一群体。
