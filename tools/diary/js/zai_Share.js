    function 社会化分享(name,event){   
        this.名称 = name;
        //组件命令：
        this.置可视 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.display="block";//显示	                
            }else{
                var div = document.getElementById(this.名称);
                div.style.display="none"; //不占位隐藏               
            }
        } 
    }
	var ShareURL = "";
	$(function () {
            $(".bdsharebuttonbox a").mouseover(function () {
                ShareURL = $(this).attr("data-url");
            });
   });
   function SetShareUrl(cmd, config) {            
            if (ShareURL) {
                config.bdUrl = ShareURL;    
            }
            return config;
    }
	//插件的配置部分，注意要记得设置onBeforeClick事件，主要用于获取动态的文章ID
    window._bd_share_config = {
       "common": {
         onBeforeClick: SetShareUrl, "bdSnsKey": {}, "bdText": ""
          , "bdMini": "2", "bdMiniList": false, "bdPic": "http://assets.jq22.com/plugin/2017-05-24-18-14-49.png", "bdStyle": "0", "bdSize": "24"
      }, "share": {}
    };
		//插件的JS加载部分
        with (document) 0[(getElementsByTagName('head')[0] || body)
            .appendChild(createElement('script'))
            .src = "http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="
            + ~(-new Date() / 36e5)];