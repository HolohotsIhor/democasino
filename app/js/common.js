$(document).ready(function() {
    /* Burger */
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });
    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    });

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeIn animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeIn animated");
        };
    });

    /********** Search panel **********/
    $(".modal-search").click(function() {
        $(".modal-window-search").css("display", "block");
        $(".modal-window-search").css("visibility", "visible");
        $(".modal-window-search").addClass("fadeIn animated");
    });
    $(".toggle_mnu_search").click(function() {
        $(".modal-window-search").css("display", "none");
        $(".modal-window-search").css("visibility", "hidden");
    });

    /* Parallax 
    $('.parallax-window').parallax({imageSrc: 'img/background.jpg'}); */

    /* Resize
    function heightDetect(){
        $(".parallax-window").css("height", $(window).height());    
    }
    heightDetect();
    $(window).resize(function(){
        heightDetect();
    });
     */

    /* Scrool animation
    $(window).scroll(function() {

        $('.mov').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeIn animated');
                $(this).css('opacity', '1');
            }
        });

        $('.mov-left').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeInLeft animated');
                $(this).css('opacity', '1');
            }
        });

        $('.mov-right').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeInRight animated');
                $(this).css('opacity', '1');
            }
        });
    });*/
});