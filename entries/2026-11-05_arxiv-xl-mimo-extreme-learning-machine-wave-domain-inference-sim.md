---
id: 2026-11-05_arxiv-xl-mimo-extreme-learning-machine-wave-domain-inference-sim
date_published: 2026-10-26
date_found: 2026-11-05
technology: edge-ai
type: academic-paper
title_en: "XL MIMO Extreme Learning Machines: Wave-Domain Inference with Stacked Metasurfaces"
title_zh: "XL MIMO 极限学习机：基于堆叠超表面的波域推理"
url: "https://arxiv.org/abs/2610.35469"
source_quality: full
topics: [extreme-learning-machine, stacked-intelligent-metasurface, XL-MIMO, wave-domain-computing, goal-oriented-communication]
topic_primary: over-the-air-computation
topics_secondary: [task-oriented-communication]
novelty_score: 3
---

## Summary (EN)

Goal-oriented communication asks that machine-learning inference run directly on wirelessly transferred data, with the neural-network computation split between the transmitter, the receiver and the channel itself. When the channel is shaped by reconfigurable metasurfaces (MSs), earlier systems could offload only about one network layer into the wave domain, because fading and the near-linear behaviour of conventional MS models limit what the channel can compute.

Stylianopoulos, Fabiani, Dardari and Alexandropoulos show that an extremely large (XL) MIMO link with a Stacked Intelligent Metasurface (SIM) at the receiver, plus a single antenna and one RF chain, can act as a two-layer network operating entirely over the air. The first layer, which cannot be controlled, is the transformation applied by wireless fading. The second, controllable layer is the SIM. Only the front-end MS layer must respond nonlinearly, serving as the activation function. Casting this as an Extreme Learning Machine (ELM) gives a closed-form optimal linear-SIM combiner (fast training, including with partial signal observability) and a universal-approximation argument.

The evaluation is numerical on several classification datasets (this journal version, extending the authors' conference paper, models SIM propagation with Rayleigh-Sommerfeld coefficients); no over-the-air hardware experiment is reported. The authors report accuracy comparable to idealised digital models at the XL-MIMO regime, and describe the architecture as fully analog at inference with digital processing needed only for training and for computing the SIM configuration. The manuscript is submitted for journal publication.

## Summary (ZH)

面向目标的通信要求把机器学习推理直接作用于无线传输的数据，将神经网络计算拆分到发射端、接收端和信道本身。当信道由可重构超表面（MS）塑造时，已有系统因衰落以及常规 MS 模型近乎线性的特性，只能把约一层网络的计算卸载到波域。

Stylianopoulos、Fabiani、Dardari 与 Alexandropoulos 表明：在接收端配备堆叠智能超表面（SIM）、仅有一根天线和一条射频链的超大规模（XL）MIMO 链路，可以充当完全在空中运行的两层网络。第一层不可控，即无线衰落施加的变换；第二层可控，即 SIM。只有前端 MS 层需要具备非线性响应，充当激活函数。将其表述为极限学习机（ELM），可得到闭式的最优线性 SIM 合并器（包括部分信号可观测情形下的快速训练）以及通用逼近论证。

评估为多个分类数据集上的数值仿真（本期刊版本扩展了作者的会议论文，用 Rayleigh-Sommerfeld 系数建模 SIM 传播），未报告空口硬件实验。作者报告在 XL-MIMO 条件下准确率可与理想化数字模型相当，并指出该架构在推理时完全为模拟，数字处理仅用于训练及计算 SIM 配置。稿件已投期刊。

## Key technical points (EN)

- Receiver: XL MIMO with stacked intelligent metasurfaces, single antenna and one RF chain; fading channel acts as an uncontrollable random hidden layer.
- Only the front-end MS layer needs a nonlinear response (activation); later MS layers are linear (intermediate ones fixed/random); only the last is configured, in closed form, during training.
- ELM formulation: closed-form training, universal approximation proven, effect of reception noise analysed.
- Closed-form wave-domain realisation of single-antenna analog combining via the last linear MS layer; a codebook of combiner configurations reduces the transmissions needed to observe training data.
- Evaluation: numerical, binary classification on diverse datasets; accuracy comparable to idealised digital models at XL scale. No hardware.
- Status: submitted for journal publication (per arXiv comments).

## Key technical points (ZH)

- 接收端：配备堆叠智能超表面的 XL MIMO，单天线、单射频链；衰落信道充当不可控的随机隐层。
- 仅前端 MS 层需要非线性响应（激活函数）；后续 MS 层为线性（中间层固定/随机）；仅最后一层在训练中以闭式方式配置。
- ELM 表述：闭式训练、通用逼近性已证明、并分析了接收噪声的影响。
- 通过最后一层线性 MS 在波域以闭式方式实现单天线模拟合并；合并器配置码本可减少观测训练数据所需的传输次数。
- 评估：数值仿真，多数据集二分类；XL 规模下准确率可与理想化数字模型相当。无硬件。
- 状态：已投期刊（见 arXiv 备注）。

## Why it matters / what's new (EN)

The paper frames the problem as offloading more than one neural-network layer into the wave domain: earlier metasurface systems offloaded about one layer, and here a nonlinear front-end MS lets the channel plus a SIM act as a two-layer network. It adds theory (universal approximation, closed-form training).

See also: `2026-09-18_arxiv-rf-cnn-radio-hardware-repurposed-inference`.

Treat it as a feasibility argument: the classification tasks are binary, the results are simulated, and the paper itself notes that the training stage still needs digital computation. No claim is made here about priority over other metasurface-computing work.

## Why it matters / what's new (ZH)

论文把问题表述为把不止一层神经网络卸载到波域：此前的超表面系统只能卸载约一层，而这里借助非线性前端 MS，信道加 SIM 即可充当两层网络。论文还给出理论（通用逼近、闭式训练）。

另见：`2026-09-18_arxiv-rf-cnn-radio-hardware-repurposed-inference`。

应将其视为可行性论证：任务为二分类，结果为仿真，且论文自身指出训练阶段仍需数字计算。此处不对其相对其他超表面计算工作的优先性作任何断言。

## Images

*(No redistributable images for this entry.)*
