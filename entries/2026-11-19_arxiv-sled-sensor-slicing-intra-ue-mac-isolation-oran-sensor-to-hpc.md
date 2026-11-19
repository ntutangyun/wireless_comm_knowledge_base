---
id: 2026-11-19_arxiv-sled-sensor-slicing-intra-ue-mac-isolation-oran-sensor-to-hpc
date_published: 2026-11-16
date_found: 2026-11-19
type: academic-paper
technology: cellular
title_en: "SLED: Sensor SLicing from Edge to Datacenter"
title_zh: "SLED：从边缘到数据中心的传感器切片"
url: "https://arxiv.org/abs/2611.21937"
source_quality: full
topics: [network-slicing, O-RAN, OpenAirInterface, OCUDU, MAC-scheduler, intra-UE-slicing, private-5G, sensor-to-HPC, agentic-coding]
topic_primary: network-slicing
topics_secondary: [open-ran, 5g-nr]
novelty_score: 3
---

## Summary (EN)

Subedi, Biswas, Pramanik, Balabantaray, Titov, Pitla, Kilic and Vuran (University of Nebraska-Lincoln and Brookhaven National Laboratory) introduce Sensor Slicing, a MAC-level mechanism that gives each sensor stream on a single UE its own slice identity and radio budget in an O-RAN-compliant private 5G RAN. The associated SLED framework couples these per-sensor slices to dedicated UPFs and to three compute tiers (an edge GPU at the base station, a campus HPC cluster and a DOE leadership computing facility). The scheduler is implemented in two open-source stacks, OpenAirInterface and OCUDU, with a coding agent doing much of the implementation; software and datasets are released on GitHub.

## Summary (ZH)

Subedi、Biswas、Pramanik、Balabantaray、Titov、Pitla、Kilic 与 Vuran（内布拉斯加大学林肯分校与布鲁克海文国家实验室）提出传感器切片（Sensor Slicing）：在符合 O-RAN 的私有 5G RAN 中，于 MAC 层为同一 UE 上的每一路传感器数据流分配独立的切片标识和无线资源配额。配套的 SLED 框架将每传感器切片与专用 UPF 以及三级算力（基站侧边缘 GPU、校园 HPC 集群、美国能源部领先计算设施）关联。该调度器在 OpenAirInterface 与 OCUDU 两个开源协议栈中实现，其中大量实现工作由编码智能体完成；软件与数据集已在 GitHub 公开。

## Key technical points (EN)

- Gap addressed: current open-source RAN stacks (OAI, srsRAN, OCUDU) apply slicing per UE, so all workloads on a UE share one slice; the paper notes the 5G standard allows a UE to be served by several slice instances at once but does not ensure deterministic MAC-level isolation. The closest prior work, ORANSlice, supports at most two slices per UE in the downlink only and allocates one slice per slot.
- Downlink: after the gNB scheduler divides PRBs among UEs, a credit-based weighted algorithm picks which sensor within each UE owns the slot, spreading each sensor's slots evenly over time.
- Uplink: a repeating deterministic cycle assigns slot ownership (slice ratios divided by their GCD give consecutive-slot counts), so gNB and UE derive the mapping independently with no per-slot signalling; a custom SliceHint MAC control element conveys slice identifier, ratio and LCID mapping.
- End to end: each sensor gets its own RLC buffer and LCID, its own PDU session with a slice identifier, a container and network namespace on the UE, and its own UPF. A NAS fix lets the UE accept out-of-order PDU Session Establishment Accept messages.
- OTA testbed: OAI gNB and nrUE with USRP X300 radios 2 m apart, band n48 (3.6 GHz), 40 MHz, 30 kHz SCS, 106 RBs, DDDDDSUUUU TDD, Open5GS core; scalability tested in the OAI RF simulator. Seven workloads (video analytics, bulk TCP, continual learning, IQ streaming, LiDAR, URLLC telemetry at 5QI 84, mMTC messages).
- Reported results: per-slice throughput on average within 0.9% (OAI) and 1.4% (OCUDU) of expected as slices per UE grow from 3 to 7; with two slices at 70/30 downlink, video-analytics latency stays 3.5-5.5 ms with all frames delivered, versus 223 ms at 50 Mbps and 1.93 s at 60 Mbps of competing bulk load under a single network slice, and 46-48% frame delivery under ORANSlice; the abstract reports conventional slicing raising critical delays more than 2,300-fold at high load.
- Compute placement: edge, campus and LCF tiers reach 67, 90 and 89 fps respectively for video analytics, trading network latency against inference time.
- Agentic development: the OCUDU implementation took 2 h 40 min against 6.5 weeks for OAI, with 4 versus 913 human prompts and 0.64B versus 1.43B tokens; the paper presents the OCUDU run as benefiting from a validated reference implementation.
- Caveats visible in the text: small two-node indoor testbed; throughput-isolation results use an RF simulator; the sensor-slicing signalling (SliceHint) is a custom, non-standard MAC control element.

## Key technical points (ZH)

- 要解决的缺口：现有开源 RAN 协议栈（OAI、srsRAN、OCUDU）按 UE 切片，UE 上所有业务共享一个切片；论文指出 5G 标准允许 UE 同时接入多个切片实例，但并不保证 MAC 层的确定性隔离。最接近的已有工作 ORANSlice 仅支持下行每 UE 最多两个切片，且每个时隙只分配给一个切片。
- 下行：gNB 调度器先在 UE 之间划分 PRB，再用基于积分（credit）的加权算法决定 UE 内哪个传感器占用该时隙，并将各传感器的时隙在时间上均匀打散。
- 上行：用重复的确定性周期分配时隙归属（切片比例除以最大公约数得到连续时隙数），gNB 与 UE 可各自推出映射而无需逐时隙信令；自定义的 SliceHint MAC 控制单元下发切片标识、比例和 LCID 映射。
- 端到端：每个传感器拥有独立的 RLC 缓冲与 LCID、带切片标识的 PDU 会话、UE 上的容器与网络命名空间，以及独立的 UPF。对 NAS 层的修改使 UE 能接受乱序到达的 PDU 会话建立接受消息。
- OTA 测试床：OAI gNB 与 nrUE，USRP X300 射频相距 2 m，n48 频段（3.6 GHz）、40 MHz、30 kHz 子载波间隔、106 个 RB、DDDDDSUUUU TDD，核心网为 Open5GS；可扩展性在 OAI 射频模拟器中测试。七类工作负载（视频分析、TCP 批量传输、持续学习、IQ 流、LiDAR、5QI 84 的 URLLC 遥测、mMTC 消息）。
- 报告的结果：每 UE 切片数从 3 增至 7 时，各切片吞吐与预期值的偏差平均在 0.9%（OAI）和 1.4%（OCUDU）以内；两切片 70/30 下行场景中，视频分析时延保持在 3.5-5.5 ms 且帧全部送达，而在单一网络切片下，竞争批量流量 50 Mbps 时为 223 ms、60 Mbps 时为 1.93 s，ORANSlice 下帧送达率仅 46-48%；摘要称在高负载下传统切片使关键时延增大超过 2300 倍。
- 算力放置：边缘、校园、LCF 三级的视频分析帧率分别为 67、90、89 fps，体现网络时延与推理时间的取舍。
- 智能体开发：OCUDU 实现用时 2 小时 40 分钟，OAI 为 6.5 周；人工提示 4 次对 913 次；token 0.64B 对 1.43B；论文将 OCUDU 一次的收益归因于已有经过验证的参考实现。
- 文中可见的注意事项：测试床仅为两节点室内；吞吐隔离结果来自射频模拟器；切片信令（SliceHint）为自定义的非标准 MAC 控制单元。

## Why it matters / what's new (EN)

The paper shows per-sensor isolation inside one UE, in both directions, on two open-source O-RAN stacks, using only MAC scheduling plus per-sensor PDU sessions. For network-slicing work its main value is the measured contrast with per-UE slicing and ORANSlice under bulk-traffic load; the agentic-development timing comparison is a secondary, less controlled result.

## Why it matters / what's new (ZH)

该论文在两个开源 O-RAN 协议栈上，仅通过 MAC 调度加每传感器 PDU 会话，实现了单个 UE 内双向的每传感器隔离。对网络切片研究而言，其主要价值在于在批量流量负载下与按 UE 切片及 ORANSlice 的实测对比；智能体开发用时对比为次要且控制较弱的结果。

## Images

None.
