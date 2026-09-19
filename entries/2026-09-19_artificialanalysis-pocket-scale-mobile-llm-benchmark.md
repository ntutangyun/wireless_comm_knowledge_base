---
id: 2026-09-19_artificialanalysis-pocket-scale-mobile-llm-benchmark
date_published: 2026-08-24
date_found: 2026-09-19
technology: edge-ai
type: industry-news
title_en: "Artificial Analysis benchmarks 41 small models physically on phones, in partnership with Liquid AI"
title_zh: "Artificial Analysis 联合 Liquid AI，对 41 个小模型在真机手机上进行实测"
url: "https://artificialanalysis.ai/articles/mobile-phone-intelligence-inference"
source_quality: full
topics: [mobile-benchmark, small-language-models, llama.cpp, quantization, independent-measurement]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

Artificial Analysis, an AI benchmarking firm, published "Intelligence at pocket scale: Benchmarking small models and mobile phones" on 24 August 2026, in partnership with Liquid AI; it measures a broad cross-section of small language models on consumer phones. Liquid AI, whose LFM models are among the top-scoring results, developed the Pipette measurement tooling and operates the climate-controlled test facility where the benchmarking was run; Artificial Analysis says it independently validated Liquid AI's benchmarking methodology, with the intelligence scores being Artificial Analysis's own measurements while the device-performance numbers come from Liquid AI's harness. The methodology: the same quantized build (4-bit or smaller) of each candidate model is run on-device via the llama.cpp runtime, with inference actually executed on physical hardware in what the article describes as "a climate-controlled physical testing facility for repeatable results." The article's inference results are measured on the iPhone 17 Pro (12GB RAM); Artificial Analysis's separate live device page additionally lists the Galaxy S26 Ultra (12GB RAM). Of 41 quantized builds submitted, 33 completed successfully on the iPhone 17 Pro — the gap between submitted and completed builds is itself a data point about which model architectures survive mobile quantization and memory constraints without a crash or an unusable build.

Models spanned a wide size and lineage range, including LFM2.5-2.6B and LFM2.5-230M (Liquid AI's own family, unsurprising given the partnership but reported alongside competitors rather than isolated), Nanbeige4.2-3B, MiniCPM5-1B, Qwen3.5 9B, Ornith-1.0-9B, Ling 3.0 Tiny, Falcon-H1R-7B, and Google's Gemma 4 E4B — the last of which lets this finding be cross-checked directly against Google's own first-party LiteRT-LM device benchmarks for the same model (see this KB's 2026-09-08 Gemma 4 QAT entry, which explicitly noted no tokens/s figure was available in the material read at the time; Google's Hugging Face model cards for Gemma-4 (LiteRT-LM) publish per-device numbers, e.g. Gemma 4 E4B on iPhone 17 Pro CPU: 159 tok/s prefill / 9.7 tok/s decode). Each model is scored on two independent axes: an "intelligence" score averaged across five held-out evaluations (BFCL for tool-calling, IFBench for instruction-following, AA-Omniscience, GPQA Diamond, MATH-500), ranging 27-63 across the tested field on a 16K-context setting; and raw inference performance — end-to-end generation time for a fixed 1,024-token-prompt / 256-token-response workload (0.9-26.7 seconds across the field) and peak memory at 4K context (0.4-6.9GB). The two top intelligence scorers in the published excerpt, LFM2.5-2.6B and Nanbeige4.2-3B, both reached 63, with LFM2.5-2.6B completing the generation workload in 8.0 seconds against some 9B-class models exceeding 25 seconds for the same task — a direct, physically-measured illustration that parameter count alone does not predict intelligence score.

## Summary (ZH)

AI 评测机构 Artificial Analysis 于 2026 年 8 月 24 日发布《口袋尺度的智能：小模型与手机的基准测试》（Intelligence at pocket scale: Benchmarking small models and mobile phones），与 Liquid AI 合作完成，在消费级手机真机上对一大批小语言模型进行实测。Liquid AI（其 LFM 系列模型也是本次测试得分最高的模型之一）开发了 Pipette 测量工具链，并运营着本次测试所使用的温控测试场地；Artificial Analysis 表示其已独立验证了 Liquid AI 的评测方法论，其中"智能"得分为 Artificial Analysis 自行测得，而设备性能数字则来自 Liquid AI 的测试工具链。其方法：对每个候选模型采用同一量化版本（4-bit 或更低），通过 llama.cpp 运行时在端侧实际执行推理，测试在文章所称的"面向可重复结果的温控物理测试场地"中完成。文章的推理测试结果基于 iPhone 17 Pro（12GB 内存）；Artificial Analysis 另一独立的实时设备页面还列出了 Galaxy S26 Ultra（12GB 内存）。在提交的 41 个量化版本中，33 个在 iPhone 17 Pro 上成功完成测试——提交数与实际完成数之间的差距本身也是一个数据点，反映了哪些模型架构能在移动端量化与内存限制下不崩溃、不产出不可用版本。

参测模型的规模与来源跨度很大，包括 LFM2.5-2.6B 与 LFM2.5-230M（Liquid AI 自家模型系列，鉴于合作关系并不意外，但与其竞品并列展示而非单独呈现）、Nanbeige4.2-3B、MiniCPM5-1B、Qwen3.5 9B、Ornith-1.0-9B、Ling 3.0 Tiny、Falcon-H1R-7B，以及谷歌的 Gemma 4 E4B——最后这一项使本条发现可直接与谷歌自家针对同一模型发布的 LiteRT-LM 端侧实测数字相互印证（参见本知识库 2026-09-08 收录的 Gemma 4 QAT 条目，该条目当时明确指出所读材料中未给出任何 tokens/s 数字；谷歌在其 Hugging Face 模型卡中发布了逐设备实测数字，例如 Gemma 4 E4B 在 iPhone 17 Pro CPU 上为 159 tok/s 预填充 / 9.7 tok/s 解码）。每个模型在两个独立维度上被评分：一是"智能"得分，为五项留出评测（BFCL 工具调用、IFBench 指令遵循、AA-Omniscience、GPQA Diamond、MATH-500）的平均值，在 16K 上下文设置下，测试范围内得分为 27-63；二是原始推理性能——固定 1,024 token 提示词 / 256 token 响应工作负载下的端到端生成耗时（测试范围内为 0.9-26.7 秒）以及 4K 上下文下的峰值内存（0.4-6.9GB）。已发布节选中两个智能得分最高的模型 LFM2.5-2.6B 与 Nanbeige4.2-3B 均达到 63 分，其中 LFM2.5-2.6B 完成该生成任务仅耗时 8.0 秒，而部分 9B 级模型完成同一任务耗时超过 25 秒——这是一个直接的、经物理实测得出的例证，说明参数量本身并不能预测智能得分。

## Key technical points (EN)

- **Methodology**: same quantized build (4-bit or smaller) per model, run via llama.cpp actually on-device, inside a climate-controlled physical testing facility for repeatable results, using Liquid AI's Pipette measurement tooling, which Liquid AI developed and operates; Artificial Analysis says it independently validated Liquid AI's benchmarking methodology.
- **Devices**: the article's inference results are measured on the iPhone 17 Pro (12GB RAM); Artificial Analysis's separate live device page additionally lists the Galaxy S26 Ultra (12GB RAM).
- **Completion rate as a data point**: 33 of 41 submitted builds completed on iPhone 17 Pro — some architectures do not survive mobile quantization/memory constraints.
- **Two independent scoring axes**: "intelligence" (average of BFCL, IFBench, AA-Omniscience, GPQA Diamond, MATH-500 at 16K context, range 27-63 across the field) kept separate from raw performance (end-to-end generation time for 1,024-token-prompt/256-token-response, 0.9-26.7s; peak memory at 4K context, 0.4-6.9GB).
- **Top scorers**: LFM2.5-2.6B and Nanbeige4.2-3B both scored 63 on intelligence; LFM2.5-2.6B generated the fixed workload in 8.0s vs. >25s for some 9B-class models in the field — parameter count does not predict intelligence score.
- **Cross-check opportunity**: Gemma 4 E4B is in the tested field, letting this independent measurement be checked against Google's own first-party LiteRT-LM device numbers for the same model (this KB's 2026-09-08 entry had no tokens/s figure at the time; Google's Hugging Face model cards for gemma-4-E2B/E4B-it-litert-lm publish per-device numbers across Android/iOS/desktop/Raspberry Pi/Jetson, not independently verified against Artificial Analysis's own figures in the material read for this entry).

## Key technical points (ZH)

- **方法**：每个模型使用同一量化版本（4-bit 或更低），通过 llama.cpp 在真机端侧实际运行，测试场地为面向可重复结果的温控物理测试设施，依托 Liquid AI 开发并运营的 Pipette 测量工具链；Artificial Analysis 表示其已独立验证了 Liquid AI 的评测方法论。
- **测试设备**：文章的推理测试结果基于 iPhone 17 Pro（12GB 内存）；Artificial Analysis 另一独立的实时设备页面还列出了 Galaxy S26 Ultra（12GB 内存）。
- **完成率本身即为数据点**：提交的 41 个版本中有 33 个在 iPhone 17 Pro 上完成测试——部分架构无法在移动端量化/内存限制下正常完成。
- **两个独立评分维度**：将"智能"得分（BFCL、IFBench、AA-Omniscience、GPQA Diamond、MATH-500 在 16K 上下文下的平均值，测试范围 27-63 分）与原始性能（固定 1,024 token 提示词/256 token 响应下的端到端生成耗时 0.9-26.7 秒；4K 上下文下峰值内存 0.4-6.9GB）分开呈现。
- **得分最高者**：LFM2.5-2.6B 与 Nanbeige4.2-3B 智能得分均为 63 分；LFM2.5-2.6B 完成该固定工作负载仅需 8.0 秒，而部分 9B 级模型完成同一任务需超过 25 秒——参数量本身并不能预测智能得分。
- **可交叉验证的契机**：Gemma 4 E4B 也在测试模型之列，使这一独立实测结果可与谷歌自家针对同一模型发布的 LiteRT-LM 端侧实测数字相互对照（本知识库 2026-09-08 条目当时并无 tokens/s 数字；谷歌在其 gemma-4-E2B/E4B-it-litert-lm 的 Hugging Face 模型卡中发布了安卓/iOS/桌面/树莓派/Jetson 各平台的逐设备数字，本条目所读材料中未将其与 Artificial Analysis 自身数字逐一核对）。

## Why it matters / what's new (EN)

Flagship on-device AI announcements routinely ship without an independently verifiable latency, memory or throughput figure. This is not a standards-body result — it is not MLPerf, and it is a benchmarking firm's own methodology rather than a standards body's, with the device-performance numbers coming from Liquid AI's own Pipette harness rather than an end-to-end independent measurement chain. Artificial Analysis says it independently validated that harness's methodology, and the intelligence scoring itself is Artificial Analysis's own. The inclusion of Gemma 4 E4B in the tested field also lets these device-performance results be cross-checked against Google's own first-party per-device Gemma 4 numbers, published on Google's Hugging Face model cards.

## Why it matters / what's new (ZH)

旗舰级端侧 AI 发布普遍未附带任何可独立验证的时延、内存或吞吐数字。本条目并非标准组织给出的结果——它不是 MLPerf，也是一家评测公司自有的方法论而非标准组织的产物，其设备性能数字来自 Liquid AI 自有的 Pipette 测试工具链，而非端到端的独立测量链条。Artificial Analysis 表示其已独立验证了该工具链的方法论，"智能"评分本身则为 Artificial Analysis 自行测得。测试模型中包含 Gemma 4 E4B，这也使这些设备性能结果可与谷歌自家在其 Hugging Face 模型卡中发布的首方逐设备 Gemma 4 数字相互对照。

## Images

*(No redistributable images for this entry — text/table-based benchmark article, no standalone chart images captured.)*
