/**
 * Created by Administrator on 2017/2/22.
 */
//导航指向
$('.nav li').on('click',function(){
    $('.scroll').moveTo($(this).index()+1);
})
//留言板Ajax
$('.btn').on('click',function(){
    var message_name=$('#name').val();
    var message_email=$('#e_mail').val();
    var message_content=$('#content').val();
    var count = 60;
    var countdown = setInterval(function CountDown(){
        $('.btn').attr("disabled", true);
        $('.btn').val(count + "s后再次发送");
        if (count == 0) {
            $('.btn').val("SEND").removeAttr("disabled");
            $('.message').remove();
            clearInterval(countdown);
        }
        count  3

    $.post('add.php',{message_name:message_name,message_email:message_email,message_content:message_content}
         ,function(data){if(data=='success'){$('.btn').after('<p class="message">留言提交成功</p>')}
        else{$('.btn').after('<p class="message">留言提交失败</p>')}},"text");

});
