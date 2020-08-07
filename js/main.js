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

// Modal button
$(document).ready(function () {
  $("button#myLinkModal").click(function (event) {
    event.preventDefault();
    $("#myOverlay").fadeIn(297, function () {
      $("#myModal").css("display", "block").animate({ opacity: 1 }, 198);
    });
  });

  $("#myModal__close, #myOverlay").click(function () {
    $("#myModal").animate({ opacity: 0 }, 198, function () {
      $(this).css("display", "none");
      $("#myOverlay").fadeOut(297);
    });
  });
});

// Mask
$("#inputPhone").inputmask({ mask: "+380 (99) 99-99-999" });

//Form
function validateName() {
  let input = document.querySelector(".form-group #inputName");
  let name = document.forms["app-form"]["name"].value;
  let pattern = /^[a-zA-Zа-яА-Я]+(([',. -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  if (name == "") {
    input.style.border = "2px solid red";
    input.placeholder = "Поле обов'язкове";
    console.log("null");
  } else if (!name.match(pattern)) {
    input.style.border = "2px solid red";
    input.placeholder = "Некоректно введені дані";
    console.log("incorrect");
  } else if (name.length < 3) {
    input.style.border = "2px solid red";
    input.placeholder = "Мінімум 3 символа";
    console.log("min 3 symbol");
    return false;
  } else if (name.length > 25) {
    input.style.border = "2px solid red";
    input.placeholder = "Максимум 25 символів";
    console.log("max 25 sym");
    return false;
  } else {
    input.style.border = "2px solid green";
    console.log("true");
    return true;
  }
}

function validatePhone() {
  let input = document.querySelector(".form-group #inputPhone");
  let phone = document.forms["app-form"]["phone"].value;
  let pattern = /^[+]*3?8?0?[\s][(]{1}[0-9]{2}[)]{1}[\s][0-9]{2}[-][0-9]{1,3}[-][0-9]{3}/;
  if (phone == "") {
    input.style.border = "2px solid red";
    input.placeholder = "Поле обов'язкове";
    console.log("null");
  } else if (!phone.match(pattern)) {
    input.style.border = "2px solid red";
    input.placeholder = "Некоректно введені дані";
    console.log("incorrect");
  } else {
    input.style.border = "2px solid green";
    console.log("true");
    return true;
  }
}

function validateEmail() {
  let input = document.querySelector(".form-group #inputEmail");
  let email = document.forms["app-form"]["email"].value;
  let pattern = /^^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (email == "") {
    input.style.border = "2px solid red";
    input.placeholder = "Поле обов'язкове";
    console.log("null");
  } else if (!email.match(pattern)) {
    input.style.border = "2px solid red";
    input.placeholder = "Некоректно введені дані";
    console.log("incorrect");
  } else {
    input.style.border = "2px solid green";
    console.log("true");
    return true;
  }
}

function checkall() {
  if (validateName() && validatePhone() && validateEmail()) {
    return true;
  } else {
    return false;
  }
}

// Header
// Scroll_big

$(document).ready(function () {
  var offset = $(".main-header").innerHeight();
  $("#ul_big li a[href^='#']").click(function () {
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - offset,
      },
      500
    );
    $("#ul_big li a[href^='#']").removeClass("active");
    $(this).addClass("active");
    return false;
  });
});

// Scroll_small
$(document).ready(function () {
  var offset = $(".main-header").innerHeight();
  $("#ul_small li a[href^='#']").click(function () {
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - offset,
      },
      500
    );
    $("#ul_small li a[href^='#']").removeClass("active");
    $(this).addClass("active");
    return false;
  });
});
