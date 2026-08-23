---
id: 2026-08-23_arxiv-learnware-csi-feedback-model-repository
date_published: 2026-08-18
date_found: 2026-08-23
type: academic-paper
technology: cellular
title_en: "Learnware for CSI Feedback: Scene-specific Small Models Can Do Big"
title_zh: "CSI 反馈的学件范式：场景专用小模型也能成大事"
url: "https://arxiv.org/abs/2608.17760"
source_quality: full
topics: [CSI-feedback, learnware, model-repository, AI-ML-lifecycle, 3GPP-Rel-18, massive-MIMO, privacy, model-selection, QuaDRiGa]
topic_primary: cellular-massive-mimo
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Xiangyi Li, Jiajia Guo, Chao-Kai Wen, Xin Geng, Shi Jin and Zhi-Hua Zhou — spanning Southeast University's National Mobile Communications Research Laboratory, HKUST, National Sun Yat-sen University, and Nanjing University (Zhou is the originator of the "learnware" paradigm in machine learning) — apply the learnware concept ("model plus specification") to AI-based CSI feedback for 6G, in a paper accepted by IEEE Transactions on Wireless Communications. Instead of the two poles that dominate the 3GPP AI/ML-for-CSI debate — one big general model, or per-site models trained from scratch — they propose a centralized repository of scene-specific small models. Each model carries a semantic specification (architecture attributes: input/output dimensions, compression ratio, network structure) and a statistical specification (a compact embedding of codebook-fingerprint distributions capturing the training data's character, without exposing the data itself). A base station submits its locally computed statistical specification and retrieves the best-matching pre-trained model — raw CSI never leaves the site, preserving privacy, and retrieval takes 0.25–1.15 ms via multi-level locality-sensitive hashing.

Evaluated on 144 QuaDRiGa-simulated datasets (72 LOS + 72 NLOS, 3GPP TR 38.901 UMi, 10,000 samples each, full 360° azimuth diversity), repository-retrieved scene-specific models beat a general model by 18.8% (LOS) and 57.7% (NLOS), with model-selection accuracy above 90%. When fine-tuning is still wanted, starting from a retrieved model saves 300–1,000 training samples and up to 100 epochs versus adapting the general model. The framework is explicitly aligned with the 3GPP AI/ML lifecycle-management architecture (model management concepts introduced in Release 18 and evolving through Release 20). Stated limitation: selection degrades over larger, more dispersed serving areas, especially NLOS, where angular distributions lose distinctiveness.

## Summary (ZH)
李相熠、郭佳佳、温朝凯、耿新、金石与周志华——横跨东南大学移动通信国家重点实验室、香港科技大学、台湾中山大学与南京大学（周志华是机器学习"学件"范式的提出者）——将学件概念（"模型 + 规约"）应用于面向 6G 的 AI CSI 反馈，论文已被 IEEE Transactions on Wireless Communications 接收。不同于 3GPP AI/ML CSI 反馈讨论中占主导的两个极端——一个大而全的通用模型，或每个站点从零训练的专用模型——他们提出一个由场景专用小模型组成的集中式模型仓库。每个模型携带语义规约（架构属性：输入/输出维度、压缩比、网络结构）和统计规约（码本指纹分布的紧凑嵌入，刻画训练数据特征但不暴露数据本身）。基站提交本地计算的统计规约即可检索出最匹配的预训练模型——原始 CSI 永不离开站点，保护隐私；通过多级局部敏感哈希，检索延迟仅 0.25–1.15 毫秒。

在 144 个 QuaDRiGa 仿真数据集上评估（72 LOS + 72 NLOS，3GPP TR 38.901 UMi 场景，每个 1 万样本，覆盖 360° 方位角多样性），仓库检索的场景专用模型比通用模型性能高 18.8%（LOS）和 57.7%（NLOS），模型选择准确率超过 90%。若仍需微调，从检索到的模型出发相比微调通用模型可节省 300–1,000 个训练样本和最多 100 个训练轮次。该框架明确对齐 3GPP AI/ML 生命周期管理架构（模型管理概念自 Release 18 引入、并向 Release 20 演进）。文中指出的局限：在更大、更分散的服务区域内选择性能下降，尤其是 NLOS 场景，因为角度分布的区分度降低。

## Key technical points (EN)
- First application of the learnware paradigm ("model + specification", Zhi-Hua Zhou's line of work) to CSI feedback: a repository of scene-specific small models replaces both the one-general-model and train-from-scratch-per-site extremes.
- Dual specifications per model: semantic (architecture, input/output dims, compression ratio) + statistical (compact codebook-fingerprint distribution embedding) — matching happens on specifications, never on raw CSI, so training data stays private.
- Retrieval via multi-level locality-sensitive hashing: 0.25–1.15 ms latency, model-selection accuracy >90%.
- Evaluation: 144 QuaDRiGa datasets (72 LOS + 72 NLOS), 3GPP TR 38.901 UMi configuration, 10,000 samples each, 360° azimuth coverage.
- Retrieved scene-specific models outperform the general model by 18.8% (LOS) and 57.7% (NLOS).
- Warm-start fine-tuning from a retrieved model saves 300–1,000 samples and up to 100 epochs versus fine-tuning the general model.
- Explicitly mapped onto the 3GPP AI/ML lifecycle-management architecture (Rel-18 model-management concepts, evolving through Rel-20).
- Limitation: distinctiveness of angular statistics fades over large dispersed areas — NLOS selection accuracy suffers most.

## Key technical points (ZH)
- 学件范式（"模型 + 规约"，周志华提出的研究方向）首次应用于 CSI 反馈：场景专用小模型仓库取代"单一通用大模型"与"每站从零训练"两个极端。
- 每个模型带双重规约：语义规约（架构、输入/输出维度、压缩比）+ 统计规约（码本指纹分布的紧凑嵌入）——匹配只在规约上进行，从不接触原始 CSI，训练数据保持私有。
- 基于多级局部敏感哈希的检索：延迟 0.25–1.15 毫秒，模型选择准确率 >90%。
- 评估：144 个 QuaDRiGa 数据集（72 LOS + 72 NLOS），3GPP TR 38.901 UMi 配置，每个 1 万样本，360° 方位角覆盖。
- 检索到的场景专用模型比通用模型高 18.8%（LOS）与 57.7%（NLOS）。
- 以检索模型热启动微调，相比微调通用模型节省 300–1,000 个样本和最多 100 个轮次。
- 明确映射到 3GPP AI/ML 生命周期管理架构（Rel-18 引入的模型管理概念，向 Rel-20 演进）。
- 局限：大范围分散区域内角度统计特征的区分度衰减——NLOS 场景的选择准确率受影响最大。

## Why it matters / what's new (EN)
The 3GPP AI/ML-for-air-interface work (CSI feedback is its flagship use case since Rel-18) has been stuck on a practical dilemma: general models generalize poorly across scenes, while site-specific models raise unsolved questions of training-data collection, transfer and lifecycle management. This paper imports a mature answer from the ML-systems world — a specification-indexed model marketplace — and quantifies it end-to-end (retrieval latency, selection accuracy, performance delta, fine-tuning savings) under standard 38.901 channels. It is the KB's first model-repository/learnware entry and complements the 08-20 wireless-foundation-models survey from the opposite direction: instead of one foundation model for all tasks, a searchable population of small models per scene. The privacy-by-specification mechanism (share fingerprints, not CSI) is also directly relevant to how model exchange between vendors and operators could be standardized in Rel-20 lifecycle management.

## Why it matters / what's new (ZH)
3GPP 空口 AI/ML 工作（CSI 反馈自 Rel-18 起就是其旗舰用例）一直卡在一个实际困境上：通用模型跨场景泛化差，而站点专用模型又带来训练数据采集、迁移与生命周期管理的未解问题。本文从机器学习系统领域引入一个成熟的答案——按规约索引的模型市场——并在标准 38.901 信道下端到端量化了它（检索延迟、选择准确率、性能增益、微调节省）。这是知识库中首个模型仓库/学件条目，并从相反方向补全了 08-20 的无线基础模型综述：不是用一个基础模型覆盖所有任务，而是用一个可检索的场景专用小模型群体。"以规约保隐私"机制（共享指纹而非 CSI）也与 Rel-20 生命周期管理中厂商与运营商之间模型交换的标准化路径直接相关。

## Images
