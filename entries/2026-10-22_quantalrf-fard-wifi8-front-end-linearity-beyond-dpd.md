---
id: 2026-10-22_quantalrf-fard-wifi8-front-end-linearity-beyond-dpd
date_published: 2026-10-18
date_found: 2026-10-22
technology: wifi
type: industry-news
title_en: "QuantalRF's Dr Ali Fard on Wi-Fi 8 and AI at the edge: linearity belongs in the RF front-end amplifier, not in a predistortion loop (Wi-Fi NOW report)"
title_zh: "QuantalRF 的 Ali Fard 博士谈 Wi-Fi 8 与边缘 AI：线性度应内置于射频前端放大器，而非依赖预失真环路（Wi-Fi NOW 报道）"
url: "https://wifinowglobal.com/resources/the-predistortion-pioneer-who-says-wi-fi-has-outgrown-dpd-quantalrfs-dr-ali-fard-speaks-out-on-wi-fi-8-and-ai-at-the-edge/"
source_quality: full
topics: [RF front end, digital predistortion, EVM, Wi-Fi 8, 802.11bn, power amplifier, wearables, energy per bit]
topic_primary: wifi8-uhr
topics_secondary: [energy-power-save]
novelty_score: 3
---

## Summary (EN)

This is a Wi-Fi NOW Resource Centre report, dated 18 October 2026 and written by Claus Hetting, based on the presentation "Enabling Future Wireless with Innovations in RF" given by Dr Ali Fard (CEO and CTO of QuantalRF, a CMOS SOI front-end company) at WiFi NOW World Congress Europe Online 2026. The figures below are the speaker's and the report's, not independent measurements.

The talk argues that Wi-Fi RF front ends have not kept up with signal-quality requirements and that digital predistortion (DPD) cannot keep scaling. It frames three asks of the front end: cleaner signals, cheaper bits (energy per bit, for battery-powered AI devices that send more data than they receive) and simpler radios (Wi-Fi 8 changes channel, width and power state more often, so each correction that must be retrained adds cost and risk). The report quotes data points: Wi-Fi 7 tolerates half the error vector magnitude (EVM) of Wi-Fi 5, so the front end itself needs to be around 7 dB cleaner (a -45 dB front end totals -38.8 dB and passes, while -40 dB totals -37.0 dB and fails); the rated output power of a Wi-Fi 7 mobile front-end module at its top data rate falls from 19 dBm (Wi-Fi 4) to 14.5 dBm, which the report says in theory means 30 to 40 percent less range; and efficiency at the top rate for a front end with about 33 percent saturation efficiency drops from 11.1 to 7.6 percent even with DPD. At 320 MHz a DPD loop needs about 1 GHz of receiver bandwidth awake while training and must be retrained per condition. Using the Collatz conjecture as an analogy for a feedback loop, the speaker presents simulations in which the loop reaches its best answer after about 13 iterations but keeps going and ends 10 dB worse, with packets at identical average power drifting up to 11 dB from their best result.

For AI glasses and other body-worn devices the report cites a 10 to 20 dB SNR cost from a person in the path (a 15 dB loss forcing about five modulation steps, from 600 Mbps at 1024-QAM/80 MHz to 144-216 Mbps at 16-QAM) and a wearables maker's statement that each 50 mW saved is worth about one degree Celsius. QuantalRF's stated answer is to put adaptive control and sensing next to the amplifier on one die: its QWX27104 is said to draw the same current at 80, 160 and 320 MHz within 2 percent, so a 320 MHz channel delivers half the energy per bit of 160 MHz; the second generation reused six coefficient sets, extracted once at 160 MHz, across 5.18 to 7.055 GHz and 20 to 320 MHz at a cost of no more than 0.4 dB, holding -51 to -53 dB EVM at 20 MHz against -37 to -42 dB for a GaAs reference, with 3.9 dB more clean output power at 80 MHz. A third generation with no correction loop is described as launching next year, with customer sampling expected around the end of Q1 2027 and targets of twice the amplifier efficiency and 3.5 dB more output power, which the report notes are development targets not yet proven in customers' products. The talk closes with four questions for buyers of a front end.

## Summary (ZH)

这是 Wi-Fi NOW 资源中心的报道，日期为 2026 年 10 月 18 日，作者 Claus Hetting，基于 QuantalRF（一家 CMOS SOI 前端公司）CEO 兼 CTO Ali Fard 博士在 WiFi NOW World Congress Europe Online 2026 上的演讲《Enabling Future Wireless with Innovations in RF》。下文数字出自演讲者和该报道，并非独立测量结果。

演讲认为 Wi-Fi 射频前端没有跟上信号质量要求，数字预失真（DPD）无法继续扩展。他对前端提出三点要求：更干净的信号、更低成本的比特（针对上传多于下载的电池供电 AI 设备的每比特能耗）以及更简单的射频（Wi-Fi 8 更频繁地切换信道、带宽与功率状态，每一项需重新训练的校正都会增加成本与风险）。报道引用的数据包括：Wi-Fi 7 允许的误差矢量幅度（EVM）仅为 Wi-Fi 5 的一半，因此前端本身需要约 7 dB 的改善（-45 dB 的前端合计 -38.8 dB 可通过，-40 dB 合计 -37.0 dB 则不通过）；Wi-Fi 7 移动前端模块在最高速率下的额定输出功率从 Wi-Fi 4 的 19 dBm 降至 14.5 dBm，报道称理论上意味着 30%–40% 的距离损失；饱和效率约 33% 的前端在最高速率下的效率即使有 DPD 也从 11.1% 降至 7.6%。在 320 MHz 下，DPD 环路训练时需保持约 1 GHz 的接收带宽，并需针对每种条件重新训练。演讲者借助 Collatz 猜想类比反馈环路，给出仿真：环路在约 13 次迭代后达到最佳结果，却继续运行并最终差 10 dB，平均功率相同的数据包与其最佳结果之间偏差最多达 11 dB。

对于 AI 眼镜等穿戴设备，报道引用人体处于路径中会带来 10–20 dB 的信噪比代价（15 dB 损耗迫使调制降低约五级，从 80 MHz、1024-QAM 下的 600 Mbps 降到 16-QAM 下的 144–216 Mbps），以及一家穿戴设备厂商所述“每节省 50 mW 约相当于降低 1 摄氏度”。QuantalRF 所述方案是把自适应控制与传感放在同一裸片上的放大器旁：其 QWX27104 据称在 80、160、320 MHz 下电流相差在 2% 以内，因此 320 MHz 信道的每比特能耗是 160 MHz 的一半；第二代在 160 MHz 下一次性提取六组系数，并在 5.18–7.055 GHz、20–320 MHz 范围内复用，代价不超过 0.4 dB，在 20 MHz 下保持 -51 至 -53 dB 的 EVM，而 GaAs 参考前端为 -37 至 -42 dB，在 80 MHz 下多出 3.9 dB 的干净输出功率。第三代不含校正环路，据称明年推出，客户送样预计在 2027 年第一季度末前后，目标为放大器效率翻倍、输出功率增加 3.5 dB；报道指出这些是尚未在客户产品中得到验证的开发目标。演讲最后给出采购前端时应问的四个问题。

## Key technical points (EN)

- Source: Wi-Fi NOW Resource Centre report (2026-10-18) on a WWC Europe Online 2026 talk by QuantalRF's Dr Ali Fard; vendor-speaker figures, not independently measured.
- Stated problem: Wi-Fi 7 EVM allowance is half that of Wi-Fi 5; the front end needs about 7 dB better EVM; rated top-rate output power fell from 19 dBm (Wi-Fi 4) to 14.5 dBm (Wi-Fi 7) in the cited module; efficiency at top rate fell from 11.1% to 7.6% with DPD.
- DPD at 320 MHz needs about 1 GHz of receiver bandwidth during training and per-condition retraining; simulation shows non-guaranteed convergence (best result at about 13 iterations, ending 10 dB worse).
- Wi-Fi 8 (802.11bn) is described with targets of 25% more throughput under poor signal, 25% lower latency for the slowest 5% of packets and 25% fewer dropped packets, with certification expected from late 2027, and more frequent changes of channel, width and power state.
- Stated vendor results: same current at 80/160/320 MHz within 2%; one frozen set of six coefficients across 5.18-7.055 GHz and 20-320 MHz within 0.4 dB; third generation with no loop is a target (sampling around end of Q1 2027).

## Key technical points (ZH)

- 来源：Wi-Fi NOW 资源中心对 QuantalRF 的 Ali Fard 博士在 WWC Europe Online 2026 上演讲的报道（2026-10-18）；数据来自厂商演讲者，非独立测量。
- 所述问题：Wi-Fi 7 的 EVM 容限是 Wi-Fi 5 的一半；前端需要约 7 dB 的 EVM 改善；所引模块最高速率的额定输出功率从 19 dBm（Wi-Fi 4）降到 14.5 dBm（Wi-Fi 7）；最高速率下的效率在有 DPD 时从 11.1% 降到 7.6%。
- 320 MHz 的 DPD 训练需约 1 GHz 的接收带宽并按条件重新训练；仿真显示收敛无法保证（约 13 次迭代时最佳，最终差 10 dB）。
- Wi-Fi 8（802.11bn）被描述为在弱信号下吞吐量提升 25%、最慢 5% 数据包的时延降低 25%、丢包减少 25%，认证预计从 2027 年末开始，并会更频繁地切换信道、带宽与功率状态。
- 厂商所述结果：80/160/320 MHz 下电流相差在 2% 以内；一组冻结的六套系数覆盖 5.18–7.055 GHz 与 20–320 MHz，代价在 0.4 dB 以内；不含环路的第三代为目标（送样约在 2027 年第一季度末）。

## Why it matters / what's new (EN)

Wi-Fi NOW's perspective paragraph notes that most Wi-Fi 8 conversations focus on the MAC-layer features behind ultra high reliability; this report looks at the analogue end of the radio and at body-worn, battery-powered devices, and the report's own commentary says front-end linearity deserves to be treated as a system-level reliability challenge for a standard that switches channel, width and power state more often. All performance figures are vendor claims from a conference talk, and the third-generation numbers are explicitly targets. QuantalRF's QWX27104 front-end module is also covered in 2026-09-04_quantalrf-dpd-efficient-wifi78-fem.

## Why it matters / what's new (ZH)

Wi-Fi NOW 的观点段落指出，多数 Wi-Fi 8 讨论聚焦于超高可靠性背后的 MAC 层特性；本报道关注射频的模拟端以及电池供电的穿戴设备，报道自身的评论认为，对于更频繁切换信道、带宽与功率状态的标准，前端线性度应被视为系统级的可靠性挑战。所有性能数字均为会议演讲中的厂商说法，第三代数据明确属于目标值。QuantalRF 的 QWX27104 前端模块另见 2026-09-04_quantalrf-dpd-efficient-wifi78-fem。
