---
title: table-module
date: 2022-08-15
categories:
 - [技术,Lua]
tags:
 - Dice
---

{% note success%}
**table module**
> 对数组操作函数的拓展，利用这些函数可以更好的进行数据操作。
{% endnote %}

# table-module:更多的数组操作

> 使用《署名—禁止演绎 4.0 协议国际版》（CC BY-ND 4.0）进行授权。
https://creativecommons.org/licenses/by-nd/4.0/

***

> [ toc ] 更多操作，更多的可能~~猝死~~。

***

## 一、基本信息
- [二次修改]()作者： 简律纯
- 联系方式：qq:a2c29k9
- 版本：v1.0
- 更新日期：暂无
- 关键词：暂无
- 许可协议：CC BY-ND 4.0

***
| # | 函数名     | 简单介绍 | 
| :--- | :----: |    :----:   | 
|1| table.nums | 计算表格包含的字段数量 | 
|2| table.keys | 返回指定表格中的所有键 | 
|3| table.values| 返回指定表格中的所有值 |
|4| table.merge | 将来源表格中所有键及其值复制到目标表格对象中|
|5| table.indexof | 从表格中查找指定值，返回其索引 |
|6| table.keyof | 从表格中查找指定值，返回其 key |
|7| table.removebyvalue |  从表格中删除指定值，返回删除的值的个数 | 
|8| table.map | 对表格中每一个值执行一次指定的函数，并用函数返回值更新表格内容 |
|9| table.walk |  对表格中每一个值执行一次指定的函数，但不改变表格内容|
|10| table.filter | 对表格中每一个值执行一次指定的函数|
|11| table.unique | 遍历表格，确保其中的值唯一|

## 二、详细介绍
### 1.table.nums(t)
```lua
-- 计算表格包含的字段数量
-- @function [parent=#table] nums
-- @param table t 要检查的表格
-- @return integer#integer 
 
-- 计算表格包含的字段数量
-- Lua table 的 "#" 操作只对依次排序的数值下标数组有效，
-- table.nums() 则计算 table 中所有不为 nil 的值的个数。
```

### 2.table.keys(hashtable)
```lua
-- 返回指定表格中的所有键
-- @function [parent=#table] keys
-- @param table hashtable 要检查的表格
-- @return table#table 
 
-- 返回指定表格中的所有键
local hashtable = {a = 1, b = 2, c = 3}
local keys = table.keys(hashtable)
-- keys = {"a", "b", "c"}
```

### 3.table.values(hashtable)
```lua
-- 返回指定表格中的所有值
-- @function [parent=#table] values
-- @param table hashtable 要检查的表格
-- @return table#table 
 
-- 返回指定表格中的所有值
local hashtable = {a = 1, b = 2, c = 3}
local values = table.values(hashtable)
-- values = {1, 2, 3}
```

### 4.table.merge(dest, src)
```lua
-- 将来源表格中所有键及其值复制到目标表格对象中，如果存在同名键，则覆盖其值
-- @function [parent=#table] merge
-- @param table dest 目标表格
-- @param table src 来源表格
 
-- 将来源表格中所有键及其值复制到目标表格对象中，如果存在同名键，则覆盖其值
local dest = {a = 1, b = 2}
local src  = {c = 3, d = 4}
table.merge(dest, src)
-- dest = {a = 1, b = 2, c = 3, d = 4}
```

### 5.table.indexof(array, value, begin)
```lua
-- 从表格中查找指定值，返回其索引，如果没找到返回 false
-- @function [parent=#table] indexof
-- @param table array 表格
-- @param mixed value 要查找的值
-- @param integer begin 起始索引值
-- @return integer#integer 
 
-- 从表格中查找指定值，返回其索引，如果没找到返回 false
local array = {"a", "b", "c"}
print(table.indexof(array, "b")) -- 输出 2
```

### 6.table.keyof(hashtable, value)
```lua
-- 从表格中查找指定值，返回其 key，如果没找到返回 nil
-- @function [parent=#table] keyof
-- @param table hashtable 表格
-- @param mixed value 要查找的值
-- @return string#string  该值对应的 key
 
-- 从表格中查找指定值，返回其 key，如果没找到返回 nil
local hashtable = {name = "dualface", comp = "chukong"}
print(table.keyof(hashtable, "chukong")) -- 输出 comp
```

### 7.table.removebyvalue(array, value, removeall)
```lua
-- 从表格中删除指定值，返回删除的值的个数
-- @function [parent=#table] removebyvalue
-- @param table array 表格
-- @param mixed value 要删除的值
-- @param boolean removeall 是否删除所有相同的值
-- @return integer#integer 
 
-- 从表格中删除指定值，返回删除的值的个数
local array = {"a", "b", "c", "c"}
print(table.removebyvalue(array, "c", true)) -- 输出 2
```

### 8.table.map(t, fn)
```lua
-- 对表格中每一个值执行一次指定的函数，并用函数返回值更新表格内容
-- @function [parent=#table] map
-- @param table t 表格
-- @param function fn 函数
 
-- 对表格中每一个值执行一次指定的函数，并用函数返回值更新表格内容
local t = {name = "dualface", comp = "chukong"}
table.map(t, function(v, k)
    -- 在每一个值前后添加括号
    return "[" .. v .. "]"
end)

-- 输出修改后的表格内容
for k, v in pairs(t) do
    print(k, v)
end
-- 输出
-- name [dualface]
-- comp [chukong]

-- fn 参数指定的函数具有两个参数，并且返回一个值。原型如下：
function map_function(value, key)
    return value
end
```

### 9.table.walk(t, fn)
```lua
-- 对表格中每一个值执行一次指定的函数，但不改变表格内容
-- @function [parent=#table] walk
-- @param table t 表格
-- @param function fn 函数
 
-- 对表格中每一个值执行一次指定的函数，但不改变表格内容
local t = {name = "dualface", comp = "chukong"}
table.walk(t, function(v, k)
    -- 输出每一个值
    print(v)
end)

-- fn 参数指定的函数具有两个参数，没有返回值。原型如下：
function map_function(value, key)
end
```

### 10.table.filter(t, fn)
```lua
-- 对表格中每一个值执行一次指定的函数，如果该函数返回 false，则对应的值会从表格中删除
-- @function [parent=#table] filter
-- @param table t 表格
-- @param function fn 函数
 
-- 对表格中每一个值执行一次指定的函数，如果该函数返回 false，则对应的值会从表格中删除
local t = {name = "dualface", comp = "chukong"}
table.filter(t, function(v, k)
    return v ~= "dualface" -- 当值等于 dualface 时过滤掉该值
end)
-- 输出修改后的表格内容
for k, v in pairs(t) do
    print(k, v)
end
-- 输出
-- comp chukong

-- fn 参数指定的函数具有两个参数，并且返回一个 boolean 值。原型如下：
function map_function(value, key)
    return true or false
end
 ```

### 11.table.unique(array) 
```lua
-- 遍历表格，确保其中的值唯一
-- @function [parent=#table] unique
-- @param table array 数组
-- @return table#table  包含所有唯一值的新表格
 
-- 遍历表格，确保其中的值唯一
local t = {"a", "a", "b", "c"} -- 重复的 a 会被过滤掉
local n = table.unique(t)
for k, v in pairs(n) do
    print(v)
end
-- 输出
-- a
-- b
-- c
```

***

## 三、下载
[table-module.zip](https://github.com/A2C29K9/A2C29K9.github.io/releases/download/module/table_module.zip)
