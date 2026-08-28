---
id: 2026-08-28_arxiv-pro-ran-cu-du-processor-characterization
date_published: 2026-08-27
date_found: 2026-08-28
type: academic-paper
technology: cellular
title_en: "PRO-RAN: Processor-Level Characterization of Open RAN Centralized and Distributed Units"
title_zh: "PRO-RAN：Open RAN 集中单元与分布单元的处理器级特征刻画"
url: "https://arxiv.org/abs/2608.26498"
source_quality: full
topics: [O-RAN, CU, DU, OCUDU, Open5GS, profiling, vRAN, Intel-VTune]
topic_primary: open-ran
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

A team from UT Dallas (Fumagalli's OpNeAR lab) working with Intel asks a question that O-RAN economics keeps running into but rarely measures directly: once the RAN is disaggregated into a Centralized Unit (CU) and a Distributed Unit (DU) running as ordinary software on general-purpose servers, *what does each half actually do to the processor*? The usual answers — CPU utilization percentages and throughput — are aggregate numbers. They tell an operator that a core is busy but not which function burned it, and they say nothing about whether the pipeline stalled on instruction delivery, on speculation, or on data availability. Those distinctions are exactly what decides how you size a server, where you place a function, what you optimize in software, and what you push into a hardware accelerator.

PRO-RAN is a controlled characterization framework that profiles independently deployed CU and DU functions under matched hardware and traffic conditions. The testbed is entirely open-source and reproducible in its software layer: the Linux Foundation OCUDU stack (commit ef8af93d) supplies the CU and DU, srsUE (commit 6bcbd9e) supplies an emulated UE, Open5GS v2.7.6 supplies the core, and UE-to-DU IQ samples cross a ZeroMQ-based radio interface rather than real RF. The radio configuration is a standalone 5G NR carrier in FDD band n3, 10 MHz, 15 kHz subcarrier spacing, 52 PRBs, up to 64-QAM, with the 3GPP Option 2 functional split (F1-C and F1-U between CU and DU). CU, DU, UE and core each run on separate hosts; CU and DU sit on identical single-socket 40-core / 80-thread platforms with matched kernel, frequency, affinity, SMT and container settings, so any difference in the measurements is attributable to the protocol function rather than the machine.

An Ansible workflow deploys, validates and profiles automatically. Crucially, it *proves the network is up before it profiles*: registration, PDU-session establishment and bidirectional packet delivery are all confirmed (CU PDCP activity, UE PDSCH reception, DU BSR activity, PUSCH transmission, core-side packet reception) before Intel VTune Profiler 2025.4 attaches to the `ocu` and `odu` process IDs. Eight independent 300-second collections cover two processes x two traffic conditions (idle baseline vs sustained bidirectional load, downlink UDP from TRex through the 5GC user plane and uplink iperf3 through the UE tunnel) x two analysis types (Hotspots and Top-Down Microarchitecture Analysis).

The headline finding is that CU and DU are not two sizes of the same workload — they respond to traffic in opposite ways. Over equal 300-second windows the CU's accumulated process CPU time roughly doubles from 17.3 s to 37.4 s, while the DU goes from 462.0 s to 628.4 s — that is, the DU burns more than 25x the CU's idle CPU time *before any user traffic exists at all*. The DU's dominant function under both conditions is `zmq_recv` (IQ-sample reception, 177.5 s to 183.5 s), with timing, mutex, ring-buffer and FAPI-to-PHY translation costs essentially flat; its load is timing-driven and traffic-independent. The CU's baseline is almost entirely `sleep_for` (15.3 s, unchanged), and everything that grows under load is packet work: batch send/receive syscalls (0 to 1.8 s and 0 to 1.3 s), `epoll_wait` (0.6 to 1.9 s), byte-buffer traversal (0 to 1.5 s) and atomic shared-state loads (0.1 to 1.2 s).

The Top-Down Microarchitecture Analysis splits the pipeline into Retiring / Front-End Bound / Bad Speculation / Back-End Bound and shows the same divergence one layer down. The CU's Back-End Bound share climbs from 47.3% to 58.2% under load while Retiring barely moves (23.6% to 23.9%) — more back-end pressure buying no extra useful work — even as Bad Speculation halves (15.6% to 7.8%) because steady packet flow makes branches predictable. The DU moves the other way: Back-End Bound *falls* from 54.5% to 49.9% and Retiring rises from 27.5% to 29.4%, with Bad Speculation rising from 9.3% to 11.4%. Both processes are back-end dominated throughout, which points at memory access and execution-resource availability, not instruction fetch, as the thing worth attacking.

## Summary (ZH)

美国 UT Dallas（Fumagalli 的 OpNeAR 实验室）与 Intel 合作，提出了一个 O-RAN 经济性反复触及却很少被直接测量的问题：当 RAN 被拆分为集中单元（CU）与分布单元（DU）、以普通软件形态运行在通用服务器上之后，**每一半到底对处理器做了什么**？常用的 CPU 利用率与吞吐都是聚合指标——它们只能说明某个核很忙，却无法指出是哪个函数消耗了它，更无法说明流水线究竟是卡在取指、卡在错误推测，还是卡在数据可用性上。而这些区分恰恰决定了服务器如何选型、功能如何摆放、软件优化哪里、以及什么该丢给硬件加速。

PRO-RAN 是一套受控的特征刻画框架，在**硬件与业务条件完全对齐**的前提下分别剖析独立部署的 CU 与 DU。测试床在软件层完全开源可复现：CU/DU 用 Linux Foundation 的 OCUDU（commit ef8af93d），UE 用 srsUE（commit 6bcbd9e）模拟，核心网用 Open5GS v2.7.6，UE 与 DU 之间的 IQ 采样经由基于 ZeroMQ 的射频接口传递而非真实射频。空口配置为 FDD n3 频段的 5G NR 独立组网载波，10 MHz 带宽、15 kHz 子载波间隔、52 个 PRB、最高 64-QAM，采用 3GPP Option 2 功能切分（CU 与 DU 之间为 F1-C 与 F1-U）。CU、DU、UE、核心网各占一台主机；CU 与 DU 部署在完全相同的单路 40 核 / 80 线程平台上，内核、频率、亲和性、SMT 与容器资源设置全部对齐，因此测量差异只能归因于协议功能本身而非机器。

一套 Ansible 流程自动完成部署、校验与剖析。关键在于它**先证明网络确实通了才开始剖析**：先确认注册、PDU 会话建立与双向收发（CU 的 PDCP 活动、UE 的 PDSCH 接收、DU 的 BSR 活动、PUSCH 发送、核心网侧收包），Intel VTune Profiler 2025.4 才附着到 `ocu` 与 `odu` 的进程号上。8 次各 300 秒的独立采集覆盖 2 个进程 × 2 种业务条件（空载基线 vs 持续双向负载，下行由 TRex 发 UDP 穿过 5GC 用户面、上行由 iperf3 穿过 UE 隧道）× 2 种分析类型（热点分析与自顶向下微架构分析）。

核心结论是：CU 与 DU 并非同一负载的大小两号，它们对业务的响应方向相反。在等长的 300 秒窗口内，CU 的累计进程 CPU 时间从 17.3 秒近乎翻倍到 37.4 秒，而 DU 从 462.0 秒升到 628.4 秒——也就是说，**在完全没有用户业务之前**，DU 的空载 CPU 开销已是 CU 的 25 倍以上。DU 在两种条件下的第一大函数都是 `zmq_recv`（IQ 采样接收，177.5→183.5 秒），定时、互斥锁、环形缓冲与 FAPI→PHY 转换的开销基本持平；其负载是定时驱动、与业务量无关的。CU 的基线几乎全部是 `sleep_for`（15.3 秒，负载下不变），负载下增长的全部是分组处理开销：批量收发系统调用（0→1.8 秒与 0→1.3 秒）、`epoll_wait`（0.6→1.9 秒）、字节缓冲遍历（0→1.5 秒）与原子共享状态读取（0.1→1.2 秒）。

自顶向下微架构分析把流水线槽位分为 Retiring / 前端受限 / 错误推测 / 后端受限，在更低一层显示出同样的分化。CU 的后端受限占比在负载下从 47.3% 升到 58.2%，而 Retiring 几乎不动（23.6%→23.9%）——后端压力增加却没换来有效工作量；同时错误推测减半（15.6%→7.8%），因为稳定的分组流让分支变得可预测。DU 的走向相反：后端受限**下降**（54.5%→49.9%），Retiring 上升（27.5%→29.4%），错误推测反而上升（9.3%→11.4%）。两个进程始终以后端受限为主，说明值得攻坚的是访存与执行资源可用性，而不是取指。

## Key technical points (EN)

- **Fully open-source, version-pinned testbed**: OCUDU `ef8af93d` (CU + DU), srsUE `6bcbd9e`, Open5GS v2.7.6, Intel VTune 2025.4; ZeroMQ radio interface instead of RF, so the split is exercised without an SDR front end.
- **Matched-platform methodology**: CU and DU on identical single-socket 40-core / 80-thread hosts with identical kernel, frequency, affinity, SMT and container settings; processor model withheld under a testbed agreement.
- **3GPP Option 2 split, SA NR band n3 FDD**, 10 MHz / 15 kHz SCS / 52 PRB / up to 64-QAM, one emulated UE (PLMN 00101, TAC 7), DL ARFCN 368500, F1-C and F1-U between CU and DU.
- **Validation gate before profiling**: Ansible confirms registration, PDU-session establishment and bidirectional delivery (CU PDCP, UE PDSCH, DU BSR, PUSCH, core-side receipt) so that no measurement is taken on a half-up network.
- **Eight 300-s process-scoped collections**: {CU, DU} x {baseline, load} x {Hotspots, Top-Down Microarchitecture Analysis}. Load = TRex UDP downlink through the 5GC user plane + iperf3 uplink through the UE tunnel.
- **CPU-time headline**: CU 17.3 s -> 37.4 s; DU 462.0 s -> 628.4 s over equal 300-s windows. The DU's *idle* cost alone exceeds the CU's loaded cost by more than an order of magnitude.
- **CU hotspots shift, DU hotspots do not**: CU baseline is `sleep_for` (15.3 s, flat) with growth concentrated in `__GI___sendmmsg` (+1.8 s), `__recvmmsg` (+1.3 s), `epoll_wait` (+1.3 s), byte_buffer iteration (+1.5 s) and atomic loads (+1.1 s). DU is pinned by `zmq_recv` (177.5 -> 183.5 s) with mutex (38.1 -> 35.2 s), ring-buffer pop (16.2 -> 14.6 s) and `fapi_to_phy_fastpath_translator` (5.8 -> 5.5 s) all approximately flat or slightly down.
- **Top-Down divergence**: CU Back-End Bound 47.3% -> 58.2% with Retiring flat at ~23.6-23.9% and Bad Speculation 15.6% -> 7.8%; DU Back-End Bound 54.5% -> 49.9%, Retiring 27.5% -> 29.4%, Bad Speculation 9.3% -> 11.4%. Both remain back-end dominated in every condition.
- **Design implication stated by the authors**: CU and DU warrant *function-specific* provisioning and acceleration strategies — the DU needs headroom for a large traffic-independent timing floor, the CU needs relief on the back-end path that user-plane packet handling stresses.

## Key technical points (ZH)

- **完全开源、版本锁定的测试床**：OCUDU `ef8af93d`（CU + DU）、srsUE `6bcbd9e`、Open5GS v2.7.6、Intel VTune 2025.4；用 ZeroMQ 射频接口替代真实射频，因此无需 SDR 前端即可跑通功能切分。
- **平台对齐方法学**：CU 与 DU 部署在完全相同的单路 40 核 / 80 线程主机上，内核、频率、亲和性、SMT、容器资源设置一致；处理器型号因测试床协议不予公开。
- **3GPP Option 2 切分、SA NR n3 频段 FDD**，10 MHz / 15 kHz 子载波间隔 / 52 PRB / 最高 64-QAM，单个模拟 UE（PLMN 00101，TAC 7），下行 ARFCN 368500，CU 与 DU 之间为 F1-C 与 F1-U。
- **剖析前设有校验闸门**：Ansible 先确认注册、PDU 会话建立与双向收发（CU 的 PDCP、UE 的 PDSCH、DU 的 BSR、PUSCH、核心网收包），确保不会在"半通"的网络上取数。
- **8 次 300 秒进程级采集**：{CU, DU} × {基线, 负载} × {热点分析, 自顶向下微架构分析}。负载 = TRex 下行 UDP 穿过 5GC 用户面 + iperf3 上行穿过 UE 隧道。
- **CPU 时间主结果**：等长 300 秒窗口内，CU 17.3 秒 → 37.4 秒；DU 462.0 秒 → 628.4 秒。DU 仅**空载**开销就比 CU 满载开销高一个数量级以上。
- **CU 热点会随负载迁移，DU 不会**：CU 基线几乎是 `sleep_for`（15.3 秒，持平），增量集中在 `__GI___sendmmsg`（+1.8 秒）、`__recvmmsg`（+1.3 秒）、`epoll_wait`（+1.3 秒）、字节缓冲遍历（+1.5 秒）与原子读（+1.1 秒）。DU 被 `zmq_recv` 钉死（177.5→183.5 秒），互斥锁（38.1→35.2 秒）、环形缓冲出队（16.2→14.6 秒）与 `fapi_to_phy_fastpath_translator`（5.8→5.5 秒）基本持平甚至略降。
- **自顶向下分析的分化**：CU 后端受限 47.3%→58.2%，Retiring 持平在约 23.6–23.9%，错误推测 15.6%→7.8%；DU 后端受限 54.5%→49.9%，Retiring 27.5%→29.4%，错误推测 9.3%→11.4%。两者在所有条件下都以后端受限为主。
- **作者给出的设计含义**：CU 与 DU 需要**按功能分别**做资源配置与加速设计——DU 要为庞大的、与业务量无关的定时开销底座预留余量，CU 则需要缓解用户面分组处理压出来的后端瓶颈。

## Why it matters / what's new (EN)

The public KB already holds several entries about *making* the disaggregated RAN faster: `2026-05-25_arxiv-vran-openairinterface-multi-instance-scaling` (how many OAI vRAN instances fit on one server), `2026-08-07_arxiv-ocudu-gpu-cuda-5g-phy` (DeepSig's GPU-resident CUDA backend inside the very same OCUDU stack), `2026-08-14_arxiv-radio-optical-confluence-edge-ran`, and `2026-08-19_arxiv-upf-dataplane-io-modes-5g-core` on the core-side I/O equivalent. What none of them supplies is the *baseline measurement those optimisations are implicitly aiming at*: a matched, function-scoped, microarchitecture-level picture of what the CU and DU cost before anyone accelerates anything. PRO-RAN is that measurement, and it is taken on the same OCUDU stack the 08-07 GPU entry accelerates, which makes the pair directly comparable.

Two results reframe assumptions the KB's existing O-RAN placement and energy entries lean on. First, the DU's cost is overwhelmingly a *traffic-independent timing floor* (462 s of CPU time in 300 s of wall clock with zero user traffic, dominated by IQ-sample reception), not a function of load — so placement and energy models that scale DU cost with offered traffic are mis-modelling the dominant term. Second, CU and DU respond to load in *opposite* microarchitectural directions, so a single provisioning heuristic applied to "RAN software" will be wrong for one of them. That is a concrete caution for the multi-instance packing question raised in the 05-25 entry and for the energy-aware CNF placement literature more generally.

Method-wise, the paper is also a small model of how to do this credibly: pinned commits, an explicit validation gate before any measurement, matched hosts, and process-scoped rather than system-wide profiling. Those are the details that decide whether a RAN performance number is reproducible, and they are the details most vRAN benchmarking papers omit.

## Why it matters / what's new (ZH)

公共知识库里已经有若干条目在讲**如何让**拆分后的 RAN 更快：`2026-05-25_arxiv-vran-openairinterface-multi-instance-scaling`（一台服务器能塞下多少 OAI vRAN 实例）、`2026-08-07_arxiv-ocudu-gpu-cuda-5g-phy`（DeepSig 在同一套 OCUDU 栈内部实现的 GPU 常驻 CUDA 后端）、`2026-08-14_arxiv-radio-optical-confluence-edge-ran`，以及核心网侧 I/O 的对应条目 `2026-08-19_arxiv-upf-dataplane-io-modes-5g-core`。它们都缺少一样东西——**这些优化隐含瞄准的那个基线测量**：在任何加速之前，CU 与 DU 各自的开销在对齐条件下、按函数粒度、深入到微架构层的完整画像。PRO-RAN 正是这个测量，而且它跑在 08-07 那条 GPU 条目所加速的同一套 OCUDU 栈上，两者可以直接对照。

其中两条结果动摇了知识库现有 O-RAN 摆放与能耗条目所依赖的假设。第一，DU 的开销压倒性地是一个**与业务量无关的定时底座**（300 秒墙钟内消耗 462 秒 CPU 时间且没有任何用户业务，主导项是 IQ 采样接收），而非负载的函数——因此那些把 DU 开销按业务量线性缩放的摆放与能耗模型，恰恰把主导项建模错了。第二，CU 与 DU 在负载下的微架构走向**相反**，所以任何对"RAN 软件"一视同仁的资源配置经验法则，必然对其中一方是错的。这对 05-25 条目提出的多实例打包问题、以及更广义的能耗感知 CNF 摆放文献，都是一个具体的警告。

在方法层面，这篇论文也是一个小而完整的可信范式：锁定提交号、测量前设置显式校验闸门、主机配置对齐、采用进程级而非系统级剖析。这些细节决定了一个 RAN 性能数字能否复现，而恰恰是多数 vRAN 基准测试论文省略的部分。

## Images

![PRO-RAN end-to-end 5G system model (CU / DU / UE / 5GC) | PRO-RAN 端到端 5G 系统模型（CU / DU / UE / 5GC）](https://arxiv.org/html/2608.26498v1/sys_model.png)
![OCUDU-based experimental testbed architecture with ZeroMQ radio interface and Open5GS core | 基于 OCUDU 的实验测试床架构，含 ZeroMQ 射频接口与 Open5GS 核心网](https://arxiv.org/html/2608.26498v1/architecture3.png)
