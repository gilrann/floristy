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

    // ---------------------------------chapter block

    $('#subburger').click(function(event) {
        //  event.preventDefault();
        // console.log("что это");


        $('.header__menu')
            .css('display', 'block')
            .animate({
                opacity: 1,
            }, 600);
    });

    // ---------------------------------END chapter block

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




    // каруселька

    $('.chapter__list').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        mobileFirst: false,
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    centerMode: false,
                    variableWidth: true,
                    slidesToShow: 4
                }
            }

        ]
    });

    // конец карусельки

    // каруселька каталога

    $('.services__list').slick({
        arrows: false,
        dots: true,

        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,

        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false
                }
            }, {
                breakpoint: 1500,
                settings: 'unslick'
            }

        ]

    });
    // конец карусельки каталога








});