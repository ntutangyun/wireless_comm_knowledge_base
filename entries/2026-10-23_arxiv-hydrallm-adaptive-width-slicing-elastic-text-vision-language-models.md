---
id: 2026-10-23_arxiv-hydrallm-adaptive-width-slicing-elastic-text-vision-language-models
date_published: 2026-10-16
date_found: 2026-10-23
technology: edge-ai
type: academic-paper
title_en: "HydraLLM: adaptive width slicing gives one checkpoint a nested family of text and vision-language submodels"
title_zh: "HydraLLM：自适应宽度切片使单个检查点获得嵌套的文本与视觉语言子模型家族"
url: "https://arxiv.org/abs/2610.23455"
source_quality: full
topics: [elastic-models, nested-submodels, multi-query-attention, knowledge-distillation, Gemma-3-270M, width-slicing, vision-language]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 2
---

## Summary (EN)

HydraLLM addresses the fact that language and vision-language models are deployed on hardware ranging from data-centre GPUs to constrained edge devices, while fixed-size architectures force a separate model per compute, latency or size target. The paper proposes an elastic architecture based on multi-query attention (MQA) in which the number of active attention heads sets the effective width of the embeddings, attention projections, feed-forward layers and output head, so a nested family of subnetworks lives inside one parameter set.

A static-to-elastic conversion pipeline starts from a pre-trained checkpoint and applies importance-driven weight reordering followed by stochastic subnetwork training with knowledge distillation. For multimodal use, an elastic projection module makes the visual projection output width follow the active text width, so selecting a smaller text subnetwork also selects a smaller visual projection. Experiments are based on Google Gemma 3 270M (frozen full-width model as teacher for text; the multimodal variant uses a vision encoder and projection initialised from the Gemma 3 4B multimodal checkpoint, with that model as teacher), trained on a FineWeb-Edu subset.

The authors report that with 75% of heads active, TriviaQA accuracy is 2.2 percentage points higher than a nested baseline that has 17.25% more parameters; with 50% of heads active, the multimodal model reaches a CLIPScore comparable to the 7x larger Gemma 3 4B; and with 25% of heads active, token-generation throughput rises 75.3% over the full-width configuration, with importance-based reordering improving post-training perplexity by 16.2% at that width. The authors also report that the multimodal model stays near random accuracy on MMMU (about 25% versus about 39% for Gemma 3 4B) and shows hallucinations and weak object grounding in qualitative analysis.

## Summary (ZH)

HydraLLM 针对的现实是：语言和视觉语言模型要部署在从数据中心 GPU 到受限边缘设备的各种硬件上，而固定规模的架构使每个算力、延迟或体积目标都要一个独立模型。论文提出基于多查询注意力（MQA）的弹性架构：激活的注意力头数量决定嵌入、注意力投影、前馈层和输出头的有效宽度，使一组嵌套子网络共存于同一套参数中。

静态到弹性的转换流程从预训练检查点出发，先按重要性重排权重，再进行带知识蒸馏的随机子网络训练。多模态场景下，弹性投影模块让视觉投影输出宽度跟随激活的文本宽度，因此选择更小的文本子网络也就选择了更小的视觉投影。实验基于 Google Gemma 3 270M（文本实验以冻结的全宽模型作教师；多模态变体的视觉编码器与投影由 Gemma 3 4B 多模态检查点初始化，并以该模型为教师），在 FineWeb-Edu 子集上训练。

作者报告：激活 75% 注意力头时，TriviaQA 精度比参数多 17.25% 的嵌套基线高 2.2 个百分点；激活 50% 头时，多模态模型的 CLIPScore 与大 7 倍的 Gemma 3 4B 相当；激活 25% 头时，token 生成吞吐相对全宽配置提升 75.3%，且在该宽度下基于重要性的重排使训练后困惑度改善 16.2%。作者同时报告，多模态模型在 MMMU 上仍接近随机精度（约 25%，Gemma 3 4B 约 39%），定性分析中存在幻觉和物体定位薄弱的问题。

## Key technical points (EN)

- One control knob: the active head count selects consistent prefixes of embedding, attention, FFN and output dimensions, producing nested decoder subnetworks from one checkpoint.
- Conversion recipe: importance-driven weight reordering, then stochastic width sampling (extra weight on full width) with distillation from the frozen full-width teacher.
- Multimodal extension: the elastic projection module ties visual projection width to the active text width.
- Reported numbers: +2.2 pp TriviaQA at 75% heads versus a nested baseline with 17.25% more parameters; CLIPScore comparable to Gemma 3 4B at 50% heads (while MMMU stays near random, about 25% versus about 39%); +75.3% generation throughput at 25% heads.
- Setup facts: a small base model (Gemma 3 270M); the throughput gain is stated relative to the model's own full width; throughput was measured with llama.cpp's llama-bench on an NVIDIA RTX PRO 4000 workstation GPU, not on edge hardware; the 75.3% gain is for token generation, and the authors report only modest prompt-processing gains.

## Key technical points (ZH)

- 单一控制旋钮：激活头数选择嵌入、注意力、FFN 和输出维度的一致前缀，从同一检查点得到嵌套的解码器子网络。
- 转换流程：按重要性重排权重，再进行随机宽度采样（对全宽给予更高权重），并从冻结的全宽教师蒸馏。
- 多模态扩展：弹性投影模块把视觉投影宽度与激活的文本宽度绑定。
- 报告数字：75% 头时 TriviaQA 比参数多 17.25% 的嵌套基线高 2.2 个百分点；50% 头时 CLIPScore 与 Gemma 3 4B 相当（但 MMMU 仍接近随机，约 25% 对约 39%）；25% 头时生成吞吐提升 75.3%。
- 设置事实：基础模型很小（Gemma 3 270M）；吞吐提升是相对该模型自身全宽配置而言；吞吐使用 llama.cpp 的 llama-bench 在 NVIDIA RTX PRO 4000 工作站 GPU 上测得，而非边缘硬件；75.3% 的提升针对 token 生成，作者报告预填充（prompt processing）提升有限。

## Why it matters / what's new (EN)

Elastic submodels let one stored checkpoint serve deployment settings with different compute, latency and model-size targets, which is the paper's stated motivation. The evidence is accuracy and relative throughput on a 270M-parameter base model, so how the gains transfer to larger models or to specific NPUs is not shown.

## Why it matters / what's new (ZH)

弹性子模型让同一份检查点服务于算力、延迟和模型规模目标各不相同的部署场景，这是论文陈述的动机。证据是 2.7 亿参数基础模型上的精度和相对吞吐，因此收益如何迁移到更大模型或具体 NPU 并未给出。

## Images

*(No redistributable images for this entry.)*
