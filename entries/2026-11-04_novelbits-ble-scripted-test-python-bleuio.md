---
id: 2026-11-04_novelbits-ble-scripted-test-python-bleuio
date_published: 2026-11-03
date_found: 2026-11-04
type: tutorial
technology: bluetooth
title_en: "Novel Bits: turning a manual BLE test into a Python script with two AT-command dongles (SPS data exchange, CCCD negative test)"
title_zh: "Novel Bits：用两个 AT 命令加密狗把手动 BLE 测试变成 Python 脚本（SPS 数据交换与 CCCD 负向测试）"
url: "https://novelbits.io/scripted-bluetooth-le-test/"
source_quality: full
topics: [BLE, testing, automation, AT-commands, BleuIO, GATT, CCCD, notifications]
topic_primary: bt-le
topics_secondary: []
novelty_score: 1
---

## Summary (EN)

Novel Bits post by Mohammad Afaneh (3 November 2026, Part 2 of a series; the site discloses it is a US distributor of the BleuIO dongles used and also promotes its own course). Python with pyserial drives two BleuIO USB dongles through AT commands (firmware 2.7.9.78), one as peripheral and one as central. Each serial port stays open for the whole session; a send() function issues commands and a separate read_pending() captures unsolicited notifications. Data moves over BleuIO's Serial Port Service (SPS), a UART-style service similar to Nordic's UART Service.

The test opens both ports at 115200 baud, confirms roles with ATI, starts advertising (AT+ADVSTART) and connects (AT+GAPCONNECT), checks auto-subscriptions (AT+NOTI), sends peripheral-to-central data (AT+SPSSEND) and central-to-peripheral data (AT+GATTCWRITEWR to handle 0011), then runs a negative test: unsubscribing with AT+CLEARNOTI=000D makes AT+SPSSEND return ERROR, and AT+SETNOTI=000D restores delivery. Five assertions cover send, receive, failure and recovery, and the script exits nonzero on failure. Companion code is in the NovelBits bleuio-automation repository.

## Summary (ZH)

Novel Bits 文章，作者 Mohammad Afaneh（2026 年 11 月 3 日，系列第 2 部分；网站披露其为所用 BleuIO 加密狗的美国经销商，同时推广自家课程）。用 Python 与 pyserial 通过 AT 命令驱动两个 BleuIO USB 加密狗（固件 2.7.9.78），一个作外设，一个作中心设备。每个串口在整个会话期间保持打开；send() 函数发出命令，read_pending() 单独捕获主动上报的通知。数据通过 BleuIO 的串口服务 SPS（类似 Nordic UART Service 的 UART 风格服务）传输。

测试以 115200 波特率打开两个端口，用 ATI 确认角色，开始广播（AT+ADVSTART）并连接（AT+GAPCONNECT），检查自动订阅（AT+NOTI），发送外设到中心的数据（AT+SPSSEND）和中心到外设的数据（对句柄 0011 使用 AT+GATTCWRITEWR），再做负向测试：用 AT+CLEARNOTI=000D 取消订阅后 AT+SPSSEND 返回 ERROR，用 AT+SETNOTI=000D 恢复后投递恢复。五项断言覆盖发送、接收、失败与恢复，失败时脚本以非零状态退出。配套代码在 NovelBits 的 bleuio-automation 仓库。

## Key technical points (EN)

- **Setup**: Python + pyserial, two BleuIO dongles, firmware 2.7.9.78; persistent serial ports, separate command and notification readers.
- **Observed**: AT+SPSSEND replies [Sent] (not OK); a 25-character payload arrived as a 26-byte notification (firmware appends a terminator byte).
- **Firmware difference**: the central auto-subscribed to four handles (000D, 0014, 0019, 0021) on 2.7.9.78 but two (000D, 0014) on 2.8.0.5.
- **CCCD behavior**: without a subscriber AT+SPSSEND returns ERROR, which the author attributes to CCCD working correctly; phone apps such as nRF Connect do not auto-subscribe.
- **Portability**: handle values are firmware-specific; read them from AT+GETSERVICES on other builds.

## Key technical points (ZH)

- **环境**：Python + pyserial，两个 BleuIO 加密狗，固件 2.7.9.78；串口常开，命令与通知读取分离。
- **观察**：AT+SPSSEND 返回 [Sent]（而非 OK）；25 字符负载以 26 字节通知到达（固件附加一个结束字节）。
- **固件差异**：2.7.9.78 上中心设备自动订阅四个句柄（000D、0014、0019、0021），2.8.0.5 上为两个（000D、0014）。
- **CCCD 行为**：无订阅者时 AT+SPSSEND 返回 ERROR，作者认为这是 CCCD 机制正常工作；nRF Connect 等手机应用不会自动订阅。
- **可移植性**：句柄值与固件相关；其他版本应通过 AT+GETSERVICES 读取。

## Why it matters / what's new (EN)

A practical follow-on to the KB's 2026-09-01 phone-free testing entry: it shows how that dongle workflow becomes a repeatable pass/fail script, with a few firmware-specific observations. It is vendor-tool specific and the publisher distributes the dongles used, so treat it as a how-to rather than a protocol finding.

## Why it matters / what's new (ZH)

这是知识库 2026-09-01 无手机测试条目的实用后续：展示了该加密狗工作流如何变成可重复的通过/失败脚本，并附带若干固件相关观察。内容依赖特定厂商工具且发布方是所用加密狗的分销商，应视作操作指南而非协议层发现。
