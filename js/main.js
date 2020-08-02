// Carousel
$(".feature-carousel").owlCarousel({
  loop: true,
  margin: 30,
  center: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
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
  onInitialized: function (e) {
    itm = $(e.target).find(".owl-item");
    itm.eq(e.item.index).addClass("active-single-feature-inner");
  },
  onDrag: function (e) {
    itm.removeClass("active-single-feature-inner");
  },
  onTranslate: function (e) {
    itm.removeClass("active-single-feature-inner");
  },
  onTranslated: function (e) {
    itm.eq(e.item.index).addClass("active-single-feature-inner");
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
$(".popup-youtube").magnificPopup({
  type: "iframe",
});

// App Carousel
$(".app-carousel").owlCarousel({
  loop: true,
  margin: 30,
  center: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    575: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// Author Carousel
let author = $(".author-carousel");
author.owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  center: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    },
  },
});

let author_cumment = $(".author-comment-carousel");
author_cumment.owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    },
  },
});

$(".author-comment-carousel .owl-next").on("click", function () {
  $(".author-carousel .owl-next").click();
});

$(".author-comment-carousel .owl-prev").on("click", function () {
  $(".author-carousel .owl-prev").click();
});

//  Pzerner-carousel
$(".partner-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 3000,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 5,
    },
  },
});


