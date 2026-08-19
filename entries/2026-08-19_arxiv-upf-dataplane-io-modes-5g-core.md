---
id: 2026-08-19_arxiv-upf-dataplane-io-modes-5g-core
date_published: 2026-06-22
date_found: 2026-08-19
type: academic-paper
technology: cellular
title_en: "Comparing UPF Dataplane I/O Modes in a Cloud-Native 5G Core: AF_PACKET, AF_XDP, CNDP, and DPDK on SD-Core BESS-UPF"
title_zh: "云原生 5G 核心网 UPF 数据面 I/O 模式对比：SD-Core BESS-UPF 上的 AF_PACKET、AF_XDP、CNDP 与 DPDK"
url: "https://arxiv.org/abs/2608.14589"
source_quality: full
topics: [UPF, user-plane, DPDK, AF_XDP, CNDP, AF_PACKET, SD-Core, BESS, GTP-U, Kubernetes, kernel-bypass, cloud-native-5G]
topic_primary: 5g-nr
topics_secondary: [mec, network-slicing]
novelty_score: 3
---

## Summary (EN)
Shiva Valia, Nitin Rajput, Aditya Gairola (coRAN Labs, India) and Vipin Rathi (Ramanujan College, Delhi) — arXiv 22 Jun 2026, 34 pp., 19 figures — run a controlled, same-pipeline comparison of the four packet-I/O backends a cloud-native 5G **User Plane Function (UPF)** can use, holding the GTP-U / PDR / FAR / QER datapath constant on **SD-Core BESS-UPF** and swapping only the I/O layer: AF_PACKET, AF_XDP, CNDP, and DPDK. The UPF is deployed as a Juju-charmed operator on a Canonical Kubernetes cluster over Intel Xeon Gold 6148 dual-socket hosts with Intel XXV710 25 GbE SR-IOV NICs and a real-time kernel; load comes from their coRAN-UPF-Bench framework, plus an end-to-end validation against a 7.2-split CU/DU with a commercial UE. Metrics follow RFC 2544 / ETSI NFV-TST 009 (Non-Drop Rate, per-core throughput, latency/jitter histograms, CPU, loss).

The mode ranking is not the usual "DPDK wins outright." At matched low worker counts the kernel-bypass options are close: single-worker throughput is AF_XDP 3.69 Mpps, DPDK 2.99, CNDP 2.65, and AF_PACKET only 0.224 Mpps (~17× slower, full kernel stack + per-packet copy). DPDK's real advantage is **scaling**: it reaches 10.30 Mpps at 4 workers and 13.09 at 8, with the lowest latency (8.1 µs average, 16.2 µs P99), whereas AF_XDP and CNDP are **capped near 2 workers** by a per-netdev XDP-socket limit and RSS hashing on GTP-U outer headers that leaves extra workers idle. The paper's most useful half is operational: a catalogue of the traps that silently halve or block throughput — Kubernetes `limits.cpu` below the worker count triggering CFS throttling (6.2→10.3 Mpps when raised); the Intel iavf SR-IOV VF driver lacking an XDP hook (blocking AF_XDP/CNDP on VFs, PF-only); CNDP's undersized default UMEM `bufcnt` (raised 4×); mandatory unlimited RLIMIT_MEMLOCK; and a lab optics ceiling (~1.5 Gbps) that means the high Mpps figures reflect internal VEB switching, not wire forwarding. Recommendation: AF_XDP or CNDP as the cloud-native default where operators can't absorb DPDK's hugepage/IOMMU/vfio-pci/SR-IOV-CNI overhead; DPDK only on dedicated UPF hosts that own the NIC and can isolate CPUs.

## Summary (ZH)
Shiva Valia、Nitin Rajput、Aditya Gairola（印度 coRAN Labs）与 Vipin Rathi（德里 Ramanujan College）——2026 年 6 月 22 日 arXiv，34 页 19 图——对云原生 5G **用户面功能（UPF）** 可用的四种数据包 I/O 后端做了同一流水线的受控对比：在 **SD-Core BESS-UPF** 上保持 GTP-U / PDR / FAR / QER 数据路径不变，仅替换 I/O 层：AF_PACKET、AF_XDP、CNDP、DPDK。UPF 以 Juju charmed operator 部署于 Canonical Kubernetes 集群，主机为 Intel Xeon Gold 6148 双路 + Intel XXV710 25 GbE SR-IOV 网卡与实时内核；负载来自其 coRAN-UPF-Bench 框架，并对 7.2 切分 CU/DU + 商用 UE 做端到端验证。指标遵循 RFC 2544 / ETSI NFV-TST 009（非丢包率、每核吞吐、时延/抖动直方图、CPU、丢包）。

模式排名并非通常的"DPDK 全面碾压"。在同等低 worker 数下，内核旁路方案接近：单 worker 吞吐 AF_XDP 3.69 Mpps、DPDK 2.99、CNDP 2.65，而 AF_PACKET 仅 0.224 Mpps（约慢 17 倍，全内核栈 + 逐包拷贝）。DPDK 的真正优势在**扩展性**：4 worker 达 10.30 Mpps、8 worker 13.09，时延最低（平均 8.1 µs、P99 16.2 µs）；而 AF_XDP 与 CNDP 因每 netdev 的 XDP-socket 上限及 GTP-U 外层头的 RSS 哈希，**约 2 worker 即封顶**，多余 worker 空闲。论文最有用的一半是运维层面：一份会悄然腰斩或阻断吞吐的陷阱清单——Kubernetes `limits.cpu` 低于 worker 数触发 CFS 节流（提高后 6.2→10.3 Mpps）；Intel iavf SR-IOV VF 驱动无 XDP 钩子（在 VF 上阻断 AF_XDP/CNDP，仅 PF 可用）；CNDP 默认 UMEM `bufcnt` 过小（调大 4 倍）；须将 RLIMIT_MEMLOCK 设为无限；以及实验室光模块上限（约 1.5 Gbps），意味着高 Mpps 数据反映内部 VEB 交换而非线速转发。建议：运营商无法承受 DPDK 的大页/IOMMU/vfio-pci/SR-IOV-CNI 开销时，以 AF_XDP 或 CNDP 作为云原生默认；DPDK 仅用于独占网卡、可隔离 CPU 的专用 UPF 主机。

## Key technical points (EN)
- Constant datapath (GTP-U/PDR/FAR/QER) on SD-Core BESS-UPF; only I/O layer swapped across AF_PACKET, AF_XDP, CNDP, DPDK.
- Testbed: Xeon Gold 6148 dual-socket, Intel XXV710 25 GbE SR-IOV, Canonical Kubernetes, real-time kernel, Juju-charmed; coRAN-UPF-Bench + real 7.2-split CU/DU + commercial UE.
- Single-worker throughput: AF_XDP 3.69, DPDK 2.99, CNDP 2.65, AF_PACKET 0.224 Mpps. DPDK scales to 10.30 (4w) / 13.09 (8w) Mpps; latency 8.1 µs avg / 16.2 µs P99.
- AF_XDP & CNDP capped ~2 workers by per-netdev XDP-socket limit + GTP-U-outer-header RSS; extra workers idle.
- Deployment traps: CFS throttling from low `limits.cpu` (halves DPDK); iavf VF lacks XDP hook (PF-only for AF_XDP/CNDP); CNDP UMEM bufcnt undersized (×4); RLIMIT_MEMLOCK unlimited required; memlock/hugepage/IOMMU steps for DPDK.
- Hardware ceiling: lab optics ~1.5 Gbps → high Mpps reflect internal VEB switching, not wire rate.
- Guidance: AF_XDP/CNDP as cloud-native default (lower ops burden); DPDK for dedicated NIC-owning UPF hosts; reproducible via coRAN-UPF-Bench + charmed sd-core + omec-project/upf.

## Key technical points (ZH)
- 在 SD-Core BESS-UPF 上保持数据路径（GTP-U/PDR/FAR/QER）不变，仅在四种 I/O 层间切换。
- 测试床：Xeon Gold 6148 双路、Intel XXV710 25 GbE SR-IOV、Canonical Kubernetes、实时内核、Juju charmed；coRAN-UPF-Bench + 真实 7.2 切分 CU/DU + 商用 UE。
- 单 worker 吞吐：AF_XDP 3.69、DPDK 2.99、CNDP 2.65、AF_PACKET 0.224 Mpps。DPDK 扩展至 10.30（4w）/13.09（8w）Mpps；时延平均 8.1 µs / P99 16.2 µs。
- AF_XDP 与 CNDP 因每 netdev XDP-socket 上限 + GTP-U 外层头 RSS 约 2 worker 封顶，多余 worker 空闲。
- 部署陷阱：低 `limits.cpu` 触发 CFS 节流（腰斩 DPDK）；iavf VF 无 XDP 钩子（AF_XDP/CNDP 仅 PF）；CNDP UMEM bufcnt 过小（×4）；须 RLIMIT_MEMLOCK 无限；DPDK 需 memlock/大页/IOMMU。
- 硬件上限：实验室光模块约 1.5 Gbps → 高 Mpps 反映内部 VEB 交换而非线速。
- 指南：AF_XDP/CNDP 作云原生默认（运维更轻）；DPDK 用于独占网卡的专用 UPF 主机；可经 coRAN-UPF-Bench + charmed sd-core + omec-project/upf 复现。

## Why it matters / what's new (EN)
The KB's user-plane material has looked at where UPFs sit and how to instrument them (2026-05-27_arxiv-encor-anchorless-cellular-core removes mobility anchoring; 2026-05-29 measures per-slice UPF latency with TC-BPF) but not at the concrete engineering choice every cloud-native UPF operator faces: which packet-I/O backend, and what it actually costs to run. This is a rare apples-to-apples benchmark that holds the BESS datapath fixed and isolates the I/O layer, and its headline correction is that DPDK's edge is scaling headroom, not per-packet speed — at low worker counts AF_XDP/CNDP are within striking distance with far less operational baggage. Equally valuable is the failure catalogue (CFS throttling, SR-IOV VF XDP gaps, UMEM sizing, RSS-on-GTP-U worker capping), the kind of tacit knowledge that usually lives in operators' heads. The stated ceiling (lab optics ~1.5 Gbps, so Mpps figures are VEB-internal) keeps the numbers honest and bounds their external validity.

## Why it matters / what's new (ZH)
知识库的用户面材料关注过 UPF 的位置与观测（2026-05-27 EnCoR 去除移动锚定；2026-05-29 用 TC-BPF 测每切片 UPF 时延），但未触及每个云原生 UPF 运营者都要面对的具体工程抉择：选哪种数据包 I/O 后端，以及运行代价几何。这是少见的同基准对比——固定 BESS 数据路径、隔离 I/O 层——其核心纠偏在于：DPDK 的优势是扩展余量而非逐包速度，低 worker 数下 AF_XDP/CNDP 以远轻的运维负担就已接近。同样宝贵的是失败清单（CFS 节流、SR-IOV VF 的 XDP 缺口、UMEM 尺寸、GTP-U 上的 RSS 封顶 worker），这类隐性知识通常只存于运营者脑中。作者明示的上限（实验室光模块约 1.5 Gbps，故 Mpps 为 VEB 内部）让数据保持诚实并界定其外部有效性。

## Images
![UPF dataplane architecture / I/O-mode comparison (SD-Core BESS-UPF) | UPF 数据面架构 / I-O 模式对比（SD-Core BESS-UPF）](https://arxiv.org/html/2608.14589v1/x1.png)
