---
id: 2026-05-12_arxiv-mu-shot-fi-multiuser-sensing
date_published: 2026-05-02
date_found: 2026-05-12
type: academic-paper
title_en: "MU-SHOT-Fi: Self-Supervised Multi-User Wi-Fi Sensing with Source-free Unsupervised Domain Adaptation"
title_zh: "MU-SHOT-Fi：基于无源无监督域适配的自监督多用户 WiFi 感知"
url: https://arxiv.org/abs/2605.01369
source_quality: full
topics: [802.11bf, WiFi-sensing, CSI, domain-adaptation, self-supervised, multi-user]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

Ahmed Y. Radwan and Hina Tabassum (EECS, York University) released MU-SHOT-Fi on 2026-05-02 (arxiv 2605.01369), framing multi-user CSI sensing as a *source-free* domain adaptation problem: at deployment time you have only the pre-trained model and unlabelled target-domain CSI — no source data, no target labels. The framework targets the two specific failure modes of multi-user WiFi sensing: (1) signal entanglement when several people move simultaneously, and (2) severe class imbalance from the long tail of "no one present" slots, which causes naive information-maximisation regularisers to collapse onto the dominant class.

Two technical choices carry the contribution. First, source-side training uses **Hungarian-matched permutation-invariant set prediction**, so the model treats `{user A doing X, user B doing Y}` and `{user B doing Y, user A doing X}` as the same target — eliminating the spurious slot-ordering signal. Second, adaptation uses **occupancy-weighted information maximisation**, weighting diversity regularisation by the per-slot occupancy probability rather than uniformly across slots, plus a binary-rotation self-supervised pretext task that exploits the time-frequency structure of CSI to learn domain-invariant features without labels. For the single-user case a sibling SU-SHOT-Fi variant replaces occupancy weighting with standard IM plus contrastive temporal learning.

On WiMANS (multi-user, 0-5 simultaneous people, 9 activities, classroom + meeting room, 2.4 GHz + 5 GHz) the framework reaches **41.97 % slot-wise accuracy** under combined domain shifts versus 19.61 % source-only — slightly above 2× relative — with occupancy MAE 2.12 vs 2.48. On Widar 3.0 (single-user gestures, 6 classes, 5 locations + orientations) single-user accuracy moves from 80.18 % to 85.75 % under domain shift.

## Summary (ZH)

Radwan 与 Tabassum（多伦多约克大学电气与计算机科学系）于 2026-05-02 提交 MU-SHOT-Fi（arxiv 2605.01369），将多用户 CSI 感知建模为**无源**域适配问题：部署时只有预训练模型与目标域无标签 CSI——既没有源数据，也没有目标标签。框架瞄准多用户 WiFi 感知的两个具体失败模式：（1）多人同时移动时的信号纠缠；（2）「无人在场」槽位长尾导致的严重类不平衡，这会使朴素信息最大化正则项坍缩到主导类上。

贡献由两项技术选择支撑。第一，源端训练采用**带匈牙利匹配的置换不变集合预测**，让模型把 `{用户 A 做 X，用户 B 做 Y}` 与 `{用户 B 做 Y，用户 A 做 X}` 视为相同目标——消除虚假的槽位顺序信号。第二，适配阶段采用**按槽位占用率加权的信息最大化**，按每槽位占用概率而非均匀地加权多样性正则项，并叠加一个二元旋转自监督预设任务——利用 CSI 时频结构在无标签下学到域不变特征。单用户场景下的姊妹版 SU-SHOT-Fi 把占用加权换成标准 IM 加对比性时序学习。

在 WiMANS（多用户，0-5 人同时在场，9 种动作，教室+会议室，2.4 GHz 与 5 GHz）上，框架在组合域偏移下达到**槽位级 41.97% 准确率**，对比仅源训练的 19.61%——大约 2 倍的相对提升，占用 MAE 2.12 vs 2.48。在 Widar 3.0（单用户手势，6 类，5 个位置+朝向）上单用户准确率在域偏移下从 80.18% 提升到 85.75%。

## Key technical points (EN)

- **Source-free DA setting** — at adaptation time only pre-trained model + unlabelled target CSI; no source data, no target labels.
- **Permutation-invariant set prediction with Hungarian matching** — used during source training to remove slot-ordering as a spurious signal.
- **Occupancy-weighted information maximisation** — weights diversity regularisation by per-slot occupancy probability; prevents collapse to the "no-person" class.
- **Binary rotation self-supervised pretext** — exploits CSI time-frequency structure to learn domain-invariant features without labels.
- **Sibling SU-SHOT-Fi** — single-user variant; uses standard IM + contrastive temporal learning.
- **WiMANS results** — 41.97 % slot accuracy under combined shifts (vs 19.61 % source-only); occupancy MAE 2.12 vs 2.48.
- **Widar 3.0 results** — 85.75 % single-user accuracy under domain shift (vs 80.18 %).

## Key technical points (ZH)

- **无源域适配设定** —— 适配阶段只用预训练模型 + 目标域无标签 CSI；无源数据、无目标标签。
- **匈牙利匹配的置换不变集合预测** —— 源端训练阶段使用，消除槽位顺序作为虚假信号。
- **占用率加权的信息最大化** —— 按每槽位占用概率加权多样性正则项；防止坍缩到「无人」类。
- **二元旋转自监督预设任务** —— 利用 CSI 时频结构在无标签下学到域不变特征。
- **姊妹版 SU-SHOT-Fi** —— 单用户变体；使用标准 IM + 对比性时序学习。
- **WiMANS 结果** —— 组合偏移下槽位准确率 41.97%（vs 仅源训练 19.61%）；占用 MAE 2.12 vs 2.48。
- **Widar 3.0 结果** —— 域偏移下单用户准确率 85.75%（vs 80.18%）。

## Why it matters / what's new (EN)

The KB's prior multi-user sensing entry (`2026-05-03_arxiv-multiuser-wifi-sensing-counting`) explicitly chose an identity-agnostic counting task to sidestep multi-user attribution. MU-SHOT-Fi keeps the per-user attribution and tackles the harder problem head-on, but the headline absolute number (~42 % slot-wise accuracy under combined shifts) shows how far multi-user-attributed sensing still has to go before it matches single-user systems. The contribution is the framing — source-free DA is a realistic deployment story for sensing-enabled APs that ship without ever seeing labelled CSI from the customer site — and the occupancy-weighting trick, which is a cleaner fix than synthetic class balancing for the "no person present" failure mode. Companion paper to `2026-05-12_arxiv-wifi-fall-detection-physics-transformer` (same week, different domain-adaptation strategy).

## Why it matters / what's new (ZH)

KB 此前的多用户感知条目（`2026-05-03_arxiv-multiuser-wifi-sensing-counting`）显式选择「身份无关计数」任务来回避多用户身份归属问题。MU-SHOT-Fi 保留按用户归属，正面解决更难的问题，但其头条绝对数字（组合偏移下槽位级约 42% 准确率）也说明多用户带身份归属的感知离单用户系统还有相当距离。本文贡献在于问题设定 —— 无源 DA 是「带感知功能的 AP 出厂时尚未见过客户现场任何标注 CSI」的现实部署叙事 —— 以及占用率加权这个小技巧，相比合成类平衡是对「无人在场」失败模式更干净的修法。与 `2026-05-12_arxiv-wifi-fall-detection-physics-transformer` 为同周姊妹篇，采用不同的域适配策略。

## Images
![MU-SHOT-Fi architecture for multi-user sensing | MU-SHOT-Fi 多用户感知架构](https://arxiv.org/html/2605.01369v1/x1.png)
![SU-SHOT-Fi architecture for single-user sensing | SU-SHOT-Fi 单用户感知架构](https://arxiv.org/html/2605.01369v1/x2.png)
