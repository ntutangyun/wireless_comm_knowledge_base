---
id: 2026-11-02_arxiv-rtc-service-point-selection-meet-zoom-teams-starlink
date_published: 2026-06-26
date_found: 2026-11-02
technology: satellite
type: academic-paper
title_en: "Where Does My Call Go? Measuring Google Meet, Zoom, and Microsoft Teams on Starlink"
title_zh: "我的通话去了哪里？Starlink 上 Google Meet、Zoom 与 Microsoft Teams 的实测"
url: "https://arxiv.org/abs/2610.35874"
source_quality: full
topics: [Starlink, WebRTC, real-time-communication, service-point-selection, PoP-handover, in-flight-connectivity, RTT, Google-Meet, Zoom, Microsoft-Teams]
topic_primary: starlink
topics_secondary: [leo-constellations]
novelty_score: 2
---

## Summary (EN)

Malekinasab, Abdollahi, Zhao and Pan (University of Victoria; arXiv 2610.35874, cs.NI, v1 dated 26 June 2026, accepted to present at LEONET 2026) ask how Google Meet, Zoom and Microsoft Teams choose their media edges and relays when the client sits behind Starlink, where the path also depends on the Starlink Point-of-Presence (PoP) at which traffic exits and that PoP can change mid-session in flight. Existing Starlink studies, the authors note, concentrate on client-side metrics and stationary nodes.

The measurement uses browser (WebRTC) clients instrumented with Selenium and a JavaScript hook on getStats(), at seven stationary Canadian sites (10+ hours) and on six Starlink-equipped WestJet flights (24+ hours). Google Meet's service points mostly track the serving PoP, Zoom follows regional hubs, and Teams stays anchored to fixed service points; in-flight PoP handovers shift the egress point mid-session and the platforms react differently.

## Summary (ZH)

Malekinasab、Abdollahi、Zhao 与 Pan（维多利亚大学；arXiv 2610.35874，cs.NI，v1 日期 2026 年 6 月 26 日，已被 LEONET 2026 接收宣读）研究当客户端经由 Starlink 接入时，Google Meet、Zoom 与 Microsoft Teams 如何选择媒体边缘节点与中继：此时路径还取决于流量出口的 Starlink 接入点（PoP），而飞行中 PoP 会在会话期间切换。作者指出，既有 Starlink 研究多集中于客户端指标与静止节点。

测量使用经 Selenium 与 getStats() JavaScript 钩子插桩的浏览器（WebRTC）客户端，覆盖加拿大 7 个固定站点（累计 10 小时以上）和 6 次配备 Starlink 的 WestJet 航班（累计 24 小时以上）。Google Meet 的服务点多数跟随当前 PoP，Zoom 采用区域枢纽，Teams 则固定在特定服务点；飞行中 PoP 切换会在会话中途改变出口，各平台的反应各不相同。

## Key technical points (EN)

- **Method**: ICE candidate pair, RTT and remote address read from WebRTC getStats(); service points inferred and cross-checked with MTR (UDP/TCP), IP ownership, geolocation and provider endpoint information. Two-party and multi-party sessions; in-flight runs relaunch 10-minute sessions to force fresh service-point selection (routes YYJ-YEG, YEG-YYZ, YVR-OGG).
- **Stationary RTT**: Meet and Zoom mostly below about 75-100 ms; Teams medians about 120-160 ms with tails beyond 180-200 ms. In flight, Teams medians 130-200 ms (tails above 250-300 ms) versus Meet mostly under 100 ms.
- **Platform patterns**: Meet usually places the service point near the active PoP but sometimes skips closer options; Zoom uses hubs such as Virginia and San Jose and sometimes switches without any PoP handover (YEG-YYZ); separately, a server re-routing event on YVR-OGG raised RTT to 152 ms; Teams is session-anchored (e.g. San Antonio, Boydton) and anchors multi-party calls to the first participant's service point.
- **Direct vs indirect AS path (Meet)**: 54.9 ms vs 71.4 ms on YYZ-YEG and 59.1 ms vs 70.3 ms on YEG-YYJ between Starlink (AS14593) and Google (AS15169).
- **Quality (Appendix)**: Teams jitter up to 126 ms and loss up to 1.74% with 71-135 freeze events per session; Meet loss 0.04-0.12% with 20-34 freezes.
- **Limits stated or evident**: browser clients only, no terrestrial baseline, limited Zoom telemetry, service points inferred rather than provider-confirmed, small sample.

## Key technical points (ZH)

- **方法**：通过 WebRTC getStats() 读取 ICE 候选对、RTT 与远端地址；服务点由 MTR（UDP/TCP）、IP 归属、地理定位及服务商端点信息交叉验证。涵盖双方与多方会话；飞行测试每次重启 10 分钟会话以触发新的服务点选择（航线 YYJ-YEG、YEG-YYZ、YVR-OGG）。
- **静止场景 RTT**：Meet 与 Zoom 多在约 75-100 ms 以下；Teams 中位数约 120-160 ms，尾部超过 180-200 ms。飞行中 Teams 中位数 130-200 ms（尾部超过 250-300 ms），Meet 多在 100 ms 以内。
- **平台模式**：Meet 通常把服务点放在当前 PoP 附近，但有时跳过更近选项；Zoom 使用弗吉尼亚、圣何塞等枢纽，有时在无 PoP 切换时改变服务点（YEG-YYZ）；另在 YVR-OGG 航线上一次服务器改路使 RTT 升至 152 ms；Teams 以会话为锚（如 San Antonio、Boydton），多方通话锚定首位参与者的服务点。
- **直连与间接 AS 路径（Meet）**：Starlink（AS14593）至 Google（AS15169），YYZ-YEG 为 54.9 ms 对 71.4 ms，YEG-YYJ 为 59.1 ms 对 70.3 ms。
- **质量（附录）**：Teams 抖动最高 126 ms、丢包最高 1.74%，每会话 71-135 次卡顿；Meet 丢包 0.04-0.12%，20-34 次卡顿。
- **局限**：仅浏览器客户端、无地面基线、Zoom 遥测有限、服务点为推断而非服务商确认、样本较小。

## Why it matters / what's new (EN)

The paper's stated gap is that RTC platforms appear to choose service points with terrestrial assumptions, and earlier Starlink work looked at client-side metrics on stationary nodes. This study compares three platforms side by side and adds in-flight PoP handovers, showing that service-point choice can add tens of milliseconds of RTT. Findings are inferred from a small sample without a terrestrial control, so causes inside each provider are not observable.

## Why it matters / what's new (ZH)

论文指出的空白是：RTC 平台似乎按地面网络假设选择服务点，而既有 Starlink 研究多关注静止节点的客户端指标。本文并排比较三个平台并加入飞行中的 PoP 切换，显示服务点选择可带来数十毫秒的 RTT 差异。结论基于小样本推断且无地面对照，各服务商内部成因不可观测。

## Images

None.
