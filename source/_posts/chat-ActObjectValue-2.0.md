---
title: chat-ActObjectValue 2.0
date: 2022-06-18
categories:
 - [技术,Lua]
tags:
 - Dice
---


{% note secondary %}
**NOTICE**
2.0 或许在明天就出了？
{% endnote %}

## 前言
> 说句实话在昨天2.0也只是个创建了一个空文件夹的存在，但是今天突然就写完了，并且写得彻彻底底的，总之能用便是了！

只需要两步即可完成操作

## 开始
### 添加回复命令
在开始之前，你需要对自己家的骰娘输入以下命，其中，`require "catchError"`是必须的库，其他可根据需要添加。
{% codeblock lang:lua %}
.reply set
Prefix=#
Lua=
require "catchError"
require "basicFunction"
return load("return "..string.gsub(msg.fromMsg,2))()
{% endcodeblock %}

好的，目前你已经完成了三分之二了！
接下来让我们完成最后一步操作。

### 安装库
1.下载[catchError](https://girhub.com/A2C29K9)
2.将lua库丢进`Diceki\lua\`文件夹下
3.在聊天窗口使用`.system load`命令
