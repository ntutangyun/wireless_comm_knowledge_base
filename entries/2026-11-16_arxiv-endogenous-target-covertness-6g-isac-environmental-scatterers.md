---
id: 2026-11-16_arxiv-endogenous-target-covertness-6g-isac-environmental-scatterers
date_published: 2026-11-11
date_found: 2026-11-16
type: academic-paper
technology: cellular
title_en: "Harnessing Environmental Scatterers for Endogenous Target Covertness in 6G ISAC: A New Paradigm for Sensing Security"
title_zh: "利用环境散射体实现 6G ISAC 的内生目标隐蔽：感知安全的新范式"
url: "https://arxiv.org/abs/2611.16110"
source_quality: full
topics: [6G, ISAC, sensing-security, target-covertness, RIS, ambient-backscatter, warden, physical-layer-security]
topic_primary: cellular-security
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)

This article-style paper starts from a security gap in 6G integrated sensing and communication (ISAC): sensing waveforms and target echoes radiate into open space, so an unauthorized "target warden" can detect that a target is present. It first surveys three families of sensing-secure methods (artificial-noise assistance, secure beamforming and sensing-secure waveform design) and argues they mainly degrade a warden's parameter-estimation accuracy rather than hide the target's existence.

It then proposes "endogenous target covertness": nearby environmental scatterers (background objects, ambient backscatter devices, reconfigurable intelligent surfaces) act as ghost targets. The base station knows the scatterers' characteristics and can reconstruct and suppress their echoes, while the warden sees the true target embedded among target-like reflections. A Monte Carlo case study illustrates the effect, and the article closes with open issues and future directions.

## Summary (ZH)

这篇文章式论文从 6G 通感一体化（ISAC）的一个安全缺口出发：感知波形与目标回波会向开放空间辐射，未经授权的“目标监视者”（warden）因而能够发现目标的存在。文章先综述三类感知安全方法（人工噪声辅助、安全波束赋形、感知安全波形设计），并指出它们主要是降低监视者的参数估计精度，而不是隐藏目标的存在。

随后提出“内生目标隐蔽”：把目标附近的环境散射体（背景物体、环境反向散射设备、可重构智能表面）当作幽灵目标。基站知道这些散射体的特性，可重构并抑制其回波，而监视者看到的是真实目标嵌在一组类目标反射之中。文章用蒙特卡洛案例研究说明效果，并在最后讨论开放问题与未来方向。

## Key technical points (EN)

- Definition: a target is covert when a warden cannot reliably distinguish target absence (H0) from presence (H1) even under its optimal detector, i.e. its total detection error approaches random guessing.
- Mechanism: the base station forms one ISAC beam that illuminates both the target and the scatterers; the legitimate side exploits prior knowledge of the scatterers, the warden has no such side information. The paper contrasts this with an ambient-IoT approach (AmbSentry) that does not formulate target-existence covertness.
- Case-study setup: 28 GHz carrier, 400 MHz bandwidth, 16-antenna base station, 4-antenna warden, scatterers within 0.5 m of the target, K from 0 to 20 scatterers, 64 symbols per frame, 40 dBm power budget.
- Reported behaviour: with scatterers the warden's detection error falls with transmit power and then levels off at a nonzero floor that rises with K; at 10 dB transmit SNR with K = 10 the legitimate base station has about an 11 dB sensing-SINR advantage over the warden.
- Open issues listed: multi-dimensional resource optimisation, integrating diverse controllable scatterers, information-theoretic bounds on covertness, the covertness-throughput-sensing Pareto trade-off, and resilience against active wardens.

## Key technical points (ZH)

- 定义：当监视者即使采用最优检测器也无法可靠区分目标不存在（H0）与存在（H1），即其总检测错误率逼近随机猜测时，该目标即为隐蔽目标。
- 机制：基站形成同时照射目标与散射体的单一 ISAC 波束；合法一侧利用对散射体的先验知识，监视者则没有这类辅助信息。文中将其与未形式化“目标存在隐蔽”的环境物联网方案（AmbSentry）进行了对比。
- 案例设置：28 GHz 载频、400 MHz 带宽、16 天线基站、4 天线监视者，散射体分布在目标 0.5 m 范围内，K 取 0 至 20，每帧 64 个符号，功率预算 40 dBm。
- 报告的现象：存在散射体时，监视者的检测错误率随发射功率先下降后趋于一个非零下限，且该下限随 K 增大而升高；在发射信噪比 10 dB、K = 10 时，合法基站相对监视者约有 11 dB 的感知 SINR 优势。
- 列出的开放问题：多维资源优化、多种可控散射体的集成、隐蔽性的信息论界、隐蔽-吞吐-感知的帕累托权衡，以及对抗主动监视者的鲁棒性。

## Why it matters / what's new (EN)

Within ISAC security, the paper shifts the objective from degrading a warden's estimates to concealing that a target exists, and does so without dedicated jamming power or knowledge of the warden's channel. The evidence is a single-scenario numerical case study under an idealised model; the paper itself frames the scheme as a new paradigm with open theoretical and practical issues.

## Why it matters / what's new (ZH)

在 ISAC 安全方面，这篇论文把目标从“降低监视者的估计精度”转向“隐藏目标存在本身”，并且无需专用干扰功率或监视者信道信息。证据是理想化模型下的单场景数值案例；论文自身也把该方案定位为带有未解理论与实践问题的新范式。

## Images

![Environmental-scatterer-enabled endogenous target covertness in an ISAC system | 环境散射体赋能的 ISAC 系统内生目标隐蔽示意图](https://arxiv.org/html/2611.16110v1/Fig2.png)
![Range-Doppler maps at the legitimate base station and at the target warden, with and without environmental scatterers | 有无环境散射体时，合法基站与目标监视者处的距离-多普勒图](https://arxiv.org/html/2611.16110v1/Fig3.png)
