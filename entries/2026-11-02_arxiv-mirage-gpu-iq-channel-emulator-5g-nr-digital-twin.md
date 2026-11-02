---
id: 2026-11-02_arxiv-mirage-gpu-iq-channel-emulator-5g-nr-digital-twin
date_published: 2026-10-28
date_found: 2026-11-02
type: academic-paper
technology: cellular
title_en: "MIRAGE: A GPU-Accelerated IQ-Level Channel Emulator for Real-Time Wireless Digital Twins"
title_zh: "MIRAGE：面向实时无线数字孪生的 GPU 加速 IQ 级信道仿真器"
url: "https://arxiv.org/abs/2610.38918"
source_quality: full
topics: [digital-twin, channel-emulation, GPU, OpenAirInterface, OCUDU, O-RAN, xApp, network-slicing, 5G-NR]
topic_primary: open-ran
topics_secondary: [5g-nr, network-slicing]
novelty_score: 3
---

## Summary (EN)

Ali Saeizadeh, Angelo Feraudo, Avaneeth Anil, Leonardo Bonati, Pedram Johari and Tommaso Melodia (Northeastern University) start from the need to evaluate RAN changes and control policies before applying them to a live network. A wireless digital twin must run the real protocol stack (HARQ, link adaptation, RLC segmentation, scheduling), apply channel effects to the baseband IQ samples so that CQI and BLER respond to the channel, and keep up with the NR slot timing. They present MIRAGE, a GPU channel emulator that connects to software 5G NR stacks (OpenAirInterface and OCUDU) through radio-driver plugins, so nothing above the device-driver interface changes.

The design batches per-UE SISO and MIMO frequency-domain filtering on the GPU, moves timestamped IQ samples through shared memory, and decouples the channel model (for example a ray-tracing server) from IQ processing: channel frequency responses arrive asynchronously through Redis and are held in versioned buffers so each processing interval uses a complete coefficient set. On one NVIDIA H100 at 61.44 Msps (30 kHz SCS) the tested 0.5 ms bidirectional processing criterion is met for eight SISO links, four 2x2 links or one 4x4 link; waveform errors stay within one integer quantization step, and no mixed coefficient versions appear in 16.7 million analysed slots. In a case study on the X5G testbed, a PRB-slicing xApp is evaluated in the twin before deployment; both slices reach their throughput caps, needing one physical reconfiguration in line-of-sight and four in non-line-of-sight conditions.

## Summary (ZH)

Ali Saeizadeh、Angelo Feraudo、Avaneeth Anil、Leonardo Bonati、Pedram Johari 与 Tommaso Melodia（美国东北大学）的出发点是：RAN 的改动与控制策略应当在作用于现网之前先行评估。无线数字孪生需要运行真实协议栈（HARQ、链路自适应、RLC 分段、调度），把信道效应施加到基带 IQ 样点上以使 CQI 与 BLER 随信道变化，并跟上 NR 时隙时序。他们提出 MIRAGE：一个通过无线电驱动插件接入软件 5G NR 协议栈（OpenAirInterface 与 OCUDU）的 GPU 信道仿真器，设备驱动接口以上无需任何改动。

其设计在 GPU 上对每个 UE 的 SISO/MIMO 频域滤波做批处理，通过共享内存传递带时间戳的 IQ 样点，并把信道模型（如射线追踪服务器）与 IQ 处理解耦：信道频率响应经 Redis 异步到达，存放于带版本的缓冲区，使每个处理区间都使用完整的一套系数。在单块 NVIDIA H100 上、61.44 Msps（30 kHz SCS）时，8 条 SISO 链路、4 条 2x2 链路或 1 条 4x4 链路满足所测的 0.5 ms 双向处理标准；波形误差不超过一个整数量化步长，在分析的 1670 万个时隙中未出现混用系数版本的情况。在 X5G 试验床的案例中，PRB 切片 xApp 先在孪生环境中评估再部署；两个切片均达到吞吐上限，视距条件下需要一次物理重配置，非视距条件下需要四次。

## Key technical points (EN)

- Three stated design requirements: full-stack fidelity, IQ-level channel application, and real-time operation with state exchange with the physical RAN (via a broker and O-RAN RIC/xApp/E2 paths).
- Frequency-domain filtering with batched GPU dispatch; per-link batching cuts dispatch overhead (2.5-2.7x versus per-link dispatch at 16 SISO links).
- GPU versus a matched six-core FFTW CPU baseline: the CPU is faster at one link for small blocks; the GPU gains grow with workload (about 1.95x-2.55x at 16 links, 2.93x for an eight-link 2x2 case).
- Operating limits: the passing link count falls with antenna count and sample rate (61.44 Msps: 8 SISO, 4 2x2, 1 4x4; 122.88 Msps: 8 SISO, 1 2x2). Uplink is the tighter direction; a downlink-only timing check would overstate the range.
- Full-stack runs with OAI deliver the offered traffic at the evaluated loads, but synchronization failures limit reliability: all criteria are met in 5 of 5 single-cell runs and 4 of 5 two-cell runs, and in none of the four-cell runs. OCUDU is validated in SISO operation only.
- Case study: slice resource allocation in the X5G twin; prediction errors against the physical network are reported as a remaining limit for transfer.

## Key technical points (ZH)

- 提出的三项设计需求：全栈保真、IQ 级信道施加，以及实时运行并通过代理与 O-RAN RIC/xApp/E2 路径和物理 RAN 交换状态。
- 频域滤波配合 GPU 批量调度；在 16 条 SISO 链路时，按链路批处理相比逐链路调度减少调度开销（约 2.5-2.7 倍）。
- 与匹配的六核 FFTW CPU 基线对比：小数据块单链路时 CPU 更快；GPU 优势随负载增大（16 条链路约 1.95-2.55 倍，8 条 2x2 链路约 2.93 倍）。
- 运行边界：可通过的链路数随天线数与采样率下降（61.44 Msps：8 条 SISO、4 条 2x2、1 条 4x4；122.88 Msps：8 条 SISO、1 条 2x2）。上行是更紧的方向，仅检查下行时序会高估可用范围。
- 与 OAI 的全栈运行在所评估负载下可交付所提供的流量，但同步失败限制了可靠性：单小区 5/5、双小区 4/5 的运行满足全部标准，四小区运行 0/5 满足。OCUDU 仅验证了 SISO 运行。
- 案例：在 X5G 孪生中评估切片资源分配；论文将与物理网络之间的预测误差列为迁移时的剩余限制。

## Why it matters / what's new (EN)

The authors compare MIRAGE with other emulation platforms (hardware emulators such as Colosseum, scene-based simulators, and software platforms such as OAI rfsim, vrtsim, Tiny-Twin and the Sionna Research Kit) and position it as a batched, GPU-based path that keeps the whole stack and an asynchronous external channel model. The reported evidence is bounded: it is tested on one H100, OCUDU only in SISO, and multi-cell scaling is not yet reliable, so the value is in the documented operating limits as much as the headline throughput.

## Why it matters / what's new (ZH)

作者将 MIRAGE 与其他仿真平台（如 Colosseum 等硬件仿真器、基于场景的仿真器，以及 OAI rfsim、vrtsim、Tiny-Twin、Sionna Research Kit 等软件平台）对比，将其定位为保留完整协议栈并支持异步外部信道模型的批处理 GPU 路径。所报告的证据有界：仅在单块 H100 上测试，OCUDU 只验证了 SISO，多小区扩展尚不可靠，因此文中记录的运行边界与吞吐数字同样有价值。

## Images

None.
