(($) => {

    $(document).ready(function () {

        $('.js-slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: "<img src='images/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='images/right.svg' class='next' alt='2'>",
            infinity: true
        });
    });
})(jQuery);