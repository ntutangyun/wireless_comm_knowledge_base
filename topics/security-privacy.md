---
id: security-privacy
last_updated: 2026-05-05
---

## Current state (EN)

This bin spans the full **security and privacy stack** of Wi-Fi: authentication weaknesses, MAC privacy, ranging-attack defenses, sensing privacy, formal protocol verification, and threat models for the agentic / sensing layers. The bin tilts academic — most contributions are individual attacks and individual defenses; vendor security responses tend to land in specific advisories rather than KB-shaped releases.

The bin holds a balanced mix of attack and defense work. Attack-side: `2026-05-03_ndss-airsnitch-wifi-client-isolation` (NDSS'26 systematic break of client-isolation guarantees), `2026-05-04_arxiv-csi-rff-microsignals-fingerprinting` (CSI-based RF fingerprinting on commodity Wi-Fi), `2026-05-04_arxiv-statefi-fsm-device-fingerprinting` (FSM-state device fingerprinting at 94-98 % accuracy), `2026-05-01_arxiv-vwattacker-vowifi-security` (LLM-driven VoWiFi UE testing — INFOCOM'26), `2026-05-04_arxiv-rural-wifi-security-piso-pmwani` (open challenges in rural deployments). Defense-side: today's two new entries — `2026-05-05_arxiv-wifi6-ce-preamble-signature` (PHY-preamble signatures against relay / spoofing on connection establishment) and `2026-05-05_arxiv-mac-rerandomization-runtime` (runtime MAC re-randomization without disconnection). Both spawned candidate-idea slots in `patent_pipeline/`. Other defenses are picked up here as secondary topics — `2026-05-01_arxiv-secure-wifi-ranging-az-bk` (secure-FTM, primary `ftm-ranging`).

Watch for: 802.11bn-specific security mechanisms (the EPCS context-transfer work in `roaming-mobility` has security implications); PHY-preamble defense ports to UHR-SIG (today's candidate `uhr-sig-ce-preamble-signature`); WPA3 successor discussion at IETF / IEEE; sensing-privacy regulation (a sensor-class technology raises GDPR-shaped questions); RFF-rotation defenses that pair with MAC re-randomization for full layer-2 unlinkability.

## Current state (ZH)

本桶涵盖 Wi-Fi 完整的**安全与隐私栈**：认证弱点、MAC 隐私、测距攻击防御、感知隐私、协议形式化验证，以及智能体 / 感知层威胁模型。本桶偏学术——大部分贡献是个别攻击与个别防御；厂商安全响应通常以具体公告而非 KB 形态发布。

本桶的攻击与防御工作分布均衡。攻击侧：`2026-05-03_ndss-airsnitch-wifi-client-isolation`（NDSS'26 系统性破坏客户端隔离）、`2026-05-04_arxiv-csi-rff-microsignals-fingerprinting`（商用 Wi-Fi 上基于 CSI 的射频指纹）、`2026-05-04_arxiv-statefi-fsm-device-fingerprinting`（FSM 状态设备指纹，94–98% 准确率）、`2026-05-01_arxiv-vwattacker-vowifi-security`（LLM 驱动的 VoWiFi UE 测试——INFOCOM'26）、`2026-05-04_arxiv-rural-wifi-security-piso-pmwani`（农村部署的开放挑战）。防御侧：今日两条新条目——`2026-05-05_arxiv-wifi6-ce-preamble-signature`（针对连接建立阶段中继 / 伪装的 PHY 前导码签名）和 `2026-05-05_arxiv-mac-rerandomization-runtime`（不断链的运行时 MAC 再随机化）。两者均在 `patent_pipeline/` 中孕育出候选位置。其他防御工作以次属形式落入本桶——`2026-05-01_arxiv-secure-wifi-ranging-az-bk`（安全 FTM，主属 `ftm-ranging`）。

待关注：802.11bn 专属安全机制（`roaming-mobility` 中的 EPCS 上下文转移含安全含义）；PHY 前导码防御移植到 UHR-SIG（今日候选 `uhr-sig-ce-preamble-signature`）；IETF / IEEE 上 WPA3 后继讨论；感知隐私监管（传感器类技术带来 GDPR 形态的问题）；与 MAC 再随机化配套以实现完整二层不可链接性的 RFF 轮换防御。
