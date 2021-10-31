$(document).ready(function() {


    // -------------------------------------------------------BURGER MENU
    $('.header__burger').click(function(event) {
        // event.preventDefault();
        // console.log("что это");

        $('.header__menu')
            .css('display', 'block')
            .animate({
                opacity: 1,
            }, 600);

    });


    $('.menu__close').click(function() {
        $('.header__menu')
            .animate({
                    opacity: 0
                }, 600,
                function() {
                    $('.header__menu')
                        .css('display', 'none');
                }
            );
    });

    $('.header__logo').click(function(event) {
        // event.preventDefault();
        // console.log("что это");

        $('.header__menu')
            .css('display', 'none')
            .animate({
                opacity: 0,
            }, 200);

    });

    // ---------------------------------END BURGER MENU
    // ---------------------------------wedding block

    $('.wedding__start').click(function(event) {
        // event.preventDefault();
        // console.log("что это");

        $('.header__menu')
            .css('display', 'none')
            .animate({
                opacity: 0,
            }, 600);
        $('.wedding')
            .css('display', 'flex')
            .animate({
                opacity: 1,
            }, 600);

    });



    $('#subburger').click(function(event) {
        // event.preventDefault();
        // console.log("что это");

        $('.wedding')
            .css('display', 'none')
            .animate({
                opacity: 0,
            }, 600);

        $('.header__menu')
            .css('display', 'block')
            .animate({
                opacity: 1,
            }, 600);
    });

    $('.header__logo').click(function(event) {
        // event.preventDefault();
        // console.log("что это");

        $('.wedding')
            .css('display', 'none')
            .animate({
                opacity: 0,
            }, 200);

    });


    // ---------------------------------END wedding block

    // ---------------------------------popup block

    $('.promo__request').click(function(event) {
        // event.preventDefault();
        // console.log("что это");

        $('.promo__popup')
            .css('display', 'flex')
            .animate({
                opacity: 1,
            }, 600);

    });



    $('.popup__close').click(function() {
        $('.promo__popup')
            .animate({
                    opacity: 0
                }, 600,
                function() {
                    $('.promo__popup')
                        .css('display', 'none');
                }
            );
    });
    // ---------------------------------END popup block


    // мышеклик
    $(".header__scroll").click(function() {
        // event.preventDefault();
        // console.log("что это");
        $("html, body").animate({ scrollTop: $(".header__head").height() + 932 }, "slow");

        return false;
    });
    // конец мышеклика


});