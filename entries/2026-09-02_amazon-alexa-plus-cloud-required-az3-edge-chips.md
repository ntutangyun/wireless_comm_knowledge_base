---
id: 2026-09-02_amazon-alexa-plus-cloud-required-az3-edge-chips
date_published: 2025-10-29
date_found: 2026-09-02
type: industry-news
technology: edge-ai
title_en: "Amazon's Alexa+ arc: dropping the last on-device option, then shipping dedicated on-device silicon anyway"
title_zh: "Amazon Alexa+ 的两步走：先取消最后的本地处理选项，再专门为设备端上新芯片"
url: "https://www.aboutamazon.com/news/devices/amazon-new-echo-devices-alexa-plus"
source_quality: full
topics: [Alexa+, AZ3, AZ3-Pro, voice-assistant, wake-word, cloud-processing, edge-silicon, generative-AI]
topic_primary: home-ai-assistant
topics_secondary: [edge-ai-silicon, on-device-inference]
novelty_score: 3
---

## Summary (EN)

Home-assistant vendors almost never state their compute-placement trade-offs in launch material — this scout's runs on 2026-08-31 and earlier documented that finding directly, after Google's own "Gemini for Home" announcement turned out to contain zero statements about where processing happens. Amazon's Alexa+ rollout is the exception, because the two halves of the story, read together, amount to an explicit statement of the trade-off: Amazon first removed the one thing that let Echo devices stay off the cloud, and then built dedicated on-device silicon anyway.

**Step one (announced 2025-03-15, effective 2025-03-28):** three Echo models — Echo Dot (4th Gen), Echo Show 10, Echo Show 15 — had offered a "Do Not Send Voice Recordings" setting that kept voice processing entirely on-device. Amazon discontinued it, automatically switching affected users to a cloud-processing mode, and stated the reason plainly: "As we continue to expand Alexa's capabilities with generative AI features that rely on the processing power of Amazon's secure cloud, we have decided to no longer support this feature." The timing lines up with Alexa+'s February 2025 announcement and early-access rollout — the generative rebuild needed cloud compute that the on-device path couldn't supply, so the on-device path was cut.

**Step two (announced 2025-09-30, shipped Oct-Nov 2025):** Amazon's new Echo hardware line built "from scratch for Alexa+" — Echo Dot Max, Echo Studio, Echo Show 8, Echo Show 11 — ships with two custom silicon designs. The AZ3 chip (Echo Dot Max) runs conversation detection and an improved microphone array on-device, lifting wake-word detection accuracy by over 50%. The AZ3 Pro chip (Echo Studio, Echo Show 8/11) adds on-device support for "state-of-the-art language models and vision transformers" on top of AZ3's audio stack. Amazon's own material does not delineate which specific Alexa+ capabilities these chips fully resolve on-device versus merely accelerate before a cloud round-trip — the announcement emphasizes "edge-based computing" and "AI edge models" without stating a boundary.

## Summary (ZH)

家庭助理厂商在产品发布材料中几乎从不说明自己在算力放置上的取舍——本 scout 在 2026-08-31 及更早的运行中已直接记录过这一发现：Google 自己的 "Gemini for Home" 发布通稿被完整抓取后，竟然完全没有提及处理过程发生在哪里。Amazon 的 Alexa+ 发展轨迹是个例外，因为把这个故事的两半合在一起看，恰好构成了一次明确的取舍表态：Amazon 先取消了让 Echo 设备得以不依赖云端的唯一功能，随后却又专门为设备端造了芯片。

**第一步（2025-03-15 宣布，2025-03-28 生效）：** 三款 Echo 设备——Echo Dot（第4代）、Echo Show 10、Echo Show 15——此前提供"不发送语音录音"设置，可让语音处理完全在本地完成。Amazon 停用了该功能，把受影响用户自动切换到云端处理模式，并直接给出理由："随着我们持续用依赖 Amazon 安全云端算力的生成式 AI 功能扩展 Alexa 的能力，我们决定不再支持该功能。" 这一时间点与 Alexa+ 于 2025 年 2 月宣布并进入早期体验高度吻合——生成式重构所需的云端算力，是本地路径无法提供的，于是本地路径被砍掉。

**第二步（2025-09-30 宣布，2025 年 10-11 月出货）：** Amazon "为 Alexa+ 从零打造"的新一代 Echo 硬件——Echo Dot Max、Echo Studio、Echo Show 8、Echo Show 11——搭载两款定制芯片。AZ3 芯片（Echo Dot Max）在本地完成对话检测，配合更强的麦克风阵列，将唤醒词检测准确率提升超过 50%。AZ3 Pro 芯片（Echo Studio、Echo Show 8/11）在 AZ3 的音频能力基础上，新增对"先进语言模型与视觉 Transformer"的本地支持。但 Amazon 自己的资料并未说明这些芯片究竟是把哪些 Alexa+ 能力完全在本地解决，还是只是在云端往返之前做了本地加速——发布通稿只强调"边缘计算"与"AI 边缘模型"，未划出明确边界。

## Key technical points (EN)

- **2025-03-15 announcement, 2025-03-28 effective**: Amazon discontinues the "Do Not Send Voice Recordings" on-device-only processing option on Echo Dot (4th Gen), Echo Show 10, Echo Show 15 — the only Echo models that had ever offered it, and only in the US.
- **Stated reason**: generative-AI feature expansion requires cloud compute the on-device path cannot supply; explicit vendor admission that architecture followed capability, not the reverse.
- **2025-09-30 announcement / Oct-Nov 2025 ship**: Echo Dot Max ($99.99, AZ3 chip), Echo Studio ($219.99, AZ3 Pro), Echo Show 8/11 (AZ3 Pro) — all "built from scratch for Alexa+," shipping with Alexa+ early access out of the box.
- **AZ3**: on-device conversation detection + microphone-array processing; >50% wake-word detection accuracy improvement claimed.
- **AZ3 Pro**: adds on-device support for LLMs and vision transformers on top of AZ3's capabilities; Echo Studio described as supporting "all Alexa+ experiences out of the box."
- **Disclosure gap**: no latency, token/s, or model-size figures for anything running on AZ3/AZ3 Pro — consistent with this scout's running observation (Microsoft Aion, Apple AFM 3, Qualcomm VENTUNO Q) that flagship on-device AI announcements in 2026 routinely omit device-side performance numbers.
- **Adjacent finding, not this entry's substance**: Amazon's Echo hardware material also describes an "Omnisense" sensor platform combining camera, audio, ultrasound, Wi-Fi radar and accelerometer for ambient context-awareness — a Wi-Fi-sensing angle worth flagging to `wifi_research_scout` rather than covering here.

## Key technical points (ZH)

- **2025-03-15 宣布，2025-03-28 生效**：Amazon 停用 Echo Dot（第4代）、Echo Show 10、Echo Show 15 上的"不发送语音录音"纯本地处理选项——这是仅有的曾提供该功能的 Echo 机型，且仅限美国地区。
- **官方说明的原因**：生成式 AI 功能扩展需要本地路径无法提供的云端算力——厂商明确承认是架构追随能力，而非相反。
- **2025-09-30 宣布 / 2025 年 10-11 月出货**：Echo Dot Max（99.99 美元，AZ3 芯片）、Echo Studio（219.99 美元，AZ3 Pro）、Echo Show 8/11（AZ3 Pro）——均"为 Alexa+ 从零打造"，开箱即含 Alexa+ 早期体验。
- **AZ3**：本地完成对话检测与麦克风阵列处理；宣称唤醒词检测准确率提升超过 50%。
- **AZ3 Pro**：在 AZ3 能力基础上新增对大语言模型与视觉 Transformer 的本地支持；Echo Studio 被描述为"开箱即支持全部 Alexa+ 体验"。
- **披露缺口**：AZ3/AZ3 Pro 上运行的任何能力均未给出时延、tokens/s 或模型规模数字——与本 scout 持续观察到的现象一致（Microsoft Aion、Apple AFM 3、Qualcomm VENTUNO Q）：2026 年的旗舰端侧 AI 发布通稿普遍不公布设备端性能数字。
- **相邻发现，非本条目主体**：Amazon 的 Echo 硬件资料还提到一套 "Omnisense" 传感平台，结合摄像头、音频、超声波、**Wi-Fi 雷达**与加速度计做环境感知——这是一个值得标记给 `wifi_research_scout` 而非在本条目内展开的 Wi-Fi 感知线索。

## Why it matters / what's new (EN)

This closes `home-ai-assistant`, the last of this domain's 10 topic bins to remain empty across four prior runs (2026-08-28 through 2026-09-01). Runs 3 and 4 diagnosed why the bin stayed empty: consumer-assistant vendors simply don't discuss compute placement in launch blogs, even after the Step-11 domain-restriction fix replaced affiliate-listicle noise with genuine primary sources (Apple newsroom, blog.google, aboutamazon.com). Google's own Gemini-for-Home announcement was the clearest negative case — fetched in full, zero compute-placement content. Amazon's history is different only because the two announcements, read together rather than singly, force the trade-off into the open: cutting the on-device option and building on-device silicon are not contradictory once you see the 2025-03 move was about the *voice-pipeline backend* (all Alexa+ reasoning requires the cloud) while the 2025-09/10 chips are about *perception and interaction latency* (wake word, conversation turn-taking, mic-array processing) — a hybrid split that the vendor never states as a design principle but that the timeline makes legible.

**Disclosed as a deliberate backfill.** Both events are more than 12 months old relative to this run (2025-03 is ~18 months old; 2025-09/10 is ~11-12 months old) and would normally be dropped by the news-freshness guard. They are ingested anyway, per the guard's backfill exception, specifically because `home-ai-assistant` had zero coverage after four runs of genuine, escalating effort (open search → domain-restricted search → today's hardware/developer-doc-oriented search), and this is the first material found that actually answers the bin's central question rather than restating a feature list.

## Why it matters / what's new (ZH)

这条条目补上了 `home-ai-assistant`（家庭 AI 助手）分箱——这是本领域 10 个主题分箱中，在此前四次运行（2026-08-28 至 2026-09-01）里唯一始终空白的一个。第 3、4 次运行已经诊断出空白的原因：即便 Step-11 的域名限定修复已经把联盟营销类噪音换成了真正的一手信源（Apple 新闻室、blog.google、aboutamazon.com），消费级助手厂商在发布博文里也根本不谈算力放置在哪。Google 自己的 Gemini for Home 发布稿是最典型的反例——全文抓取后，完全不含任何算力放置相关表述。Amazon 的情况之所以不同，仅仅是因为把两次发布放在一起读（而非孤立地看），这种取舍被迫摆到了台面上：取消本地处理选项与专门造设备端芯片，二者并不矛盾——一旦意识到 2025-03 的举措针对的是**语音处理流水线后端**（Alexa+ 的全部推理都需要云端），而 2025-09/10 的新芯片针对的是**感知与交互时延**（唤醒词、对话轮次、麦克风阵列处理），二者构成了一种厂商从未明说为设计原则、但从时间线上可以读出来的混合架构。

**特此披露为有意为之的补录。** 相对本次运行，两次事件均已超过 12 个月（2025-03 约 18 个月前；2025-09/10 约 11-12 个月前），按新鲜度门槛本应被丢弃。之所以仍然收录，是依据该门槛的补录例外条款——具体原因是 `home-ai-assistant` 分箱在四次运行、力度不断升级的真实尝试后（开放搜索 → 域名限定搜索 → 本次转向硬件规格/开发者文档导向的搜索）依然毫无覆盖，而这是第一份真正回答了该分箱核心问题、而非仅仅罗列功能清单的材料。

## Images

*(No redistributable images for this entry — the aboutamazon.com press images are gated behind a media-kit login; not hotlinked.)*
