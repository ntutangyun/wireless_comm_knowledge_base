---
id: 2026-06-15_arxiv-storm-rj-5g-uplink-jamming
date_published: 2026-06-12
date_found: 2026-06-15
type: academic-paper
technology: cellular
title_en: "STORM-RJ: Real-Time Uplink Jamming from Within 5G Networks (When the UE Turns Adversary)"
title_zh: "STORM-RJ：源自 5G 网络内部的实时上行干扰（当 UE 成为攻击者）"
url: "https://arxiv.org/abs/2606.14465"
source_quality: full
topics: [5G-NR, security, jamming, PUSCH, HARQ, SDR, DCI]
topic_primary: cellular-security
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
Alaimo, Dino, Tinnirello and Garlisi (arXiv 2606.14465, submitted 12 June 2026) present **STORM-RJ**, a real-time *reactive* uplink jamming attack on 5G NR that originates from inside the network: a compromised UE with a backdoor that extracts decoded **Downlink Control Information (DCI) — specifically the UL-Grant** — and forwards the scheduling decision (allocated Resource Blocks, center frequency, timing) to an external SDR jammer. Knowing exactly which RBs the victim will use and when (the **K₂** gap between grant and transmission, 4 ms in their setup), the jammer aligns interference precisely with the scheduled PUSCH burst — a far more efficient and stealthy attack than broadband barrage jamming.

The core engineering contribution is meeting 5G's microsecond timing budget. Naive high-level retuning of the analog local oscillator via the UHD API takes ~3 ms (2867 µs API delay + ~67 µs PLL lock), which misses the reaction window. STORM-RJ instead fixes the analog LO at init and applies per-slot **digital frequency shifts via the baseband NCO**, achieving ~20 µs adjustments on a USRP-B210 — fast enough to track per-slot frequency hopping and dynamic RB allocation.

On a non-isolated lab testbed (srsRAN-4G UE, srsRAN-Project gNB with PUSCH frequency hopping, Open5GS core, USRP B210/N310, n2 band, 20 MHz, μ=0, 106 RB), at maximum intensity (J_idle = 1 ms) uplink throughput collapsed to **0.73 Mbit/s — a 66.9% reduction**, with permanent HARQ failure rising from 12.4% (15 ms) to 73.4% (1 ms). A clear threshold appears around J_idle ≈ 3 ms: above it HARQ soft-combining absorbs the interference, below it permanent failures exceed recovery capacity. The paper proposes detection via HARQ-pattern anomaly analysis (frequent retransmissions despite high RSSI imply interference, not fading), ML classifiers on PER/throughput anomalies, and PHY-layer RF-fingerprinting of the SDR jammer (IQ imbalance, phase noise, EVM).

## Summary (ZH)
Alaimo、Dino、Tinnirello 与 Garlisi（arXiv 2606.14465，2026 年 6 月 12 日提交）提出 **STORM-RJ**——一种源自网络内部的 5G NR 实时*反应式*上行干扰攻击：被植入后门的 UE 提取解码后的**下行控制信息（DCI），特别是上行授权（UL-Grant）**，并将调度决策（分配的资源块 RB、中心频率、时序）转发给外部 SDR 干扰机。由于精确知道受害者将使用哪些 RB 及时刻（授权与发送之间的 **K₂** 间隔，实验中为 4 ms），干扰机可将干扰与已调度的 PUSCH 突发精确对齐——比宽带压制式干扰更高效、更隐蔽。

核心工程贡献是满足 5G 的微秒级时序预算。通过 UHD API 对模拟本振做高层重调谐约需 3 ms（2867 µs API 时延 + 约 67 µs PLL 锁定），错过反应窗口。STORM-RJ 改为在初始化时固定模拟 LO，并通过基带 **NCO 逐 slot 施加数字频移**，在 USRP-B210 上实现约 20 µs 的调整——足以跟踪逐 slot 跳频与动态 RB 分配。

在非隔离实验台（srsRAN-4G UE、支持 PUSCH 跳频的 srsRAN-Project gNB、Open5GS 核心、USRP B210/N310、n2 频段、20 MHz、μ=0、106 RB）上，最高强度（J_idle = 1 ms）时上行吞吐跌至 **0.73 Mbit/s——下降 66.9%**，HARQ 永久失败率从 15 ms 时的 12.4% 升至 1 ms 时的 73.4%。在 J_idle ≈ 3 ms 处出现明显阈值：高于该值 HARQ 软合并可吸收干扰，低于该值永久失败超出恢复能力。论文提出的检测手段包括 HARQ 模式异常分析（高 RSSI 下频繁重传意味干扰而非衰落）、对 PER/吞吐异常的 ML 分类器，以及对 SDR 干扰机的 PHY 层射频指纹识别（IQ 失衡、相位噪声、EVM）。

## Key technical points (EN)
- **Insider reactive jamming**: backdoored UE leaks decoded DCI UL-Grant to an external SDR jammer — interference is aligned to the victim's exact PUSCH RBs/timing, not broadband.
- **Microsecond retuning**: analog-LO retune (~3 ms via UHD API) is too slow; per-slot baseband NCO digital shift (~20 µs) meets the K₂=4 ms reaction window and tracks frequency hopping.
- **Testbed**: srsRAN-4G UE + srsRAN-Project gNB (PUSCH hopping) + Open5GS, USRP B210/N310, n2 band, 20 MHz, μ=0, 106 RB, iPerf UDP UL.
- **Impact**: J_idle=1 ms → 0.73 Mbit/s UL (−66.9%); permanent HARQ failure 12.4%→73.4% as J_idle drops 15→1 ms.
- **Threshold**: J_idle ≈ 3 ms — above it HARQ soft-combining hides the attack; below it failures cascade.
- **Detection proposed**: HARQ-retransmission-vs-RSSI anomaly, ML on PER/throughput, SDR RF-fingerprinting (IQ imbalance/phase-noise/EVM), temporal-spectral correlation of slot-aligned interference.
- **Novelty vs prior jamming**: dynamic per-slot bandwidth+frequency adaptation (not fixed-allocation), and first demonstration DSP frequency-shifting meets NR's µs reactive-jamming constraint.

## Key technical points (ZH)
- **内部反应式干扰**：被植入后门的 UE 将解码的 DCI 上行授权泄露给外部 SDR 干扰机——干扰对齐受害者确切的 PUSCH RB/时序，而非宽带压制。
- **微秒级重调谐**：模拟 LO 重调（经 UHD API 约 3 ms）太慢；逐 slot 基带 NCO 数字频移（约 20 µs）满足 K₂=4 ms 反应窗口并跟踪跳频。
- **实验台**：srsRAN-4G UE + srsRAN-Project gNB（PUSCH 跳频）+ Open5GS，USRP B210/N310，n2 频段，20 MHz，μ=0，106 RB，iPerf UDP 上行。
- **影响**：J_idle=1 ms → 上行 0.73 Mbit/s（−66.9%）；J_idle 从 15→1 ms，HARQ 永久失败率 12.4%→73.4%。
- **阈值**：J_idle ≈ 3 ms——高于该值 HARQ 软合并掩盖攻击，低于该值失败级联。
- **检测建议**：HARQ 重传与 RSSI 对照异常、对 PER/吞吐的 ML、SDR 射频指纹（IQ 失衡/相位噪声/EVM）、slot 对齐干扰的时频相关性。
- **相对既有干扰的新颖性**：动态逐 slot 带宽+频率自适应（非固定分配），首次证明 DSP 频移可满足 NR 的微秒级反应式干扰约束。

## Why it matters / what's new (EN)
The `cellular-security` bin tracks 5G/6G attack-surface research (closed-loop security reviews, AI-native security). STORM-RJ adds a concrete, reproducible PHY/MAC insider-threat result: it shows that leaking the UL-Grant turns a cheap SDR into a precise reactive jammer that cuts uplink throughput by two-thirds while staying invisible to RSSI-based monitoring — and that the only thing standing between theory and practice was meeting NR's microsecond retune budget, which the baseband-NCO trick solves. The HARQ-threshold finding (attacks below ~3 ms idle cascade, above it hide) and the proposed HARQ-vs-RSSI detector are directly useful to anyone building 5G intrusion detection. It complements the AI-native 6G security-loop entry (2026-06-09) with a real-hardware attack rather than a survey.

## Why it matters / what's new (ZH)
`cellular-security` 分箱跟踪 5G/6G 攻击面研究（闭环安全综述、AI 原生安全）。STORM-RJ 增加了一个具体、可复现的 PHY/MAC 内部威胁结果：它表明泄露上行授权可把廉价 SDR 变成精确的反应式干扰机，将上行吞吐削减三分之二，同时对基于 RSSI 的监测保持隐形——而理论与实践之间唯一的障碍是满足 NR 的微秒级重调谐预算，基带 NCO 技巧恰好解决了这一点。HARQ 阈值发现（约 3 ms 空闲以下攻击级联、以上则隐藏）与提出的 HARQ-vs-RSSI 检测器对构建 5G 入侵检测者直接有用。它以真实硬件攻击补充了 AI 原生 6G 安全闭环条目（2026-06-09），而非综述。
