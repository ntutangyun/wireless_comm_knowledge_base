---
id: 2026-10-16_arxiv-physical-em-side-channel-attacks-edge-llms-raspberry-pi5
date_published: 2026-10-09
date_found: 2026-10-16
technology: edge-ai
type: academic-paper
title_en: "Physical side-channel attacks on edge LLMs: recovering output tokens and user prompts from EM traces on a Raspberry Pi 5"
title_zh: "边缘 LLM 的物理侧信道攻击：从树莓派 5 的电磁迹线恢复输出 token 与用户提示词"
url: "https://arxiv.org/abs/2610.14215"
source_quality: abstract_only
topics: [side-channel, electromagnetic, edge-LLM, privacy, Raspberry-Pi-5, LLaMA-3.2-1B]
topic_primary: on-device-inference
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Local LLM deployment on edge devices is largely motivated by privacy concerns over sending data to the cloud. This paper shows that keeping inference local does not remove privacy risk: an adversary with physical access can exploit hardware leakage, without compromising or modifying the software. The authors present an electromagnetic (EM) side-channel attack on LLaMA-3.2-1B-Instruct running on a Raspberry Pi 5, and describe three attacks under different threat assumptions.

First, a profiling attack identifies generated tokens among 50 medical and privacy-related keywords with 97.2% accuracy on profiled words. Second, a reconstruction attack recovers the model's hidden representations and uses them to predict tokens from the full 128k-token vocabulary, with 94.3% accuracy on profiled classes; for unseen words, the correct token is ranked within the first 100 positions in 67% of cases, with a median rank of 54. Third, a hidden-state inversion attack uses the recovered hidden state to reconstruct user prompts semantically. The attacks need only passive EM measurements and a limited number of traces for training.

## Summary (ZH)

在边缘设备上本地部署 LLM，很大程度上出于对数据上传云端的隐私顾虑。本文表明，本地推理并不能消除隐私风险：具有物理接触条件的攻击者可以利用硬件泄露，在不入侵、不修改软件的情况下获取信息。作者针对运行在树莓派 5 上的 LLaMA-3.2-1B-Instruct 提出了电磁（EM）侧信道攻击，并给出三种不同威胁假设下的攻击。

其一，剖析攻击在 50 个医疗与隐私相关关键词中识别生成的 token，对已剖析词的准确率为 97.2%。其二，重构攻击恢复模型的隐藏表示，并据此在完整 128k 词表上预测 token，对已剖析类别的准确率为 94.3%；对未见词，正确 token 在 67% 的情况下排在前 100 位，中位排名为 54。其三，隐状态反演攻击利用恢复出的隐状态在语义层面重建用户提示词。这些攻击只需被动的电磁测量和有限数量的训练迹线。

## Key technical points (EN)

- Target: LLaMA-3.2-1B-Instruct on a Raspberry Pi 5; passive EM measurement, no software compromise.
- Attack 1 (profiling): 97.2% accuracy over 50 medical and privacy-related keywords (profiled words).
- Attack 2 (reconstruction): recovers hidden representations, predicts over the 128k vocabulary; 94.3% on profiled classes; for unseen words, correct token in top 100 in 67% of cases, median rank 54.
- Attack 3 (hidden-state inversion): semantic reconstruction of user prompts.
- Requirement: a limited number of traces for training.

## Key technical points (ZH)

- 目标：树莓派 5 上的 LLaMA-3.2-1B-Instruct；被动电磁测量，无需入侵软件。
- 攻击一（剖析）：在 50 个医疗与隐私相关关键词上准确率 97.2%（已剖析词）。
- 攻击二（重构）：恢复隐藏表示，在 128k 词表上预测；已剖析类别 94.3%；未见词在 67% 情况下正确 token 位于前 100，中位排名 54。
- 攻击三（隐状态反演）：对用户提示词做语义重建。
- 条件：需要少量训练迹线。

## Why it matters / what's new (EN)

The result targets the premise that on-device inference is private by construction, but it assumes an attacker with physical proximity to the device and a single small model on one board. This record is based on the abstract only; the measurement setup is not described here.

## Why it matters / what's new (ZH)

这一结果针对的是“端侧推理天然私密”的前提，但它假设攻击者能够物理接近设备，且仅针对单块开发板上的一个小模型。本条目仅基于摘要，测量装置的细节在此未涉及。

## Images

*(No redistributable images for this entry.)*
