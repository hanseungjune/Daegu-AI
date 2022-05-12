$(document).ready(function(){
    var $header = $('header');
    var $sec2 = $('.sec2');
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $header.addClass('d1');
        }else{
            $header.removeClass('d1');
        }
        var sec2Treshold = $sec2.offset().top - 300;
        
        if($(this).scrollTop() > sec2Treshold){
            $sec2.addClass('active');
        }else{
            $sec2.removeClass('active');
        }
    });
});