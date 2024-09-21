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

/** Скрипт модального окна */

$('[data-modal-target]').click(function(e) {
  e.preventDefault();

  const target = $(this).data('modal-target');

  $('body').addClass('no-scroll');
  $(`[data-modal="${target}"]`).removeClass('modal__wrapper_hide');
});

$('.modal__close').click(function (e) {
  e.preventDefault();

  $('body').removeClass('no-scroll');
  $(this).parents('[data-modal]').addClass('modal__wrapper_hide');
})

$('[data-phone]').mask('+7 (999) 999-99-99');

/** Скрипт валидации формы */

$('.form').submit(function(e) {
  const fields = $(this).find('[data-required] input');
  let check = true;

  fields.each(function () {
    if (!$(this).val()) {
      $(this)
        .parents('[data-required]')
        .addClass('form__row_error');

      check = false;
    }
  });

  return check;
});

$('[data-required]').on('input', function () {
  $('.form__row_error').removeClass('form__row_error');
});

/** Скрипт слайдера остальных страниц */

new Swiper('.page-header__slider', {
  navigation: {
    nextEl: '.page-header__slider_next',
    prevEl: '.page-header__slider_prev',
  },
  pagination: {
    el: ".page-header__slider-pagination",
    clickable: true,
  },
});

/** Скрипт слайдера типов остекления */

new Swiper('.glass__types', {
  navigation: {
    nextEl: '.glass__nav_next',
    prevEl: '.glass__nav_prev',
  }
});

/** Скрипт слайдера вариантов остекления балкона */

new Swiper('.balcony__gallery', {
  navigation: {
    nextEl: '.balcony__nav_next',
    prevEl: '.balcony__nav_prev',
  }
});