---
title: 【抛砖引玉】Lua原生函数load的继承性
date: 2022-11-19
categories:
 - [技术,Lua]
tags:
 - 教程
---
## **Lua原生函数load的继承性**

这篇帖子是没有学习目标的，并且更适合有**Lua编写基础**的人观看。
~~今天就是想不明不白的开始。~~
关于 `load`，如果看过[【指令脚本/抛砖引玉】Load: 在聊天窗口使用lua](https://forum.kokona.tech/d/1386) 那么你或许会对它熟悉一些，此函数是 `lua 5.1`就有的东西，作用是加载一个数据块。下面是现今的[官方5.2 manual](https://www.lua.org/manual/5.2/manual.html#pdf-load)给出的关于它的介绍：

```
load (ld [, source [, mode [, env]]])
Loads a chunk.

If is a string, the chunk is this string. If is a function, calls it repeatedly to get the chunk pieces. Each call to must return a string that concatenates with previous results. A return of an empty string, nil, or no value signals the end of the chunk. ldldloadld

If there are no syntactic errors, returns the compiled chunk as a function; otherwise, returns nil plus the error message.

If the resulting function has upvalues, the first upvalue is set to the value of , if that parameter is given, or to the value of the global environment. (When you load a main chunk, the resulting function will always have exactly one upvalue, the variable (see §2.2). When you load a binary chunk created from a function (see string.dump), the resulting function can have arbitrary upvalues.) env_ENV

source is used as the source of the chunk for error messages and debug information (see §4.9). When absent, it defaults to , if is a string, or to "" otherwise. ldld=(load)

The string controls whether the chunk can be text or binary (that is, a precompiled chunk). It may be the string "" (only binary chunks), "" (only text chunks), or "" (both binary and text). The default is "".modebtbtbt
```

> 什么意思？

坦白来说，**就是从字符串或者函数中加载一个代码块为方法并返回。**——应该不难理解吧？

但你需要明白以下几点：

> 1. `load()`返回的是函数,需要调用的话,还需要加括号。

2. 5.1.x版本 `load`方法为 `load(func[,chunkname])`从函数中加载，`loadstring(str[,chunkname])`从字符串中加载
3. 5.3.x版本为 `load (chunk [, chunkname [, mode [, env]]])`
   `chunk`为函数或字符串
   `mode`为加载模式:”t”文本样式,”b”二进制样式,”bt”二进制和文本模式.
   `env`代码块需要的参数

你可以这样对自己的骰娘做个测试~~（我称此方法为简式测试法）~~：

1. 在 `DiceQQ\plugin\`下新建 `test.lua`。
2. 在 `DiceQQ\plugin\test.lua`内写上如下代码：

```lua title="test.lua"
msg_order={["@"]="main"}
local main = function(msg) return load(msg.fromMsg:sub(2))() end
```

3. 对骰娘发送 `.system load`命令重载。
4. 对骰娘发送 `@return msg.fromQQ`，你将会收到自己的QQ。

其实到这里就是[【指令脚本/抛砖引玉】Load: 在聊天窗口使用lua](https://forum.kokona.tech/d/1386) 的全部内容了。下面进入正题。
因为昨天，哦不，今天凌晨喝的有点多，又很奇怪的是我醒的特别早，我大概五点就醒了，然后开始敲代码，也许是酒精的作用吧，我对krypton进行了如下无厘头测试：

```lua
tbl={}
tbl['第1层']="tbl[\"tbl['第2层']\"]"
tbl["tbl['第2层']"]="第3层"
return load("return "..tbl['第1层'])()
```

猜猜返回了什么？

我又进行了推导：

```lua
tbl={}
tbl['第1层']="tbl[\"tbl['第2层']\"]"
tbl["tbl['第2层']"]="tbl[\"tbl['第3层']\"]"
tbl["tbl[\"tbl['第3层']\"]"]="第4层"
return load("return "..tbl['第1层'])()
```

又返回了什么？
希望能有人好好运用吧。~~再不行就只能我自己写了()~~

<center><b>教程结束。</b></center>