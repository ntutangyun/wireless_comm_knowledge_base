---
id: 2026-09-11_mobisys-turboinfer-mobile-gpu-frequency-scaling-llm
date_published: 2026-06-21
date_found: 2026-09-11
type: academic-paper
technology: edge-ai
title_en: "Act Before It's Too Late: Power-Efficient LLM Inference on Mobile Device (TurboInfer)"
title_zh: "防患于未然：移动设备上的高能效大模型推理系统 TurboInfer"
url: "https://www.sigmobile.org/mobisys/2026/accepted_papers/"
source_quality: abstract_only
topics: [GPU-DVFS, on-device-LLM, mobile-inference, PMU, MobiSys]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

TurboInfer, presented at MobiSys 2026 (24th ACM International Conference on Mobile Systems, Applications and Services, Cambridge, UK, June 2026) by researchers from Beijing University of Posts and Telecommunications and ByteDance, targets a specific waste source in on-device LLM inference: today's GPU frequency governors react to compute load at a coarse, multi-hundred-millisecond granularity, so during the brief GPU stalls that occur between token-generation steps (waiting on memory, scheduling, or dependency stalls), the GPU frequency stays needlessly high and burns power without doing useful work.

TurboInfer performs millisecond-level GPU frequency scaling keyed directly to hardware-level stall detection: it reads performance monitoring unit (PMU) registers in real time to track GPU instruction counts and detect stalls as they happen, then lowers frequency during a detected stall and raises it again once computation resumes. To choose the frequency at each step without overshooting or undershooting (which would either waste power or slow generation), the system uses a tube-based model predictive control (TMPC) formulation that predicts near-optimal GPU frequencies while explicitly accounting for noise introduced by other background applications competing for the GPU. Reported result: over 40% power savings compared to baselines, without affecting token generation latency. This is filed under this KB's mobile-systems-venues source, closing a lead this scout carried as "identified but not yet confirmed" since 2026-09-07 (the paper was located by title and mechanism on 09-07/09-09 but its exact numbers and full author/affiliation list were not yet confirmed at that time).

## Summary (ZH)

TurboInfer 由北京邮电大学与字节跳动的研究者提出，发表于 MobiSys 2026（第 24 届 ACM 移动系统、应用与服务国际会议，英国剑桥大学，2026 年 6 月），针对端侧大模型推理中一个具体的浪费来源：当前的 GPU 频率调控器只能以数百毫秒级的粗粒度响应算力负载变化，因此在逐 token 生成过程之间出现的短暂 GPU 停顿（等待内存、调度或依赖关系）期间，GPU 频率仍维持在不必要的高位，白白消耗功耗而不产生有效计算。

TurboInfer 实现了与硬件级停顿检测直接挂钩的毫秒级 GPU 频率调节：它实时读取性能监控单元（PMU）寄存器以跟踪 GPU 指令计数并即时检测停顿，在检测到停顿时降低频率，计算恢复后再重新提升。为了在每一步选择既不过冲也不欠冲的频率（过冲浪费功耗，欠冲拖慢生成速度），系统采用基于管道（tube-based）的模型预测控制（TMPC）方法，在显式考虑其他后台应用争用 GPU 所引入噪声的同时，预测接近最优的 GPU 频率。报告结果为：相较基线方案实现超过 40% 的功耗节省，且不影响 token 生成时延。该条目归入本知识库的 mobile-systems-venues 来源，用以关闭本侦察脚本自 2026-09-07 起持续保留的一条「已识别但尚未确认」线索（09-07/09-09 已凭标题与机制定位到该论文，但当时尚未确认其具体数字与完整作者/机构列表）。

## Key technical points (EN)

- **Problem**: coarse-grained GPU frequency governors leave GPU frequency needlessly high during the brief inter-token stalls of on-device LLM decoding, wasting power.
- **Mechanism**: PMU-register-based real-time stall detection at millisecond granularity, paired with a tube-based model predictive control (TMPC) formulation to select near-optimal GPU frequency at each step.
- **Robustness**: TMPC explicitly models noise from background applications competing for GPU time, rather than assuming an idle system.
- **Result**: >40% power savings compared to baselines, without affecting token generation latency.
- **Authors / affiliation**: Haolin Chu, Jinxiao Fan, Jiabin Deng, Bensong Yu, Liguang Xie, Liang Liu, Huadong Ma, Xiaolong Zheng — Beijing University of Posts and Telecommunications and ByteDance.
- **Venue**: MobiSys 2026 (accepted-papers list), Cambridge, UK, June 2026. The venue page carries a public review rather than a formal abstract.

## Key technical points (ZH)

- **问题**：粗粒度 GPU 频率调控器在端侧大模型解码过程中逐 token 之间的短暂停顿期间，仍使 GPU 频率维持不必要的高位，造成功耗浪费。
- **机制**：基于 PMU 寄存器的毫秒级实时停顿检测，配合基于管道的模型预测控制（TMPC）方法，在每一步选择接近最优的 GPU 频率。
- **鲁棒性**：TMPC 显式建模了后台应用争用 GPU 所引入的噪声，而非假设系统处于空闲状态。
- **结果**：相较基线方案功耗节省超过 40%，且不影响 token 生成时延。
- **作者/机构**：Haolin Chu、Jinxiao Fan、Jiabin Deng、Bensong Yu、Liguang Xie、Liang Liu、Huadong Ma、Xiaolong Zheng —— 北京邮电大学与字节跳动。
- **会议**：MobiSys 2026（正式录用论文列表），英国剑桥大学，2026 年 6 月。

## Why it matters / what's new (EN)

This closes a lead this scout's mobile-systems-venues source has carried open since 2026-09-07 (previously logged only as "TurboInfer / Act Before It's Too Late — identified but not closed" pending its own arXiv preprint or a confirmed number set). The KB's on-device-inference bin already covers algorithmic efficiency techniques (speculative decoding, DVFS combined with speculation in the 2026-09-10 PELM entry); TurboInfer's contribution is complementary and lower-level — a hardware-signal-driven frequency controller that any decoding algorithm running on top of it would benefit from, rather than a change to the decoding algorithm itself. The reported >40% figure is a peer-reviewed, MobiSys-published measurement rather than a vendor marketing claim, which fits this KB's standing preference for independently measured numbers in a domain saturated with unverified TOPS/"Nx faster" claims.

## Why it matters / what's new (ZH)

本条目关闭了本侦察脚本 mobile-systems-venues 来源自 2026-09-07 起持续保留的一条线索（此前仅记录为「TurboInfer / Act Before It's Too Late——已识别但未关闭」，待寻得其 arXiv 预印本或确认具体数字）。本知识库 on-device-inference 分类已收录若干算法层面的效率技术（投机解码、2026-09-10 收录的 PELM 条目中 DVFS 与投机解码的结合）；TurboInfer 的贡献与之互补且处于更底层——一种由硬件信号驱动的频率控制器，任何运行于其上的解码算法都能从中受益，而非对解码算法本身的改动。所报告的超 40% 数字来自经同行评审、于 MobiSys 正式发表的实测结果，而非厂商营销宣称，这与本知识库在这一充斥着未经验证的 TOPS/「快 N 倍」宣称的领域中，一贯优先采信独立实测数字的立场相符。

## Images

*(No redistributable images for this entry — accepted-papers listing fetch, no figures extracted.)*
