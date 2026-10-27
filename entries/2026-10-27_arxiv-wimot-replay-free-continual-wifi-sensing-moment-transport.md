---
id: 2026-10-27_arxiv-wimot-replay-free-continual-wifi-sensing-moment-transport
date_published: 2026-10-23
date_found: 2026-10-27
technology: wifi
type: academic-paper
title_en: "WiMoT: Replay-Free Continual Wi-Fi Sensing via Moment Transport"
title_zh: "WiMoT：基于矩迁移的无回放持续 Wi-Fi 感知"
url: "https://arxiv.org/abs/2610.32660"
source_quality: full
topics: [Wi-Fi sensing, CSI, continual learning, domain-incremental learning, replay-free, supervised contrastive learning]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi, security-privacy]
novelty_score: 3
---

## Summary (EN)

WiMoT (Wi-Fi Moment Transport) is a continual-learning method for Wi-Fi sensing, submitted on 23 October 2026 by Chunchun Yang, Yang Cao (USTC) and Zhitang Chen (Huawei Noah's Ark Lab), primary category cs.AI and marked as submitted to IEEE Internet of Things Journal. The paper's problem statement is domain-incremental Wi-Fi sensing: a deployed node must learn each new room, day or user while keeping its recognition of earlier ones, yet the paper says nodes often cannot retain CSI recordings for privacy and storage reasons, and that existing continual Wi-Fi sensing methods either keep CSI exemplars or add task-specific parameters.

The method stores, for every earlier domain and class, only a count, the feature mean and the covariance in a frozen feature basis, instead of samples. Because a representation change would make such statistics stale, WiMoT confines adaptation after the first domain to an affine map on the frozen basis and applies the same map to the stored mean and covariance (the "moment transport"), so the stored statistics equal those the deleted samples would have had under the update. Learning of the new domain uses supervised contrastive learning; a closed-form historical loss on the transported moments penalises updates that reduce the linear readability of earlier labels; and a Gaussian discriminant classifier refitted from the transported statistics, with equal weight per domain, predicts without being told the domain identity. All methods receive a 9728-dimensional input made of 9216-dimensional frozen Mantis features and a 512-dimensional amplitude descriptor.

Evaluation uses three streams: 3DO (three acquisition days, three activities), WiMANS (classroom, meeting-room and empty-room recordings, nine activity labels) and Widar3.0 (nine users in Room 1 treated as nine domains, six gestures), against 21 baseline configurations including fine-tuning, replay, regularisation, recent domain-incremental methods and Wi-Fi continual-learning methods, with seeds 42-44. Reported average final accuracy is 94.02% (3DO), 89.61% (WiMANS) and 95.16% (Widar3.0) with at most 0.58 pp forgetting; on 3DO and Widar3.0 it is 3.77 and 13.11 pp ahead of the strongest baseline, which uses replay; on WiMANS it matches the strongest replay baseline (+0.41 pp) while forgetting falls from 2.78 to 0.00 pp. Storing covariances as rank-32 factors reduces moment memory to 6.4% with at most 0.49 pp accuracy loss.

## Summary (ZH)

WiMoT（Wi-Fi Moment Transport）是一种面向 Wi-Fi 感知的持续学习方法，由 USTC 的 Chunchun Yang、Yang Cao 与华为诺亚方舟实验室的 Zhitang Chen 于 2026 年 10 月 23 日提交，主分类 cs.AI，标注已投稿 IEEE Internet of Things Journal。论文的问题设定是域增量 Wi-Fi 感知：已部署节点需要学习每个新房间、新日期或新用户，同时保持对旧域的识别，而论文指出节点出于隐私和存储原因常常无法保留 CSI 数据，现有持续 Wi-Fi 感知方法要么保留 CSI 样例，要么增加任务专属参数。

该方法对每个旧域和类别只存储计数、冻结特征基下的特征均值与协方差，而不存样本。由于表示变化会使这类统计量失效，WiMoT 在第一个域之后将适配限制为冻结特征基上的仿射映射，并把同一映射作用于存储的均值和协方差（“矩迁移”），使存储的统计量等同于被删除样本在该更新下应有的统计量。新域通过监督对比学习来学习；基于迁移后矩的闭式历史损失惩罚那些降低旧标签线性可读性的更新；并用由迁移后统计量重新拟合、各域等权的高斯判别分类器进行预测，预测时无需域标识。所有方法的输入均为 9728 维，由 9216 维冻结 Mantis 特征与 512 维幅度描述符组成。

评估使用三个数据流：3DO（三个采集日、三种活动）、WiMANS（教室、会议室、空房间录制，九种活动标签）和 Widar3.0（Room 1 的九名用户作为九个域、六种手势），对比 21 种基线配置，包括微调、回放、正则化、近期域增量方法和 Wi-Fi 持续学习方法，种子为 42-44。报告的平均最终准确率为 94.02%（3DO）、89.61%（WiMANS）、95.16%（Widar3.0），遗忘至多 0.58 个百分点；在 3DO 和 Widar3.0 上分别领先使用回放的最强基线 3.77 和 13.11 个百分点；在 WiMANS 上与最强回放基线持平（+0.41 pp），而遗忘由 2.78 降至 0.00 pp。将协方差存为秩 32 因子可把矩存储降至 6.4%，准确率损失至多 0.49 pp。

## Key technical points (EN)

- Memory: per domain and class, count, mean and covariance in a frozen basis; no CSI samples kept.
- Moment transport: after the first domain only an affine map is adapted, and the same map is applied to stored moments, so they stay valid without old samples; nonlinear adaptation is limited to the first domain (stated by the paper as the price).
- Training signals: supervised contrastive learning for plasticity; closed-form historical loss on the transported moments for stability.
- Classifier: Gaussian discriminant classifier refitted from transported statistics, equal weight per domain, no domain identity at test time.
- Input: 9216-d frozen Mantis features plus 512-d amplitude descriptor for WiMoT and every baseline.
- Results: AFA 94.02% / 89.61% / 95.16% (3DO / WiMANS / Widar3.0), forgetting at most 0.58 pp; +3.77 pp and +13.11 pp over the strongest baseline on 3DO and Widar3.0.
- Memory cost: rank-32 covariance factors cut moment memory to 6.4%, at most 0.49 pp accuracy loss.
- Stated limitation: on WiMANS the advantage depends on domain order, label budget and encoder; in three of six orders MAS or SI+ER has higher AFA by 0.93-1.95 pp, and with 25% and 10% of later-domain labels the advantage disappears.

## Key technical points (ZH)

- 存储：每个域和类别保存计数、冻结基下的均值与协方差；不保留 CSI 样本。
- 矩迁移：第一个域之后只适配仿射映射，并将同一映射作用于存储的矩，使其在没有旧样本的情况下仍然有效；非线性适配仅限第一个域（论文自述的代价）。
- 训练信号：监督对比学习提供可塑性；基于迁移后矩的闭式历史损失提供稳定性。
- 分类器：由迁移后统计量重新拟合的高斯判别分类器，各域等权，测试时无需域标识。
- 输入：WiMoT 与所有基线均使用 9216 维冻结 Mantis 特征加 512 维幅度描述符。
- 结果：平均最终准确率 94.02% / 89.61% / 95.16%（3DO / WiMANS / Widar3.0），遗忘至多 0.58 pp；在 3DO 与 Widar3.0 上分别领先最强基线 3.77 与 13.11 pp。
- 存储成本：秩 32 协方差因子将矩存储降至 6.4%，准确率损失至多 0.49 pp。
- 论文自述的局限：在 WiMANS 上优势取决于域顺序、标签预算和编码器；六种顺序中有三种 MAS 或 SI+ER 的 AFA 高出 0.93-1.95 pp，且仅有 25% 和 10% 后续域标签时优势消失。

## Why it matters / what's new (EN)

The KB's CSI-sensing entries concern single-domain accuracy or cross-domain generalisation, for example 2026-10-21_arxiv-csi-agent-llm-few-shot-cross-domain-wifi-sensing and 2026-10-26_arxiv-wisper-pose-supervised-residual-flow-multi-person-3d-pose-wifi-csi. This paper addresses a different deployment constraint, learning sequentially without retaining recordings, and gives a memory budget for edge nodes. The results are on three public streams with a frozen foundation-model encoder; the paper's own limitations section shows the gain is not uniform across streams.

## Why it matters / what's new (ZH)

知识库中现有的 CSI 感知条目主要涉及单域精度或跨域泛化，例如 2026-10-21_arxiv-csi-agent-llm-few-shot-cross-domain-wifi-sensing 与 2026-10-26_arxiv-wisper-pose-supervised-residual-flow-multi-person-3d-pose-wifi-csi。本文面向另一类部署约束，即在不保留录制数据的前提下按顺序持续学习，并给出适合边缘节点的存储预算。实验在三个公开数据流上使用冻结的基础模型编码器；论文自己的局限性部分表明，收益在各数据流上并不一致。
