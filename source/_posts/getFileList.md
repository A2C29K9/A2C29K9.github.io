---
title: getFileList 获取文件夹列表
date: 2022-08-03 13:39:34
index_img: https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-08-03/1659492690-490071-13b5fe1b2faf154d.png
categories:
 - [技术,Lua]
tags:
 - Dice
---
{% note success %}
**getFileList**
简单的调用控制台获取文件夹列表实例
{% endnote %}

# 获取文件夹列表

> 使用《署名—非商业性使用—相同方式共享 4.0 协议国际版》（CC BY-NC-SA 4.0）进行授权。
> https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans

[ toc ]

| System  |  statement  |
| :------ | :---------: |
| Windows |  supported  |
| Linux   | unsupported |
| IOS     | unsupported |

---

### 下载

[getFileList.zip](https://github.com/cypress0522/cypress0522.github.io/releases/tag/getFileList)

### 基本信息

- 作者： 简律纯
- 联系方式：qq:a2c29k9
- 版本：v1.0
- 更新日期：2022/08/03
- 关键词：
  `--getDiceList=`
  `--getRootList=`
- 许可协议：CC BY-NC-SA 4.0

### 原理

利用os库中的os. execute执行cmd指令，达到获取文件夹列表的目的。

### 须知

该脚本只适配win平台，linux版本将会在后续更新（或者你也可以修改脚本，将dir改为ls即可，注意linux斜杠和反斜杠与win的区别），MA暂无解决方法。

### 用法

> `--getDiceList=nil`与 `--getRootList=nil`分别用于获取dice根目录列表以及框架根目录列表，后接二级目录或更多（你需要用两个反斜杠[\\]()将他们连接）子目录来获取其列表。每次执行命令，脚本将会在dice根目录生成对应的DiceList.txt与RootList.txt，若文件太多发不出来也可以去那边查看。

### 举例

> 获取根目录列表![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-08-03/1659492690-490071-13b5fe1b2faf154d.png)

> 获取根目录二级或三级文件夹列表![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-08-03/1659492727-777395-17c81e22d7ab297.png)
> **获取Dice文件夹二级或更多级文件夹列表同理。**

> 获取Dice文件夹列表![](https://dice-forum.s3.ap-northeast-1.amazonaws.com/2022-08-03/1659492798-371911-1528bb3c4ba6fcb6.png)

### 后记

```lua
---------------------------------------------------------------------
-- @getFileList 获取文件列表.
-- Author @简律纯(qq:a2c29k9)
-- @License MIT.
-- 2022/08/03
---------------------------------------------------------------------

msg_order={["--getDiceList="]="getDiceList",["--getRootList="]="getRootList"}

read_file = function(path,mode1,mode2)
    local text = ""
    local file = io.open(path,mode1)
    if (file ~= nil) then
      text = file.read(file, mode2)
      io.close(file)
    else 
      return "没有找到文件哦~"
    end
    return text
end

getLineCount = function(path)
local BUFSIZE = 2^13
local f = io.input(path)
local lc = 0

while true do
    local lines,rest = f:read(BUFSIZE,'*line')
  
    if not lines then break end
        if rest then lines = lines .. rest .. '\n' end
        local _,t = string.gsub(lines,"%S+","")
        _,t = string.gsub(lines,"\n","\n")
        lc = lc + t
    end

return lc
end

getDiceList = function(msg)
    local path = string.sub(msg.fromMsg,#'--getDiceList='+1)
    local Dir = path
  
    if path == 'nil' then Dir = nil end
  
    if Dir then 
        cmd = 'dir '.. getDiceDir()..'\\'..path..' /b >'..getDiceDir()..'//DiceList.txt'
        os.execute(cmd)
    else
        cmd = 'dir '.. getDiceDir()..' /b >'..getDiceDir()..'//DiceList.txt'
        os.execute(cmd)
    end
  
    return read_file(getDiceDir()..'//DiceList.txt','r','*a')..os.date('\n%x')..'\n文件夹与文件共 '..getLineCount(getDiceDir()..'//DiceList.txt')..' 个'

end

getRootList = function(msg)
    local path = string.sub(msg.fromMsg,#'--getRootList='+1)
    local Dir = path
  
    if path == 'nil' then Dir = nil end
  
    if Dir then 
        cmd = 'dir '..path..' /b >'..getDiceDir()..'//RootList.txt'
        os.execute(cmd)
    else
        cmd = 'dir /b >'..getDiceDir()..'//RootList.txt'
        os.execute(cmd)
    end
  
    return read_file(getDiceDir()..'//RootList.txt','r','*a')..os.date('\n%x')..'\n文件夹与文件共 '..getLineCount(getDiceDir()..'//RootList.txt')..' 个'

end
```

<script src="https://utteranc.es/client.js"
        repo="cypress0522/cypress0522.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
