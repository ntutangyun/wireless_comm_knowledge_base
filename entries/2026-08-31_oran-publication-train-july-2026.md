---
id: 2026-08-31_oran-publication-train-july-2026
date_published: 2026-08-05
date_found: 2026-08-31
type: industry-news
technology: cellular
title_en: "Inside O-RAN's release machinery: the three-trains-per-year publication process, and what the July 2026 train (67 documents) contains"
title_zh: "O-RAN 规范发布机制解析：每年三列「发布列车」的流程，以及 2026 年 7 月列车（67 份文档）的内容"
url: "https://www.o-ran.org/blog/inside-o-ran-specification-development-publication-trains"
source_quality: full
topics: [O-RAN, specification-process, publication-train, Open-Fronthaul, beamforming, SMO, SCAS, O-DU, O-RU, IPR]
topic_primary: open-ran
topics_secondary: [cellular-security, cellular-massive-mimo]
novelty_score: 2
---

## Summary (EN)

The O-RAN ALLIANCE published an explainer (5 August 2026) describing the mechanics by which its specifications actually reach the public — a process it calls the **publication train**. Rather than publishing each document when its working group finishes it, O-RAN's technical groups develop many specifications in parallel and then bundle the accumulated updates and new titles into a coordinated batch three times a year. Each batch is a "train" that then travels a fixed approval route: working-group or focus-group approval, then Technical Steering Committee (TSC) approval, then a **60-day Intellectual Property Rights review period**, then final Board of Directors approval, and only then publication.

The article also clarifies the relationship between trains and the O-RAN **Releases** the industry more commonly talks about. A Release is not a single train; it is the accumulated deliverable set of several trains, defined as the features that are deployable in commercial networks. The most recent, **O-RAN-R005**, was completed with the **November 2025** train — which is why the release announcement and the underlying specification work carry different dates.

Two concrete trains are given status. The **March 2026 train** is already published and carried **59 new or updated technical documents**. The **July 2026 train** has finished development inside the technical groups and has entered the approval cycle carrying **67 new or updated technical documents**; following the IPR and Board approval steps it is **expected to be published in October 2026**. Named contents of the July train include support for **codebook-based and SRS beamforming in the Open Fronthaul interface** — which shifts beamforming processing from the O-DU to the O-RU — a **standardised exposure framework for the Service Management and Orchestration (SMO)** layer, and **Security Assurance Specifications (SCAS) for the O-DU**.

The stated rationale for a fixed three-train cadence is a trade-off: frequent enough that implementers get regular updates and can feed experience back into the next train, but predictable and batched enough that the ecosystem retains the stability interoperability testing requires.

## Summary (ZH)

O-RAN 联盟于 2026 年 8 月 5 日发布了一篇说明文章，解释其规范究竟如何走向公开——该机制被称为**发布列车（publication train）**。规范并非在各工作组完稿时逐份发布；O-RAN 的技术组并行开发大量规范，然后每年三次把累积的更新与新增标题打包成一个协同批次。每一批即一列"列车"，随后沿固定审批路线运行：工作组/焦点组批准 → 技术指导委员会（TSC）批准 → **60 天知识产权（IPR）审查期** → 董事会最终批准 → 发布。

文章还厘清了"列车"与业界更常提及的 O-RAN **Release** 之间的关系。一个 Release 并非单列列车，而是若干列车交付物的累积集合，其定义为"可在商用网络中部署的特性"。最近的 **O-RAN-R005** 是随 **2025 年 11 月**那列列车完成的——这也解释了为何发布公告与底层规范工作的日期并不一致。

文章给出了两列列车的具体状态。**2026 年 3 月列车**已发布，载有 **59 份新增或更新的技术文档**。**2026 年 7 月列车**已在技术组内完成开发并进入审批周期，载有 **67 份新增或更新的技术文档**；在 IPR 与董事会批准环节之后，**预计于 2026 年 10 月发布**。7 月列车中具名的内容包括：Open Fronthaul 接口对**基于码本的波束成形与 SRS 波束成形**的支持（把波束成形处理从 O-DU 移到 O-RU）、面向**服务管理与编排（SMO）层的标准化能力开放框架**，以及**面向 O-DU 的安全保障规范（SCAS）**。

固定三列车节奏的官方理由是一种权衡：频率足够高，使实现方能定期获得更新并把实践经验反馈进下一列车；同时批次化且可预测，使生态系统保留互操作性测试所需的稳定性。

## Key technical points (EN)

- Cadence: three publication trains per year; each train bundles new and updated technical documents from all working groups and focus groups.
- Approval route per train: WG/FG approval → Technical Steering Committee approval → 60-day IPR review → Board of Directors approval → publication.
- Release vs train: an O-RAN Release is the accumulated deliverable set of multiple trains, scoped as features deployable in commercial networks. O-RAN-R005 completed with the November 2025 train.
- March 2026 train: published, 59 new or updated technical documents.
- July 2026 train: 67 new or updated technical documents, development complete, in approval cycle, expected publication October 2026 — i.e. roughly a one-quarter lag between technical completion and public availability.
- Named July 2026 train content: codebook-based and SRS beamforming support in Open Fronthaul, moving beamforming processing from the O-DU to the O-RU.
- Named July 2026 train content: standardised exposure framework for the SMO.
- Named July 2026 train content: Security Assurance Specifications (SCAS) for the O-DU.
- Design rationale as stated: predictable batching balances innovation velocity against the interoperability stability the multi-vendor ecosystem needs.
- Guards: primary source on the O-RAN ALLIANCE's own site, carrying its own 5 August 2026 datestamp; document counts and the October 2026 target are quoted from that page, not inferred from a search summary. The July-2026-train publication is a promised future event and is deliberately NOT treated as landed here.

## Key technical points (ZH)

- 节奏：每年三列发布列车；每列列车打包所有工作组与焦点组的新增及更新技术文档。
- 每列列车的审批路线：工作组/焦点组批准 → 技术指导委员会（TSC）批准 → 60 天 IPR 审查 → 董事会批准 → 发布。
- Release 与列车的关系：一个 O-RAN Release 是多列列车交付物的累积集合，范围界定为"可在商用网络中部署的特性"。O-RAN-R005 随 2025 年 11 月列车完成。
- 2026 年 3 月列车：已发布，59 份新增或更新技术文档。
- 2026 年 7 月列车：67 份新增或更新技术文档，开发已完成，处于审批周期，预计 2026 年 10 月发布——即技术完稿与公开可得之间约有一个季度的滞后。
- 7 月列车具名内容：Open Fronthaul 支持基于码本与 SRS 的波束成形，把波束成形处理从 O-DU 移至 O-RU。
- 7 月列车具名内容：面向 SMO 的标准化能力开放框架。
- 7 月列车具名内容：面向 O-DU 的安全保障规范（SCAS）。
- 官方设计理由：可预测的批次化在创新速度与多厂商生态所需的互操作稳定性之间取得平衡。
- 守卫说明：一手来源为 O-RAN 联盟自有站点，页面自带 2026-08-05 日期戳；文档数量与 2026 年 10 月目标均引自该页面，非搜索摘要推断。7 月列车的发布属于承诺中的未来事件，此处刻意不按"已落地"处理。

## Why it matters / what's new (EN)

This knowledge base carries a large and growing body of Open RAN research — RIC conflict arbitration, xApp/rApp control loops, forensic triage agents, processor-level CU/DU characterisation — plus release-level announcements such as the R005 completion. What it has not carried until now is the *process layer*: how a piece of O-RAN work travels from a working group to something an implementer can build against, and how long that takes. That gap matters because it silently distorts how release news should be read. An O-RAN "Release" announcement is not the moment the work was done; R005 was completed with a November 2025 train, and the July 2026 train's contents were technically finished before August yet will not be public until roughly October. Anyone dating O-RAN capability against announcement dates is reading a lagging indicator, and the 60-day IPR window plus Board approval is a large and fixed part of that lag.

The named July-2026 contents are also a substantive preview rather than mere process trivia. Moving codebook-based and SRS beamforming support into the Open Fronthaul interface relocates beamforming computation from the O-DU to the O-RU, which changes where the compute cost sits in a disaggregated deployment — directly relevant to the processor-level CU/DU characterisation work this KB already tracks, and to the wider argument about how much silicon a radio unit needs to carry. A standardised SMO exposure framework is the hook that third-party rApps and external orchestration need in order to be portable across vendors. And an O-DU Security Assurance Specification extends the SCAS methodology, familiar from 3GPP network-function security assurance, into the disaggregated RAN — a natural continuation of the O-RAN security work already recorded here.

Caveats: this is a self-description by the standards body, not an independent audit, and it gives no data on how often trains slip, how many documents change materially during IPR review, or what fraction of published titles vendors actually implement. The October 2026 publication is a target, not a completed event. Watch for the July train's actual publication and whether the 67-document count survives approval; for the composition of the next train after July; and for whether O-DU SCAS work converges with, or diverges from, the 3GPP SECAM/SCAS framework.

## Why it matters / what's new (ZH)

本库已积累大量 Open RAN 研究条目——RIC 冲突仲裁、xApp/rApp 控制环、取证式诊断智能体、CU/DU 处理器级刻画——以及 R005 完成之类的 Release 级公告。此前始终缺失的是**流程层**：一项 O-RAN 工作如何从工作组走到实现方可依据的成果，以及这需要多久。这个缺口之所以重要，是因为它会悄悄扭曲对发布新闻的解读。O-RAN 的 "Release" 公告并非工作完成之时；R005 随 2025 年 11 月列车完成，而 2026 年 7 月列车的内容在 8 月前已技术定稿，却要到约 10 月才公开。若以公告日期来给 O-RAN 能力定时间戳，读到的是滞后指标，而 60 天 IPR 窗口加董事会批准正是这段滞后中庞大且固定的部分。

7 月列车的具名内容也不只是流程琐事，而是实质性预告。把基于码本与 SRS 的波束成形支持纳入 Open Fronthaul 接口，等于把波束成形计算从 O-DU 迁到 O-RU，从而改变了解耦部署中算力成本的落点——这直接关联本库已跟踪的 CU/DU 处理器级刻画工作，也关联"射频单元究竟需要承载多少硅"这一更广泛争论。标准化的 SMO 能力开放框架，是第三方 rApp 与外部编排实现跨厂商可移植所需的接口钩子。而 O-DU 安全保障规范则把 3GPP 网络功能安全保障中为人熟知的 SCAS 方法学延伸进解耦 RAN，是本库已记录的 O-RAN 安全工作的自然延续。

保留意见：这是标准组织的自我描述而非独立审计，未给出列车延期频率、IPR 审查期间文档实质变更比例、以及已发布标题中厂商实际实现的比例等数据。2026 年 10 月的发布是目标而非已完成事件。关注要点：7 月列车是否如期发布、67 份文档数是否在审批后维持；7 月之后下一列车的构成；以及 O-DU SCAS 工作与 3GPP SECAM/SCAS 框架是趋同还是分化。

## Images
