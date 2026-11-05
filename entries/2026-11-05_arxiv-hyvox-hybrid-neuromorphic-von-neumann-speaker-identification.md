---
id: 2026-11-05_arxiv-hyvox-hybrid-neuromorphic-von-neumann-speaker-identification
date_published: 2026-11-01
date_found: 2026-11-05
technology: edge-ai
type: academic-paper
title_en: "HyVox: Hybrid Neuromorphic-von Neumann Open-Set Speaker Identification on a Xylo Audio 3 Chip and an STM32 Host"
title_zh: "HyVox：基于 Xylo Audio 3 芯片与 STM32 主机的神经形态-冯·诺依曼混合开集说话人识别"
url: "https://arxiv.org/abs/2611.03735"
source_quality: full
topics: [neuromorphic, spiking-neural-network, speaker-identification, Xylo-Audio-3, STM32L476, low-power-voice]
topic_primary: edge-ai-silicon
topics_secondary: [home-ai-assistant]
novelty_score: 3
---

## Summary (EN)

HyVox is a two-processor system for open-set speaker identification under tight energy budgets. The workload is split at the speaker embedding: a neuromorphic processor (Xylo Audio 3) computes the embedding with sparse event-driven spiking computation, while an STM32 microcontroller holds the speaker gallery, scores queries by cosine similarity, rejects unknown speakers, and enrols new users by writing a prototype with no weight update. The only interface between the two is the 32 spike counts of a spiking embedding extractor (SEE), sent over UART once per three-second window.

On the chip, a hierarchical temporal abstraction (HTA) spiking backbone learns a synaptic time constant per leaky integrate-and-fire neuron and allocates 832 neurons across fast, medium and slow timescales. To fit the chip's synapse and integer budgets, the backbone is compressed 6.5x to 29.0k synapses, trained for integer bit-shift dynamics, and fine-tuned with chip-accurate spiking training (CAST), which trains through a differentiable replica of the chip's integer neuron update; the authors say CAST doubles top-1 accuracy of the mapped backbone on unseen speakers. On 20 Common Voice households of unseen speakers, HyVox reaches 99.6% top-1 and 5.5% rejection EER with 2 members and 94.9% and 13.2% with 20 members. Each inference on a 3-second window takes 0.96 s and 1.63 mJ of dynamic energy.

## Summary (ZH)

HyVox 是一个面向严格能耗预算的开集说话人识别双处理器系统。工作负载在说话人嵌入处切分：神经形态处理器（Xylo Audio 3）用稀疏事件驱动的脉冲计算得到嵌入；STM32 微控制器保存说话人库，用余弦相似度对查询打分，拒识未知说话人，并通过写入原型（无需权重更新）注册新用户。两者之间唯一的接口是脉冲嵌入提取器（SEE）的 32 个脉冲计数，每个三秒窗口经 UART 发送一次。

芯片上的层次时间抽象（HTA）脉冲骨干网为每个漏积分发放（LIF）神经元学习一个突触时间常数，把 832 个神经元分配到快、中、慢三个时间尺度。为适配芯片的突触与整数预算，骨干网被压缩 6.5 倍至 29.0k 个突触，按整数移位动力学训练，并用芯片精确脉冲训练（CAST）微调——CAST 通过芯片整数神经元更新的可微副本进行训练；作者称 CAST 使映射后骨干网在未见说话人上的 top-1 准确率翻倍。在 20 个 Common Voice 家庭的未见说话人上，HyVox 在 2 位成员时达到 99.6% top-1 与 5.5% 拒识 EER，20 位成员时为 94.9% 与 13.2%。对 3 秒窗口，每次推理耗时 0.96 s，动态能耗 1.63 mJ。

## Key technical points (EN)

- **Baseline comparison (authors' figures)**: 42% lower latency than the fastest embedded ANN baseline, and 13.5x less dynamic and 5.8x less total energy than the most energy-efficient one; the network deployed on the chip is reported to match its trained model.
- **Deployment steps after pretraining**: synapse compression to the chip's weight budget, quantization-aware training for integer bit-shift dynamics, then CAST fine-tuning under the chip's event limits; evaluation on held-out VoxCeleb1 speakers.
- **Hybrid manager**: firmware schedules a read at the end of each window and sets enrol or identify mode; one decision moves a fixed small number of bytes per window regardless of on-chip network size.
- **Stated scope**: household gallery sizes up to 20 members; accuracy and rejection EER degrade as the gallery grows.

## Key technical points (ZH)

- **与基线对比（作者数据）**：延迟比最快的嵌入式 ANN 基线低 42%；动态能耗比最节能的基线低 13.5 倍，总能耗低 5.8 倍；据报告部署到芯片上的网络与其训练模型一致。
- **预训练后的部署步骤**：先压缩突触至芯片权重预算，再做面向整数移位动力学的量化感知训练，然后在芯片事件限制下做 CAST 微调；在留出的 VoxCeleb1 说话人上评测。
- **混合管理器**：固件在每个窗口结束时调度读取并设置注册或识别模式；每次决策每窗口传输的字节数固定且很少，与片上网络规模无关。
- **论文所述范围**：家庭库规模最多 20 位成员；随库增大，准确率下降、拒识 EER 上升。

## Why it matters / what's new (EN)

The entry records a worked example of partitioning an always-on voice task across a neuromorphic chip and a conventional MCU, with the decision logic and user enrolment kept on the MCU, and with measured on-device latency and energy against embedded ANN baselines. This is relevant to home voice devices where the speaker-ID front end must run on small energy budgets. Caveats: energy and latency comparisons are the authors', the dataset is Common Voice households rather than field recordings, and it is a v1 preprint.

## Why it matters / what's new (ZH)

本条目记录了把常开语音任务切分到神经形态芯片与常规 MCU 上的一个完整实例：决策逻辑与用户注册留在 MCU，并给出了相对嵌入式 ANN 基线的实测端侧延迟与能耗。这与必须在极小能耗预算下运行说话人识别前端的家用语音设备相关。局限：能耗与延迟对比由作者给出，数据为 Common Voice 家庭划分而非现场录音，且为 v1 预印本。

## Images

None.
