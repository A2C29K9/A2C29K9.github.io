---
title: repeat-joker
date: 2022-07-14
categories:
 - [技术,Lua]
tags:
 - Dice
---


{% note secondary %}
**目前正在努力ing...**
{% endnote %}

## 前言
> 使用《署名—非商业性使用—相同方式共享4.0 协议国际版》（CC BY-NC-SA 4.0）进行授权https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans


{% note warning %}
**WARNING ⚠️**
提供了dice解决复读问题的一种方法思路，但不免会有诸多不便。
> 采用读写json方式。
{% endnote %}


## 后记
{% codeblock lang:lua %}
msg_order={}

require("basicFunction")
json = require("json")

msg_order[".repjoker"]="repjoker"

default_uid_json = [[{"uid":2753364619,"msg":"好耶","time":1657773120}]]
default_gid_json = [[{"gid":971050440,"msg":"简律纯","time":1657773120}]]
uid_path = "plugin//repeat-joker//uid.json"
gid_path = "plugin//repeat-joker//gid.json"
    
if(getUserConf(getDiceQQ(),'repjoker_') ~= true) then
    mkDirs(getDiceDir()..'//plugin//repeat-joker')
    write_file(uid_path,default_uid_json)
    write_file(gid_path,default_gid_json)
    setUserConf(getDiceQQ(),'repjoker_',true)
    --> repeat-joker:初始化完成~
end

function repjoker(msg)
    local default_data = ""
    local data = ""
    local son_orders = fitemSort(Match(msg.fromMsg,#'.repkiller'+1))
    if(fitems[1] == "list") then
        if(fitems[2] == "uid") then
            default_data = "{\"uid_list\":["..read_file(uid_path).."]}"
            data = json.decode(default_data)
            return "{self}共【"..#data.uid_list.."】条私聊记录:"..default_data
        elseif(fitems[2] == "gid") then
            default_data =  "{\"gid_list\":["..read_file(gid_path).."]}"
            data =  json.decode(default_data)
            return "{self}共【"..#data.gid_list.."】条群聊记录:\n"..default_data
        end
    elseif(fitems[1] == "uid") then
        default_data = "{\"uid_list\":["..read_file(uid_path).."]}"
        data = json.decode(default_data)
        if(fitems[2] == nil) then
            if(getUserConf(msg.uid,'uid-help') ~= true) then
                setUserConf(msg.uid,'uid-help',true)
                return "{nick}你的对象呢？\n是这样用哒:\n.repjoker uid <QQ号>\n记住了以后可不会再告诉你了"
            else
                return "{nick}又没有对象了吗?"
            end
        else
            local uid = getAtQQ(fitems[2])
            data = json.decode(string.gsub(default_data,'%s',''))
            for i=1,#data.uid_list do
                if(data.uid_list[i].uid == tonumber(uid)) then
                    k = i
                    out = "已为{nick}找到"..getUserConf(tonumber(data.uid_list[k].uid),"nick#").."最近的一条发言记录:\n"..stamp2Time(data.uid_list[k].time)..":"..data.uid_list[k].msg
                    break
                else
                    out = "{self}处没有关于".. getUserConf(tonumber(uid),"nick#").."的发言记录哦~"
                end
            end
        end
        return out
    elseif(fitems[1] == "gid") then
        default_data = "{\"gid_list\":["..read_file(gid_path).."]}"
        data = json.decode(default_data)
        if(fitems[2] == nil) then
            return getGroupConf(tonumber(msg.gid),"name").."("..msg.gid..")还没有人复读过哦~#期待"
        else
            local gid = getAtQQ(fitems[2])
            data = json.decode(string.gsub(default_data,'%s',''))
            for i=1,#data.msg do
                if(data.gid[i] == tonumber(gid)) then
                    k = i
                    break
                else
                    out = "{self}处没有关于群".. getGroupConf(tonumber(gid),"name").."("..gid..")的用户发言记录哦~"
                end
            end
        end
        return out
    elseif(fitems[1] == "test") then
        write_(msg.fromMsg,msg.uid,msg.fromGroup)
    end
end

function write_(str,uid,gid)
    if(gid == "0") then
        write_file(uid_path,",{\"uid\":"..uid..",\"msg\":\""..str.."\",\"time\":"..os.time().."}")
    else
        write_file(gid_path,",{\"gid\":"..gid..",\"msg\":\""..str.."\",\"time\":"..os.time().."}")
    end
end
{% endcodeblock %}


<script src="https://utteranc.es/client.js"
        repo="cypress0522/cypress0522.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>