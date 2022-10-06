mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 编辑框1 = new 编辑框("编辑框1",null,null,null,null,null);
var HK精易1 = new HK精易("HK精易1");
var 网络操作1 = new 网络操作("网络操作1",网络操作1_发送完毕);
if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
        
    }
}

function 主窗口_创建完毕(){
	HK精易1.组件移动("编辑框1","45%");
	窗口操作.置组件宽度("编辑框1","80%");
	窗口操作.置组件高度("编辑框1","260px");
	窗口操作.置组件圆角("编辑框1","50px");
	var audio= new Audio("sounds/aigei_com.mp3");
	audio.play();
	网络操作1.发送网络请求("http://zy.yunhuoda.com/wangzhan/diary.txt","get","text","",5000);
}

function 网络操作1_发送完毕(发送结果,返回信息){
	var 内容 = 文本操作.分割文本(返回信息,"\n");
	var 计次= 数组操作.取成员数(内容);
	编辑框1.置内容(内容[数学操作.取随机数(0,计次)]);
}