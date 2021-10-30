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

    // ---------------------------------END BURGER MENU
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


});