---
id: 2026-09-04_arxiv-e3controller-dapps-ocudu
date_published: 2026-09-02
date_found: 2026-09-04
type: academic-paper
technology: cellular
title_en: "Bringing dApps to OCUDU: An E3 Controller for Real-Time Open RAN Intelligence"
title_zh: "让dApp接入OCUDU：面向实时开放RAN智能的E3控制器"
url: "https://arxiv.org/abs/2609.03162"
source_quality: full
topics: [O-RAN, dApps, E3-interface, OCUDU, real-time-RIC, jbpf, sidecar, spectrum-sensing]
topic_primary: open-ran
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Angelo Feraudo, Ravis Shirkhani, Stefano Maxenti, Andrea Lacava, Michele Polese and Tommaso Melodia (arXiv v1, 2 Sep 2026) present an E3Controller that brings the O-RAN Alliance's E3 interface — the standardized path for "dApps," i.e. programmable applications with sub-millisecond access to PHY- and MAC-layer signals for use cases such as spectrum sharing, channel-aware scheduling and integrated sensing — to OCUDU, the Linux Foundation's open-source CU/DU project. The paper's stated gap: E3 reference implementations already exist for OpenAirInterface and NVIDIA Aerial, but OCUDU "has lacked a comparable E3 path," leaving a hole in the emerging AI-RAN ecosystem where dApps are meant to interoperate across different RAN software stacks.

The E3Controller runs as a separate sidecar daemon alongside the OCUDU gNB rather than being compiled into it: only lightweight jbpf hook macros and an agent-initialization call live inside OCUDU itself, while all E3AP encoding/decoding, dApp subscription management and message dispatching happen outside, in the sidecar. Two conditionally-compiled jbpf hooks were added to OCUDU — one on the fronthaul (OFH) uplink receive path and one on the upper-PHY per-slot symbol handler — and compile to no-ops when disabled. Data crosses the OCUDU/sidecar boundary over jbpf's shared-memory IPC, with a separate LCM (lifecycle-management) IPC channel handling codelet subscribe/unsubscribe events; inside the sidecar, a three-stage pipeline (a JbpfDispatcher poll stage that routes buffers by stream ID, a service-model-specific worker stage, and a libE3 publisher stage that performs ASN.1 APER or JSON encoding over ZMQ) turns raw hook data into standardized E3 Indications. Two Service Models are implemented: a pre-decompression Spectrum SM attached to the fronthaul hook that extracts eCPRI metadata and exports compressed I/Q, and a post-decompression L1 SM attached to the upper-PHY hook that stores per-slot resource-grid samples in a shared-memory region and sends only metadata references to keep the high-rate data path efficient. A spectrum-sensing dApp reading uplink I/Q samples through this path serves as the reference use case, described by the authors as "the most demanding data path currently supported by the E3Controller."

The system was evaluated on an O-RAN 7.2x testbed on X5G infrastructure (an OCUDU pod on OpenShift connected via switch to a Foxconn RPQN 4800 radio unit, with a Samsung S23 as the UE). Downlink UDP throughput (~490 Mbps) and uplink throughput (~72 Mbps) were statistically indistinguishable with the E3Controller and dApp active versus a baseline with neither running, regardless of ASN.1 or JSON encoding. Running the E3Controller and dApp added roughly two CPU cores and about 2-3 W of dynamic power at a 500 Mbps downlink workload and 1-2 W at a 100 Mbps uplink workload, and grew the container's memory footprint from 3.5 GB to 4.4 GB. End-to-end RAN-to-dApp latency for the L1 Service Model had a median of 115-120 microseconds with an interquartile range of about 10 microseconds — well inside the sub-millisecond budget the E3 interface targets — of which the shared-memory grid transfer and write dominate at roughly 69 microseconds, the libE3 publisher stage adds about 24 microseconds, and encoding itself is negligible (ASN.1 about 1.2 microseconds versus JSON about 3.6 microseconds). The authors position this as the first end-to-end E3 integration with OCUDU, enabling the same dApps that already run on OpenAirInterface and NVIDIA Aerial to run on OCUDU as well, and describe future work turning the E3Controller from a telemetry-export path into a general execution platform that lets dApps "dynamically inject logic into selected RAN functions."

## Summary (ZH)

Angelo Feraudo、Ravis Shirkhani、Stefano Maxenti、Andrea Lacava、Michele Polese 与 Tommaso Melodia（arXiv v1，2026年9月2日）提出了一款 E3Controller，将 O-RAN 联盟标准化的 E3 接口——即让"dApp"（对PHY层和MAC层信号具有亚毫秒级访问权限的可编程应用，用于频谱共享、感知信道的调度以及一体化感知等场景）接入 Linux 基金会开源 CU/DU 项目 OCUDU。论文指出的缺口是：E3 参考实现此前已在 OpenAirInterface 和 NVIDIA Aerial 上存在，但 OCUDU "缺乏与之对应的 E3 路径"，这在新兴的 AI-RAN 生态中留下了一个空白——按设想，dApp 本应能够跨不同 RAN 软件栈互操作。

E3Controller 以独立的旁挂（sidecar）守护进程形式运行在 OCUDU gNB 旁，而非编译进 gNB 本体：OCUDU 内部仅保留轻量级的 jbpf 钩子宏与一次 agent 初始化调用，全部 E3AP 编解码、dApp 订阅管理与消息分发都在旁挂进程外部完成。研究者在 OCUDU 中新增了两个可条件编译的 jbpf 钩子——一个位于前传（OFH）上行接收路径，另一个位于按时隙处理的上层PHY符号处理器——在禁用时均编译为空操作。数据通过 jbpf 的共享内存 IPC 跨越 OCUDU 与旁挂进程的边界，另有独立的 LCM（生命周期管理）IPC 通道处理 codelet 的订阅/取消订阅事件；旁挂进程内部的三阶段流水线（按流ID路由缓冲区的 JbpfDispatcher 轮询阶段、服务模型专属的工作阶段，以及通过 ZMQ 执行 ASN.1 APER 或 JSON 编码的 libE3 发布阶段）将原始钩子数据转换为标准化的 E3 Indication。论文实现了两个服务模型：附着于前传钩子、在解压缩之前提取 eCPRI 元数据并导出压缩 I/Q 数据的频谱服务模型（Spectrum SM），以及附着于上层PHY钩子、在解压缩之后将逐时隙资源栅格样本存入共享内存区域、仅发送元数据引用以保持高速率数据路径效率的 L1 服务模型（L1 SM）。作者以一个通过此路径读取上行 I/Q 样本的频谱感知 dApp 作为参考用例，并称其为"E3Controller目前支持的最苛刻的数据路径"。

该系统在基于 X5G 基础设施的 O-RAN 7.2x 测试床上完成评估（OpenShift 上运行的 OCUDU pod，通过交换机连接至 Foxconn RPQN 4800 射频单元，UE 为三星 S23）。无论采用 ASN.1 还是 JSON 编码，在启用 E3Controller 与 dApp 的情况下，下行 UDP 吞吐量（约490 Mbps）与上行吞吐量（约72 Mbps）与两者均未运行的基线相比，在统计上未见差异。运行 E3Controller 与 dApp 额外占用约两个CPU核心，下行 500 Mbps 负载下增加约 2-3 瓦、上行 100 Mbps 负载下增加约 1-2 瓦动态功耗，并使容器内存占用从3.5 GB增至4.4 GB。L1 服务模型的端到端"RAN到dApp"延迟中位数为115-120微秒、四分位距约10微秒——完全处于 E3 接口所瞄准的亚毫秒预算之内——其中共享内存的栅格数据传输与写入占主导地位（约69微秒），libE3 发布阶段增加约24微秒，编码本身可忽略不计（ASN.1约1.2微秒，JSON约3.6微秒）。作者将本工作定位为首个针对 OCUDU 的端到端 E3 集成，使得已运行在 OpenAirInterface 与 NVIDIA Aerial 上的同一批 dApp 也能够运行在 OCUDU 上；并将未来工作描述为把 E3Controller 从单纯的遥测导出路径，进一步发展为让 dApp 能够"向选定的 RAN 功能动态注入逻辑"的通用执行平台。

## Key technical points (EN)
- Gap: E3 (the O-RAN dApp interface for sub-millisecond PHY/MAC access) had reference implementations for OpenAirInterface and NVIDIA Aerial, but none for the Linux Foundation's OCUDU CU/DU project.
- Architecture: E3Controller runs as a sidecar daemon, not compiled into OCUDU; only jbpf hook macros and agent init live in OCUDU. Shared-memory IPC (jbpf) carries data, a separate LCM IPC channel carries codelet lifecycle events.
- Two jbpf hooks added to OCUDU: fronthaul (OFH) uplink receive path, and upper-PHY per-slot symbol handler; both no-op when disabled.
- Two Service Models: Spectrum SM (pre-decompression, eCPRI metadata + compressed I/Q) and L1 SM (post-decompression, per-slot resource-grid samples via shared memory + metadata references).
- Testbed: O-RAN 7.2x on X5G infrastructure, OCUDU pod on OpenShift, Foxconn RPQN 4800 radio unit, Samsung S23 UE.
- Results: ~490 Mbps DL / ~72 Mbps UL throughput unchanged with E3Controller+dApp active; ~2 CPU cores added, plus about 2-3 W dynamic power at 500 Mbps DL and 1-2 W at 100 Mbps UL; memory 3.5 GB -> 4.4 GB; median RAN-to-dApp latency 115-120 microseconds (IQR ~10 microseconds); grid transfer/write ~69 microseconds dominates, libE3 publisher ~24 microseconds, ASN.1 encoding ~1.2 microseconds vs JSON ~3.6 microseconds.

## Key technical points (ZH)
- 缺口：E3（O-RAN 面向 dApp 的亚毫秒级PHY/MAC接入接口）此前已有面向 OpenAirInterface 与 NVIDIA Aerial 的参考实现，但 Linux 基金会的 OCUDU CU/DU 项目尚无对应实现。
- 架构：E3Controller 以旁挂守护进程运行，不编译进 OCUDU；OCUDU 内部仅保留 jbpf 钩子宏与 agent 初始化。jbpf 共享内存 IPC 传输数据，独立的 LCM IPC 通道传输 codelet 生命周期事件。
- 在 OCUDU 中新增两个 jbpf 钩子：前传（OFH）上行接收路径，以及按时隙处理的上层PHY符号处理器；禁用时均为空操作。
- 两个服务模型：频谱服务模型（解压缩前，提取 eCPRI 元数据+压缩I/Q）与 L1 服务模型（解压缩后，经共享内存传输逐时隙资源栅格样本+元数据引用）。
- 测试床：基于 X5G 基础设施的 O-RAN 7.2x，OpenShift 上的 OCUDU pod，Foxconn RPQN 4800 射频单元，三星 S23 作为UE。
- 结果：启用 E3Controller 与 dApp 后，下行约490 Mbps、上行约72 Mbps 吞吐量未见变化；额外占用约2个CPU核心，下行500 Mbps 负载下增加约2-3瓦、上行100 Mbps 负载下增加约1-2瓦动态功耗；内存占用由3.5 GB增至4.4 GB；"RAN到dApp"延迟中位数115-120微秒（四分位距约10微秒）；栅格数据传输与写入约占69微秒（主导因素），libE3发布阶段约24微秒，ASN.1编码约1.2微秒，JSON编码约3.6微秒。

## Why it matters / what's new (EN)
This knowledge base's open-ran coverage already tracks the OCUDU stack closely — GPU/CUDA PHY acceleration (2026-08-07) and processor-level CU/DU characterization (PRO-RAN, 2026-08-28) both measure OCUDU's compute-plane behavior — but neither addresses the control-plane question of how a real-time dApp reaches OCUDU's PHY/MAC signals in the first place. This paper closes that specific gap by porting the standardized E3 interface, previously available only on OpenAirInterface and NVIDIA Aerial, onto OCUDU via a sidecar architecture that adds no measured throughput penalty. It is the first entry here documenting an E3/dApp control-loop implementation (as distinct from the near-RT RIC xApp/rApp tier already covered by other entries) on this specific RAN stack.

## Why it matters / what's new (ZH)
本知识库的开放RAN板块此前已密切跟踪 OCUDU 技术栈——GPU/CUDA PHY加速条目（2026-08-07）与处理器级CU/DU特性刻画条目（PRO-RAN，2026-08-28）均测量了 OCUDU 计算平面的行为——但均未涉及实时dApp如何首先接入 OCUDU 的PHY/MAC信号这一控制平面问题。本文通过旁挂架构将此前仅在 OpenAirInterface 与 NVIDIA Aerial 上可用的标准化 E3 接口移植到 OCUDU，且未带来可测得的吞吐量损失，从而填补了这一具体缺口。这是本知识库中首个记录该特定RAN技术栈上 E3/dApp 控制回路实现（区别于其他条目已覆盖的近实时RIC xApp/rApp层级）的条目。

## Images

None.
