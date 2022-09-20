---
title: chat-ActObjectValue 1.0
date: 2022-06-11 18:57:18
categories:
 - [技术,Lua]
tags:
 - Dice
index_img: https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-07/1651953020-849510-29e7e2d45c34a60b.png
---

> 使用《署名—非商业性使用—相同方式共享 4.0 协议国际版》（CC BY-NC-SA 4.0）进行授权
https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans
许可协议：CC BY-NC-SA 4.0
声明：本脚本适合**有一定脚本编写基础**的master使用，所造成的一切损失作者概不负责。

{% note warning %}
**WARNING**
1.0已不再更新，或许你可以期待一下[**2.0**](https://cypress0522.github.io/2022/06/18/chat-ActObjectValue-2.0)？
{% endnote %}

### 基本信息
- 默认设置参数输入格式：#setUserConf <user_qq> <Conf_name> <value>
清空和获取同理。
- 注意：必须写UserConf或者UserToday，否则不输出。
- 作者：简律纯
- 联系方式：qq:A2C29K9
- 版本：1.0(FINAL)
- 更新日期：2022/6/16

> 关键词：`#set` `#get` `#help log` `#help chataov`

## 下载
[chat-ActObjectValue.zip](https://github.com/cypress0522/cypress0522.github.io/releases/tag/chat-ActObjectValue)

## 简介
在测试时总会遇到要重置或获取或设置某个用户配置的情况，但苦于没有这方面的指令，所以写了一个，目前可以在聊天窗口中设置用户全局配置或当日配置。
当然，你也可以使用更多花里胡哨的东西。

![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-04-22/1650594557-426212-4acb8e97ccd6fe5a.png)
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-01/1651378789-731493-e5371e816c74ee6.png)

> 清 空 可 使 用 set nil

## 进阶用法
- Chat-AOV；
1.赋予所有人权限：
`#setUserConf <DiceQQ> <chat_perm> 1`
2.赋予单个用户权限：
`.user trust <用户> 4`
- Dice；
1.查看|修改 jrrp：
`#get|setUserToday <用户> <jrrp>` 
2.查看|修改 用户信任trust：
`#get|setUserConf <用户> <trust>` 
3.查看|修改 群配置rc房规：
`#get|setGroupConf <群号> <rc房规> <参数>`
4.清空/重置 配置：
`#setUserConf 2753364619 好感度 nil`

## TODO list
- 各类报错回复
- 设置数据类型

## 关于5.8更新内容的示例
5.8重点更新了记录的查看方式，新增了 `start_crrt`配置。

使用命令 `#setUserConf <骰娘QQ> start_crrt <值> `进行更改，其更改将会改变 `#help log`的返回内容：
`start_crrt` 默认为0，这时查看日志会显示最新的一条。
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-07/1651953020-849510-29e7e2d45c34a60b.png)
当 `start_crrt`修改为1至5范围内的数字，会显示最近的2至6条记录。
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-07/1651953344-615701-574c97559bc3ae34.png)
设置范围6至30时会显示对应数量的记录，但不是在群里，bot会私发给指令发出者。
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-07/1651953608-811583-315f836bf1e21646.png)
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-07/1651953634-841540-1a024626f1fb6728.png)

## 如何安装使用？
1.解压安装包
2.将安装包内文件与文件夹全部放入plugin文件夹
3.使用命令`.system load`

<script src="https://utteranc.es/client.js"
        repo="cypress0522/cypress0522.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>