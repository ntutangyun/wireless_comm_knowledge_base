---
id: 2026-11-23_arxiv-ble-cs-interference-aware-tone-selection
date_published: 2026-11-17
date_found: 2026-11-23
type: academic-paper
technology: bluetooth
title_en: "Interference-Aware Tone Selection for Bluetooth Channel Sounding"
title_zh: "蓝牙信道探测的干扰感知音调选择"
url: "https://arxiv.org/abs/2611.23471"
source_quality: full
topics: [BLE, channel-sounding, tone-selection, Wi-Fi-coexistence, phase-based-ranging, nRF54L15]
topic_primary: bt-channel-sounding
topics_secondary: [bt-location]
novelty_score: 3
---

## Summary (EN)

This arXiv preprint (Taewoo Kim and Vishrant Tripathi, Purdue University ECE; cs.NI, submitted Nov 17, 2026) studies which sounding tones a Bluetooth Channel Sounding (CS) device should use when Wi-Fi and other 2.4 GHz radios occupy part of the band. CS recovers distance from phase measurements of unmodulated tones across multiple frequencies; the paper notes that the specification allows between 15 and 72 tones per ranging estimate (72 of 79 frequency indices are usable) without prescribing how to choose them, and that silicon-vendor reference implementations typically use all 72.

Using results from sparse antenna-array theory, the authors argue that avoiding interference alone is not enough: the spacing of the remaining tones can create repeated peaks in the distance response. For uniformly spaced tones they give a spacing bound (for a 16 m target range, gaps of at most 9 MHz keep the first repeated peak beyond the target range). The proposed method takes only the set of occupied tones as input and builds a 15-tone map in three steps: identify the free tones, choose the widest free window whose internal gaps stay within the spacing bound, then place tones across that window near equally spaced candidate positions. No ranging measurements, ground-truth distance or online search are used, and maps for common Wi-Fi occupancy patterns (channels 1, 6, 11 and combinations) can be precomputed into a lookup table.

Evaluation compares against random interference-avoiding tone selection. In simulation of 900 indoor rooms with mixed Wi-Fi, IEEE 802.15.4 and Bluetooth piconet interference, the share of estimates within one resolution cell (2.026 m) is 64.7% versus 25.2%. On a public CS I/Q dataset (13 positions, 3-22 m) the Wi-Fi-occupancy lookup maps reach 52.0% versus 23.3% on average. In a hardware test with two Nordic nRF54L15 development kits in a 12 x 7 m office with Wi-Fi channels 1, 6 and 11 active (17 captures at six distances, 4-10 m), 83.9% of estimates fall within one resolution cell versus 1.6%, and the median absolute error falls from 5.23 m to 0.30 m. The authors list wider experimental validation across environments and other 2.4 GHz interferers as future work.

## Summary (ZH)

这篇 arXiv 预印本（Taewoo Kim、Vishrant Tripathi，普渡大学电气与计算机工程系；cs.NI，2026 年 11 月 17 日提交）研究当 Wi-Fi 及其他 2.4 GHz 无线电占用部分频段时，蓝牙信道探测（Channel Sounding，CS）设备应选用哪些探测音调。CS 通过多个频率上未调制音调的相位测量恢复距离；论文指出，规范允许每次测距估计使用 15 至 72 个音调（79 个频率索引中有 72 个可用于探测），但并未规定如何选择，芯片厂商的参考实现通常使用全部 72 个。

作者借鉴稀疏天线阵列理论，指出仅避开干扰并不够：保留下来的音调的间距可能在距离响应中产生重复峰。对于均匀间隔的音调，文中给出间距上限（目标距离 16 m 时，间隔不超过 9 MHz 才能使首个重复峰落在目标距离之外）。所提方法仅以被占用音调集合为输入，分三步构造 15 音调映射：找出空闲音调；选择内部间隔不超过间距上限、跨度最宽的空闲窗口；在该窗口内围绕等间隔候选位置放置音调。该方法不需要测距测量、真实距离或在线搜索，针对常见 Wi-Fi 占用模式（信道 1、6、11 及其组合）的映射可预先计算并存入查找表。

评估以随机避开干扰的音调选择为对比基线。在包含 Wi-Fi、IEEE 802.15.4 和蓝牙微微网混合干扰的 900 个室内房间仿真中，误差在一个分辨单元（2.026 m）以内的估计占比为 64.7%，基线为 25.2%。在公开的 CS I/Q 数据集（13 个位置，3-22 m）上，Wi-Fi 占用查找表映射的平均占比为 52.0%，基线为 23.3%。在 12 x 7 m 办公室中使用两块 Nordic nRF54L15 开发板、Wi-Fi 信道 1、6、11 同时工作的硬件实验中（六个距离 4-10 m，共 17 次采集），83.9% 的估计误差在一个分辨单元以内，基线为 1.6%，绝对误差中位数由 5.23 m 降至 0.30 m。作者将跨环境及其他 2.4 GHz 干扰源的更广泛实验验证列为后续工作。

## Key technical points (EN)

- **Setting**: CS estimates distance from phase across tones; 15-72 tones may be used per estimate and the spec does not prescribe selection; vendor references typically use all 72.
- **Observation**: interference avoidance can leave large gaps between tones; uniformly spaced tones repeat the distance peak periodically (examples: 20 MHz spacing repeats every 7.5 m, 4 MHz every 37.5 m), so large gaps risk a wrong early peak with a leading-edge estimator.
- **Spacing bound**: for a 16 m target range and integer-MHz spacing, gaps of at most 9 MHz keep the first repeated peak outside the range; irregular tone sets can still show secondary peaks.
- **Method**: input is only the occupied-tone set; steps are free set, widest window with bounded gaps, then tone placement near equally spaced candidates with a search radius; a fill branch is used when too few free tones exist.
- **Runtime cost**: maps for seven Wi-Fi channel 1/6/11 occupancy patterns are precomputed in a lookup table, so no online optimisation is needed.
- **Results**: 64.7% vs 25.2% (simulation, 900 rooms); 52.0% vs 23.3% (public dataset); 83.9% vs 1.6% and median error 5.23 m to 0.30 m (nRF54L15 hardware, Wi-Fi 1/6/11 active).
- **Validation scope**: hardware validation covers one office, six distances and one occupancy case; the authors list broader environments, varying Wi-Fi occupancy and other interferers as future work.

## Key technical points (ZH)

- **背景**：CS 通过多音调相位估计距离；每次估计可使用 15-72 个音调，规范未规定选择方式，厂商参考实现通常使用全部 72 个。
- **观察**：仅避开干扰会在音调间留下大间隔；均匀间隔的音调会使距离峰周期性重复（例如 20 MHz 间隔每 7.5 m 重复，4 MHz 每 37.5 m 重复），大间隔会使前沿估计器有选中错误的较早峰的风险。
- **间距上限**：目标距离 16 m、间隔为整数 MHz 时，间隔不超过 9 MHz 才能使首个重复峰落在范围之外；非均匀音调集合仍可能出现次级峰。
- **方法**：仅以被占用音调集合为输入；步骤为空闲集合、间隔受限的最宽窗口、围绕等间隔候选位置按搜索半径放置音调；空闲音调不足时使用填充分支。
- **运行开销**：七种 Wi-Fi 信道 1/6/11 占用模式的映射预先存入查找表，无需在线优化。
- **结果**：64.7% 对 25.2%（900 个房间仿真）；52.0% 对 23.3%（公开数据集）；83.9% 对 1.6%，中位误差由 5.23 m 降至 0.30 m（nRF54L15 硬件，Wi-Fi 1/6/11 同时工作）。
- **验证范围**：硬件验证仅覆盖一间办公室、六个距离和一种占用情形；作者将更广泛的环境、不同 Wi-Fi 占用及其他干扰源列为后续工作。

## Why it matters / what's new (EN)

Earlier Channel Sounding entries in the KB cover ranging accuracy, attacks, localization architectures and simulator impairments. This paper addresses a choice the Core specification leaves to the implementation, which tones to sound, and ties it to Wi-Fi coexistence. The authors draw on sparse-array, stepped-frequency radar and multicarrier phase-ranging work for the spacing analysis. The hardware result is a small single-site test against a random-selection baseline, not against a vendor default of using all 72 tones.

## Why it matters / what's new (ZH)

知识库此前的信道探测条目涉及测距精度、攻击、定位架构及仿真器非理想因素。本文讨论 Core 规范留给实现方的一个选择，即探测哪些音调，并将其与 Wi-Fi 共存联系起来。作者在间距分析中借鉴了稀疏阵列、步进频率雷达和多载波相位测距的相关工作。硬件结果只是单一场地的小规模测试，对比对象为随机选择基线，而非厂商默认使用全部 72 个音调的做法。

## Images

No figures are embedded; see the arXiv HTML rendering (https://arxiv.org/html/2611.23471v1) for the paper's figures.
