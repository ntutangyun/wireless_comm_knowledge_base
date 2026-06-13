---
id: 2026-06-13_arxiv-fr3-terrestrial-ntn-spectrum-sharing
date_published: 2026-06-11
date_found: 2026-06-13
technology: cellular
type: academic-paper
title_en: "Spectrum Sharing Across Terrestrial and Non-Terrestrial Services in the FR3 Upper Midband"
title_zh: "FR3 上中频段地面与非地面业务的频谱共享"
url: "https://arxiv.org/abs/2606.13511"
source_quality: abstract_only
topics: [6G, FR3, upper-midband, spectrum-sharing, NTN, ray-tracing, RFI]
topic_primary: cellular-spectrum
topics_secondary: [6g-vision, ntn]
novelty_score: 3
---

## Summary (EN)

This paper from the Northeastern University Institute for the Wireless Internet of Things group (Paolo Testolina, Ergest Beshaj, Michele Polese, Tommaso Melodia) studies the coexistence problem that will define 6G spectrum policy in the FR3 upper midband — the 7–24 GHz range that regulators are eyeing for terrestrial 6G but which is already occupied by incumbent satellite services. As 6G terrestrial deployments push into these bands, the radio-frequency interference (RFI) that ground base stations radiate upward toward satellites becomes the gating constraint on whether the two services can share the spectrum at all.

The authors quantify that interference with a physically realistic ray-tracing study rather than a statistical model. They build a large-scale 3D model of a real terrestrial deployment in the city of Boston and use an open-source ray-tracing solver to compute the aggregate RFI that tens of next-generation Node Bs (gNBs) generate toward satellites at varying elevation angles. The propagation model captures obstruction, clutter, diffraction, and reflections — the effects a simple line-of-sight budget would miss.

The headline finding is that the interference budget is dominated by paths the naive analysis ignores: antenna sidelobes and Non-Line-of-Sight (NLoS) reflected/diffracted paths contribute significantly to the RFI reaching satellites, not just the main-beam line-of-sight component. The aggregate interference is also strongly shaped by the spatial distribution of the base stations on the ground. The practical conclusion is that careful, interference-aware deployment design — base-station placement, antenna downtilt, and sidelobe management — can make terrestrial/non-terrestrial coexistence in FR3 practical, but only if sidelobe and NLoS contributions are explicitly accounted for.

## Summary (ZH)

本文来自美国东北大学无线物联网研究所（Paolo Testolina、Ergest Beshaj、Michele Polese、Tommaso Melodia），研究将定义 6G 频谱政策的 FR3 上中频段共存问题——即监管机构看好用于地面 6G、但已被现有卫星业务占用的 7–24 GHz 频段。随着 6G 地面网络进入这些频段，地面基站向上辐射到卫星的射频干扰（RFI）成为两类业务能否共享频谱的关键约束。

作者用物理上真实的射线追踪研究而非统计模型来量化该干扰。他们构建了波士顿市真实地面部署的大尺度三维模型，使用开源射线追踪求解器，计算数十个下一代基站（gNB）在不同仰角下对卫星产生的聚合 RFI。传播模型刻画了遮挡、杂波、绕射与反射——这些都是简单视距链路预算会遗漏的效应。

核心发现是：干扰预算由朴素分析忽略的路径主导——天线旁瓣与非视距（NLoS）反射/绕射路径对到达卫星的 RFI 贡献显著，而不仅仅是主瓣视距分量。聚合干扰还强烈取决于地面基站的空间分布。实践结论是：考虑干扰的精细部署设计（基站布点、天线下倾、旁瓣管理）可使 FR3 地面/非地面共存成为可能，但前提是显式计入旁瓣与 NLoS 贡献。

## Key technical points (EN)

- **Band:** FR3 upper midband, 7–24 GHz — the contested 6G candidate spectrum shared with incumbent satellite services.
- **Method:** large-scale 3D model of a real Boston deployment + open-source ray tracing (not a statistical interference model); captures obstruction, clutter, diffraction, reflections.
- **Scenario:** tens of gNBs radiating toward satellites at varying elevation angles; aggregate RFI computed per elevation.
- **Key result:** antenna sidelobes and NLoS paths contribute significantly to satellite-bound RFI — main-beam LoS alone underestimates interference.
- **Design lever:** base-station spatial distribution substantially influences interference; interference-aware placement/downtilt enables practical coexistence.

## Key technical points (ZH)

- **频段：** FR3 上中频段 7–24 GHz——与现有卫星业务共享的 6G 候选频谱争议区。
- **方法：** 波士顿真实部署的大尺度三维模型 + 开源射线追踪（非统计干扰模型）；刻画遮挡、杂波、绕射、反射。
- **场景：** 数十个 gNB 在不同仰角向卫星辐射；按仰角计算聚合 RFI。
- **关键结果：** 天线旁瓣与 NLoS 路径对到达卫星的 RFI 贡献显著——仅算主瓣视距会低估干扰。
- **设计杠杆：** 基站空间分布显著影响干扰；考虑干扰的布点/下倾可实现实用共存。

## Why it matters / what's new (EN)

This is the first entry in the KB to quantify terrestrial-6G / satellite coexistence in the FR3 upper midband with a full ray-traced urban model. It complements the cellular-spectrum bin's policy-level entries (e.g. the 6G spectrum-aggregation CA-vs-DC position paper, 2606.07944) with a propagation-physics result that has direct regulatory weight: the WRC/3GPP debate over opening 7–24 GHz to terrestrial 6G hinges precisely on the satellite-protection interference budgets this paper measures. The sidelobe/NLoS finding is the actionable part — it says coexistence studies that model only main-beam LoS will under-protect incumbents.

## Why it matters / what's new (ZH)

这是 KB 中首个用完整射线追踪城市模型量化 FR3 上中频段地面 6G 与卫星共存的条目。它为 cellular-spectrum 分箱中的政策级条目（如 6G 频谱聚合 CA-vs-DC 立场论文 2606.07944）补充了具有直接监管分量的传播物理结果：WRC/3GPP 关于是否向地面 6G 开放 7–24 GHz 的辩论，正取决于本文测量的卫星保护干扰预算。旁瓣/NLoS 发现是可操作的部分——它表明仅建模主瓣视距的共存研究会对现有业务保护不足。
