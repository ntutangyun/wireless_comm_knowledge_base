---
id: 2026-10-21_arxiv-atlas-leo-satellite-backhaul-wildlife-monitoring
date_published: 2026-10-17
date_found: 2026-10-21
technology: satellite
type: academic-paper
title_en: "ATLAS: Expert-Guided Sustainable Satellite Backhaul for Off-Grid Wildlife Monitoring"
title_zh: "ATLAS：面向离网野生动物监测的专家引导型可持续卫星回传"
url: "https://arxiv.org/abs/2610.24910"
source_quality: abstract-only
topics: [LEO-backhaul, off-grid, edge-to-cloud, constrained-reinforcement-learning, upload-scheduling, solar-energy, wildlife-monitoring]
topic_primary: sat-iot
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Fang, Zhang, Zhao, Chen, Chou, Xu, Pan and Liu (arXiv 2610.24910, submitted 17 October 2026, eess.SY; accepted at ACM SIGOPS ATC 2026) address remote wildlife monitoring, where cameras and sensors run far from grid power and terrestrial networks.

Low Earth orbit satellite links can provide connectivity, but they draw significant power and offer variable bandwidth, and solar energy is intermittent. The abstract notes that existing systems either trigger on motion, which wastes limited energy and bandwidth on environmental artifacts, or use fixed vision models that cannot adapt to changing expert goals.

The authors present ATLAS, an edge-to-cloud system that treats satellite bandwidth as a scarce resource. It uses foundation models to convert expert intent into scoring logic, weighs semantic relevance against environmental and energy conditions, and uses a constrained reinforcement-learning scheduler to decide which clips to upload and when.

In a deployment of more than six months at 18 off-grid salmon-monitoring river sites, ATLAS achieved 87.4% mean clip-selection accuracy, 26.4 percentage points above the baseline mean, and maintained near-continuous operation through low-solar periods, where baselines had 16.0% downtime.

## Summary (ZH)

Fang、Zhang、Zhao、Chen、Chou、Xu、Pan 和 Liu（arXiv 2610.24910，2026 年 10 月 17 日提交，eess.SY；已被 ACM SIGOPS ATC 2026 接收）研究偏远地区的野生动物监测，相关摄像头和传感器远离电网和地面网络。

低轨卫星链路可提供连接，但功耗较大、带宽波动，且太阳能供电间歇。摘要指出，现有系统要么依赖运动触发，在环境伪影引起的触发上浪费有限的能量和带宽，要么使用固定的视觉模型，无法适应专家目标的变化。

作者提出 ATLAS，一个边缘到云的系统，将卫星带宽视为稀缺资源。它利用基础模型把专家意图转换为评分逻辑，在语义相关性与环境及能量条件之间权衡，并使用带约束的强化学习调度器决定上传哪些视频片段以及何时上传。

在 18 个离网鲑鱼监测河流站点进行的六个多月部署中，ATLAS 的平均片段选择准确率为 87.4%，比基线平均值高 26.4 个百分点，并在低日照时段保持近乎连续运行，而基线的停机比例为 16.0%。

## Key technical points (EN)

- **Problem**: power- and bandwidth-limited LEO backhaul for off-grid camera sensors with intermittent solar supply.
- **Design**: edge-to-cloud; foundation models turn expert intent into scoring logic; semantic relevance traded against environmental and energy conditions.
- **Scheduler**: constrained reinforcement learning decides which clips to upload and when.
- **Deployment**: more than six months, 18 off-grid salmon-monitoring river sites.
- **Results**: 87.4% mean clip-selection accuracy (+26.4 points over baseline mean); near-continuous operation in low-solar periods versus 16.0% baseline downtime.

## Key technical points (ZH)

- **问题**：离网摄像传感器在间歇太阳能供电下的功率与带宽受限 LEO 回传。
- **设计**：边缘到云；基础模型将专家意图转为评分逻辑；在语义相关性与环境及能量条件间权衡。
- **调度器**：带约束的强化学习决定上传哪些片段及上传时机。
- **部署**：六个多月，18 个离网鲑鱼监测河流站点。
- **结果**：平均片段选择准确率 87.4%（比基线平均值高 26.4 个百分点）；低日照时段近乎连续运行，基线停机 16.0%。

## Why it matters / what's new (EN)

The paper frames LEO satellite upload as an energy- and bandwidth-scheduling problem for remote sensors and reports results from a field deployment of more than six months. Figures are those stated in the abstract.

## Why it matters / what's new (ZH)

论文把 LEO 卫星上传视为远程传感器的能量与带宽调度问题，并给出六个多月现场部署的结果。数据均来自摘要。

## Images

None.
