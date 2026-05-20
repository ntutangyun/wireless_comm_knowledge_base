# -*- coding: utf-8 -*-
"""One-shot: add technology field + 32 new topics to topics.json."""
import json
from collections import Counter
from pathlib import Path

data_root = Path("wireless_knowledge_base")

with open(data_root / "topics.json", "r", encoding="utf-8") as f:
    old = json.load(f)

# Add technology field to all existing wifi topics
for t in old["topics"]:
    t["technology"] = "wifi"

# --- New topics for 5 technologies ---

cellular_topics = [
    {"id": "5g-nr", "technology": "cellular", "stack": "cellular-ran",
     "label_en": "5G NR (New Radio)", "label_zh": "5G NR 新空口",
     "description_en": "3GPP 5G New Radio: the air interface for 5G. Covers FR1 (sub-7 GHz) and FR2 (mmWave), flexible numerology, massive MIMO, beam management, and URLLC/eMBB/mMTC service classes.",
     "description_zh": "3GPP 5G 新空口：5G 的空口接口。覆盖 FR1（sub-7 GHz）与 FR2（mmWave）、灵活参数集、大规模 MIMO、波束管理，以及 URLLC/eMBB/mMTC 服务类别。"},
    {"id": "4g-lte", "technology": "cellular", "stack": "cellular-ran",
     "label_en": "4G LTE / LTE-Advanced", "label_zh": "4G LTE / LTE-Advanced",
     "description_en": "3GPP Long Term Evolution and LTE-Advanced: the global 4G standard. Covers OFDMA downlink, SC-FDMA uplink, carrier aggregation, CoMP, and HetNet architecture.",
     "description_zh": "3GPP 长期演进及 LTE-Advanced：全球 4G 标准。涵盖 OFDMA 下行、SC-FDMA 上行、载波聚合、CoMP 及 HetNet 架构。"},
    {"id": "6g-vision", "technology": "cellular", "stack": "cellular-ran",
     "label_en": "6G Vision & Research", "label_zh": "6G 愿景与研究",
     "description_en": "ITU IMT-2030 and early 6G research: sub-THz communications, AI-native air interface, integrated sensing and communication (ISAC), reconfigurable intelligent surfaces (RIS), and 3D network architecture.",
     "description_zh": "ITU IMT-2030 与 6G 早期研究：亚太赫兹通信、AI 原生空口、通信感知一体化（ISAC）、可重构智能表面（RIS）及三维网络架构。"},
    {"id": "cellular-massive-mimo", "technology": "cellular", "stack": "cellular-ran",
     "label_en": "Massive MIMO & Beamforming", "label_zh": "大规模 MIMO 与波束成形",
     "description_en": "Massive MIMO for cellular: antenna arrays with 64-256+ elements, hybrid beamforming, MU-MIMO scheduling, channel reciprocity exploitation (TDD), and AI/ML-driven beam management.",
     "description_zh": "蜂窝大规模 MIMO：64-256+ 阵元的天线阵列、混合波束成形、MU-MIMO 调度、信道互易性利用（TDD），以及 AI/ML 驱动的波束管理。"},
    {"id": "ntn", "technology": "cellular", "stack": "cellular-ran",
     "label_en": "Non-Terrestrial Networks (NTN)", "label_zh": "非地面网络 (NTN)",
     "description_en": "3GPP NTN: integrating satellite and high-altitude platform (HAPS) links into 5G/6G. Covers transparent and regenerative payload architectures, Doppler pre-compensation, and NTN-specific RAN protocols.",
     "description_zh": "3GPP NTN：将卫星及高空平台（HAPS）链路集成到 5G/6G 中。涵盖透明与再生载荷架构、多普勒预补偿及 NTN 特定 RAN 协议。"},
    {"id": "open-ran", "technology": "cellular", "stack": "cellular-ran",
     "label_en": "Open RAN / vRAN", "label_zh": "开放 RAN / 虚拟化 RAN",
     "description_en": "O-RAN Alliance architecture: disaggregated RAN with open fronthaul interfaces, RAN Intelligent Controller (RIC), virtualized DU/CU, and multi-vendor interoperability.",
     "description_zh": "O-RAN 联盟架构：具有开放前传接口的解耦式 RAN、RAN 智能控制器（RIC）、虚拟化 DU/CU 及多厂商互通。"},
    {"id": "network-slicing", "technology": "cellular", "stack": "cellular-core",
     "label_en": "Network Slicing", "label_zh": "网络切片",
     "description_en": "End-to-end network slicing in 5G: dedicated logical networks sharing the same physical infrastructure, each with guaranteed QoS. Involves NSSF, SDN orchestration, and slice-aware RAN scheduling.",
     "description_zh": "5G 端到端网络切片：共享同一物理基础设施的专用逻辑网络，各具 QoS 保证。涉及 NSSF、SDN 编排及切片感知的 RAN 调度。"},
    {"id": "mec", "technology": "cellular", "stack": "cellular-core",
     "label_en": "Multi-Access Edge Computing (MEC)", "label_zh": "多接入边缘计算 (MEC)",
     "description_en": "ETSI MEC: deploying compute at the network edge (near gNB/UPF) for ultra-low-latency applications. Covers service continuity, MEC federation, and AI inference offloading from UE to edge.",
     "description_zh": "ETSI MEC：在网络边缘（近 gNB/UPF 处）部署计算以实现超低时延应用。涵盖服务连续性、MEC 联邦及 UE 到边缘的 AI 推理卸载。"},
    {"id": "cellular-ai", "technology": "cellular", "stack": "cellular-cross",
     "label_en": "AI for Cellular Networks", "label_zh": "蜂窝网络 AI",
     "description_en": "AI/ML applied to cellular RAN and core: neural channel estimation, RL-based scheduling, LLM-driven network operations, AI-native 6G air interface, and 3GPP RAN3 ML study items.",
     "description_zh": "AI/ML 应用于蜂窝 RAN 与核心网：神经信道估计、基于 RL 的调度、LLM 驱动的网络运维、AI 原生 6G 空口，及 3GPP RAN3 ML 研究课题。"},
    {"id": "cellular-spectrum", "technology": "cellular", "stack": "cellular-cross",
     "label_en": "Cellular Spectrum & Policy", "label_zh": "蜂窝频谱与政策",
     "description_en": "Spectrum allocation for cellular: sub-1 GHz (coverage), mid-band / C-band (capacity/coverage balance), mmWave (hotspots), and emerging FR3 / upper mid-band (7-24 GHz). Includes WRC-23/27 decisions.",
     "description_zh": "蜂窝频谱分配：sub-1 GHz（覆盖层）、中频 / C-band（容量覆盖平衡）、mmWave（热点），以及新兴 FR3 / upper mid-band（7-24 GHz）。包含 WRC-23/27 决定。"},
    {"id": "cellular-security", "technology": "cellular", "stack": "cellular-cross",
     "label_en": "Cellular Security", "label_zh": "蜂窝安全",
     "description_en": "5G/6G security architecture: SUPI/SUCI privacy, 5G-AKA authentication, SEPP for roaming security, quantum-safe cryptography migration, and RAN/edge threat models.",
     "description_zh": "5G/6G 安全架构：SUPI/SUCI 隐私、5G-AKA 认证、用于漫游安全的 SEPP、抗量子密码迁移，及 RAN/边缘威胁模型。"},
    {"id": "redcap-iot", "technology": "cellular", "stack": "cellular-cross",
     "label_en": "RedCap / NR-Light IoT", "label_zh": "RedCap / NR-Light IoT",
     "description_en": "3GPP Reduced Capability (RedCap) NR devices: a 5G tier between eMBB and NB-IoT for wearables, industrial sensors, and video surveillance. eRedCap (Rel-18) further reduces bandwidth and antenna count.",
     "description_zh": "3GPP 降低能力（RedCap）NR 设备：位于 eMBB 与 NB-IoT 之间的 5G 层级，面向可穿戴、工业传感器和视频监控。eRedCap（Rel-18）进一步降低带宽和天线数量。"},
]

satellite_topics = [
    {"id": "starlink", "technology": "satellite", "stack": "sat-constellations",
     "label_en": "Starlink (SpaceX)", "label_zh": "星链 (Starlink)",
     "description_en": "SpaceX Starlink: the largest LEO constellation. Covers Gen1/Gen2 deployment, inter-satellite laser links, Direct-to-Cell service, user terminal evolution, and capacity measurements.",
     "description_zh": "SpaceX 星链：最大的低轨星座。覆盖 Gen1/Gen2 卫星部署、星间激光链路、Direct-to-Cell 服务、用户终端演进及容量实测。"},
    {"id": "leo-constellations", "technology": "satellite", "stack": "sat-constellations",
     "label_en": "LEO Constellations (OneWeb, Kuiper, Telesat)", "label_zh": "低轨星座 (OneWeb, Kuiper, Telesat)",
     "description_en": "Competing LEO constellations: OneWeb (Eutelsat), Amazon Project Kuiper, Telesat Lightspeed. Covers orbit design, ground segment, regulatory coordination, and service differentiation.",
     "description_zh": "竞争性低轨星座：OneWeb（Eutelsat）、Amazon Project Kuiper、Telesat Lightspeed。涵盖轨道设计、地面段、监管协调及服务差异化。"},
    {"id": "sat-iot", "technology": "satellite", "stack": "sat-protocols",
     "label_en": "Satellite IoT", "label_zh": "卫星物联网",
     "description_en": "IoT over satellite: NB-IoT NTN, LoRa via satellite, direct-to-satellite sensor networks. Addresses remote-area coverage, energy-constrained uplink, and store-and-forward architecture.",
     "description_zh": "卫星物联网：NB-IoT NTN、卫星 LoRa、直连卫星的传感器网络。解决偏远地区覆盖、能量受限上行及存储转发架构问题。"},
    {"id": "sat-direct-device", "technology": "satellite", "stack": "sat-protocols",
     "label_en": "Direct-to-Device (D2D) Satellite", "label_zh": "卫星直连设备 (D2D)",
     "description_en": "Connecting unmodified smartphones directly to satellites: Starlink Direct-to-Cell, AST SpaceMobile, Apple/Globalstar emergency SOS. Covers Doppler compensation, TDD timing, and link budget challenges.",
     "description_zh": "未经改装的智能手机直连卫星：Starlink Direct-to-Cell、AST SpaceMobile、Apple/Globalstar 紧急 SOS。涵盖多普勒补偿、TDD 时序及链路预算挑战。"},
    {"id": "sat-ai", "technology": "satellite", "stack": "sat-cross",
     "label_en": "AI for Satellite Networks", "label_zh": "卫星网络 AI",
     "description_en": "AI/ML for satellite: onboard AI processing, ML-driven beam-hopping, predictive orbit/Doppler estimation, AI-optimized ISL routing, and anomaly detection for mega-constellations.",
     "description_zh": "卫星 AI/ML：星上 AI 处理、ML 驱动的波束跳变、预测式轨道/多普勒估计、AI 优化的星间链路路由，以及巨型星座的异常检测。"},
    {"id": "ngso-regulation", "technology": "satellite", "stack": "sat-cross",
     "label_en": "NGSO Regulation & Coordination", "label_zh": "非静止轨道监管与协调",
     "description_en": "ITU/FCC regulatory framework for NGSO systems: spectrum sharing, interference protection, orbit debris mitigation, and multi-administration coordination.",
     "description_zh": "ITU/FCC 对非静止轨道（NGSO）系统的监管框架：频谱共享、干扰保护、轨道碎片减缓及多行政辖区协调。"},
]

bluetooth_topics = [
    {"id": "bt-le", "technology": "bluetooth", "stack": "bt-core",
     "label_en": "Bluetooth Low Energy (BLE)", "label_zh": "低功耗蓝牙 (BLE)",
     "description_en": "Bluetooth LE core specification (5.0-6.0): 2 Mbps PHY, extended advertising, periodic advertising, isochronous channels, channel classification, and connection subrating. The foundation for all modern Bluetooth applications.",
     "description_zh": "低功耗蓝牙核心规范（5.0-6.0）：2 Mbps PHY、扩展广播、周期性广播、同步信道、信道分类及连接子额定。所有现代蓝牙应用的基础。"},
    {"id": "bt-le-audio", "technology": "bluetooth", "stack": "bt-apps",
     "label_en": "LE Audio & Auracast", "label_zh": "LE Audio 与 Auracast",
     "description_en": "Bluetooth LE Audio: LC3 codec, Auracast broadcast audio, multi-stream audio, hearing-aid profiles. The next-generation Bluetooth audio stack replacing Classic Audio.",
     "description_zh": "低功耗音频：LC3 编解码器、Auracast 广播音频、多流音频、助听器规范。替代经典音频的下一代蓝牙音频协议栈。"},
    {"id": "bt-mesh", "technology": "bluetooth", "stack": "bt-apps",
     "label_en": "Bluetooth Mesh", "label_zh": "蓝牙 Mesh",
     "description_en": "Bluetooth Mesh networking: managed flooding, relay nodes, publish/subscribe model, mesh security (separation of concerns), and large-scale lighting/building-automation deployments.",
     "description_zh": "蓝牙 Mesh 组网：受控泛洪、中继节点、发布/订阅模型、Mesh 安全（关注点分离），以及大规模照明/楼宇自动化部署。"},
    {"id": "bt-channel-sounding", "technology": "bluetooth", "stack": "bt-core",
     "label_en": "Bluetooth Channel Sounding", "label_zh": "蓝牙信道探测",
     "description_en": "Bluetooth 6.0 Channel Sounding: phase-based ranging (PBR) and round-trip timing (RTT) for centimeter-level distance measurement. Enables secure proximity, digital key, and fine indoor location.",
     "description_zh": "蓝牙 6.0 信道探测：基于相位的测距（PBR）与往返计时（RTT），实现蓝牙设备间厘米级距离测量。支撑安全接近、数字钥匙及精细室内定位。"},
    {"id": "bt-security", "technology": "bluetooth", "stack": "bt-cross",
     "label_en": "Bluetooth Security & Privacy", "label_zh": "蓝牙安全与隐私",
     "description_en": "Bluetooth security: LE Secure Connections, cross-transport key derivation, address randomization, and known attack surfaces (BIAS, BLURtooth). Includes Bluetooth SIG security updates.",
     "description_zh": "蓝牙安全：LE 安全连接、跨传输密钥派生、地址随机化及已知攻击面（BIAS、BLURtooth）。包含 Bluetooth SIG 安全更新。"},
    {"id": "bt-location", "technology": "bluetooth", "stack": "bt-apps",
     "label_en": "Bluetooth Location Services", "label_zh": "蓝牙位置服务",
     "description_en": "Bluetooth direction finding: Angle of Arrival (AoA) and Angle of Departure (AoD) using antenna arrays. Enables sub-meter real-time location (RTLS), indoor navigation, and item tracking.",
     "description_zh": "蓝牙方向查找：使用天线阵列的到达角（AoA）与出发角（AoD）。实现亚米级实时定位（RTLS）、室内导航及物品追踪。"},
]

uwb_topics = [
    {"id": "uwb-ranging", "technology": "uwb", "stack": "uwb-standards",
     "label_en": "UWB Ranging & Positioning", "label_zh": "UWB 测距与定位",
     "description_en": "IEEE 802.15.4z UWB precise ranging: HRP (High Rate Pulse) and LRP (Low Rate Pulse) PHYs, time-of-flight with picosecond precision, single-sided/two-way/double-sided two-way ranging, and TDoA positioning.",
     "description_zh": "IEEE 802.15.4z UWB 精密测距：HRP（高速脉冲）与 LRP（低速脉冲）PHY、皮秒级飞行时间测量、单边/双向/双边双向测距，及 TDoA 定位。"},
    {"id": "uwb-fi-ra", "technology": "uwb", "stack": "uwb-apps",
     "label_en": "FiRa Consortium & UWB Services", "label_zh": "FiRa 联盟与 UWB 服务",
     "description_en": "FiRa Consortium: application-layer protocols built on IEEE 802.15.4z for interoperable UWB services: digital key (CCC), hands-free access, point-and-trigger, and secure payment.",
     "description_zh": "FiRa 联盟：构建在 IEEE 802.15.4z 之上的应用层协议，实现可互操作的 UWB 服务：数字钥匙（CCC）、免提门禁、指向即触发及安全支付。"},
    {"id": "uwb-security", "technology": "uwb", "stack": "uwb-standards",
     "label_en": "UWB Secure Ranging", "label_zh": "UWB 安全测距",
     "description_en": "UWB distance-bounding security: scrambled timestamp sequence (STS), physical-layer authenticated ranging, relay-attack resistance, and the 802.15.4z security enhancements that make UWB suitable for car-key and payment applications.",
     "description_zh": "UWB 距离界定安全：加扰时间戳序列（STS）、物理层认证测距、抗中继攻击，以及使 UWB 适用于车钥匙和支付应用的 802.15.4z 安全增强。"},
    {"id": "uwb-radar", "technology": "uwb", "stack": "uwb-apps",
     "label_en": "UWB Radar & Sensing", "label_zh": "UWB 雷达与感知",
     "description_en": "UWB-based radar sensing: presence detection, gesture recognition, vital-sign monitoring using impulse-radio UWB. Co-exists with ranging on the same hardware; emerging as a separate mode in 802.15.4ab.",
     "description_zh": "基于 UWB 的雷达感知：利用脉冲无线电 UWB 实现在场检测、手势识别、生命体征监测。在相同硬件上与测距共存；正作为独立模式出现在 802.15.4ab 中。"},
]

nearlink_topics = [
    {"id": "nearlink-slb", "technology": "nearlink", "stack": "nearlink-slb",
     "label_en": "SLB — SparkLink Basic (High-Speed Access)", "label_zh": "SLB 基础接入（高速低时延）",
     "description_en": "SparkLink Basic (SLB): the high-speed, low-latency NearLink mode for bandwidth-intensive applications (screen mirroring, wireless VR, high-res audio). Uses Polar codes and hybrid ARQ; targets <1 ms air-interface latency at multi-Gbps rates.",
     "description_zh": "星闪基础接入（SLB）：面向带宽密集型应用（投屏、无线 VR、高解析音频）的高速低时延 NearLink 模式。使用 Polar 码与混合 ARQ；目标空口时延 <1 ms、速率数 Gbps。"},
    {"id": "nearlink-sle", "technology": "nearlink", "stack": "nearlink-sle",
     "label_en": "SLE — SparkLink Low Energy", "label_zh": "SLE 低功耗模式",
     "description_en": "SparkLink Low Energy (SLE): power-optimised NearLink mode for IoT, wearables, and battery-constrained devices. Comparable to BLE but with higher data rates and lower latency at similar power budgets.",
     "description_zh": "星闪低功耗（SLE）：面向 IoT、可穿戴和电池受限设备的功耗优化 NearLink 模式。与 BLE 对标，但在同等功耗预算下提供更高数据速率与更低时延。"},
    {"id": "nearlink-coexistence", "technology": "nearlink", "stack": "nearlink-cross",
     "label_en": "NearLink Coexistence & Interoperability", "label_zh": "星闪共存与互通",
     "description_en": "NearLink coexistence with Wi-Fi, Bluetooth, and cellular in the shared 2.4/5/6 GHz bands. Covers interference management, spectrum etiquette, and multi-radio SoC integration (Huawei Kirin with Wi-Fi/BT/NearLink).",
     "description_zh": "星闪与 Wi-Fi、蓝牙、蜂窝在共享 2.4/5/6 GHz 频段中的共存。涵盖干扰管理、频谱规范及多模 SoC 集成（华为麒麟芯片 Wi-Fi/BT/星闪三模合一）。"},
    {"id": "nearlink-automotive", "technology": "nearlink", "stack": "nearlink-cross",
     "label_en": "NearLink Automotive Applications", "label_zh": "星闪车载应用",
     "description_en": "NearLink in automotive: digital car key (comparable to UWB CCC), in-vehicle audio/video distribution, wireless battery management (wBMS), and vehicle-to-infrastructure communication. A key vertical for SparkLink adoption in Chinese OEMs.",
     "description_zh": "星闪车载应用：数字车钥匙（对标 UWB CCC）、车载音视频分发、无线电池管理（wBMS）及车路通信。中国车企采用星闪的关键垂直场景。"},
]

all_topics = old["topics"] + cellular_topics + satellite_topics + bluetooth_topics + uwb_topics + nearlink_topics

new_topics = {"schema_version": 2, "stacks": old["stacks"], "topics": all_topics}

with open(data_root / "topics.json", "w", encoding="utf-8") as f:
    json.dump(new_topics, f, ensure_ascii=False, indent=2)

n_added = len(all_topics) - len(old["topics"])
print(f"Updated topics.json: {len(all_topics)} total ({n_added} new)")

tech_counts = Counter(t.get("technology", "wifi") for t in all_topics)
for tech, n in sorted(tech_counts.items()):
    print(f"  {tech}: {n} topics")
