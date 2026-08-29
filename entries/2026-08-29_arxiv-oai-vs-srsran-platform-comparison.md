---
id: 2026-08-29_arxiv-oai-vs-srsran-platform-comparison
date_published: 2025-11-27
date_found: 2026-08-29
type: academic-paper
technology: cellular
title_en: "Open-Source 5G RAN Platforms: A Dual Perspective on Performance and Capabilities"
title_zh: "开源 5G RAN 平台：能力与性能的双重视角"
url: "https://arxiv.org/abs/2608.25820"
source_quality: full
topics: [OpenAirInterface, srsRAN, USRP, B210, N310, standalone-5G, RRC-setup, TS-38.306, MIMO, private-5G, Open5GS, testbed]
topic_primary: 5g-nr
topics_secondary: [open-ran]
novelty_score: 2
---

## Summary (EN)

A group from the Centro de Informática at the Federal University of Pernambuco (UFPE, Recife) runs the head-to-head comparison that almost every open-source 5G testbed paper implicitly assumes but rarely performs: OpenAirInterface (OAI) versus srsRAN, on the same server, the same core, the same antennas, across two different software-defined radios, three radio configurations, and four real handsets running real applications. The literature the paper surveys is full of single-platform evaluations, end-to-end studies of one stack, and partial comparisons limited to iPerf on one SDR with one UE. What is missing is a matched comparison that varies the SDR, varies the MIMO/bandwidth configuration, and drives the network with the application classes 3GPP actually named when it defined its service categories.

The testbed is a standalone 5G network built entirely from commodity parts: an Intel Xeon Gold 5215 server with 96 GB RAM running Open5GS v2.7.2 as the core and either OAI or srsRAN as the CU+DU in Docker 27.5.1 containers, with the RAN using 3GPP functional split Option 8 (everything above RF in software) and the radio unit implemented by either an Ettus USRP B210 or an N310 through UHD 4.1.0.0. The UEs are Motorola Edge 20 handsets with Sysmocom S1J1 SIMs. Three configurations are tested, all at 256-QAM and 30 kHz subcarrier spacing on a TDD pattern of [D D D D D D D F U U] with the flexible slot split 8 symbols downlink / 4 uplink: C1 = 20 MHz single layer, C2 = 40 MHz single layer, C3 = 20 MHz with 2x2 MIMO. C3 is not combined with 40 MHz because 2x2 at that bandwidth needs a 46.08 MHz master clock, above the B210's 30.72 MHz ceiling with two TX chains — a hardware limit worth knowing before designing an experiment.

On the control plane the two stacks are effectively tied. Averaged over four UEs each cycling airplane mode ten times (scripted so all four contend simultaneously), RRC Setup completes in 87.7 ms for C1 on both platforms, 88.5 ms for C3 and 91.9 ms for C2; the single best result is OAI on the B210 in C3 at 85.3 ms, and the second best (srsRAN on N310, C1) is only 1.65% behind — statistically the same. The worst case, OAI on N310 in C2, is 15.2% above the best. The spread across every combination is small enough that RRC setup time is not a useful discriminator between these stacks.

The data plane is where they separate, and mostly in srsRAN's favour. Measured against the theoretical throughput computed from 3GPP TS 38.306, srsRAN reaches roughly 70-73% of theory in downlink across every SDR and configuration, while OAI ranges from 31% to 78% and collapses under MIMO. Uplink is weak for both — 5% to 49% of theory — which the authors flag as a substantial limitation of current open-source 5G uplink implementations rather than a property of either stack alone. Under real application workloads (Video-on-Demand with four simultaneous UEs, Owncast live streaming at 12 Mbps/24 fps, and Cloud Gaming via Sunshine/Moonlight at 1080p60/20 Mbps with three UEs), srsRAN delivered the best results in every case, with OAI showing higher latency, heavier jitter and outright connection loss in specific SDR/configuration pairs.

## Summary (ZH)

巴西伯南布哥联邦大学（UFPE，累西腓）信息中心的团队做了一件几乎每篇开源 5G 测试床论文都默认成立、却很少真正做过的事：把 OpenAirInterface（OAI）与 srsRAN 放在同一台服务器、同一套核心网、同一副天线下正面对比，覆盖两种软件定义无线电、三种空口配置、以及四台运行真实应用的真机。论文梳理的现有文献里，大量是单平台评测、单栈端到端研究，或者只在一种 SDR、一个 UE 上跑 iPerf 的局部比较。缺的正是这样一个对齐的比较：SDR 会变、MIMO/带宽配置会变，并且用 3GPP 定义业务类别时真正点名的那几类应用去压网络。

测试床是一套完全由通用器件搭起来的 5G SA 网络：Intel Xeon Gold 5215 服务器（96 GB 内存）运行 Open5GS v2.7.2 作为核心网，CU+DU 以 Docker 27.5.1 容器形式部署 OAI 或 srsRAN，RAN 采用 3GPP 功能切分 Option 8（射频以上全部在软件中），射频单元由 Ettus USRP B210 或 N310 经 UHD 4.1.0.0 实现。UE 是配 Sysmocom S1J1 卡的 Motorola Edge 20。三种配置统一使用 256-QAM 与 30 kHz 子载波间隔，TDD 图样为 [D D D D D D D F U U]，其中灵活时隙按 8 符号下行 / 4 符号上行划分：C1 = 20 MHz 单流，C2 = 40 MHz 单流，C3 = 20 MHz 加 2x2 MIMO。C3 之所以不与 40 MHz 组合，是因为该带宽下的 2x2 需要 46.08 MHz 主时钟，超过 B210 在双发射链下 30.72 MHz 的上限——这是设计实验前值得先知道的硬件边界。

控制面上两套栈基本打平。四台 UE 各做十轮飞行模式开关（脚本控制，四台同时竞争资源）的平均结果是：C1 在两个平台上都是 87.7 ms，C3 为 88.5 ms，C2 为 91.9 ms；单点最好成绩是 OAI + B210 + C3 的 85.3 ms，第二名（srsRAN + N310 + C1）只落后 1.65%，统计上等价。最差的 OAI + N310 + C2 也只比最好高 15.2%。全部组合的离散度小到足以说明：RRC 建立时延不是区分这两套栈的有效指标。

分野出现在数据面，而且大体上偏向 srsRAN。以 3GPP TS 38.306 计算的理论吞吐为基准，srsRAN 在所有 SDR 与配置下的下行都稳定在理论值的约 70–73%，而 OAI 在 31% 到 78% 之间波动，并在 MIMO 下明显塌陷。上行则是两者共同的短板——只有理论值的 5% 到 49%——作者将其标记为当前开源 5G 上行实现的普遍局限，而非某一栈独有的问题。在真实应用负载下（四台 UE 并发的点播、12 Mbps/24 fps 的 Owncast 直播、以及三台 UE 经 Sunshine/Moonlight 串流的 1080p60/20 Mbps 云游戏），srsRAN 在每一项上都给出最好结果，OAI 则在特定 SDR/配置组合下出现更高时延、更大抖动，甚至直接掉线。

## Key technical points (EN)

- **Matched testbed**: Intel Xeon Gold 5215 / 96 GB, Open5GS v2.7.2 core, OAI or srsRAN CU+DU in Docker 27.5.1, 3GPP split Option 8, USRP B210 and N310 via UHD 4.1.0.0, Motorola Edge 20 UEs with Sysmocom S1J1 SIMs, ANT-5GWWS3-SMA antennas.
- **Qualitative feature table**: OAI = Rel-15/16/17, written in C, container + pod virtualization, up to 2x2 MIMO, experimental 120 kHz SCS for FR2, medium install / high configuration difficulty. srsRAN = Rel-17, C++, container, up to 4x4 MIMO, FR1 15/30 kHz only, low install / low configuration difficulty. Both support split 7.2, DPDK, TDD/FDD, 256-QAM, network slicing and preliminary NTN.
- **Configurations**: C1 = 256-QAM / 30 kHz / 20 MHz / 1 layer; C2 = same at 40 MHz; C3 = 20 MHz with 2 layers. 2x2 at 40 MHz is impossible on the B210 (needs a 46.08 MHz master clock vs the board's 30.72 MHz limit with two TX chains).
- **RRC Setup (control plane)**: C1 87.7 ms (both stacks), C3 88.5 ms, C2 91.9 ms; best single result OAI/B210/C3 at 85.3 ms, second best within 1.65%, worst (OAI/N310/C2) 15.2% above best. Four UEs connecting and disconnecting simultaneously via a Python-driven airplane-mode script, ten cycles each.
- **Downlink vs 3GPP TS 38.306 theory**: srsRAN 70-73% of theoretical throughput across all SDR/config pairs (e.g. 121.8 Mbps in C3 on both boards); OAI ranges 31-78%, achieving only 45.7% (B210) and 43.8% (N310) of srsRAN's C3 throughput because of MIMO instability. In C2 on the N310, OAI leads (137.0 vs 122.8 Mbps, 78% of theory).
- **Uplink is the shared weak point**: 5-49% of theoretical throughput across all combinations; srsRAN's C3 uplink on the B210 was so unstable it could not be completed at all.
- **Spectral efficiency**: srsRAN's downlink SE held up when swapping B210 for N310, indicating the dominant factor is RAN configuration, not the SDR hardware.
- **Real applications**: VoD (Big Buck Bunny 1080p60, four UEs, ~60 chunks of 10 s each) — OAI needed >2.8 s to load 50% of chunks in C1 while srsRAN's median was ~1.5 s. Live streaming — OAI 33.91% higher latency than srsRAN in C1 plus connection loss on the B210; srsRAN best ~120 ms mean; worst case OAI/N310 in C3 at 485.09 ms mean. Cloud gaming — srsRAN uniform at ~24.06 ms mean latency (best: C2/N310, 23.54 ms latency, 5.31 ms jitter); OAI unstable with heavy jitter outliers, though dropped frames stayed near zero throughout.

## Key technical points (ZH)

- **对齐的测试床**：Intel Xeon Gold 5215 / 96 GB，Open5GS v2.7.2 核心网，OAI 或 srsRAN 的 CU+DU 跑在 Docker 27.5.1 中，3GPP 切分 Option 8，USRP B210 与 N310 经 UHD 4.1.0.0 接入，UE 为配 Sysmocom S1J1 卡的 Motorola Edge 20，天线 ANT-5GWWS3-SMA。
- **定性特性对照表**：OAI = Rel-15/16/17，C 语言，容器 + Pod 虚拟化，最高 2x2 MIMO，FR2 下有实验性的 120 kHz 子载波间隔，安装难度中等 / 配置难度高。srsRAN = Rel-17，C++，容器，最高 4x4 MIMO，仅 FR1 15/30 kHz，安装与配置难度均低。两者都支持 7.2 切分、DPDK、TDD/FDD、256-QAM、网络切片与初步 NTN。
- **三种配置**：C1 = 256-QAM / 30 kHz / 20 MHz / 单流；C2 = 同上但 40 MHz；C3 = 20 MHz 双流。40 MHz 下的 2x2 在 B210 上无法实现（需 46.08 MHz 主时钟，而该板双发射链上限为 30.72 MHz）。
- **RRC 建立（控制面）**：C1 为 87.7 ms（两栈相同），C3 为 88.5 ms，C2 为 91.9 ms；单点最佳为 OAI/B210/C3 的 85.3 ms，第二名落后 1.65% 以内，最差（OAI/N310/C2）高出最佳 15.2%。四台 UE 由 Python 脚本控制飞行模式同时连断，各十轮。
- **下行相对 3GPP TS 38.306 理论值**：srsRAN 在所有 SDR/配置组合下稳定在理论吞吐的 70–73%（例如 C3 下两块板都是 121.8 Mbps）；OAI 在 31–78% 之间，因 MIMO 不稳定，C3 下仅达到 srsRAN 的 45.7%（B210）与 43.8%（N310）。而在 N310 上的 C2，OAI 反超（137.0 对 122.8 Mbps，为理论值的 78%）。
- **上行是共同短板**：所有组合仅达理论吞吐的 5–49%；srsRAN 在 B210 上的 C3 上行不稳定到根本无法完成测试。
- **频谱效率**：srsRAN 的下行频谱效率在 B210 换成 N310 后依然稳定，说明主导因素是 RAN 配置参数而非 SDR 硬件。
- **真实应用**：点播（Big Buck Bunny 1080p60，四台 UE，每台约 60 个 10 秒切片）——C1 下 OAI 需要超过 2.8 秒才能加载完 50% 的切片，srsRAN 中位数约 1.5 秒。直播——C1 下 OAI 时延比 srsRAN 高 33.91%，并在 B210 上掉线；srsRAN 最佳均值约 120 ms；最差情形为 C3 下的 OAI/N310，均值 485.09 ms。云游戏——srsRAN 各配置一致，均值约 24.06 ms（最佳为 C2/N310，时延 23.54 ms、抖动 5.31 ms）；OAI 不稳定、抖动离群点多，但丢帧率在所有情形下都接近零。

## Why it matters / what's new (EN)

The public KB is full of results *obtained on* these two stacks — `2026-07-24_arxiv-srs-xapp-indoor-localization-oai` (SRS-based localization xApp on OAI), `2026-08-12_arxiv-bvlos-drones-oran-5g-slicing` (OAI + FlexRIC slicing for drones), `2026-08-23_arxiv-oai-symbol-domain-ofdm-radar-e2sm` (OFDM radar inside an OAI gNB), `2026-08-04_arxiv-metis-declarative-slice-orchestrator` (OAI + Open5GS slice orchestration), `2026-08-12_arxiv-5g-edge-slam-semantic-fiducial` (srsRAN + Open5GS edge SLAM) — but nothing that measures the platforms themselves against each other. This entry is the missing baseline: when a KB entry reports a number obtained on OAI or on srsRAN, this paper says how much of that number is the stack.

Three findings are directly useful for reading the rest of the cellular corpus. First, downlink results are stack-dependent by a factor that can exceed 2x under MIMO, so cross-paper throughput comparisons between an OAI testbed and an srsRAN testbed are not meaningful without this correction. Second, uplink on open-source 5G tops out between 5% and 49% of 3GPP theoretical throughput on both stacks — a hard ceiling that constrains every uplink-side experiment in the KB, including the SRS-extraction and passive-radar work that leans on uplink signals. Third, srsRAN's spectral efficiency was insensitive to swapping the B210 for the N310, which says the configuration parameters dominate the SDR choice, at least in these bandwidths.

It also complements `2026-08-28_arxiv-pro-ran-cu-du-processor-characterization` from the opposite direction: PRO-RAN measures what the disaggregated RAN costs the *processor* on the OCUDU stack; this paper measures what two other stacks deliver to the *user* over real radios and real handsets. Note the provenance: this is an arxiv upload (26 Aug 2026) of a paper published at IEEE WCNPS 2025 (27-28 November 2025). It clears the twelve-month postprint bar with about three months to spare, and it is ingested deliberately as the platform-comparison baseline the bin lacks — but its numbers reflect the stacks as they stood in late 2025, and both projects move quickly.

## Why it matters / what's new (ZH)

公共知识库里有大量**跑在**这两套栈上的结果——`2026-07-24_arxiv-srs-xapp-indoor-localization-oai`（OAI 上基于 SRS 的定位 xApp）、`2026-08-12_arxiv-bvlos-drones-oran-5g-slicing`（OAI + FlexRIC 的无人机切片）、`2026-08-23_arxiv-oai-symbol-domain-ofdm-radar-e2sm`（OAI gNB 内的 OFDM 雷达）、`2026-08-04_arxiv-metis-declarative-slice-orchestrator`（OAI + Open5GS 的切片编排）、`2026-08-12_arxiv-5g-edge-slam-semantic-fiducial`（srsRAN + Open5GS 的边缘 SLAM）——但从没有一条去测量平台自身的相互差距。本条目补上了这个缺失的基线：当某条知识库条目给出一个在 OAI 或 srsRAN 上测得的数字时，这篇论文能告诉你其中有多少来自栈本身。

其中三点结论对阅读整个蜂窝语料库直接有用。第一，下行结果依赖于栈的程度在 MIMO 下可超过 2 倍，因此把某个 OAI 测试床与某个 srsRAN 测试床的吞吐数字直接跨论文对比，在没有这项修正前是没有意义的。第二，开源 5G 的上行在两套栈上都只能达到 3GPP 理论吞吐的 5%–49%——这是一个硬天花板，约束着知识库中所有上行侧实验，包括依赖上行信号的 SRS 提取与无源雷达工作。第三，srsRAN 的频谱效率在 B210 换成 N310 后基本不变，说明至少在这些带宽下，配置参数的影响压过了 SDR 的选择。

它同时从相反方向补足了 `2026-08-28_arxiv-pro-ran-cu-du-processor-characterization`：PRO-RAN 测的是 OCUDU 栈上拆分式 RAN 对**处理器**的开销，本文测的是另外两套栈经真实射频与真实手机交付给**用户**的性能。需要说明来源：这是一篇 2026 年 8 月 26 日上传 arxiv、原发表于 IEEE WCNPS 2025（2025 年 11 月 27–28 日）的论文。它以约三个月的余量通过了十二个月的后印本时效门槛，此处作为该分区缺失的平台比较基线被有意收录——但其数据反映的是两套栈在 2025 年底的状态，而这两个项目都迭代很快。
