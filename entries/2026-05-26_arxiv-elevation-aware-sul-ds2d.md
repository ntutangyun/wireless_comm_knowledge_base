---
id: 2026-05-26_arxiv-elevation-aware-sul-ds2d
date_published: 2026-02-23
date_found: 2026-05-26
type: academic-paper
title_en: "Elevation-Aware Supplementary Uplink for Direct Satellite-to-Device Communications"
title_zh: "面向卫星直连设备通信的仰角感知补充上行"
url: "https://arxiv.org/abs/2602.19427"
source_quality: abstract_only
topics: [direct-to-device, DS2D, NTN, supplementary-uplink, LEO, uplink-coverage]
topic_primary: sat-direct-device
topics_secondary: [ntn, leo-constellations]
novelty_score: 3
---

## Summary (EN)
Direct satellite-to-device (DS2D) communication lets ordinary mobile phones connect straight to LEO satellites with no terrestrial infrastructure, but the uplink is the hard direction: long propagation distance, severe path loss, and tight handset power limits make it especially unreliable at low elevation angles and beam edges — exactly where a pass spends much of its time. This paper proposes an elevation-aware supplementary uplink (SUL) scheme that exploits the predictable orbital geometry of LEO to decide, moment by moment, which uplink carrier the device should use.

The mechanism borrows the 3GPP supplementary-uplink idea (a lower-frequency uplink carrier paired with the primary one) and makes the carrier choice a function of the satellite's instantaneous elevation angle. When the link margin is healthy (high elevation), the device uses the primary uplink; as the satellite drops toward the horizon and margin erodes, it switches to the lower-frequency SUL carrier, which propagates better and restores link budget. A hysteresis rule on the elevation-based margin estimate prevents the device from ping-ponging between carriers near the switching threshold.

In simulation under realistic UE power constraints, the scheme extends coverage toward low-elevation regions, raises availability across the whole satellite pass (not just near zenith), and does so with only a small number of uplink carrier transitions per pass. The contribution is a concrete, geometry-driven uplink-management policy for DS2D rather than a new waveform.

## Summary (ZH)
卫星直连设备（DS2D）通信让普通手机无需地面基础设施即可直连 LEO 卫星，但上行是困难方向：传播距离远、路损严重、手机发射功率受限，使其在低仰角与波束边缘尤其不可靠——而一次过境的大部分时间恰恰处于这些区域。本文提出一种仰角感知的补充上行（SUL）方案，利用 LEO 可预测的轨道几何，逐时刻决定设备应使用哪个上行载波。

其机制借用 3GPP 的补充上行思想（一个较低频率的上行载波与主载波配对），并将载波选择设为卫星瞬时仰角的函数。当链路余量充足（高仰角）时，设备使用主上行；当卫星落向地平线、余量下降时，切换到传播更好、可恢复链路预算的低频 SUL 载波。基于仰角余量估计的迟滞规则可防止设备在切换门限附近来回抖动。

在符合实际 UE 功率约束的仿真中，该方案将覆盖延伸至低仰角区域，提升整次过境（而非仅天顶附近）的可用性，且每次过境只需少量上行载波切换。其贡献是面向 DS2D 的、由几何驱动的具体上行管理策略，而非新波形。

## Key technical points (EN)
- Targets the **DS2D uplink** bottleneck: long distance + severe path loss + handset power limits → unreliable at **low elevation / beam edges**.
- **Elevation-aware SUL**: switches between the primary uplink carrier and a **lower-frequency supplementary uplink (SUL)** carrier based on the satellite's instantaneous elevation angle.
- **Hysteresis** on the elevation-based link-margin estimate avoids excessive carrier ping-pong.
- Simulation: extended low-elevation coverage, higher availability across the whole pass, with few carrier transitions under realistic power limits.

## Key technical points (ZH)
- 针对 **DS2D 上行** 瓶颈：远距离 + 严重路损 + 手机功率受限 → **低仰角 / 波束边缘** 不可靠。
- **仰角感知 SUL**：基于卫星瞬时仰角，在主上行载波与 **低频补充上行（SUL）** 载波间切换。
- 对仰角链路余量估计施加 **迟滞**，避免载波频繁来回切换。
- 仿真：覆盖延伸至低仰角、整次过境可用性提升，且在实际功率约束下切换次数很少。

## Why it matters / what's new (EN)
DS2D's commercial momentum (Starlink Direct-to-Cell, AST SpaceMobile) makes uplink reliability the binding constraint, and most of the literature attacks it with waveform/coding or constellation design. This paper instead adds a lightweight, deployable control-plane policy: reuse 3GPP's existing SUL feature but drive the carrier choice from orbital geometry the device can already predict. For the KB it sits alongside the techno-economic and constellation DS2D entries with a specific link-layer mechanism for the hardest part of the pass — the low-elevation uplink.

## Why it matters / what's new (ZH)
DS2D 的商业势头（Starlink Direct-to-Cell、AST SpaceMobile）使上行可靠性成为约束瓶颈，而多数文献用波形/编码或星座设计来应对。本文则增加一个轻量、可部署的控制面策略：复用 3GPP 已有的 SUL 特性，但用设备本就能预测的轨道几何来驱动载波选择。对 KB 而言，它与既有的 DS2D 技术经济与星座条目并列，为过境中最困难的环节——低仰角上行——提供了一个具体的链路层机制。
