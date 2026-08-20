---
id: 2026-08-20_arxiv-slm-gnss-spoofing-driving-narratives
date_published: 2026-08-17
date_found: 2026-08-20
type: academic-paper
technology: satellite
title_en: "Structured driving-state narratives let a 1.7B small language model match 7-8B LLMs at GNSS spoofing detection for autonomous vehicles: 96.99 % accuracy / 97.18 % F1 across five attack classes, ~123 ms inference and 78 % less GPU memory, validated on unseen Clemson field data"
title_zh: "结构化驾驶状态叙述让 1.7B 小语言模型在自动驾驶 GNSS 欺骗检测上比肩 7-8B 大模型：五类攻击 96.99% 准确率 / 97.18% F1，推理约 123 ms、GPU 内存省 78%，并在未见的 Clemson 实地数据上验证"
url: "https://arxiv.org/abs/2608.17092"
source_quality: full
topics: [GNSS, spoofing-detection, small-language-models, SLM, LLM, autonomous-vehicles, sensor-fusion, IMU, KITTI, LoRA, edge-AI, TraCR]
topic_primary: sat-ai
topics_secondary: []
novelty_score: 2
---

## Summary (EN)
Enan and Chowdhury (Clemson) with Dasgupta and Rahman (University of Alabama; TraCR transportation-cybersecurity center; arxiv cs.CR, submitted 17 Aug 2026, under review at Transportation Research Record) ask whether GNSS spoofing detection for autonomous vehicles really needs a large model. Their framework converts vehicle states *independently* derived from GNSS and from onboard sensing (IMU-based speed, heading, maneuver and motion states) into **structured semantic narratives** — compact textual descriptions of what each sensor stream says the vehicle is doing — and fine-tunes a small language model (LoRA) to classify the narrative pair into five classes: no attack, overshoot, stopped, turn-by-turn, and wrong-turn attack.

Two SLMs (Qwen3-1.7B, Llama-3.2-1B-Instruct) are benchmarked against two fine-tuned LLM baselines (Qwen3-8B, Mistral-7B-Instruct-v0.3) on identical data built from the KITTI suite (Karlsruhe; OXTS RT3003 GNSS/INS ground truth) with spoofed trajectories injected while preserving timestamps and road-consistent headings. All four models land in a narrow band — accuracy 96.42–96.99 %, macro-F1 95.87–97.18 % — with **Qwen3-1.7B taking the best macro precision (99.05 %) and F1 (97.18 %)**, tied with Mistral-7B on accuracy (96.99 %). The efficiency gap is the point: Qwen3-1.7B infers in 122.7 ms average (Mistral-7B: 667.7 ms) with 3.25 GB peak inference GPU memory vs 15.35 GB for Qwen3-8B (−78.8 %) and 13.59 GB for Mistral-7B (−76.1 %); fine-tuning takes ~7.7 min vs ~66 min for Mistral-7B. A geographically independent field dataset collected by an instrumented vehicle in Clemson, South Carolina confirms transfer: macro-F1 95.89 % on unseen routes and attack realizations. The authors conclude that once heterogeneous sensor streams are serialized into a structured task-specific text representation, model scale stops mattering — making language-model spoofing detection deployable on resource-constrained vehicular compute.

## Summary (ZH)
Clemson 的 Enan、Chowdhury 与阿拉巴马大学的 Dasgupta、Rahman（TraCR 交通网络安全中心；arxiv cs.CR，2026 年 8 月 17 日提交，投稿 Transportation Research Record 审稿中）追问：自动驾驶的 GNSS 欺骗检测真的需要大模型吗？其框架把由 GNSS 与车载传感（基于 IMU 的速度、航向、机动与运动状态）*各自独立*推导的车辆状态转写为**结构化语义叙述**——即用紧凑文本描述每路传感器所"看到"的车辆行为——再以 LoRA 微调小语言模型，将叙述对分入五类：无攻击、过冲攻击、停车攻击、逐向导航攻击与错转弯攻击。

两个 SLM（Qwen3-1.7B、Llama-3.2-1B-Instruct）与两个微调 LLM 基线（Qwen3-8B、Mistral-7B-Instruct-v0.3）在完全相同的数据上对比：数据基于 KITTI（卡尔斯鲁厄；OXTS RT3003 GNSS/INS 真值），注入欺骗轨迹时保留原时间戳与道路一致的航向。四个模型落在窄带内——准确率 96.42–96.99%、宏 F1 95.87–97.18%——其中 **Qwen3-1.7B 取得最高宏精确率（99.05%）与最高 F1（97.18%）**，准确率与 Mistral-7B 并列最高（96.99%）。效率差距才是重点：Qwen3-1.7B 平均推理 122.7 ms（Mistral-7B 为 667.7 ms），峰值推理 GPU 内存 3.25 GB，对比 Qwen3-8B 的 15.35 GB（省 78.8%）与 Mistral-7B 的 13.59 GB（省 76.1%）；微调仅约 7.7 分钟（Mistral-7B 约 66 分钟）。在南卡罗来纳州 Clemson 用仪器车采集的地理独立实地数据集上确认了迁移性：未见路线与攻击实现下宏 F1 达 95.89%。作者结论：一旦异构传感流被序列化为结构化的任务专用文本表示，模型规模就不再重要——语言模型欺骗检测由此可部署于资源受限的车载计算平台。

## Key technical points (EN)
- **Method:** GNSS-derived vs onboard-sensor-derived driving states → structured text narratives (motion, maneuver, speed, heading) → LoRA-fine-tuned language model → 5-class detection+classification (no attack / overshoot / stopped / turn-by-turn / wrong-turn).
- **Models:** SLMs Qwen3-1.7B (1.73B params) and Llama-3.2-1B (1.24B) vs LLMs Qwen3-8B (8.21B) and Mistral-7B-v0.3 (7.26B); identical partitions, feature order, class definitions and LoRA procedure.
- **Held-out results:** accuracy 96.99 % (Qwen3-1.7B, tied Mistral-7B), macro precision 99.05 %, macro F1 97.18 % — the 1.7B SLM matches or beats both LLMs; stopped and turn-by-turn attacks hit 100/100 P/R for Qwen3-1.7B.
- **Efficiency:** avg inference 122.7 ms (Qwen3-1.7B) / 150.3 ms (Llama-1B) vs 157.9 ms (Qwen3-8B) / 667.7 ms (Mistral-7B); peak inference GPU memory 3.25 / 2.33 vs 15.35 / 13.59 GB; fine-tuning 7.7 / 7.2 min vs 22.0 / 65.7 min.
- **Field validation:** instrumented-vehicle dataset in Clemson, SC (geographically disjoint from KITTI training data); Qwen3-1.7B macro-F1 95.89 %, all class F1s ≥ 95.0 %.
- **Data:** KITTI (urban/rural/highway, OXTS RT3003) with spoofed trajectories that preserve timestamps and road-consistent headings — attacks are plausible, not teleporting.
- **Funding/venue:** US DOT TraCR national center; submitted to Transportation Research Record.

## Key technical points (ZH)
- **方法：** GNSS 推导与车载传感推导的驾驶状态 → 结构化文本叙述（运动、机动、速度、航向）→ LoRA 微调语言模型 → 五类检测+分类（无攻击/过冲/停车/逐向导航/错转弯）。
- **模型：** SLM Qwen3-1.7B（17.3 亿参数）、Llama-3.2-1B（12.4 亿）对比 LLM Qwen3-8B（82.1 亿）、Mistral-7B-v0.3（72.6 亿）；数据划分、特征顺序、类定义与 LoRA 流程完全一致。
- **保留测试集结果：** 准确率 96.99%（Qwen3-1.7B，与 Mistral-7B 并列）、宏精确率 99.05%、宏 F1 97.18%——1.7B 小模型追平或超过两个大模型；Qwen3-1.7B 对停车与逐向导航攻击精确率/召回率均 100%。
- **效率：** 平均推理 122.7 ms（Qwen3-1.7B）/ 150.3 ms（Llama-1B），对比 157.9 ms（Qwen3-8B）/ 667.7 ms（Mistral-7B）；峰值推理 GPU 内存 3.25 / 2.33 GB 对 15.35 / 13.59 GB；微调 7.7 / 7.2 分钟对 22.0 / 65.7 分钟。
- **实地验证：** 南卡 Clemson 仪器车数据集（与 KITTI 训练数据地理不相交）；Qwen3-1.7B 宏 F1 95.89%，各类 F1 均 ≥95.0%。
- **数据：** KITTI（城市/乡村/高速，OXTS RT3003），注入的欺骗轨迹保留时间戳与道路一致航向——攻击是"貌似合理"的而非瞬移式。
- **资助/发表：** 美国交通部 TraCR 国家中心；投稿 Transportation Research Record。

## Why it matters / what's new (EN)
The KB's GNSS-spoofing-defense thread already holds a perception-layer entry from the same research orbit: 2026-07-28's VLM framework (camera+IMU semantic cross-check vs GNSS-implied maneuvers, F1 94–95 %). This paper is the *deployment-shaped* counterpart, and three things distinguish it rather than merely increment: (a) the input modality shifts from camera frames to **structured text serialization of sensor-derived states** — no vision stack in the loop, which removes the VLM's compute burden and its weather/lighting fragility; (b) it is an explicit **SLM-vs-LLM scale study** on identical data, and the finding that a 1.7B model matches 7–8B models (while cutting inference memory ~78 % and latency ~5× vs Mistral-7B) is the argument that makes in-vehicle deployment plausible at all; (c) it adds **cross-geography field validation** (KITTI Karlsruhe → Clemson SC, macro-F1 95.89 %), which the VLM entry lacked. The framing echoes the KB-wide pattern of small/structured-input models displacing large ones at the network edge (cf. 2026-08-19's L-COIN using an LLM only as a reflection layer). Caveats: spoofed trajectories are synthetically injected into KITTI (attack realism bounded by the injection model), the five-class taxonomy is coarse, and detection relies on GNSS-vs-IMU divergence — a spoofing trajectory crafted to stay IMU-consistent (the rigid common-mode translation of 2026-08-12's UAV-swarm entry) would evade behavior-level cross-checks entirely.

## Why it matters / what's new (ZH)
知识库的 GNSS 欺骗防御脉络中已有同一研究圈的感知层条目：2026-07-28 的 VLM 框架（相机+IMU 语义交叉校验对 GNSS 隐含机动，F1 94–95%）。本文是其*面向部署*的对应物，三点使其有别于单纯增量：（a）输入模态从相机帧转为**传感器推导状态的结构化文本序列化**——回路中无视觉栈，消除了 VLM 的算力负担与天气/光照脆弱性；（b）它是在完全相同数据上的显式 **SLM 对 LLM 规模研究**，1.7B 模型追平 7–8B 模型（推理内存省约 78%、相对 Mistral-7B 延迟降约 5 倍）的发现，正是让车载部署变得可信的论据；（c）补充了 **跨地理实地验证**（KITTI 卡尔斯鲁厄 → 南卡 Clemson，宏 F1 95.89%），这是 VLM 条目所缺的。其框架呼应知识库范围内"小模型/结构化输入在网络边缘取代大模型"的模式（参见 2026-08-19 的 L-COIN 仅把 LLM 用作反思层）。注意：欺骗轨迹是合成注入 KITTI 的（攻击真实性受注入模型限制），五类分类法偏粗，且检测依赖 GNSS 与 IMU 的分歧——刻意保持 IMU 一致的欺骗轨迹（如 2026-08-12 无人机集群条目的刚性共模平移）可完全规避行为级交叉校验。
