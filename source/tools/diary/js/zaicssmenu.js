    function 仔仔导航菜单(name,functionName){   
        
        this.名称 = name;
        
		this.置可视 = function (value){
            if(value==true){
                 document.getElementById(this.名称+"_zai").style.display="";                
            }else{
               document.getElementById(this.名称+"_zai").style.display="none";
            }
        }
		
		this.置背景颜色 = function (value){
			if(value){
				document.getElementById(this.名称+"_book").style.background=value;
			}else{
				document.getElementById(this.名称+"_book").style.background="#0078D7";
			}
        }
		
		this.置背景透明 = function (value){
			if(value){
				document.getElementById(this.名称+"_book").style.opacity=value;
			}else{
				document.getElementById(this.名称+"_book").style.opacity="0.8";
			}
        }
		
		this.移动 = function (widtha,heighta,topa,righta){
			if(widtha){
				document.getElementById(this.名称+"_ico").style.width=widtha+"px";
			}else{
				document.getElementById(this.名称+"_ico").style.width="30px";
			}
			
			if(heighta){
				document.getElementById(this.名称+"_ico").style.height=heighta+"px";
			}else{
				document.getElementById(this.名称+"_ico").style.height="50px";
			}
			
			if(topa){
				document.getElementById(this.名称+"_ico").style.top=topa+"px";
			}else{
				document.getElementById(this.名称+"_ico").style.top="20px";
			}
			
			if(righta){
				document.getElementById(this.名称+"_ico").style.right=righta+"px";
			}else{
				document.getElementById(this.名称+"_ico").style.right="20px";
			}
			
        }  
 
		
		this.添加项目 = function (titlea){
            var table = document.getElementById(this.名称);
            var li = document.createElement('li');
            var temp = '<a>'+titlea+'</a>';
            li.innerHTML = temp;
            var index = table.getElementsByTagName("li").length;
            li.index = index;
            table.appendChild(li);
            return index;
        }
		
		this.删除项目 = function (index){
            var li = document.getElementById(this.名称).getElementsByTagName("li");
            if(index<li.length){
                var table = li[index].parentNode;
                table.removeChild(li[index]);
                var li2 = document.getElementById(this.名称).getElementsByTagName("li");
                for(var i = 0;i < li2.length; i++){
                    li2[i].index=i;
                }
            }
        }
		
		this.清空项目 = function (){
            var table = document.getElementById(this.名称);
            while(table.hasChildNodes()){
                table.removeChild(table.firstChild);
            }
        }
		
		this.置项目标题 = function (index,titlea){
            var li = document.getElementById(this.名称).getElementsByTagName("li");
            if(li==null){
                return;
            }
            if(li.length<=index){
                return;
            }         
            var item = li[index].getElementsByTagName("a")[0];
            item.innerHTML = '<a>' + titlea + '</a>';         
        }
        
        this.取项目标题 = function (index){
            var li = document.getElementById(this.名称).getElementsByTagName("li");
            if(li==null){
                return "";
            }
            if(li.length<=index){
                return "";
            }         
            var item = li[index].getElementsByTagName("a")[0];
            var title = item.innerText;
            title = title.replace(/(^\n*)|(\n*$)/g, "");
            return title;
        }
		
		this.取项目总数 = function (index){
            return document.getElementById(this.名称).getElementsByTagName("li").length;
        }
		
        if(functionName!=null){
            mui('#'+this.名称).on('tap', 'li', function() {
                var title = this.innerText;
                title = title.replace(/(^\n*)|(\n*$)/g, "");
                functionName(Number(this.index),title);
            });       	
        }
    }