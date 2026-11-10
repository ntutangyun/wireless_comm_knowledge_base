---
id: 2026-11-10_arxiv-cloc-uwb-concurrent-transmissions-on-device
date_published: 2026-11-06
date_found: 2026-11-10
technology: uwb
type: academic-paper
title_en: "Beyond Feasibility: Efficient and Robust On-Device Localization with UWB Concurrent Transmissions (CLoc)"
title_zh: "超越可行性：基于 UWB 并发传输的高效鲁棒端侧定位（CLoc）"
url: "https://arxiv.org/abs/2611.09619"
source_quality: full
topics: [UWB, concurrent transmissions, DL-TDoA, 802.15.4z, STS, channel impulse response, DW3110, on-device localization]
topic_primary: uwb-ranging
topics_secondary: [uwb-security]
novelty_score: 4
---

## Summary (EN)

Enrico Soprana, Michael Stocker, Davide Vecchia, Matteo Trobinger, Carlo Alberto Boano and Gian Pietro Picco (University of Trento; Graz University of Technology) submitted arXiv 2611.09619 on 6 November 2026 (eess.SP, cross-listed cs.NI and eess.SY; submitted to IEEE Transactions on Mobile Computing). Concurrent transmissions (CTX) let a UWB tag range to, or self-localize from, several nodes with a single frame reception, because the receive timestamps of simultaneous transmitters can be read from the same channel impulse response (CIR). The paper argues that earlier CTX work demonstrated feasibility but has three gaps: it cannot run on the tag itself (CIR processing happens offline), it depends on setup-specific choices such as reserved empty CIR regions and peak thresholds, and it has only been shown in isolated setups with no other UWB devices active.

The authors address these with a redesign of the core CTX techniques and the use of IEEE 802.15.4z features. Hardware is the Qorvo DWM3001CDK (DW3110 radio plus nRF52833), channel 5 (6489.6 MHz, 499.2 MHz bandwidth), unlike earlier CTX systems built on the DW1000. The techniques cover high-resolution scheduling, main-responder identification, first-path detection and refinement; selectivity through STS key switching, in which the tag changes the STS key during reception so that the two CIR accumulators of the DW3000 family hold different responder sets (four responders with two per key); and efficient on-device processing through fast CIR amplitude calculation and a limited, DMA-parallelized CIR extraction over SPI.

These are combined in CLoc, a CTX-based downlink-TDoA system. In two testbeds (23 and 19 tag positions, 75 localization attempts each) the STS-based variant keeps rejection rates at 3.2 percent and 3.5 percent without interference and 5.2 percent and 6.3 percent with interfering UWB traffic, against 52.3 percent and 56.9 percent for the preamble-based variant under interference. The variant with dynamic responder selection reaches median position error of 17.2 cm and 17.1 cm in the two testbeds. On-device, CLoc uses less energy than conventional staggered DL-TDoA in all configurations, and less runtime in all but the preamble-based case in the cloves testbed; the abstract's gains of up to 44 percent in runtime and 85 percent in energy efficiency correspond to staggered DL-TDoA being up to 44 percent slower and using up to 85 percent more energy than CLoc, depending on configuration. The conclusions claim the first use "in the literature" of the 802.15.4z STS within CTX operation and describe CLoc as "the first on-device concurrent DL-TDoA system".

## Summary (ZH)

Enrico Soprana、Michael Stocker、Davide Vecchia、Matteo Trobinger、Carlo Alberto Boano 与 Gian Pietro Picco（特伦托大学；格拉茨工业大学）于 2026 年 11 月 6 日提交 arXiv 2611.09619（eess.SP，交叉列入 cs.NI、eess.SY；已投稿 IEEE Transactions on Mobile Computing）。并发传输（CTX）使 UWB 标签只需一次帧接收即可对多个节点测距或自定位，因为同时发射的多个节点的接收时间戳可从同一个信道冲激响应（CIR）读出。论文指出，此前的 CTX 工作证明了可行性，但存在三点不足：无法在标签自身运行（CIR 处理在线下完成）；依赖特定部署的选择（如预留 CIR 空白区域和峰值阈值）；只在没有其他 UWB 设备工作的孤立环境中验证。

作者通过重新设计核心 CTX 技术并利用 IEEE 802.15.4z 特性来解决这些问题。硬件为 Qorvo DWM3001CDK（DW3110 射频加 nRF52833），信道 5（6489.6 MHz，带宽 499.2 MHz），而此前 CTX 系统基于 DW1000。技术包括：高分辨率调度、主响应方识别、首径检测与细化；通过 STS 密钥切换实现选择性——标签在接收过程中更换 STS 密钥，使 DW3000 系列的两个 CIR 累加器分别对应不同响应方集合（每个密钥两个响应方，共四个）；以及端侧高效处理——快速 CIR 幅度计算，以及有限且利用 DMA 并行的 SPI CIR 提取。

这些技术组合成 CLoc，一个基于 CTX 的下行 TDoA 系统。在两个测试场地（分别 23 和 19 个标签位置，每个位置 75 次定位尝试）中，基于 STS 的变体在无干扰时拒绝率为 3.2% 与 3.5%，有 UWB 干扰流量时为 5.2% 与 6.3%，而基于前导码的变体在干扰下为 52.3% 与 56.9%。带动态响应方选择的变体在两个场地的定位误差中位数分别为 17.2 cm 与 17.1 cm。端侧方面，CLoc 在所有配置下能耗均低于常规错开式 DL-TDoA；运行时间除 cloves 场地的前导码配置外也更短；摘要称运行时间与能效方面的收益最多分别达 44% 和 85%（即错开式方案最多慢 44%、多耗能 85%）。结论声称这是文献中首次在 CTX 运行中使用 802.15.4z 的 STS，并称 CLoc 为“首个端侧并发 DL-TDoA 系统”。

## Key technical points (EN)

- **STS key switching** — the tag changes the STS key mid-reception so the two CIR accumulators of the DW3000 family hold different responder sets; four responders (two per key), enabling dynamic responder selection and rejection of unwanted UWB signals.
- **Preamble vs STS under interference** — rejection rate 52.3 / 56.9 percent (preamble) vs 5.2 / 6.3 percent (STS) in the two testbeds.
- **On-device CIR processing** — fast CIR amplitude calculation, bounded analysis and DMA-parallel SPI extraction on a DWM3001C (nRF52833).
- **CLoc results** — median position error about 17 cm with dynamic responder selection; staggered DL-TDoA is up to 44 percent slower and uses up to 85 percent more energy than CLoc (configuration-dependent) (abstract).
- **Platform** — Qorvo DW3110, channel 5, 64-symbol-repetition preamble; techniques stated to apply to most IEEE 802.15.4 UWB radios.

## Key technical points (ZH)

- **STS 密钥切换** — 标签在接收过程中更换 STS 密钥，使 DW3000 系列两个 CIR 累加器对应不同响应方集合；支持四个响应方（每密钥两个），实现动态响应方选择并排除无关 UWB 信号。
- **前导码与 STS 在干扰下的对比** — 两个场地的拒绝率：前导码 52.3% / 56.9%，STS 5.2% / 6.3%。
- **端侧 CIR 处理** — 在 DWM3001C（nRF52833）上快速计算 CIR 幅度、限定分析范围并以 DMA 并行 SPI 提取。
- **CLoc 结果** — 动态响应方选择下定位误差中位数约 17 cm；错开式 DL-TDoA 运行时间最多比 CLoc 长 44%，能耗最多高 85%（视配置而定）（摘要）。
- **平台** — Qorvo DW3110，信道 5，64 符号重复前导码；论文称所述技术适用于大多数 IEEE 802.15.4 UWB 射频。

## Why it matters / what's new (EN)

The paper moves concurrent-transmission UWB localization from offline CIR analysis to execution on a commodity 802.15.4z tag, and uses the STS (rather than the preamble) to keep CTX working with other UWB traffic on the same channel. Results are from two indoor testbeds with a single hardware platform and the manuscript is a submission, not yet peer reviewed.

## Why it matters / what's new (ZH)

该论文将并发传输 UWB 定位从线下 CIR 分析推进到在通用 802.15.4z 标签上运行，并用 STS（而非前导码）使 CTX 在同信道存在其他 UWB 流量时仍能工作。结果来自两个室内测试场地和单一硬件平台，稿件为投稿版本，尚未经同行评审。

## Images

None.
