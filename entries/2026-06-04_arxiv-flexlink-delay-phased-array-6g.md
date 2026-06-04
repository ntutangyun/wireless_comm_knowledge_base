---
id: 2026-06-04_arxiv-flexlink-delay-phased-array-6g
date_published: 2026-05-31
date_found: 2026-06-04
type: academic-paper
technology: cellular
title_en: "FlexLink: decoupling control and data beams with a delay-phased array for next-generation wideband (6G) networks"
title_zh: "FlexLink：用延迟相控阵为下一代宽带（6G）网络解耦控制波束与数据波束"
url: "https://arxiv.org/abs/2606.01454"
source_quality: abstract_only
topics: [6G, beamforming, phased-array, mmWave, PHY, control-plane]
topic_primary: 6g-vision
topics_secondary: [cellular-massive-mimo]
novelty_score: 4
---

## Summary (EN)

FlexLink is a delay-phased-array architecture that lets a single antenna array form multiple simultaneous narrow beams without sacrificing per-beam gain — the long-standing limitation of conventional phased arrays, which must choose between one high-gain beam or several low-gain ones. By inserting per-element true-time-delay elements, FlexLink redistributes energy across both frequency and spatial dimensions, so that a control beam and a data beam can be pointed in different directions at the same time. The motivating problem is that next-generation wideband links need to keep a robust wide-coverage control channel alive while simultaneously steering a tight, high-rate data beam at a specific user — something a single phased array cannot do without time-sharing.

The authors prototype the design on a custom 4–7 GHz (upper-mid-band / FR3-class) hardware testbed rather than mmWave, targeting the spectrum 6G is expected to use for capacity. Measured results show roughly double the spectral efficiency of a conventional phased array of the same aperture, because the control overhead no longer steals time from the data beam. The work appears in the ACM MobiHoc 2025 proceedings.

## Summary (ZH)

FlexLink 是一种延迟相控阵（delay-phased array）架构，使单个天线阵列能够同时形成多个窄波束而不牺牲每束增益——这正是传统相控阵的长期局限：它必须在"一个高增益波束"与"多个低增益波束"之间二选一。通过为每个阵元加入真时延（true-time-delay）单元，FlexLink 在频率与空间两个维度上重新分配能量，使控制波束与数据波束可以同时指向不同方向。其出发点在于：下一代宽带链路需要在维持稳健的广覆盖控制信道的同时，向特定用户对准一束高速率的窄数据波束——单个相控阵若不进行时分复用便无法做到。

作者在一个定制的 4–7 GHz（中高频段 / FR3 级）硬件平台上实现了该设计，而非毫米波，瞄准 6G 预期用于扩容的频谱。实测结果显示，在相同孔径下其频谱效率约为传统相控阵的两倍，因为控制开销不再占用数据波束的时间。该工作发表于 ACM MobiHoc 2025。

## Key technical points (EN)

- **Delay-phased array**: per-element true-time-delay enables energy redistribution across frequency + space, forming multiple narrow beams at full per-beam gain.
- **Control/data beam decoupling**: a wide-coverage control beam and a steered high-rate data beam coexist simultaneously, no time-sharing.
- **Band**: custom 4–7 GHz (upper-mid-band / FR3-class) hardware testbed — the 6G capacity band, not mmWave.
- **Result**: ~2× spectral efficiency vs. a conventional phased array of equal aperture.
- **Venue**: ACM MobiHoc 2025.

## Key technical points (ZH)

- **延迟相控阵**：逐阵元真时延实现频率+空间维度的能量再分配，以全增益形成多个窄波束。
- **控制/数据波束解耦**：广覆盖控制波束与定向高速率数据波束同时共存，无需时分复用。
- **频段**：定制 4–7 GHz（中高频段 / FR3 级）硬件平台——6G 扩容频段，而非毫米波。
- **结果**：相同孔径下频谱效率约为传统相控阵的两倍。
- **发表**：ACM MobiHoc 2025。

## Why it matters / what's new (EN)

Most 6G beamforming work assumes mmWave and treats the control channel as a scheduling afterthought. FlexLink instead targets the upper-mid-band (FR3) that 6G is actually expected to deploy in, and treats the control/data beam conflict as a first-class architectural problem solved in the antenna front-end rather than the scheduler. The true-time-delay delay-phased-array approach — trading some hardware complexity for the ability to spend frequency degrees of freedom on extra beams — is a distinct hardware-level mechanism not represented elsewhere in the KB's 6g-vision bin, which so far holds system/AI-level 6G entries rather than PHY/antenna-architecture ones.

## Why it matters / what's new (ZH)

多数 6G 波束成形研究默认采用毫米波，并把控制信道当作调度的附带问题。FlexLink 则瞄准 6G 实际预期部署的中高频段（FR3），并将控制/数据波束冲突视为应在天线前端而非调度器中解决的一等架构问题。其真时延延迟相控阵思路——以一定硬件复杂度换取"用频率自由度换取额外波束"的能力——是一种独特的硬件级机制，KB 的 6g-vision 分箱中尚无同类条目（该分箱目前多为系统/AI 级 6G 条目，而非 PHY/天线架构类）。
