---
id: 2026-10-22_arxiv-5ugue-agentic-hil-fuzzing-5g-devices
date_published: 2026-10-21
date_found: 2026-10-22
type: academic-paper
technology: cellular
title_en: "5uGUE: Agentic Hardware-in-the-Loop Fuzzing for 5G Devices and beyond"
title_zh: "5uGUE：面向 5G 终端及其他无线协议的智能体式硬件在环模糊测试"
url: "https://arxiv.org/abs/2610.29155"
source_quality: full
topics: [5G-NR, fuzzing, baseband, modem, LLM-agent, hardware-in-the-loop, rogue-gNB, MediaTek, UNISOC, WDissector, 5GHOUL, CVE]
topic_primary: cellular-security
topics_secondary: [cellular-ai, 5g-nr]
novelty_score: 4
---

## Summary (EN)
Guoqiang Hua, Sakshi Udeshi, Matheus Eduardo Garbelini, Daisuke Mashima and Sudipta Chattopadhyay (Singapore University of Technology and Design, Temasek Laboratories at NTU, University of Missouri-Kansas City) present 5uGUE, a large-language-model-driven agent that fuzzes commercial off-the-shelf 5G phones over the air. The target is the modem's handling of pre-authentication 5G NR signalling, from the MAC layer upward. A software-defined radio plays a rogue gNB, a man-in-the-middle filter selects packets (for example those carrying an RRCSetup element) and rewrites payload bytes at chosen offsets, and the phone's Android debug log is used as the crash oracle.

The paper contrasts three styles of fuzzing: hand-built fuzzers fully directed by their authors, fuzzers that use an LLM as one component (seed or mutation generation), and 5uGUE, in which the LLM acts as the strategist over the whole loop of observe, reason, plan, execute and adapt. The agent has nine groups of tools: packet inspection, protocol-field search, state-machine view, crash-log analysis, Android device inspection, a local paper corpus, web search and fetch (with GitHub-aware retrieval), memory ("save finding", "update strategy"), and exploit execution (single and batched). Each generated test is a C++ exploit built on the existing 5GHOUL / WDissector framework.

Evaluation uses five phones from three manufacturers (four MediaTek Dimensity devices and one UNISOC UD710 device), six LLMs released in 2026, and five repeated runs per configuration. The best runs trigger 167 crashes in total (141 novel, 31 unique) within 60 interaction turns, against 13 crashes (10 novel, 6 unique) for the 5GHOUL baseline in 150 minutes, i.e. 12.8x total and 5.2x unique. MediaTek confirmed two new high-severity vulnerabilities, one with an assigned CVE (CVE-2026-20525), and UNISOC confirmed seven crashes.

## Summary (ZH)
Guoqiang Hua、Sakshi Udeshi、Matheus Eduardo Garbelini、Daisuke Mashima 与 Sudipta Chattopadhyay（新加坡科技设计大学、南洋理工大学 Temasek 实验室、密苏里大学堪萨斯城分校）提出 5uGUE，一个由大语言模型驱动的智能体，通过空口对商用现货 5G 手机进行模糊测试。测试对象是调制解调器对认证前 5G NR 信令（MAC 层及以上）的处理。软件无线电扮演伪基站（rogue gNB），中间人过滤器选取数据包（例如携带 RRCSetup 元素的包）并在指定偏移处改写载荷字节，手机的 Android 调试日志作为崩溃判据。

论文对比了三种模糊测试方式：完全由作者人工设计的传统模糊器、仅把 LLM 作为某个组件（生成种子或变异输入）的模糊器，以及 5uGUE——由 LLM 作为整个“观察、推理、规划、执行、调整”闭环的策略者。该智能体拥有九组工具：数据包检查、协议字段搜索、状态机视图、崩溃日志分析、Android 设备检查、本地论文库、网页搜索与抓取（含对 GitHub 的专门处理）、记忆（“保存发现”“更新策略”）以及漏洞利用执行（单次与批量）。每个生成的测试是基于现有 5GHOUL / WDissector 框架的 C++ 利用代码。

评估使用来自三家厂商的五部手机（四部联发科天玑设备和一部紫光展锐 UD710 设备）、六个 2026 年发布的 LLM，每种配置重复运行五次。最佳运行在 60 轮交互内共触发 167 次崩溃（141 次新颖、31 次唯一），而 5GHOUL 基线在 150 分钟内为 13 次（10 次新颖、6 次唯一），即总数 12.8 倍、唯一崩溃 5.2 倍。联发科确认了两个新的高危漏洞，其中一个已分配 CVE（CVE-2026-20525），紫光展锐确认了七次崩溃。

## Key technical points (EN)
- Threat model: a Dolev-Yao attacker running a rogue gNB over SDR (USRP B210) against a victim phone, focused on pre-authentication messages from MAC upward. The attacker cannot decrypt protected traffic.
- Ablation of tool sets on a MediaTek Dimensity 900 phone with Claude Sonnet 4.6, averaged over five runs: V1 (basic tools, local papers, web search) averages 7.2 crashes and 3.6 unique; V2 adds GitHub-aware fetch (12.8 and 7.0); V3 adds batched test execution and a larger context-summarisation threshold (200,000 against 50,000 tokens), reaching 32.2 and 10.0. The authors' research-quality score (0 to 5) moves from 3.14 to 4.20 to 4.14.
- Across five phones with V3, the average is 21 total and 4.48 unique crashes per target, from 11.6 on the UNISOC UD710 phone (little public information available) to 32.2 on the Dimensity 900 phone. Average runtime stays below 105 minutes per target within 60 turns.
- A restricted variant (V3-filtered) blocks paper tools and code-hosting sites so the agent has no external exploit knowledge; it still finds an average of 17.4 total crashes on the MediaTek target and 22.2 on the UNISOC target.
- Six LLMs were compared (Claude Sonnet 4.6, GPT-5.5, Gemini 3.1 Pro, Qwen3.7 Plus, DeepSeek V4 Pro, Kimi K2.6), with prices per million tokens listed in the paper.
- Crash analysis: the logs localise failures to firmware source locations (for example an assertion in an NR transmit-manager file) but, because the firmware is closed, the authors cannot determine the underlying flaw; they suggest stricter validation of externally controlled values and graceful error handling, and report responsible disclosure to the vendors.
- Extension: with only minimal procedural changes (exploit tool and prompt) the same agent is run against Bluetooth Classic on an ESP32 target, averaging 6.4 novel and 1.6 unique crashes; three of eight unique Bluetooth crashes could not be reproduced.
- The authors release an interactive dashboard of all evaluation runs.

## Key technical points (ZH)
- 威胁模型：Dolev-Yao 攻击者通过 SDR（USRP B210）运行伪基站攻击受害手机，聚焦 MAC 层及以上的认证前消息；攻击者无法解密受保护的流量。
- 在联发科天玑 900 手机上使用 Claude Sonnet 4.6 对工具集做消融，五次运行平均：V1（基础工具、本地论文、网页搜索）平均 7.2 次崩溃、3.6 次唯一崩溃；V2 加入对 GitHub 的专门抓取（12.8 与 7.0）；V3 再加入批量测试执行与更大的上下文摘要阈值（20 万对 5 万 token），达到 32.2 与 10.0。作者定义的研究质量评分（0 至 5）依次为 3.14、4.20、4.14。
- 使用 V3 对五部手机测试，每个目标平均 21 次总崩溃、4.48 次唯一崩溃，范围从公开信息很少的紫光展锐 UD710 手机的 11.6 次到天玑 900 手机的 32.2 次。60 轮内每个目标平均运行时间低于 105 分钟。
- 受限变体（V3-filtered）屏蔽论文工具和代码托管网站，使智能体没有外部利用知识；其在联发科目标上平均仍发现 17.4 次总崩溃，在紫光展锐目标上为 22.2 次。
- 共比较六个 LLM（Claude Sonnet 4.6、GPT-5.5、Gemini 3.1 Pro、Qwen3.7 Plus、DeepSeek V4 Pro、Kimi K2.6），论文列出了每百万 token 的价格。
- 崩溃分析：日志能把故障定位到固件源码位置（例如 NR 发射管理文件中的一处断言），但由于固件闭源，作者无法确定根本缺陷；他们建议加强对外部可控取值的校验并实现优雅的错误处理，并报告已向厂商负责任披露。
- 扩展：仅对利用工具和提示词做少量流程性修改，同一智能体即可用于 ESP32 目标上的经典蓝牙，平均发现 6.4 次新颖崩溃和 1.6 次唯一崩溃；八个唯一蓝牙崩溃中有三个无法复现。
- 作者公开了包含全部评估运行的交互式仪表板。

## Why it matters / what's new (EN)
The paper builds directly on the 5GHOUL / WDissector 5G fuzzing framework, whose strategies are human-written; this paper replaces the strategy layer with an LLM agent and measures what each added tool contributes. The headline comparison is against one baseline on the authors' own testbed with an ADB-log crash-identifier oracle, and counts are crash identifiers rather than independently triaged vulnerabilities; the paper itself notes that root causes cannot be established on closed firmware. The vendor confirmations (a CVE for MediaTek, seven confirmed UNISOC crashes) are the external evidence. The Bluetooth extension is a small additional experiment and is not a Bluetooth security evaluation in its own right. See also the 2026-10-20 core-network exploitability entry for the network-side counterpart of LLM-assisted cellular vulnerability discovery.

## Why it matters / what's new (ZH)
本文直接构建在 5GHOUL / WDissector 5G 模糊测试框架之上，该框架的策略由人工编写；本文用 LLM 智能体取代策略层，并度量每新增一个工具的贡献。核心对比仅针对一个基线、在作者自己的测试平台上、使用基于 ADB 日志的崩溃标识符判据，统计的是崩溃标识符而非经独立分类的漏洞；论文自身也指出在闭源固件上无法确定根因。外部证据来自厂商确认（联发科的一个 CVE、紫光展锐确认的七次崩溃）。蓝牙扩展只是一个补充小实验，不构成独立的蓝牙安全评估。网络侧的 LLM 辅助蜂窝漏洞发现可参见 2026-10-20 的核心网字段级可利用性条目。

## Images

None.
