---
id: 2026-08-27_arxiv-pilotless-multi-ap-transformer-wifi-rx
date_published: 2026-08-25
date_found: 2026-08-27
technology: wifi
type: academic-paper
title_en: "A Transformer for Joint Multi-Receiver Pilotless Wi-Fi Decoding"
title_zh: "面向多接收点联合无导频 Wi-Fi 解码的 Transformer 接收机"
url: "https://arxiv.org/abs/2608.24584"
source_quality: full
topics: [multi-AP, joint-reception, neural-receiver, LDPC, OFDM, channel-estimation, Sionna]
topic_primary: mapc-cosr
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)

Xavier Tardy (IETR–CNRS 6164 / CentraleSupélec and Orange Research), Grégoire Lefebvre and Apostolos Kountouris (Orange Research, Grenoble), and Haïfa Farès and Amor Nafkha (IETR–CentraleSupélec, Cesson-Sévigné) ask a question that only becomes reasonable once multiple APs can listen to the same uplink: **can a Wi-Fi receiver drop pilot symbols entirely, and buy back the lost channel knowledge from spatial diversity instead of from overhead?** The paper (arXiv 2608.24584, submitted 25 Aug 2026, a 4-page summary submitted to URSI GASS 2026) answers yes — but only above two cooperating APs.

The receiver is a self-attention Transformer that tokenises the received signal as one token per **(access point, subcarrier)** pair. Each token's features are the real and imaginary parts of the received sample at that AP/subcarrier plus the local noise variance — no channel estimate, no pilot-derived reference. With 72 subcarriers and up to 5 APs, that is up to 360 tokens per OFDM symbol. Tokens are linearly projected to a 64-dimensional embedding, given a positional encoding carrying the subcarrier index (so the model retains frequency structure), and processed by four encoder layers with four attention heads each. Because attention runs over the whole token set at once, the model can learn correlations *across APs and across subcarriers jointly* rather than combining per-AP estimates after the fact. The per-AP representations are averaged, then a two-layer MLP emits bit-wise log-likelihood ratios that feed a standard rate-2/3 LDPC decoder — so the neural block replaces channel estimation, equalisation and demapping, but leaves the standard FEC path untouched.

Evaluation uses Sionna RT ray tracing over a 3D indoor scene ("Box–Two–Screens") so that the geographically separated APs see genuinely different reflection and diffraction structure rather than i.i.d. fading. Configuration is 72 subcarriers with 16-QAM, 100,000 independent channel realisations per AP count from 1 to 5, and a 20.7-million-bit test set to make 10⁻⁵ BER estimates meaningful. The baseline is a single-link receiver with *perfect* channel knowledge and maximum-ratio combining.

The results have a clear threshold shape. One AP simply fails — no waterfall region, coded BER stuck around 10⁻¹, confirming that pilotless operation is not a single-link proposition. Two APs reach 10⁻³ at roughly 8 dB Eb/N₀, comparable to the idealised baseline. Three APs hit 10⁻³ at 6–7 dB, a 2–3 dB gain, and four to five APs reach 10⁻⁵ at ~6 dB and ~4 dB respectively — beating a baseline that was given perfect CSI. On top of that, the pilotless design recovers the two pilot columns per 14 OFDM symbols that the baseline spends, converting them into data-carrying capacity at equal Eb/N₀. The authors are candid about the costs: attention is O(N²_token · d_model), well above a linear model-based receiver; the study covers single-user uplink with ideal synchronisation only; and they flag structured (axial) attention as the route to embedded deployment.

## Summary (ZH)

Xavier Tardy（IETR–CNRS 6164 / CentraleSupélec 与 Orange Research）、Grégoire Lefebvre 与 Apostolos Kountouris（Orange Research，格勒诺布尔）、以及 Haïfa Farès 与 Amor Nafkha（IETR–CentraleSupélec，Cesson-Sévigné）提出了一个只有在"多个 AP 能同时侦听同一条上行"之后才成立的问题：**Wi-Fi 接收机能否完全丢弃导频符号，用空间分集而不是开销来换回丢失的信道信息？** 这篇论文（arXiv 2608.24584，2026 年 8 月 25 日提交，为投往 URSI GASS 2026 的 4 页摘要论文）给出的答案是肯定的——但前提是协作 AP 数超过两个。

该接收机是一个自注意力 Transformer，把接收信号按 **（接入点，子载波）** 对切分成 token。每个 token 的特征是该 AP / 子载波上接收样本的实部与虚部，外加本地噪声方差——没有信道估计，也没有任何来自导频的参考。在 72 个子载波、最多 5 个 AP 的配置下，每个 OFDM 符号最多产生 360 个 token。Token 经线性投影到 64 维嵌入，叠加携带子载波索引的位置编码（从而保留频域结构），再由 4 层、每层 4 个注意力头的编码器处理。由于注意力一次性作用于全部 token，模型可以**跨 AP 与跨子载波联合**学习相关性，而不是先做逐 AP 估计再事后合并。各 AP 的表示经平均后，由一个两层 MLP 输出逐比特对数似然比，直接送入标准 2/3 码率 LDPC 译码器——也就是说，神经网络模块替换了信道估计、均衡与解映射，而标准 FEC 通路保持不变。

评测使用 Sionna RT 在 3D 室内场景（"Box–Two–Screens"）中做射线追踪，从而让地理上分离的多个 AP 看到真实不同的反射与绕射结构，而非独立同分布衰落。配置为 72 子载波、16-QAM，AP 数从 1 到 5 各生成 10 万个独立信道实现，测试集达 2070 万比特，以使 10⁻⁵ 量级的误码率估计有意义。基线是拥有**完美**信道信息并采用最大比合并的单链路接收机。

结果呈现出清晰的门限特征。单 AP 直接失效——没有瀑布区，编码后误码率停在 10⁻¹ 附近，说明无导频方案在单链路下不成立。两个 AP 在约 8 dB Eb/N₀ 下达到 10⁻³，与理想化基线相当。三个 AP 在 6–7 dB 达到 10⁻³，增益 2–3 dB；四到五个 AP 分别在约 6 dB 与约 4 dB 达到 10⁻⁵——超过了被赋予完美 CSI 的基线。此外，无导频设计还省下基线中每 14 个 OFDM 符号占用的 2 列导频，在相同 Eb/N₀ 下把它们转化为承载数据的容量。作者也坦率列出代价：注意力复杂度为 O(N²_token · d_model)，明显高于基于模型的线性接收机；研究仅覆盖理想同步下的单用户上行；并指出结构化（轴向）注意力是走向嵌入式部署的方向。

## Key technical points (EN)

- **Tokenisation is the design idea**: one token per (AP, subcarrier), features = {Re, Im, noise variance}. Up to 360 tokens per OFDM symbol at 72 subcarriers × 5 APs. Positional encoding carries subcarrier index only.
- **Joint, not post-hoc, combining**: full self-attention over the whole (AP × subcarrier) token set lets the model exploit cross-AP *and* cross-subcarrier structure in one pass, instead of estimating each link then combining.
- **Standard FEC preserved**: output is bit-wise LLRs into an off-the-shelf rate-2/3 LDPC decoder — the neural block absorbs channel estimation + equalisation + demapping only.
- **Hard threshold at 2 APs**: 1 AP has no waterfall region (coded BER ≈ 10⁻¹); 2 APs match the perfect-CSI MRC baseline at 10⁻³/≈8 dB; 3 APs gain 2–3 dB; 4–5 APs reach 10⁻⁵ at ≈6 dB / ≈4 dB, beating the idealised baseline.
- **Overhead recovered**: baseline spends 2 pilot columns per 14 OFDM symbols; the pilotless receiver converts that into data capacity at equal Eb/N₀.
- **Realistic channels**: Sionna RT ray tracing on a 3D indoor scene, so separated APs see genuinely decorrelated reflection/diffraction paths; 100k realisations per AP count, 20.7 M-bit test set.
- **Stated limits**: O(N²_token · d_model) attention cost, single-user uplink only, ideal synchronisation assumed. Axial/structured attention proposed for embedded deployment.

## Key technical points (ZH)

- **Token 化是核心设计**：每个（AP，子载波）对一个 token，特征为 {实部, 虚部, 噪声方差}。72 子载波 × 5 AP 时每个 OFDM 符号最多 360 个 token；位置编码只携带子载波索引。
- **联合合并而非事后合并**：在整个（AP × 子载波）token 集合上做全自注意力，使模型能在一次前向中同时利用跨 AP 与跨子载波的结构，而不是先逐链路估计再合并。
- **保留标准 FEC**：输出为逐比特 LLR，送入现成的 2/3 码率 LDPC 译码器——神经模块只吸收了信道估计 + 均衡 + 解映射。
- **2 个 AP 是硬门限**：单 AP 无瀑布区（编码后误码率约 10⁻¹）；2 AP 在 10⁻³ / 约 8 dB 处与完美 CSI 的 MRC 基线持平；3 AP 增益 2–3 dB；4–5 AP 分别在约 6 dB / 约 4 dB 达到 10⁻⁵，超过理想化基线。
- **开销回收**：基线每 14 个 OFDM 符号消耗 2 列导频；无导频接收机在相同 Eb/N₀ 下把这部分转为数据容量。
- **真实信道**：在 3D 室内场景上用 Sionna RT 做射线追踪，使分离的 AP 看到真正去相关的反射/绕射路径；每个 AP 数 10 万个实现，测试集 2070 万比特。
- **明示局限**：注意力复杂度 O(N²_token · d_model)、仅单用户上行、假设理想同步。作者提出以轴向/结构化注意力走向嵌入式部署。

## Why it matters / what's new (EN)

The `mapc-cosr` bin has so far been about *transmit-side* multi-AP coordination — coordinated spatial reuse, coordinated beamforming, NPCA, DRU, and the MAPC configuration-generation work in `2026-08-06_arxiv-fm4wifi-flow-matching-cosr` and `2026-08-03_ieee-mentor-tgbp-digest`-era TGbn traffic. This is the bin's first entry arguing the *receive* side: if several APs already hear the same station, the coordination dividend need not be spent on scheduling who transmits — it can be spent on removing a PHY overhead that has been treated as fixed since OFDM Wi-Fi began.

**Precedence note (added after publication).** This paper is not the first Transformer-based joint multi-AP uplink receiver. arXiv **2602.04728** ("Cross-Attention Transformer for Joint Multi-Receiver Uplink Neural Decoding", February 2026) already performed joint multi-AP OFDM uplink decoding without explicit channel estimates and explicitly reported robustness under *sparse* pilots, six months earlier. The present 4-page URSI summary builds on that line rather than opening it; its distinct contribution is the sharper claim — pilots dropped **entirely**, with a measured hard threshold at two cooperating APs — plus the ray-traced evaluation. The earlier paper is not yet a KB entry and is queued for ingest; `novelty_score` here was corrected 3 → 2 once the precedent surfaced.

It also lands next to two adjacent entries and is worth reading against both. `2026-08-27_etri-ai-ran-neural-receiver-6g` covers the analogous neural-receiver push on the cellular side, where AI-RAN work has been pursuing learned demodulation for longer — the Wi-Fi framing here is distinguished by making multi-AP reception, not model size, the enabling resource. And `2026-08-26_arxiv-ray-traced-rss-fingerprint-localization` used the same Sionna RT digital-twin methodology for a completely different purpose (fingerprint augmentation for localisation), which is a sign that ray-traced synthetic channels are becoming the default evaluation substrate for Wi-Fi ML work rather than a novelty in themselves. Two cautions when weighing the result: this is a 4-page conference summary, and the reported wins are against a *single-link* perfect-CSI baseline, not against a multi-AP model-based joint receiver — so the comparison isolates the value of multi-AP reception, not the value of the Transformer over a classical joint-processing alternative.

## Why it matters / what's new (ZH)

`mapc-cosr` 分类此前关注的都是**发端**多 AP 协调——协调空间复用、协调波束成形、NPCA、DRU，以及 `2026-08-06_arxiv-fm4wifi-flow-matching-cosr` 与同期 TGbn 文稿中的 MAPC 配置生成工作。本文是该分类中第一条从**收端**立论的条目：既然多个 AP 本来就能听到同一个站点，那么协调带来的红利未必要花在"调度谁发"上——它可以用来消除一项自 OFDM Wi-Fi 诞生以来就被当作固定成本的 PHY 开销。"超过两个 AP 之后导频即为可选"这一提法，与 KB 中现有的任何机制都是不同的杠杆。

它同时紧邻两条条目，值得对照阅读。`2026-08-27_etri-ai-ran-neural-receiver-6g` 记录的是蜂窝侧同类的神经接收机推进——AI-RAN 方向在学习式解调上起步更早；而本文的 Wi-Fi 立论差异在于：使之可行的资源是**多 AP 接收**，而不是模型规模。`2026-08-26_arxiv-ray-traced-rss-fingerprint-localization` 则用同样的 Sionna RT 数字孪生方法服务于完全不同的目的（为定位做指纹增强）——这说明射线追踪合成信道正在成为 Wi-Fi 机器学习工作的默认评测底座，其本身已不再是新意所在。评估结果时有两点需谨慎：这是一篇 4 页会议摘要论文；且所报增益是相对**单链路**完美 CSI 基线，而非相对多 AP 的基于模型联合接收机——因此该对比隔离出的是多 AP 接收的价值，而不是 Transformer 相对经典联合处理方案的价值。
