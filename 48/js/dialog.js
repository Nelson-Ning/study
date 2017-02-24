/**
 * Created by Administrator on 2017/2/19.
 */
define(['jquery'],function($){
    return{
        defaultVal:{
            width:400,
            height:300
        },
     open:function(options){
         $.extend(this.defaultVal,options);
         var str = '<div class="dialog-container">'
             +'<div class="dialog-mask"></div>'
             +'<div class="dialog-box">'
             +'<div class="dialog-title-box">'
             +'<div class="dialog-title">'+this.defaultVal.title+'</div>'
             +'<div class="dialog-close">[X]</div>'
             +'</div>'
             +'<div class="dialog-content">'+this.defaultVal.content+'</div>'
             +'</div>'
             +'</div>';
         $('body').append(str);
         $('.dialog-box').css({
             width:this.defaultVal.width,
             height:this.defaultVal.height,
             'margin-left':-this.defaultVal.width/2,
             'margin-top':-this.defaultVal.height/2
         });
    },
        close:function(){
            $('.dialog-close').on('click',function(){
                $('.dialog-container').remove();
            });
    },
    }
});