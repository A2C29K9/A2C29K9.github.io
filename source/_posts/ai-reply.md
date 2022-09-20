---
title: 在dice里关于ai的应用
date: 2022-07-06
categories:
 - [技术,Lua]
tags:
 - Dice
 - AI
---


{% note primary %}
一个失败品...
{% endnote %}

> 使用《署名—非商业性使用—相同方式共享 4.0 协议国际版》（CC BY-NC-SA 4.0）进行授权。
https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans


## 起因
非常无聊，于是用正则以及dice的lua回复写了一个调用ai实例，总结了两个ai，青云客与思知。

使用方法：
调用青云客:setUserConf(getDiceQQ(),'ai',1)
调用思知:setUserConf(getDiceQQ(),'ai',2)

## 后记
{% codeblock lang:lua %}
.reply set
Regex=(.*)
Lua=
if getUserConf(getDiceQQ(),'ai') == 1 then
url = "http://api.qingyunke.com/api.php?key=free&appid=0&msg=" .. msg.fromMsg
	res,data = http.get(url)
	json = require("json")
	j = json.decode(data)
return j.content
elseif getUserConf(getDiceQQ(),'ai') == 2 then
url = "https://api.ownthink.com/bot?spoken=" .. msg.fromMsg
	res,data = http.get(url)
	json = require("json")
	j = json.decode(data)
return j.data.info.text
end
{% endcodeblock %}

<script src="https://utteranc.es/client.js"
        repo="cypress0522/cypress0522.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>