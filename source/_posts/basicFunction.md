---
title: basicFunction
date: 2022-06-11 18:52:57
index_img: https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652532848-201463-3b032d5b2cba1d44.png
categories:
 - [技术,Lua]
tags:
 - Dice
---

> 使用《署名—非商业性使用—相同方式共享 4.0 协议国际版》（CC BY-NC-SA 4.0）进行授权
https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans

> 作者：简律纯
联系方式：qq:A2C29K9
更新日期：2022/5/15
关键词： `#basicFunction:`

## 前言
_basicFunction_ 的定位非常清晰，那就是作为脚本制作者的配置扩展，通过在lua脚本中 `require "basicFunction"`使用其中的函数。

## 下载
[basicFunction-alpha(2).zip](https://github.com/cypress0522/cypress0522.github.io/releases/tag/basicFunction)

## 最后
 衷心希望大家指正其中的错误和不足，促使 _basicFunction_ 不断进步完善

## 如何使用
### 搭载
_——开始之前的一些必要工作。_
1.下载 _basicFunction_并解压得到 _basicFunction.lua_文件
2.将解压得到的 _basicFunction.lua_文件放入 DiceQQ\plugin\文件夹
3.在确保前两步万无一失的情况下回到聊天窗口使用 `.system load`命令重载 _basicFunction_脚本

> 看到这里，你已经成功安装完成了！接下来让我们快速开始吧！

### 在聊天窗口使用
 _为了方便测试函数，简律纯特别的写了一个聊天窗口指令，用于测试这些函数_

#### > [xxx]. `#basicFunction:help`
这是一条用于获取帮助与更新的指令，不建议在群聊中使用。
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652528156-326881-4ce86491377f0bf4.png)


#### > [1] `#basicFunction:table_draw`
- 功能：随机抽取一条数组内元素
- 参数：数组
- 返回：字符串
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652528703-218364-341fe90b2615ec.png)


#### >[2] `#basicFunction:num_or_string`
- 功能：判断是否为num类型，若是则自动转为num类型，否则为string
- 参数：x:待转换字符串
- 返回：number类型数据或string类型数据
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652529015-469470-1a7836efde35a6a8.png)


#### >[3] `#basicFunction:getAtQQ`
- 功能：取at对象的qq
- 参数：字符串（尤指CQ码）
- 返回：文本形式的qq号
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652531356-998104-7ef52e1b54b3e7ce.png)



#### >[4] `#basicFunction:write_file`
- 功能：追加写文件，没有则创建
- 参数：文件路径，文件内容
- 返回：提示文本
- 说明：文件根目录DiceQQ//，我在生成文件时写了点注释，就比如会在当文件读写时在第一行特别注明文件名。
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652532311-215587-35aa6d41a8469dd9.png)
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652532306-79898-312b586e9182eb27.png)



#### >[5] `#basicFunction:read_file`
- 功能：读取文件全部内容
- 参数：文件路径
- 返回：有内容则返回字符串否则返回错误提示
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652532848-201463-3b032d5b2cba1d44.png)



#### >[6] `#basicFunction:filter_spec_chars`
- 功能：捕获并提取所有中文，合并后输出
- 参数：待捕获中文的字符串
- 返回：所有中文合并后的字符串
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652533253-492295-2c56f7627a54c1e4.png)



#### >[7] `#basicFunction:getFileName`
- 功能：取文件名，有扩展名
- 参数：文件路径
- 返回：字符串
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652535078-993169-6fc947dd5fe881d3.png)



#### >[8] `#basicFunction:getFileName2`
- 功能：取文件名，无扩展名
- 参数：文件路径
- 返回：字符串
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652535090-491912-475b2a113fb5d0a2.png)



#### >[9] `#basicFunction:utfStrLen`
- 功能：返回文本中的字符总数目
- 参数：字符串
- 返回：数字
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652536608-701822-3e9f7c7fe9aa2e6d.png)



#### >[10] `#basicFunction:MD5`
- 功能：转字符串为MD5
- 参数：待转换字符串
- 返回：MD5
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652537139-681577-35d6b69778ddd24a.png)
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652537160-810141-screenshot-2022-05-14-22-00-48-36.jpg)
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652537170-642829-screenshot-2022-05-14-22-01-10-15.jpg)



#### >[11] `#basicFunction:table_exists`
- 功能：判断数组中是否存在指定字符串
- 参数：数组，查找的字符串
- 返回：有则为true，没有则什么都不返回
- 示例：
先看一下内部代码，设定了一个tables
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652541688-375470-screenshot-2022-05-14-23-19-42-70.jpg)
接着输入看看效果
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652541709-390654-644c1b552d1efffa.png)



#### >[12] `#basicFunction:encodeBase64`
- 功能：返回字符串base64加密后的文本
- 参数：待加密字符串
- 返回：base64加密后文本
- 说明：因为不支持 `math.pow` 所以把写好的解密删了
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652542191-759474-40c8bacd80597d41.png)
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652537170-642829-screenshot-2022-05-14-22-01-10-15.jpg)
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652537160-810141-screenshot-2022-05-14-22-00-48-36.jpg)



#### >[13] `#basicFunction:string.split`
- 功能：分割字符串
- 参数：待分割字符串，分隔符
- 返回：字符串表
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652551923-200447-7c2b18bc815913ea.png)



#### >[14] `#basicFunction:string.count`
- 功能：统计字符串中字符的个数
- 参数：待统计的字符串
- 返回：总字符个数、英文字符数、中文字符数
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652544106-120444-2bc227485b07f827.png)



#### >[15] `#basicFunction:string.width`
- 功能：计算字符串的宽度
- 参数：字符串
- 返回：数字
- 说明：这里一个中文等于两个英文，后面的情况同理，此函数和 _utfStrLen_原理类似
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652554310-333254-20bf853ca8430fd0.png)



#### >[16] `#basicFunction:string.tocenter`
- 功能: 把字符串扩展为长度为len,居中对齐, 其他地方以filledChar补齐
- 参数: 需要被扩展的字符、数字、字符串表，被扩展成的长度，填充字符（可以为空）
- 返回：字符串
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652553472-701179-49139d6f69a2cd50.png)



#### >[3+14] `#basicFunction:string.toleft`
- 功能: 把字符串扩展为长度为len,左对齐, 其他地方用filledChar补齐
- 参数：需要被扩展的字符、数字、字符串表，被扩展成的长度，填充字符（可以为空）
- 返回：字符串
- 说明：中文相当于2个英文
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652553319-940907-3d59e78bd1371f52.png)



#### >[18] `#basicFunction:string.toright`
- 功能: 把字符串扩展为长度为len,右对齐, 其他地方用filledChar补齐
- 参数：需要被扩展的字符、数字、字符串表，被扩展成的长度，填充字符（可以为空）
- 返回：字符串
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652553542-607083-2e26d59c330482.png)



#### >[19] `#basicFunction:string.ltrim`
- 功能：对齐，去除通配符
- 参数：文本
- 返回：文本
- 示例：暂无


#### >[20] `#basicFunction:string.rtrim`
- 功能：对齐，去除通配符
- 参数：文本
- 返回：文本
- 示例：暂无


#### >[21] `#basicFunction:string.trim`
- 功能：对齐，去除通配符
- 参数：文本
- 返回：文本
- 示例：暂无


#### >[22] `#basicFunction:ranStr`
- 功能：随机输出字符串
- 参数：数字（输出个数）
- 返回：字符串
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652554731-126125-39ebb8a73aeede9.png)



#### >[23] `#basicFunction:tryCatch`
- 功能：监听错误报告如有则反馈
- 参数：函数名
- 返回：错误信息
- 说明：lua有两个函数可以捕获异常，分别是pcall(fun[,arg1,...])和xpcall(fun,errfun,[,arg1,...])，对比这两个函数,xpcall多了异常处理，这里仅采用pcall()做示例
- 示例：在没有改代码的情况下如果直接输入参数，将把输入的文本当做函数名找错![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652555008-125097-45b942fe53a293c.png)
我们看代码部分，我已经修改好了参数，好，现在它将会调用自己了![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652555367-976137-img20220515030858.jpg)
让我们猜一下会输出什么？
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652555401-577693-5f1c2329f7089d24.png)
是啊，没有错误，因为是奔着找错的目的执行 _找错_函数，当它能完整运行时自然是没有错误，简言之：

错误的错误就是没有错误（好耶！我又说了一句凡人名言）

那么，换成别的函数还会如此吗？
这里以 _bubbleSort_ 函数为例*因为很快就要讲到ta了*
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652555938-996780-screenshot-2022-05-15-03-18-06-41.jpg)
很好，果然不负众望的报错并让krypton拦截了
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652556076-36222-1f5d440399af905f.png)
那么输入参数会发生什么？
...to be continue


#### >[24] `#basicFunction:bubbleSort`
- 功能：冒泡（升序）排序
- 参数：tab:目标表
- 返回：排好序的文本
- 示例：
`tab = {3, 4, 61, 7, 5, 8, 56, 14, 11, 10}
return bubbleSort(tab)`
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652556743-633251-36c62b11467b00a2.png)


#### >[25] `#basicFunction:load`
- 功能：安全执行lua语句
- 说明：暂时弃用
- 示例：暂无


#### >[26] `#basicFunction:sortTable_delRepeat`
- 功能：将重复出现的数字全部删除(后续数字往前移)
- 参数：tab:数组
- 返回：去完重的字符串（多半还是降序的）
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652557118-960232-5fe3b9332f1eabbb.png)



#### >[27-1] `#basicFunction:Round`
- 功能：四舍五入(常用)
- 参数：num:待计算数字
- 返回：计算结果
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652557301-733453-57f1940480749985.png)



#### >[27-2] `#basicFunction:Round2`
- 功能：四舍五入(奇进偶舍)
- 参数：num:待计算数字 i:保留几位小数
- 返回：计算结果
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652557524-430485-37f48a1ee6238e19.png)



#### >[28] `#basicFunction:Multiply`
- 功能：相乘，同时判断了是否有null值
- 参数：都看得懂吧//两个数字...
- 返回：计算结果
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652557646-168592-1b35afe337a9742d.png)



#### >[29] `#basicFunction:Divide`
- 功能：相除
- 参数：denominator:除数 numerator:被除数
- 返回：计算结果
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652557740-451-6ccd7840db133641.png)



#### >[30-1] `#basicFunction:Ceil`
- 功能：取整
- 参数：数字
- 返回：结果
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652557790-14329-4f2b567f4dcf84d9.png)



#### >[30-2] `#basicFunction:Ceil2`
- 参数：数字
- 返回：结果
- 说明：第二种取整思路
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652557836-897466-682bdcbbe4e50ec4.png)



#### >[31] `#basicFunction:unicode2Chinese`
- 功能：利用JSON解析器把Unicode转中文汉字
- 参数：uni:完整的json格式Unicode码
- 返回：汉字字符串
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652558928-339373-407db05212e7f332.png)



#### >[32] `#basicFunction:stamp2Time`
- 功能：时间戳转时间
- 参数：Stamp:时间戳
- 返回：字符串
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652559106-59803-2aba66b7a6713455.png)



#### >[33] `#basicFunction:Match`
- 功能：匹配截取字符串
- 参数：msg:待匹配的字符串 num:截取位置
- 说明：汉字长度为2，特别注意
- 示例：![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-05-14/1652559448-296157-4861fe8be91b307b.png)



#### >[34-1] `#basicFunction:fitemSort`
- 功能：取数据存入数组
- 参数：字符串
- 返回：数组
- 示例：暂无


#### >[34-2] `#basicFunction:ffitemSort`
- 功能：取数据存入数组
- 参数：字符串
- 返回：数组
- 示例：暂无



#### > FUNCTION INDEX&LIST:
[1]table_draw(tab) LINE:48
[2]num_or_string(x) LINE:55
[3]getAtQQ(str) LINE:67
[4]write_file(path, text) LINE:79
[5]read_file(path) LINE:88
[6]filter_spec_chars(s) LINE:103
[7]getFileName(path) LINE:133
[8]getFileName2(path) LINE:140
[9]utfstrlen(str) LINE:147
[10]MD5(str) LINE:168
[11]table_exists(tables,value) LINE:395
[12]encodeBase64(source_str) LINE:408
[13]string.split(str, delimiter) LINE:443
[14]string.count(str) LINE:460
[15]string.width(str) LINE:470
[16]string.tocenter(str, len, filledChar) LINE:479
[17]string.toleft(str, len, filledChar) LINE:511
[18]string.toright(str, len, filledChar) LINE:540
[19]string.ltrim(str) LINE:573
[20]string.rtrim(str) LINE:577
[21]string.trim(str) LINE:581
[22]ranStr(num) LINE:588
[23]tryCatch(fun) LINE:604
[24]bubbleSort(tab) LINE:620
[25]弃用 LINE:646
[26]sortTable_delRepeat(tab) LINE:653
[27-1]Round(num, i) LINE:672
[27-2]Round2(num, i) LINE:681
[28]Multiply(num1,num2) LINE:702
[29]Divide(denominator,numerator) LINE:718
[30-1]Ceil(num) LINE:734
[30-2]Ceil2(num) LINE:753
[31]unicode2Chinese(uni) LINE:765
[32]stamp2Time(Stamp) LINE:782
[33]Match(msg,num) LINE:789
[34-1]fitemSort(rest) LINE:798
[34-2]ffitemSort(rest) LINE:809

### 在lua编写过程中使用
由于时间来不及，在lua中使用的教程与进阶用法将会在日后补齐。
**to be...**

### 一些实例
**getAtQQ**的使用：[【指令脚本】爬/丢/赞](https://forum.kokona.tech/d/1146)
**tryCatch**的使用：[【指令脚本/思想】巴拉巴拉骰娘自检和偷懒自定义报错什么的](https://forum.kokona.tech/d/1168)
