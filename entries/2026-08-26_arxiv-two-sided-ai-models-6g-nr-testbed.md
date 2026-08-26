---
id: 2026-08-26_arxiv-two-sided-ai-models-6g-nr-testbed
date_published: 2026-08-24
date_found: 2026-08-26
type: academic-paper
technology: cellular
title_en: "Rethinking the Foundations of Two-Sided AI Models for 6G: NR-Stack Integration, Surrogate-Channel Adaptation, Gradient-Free Vendor Fine-Tuning"
title_zh: "重思 6G 双侧 AI 模型的基础：NR 协议栈集成、代理信道自适应与免梯度跨厂商微调"
url: "https://arxiv.org/abs/2608.22918"
source_quality: full
topics: [AI-air-interface, two-sided-models, CSI-feedback, neural-transceiver, TR-38.843, TR-38.901, OCUDU, USRP, n78, zeroth-order-optimization, vendor-interoperability, 5G-NR, testbed]
topic_primary: cellular-ai
topics_secondary: [5g-nr, 6g-vision]
novelty_score: 3
---

## Summary (EN)
A SUTD / DeepSig / POSTECH / Adelaide team (Oh, Chen, O'Shea, Shin, Choi, Jeon, Park) challenges three assumptions baked into the two-sided AI-model literature — paired neural models at UE and gNB for CSI feedback and neural transceivers, the core of 3GPP's AI/ML air-interface work (TR 38.843): that models operate in isolation from legacy NR users, that they are trained per predefined channel condition, and that cross-vendor adaptation uses gradient-based fine-tuning (which leaks proprietary model information through exchanged gradients and costs heavy signaling).

Against the first assumption, they integrate two-sided model processing into a real 5G NR protocol stack: an OCUDU-based gNB on an NVIDIA DGX Spark, an SDR UE over USRP B210 in band n78 (20 MHz, 30 kHz SCS), with full UE registration, PDU-session establishment and IP traffic. In two-sided mode the UE-side model maps coded bits directly to complex symbols with no dedicated pilots — replacing QAM mapping and channel estimation while keeping the NR channel decoder and the rest of the stack — and delivers over 4x higher uplink throughput than conventional NR at low SNR (rural-macro TR 38.901 conditions). Against the second, Adaptive Model Selection (AMS) replaces per-channel model zoos with offline "model + surrogate channel" tables, jointly trained via regularized optimization, with runtime matching through transmit power/modulation control — achieving the best PSNR across 0-30 dB SNR at lower training/storage cost. Against the third, a zeroth-order fine-tuning scheme exchanges only scalar loss differences between vendors instead of gradients: comparable CSI-feedback NMSE to TR 38.843 Type-2 training while cutting one vendor's memory 3.65x and the other's communication overhead by more than 15,000x, and blocking gradient-based model-extraction leakage.

## Summary (ZH)
SUTD/DeepSig/POSTECH/阿德莱德团队（Oh、Chen、O'Shea、Shin、Choi、Jeon、Park）挑战双侧 AI 模型文献中的三个默认假设——UE 与 gNB 各执一半的成对神经模型（CSI 反馈与神经收发机，3GPP AI/ML 空口工作 TR 38.843 的核心）：假设模型与传统 NR 用户隔离运行；假设按预定义信道条件逐一训练模型；假设跨厂商适配依赖基于梯度的微调（交换梯度会泄露专有模型信息且信令开销大）。

针对第一个假设，他们把双侧模型处理集成进真实 5G NR 协议栈：NVIDIA DGX Spark 上基于 OCUDU 的 gNB、USRP B210 软件无线电 UE，工作于 n78 频段（20 MHz、30 kHz 子载波间隔），完整跑通 UE 注册、PDU 会话建立与 IP 业务。双侧模式下 UE 侧模型将编码比特直接映射为复数符号、无需专用导频——替代 QAM 映射与信道估计，同时保留 NR 信道译码器及其余协议栈——在低信噪比（TR 38.901 乡村宏站条件）下上行吞吐超过常规 NR 的 4 倍。针对第二个假设，自适应模型选择（AMS）用离线"模型 + 代理信道"表（经正则化联合训练）取代逐信道模型库，运行时通过发射功率/调制控制完成匹配——在 0-30 dB 信噪比全程取得最高 PSNR，且训练/存储开销更低。针对第三个假设，零阶微调方案在厂商间只交换标量损失差而非梯度：CSI 反馈 NMSE 与 TR 38.843 Type-2 训练相当，同时一方内存降 3.65 倍、另一方通信开销降逾 15000 倍，并阻断基于梯度的模型提取泄露。

## Key technical points (EN)
- Scope: two-sided (UE+gNB paired) AI models — the CSI-feedback / neural-transceiver class studied in 3GPP TR 38.843 (AI/ML for NR air interface); three inherited assumptions identified as deployment blockers.
- NR-stack integration testbed: OCUDU gNB on NVIDIA DGX Spark + SDR UE on USRP B210, band n78, 20 MHz, 30 kHz SCS; full control-plane bring-up (registration, PDU session) and IP traffic alongside conventional NR.
- Neural PHY substitution: UE-side model maps coded bits directly to complex symbols, no dedicated pilots — replaces QAM mapping, pilot insertion and channel estimation while preserving the NR decoder; >4x uplink throughput vs conventional NR at low SNR (TR 38.901 rural macro, 1x4 antennas).
- Adaptive Model Selection: offline model-surrogate-channel (MSC) tables jointly trained with regularization; runtime selection via transmit power/modulation control; best PSNR across 0-30 dB with reduced training and storage vs one-model-per-channel.
- Gradient-free cross-vendor fine-tuning: zeroth-order optimization exchanging scalar loss differences only; comparable NMSE to Type-2 gradient fine-tuning; 3.65x memory reduction (vendor A), >15,000x communication reduction (vendor B); prevents Jacobian/model-output extraction from gradients.
- Standards anchors: TR 38.843 V19.0.0 (Type 1/2/3 training collaboration), TR 38.901 V19.4.0 channel models.
- Fresh v1 submitted 2026-08-24 (eess.SP); no prior-venue banner — passes the postprint guard.

## Key technical points (ZH)
- 范围：双侧（UE+gNB 成对）AI 模型——3GPP TR 38.843（NR 空口 AI/ML）研究的 CSI 反馈/神经收发机类别；识别出三个阻碍部署的继承假设。
- NR 协议栈集成测试平台：NVIDIA DGX Spark 上的 OCUDU gNB + USRP B210 软件无线电 UE，n78 频段、20 MHz、30 kHz SCS；完整控制面拉起（注册、PDU 会话）并与常规 NR 并行承载 IP 业务。
- 神经 PHY 替换：UE 侧模型将编码比特直接映射为复数符号、无专用导频——替代 QAM 映射、导频插入与信道估计，保留 NR 译码器；低信噪比下上行吞吐 >4 倍于常规 NR（TR 38.901 乡村宏站，1x4 天线）。
- 自适应模型选择：离线"模型-代理信道"（MSC）表经正则化联合训练；运行时经发射功率/调制控制选择；0-30 dB 全程最优 PSNR，训练与存储开销低于逐信道单模型方案。
- 免梯度跨厂商微调：零阶优化只交换标量损失差；NMSE 与 Type-2 梯度微调相当；厂商 A 内存降 3.65 倍、厂商 B 通信开销降逾 15000 倍；阻断经梯度的雅可比/模型输出提取。
- 标准锚点：TR 38.843 V19.0.0（Type 1/2/3 训练协作）、TR 38.901 V19.4.0 信道模型。
- 2026-08-24 提交的新 v1（eess.SP）；无既往发表标记——通过重印守卫。

## Why it matters / what's new (EN)
The cellular-ai bin holds foundation-model surveys, CSI-feedback learnware and RAN-control agents, but nothing yet on the *two-sided* model problem that dominates 3GPP's actual AI/ML air-interface agenda — where the hard questions are multi-vendor (who trains what, what crosses the UE-gNB boundary) rather than model-architecture questions. This entry lands three firsts at once: the first claimed real-testbed validation of two-sided models coexisting with conventional NR inside a live stack (OCUDU shows up again after the KB's 08-07 GPU-PHY entry — it is becoming the de-facto open platform for AI-RAN PHY experiments); a surrogate-channel answer to the specialization-vs-generalization dilemma that TR 38.843 flags for model lifecycle management; and a gradient-free fine-tuning primitive aimed squarely at the vendor-IP-leakage objection that has stalled Type-2 collaborative training in 3GPP debates — with a >15,000x signaling reduction that converts an architectural objection into an engineering trade. The DeepSig + academia author mix suggests productization intent. Caveats: throughput gains are shown at low SNR in a 1x4 rural-macro setup, the AMS evaluation leans on image-reconstruction proxies, and the paper is a position-plus-evidence piece rather than a full system study. Watch Rel-20 normative AI/ML air-interface discussions for whether zeroth-order collaboration surfaces as a formal training-collaboration type.

## Why it matters / what's new (ZH)
cellular-ai 栏目已有基础模型综述、CSI 反馈 learnware 与 RAN 控制智能体，但尚无关于*双侧*模型问题的条目——而这正是 3GPP AI/ML 空口议程的真正主线，难点在多厂商协作（谁训练什么、UE-gNB 边界上传递什么）而非模型架构本身。本条目一次落下三个"首次"：首个宣称在真实协议栈内验证双侧模型与常规 NR 共存的实测（OCUDU 继库中 08-07 GPU-PHY 条目后再次出现——正在成为 AI-RAN PHY 实验的事实开放平台）；用代理信道回应 TR 38.843 在模型生命周期管理中指出的专用-泛化两难；以及直指厂商 IP 泄露顾虑的免梯度微调原语——该顾虑一直拖住 3GPP 里 Type-2 协作训练的讨论——超 15000 倍的信令削减把架构性反对转化为工程权衡。DeepSig 与学界的作者组合暗示产品化意图。注意：吞吐增益展示于低信噪比 1x4 乡村宏站配置，AMS 评估依赖图像重建代理任务，论文属"立场 + 证据"而非完整系统研究。关注 Rel-20 规范性 AI/ML 空口讨论中零阶协作是否成为正式训练协作类型。

## Images
