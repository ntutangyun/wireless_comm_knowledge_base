---
id: 2026-05-04_arxiv-respirfi-respiratory-wifi-csi
date_published: 2026-04-22
date_found: 2026-05-04
type: academic-paper
title_en: "RespirFi — High-Fidelity and Location-Robust Respiratory Waveform Monitoring with Single-Antenna WiFi"
title_zh: "RespirFi —— 单天线 WiFi 下高保真且位置鲁棒的呼吸波形监测"
url: "https://arxiv.org/abs/2604.20397"
source_quality: full
topics: [WiFi-sensing, 802.11bf, PHY-layer]
topic_primary: sensing-csi
topics_secondary: []
novelty_score: 4
---

## Summary (EN)

Wang et al. (arXiv 2604.20397, posted 22 April 2026) propose **RespirFi**, a contactless respiratory monitoring system that recovers high-fidelity respiratory waveforms from Channel State Information (CSI) on a **single-antenna** commodity WiFi device. The contribution sits in the WiFi-sensing line that this KB has been tracking (`arxiv-multiband-passive-sensing`, `arxiv-wukong-neuro-wideband-sensing`, `arxiv-wirssi-rssi-only-wifi-sensing`), but it removes the multi-antenna assumption that most CSI-respiration work has implicitly relied on — which is the assumption that breaks consumer deployments where the AP / sensor sees only one usable spatial stream.

The system is built on three engineering pieces. First, a **human-reflection model** that links CSI variation to subcarrier frequency and target spatial location, giving the design a physics-grounded prior rather than a black-box neural mapping. Second, an **adaptive subcarrier-selection and waveform-alignment** stage that picks the subcarriers whose phase response is dominated by the breathing-induced reflection (rather than by clutter or hardware drift), then aligns waveform trends across time so the recovered waveform stays consistent regardless of where the user is in the room. Third, an **inter-subcarrier inhalation/exhalation discriminator** that uses the difference in CSI response across subcarriers to label breathing phase — a signal that single-antenna systems would otherwise confuse.

Validation is on commodity WiFi hardware and across user positions where prior single-antenna methods degrade sharply. RespirFi outperforms baselines on the clinically-relevant metrics (rate accuracy, waveform fidelity, phase identification). The takeaway is that the **single-antenna constraint** is solvable with the right combination of physics-informed feature selection and per-subcarrier behaviour, opening the door to respiration sensing on phones, single-radio APs, and embedded health devices.

## Summary (ZH)

Wang 等（arXiv 2604.20397，2026 年 4 月 22 日提交）提出 **RespirFi**：一个仅使用商用 WiFi 设备**单天线** CSI 即可恢复高保真呼吸波形的非接触式呼吸监测系统。该工作属于本 KB 长期追踪的 WiFi 感知线（`arxiv-multiband-passive-sensing`、`arxiv-wukong-neuro-wideband-sensing`、`arxiv-wirssi-rssi-only-wifi-sensing`），但其去除了既有 CSI 呼吸研究普遍隐含的"多天线"假设 —— 这是消费场景部署的关键限制，因为 AP / 感知器往往只有一条可用空间流。

系统由三块工程组成。其一，**人体反射模型**：将 CSI 变化与子载波频率以及目标空间位置关联起来，从而以物理先验取代黑盒神经映射。其二，**自适应子载波选择与波形对齐**：挑选相位响应主要受呼吸反射主导（而非杂波或硬件漂移）的子载波，并在时域上对齐波形趋势，使恢复出的波形对用户位置鲁棒。其三，**子载波间吸气 / 呼气判别器**：利用各子载波 CSI 响应之间的差异给呼吸相位打标签 —— 这是单天线系统传统上易混淆的信号。

实验在商用 WiFi 硬件上、覆盖既有单天线方法大幅退化的多个用户位置进行；RespirFi 在临床关联指标（速率精度、波形保真度、相位识别）上均优于基线。结论是：**单天线约束**可通过物理约束特征选择 + 逐子载波行为来解开，进而把呼吸感知打开到手机、单射频 AP、嵌入式健康设备等场景。

## Key technical points (EN)

- Single-antenna constraint — explicitly engineered, not assumed multi-antenna.
- Human-reflection model linking CSI variation to subcarrier and spatial location.
- Adaptive subcarrier selection: keep ones dominated by breathing reflection.
- Waveform-trend alignment for location-robust waveform reconstruction.
- Inter-subcarrier CSI difference → reliable inhalation/exhalation labeling.
- Evaluated on commodity WiFi (no special radio).

## Key technical points (ZH)

- 显式工程化"单天线"约束（而非假设多天线）。
- 人体反射模型：将 CSI 变化与子载波 + 空间位置关联。
- 自适应子载波选择：保留呼吸反射主导的那几条。
- 波形趋势对齐：实现位置鲁棒的波形恢复。
- 子载波间 CSI 差分 → 可靠的吸气 / 呼气标注。
- 商用 WiFi 验证，无需专用射频。

## Why it matters / what's new (EN)

Most CSI-respiration prior art (and the multiband-passive-sensing line tracked in `arxiv-multiband-passive-sensing`) leans on multiple antennas to suppress non-target reflections. RespirFi shows that with the right physics prior + per-subcarrier reasoning, **commodity single-antenna devices** are enough — which removes the largest practical blocker to deploying respiration sensing on phones, single-radio APs, and health-IoT modules. It also strengthens the more general thesis from the SSL Wi-Fi sensing tutorial entry (`arxiv-ssl-wifi-sensing-tutorial`) that the bottleneck for contactless health is **representation quality**, not radio cost.

## Why it matters / what's new (ZH)

既有的 CSI 呼吸感知（包括本 KB 跟踪的 `arxiv-multiband-passive-sensing` 线）多依赖多天线来抑制非目标反射。RespirFi 证明：**有了正确的物理先验 + 逐子载波推理，商用单天线设备就够用** —— 这清除了把呼吸感知部署到手机、单射频 AP、健康 IoT 模组的最大现实阻碍。同时也强化了 `arxiv-ssl-wifi-sensing-tutorial` 中那条更一般论点：非接触健康的瓶颈在**表征质量**而非射频成本。
