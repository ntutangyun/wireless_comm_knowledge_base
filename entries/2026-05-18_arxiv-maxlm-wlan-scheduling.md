---
id: 2026-05-18_arxiv-maxlm-wlan-scheduling
date_published: 2026-05-15
date_found: 2026-05-18
type: academic-paper
title_en: "MAxLM: Multi-Agent Language Model-Based Scheduling and Resource Allocation in MU-MIMO-OFDMA-Enabled Wireless Networks"
title_zh: "MAxLM：基于多智能体语言模型的 MU-MIMO-OFDMA 无线网络调度与资源分配"
url: https://arxiv.org/abs/2605.16144
source_quality: full
topics: [802.11ax, 802.11be, 802.11bn, MU-MIMO, OFDMA, LLM-agent, scheduling, resource-allocation, WiSER]
topic_primary: ai-for-wifi
topics_secondary: [agentic-wifi, wifi8-uhr]
novelty_score: 4
---

## Summary (EN)

This paper proposes **MAxLM**, a multi-agent framework that uses a pretrained small/medium-sized language model (xLM) to perform user scheduling and resource allocation (SRA) for the uplink scheduled access (UL-SA) of a joint MU-MIMO-OFDMA-enabled WLAN. The authors (Adnan Quadri and Hongxiang Li, University of Louisville) tackle the combinatorially complex SRA problem — assigning which STAs transmit on which resource units (RUs) in each UL trigger frame — by decomposing it into per-STA agents, each modeled as an independent decision-maker prompted with its own channel state.

The key mechanism is the **Adaptive Context Management (ACM)** procedure: before each UL-SA slot, the ACM module constructs a prompt for each agent-STA containing the STA's channel gain vector across all RUs, the AP's antenna count, and a semantic summary of the competition (other STAs' channel quality). The xLM (Mistral-NeMo:12b tested) then outputs a binary RU assignment vector. The authors compare two prompt templates — PT1 (semantic analysis of agent attributes) and PT2 (raw channel-gain arrays) — and find PT2 substantially more reliable, with false-positive/false-negative rates below 5% for the 4-antenna AP / 10-STA scenario.

To orchestrate the full workflow, the authors introduce the **WiSER platform** (AI-assisted Wireless Systems Engineering and Research, open-sourced at github.com/quadri-a/wiser), which handles channel estimation, prompt construction, xLM inference, and RU-to-STA mapping in a modular pipeline. Numerical results using the IEEE TGax Indoor channel model (Model-B delay profile) show that MAxLM-optimized SRA using Mistral-NeMo:12b achieves a **30% UL throughput gain** over the BCQ (best-channel-quality) benchmark, with the gain widening as the AP antenna count increases from 4 to 8. Multi-agent decomposition is what makes this tractable: a single centralized agent would face a state-action space exponential in both STAs and RUs; the per-STA agents each face a binary decision per RU, reducing complexity to O(N × R).

## Summary (ZH)

本文提出 **MAxLM**，一种利用预训练中小规模语言模型（xLM）为联合 MU-MIMO-OFDMA WLAN 的上行调度接入（UL-SA）执行用户调度与资源分配（SRA）的多智能体框架。作者（Adnan Quadri 和 Hongxiang Li，路易斯维尔大学）通过将 SRA 问题分解为每 STA 一个智能体来解决其组合复杂性——每个智能体根据自身信道状态被独立提示，做出 RU 分配决策。

核心机制是**自适应上下文管理（ACM）**流程：在每个 UL-SA 时隙前，ACM 模块为每个智能体 STA 构建提示，包含该 STA 在所有 RU 上的信道增益向量、AP 天线数，以及竞争态势的语义摘要（其他 STA 的信道质量）。xLM（测试了 Mistral-NeMo:12b）随后输出二进制 RU 分配向量。作者比较了两种提示模板——PT1（智能体属性的语义分析）与 PT2（原始信道增益数组）——发现 PT2 显著更可靠，在 4 天线 AP / 10 STA 场景下假阳性/假阴性率低于 5%。

为编排完整工作流，作者引入了 **WiSER 平台**（AI 辅助无线系统工程与研究，已在 github.com/quadri-a/wiser 开源），该平台以模块化流水线处理信道估计、提示构建、xLM 推理及 RU 到 STA 的映射。使用 IEEE TGax 室内信道模型（Model-B 延迟剖面）的数值结果表明，采用 Mistral-NeMo:12b 的 MAxLM 优化 SRA 相比 BCQ（最佳信道质量）基准实现了 **30% 的上行吞吐增益**，且随着 AP 天线数从 4 增加到 8，增益进一步扩大。多智能体分解是实现可解性的关键：单一集中式智能体将面临 STA 和 RU 均呈指数的状态-动作空间；而每 STA 智能体仅面临每 RU 的二元决策，复杂度降至 O(N × R)。

## Key technical points (EN)

- **Multi-agent decomposition:** Each AP-STA UL connection is modeled as an independent agent. The agent's state space = channel gain vector across 9 RUs (26-tone RU configuration per 802.11ax). The action space = binary assignment vector per RU. This collapses the centralized MDP from exponential to O(N × R).
- **Adaptive Context Management (ACM):** Before each UL-SA slot (T=50 slots per episode), ACM builds a fresh prompt for each agent containing (i) the agent's own channel gains across all RUs, (ii) a one-sentence summary of competing STAs' channel quality, (iii) the AP antenna count. The prompt is fed to the xLM which outputs a structured RU assignment.
- **Prompt template comparison:** PT1 (semantic — "your channel on RU-3 is strong, RU-7 is weak") vs. PT2 (raw vectors — 1×9 channel gain array). PT2 consistently outperforms PT1, showing that structured numeric data is more reliable than semantic paraphrasing for xLM-based radio decisions.
- **WiSER platform:** Open-source modular pipeline (Python). Modules: Channel Estimation → Prompt Construction → xLM Inference → RU-to-STA Mapping → TF Generation. Uses Mistral-NeMo:12b via HuggingFace Transformers.
- **Evaluation:** IEEE TGax Indoor channel model, Model-B delay profile. 4-antenna and 8-antenna AP, 10-STA and 20-STA scenarios. 1200 test episodes × 50 UL-SA slots each. 30% throughput gain over BCQ. Error rates (FP/FN) analyzed per prompt template and antenna count.
- **xLM choice matters:** Mistral-NeMo:12b significantly outperforms smaller xLMs (Qwen2.5:7b tested). The 12B-parameter class appears to be the sweet spot for radio-resource reasoning tasks — large enough to handle structured numerical prompts, small enough for practical per-slot inference.

## Key technical points (ZH)

- **多智能体分解：** 每条 AP-STA 上行连接建模为独立智能体。智能体状态空间 = 跨 9 个 RU 的信道增益向量（每 802.11ax 的 26-tone RU 配置）。动作空间 = 每 RU 的二元分配向量。将集中式 MDP 从指数级降至 O(N × R)。
- **自适应上下文管理（ACM）：** 在每个 UL-SA 时隙前（每 episode T=50 个时隙），ACM 为每个智能体构建全新提示，包含 (i) 该智能体在所有 RU 上的信道增益，(ii) 关于竞争 STA 信道质量的单句摘要，(iii) AP 天线数。提示送入 xLM，后者输出结构化 RU 分配。
- **提示模板对比：** PT1（语义化——"你在 RU-3 的信道很强，RU-7 很弱"）vs. PT2（原始向量——1×9 信道增益数组）。PT2 持续优于 PT1，表明对于基于 xLM 的射频决策，结构化数值数据比语义转述更可靠。
- **WiSER 平台：** 开源模块化流水线（Python）。模块：信道估计 → 提示构建 → xLM 推理 → RU 到 STA 映射 → TF 生成。通过 HuggingFace Transformers 使用 Mistral-NeMo:12b。
- **评估：** IEEE TGax 室内信道模型，Model-B 延迟剖面。4 天线和 8 天线 AP，10 STA 和 20 STA 场景。1200 个测试 episode × 每 episode 50 个 UL-SA 时隙。相比 BCQ 吞吐增益 30%。按提示模板和天线数分析错误率（FP/FN）。
- **xLM 选择很重要：** Mistral-NeMo:12b 显著优于更小的 xLM（测试了 Qwen2.5:7b）。12B 参数级别似乎是射频资源推理任务的甜点——足够大以处理结构化数值提示，足够小以实现每时隙的实用推理。

## Why it matters / what's new (EN)

This is the first paper to demonstrate that a **small/medium language model (12B parameters) can directly perform WiFi resource scheduling** — not as an assistant to a human operator or as a code-generator for a scheduler, but as the scheduler itself, ingesting channel-state vectors and outputting RU assignments per UL trigger frame. Prior LLM-for-wireless work either used LLMs as orchestration wrappers (WirelessAgent, ComAgent) or as code synthesizers (IteRate). MAxLM puts the xLM inside the scheduling loop, making per-slot (~1-5 ms latency budget) xLM inference a practical question.

The introduction of the **open-source WiSER platform** is separately significant — it gives the research community a reproducible testbed for LLM-driven radio resource management, which has been a gap. The ACM procedure (structured numeric prompts beat semantic paraphrasing) is a design lesson that likely generalizes to other WiFi control problems (link adaptation, MCS selection, spatial-reuse decisions). The multi-agent decomposition approach also connects directly to the MAPC (Multi-AP Coordination) problem in 802.11bn — if each AP-STA link can be modeled as an agent, then cross-AP coordination becomes a multi-agent negotiation problem amenable to the same xLM prompting framework.

Compared to existing KB entries: `2026-05-05_arxiv-iterate-ebpf-rate-control` uses AI to *synthesize* rate-control code offline; MAxLM uses AI to *execute* scheduling online. `2026-05-01_arxiv-ma-mab-spatial-reuse` uses Multi-Armed Bandits for spatial-reuse decisions — a simpler model class. MAxLM's 30% throughput gain on a standard-compliant WLAN model with open-source code makes it one of the stronger empirical results in the ai-for-wifi bin.

## Why it matters / what's new (ZH)

这是首篇证明**中小规模语言模型（12B 参数）可直接执行 WiFi 资源调度**的论文——不是作为人类操作员的助手或调度器的代码生成器，而是作为调度器本身，摄入信道状态向量并输出每 UL 触发帧的 RU 分配。此前的 LLM-for-wireless 工作要么将 LLM 用作编排包装器（WirelessAgent、ComAgent），要么用作代码合成器（IteRate）。MAxLM 将 xLM 置于调度环路内部，使每时隙（约 1-5 ms 时延预算）的 xLM 推理成为可实践的课题。

**开源 WiSER 平台**的引入同样意义重大——它为研究社区提供了 LLM 驱动射频资源管理的可复现试验台，填补了既有空白。ACM 流程（结构化数值提示优于语义转述）是一条设计经验，很可能适用于其他 Wi-Fi 控制问题（链路自适应、MCS 选择、空间复用决策）。多智能体分解思路也与 802.11bn 的 MAPC（多 AP 协调）问题直接联通——若每条 AP-STA 链路可建模为智能体，则跨 AP 协调即变为适用于同套 xLM 提示框架的多智能体协商问题。

与既有 KB 条目对比：`2026-05-05_arxiv-iterate-ebpf-rate-control` 用 AI 离线*合成*速率控制代码；MAxLM 用 AI 在线*执行*调度。`2026-05-01_arxiv-ma-mab-spatial-reuse` 使用多臂老虎机进行空间复用决策——属更简单的模型类别。MAxLM 在标准兼容 WLAN 模型上以开源代码实现的 30% 吞吐增益，使其成为 ai-for-wifi 桶中实证结果最强的条目之一。

## Images
![Figure 1(a): Indoor WLAN environment with MU-MIMO-OFDMA AP and multiple STAs | 图 1(a)：具有 MU-MIMO-OFDMA AP 和多 STA 的室内 WLAN 环境](https://arxiv.org/html/2605.16144v1/x1.png)
![Figure 2(a): WiSER platform modules and MAxLM-optimized SRA workflow | 图 2(a)：WiSER 平台模块与 MAxLM 优化 SRA 工作流](https://arxiv.org/html/2605.16144v1/x2.png)
![Figure 4: MAxLM performance: false positive/negative rates per prompt template | 图 4：MAxLM 性能：每提示模板的假阳性/假阴性率](https://arxiv.org/html/2605.16144v1/x4.png)
