---
id: 2026-05-24_spark-sr1120-le-uwb-wwc-pitch
date_published: 2026-05-18
date_found: 2026-05-24
type: industry-news
technology: uwb
title_en: "SPARK SR1120 LE-UWB transceiver pitched at WWC: 40.96 Mbps, sub-200 µs latency, 1 nJ/bit; CES 2026 Innovation Award; CAD $17M Series B; positioned as deterministic-low-power layer below BT/Wi-Fi for AI wearables, presence detection, gaming"
title_zh: "SPARK SR1120 LE-UWB 收发机在 WWC 推介：40.96 Mbps、亚 200 µs 时延、1 nJ/比特；CES 2026 创新奖；C$17M B 轮；定位为面向 AI 可穿戴、存在检测、游戏的、低于 BT/Wi-Fi 的确定性低功耗层"
url: "https://wifinowglobal.com/news-and-blog/ultra-wideband-for-ultra-low-power-deterministic-connectivity-is-poised-for-a-breakthrough-says-spark-microsystems/"
source_quality: full
topics: [UWB, LE-UWB, low-power, products, CES, deterministic-latency]
topic_primary: uwb-ranging
topics_secondary: [uwb-radar]
novelty_score: 3
---

## Summary (EN)

SPARK Microsystems (Montreal, founded 2016) has been pushing a category they call **LE-UWB** — Low-Energy Ultra-Wideband — as a third short-range wireless option positioned between BLE (efficient but throughput-limited) and Wi-Fi (high-throughput but power-hungry). The pitch has been on the road through Q1–Q2 2026: a Wi-Fi NOW Global interview (May 18 2026), CES 2026 Innovation Award honors, and a **CAD $17 million Series B follow-on closed March 2026** (co-led by Idealist Capital and Real Ventures).

The flagship silicon is the **SPARK SR1120 LE-UWB transceiver** — the company claims it as "the industry's first" LE-UWB part. The three headline numbers SPARK pushes:
- **Throughput up to 40.96 Mbps** — well below Wi-Fi 6E but ~30× the practical BLE 5.x ceiling on a single connection.
- **Sub-200 µs latency** — substantially lower than BLE (typical ~7.5 ms minimum connection interval) and lower than what Wi-Fi 7 R-TWT typically delivers without dedicated TX opportunities.
- **1 nJ/bit power efficiency** — the figure SPARK leans on hardest; for context, BLE 5.x is typically 5–20 nJ/bit on commodity silicon, so a 5–20× efficiency claim if it holds at workload-realistic conditions.

The target applications named at WWC and CES: **AI wearables** (always-on local inference needing low-latency uplink to a phone/AP), **presence detection** (a development kit specifically announced for this), and **gaming devices** (controllers, peripherals where the 200 µs latency floor is the differentiator). The "deterministic" framing is the technical-marketing pitch — competing with BLE's connection-interval jitter and Wi-Fi's contention-window variance by leveraging UWB's pulse-based PHY where the airtime per packet is bounded and predictable.

The strategic question SPARK is implicitly answering: **does the IEEE 802.15.4z / FiRa UWB stack — which is ranging-centric — need a sibling stack optimised for data transport?** SPARK's bet is yes. Whether the rest of the UWB ecosystem (Apple U2, NXP Trimension, Qorvo) follows them into LE-UWB-as-data-link versus staying ranging-first is the open question.

## Summary (ZH)

SPARK Microsystems（蒙特利尔，成立于 2016 年）一直在推广他们称为 **LE-UWB**（低能耗超宽带）的类别，将其定位为介于 BLE（高效但吞吐受限）与 Wi-Fi（高吞吐但耗电）之间的第三种短距无线选项。该推介贯穿 2026 Q1–Q2：Wi-Fi NOW Global 访谈（2026 年 5 月 18 日）、CES 2026 创新奖认可，以及 **2026 年 3 月完成的 1700 万加元 B 轮跟投**（由 Idealist Capital 与 Real Ventures 联合领投）。

旗舰硅片是 **SPARK SR1120 LE-UWB 收发机** —— 公司声称为"业界首款" LE-UWB 器件。SPARK 强推的三项关键指标：
- **吞吐量最高 40.96 Mbps** —— 远低于 Wi-Fi 6E，但约为单连接 BLE 5.x 实际上限的 30 倍。
- **亚 200 µs 时延** —— 实质性低于 BLE（典型最低连接间隔 ~7.5 ms），也低于未配置专属发送机会的 Wi-Fi 7 R-TWT 通常能达到的水平。
- **1 nJ/比特功率效率** —— SPARK 最强调的数字；作为对比，BLE 5.x 在商用硅片上通常 5–20 nJ/比特，因此若在工作负载真实条件下成立，则为 5–20 倍效率主张。

WWC 与 CES 上具名的目标应用：**AI 可穿戴**（始终在线的本地推理需要低时延上行到手机/AP）、**存在检测**（专为此宣布开发套件）以及**游戏设备**（控制器、外设，200 µs 时延地板是差异化因素）。"确定性"框架是技术营销话术 —— 通过 UWB 基于脉冲的 PHY（每包空口时间有界、可预测），与 BLE 连接间隔抖动和 Wi-Fi 竞争窗方差竞争。

SPARK 隐含回答的战略问题：**以测距为中心的 IEEE 802.15.4z / FiRa UWB 栈，是否需要一个针对数据传输优化的姊妹栈？** SPARK 押注是。UWB 生态其余玩家（Apple U2、NXP Trimension、Qorvo）是否跟随其进入 LE-UWB-作-数据-链路，还是继续以测距为先，是开放问题。

## Key technical points (EN)

- **Silicon**: SPARK SR1120, claimed as industry's first LE-UWB transceiver.
- **Throughput**: up to 40.96 Mbps (~30× practical BLE 5.x single-connection ceiling).
- **Latency**: sub-200 µs (vs BLE ~7.5 ms minimum connection interval; vs Wi-Fi 7 R-TWT variable).
- **Energy**: 1 nJ/bit (vs BLE 5.x 5–20 nJ/bit on commodity silicon → claimed 5–20× efficiency).
- **Targeting**: AI wearables, presence detection (dedicated dev kit), gaming peripherals.
- **Technical framing**: "deterministic" — bounded per-packet airtime via UWB pulse PHY, vs BLE/Wi-Fi contention variance.
- **Strategic positioning**: third short-range option between BLE and Wi-Fi; sibling to IEEE 802.15.4z/FiRa ranging-centric UWB stack but optimised for data transport.
- **Recent traction**: CES 2026 Innovation Award; March 2026 CAD $17M Series B follow-on (Idealist Capital + Real Ventures).
- **Open ecosystem question**: will Apple U2 / NXP Trimension / Qorvo extend their UWB stacks toward LE-UWB-style data links, or stay ranging-first?

## Key technical points (ZH)

- **硅片**：SPARK SR1120，声称为业界首款 LE-UWB 收发机。
- **吞吐**：最高 40.96 Mbps（约为 BLE 5.x 单连接实际上限的 30 倍）。
- **时延**：亚 200 µs（vs BLE 最低连接间隔约 7.5 ms；vs Wi-Fi 7 R-TWT 变化）。
- **能效**：1 nJ/比特（vs BLE 5.x 商用硅片 5–20 nJ/比特 → 声称 5–20 倍效率）。
- **目标应用**：AI 可穿戴、存在检测（专用开发套件）、游戏外设。
- **技术框架**："确定性" —— 通过 UWB 脉冲 PHY 实现的每包有界空口时间，vs BLE/Wi-Fi 的竞争方差。
- **战略定位**：BLE 与 Wi-Fi 之间的第三短距选项；与以测距为中心的 IEEE 802.15.4z/FiRa UWB 栈互为姊妹，但针对数据传输优化。
- **近期进展**：CES 2026 创新奖；2026 年 3 月 1700 万加元 B 轮跟投（Idealist Capital + Real Ventures）。
- **生态未决问题**：Apple U2 / NXP Trimension / Qorvo 是否会将其 UWB 栈向 LE-UWB 风格的数据链路扩展，或继续以测距为先？

## Why it matters / what's new (EN)

This entry captures a specific UWB-industry positioning bet that's distinct from the FiRa/IEEE-802.15.4ab ranging-first narrative that's been dominant in the existing KB UWB content (`2026-05-21_jcb-uwb-payments-japan.md` for FiRa payments; the 802.15.4ab IP). SPARK is explicitly arguing **UWB should also be the wireless data link for ultra-low-latency, ultra-low-power applications** — not just ranging — and the SR1120 silicon plus CES Innovation Award plus $17M B-round give the pitch credibility. The 1 nJ/bit figure is the most aggressive claim; if validated at scale, it would reset what's achievable in always-on wearable connectivity. Apple/NXP/Qorvo's response — extending their ranging-first UWB stacks into LE-UWB-style data, or treating SPARK as a niche competitor — is the strategic angle to watch through 2026. Pairs with the IEEE 802.15.4ab amendment thread (expected release 2026, adds enhanced PHY/MAC and sensing) as parallel UWB-evolution directions: 802.15.4ab evolves the existing ranging stack; SPARK's LE-UWB is a parallel data-link reinterpretation.

## Why it matters / what's new (ZH)

本条目捕捉到一个具体的 UWB 产业定位押注，区别于现有 KB UWB 内容（`2026-05-21_jcb-uwb-payments-japan.md` 关于 FiRa 支付；以及 802.15.4ab 内容）中主导的 FiRa/IEEE-802.15.4ab 测距优先叙事。SPARK 明确主张 **UWB 也应当成为超低时延、超低功耗应用的无线数据链路** —— 不仅仅是测距 —— 而 SR1120 硅片 + CES 创新奖 + 1700 万美元 B 轮给该推介提供可信度。1 nJ/比特数字是最激进主张；若规模化验证，将重置始终在线可穿戴连接的可达性。Apple/NXP/Qorvo 的回应 —— 将其测距优先 UWB 栈扩展至 LE-UWB 风格数据，或视 SPARK 为利基竞争者 —— 是贯穿 2026 年值得观察的战略角度。与 IEEE 802.15.4ab 修订主线（预计 2026 年发布，新增增强 PHY/MAC 与感知能力）平行：802.15.4ab 演进既有测距栈；SPARK 的 LE-UWB 是数据链路角度的平行重新诠释。
