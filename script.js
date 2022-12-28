$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
                $('.navbar').removeClass("sticky");
            }
        });
        // Toggle menu/navbar script
        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });

        // Typing animation script
        var typed=new Typed(".typing",{
            strings:["Frontend developer","Software QA","Working on Oracle peoplesoft"],
            typeSpeed:100,
            backSpeed:60,
            loop:true
        });
        var typed=new Typed(".typing-1",{
            strings:["Frontend developer","Software QA","Working on Oracle peoplesoft"],
            typeSpeed:100,
            backSpeed:60,
            loop:true
        });

});