---
id: 2026-11-25_arxiv-nrsnooper-real-time-bidirectional-traffic-decoding-commercial-5g-nr
date_published: 2026-11-22
date_found: 2026-11-25
type: academic-paper
technology: cellular
title_en: "NRSnooper: Enabling Real-Time Bidirectional Traffic Decoding in Commercial 5G NR Networks"
title_zh: "NRSnooper：在商用 5G NR 网络中实现实时双向流量解码"
url: "https://arxiv.org/abs/2611.29439"
source_quality: full
topics: [5G-NR, passive-sniffer, PDCCH, DCI, C-RNTI, DMRS, RRC-Reconfiguration, SDR, GPU, OpenAirInterface]
topic_primary: cellular-security
topics_secondary: [5g-nr]
novelty_score: 4
---

## Summary (EN)

Tuan Dinh Hoang, Quang Huy Pham, Taekkyung Oh, Hazem Issa, Yongdae Kim (KAIST) and Marco Mezzavilla (Politecnico di Milano) present NRSnooper, a passive software-defined-radio sniffer that decodes downlink control information and both downlink (PDSCH) and uplink (PUSCH) data in commercial 5G NR networks. The paper frames three obstacles for NR, compared with LTE sniffing: UE-dedicated PHY configurations delivered inside encrypted RRC Reconfiguration messages (C1), unknown identifiers such as the C-RNTI and the DMRS scrambling identity for a UE that was already connected when sniffing began (C2), and the computation needed for wideband traffic (C3; a 100 MHz carrier at 30 kHz SCS has 2,000 slots per second).

For C1 the system replays commercial UE capabilities (and mutated variants) through an instrumented OpenAirInterface UE with a legitimate SIM to collect reusable configuration profiles, then identifies the matching profile during sniffing by CRC-validated transport-block decoding. For C2 it recovers C-RNTIs by syndrome-guided candidate ranking, CCE/RNTI search-space pruning and full polar decoding with CRC validation, and recovers PDSCH DMRS scrambling identities by reference-signal correlation. For C3 it uses a hybrid CPU-GPU pipeline. It is evaluated on an srsRAN testbed and on two commercial 5G SA networks (Network K, n78; Network U, n41) in different countries. The paper describes the tool as open source.

## Summary (ZH)

Tuan Dinh Hoang、Quang Huy Pham、Taekkyung Oh、Hazem Issa、Yongdae Kim（KAIST）与 Marco Mezzavilla（米兰理工大学）提出 NRSnooper，一种被动式软件无线电嗅探器，可在商用 5G NR 网络中解码下行控制信息以及下行（PDSCH）与上行（PUSCH）数据。论文指出，与 LTE 嗅探相比，NR 有三个障碍：加密的 RRC Reconfiguration 消息中携带的 UE 专属 PHY 配置（C1）；对于嗅探开始前已连接的 UE，C-RNTI 与 DMRS 加扰标识等标识符未知（C2）；以及宽带流量所需的计算量（C3；30 kHz SCS 的 100 MHz 载波每秒有 2,000 个时隙）。

针对 C1，系统通过带合法 SIM 的改造版 OpenAirInterface UE 回放商用 UE 能力（及其变体）以收集可复用的配置档案，并在嗅探时通过 CRC 校验的传输块解码来确定匹配的档案。针对 C2，系统通过校验子引导的候选排序、CCE/RNTI 搜索空间剪枝以及带 CRC 校验的完整极化码解码恢复 C-RNTI，并通过参考信号相关恢复 PDSCH DMRS 加扰标识。针对 C3，系统使用 CPU-GPU 混合流水线。评估在 srsRAN 测试床和两个不同国家的商用 5G SA 网络（网络 K，n78；网络 U，n41）上进行。论文称该工具开源。

## Key technical points (EN)

- Comparison table: the paper lists 5G-Sniffer and 5GDescrambler as recovering PDCCH scheduling only, NR-Scope and SNI5GECT as decoding data with configurations obtained at connection establishment (not from encrypted RRC Reconfiguration, and not for already-connected UEs), and NRSnooper as covering control, DL, UL, pre/post-reconfiguration state, already-connected UEs and real-time operation at 100 MHz.
- Testbed: srsRAN gNB on a 40 MHz n41 channel with three commercial phones (Xiaomi 15 Ultra, Google Pixel 8 Pro, Redmi Note 9T), USRP X310 radios, SISO and 2x2 MIMO downlink, three sniffer placements up to about 18 m. NRSnooper recovered 84-98% of downlink and uplink traffic under SISO and 75-98% under 2x2 MIMO; all CRC-valid transport blocks matched the gNB payloads byte for byte.
- Commercial-network sniffer: four-antenna USRP N310 over two 10GbE links to an i7-14700K PC with an RTX 3080 Ti GPU; the polar decoder is adapted from the NVIDIA Aerial cuPHY decoder and CUDA kernels handle syndrome evaluation and DMRS correlation.
- Configuration profiling: replaying 21 commercial UE capabilities plus 83 variants yielded 21 and 18 configuration profiles in Networks K and U; using them raised decoded DCIs by 1.3x and 6.3x and decoded downlink transport blocks by 9.0x and 17.7x versus using only unencrypted-signaling configurations.
- PDCCH decoding versus 5GDescrambler on identical LLRs from 10-second captures: 6,924 vs 3,815 DCIs on Network K (1.8x) and 12,556 vs 5,108 on Network U (2.5x); the paper attributes the gap to full soft-decision polar decoding with CRC validation plus syndrome-guided RNTI ranking.
- Already-connected UE: session-specific parameter recovery enabled bidirectional decoding of a UE during an ongoing phone call. The GPU pipeline processed 100 MHz commercial traffic in near real time under moderate load, about 120 active RNTIs per second.
- Ethics statement: testbed work used a test PLMN and test SIMs in an isolated room; on commercial networks the sniffer itself never transmits and does not decrypt payloads, while only the configuration-discovery phase transmits.
- Limitations stated: profiling needs legitimate network access via an OAI UE with a commercial SIM (some networks check the IMEI) and profiles are valid only while network configurations stay unchanged; profile coverage is incomplete; decoding depends on sniffer signal quality and beamforming can reduce reception; 100 MHz processing cannot sustain real time under the heaviest observed load. The discussion notes that scrambling identities and randomized PHY configurations may increase decoding cost but do not guarantee confidentiality, and calls protection design an open problem for 6G.

## Key technical points (ZH)

- 对比表：论文将 5G-Sniffer 与 5GDescrambler 列为仅恢复 PDCCH 调度信息，NR-Scope 与 SNI5GECT 使用连接建立阶段获得的配置解码数据（无法处理加密 RRC Reconfiguration，也无法处理已连接 UE），而 NRSnooper 覆盖控制信道、下行、上行、重配前后状态、已连接 UE 以及 100 MHz 实时运行。
- 测试床：40 MHz n41 信道上的 srsRAN gNB，三部商用手机（小米 15 Ultra、Google Pixel 8 Pro、Redmi Note 9T），USRP X310 射频，SISO 与 2x2 MIMO 下行，嗅探器三种摆放位置，最远约 18 m。NRSnooper 在 SISO 下恢复了 84-98% 的上下行流量，在 2x2 MIMO 下为 75-98%；所有通过 CRC 的传输块与 gNB 载荷逐字节一致。
- 商用网络嗅探器：四天线 USRP N310，通过两条 10GbE 链路连接 i7-14700K PC 与 RTX 3080 Ti GPU；极化码解码器改自 NVIDIA Aerial cuPHY 解码器，CUDA 内核负责校验子计算与 DMRS 相关。
- 配置档案：回放 21 种商用 UE 能力及 83 个变体，在网络 K 与 U 中分别发现 21 与 18 个配置档案；使用这些档案后，与仅使用未加密信令配置相比，解码的 DCI 分别增加 1.3 倍与 6.3 倍，解码的下行传输块分别增加 9.0 倍与 17.7 倍。
- 在相同的 10 秒捕获 LLR 上与 5GDescrambler 比较 PDCCH 解码：网络 K 为 6,924 对 3,815 个 DCI（1.8 倍），网络 U 为 12,556 对 5,108（2.5 倍）；论文将差距归因于带 CRC 校验的完整软判决极化码解码与校验子引导的 RNTI 排序。
- 已连接 UE：恢复会话相关参数后，可在通话进行中对 UE 实现双向解码。GPU 流水线在中等负载下近实时处理 100 MHz 商用流量，约 120 个活跃 RNTI/秒。
- 伦理声明：测试床实验使用测试 PLMN 与测试 SIM，位于隔离房间；在商用网络上，嗅探器本身从不发射，也不解密载荷，仅配置发现阶段会发射。
- 论文声明的局限：配置档案收集需要通过带商用 SIM 的 OAI UE 合法接入网络（部分网络校验 IMEI），且档案仅在网络配置不变时可复用；档案覆盖不完整；解码依赖嗅探器处的信号质量，波束赋形会降低接收；在最重负载下 100 MHz 处理无法维持实时。讨论部分指出，加扰标识与随机化 PHY 配置可能增加解码成本但不能保证机密性，并称保护机制设计是 6G 的开放问题。

## Why it matters / what's new (EN)

The paper's contribution relative to the sniffers it compares is the recovery of configurations that travel in encrypted RRC Reconfiguration and of session parameters for UEs already connected, with measured decoding gains on two commercial networks. The results are for passive observation of lower-layer traffic without breaking higher-layer encryption; the paper positions the work as supporting measurement and security monitoring, and as showing what a passive observer can see on 5G NR.

## Why it matters / what's new (ZH)

相对于其所比较的嗅探器，论文的贡献在于恢复通过加密 RRC Reconfiguration 传送的配置以及已连接 UE 的会话参数，并在两个商用网络上给出了实测的解码增益。结果针对在不破解高层加密的前提下被动观察低层流量；论文将这项工作定位为支持测量与安全监测，并展示被动观察者在 5G NR 上能看到什么。

## Images

None.
