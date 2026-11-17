---
id: 2026-11-17_arxiv-space-based-zero-trust-architecture-direct-to-cell
date_published: 2026-11-13
date_found: 2026-11-17
technology: satellite
type: academic-paper
title_en: "Space-based Zero-trust Architecture for Securing the Direct-to-Cell Paradigm"
title_zh: "面向直连蜂窝（D2C）安全的星上零信任架构"
url: "https://arxiv.org/abs/2611.17826"
source_quality: full
topics: [direct-to-cell, zero trust, RF fingerprint authentication, on-board computing, Tangle ledger, access control, inter-satellite links]
topic_primary: sat-direct-device
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Chen, Sun, Huang, Quan, Jing and Shen (Tsinghua University, Beijing Jiaotong University, University of Waterloo; arXiv cs.NI, 13 Nov 2026) argue that direct-to-cell (D2C) satellite access bypasses the satellite access gateways (SAGs) that traditional defences rely on, so UE traffic reaches satellites directly and can propagate over inter-satellite links toward ground control stations. They propose a Space-based Zero-Trust Architecture (SZTA), enabled by on-board satellite computing, with three components: RF-fingerprint-based authentication, distributed identity management, and behaviour-driven dynamic access control. The article also lists open issues. Results are from simulation.

## Summary (ZH)

Chen、Sun、Huang、Quan、Jing 与 Shen（清华大学、北京交通大学、滑铁卢大学；arXiv cs.NI，2026 年 11 月 13 日）指出，直连蜂窝（D2C）卫星接入绕过了传统防御所依赖的卫星接入网关（SAG），终端流量直接到达卫星并可经星间链路传向地面控制站。作者提出由星上计算支撑的星上零信任架构（SZTA），包含三部分：基于射频指纹的认证、分布式身份管理、行为驱动的动态访问控制。文章还列出若干开放问题。结果来自仿真。

## Key technical points (EN)

- Simulation setup: Walker-delta 72/6 constellation at 1000 km, 53 deg inclination, 6 gateway ground stations; ISL capacity 10 Gbps, user up/downlink 500 Mbps; each access request 5 KB; minimum-hop routing over the grid ISL topology.
- On-board authentication modelled as a 2.4 ms 1D-CNN inference (114 KB, 8-bit quantised model) plus 1-2 ms of signature-based certificate operations; certificates are recorded in a Tangle-style ledger, each transaction 1.5 KB, tip selection limited to two ISL hops.
- Trust score per UE starts at 100 and is updated every 50 ms from five weighted factors: historical behavioural consistency (0.4), signal stability (0.2), spatiotemporal consistency (0.2), protocol compliance (0.1), energy characteristics (0.1); scores below 50 trigger quarantine and re-authentication.
- Authentication latency: ground authentication reaches 513 ms at 5000 UEs; an on-board PoA consensus ledger costs 0.3 s per write; SZTA verifies every access within 13-36 ms.
- Malicious traffic admitted at a 55% malicious-UE ratio: ground authentication 405 Mbps, cached credentials 81 Mbps, RF-fingerprint-only 46 Mbps, SZTA under 10 Mbps.
- Detection time: with penalty coefficient 6.0, an attack of 24 concurrent requests is neutralised within 50 ms.
- Open issues named: rapid on-board RF-fingerprint extraction (needs sub-ppm real-time Doppler compensation), a lightweight on-board Tangle protocol, behaviour modelling with space-time constraints.

## Key technical points (ZH)

- 仿真设置：1000 km 高度、倾角 53 度的 Walker-delta 72/6 星座，6 个关口站；星间链路容量 10 Gbps，用户上下行 500 Mbps；每个接入请求 5 KB；在网格形星间链路拓扑上按最小跳数路由。
- 星上认证建模为 2.4 ms 的 1D-CNN 推理（114 KB，8 位量化模型）加 1-2 ms 的基于签名的证书操作；证书记录于 Tangle 式账本，每笔交易 1.5 KB，尖端选择限于两跳星间链路。
- 每个终端的信任分初值为 100，每 50 ms 依据五项加权因素更新：历史行为一致性（0.4）、信号稳定性（0.2）、时空一致性（0.2）、协议合规性（0.1）、能量特征（0.1）；低于 50 触发隔离并重新认证。
- 认证时延：地面认证在 5000 个终端时达 513 ms；星上 PoA 共识账本每次写入 0.3 s；SZTA 对每次接入的验证在 13-36 ms 内完成。
- 恶意用户比例 55% 时进入网络的恶意流量：地面认证 405 Mbps，缓存凭证 81 Mbps，仅射频指纹 46 Mbps，SZTA 低于 10 Mbps。
- 检测时间：惩罚系数为 6.0 时，24 个并发请求的攻击在 50 ms 内被处置。
- 列出的开放问题：星上快速射频指纹提取（需亚 ppm 级实时多普勒补偿）、轻量级星上 Tangle 协议、含时空约束的行为建模。

## Why it matters / what's new (EN)

The article frames D2C access as removing the gateway chokepoint where authentication used to happen, and moves authentication and behaviour monitoring onto the satellites. All numbers are from the authors' simulation with modelled delays; no field measurement is reported.

## Why it matters / what's new (ZH)

文章指出 D2C 接入去掉了原先进行认证的网关瓶颈，并将认证与行为监测移至卫星上。所有数字均来自作者的仿真（时延为建模值），未报告实测。

## Images

None.
