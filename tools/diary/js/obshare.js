    function 一键分享(name,event){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 一键分享(name,event1,event2,event3){
        
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;
        
        //组件命令：
        this.QQ分享 = function (分享地址,分享方式){
            if(分享方式==1){ //在应用内打开
                window.location.href = "http://connect.qq.com/widget/shareqq/index.html?url="+分享地址+"&desc=%20&pics=&site=xiaoheizhu";
            }else{ //调用系统默认浏览器打开
                if(mui.os.plus){
                    plus.runtime.openURL( "http://connect.qq.com/widget/shareqq/index.html?url="+分享地址+"&desc=%20&pics=&site=xiaoheizhu");
                }else{
                    window.open( "http://connect.qq.com/widget/shareqq/index.html?url="+分享地址+"&desc=%20&pics=&site=xiaoheizhu");  
                }                 
            }
        }
		
		//组件命令：
        this.QQ空间分享 = function (分享地址,分享方式){
            if(分享方式==1){ //在应用内打开
                window.location.href = "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+分享地址+"&title=&pics=&summary=&desc=";
            }else{ //调用系统默认浏览器打开
                if(mui.os.plus){
                    plus.runtime.openURL( "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+分享地址+"&title=&pics=&summary=&desc=");
                }else{
                    window.open( "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+分享地址+"&title=&pics=&summary=&desc=");  
                }                 
            }
        }
		
		//组件命令：
        this.腾讯微博分享 = function (分享地址,分享方式){
            if(分享方式==1){ //在应用内打开
                window.location.href = "http://share.v.t.qq.com/index.php?c=share&a=index&title=%20-%20%20%20&site=&pic=&url="+分享地址+"&appkey=dcba10cb2d574a48a16f24c9b6af610c&assname=${RALATEUID}";
            }else{ //调用系统默认浏览器打开
                if(mui.os.plus){
                    plus.runtime.openURL( "http://share.v.t.qq.com/index.php?c=share&a=index&title=%20-%20%20%20&site=&pic=&url="+分享地址+"&appkey=dcba10cb2d574a48a16f24c9b6af610c&assname=${RALATEUID}");
                }else{
                    window.open( "http://share.v.t.qq.com/index.php?c=share&a=index&title=%20-%20%20%20&site=&pic=&url="+分享地址+"&appkey=dcba10cb2d574a48a16f24c9b6af610c&assname=${RALATEUID}");  
                }                 
            }
        }
		
		 //组件命令：
        this.新浪微博分享 = function (分享地址,分享方式){
            if(分享方式==1){ //在应用内打开
                window.location.href = "http://service.weibo.com/share/share.php?appkey=583395093&title=%20-%20%20%20&url="+分享地址+"&source=xiaoheizhu&retcode=0&ralateUid=#_loginLayer_1494844047722";
            }else{ //调用系统默认浏览器打开
                if(mui.os.plus){
                    plus.runtime.openURL( "http://service.weibo.com/share/share.php?appkey=583395093&title=%20-%20%20%20&url="+分享地址+"&source=xiaoheizhu&retcode=0&ralateUid=#_loginLayer_1494844047722");
                }else{
                    window.open( "http://service.weibo.com/share/share.php?appkey=583395093&title=%20-%20%20%20&url="+分享地址+"&source=xiaoheizhu&retcode=0&ralateUid=#_loginLayer_1494844047722");  
                }                 
            }
        }
		
		 //组件命令：
        this.人人网分享 = function (分享地址,分享方式){
            if(分享方式==1){ //在应用内打开
                window.location.href = "http://widget.renren.com/dialog/share?resourceUrl="+分享地址+"&srcUrl="+分享地址+"2&title=&images=&description=";
            }else{ //调用系统默认浏览器打开
                if(mui.os.plus){
                    plus.runtime.openURL( "http://widget.renren.com/dialog/share?resourceUrl="+分享地址+"&srcUrl="+分享地址+"2&title=&images=&description=");
                }else{
                    window.open( "http://widget.renren.com/dialog/share?resourceUrl="+分享地址+"&srcUrl="+分享地址+"2&title=&images=&description=");  
                }                 
            }
        }
		
		//组件命令：
        this.飞信分享 = function (分享地址,分享方式){
            if(分享方式==1){ //在应用内打开
                window.location.href = "http://i.feixin.10086.cn/apps/share/share?appkey=&source=xiaoheizhu&title=&content=&pageid=&url="+分享地址+"&pic=";
            }else{ //调用系统默认浏览器打开
                if(mui.os.plus){
                    plus.runtime.openURL( "http://i.feixin.10086.cn/apps/share/share?appkey=&source=xiaoheizhu&title=&content=&pageid=&url="+分享地址+"&pic=");
                }else{
                    window.open( "http://i.feixin.10086.cn/apps/share/share?appkey=&source=xiaoheizhu&title=&content=&pageid=&url="+分享地址+"&pic=");  
                }                 
            }
        }
		
		//组件命令
		this.QQ临时会话 = function (QQ号){
		    window.location.href = "mqqwpa://im/chat?chat_type=wpa&uin="+QQ号+"&version=1&src_type=web&web_src=oicqzone.com";
		}
		
		//组件命令
		this.加QQ群 = function (QQ群idkey){
		    //window.location.href = "http://shang.qq.com/wpa/qunwpa?idkey="+QQ群idkey;
			if(mui.os.plus){
                    plus.runtime.openURL("http://shang.qq.com/wpa/qunwpa?idkey="+QQ群idkey);
                }else{
                    window.open("http://shang.qq.com/wpa/qunwpa?idkey="+QQ群idkey);  
                } 
		}
        
   
        //组件事件
        if(event!=null){
 		document.getElementById(this.名称).addEventListener("tap", function () {
                event();//触发组件的相关事件，这里演示的是被单击事件
            });       	
        }
    }