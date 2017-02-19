$(function(){
        //ËÑË÷À¸
        $("#inputSearch").on("focus",function(){
            if(this.value==this.defaultValue) {
                this.value = "";
            }
        }).on("blur",function(){
            if(this.value==""){
                this.value=this.defaultValue;
            }
        })
        //nav²Ëµ¥
        $(".mainNav>ul>li").hover(function(){
            $(this).children(".jnNav").show();
        },function(){
            $(this).children(".jnNav").hide();
        })
        //hot
        $(".promoted").append("<s class='hot'></s>")
        //ÂÖ²¥Í¼
        $("#jnImageroll>div>a").on("mouseover",function(){
            $(this).addClass("chos").siblings().removeClass("chos");
            $("#JS_imgWrap img").eq($(this).index()).fadeIn().siblings().fadeOut();;

        });
        var i=0;
        setInterval(function(){
            $("#jnImageroll>div>a").eq(i).trigger("mouseover");
            i+=1;
            if(i==$("#jnImageroll>div>a").length){
                i=0;
            };
        },2000)
        //tooltop
     tooltip("#jnNoticeInfo li a");
     tooltip(".jnCatainfo a");
})