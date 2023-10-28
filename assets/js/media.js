
$('.slider-2').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1.75,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },

    ]
});

$('.slider-1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1.75,
                speed: 500,
                infinite: true,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.75,
                slidesToScroll: 1
            }
        }
    ]
});