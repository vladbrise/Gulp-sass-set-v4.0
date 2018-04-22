//ready function
$(document).ready(function() {

})
//ajax example
$('#a').click(function(e) {
    e.preventdefault();
    $.ajax({
        url: 'assets/component/controller.php',
        type: 'POST',
        dataType: 'json',
        data: {
            data1: 'testdata',
        },
        success: function(response) {

        }
    })
});
//Load function
$(function() {

    })
//masked input
$("#phone").mask("+7 (999)-999-99-99");

//slick
$('#slider').slick({
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    nextArrow: '<div class="arrow right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    prevArrow: '<div class="arrow left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    dots: false,
    infinite: false,
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3,
            nextArrow: '<div class="arrow right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
            prevArrow: '<div class="arrow left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        }
    }, {
        breakpoint: 480,
        settings: {
            autoplay: true,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 1,
            nextArrow: '<div class="arrow right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
            prevArrow: '<div class="arrow left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        }
    }]
});
//callback ok
$.fancybox.open('<div class="message" style="text-align:center"><h2 style="font-family: Leosler;">Спасибо!</h2><p style="font-family: Roboto;"><br />Мы вам позвоним и с удовольствием сделаем сладости для вас!</p></div>');