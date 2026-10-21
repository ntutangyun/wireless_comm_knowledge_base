---
id: 2026-10-21_arxiv-leo-pnt-l1-acquisition-complexity-xona-pulsar
date_published: 2026-10-19
date_found: 2026-10-21
technology: satellite
type: academic-paper
title_en: "Signal Design Impacts on GNSS and LEO-PNT L1 Band Acquisition Complexity: A Case Study with Xona Pulsar"
title_zh: "信号设计对 GNSS 与 LEO-PNT L1 频段捕获复杂度的影响：以 Xona Pulsar 为例"
url: "https://arxiv.org/abs/2610.26353"
source_quality: abstract-only
topics: [LEO-PNT, GNSS, Xona-Pulsar, signal-acquisition, spreading-code, integration-time, snapshot-receiver, low-power]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Leclère, Joshi, Marathe and Reid (arXiv 2610.26353, submitted 19 October 2026, eess.SP; proceedings of ION GNSS+ 2026, Orlando, September 2026) examine how much work a receiver must do to acquire GNSS and LEO-PNT signals.

Acquisition detects signals below the noise floor through correlation. Longer coherent and non-coherent integration improves sensitivity but raises processing demands, which matters for low-power receivers. The authors compare L1-band signals by the integration time needed to reach the same detection and false-alarm targets under equal conditions, considering spreading codes, secondary codes, modulation and bandwidth.

They convert the required integration into arithmetic operations, processing time and memory use, and apply this to Xona's Pulsar X1 and representative GNSS L1 signals to find when LEO-PNT's higher received power reduces acquisition workload. Results are framed for both conventional and snapshot-based receivers, where less processing can lower energy consumption. The abstract gives no numeric results.

## Summary (ZH)

Leclère、Joshi、Marathe 和 Reid（arXiv 2610.26353，2026 年 10 月 19 日提交，eess.SP；发表于 2026 年 9 月在奥兰多举行的 ION GNSS+ 2026 会议论文集）研究接收机捕获 GNSS 与 LEO-PNT 信号所需的运算量。

捕获通过相关运算检测低于噪声底的信号。更长的相干与非相干积分可提高灵敏度，但会增加处理需求，这对低功耗接收机尤为重要。作者在相同条件下，以达到相同检测概率和虚警目标所需的积分时间来比较 L1 频段信号，并考虑扩频码、副码、调制方式和带宽。

他们将所需积分转换为算术运算量、处理时间和内存占用，并应用于 Xona 的 Pulsar X1 与具有代表性的 GNSS L1 信号，以找出 LEO-PNT 更高的接收功率在何种情况下可降低捕获负担。结果同时面向常规接收机和基于快照的接收机，后者处理量减少可降低能耗。摘要未给出具体数值。

## Key technical points (EN)

- **Metric**: integration time needed for equal detection and false-alarm targets, converted to operations, processing time and memory.
- **Signal factors compared**: spreading codes, secondary codes, modulation, bandwidth.
- **Signals**: Xona Pulsar X1 versus representative GNSS L1 signals.
- **Receiver types**: conventional and snapshot-based.
- **Question addressed**: when LEO-PNT's higher received power reduces acquisition workload.

## Key technical points (ZH)

- **度量**：达到相同检测与虚警目标所需的积分时间，并换算为运算量、处理时间和内存。
- **比较的信号因素**：扩频码、副码、调制、带宽。
- **信号**：Xona Pulsar X1 与代表性 GNSS L1 信号。
- **接收机类型**：常规接收机与基于快照的接收机。
- **研究问题**：LEO-PNT 更高接收功率在何种情况下降低捕获负担。

## Why it matters / what's new (EN)

The paper quantifies receiver-side acquisition cost as a function of signal design for a LEO-PNT signal alongside GNSS, relevant to low-power receivers. Evidence level is the abstract; no figures are quoted there.

## Why it matters / what's new (ZH)

论文针对 LEO-PNT 信号与 GNSS 信号，量化了接收端捕获成本随信号设计的变化，对低功耗接收机具有参考意义。证据层级为摘要，其中未给出具体数据。

## Images

None.
