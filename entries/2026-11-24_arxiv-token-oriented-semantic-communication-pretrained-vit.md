---
id: 2026-11-24_arxiv-token-oriented-semantic-communication-pretrained-vit
date_published: 2026-08-26
date_found: 2026-11-24
technology: edge-ai
type: academic-paper
title_en: "Token-Oriented Semantic Communication with Pretrained Vision Transformers (client-server inference, simulated packet-erasure channel)"
title_zh: "基于预训练视觉 Transformer 的 Token 导向语义通信（客户端-服务器推理，仿真丢包信道）"
url: "https://arxiv.org/abs/2608.25410"
source_quality: full
topics: [token-communication, semantic-communication, learned-image-compression, vision-transformer, collaborative-inference]
topic_primary: task-oriented-communication
topics_secondary: [compute-offloading]
novelty_score: 3
---

## Summary (EN)

The paper targets client-server collaborative inference in resource-constrained edge systems, where a small client model must send an image to a large server model. It notes two practical problems with sending token embeddings directly: the communication cost, and the limited interoperability of token embedding spaces across independently trained models. Instead it proposes a modular framework that transmits compressed image latents selected by token-level task relevance, built from three pretrained components without end-to-end training: a lightweight client-side vision transformer (ViT), a learned image compression (LIC) model, and a large server-side ViT.

The key enabler is the one-to-one spatial alignment between ViT patch tokens and the LIC latent vectors, so that token relevance decides which latents are sent. Three pieces build on it: token-aligned LIC transmits only task-relevant latents; layer-selective attention rollout estimates token relevance from a selected range of attention layers in one forward pass; and surrogate token substitution adapts the frozen server model by optimising a single learnable token that stands in for the unselected (or channel-damaged) positions.

Link: simulated. Classification is evaluated on ImageNet-1k with DeiT-Tiny on the client and DeiT-III-Large on the server; robustness is tested over a simulated packet-erasure channel with the packets limited to a maximum transmission unit.

## Summary (ZH)

论文面向资源受限边缘系统中的客户端-服务器协同推理：小型客户端模型需要把图像发送给大型服务器模型。论文指出直接发送 token 嵌入有两个实际问题：通信开销大，以及不同独立训练模型的 token 嵌入空间互操作性有限。因此它提出一个模块化框架，按 token 级任务相关性选择并传输压缩后的图像隐变量，由三个预训练组件构成且无需端到端训练：轻量的客户端视觉 Transformer（ViT）、学习式图像压缩（LIC）模型和大型服务器端 ViT。

关键在于 ViT 图像块 token 与 LIC 隐变量向量之间一一对应的空间对齐，使 token 相关性决定发送哪些隐变量。在此基础上有三部分：token 对齐的 LIC 只传输任务相关的隐变量；分层选择的注意力展开（layer-selective attention rollout）在一次前向中由选定范围的注意力层估计 token 相关性；代理 token 替换（surrogate token substitution）通过优化一个可学习 token 来适配冻结的服务器模型，用它替代未被选中（或被信道破坏）的位置。

所经链路：仿真。分类在 ImageNet-1k 上评估，客户端为 DeiT-Tiny，服务器端为 DeiT-III-Large；鲁棒性在仿真丢包信道上测试，分组受最大传输单元限制。

## Key technical points (EN)

- Model asymmetry used in the evaluation: DeiT-Tiny (5.7 M parameters, 22.9 MB, 72.2% ImageNet-1k accuracy) on the client versus DeiT-III-Large (304.4 M parameters, 1217.5 MB, 86.8%) on the server; the client-side learned image compressor needs about 22 MB of memory.
- Rate-accuracy comparison: the paper reports higher downstream accuracy at comparable bit rates than prior token-oriented schemes that send selected pixel patches or use importance-aware quantisation, a favourable trade-off against JPEG2000, WebP and BPG at low rates, and higher accuracy than task-agnostic LIC frameworks (including a hyperprior-based mean-scale model and ELIC) at comparable rates.
- Packet-erasure test: latents are packetised and each packet is independently arithmetic-coded; hyperpriors go in one packet assumed received without error; latents in erased packets are replaced by their predicted means. Accuracy averaged over 20 trials shows surrogate token substitution is the most robust of three server-side strategies (direct reconstruction, selected-patch inference, surrogate token substitution) across the tested erasure probabilities.
- Optional entropy-aware image transmission (the client classifies confident inputs locally and calls the server only above a min-entropy threshold) shifts the achievable rate-accuracy curve toward lower bit rates; the paper states this is not claimed as its own contribution.

## Key technical points (ZH)

- 评估中的模型不对称：客户端 DeiT-Tiny（5.7 M 参数、22.9 MB、ImageNet-1k 精度 72.2%），服务器端 DeiT-III-Large（304.4 M 参数、1217.5 MB、86.8%）；客户端的学习式图像压缩器约需 22 MB 内存。
- 码率-精度对比：论文报告，在相近码率下下游精度高于此前发送所选像素块或采用重要性感知量化的 token 导向方案；在低码率下相对 JPEG2000、WebP 和 BPG 的权衡更优；并在相近码率下高于与任务无关的 LIC 框架（包括基于超先验的 mean-scale 模型和 ELIC）。
- 丢包测试：隐变量被分组，各分组独立做算术编码；超先验放在一个假定无差错接收的分组中；被丢弃分组中的隐变量用其预测均值替代。20 次试验平均的精度表明，在所测丢包概率下，代理 token 替换是三种服务器端策略（直接重建、所选块推理、代理 token 替换）中最稳健的。
- 可选的熵感知图像传输（客户端本地分类置信度高的输入，仅在最小熵超过阈值时调用服务器）使可达的码率-精度曲线向低码率移动；论文声明这并非其自身贡献。

## Why it matters / what's new (EN)

The work frames semantic communication as which parts of an image the server model actually needs, and it does so with off-the-shelf pretrained models rather than a jointly trained transceiver. Its link evidence is a bit-rate sweep and a packet-erasure simulation on ImageNet; no radio channel model or measurement is reported in the sections read here, so the bit rates are source-coding rates rather than air-interface results.

## Why it matters / what's new (ZH)

该工作把语义通信表述为"服务器模型实际需要图像的哪些部分"，并使用现成的预训练模型而非联合训练的收发机来实现。其链路证据是码率扫描和 ImageNet 上的丢包仿真；在所读章节中未报告无线信道模型或实测，因此文中的码率是信源编码码率，而非空口结果。

## Images

![Overall framework of token-oriented semantic communication | Token 导向语义通信整体框架](https://arxiv.org/html/2608.25410v1/fig/overall_framework.png)
