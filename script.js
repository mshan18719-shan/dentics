// initialize after DOM ready
$(function () {
    $('#mySlider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 990, settings: { slidesToShow: 2 } },
            { breakpoint: 670, settings: { slidesToShow: 1 } }
        ]
    });
});


