---
id: 2026-05-01_arxiv-bf-ax-coexistence-ns3
date_found: 2026-05-01
date_published: 2025-03-06
type: academic-paper
title_en: "When Next-Gen Sensing Meets Legacy Wi-Fi: Performance Analyses of IEEE 802.11bf and IEEE 802.11ax Coexistence"
title_zh: "下一代感知遇上既有 Wi-Fi：IEEE 802.11bf 与 IEEE 802.11ax 共存的性能分析"
url: "https://arxiv.org/html/2503.04637v1"
source_quality: full
topics: [802.11bf, 802.11ax, WiFi-sensing, MAC-layer, scheduling]
novelty_score: 3
---

## Summary (EN)

Keshtiarast, Bishoyi, Lumbantobing, and Petrova (Mar 2025) build the first analytical-plus-simulation framework for evaluating how a sensing-enabled 802.11bf network coexists with a co-channel 802.11ax-only network. Their contribution includes a publicly released ns-3 module for IEEE 802.11bf — until now the simulator coverage for 802.11bf was effectively zero, and the open-sourcing matters as much as the analysis itself.

The framework parameterizes sensing-interval, access-category, network-density, and antenna-configuration knobs. Headline finding: there is a sharp trade-off between sensing-cadence and communication throughput when both BSSs share airtime. Aggressive sensing intervals starve the legacy 802.11ax flows; conservative sensing intervals collapse the sensing-detection accuracy. Concrete numerical results for delay/throughput aren't fully extractable from the abstract, but the framework itself is the asset.

The most useful contribution is the *tool*: the open-source ns-3 module is the right starting point for anyone validating MAC-layer mechanisms that change the sensing/communication trade-off. The paper itself doesn't propose a new mechanism — it measures the gap between the two existing standards.

## Summary (ZH)

Keshtiarast、Bishoyi、Lumbantobing 和 Petrova（2025 年 3 月）首次提出"分析模型 + 仿真"相结合的框架，用于评估开启感知能力的 802.11bf 网络与同信道纯 802.11ax 网络如何共存。他们的另一项贡献是公开发布的 IEEE 802.11bf ns-3 模块 —— 在此之前 802.11bf 的仿真器覆盖几乎为零，开源本身和分析结果同等重要。

框架可以调整感知间隔、接入类别（access category）、网络密度、天线配置等参数。主要结论是：当两个 BSS 共享空中时间时，感知周期与通信吞吐之间存在明显折中。过于激进的感知间隔会"饿死"传统 802.11ax 流；过于保守的感知间隔则会使感知检测精度坍塌。具体的时延 / 吞吐数据无法仅从摘要中提取，但框架本身就是核心资产。

最有价值的贡献是这一**工具**：这个开源 ns-3 模块是评估"改变感知 / 通信折中关系的 MAC 层机制"时合适的起点。论文本身并未提出新机制，而是度量了两个既有标准之间的差距。

## Key technical points (EN)

- Open-source ns-3 module for IEEE 802.11bf (publicly released alongside paper)
- Analytical model + system-level simulation framework
- Identifies trade-off frontier between sensing interval and 802.11ax throughput
- Sweep parameters: sensing intervals, access categories (VO/VI/BE/BK), network density, antenna configurations
- No new mechanism proposed — measurement infrastructure paper

## Key technical points (ZH)

- 公开发布的 IEEE 802.11bf ns-3 仿真模块（论文同步开源）
- 分析模型 + 系统级仿真框架
- 识别出感知间隔与 802.11ax 吞吐之间的折中前沿
- 扫描参数：感知间隔、接入类别（VO/VI/BE/BK）、网络密度、天线配置
- 论文本身不提新机制，是测量基础设施论文

## Why it matters / what's new (EN)

First measurement-tooling entry in this KB. Useful infrastructure for anyone touching 802.11bf coexistence:

- Reference baseline when comparing a new sensing-coordination mechanism against the unmodified standard
- Reproducible simulator means cross-paper comparisons are now possible

Lower novelty than mechanism papers, but high practical value as evaluation infrastructure.

## Why it matters / what's new (ZH)

本 KB 中的第一条"测量基础设施"条目。对所有涉及 802.11bf 共存的研究都有用：

- 当需要把新的感知协调机制与未修改的标准进行对比时，可作为参考基线
- 可复现的仿真器使得跨论文对比成为可能

相对机制类论文新颖性较低，但作为评估基础设施实用价值很高。

## Images

![802.11bf sensing roles (initiator/responder, transmitter/receiver) | 802.11bf 感知角色（发起方/响应方、发送/接收）](https://arxiv.org/html/2503.04637v1/x1.png)
![Trigger-based sensing measurement protocol phases | 基于触发的感知测量协议各阶段](https://arxiv.org/html/2503.04637v1/x2.png)
![Channel access between 802.11bf and 802.11ax APs | 802.11bf 与 802.11ax AP 之间的信道接入](https://arxiv.org/html/2503.04637v1/x4.png)
