$('.review-section').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $('#lbtn'),
    nextArrow: $('#rbtn'),
});
var $carousel = $('.review-section');
$(document).on('keydown', function (e) {
    if (e.keyCode == 37) {
        $carousel.slick('slickPrev');
    }
    if (e.keyCode == 39) {
        $carousel.slick('slickNext');
    }
});