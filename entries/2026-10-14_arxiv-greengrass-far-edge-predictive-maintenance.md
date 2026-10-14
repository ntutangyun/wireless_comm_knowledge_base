---
id: 2026-10-14_arxiv-greengrass-far-edge-predictive-maintenance
date_published: 2026-10-10
date_found: 2026-10-14
technology: edge-ai
type: academic-paper
title_en: "Far-edge ML inference on AWS IoT Greengrass v2 for industrial predictive maintenance: measured latency and bandwidth against a cloud-only baseline"
title_zh: "AWS IoT Greengrass v2 远端边缘机器学习推理用于工业预测性维护：与纯云基线对比的延迟与带宽实测"
url: "https://arxiv.org/abs/2610.14815"
source_quality: full
topics: [Industrial-IoT, predictive-maintenance, AWS-IoT-Greengrass, ONNX-Runtime, MQTT, cloud-edge]
topic_primary: edge-orchestration
topics_secondary: [on-device-inference]
novelty_score: 2
---

## Summary (EN)

A team at Kwame Nkrumah University of Science and Technology (Kumasi, Ghana) reports an AWS deployment of a hybrid cloud-edge pipeline for manufacturing predictive maintenance. Two configurations run on real AWS infrastructure and are compared: Configuration A sends all sensor telemetry to the cloud, while Configuration B runs a local ML inference component on an AWS IoT Greengrass v2 gateway and forwards only anomaly alerts and batch summaries to AWS IoT Core.

The edge gateway is an Amazon EC2 t3.small instance (2 vCPU, 2 GB RAM, us-east-1), chosen as a stand-in for a budget industrial gateway. The model is a Random Forest exported to ONNX (6.1 MB) and executed with ONNX Runtime inside a custom Greengrass component (com.iiot.MLInference), with Stream Manager handling offline queuing and export. The training data is a synthetic generator that replicates the statistical properties of the NASA CMAPSS turbofan data (48,755 labelled readings from simulated run-to-failure units, 14 sensor features), not real factory data.

Reported results: cloud-bound bandwidth falls 86.8% (63.6 KB to 7.2 KB per 200-reading window); decision latency falls from a 23.1 ms cloud round trip to 0.09 ms local inference (the paper calls this 256x); the anomaly-class F1 is 0.84 with 91% recall (precision 0.78). The system-uptime and cloud-disconnection experiment is described in the paper as a planned extension, not a reported result.

## Summary (ZH)

来自加纳库马西夸梅·恩克鲁玛科技大学的团队报告了一个面向制造业预测性维护的云边混合流水线的 AWS 部署。两种配置在真实 AWS 基础设施上对比：配置 A 把全部传感器遥测送往云端；配置 B 在 AWS IoT Greengrass v2 网关上运行本地机器学习推理组件，只把异常告警和批量摘要转发到 AWS IoT Core。

边缘网关是一台 Amazon EC2 t3.small 实例（2 vCPU、2 GB 内存，us-east-1），用来代表低成本工业网关。模型是导出为 ONNX 的随机森林（6.1 MB），在自定义 Greengrass 组件（com.iiot.MLInference）内用 ONNX Runtime 执行，由 Stream Manager 负责离线排队与导出。训练数据来自一个合成生成器，复现 NASA CMAPSS 涡扇数据的统计特性（模拟的运行至失效单元共 48,755 条带标签读数，14 个传感器特征），并非真实工厂数据。

报告结果：上云带宽下降 86.8%（每 200 条读数窗口从 63.6 KB 降到 7.2 KB）；决策延迟从 23.1 ms 的云端往返降到 0.09 ms 的本地推理（论文称为 256 倍）；异常类 F1 为 0.84、召回率 91%（精确率 0.78）。系统可用性与云断连实验在论文中被列为后续扩展，并非已报告的结果。

## Key technical points (EN)

- Two configurations on real AWS: cloud-only (A) vs Greengrass v2 edge inference with selective cloud sync (B).
- Edge host: EC2 t3.small (2 vCPU, 2 GB); model: Random Forest as a 6.1 MB ONNX artifact run with ONNX Runtime in a custom Greengrass component; MQTT / Greengrass IPC / Stream Manager for messaging and offline queuing.
- Data: synthetic, CMAPSS-like (48,755 labelled readings, 14 sensors); anomaly threshold RUL <= 30 cycles.
- Bandwidth 63.6 KB to 7.2 KB per 200-reading window (-86.8%); decision latency 23.1 ms to 0.09 ms; anomaly F1 0.84, recall 91%, precision 0.78.
- Cloud-disconnection resilience is instrumented but not yet reported.

## Key technical points (ZH)

- 在真实 AWS 上对比两种配置：纯云（A）与 Greengrass v2 边缘推理加选择性云同步（B）。
- 边缘主机：EC2 t3.small（2 vCPU、2 GB）；模型：以 6.1 MB ONNX 工件形式部署的随机森林，在自定义 Greengrass 组件中用 ONNX Runtime 运行；用 MQTT / Greengrass IPC / Stream Manager 做消息传递与离线排队。
- 数据：合成的类 CMAPSS 数据（48,755 条带标签读数、14 个传感器）；异常阈值为剩余寿命 RUL <= 30 个周期。
- 带宽每 200 条读数窗口从 63.6 KB 降到 7.2 KB（-86.8%）；决策延迟从 23.1 ms 降到 0.09 ms；异常类 F1 0.84、召回率 91%、精确率 0.78。
- 云断连下的韧性已加入测量框架，但尚未给出结果。

## Why it matters / what's new (EN)

This is a small measurement of a commercial edge runtime (Greengrass v2) doing local inference in an IIoT setting. The numbers should be read with the caveats the paper itself supports: the "edge" is a cloud VM, the data are synthetic, and the 0.09 ms figure is local inference time only, compared with a cloud round trip measured on the same infrastructure; the 23.1 ms baseline is the mean MQTT PUBACK latency inside us-east-1, which the paper calls an AWS-internal best case. It is a deployment reference point rather than a new mechanism.

## Why it matters / what's new (ZH)

本文是对商用边缘运行时（Greengrass v2）在工业物联网场景下做本地推理的一次小规模实测。解读数字时应结合论文自身的限定：所谓"边缘"是一台云虚拟机，数据为合成数据，0.09 ms 仅是本地推理时间，对比对象是在同一基础设施上测得的云端往返；23.1 ms 基线是 us-east-1 区域内 MQTT PUBACK 的平均时延，论文称之为 AWS 内部的最佳情形。它是一个部署参考点，而非新机制。

## Images

*(No redistributable images for this entry.)*
