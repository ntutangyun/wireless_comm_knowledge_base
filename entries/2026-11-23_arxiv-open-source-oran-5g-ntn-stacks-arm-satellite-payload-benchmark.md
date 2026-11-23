---
id: 2026-11-23_arxiv-open-source-oran-5g-ntn-stacks-arm-satellite-payload-benchmark
date_published: 2026-11-18
date_found: 2026-11-23
type: academic-paper
technology: satellite
title_en: "Benchmarking Open-Source O-RAN and 5G NTN Stacks on Embedded ARM Platforms for Space Payloads"
title_zh: "面向空间载荷的嵌入式 ARM 平台上开源 O-RAN 与 5G NTN 协议栈基准测试"
url: "https://arxiv.org/abs/2611.25206"
source_quality: full
topics: [NTN, regenerative-payload, O-RAN, near-RT-RIC, OpenAirInterface, srsRAN, FlexRIC, ARM, SWaP]
topic_primary: leo-constellations
topics_secondary: [sat-direct-device]
novelty_score: 3
---

## Summary (EN)

Municio, Baselga, Lasierra and coauthors (an Aeroconf paper, 11 pages) benchmark open-source gNB and near-real-time RAN Intelligent Controller (near-RT RIC) software on an embedded processor representative of small-satellite payloads. Regenerative payloads host the 5G gNB on board, and combining them with O-RAN adds RIC-based control, in-orbit reconfiguration and multi-tenancy; the paper states there is little quantitative evidence of how open-source implementations behave on processors a satellite can carry.

The testbed is an AMD Zynq UltraScale+ ZCU104 board (quad-core Cortex-A53, 2 GB DDR4) running Linux 5.15 with PREEMPT_RT and Podman containers, driving a USRP B210 over USB 3.0. Two gNB stacks (OpenAirInterface/Duranta and srsRAN/OCUDU) and two near-RT RICs (ORAN-SC and FlexRIC) are compared on functional compliance, resource use, real-time behaviour and engineering suitability, and the authors derive a decision framework mapping mission profiles and SWaP budgets to stack combinations.

## Summary (ZH)

Municio、Baselga、Lasierra 等（Aeroconf 论文，11 页）在代表小卫星载荷的嵌入式处理器上，对开源 gNB 与近实时 RAN 智能控制器（near-RT RIC）软件做了基准测试。再生式载荷把 5G gNB 部署在星上，与 O-RAN 结合后可获得基于 RIC 的控制、在轨重配置与多租户；论文指出，关于开源实现在卫星可搭载的处理器上表现如何，目前缺乏定量证据。

测试床为 AMD Zynq UltraScale+ ZCU104 板（四核 Cortex-A53，2 GB DDR4），运行 Linux 5.15（PREEMPT_RT）和 Podman 容器，通过 USB 3.0 驱动 USRP B210。比较了两种 gNB 栈（OpenAirInterface/Duranta 与 srsRAN/OCUDU）和两种 near-RT RIC（ORAN-SC 与 FlexRIC），维度包括功能合规、资源占用、实时行为与工程适用性，并推导出把任务剖面与 SWaP 预算映射到协议栈组合的决策框架。

## Key technical points (EN)

- Cell under test: terrestrial standalone FDD, band n1, 5 MHz (25 PRBs), 15 kHz subcarrier spacing; no NTN timing or satellite-channel emulation, and the core network (Open5GS) and UE (Quectel RM520N) are off-board, so measurements cover payload software only.
- gNB comparison: OAI/Duranta steady CPU about 160% of one core (about 42% of the platform) and 667 MB RAM; srsRAN/OCUDU about 260% (about 66%) and 376 MB; throughput was 6.9 Mbps downlink with HARQ off (2.75 Mbps with HARQ) and 0.55 Mbps uplink for OAI, versus 0.47 Mbps downlink and 0.43 Mbps uplink for srsRAN, which misses downlink slot deadlines continuously.
- RIC comparison: ORAN-SC runs as 6 containers using about 72 MB RAM and about 12.3% of a core, with A1 support and partial O1; FlexRIC is a single process using 3.4 MB and 0.25% of a core but lacks A1 and O1 out of the box. OAI's default E2AP v2.03 timed out against ORAN-SC's v3.0+ requirement until OAI was rebuilt with E2AP v3.0.
- Power: idle draw 13.35 W versus 13.46 W; OAI plus FlexRIC added about 1.66 W and srsRAN plus ORAN-SC about 1.25 W (the authors flag their DRAM-stall explanation as unverified).
- NTN features were assessed by code inspection, not over the air: OAI covers Rel-17 essentials, some Rel-18 features and ships an NR-NTN UE; srsRAN can broadcast both ephemeris forms in SIB19 with HARQ-signalling gaps; OCUDU adds per-UE HARQ signalling, conditional handover and the Rel-18 satellite switch. None implements regenerative-specific procedures such as feeder-link switchover or ISL over Xn.
- Decision framework: OAI + FlexRIC for high-capacity single-operator LEO, OAI + ORAN-SC for multi-tenant operator-grade LEO payloads (OCUDU suggested for GEO), srsRAN/OCUDU + FlexRIC for severe SWaP such as CubeSats.
- Limitations stated: single platform, narrow 5 MHz carrier, USB-attached front end causing timing problems (FPGA-attached front end, core isolation and interrupt steering proposed).

## Key technical points (ZH)

- 被测小区：地面独立组网 FDD，n1 频段，5 MHz（25 PRB），子载波间隔 15 kHz；未做 NTN 时序或卫星信道仿真，核心网（Open5GS）和 UE（Quectel RM520N）在板外，因此测量只涵盖载荷软件。
- gNB 对比：OAI/Duranta 稳态 CPU 约为单核的 160%（约占平台 42%），内存 667 MB；srsRAN/OCUDU 约 260%（约 66%），内存 376 MB；OAI 下行 6.9 Mbps（关闭 HARQ，开启时 2.75 Mbps）、上行 0.55 Mbps，srsRAN 下行 0.47 Mbps、上行 0.43 Mbps，且持续错过下行时隙截止时间。
- RIC 对比：ORAN-SC 为 6 个容器，约占 72 MB 内存、约 12.3% 单核，支持 A1，O1 为部分支持；FlexRIC 为单进程，占 3.4 MB、0.25% 单核，但开箱不支持 A1 与 O1。OAI 默认的 E2AP v2.03 与 ORAN-SC 要求的 v3.0+ 不兼容而超时，需用 E2AP v3.0 重新编译 OAI。
- 功耗：空闲功耗 13.35 W 对 13.46 W；OAI 加 FlexRIC 增加约 1.66 W，srsRAN 加 ORAN-SC 增加约 1.25 W（作者指出其 DRAM 停顿的解释尚未验证）。
- NTN 功能通过代码检查而非空口测试评估：OAI 覆盖 Rel-17 要点和部分 Rel-18 功能，并带有 NR-NTN UE；srsRAN 能在 SIB19 中广播两种星历形式但 HARQ 信令有缺口；OCUDU 增加了每 UE HARQ 信令、条件切换及 Rel-18 卫星切换。三者均未实现再生式专有流程，如馈电链路切换或 Xn 上的 ISL。
- 决策框架：高容量单运营商 LEO 选 OAI + FlexRIC，多租户运营级 LEO 载荷选 OAI + ORAN-SC（GEO 建议 OCUDU），CubeSat 等严苛 SWaP 场景选 srsRAN/OCUDU + FlexRIC。
- 作者说明的局限：单一平台、窄的 5 MHz 载波、USB 前端造成时序问题（建议采用 FPGA 前端、核隔离与中断绑定）。

## Why it matters / what's new (EN)

The KB holds NTN standardisation and architecture entries (for example 2026-05-30_arxiv-5g-nr-ntn-survey-roadmap and 2026-09-03_mssa-reference-architecture-2-regenerative-ntn); this paper contributes measured resource figures for open-source gNB and RIC stacks on a satellite-class ARM board, together with a stack-selection table. Its NTN-feature claims come from code inspection while the radio tests were terrestrial, so the figures describe software load rather than NTN link performance.

## Why it matters / what's new (ZH)

KB 已有 NTN 标准化与架构条目（例如 2026-05-30_arxiv-5g-nr-ntn-survey-roadmap、2026-09-03_mssa-reference-architecture-2-regenerative-ntn）；本文补充了开源 gNB 与 RIC 协议栈在卫星级 ARM 板上的实测资源数据以及协议栈选型表。其 NTN 功能结论来自代码检查，而无线测试为地面场景，因此这些数据反映的是软件负载，而非 NTN 链路性能。

## Images

None.
