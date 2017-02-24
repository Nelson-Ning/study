/**
 * Created by Administrator on 2017/2/20.
 */
define(['jquery'],function($) {
    function Carousel() {
        this.defaultVal = {
            'speed': 800,
            'ButtonStyle': 'square'
        };
        var _this=this;
        this.$pic_container = $('<div class="pic_container"></div>');
        this.$pic_content = $('<div class="pic_content"></div>');
        this.$pic_arrow = $('<div class="pic_arrow"></div>');
        this.$pic_tag = $('<ul class="pic_tag"></ul>');
        this.$prev = $('<span class="carousel-prev">&lt;</span>');
        this.$next = $('<span class="carousel-next">&gt;</span>');
        Carousel.prototype.init = function (options) {
            $.extend(this.defaultVal, options);
            this.$pic_container.append(this.$pic_content).append(this.$pic_tag)
                .append(this.$pic_arrow);
            for (var i = 0; i < this.defaultVal.imgData.length; i++) {
                this.$pic_content.append('<img class="'+(i == 0?'selected':'')+'" src="' + this.defaultVal.imgData[i] + '">');
                this.$pic_tag.append('<li class="'+(i == 0?'selected':'')+' '+this.defaultVal.ButtonStyle+'">'+(i+1)+'</li>');
            }
            ;
            this.$pic_arrow.append(this.$prev).append(this.$next);
            $(this.defaultVal.selector).append(this.$pic_container);
        };
        $(function(){
            var idx=0;
            var timer=null;
            var speed=_this.defaultVal.speed;
            function ChangeImg(idx){
                $('img',_this.$pic_content).eq(idx).addClass("selected").siblings().removeClass("selected");
                $('li',_this.$pic_tag).eq(idx).addClass("selected").siblings().removeClass("selected");
            };
            function AutoChangeImg(){
                timer=setInterval(function(){
                    $(".carousel-next",_this.$pic_arrow).trigger('click');
                },speed);
            };
            AutoChangeImg();

           $('li',_this.$pic_tag).on('click',function(){
               ChangeImg($(this).index());
               idx=$(this).index();
           });
            $(".pic_content",_this.$pic_container).hover(function(){
                clearInterval(timer);
            },function(){
                AutoChangeImg();
            })

           $(".carousel-prev",_this.$pic_arrow).on('click',function(){
               idx--;
              if(idx==-1){
                  idx= _this.defaultVal.imgData.length-1;
              }
               ChangeImg(idx);
           })
            $(".carousel-next",_this.$pic_arrow).on('click',function(){
                idx++;
                if(idx==_this.defaultVal.imgData.length){
                    idx=0;
                }
                ChangeImg(idx);
            })

        })
    }
    return Carousel;
});