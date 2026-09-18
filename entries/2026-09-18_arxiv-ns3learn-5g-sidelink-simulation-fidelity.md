---
id: 2026-09-18_arxiv-ns3learn-5g-sidelink-simulation-fidelity
date_published: 2026-09-17
date_found: 2026-09-18
type: academic-paper
technology: cellular
title_en: "NS3Learn: Transferring 5G NR Mode-2 Reception Realism from ns-3 to the Veins/SUMO Stack for Connected-Vehicle Safety Assessment"
title_zh: "NS3Learn：将5G NR Mode-2接收真实性从ns-3迁移至Veins/SUMO栈以评估网联车辆安全性"
url: "https://arxiv.org/abs/2609.20578"
source_quality: full
topics: [5G-NR, sidelink, Mode-2, V2X, simulation, model-distillation, connected-vehicle-safety]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

This paper (Rasheed Bello, Arthur Mukwaya, Anthony Dontoh, Jagruti Sahoo, Judith Mwakalonge — South Carolina State University; Gurcan Comert — North Carolina A&T State University; Varghese Vaidyan — Dakota State University; Vijay Bendigeri — independent researcher, Sacramento CA) addresses a gap in connected-vehicle safety evaluation: coupled traffic-and-network simulation pipelines (e.g., Veins/SUMO) typically use standard propagation-only channel models for the wireless link, which ignore radio resource competition specific to 5G NR sidelink Mode-2 — namely collisions when two vehicles independently pick the same resource, half-duplex periods when a transmitting vehicle cannot hear a same-moment neighbor transmission, and capture when a receiver decodes the stronger of two overlapping signals. The authors state that, as a result, such models "report near-perfect delivery in dense traffic where real deployments lose most messages."

To fix this without a full protocol reimplementation inside Veins, the authors introduce NS3Learn, a distilled closed-form reception model. They labeled 10.5 million reception outcomes from ns-3 5G-LENA physical-layer and scheduler/MAC traces (calibrated on 3GPP scenarios and driven by SUMO vehicle trajectories) and fit a five-stage logistic-cascade model capturing half-duplex loss, scheduling collisions, receiver capture, and decoding, with coefficients loaded from a plain-text configuration file at runtime inside Veins — requiring only offline refitting, not code modification, when radio configurations change.

Evaluation spans two signalized urban networks, six vehicle-penetration levels (1-100%), and five random seeds per condition. Against the ns-3 5G-LENA reference (whose per-instant, in-range delivery falls from 0.952 at 1% penetration to 0.188 at 100%), NS3Learn achieves a mean absolute deviation of 0.064, versus 0.441 for an analytical baseline (M3) and versus an unmodified propagation-only stack that stays at 1.000 delivery regardless of penetration; the paper reports these three side by side as an in-sample fit rather than as a competitive ranking. On a distinct intersection geometry not used for fitting, NS3Learn's deviation rises to only 0.124 (about 20% additional error) without refitting, versus 0.526 for the analytical baseline. Using the more realistic model reverses the direction of a key downstream safety metric: the analytical model predicts mean speed increasing by 8.4% (3.79 -> 4.11 m/s) and shows 1.38 hard-braking events per thousand moving-pair samples (gated to follower > 2 m/s, leader > 1 m/s) at full penetration, while NS3Learn predicts a mean-speed decrease of 11.3% and 3.04 hard-braking events per thousand moving-pair samples — more than double. The authors also report that under an adversarial flooding scenario, NS3Learn registers additional collision loss (0.176 at sparse density) that the analytical and unmodified models do not respond to at all.

## Summary (ZH)

本文（Rasheed Bello、Arthur Mukwaya、Anthony Dontoh、Jagruti Sahoo、Judith Mwakalonge——南卡罗来纳州立大学；Gurcan Comert——北卡罗来纳农业技术州立大学；Varghese Vaidyan——达科他州立大学；Vijay Bendigeri——独立研究员，萨克拉门托）针对网联车辆安全评估中的一处空白展开研究：交通与网络联合仿真管线（如 Veins/SUMO）通常仅使用标准的传播类信道模型来刻画无线链路，而忽略了 5G NR 侧行链路 Mode-2 特有的无线资源竞争——即两辆车独立选中同一资源时的碰撞、发射车辆因发射而无法接收同时刻邻居发射信号的半双工盲区，以及接收端解码两路重叠信号中较强一路的捕获效应。作者指出，由此导致此类模型"在密集交通场景下报告近乎完美的送达率，而实际部署中大多数消息会丢失"。

为在不对 Veins 内部协议进行完整重新实现的前提下解决这一问题，作者提出 NS3Learn——一种蒸馏得到的闭式接收模型。他们从 ns-3 5G-LENA 物理层与调度器/MAC 层迹线（基于 3GPP 场景校准，并由 SUMO 车辆轨迹驱动）中标注了 1050 万条接收结果，拟合出一个五级逻辑回归级联模型，刻画半双工损失、调度碰撞、接收捕获与解码过程，其系数在 Veins 运行时从纯文本配置文件中加载——当无线配置发生变化时，只需离线重新拟合，无需修改代码。

评估覆盖两个带信号灯的城市路网、六个车辆渗透率水平（1%-100%）及每种条件下五个随机种子。相对于 ns-3 5G-LENA 参考结果（其单时刻范围内送达率从 1% 渗透率下的 0.952 降至 100% 渗透率下的 0.188），NS3Learn 的平均绝对偏差为 0.064，而解析基线模型（M3）的偏差为 0.441，未修改的纯传播模型则无论渗透率如何均维持 1.000 的送达率不变；论文说明，这三者是作为样本内拟合结果并列呈现，而非竞争性排名。在未用于拟合的另一路口几何结构上，NS3Learn 在不重新拟合的情况下偏差仅升至 0.124（约增加 20% 误差），而解析基线的偏差为 0.526。采用更真实的模型后，一项关键下游安全指标的方向发生了逆转：解析模型预测平均车速在满渗透率下上升 8.4%（3.79 → 4.11 m/s），每千个运动车对样本（限定跟车 > 2 m/s、前车 > 1 m/s）中出现 1.38 次急刹车事件；而 NS3Learn 预测平均车速下降 11.3%，每千个运动车对样本中出现 3.04 次急刹车事件——超过前者两倍。作者还报告称，在对抗性洪泛场景下，NS3Learn 能够记录到额外的碰撞损失（稀疏密度下为 0.176），而解析模型与未修改模型对此完全没有响应。

## Key technical points (EN)

- **Problem**: standard propagation-only channel models in Veins/SUMO ignore 5G NR sidelink Mode-2 resource competition (collisions, half-duplex loss, receiver capture), overstating delivery in dense traffic.
- **Method**: NS3Learn distills a five-stage logistic-cascade closed-form reception model from 10.5 million labeled ns-3 5G-LENA reception outcomes drawn from physical-layer and scheduler/MAC traces; deployed in Veins via a plain-text coefficient file, no protocol reimplementation needed.
- **In-sample fit**: mean absolute deviation 0.064 vs. ns-3 5G-LENA reference, vs. 0.441 for an analytical (M3) baseline; unmodified propagation-only model stays fixed at 1.000 delivery regardless of penetration (0.952 -> 0.188 for the ns-3 reference).
- **Transfer test**: on an unseen intersection geometry, NS3Learn's deviation rises to 0.124 (about 20% extra error) without refitting, vs. 0.526 for the analytical baseline.
- **Downstream safety-metric reversal**: analytical model predicts +8.4% mean speed (3.79 -> 4.11 m/s) and 1.38 hard-braking events per 1000 moving-pair samples (gated to follower > 2 m/s, leader > 1 m/s) at full penetration; NS3Learn predicts -11.3% mean speed and 3.04 hard-braking events per 1000 moving-pair samples (>2x).
- **Adversarial flooding**: NS3Learn shows measurable additional collision loss (0.176 at sparse density) under flooding; analytical/unmodified models show no response.

## Key technical points (ZH)

- **问题**：Veins/SUMO 中标准的纯传播类信道模型忽略了 5G NR 侧行链路 Mode-2 的资源竞争（碰撞、半双工损失、接收捕获），在密集交通下高估了送达率。
- **方法**：NS3Learn 从物理层与调度器/MAC 层迹线中取得的 1050 万条已标注 ns-3 5G-LENA 接收结果中蒸馏出一个五级逻辑回归级联闭式接收模型，通过纯文本系数文件部署于 Veins 中，无需重新实现协议。
- **样本内拟合**：相对 ns-3 5G-LENA 参考结果的平均绝对偏差为 0.064，解析（M3）基线为 0.441；未修改的纯传播模型无论渗透率如何均固定在 1.000 送达率（而 ns-3 参考结果从 0.952 降至 0.188）。
- **迁移测试**：在未参与拟合的路口几何结构上，NS3Learn 在不重新拟合的情况下偏差升至 0.124（约增加 20% 误差），解析基线为 0.526。
- **下游安全指标反转**：解析模型预测满渗透率下平均车速上升 8.4%（3.79 → 4.11 m/s），每千个运动车对样本（限定跟车 > 2 m/s、前车 > 1 m/s）1.38 次急刹车；NS3Learn 预测平均车速下降 11.3%，每千个运动车对样本 3.04 次急刹车（超过两倍）。
- **对抗性洪泛测试**：在洪泛攻击下，NS3Learn 能记录到可测量的额外碰撞损失（稀疏密度下为 0.176），而解析模型与未修改模型均无响应。

## Why it matters / what's new (EN)

Existing KB coverage of 5G NR sidelink largely concerns V2X standardization and channel estimation; this paper instead targets simulation methodology itself, showing that omitting Mode-2 resource-competition effects from connected-vehicle safety simulations doesn't just shift delivery-ratio numbers slightly — it can reverse the sign of predicted safety outcomes (speed trend, hard-braking rate), which is directly relevant to how such simulations are used to justify V2X safety-application deployment decisions.

## Why it matters / what's new (ZH)

知识库中现有的 5G NR 侧行链路相关条目多涉及 V2X 标准化与信道估计；本文则聚焦于仿真方法本身，表明在网联车辆安全仿真中忽略 Mode-2 资源竞争效应，其影响不仅是送达率数值的小幅偏移——还可能使预测的安全结果（车速趋势、急刹车率）方向发生逆转，这与此类仿真被用来支撑 V2X 安全应用部署决策的实际用途直接相关。
