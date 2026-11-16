---
id: 2026-11-16_arxiv-openglass-esp32-glasses-wifi-local-mllm-split-acl-demo
date_published: 2026-07-03
date_found: 2026-11-16
technology: edge-ai
type: academic-paper
title_en: "OpenGlass: ESP32 glasses stream frames over Wi-Fi to a nearby host running a local multimodal LLM, reaching 993 ms median query-to-audio latency (ACL 2026 demo)"
title_zh: "OpenGlass：ESP32 眼镜经 Wi-Fi 把画面传给附近主机上的本地多模态大模型，查询到语音的中位时延 993 毫秒（ACL 2026 系统演示）"
url: "https://arxiv.org/abs/2607.03213"
source_quality: full
topics: [smart-glasses, wifi, sensing-computing-split, multimodal-llm, local-first, latency]
topic_primary: compute-offloading
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Shanghai Qizhi Institute and Tsinghua authors present OpenGlass, an open-source system (accepted to ACL 2026 System Demonstrations, arXiv 3 July 2026) for low-latency visual assistance aimed at blind and low-vision users. It splits sensing from computing: an ESP32-S3 glasses-side unit with an OV5640 camera captures images, and a nearby consumer-grade host (a laptop in the evaluation; phones and tablets are named as future targets) runs speech recognition, a local multimodal LLM served through llama.cpp, and speech output. The paper's argument is that cloud assistants add multi-second network delay and upload first-person imagery, while the glasses themselves cannot host the model.

The glasses send frames to the host over a local Wi-Fi or hotspot link, and the host streams partial model output into speech as early as possible. Link computed over: Wi-Fi (the latency results use a real ESP32 Wi-Fi camera link to a nearby host; cloud baselines are measured from the same glasses capture path). This is a July 2026 preprint found through a search of mobile-systems venues, so it is a backfill of about four months rather than a fresh posting.

## Summary (ZH)

上海期智研究院与清华大学的作者提出 OpenGlass，一个面向盲人与低视力用户的低时延视觉辅助开源系统（已被 ACL 2026 系统演示收录，arXiv 于 2026 年 7 月 3 日发布）。它把感知与计算拆开：眼镜端为带 OV5640 相机的 ESP32-S3 单元，负责采集图像；附近的消费级主机（评测中为笔记本，手机与平板被列为后续目标）运行语音识别、通过 llama.cpp 提供的本地多模态大模型以及语音输出。论文的论点是，云端助手会带来数秒的网络延迟并要求上传第一视角图像，而眼镜本身无法承载模型。

眼镜通过本地 Wi-Fi 或热点链路把画面发给主机，主机尽早把模型的部分输出流式送入语音合成。所经链路：Wi-Fi（时延结果基于 ESP32 到附近主机的真实 Wi-Fi 摄像链路；云端基线沿用同一眼镜采集路径）。这是一篇 2026 年 7 月的预印本，经检索移动系统类会议发现，因此属于约四个月的回溯收录，而非新发布。

## Key technical points (EN)

- Over the real ESP32 Wi-Fi link, the full pipeline reaches a median user-to-audio latency of 993 ms with resized 896x504 payloads (97.5% of trials under 2 s) and 1625 ms with raw 1280x720 payloads (93.3% under 2 s).
- Under the same Wi-Fi capture path, cloud baselines are slower: Qwen-VL-Max at 2065 ms median (46.7% under 2 s) and Gemini 2.5 Flash at 4927 ms median (0% under 2 s), with P95 tails of 7.3 s and 11.5 s.
- Resizing the capture from 1280x720 to 896x504 cuts time to first token from 1222 to 528 ms (2.3x); the failures attributed to Wi-Fi/capture jitter are 2 of 3 below-2 s misses for the resized setting.
- A resolution sweep shows the link-and-model trade-off: at 640x480 the payload is about 32.5 KB, mean first-token time 537 ms and mean user-to-audio 825 ms, versus 78.1 KB, 1150 ms and 1493 ms at 1280x720; the authors propose downshifting resolution under weak Wi-Fi.
- Streaming partial output into speech, a safety-aware abstention rule with retake guidance, and auditable timestamped logs are the other system pieces; code, hardware instructions, prompts, evaluation data and logs are released.
- Stated limits: it is a user-initiated reference platform, not a certified navigation aid; long-tail latency from Wi-Fi and model jitter remains and is handled by retake guidance and abstention.

## Key technical points (ZH)

- 在真实的 ESP32 Wi-Fi 链路上，完整流水线在缩放为 896x504 的负载下用户到语音的中位时延为 993 毫秒（97.5% 的试验低于 2 秒），原始 1280x720 负载下为 1625 毫秒（93.3% 低于 2 秒）。
- 在同样的 Wi-Fi 采集路径下，云端基线更慢：Qwen-VL-Max 中位 2065 毫秒（46.7% 低于 2 秒），Gemini 2.5 Flash 中位 4927 毫秒（0% 低于 2 秒），P95 尾部分别为 7.3 秒与 11.5 秒。
- 把采集从 1280x720 缩放到 896x504，首词时间由 1222 降至 528 毫秒（2.3 倍）；缩放设置下 3 次超 2 秒的失败中，有 2 次归因于 Wi-Fi/采集抖动。
- 分辨率扫描展示了链路与模型的权衡：640x480 时负载约 32.5 KB、平均首词时间 537 毫秒、用户到语音均值 825 毫秒，而 1280x720 时为 78.1 KB、1150 毫秒与 1493 毫秒；作者建议在 Wi-Fi 较弱时降低分辨率。
- 其余系统要素包括将部分输出流式送入语音、带重拍指引的安全感知弃答规则，以及带时间戳的可审计日志；代码、硬件说明、提示词、评测数据与日志均已公开。
- 论文自述的局限：它是用户主动发起的参考平台，并非经认证的导航辅助；Wi-Fi 与模型抖动造成的长尾时延依然存在，靠重拍指引与弃答处理。

## Why it matters / what's new (EN)

It gives measured numbers for a glasses-to-nearby-host split over Wi-Fi, including how much of the delay comes from payload size and the link, and compares it against cloud services on the same capture path. The host is a laptop rather than a phone, the cloud comparison is a single configuration, and the evaluation set is small and assistive-use specific, so the result is a reference point for the split rather than a general benchmark.

## Why it matters / what's new (ZH)

它给出了"眼镜到附近主机"经 Wi-Fi 分工的实测数字，包括负载大小与链路对时延的贡献，并在同一采集路径上与云服务对比。主机为笔记本而非手机，云端对比只有一种配置，评测集规模小且针对辅助场景，因此其结果是该分工的一个参照点，而非通用基准。

## Images

![OpenGlass system framework and latency stages from glasses capture to host speech output | OpenGlass 系统框架及从眼镜采集到主机语音输出的时延阶段](https://arxiv.org/html/2607.03213v1/figures/glass_pipeline8.png)
