---
id: 2026-11-10_arxiv-federated-semantic-communication-over-mac-simultaneous-transmitters
date_published: 2026-10-27
date_found: 2026-11-10
technology: edge-ai
type: academic-paper
title_en: "Federated learning for semantic communication over a multiple-access channel: simultaneous transmitters train together and cut training overhead"
title_zh: "多址信道上的联邦语义通信：同时发送的多个发送端联合训练，降低训练开销"
url: "https://arxiv.org/abs/2610.37951"
source_quality: full
topics: [semantic-communication, federated-learning, multiple-access-channel, personalised-encoder, data-imbalance]
topic_primary: edge-federated-learning
topics_secondary: [task-oriented-communication]
novelty_score: 2
---

## Summary (EN)

The paper presents a federated-learning framework for semantic communication over a multiple-access channel, in which several distributed transmitters send end-to-end learned semantic representations to one receiver at the same time. Feature extraction, compression, wireless transmission and semantic inference are optimised jointly. Because the transmissions share the channel, multiple transmitters can be trained concurrently within the same interval, which the authors say reduces training overhead and channel usage. Federated semantic aggregation uses shared and personalised encoder components, so transmitters with little local data can benefit from representations learned by transmitters with more. Link computed over: simulated Rayleigh-fading multiple-access channels; no over-the-air measurement.

## Summary (ZH)

论文提出多址信道上的联邦语义通信框架：多个分布式发送端同时向同一接收端发送端到端学习得到的语义表示，特征提取、压缩、无线传输与语义推理联合优化。由于发送共享信道，多个发送端可在同一时段内并发训练，作者称这降低了训练开销和信道占用。联邦语义聚合采用共享与个性化编码器组件，使本地数据少的发送端也能受益于数据多的发送端所学到的表示。所经链路：仿真瑞利衰落多址信道，无空口实测。

## Key technical points (EN)

- Setting: multiple transmitters, one receiver, simultaneous transmission over the MAC with learned semantic encoders and a task-inference receiver.
- Training: federated semantic aggregation with shared plus personalised encoder parts, intended for transmitters with heterogeneous amounts of data.
- Claimed benefits: lower training overhead and channel usage from concurrent training; high semantic inference accuracy under shared access; significant improvement under severe data imbalance.
- Evaluation: CIFAR-10 over Rayleigh-fading channels; at 20 dB (1K/50K data split) the small-data transmitter rises from about 0.39-0.40 to 0.74-0.80 accuracy (latent dimension 10/100) while the large-data transmitter loses up to about 5 points across the tested settings; two simultaneous transmitters halve the channel uses.

## Key technical points (ZH)

- 设置：多发送端、单接收端，通过 MAC 同时发送，使用学习得到的语义编码器与任务推理接收端。
- 训练：采用共享加个性化编码器部件的联邦语义聚合，面向数据量不均的发送端。
- 声称的收益：并发训练降低训练开销与信道占用；共享接入下保持较高语义推理精度；严重数据不均衡下显著改善。
- 评估：CIFAR-10、瑞利衰落信道；20 dB、1K/50K 数据划分下小数据发送端准确率由约 0.39-0.40 升至 0.74-0.80（潜变量维度 10/100），大数据发送端在所测设置中最多下降约 5 个百分点；两个同时发送的发送端使信道占用减半。

## Why it matters / what's new (EN)

It combines two lines already in this KB, federated learning and task-oriented semantic communication, by letting the shared channel itself carry concurrent training. In CIFAR-10 simulations over Rayleigh fading, the small-data transmitter's accuracy roughly doubles (about 0.39–0.40 to 0.74–0.80 at 20 dB, depending on latent dimension) under a 1K/50K data split, while the large-data transmitter loses up to about 5 points; the channel-use saving is quantified only as halving for two transmitters.

## Why it matters / what's new (ZH)

它把本知识库已有的两条线（联邦学习与任务导向语义通信）结合起来，让共享信道本身承载并发训练。在瑞利衰落下的 CIFAR-10 仿真中，1K/50K 数据划分时小数据发送端准确率约翻倍（20 dB 下约由 0.39–0.40 升至 0.74–0.80（随潜在维度而异）），大数据发送端最多下降约 5 个百分点；信道占用节省仅针对两个发送端量化为减半。

## Images

*(No redistributable images for this entry.)*
