---
id: 2026-06-30_arxiv-leostp-diffusion-traffic-prediction-leo
date_published: 2026-06-29
date_found: 2026-06-30
type: academic-paper
technology: satellite
title_en: "LEOSTP: A Spatio-Temporal Traffic Prediction Framework for LEO Satellite Networks"
title_zh: "LEOSTP：面向 LEO 卫星网络的时空流量预测框架"
url: "https://arxiv.org/abs/2606.29856"
source_quality: abstract_only
topics: [LEO, traffic-prediction, diffusion-model, Transformer, spatio-temporal]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 2
---

## Summary (EN)
LEOSTP is a **diffusion-model-based** framework for forecasting traffic in LEO satellite networks. The authors frame three difficulties unique to the LEO setting: highly complex temporal dynamics caused by satellites moving across regions, multivariate dependencies arising from multi-satellite collaboration, and strong spatial heterogeneity in demand. Conventional time-series predictors do not capture this combination because they assume a fixed spatial vantage point, whereas a LEO satellite's served region changes continuously as it orbits.

The architecture pairs a Transformer-based traffic feature extractor with an external **condition encoder** that injects geographic semantic information into the diffusion process, so the generative model is conditioned on where the satellite is and what region it currently serves. This lets the predictor account for the cross-regional movement that breaks stationary models.

In evaluation, LEOSTP outperforms both traditional statistical baselines (ARIMA, SVR) and classical sequence models (LSTM, Transformer) on prediction accuracy. For the KB this is the first **diffusion-model** traffic-forecasting entry in the satellite domain — distinct from the existing LEO routing / path-selection and traffic-engineering entries, which are optimization- or RL-based rather than generative-predictive.

## Summary (ZH)
LEOSTP 是一个基于**扩散模型（diffusion model）**的 LEO 卫星网络流量预测框架。作者归纳了 LEO 场景特有的三大难点：卫星跨区域运动导致的高度复杂时间动态、多星协作带来的多变量依赖，以及需求的强空间异质性。传统时序预测器假设固定的空间观测点，因而无法刻画上述组合——而 LEO 卫星所服务的区域随其轨道运动持续变化。

该架构将基于 Transformer 的流量特征提取器与一个外部**条件编码器**结合，把地理语义信息注入扩散过程，使生成模型以"卫星当前位置及其服务区域"为条件。这使预测器能够考虑打破平稳性模型的跨区域运动。

在评测中，LEOSTP 在预测精度上优于传统统计基线（ARIMA、SVR）与经典序列模型（LSTM、Transformer）。对知识库而言，这是卫星领域首个**扩散模型**流量预测条目——区别于库内已有的 LEO 路由/路径选择与流量工程条目（后者多为优化或强化学习方法，而非生成式预测）。

## Key technical points (EN)
- Diffusion model conditioned on geographic semantics for LEO traffic forecasting.
- Three target challenges: cross-regional satellite movement, multi-satellite multivariate dependency, spatial heterogeneity.
- Transformer feature extractor + external condition encoder feeding the diffusion process.
- Beats ARIMA, SVR, LSTM, and plain Transformer on accuracy.
- Authors: Shaoyou Ao, Yong Niu, Zhu Han, Cheng Li, Bo Ai. Submitted 2026-06-29.

## Key technical points (ZH)
- 以地理语义为条件的扩散模型，用于 LEO 流量预测。
- 三个目标难点：卫星跨区域运动、多星多变量依赖、空间异质性。
- Transformer 特征提取器 + 外部条件编码器驱动扩散过程。
- 在精度上优于 ARIMA、SVR、LSTM 及普通 Transformer。
- 作者：敖少友、牛勇、韩竹、李成、艾渤。提交于 2026-06-29。

## Why it matters / what's new (EN)
The satellite bin holds routing, ISL path-selection, and traffic-engineering entries, but no generative traffic-forecasting method. LEOSTP introduces the diffusion-model + geographic-conditioning pattern to the `sat-ai` bin, and frames why a moving-vantage-point predictor differs fundamentally from terrestrial spatio-temporal forecasting — a useful conceptual anchor for future LEO-AI entries.

## Why it matters / what's new (ZH)
卫星分类已有路由、ISL 路径选择与流量工程条目，但尚无生成式流量预测方法。LEOSTP 将"扩散模型 + 地理条件化"模式引入 `sat-ai` 分类，并阐明了移动观测点预测为何与地面时空预测存在本质差异——这为未来 LEO-AI 条目提供了有用的概念锚点。
