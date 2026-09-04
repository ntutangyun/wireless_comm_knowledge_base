---
id: 2026-09-04_quantalrf-dpd-efficient-wifi78-fem
date_published: 2026-09-03
date_found: 2026-09-04
technology: wifi
type: product
title_en: "QuantalRF's Elementum QWX27104: a DPD-efficient front-end module for Wi-Fi 7/Wi-Fi 8, claiming up to 3 dB more mask-compliant output power"
title_zh: "QuantalRF Elementum QWX27104：面向 Wi-Fi 7/Wi-Fi 8 的 DPD 高效前端模块，宣称提升符合频谱模板要求的输出功率最多 3 dB"
url: "https://wifinowglobal.com/news-blog/quantalrfs-new-dpd-efficient-wi-fi-7-wi-fi-8-fem-boost-output-power-by-up-to-3db-with-consistent-linearity-company-says/"
source_quality: full
topics: [FEM, RF-front-end, GaAs, RF-SOI, 802.11be, wifi8, PA-linearity]
topic_primary: wifi7-deployment
topics_secondary: [wifi8-uhr]
novelty_score: 1
---

## Summary (EN)

QuantalRF announced its Elementum QWX27104 on September 3, 2026, described by the company as a "DPD-efficient" linear front-end module (FEM) aimed at Wi-Fi 7 and Wi-Fi 8 devices using wide-bandwidth modulations. Digital pre-distortion (DPD) is a correction technique that compensates for power-amplifier nonlinearity; the article's framing is that QuantalRF engineers linearity directly into the FEM hardware so that a "lower-order, less complex DPD engine" running on the host SoC is sufficient, reducing the digital-correction burden that would otherwise fall on the modem/SoC side. The company positions the part for tier-1 mobile OEMs and SoC makers building Wi-Fi 7/Wi-Fi 8 products that need consistent linearity across wide channel bandwidths.

According to the company's claims relayed in the article, the QWX27104 delivers up to 3 dB of additional mask-compliant output power at wide channel bandwidths compared to unspecified alternatives, while keeping error vector magnitude (EVM) within 0.5 dB across all channels — a consistency the article contrasts with "competitive GaAs solutions" that it says can vary by more than 4 dB channel-to-channel. The part integrates a power amplifier, low-noise amplifier, switch and coupler on a single monolithic die, is built on GlobalFoundries' 8SW RF-SOI process, and targets 160 MHz and 320 MHz channel bandwidths, which the article describes as "where Wi-Fi 7 and Wi-Fi 8 need the performance most." The article also states the module offers greater tolerance to system, temperature and process variations, again relayed as the company's own claim.

## Summary (ZH)

QuantalRF 于 2026 年 9 月 3 日发布了 Elementum QWX27104，公司将其描述为面向使用宽带宽调制的 Wi-Fi 7 与 Wi-Fi 8 设备的"DPD 高效"线性前端模块（FEM）。数字预失真（DPD）是一种用于补偿功率放大器非线性的校正技术；文章的表述是，QuantalRF 将线性度直接工程化到 FEM 硬件中，使得运行在主控 SoC 上的"更低阶、更简单的 DPD 引擎"即可满足需求，从而降低了原本需由调制解调器/SoC 侧承担的数字校正负担。公司将该产品定位面向需要在宽信道带宽下保持一致线性度的一线移动 OEM 与 SoC 厂商所打造的 Wi-Fi 7/Wi-Fi 8 产品。

据文章转述的公司说法，QWX27104 相较未具名的替代方案，在宽信道带宽下可提供最多 3 dB 的额外、且符合频谱模板要求的输出功率，同时将所有信道的误差矢量幅度（EVM）保持在 0.5 dB 以内的一致性——文章将这一一致性与其所称的"竞品 GaAs 方案"（信道间差异可超过 4 dB）作对比。该模块将功率放大器、低噪声放大器、开关与耦合器集成于单片单一芯片上，采用 GlobalFoundries 的 8SW RF-SOI 工艺制造，目标信道带宽为 160 MHz 与 320 MHz，文章称这是"Wi-Fi 7 与 Wi-Fi 8 最需要性能的地方"。文章还转述了公司的说法，称该模块对系统、温度与工艺偏差具有更强的容忍度。

## Key technical points (EN)

- **Product**: QuantalRF Elementum QWX27104, announced 2026-09-03, a monolithic FEM integrating PA + LNA + switch + coupler on GlobalFoundries' 8SW RF-SOI process.
- **Mechanism, per the company**: linearity engineered into the FEM hardware itself, so the host SoC's DPD engine can be "lower-order, less complex" than it would need to be with a less-linear FEM.
- **Company-claimed performance**: up to 3 dB additional mask-compliant output power at wide channel bandwidths; EVM held within 0.5 dB across all channels, versus a claimed >4 dB channel-to-channel variation for "competitive GaAs solutions."
- **Target bandwidths**: 160 MHz and 320 MHz channels.
- **Target customers**: tier-1 mobile OEMs and SoC makers building Wi-Fi 7/Wi-Fi 8 products with complex wideband modulation requirements.
- Neither the article nor the company claim provides independent third-party benchmark verification of the 3 dB / 4 dB figures — both are relayed as company-stated claims.

## Key technical points (ZH)

- **产品**：QuantalRF Elementum QWX27104，发布于 2026-09-03，是采用 GlobalFoundries 8SW RF-SOI 工艺、将 PA、LNA、开关与耦合器集成于单片芯片上的前端模块。
- **机制（据公司说法）**：将线性度直接工程化到 FEM 硬件本身，使主控 SoC 的 DPD 引擎相较线性度较差的 FEM 方案可以做得"更低阶、更简单"。
- **公司宣称的性能**：在宽信道带宽下可提供最多 3 dB 的额外、且符合频谱模板要求的输出功率；所有信道的 EVM 保持在 0.5 dB 以内，相较其所称"竞品 GaAs 方案"信道间差异可超过 4 dB。
- **目标带宽**：160 MHz 与 320 MHz 信道。
- **目标客户**：需要复杂宽带调制能力的一线移动 OEM 与 SoC 厂商，用于 Wi-Fi 7/Wi-Fi 8 产品。
- 文章与公司说法均未提供第三方对 3 dB / 4 dB 数字的独立基准验证——两者均为公司自述数据的转述。

## Why it matters / what's new (EN)

This KB's Wi-Fi 7/8 deployment coverage has so far tracked baseband/SoC announcements (MediaTek Filogic 8000, Broadcom BCM4918/6714/6719, Qualcomm FastConnect 8800/Dragonwing) and consumer product launches (TP-Link Archer 8 Ultra). QuantalRF's announcement is a data point one layer down the stack — the RF front-end module that has to deliver the wide-bandwidth linearity those basebands assume.

## Why it matters / what's new (ZH)

本知识库此前对 Wi-Fi 7/8 部署的跟踪主要集中在基带/SoC 层面的发布（联发科 Filogic 8000、博通 BCM4918/6714/6719、高通 FastConnect 8800/Dragonwing）以及终端产品发布（TP-Link Archer 8 Ultra）。QuantalRF 的这则发布则是产业链更下一层的数据点——必须提供这些基带所假定的宽带宽线性度的射频前端模块。

## Images

![QuantalRF Elementum QWX27104 front-end module | QuantalRF Elementum QWX27104 前端模块](https://wifinowevents.s3.amazonaws.com/uploads/2026/09/QuantalRFTop-1024x577.jpg)
