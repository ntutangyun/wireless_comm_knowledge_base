---
id: 2026-10-19_arxiv-sage-protected-vlm-inference-smart-glasses
date_published: 2026-10-08
date_found: 2026-10-19
technology: edge-ai
type: academic-paper
title_en: "SAGE: efficient protected vision-language inference on smart glasses, measured on real Mentra Live glasses"
title_zh: "SAGE：智能眼镜上的高效受保护视觉语言推理，在真实 Mentra Live 眼镜上实测"
url: "https://arxiv.org/abs/2610.14089"
source_quality: abstract_only
topics: [smart-glasses, VLM, split-inference, INT8, privacy, thermal, Mentra-Live]
topic_primary: on-device-inference
topics_secondary: [edge-ai-networking, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

The paper addresses private split inference for vision-language assistants on smart glasses. Its premise is that protecting visual representations before transmission does not remove the cost of on-device vision encoding, wide protected tokens, or hardware-unaware execution. SAGE (Smart-glasses-Aware Guarded Encoding) keeps raw images and unprotected visual tokens on the trusted device, reduces visual input cost, executes shape-specialized INT8 graphs, and compresses protected representations into compact 256-dimensional INT8 packets before transmission. The operating point is chosen using downstream answer quality together with measured latency, memory and thermal behaviour on real Mentra Live glasses.

On a matched Qwen workload the authors report a 39.18% reduction in glasses inference latency, a 21.91% reduction in device-sensor temperature rise and a 96.56% smaller protected packet, while retaining 85.62% of the protected reference's relaxed utility and comparable prompted containment. In direct glasses-to-phone tests all 192 packets were delivered and median packet-plus-acknowledgment time fell from 71.3 ms to 10.0 ms. The compact protected interface also transferred across four additional VLM families.

## Summary (ZH)

论文研究智能眼镜上视觉语言助手的隐私拆分推理。其出发点是：在传输前保护视觉表示，并不能消除端侧视觉编码、较宽的受保护 token 以及与硬件无关的执行方式所带来的开销。SAGE（Smart-glasses-Aware Guarded Encoding）将原始图像和未受保护的视觉 token 留在可信设备上，降低视觉输入开销，执行按形状特化的 INT8 计算图，并在传输前把受保护表示压缩为紧凑的 256 维 INT8 数据包。其工作点依据下游回答质量，并结合在真实 Mentra Live 眼镜上测得的时延、内存与发热情况来选择。

在匹配的 Qwen 工作负载上，作者报告眼镜端推理时延降低 39.18%，设备传感器温升降低 21.91%，受保护数据包缩小 96.56%，同时保留了受保护参考方案 85.62% 的宽松效用，并具有相当的提示遏制（containment）表现。在眼镜到手机的直接测试中，192 个数据包全部送达，包加确认的中位时间从 71.3 ms 降至 10.0 ms。该紧凑的受保护接口还可迁移到另外四类 VLM。

## Key technical points (EN)

- Platform: Mentra Live smart glasses with a phone as the receiving side; split VLM inference.
- Device side: raw images and unprotected visual tokens never leave the glasses; reduced visual input cost; shape-specialized INT8 graphs.
- Link side: protected representation compressed into 256-dimensional INT8 packets.
- Operating point selected from answer quality plus measured latency, memory and thermal behaviour, not nominal model size.
- Reported: -39.18% glasses latency, -21.91% sensor temperature rise, -96.56% packet size, 85.62% of reference relaxed utility retained.
- Glasses-to-phone test: 192/192 packets delivered; median packet-plus-acknowledgment 71.3 ms to 10.0 ms.

## Key technical points (ZH)

- 平台：Mentra Live 智能眼镜，手机作为接收端；VLM 拆分推理。
- 设备侧：原始图像与未受保护的视觉 token 不离开眼镜；降低视觉输入开销；按形状特化的 INT8 计算图。
- 链路侧：受保护表示被压缩为 256 维 INT8 数据包。
- 工作点依据回答质量以及实测时延、内存与发热选择，而非名义模型大小。
- 报告结果：眼镜端时延 -39.18%，传感器温升 -21.91%，数据包 -96.56%，保留参考方案宽松效用的 85.62%。
- 眼镜到手机测试：192/192 个包送达；包加确认中位时间 71.3 ms 降至 10.0 ms。

## Why it matters / what's new (EN)

The authors conclude that private wearable VLM inference has to be optimised jointly across representation protection, communication and real-device execution, rather than through model compression alone. The latency, thermal and packet-time figures are measured on one wearable and one matched Qwen workload, and this record is based on the abstract only.

## Why it matters / what's new (ZH)

作者的结论是：可穿戴设备上的隐私 VLM 推理必须在表示保护、通信和真实设备执行三方面联合优化，而不能只靠模型压缩。时延、发热和包时间数据来自一台可穿戴设备和一个匹配的 Qwen 工作负载；本条目仅基于摘要。

## Images

*(No redistributable images for this entry.)*
