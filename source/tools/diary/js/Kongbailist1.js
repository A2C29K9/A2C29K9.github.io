    function 哔哩哔哩列表框(name,event){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 哔哩哔哩列表框(name,event1,event2,event3){
        
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;
        
        //组件命令：
        this.添加项目 = function (title,img,play,time,info,json){
     		var table = document.getElementById(this.名称);
    		var li = document.createElement("li");
			li.className = "mui-table-view-cell mui-media li";
			li.setAttribute("tag",json);
			li.style.cssText = ""
			li.innerHTML = "<div class='imgdiv'><img src=" +img + " /><div><span><i class='iconfont icon-Play_big_x'></i>" + play + "</span><a>" + time + "</a></div></div><div class='lidb'><p>" + title+ "</p><div><span>" + info + "</span><i class='iconfont icon-caidan'></i></div></div>"
			var index = table.getElementsByTagName("li").length;
			li.index = index;
			table.appendChild(li);       
			return   index;
        } 
        
        //组件命令：
        this.置标题 = function (index,value){
           document.querySelectorAll("#" + this.名称 + " li")[index].querySelectorAll("div p")[0].innerHTML = value
        }  
        
        //组件命令：
        this.删除项目 = function (index){
			document.getElementById(this.名称).removeChild(document.getElementById(this.名称).childNodes[index]);
        } 
        
        //组件命令：
        this.取项目标记 = function (index){
			return document.getElementById(this.名称).getElementsByTagName("li")[index].getAttribute("tag");
        } 
        
        //组件命令：
        this.清空项目 = function (index){
			var table = document.getElementById(this.名称);
    		while(table.hasChildNodes()){
        		table.removeChild(table.firstChild);
			}
        } 		
		
        //组件事件
        if(event!=null){
 		
			mui("#" + this.名称).on("tap", "li", function() {
				var index = this.index;
				var title = this.querySelectorAll("div p")[0].innerHTML;
				var tag = this.getAttribute("tag");
				
				
				event(index,title,tag);
			}); 
		     	
        }
    }