---
id: 2026-08-29_arxiv-llmscope-optical-probing-edge-ai-chips
date_published: 2026-08-26
date_found: 2026-08-29
type: academic-paper
technology: edge-ai
title_en: "LLMscope: extracting model weights, activations and KV-cache from an edge AI accelerator by optical probing"
title_zh: "LLMscope：以光学探测从边缘 AI 加速器中提取模型权重、激活与 KV 缓存"
url: "https://arxiv.org/abs/2608.25321"
source_quality: full
topics: [physical-side-channel, laser-voltage-imaging, EOFM, FPGA-accelerator, model-extraction, KV-cache, systolic-array, on-chip-memory]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference, edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

Moving inference to the device is usually argued as a privacy and confidentiality win: the model and the user's data never leave the box. LLMscope (Worcester Polytechnic Institute) points out the cost of that move — the box is now in the attacker's hands, and its on-chip state is optically readable.

The attack uses **electro-optical frequency mapping (EOFM)** on a Hamamatsu PHEMOS-X failure-analysis microscope. A near-infrared laser is scanned across the die from the **backside**; local switching activity modulates the reflected signal, and frequency-domain processing turns that modulation into a spatial map of which storage cells and compute subcircuits are active at a given periodic rate. The threat model is deliberately modest: physical backside access, the ability to run or replay inference, and the optical rig. It requires **no electrical contact with internal signals, no modification of the deployed model, and no access to the external model store** — so encrypting weights in flash does not help, because they are decrypted by the time they reach the buffers being imaged. The chip keeps running throughout.

The target is a Digilent Genesys 2 board carrying an **AMD Kintex-7 (28 nm) at 200 MHz, 1.0 V core**, running a modified systolic-array matrix multiplier with signed 8-bit inputs and signed 17-bit outputs — a stand-in for the datapath of a quantised transformer, with BRAM and flip-flop boundaries standing in for embeddings and KV-cache. The recovered asset classes are the whole inference state: **embeddings, the Q/K/V/O attention projections (W_Q, W_K, W_V, W_O), quantised MLP weights (W_1, W_2, W_gate), activations and KV-cache, and intermediate partial sums**. In direct readout of flip-flops and BRAMs, recovery is exact.

The paper's more interesting half is what happens when imaging is *incomplete*, because on a real chip it always will be. Two techniques close the gap. A **linear/hybrid attack** subtracts the contribution of already-recovered weights from an observed Y = XW and solves the residual by Gaussian elimination, given enough independent input–output observations for full column rank. A **downstream-consistency** step propagates the at most 2^k candidate completions of k unresolved bits through known later computation and checks them against EOFM-recovered later states. Measured: with 8 missing weight bits and 8 hidden output bits, **743 of 747 tested mask pairs (99.46%) recover the exact programmed matrix uniquely**, and across 856 tested configurations at k = 8 the downstream state eliminated every incorrect candidate.

The scaling analysis is what makes it a design input rather than a stunt. Direct recovery needs N(Z) ≥ R·⌈S/w⌉ images for an asset of S bits at w new bits per replay state. For a **4096×4096 projection at 4-bit quantisation (67M bits)** exposed through a 512-bit weight path one word at a time, that is **q ≥ 131,072 replay states**; a 4096-element hidden vector read at 2048 bits/state needs **q ≥ 32**. Per-layer assets scale as Θ(d²_model) and Θ(L·d²_model) across L layers, plus |V|·d_model for the vocabulary projection. Recovery cost is therefore **linear in asset size**, not exponential — and the asymmetry between weights and activations is exactly why the hybrid attack is attractive.

No mitigation is proposed; the analysis assumes unprotected on-chip storage and unencrypted execution.

## Summary (ZH)

把推理搬到端侧，通常被论证为隐私与机密性的胜利：模型与用户数据都不离开设备。LLMscope（伍斯特理工学院）指出了这一搬迁的代价——设备如今落在攻击者手里，而其片上状态是**可被光学读取的**。

攻击使用 Hamamatsu PHEMOS-X 失效分析显微镜上的**电光频率成像（EOFM）**：近红外激光从**背面**扫描裸片，局部开关活动调制反射光信号，频域处理再把这种调制转换成「哪些存储单元与计算子电路正以某个周期速率活动」的空间图。威胁模型刻意保守：具备物理背面访问、能够运行或重放推理、拥有光学设备。它**不需要与内部信号电接触、不需要修改已部署模型、也不需要访问外部模型存储**——因此把权重在闪存中加密并无帮助，因为权重到达被成像的缓冲区时早已解密。整个过程芯片持续运行。

目标是一块 Digilent Genesys 2 板卡上的 **AMD Kintex-7（28 nm），200 MHz、1.0 V 核心电压**，运行一个改造过的脉动阵列矩阵乘法器，输入为有符号 8 位、输出为有符号 17 位——作为量化 Transformer 数据通路的替身，BRAM 与触发器边界则分别代表 embedding 与 KV 缓存。被恢复的资产类别覆盖了整个推理状态：**embedding、Q/K/V/O 注意力投影矩阵（W_Q、W_K、W_V、W_O）、量化 MLP 权重（W_1、W_2、W_gate）、激活与 KV 缓存，以及中间部分和**。在对触发器与 BRAM 的直接读取实验中，恢复是精确的。

论文更有意思的一半，是**成像不完整时**会发生什么——因为在真实芯片上总会不完整。两项技术补上了缺口。**线性/混合攻击**从观测到的 Y = XW 中减去已恢复权重的贡献，在有足够多线性无关输入–输出观测（满列秩）的前提下用高斯消元解出残余未知量。**下游一致性**步骤则把 k 个未定位的至多 2^k 个候选补全，沿已知的后续计算传播，再与 EOFM 恢复出的后续状态比对。实测：在缺失 8 个权重位与 8 个隐藏输出位的条件下，**747 组被测掩码对中有 743 组（99.46%）唯一地恢复出所编程的精确矩阵**；在 k = 8 的 856 种配置中，下游状态排除了全部错误候选。

真正让它成为设计输入而非炫技的，是伸缩性分析。对一个 S 比特的资产、每个重放状态新暴露 w 比特，直接恢复需要 N(Z) ≥ R·⌈S/w⌉ 幅图像。对一个 **4096×4096、4 位量化的投影矩阵（6700 万比特）**，若一条 512 位权重通路每状态只暴露一个字，则需 **q ≥ 131,072 个重放状态**；而一个 4096 元素的隐藏向量若以每状态 2048 位读取，只需 **q ≥ 32**。每层资产按 Θ(d²_model) 伸缩，跨 L 层为 Θ(L·d²_model)，再加上词表投影的 |V|·d_model。因此恢复成本对资产规模是**线性**而非指数的——而权重与激活之间的这种不对称，正是混合攻击具有吸引力的原因。

论文未提出缓解方案；其分析假定片上存储无保护、推理执行未加密。

## Key technical points (EN)

- Technique: electro-optical frequency mapping (EOFM) via near-infrared backside laser scanning on a Hamamatsu PHEMOS-X; switching activity modulates reflected light, frequency-domain processing yields spatial activity maps.
- Threat model: physical backside access + ability to run/replay inference + optical rig. No electrical contact, no model modification, no plaintext access to external model storage. Device stays operational.
- Target: Digilent Genesys 2, AMD Kintex-7 (28 nm), 200 MHz, 1.0 V core; modified systolic-array matmul (signed 8-bit in, signed 17-bit out) with BRAM/FF asset boundaries.
- Assets recovered: embeddings; W_Q, W_K, W_V, W_O; quantised W_1, W_2, W_gate; activations and KV-cache; intermediate partial sums.
- Buffer/subcircuit reuse across addresses, tiles, modules and layers means reading assets reduces to probing the same structures under controlled replay.
- Direct readout from FFs and BRAMs: exact recovery.
- Hybrid/linear attack: ỹ_j = y_j − X_known·w_known = X_unknown·w_unknown, solved by Gaussian elimination when m ≥ u_j independent observations give full column rank.
- Downstream consistency: ≤ 2^k candidate completions propagated through known later computation and matched to EOFM-recovered later states.
- Measured partial-recovery success: 743/747 mask pairs (99.46%) uniquely recovered with 8 missing weight bits + 8 hidden output bits; all incorrect candidates eliminated in 856 configurations at k = 8.
- Imaging-effort bound: N(Z) ≥ R⌈S/w⌉ images. 4096×4096 @ 4-bit (67M bits) via a 512-bit path, one word per state → q ≥ 131,072 states; 4096-element hidden vector at 2048 bits/state → q ≥ 32 states.
- Asset scaling: Θ(d²_model) per layer, Θ(L·d²_model) across layers, plus |V|·d_model for vocabulary projection. Direct recovery is linear in asset size.
- No countermeasure proposed; unprotected on-chip storage and unencrypted execution assumed.

## Key technical points (ZH)

- 技术：Hamamatsu PHEMOS-X 上的电光频率成像（EOFM），近红外激光背面扫描；开关活动调制反射光，频域处理给出空间活动图。
- 威胁模型：物理背面访问 + 能运行/重放推理 + 光学设备。无需电接触、无需修改模型、无需明文访问外部模型存储。设备全程运行。
- 目标：Digilent Genesys 2，AMD Kintex-7（28 nm），200 MHz、1.0 V 核心；改造脉动阵列矩阵乘法（有符号 8 位输入、有符号 17 位输出），以 BRAM/触发器边界界定资产。
- 恢复的资产：embedding；W_Q、W_K、W_V、W_O；量化后的 W_1、W_2、W_gate；激活与 KV 缓存；中间部分和。
- 缓冲区与计算子电路在不同地址、tile、模块与层之间被复用，因此在受控重放下读取资产就归约为反复探测同一组结构。
- 对触发器与 BRAM 的直接读取：精确恢复。
- 混合/线性攻击：ỹ_j = y_j − X_known·w_known = X_unknown·w_unknown，在 m ≥ u_j 个线性无关观测满足满列秩时用高斯消元求解。
- 下游一致性：把 k 个未解位的至多 2^k 个候选补全沿已知后续计算传播，与 EOFM 恢复的后续状态比对。
- 实测部分恢复成功率：缺失 8 个权重位 + 8 个隐藏输出位时，747 组掩码对中 743 组（99.46%）唯一恢复；k = 8 的 856 种配置中错误候选被全部排除。
- 成像工作量下界：N(Z) ≥ R⌈S/w⌉ 幅图像。4096×4096 的 4 位投影（6700 万比特）经 512 位通路、每状态一个字 → q ≥ 131,072 个状态；4096 元素隐藏向量每状态 2048 位 → q ≥ 32 个状态。
- 资产伸缩：每层 Θ(d²_model)，跨层 Θ(L·d²_model)，加上词表投影的 |V|·d_model。直接恢复对资产规模呈线性。
- 未提出对策；假定片上存储无保护、执行未加密。

## Why it matters / what's new (EN)

The standard argument for pushing inference to the edge is that local execution keeps both the model and the user's data confidential. This paper attacks the first half of that claim at the layer nobody in the edge-AI stack usually thinks about: the physics of the silicon.

What makes it more than a lab curiosity is the combination of the threat model and the scaling law. The attacker never touches a wire, never modifies the model, and never needs the encrypted weight file — encryption at rest is bypassed entirely because the imaged buffers hold plaintext. And recovery cost is **linear in the size of the asset**, so a bigger model is not a safer model; it is a longer imaging session. The concrete bound — 131,072 replay states for one 4096×4096 4-bit projection — is genuinely large, but it is a throughput problem, not an impossibility, and the hybrid attack exists precisely to avoid paying it in full.

The activation-vs-weight asymmetry deserves attention from anyone designing an edge accelerator. A hidden vector costs **q ≥ 32** states against **q ≥ 131,072** for a weight tile, meaning the *user's inference state* — prompts, KV-cache, intermediate activations — is orders of magnitude cheaper to steal than the vendor's weights. Discussion of on-device AI privacy has been almost entirely about data never being sent to a server; this says the data is sitting in an optically observable buffer regardless.

For the `edge-ai-silicon` question this KB tracks, the practical reading is that on-chip asset protection is now a differentiator, not a checkbox: buffer reuse across tiles and layers — a straightforward area optimisation — is what makes controlled replay so effective here, so the accelerator designs that are cheapest to build are also the easiest to image. The paper offers no mitigation, which leaves that as open work rather than a solved problem.

## Why it matters / what's new (ZH)

把推理推向端侧的标准论证是：本地执行同时保护了模型与用户数据的机密性。这篇论文在边缘 AI 技术栈中几乎无人考虑的那一层——**硅片的物理层**——攻击了该主张的前半部分。

让它不止于实验室奇观的，是威胁模型与伸缩律的组合。攻击者从不接触任何一根导线、不修改模型、也不需要那个加密的权重文件——静态加密被完全绕过，因为被成像的缓冲区里放的是明文。而恢复成本对资产规模是**线性**的，因此**更大的模型并不是更安全的模型，只是更长的一次成像**。那个具体的下界——一个 4096×4096 的 4 位投影需要 131,072 个重放状态——确实很大，但这是吞吐量问题而非不可能性问题，而混合攻击的存在正是为了不必付满这笔代价。

激活与权重之间的不对称，值得每一位边缘加速器设计者注意。一个隐藏向量只需 **q ≥ 32** 个状态，而一块权重 tile 需要 **q ≥ 131,072**，这意味着**用户的推理状态**——提示词、KV 缓存、中间激活——被窃取的代价比厂商权重低几个数量级。关于端侧 AI 隐私的讨论几乎全部围绕「数据不上传服务器」；而这篇论文说的是：无论是否上传，数据都躺在一个光学可观测的缓冲区里。

就本知识库关注的 `edge-ai-silicon` 问题而言，实务解读是：片上资产保护如今是差异化能力，而非勾选项。跨 tile 与跨层复用缓冲区——一种再直白不过的面积优化——正是让受控重放在此如此有效的原因；因此**最省成本的加速器设计，也是最容易被成像的设计**。论文未给出缓解手段，这把它留作开放课题而非已解决的问题。
