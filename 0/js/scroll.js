/**
 * Created by Administrator on 2017/2/22.
 */
$(function(){
        $nav_li=$('.nav li');
        function add_selected(index){
            $($nav_li[index-1]).addClass("selected").siblings().removeClass("selected");
        }
        $('.scroll').onepage_scroll({
        afterMove: function(index){
            switch(index){
                case 1:
                    add_selected(index);
                    break;
                case 2:
                    add_selected(index);
                    break;
                case 3:
                    add_selected(index);
                    $(".skill_list_JavaScript").animate({
                        width:'90%',
                    },2500);
                    $(".skill_list_HTML_CSS").animate({
                        width:'80%',
                    },2500);
                    $(".skill_list_Node_js").animate({
                        width:'55%',
                    },2500);
                    $(".skill_list_PHP").animate({
                        width:'70%',
                    },2500);
                    $(".skill_list_SQL").animate({
                        width:'50%',
                    },2500);
                    $(".skill_list_PhotoShop").animate({
                        width:'45%',
                    },2500);
                    break;
                case 4:
                    add_selected(index);
                    break;
                case 5:
                    add_selected(index);
                    $('.footer').slideDown();

                    break;
            }
            if(index!=5){
                $('.footer').css('display','none');
            }
        }

    });
});