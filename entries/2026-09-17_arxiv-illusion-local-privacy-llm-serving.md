---
id: 2026-09-17_arxiv-illusion-local-privacy-llm-serving
date_published: 2026-09-16
date_found: 2026-09-17
technology: edge-ai
type: academic-paper
title_en: "The Illusion of Local Privacy: Confidentiality Boundary Failures in Consumer LLM Serving Systems"
title_zh: "本地隐私的假象：消费级 LLM 服务系统中的机密性边界失效"
url: "https://arxiv.org/abs/2609.18526"
source_quality: full
topics: [on-device-LLM, local-inference-runtimes, GGUF, privacy]
topic_primary: on-device-inference
topics_secondary: [ai-pc]
novelty_score: 4
---

## Summary (EN)

The paper (Youssef Hamdi Zafan Ibrahim, Muhammad Ikram, Mohammed Khalaf Salama) starts from the question the authors pose directly: for privacy-sensitive workloads the appeal of local inference is, in their words, straightforward, but what does "local" actually guarantee about a prompt after it reaches the serving software? The authors' framing question is which components of the local serving stack actually determine whether a prompt stays confidential once inference happens on the user's own machine. Their tool, LLAnalyzer, decomposes a local LLM deployment into four independently testable confidentiality boundaries: an Integrity boundary (model admission / GGUF file parsing), a Lifetime boundary (whether plaintext prompts persist in runtime memory after inference completes), a Persistence boundary (whether prompts are retained in a wrapper application's persistent storage/logs), and an Isolation boundary (whether information leaks between separately authenticated clients sharing the same server). The methodology embeds UUID "canary" strings directly in prompts so any recovered plaintext can be attributed precisely to its originating request, and defines three adversary profiles: an unprivileged local process (A1), an authenticated network client without OS-level access (A2), and a malicious model provider supplying a crafted GGUF file (A3). Four GGUF Q4_K_M-quantized model families were tested (NVIDIA Nemotron-3-Nano 4B, Qwen3.5 9B, Gemma-4-E4B-it 7.5B, Phi-4-reasoning-plus 14B); llama.cpp and its llama-server carry the runtime-memory and serving-interface experiments, while the paper's "two consumer deployment platforms," LM Studio and Ollama, are evaluated at the wrapper level.

On the Integrity boundary, over 1.2x10^7 AFL++ coverage-guided fuzzing executions across 24 hours found the tested parsers rejected 100% of structured malformed GGUF artifacts before initialization, with zero crashes or memory-safety violations detected — this boundary held. The other three did not. On the Lifetime boundary, 13-14 recoverable plaintext copies of a single prompt were found in runtime memory per inference across three independent runs; a sequential-tenant test recovered prompts from 11 of 12 tenants (about 10.8 MB of recovered data), and while enabling sanitization reduced this to 78 copies and about 3.35 MB (a 29% reduction in copy count, 69% in volume), it did not eliminate the leakage; GPU offloading left 9 canaries in host memory even after inference completed, with all 16 becoming recoverable after two further requests. On the Persistence boundary, LM Studio under its default configuration retained UUID-tagged plaintext in wrapper logs, which disabling a `logSensitiveData` setting eliminated in the tested configuration; Ollama showed no UUID-tagged plaintext in wrapper artifacts under the tested configuration. On the Isolation boundary, the paper discloses what it calls a previously undocumented authorization flaw in llama.cpp (mapped to CWE-862 Missing Authorization and CWE-639 Authorization Bypass Through User-Controlled Key) that let one authenticated client restore another tenant's saved conversation-state slot without any resource-ownership check — cross-tenant slot restoration succeeded in 200 of 200 trials, and in 126 of 200 trials (63%) the restored state let the attacking client reproduce the victim's secret content via the model's own output. A separate shared-prefix timing-channel test achieved an AUC of 1.000 in distinguishing cached from uncached prompt prefixes across all four model families. The paper reports that KV-cache zeroization costs between -0.016 and +0.020 seconds per request, under about 0.5% of mean latency across all four families — but it stresses that the sanitized build still leaves 11 of 12 tenants' prompts recoverable, and concludes that the limiting factor is sanitization coverage across every prompt-bearing representation, not the cost of clearing a known structure.

## Summary (ZH)

本文（Youssef Hamdi Zafan Ibrahim、Muhammad Ikram、Mohammed Khalaf Salama）从作者直接提出的问题出发：对隐私敏感的工作负载而言，本地推理的吸引力用作者的话说是"显而易见的"，但当提示词进入服务软件之后，"本地"究竟保证了什么？作者提出的核心问题是：一旦推理在用户自己的设备上进行，本地服务技术栈中究竟是哪些组件真正决定了提示词是否保持机密。其工具 LLAnalyzer 将本地 LLM 部署拆解为四个可独立测试的机密性边界：完整性边界（模型加载/GGUF 文件解析）、生命周期边界（推理结束后明文提示词是否仍驻留于运行时内存）、持久化边界（提示词是否被封装应用的持久化存储/日志保留）以及隔离边界（在共享同一服务端的不同认证客户端之间是否存在信息泄露）。其方法是将 UUID"金丝雀"字符串直接嵌入提示词，使任何被恢复的明文都能精确归属到其来源请求，并定义了三种攻击者画像：无特权本地进程（A1）、无操作系统级访问权限的已认证网络客户端（A2），以及提供构造过的 GGUF 文件的恶意模型提供方（A3）。测试覆盖四个采用 GGUF Q4_K_M 量化的模型家族（NVIDIA Nemotron-3-Nano 4B、Qwen3.5 9B、Gemma-4-E4B-it 7.5B、Phi-4-reasoning-plus 14B）；运行时内存与服务接口实验在 llama.cpp 及其 llama-server 上开展，而论文所称的“两个消费级部署平台”——LM Studio 与 Ollama——则在封装层面接受评测。

在完整性边界上，24 小时内超过 1.2×10⁷ 次基于覆盖率引导的 AFL++ 模糊测试执行显示，被测解析器在初始化前拒绝了 100% 的结构化畸形 GGUF 文件，未检测到任何崩溃或内存安全违规——该边界经受住了测试。其余三个边界则未能守住。在生命周期边界上，三次独立运行中，单次推理后运行时内存里平均可恢复 13-14 份同一提示词的明文副本；一项顺序多租户测试从 12 个租户中的 11 个恢复出提示词（约 10.8 MB 数据），启用数据清理机制虽将其降至 78 份副本、约 3.35 MB（副本数减少 29%，数据量减少 69%），但并未消除泄露；GPU 卸载在推理完成后仍在主机内存中留下 9 个金丝雀标记，再经过两次请求后全部 16 个均可被恢复。在持久化边界上，LM Studio 默认配置会在封装层日志中保留带 UUID 标记的明文，在被测配置下关闭 `logSensitiveData` 设置可消除该现象；Ollama 在被测配置下的封装层产物中未发现带 UUID 标记的明文。在隔离边界上，论文披露了其称为此前未见记录的 llama.cpp 授权缺陷（对应 CWE-862"缺失授权"与 CWE-639"通过用户可控密钥绕过授权"），该缺陷使一个已认证客户端无需任何资源归属校验即可恢复另一租户保存的对话状态槽位——跨租户槽位恢复在 200 次试验中全部成功（200/200），其中 126 次（63%）恢复的状态使攻击方客户端能够通过模型自身输出复现受害者的机密内容。另一项针对共享前缀的时序信道测试在全部四个模型家族上均达到 AUC 1.000，可完全区分已缓存与未缓存的提示词前缀。论文报告称，KV 缓存清零的开销为每次请求 -0.016 至 +0.020 秒，占四个模型家族平均延迟的比例均低于约 0.5%；但论文强调，启用清理后 12 个租户中仍有 11 个的提示词可被恢复，并得出结论：真正的瓶颈是清理机制对所有携带提示词的表示形式的覆盖度，而非清除已知结构的成本。

## Key technical points (EN)

- **Framework**: LLAnalyzer tests four confidentiality boundaries — Integrity (GGUF parsing), Lifetime (post-inference memory persistence), Persistence (wrapper storage/logs), Isolation (cross-tenant leakage) — via UUID canary strings and three adversary profiles (unprivileged local process, authenticated network client, malicious model provider).
- **Scope tested**: 4 GGUF Q4_K_M model families (Nemotron-3-Nano 4B, Qwen3.5 9B, Gemma-4-E4B-it 7.5B, Phi-4-reasoning-plus 14B) across LM Studio, Ollama and llama.cpp.
- **Integrity held**: >1.2x10^7 AFL++ fuzzing executions over 24h, 100% malformed-GGUF rejection, zero crashes/memory-safety violations.
- **Lifetime/Persistence/Isolation failed**: 13-14 recoverable plaintext copies per inference; 11/12 tenants' prompts recovered in a sequential test (~10.8 MB); LM Studio default config leaked UUID-tagged plaintext to logs (fixed by disabling `logSensitiveData`); GPU offloading left canaries recoverable in host memory post-inference.
- **Disclosed vulnerability**: an llama.cpp authorization flaw the paper reports as previously undocumented (CWE-862 / CWE-639) allowing cross-tenant conversation-state restoration — 200/200 successful restorations, 63% (126/200) leading to actual secret disclosure via model output; a shared-prefix timing channel achieved AUC 1.000 across all four models.
- **Fix cost vs. coverage**: KV-cache zeroization costs -0.016 to +0.020 s/request, <~0.5% of mean latency across all four model families, but sanitization only cut recoverable copies 29% / volume 69% and left 11 of 12 tenants exposed — the paper's stated limiting factor is coverage, not cost.

## Key technical points (ZH)

- **框架**：LLAnalyzer 通过 UUID 金丝雀字符串与三种攻击者画像（无特权本地进程、已认证网络客户端、恶意模型提供方）测试四个机密性边界——完整性（GGUF 解析）、生命周期（推理后内存驻留）、持久化（封装层存储/日志）、隔离（跨租户泄露）。
- **测试范围**：4 个 GGUF Q4_K_M 模型家族（Nemotron-3-Nano 4B、Qwen3.5 9B、Gemma-4-E4B-it 7.5B、Phi-4-reasoning-plus 14B），部署于 LM Studio、Ollama 与 llama.cpp。
- **完整性边界守住**：24 小时内超 1.2×10⁷ 次 AFL++ 模糊测试，100% 拒绝畸形 GGUF 文件，零崩溃/内存安全违规。
- **生命周期/持久化/隔离边界失守**：单次推理平均残留 13-14 份明文副本；顺序测试中 12 个租户里 11 个的提示词被恢复（约 10.8 MB）；LM Studio 默认配置将带 UUID 标记的明文泄露到日志中（关闭 `logSensitiveData` 后修复）；GPU 卸载在推理完成后仍使金丝雀标记可在主机内存中被恢复。
- **披露的漏洞**：论文称为此前未见记录的 llama.cpp 授权缺陷（CWE-862 / CWE-639），允许跨租户恢复对话状态——200 次试验全部恢复成功，其中 63%（126/200）导致攻击方通过模型输出实际获取机密内容；共享前缀时序信道测试在四个模型上均达到 AUC 1.000。
- **修复代价与覆盖度**：KV 缓存清零的开销为每次请求 -0.016 至 +0.020 秒，占四个模型家族平均延迟的比例均低于约 0.5%；但清理机制仅使可恢复副本数减少 29%、数据量减少 69%，12 个租户中仍有 11 个暴露——论文明确指出瓶颈在于覆盖度而非成本。

## Why it matters / what's new (EN)

Every prior on-device-inference entry in this KB has implicitly treated "runs locally" as synonymous with "stays private." This paper is the first in this bin to directly measure that assumption across real consumer serving stacks (LM Studio, Ollama, llama.cpp) and show it fails on three of four tested boundaries — including a concrete, disclosed authorization flaw in llama.cpp, one of the most widely used local-inference runtimes in this KB's ai-pc and on-device-inference coverage. It is a measurement paper in the calibration sense this domain rewards (independent numbers over vendor claims), but pointed at a security property rather than a performance one.

## Why it matters / what's new (ZH)

本知识库此前所有端侧推理相关条目都隐含地将"本地运行"等同于"保持隐私"。本文是该分类下首篇直接对真实消费级本地服务技术栈（LM Studio、Ollama、llama.cpp）进行这一假设的实测的论文，结果显示在四个被测边界中的三个上该假设并不成立——其中包括在 llama.cpp（本知识库 ai-pc 与端侧推理分类中使用最广泛的本地推理运行时之一）中披露的一个具体的、授权缺陷。就本领域一贯看重"独立实测数字优于厂商宣称"的评判标准而言，这是一篇测量型论文，只不过其测量对象是安全属性而非性能指标。

## Images

![LLAnalyzer confidentiality-boundary testing framework | LLAnalyzer 机密性边界测试框架](https://arxiv.org/html/2609.18526v1/figures/LLAnalyzerv4.png)
