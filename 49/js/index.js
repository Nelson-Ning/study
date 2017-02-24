/**
 * Created by Administrator on 2017/2/20.
 */
require(['jquery','carousel'],function($,carousel){
    var car1=new carousel();
    car1.init({
        'selector':'#content1',
        'speed':800,
        'imgData':['img/1.jpg','img/2.jpg','img/3.jpg'],
        'ButtonStyle':'circle'
    });
    var car2=new carousel();
    car2.init({
        'selector':'#content2',
        'speed':2000,
        'imgData':['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        'ButtonStyle':'square'
    })
    var car3=new carousel();
    car3.init({
        'selector':'#content3',
        'speed':200,
        'imgData':['img/1.jpg','img/2.jpg'],
        'ButtonStyle':'square'
    })
})