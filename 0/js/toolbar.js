/**
 * Created by Administrator on 2017/2/22.
 */
        $(".skill_list li").hover(function(e){
            var aLi=$(this).index();
            var str='';
            switch (aLi){
                case 0:str='1. 精通原生Javascript，能脱离jQuery等类库编码'+'<br/>'+'2. 能运用模块化(Requirejs)、面向对象的方式编程；'+'<br/>'+'3. 熟悉正则表达式的使用。';break;
                case 1:str='1. 能使用合理的结构和样式编写兼容主流浏览器的页面;'+'<br/>'+'2. 能适当运用CSS 使页面在现代浏览器上效果更佳'+'<br/>'+'3. 能熟练使用Chrome开发者工具工具辅助开发。';break;
                case 2:str='1. 熟悉原生PHP语言;'+'<br/>'+'2. 熟悉基于CI框架的后台开发。';break;
                case 3:str='1. 熟悉命令行工具的使用'+'<br/>'+'2. 熟悉基于Express框架的Web开发';break;
                case 4:str='1. 能熟练设计CMS、Blog等中小规模Web应用的数据库；' +'<br/>'+'2. 熟悉SQL Server、MySQL工具的使用'+'<br/>'+'';break;
                case 5:str='1. 能进行简单的图片切图处理、平面设计；'+'<br/>'+'2. 能根据图片特征存成最优的格式。';break;
                default :str='Error';
            }
            var $div = $("<div id='tooltip'></div>");
            $div.appendTo($("body")).html(str).offset({
                top: e.pageY + 15,
                left: e.pageX + 15
            }).show("fast");
        },function(e){
            $("#tooltip").remove();
        }).on("mousemove", function (e) {
            $("#tooltip").offset({
                top: e.pageY + 15,
                left: e.pageX + 15
            });
        });;

