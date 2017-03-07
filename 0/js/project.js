/**
 * Created by Administrator on 2017/3/7.
 */
$(function(){
    var index=0;
    var timer=null;
    function changeImg(index){
        $(".project_Carousel img").eq(index).fadeIn(1000).nextUntil('.project_btn').fadeOut(1000);
        $($('.project_btn li')[index]).addClass('btn_selected').siblings().removeClass('btn_selected');
        $('.project_title')[0].innerText=$(".project_Carousel img").eq(index).attr('alt');
    }
    $('.project_btn li').on('mouseover',function(){
        if($(".project_Carousel img").is(":animated")==false) {
            changeImg($(this).index());
        }
    });
    $('.project_Carousel span').hover(function(){
        $(this).addClass('btn_selected').siblings().removeClass('btn_selected');
    },function(){
        $(this).removeClass('btn_selected');
    });
    $('.project_Carousel span').on('click',function(){
       if($(".project_Carousel img").is(":animated")==false){
           if($(this).index()==0){
               index--;
               if(index==-1){
                   index=$(".project_Carousel img").length-1;
               }
               changeImg(index);
           }
           if($(this).index()==1){
               index++;
               if(index==$(".project_Carousel img").length)
               {
                   index=0;
               }
               changeImg(index);
           }
        };
    });
    function go(){
    timer=setInterval(function(){
        changeImg(index);
        index++;
        if(index==$(".project_Carousel img").length){
            index=0;
        }
    },3000);
    }
    go();
    $('.project_Carousel').hover(function(){
        clearInterval(timer);
    },function(){
        go();
    });

});