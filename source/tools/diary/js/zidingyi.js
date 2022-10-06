    
	var x, y, z=0,v=0,htmlid;	
	var post_data= new Array();
	function 自定义布局(name,event){   
    this.名称 = name;
    document.addEventListener("dragstart", function (e) {
		if(e.target.id != ""){
			//e.dataTransfer.setData("vue", e.target.id)
			localStorage.setItem("index",e.target.id);
		}
        x = e.offsetX || e.layerX;
        y = e.offsetY || e.layerY;
        return true;
    }, false);
	
    document.addEventListener("dragover", function (e) {
        e.preventDefault() || e.stopPropagation();
    }, false);
	
    document.addEventListener("drop", function (e) {
		//var data=e.dataTransfer.getData("vue");
		var data=localStorage.getItem("index");
		var div=mui(".mui-content");
		if(document.getElementById(data).parentNode.className != "mui-content"){
			div[0].appendChild(document.getElementById(data).parentNode);
		}else{
			div[0].appendChild(document.getElementById(data));
		}
		document.getElementById(data).draggable = "true";
		document.getElementById(data).style.position = "fixed";
		document.getElementById(data).style.zIndex = z++;
		var w=(e.pageX - x) / document.body.offsetWidth *100;
        document.getElementById(data).style.left = w + "%";
		var r=(e.pageY - y);
        document.getElementById(data).style.top = r + "px";
		
		
		var dataw = localStorage.getItem(data);
		var strss= new Array();
		if(dataw != null){strss=dataw.split(",");}
		
		if(strss.length > 0){
			document.getElementById(data).style.width = strss[3] + "px";
			document.getElementById(data).style.height = strss[4] + "px";
			localStorage.setItem(data,z+","+w+","+r+","+strss[3]+","+strss[4]);
		}else{
			localStorage.setItem(data,z+","+w+","+r);
		}
        e.preventDefault() || e.stopPropagation();
		
		
		
    }, false);

	this.开启自定义布局 =function (){
	var obj = mui(".mui-content");
	var id;
		for(var i=0;i < obj[0].children.length;i++){
			obj[0].children[i].draggable = "true";
			if(obj[0].children[i].id==""){
				id=obj[0].children[i].childNodes[1].id;	
			}else{
				id=obj[0].children[i].id;
				id.draggable = "true";
			}
				var data=localStorage.getItem(id);
				post_data[i]= new Object();
				post_data[i].id=id;
				var strss= new Array();
				if(data != null){strss=data.split(",");}
				if(strss.length > 0){
				document.getElementById(id).draggable = "true";
				document.getElementById(id).style.position = "fixed";
				document.getElementById(id).style.zIndex = strss[0];
				document.getElementById(id).style.left = strss[1]+"%";
				document.getElementById(id).style.top = strss[2]+"px";
				document.getElementById(id).style.width = strss[3]+"px";
				document.getElementById(id).style.height = strss[4]+"px";
				post_data[i].zIndex=strss[0];
				post_data[i].left=strss[1];
				post_data[i].top=strss[2];
				post_data[i].width=strss[3];
				post_data[i].height=strss[4];
				
				}
		}
	}


	this.手机读取布局 =function (uids){
	
	mui.ajax("http://112.74.132.110/api.php",{
	data:{
	zt:"1",
	uid:uids
	}, 
	dataType:"json",
	type:"post",
	timeout:10000,	              
	success:function(data){
			var data_new=JSON.parse(data);
			for(var i=0;i < data_new.length;i++){
				document.getElementById(data_new[i].id).draggable = "true";
				document.getElementById(data_new[i].id).style.position = "fixed";
				document.getElementById(data_new[i].id).style.zIndex = data_new[i].zIndex;
				if(data_new[i].left>0){
					document.getElementById(data_new[i].id).style.left = data_new[i].left+"%";
				}
				if(data_new[i].top>0){
					document.getElementById(data_new[i].id).style.top = data_new[i].top+"px";
				}
			
				if(data_new[i].width>0){
					document.getElementById(data_new[i].id).style.width = data_new[i].width+"px";
				}
				if(data_new[i].height>0){
					document.getElementById(data_new[i].id).style.height = data_new[i].height+"px";
				}
			}

	},
	error:function(xhr,type,errorThrown){
		alert("读取布局错误,可能是uid错误");
	}
});
	
	
	}
	
window.oncontextmenu=function(e){
if(e.target.id != ""){
htmlid=e.target.id;
}else if(e.target.parentNode.id != null && e.target.parentNode.id != ""){
htmlid=e.target.parentNode.id;
}

e.preventDefault();

var menu=document.querySelector("#menu");
menu.style.left=e.clientX+"px";
menu.style.top=e.clientY+"px";
menu.style.width="165px";





}


window.onclick=function(e){
　　　document.querySelector("#menu").style.width=0;
	e.preventDefault();
	if(e.target.innerHTML)
	switch (e.target.innerHTML){
		case "改变组件宽度大小":
		var vue = mui("input.mui-input-clear");
		if(vue.length >= 3){
			vue[0].value= htmlid;
		}
		mui('.mui-input-row input').input(); 
		mui('#popover').popover('show');
		break;

		case "保存布局至手机":
		保存布局();	
		break;
		default:
	}
}



    }


function 改变组件(){
		mui('#popover').popover('hide');
		var vue = mui("input.mui-input-clear");
		if(vue.length >=3){
			if(vue[0].value != ""){
				if(vue[1].value > 0 && vue[2].value > 0){
						var dataw = localStorage.getItem(vue[0].value);
						var strss= new Array();
						if(dataw != null){strss=dataw.split(",");} 
						if(strss.length >0){
						document.getElementById(vue[0].value).style.width = vue[1].value+"px";
						document.getElementById(vue[0].value).style.height = vue[2].value+"px";
						localStorage.setItem(strss[0]+","+strss[1]+","+strss[2]+","+vue[1].value+","+vue[2].value);
					}

				}else if(vue[1].value > 0){
						var dataw = localStorage.getItem(vue[0].value);
						var strss= new Array();
						if(dataw != null){strss=dataw.split(",");} 
						if(strss.length >0){
						document.getElementById(vue[0].value).style.width = vue[1].value+"px";
						localStorage.setItem(vue[0].value,strss[0]+","+strss[1]+","+strss[2]+","+vue[1].value+","+strss[4]);
					}
				}else if(vue[2].value > 0){
						var dataw = localStorage.getItem(vue[0].value);
						var strss= new Array();
						if(dataw != null){strss=dataw.split(",");} 
						if(strss.length >0){
						document.getElementById(vue[0].value).style.height = vue[2].value+"px";
						localStorage.setItem(vue[0].value,strss[0]+","+strss[1]+","+strss[2]+","+strss[3]+","+vue[2].value);
					}
				}
			}
		}

}

function 保存布局(){
	var uids=prompt("uid为6位数字,请牢记自己的uid,每个uid都对应不同的布局");
	if(isNaN(uids)){
		alert("请输入数字uid");
		return;
	}else if(uids == ""){
		alert("uid不能为空");
		return;
	}else if(uids.length != 6){
		alert("uid只能是6位数");
		return;
	}
	var obj = mui(".mui-content");
	var id;
		for(var i=0;i < obj[0].children.length;i++){
			obj[0].children[i].draggable = "true";
			if(obj[0].children[i].id==""){
				id=obj[0].children[i].childNodes[1].id;	
			}else{
				id=obj[0].children[i].id;
				id.draggable = "true";
			}
				var data=localStorage.getItem(id);
				post_data[i]= new Object();
				post_data[i].id=id;
				var strss= new Array();
				if(data != null){strss=data.split(",");}
				if(strss.length > 0){
				document.getElementById(id).draggable = "true";
				document.getElementById(id).style.position = "fixed";
				document.getElementById(id).style.zIndex = strss[0];
				document.getElementById(id).style.left = strss[1]+"%";
				document.getElementById(id).style.top = strss[2]+"px";
				document.getElementById(id).style.width = strss[3]+"px";
				document.getElementById(id).style.height = strss[4]+"px";
				post_data[i].zIndex=strss[0];
				post_data[i].left=strss[1];
				post_data[i].top=strss[2];
				post_data[i].width=strss[3];
				post_data[i].height=strss[4];
				}
		}
	mui.ajax("http://112.74.132.110/api.php",{
	data:{
	zt:"0",
	uid:uids,
	data:JSON.stringify(post_data)
	}, 
	dataType:"json",
	type:"post",
	timeout:10000,	              
	success:function(data){
		alert(data);
	},
	error:function(xhr,type,errorThrown){
		alert("保存布局错误,只在手机或chrome浏览器有效");
	}
});

}
