/**
 * Created by Administrator on 2017/2/19.
 */
require(['jquery','dialog'],function($,dialog){
    $('#btn').on('click',function(){
        dialog.open(
            {
                width:800,
                height:500,
                title:'注册',
                content:'进口料件刻录机刻录机',
            });
        dialog.close();
    });
});