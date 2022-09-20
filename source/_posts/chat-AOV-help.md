---
title: chat-ActObjectValue:help
date: 2022-06-16 10:41:06
hide: true
---

{% note warning %}
**WARNING**
这是关于[__chat-ActObjectValue__](https://cypress0522.github.io/2022/06/11/chat-ActObjectValue/)的隐藏更新页面，你不应该在这里进行任何操作！
{% endnote %}

## 1.0数组写法
{% codeblock lang:1.0 %}
*FINAL VERSION
#<get|set><User|Group><Today|Conf> <Object> <Ng> [Value]
*例1，获取2753364619用户的jrrp：
#getUserToday 2753364619 jrrp
*例2，特别地，清空：
#setUserConf 2753364619 好感度 nil
{% endcodeblock %}

## 2.0函数写法
{% codeblock lang:2.0 %}
*Ver:2.0
#<get|set><User|Group><Today|Conf>(<Object>,<Ng>[,Value])
*例1，获取2753364619用户的jrrp：
#getUserToday("2753364619","jrrp",0)
*例2，清空操作：
#setUserConf("2753364619","好感度",nil)
{% endcodeblock %}