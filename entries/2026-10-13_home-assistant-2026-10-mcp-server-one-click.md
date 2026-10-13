---
id: 2026-10-13_home-assistant-2026-10-mcp-server-one-click
date_published: 2026-10-07
date_found: 2026-10-13
technology: edge-ai
type: product
title_en: "Home Assistant 2026.10: one-click Model Context Protocol server lets external AI apps query and control a local home"
title_zh: "Home Assistant 2026.10：一键启用 Model Context Protocol 服务器，让外部 AI 应用查询并控制本地家庭"
url: "https://www.home-assistant.io/blog/2026/10/07/release-202610/"
source_quality: full
topics: [Home-Assistant, MCP, Model-Context-Protocol, AI-agent, KNX, conversation-agent, local-first]
topic_primary: home-ai-assistant
topics_secondary: [home-edge-ai]
novelty_score: 2
---

## Summary (EN)

The Home Assistant 2026.10 release notes (7 October 2026) include a section on "connecting your AI in one click". It concerns the Model Context Protocol (MCP): Home Assistant can act as an MCP server so that external AI apps such as Claude, ChatGPT or Cursor can talk to the home. Previously a user had to add the integration, choose what to expose and work out the URL by hand. The former "AI tasks" page under Settings > System is now an "AI" page with an MCP card where the server is switched on with one click and the URLs to paste into the AI app are listed. New setups expose everything Home Assistant offers, including future additions, and only administrator accounts can connect; both settings can be changed later without re-adding the integration. The reverse direction also works: apps that run their own MCP server are auto-discovered by the MCP integration and need only a confirmation to connect.

Other AI-related changes in the same release: the KNX integration gains AI tools for group addresses, devices and functions in an ETS project, telegram history and decoding of unknown values, plus reading and writing bus values, usable through a conversation agent or the MCP server; music search results are now passed to the AI so it can pick the best match rather than playing the first; support for newer OpenAI models was added; and fan modes on climate entities can be set by voice through a conversation agent.

The release notes do not say whether the AI models run locally or in the cloud and name no AI hardware.

## Summary (ZH)

Home Assistant 2026.10 发行说明（2026 年 10 月 7 日）中有一节"一键连接你的 AI"。内容涉及 Model Context Protocol（MCP）：Home Assistant 可充当 MCP 服务器，使 Claude、ChatGPT、Cursor 等外部 AI 应用能与家庭交互。此前用户需要自行添加集成、选择要开放的内容并摸索出 URL。原先位于"设置 > 系统"的"AI 任务"页面现已改为"AI"页面，其中的 MCP 卡片可一键开启服务器，并列出可粘贴到 AI 应用中的 URL。新建的配置默认开放 Home Assistant 提供的全部能力（包括未来新增的能力），且只有管理员账户可以连接；这两项设置之后都可更改，无需重新添加集成。反方向同样可行：自带 MCP 服务器的应用会被 MCP 集成自动发现，只需确认即可连接。

同一版本中其他与 AI 相关的变化包括：KNX 集成新增 AI 工具，可操作 ETS 工程中的组地址、设备与功能、查看报文历史、解码未知数值，并读写总线数值，可通过对话代理或 MCP 服务器使用；音乐搜索结果现在会交给 AI 以挑选最匹配项，而不是播放第一个；新增对较新 OpenAI 模型的支持；气候实体的风扇模式现可通过对话代理语音设置。

发行说明没有说明 AI 模型在本地还是云端运行，也未提及任何 AI 硬件。

## Key technical points (EN)

- Home Assistant acts as an MCP server; AI apps (Claude, ChatGPT, Cursor named) connect to query and control the home.
- A new AI page (renamed from AI tasks) has an MCP card: one-click enable, with copyable URLs.
- New setups expose everything by default, including future additions; only administrator accounts may connect; both settings editable later.
- Apps running their own MCP server are auto-discovered by the MCP integration and connect after a confirmation.
- KNX integration adds AI tools (ETS project group addresses/devices/functions, telegram history, decoding unknown values, reading and writing bus values), usable via a conversation agent or the MCP server.
- Release notes do not state local-versus-cloud model placement or any hardware.

## Key technical points (ZH)

- Home Assistant 充当 MCP 服务器；AI 应用（文中提到 Claude、ChatGPT、Cursor）可连接以查询并控制家庭。
- 新的 AI 页面（由"AI 任务"更名）带有 MCP 卡片：一键启用，并提供可复制的 URL。
- 新建配置默认开放全部能力（含未来新增）；只有管理员账户可连接；两项设置之后均可编辑。
- 自带 MCP 服务器的应用会被 MCP 集成自动发现，确认后即可连接。
- KNX 集成新增 AI 工具（ETS 工程的组地址/设备/功能、报文历史、解码未知数值、读写总线数值），可通过对话代理或 MCP 服务器使用。
- 发行说明未说明模型是本地还是云端运行，也未提及硬件。

## Why it matters / what's new (EN)

Home Assistant now exposes its MCP server from a one-click settings card, and lets external AI apps (Claude, ChatGPT, Cursor are named) query and control the home through it; the release notes give no data on model placement, latency or supported hardware.

## Why it matters / what's new (ZH)

Home Assistant 现可在设置中一键开启 MCP 服务器，供外部 AI 应用（文中提到 Claude、ChatGPT、Cursor）查询并控制家庭；发行说明未给出模型放置、延迟或所支持硬件的数据。

## Images

*(No redistributable images for this entry.)*
