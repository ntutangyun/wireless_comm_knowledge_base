---
id: 2026-05-19_arxiv-janus-hybrid-ambient-iot-radio
date_published: 2026-05-18
date_found: 2026-05-19
type: academic-paper
title_en: "Janus: Enabling Agile Ambient IoT Networking via a Parameterized Hybrid Radio"
title_zh: "Janus：通过参数化混合无线电实现敏捷环境 IoT 组网"
url: https://arxiv.org/abs/2605.18314
source_quality: full
topics: [802.11bp, Ambient-IoT, backscatter]
topic_primary: amp-iot
topics_secondary: [energy-power-save]
novelty_score: 2
---

## Summary (EN)

Janus is the first hybrid active-passive configurable radio architecture purpose-built for Ambient IoT (A-IoT) protocol research and standardization. Developed by researchers at Shanghai Jiao Tong University, the work addresses a fundamental barrier in the A-IoT space: current testbeds use decoupled active and passive radio paths with high static power consumption and cumbersome FPGA-level reconfiguration, making it nearly impossible to rapidly prototype and compare emerging A-IoT protocols across different standards bodies.

The core contribution is a parameterized RF front-end that unifies active transmission and passive backscatter into a single hardware path. Instead of requiring separate transmit chains for active and passive modes, Janus abstracts physical-layer behaviors — carrier generation patterns, modulation indices, quantization strategies — into concise software parameters. A system-level control plane manages dynamic mode transitions between active and passive operation, while an energy-management plane coordinates fine-grained harvesting from multiple ambient sources (solar, RF, thermal).

The authors implement a compact PCB prototype and evaluate it across the three major A-IoT standardization tracks: 3GPP Release-19 Ambient IoT, IEEE 802.11 AMP (TGbp), and Bluetooth SIG ambient networking. Experimental results show that Janus achieves communication performance on par with dedicated single-mode radios while substantially reducing configuration overhead. The platform is positioned as a community enabler — a common hardware substrate on which protocol designers can validate new A-IoT mechanisms before they are locked into silicon.

## Summary (ZH)

Janus 是首个专为环境物联网（A-IoT）协议研究与标准化打造的混合主动-被动可配置无线电架构，由上海交通大学研究团队开发。该工作解决了 A-IoT 领域的一个根本性障碍：现有测试平台使用解耦的主动和被动射频路径，静态功耗高，且需要 FPGA 级别的重配置，几乎不可能在 3GPP、IEEE 802.11 和蓝牙 SIG 等不同标准体系之间快速原型化和对比新兴 A-IoT 协议。

核心贡献是一个参数化射频前端，将主动发射与被动反向散射统一到单一硬件路径中。Janus 不要求为主动和被动模式分别设计发射链路，而是将物理层行为——载波生成模式、调制指数、量化策略——抽象为简洁的软件参数。系统级控制平面管理主动与被动操作之间的动态模式切换，能量管理平面则协调来自多种环境源（太阳能、射频、热能）的细粒度能量采集。

作者实现了一个紧凑的 PCB 原型，并在三大 A-IoT 标准化轨道上进行了评估：3GPP Release-19 环境物联网、IEEE 802.11 AMP（TGbp）和蓝牙 SIG 环境组网。实验结果表明，Janus 的通信性能可与专用单模无线电媲美，同时大幅降低了配置开销。该平台定位为社区赋能工具——为协议设计者提供一个通用硬件基座，在新 A-IoT 机制被固化到硅片之前进行验证。

## Key technical points (EN)

- **Unified hybrid RF front-end**: A single signal path handles both active (DAC + mixer-based upconversion) and passive (impedance-toggling backscatter) transmission by parameterizing carrier generation patterns rather than duplicating transmit chains.
- **Parameterized control abstraction**: Physical-layer behaviors across protocols (3GPP A-IoT, 802.11 AMP, Bluetooth SIG) are expressed as concise parameter sets — modulation format, data rate, carrier offset, backscatter encoding — decoupling protocol design from hardware re-synthesis.
- **Dynamic mode switching**: The control plane enables runtime transitions between active and passive modes, allowing a single device to operate as an active transmitter in one timeslot and a backscatter tag in the next.
- **Multi-source energy harvesting management**: An energy plane tracks harvested power from solar, RF, and thermal sources, scheduling active transmission bursts within the available energy budget.
- **Cross-standard validation**: The same Janus PCB prototype was tested against all three major A-IoT PHY/MAC frameworks, demonstrating equivalent PER vs. SNR performance to dedicated single-standard radios.

## Key technical points (ZH)

- **统一混合射频前端**：通过参数化载波生成模式而非复制发射链路，单一信号路径同时处理主动（基于 DAC + 混频器的上变频）和被动（阻抗切换反向散射）发射。
- **参数化控制抽象**：跨协议（3GPP A-IoT、802.11 AMP、蓝牙 SIG）的物理层行为被表达为简洁的参数集——调制格式、数据速率、载波偏移、反向散射编码——将协议设计与硬件重综合解耦。
- **动态模式切换**：控制平面支持主动与被动模式之间的运行时转换，使单一设备可在一个时隙作为主动发射器运行，在下一时隙作为反向散射标签运行。
- **多源能量采集管理**：能量平面追踪来自太阳能、射频和热能的采集功率，在可用能量预算内调度主动发射突发。
- **跨标准验证**：同一 Janus PCB 原型在全部三大 A-IoT PHY/MAC 框架下进行了测试，展现出与专用单标准无线电相当的 PER vs SNR 性能。

## Why it matters / what's new (EN)

Prior to Janus, A-IoT protocol research relied on either commercial active radios (power-hungry, passive-incapable) or bespoke backscatter tags (passive-only, protocol-specific), with no platform spanning both modes across multiple standards. Janus is the first to unify active and passive transmission in a single parameterized architecture and demonstrate cross-standard operation.

For the 802.11 AMP (TGbp) standardization effort specifically, Janus provides the first hardware validation vehicle that can test proposed AMP PHY and MAC mechanisms — frame formats, channel access rules, energy-budget signaling — on real silicon before the standard is frozen. This is a maturity signal for the AMP ecosystem: when a common testbed exists, protocol proposals can be benchmarked against each other empirically rather than debated purely in simulation.

The paper's limitation is that it is a hardware platform contribution, not a protocol mechanism — it does not propose new on-the-wire formats or MAC rules. Its value to the KB is as a standardization-maturity indicator and a reference for future AMP protocol entries.

## Why it matters / what's new (ZH)

在 Janus 之前，A-IoT 协议研究要么依赖商用主动无线电（功耗高、不支持被动模式），要么依赖定制反向散射标签（仅被动、协议特定），没有平台能在单一架构中跨多种标准同时支持两种模式。Janus 是首个在单一参数化架构中统一主动与被动发射并展示跨标准操作的平台。

特别对 802.11 AMP（TGbp）标准化工作而言，Janus 提供了首个硬件验证载体，可在标准冻结前在实际硅片上测试提议的 AMP PHY 和 MAC 机制——帧格式、信道接入规则、能量预算信令。这对 AMP 生态是成熟度信号：当存在通用测试床时，协议提案可以通过实测相互基准对比，而非仅在仿真中争论。

本文的局限在于它是一项硬件平台贡献，而非协议机制——它不提出新的空中帧格式或 MAC 规则。其对 KB 的价值在于作为标准化成熟度指标和未来 AMP 协议条目的参考。

## Images

![Janus parameterized configuration approach enabling cross-standard Ambient IoT protocol prototyping, showing 3GPP A-IoT, IEEE 802.11 AMP, and Bluetooth SIG tracks | Janus 参数化配置方法实现跨标准环境物联网协议原型，展示 3GPP A-IoT、IEEE 802.11 AMP 和蓝牙 SIG 三大轨道](https://arxiv.org/html/2605.18314v1/x1.png)
![Comparison of existing RF Tx front-ends vs. Janus unified hybrid architecture | 现有射频发射前端与 Janus 统一混合架构的对比](https://arxiv.org/html/2605.18314v1/x2.png)
