---
title: Colorful-Error-Repo
date: 2022-08-17
categories:
 - [技术,Lua]
tags:
 - Dice
---


{% note secondary %}
**Colorful-Error-Repo**
> 简单的自定义报错回复模板.
{% endnote %}


# [❡]()Colorful-Error-Repo:来点不一样的报错吧

> 使用《署名—禁止演绎 4.0 协议国际版》（CC BY-ND 4.0）进行授权。
https://creativecommons.org/licenses/by-nd/4.0/legalcode.zh-Hans


> 续之前的弦：[骰娘自检/判断报错并自定义回复](https://forum.kokona.tech/d/1168-zhi-ling-jiao-ben-si-xiang-tou-niang-zi-jian-geng-lan-de-pan-duan-bao-cuo-bing-zi-ding-yi-hui-fu)

***

## 一、基本信息
- 作者： 简律纯
- 联系方式：qq:a2c29k9
- 版本：v1.0
- 更新日期：暂无
- 关键词：暂无
- 许可协议：CC BY-ND 4.0

***

## 二 、需求
- [ ] 更多的lua报错类型列表
- [ ] 更多时间

***

## 三、准备
1.暂时用了手册内色子整理的常见报错信息说明[^1]。
```lua
module '%s' not found:
	no field package.preload['%s']
	no file 
-- 没有把被引用的lua或dll文件放在指定位置（多见于require与loadLua）
-- 解决方式：把所需文件放入Dice存档目录/plugin/或Diceki/lua/，dll文件或require对象必须置于后者
attempt to call a nil value (global '%s')
-- 将空变量%s用作函数（global表示被调用的是全局变量，local表示本地变量，method表示索引方法）
attempt to index a nil value (global '%s')
-- 对空变量%s使用索引（只有table等结构可以索引，形如msg.fromMsg）
attempt to concatenate a nil value (local '%s')
-- 使用..连接字符串时连接了一个空变量%s
bad argument #1 to '%s' (string expected, got nil)
-- 函数%s的第1个参数类型错误，要求类型为string，但实际传入的参数为nil。特别地，got nil表示输入参数为nil或缺少参数
value expected
-- 要求参数，但没有传入
attempt to perform arithmetic on a nil value (global '%s')
-- 将一个空变量%s当做数字表示
bad argument #5 to 'format'(number has no integer representation)
-- 函数format的第5个参数类型错误，要求是整数，但传入是小数，或者是其余类型不能化为整数
'}' expected (to close '{' at line 169) near '%s'
-- 脚本第169行的左花括号缺少配对的右花括号。此错误也可以由表格内缺少逗号分隔、括号外的中文等原因造成
'end' expected (to close 'function' at line 240) near <eof>
-- 脚本第240行的function缺少收尾的end，<eof>表示文件结束（找到文件末也没找到）
'then' expected near 'end'
-- if then end逻辑结构缺少then
unexpected symbol near '%s'
-- 符号%s边有无法识读的符号，比如中文字符
attempt to get length of a nil value (local 'tab')
-- 对空变量tab作取长度运算（#）
attempt to add a 'string' with a 'string'
-- 对(不能化为数字的)字符串用加法'+'（字符串只能用连接'..'）
attempt to compare number with string
-- 对数字和(不能化为数字的)字符串用比较运算符
error loading module '%s' from file
-- 使用require "%s"时加载出错
no visible label '%s' for <goto> at line 
-- 在循环结构中跳转不存在的节点
invalid option '%s'
-- 传入的参数不是string或不在给定的字符串列表中
```

## 四、引用清单
[^1]：https://v2docs.kokona.tech/zh/latest/Develop_Manual.html#id22

<script src="https://utteranc.es/client.js"
        repo="cypress0522/cypress0522.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>