jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });



$(".search_icon").click(function(){
    $(".search_div").fadeIn();
});

$(".close_icon").click(function(){
    $(".search_div").fadeOut();
});

