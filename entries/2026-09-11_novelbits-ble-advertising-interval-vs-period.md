---
id: 2026-09-11_novelbits-ble-advertising-interval-vs-period
date_published: 2026-09-07
date_found: 2026-09-11
type: tutorial
technology: bluetooth
title_en: "Your Advertising Interval Is Not Your Advertising Period"
title_zh: "你配置的广播间隔,并不是设备实际的广播周期"
url: "https://novelbits.io/bluetooth-le-advertising-interval-vs-period/"
source_quality: full
topics: [BLE, advertising, power, advDelay, Core-Spec, measurement-methodology]
topic_primary: bt-le
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Novel Bits (Mohammad Afaneh, published Sep-7-2026) walks through a single, precisely-quantified BLE fact that trips up a lot of firmware and power-budget work: the interval a developer configures (`advInterval`) is not the actual time between advertising events. The Bluetooth Core Specification (Vol. 6, Part B, Sec. 4.4.2.2.1) mandates that the Link Layer add a fresh, pseudo-random `advDelay` of 0–10 ms to every single advertising event for undirected advertising and low-duty-cycle connectable directed advertising (high-duty-cycle directed advertising and periodic advertising are explicitly excluded). Per Vol. 1, Part A, Sec. 3.3.2.2.2, the purpose is to *aid in* interference avoidance — and critically, there is no standardized way to disable it. The real advertising period is therefore `T_advEvent = advInterval + advDelay`, not `advInterval` alone.

The article backs this with a bench measurement on an nRF54L15-DK (non-connectable beacon, `ADV_NONCONN_IND`, min/max interval fields set equal to remove controller scheduling freedom) using a Nordic Power Profiler Kit II at 3.0 V / 100 kS/s, corroborated by a separate session two weeks earlier on the same silicon (105.05 ms). A nominal 100 ms interval measured **105.075 ms average** across 10 captures of 30 events each (a second session gave 105.05 ms), with a 104.25–106.42 ms spread across captures (0.646% run-to-run scatter). A nominal 20 ms interval measured **25.166 ms** across 254 intervals (~5.17 ms mean added delay, close to the 5 ms mean a uniform-distribution assumption predicts — the spec fixes the 0–10 ms range but not the distribution). Using the nominal interval instead of the measured one underestimates the true period — and therefore overestimates average current — by roughly 25% at 20 ms, ~5% at 100 ms, and ~0.5% at 1 s intervals; the systematic error shrinks as the interval grows relative to the fixed 0–10 ms delay window.

The piece's sharper point is about measurement hygiene rather than the spec fact itself: because the offset is roughly constant in absolute terms (~5 ms), it **cancels exactly** when comparing two firmware builds at the *same* configured interval — but its *random* component does not cancel, and in the author's 10 captures of 30 events each at a 100 ms interval the run-to-run scatter it introduces can account for **~46% of the magnitude of a 2% "improvement"** a developer might be trying to detect between builds. In other words, a delay explicitly designed to avoid interference on the air becomes a source of statistical noise on the bench, one most before/after firmware comparisons never budget for. The author is explicit that the observed uniform distribution and its exact mean are "a measured property of one controller" (Nordic's SoftDevice Controller) at one SDK version, not something the specification guarantees — other vendors' controllers are free to draw the random delay differently, so the concrete numbers here don't necessarily transfer, even though the underlying mechanism (a mandatory, non-disableable, per-event random delay) does.

## Summary (ZH)

Novel Bits(作者 Mohammad Afaneh,发表于 2026 年 9 月 7 日)详细拆解了一个常被固件与功耗预算工作忽视、却经过精确量化的 BLE 事实:开发者配置的广播间隔(`advInterval`)并不是设备实际两次广播事件之间的时间间隔。蓝牙核心规范(第 6 卷 B 部分 4.4.2.2.1 节)规定,链路层必须为每一次广播事件——针对非定向广播以及低占空比可连接定向广播——附加一个全新生成的伪随机 `advDelay`,取值范围为 0–10 毫秒(高占空比定向广播与周期性广播明确不受此规则约束)。根据第 1 卷 A 部分 3.3.2.2.2 节，其作用是「有助于」规避干扰——关键在于,规范并未提供任何标准化方式来关闭这一随机延迟。因此真正的广播周期是 `T_advEvent = advInterval + advDelay`,而非单纯的 `advInterval`。

文章通过在 nRF54L15-DK 上的实测数据佐证了这一点:配置为非可连接信标(`ADV_NONCONN_IND`),将最小/最大间隔字段设为相等以消除控制器的调度自由度,使用 Nordic Power Profiler Kit II 在 3.0 V / 100 kS/s 条件下采集功耗,并由两周前在同一芯片上的另一次测量（105.05 毫秒）予以佐证。标称 100 毫秒的间隔,在 10 次各含 30 个事件的采集中实测平均值为 **105.075 毫秒**(另一组会话实测为 105.05 毫秒),各次采集间波动范围为 104.25–106.42 毫秒(批次间散布约 0.646%)。标称 20 毫秒的间隔,在跨 254 个间隔的测量中实测为 **25.166 毫秒**(平均新增延迟约 5.17 毫秒,接近在均匀分布假设下的理论均值 5 毫秒——规范只规定了 0–10 毫秒的范围，并未规定分布)。若直接使用标称间隔而非实测间隔，会低估真实周期——从而高估平均电流——在 20 毫秒间隔下高估平均电流约 25%，100 毫秒间隔下约 5%，1 秒间隔下约 0.5%;随着间隔相对于固定的 0–10 毫秒延迟窗口变大,这一系统性误差会相应缩小。

文章更犀利的论点其实关乎测量方法本身,而非规范条文本身:由于该偏移量在绝对值上大致恒定(约 5 毫秒),在比较*相同*配置间隔下的两个固件版本时，这部分系统误差会精确抵消——但其*随机*成分并不会抵消；在作者以 100 毫秒间隔进行的 10 组各 30 事件抓包中，由此引入的批次间波动可占到开发者试图检测的 2%「改进」信号幅度的约 **46%**。换言之,一个本为避免空中干扰而设计的随机延迟,在实验台架测量中却变成了统计噪声源,而多数固件前后对比测试根本没有为此预留误差余量。作者明确指出,所观察到的均匀分布及其精确均值只是"某一款控制器(Nordic 的 SoftDevice Controller)在某一 SDK 版本下的实测属性",并非规范本身所保证;其他厂商的控制器完全可以采用不同方式生成这一随机延迟,因此文中的具体数字未必能直接迁移到其他平台——尽管其背后的机制(每次事件都强制附加、且无法关闭的随机延迟)是通用的。

## Key technical points (EN)

- Spec citation: Core Specification Vol. 6, Part B, Sec. 4.4.2.2.1 mandates a fresh pseudo-random `advDelay` (0–10 ms) per advertising event for undirected advertising and low-duty-cycle connectable directed advertising; high-duty-cycle directed advertising and periodic advertising are excluded. No standardized disable mechanism exists.
- Real advertising period: `T_advEvent = advInterval + advDelay` (Vol. 6, Part B, §4.4.2.2.1); the rationale, that the delay *aids in* interference avoidance, is in Vol. 1, Part A, §3.3.2.2.2.
- Rig: nRF54L15-DK, non-connectable beacon (`ADV_NONCONN_IND`), min=max interval fields to remove scheduler freedom, Nordic PPK2 at 3.0 V / 100 kS/s, corroborated by a separate session two weeks earlier on the same silicon (105.05 ms).
- Measured: nominal 100 ms → 105.075 ms avg (10×30-event captures, second session 105.05 ms), 104.25–106.42 ms spread (0.646% run-to-run scatter); nominal 20 ms → 25.166 ms (across 254 intervals, ~5.17 ms mean added delay).
- Using nominal interval instead of measured interval underestimates period / overestimates average current by ~25% at 20 ms, ~5% at 100 ms, ~0.5% at 1 s.
- Measurement-hygiene finding: the ~5 ms systematic offset cancels exactly in same-interval before/after firmware comparisons, but its random component does not — in the author's 30-event captures at a 100 ms interval it can account for ~46% of the magnitude of a 2% improvement signal.
- Caveat (author's own): the uniform distribution and its exact mean are a measured property of one controller (Nordic SoftDevice Controller) at one SDK version, not a spec guarantee; other vendors may distribute the delay differently.

## Key technical points (ZH)

- 规范依据:核心规范第 6 卷 B 部分 4.4.2.2.1 节规定,非定向广播与低占空比可连接定向广播的每一次广播事件都必须附加全新生成的伪随机 `advDelay`(0–10 毫秒);高占空比定向广播与周期性广播不受此约束。规范未提供标准化的关闭方式。
- 真实广播周期为 `T_advEvent = advInterval + advDelay`（依据第 6 卷 B 部分 4.4.2.2.1 节；该延迟「有助于」规避干扰的理由见第 1 卷 A 部分 3.3.2.2.2 节）。
- 测试平台:nRF54L15-DK,配置为非可连接信标(`ADV_NONCONN_IND`),将最小/最大间隔字段设为相等以消除调度自由度,使用 Nordic PPK2 在 3.0 V / 100 kS/s 条件下采集,并以 由两周前在同一芯片上的另一次测量（105.05 毫秒）佐证。
- 实测数据:标称 100 毫秒 → 实测均值 105.075 毫秒(10 组各 30 事件采集,另一会话为 105.05 毫秒),波动范围 104.25–106.42 毫秒(批次间散布约 0.646%);标称 20 毫秒 → 实测 25.166 毫秒（跨 254 个间隔，平均新增延迟约 5.17 毫秒）。
- 若使用标称间隔而非实测间隔，会低估周期、进而高估平均电流：20 毫秒间隔下约高估平均电流 25%，100 毫秒下约 5%，1 秒下约 0.5%。
- 测量方法学发现:约 5 毫秒的系统性偏移在相同间隔的固件前后对比中会精确抵消,但其随机成分不会——在作者以 100 毫秒间隔进行的 30 事件抓包中，这部分波动可占到开发者试图检测的 2% 改进信号幅度的约 46%。
- 作者自陈的局限:所观察到的均匀分布及其精确均值只是某一款控制器(Nordic SoftDevice Controller)在某一 SDK 版本下的实测属性,并非规范本身保证;其他厂商的控制器可能采用不同的随机延迟分布方式。

## Why it matters / what's new (EN)

The KB's `bt-le` bin already has three prior Novel Bits entries from the same author, two of them power measurements (2026-08-15's four-decisions joules study, which flagged this exact `advDelay` mechanism only as a one-line "subtle detail," and 2026-08-27's UART-vs-RTT power comparison). This entry is the deep-dive that follow-up footnote deserved: a full spec citation, a dedicated measurement campaign quantifying the delay's mean and distribution at two interval settings, and — the genuinely new contribution to this bin — an explicit argument that a spec-mandated timing randomization designed for RF interference avoidance becomes a hidden source of *measurement* noise for anyone doing power A/B testing on BLE firmware. That reframing (random advDelay as a benchmark-validity threat, not just a scheduling curiosity) is a useful, previously-unstated caveat for the bin's growing shelf of BLE power-measurement studies, and a concrete reason those studies' quoted improvement percentages should be read against error bars rather than as point estimates.

## Why it matters / what's new (ZH)

KB 的 `bt-le` 分箱此前已有三篇出自同一作者的 Novel Bits 条目，其中两篇为功耗测量(2026-08-15 的"四项决策换算焦耳"研究,当时仅以一句"细节提示"带过这个 `advDelay` 机制;以及 2026-08-27 的 UART 与 RTT 功耗对比)。本条目正是对那个脚注的深入展开:给出完整的规范条文依据,针对两种间隔设置开展专门的测量,量化该延迟的均值与分布——而本分箱真正的新增贡献在于:明确指出一项本为射频抗干扰而设计的规范强制时序随机化,对任何在 BLE 固件上做功耗 A/B 测试的人而言,会变成一种隐蔽的*测量*噪声来源。这种重新定位(随机 advDelay 是基准测试有效性的威胁,而不仅仅是调度层面的趣闻)为本分箱日益增多的 BLE 功耗测量研究提供了一条此前未被明确指出、但很实用的警示,也给出了一个具体理由:这些研究中给出的改进百分比,应当结合误差范围来解读,而非视为精确的点估计值。

## Images

![BLE power-capture structure: measuring advertising events from first to last burst across a 30-event window | BLE 功耗采集结构:在 30 个事件的窗口内测量从首个到末个广播突发的时间](https://storage.ghost.io/c/86/70/8670d5a8-12b7-448c-b3db-a85bc1fcdea7/content/images/2026/08/2026-08-19-advdelay-capture-structure-1.png)
