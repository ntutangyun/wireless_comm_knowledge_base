---
id: 2026-06-09_arxiv-spectrum-aggregation-6g-ca-vs-dc
date_published: 2026-06-06
date_found: 2026-06-09
type: academic-paper
title_en: "Spectrum Aggregation for 6G: Lessons from 5G Carrier Aggregation and Dual Connectivity"
title_zh: "面向 6G 的频谱聚合：来自 5G 载波聚合与双连接的经验教训"
url: "https://arxiv.org/abs/2606.07944"
source_quality: abstract_only
technology: cellular
topics: [6G, spectrum-aggregation, carrier-aggregation, dual-connectivity]
topic_primary: 6g-vision
topics_secondary: [5g-nr]
novelty_score: 2
---

## Summary (EN)
This position paper by Xingqin Lin (submitted 6 Jun 2026) revisits the two spectrum-combining mechanisms that 5G relied on — carrier aggregation (CA) and dual connectivity (DC) — and argues that 6G should standardise on an enhanced CA framework rather than carry DC forward as a first-class multi-band tool. The motivating problem is that 6G must aggregate spectrum across a very wide range (low band, mid-band, the new upper-mid/centimetric band, and mmWave) and the architectural choice made now will shape a decade of deployments.

The paper's core argument is retrospective: DC was instrumental in getting early 5G to market quickly (non-standalone NR anchored on an LTE leg), but it left behind architectural fragmentation and a painful NSA→SA migration. CA, by contrast, keeps a single coherent control plane and scales more cleanly across bands. The author therefore recommends 6G treat CA as the primary multi-band foundation and invest in specific CA enhancements rather than re-using DC's split-bearer model for steady-state operation.

The contribution is framing and direction-setting rather than a new algorithm: it identifies which CA enhancement directions 6G needs and explicitly cautions against repeating the DC-driven fragmentation of the 5G era. It is timely given the June 2026 3GPP plenary discussions on the Release 21 / 6G timeline.

## Summary (ZH)
本文为 Xingqin Lin 的观点论文（2026 年 6 月 6 日提交），重新审视 5G 所依赖的两种频谱合并机制——载波聚合（CA）与双连接（DC）——并主张 6G 应以增强型 CA 框架为标准，而不应把 DC 作为一流的多频段工具继续沿用。问题动机在于：6G 需要在极宽的频段范围（低频、中频、新的中高频/厘米波，以及毫米波）上聚合频谱，现在做出的架构选择将影响未来十年的部署。

论文的核心论点是回顾性的：DC 在 5G 早期快速商用中功不可没（非独立组网 NR 锚定在 LTE 腿上），但它留下了架构碎片化以及痛苦的 NSA→SA 迁移。相比之下，CA 保持单一、连贯的控制面，并能更干净地跨频段扩展。因此作者建议 6G 把 CA 作为主要的多频段基础，并投资于具体的 CA 增强，而非在稳态运行中重用 DC 的分流承载模型。

其贡献在于框架与方向设定，而非新算法：它指出了 6G 所需的 CA 增强方向，并明确告诫不要重蹈 5G 时代 DC 驱动的碎片化覆辙。在 2026 年 6 月 3GPP 全会讨论 Release 21 / 6G 时间线之际，本文颇为及时。

## Key technical points (EN)
- Compares CA vs DC across low / mid / upper-mid (centimetric) / mmWave bands.
- Argues DC's value was deployment speed (NSA anchoring), at the cost of long-term architectural fragmentation.
- Recommends enhanced CA as the cleaner, more scalable foundation for standalone 6G multi-band operation.
- Identifies concrete CA enhancement directions needed for 6G; not an algorithm paper.

## Key technical points (ZH)
- 在低频/中频/中高频（厘米波）/毫米波各频段对比 CA 与 DC。
- 认为 DC 的价值在于部署速度（NSA 锚定），代价是长期架构碎片化。
- 建议以增强型 CA 作为独立组网 6G 多频段运行的更干净、更可扩展的基础。
- 指出 6G 所需的具体 CA 增强方向；并非算法类论文。

## Why it matters / what's new (EN)
The KB's `6g-vision` bin holds mostly air-interface and AI-native-RAN material; this is the first entry framing 6G's *spectrum-aggregation architecture* decision explicitly as CA-vs-DC, and it lands during the June 2026 plenary window when Release 21 scope is being set. It complements the existing `5g-nr` carrier-aggregation background with a forward-looking design recommendation.

## Why it matters / what's new (ZH)
KB 的 `6g-vision` 分类目前多为空口与 AI 原生 RAN 内容；本条目首次将 6G 的*频谱聚合架构*决策明确框定为 CA 与 DC 之争，且恰逢 2026 年 6 月确定 Release 21 范围的全会窗口。它在已有 `5g-nr` 载波聚合背景之上，补充了一项面向未来的设计建议。
