---
id: 2026-08-28_arxiv-lifecycle-optimal-tokenization-vocab-size
date_published: 2026-08-11
date_found: 2026-08-28
type: academic-paper
technology: edge-ai
title_en: "Lifecycle-Optimal Tokenization: Vocabulary Size as a Deployment-Regime-Dependent Infrastructure Parameter"
title_zh: "全生命周期最优分词：把词表大小当作随部署形态而变的基础设施参数"
url: "https://arxiv.org/abs/2608.11361"
source_quality: abstract_only
topics: [tokenizer, vocabulary-size, batch-size, deployment-cost, on-device-LLM, inference-economics]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference, ai-pc]
novelty_score: 3
---

## Summary (EN)

Tokenizer vocabulary size is normally treated as a property of the model — picked once during pre-training, reported in the model card, and never revisited. This paper (Mittal, Gubrani, Kakollu) argues it is better understood as a **deployment parameter**, and that the value which minimises total cost depends on where the model is going to run.

The authors write total deployment cost as a combination of training cost and inference cost, with the inference term depending on serving batch size. A larger vocabulary means fewer tokens per unit of text — cheaper decoding, since each step emits more characters — but also a larger embedding and output-projection matrix, which costs memory and per-step compute. Which side dominates depends on how many sequences you are serving at once.

Running controlled experiments across two GPU architectures, they find the inference-optimal vocabulary moves by roughly **16×** across the serving regime: about **32k tokens at batch size 1**, rising to **524k at large batch sizes**. Model quality, meanwhile, is nearly flat — it peaks around **65k** for models in the 1.3–2.3B range, with negligible variation across the whole optimal band.

That flatness is the load-bearing result. If quality barely moves across the range, vocabulary size stops being a modelling decision that trades against accuracy and becomes a systems knob to be set from the deployment target. Their concrete recommendation: **≈32k for on-device deployment, 131–262k for datacentre serving.**

## Summary (ZH)

分词器的词表大小通常被当作模型自身的属性——在预训练时选定一次，写进模型卡，此后不再重新审视。本文（Mittal、Gubrani、Kakollu）主张，把它理解为一个**部署参数**更为恰当：使总成本最小的取值，取决于模型将要运行在什么地方。

作者把总部署成本写成训练成本与推理成本之和，其中推理项依赖于服务批量大小（batch size）。词表更大意味着同样文本对应的 token 更少——解码更便宜，因为每一步输出更多字符——但同时嵌入矩阵与输出投影矩阵也更大，带来内存与每步计算的开销。哪一侧占主导，取决于同时服务多少条序列。

在两种 GPU 架构上做受控实验后，他们发现推理最优词表在整个服务区间内变动约 **16 倍**：批量为 1 时约 **32k**，大批量下升至 **524k**。与此同时，模型质量几乎是平的——在 1.3–2.3B 规模上于 **65k** 附近达到峰值，且在整个最优区间内变化可以忽略。

这种「平坦」正是本文的承重结论。如果质量在该区间内几乎不动，词表大小就不再是一个与精度相权衡的建模决策，而变成一个应当由部署目标反推设定的系统旋钮。他们给出的具体建议是：**端侧部署约 32k，数据中心服务 131–262k。**

## Key technical points (EN)

- Total deployment cost modelled as training cost + inference cost, with the inference term a function of serving batch size.
- Inference-optimal vocabulary shifts ~16× across the serving regime: ≈32k at batch size 1 → 524k at large batch.
- Quality-optimal vocabulary ≈65k at 1.3–2.3B parameter scale, with negligible quality variation across the optimal range.
- Controlled experiments on two GPU architectures.
- Recommendation: ≈32k vocabulary for on-device, 131–262k for datacentre.
- Conclusion framing: vocabulary size is a systems/infrastructure parameter, not a quality lever.
- 6 pages, 3 figures, 6 tables. cs.LG, cross-listed cs.CL and cs.PF.

## Key technical points (ZH)

- 将总部署成本建模为训练成本 + 推理成本，其中推理项是服务批量大小的函数。
- 推理最优词表在服务区间内变动约 16 倍：批量 1 时约 32k → 大批量时 524k。
- 质量最优词表在 1.3–2.3B 参数规模下约为 65k，且在整个最优区间内质量变化可忽略。
- 在两种 GPU 架构上开展受控实验。
- 建议：端侧约 32k 词表，数据中心 131–262k。
- 结论定位：词表大小是系统/基础设施参数，而非质量调节杆。
- 6 页、3 图、6 表。cs.LG，交叉列于 cs.CL 与 cs.PF。

## Why it matters / what's new (EN)

The batch size of an on-device deployment is 1. That is the whole point of running locally — one user, one request, no queue to fill — and it is exactly the regime this paper says wants the *smallest* vocabulary, four to eight times smaller than what a datacentre deployment should use.

That gives the `edge-model-efficiency` bin something the quantisation literature does not: a lever that is free at inference time. Quantisation trades bits for accuracy and needs calibration or retraining; vocabulary size, on this evidence, can be moved across a wide band without measurable quality cost, because the quality curve is flat where the cost curve is steep. The catch is that unlike quantisation it must be decided before pre-training, which is precisely why framing it as a *lifecycle* parameter matters — by the time a model reaches an edge device, the decision has long since been made, usually with datacentre serving economics implicitly assumed.

It also supplies a clean rebuttal to a common assumption in on-device work: that the right edge model is simply a shrunken datacentre model. Here the two regimes want structurally different models, and the difference is not in depth or width — the parameters everyone tunes — but in the tokenizer, which is normally inherited without question.

Caveat: the experiments run on GPUs, not on NPUs or phone-class silicon, so the batch-size-1 conclusion is extrapolated to on-device rather than measured there. Read alongside `2026-08-28_arxiv-apple-neural-engine-placement-measurement`, which shows how differently the same model behaves once real accelerator placement is involved, the vocabulary recommendation is a well-argued starting point awaiting device-side confirmation.

## Why it matters / what's new (ZH)

端侧部署的批量就是 1。这正是本地运行的全部意义——一个用户、一次请求、没有队列可填——而这恰恰是本文所说的、需要**最小**词表的区间：比数据中心部署应当采用的值小四到八倍。

这给 `edge-model-efficiency` 分类提供了量化文献所没有的东西：一个在推理期免费的调节杆。量化以比特换精度，需要校准或重训练；而按本文证据，词表大小可以在很宽的区间内移动而无可测量的质量代价——因为在成本曲线陡峭的地方，质量曲线是平的。代价在于，与量化不同，它必须在预训练之前决定；这也正是把它定位为**全生命周期**参数的意义所在——等模型抵达边缘设备时，这个决定早已做出，而且通常是在隐含假定数据中心服务经济性的前提下做出的。

它同时干净地反驳了端侧工作中的一个常见假设：合适的边缘模型不过是缩小版的数据中心模型。事实上两种形态想要的是结构上不同的模型，而差别不在于深度或宽度——那是人人都在调的参数——而在于分词器，后者通常被不加质疑地继承下来。

保留意见：实验运行在 GPU 上，而非 NPU 或手机级芯片，因此「批量为 1」的结论是外推到端侧、而非在端侧实测得到的。与 `2026-08-28_arxiv-apple-neural-engine-placement-measurement` 对读——后者展示了一旦涉及真实加速器放置，同一模型的行为会有多大差异——本文的词表建议是一个论证扎实、但仍待设备侧验证的出发点。
