---
id: 2026-09-23_arxiv-alarm-layer-aware-vran-power
date_published: 2026-09-21
date_found: 2026-09-23
type: academic-paper
technology: cellular
title_en: "ALARM: Adaptive Layer-Aware Resource Management for Power-Efficient vRANs"
title_zh: "ALARM：面向节能虚拟化 RAN 的层级感知自适应资源管理"
url: "https://arxiv.org/abs/2609.24765"
source_quality: full
topics: [vRAN, gNB, CPU-resource-management, DVFS, srsRAN, power-efficiency]
topic_primary: open-ran
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

Ali Srour, Farzad Veisi, Sami Taktak and Vania Conan (CEDRIC Lab, CNAM, Paris), in a paper accepted at IEEE GLOBECOM 2026, target power efficiency in virtualized RAN (vRAN) deployments on resource-constrained hardware. Their starting observation is that existing dynamic power-control approaches treat the gNB as a single monolithic entity and apply uniform CPU scaling across it, even though its protocol layers have very different computational demands — the physical layer alone typically consumes around 82% of CPU resources versus roughly 18% for the upper layers in their measurements. Uniform scaling therefore over-provisions the lighter layers to cover the heaviest layer's peak demand, wasting a meaningful share of the energy budget.

ALARM decomposes the gNB into four functional layers — Low-PHY, UL high-PHY, DL high-PHY, and Upper Layers — each assigned a "processing weight" reflecting its typical CPU-demand share; by framework design, thread count, CPU frequency, and core affinity are all managed per layer rather than for the gNB as a whole -- though in the evaluated prototype, hardware limitations meant CPU frequency scaling was applied globally rather than per layer, while thread count and core affinity were still controlled per layer. At runtime, a violation-detection module tracks "violated data volume" (accumulated transport-block data across deadline-missed slots) for the physical layers and CPU-utilization saturation (>95%) for the upper layers, distinguishing transient jitter from genuine capacity shortfalls; on a detected violation, the configuration manager first raises CPU frequency (globally, in the prototype) and, if already at maximum, adds threads and re-pins cores only for the violated layer, rather than uniformly scaling every layer. The system was validated on two constrained single-board platforms (an 8-core Odroid H4 and a 4-core Raspberry Pi 5) running srsRAN 5G with a USRP B210 radio and a commercial 5G smartphone as UE (30 kHz SCS, 64-QAM, single/dual 20 MHz channels). Against a Default configuration (OS scheduler plus Linux DVFS, 18 threads), ALARM achieved up to 33% power reduction under static traffic; against a non-layer-aware "Uniform" baseline that simply reduces overall thread count, ALARM saved a further 11-19% versus Uniform under static traffic. Under dynamic traffic varying between 10-50 Mbps, ALARM's adaptive scaling achieved a further 9.8% power reduction over a Uniform adaptive baseline (4.9 W vs. 5.4 W when scaling up to handle 40+ Mbps loads), while keeping physical-layer processing under the 500 microsecond TTI deadline throughout, and reduced context switches by 43.5% relative to Uniform by preserving cache locality through targeted, rather than system-wide, scaling.

## Summary (ZH)

Ali Srour、Farzad Veisi、Sami Taktak 与 Vania Conan（CEDRIC Lab, CNAM, Paris）在一篇已被 IEEE GLOBECOM 2026 接收的论文中，研究了在资源受限硬件上部署的虚拟化 RAN（vRAN）的节能问题。其研究出发点是：现有的动态功耗控制方法通常将 gNB 视为单一整体并对其施加统一的 CPU 调节，而实际上其各协议层的计算需求差异很大——在他们的测量中，物理层单独就消耗约 82% 的 CPU 资源，而上层协议仅占约 18%。这种统一调节方式为覆盖负载最重那一层的峰值需求，会对较轻的层造成过度供给，从而浪费相当一部分能耗预算。

ALARM 将 gNB 拆解为四个功能层——低层物理层（Low-PHY）、上行高层物理层（UL high-PHY）、下行高层物理层（DL high-PHY）与上层协议（Upper Layers），每层被赋予一个反映其典型 CPU 需求占比的"处理权重"；按照框架设计，线程数量、CPU 频率与核心亲和性均按层独立控制，而非针对整个 gNB 统一控制——不过在评测所用的原型系统中，受硬件限制，CPU 频率调节是全局施加的，线程数量与核心亲和性则仍按层独立控制。运行期间，一个违规检测模块针对物理层跟踪"违规数据量"（即因错过时限而累积的传输块数据量），针对上层协议则监测 CPU 利用率是否饱和（超过 95%），从而区分瞬时抖动与真实的容量不足；一旦检测到违规，配置管理模块会先提升 CPU 频率（在原型中为全局提升），若频率已达上限，则仅针对受影响的那一层增加线程并重新绑定核心，而非对全部层统一扩容。该系统在两个资源受限的单板平台（8 核 Odroid H4 与 4 核 Raspberry Pi 5）上运行 srsRAN 5G，配合 USRP B210 射频前端与一部商用 5G 智能手机作为终端（30 kHz 子载波间隔、64-QAM 调制、单/双 20MHz 信道）进行验证。相较于默认配置（操作系统调度器加 Linux DVFS、共 18 个线程），ALARM 在静态流量下可实现最高 33% 的功耗降低；相较于一种非层级感知、仅整体缩减线程数的"统一"（Uniform）基线，在静态流量下 ALARM 进一步节省 11%-19% 的功耗。在流量于 10-50 Mbps 之间动态变化的场景下，ALARM 的自适应调节相较于"统一"自适应基线又进一步降低了 9.8% 的功耗（在应对 40Mbps 以上负载时为 4.9W 对比 5.4W），同时物理层处理时延始终保持在 500 微秒的 TTI 时限之内；由于扩容是针对性而非全局性的，缓存局部性得以保留，相较"统一"基线，上下文切换次数减少了 43.5%。

## Key technical points (EN)

- Problem: uniform CPU scaling across a monolithic gNB over-provisions lighter protocol layers to cover the heaviest layer's peak (PHY ~82% of CPU demand vs. ~18% for upper layers in the authors' measurements).
- Mechanism: decomposes gNB into 4 functional layers (Low-PHY, UL high-PHY, DL high-PHY, Upper Layers) with per-layer processing weights; the framework design controls thread count, CPU frequency, and core affinity per layer, though the evaluated prototype applies CPU frequency scaling globally (hardware limitation) while thread count and core affinity remain per-layer.
- Violation detection: "violated data volume" (accumulated TBS across deadline-missed slots) for PHY layers; CPU-utilization saturation (>95%) for upper layers; on violation, the configuration manager first raises CPU frequency (globally, in the prototype) and, if already at maximum, adds threads and re-pins cores only for the violated layer.
- Testbed: srsRAN 5G on Odroid H4 (8-core) and Raspberry Pi 5 (4-core) with USRP B210 and a commercial 5G smartphone UE.
- Results: up to 33% power reduction vs. Default (unoptimized) baseline; 11-19% further reduction vs. a non-layer-aware Uniform baseline under static traffic; 9.8% further reduction under dynamic 10-50 Mbps traffic vs. Uniform adaptive scaling (4.9W vs 5.4W).
- Kept physical-layer processing under the 500 microsecond TTI deadline throughout; reduced context switches by 43.5% vs. Uniform via targeted rather than system-wide scaling.
- Accepted at IEEE GLOBECOM 2026 (Macao, China, December 2026).

## Key technical points (ZH)

- 问题：对整体 gNB 统一进行 CPU 调节，会为覆盖负载最重层的峰值需求而对较轻协议层过度供给（作者测量中物理层约占 CPU 需求的 82%，上层协议约占 18%）。
- 机制：将 gNB 拆解为 4 个功能层（低层物理层、上行高层物理层、下行高层物理层、上层协议），各层设有处理权重；框架设计上按层独立控制线程数、CPU 频率与核心亲和性，但评测所用原型受硬件限制，CPU 频率调节为全局施加，线程数与核心亲和性仍按层独立控制。
- 违规检测：物理层采用"违规数据量"（因错过时限而累积的传输块数据）指标，上层协议采用 CPU 利用率饱和（超过 95%）指标；检测到违规后，配置管理模块先提升 CPU 频率（原型中为全局提升），若已达上限，则仅对受影响层增加线程并重新绑定核心。
- 测试平台：在 Odroid H4（8 核）与 Raspberry Pi 5（4 核）上运行 srsRAN 5G，配合 USRP B210 与商用 5G 智能手机终端。
- 结果：相较默认（未优化）基线最高降低功耗 33%；静态流量下相较非层级感知的"统一"基线进一步降低 11%-19%；在 10-50 Mbps 动态流量下，相较"统一"自适应基线进一步降低 9.8%（4.9W 对比 5.4W）。
- 整个过程中物理层处理时延始终保持在 500 微秒的 TTI 时限内；由于扩容具有针对性而非全局性，缓存局部性得以保留，上下文切换次数相较"统一"基线减少 43.5%。
- 已被 IEEE GLOBECOM 2026（2026 年 12 月，中国澳门）接收。

## Why it matters / what's new (EN)

The KB's existing vRAN power-adjacent entry (`2026-08-20_samsung-qualcomm-pc1-fwa-vran-validation`) covers a commercial FWA/vRAN interoperability validation without a power-management focus; this is the first entry in this KB to address per-protocol-layer, workload-aware CPU resource management specifically as a vRAN power-saving mechanism, with real srsRAN-testbed measurements on both static and dynamic traffic.

## Why it matters / what's new (ZH)

知识库现有的与 vRAN 相关的条目（`2026-08-20_samsung-qualcomm-pc1-fwa-vran-validation`）关注的是商用 FWA/vRAN 互操作性验证，并不涉及功耗管理；本条目是本知识库中首次针对"按协议层、按负载感知的 CPU 资源管理"这一具体的 vRAN 节能机制展开研究，并在真实 srsRAN 测试床上针对静态与动态流量场景分别给出了实测数据。
