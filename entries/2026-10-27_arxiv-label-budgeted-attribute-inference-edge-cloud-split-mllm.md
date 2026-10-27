---
id: 2026-10-27_arxiv-label-budgeted-attribute-inference-edge-cloud-split-mllm
date_published: 2026-10-23
date_found: 2026-10-27
technology: edge-ai
type: academic-paper
title_en: "Label-budgeted attribute inference from protected features in edge-cloud split multimodal LLMs"
title_zh: "边云拆分多模态大模型中受保护特征的标签预算式属性推断"
url: "https://arxiv.org/abs/2610.32079"
source_quality: full
topics: [split-inference, multimodal-LLM, LLaVA, Qwen2.5-VL, attribute-inference, feature-leakage, edge-cloud]
topic_primary: compute-offloading
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

This 5-page paper looks at edge-cloud split inference for multimodal LLMs, where a phone, camera or wearable runs the vision encoder and the decoder layers up to a chosen split layer and sends the intermediate representation to a server that finishes the task. Keeping raw images on the device is often presented as a privacy benefit; the paper asks how much an honest-but-curious server can still recover about age, gender and race from the features it legitimately receives. Its framework gives the attacker a budget b of labeled protected samples per class and reports a recovery curve: the share of the unprotected leakage recovered as b grows from zero (a probe trained on unprotected features) through few-label fine-tuning (b up to 20, with an optional self-training variant) to a full labeled auxiliary set. A classifier-free dependence test, with p-values from 1,000 label permutations, complements it.

The evaluation uses LLaVA-1.5-7B (32 decoder layers) and Qwen2.5-VL-3B (36 layers) with the prompt "Describe this image", on FairFace and UTKFace, plus a face-verification setting that uses a pooled embedding. Measurements on a device-server GPU pair find that all three attributes remain recoverable at every tested split layer of both models, and that deeper splits raise device-side cost without meaningfully reducing measured leakage. Three protection mechanisms placed at different points are examined: ImageProtector (input level), Safe-LLaVA (model-level, retrained to refuse biometric queries) and PASS (representation level). Safe-LLaVA keeps the attributes in its transmitted features, where 20 labels per class recover 75 to 85% of the unprotected leakage; ImageProtector protects only the model it was optimised for; PASS is more resistant to the evaluated attacks but retains detectable statistical dependence.

## Summary (ZH)

这篇 5 页的论文研究多模态大模型的边云拆分推理：手机、摄像头或可穿戴设备运行视觉编码器和解码器直至选定的拆分层，并把中间表示发给服务器完成任务。把原始图像留在设备上常被视为隐私收益；论文要问的是，一个诚实但好奇的服务器仅凭合法收到的特征，仍能恢复出多少关于年龄、性别和种族的信息。其框架给攻击者一个“每类带标签的受保护样本数 b”的预算，并报告恢复曲线：当 b 从零（用未受保护特征训练的探针）经少样本微调（b 至多 20，另有自训练变体）增加到完整带标签辅助集时，攻击者恢复的未保护泄露所占比例。另有一项不依赖分类器的依赖性检验，以 1,000 次标签置换得到 p 值作为补充。

评估使用 LLaVA-1.5-7B（32 层解码器）和 Qwen2.5-VL-3B（36 层），提示为“Describe this image”，数据集为 FairFace 和 UTKFace，另有使用池化嵌入的人脸验证设置。在设备-服务器 GPU 组合上的测量发现，两个模型在所有测试的拆分层上三种属性都可恢复，并且更深的拆分会提高设备侧开销，却没有明显降低所测得的泄露。论文考察了处于不同位置的三种保护机制：ImageProtector（输入级）、Safe-LLaVA（模型级，经重新训练以拒绝生物特征查询）和 PASS（表示级）。Safe-LLaVA 的传输特征中仍保留这些属性，每类 20 个标签即可恢复 75% 至 85% 的未保护泄露；ImageProtector 只保护其被优化针对的那个模型；PASS 对所评估的攻击更有抵抗力，但仍保留可检测的统计依赖。

## Key technical points (EN)

- The recovery curve normalises balanced accuracy (categorical attributes; chance 0.11 for age groups, 0.50 for gender, 0.14 for race on FairFace) and mean absolute error (age in years) onto one scale relative to the task baseline and unprotected leakage.
- The threat model is a provider-owned service: the provider ships the device-side partition, knows the architecture, split layer and protection mechanism, and holds a public auxiliary face set it can run through the device pipeline.
- Transmitted features for generation have fixed token count and width regardless of split layer; for recognition the device pools over tokens into an embedding.
- Scope is face attributes on two MLLMs. A per-split cost table (RTX 2080 Ti as device, V100 as server) reports device latency, memory and energy; for LLaVA, moving the split from layer 5 to 15 doubles device latency and energy (35.6 to 71.8 ms, 4.6 to 10.1 J) and layer 25 does not fit the 11-GiB device. Link time is computed (199 ms for the LLaVA sequence at 100 Mbit/s), not measured over a radio link.

## Key technical points (ZH)

- 恢复曲线把平衡准确率（类别型属性；FairFace 上年龄组的随机水平为 0.11，性别 0.50，种族 0.14）与平均绝对误差（以年计的年龄）归一到同一尺度，参照任务基线和未保护泄露。
- 威胁模型为服务提供方自有的服务：提供方下发设备侧分区，了解架构、拆分层和保护机制，并持有可通过设备侧流水线运行的公开辅助人脸集。
- 生成任务传输的特征，其 token 数与宽度不随拆分层改变；识别任务则由设备对 token 做池化得到嵌入。
- 范围限于两个多模态大模型上的人脸属性。论文给出按拆分层的开销表（RTX 2080 Ti 作设备、V100 作服务器），含设备延迟、显存与能耗；LLaVA 拆分层从第 5 层移到第 15 层时设备延迟和能耗翻倍（35.6 至 71.8 ms，4.6 至 10.1 J），第 25 层已无法装入 11 GiB 设备。传输时间为计算值（LLaVA 序列在 100 Mbit/s 下为 199 ms），并非无线链路实测。

## Why it matters / what's new (EN)

It shows that, for the two models and attributes tested, choosing a deeper split layer did not by itself reduce what the server could learn, and that the protection mechanisms' own metrics (refusals, fixed-classifier failure) can overstate privacy at the split boundary. The authors conclude that split-inference privacy mechanisms should be evaluated with label budgets and classifier-free dependence tests, and that defenses should act on the transmitted representation; the study is short, limited to face attributes and two models, and its attacker assumes labeled auxiliary data.

## Why it matters / what's new (ZH)

在所测的两个模型和属性上，它表明选择更深的拆分层本身并不能减少服务器可学到的信息，而保护机制自带的指标（拒答、固定分类器失效）可能高估拆分边界处的隐私性。作者的结论是：拆分推理的隐私机制应以标签预算和不依赖分类器的依赖性检验来评估，防御应作用于传输的表示；研究篇幅短，仅限人脸属性和两个模型，且攻击者假设拥有带标签的辅助数据。

## Images

*(No redistributable images for this entry.)*
