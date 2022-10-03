---
title: 改写print
date: 2022-08-05
categories:
 - [技术,Lua]
tags:
 - FIXED
keywords: 博客文章密码
password: print-fixed
abstract: 密码：不告诉你
message:  输入密码，查看文章
top: 10
---

{% note success %}
**print fixed**
简单实现改写print，将print内容写入文件生成日志。
{% endnote %}

```lua
-------------------------------------------------------------------------------
-- Print 改写. @简律纯 @gexi
-------------------------------------------------------------------------------
writeToFile = function ( str )
    local filename = "print.log"
    if not fileLogOut then
        fileLogOut = io.open(filename, "w")
    else
        fileLogOut = io.open(filename, "a")
    end
    fileLogOut:write(os.date("%H:%M:%S",os.time()).." "..str.."\n")
    fileLogOut:close()
end

function babe_tostring(...)
    local num = select("#", ...);
    local args = { ... };
    local outs = {};
    for i = 1, num do
        if i > 1 then
            outs[#outs + 1] = "\t";
        end
        outs[#outs + 1] = tostring(args[i]);
    end
    return table.concat(outs);
end

local just_print = print;
local babe_output = function(...)
    just_print(...);
    
    local str = babe_tostring(...);
    if writeToFile then writeToFile(str) end
end
print = babe_output
```