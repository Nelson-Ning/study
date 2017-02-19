/**
 * Created by Administrator on 2017/2/19.
 */
//判断是否为数组
define(function(){
    function isArray(arr){
        if(arr instanceof Array){
            return true;
        }
            return false;
    }
    return isArray;

});