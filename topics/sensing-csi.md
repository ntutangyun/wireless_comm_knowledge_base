---
id: sensing-csi
last_updated: 2026-05-05
---

## Current state (EN)

This is the largest standards-track bin in the KB (11 primary entries) and covers everything that uses Wi-Fi signals to measure the *physical environment*: 802.11bf (the WLAN-sensing standard, ratified 2024), Channel State Information (CSI) processing, RF fingerprinting (RFF), and downstream applications. The 802.11bf standard defines four sensing configurations (monostatic / bistatic / multistatic / passive), guard-interval and signalling rules, and a sensing-procedure exchange. RFF — adjacent rather than 802.11bf-native — uses physical-layer hardware imperfections to identify a transmitter independent of MAC.

KB coverage spans (a) protocol-side modelling — `2026-05-01_arxiv-bf-ax-coexistence-ns3` (bf-vs-ax coexistence in ns-3), `2026-05-01_arxiv-multiband-passive-sensing` (sub-7 GHz beacons + mmWave TRN fields together); (b) ML-pipeline research — `2026-05-01_arxiv-wukong-neuro-wideband-sensing` (Transformer + diffusion CSI synthesis), `2026-05-01_arxiv-rf-lego-deep-unrolling` (deep-unrolling SP+DL components), `2026-05-04_arxiv-am-fm-wifi-foundation-model` (foundation model on 9.2 M CSI samples), `2026-05-01_arxiv-ssl-wifi-sensing-tutorial` (self-supervised tutorial); (c) applications — respiratory monitoring (`2026-05-04_arxiv-respirfi-respiratory-wifi-csi`), bandwidth-constrained activity recognition (`2026-05-01_arxiv-ibis-csi-bandwidth-constrained`), multi-user activity counting (`2026-05-03_arxiv-multiuser-wifi-sensing-counting`), federated indoor localisation (`2026-05-01_arxiv-fedwiloc-federated-localization`), RSSI-only sensing (`2026-05-03_arxiv-wirssi-rssi-only-wifi-sensing`).

Watch for: productisation milestones — the gap between published sensing accuracy (often 95-100 %) and what ships in commercial APs is the leading indicator of whether sensing becomes a real Wi-Fi 8 selling point; RFF-based device-fingerprint defenses (cross-references to `security-privacy`); regulatory developments around sensing privacy.

## Current state (ZH)

这是本 KB 中最大的标准化方向桶（11 条主属），涵盖一切利用 Wi-Fi 信号测量*物理环境*的工作：802.11bf（WLAN 感知标准，2024 年通过）、信道状态信息（CSI）处理、射频指纹（RFF），以及下游应用。802.11bf 定义了四种感知配置（单 / 双 / 多 / 被动站点）、保护间隔与信令规则，以及感知过程交互。RFF 邻近而非 802.11bf 原生，利用物理层硬件不完美性识别发射机，与 MAC 无关。

KB 覆盖跨越 (a) 协议侧建模——`2026-05-01_arxiv-bf-ax-coexistence-ns3`（bf 与 ax 在 ns-3 中的共存）、`2026-05-01_arxiv-multiband-passive-sensing`（sub-7 GHz 信标 + mmWave TRN 字段组合）；(b) ML 管线研究——`2026-05-01_arxiv-wukong-neuro-wideband-sensing`（Transformer + 扩散 CSI 合成）、`2026-05-01_arxiv-rf-lego-deep-unrolling`（深度展开 SP+DL 组件）、`2026-05-04_arxiv-am-fm-wifi-foundation-model`（9.2M CSI 样本的基础模型）、`2026-05-01_arxiv-ssl-wifi-sensing-tutorial`（自监督教程）；(c) 应用——呼吸监测（`2026-05-04_arxiv-respirfi-respiratory-wifi-csi`）、带宽受限的活动识别（`2026-05-01_arxiv-ibis-csi-bandwidth-constrained`）、多用户活动计数（`2026-05-03_arxiv-multiuser-wifi-sensing-counting`）、联邦室内定位（`2026-05-01_arxiv-fedwiloc-federated-localization`）、纯 RSSI 感知（`2026-05-03_arxiv-wirssi-rssi-only-wifi-sensing`）。

待关注：产品化节点——已发表的感知精度（常 95–100%）与商用 AP 实装能力之间的差距，是判断感知能否成为 Wi-Fi 8 真实卖点的领先指标；基于 RFF 的设备指纹防御（与 `security-privacy` 交叉）；感知隐私相关的监管动态。
