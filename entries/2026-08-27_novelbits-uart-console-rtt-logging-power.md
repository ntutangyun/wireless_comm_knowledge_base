---
id: 2026-08-27_novelbits-uart-console-rtt-logging-power
date_published: 2026-08-25
date_found: 2026-08-27
type: tutorial
technology: bluetooth
title_en: "An idle UART console costs 4.4× the average current of an nRF54L15 BLE beacon: Joulescope measurements put the sleep floor at 153 µA vs 3.4 µA, while SEGGER RTT logging is free"
title_zh: "一个空闲的 UART 控制台让 nRF54L15 BLE 信标平均电流变成 4.4 倍：Joulescope 实测休眠底电流 153 µA 对 3.4 µA，而 SEGGER RTT 日志几乎零代价"
url: "https://novelbits.io/uart-console-vs-rtt-logging-power/"
source_quality: full
topics: [BLE, power-measurement, nRF54L15, RTT, UART, coin-cell, Joulescope, nRF-Connect-SDK]
topic_primary: bt-le
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Novel Bits (Mohammad Afaneh) published a bench measurement on August 25, 2026 quantifying a debug-configuration decision that silently dominates the power budget of low-duty-cycle BLE peripherals: leaving a UART console enabled in shipped firmware. Three identical non-connectable beacon builds were flashed to an nRF54L15 DK (board rev 1.0.0, marked 2026.14) running nRF Connect SDK v3.3.0, differing only in how log output is delivered — no console, SEGGER RTT, or UART console. Current was captured with a Joulescope JS320 at 1 MS/s, with a Power Profiler Kit II used as a cross-check for the sleep-floor readings.

The headline: with a 100 ms advertising interval, the no-console and RTT builds both average **41.8 µA**, while the UART-console build averages **184.7 µA** — **4.4×** the current for firmware doing byte-identical radio work. The sleep floor tells the same story more starkly: **3.4 µA** for no-console and RTT, **153 µA** with the UART console attached and completely idle. Against a nominal 220 mAh coin cell that gap is roughly **seven months of runtime versus seven weeks**, before even accounting for how pulsed radio loads erode a coin cell's usable capacity.

The mechanism is a clock-domain dependency, not UART traffic. A UART receiver must keep a high-frequency clock running in order to detect an incoming start bit, and that clock domain stays up as long as any request for it is outstanding. Because the radio controller shares that clock, a single idle console request is enough to hold the whole SoC out of its deep sleep states — so the cost is paid continuously, whether or not a single character is ever printed. SEGGER RTT, by contrast, is a RAM buffer write with no peripheral clock request behind it; the firmware-side cost measured within instrument noise of zero and produced sleep floors identical to logging being disabled outright.

Methodology details matter for reproducing the numbers: average-current captures ran 8 seconds per build at a 100 ms advertising interval; floor measurements used a 1 second interval with the first 100 ms discarded per Nordic guidance, because the DECD decoupling capacitor's discharge otherwise contaminates short-interval readings and reads as "idle current" that isn't. The debugger was fully detached and the board freshly power-cycled before every capture, and the console pins were remapped away from the debugger interface pins — on the default pin routing the author measured an **additional ~85% penalty** attributable to pull-up paths (a calculated ≈19 kΩ). The nRF54L15's UART receiver-disable feature removes roughly 85% of the console cost, but full disablement remains the only configuration that reaches the 3.4 µA floor. Stated limits: the absolute numbers are specific to the nRF54L15, and while the clock-request mechanism generalises across UART implementations, the figures should not be extrapolated to other SoCs; attached debug sessions inflate every baseline significantly.

## Summary (ZH)

Novel Bits（Mohammad Afaneh）于 2026 年 8 月 25 日发布一项台架实测，量化了一个在低占空比 BLE 外设里悄悄主导功耗预算的调试配置决策：在量产固件里保留使能的 UART 控制台。三个完全相同的不可连接信标固件被烧录到 nRF54L15 DK（板卡版本 1.0.0，丝印 2026.14）上，运行 nRF Connect SDK v3.3.0，唯一差异是日志输出方式——无控制台、SEGGER RTT、UART 控制台。电流用 Joulescope JS320 以 1 MS/s 采样抓取，休眠底电流再用 Power Profiler Kit II 交叉验证。

核心结论：在 100 ms 广播间隔下，无控制台与 RTT 两个版本平均电流均为 **41.8 µA**，而 UART 控制台版本平均 **184.7 µA**——射频工作完全一致的固件，电流却是 **4.4 倍**。休眠底电流的对比更刺眼：无控制台与 RTT 为 **3.4 µA**，而挂着一个完全空闲的 UART 控制台时是 **153 µA**。折算到标称 220 mAh 的纽扣电池，这个差距大约是**七个月与七周**的续航之别，而且还没算脉冲式射频负载对纽扣电池可用容量的侵蚀。

其机理是时钟域依赖，而不是 UART 上真的有数据在跑。UART 接收器必须让高频时钟保持运行才能检测到到来的起始位，只要还有对该时钟域的请求未撤销，它就一直开着。由于射频控制器共享同一时钟，仅仅一个空闲的控制台请求就足以让整颗 SoC 无法进入深度睡眠——因此这份开销是持续支付的，哪怕一个字符都没打印过。相比之下，SEGGER RTT 只是往 RAM 缓冲区写数据，背后没有外设时钟请求；实测其固件侧代价落在仪器噪声范围内，休眠底电流与彻底关闭日志完全一致。

复现这些数字时方法学细节很关键：平均电流每个版本抓取 8 秒、广播间隔 100 ms；底电流测量改用 1 秒间隔并按 Nordic 建议丢弃前 100 ms，否则 DECD 去耦电容的放电会污染短间隔读数，被误读成其实并不存在的"空闲电流"。每次抓取前调试器完全断开、板卡重新上电，并把控制台引脚从调试接口引脚上挪开——在默认引脚布线下，作者测到因上拉通路（推算约 19 kΩ）额外多出 **约 85%** 的代价。nRF54L15 的 UART 接收器关闭特性能消掉大约 85% 的控制台开销，但只有彻底关闭才能回到 3.4 µA 的底线。作者声明的适用边界：绝对数值只对 nRF54L15 成立；时钟请求这一机理在各类 UART 实现上是通用的，但数字不应外推到其他 SoC；调试器保持连接会显著抬高所有基线。

## Key technical points (EN)

- **Rig**: nRF54L15 DK (rev 1.0.0, marked 2026.14), nRF Connect SDK v3.3.0, Joulescope JS320 at 1 MS/s; PPK2 as a floor cross-check. Three byte-identical non-connectable beacon builds differing only in log transport.
- **Average current @ 100 ms advertising interval**: no console 41.8 µA, RTT 41.8 µA, UART console 184.7 µA (**4.4×**).
- **Sleep floor**: 3.4 µA (no console and RTT, indistinguishable) vs **153 µA** with an idle UART console.
- **Mechanism**: the UART receiver holds a high-frequency clock request open to detect start bits; the radio controller shares that clock domain, so one idle console request blocks SoC-wide deep sleep. Cost is continuous and independent of whether anything is printed.
- **RTT is effectively free**: a RAM-buffer write with no peripheral clock request; firmware-side cost within instrument noise of zero, sleep floor identical to logging disabled.
- **Pin-routing artefact**: leaving console pins on the default (debugger-adjacent) routing added ~85% on top of the console cost via pull-up paths (≈19 kΩ calculated); the reported numbers use remapped pins.
- **Partial mitigation**: the receiver-disable feature removes ~85% of the console cost, but only full disablement reaches the 3.4 µA floor.
- **Measurement hygiene**: floor captures use a 1 s advertising interval with the first 100 ms discarded — at short intervals the DECD decoupling capacitor's discharge is mistaken for idle current. Debugger detached, board power-cycled per capture, 8 s per average-current capture.
- **Battery framing**: ≈7 months vs ≈7 weeks on a nominal 220 mAh coin cell, before coin-cell pulse-load derating.
- **Stated limits**: numbers are nRF54L15-specific (mechanism generalises, figures do not); attached debug sessions inflate all baselines.

## Key technical points (ZH)

- **测试平台**：nRF54L15 DK（版本 1.0.0，丝印 2026.14）、nRF Connect SDK v3.3.0、Joulescope JS320（1 MS/s 采样）；底电流用 PPK2 交叉验证。三个逐字节相同的不可连接信标固件，仅日志传输方式不同。
- **100 ms 广播间隔下的平均电流**：无控制台 41.8 µA、RTT 41.8 µA、UART 控制台 184.7 µA（**4.4 倍**）。
- **休眠底电流**：无控制台与 RTT 均为 3.4 µA（不可区分），挂空闲 UART 控制台为 **153 µA**。
- **机理**：UART 接收器为检测起始位而持有高频时钟请求；射频控制器共享该时钟域，因此一个空闲控制台请求就阻断了整颗 SoC 的深度睡眠。开销是持续的，与是否真的打印无关。
- **RTT 基本免费**：只写 RAM 缓冲区，不请求外设时钟；固件侧代价在仪器噪声内，休眠底电流与关闭日志一致。
- **引脚布线伪影**：控制台引脚留在默认（贴近调试接口）布线上，会因上拉通路（推算约 19 kΩ）在控制台开销之上再加约 85%；文中数字均基于改绑后的引脚。
- **部分缓解**：接收器关闭特性可消掉约 85% 的控制台开销，但只有彻底关闭才能到 3.4 µA。
- **测量卫生**：底电流用 1 s 广播间隔并丢弃前 100 ms——间隔太短时 DECD 去耦电容的放电会被误当成空闲电流。每次抓取前断开调试器并重新上电，平均电流每次抓取 8 秒。
- **电池换算**：标称 220 mAh 纽扣电池上约 7 个月对约 7 周，且尚未计入纽扣电池对脉冲负载的容量折损。
- **适用边界**：数值仅对 nRF54L15 成立（机理通用、数字不通用）；调试器保持连接会抬高所有基线。

## Why it matters / what's new (EN)

This is the second measured energy study from the same source in the KB, and it sits one layer below the first. `2026-08-15_novelbits-ble-advertising-energy-four-decisions` priced the four *protocol-facing* advertising decisions (TX power, payload, scannability, interval) on the same nRF54L15 platform; this study shows that a *non-protocol*, purely firmware-hygiene decision — which log transport is compiled in — can swamp all of them. The interval sweep in the earlier study moved average current between 86.8 µA and 10.6 µA; an idle UART console adds ~143 µA on top of whatever that tuning achieved, so a device carefully optimised at the protocol layer can still be dominated by a debug artefact nobody re-audited before shipping.

The mechanism is the transferable part. The finding is not "UART transmission costs energy" — nothing is being transmitted — but that a peripheral's *clock request* is a system-wide sleep inhibitor on an SoC where the radio controller shares that clock domain. That framing predicts the same failure mode for any always-registered peripheral on a shared high-frequency clock, and it explains why a RAM-buffer transport (RTT) is the correct default for shipped instrumentation. The measurement-hygiene notes are equally reusable for anyone doing BLE current work: the DECD capacitor discharge artefact at short advertising intervals and the ~85% pull-up penalty from default console pin routing are both large enough to invalidate a naive bench comparison, and they explain part of the spread commonly seen between published BLE current figures for nominally identical configurations.

For the bt-le bin, this continues the shift from vendor SoC announcements toward independently measured, uncertainty-bounded bench data — the same evidence class as the advertising-energy study and a useful counterweight to datasheet-derived power estimates.

## Why it matters / what's new (ZH)

这是 KB 中来自同一来源的第二篇实测能耗研究，且位于第一篇之下的一层。`2026-08-15_novelbits-ble-advertising-energy-four-decisions` 在同一块 nRF54L15 平台上给四个*面向协议*的广播决策（发射功率、负载、可扫描性、间隔）定价；本研究则表明，一个*与协议无关*、纯属固件工程卫生的决策——编译进去的是哪种日志传输——就能把它们全部淹没。前一篇的间隔扫描把平均电流在 86.8 µA 与 10.6 µA 之间调动；而一个空闲的 UART 控制台会在这些调优成果之上再叠加约 143 µA，因此一台在协议层被精心优化过的设备，仍可能被一个出货前没人复查的调试残留所主导。

真正可迁移的是机理本身。结论不是"UART 发送耗电"——根本没有数据在发——而是：在射频控制器与之共享时钟域的 SoC 上，某个外设的*时钟请求*就是一个全系统级的睡眠抑制器。这一表述可以预测：任何长期注册在共享高频时钟上的外设都会有同样的失效模式，也解释了为什么基于 RAM 缓冲区的传输（RTT）才是量产固件里插桩的正确默认选项。文中的测量卫生要点同样可复用：短广播间隔下 DECD 电容放电造成的伪影，以及默认控制台引脚布线带来的约 85% 上拉惩罚，两者的量级都足以让一次草率的台架对比失效，也部分解释了公开发表的 BLE 电流数据在名义相同配置下常见的离散。

对 bt-le 这个主题箱而言，这延续了从厂商 SoC 发布公告向独立实测、带不确定度边界的台架数据的转移——与广播能耗研究属于同一证据等级，也是对基于数据手册推算的功耗估计的一个有用制衡。
