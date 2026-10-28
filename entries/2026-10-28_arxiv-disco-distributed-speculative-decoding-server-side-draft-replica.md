---
id: 2026-10-28_arxiv-disco-distributed-speculative-decoding-server-side-draft-replica
date_published: 2026-10-25
date_found: 2026-10-28
technology: edge-ai
type: academic-paper
title_en: "DISCO: device-server speculative decoding without vocabulary-scale uplink or downlink transfer"
title_zh: "DISCO：无需词表规模传输的端-云推测解码"
url: "https://arxiv.org/abs/2610.35957"
source_quality: full
topics: [speculative-decoding, device-server-collaboration, small-language-model, communication-efficiency, rejection-sampling, bandwidth]
topic_primary: compute-offloading
topics_secondary: [on-device-inference, edge-ai-networking]
novelty_score: 2
---

## Summary (EN)

This KAIST paper targets device-server collaborative LLM inference, where a small draft model on the device proposes tokens and a large target model on the server verifies them. Earlier distributed speculative decoding schemes either send the full draft-token distribution over the whole vocabulary from device to server (DSD) or send the full target distribution back whenever a token is rejected (DSSD). Both payloads scale with vocabulary size, which hurts on slow links. DISCO keeps an identical copy of the draft small model on the server. On a rejection the server regenerates the draft-side distribution locally with one forward pass and performs the resampling itself, so the device uploads only drafted token indices and scalar probabilities, and the server returns only the final token and its position. The paper states that the exact target distribution is preserved.

The evaluation simulates the network (bandwidth from 1 to 100 Mbps, RTT 20 ms) on GSM8K, CNN/DailyMail and HumanEval, with 100 samples per dataset and three seeds, using OPT-125m/30B and Qwen2.5-0.5B/32B draft/target pairs. On GSM8K with Qwen2.5-0.5B/32B at 1 Mbps, speedup over plain autoregressive decoding is 1.34 to 1.63 for DISCO (draft length 2 to 8) versus 0.02 to 0.04 for DSD and 0.39 to 0.44 for DSSD; at 50 Mbps the gap narrows (DISCO 1.34 to 1.63, DSSD 1.29 to 1.55). DISCO therefore holds roughly 1.5x speedup even at the lowest bandwidth. An analytical latency model puts the break-even bandwidth, above which DISCO stops being advantageous, near 109 Mbps for the measured latency breakdown (about 1.5 ms per token of extra server-side draft computation).

## Summary (ZH)

这篇来自 KAIST 的论文面向端-云协同的大模型推理：设备端小草稿模型提出候选 token，服务器端大目标模型进行验证。此前的分布式推测解码方案要么由设备向服务器发送覆盖整个词表的完整草稿分布（DSD），要么在 token 被拒绝时由服务器回传完整目标分布（DSSD）。这两种负载都随词表规模增长，在慢速链路上代价很高。DISCO 在服务器端保留一份与设备端完全相同的草稿小模型。发生拒绝时，服务器用一次前向计算在本地重建草稿侧分布并自行完成重采样，因此设备只需上传草稿 token 索引和标量概率，服务器只回传最终 token 及其位置。论文声明可保持目标分布的精确性。

评测以仿真方式设置网络（带宽 1 至 100 Mbps，RTT 20 ms），数据集为 GSM8K、CNN/DailyMail 和 HumanEval，每个数据集 100 个样本、3 个随机种子，草稿/目标模型对为 OPT-125m/30B 与 Qwen2.5-0.5B/32B。以 GSM8K 上 Qwen2.5-0.5B/32B、1 Mbps 为例，相对普通自回归解码的加速比，DISCO（草稿长度 2 至 8）为 1.34 至 1.63，DSD 仅 0.02 至 0.04，DSSD 为 0.39 至 0.44；在 50 Mbps 时差距缩小（DISCO 1.34 至 1.63，DSSD 1.29 至 1.55）。因此即使在最低带宽下 DISCO 仍保持约 1.5 倍加速。解析时延模型给出，按实测时延分解（服务器端额外草稿计算约 1.5 ms/token），DISCO 优势消失的临界带宽约为 109 Mbps。

## Key technical points (EN)

- Payload per round: DSD uplink grows with gamma x vocabulary size; DSSD downlink grows with vocabulary on rejection; DISCO uplink is gamma x (token index + scalar probability) and downlink is one token plus a position.
- Cost of the idea: an extra draft-model forward pass on the server for each rejected round, and the requirement that device and server draft models share weights, tokenizer and decoding pipeline so their distributions match exactly.
- Network conditions are simulated rather than measured on a real radio link; the paper also reports GPU pairs (RTX 3090 and RTX 4090 with A100) in an average-speedup table, with DISCO ahead of DSSD there as well.
- Speedups are relative to autoregressive decoding of the target model; the paper does not report energy on the device side.

## Key technical points (ZH)

- 每轮传输量：DSD 上行随 gamma x 词表大小增长；DSSD 在拒绝时的下行随词表增长；DISCO 上行为 gamma x（token 索引 + 标量概率），下行仅为一个 token 加位置。
- 该思路的代价：每个被拒绝的轮次，服务器需额外做一次草稿模型前向计算；并且要求设备端与服务器端草稿模型的权重、分词器和解码流程一致，才能让分布完全匹配。
- 网络条件为仿真，并非真实无线链路实测；论文还在平均加速比表中给出 GPU 组合（RTX 3090 和 RTX 4090 与 A100），DISCO 同样领先于 DSSD。
- 加速比以目标模型自回归解码为基准；论文未报告设备侧能耗。

## Why it matters / what's new (EN)

For anyone splitting LLM inference between a phone or home device and a server, the interesting point is that the link, not compute, is what limits distributed speculative decoding, and vocabulary-sized payloads are the avoidable part. Trading a small amount of duplicate server compute for a payload that no longer depends on vocabulary size makes the scheme usable at 1 to 5 Mbps. The advantage is bounded: above roughly 100 Mbps the extra server computation outweighs the saved bits, and most results come from a simulated network (a single LAN-measured GPU-pair experiment reaches up to 1.92x).

## Why it matters / what's new (ZH)

对于需要在手机或家庭设备与服务器之间拆分大模型推理的人来说，值得注意的是：限制分布式推测解码的是链路而非算力，而词表规模的传输量是可以避免的部分。用少量重复的服务器计算换取不再依赖词表大小的传输量，使该方案在 1 至 5 Mbps 下仍可用。其优势有边界：超过约 100 Mbps 后，额外的服务器计算会抵消节省的比特；且多数结果来自仿真网络（仅有一组 LAN 实测的 GPU 对实验，加速最高达 1.92 倍）。

## Images

*(No redistributable images for this entry.)*
