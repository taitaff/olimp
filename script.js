var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1.5,
    center: true,
    loop: true,
    margin: 450,
    nav: false,
    responsive:{
        0:{
            items: 1.2
        },
        1000:{
            items: 1.1
        },
        1600:{
            items: 1.5
        }
    }
})
