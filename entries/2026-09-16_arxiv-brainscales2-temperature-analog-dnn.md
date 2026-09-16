---
id: 2026-09-16_arxiv-brainscales2-temperature-analog-dnn
date_published: 2026-09-14
date_found: 2026-09-16
type: academic-paper
technology: edge-ai
title_en: "Beyond Noise: Understanding and Overcoming Temperature Effects in Analog DNN Inference"
title_zh: "超越噪声：理解并克服模拟域 DNN 推理中的温度效应"
url: "https://arxiv.org/abs/2609.15527"
source_quality: full
topics: [edge-ai-silicon, analog-computing, neuromorphic, measurement-study]
topic_primary: edge-ai-silicon
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Researchers from the Hardware and Artificial Intelligence Lab, Institute of Computer Engineering, Heidelberg University (Niklas Summ, Xiao Wang, Hendrik Borras, Bernhard Klein, Holger Fröning) study how ambient temperature affects inference accuracy on BrainScaleS-2 (BSS-2), a mixed-signal analog neuromorphic processor built in 65nm CMOS, comprising four blocks of 128x256 synapses and 512 neuron circuits in total. Analog accelerators are attractive for edge and mobile deployment because of their energy efficiency, but they are inherently susceptible to noise and physical non-idealities, and the paper's contribution is showing that these effects are further sensitive to operating temperature — a variable that matters directly for real deployment (a device in a pocket, an enclosure, or direct sunlight is not held at the lab's calibration temperature).

The authors ran BSS-2 across a 40-90°C temperature sweep and characterized both stochastic noise and systematic non-idealities in the chip's analog matrix-vector multiplication behaviour, then compared four mitigation strategies for training models that must run correctly across that range: standard noise-free quantization-aware training (QAT), standard noisy training, variance-aware noisy training (VANT), and hardware-in-the-loop training combined with temperature-aware calibration. The headline finding is that the accuracy degradation as temperature rises is driven primarily by systematic, not stochastic, non-idealities — meaning it is a bias effect that in-the-loop calibration can specifically target, rather than pure noise that only averaging or redundancy can address.

## Summary (ZH)

来自海德堡大学计算机工程研究所硬件与人工智能实验室的研究者（Niklas Summ、Xiao Wang、Hendrik Borras、Bernhard Klein、Holger Fröning）研究了环境温度如何影响 BrainScaleS-2（BSS-2）——一款以 65nm CMOS 工艺实现的混合信号模拟神经形态处理器（共四个模块、每模块 128x256 突触，全芯片共 512 个神经元电路）——上的推理精度。模拟加速器因其能效优势而对边缘与移动端部署颇具吸引力，但其固有地易受噪声与物理非理想特性影响；本文的贡献在于指出，这些效应还会进一步受工作温度影响——而这一变量对实际部署具有直接意义（放在口袋里、机箱内或直射阳光下的设备，并不会保持在实验室的标定温度）。

作者在 40°C 至 90°C 的温度范围内对 BSS-2 进行扫描测试，刻画了芯片模拟矩阵-向量乘法行为中的随机噪声与系统性非理想特性，并比较了四种训练策略在该温度范围内的鲁棒性：标准的无噪声量化感知训练（QAT）、标准含噪训练、方差感知含噪训练（VANT），以及「硬件在环训练」结合「温度感知标定」。核心发现是：随温度升高而出现的精度下降主要由系统性（而非随机性）非理想特性驱动——这意味着它是一种偏置效应，可被在环标定针对性纠正，而非只能靠平均或冗余来应对的纯噪声。

## Key technical points (EN)

- **Hardware**: BrainScaleS-2 (BSS-2), a mixed-signal analog neuromorphic ASIC, 65nm CMOS, four blocks of 128x256 synapses and 512 neuron circuits in total, each neuron with a dedicated ADC channel for activation readout — a real fabricated chip, not a simulated analog model.
- **Temperature protocol**: a 40-90°C sweep (50°C span) run over 16 minutes, with a dedicated experimental rig for temperature control during BSS-2 operation.
- **Characterization method**: 100 random matrix-vector multiplications analyzed per condition, decomposing the error into per-neuron mean/standard-deviation error, per-neuron mean error versus temperature, and error-to-signal ratio (ESR) versus temperature and versus calibration point.
- **Four mitigation strategies compared**: noise-free QAT (weakest under temperature drift); standard noisy training (clear improvement over noise-free QAT); variance-aware noisy training, VANT (an additional but, in the authors' words, modest benefit over standard noisy training, appearing when the operating temperature deviates from the calibration point); hardware-in-the-loop training with temperature-aware calibration (the strongest retention, evaluated across three calibration points at 40°C, 60°C and 80°C).
- **Core finding**: ESR rises with operating temperature, and the paper attributes this primarily to systematic (not stochastic) non-idealities — a distinction that determines which class of mitigation actually works, since only calibration-based approaches address a systematic/bias effect, while noise-injection training mainly targets stochastic noise.

## Key technical points (ZH)

- **硬件**：BrainScaleS-2（BSS-2），一款混合信号模拟神经形态 ASIC，65nm CMOS 工艺，共四个模块、每模块 128x256 突触，全芯片共 512 个神经元电路，每个神经元配备专用于激活值读出的 ADC 通道——是真实流片芯片，而非模拟仿真模型。
- **温度实验方案**：在 40°C 至 90°C 范围内扫描（跨度 50°C），历时 16 分钟，并搭建了专用实验装置以在 BSS-2 运行期间控制温度。
- **表征方法**：每种条件下分析 100 次随机矩阵-向量乘法，将误差分解为逐神经元的均值/标准差误差、逐神经元均值误差随温度的变化，以及误差-信号比（ESR，定义为误差绝对值与信号幅度绝对值之比）随温度与标定点的变化。
- **四种缓解策略对比**：无噪声量化感知训练（QAT，在温度漂移下表现最弱）；标准含噪训练（相较无噪 QAT 有明显改善）；方差感知含噪训练（VANT，相较标准含噪训练有额外改善，但作者自述其幅度“轻微”，且出现在工作温度偏离标定点时）；硬件在环训练结合温度感知标定（保持精度效果最强，在 40°C、60°C、80°C 三个标定点下均进行了评测）。
- **核心发现**：ESR 随工作温度升高而上升，论文将其主要归因于系统性（而非随机性）非理想特性——这一区分决定了哪一类缓解手段真正有效，因为只有基于标定的方法能针对系统性/偏置效应，而噪声注入训练主要针对随机噪声。

## Why it matters / what's new (EN)

Analog in-memory/neuromorphic compute is repeatedly cited in this domain's sources.yaml (and in prior entries such as RACE-AIMC and the FALCON in-memory MTJ paper) as an energy-efficiency path for edge AI, but those entries have so far discussed noise robustness in the abstract, or on simulated accelerator models. This is a real fabricated chip, temperature-swept under controlled conditions, isolating a variable — ambient/operating temperature — that a lab bench measurement at a fixed calibration point would not surface, and that matters directly for edge deployment (a device is not always at the temperature it was calibrated at). The systematic-vs-stochastic distinction is the useful takeaway for anyone building on analog edge accelerators: it says which class of fix (calibration vs. noise-robust training) actually addresses the dominant failure mode.

## Why it matters / what's new (ZH)

模拟域内存内计算/神经形态计算在该领域的 sources.yaml 中被反复提及（此前收录的 RACE-AIMC、FALCON 忆阻式 MTJ 等条目也是如此），被视为边缘 AI 能效路径之一，但此前的条目大多在抽象层面讨论噪声鲁棒性，或基于仿真的加速器模型。本文则是在真实流片芯片上、在受控条件下进行温度扫描，分离出了一个固定标定点下的实验室测量无法揭示的变量——环境/工作温度——而这一变量对边缘部署具有直接意义（设备并不总是处于其标定时的温度）。「系统性 vs 随机性」这一区分，对任何基于模拟域边缘加速器进行开发的人而言都具有实用价值：它指明了哪一类修复手段（标定 vs. 抗噪训练）真正针对了主导的失效模式。

## Images

![Internal structure of the BSS-2 ASIC: input drivers, neurons and synapses | BSS-2 ASIC 内部结构：输入驱动、神经元与突触](https://arxiv.org/html/2609.15527v1/bss2-f1.png)
