---
id: 2026-10-19_arxiv-bishield-tee-bilateral-obfuscation-on-device-llm
date_published: 2026-10-15
date_found: 2026-10-19
technology: edge-ai
type: academic-paper
title_en: "BiShield-TEE: unilateral weight obfuscation in on-device TEE-shielded LLM partitions is breakable; a bilateral scheme restores protection"
title_zh: "BiShield-TEE：端侧 TEE 保护的 LLM 分区中单侧权重混淆可被攻破，双侧方案恢复保护"
url: "https://arxiv.org/abs/2610.21565"
source_quality: abstract_only
topics: [TEE, on-device-LLM, weight-obfuscation, model-protection, GroupCover, ArrowCloak]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

On-device LLM deployment is adopted for latency and privacy reasons but exposes proprietary models to reverse engineering. Trusted Execution Environments (TEEs) isolate on-device inference, yet most TEE-based parameter obfuscation relies on unilateral matrix transformations that obfuscate only the output side. The paper identifies a vulnerability in this design, the Solution Determinacy Property (SDP): the obfuscation secret is uniquely determined, which exposes the structure of the true key.

Under the authors' attacks, the representative methods GroupCover and ArrowCloak are reduced to negligible protection, with attack accuracy above 2.4 times the full-shielding black-box baseline and near-complete recovery of model functionality. The proposed BiShield-TEE is a bilateral framework that jointly obfuscates input and output dimensions, inducing Ambiguous Solutions so that the true key is hidden among many equally valid candidates. Across diverse models and datasets it confines attack accuracy to the full-shielding black-box baseline while achieving higher inference efficiency than prior methods on real hardware. Code is stated to be available.

## Summary (ZH)

端侧部署 LLM 出于时延和隐私考虑被广泛采用，但会使专有模型面临逆向工程。可信执行环境（TEE）可隔离端侧推理，然而大多数基于 TEE 的参数混淆依赖只混淆输出侧的单侧矩阵变换。论文指出该设计存在漏洞，称为解确定性（SDP）：混淆密钥被唯一确定，从而暴露真实密钥的结构。

在作者的攻击下，代表性方法 GroupCover 与 ArrowCloak 的保护降为可忽略，攻击准确率超过全屏蔽黑盒基线的 2.4 倍，并几乎完整恢复模型功能。所提出的 BiShield-TEE 是一种双侧框架，对输入和输出维度联合混淆，引入歧义解，使真实密钥隐藏在众多同样有效的候选之中。在多种模型和数据集上，它把攻击准确率限制在全屏蔽黑盒基线水平，同时在真实硬件上比已有方法具有更高的推理效率。论文称代码已公开。

## Key technical points (EN)

- Setting: LLM partitioned between a TEE and the untrusted rest of the device, with weights obfuscated by matrix transformations.
- Flaw: unilateral (output-side-only) obfuscation has a uniquely determined secret (Solution Determinacy Property).
- Attack result: GroupCover and ArrowCloak reduced to negligible protection; attack accuracy above 2.4x the full-shielding black-box baseline.
- Defence: BiShield-TEE obfuscates input and output dimensions jointly, producing many equally valid keys (Ambiguous Solutions).
- Claim: attack accuracy held at the full-shielding black-box baseline, with higher efficiency than prior methods on real hardware.
- Version note: arXiv v1 was submitted 15 Oct 2026; v2 revised 16 Oct.

## Key technical points (ZH)

- 场景：LLM 在 TEE 与设备上不受信任部分之间划分，权重通过矩阵变换混淆。
- 缺陷：单侧（仅输出侧）混淆的秘密被唯一确定（解确定性，SDP）。
- 攻击结果：GroupCover 与 ArrowCloak 的保护降为可忽略；攻击准确率超过全屏蔽黑盒基线的 2.4 倍。
- 防御：BiShield-TEE 对输入和输出维度联合混淆，产生众多同样有效的密钥（歧义解）。
- 声称：攻击准确率被限制在全屏蔽黑盒基线，且在真实硬件上效率高于已有方法。
- 版本说明：arXiv v1 于 2026 年 10 月 15 日提交，v2 于 10 月 16 日修订。

## Why it matters / what's new (EN)

The abstract notes that on-device LLM deployment exposes proprietary models to reverse engineering and intellectual-property theft. The paper shows by attack that a family of such schemes has a structural weakness and proposes a fix; the attack and efficiency numbers are the authors' own and this record is based on the abstract only.

## Why it matters / what's new (ZH)

摘要指出，端侧部署 LLM 会使专有模型面临逆向工程和知识产权窃取风险。论文通过攻击表明这一类方案存在结构性弱点并提出修复；攻击与效率数据均为作者自测，本条目仅基于摘要。

## Images

*(No redistributable images for this entry.)*
