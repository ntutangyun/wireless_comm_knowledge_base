---
id: 2026-10-27_arxiv-xapp-conflicts-oran-slicing-vs-per-ue-scheduling-testbed
date_published: 2026-10-23
date_found: 2026-10-27
type: academic-paper
technology: cellular
title_en: "Experimental Classification of xApp Conflicts in O-RAN: Slicing vs. Per-UE Scheduling"
title_zh: "O-RAN 中 xApp 冲突的实验分类：切片与逐 UE 调度"
url: "https://arxiv.org/abs/2610.32254"
source_quality: full
topics: [O-RAN, xApp-conflict, Near-RT-RIC, PRB-slicing, per-UE-scheduling, OCUDU, Open5GS, USRP-X310, COTS-UE]
topic_primary: open-ran
topics_secondary: [network-slicing]
novelty_score: 3
---

## Summary (EN)
Rashmi Sharan Sinha, Merim Dzaferagic, Marco Ruffini and Nima Afraz (accepted for the 2026 IEEE Globecom Workshops, 7th Workshop on Emerging Topics in 6G Communications) study xApps in the Near-RT RIC that issue control intents at different granularities: one sets the PRB budget of a network slice, another asks for a guaranteed PRB floor for a UE inside that slice. The paper implements and tests this cross-granularity case in simulation and on a physical 5G testbed.

Three xApps are used. xApp A sets an equal 34/33/33 slice split and is then disabled. xApp B, a spectral-efficiency reallocation xApp, reclaims 25% of the baseline from under-utilised slices (utilisation below 0.5 of baseline) into a pool and gives saturated slices +5 percentage points when the pool holds at least 5. xApp C assigns a 40% PRB floor to one UE per slice and runs without mitigation, so that conflicts can be observed. A command-bus detector classifies logged intents as direct (a UE floor above its parent slice cap), indirect (aggregate UE floors above the 100% cell budget) or implicit (repeated slice-target changes in a window).

The testbed uses an OCUDU-based gNB, an Open5GS core, a USRP X310 on band n78 (40 MHz) and five commercial UEs across three slices. Because the gNB counters are not slice-labelled, per-slice load is derived from core-side downlink byte counts. Over a 276-cycle run the detector logged 147 floor-versus-cap violations, 49 shared-budget over-subscription episodes and 11 allocation-oscillation episodes; the counts are de-duplicated with a 20 s cooldown (so Direct and Indirect reflect run length rather than how often the condition held), the oscillations were not attributed to inter-xApp interaction, and the reported conflicts are incompatibilities among control intents rather than measured UE-level degradation. Against a static slice split replayed on the same load trace, the slicing xApp reduced unmet demand by 12-33% and idle allocation by 21-23%.

## Summary (ZH)
Rashmi Sharan Sinha、Merim Dzaferagic、Marco Ruffini 与 Nima Afraz（已被 2026 IEEE Globecom Workshops 第七届 6G 通信新兴议题研讨会接收）研究 Near-RT RIC 中以不同粒度下发控制意图的 xApp：一个设置网络切片的 PRB 预算，另一个为该切片内的某个 UE 请求保证的 PRB 下限。论文在仿真和实体 5G 测试平台上实现并检验了这一跨粒度情形。

共用三个 xApp。xApp A 设定 34/33/33 的等分切片后即被停用。xApp B 为频谱效率重分配 xApp：把利用率低于基线 0.5 的切片的 25% 基线份额回收到资源池，当池中至少有 5 个百分点时给饱和切片增加 5 个百分点。xApp C 为每个切片中的一个 UE 分配 40% 的 PRB 下限，且不做任何缓解，以便观察冲突。命令总线检测器将日志中的意图分为：直接冲突（UE 下限高于其所属切片上限）、间接冲突（UE 下限之和超过 100% 的小区预算）和隐式冲突（窗口内切片目标反复变化）。

测试平台由基于 OCUDU 的 gNB、Open5GS 核心网、n78 频段（40 MHz）上的 USRP X310 以及分布在三个切片中的五部商用终端构成。由于 gNB 计数器不带切片标签，各切片负载由核心网侧下行字节数推算。在 276 个周期的连续运行中，检测器记录到 147 次下限越过上限、49 次共享预算超额订阅和 11 次分配振荡；这些计数经 20 s 冷却去重（因此直接与间接计数反映运行时长而非条件成立的频次），振荡未被归因于 xApp 之间的相互作用，且所报告的冲突是控制意图之间的不相容，而非实测的 UE 级性能下降。与同一负载轨迹上回放的静态切片划分相比，切片 xApp 使未满足需求减少 12-33%，空闲分配减少 21-23%。

## Key technical points (EN)
- Budget conservation: the slicing xApp's targets plus the pool always sum to 100%, so it cannot create an indirect (shared-budget) conflict on its own; that condition requires the per-UE floors.
- Utilisation is referenced to the fixed baseline allocation rather than the current share, to avoid self-induced switching; three-cycle smoothing is applied to bursty load.
- The achieved control period on the testbed is about 3.7 s (2 s sleep plus a 1 s byte-count sampling window and policy pushes); the address-to-slice map is rebuilt every 10 s.
- Per-slice throughput proxy: downlink rate over a 1 s window divided by achievable (not nominal) cell capacity, which survives UE radio-identifier changes after re-attachment.
- Detector classes: direct (g_u > cap of parent slice), indirect (sum of g_u > 100%), implicit (at least 4 target changes within the detector window).
- Counts over 276 cycles: 147 direct, 49 indirect, 11 implicit.
- Load regimes differ between the two reported windows (median utilisation 68.5% vs 93.0%); because the pool is filled only by under-utilised slices, the policy's reach shrinks as load rises.
- Focus is detection and classification; no mitigation is implemented, and the table of prior work positions it against single-target testbed studies with one to three UEs.

## Key technical points (ZH)
- 预算守恒：切片 xApp 的各目标加资源池始终等于 100%，因此它自身不会造成间接（共享预算）冲突；该条件需要逐 UE 下限的参与。
- 利用率以固定基线分配而非当前份额为参照，避免自身引起的来回切换；对突发负载做三周期平滑。
- 测试平台上实际控制周期约 3.7 s（2 s 休眠加 1 s 字节计数采样窗口和策略下发）；地址到切片的映射每 10 s 重建一次。
- 每切片吞吐量代理：1 s 窗口内的下行速率除以可达（非标称）小区容量，在 UE 重新接入导致无线标识变化后仍然有效。
- 检测器类别：直接（g_u 大于所属切片上限）、间接（g_u 之和大于 100%）、隐式（检测窗口内至少 4 次目标变化）。
- 276 个周期内的计数：直接 147 次、间接 49 次、隐式 11 次。
- 两个报告窗口的负载状态不同（利用率中位数 68.5% 对 93.0%）；由于资源池仅由低利用率切片补充，负载升高时该策略的作用范围缩小。
- 重点在检测与分类，未实现缓解；论文的相关工作表将其与仅涉及单一控制目标、一至三个 UE 的测试平台研究相区分。

## Why it matters / what's new (EN)
The paper's stated gap is that xApp-conflict experiments on physical O-RAN testbeds have concentrated on xApps acting at the same level, while interactions between slice-level allocation and per-UE scheduling had been insufficiently characterised experimentally. It supplies a taxonomy with counts from a continuous hardware run and a core-derived load proxy for gNBs without slice-labelled counters. Results come from a single-cell testbed with five handsets and a throughput proxy rather than PRB measurements, as the authors note.

## Why it matters / what's new (ZH)
论文指出的空白是：实体 O-RAN 测试平台上的 xApp 冲突实验集中在同一层级的 xApp，而切片级分配与逐 UE 调度之间的相互作用缺少实验刻画。论文给出了带有连续硬件运行计数的冲突分类，以及适用于缺少切片标签计数器的 gNB 的核心网侧负载代理。如作者所述，结果来自单小区、五部手机的测试平台，并使用吞吐量代理而非 PRB 测量。

## Images

None.
