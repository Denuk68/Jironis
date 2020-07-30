// Carousel
$(".feature-carousel").owlCarousel({
  loop: true,
  margin: 30,
  center: true,
  dots: true,
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
      items: 2,
    },
    991: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

// Сounter
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

// Video Popup

$(document).ready(function () {
  $(".video-btn").magnificPopup({
    type: "iframe",
  });
});


// App Carousel
$('.app-carousel').owlCarousel({
  loop: true,
  margin: 30,
  center: true,
  dots: true,
  responsive: {
      0: {
          items: 1
      },
      575: {
          items: 1
      },
      700: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
})
