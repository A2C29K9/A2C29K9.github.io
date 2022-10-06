    function 一个人标题下拉框(name,event){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 一个人标题下拉框(name,event1,event2,event3){
        
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;
        
        var pw;
	    pw = document.documentElement.clientWidth=pw +"px";
		document.getElementById(this.名称+"all").style.width = pw+"px";
		document.getElementById(this.名称+"left").style.width = pw + "px";
        //组件命令：
        this.置标题 = function (newTitle){
            document.getElementById(this.名称+"title").innerHTML=newTitle;
        } 
        
        //组件命令：
        this.取标题 = function (){
           return document.getElementById(this.名称+"title").innerHTML;
        }  
		
		//组件命令：
		this.添加项目 = function (项目标题,项目标记){
		   var obj=document.getElementById(this.名称+"sel"); 
		   obj.options.add(new Option(项目标题,项目标记));
		}
		
		//组件命令：
		this.删除项目 = function (项目索引){
		   var obj=document.getElementById(this.名称+"sel"); 
	       obj.options.remove(项目索引);
		}
		
		//组件命令：
		this.清空项目 = function (){
		   var obj=document.getElementById(this.名称+"sel"); 
           obj.options.length=0;
		}
		
		//组件命令：
		this.取项目索引 = function (){
		   var obj=document.getElementById(this.名称+"sel"); 
	       var index=obj.selectedIndex; 
		   return index;
		}
		
		//组件命令：
		this.置现行选中项 = function (index){
		   document.getElementById(this.名称+"sel").options[index].selected=true;
        }
		this.置项目标题 = function (index,title){
		   document.getElementById(this.名称+"sel").options[index].innerText = title;
		}
		this.取项目标题 = function (项目索引){
		   var obj=document.getElementById(this.名称+"sel"); 
	       var val = obj.options[项目索引].text;
		   return val;
		}
		this.置项目标记 = function (index,tag){
		   document.getElementById(this.名称+"sel").options[index].value = tag;
        }
		this.取项目标记 = function (index){
		   return document.getElementById(this.名称+"sel").options[index].value;
        }
		this.取项目总数 = function (){
            return document.getElementById(this.名称+"sel").options.length;
        }
		
		//组件命令：
		this.置背景颜色 = function (背景颜色){
		   document.getElementById(this.名称+"all").style.backgroundColor =背景颜色;
		}
		
		//组件命令：
		this.置标题颜色 = function (颜色){
		   document.getElementById(this.名称+"title").style.color = 颜色;
		}
		
		//组件命令：
		this.置下拉框文字颜色 = function (颜色){
		   document.getElementById(this.名称+"sel").style.color = 颜色;
		}
		
        
        //组件命令：
        this.置可视 = function (value){
            if(value==true){
                document.getElementById(this.名称).style.display="block";//显示	                
            }else{
                document.getElementById(this.名称).style.display="none"; //不占位隐藏               
            }
        } 
        
        //组件事件
        if(event!=null){
			document.getElementById(this.名称+"sel").addEventListener("change", function () {
				var index = this.options.selectedIndex;
                event(index,this.options[index].innerText,this.options[index].value);
            });
        }
    }