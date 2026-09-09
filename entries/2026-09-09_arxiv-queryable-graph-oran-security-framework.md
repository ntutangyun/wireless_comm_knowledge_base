---
id: 2026-09-09_arxiv-queryable-graph-oran-security-framework
date_published: 2026-09-06
date_found: 2026-09-09
type: academic-paper
technology: cellular
title_en: "A Queryable Graph-Based Security Analysis Framework for O-RAN"
title_zh: "面向 O-RAN 的可查询图式安全分析框架"
url: "https://arxiv.org/abs/2609.06855"
source_quality: full
topics: [O-RAN, threat-modeling, knowledge-graph, Neo4j, CVE, CWE, LLM-assisted-extraction, security-taxonomy]
topic_primary: cellular-security
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)
Corban Villa, Michele Guerra, Syed Khandker, Evangelos Bitsikas, Aanjhan Ranganathan and Christina Pöpper (arXiv v1, 6 Sep 2026; 17 pages, 12 figures, 5 tables, 11 code listings) address a fragmentation problem in O-RAN security assessment: understanding the threat landscape for any given component currently requires manually cross-referencing dozens of O-RAN Alliance specifications, vendor whitepapers, and academic papers — a process the authors describe as error-prone and static, illustrated by the example of an operator trying to evaluate the Open Distributed Unit (O-DU) having to mentally assemble threats scattered across disconnected documents. Their response is a queryable Neo4j graph database of the O-RAN security landscape, containing over 350 nodes across seven types (Components, Interfaces, Threats, Attacks, Defenses, Preventive Measures, Software, and CVEs/CWEs) connected by more than 1,250 relationships (targets, secures, implements, affects, associated_with), queryable in natural language translated to Cypher — e.g. a single query can list every O-RAN component with no attack, defense, or preventive-measure coverage and no CVE-affected software implementing it, surfacing coverage gaps that would otherwise require manual document traversal.

The graph is populated by a hybrid extraction pipeline: deterministic parsing (Python + regex over structured tables) handles consistently formatted sources like the O-RAN Threat Model (O-RAN.WG11.TR.Threat-Modeling.O-R004-v05.00), cutting extraction time from roughly 5 hours manual to under 2 minutes and incidentally surfacing eleven typographical errors in the source specification; LLM-assisted extraction (GPT-5 via the OpenAI API, schema-constrained prompting against controlled vocabularies drawn from the specifications, JSON-validated structured outputs) handles unstructured academic literature, processing a corpus of 35 papers in 65 minutes versus an estimated 15 person-hours of manual curation. A validation pass found that of 54 comparable items, 51 were classified as exact (37), equivalent (11) or sufficiently equivalent (3), with none rated unacceptable; of 125 LLM-only extracted items, 74 were supported by explicit or implicit evidence, with most non-matches attributed to differences in granularity rather than conceptual errors. Data sources feeding the graph are the O-RAN Alliance architecture description (O-RAN.WG1.TS.OAD-R004-v13.00), the Threat Model document, the 35-paper academic corpus (restricted to papers with proof-of-concept validation), open-source implementations (srsRAN, OpenAirInterface's oai-ran and oai-cn5g, and O-RAN Software Community components spanning RIC, Non-RT RIC, INF, OAM, SMO, O-DU/O-CU/O-RU variants), and MITRE's CVE/CWE databases for vulnerabilities tied to that software.

Querying the populated graph surfaces a coverage picture the authors argue was previously invisible: the Near-RT RIC and xApps carry 77 documented threats and 25 supporting academic papers, but O-Cloud (72 threats) and SMO (48 threats) have zero empirical studies, O-DU (47 threats) has exactly one (a timing-interruption-attack paper by Groen et al.), and the E1 and F1 interfaces have zero documented threats in the O-RAN threat model itself. Across 21 CWE occurrences in the CVE dataset, memory-safety weaknesses dominate at 11 (out-of-bounds write, improper array-index validation, buffer overflow, out-of-bounds read, NULL dereference), ahead of resource exhaustion (5) and assertion failures (3). Of 27 total CVEs in the dataset, 20 are attributable to the 35-paper academic corpus, and of those, 18 (90%) were discovered via fuzzing — concentrated among four papers (23 of the 27 CVEs) and three security researchers (24 of the 27). The authors release the graph, the 1,728-line extraction pipeline, the Cypher query set, the GUI, and the LLM prompts as open source (github.com/MicheleGuerra/SOK-Oran-Security, CC BY 4.0), pitched as a living, re-runnable alternative to a static survey.

## Summary (ZH)
Corban Villa、Michele Guerra、Syed Khandker、Evangelos Bitsikas、Aanjhan Ranganathan 与 Christina Pöpper（arXiv v1，2026 年 9 月 6 日；17 页，12 幅图，5 张表，11 段代码清单）针对 O-RAN 安全评估中的碎片化问题展开研究：目前要理解任一组件的威胁态势，都需要人工交叉核对数十份 O-RAN 联盟规范、厂商白皮书与学术论文——作者将这一过程描述为易出错且静态，并以一个运营商试图评估开放式分布单元（O-DU）为例说明：其威胁信息散落在互不关联的文档中，需要人工在脑中拼合。作者给出的应对方案是一个可查询的 Neo4j 图数据库，涵盖 O-RAN 安全态势，包含 350 余个节点，分为七种类型（组件、接口、威胁、攻击、防御、预防措施、软件以及 CVE/CWE），并由超过 1,250 条关系（targets、secures、implements、affects、associated_with）相连，支持将自然语言查询转换为 Cypher 查询——例如，单条查询即可列出所有既无攻击、防御或预防措施覆盖、也无受 CVE 影响的软件实现的 O-RAN 组件，从而揭示原本需要人工遍历文档才能发现的覆盖空白。

该图谱由一条混合式抽取流水线填充：确定性解析（基于 Python 与正则表达式，处理结构化表格）用于处理格式统一的来源，例如 O-RAN 威胁模型文档（O-RAN.WG11.TR.Threat-Modeling.O-R004-v05.00），将抽取时间从约 5 小时的人工作业缩短至不到 2 分钟，并顺带发现源规范中的 11 处排版错误；LLM 辅助抽取（通过 OpenAI API 调用 GPT-5，采用受控词表约束提示、并对结构化输出进行 JSON 校验）用于处理非结构化的学术文献，对 35 篇论文构成的语料库仅耗时 65 分钟处理完毕，相较人工整理估计所需的 15 人时大幅缩短。校验发现：在 54 项可比条目中，51 项被判定为完全匹配（37 项）、等价（11 项）或基本等价（3 项），无一项被评为不可接受；在 125 项仅由 LLM 抽取的条目中，74 项获得显式或隐式证据支持，大多数不匹配情形源于粒度差异而非概念性错误。填充图谱的数据来源包括：O-RAN 联盟架构描述文档（O-RAN.WG1.TS.OAD-R004-v13.00）、威胁模型文档、35 篇学术论文语料库（仅限包含概念验证的论文）、开源实现（srsRAN、OpenAirInterface 的 oai-ran 与 oai-cn5g，以及涵盖 RIC、Non-RT RIC、INF、OAM、SMO、O-DU/O-CU/O-RU 各变体的 O-RAN 软件社区组件），以及 MITRE 的 CVE/CWE 漏洞数据库。

对填充后的图谱进行查询，揭示出作者认为此前不可见的覆盖态势：Near-RT RIC 与 xApp 拥有 77 项已记录威胁及 25 篇支撑学术论文，而 O-Cloud（72 项威胁）与 SMO（48 项威胁）均无任何实证研究，O-DU（47 项威胁）仅有一篇（Groen 等人关于定时中断攻击的论文），E1 与 F1 接口在 O-RAN 威胁模型本身中甚至没有任何已记录威胁。在 CVE 数据集中出现的 21 类 CWE 里，内存安全类缺陷以 11 项占据主导（越界写入、数组下标校验不当、缓冲区溢出、越界读取、空指针解引用），领先于资源耗尽（5 项）与断言失败（3 项）。数据集中共计 27 个 CVE，其中 20 个可归因于该 35 篇学术语料库，而这 20 个中有 18 个（90%）是通过模糊测试发现的——且高度集中在四篇论文（占 27 个 CVE 中的 23 个）与三位安全研究者（占 27 个中的 24 个）身上。作者以开源方式发布了图谱本身、1,728 行的抽取流水线、Cypher 查询集、GUI 以及 LLM 提示词（github.com/MicheleGuerra/SOK-Oran-Security，CC BY 4.0 许可），将其定位为可持续运行、动态更新的替代方案，而非一份静态综述。

## Key technical points (EN)
- Neo4j knowledge graph: 350+ nodes across 7 types (Components, Interfaces, Threats, Attacks, Defenses, Preventive Measures, Software, CVEs/CWEs), 1,250+ relationships; natural-language queries translated to Cypher.
- Hybrid extraction: deterministic regex/table parsing for structured specs (O-RAN Threat Model extraction cut from ~5h manual to <2 min, surfaced 11 spec typos) + GPT-5 schema-constrained extraction for unstructured papers (35 papers in 65 min vs ~15 person-hours manual).
- Extraction validation: of 54 comparable items, 51 classified as exact (37), equivalent (11) or sufficiently equivalent (3), none unacceptable; 125 LLM-only items -> 74 supported.
- Data sources: O-RAN.WG1.TS.OAD-R004-v13.00 (architecture), O-RAN.WG11.TR.Threat-Modeling.O-R004-v05.00 (threat model), 35-paper PoC-validated academic corpus, srsRAN/OpenAirInterface/O-RAN-SC software components, MITRE CVE/CWE.
- Coverage-gap findings: Near-RT RIC/xApps 77 threats + 25 papers vs O-Cloud 72 threats/0 empirical studies, SMO 48 threats/0 studies, O-DU 47 threats/1 study (Groen et al. timing-interruption attack); E1 and F1 interfaces have zero documented threats in the O-RAN threat model.
- CWE distribution across 21 occurrences: memory-safety weaknesses dominate (11: OOB-write, array-index validation, buffer overflow, OOB-read, NULL-deref) vs resource exhaustion (5), assertions (3).
- Fuzzing effectiveness: 18 of 20 paper-attributed CVEs (90%) discovered via fuzzing, out of 27 total CVEs in the dataset; concentrated in 4 papers (23 CVEs) and 3 researchers (24 CVEs).
- Fully open-sourced: graph, 1,728-line pipeline, Cypher queries, GUI, LLM prompts (github.com/MicheleGuerra/SOK-Oran-Security, CC BY 4.0).

## Key technical points (ZH)
- Neo4j 知识图谱：350 余个节点，涵盖 7 种类型（组件、接口、威胁、攻击、防御、预防措施、软件、CVE/CWE），1,250 余条关系；自然语言查询可转换为 Cypher 查询。
- 混合式抽取：针对结构化规范采用确定性正则/表格解析（O-RAN 威胁模型抽取时间从约 5 小时人工缩短至不到 2 分钟，并发现规范中 11 处排版错误）；针对非结构化论文采用 GPT-5 受控词表抽取（35 篇论文耗时 65 分钟，相较约 15 人时的人工整理）。
- 抽取校验：在 54 项可比条目中，51 项被判定为完全匹配（37 项）、等价（11 项）或基本等价（3 项），无一项不可接受；125 项仅由 LLM 抽取的条目中，74 项获得证据支持。
- 数据来源：O-RAN.WG1.TS.OAD-R004-v13.00（架构描述）、O-RAN.WG11.TR.Threat-Modeling.O-R004-v05.00（威胁模型）、35 篇经概念验证的学术论文语料库、srsRAN/OpenAirInterface/O-RAN 软件社区各组件、MITRE 的 CVE/CWE 数据库。
- 覆盖空白发现：Near-RT RIC/xApp 拥有 77 项威胁及 25 篇支撑论文，而 O-Cloud（72 项威胁）与 SMO（48 项威胁）均无实证研究，O-DU（47 项威胁）仅有 1 篇（Groen 等人关于定时中断攻击的研究）；E1 与 F1 接口在 O-RAN 威胁模型中甚至没有任何已记录威胁。
- 21 类 CWE 出现次数中，内存安全类缺陷以 11 项占主导（越界写入、数组下标校验不当、缓冲区溢出、越界读取、空指针解引用），领先于资源耗尽（5 项）与断言失败（3 项）。
- 模糊测试有效性：数据集中共 27 个 CVE，其中 20 个可归因于论文语料库，这 20 个中有 18 个（90%）是通过模糊测试发现，且集中在 4 篇论文（23 个 CVE）与 3 位研究者（24 个 CVE）身上。
- 图谱、1,728 行抽取流水线、Cypher 查询集、GUI 与 LLM 提示词全部开源（github.com/MicheleGuerra/SOK-Oran-Security，CC BY 4.0）。

## Why it matters / what's new (EN)
The KB's O-RAN security coverage so far has been paper-by-paper — individual attacks, defenses, or certification mechanisms (Z2-ACT, VeraRAN, xTRUCE, CERTIoT-6G, the RAN-hotfixing Buckler framework) each addressing one slice of the threat landscape. This is the first entry that is itself a meta-level security-knowledge tool: rather than proposing a new attack or defense, it builds and queries a structured map of everything the field has published so far, and its headline contribution is arguably the coverage gaps it exposes (O-Cloud and SMO with zero empirical security studies despite dozens of documented threats each) rather than any single new vulnerability. It pairs naturally with the previous day's Drishti entry (`2026-09-08_arxiv-drishti-5g-core-vulnerability-auditing`) (AI-assisted vulnerability auditing of 5G cores) as a second, complementary application of LLM-assisted methodology to cellular-security research infrastructure rather than to network operation itself.

## Why it matters / what's new (ZH)
知识库此前对 O-RAN 安全的覆盖是逐篇论文式的——各条目分别针对威胁态势中的某一切面提出具体的攻击、防御或认证机制（Z2-ACT、VeraRAN、xTRUCE、CERTIoT-6G、RAN 热修复框架 Buckler）。本条目是首个自身即为元层面安全知识工具的条目：它并未提出新的攻击或防御手段，而是构建并查询一份结构化的、涵盖该领域迄今全部已发表成果的地图，其最突出的贡献可以说是它所揭示的覆盖空白（O-Cloud 与 SMO 各自拥有数十项已记录威胁，却均无任何实证安全研究），而非某个单一的新漏洞。该条目与前一日收录的 Drishti 条目（`2026-09-08_arxiv-drishti-5g-core-vulnerability-auditing`，面向 5G 核心网的 AI 辅助漏洞审计）自然呼应，二者都是将 LLM 辅助方法应用于蜂窝安全*研究基础设施*本身（而非网络运行本身）的互补性尝试。

## Images
![O-RAN components and interfaces covered by the security graph | 安全图谱所覆盖的 O-RAN 组件与接口](https://arxiv.org/html/2609.06855v1/figures/general/oran4.png)
![Overview of the hybrid extraction pipeline and approach | 混合式抽取流水线与整体方法概览](https://arxiv.org/html/2609.06855v1/figures/methodology/approach.png)
