---
id: 2026-08-19_arxiv-industrial-wifi-wigle-measurement
date_published: 2025-09-21
date_found: 2026-08-19
type: academic-paper
technology: wifi
title_en: "In Numeris Veritas: An Empirical Measurement of Wi-Fi Integration in Industry"
title_zh: "数字见真章：基于 WiGLE 的工业 Wi-Fi 部署与安全配置实证测量"
url: "https://arxiv.org/abs/2509.16987"
source_quality: full
topics: [security, WPA2, WPA3, WEP, industrial-WiFi, OT, measurement-study, WiGLE, dataset]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 1
---

## Summary (EN)
Kampourakis, Gkioulos and Katsikas (NTNU Gjøvik) with Smiliotopoulos (University of the Aegean) provide the first data-driven picture of how much Wi-Fi has crept into industrial / operational-technology (OT) environments and how it is configured. Rather than surveying operators, they mine the crowdsourced WiGLE wardriving database. The pipeline has four steps: (1) select 264 industrially significant regions worldwide (LLM-assisted shortlist validated against OpenStreetMap / ESRI land-use data, ~75,000 km² in total); (2) query WiGLE inside those regions with 24 SSID keyword filters spanning ICS/OT vocabulary (PLC, SCADA, HMI), infrastructure terms (substation, plant) and vendor names (Siemens, Honeywell), within the API's 100-request/day limit; (3) merge the 43,188 candidate networks; (4) remove duplicates and false positives with heuristics and manual Google Earth verification. The result is a public dataset of 1,087 high-confidence industrial Wi-Fi networks (2.6 % retention), released via GitHub.

The headline finding is that Wi-Fi is clearly present across industrial sectors but is secured like a decade-old office network. WPA2 protects 73.9 % of the identified networks; 6.3 % still run WEP, 5.8 % original WPA and 2.0 % are open — roughly one in seven networks with a security posture that is trivially breakable — while WPA3, mandatory for Wi-Fi 6/6E/7 certification since 2020, appears on only 1.9 % (10 % unknown). SSIDs themselves leak operational context: "PLC" appears in 32 % of names, "plant" in 30.1 % and "Siemens" in 21.2 %, handing a passive observer the role and vendor of the equipment behind the AP. Vendor OUI analysis is dominated by Cisco (5.5 %), Netgear (4.6 %), TP-Link (4.0 %) and Siemens (3.5 %), with 24.3 % unidentified — a mix of enterprise gear and consumer routers. Geographic retention rates vary widely (very high in the Nigeria and Saudi Arabia samples, very low in France), which the authors attribute as much to naming conventions and WiGLE coverage as to real deployment differences.

The paper is a measurement study, so its value is the dataset and the baseline numbers, not a new mechanism; the authors are explicit that keyword-based SSID filtering favours descriptively named networks, that obfuscated or non-English SSIDs are missed, and that WiGLE reflects where volunteers drive rather than a uniform sample. It was first posted in September 2025 (cs.CR) and is included here as a security-privacy baseline that the KB previously lacked: an empirical anchor for how far the WPA3 / 802.11ax-be transition has *not* reached the OT edge.

## Summary (ZH)
Kampourakis、Gkioulos、Katsikas（挪威科技大学 Gjøvik）与 Smiliotopoulos（爱琴海大学）首次以数据驱动方式描绘 Wi-Fi 渗入工业/运营技术（OT）环境的程度及其配置方式。他们不做运营商问卷，而是挖掘众包 WiGLE 战争驾驶数据库。流程分四步：（1）在全球选出 264 个具有工业意义的区域（LLM 辅助初选，经 OpenStreetMap/ESRI 土地利用数据验证，总计约 75,000 km²）；（2）在这些区域内以 24 个 SSID 关键词过滤器查询 WiGLE，涵盖 ICS/OT 术语（PLC、SCADA、HMI）、基础设施用语（substation、plant）与厂商名（Siemens、Honeywell），并遵守 API 每日 100 次请求限制；（3）合并 43,188 个候选网络；（4）用启发式规则与人工 Google Earth 核验去除重复与误报。最终得到 1,087 个高置信度工业 Wi-Fi 网络的公开数据集（保留率 2.6%），经 GitHub 发布。

核心发现：Wi-Fi 已明显进入各工业部门，但其安全配置像十年前的办公网络。73.9% 的网络使用 WPA2；6.3% 仍在用 WEP、5.8% 用初代 WPA、2.0% 为开放网络——约七分之一网络的安全态势可被轻易攻破；而自 2020 年起 Wi-Fi 6/6E/7 认证强制要求的 WPA3 仅占 1.9%（另有 10% 未知）。SSID 本身泄露运营信息："PLC" 出现在 32% 的名称中，"plant" 30.1%，"Siemens" 21.2%，被动观察者由此即可得知 AP 背后设备的角色与厂商。OUI 厂商分析以 Cisco（5.5%）、Netgear（4.6%）、TP-Link（4.0%）、Siemens（3.5%）居前，24.3% 未识别——企业级设备与消费级路由器混杂。各地区保留率差异很大（尼日利亚、沙特样本极高，法国极低），作者认为这既反映真实部署差异，也同样反映命名习惯与 WiGLE 覆盖。

本文是测量研究，价值在于数据集与基线数字而非新机制；作者明确指出关键词式 SSID 过滤偏向描述性命名的网络，混淆或非英文 SSID 会被漏掉，且 WiGLE 反映志愿者的行驶范围而非均匀采样。论文首发于 2025 年 9 月（cs.CR），此处作为本库此前缺少的安全-隐私基线收录：它是"WPA3 / 802.11ax-be 迁移在多大程度上尚未触及 OT 边缘"的实证锚点。

## Key technical points (EN)
- Method: 264 industrial regions (LLM-assisted, OSM/ESRI-validated) × 24 SSID keyword filters → WiGLE API → 43,188 candidates → 1,087 high-confidence industrial networks (2.6 %), public dataset.
- Encryption: WPA2 73.9 %, unknown 10 %, WEP 6.3 %, WPA 5.8 %, open 2.0 %, WPA3 1.9 %.
- SSID leakage: "PLC" 32 %, "plant" 30.1 %, "Siemens" 21.2 % of names.
- Vendors (OUI): Cisco 5.5 %, Netgear 4.6 %, TP-Link 4.0 %, Siemens 3.5 %, unidentified 24.3 %.
- Geography: retention very uneven (Nigeria / Saudi Arabia / Chile high; France 0.3 %) — partly a WiGLE-coverage and naming artefact.
- Limitations: keyword bias, obfuscated / non-English SSIDs missed, volunteer-driven spatial coverage.
- Positioning: 802.11ax/be meet industrial performance needs, but the security transition (WPA3) has barely reached the OT edge.

## Key technical points (ZH)
- 方法：264 个工业区域（LLM 辅助、OSM/ESRI 验证）× 24 个 SSID 关键词过滤 → WiGLE API → 43,188 候选 → 1,087 个高置信度工业网络（2.6%），公开数据集。
- 加密：WPA2 73.9%、未知 10%、WEP 6.3%、WPA 5.8%、开放 2.0%、WPA3 1.9%。
- SSID 泄露："PLC" 32%、"plant" 30.1%、"Siemens" 21.2%。
- 厂商（OUI）：Cisco 5.5%、Netgear 4.6%、TP-Link 4.0%、Siemens 3.5%、未识别 24.3%。
- 地域：保留率极不均衡（尼日利亚/沙特/智利高；法国 0.3%）——部分是 WiGLE 覆盖与命名习惯的伪影。
- 局限：关键词偏差、混淆/非英文 SSID 漏检、志愿者驱动的空间覆盖。
- 定位：802.11ax/be 可满足工业性能需求，但安全迁移（WPA3）几乎尚未触及 OT 边缘。

## Why it matters / what's new (EN)
The security-privacy bin so far holds protocol-level work — the association-privacy formal model (2026-08-13_arxiv-association-privacy-wifi-p2p-ble), the SoK on CSI biometrics (2026-08-04_arxiv-sok-wifi-csi-biometrics-security), the rural Piso-WiFi study (2026-05-04_arxiv-rural-wifi-security-piso-pmwani) and the 802.11az/bk ranging-security survey (2026-05-01_arxiv-secure-wifi-ranging-az-bk). It has had no field-measurement baseline of how deployed Wi-Fi is actually configured in a high-stakes vertical. This paper supplies one, and the numbers are the point: WPA3 below 2 % and WEP/WPA/open above 14 % on networks whose SSIDs advertise PLCs and substations. It is a low-novelty (1) entry — no new mechanism, an eleven-month-old preprint — but a useful reference for anyone modelling the real threat surface that TGbi privacy or TGbt post-quantum work will eventually have to reach.

## Why it matters / what's new (ZH)
security-privacy 分区此前收录的是协议层工作——关联隐私形式化模型（2026-08-13_arxiv-association-privacy-wifi-p2p-ble）、CSI 生物识别 SoK（2026-08-04_arxiv-sok-wifi-csi-biometrics-security）、乡村 Piso-WiFi 研究（2026-05-04_arxiv-rural-wifi-security-piso-pmwani）与 802.11az/bk 测距安全综述（2026-05-01_arxiv-secure-wifi-ranging-az-bk），但缺少一份关于高风险垂直行业中已部署 Wi-Fi 实际配置的现场测量基线。本文补上了这一空缺，数字本身就是要点：在 SSID 公然写着 PLC 与变电站的网络中，WPA3 不足 2%，WEP/WPA/开放超过 14%。这是一个低新颖度（1）条目——无新机制、预印本已发布十一个月——但对任何想建模 TGbi 隐私或 TGbt 后量子工作最终必须触达的真实威胁面的人而言，是有用的参考。

## Images
![Workflow: region selection → SSID keyword filters → WiGLE API → preprocessing → 1,087-network dataset | 流程：区域选择 → SSID 关键词过滤 → WiGLE API → 预处理 → 1,087 网络数据集](https://arxiv.org/html/2509.16987v1/workflow_ind_wifi.png)
![Encryption breakdown of the identified industrial Wi-Fi networks | 已识别工业 Wi-Fi 网络的加密方式分布](https://arxiv.org/html/2509.16987v1/encryption.png)
![Top-10 equipment vendors by OUI | 按 OUI 统计的前十设备厂商](https://arxiv.org/html/2509.16987v1/manu_top_10.png)
![Global distribution of the identified networks | 已识别网络的全球分布](https://arxiv.org/html/2509.16987v1/map.png)
