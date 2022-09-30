---
title: Midido 一个更非人性化的手搓midi库
date: 2022-08-05
index_img: 
categories:
 - [技术,Lua]
tags:
 - FIXED
 - Dice
---

{% note success %}
**Midido**
简单实现用lua输出midi的库。
{% endnote %}

> 使用《署名—非商业性使用—相同方式共享 4.0 协议国际版》（CC BY-NC-SA 4.0）进行授权。
https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans


| Midido To-do list      | 描述 | 状态     |
| :---        |    :----:   |          :---: |
| wiki      | 用法wiki       | x |
| Keyboards' pack   | 键位包        | 敬请期待 |
| songs' e.g. | 歌曲工程示例 | x|

## 一、基本信息
> - 作者： 简律纯
- 联系方式：qq:a2c29k9
- 版本：v1.0
- 更新日期：暂无
- 关键词：暂无
- 许可协议：CC BY-NC-SA 4.0

## 二、详细介绍
### 1.简介
> 最初是一个设想，毕竟我是写音乐的，主要负责作曲编曲，鸽了快一年后很多粉丝不耐烦了，于是我开始整一些或许大学用得上的东西^比如一个bot ，高考那几天突发奇想，我或许可以教粉丝朋友一起写音乐？那就先从midi序列开始吧！~~（也可以名正言顺咕咕咕，同时压榨劳动力）~~

### 2.一些教训
> 1.之前试过onebot ZBP插件里的timidity，也是手搓midi，但是仍然需要安装ffmpeg和timidity环境，且受到一定的系统环境影响——尽管成功写出了midi文件，但是对于其他那些使用非Windows系统（大家其实更愿意用Macbook）的人（主要是我的作曲家编曲家朋友）来说安装十分困难。
zbp关于midi的插件介绍：
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-07-30/1659158099-11773-5d706d6c091bc400.jpg)


> 2.于是我开始注意到简化使用指令的重要性，并在此机缘巧合下找到了 [AutoPiano](https://www.autopiano.cn)。
我并不在意它的关于编写输出音乐的任何逻辑或是别的什么，我找到了站长，并向他提出了几个问题——就比如，键盘谱是如何想出来的。
下图为孤勇者唱谱：
![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-07-30/1659157938-716855-img20220730131141.jpg)


> 3.综上，这未尝不是一个很好的开端，至少我明白了手搓midi的原理，以及一些更切合实际的东西，就比如简化指令。

## 三、TO-DO LIST
- [ ] 编写用法wiki
用法非常复杂，这脚本就算是raw了，我需要讲清楚如何写出一段音阶（最简单的一段中音区 C D E F G A B midi片段）；如何写出一段chord（和弦），并在此和弦基础上继续写主旋律；如何变换调式调性（F# -> Ab）；如何修改速度等等。

- [ ] 编写最基础的简化指令包，虽然目前写好的raw版本是功能最全的，但是其编写midi的方式（我目前主要靠写lua脚本再 `loadLua()` 或者使用basicFunction1.0（啊现在应该叫FuncLib2.0）内注释掉的 `load()()` 来写midi）过于硬核，所以需要一个诸如 `midi:0333-1 0333-2` 或是 `midi:E5 E5 E5 C5` 这样的简单易用指令。

- [x] 一个音源键位包，或者一个键位函数包，用于简化脚本写midi时的打谱环节。

## 四、脚本输出实例试听
C大调音阶：
[upl-file uuid=e45d0254-ca7a-498c-b00d-069b2de5a74b size=257B]c-major-scale.zip[/upl-file]
Am和弦：
[upl-file uuid=d2589143-51ab-4ff7-aa9f-96734e60d4b3 size=321B]chord-example.zip[/upl-file]
时值变化：
[upl-file uuid=d9db9d92-396a-48c2-918c-2ecf3ef37e26 size=260B]duration-example.zip[/upl-file]

## 五、最后
> 脚本将会在简化指令版写完发布，愿大家都能名正言顺的咕咕咕，也愿大家都热爱生活，热爱音乐！

