---
id: 2026-07-02_3gpp-6g-air-interface-decisions
date_published: 2026-07-01
date_found: 2026-07-02
type: industry-news
technology: cellular
title_en: "3GPP June 2026 plenary locks first 6G air-interface decisions: CP-OFDM/DFT-s-OFDM continuity, LDPC BG3, 400 MHz channels"
title_zh: "3GPP 2026 年 6 月全会敲定首批 6G 空口决策：延续 CP-OFDM/DFT-s-OFDM、新增 LDPC BG3、400 MHz 信道带宽"
url: "https://www.rcrwireless.com/20260701/6g/6g-standard-qualcomm"
source_quality: full
topics: [6G, 3GPP, Release-21, OFDM, LDPC, waveform]
topic_primary: 6g-vision
topics_secondary: [cellular-spectrum, open-ran]
novelty_score: 3
---

## Summary (EN)

The 3GPP June 2026 RAN plenary concluded with the first concrete set of 6G air-interface decisions, turning the Release 20 6G study from an open-ended exploration into a defined technical foundation. As summarized by Qualcomm's VP of Technical Standards Juan Montojo (RCR Wireless, July 1, 2026) and corroborated by Ericsson's RAN standardization team (blog, June 12, 2026), 3GPP agreed to continue CP-OFDM in the downlink and to support both CP-OFDM and DFT-s-OFDM in the uplink — with DFT-s-OFDM now extended to multi-layer (up to two layers / uplink MIMO) transmission, combining its power-efficiency and coverage advantages with higher data rates. Channel coding likewise carries forward from 5G: LDPC for data channels and Polar codes for control channels, with a new third LDPC base graph (BG3) introduced specifically to improve decoder efficiency at high data rates.

On bandwidth, 6G will scale from 3 MHz up to 400 MHz per carrier — four times 5G NR's 100 MHz single-carrier maximum — with the 400 MHz operating point aimed at the 7 GHz range. From the device perspective the asymmetry is explicit: up to 400 MHz downlink and 200 MHz uplink. The frame structure reuses 5G NR's slot-based framework and scalable numerology, meaning existing-band deployments may migrate to 6G largely through software upgrades, while new spectrum (upper mid-band / 7 GHz) drives the hardware refresh.

Architecturally, the plenary settled on point-to-point connectivity between the RAN and core network, and two base-station design options (unified, or split into distributed/centralized units), with the lower-layer multi-vendor split interface explicitly delegated to the O-RAN Alliance — which has initiated complementary specifications trailing 3GPP by roughly six months. Ongoing studies include longer reference-signal periodicity so base stations can shut down parts of the radio between transmissions for energy savings, and a security framework that builds on the 5G baseline with added control-message protection.

The Release 21 normative timeline is now concrete: Work Item approval in March 2027, physical-layer functional freeze in September 2028, protocol design freeze in December 2028, and ASN.1 freeze (specification completion) in March 2029 — supporting first commercial 6G systems around 2030.

## Summary (ZH)

3GPP 2026 年 6 月 RAN 全会落幕，敲定了首批具体的 6G 空口技术决策，使 Release 20 的 6G 研究从开放式探索转入明确的技术基线。据高通技术标准副总裁 Juan Montojo 的总结（RCR Wireless，2026 年 7 月 1 日）以及爱立信 RAN 标准化团队的博客（2026 年 6 月 12 日）相互印证：3GPP 同意下行链路延续 CP-OFDM，上行链路同时支持 CP-OFDM 与 DFT-s-OFDM——且 DFT-s-OFDM 扩展至多层（最多两层 / 上行 MIMO）传输，在保留其功率效率与覆盖优势的同时提升数据速率。信道编码同样从 5G 延续：数据信道用 LDPC、控制信道用 Polar 码，并新引入第三个 LDPC 基础图（BG3），专门用于提升高速率场景下的译码器效率。

带宽方面，6G 单载波将从 3 MHz 扩展到 400 MHz——是 5G NR 单载波 100 MHz 上限的四倍——400 MHz 工作点瞄准 7 GHz 频段。从终端视角带宽是非对称的：下行最高 400 MHz、上行 200 MHz。帧结构复用 5G NR 的时隙框架与可扩展参数集（numerology），这意味着现有频段的部署有望主要通过软件升级迁移到 6G，而新频谱（上中频段 / 7 GHz）才驱动硬件更新。

架构上，全会确定 RAN 与核心网之间采用点对点连接，基站设计保留两种选项（一体式，或分布式/集中式单元拆分），其中低层多厂商拆分接口明确交由 O-RAN 联盟定义——O-RAN 已启动滞后 3GPP 约六个月的配套规范工作。进行中的研究还包括更长周期的参考信号（允许基站在传输间隙关闭部分射频设备以节能），以及在 5G 安全基线上增加控制消息保护的安全框架。

Release 21 规范化时间表现已明确：2027 年 3 月批准工作项目（WI），2028 年 9 月物理层功能冻结，2028 年 12 月协议设计冻结，2029 年 3 月 ASN.1 冻结（规范完成），支撑 2030 年前后的首批 6G 商用系统。

## Key technical points (EN)

- **Waveform continuity**: CP-OFDM downlink; CP-OFDM + DFT-s-OFDM uplink. DFT-s-OFDM extended to up to 2-layer uplink MIMO — new vs 5G NR, where DFT-s-OFDM was single-layer only.
- **Channel coding**: LDPC (data) + Polar (control) retained; new LDPC base graph BG3 for decoder efficiency at high rates.
- **Bandwidth**: 3 MHz – 400 MHz per carrier (5G NR max: 100 MHz); 400 MHz targeted at the 7 GHz range; device-side 400 MHz DL / 200 MHz UL.
- **Frame structure**: 5G NR slot framework and scalable numerology reused — software-upgrade path for existing bands.
- **Architecture**: point-to-point RAN–core connectivity; unified or DU/CU-split base stations; lower-layer multi-vendor interface delegated to O-RAN Alliance (specs trailing ~6 months).
- **Energy & security studies**: longer reference-signal periodicity for inter-transmission radio shutdown; security framework = 5G baseline + control-message protection.
- **Release 21 timeline**: WI approval Mar 2027 → PHY functional freeze Sep 2028 → protocol freeze Dec 2028 → ASN.1 freeze Mar 2029 → commercial ~2030.

## Key technical points (ZH)

- **波形延续**：下行 CP-OFDM；上行 CP-OFDM + DFT-s-OFDM，且 DFT-s-OFDM 扩展至最多 2 层上行 MIMO——相比 5G NR（DFT-s-OFDM 仅单层）是新变化。
- **信道编码**：保留 LDPC（数据）+ Polar（控制）；新增 LDPC 基础图 BG3，提升高速率译码效率。
- **带宽**：单载波 3 MHz – 400 MHz（5G NR 上限 100 MHz）；400 MHz 瞄准 7 GHz 频段；终端侧下行 400 MHz / 上行 200 MHz。
- **帧结构**：复用 5G NR 时隙框架与可扩展 numerology——现有频段可走软件升级路径。
- **架构**：RAN–核心网点对点连接；基站一体式或 DU/CU 拆分两种选项；低层多厂商接口交由 O-RAN 联盟（规范滞后约 6 个月）。
- **节能与安全研究**：更长参考信号周期以便传输间隙关闭部分射频；安全框架 = 5G 基线 + 控制消息保护。
- **Release 21 时间表**：2027 年 3 月批准 WI → 2028 年 9 月物理层冻结 → 2028 年 12 月协议冻结 → 2029 年 3 月 ASN.1 冻结 → 约 2030 年商用。

## Why it matters / what's new (EN)

This is the first KB entry recording *decided* 6G physical-layer parameters rather than proposals, visions, or vendor demos. It complements 2026-05-30_ericsson-mwc2026-6g-demos-apple-mediatek (pre-standard demos) and the Rel-20 study-phase entries by pinning down what the June 2026 plenary actually froze: waveform continuity with a 2-layer DFT-s-OFDM uplink extension, LDPC BG3, the 3–400 MHz bandwidth envelope anchored at 7 GHz, P2P RAN-core connectivity, and the O-RAN delegation of the multi-vendor lower-layer split. The Release 21 gate dates (Mar 2027 / Sep 2028 / Dec 2028 / Mar 2029) give the whole cellular topic bin its normative clock: feature direction firms up through 2027–2028, requirements stabilize into 2029, commercialization ~2030. The "evolution not revolution" tilt — reusing NR's slot structure and channel codes — is itself the news: 6G's differentiation is being pushed up-stack (AI-native operation, energy efficiency, new spectrum) rather than into a new PHY.

## Why it matters / what's new (ZH)

这是 KB 中第一条记录 6G 物理层 *已决策* 参数（而非提案、愿景或厂商演示）的条目。它与 2026-05-30_ericsson-mwc2026-6g-demos-apple-mediatek（预标准演示）及 Rel-20 研究阶段各条目互补，钉住了 2026 年 6 月全会实际冻结的内容：波形延续 + 上行 2 层 DFT-s-OFDM 扩展、LDPC BG3、锚定 7 GHz 的 3–400 MHz 带宽包络、RAN-核心网点对点连接、以及将多厂商低层拆分接口交由 O-RAN。Release 21 的关键节点（2027 年 3 月 / 2028 年 9 月 / 2028 年 12 月 / 2029 年 3 月）为整个蜂窝主题域提供了规范化时钟：特性方向在 2027–2028 年定型，需求在 2029 年稳定，约 2030 年商用。"演进而非革命"的取向——复用 NR 时隙结构与信道编码——本身就是新闻：6G 的差异化正被推向协议栈上层（AI 原生运维、能效、新频谱），而不是全新 PHY。
