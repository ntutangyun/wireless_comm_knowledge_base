---
id: 2026-06-08_arxiv-i2slicer-5g-sa-slice-orchestration
date_published: 2026-06-05
date_found: 2026-06-08
type: academic-paper
technology: cellular
title_en: "i2Slicer: flexible, automated orchestration of 5G SA end-to-end network slices on a real testbed"
title_zh: "i2Slicer：在真实测试床上对 5G SA 端到端网络切片的灵活、自动化编排"
url: https://arxiv.org/abs/2606.06955
source_quality: full
topics: [5G-SA, network-slicing, MOCN, NSMF, NSSMF, OSM, Open5GS]
topic_primary: network-slicing
topics_secondary: [5g-nr, open-ran]
novelty_score: 2
---

## Summary (EN)
i2Slicer is an orchestration system for deploying 5G standalone (SA) end-to-end network slices with multi-tenancy and multi-service support, demonstrated on a real (not emulated) testbed. The authors argue that most slicing-orchestration literature stops at simulation or covers only one domain; i2Slicer instead spans radio, core, and transport domains with real 5G hardware. It maps cleanly onto the 3GPP management architecture: a Slice Manager acting as the Network Slice Management Function (NSMF), a RAN Controller implementing the RAN NSSMF (configuring the gNB remotely over NETCONF/O1), and a Transport Domain Manager that provisions VLANs for the N2/N3/N6 interfaces to isolate planes.

The design choice at the center of the paper is a disaggregated deployment mode: a common control plane with shared network functions across slices, paired with an isolated user plane that instantiates dedicated SMF and UPF instances per slice. Multi-tenancy uses MOCN / RAN sharing so several operators ride shared infrastructure. The prototype is built from Open5GS (Rel-17) for the core, an Amarisoft Callbox (Rel-16 gNB on SDRs) for the radio, and Open Source MANO (OSM Rel-11) over OpenStack (Victoria) as the NFV orchestrator/VIM.

Across 100 iterations of slice lifecycle operations, the disaggregated approach incurs slightly higher deployment latency than a monolithic slice (~40 s vs ~30 s activation; both under a 45 s ceiling) but yields better isolation and resource flexibility — subsequent disaggregated slices need only 3 vCPU and 2 GB RAM (25% / 50% reductions) by reusing the shared control plane. The takeaway is a quantified trade-off: per-slice user-plane isolation costs a one-time control-plane setup but amortizes well as more slices are added.

## Summary (ZH)
i2Slicer 是一套用于部署 5G 独立组网（SA）端到端网络切片的编排系统，支持多租户与多业务，并在真实（非仿真）测试床上完成验证。作者指出，多数切片编排文献止步于仿真或仅覆盖单一域；i2Slicer 则借助真实 5G 硬件横跨无线、核心与传输三域。其架构对应 3GPP 管理框架：充当网络切片管理功能（NSMF）的 Slice Manager、实现 RAN NSSMF 的 RAN Controller（通过 NETCONF/O1 远程配置 gNB），以及为 N2/N3/N6 接口配置 VLAN 以隔离各平面的 Transport Domain Manager。

论文的核心设计是"解耦"部署模式：各切片共享网络功能的公共控制平面，配合为每个切片实例化专属 SMF 与 UPF 的隔离用户平面。多租户通过 MOCN / RAN 共享实现，使多家运营商共用基础设施。原型由 Open5GS（R17）作核心、Amarisoft Callbox（基于 SDR 的 R16 gNB）作无线、Open Source MANO（OSM R11）叠加 OpenStack（Victoria）作 NFV 编排器/VIM 组成。

在 100 次切片生命周期操作迭代中，解耦方案的部署时延略高于单体切片（约 40 秒 vs 约 30 秒激活，均在 45 秒以内），但换来更好的隔离与资源弹性——后续解耦切片因复用共享控制平面，仅需 3 个 vCPU 与 2 GB 内存（分别减少 25% / 50%）。结论是一个量化的权衡：每切片的用户面隔离需付出一次性控制面建立成本，但随切片增多可被良好摊薄。

## Key technical points (EN)
- 3GPP-aligned modules: Slice Manager = NSMF; RAN Controller = RAN NSSMF (gNB config via NETCONF/O1); Transport Domain Manager provisions N2/N3/N6 VLANs.
- Disaggregated mode: shared common control plane + per-slice dedicated SMF/UPF for user-plane isolation.
- Multi-tenancy via MOCN / RAN sharing; multi-service via per-slice user-plane dimensioning.
- Real testbed: Open5GS R17 core, Amarisoft Callbox (R16 gNB, SDR), OSM R11 NFVO over OpenStack Victoria VIM.
- 100-iteration results: ~40 s vs ~30 s slice activation (disaggregated vs monolithic), <45 s ceiling; subsequent disaggregated slices need 3 vCPU / 2 GB RAM (25% / 50% reduction) by reusing the control plane.

## Key technical points (ZH)
- 对齐 3GPP 的模块：Slice Manager = NSMF；RAN Controller = RAN NSSMF（经 NETCONF/O1 配置 gNB）；Transport Domain Manager 配置 N2/N3/N6 VLAN。
- 解耦模式：共享公共控制平面 + 每切片专属 SMF/UPF 实现用户面隔离。
- 多租户经 MOCN / RAN 共享；多业务经每切片用户面定制。
- 真实测试床：Open5GS R17 核心、Amarisoft Callbox（R16 gNB，SDR）、OSM R11 NFVO 叠加 OpenStack Victoria VIM。
- 100 次迭代结果：解耦 vs 单体切片激活约 40 秒 vs 约 30 秒，上限 <45 秒；后续解耦切片复用控制平面，仅需 3 vCPU / 2 GB（减少 25% / 50%）。

## Why it matters / what's new (EN)
Network-slicing orchestration is a mature area, so the novelty here is in the *complete, real-hardware E2E demonstration* with measured cost trade-offs rather than a new algorithm — hence novelty 2. It is a useful complement to the per-slice UPF latency work already in the KB (2605.28185, TC-BPF/eBPF data-plane isolation): i2Slicer sits one layer up at the management/orchestration plane (NSMF/NSSMF/transport), quantifying the control-plane-sharing vs user-plane-isolation trade-off on production-grade open-source stacks (Open5GS + OSM + OpenStack). For practitioners standing up private/temporary 5G SA networks, it is a concrete reference architecture with reproducible resource and timing numbers.

## Why it matters / what's new (ZH)
网络切片编排已是成熟领域，因此本文的新意在于*完整、真实硬件的端到端演示*及其量化的成本权衡，而非新算法——故新颖度为 2。它与 KB 中已有的每切片 UPF 时延工作（2605.28185，TC-BPF/eBPF 数据面隔离）形成互补：i2Slicer 处于其上一层的管理/编排平面（NSMF/NSSMF/传输），在生产级开源栈（Open5GS + OSM + OpenStack）上量化了"控制面共享 vs 用户面隔离"的权衡。对于搭建专用/临时 5G SA 网络的从业者，它提供了一个具备可复现资源与时延数据的具体参考架构。

## Images
![i2Slicer end-to-end slice orchestration architecture (NSMF / RAN NSSMF / transport) | i2Slicer 端到端切片编排架构（NSMF / RAN NSSMF / 传输）](https://arxiv.org/html/2606.06955v1/x1.png)
![Slice deployment / activation times: monolithic vs disaggregated | 切片部署/激活时延：单体 vs 解耦](https://arxiv.org/html/2606.06955v1/x3.png)
