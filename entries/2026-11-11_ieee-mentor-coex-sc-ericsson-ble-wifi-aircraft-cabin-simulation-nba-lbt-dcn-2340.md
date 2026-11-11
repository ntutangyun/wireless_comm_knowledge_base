---
id: 2026-11-11_ieee-mentor-coex-sc-ericsson-ble-wifi-aircraft-cabin-simulation-nba-lbt-dcn-2340
date_published: 2026-11-10
date_found: 2026-11-11
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 Coex SC: Simulative evaluation of Bluetooth coexistence in an aircraft cabin — narrowband LBT and AFH (DCN 11-26-2340r0, Ericsson)"
title_zh: "IEEE 802.11 Coex SC：飞机客舱内蓝牙共存的仿真评估——窄带 LBT 与 AFH（DCN 11-26-2340r0，爱立信）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2340&is_year=2026"
source_quality: full
topics: [coexistence, Bluetooth, BLE, LE Audio, AFH, LBT, 2.4 GHz, aircraft cabin]
topic_primary: spectrum-policy
topics_secondary: [bt-le-audio]
novelty_score: 3
---

## Summary (EN)

DCN 11-26-2340r0, "Simulative evaluation of Bluetooth coexistence in an aircraft cabin" (Pontus Arvidson, Ericsson; Coex SC; 16 slides; uploaded 10 November 2026, title-slide date 2026-11-11), reproduces in a BLE/Wi-Fi simulator a scenario reported in an ETSI BRAN contribution that the slides cite as [1] (Schirrmacher and Schwark, "The impact of Bluetooth devices on Wi-Fi cabin network performance", BRAN(26)136019r1, October 2026). The stated goals are to recreate the scenario, verify and deepen understanding of the measurements in [1], and investigate the efficacy of novel channel-access mechanisms for narrowband devices. The slides note that the simulator was developed internally at Ericsson, shared as an open contribution to the Bluetooth SIG, and that all results represent the views of the author.

Method per the slides: a discrete-event BLE connected-mode and Wi-Fi simulator with detailed BLE stack modelling and a full CSMA/CA Wi-Fi model; Wi-Fi KPI is throughput relative to the no-interference case, BLE KPIs are audio latency and losses. Analysis is done with Adaptive Frequency Hopping (AFH) disabled, matching devices in [1] that disable AFH with few idle channels (Wi-Fi on channels 1/6/11 leaves seven of BLE's 37 channels clear), with AFH results also included. Parameters include BLE HDT3 (3 Mb/s) at 0 dBm with a headset at 0.4 m, three Wi-Fi APs at 20 dBm over 20 MHz with a client at 4 m, LE Stereo Audio (CIS, 120 B SDU every 10 ms, LC3 96 kb/s per channel, 20 ms audio budget), about 30% offered Wi-Fi load per AP, and about 10,000 runs (10 s each, 10 seeds per configuration).

Results: the Wi-Fi breakdown at 60 users matches the measurements in [1] (mean Wi-Fi throughput about 4%), APs at the rear of the aircraft are affected first, and degradation is attributed to on-air collisions; the slides state it is not a Bluetooth Classic-only problem. Two narrowband channel-access mechanisms are evaluated: LBT with Secondary Channel Deferral (SCD; CCA before each series of transmissions, defer a busy event to a secondary channel after 100 microseconds, up to three attempts) and Narrowband Access with LBT (NBA-LBT; SCD plus gap padding to 18 microseconds, CCA threshold -72 dBm). At 60 BLE links (AFH off unless noted), relative Wi-Fi aggregate throughput is 4.1% with no LBT, 64.1% with AFH only, 63.8% with SCD-3 only, 74.0% with NBA-LBT only, 87.7% with SCD-3 plus AFH and 90.5% with NBA-LBT plus AFH; the worst-pair audio flush rate is 1.48% (no LBT), 7.67% (AFH only) and 0.00% for NBA-LBT plus AFH. The slides state that "AFH only" is the only configuration with substantially worse BLE performance than the baseline, and that it also has the highest duty cycle. Addendum tables vary Wi-Fi load (about 30%, 48%, 65%, saturated: NBA-LBT plus AFH gives 90.5%, 86.4%, 83.2%, 80.6% against 4.1%, 2.5%, 2.0%, 1.7% without LBT) and BLE PHY (LE2M, HDT3, HDT7.5: 87.3%, 90.5%, 94.1% with NBA-LBT plus AFH against 3.6%, 4.1%, 4.3% without).

## Summary (ZH)

DCN 11-26-2340r0《Simulative evaluation of Bluetooth coexistence in an aircraft cabin》（Pontus Arvidson，爱立信；Coex SC；共 16 页；2026 年 11 月 10 日上传，标题页日期 2026-11-11）在 BLE/Wi-Fi 仿真器中复现了一份 ETSI BRAN 文稿所报告的场景（幻灯片引用为 [1]：Schirrmacher 与 Schwark，“The impact of Bluetooth devices on Wi-Fi cabin network performance”，BRAN(26)136019r1，2026 年 10 月）。其目标为：重建场景，验证并加深对 [1] 中测量结果的理解，并研究面向窄带设备的新型信道接入机制的有效性。幻灯片说明，仿真器由爱立信内部开发，已作为公开文稿共享给 Bluetooth SIG，所有结果仅代表作者观点。

方法（据幻灯片）：离散事件的 BLE 连接模式与 Wi-Fi 仿真器，对 BLE 协议栈做详细建模，Wi-Fi 采用完整 CSMA/CA；Wi-Fi 指标为相对无干扰情形的吞吐，BLE 指标为音频时延与丢失。分析主要在关闭自适应跳频（AFH）条件下进行，对应 [1] 中设备在空闲信道很少时关闭 AFH 的情形（Wi-Fi 占用 1/6/11 信道，BLE 37 个信道中仅余七个空闲），同时也给出启用 AFH 的结果。参数包括：BLE HDT3（3 Mb/s）、0 dBm、耳机距离 0.4 m；三个 Wi-Fi AP，20 dBm、20 MHz，客户端距离 4 m；LE Stereo Audio（CIS，每 10 ms 一个 120 B SDU，每声道 LC3 96 kb/s，20 ms 音频预算）；每 AP 约 30% 的 Wi-Fi 负载；约 10,000 次仿真（每次 10 s，每种配置 10 个随机种子）。

结果：60 用户时的 Wi-Fi 崩溃情形与 [1] 的测量吻合（Wi-Fi 平均吞吐约 4%），机尾的 AP 最先受影响，性能下降归因于空口碰撞；幻灯片称这并非仅限于经典蓝牙的问题。评估了两种窄带信道接入机制：带次信道推迟的 LBT（SCD：每组传输前做 CCA，信道忙则将该事件推迟到次信道并在 100 微秒后重试，最多三次）与窄带 LBT 接入（NBA-LBT：SCD 加上将间隙填充至 18 微秒，CCA 阈值 -72 dBm）。在 60 条 BLE 链路下（除另行说明外 AFH 关闭），Wi-Fi 相对聚合吞吐：无 LBT 4.1%，仅 AFH 64.1%，仅 SCD-3 63.8%，仅 NBA-LBT 74.0%，SCD-3 加 AFH 87.7%，NBA-LBT 加 AFH 90.5%；最差链路对的音频冲刷率：无 LBT 1.48%，仅 AFH 7.67%，NBA-LBT 加 AFH 为 0.00%。幻灯片称“仅 AFH”是唯一使 BLE 性能显著劣于基线的配置，且其占空比最高。附录表格改变了 Wi-Fi 负载（约 30%、48%、65%、饱和：NBA-LBT 加 AFH 为 90.5%、86.4%、83.2%、80.6%，无 LBT 为 4.1%、2.5%、2.0%、1.7%）与 BLE PHY（LE2M、HDT3、HDT7.5：NBA-LBT 加 AFH 为 87.3%、90.5%、94.1%，无 LBT 为 3.6%、4.1%、4.3%）。

## Key technical points (EN)

- Reproduces the ETSI BRAN cabin measurement with BLE: Wi-Fi mean throughput about 4% at 60 users, APs at the rear affected first, collisions on air as cause.
- SCD: CCA before each series, busy event deferred to a secondary channel after 100 microseconds, up to three attempts. NBA-LBT: SCD plus gap padding to 18 microseconds, CCA threshold -72 dBm.
- 60 BLE links, Wi-Fi aggregate: no LBT 4.1%; AFH only 64.1%; SCD-3 only 63.8%; NBA-LBT only 74.0%; SCD-3+AFH 87.7%; NBA-LBT+AFH 90.5%.
- Worst-pair audio flush: 1.48% (no LBT), 7.67% (AFH only), 0.00% (NBA-LBT+AFH); p95 delay 11.1 ms, 15.4 ms, 3.8 ms respectively.
- Offered Wi-Fi load barely changes the relative result (NBA-LBT+AFH 80.6% to 90.5% across loads); BLE PHY has little impact (87.3% to 94.1%).
- Stated conclusion: NBA-LBT improves both Wi-Fi and Bluetooth ("no trade-off"); AFH-only is the only configuration that hurts BLE.

## Key technical points (ZH)

- 用 BLE 复现 ETSI BRAN 客舱测量：60 用户时 Wi-Fi 平均吞吐约 4%，机尾 AP 最先受影响，原因为空口碰撞。
- SCD：每组传输前做 CCA，忙则将事件推迟到次信道、间隔 100 微秒，最多三次。NBA-LBT：SCD 加间隙填充至 18 微秒，CCA 阈值 -72 dBm。
- 60 条 BLE 链路下 Wi-Fi 聚合吞吐：无 LBT 4.1%；仅 AFH 64.1%；仅 SCD-3 63.8%；仅 NBA-LBT 74.0%；SCD-3+AFH 87.7%；NBA-LBT+AFH 90.5%。
- 最差链路对音频冲刷率：1.48%（无 LBT）、7.67%（仅 AFH）、0.00%（NBA-LBT+AFH）；p95 时延分别为 11.1 ms、15.4 ms、3.8 ms。
- Wi-Fi 负载对相对结果影响很小（NBA-LBT+AFH 在各负载下为 80.6% 至 90.5%）；BLE PHY 影响不大（87.3% 至 94.1%）。
- 文稿结论：NBA-LBT 同时改善 Wi-Fi 与蓝牙（“无取舍”）；仅 AFH 是唯一损害 BLE 的配置。

## Why it matters / what's new (EN)

The KB's earlier Wi-Fi/Bluetooth coexistence coverage is the WFA and Bluetooth SIG 6 GHz item (2026-07-10_wfa-bluetooth-sig-6ghz-coexistence); this deck is a narrowband-device-side simulation study with a concrete channel-access proposal evaluated against a measured in-cabin case. It also relates to the WIN SG contribution of the same day on non-contending transmitters (2026-11-11_ieee-mentor-win-sg-charter-lbt-on-off-nr-wifi-coexistence-robust-wifi9-dcn-1927), which lists Bluetooth among the technologies whose adoption of LBT would help. The numbers are simulation outputs calibrated to RSSI values from [1]; the slides themselves note the results represent the author's views.

## Why it matters / what's new (ZH)

KB 此前的 Wi-Fi/蓝牙共存内容为 WFA 与 Bluetooth SIG 的 6 GHz 条目（2026-07-10_wfa-bluetooth-sig-6ghz-coexistence）；本文稿则是窄带设备一侧的仿真研究，并以一个实测客舱案例检验了具体的信道接入方案。它也与同日关于非竞争发射端的 WIN SG 文稿（2026-11-11_ieee-mentor-win-sg-charter-lbt-on-off-nr-wifi-coexistence-robust-wifi9-dcn-1927）相关，后者将蓝牙列为若采用 LBT 将有帮助的技术之一。数据为按 [1] 中 RSSI 校准的仿真输出；幻灯片自身注明结果仅代表作者观点。

## Images

None.
