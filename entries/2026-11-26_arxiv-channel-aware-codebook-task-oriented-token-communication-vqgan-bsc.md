---
id: 2026-11-26_arxiv-channel-aware-codebook-task-oriented-token-communication-vqgan-bsc
date_published: 2026-11-19
date_found: 2026-11-26
technology: edge-ai
type: academic-paper
title_en: "Channel-Aware Codebook Design for Task-Oriented Token Communication Over Wireless Networks (VQGAN labels, simulated binary symmetric channel)"
title_zh: "无线网络中面向任务的 Token 通信的信道感知码本设计（VQGAN 标签，仿真二元对称信道）"
url: "https://arxiv.org/abs/2611.26038"
source_quality: full
topics: [token-communication, vqgan, codebook, bit-error-rate, lpips, object-detection]
topic_primary: task-oriented-communication
topics_secondary: [edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

The paper (Zhejiang University) studies how the bit labels given to the codewords of a pretrained vector-quantised codebook affect image transmission when token indices are sent over a noisy wireless link. A frozen VQGAN (K = 16384 codewords, 14-bit labels) turns each image into a grid of token indices, each sent as a 14-bit label; the receiver maps labels back to codewords and decodes. The proposed channel-aware codebook (CAC) only reorders the labels, so the error-free reconstruction and the payload are unchanged.

Link: a simulated binary symmetric channel with independent bit errors at BER values of 0.001, 0.005 and 0.01 during design, and up to 0.03 in evaluation. No real radio is involved.

The labels are organised as a prefix (group) plus a suffix (position in group); an offline local search alternates prefix and suffix swaps to minimise expected LPIPS of the decoded image averaged over the design BERs, with candidates screened and confirmed on paired batches under a fixed decoder-call budget (4.8x10^5). The result is deployed as static lookup tables with no retraining.

## Summary (ZH)

论文（浙江大学）研究：当 token 索引经噪声无线链路传输时，预训练向量量化码本中各码字所分配的比特标签如何影响图像传输。冻结的 VQGAN（K = 16384 个码字，14 比特标签）把每幅图像变为 token 索引网格，每个索引以 14 比特标签发送；接收端将标签映射回码字并解码。所提出的信道感知码本（CAC）仅对标签重新排序，因此无差错重建与载荷均不变。

所经链路：仿真的二元对称信道，比特错误独立；设计时 BER 取 0.001、0.005 和 0.01，评估时最高至 0.03。不涉及真实无线电。

标签被组织为前缀（组）加后缀（组内位置）；离线局部搜索交替进行前缀与后缀交换，以最小化在设计 BER 上平均的解码图像期望 LPIPS，候选在配对批次上筛选并确认，解码器调用预算固定（4.8x10^5）。结果以静态查找表部署，无需重新训练。

## Key technical points (EN)

- Setup: ImageNet f16 VQGAN, 32 groups of 512 codewords; 1024 ImageNet training images, 256 for checkpoint selection, 2048 COCO val2017 test images; images padded to 256x256 giving 256 tokens and a 3584-bit payload.
- Metrics: LPIPS (AlexNet) for reconstruction; a pretrained Faster R-CNN reports AP on the reconstructed images as the downstream task.
- At BER 0, all methods give LPIPS 0.1505 and AP 18.15.
- At BER 0.01: LPIPS native 0.2318, random swap 0.2313, CAC 0.2033 (12.3% lower than native; 4.5% lower than the Kutay-Yener assignment adaptation at 0.2129); AP native 12.14, CAC 13.86 (+1.72 points, 14.1%).
- At BER 0.03: CAC LPIPS 0.3178 and AP 6.02, versus native 0.4168 and 3.08.

## Key technical points (ZH)

- 设置：ImageNet f16 VQGAN，32 组、每组 512 个码字；1024 张 ImageNet 训练图、256 张用于检查点选择、2048 张 COCO val2017 测试图；图像填充至 256x256，得到 256 个 token、3584 比特载荷。
- 指标：用 LPIPS（AlexNet）衡量重建质量；用预训练 Faster R-CNN 在重建图像上报告 AP，作为下游任务。
- BER 为 0 时，各方法 LPIPS 均为 0.1505、AP 为 18.15。
- BER 为 0.01 时：LPIPS 原始标签 0.2318、随机交换 0.2313、CAC 0.2033（比原始低 12.3%，比 Kutay-Yener 分配适配方法的 0.2129 低 4.5%）；AP 原始 12.14、CAC 13.86（+1.72 点，14.1%）。
- BER 为 0.03 时：CAC 的 LPIPS 为 0.3178、AP 为 6.02，原始标签分别为 0.4168 和 3.08。

## Why it matters / what's new (EN)

It targets the bit-level layer of token communication: when the transmitted unit is a codebook index and the objective is a downstream task (detection AP), label assignment alone changes robustness at no payload or retraining cost. The evidence is limited to a simulated binary symmetric channel with independent bit errors and one frozen tokenizer, so it says nothing yet about real Wi-Fi, Bluetooth or cellular error patterns.

## Why it matters / what's new (ZH)

它针对 token 通信的比特层：当传输单元是码本索引、目标是下游任务（检测 AP）时，仅靠标签分配就能在不增加载荷、无需重新训练的情况下改变鲁棒性。证据仅限于仿真的独立比特错误二元对称信道和一个冻结的分词器，尚不能说明真实 Wi-Fi、蓝牙或蜂窝的错误模式。
