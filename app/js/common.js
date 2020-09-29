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

    /********************** OWL carousel ***************/
    var owl = $('.carousel-one');
    owl.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
});