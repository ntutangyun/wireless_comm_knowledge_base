---
id: 2026-10-21_arxiv-agentic-ai-6g-physical-layer-otfs-baseband-silicon
date_published: 2026-10-20
date_found: 2026-10-21
type: academic-paper
technology: cellular
title_en: "Toward Agentic AI for the 6G Physical Layer: From Algorithm Discovery to Verified Baseband Silicon"
title_zh: "面向 6G 物理层的智能体 AI：从算法发现到经硅片验证的基带实现"
url: "https://arxiv.org/abs/2610.27797"
source_quality: full
topics: [6G, agentic-AI, LLM, OTFS, baseband, NXP-LA9310, VSPA, 6G4All, hardware-in-the-loop, detector]
topic_primary: 6g-vision
topics_secondary: [cellular-ai]
novelty_score: 4
---

## Summary (EN)
Eric Mittag, Lukas Brechtel, Maximilian Stark and Hans D. Schotten (DFKI Kaiserslautern, NXP Semiconductors, RPTU Kaiserslautern-Landau) present an agentic workflow in which an LLM coding agent implements physical-layer algorithms on a commercial baseband system-on-chip, optimizes them down to agent-written vector assembly, and validates them on the silicon. The paper is accepted at the 2026 IEEE Globecom Workshops (2nd Workshop on Agentic AI Empowered Wireless Communications and Networking, Macau, December 2026). The paper's starting point is that AI-driven search already proposes physical-layer algorithms at machine speed, while carrying a single one onto embedded baseband silicon remains specialist work.

The demonstration runs on the open 6G4All platform (a LimeSDR-Micro board around the NXP LA9310, with a Cortex-M4 control core and a VSPA vector DSP at 614.4 MHz that has no scalar floating-point unit). The workload is an OTFS (orthogonal time frequency space) detector portfolio taken from an earlier LLM-guided discovery framework: four classical baselines (LMMSE, expectation propagation, Gaussian message passing, UAMP) plus the framework's discovered expectation-consistency (EC) detector. The agent works inside a workbench of a knowledge base of measured platform facts, machine-checkable tools (vendor toolchain, cycle-accurate simulator, a debug bridge to the chip), evaluators it is instructed never to edit, and a per-phase effort meter read from the agent's own transcripts.

The result is twelve kernels (a correctness-first C proof of concept and an ISA-optimized version for each of six algorithms) that run on silicon with cycle counts identical to the simulator; the optimized versions take 18k to 405k cycles (30 to 660 microseconds) per frame. The agent also designed a new detector, ec_frozen, shaped by the chip's measured costs, which needs 13.9% fewer cycles than the port of the discovered detector while matching its error rate. The paper states the measured edge cannot be statistically resolved by its evaluation, and that the claim is feasibility at a measured agent cost rather than a productivity gain over non-agentic flows.

## Summary (ZH)
Eric Mittag、Lukas Brechtel、Maximilian Stark 与 Hans D. Schotten（DFKI 凯泽斯劳滕、NXP Semiconductors、RPTU 凯泽斯劳滕-兰道）提出一种智能体工作流：由 LLM 编码智能体在商用基带片上系统上实现物理层算法，将其优化到由智能体编写的向量汇编，并在硅片上完成验证。该论文已被 2026 IEEE Globecom Workshops（第二届 Agentic AI Empowered Wireless Communications and Networking 研讨会，澳门，2026 年 12 月）接收。论文的出发点是：AI 驱动的搜索已能以机器速度提出物理层算法，而把其中任何一个落到嵌入式基带芯片上仍属专家工作。

演示基于开放的 6G4All 平台（围绕 NXP LA9310 的 LimeSDR-Micro 板卡，含 Cortex-M4 控制核和主频 614.4 MHz、无标量浮点单元的 VSPA 向量 DSP）。工作负载是取自此前 LLM 引导的算法发现框架的 OTFS（正交时频空）检测器组合：四个经典基线（LMMSE、期望传播、高斯消息传递、UAMP）加上该框架发现的期望一致性（EC）检测器。智能体在一个工作台内运行，其中包含由实测平台事实构成的知识库、可机器校验的工具（厂商工具链、周期精确仿真器、连接芯片的调试桥）、被明令不得修改的评估器，以及根据智能体自身对话记录读取的分阶段投入计量。

结果是十二个内核（六个算法各有一个以正确性为先的 C 概念验证版本和一个面向指令集优化的版本），在硅片上的周期数与仿真器完全一致；优化版本每帧耗时 18k 至 405k 周期（30 至 660 微秒）。智能体还设计了一个由芯片实测代价塑造的新检测器 ec_frozen，其周期数比所发现检测器的移植版本少 13.9%，同时误码性能相当。论文说明其评估无法在统计上分辨这一实测优势，并声明结论是在可计量的智能体成本下证明了可行性，而非相对非智能体流程的生产率提升。

## Key technical points (EN)
- Platform limits drive the design: 16 kB data memory (12,160 B usable for static data), 32 kB program memory, 16 kB auxiliary IPPU memory, and a DSP with no scalar floating-point unit, so scalar float work falls back to software emulation. At the discovered detector's published operating point, its serialized channel representation is about 63 MB against roughly 28 kB of usable target memory, so the campaign runs at reduced grid dimensions.
- Workbench: the agent writes artifacts only in its own lane; upstream evaluators are pinned as a submodule; every candidate follows a fixed contract (Python reference model, float32 C or assembly kernel, golden vectors, self-checking tests) and is scored by one command returning SUCCESS, normalized validation error, cycle count.
- Three gated phases: proof of concept (Python plus C, cross-validated against the upstream implementation), ISA-level optimization (headless cycle simulator), and a hardware phase that is the only one touching silicon. Facts measured along the way are written back with provenance: 61 in this campaign, 43 reused by later phases, two contradicting the ISA manual.
- Optimization gains are structural: the block-circulant structure of the delay-Doppler channel along Doppler lets independent solves replace the dense solve (lmmse_opt, 1693x fewer cycles than its proof of concept); for QPSK the message-passing edge messages factor into I and Q (mp_opt, 1066x). Proof-of-concept to optimized ratios across kernels range from 154x to 1693x.
- ec_frozen pays for each block's regularized inverse once and reuses it as a preconditioner with a single Richardson step per EC iteration, stabilized by rescaling, Jacobi smoothing and warm starts; a refinement costs 2.8k cycles against 7.6k for a factorized solve round, so a third iteration becomes affordable.
- Silicon validation: all twelve kernels reproduced simulator cycle counts exactly across 120 seed runs (113 pass, 6 generator margin-guard rejections, 1 miss of the golden tolerance by 1.4x on one uamp_opt seed, identical on silicon and simulator with no confident bit decision flipped). The hardware phase exposed faults in the verification tooling rather than in the silicon.
- Limitations stated by the authors: one operating point, QPSK, reduced grid; no kernel run in a live stack; power, energy per frame and DMA cost not measured; no non-agentic baseline flow was run; a documentation ablation covers two of six algorithms with one run per cell.

## Key technical points (ZH)
- 平台限制决定设计：16 kB 数据存储（静态数据可用 12,160 B）、32 kB 程序存储、16 kB 辅助 IPPU 存储，且 DSP 没有标量浮点单元，标量浮点运算只能软件模拟。所发现检测器在公布工作点下的序列化信道表示约 63 MB，而目标芯片可用存储约 28 kB，因此实验在缩减的网格维度下进行。
- 工作台：智能体只在自己的通道内写入产物；上游评估器以子模块方式固定；每个候选都遵循固定契约（Python 参考模型、float32 C 或汇编内核、黄金向量、自检测试），并通过一条命令打分，输出 SUCCESS、归一化验证误差与周期数。
- 三个受控阶段：概念验证（Python 加 C，与上游实现交叉验证）、指令集级优化（无界面周期仿真器），以及唯一接触硅片的硬件阶段。过程中测得的事实带出处写回知识库：本次共 61 条，43 条被后续阶段复用，2 条与指令集手册相矛盾。
- 优化收益来自结构而非指令：沿多普勒方向的时延-多普勒信道块循环结构使独立求解可取代稠密求解（lmmse_opt，比其概念验证版少 1693 倍周期）；对 QPSK，消息传递的边消息可分解为 I 与 Q（mp_opt，1066 倍）。各内核从概念验证到优化版本的比例在 154 倍至 1693 倍之间。
- ec_frozen 对每个块的正则化逆只计算一次，并将其作为预条件器，每次 EC 迭代只做一步 Richardson 修正，辅以重缩放、Jacobi 平滑和热启动来稳定；一次修正耗时 2.8k 周期，而分解式求解轮次为 7.6k，因此第三次迭代变得可负担。
- 硅片验证：12 个内核在 120 次种子运行中与仿真器周期数完全一致（113 次通过，6 次为生成器余量保护拒绝，1 次 uamp_opt 种子以 1.4 倍超出黄金容限，硅片与仿真器结果完全相同且无置信比特判决翻转）。硬件阶段暴露的是验证工具链中的缺陷，而非硅片本身。
- 作者声明的局限：仅一个工作点、QPSK、缩减网格；没有内核在实时协议栈中运行；未测功耗、每帧能耗与 DMA 开销；未运行非智能体基线流程；文档消融仅覆盖六个算法中的两个且每格一次运行。

## Why it matters / what's new (EN)
The KB's 6G-vision coverage so far consists mostly of standards news and architecture, ISAC and AI-native-RAN papers (for example the agentic-RAN and orchestration entries); this paper sits at a different layer, the path from a physical-layer algorithm to code running on baseband silicon, and it reports cycle-exact silicon measurements together with the cost of the agent's effort. It also documents a concrete mismatch between a GPU-priced search objective and a DSP's cost structure, for which the authors propose a design rule check (footprint, code size, operation slots) at search time. The authors are explicit about scope: one SoC, one operating point, feasibility rather than a measured productivity gain.

## Why it matters / what's new (ZH)
知识库目前的 6G 愿景类条目多为标准动态以及架构、ISAC 与 AI 原生 RAN 论文（如智能体 RAN 与编排类条目）；本文位于不同的层次，即从物理层算法到运行在基带硅片上的代码这一路径，并同时给出周期精确的硅片测量结果与智能体投入的成本。论文还记录了以 GPU 延迟定价的搜索目标与 DSP 代价结构之间的具体错配，作者据此提出在搜索阶段加入设计规则检查（存储占用、代码大小、运算槽位）。作者对适用范围表述明确：仅一个 SoC、一个工作点，结论是可行性而非经测量的生产率提升。
