---
id: 2026-10-12_arxiv-fedoag-over-the-air-federated-learning
date_published: 2026-09-26
date_found: 2026-10-12
type: academic-paper
technology: edge-ai
title_en: "Over-the-Air Federated Learning in Heterogeneous Mobile Wireless Networks"
title_zh: "异构移动无线网络中的空口联邦学习"
url: "https://arxiv.org/abs/2609.32832"
source_quality: abstract_only
topics: [federated-learning, over-the-air-computation, heterogeneous-fading, wireless]
topic_primary: edge-federated-learning
topics_secondary: [edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

Authors Ming Xiang, Nicolò Michelusi, Yonina C. Eldar and Lili Su address over-the-air (OTA) federated learning, which uses the natural superposition of simultaneously transmitted waveforms to perform model aggregation directly over the wireless channel, avoiding the need to decode each device's update separately. They note that existing OTA-FL approaches have a structural limitation under heterogeneous fading: they either enforce unbiased updates from all devices, which amplifies receiver noise because of the weakest channel, or allow partial device contributions, which is sensitive to fading-model mismatch and converges only to a biased objective.

Their proposed method, FedOAG, uses gradient normalization together with a mechanism the authors call "implicit gossiping" to automatically satisfy per-device energy constraints and to distribute contributions across devices evenly, without requiring every device to transmit on every round or assuming a specific fading model. The authors prove FedOAG converges to a stationary point of an unbiased non-convex objective at a rate of O(1/sqrt(T)), the best possible rate for any stochastic first-order method, and demonstrate its effectiveness through numerical experiments over simulated dynamic wireless conditions on real-world datasets. The paper is accepted at MobiHoc 2026.

## Summary (ZH)

作者 Ming Xiang、Nicolò Michelusi、Yonina C. Eldar 和 Lili Su 研究了空口（over-the-air, OTA）联邦学习问题：该方法利用多个设备同时传输的波形在无线信道上自然叠加的特性，直接在信道上完成模型聚合，从而避免对每个设备的更新分别解码。他们指出，现有的 OTA-FL 方法在异构衰落条件下存在结构性限制：要么强制所有设备提供无偏更新，这会因最弱信道而显著放大接收端噪声；要么允许部分设备贡献，这对衰落模型失配敏感，且只能收敛到有偏的目标。

他们提出的方法 FedOAG 结合梯度归一化与一种作者称为"隐式八卦（implicit gossiping）"的机制，能够自动满足每个设备的能量约束，并在设备间均匀分配贡献，而不需要每个设备在每一轮都传输、也不依赖特定的衰落模型假设。作者证明 FedOAG 以 O(1/√T) 的速率收敛到一个无偏非凸目标的稳定点，该速率是任何随机一阶方法可达到的最优速率，同时通过在模拟动态无线条件下对真实数据集进行的数值实验验证了其有效性。该论文已被 MobiHoc 2026 接收。

## Key technical points (EN)

- Over-the-air federated learning: exploits waveform superposition over the wireless channel for direct model aggregation, instead of decoding each device's update individually.
- Problem with prior OTA-FL under heterogeneous fading: enforcing unbiased updates from all devices amplifies receiver noise from the weakest channel; allowing partial participation is sensitive to fading-model mismatch and converges only to a biased objective.
- FedOAG mechanism: gradient normalization + "implicit gossiping" to satisfy per-device energy constraints and distribute contributions evenly, without requiring universal transmission or a specific fading model.
- Theoretical result: convergence to a stationary point of an unbiased non-convex objective at O(1/sqrt(T)), the best possible rate for any stochastic first-order method.
- Validated in numerical experiments over simulated dynamic wireless conditions on real-world datasets; accepted at MobiHoc 2026.

## Key technical points (ZH)

- 空口联邦学习：利用多设备波形在无线信道上的叠加特性直接完成模型聚合，而非逐个解码每个设备的更新。
- 现有 OTA-FL 在异构衰落条件下的问题：强制所有设备提供无偏更新会因最弱信道而显著放大接收端噪声；允许部分设备参与则对衰落模型失配敏感，且只能收敛到有偏的目标。
- FedOAG 机制：梯度归一化 + "隐式八卦"机制，自动满足各设备的能量约束并在设备间均匀分配贡献，无需所有设备都传输、也不依赖特定衰落模型。
- 理论结果：以 O(1/√T) 的速率收敛到无偏非凸目标的稳定点，该速率是任何随机一阶方法可达到的最优速率。
- 在模拟动态无线条件下对真实数据集进行了数值实验验证；已被 MobiHoc 2026 接收。

## Why it matters / what's new (EN)

FedOAG's contribution is to the over-the-air aggregation mechanism itself under heterogeneous fading, evaluated in numerical experiments over simulated dynamic wireless conditions.

## Why it matters / what's new (ZH)

FedOAG 的贡献在于异构衰落下的空口聚合机制本身，并通过在模拟动态无线条件下的数值实验进行评估。
