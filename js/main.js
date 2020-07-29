$('.feature-carousel').owlCarousel({
    pagination : true,
    loop: true,
    margin: 30,
    center: true,
    dots:true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1,
            
        },
        575: {
            items: 1,
            
        },
        768: {
            items: 2
        },
        991: {
            items: 2
        },  
        992: {
            items: 3
        }
    }
})

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

