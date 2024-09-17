/** Скрипт мобильного меню */

$('.menu-main__mobile').click(function () {
  $('.mobile-menu').addClass('mobile-menu_visible');
  $('body').addClass('no-scroll');
})

$('.mobile-menu__close').click(function () {
  $('.mobile-menu').removeClass('mobile-menu_visible');
  $('body').removeClass('no-scroll');
})

/** Скрипт слайдер */

new Swiper('.slider', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 20,
      centeredSlides: false,
    },
    960: {
      spaceBetween: 68,
      centeredSlides: true,
      slidesPerView: "auto",
    },
    1400: {
      spaceBetween: 128,
      centeredSlides: true,
      slidesPerView: "auto",
    }
  }
})

/** Скрипт акции */

new Swiper('.action__list', {
  navigation: {
    nextEl: '.action__nav_next',
    prevEl: '.action__nav_prev',
  },
  breakpoints: {
    0: {
      spaceBetween: 20,
      centeredSlides: false,
    },
    960: {
      spaceBetween: 45,
      slidesPerView: 3,
      navigation: false
    },
    1400: {
      spaceBetween: 98,
      slidesPerView: 3,
      navigation: false
    }
  }
});

/** Скрипт наши работы */

new Swiper('.example__list', {
  navigation: {
    nextEl: '.example__nav_next',
    prevEl: '.example__nav_prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 5,
    }
  }
});

/** Скрипт карты */

$('[data-map_target]').click(function() {
  const num = $(this).data('map_target');
  const target = $(`[data-map="${num}"]`);

  $('.map__entity').addClass('map__entity_hide');

  target.removeClass('map__entity_hide');
});