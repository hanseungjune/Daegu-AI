$(document).ready(function(){
    var $header = $('header');
    var $sec2 = $('.sec2');
    var $sec3 = $('.sec3');
    var $sec4 = $('.sec4');
    var $sec5 = $('.sec5');

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $header.addClass('d1');
        }else{
            $header.removeClass('d1');
        }
        
        var sec2Treshold = $sec2.offset().top - 700;
        
        if($(this).scrollTop() > sec2Treshold){
            $sec2.addClass('active');
        }else{
            $sec2.removeClass('active');
        }
        
        var sec3Treshold = $sec3.offset().top - 700;
        
        if($(this).scrollTop() > sec3Treshold){
            $sec3.addClass('active');
        }else{
            $sec3.removeClass('active');
        }
        
        var sec4Treshold = $sec4.offset().top - 500;

        if($(this).scrollTop() > sec4Treshold){
            $sec4.addClass('active');
        }else{
            $sec4.removeClass('active');
        }

        var sec5Treshold = $sec5.offset().top - 700;

        if($(this).scrollTop() > sec5Treshold){
            $sec5.addClass('active');
        }else{
            $sec5.removeClass('active');
        }
    });
});