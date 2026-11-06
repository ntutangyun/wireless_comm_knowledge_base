---
id: 2026-11-06_arxiv-queue-aware-token-communications-adaptive-token-budget
date_published: 2026-10-12
date_found: 2026-11-06
technology: edge-ai
type: academic-paper
title_en: "Queue-aware token communications: treating AI tokens as a queued workload and adapting the token budget to time-varying wireless service"
title_zh: "队列感知的令牌通信：把 AI 令牌视为排队负载，并随时变无线服务能力调整令牌预算"
url: "https://arxiv.org/abs/2610.16730"
source_quality: full
topics: [token-communication, task-oriented-communication, split-inference, queueing, token-budget, vision-transformer]
topic_primary: task-oriented-communication
topics_secondary: [compute-offloading, edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

Token communications (TokenCom) transmits task-oriented AI representations instead of raw data. The authors argue that existing work assumes tokens can be sent immediately and ignores the queue that forms when token workload generation does not match time-varying wireless service capability. Queue-Aware TokenCom puts a token queue inside the AI service pipeline: a transmitter-side submodel extracts tokens, token compression adapts their number, dimension or precision, the queue is served according to channel quality, bandwidth, power and scheduling, and a receiver-side submodel finishes inference. The queue evolves as Q(t+1) = [Q(t) - S(t)]+ + A(t), and the "token budget" is the control variable between AI performance (diminishing returns as the budget grows) and communication cost (a larger budget raises arrivals and delay). Link computed over: a simulated single-user wireless link, a time-correlated Rayleigh fading channel (Gauss-Markov, rho = 0.99, 10 ms slots, an arrival every 10 slots); the paper does not label it as simulated but the channel model and slot-based delay units indicate so.

The case study splits DeiT-Tiny/16 on Imagenette: the first three transformer layers run on the transmitter side with a learnable Top-K token selector (197 tokens: 196 patches plus CLS), and the other nine layers plus the head run at the receiver. Fixed budgets are compared with an adaptive controller that sets the budget from estimated service minus queue backlog, projected onto {1, 5, 10, 25, 50, 100}. With a fixed budget, raising K from 25 to 50 lifts accuracy from 95% to 96% but average task delay from 14.94 to 86.06 slots (about 5.76x). The adaptive controller with alpha = 0.1 gives about 89% accuracy at 1.49 slots of delay (fixed K = 5: 2.94 slots); with alpha = 0.4, about 92% at 3.57 slots (fixed K = 10: 5.17 slots).

## Summary (ZH)

令牌通信（TokenCom）传输面向任务的 AI 表示而非原始数据。作者指出，既有工作假定令牌可立即发送，忽略了令牌负载生成与时变无线服务能力不匹配时形成的队列。队列感知 TokenCom 把令牌队列放进 AI 服务流水线：发送端子模型提取令牌，令牌压缩调整其数量、维度或精度，队列按信道质量、带宽、功率与调度被服务，接收端子模型完成推理。队列按 Q(t+1) = [Q(t) - S(t)]+ + A(t) 演化，"令牌预算"是连接 AI 性能（预算增大收益递减）与通信代价（预算越大到达率与时延越高）的控制变量。所经链路：仿真的单用户无线链路，时间相关瑞利衰落信道（Gauss-Markov，rho = 0.99，时隙 10 ms，每 10 个时隙到达一次）；论文未标注为仿真，但信道模型和以时隙计的时延单位表明如此。

案例在 Imagenette 上拆分 DeiT-Tiny/16：前三层 Transformer 在发送端运行并带可学习 Top-K 令牌选择器（197 个令牌：196 个图像块加 CLS），其余九层和分类头在接收端运行。将固定预算与自适应控制器比较，后者依据估计服务量减去队列积压设定预算，并投影到 {1, 5, 10, 25, 50, 100}。固定预算下，K 由 25 增至 50 使精度从 95% 升到 96%，平均任务时延却从 14.94 增至 86.06 个时隙（约 5.76 倍）。alpha = 0.1 的自适应控制器精度约 89%、时延 1.49 个时隙（固定 K = 5 为 2.94）；alpha = 0.4 时约 92%、3.57 个时隙（固定 K = 10 为 5.17）。

## Key technical points (EN)

- Pipeline: transmitter submodel, token compression, token queue plus wireless transmission, receiver submodel; a queue-control policy observes queue and channel states.
- Two design directions: budget-aware token representation optimisation (end-to-end training under sampled budgets; train/deploy budget mismatch can hurt) and queue-aware token service optimisation (adaptive budget, scheduling priority by semantic importance or deadline, resource allocation); a task-indexed queueing model is proposed for variable task sizes.
- Adaptive rule: K_raw(t) = max{1, alpha (C-hat(t) - Q(t))}, with C-hat(t) = M mu(t); alpha sets aggressiveness.
- Budget distribution: P(K = 1) falls from 0.413 at alpha = 0.1 to about 0.107 at alpha = 0.8, and K = 1 accuracy drops from 87.37% to 83.15%; frequently sampled budgets tend to perform better.
- Caveats: single-user scenario, no confidence intervals or run counts reported.
- Stated future directions: closed-loop joint adaptation of model, tokens and queue; deadline-violation and task-failure metrics; multi-agent TokenCom with cooperative queue management.

## Key technical points (ZH)

- 流水线：发送端子模型、令牌压缩、令牌队列加无线传输、接收端子模型；队列控制策略观测队列与信道状态。
- 两个设计方向：预算感知的令牌表示优化（在抽样预算下端到端训练；训练与部署预算分布不一致会降低性能）和队列感知的令牌服务优化（自适应预算、按语义重要性或截止时间的调度优先级、资源分配）；针对任务大小可变提出按任务索引的排队模型。
- 自适应规则：K_raw(t) = max{1, alpha (C-hat(t) - Q(t))}，其中 C-hat(t) = M mu(t)；alpha 决定激进程度。
- 预算分布：P(K = 1) 由 alpha = 0.1 时的 0.413 降到 alpha = 0.8 时约 0.107，K = 1 的精度由 87.37% 降到 83.15%；被频繁抽样的预算往往表现更好。
- 注意：仅单用户场景，未报告置信区间或运行次数。
- 论文提出的未来方向：模型、令牌与队列的闭环联合自适应；截止时间违约与任务失败指标；带协同队列管理的多智能体 TokenCom。

## Why it matters / what's new (EN)

The paper's contribution is framing: it names the queue between AI representation generation and wireless service as a design object and shows, in one image-classification case study, that a budget chosen from channel and backlog state trades a few accuracy points for large delay reductions relative to fixed budgets. It is an overview-style article with a single-user simulated case study, not a multi-user or measured-link evaluation.

## Why it matters / what's new (ZH)

论文的贡献在于提出框架：把 AI 表示生成与无线服务之间的队列作为设计对象，并在一个图像分类案例中表明，相对固定预算，依据信道与积压状态选取的预算可用少量精度换取显著的时延降低。这是综述性质的文章，案例为单用户仿真，而非多用户或实测链路评估。

## Images

*(No redistributable images for this entry.)*
