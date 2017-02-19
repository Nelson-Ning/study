/**
 * Created by Administrator on 2017/2/19.
 */
define(['b'],function(isArray){
        function arraySort(arr){
            if(!isArray(arr)){
                return '不是数组';
            }
            else
                arr.sort(function(a,b){
                    return a-b;
                });
            return arr;
        }
    return arraySort;
})