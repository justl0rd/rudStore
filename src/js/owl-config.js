$('.banner__slider').owlCarousel({
    loop:true,
    margin: 0,
    nav: false,
    responsive:{
        0:{
            items:1
        }
    }
});

$('.similar__slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        },
        1200:{
            items:3
        },
        1350:{
            items:4
        }
    }
});


