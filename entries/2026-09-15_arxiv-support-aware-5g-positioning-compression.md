---
id: 2026-09-15_arxiv-support-aware-5g-positioning-compression
date_published: 2026-09-11
date_found: 2026-09-15
type: academic-paper
technology: cellular
title_en: "Support-Aware Telemetry Compression for 5G Positioning via Conditional Conflict Graphs"
title_zh: "基于条件冲突图的5G定位支持感知遥测压缩"
url: "https://arxiv.org/abs/2609.12933"
source_quality: full
topics: [5G-NR, positioning, NRPPa, TDoA, telemetry-compression, OpenAirInterface]
topic_primary: 5g-nr
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Mohammad Reza Deylam Salehi and Hakima Chaouchi address a bandwidth-efficiency problem in 5G positioning: geographically separated Transmission/Reception Points (TRPs) report full quantized range measurements to the Location Management Function (LMF) even when the requesting application only needs a coarse location region. They reformulate this as a distributed zero-error function-computation problem — each TRP need only transmit an index sufficient for the LMF to reproduce the correct service-cell decision, not the raw measurement. Because positioning geometry produces a sparse, non-rectangular set of jointly feasible measurement tuples, naively building each TRP's compression codebook independently is not guaranteed to remain jointly decodable at the LMF. The paper's core contribution is a "conditional conflict graph" that exactly characterizes which single-terminal codebook updates preserve joint decodability when the other TRPs' codebooks are held fixed (Theorem 1: the update is zero-error if and only if the conditional graph has no self-loops and the new codebook properly colors its non-loop edges), plus an alternating construction algorithm (DSATUR graph coloring per terminal, in rounds, with a global decoder-conflict check after every proposed update) that builds a jointly valid multi-TRP codebook set.

The scheme is evaluated two ways. In a controlled three-TRP study (design grid of 220×220 UE positions, 120 quantization bins per TRP, raw reporting cost 6.907 bits), the resulting codebooks pass a complete decoder-conflict scan across all 12,772 distinct feasible measurement tuples and reach an ideal reporting rate of 5.38–5.44 bits per epoch per TRP for service cells up to 100 m — a 21.3–22.1% reduction versus raw reporting and better than a globally valid interval-based baseline (6.56–6.87 bits). In a second, measured six-base-station downlink TDoA study using a synchronized indoor 5G dataset (Fraunhofer IIS; 18,863 training bursts, 15,722 independent test bursts, 24 quantization symbols per base station), 83.77% of test bursts reproduce a measurement tuple already seen in the training support, and for that recurrent subset the codebooks preserve the service decision exactly while cutting the ideal rate by 22.8–35.6% across 2–8 m service-cell grids. The paper also shows the same feasible-tuple structure doubles as a single-epoch geometric-consistency check: under an injected 24 m range-equivalent bias at one TRP, the flag rate for infeasible tuples rises from a 0.32–2.06% nominal baseline (depending on cell size) to 4.9–53.9%. The authors identify the concrete integration points into the existing NRPPa UL-TDOA reporting procedure (an experimental Measurement Report extension carrying codebook ID and color index rather than the native TRP measurement) and exercise the extraction-to-lookup path on a single gNB–UE OAI RFsimulator link: a single Timing-Advance value from a completed Random Access procedure was converted to its native bin (bin 102, mapped to color 3), validating only the software extraction-and-lookup step, not end-to-end positioning or NRPPa compression, since the single-link setup carries no positioning geometry. The modified OAI gNB/LMF prototype, synchronized multi-TRP OAI trace replay, and NRPPa transport of the codebook ID/color index itself remain future work.

## Summary (ZH)

Mohammad Reza Deylam Salehi 与 Hakima Chaouchi 针对 5G 定位中的带宽效率问题展开研究：地理上分散的收发点（TRP）即便在应用方仅需粗粒度位置区域的情况下，仍会向位置管理功能（LMF）上报完整的量化测距数据。作者将该问题重新表述为一个分布式零错误函数计算问题——每个 TRP 只需发送一个足以让 LMF 重建出正确服务网格决策的索引，而非原始测量值。由于定位几何结构会产生稀疏且非矩形的联合可行测量元组集合，若各 TRP 独立构建各自的压缩码本，并不能保证在 LMF 端仍具有联合可译性。论文的核心贡献是一种"条件冲突图"，它精确刻画了在固定其余 TRP 码本的情况下，单个终端的码本更新是否能保持联合可译性（定理 1：当且仅当条件图不含自环、且新码本对其非自环边正确着色时，更新才是零错误的），并配合一种交替构造算法（对每个终端按轮次进行 DSATUR 图着色，并在每次拟更新后进行全局解码器冲突检验），构建出联合有效的多 TRP 码本集合。

该方案通过两种方式进行了评估。在受控的三 TRP 研究中（220×220 用户设备位置的设计网格，每个 TRP 120 个量化区间，原始上报开销为 6.907 比特），所得码本在全部 12,772 个不同的可行测量元组上通过了完整的解码器冲突扫描，在服务网格尺寸不超过 100 米时达到每周期每 TRP 5.38–5.44 比特的理想上报速率——相较原始上报降低 21.3–22.1%，也优于一种全局有效的区间基线方案（6.56–6.87 比特）。在第二项基于实测数据的六基站下行 TDoA 研究中（采用 Fraunhofer IIS 的同步室内 5G 数据集，18,863 条训练突发、15,722 条独立测试突发，每基站 24 个量化符号），83.77% 的测试突发所对应的测量元组已出现在训练所得的支持集中；对于这部分可复现的子集，码本能够精确保持服务决策不变，同时在 2–8 米的服务网格尺度上将理想速率降低 22.8–35.6%。论文还表明，同一可行元组结构可同时充当单周期几何一致性检测手段：在某一 TRP 上注入相当于 24 米测距偏差的干扰后，不可行元组的标记率从 0.32–2.06%（取决于网格尺寸的基线水平）上升至 4.9–53.9%。作者明确指出了将该机制接入现有 NRPPa UL-TDOA 上报流程的具体方式（提出对测量报告消息进行实验性扩展，携带码本 ID 与颜色索引，而非原生 TRP 测量值），并在单条 gNB–UE 的 OAI RFsimulator 链路上验证了"提取—查表"这一环节：将一次完成随机接入流程所得的 Timing Advance 值转换为其原生区间（区间 102，映射为颜色 3）；由于该单链路设置不含定位几何关系，此验证仅覆盖软件层面的提取与查表，而非端到端定位或 NRPPa 压缩本身。经修改的 OAI gNB/LMF 原型、多 TRP 同步 OAI 回放，以及码本 ID/颜色索引本身的 NRPPa 传输，仍属未来工作。

## Key technical points (EN)

- Reformulates 5G positioning telemetry reporting as a distributed zero-error function-computation problem: each TRP transmits an index, not a raw measurement, sufficient for the LMF to reconstruct the correct service-cell decision.
- Introduces the "conditional conflict graph" (Theorem 1) as the exact criterion for whether a single-terminal codebook update preserves joint zero-error decodability while other TRPs' codebooks stay fixed; construction uses DSATUR coloring per terminal with a global decoder-conflict verification after every update.
- Three-TRP controlled study: 12,772 distinct feasible measurement tuples out of a 220×220 design grid, 120-bin quantization; ideal rate 5.38–5.44 bits/epoch/TRP for ≤100 m cells vs. 6.91 bits raw and 6.56–6.87 bits for an interval-based baseline (21.3–22.1% savings).
- Six-base-station measured downlink TDoA study (Fraunhofer IIS indoor 5G dataset, 18,863 train / 15,722 test bursts, 24 symbols/BS): 83.77% of test bursts recur within the learned support; for that subset, rate reductions of 22.8–35.6% across 2–8 m service grids with exact service-decision preservation.
- The same feasible-tuple set doubles as a geometric-consistency/anomaly check: under a 24 m injected range-equivalent bias at one TRP, infeasible-tuple flag rates rise from a 0.32–2.06% nominal baseline (these zero-bias rates are finite-grid support-miss rates, not RF false-alarm probabilities) to 4.9–53.9% depending on cell size.
- Concrete standards integration point: an experimental extension to the NRPPa UL-TDOA Measurement Report message carrying codebook ID + color index instead of the native UL-RTOA value, plus three explicit safeguards (fallback on unknown/stale codebook ID, fallback on out-of-alphabet symbols, OAM-coordinated codebook activation).
- Exercised the extraction-to-lookup path on a single gNB–UE OAI RFsimulator link: one Timing-Advance sample from a completed Random Access procedure, converted to native bin 102 and mapped to color 3 — software extraction and lookup only, not end-to-end positioning or NRPPa compression. The modified OAI gNB/LMF prototype, synchronized multi-TRP OAI replay, and NRPPa transport of the extension itself remain future work.
- Funded by the French government via the EU IPCEI ME/CT programme; no conference/journal acceptance stated in the arXiv metadata.

## Key technical points (ZH)

- 将 5G 定位遥测上报重新表述为分布式零错误函数计算问题：每个 TRP 只需传输一个索引（而非原始测量值），且该索引须足以让 LMF 重建出正确的服务网格决策。
- 提出"条件冲突图"（定理 1），作为判断在固定其余 TRP 码本时，单个终端码本更新是否保持联合零错误可译性的精确判据；构造过程对每个终端逐轮采用 DSATUR 图着色，并在每次拟更新后执行全局解码器冲突验证。
- 三 TRP 受控研究：在 220×220 的设计网格、每 TRP 120 个量化区间下，共有 12,772 个不同的可行测量元组；在服务网格不超过 100 米时，理想速率为每周期每 TRP 5.38–5.44 比特，相比原始上报的 6.91 比特和区间基线方案的 6.56–6.87 比特，分别降低 21.3–22.1%。
- 六基站实测下行 TDoA 研究（Fraunhofer IIS 室内 5G 数据集，18,863 条训练突发 / 15,722 条测试突发，每基站 24 个量化符号）：83.77% 的测试突发在已学习的支持集中重现；对该子集而言，在 2–8 米的服务网格尺度上可将速率降低 22.8–35.6%，同时精确保持服务决策不变。
- 同一可行元组集合还可作为几何一致性/异常检测手段：在某 TRP 上注入相当于 24 米测距偏差的干扰后，不可行元组的标记率会从基线的 0.32–2.06%（视网格尺寸而定；该零偏置基线是有限网格下的"支持集缺失率"，而非射频虚警概率）上升至 4.9–53.9%。
- 明确给出了接入现有标准的具体方式：对 NRPPa UL-TDOA 测量报告消息进行实验性扩展，携带码本 ID 与颜色索引以替代原生 UL-RTOA 数值，并配套三项显式保护机制（码本 ID 未知/过期时回退、符号超出字母表时回退、码本激活由运维管理协调）。
- 在单条 gNB–UE 的 OAI RFsimulator 链路上验证了"提取—查表"环节：取一次完成随机接入所得的 Timing Advance 样本，转换为原生区间 102 并映射为颜色 3——仅验证软件层面的提取与查表，而非端到端定位或 NRPPa 压缩；经修改的 OAI gNB/LMF 原型、多 TRP 同步 OAI 回放及扩展本身的 NRPPa 传输仍属未来工作。
- 项目由法国政府通过欧盟 IPCEI ME/CT 计划资助；arXiv 元数据中未注明会议或期刊接收情况。

## Why it matters / what's new (EN)

This KB's existing positioning-adjacent cellular entries (e.g. the 2026-08-15 CRLB-based NR-NTN SSB positioning analysis) are theoretical accuracy studies of the positioning signal itself. This paper instead attacks the reporting layer that carries positioning measurements from TRPs to the LMF — a distinct, practically-oriented problem (telemetry bandwidth, not estimation accuracy) with a concrete integration sketch (an experimental extension of the NRPPa Measurement Report message, not a standardized field) and both a controlled and a measured-data evaluation. It is the first entry in this KB's cellular coverage to combine positioning telemetry compression with a built-in anomaly/consistency check derived from the same mechanism.

## Why it matters / what's new (ZH)

本知识库现有的定位相关蜂窝条目（例如 2026-08-15 收录的基于 CRLB 的 NR-NTN SSB 定位分析）关注的是定位信号本身的理论精度问题。本文则聚焦于将定位测量从 TRP 传送至 LMF 的上报层——这是一个不同的、更偏工程实践的问题（关注遥测带宽而非估计精度），并给出了具体的接入设想（对 NRPPa 测量报告消息的实验性扩展，而非已标准化字段），同时兼具受控实验与实测数据评估。这是本知识库蜂窝板块中首个将定位遥测压缩与同一机制内生的异常/一致性检测能力相结合的条目。

## Images

![System model: TRP measurements are quantized to code indices decoded by the LMF into the same service-grid cell as the uncompressed pipeline | 系统模型：TRP 测量值被量化为码字索引，并由 LMF 解码至与未压缩流程相同的服务网格单元](https://arxiv.org/html/2609.12933v1/fig/sys-mod-paper.png)
