(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  // Don't touch
  svg4everybody(); // End don't touch

  require('./main.js');
}); // remove preloader

$(window).on('load', function () {
  $('html').addClass('page-loaded');
});

},{"./main.js":2}],2:[function(require,module,exports){
"use strict";

// Anchor Slide
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); //Header BURGER

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__link').click(function (event) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
}); //Acordeon

$(".question__title").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).siblings(".question__content").slideUp(200);
    $(this).find(".question__icon").removeClass("clicked");
  } else {
    $(this).find(".question__icon").removeClass("clicked");
    $(this).find(".question__icon").addClass("clicked"); // $(".set > a").removeClass("active");

    $(this).addClass("active");
    $(".content").slideUp(200);
    $(this).siblings(".question__content").slideDown(200);
  }
}); // SLIDERS
// Slider ".services"

$(window).on('resize', function (e) {
  var init = $(".services__contain").data('init-slider');

  if (window.innerWidth < 775) {
    if (init != 1) {
      $('.services__contain').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear'
      }).data({
        'init-slider': 1
      });
    }
  } else {
    if (init == 1) {
      $('.services__contain').slick('unslick').data({
        'init-slider': 0
      });
    }
  }
}).trigger('resize'); //Slider ".team"

$(window).on('resize', function (e) {
  var init = $(".team__wrapper").data('init-sliderr');

  if (window.innerWidth < 775) {
    if (init != 1) {
      $('.team__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        mobileFirst: true,
        dots: true,
        arrows: false,
        cssEase: 'linear',
        fade: true
      }).data({
        'init-sliderr': 1
      });
    }
  } else {
    if (init == 1) {
      $('.team__wrapper').slick('unslick').data({
        'init-sliderr': 0
      });
    }
  }
}).trigger('resize'); //Slider ".order"

$(window).on('resize', function (e) {
  var init = $(".order__slider").data('init-sliderr');

  if (window.innerWidth < 775) {
    if (init != 1) {
      $('.order__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: false
      }).data({
        'init-sliderr': 1
      });
    }
  } else {
    if (init == 1) {
      $('.order__slider').slick('unslick').data({
        'init-sliderr': 0
      });
    }
  }
}).trigger('resize'); //SLIDER review

$('.review__slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  adaptiveHeight: true,
  speed: 1000,
  responsive: [{
    breakpoint: 775,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      adaptiveHeight: true
    }
  }]
});

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
