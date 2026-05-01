---
id: 2026-05-01_arxiv-multiband-passive-sensing
date_found: 2026-05-01
type: academic-paper
title_en: "802.11bf Multiband Passive Sensing: Reusing Wi-Fi Signaling for Sensing"
title_zh: "802.11bf 多频段被动感知：复用 Wi-Fi 现有信令实现感知"
url: "https://arxiv.org/html/2507.22591v1"
source_quality: full
topics: [802.11bf, WiFi-sensing, PHY-layer]
novelty_score: 4
---

## Summary (EN)

Picazo-Martinez et al. (Jul 2025, IoT-Journal preprint) propose MilaGro, a passive multiband Wi-Fi sensing system that fuses CSI from 5 GHz beacon frames *and* 60 GHz mmWave beamforming-training (TRN-Unit) sequences to detect human presence, motion, and activities indoors. The key claim: a Passive Station (P-STA) that only receives — never transmits — already-emitted standard frames can deliver 95–100% accuracy on common sensing tasks, with no airtime cost and no protocol change.

The architecture is a dual-block CNN. Block 1 preprocesses mmWave Golay-sequence CSI (1D conv → max-pool → dense). Block 2 fuses the mmWave embedding with 5 GHz beacon-frame CSI (52 OFDM subcarriers, BPSK/QPSK) and produces the final classification. Concrete results: indoor presence-monitoring 100% (vs 89% with 5 GHz alone); corridor-movement tracking 94% (vs 85% with 5 GHz alone); through-wall mmWave detection "close to 100%". The 60 GHz beamforming uses 6×6 antenna arrays with 60° beam sweeps.

Mechanism-wise, the contribution is twofold: (a) showing multiband CSI fusion materially beats single-band, and (b) doing it *passively* against frames the AP already transmits — no new IE, no new Action frame, no new Trigger. The MAC layer is unchanged. The novelty is entirely in the receiver-side ML model and the choice of which standard frames to repurpose for sensing.

## Summary (ZH)

Picazo-Martinez 等人（2025 年 7 月，IoT-Journal preprint）提出 MilaGro，一种被动式多频段 Wi-Fi 感知系统，通过融合 5 GHz Beacon 帧的 CSI **以及** 60 GHz 毫米波波束训练（TRN-Unit）序列，实现室内人员存在、运动和活动检测。关键声明是：一种只接收不发送的"被动站点（P-STA）"，仅靠接收已存在的标准帧就能在常见感知任务上达到 95–100% 的准确率，且不消耗空中时间、不修改协议。

架构是双块 CNN。Block 1 对毫米波 Golay 序列 CSI 进行预处理（1D 卷积 → max-pool → 全连接）。Block 2 把毫米波嵌入与 5 GHz Beacon 帧 CSI（52 个 OFDM 子载波，BPSK/QPSK）融合并输出最终分类。具体结果：室内存在监测 100%（5 GHz 单频段为 89%）；走廊运动跟踪 94%（5 GHz 单频段为 85%）；穿墙毫米波检测"接近 100%"。60 GHz 波束成形使用 6×6 阵列，60° 波束扫描。

从机制上看，贡献分两点：（a）展示多频段 CSI 融合显著优于单频段；（b）以被动方式利用 AP 已经发出的帧 —— 不新增 IE、不新增 Action 帧、不新增 Trigger。MAC 层没有改动。新颖性完全集中在接收端的 ML 模型，以及选择把哪些标准帧重用为感知信号。

## Key technical points (EN)

- Multiband fusion: 5 GHz beacon CSI (52 subcarriers) + 60 GHz beamforming-training Golay sequences
- Passive receiver-only operation — no on-the-wire protocol modification
- Dual-block CNN: mmWave preprocessing + 5/60 GHz fusion + classification
- Headline accuracies: 100% (presence in-room), 94% (corridor motion), ~89%→100% improvement over 5 GHz-only on the same scenario
- Hardware: 6×6 60 GHz antenna array, 60° beam sweeps
- Zero airtime overhead — reuses frames already sent for communication / association

## Key technical points (ZH)

- 多频段融合：5 GHz Beacon CSI（52 个子载波）+ 60 GHz 波束训练 Golay 序列
- 仅被动接收 —— 不修改空口协议
- 双块 CNN：毫米波预处理 + 5/60 GHz 融合 + 分类
- 关键准确率：室内存在 100%、走廊运动 94%、相同场景下相对 5 GHz 单频段从 ~89% 提升至 100%
- 硬件：6×6 60 GHz 天线阵列，60° 波束扫描
- 零空中时间开销 —— 复用通信 / 关联中已发出的帧

## Why it matters / what's new (EN)

First entry on multiband-fusion Wi-Fi sensing in this KB. Sets a baseline that future sensing work should be compared against.

A separate, currently unstaked direction would be a transmitter-side hint — for example, an IE in Beacon advertising "this AP transmits 5 GHz beacons plus 60 GHz BFT sequences usable as sensing reference signals" — so that passive sensing receivers know which transmissions to listen to. The MilaGro paper is explicit that it operates without such a hint; the question of whether one should be standardized is left open.

## Why it matters / what's new (ZH)

本 KB 中关于多频段融合 Wi-Fi 感知的首条记录，为后续感知类研究的对比设定了基线。

另一个目前尚未被占用的方向是发送端提示 —— 例如在 Beacon 中加入一个 IE，公告"本 AP 发送 5 GHz Beacon 加 60 GHz BFT 序列，可作为感知参考信号" —— 这样被动感知接收方就知道该侦听哪些发送。MilaGro 论文明确说明其方案不依赖这类提示；是否应当对此进行标准化仍是开放问题。

## Images

![Multiband AP transmits 5 GHz + 60 GHz signals reused by passive STAs | 多频段 AP 发送 5 GHz + 60 GHz 信号，被被动 STA 复用](https://arxiv.org/html/2507.22591v1/x1.png)
![MilaGro dual-block CNN architecture | MilaGro 双块 CNN 架构](https://arxiv.org/html/2507.22591v1/x7.png)
![Indoor people-monitoring scenario and accuracy results | 室内人员监测场景与准确率结果](https://arxiv.org/html/2507.22591v1/x10.png)
