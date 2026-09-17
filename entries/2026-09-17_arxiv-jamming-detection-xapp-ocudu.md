---
id: 2026-09-17_arxiv-jamming-detection-xapp-ocudu
date_published: 2026-09-16
date_found: 2026-09-17
type: academic-paper
technology: cellular
title_en: "Jamming Detection in 5G/6G Networks: From O-RAN Concept to OCUDU Deployment"
title_zh: "5G/6G 网络中的干扰检测：从 O-RAN 概念到 OCUDU 部署"
url: "https://arxiv.org/abs/2609.18499"
source_quality: full
topics: [O-RAN, jamming, xApp, E2-interface, MCS, URLLC, OCUDU, over-the-air]
topic_primary: cellular-security
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)

This paper (Marcin Hoffmann, Lukasz Kulacz, Osama Baldo, Marcin Pakula, Balaji Raghothaman; Rimedo Labs / Poznan University of Technology / Keysight Technologies) presents a Jamming Detection xApp (JD-xApp) for Open RAN that detects RF jamming by monitoring the moving-average Block Error Rate (BLER) over the E2 interface (using the E2SM-LLC service model) and mitigates it by enforcing a robust upper ceiling on the Modulation and Coding Scheme (MCS) via the same interface, overriding standard link adaptation. The authors motivate this by noting that a keyed jammer switching state faster than Channel State Information (CSI) reporting intervals can cause the scheduler's MCS allocation to mismatch the true channel, driving up packet latency — a particular concern for mission-critical URLLC services.

Because the O-RAN E2SM-LLC service model has poor adoption among existing RIC platforms and requires ASN.1-encoded messages, the paper also demonstrates porting the JD-xApp's approach to OCUDU, an open-source O-RAN Centralized Unit/Distributed Unit implementation (Linux Foundation, originating from srsRAN) that exposes the same KPMs and MCS control via a WebSocket/JSON interface instead. The core algorithm was first validated using Keysight's UXM 5G Wireless Test Platform paired with a PROPSIM F64 channel emulator injecting AWGN to model jamming. Under a pulsed jamming scenario, the reference (unmitigated) system's block-decoding NACK/ACK rate rose sharply and stayed elevated while its MCS index stayed pinned near maximum (~27) for most of the jamming duration; with the JD-xApp active, MCS was rapidly and repeatedly forced down to a safe floor (~2) at each detected error burst. Across 415,972 logged transport blocks per configuration, the probability of a transport block needing any retransmission fell from 37.84% (no mitigation) to 5.99% (JD-xApp active), and the expected number of transmission attempts per block fell from 1.610 to 1.084 — an 86.3% reduction in expected retransmission-induced latency, corresponding to roughly 218,800 fewer retransmissions over the full experiment.

The JD-xApp's detection logic (without the mitigation/MCS-override component) was then integrated into OCUDU and tested over-the-air using the POWDER lab testbed (University of Utah), with an Open5GS core, OCUDU as CU/DU, a USRP X310 as the radio unit, and commercial UEs, operating on 3GPP NR band n78 at 20 MHz / 30 kHz SCS. Jamming was emulated by rapidly switching RF path attenuation between 95 dB and normal, synchronized to a 10 ms period matching the 5G frame duration and CSI reporting. During the attack, the uplink NACK/ACK ratio rose from near 0% to about 20%, and the JD-xApp's binary detection flag correlated closely with periods of MCS degradation, confirming the detection mechanism works over the air; the authors note the OCUDU deployment currently lacks the mitigation (MCS-override) component, which is planned future work.

## Summary (ZH)

本文（Marcin Hoffmann、Lukasz Kulacz、Osama Baldo、Marcin Pakula、Balaji Raghothaman；Rimedo Labs / 波兹南理工大学 /是德科技 Keysight Technologies）提出了一个面向开放 RAN 的干扰检测 xApp（JD-xApp），通过 E2 接口（使用 E2SM-LLC 服务模型）监测移动平均误块率（BLER）来检测射频干扰，并通过同一接口对调制编码方案（MCS）施加稳健的上限、覆盖标准链路自适应机制以缓解干扰影响。作者指出，其动机在于：状态切换速度快于信道状态信息（CSI）上报周期的键控干扰器，会使调度器的 MCS 分配与真实信道状态不匹配，从而推高分组时延——这对任务关键型 URLLC 业务尤为重要。

由于 O-RAN 的 E2SM-LLC 服务模型在现有 RIC 平台中采用率较低，且需要 ASN.1 编码消息，论文还展示了将 JD-xApp 方案移植到 OCUDU 上的做法——OCUDU 是 Linux 基金会旗下、源自 srsRAN 的开源 O-RAN 集中单元/分布单元（CU/DU）实现，通过 WebSocket/JSON 接口暴露相同的关键性能指标（KPM）与 MCS 控制能力。该核心算法首先使用是德科技的 UXM 5G 无线测试平台，配合 PROPSIM F64 信道模拟器注入高斯白噪声（AWGN）以模拟干扰进行验证。在脉冲式干扰场景下，未采用缓解措施的参考系统的解码 NACK/ACK 比率急剧上升并长期维持高位，其 MCS 指数在大部分干扰期间都固定在接近最大值（约 27）；而启用 JD-xApp 后，系统在每次检测到误码突发时都会迅速、反复地将 MCS 压低至安全下限（约 2）。在每种配置下记录的 415972 个传输块中，需要任意重传的概率从未缓解时的 37.84% 降至启用 JD-xApp 后的 5.99%，每个传输块的期望传输次数从 1.610 降至 1.084——重传导致的期望时延降低了 86.3%，整个实验过程中重传次数约减少 218800 次。

随后，作者将 JD-xApp 的检测逻辑（不含缓解/MCS 覆盖部分）集成到 OCUDU 中，并利用犹他大学的 POWDER 实验室基础设施进行空口测试，采用 Open5GS 核心网、OCUDU 作为 CU/DU、USRP X310 作为射频单元、商用终端，工作于 3GPP NR n78 频段、20 MHz 带宽、30 kHz 子载波间隔。干扰通过将射频路径衰减在 95 dB 与正常水平之间快速切换来模拟，切换周期为 10 毫秒，与 5G 帧长及 CSI 上报周期同步。攻击期间，上行 NACK/ACK 比率从接近 0% 升至约 20%，JD-xApp 输出的二值检测标志与 MCS 劣化时段高度吻合，证明该检测机制在空口环境下同样有效；作者说明目前 OCUDU 部署尚缺少缓解（MCS 覆盖）部分，相关工作留待后续开展。

## Key technical points (EN)

- **Detection mechanism**: moving-average BLER over a sliding window via O-RAN E2SM-LLC (ACK/NACK statistics from HARQ feedback); flags jamming when the average exceeds a calibrated threshold.
- **Mitigation mechanism**: E2 Control message enforcing an absolute MCS ceiling (e.g. MCS≤2, robust BPSK/QPSK) during a detected jamming episode, suspending standard link adaptation.
- **Platform-adoption pivot**: because E2SM-LLC (ASN.1-encoded) has poor RIC-platform adoption, the same detect/control logic was ported to OCUDU's WebSocket/JSON interface, which the authors state exposes all metrics needed for JD-xApp (per-UE MCS/BLER/SINR at the DU layer, plus MCS enforcement capability).
- **Lab validation (Keysight UXM + PROPSIM F64)**: over 415,972 transport blocks per configuration, retransmission probability fell from 37.84% to 5.99%, and expected transmission attempts per block fell from 1.610 to 1.084 (86.3% reduction in expected retransmission latency; ~218,800 fewer retransmissions overall).
- **Over-the-air validation (POWDER lab)**: Open5GS core + OCUDU CU/DU + USRP X310 RU + commercial UEs on NR band n78; a 10 ms attenuation-switching jammer (synchronized to frame/CSI timing) raised uplink NACK/ACK ratio from ~0% to ~20%; the JD-xApp's detection flag tracked the MCS-degradation periods closely, though the OCUDU deployment currently implements detection only, not mitigation.

## Key technical points (ZH)

- **检测机制**：通过 O-RAN E2SM-LLC 获取 HARQ 反馈中的 ACK/NACK 统计，在滑动窗口内计算移动平均误块率（BLER），超过校准阈值即判定为干扰。
- **缓解机制**：在检测到干扰期间，通过 E2 控制消息强制施加绝对 MCS 上限（例如 MCS≤2，采用稳健的 BPSK/QPSK），并暂停标准链路自适应机制。
- **平台适配转向**：由于采用 ASN.1 编码的 E2SM-LLC 在现有 RIC 平台中采用率较低，作者将同一检测/控制逻辑移植到 OCUDU 的 WebSocket/JSON 接口，作者称该接口已暴露 JD-xApp 所需的全部指标（DU 层的逐用户 MCS/BLER/SINR，以及 MCS 强制执行能力）。
- **实验室验证（是德 UXM + PROPSIM F64）**：在每种配置下记录的 415972 个传输块中，重传概率从 37.84% 降至 5.99%，每块期望传输次数从 1.610 降至 1.084（重传导致的期望时延降低 86.3%；整体重传次数减少约 218800 次）。
- **空口验证（POWDER 实验室）**：Open5GS 核心网 + OCUDU CU/DU + USRP X310 射频单元 + 商用终端，工作于 NR n78 频段；采用与帧/CSI 定时同步的 10 毫秒衰减切换式干扰，使上行 NACK/ACK 比率从约 0% 升至约 20%；JD-xApp 的检测标志与 MCS 劣化时段高度吻合，但目前 OCUDU 部署仅实现了检测部分，尚未包含缓解部分。

## Why it matters / what's new (EN)

The KB's existing O-RAN jamming coverage (`2026-06-01_arxiv-jamming-resilient-prb-reservation-oran`) addresses PRB reservation for slicing under jamming; this paper instead targets the link-adaptation layer directly (BLER-triggered MCS capping) and, distinct from a purely simulated study, carries the mechanism through three validation stages — algorithmic design, high-end lab hardware (Keysight UXM/PROPSIM), and a real over-the-air deployment on OCUDU via the POWDER testbed — while explicitly documenting the practical adoption gap between the standardized O-RAN E2SM-LLC interface and OCUDU's proprietary-but-more-widely-used API as its own finding.

## Why it matters / what's new (ZH)

知识库现有的 O-RAN 抗干扰相关条目（`2026-06-01_arxiv-jamming-resilient-prb-reservation-oran`）关注的是干扰环境下面向切片的 PRB 预留；本文则直接作用于链路自适应层（基于 BLER 触发的 MCS 上限压制），且区别于纯仿真研究，该机制经历了三个验证阶段——算法设计、高端实验室硬件（是德 UXM/PROPSIM）、以及基于 POWDER 测试床在 OCUDU 上的真实空口部署——同时将标准化的 O-RAN E2SM-LLC 接口与采用率更高的 OCUDU 专有接口之间存在的实际落地差距，明确作为自身的一项发现予以报告。

## Images

![JD-xApp core end-to-end detection and mitigation workflow | JD-xApp 端到端检测与缓解核心工作流程](https://arxiv.org/html/2609.18499v1/jd-algorithm.drawio.png)
![Uplink NACK/ACK ratio during the over-the-air POWDER lab jamming test | POWDER 实验室空口干扰测试中的上行 NACK/ACK 比率](https://arxiv.org/html/2609.18499v1/powder_ul_ack_ratio.png)
