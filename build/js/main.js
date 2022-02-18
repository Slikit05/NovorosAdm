$(document).ready(function () {

  $('.open-search').click(function () {
    $('.my-nav').addClass('my-nav--close');
    $('.search-block').addClass('search-block--open');
    $('.search-block__form').addClass('search-block__form--open');
    $('.open-search').addClass('open-search--open');
  });

  $('.search-block__text-close').click(function () {
    $('.my-nav').removeClass('my-nav--close');
    $('.search-block').removeClass('search-block--open');
    $('.search-block__form').removeClass('search-block__form--open');
    $('.open-search').removeClass('open-search--open');
  });

  if (screen.width > 991) {
    $('.my-nav__item').mouseenter(function () {
      $(this).find('.drop-down').slideDown();
      $(this).find('.drop-down').addClass('drop-down--open');
    });

    $('.my-nav__item').mouseleave(function () {
      $(this).find('.drop-down').slideUp();
      $(this).find('.drop-down').removeClass('drop-down--open');
    });
  };

  if (screen.width < 768) {
    $('.footer-list__up').click(function () {
      $(this).closest('.footer-list').find('.footer-list__list').slideToggle();
      $(this).closest('.footer-list').find('.footer-list__svg-arrow').toggleClass('footer-list__svg-arrow--open');
    });
  };


  $('.my-nav__row').click(function () {
    $(this).closest('.my-nav__item').find('.drop-down').slideToggle();
    $(this).closest('.my-nav__item').toggleClass('my-nav__item--open');
  });

  $('.burger').click(function () {
    $('.my-nav').addClass('my-nav--open');
  });

  $('.my-close').click(function () {
    $('.my-nav').removeClass('my-nav--open');
  });

  $('.categories__row--active').click(function () {
    $(this).closest('.categories').find('.categories__wrapper').slideToggle();
    $(this).toggleClass('categories__row--open');
  });

  if (screen.width > 991) {
    $('.block-connection').mouseenter(function () {
      $(this).find('.block-connection__drop').slideDown();
    });

    $('.block-connection').mouseleave(function () {
      $(this).find('.block-connection__drop').slideUp();
    });
  };


  $('.form-row__date-field').mask('00/00/0000');
  $('input[type=tel]').mask('9(999)999-99-99');

  //календарь в сайдбаре
  $.datepicker.regional['ru'] = {
    closeText: 'Готово',
    prevText: 'Пред',
    nextText: 'След',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Окбябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Нед',
    dateFormat: 'mm/dd/yy',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };


  $.datepicker.setDefaults($.datepicker.regional["ru"]);
  $("#datepicker").datepicker({
    showOtherMonths: true,
    dateFormat: "dd/mm/yy",
    onSelect: function (dateText, inst) {
      //      console.log(dateText, inst);
      $('#dateSelect').val(dateText, inst);
    }
  });


  $("#datepicker2").datepicker({
    showOtherMonths: true,
    range: 'period', // режим - выбор периода
    onSelect: function (dateText, inst, extensionRange) {
      // extensionRange - объект расширения
      $('[name=startDate]').val(extensionRange.startDateText);
      $('[name=endDate]').val(extensionRange.endDateText);
    }
  });
  $('#datepicker2').datepicker('setDate', ['+4d', '+8d']);

  //календарь в модалке
  $("#datepicker3").datepicker({
    showOtherMonths: true,
    dateFormat: "dd/mm/yy",
    onSelect: function (dateText, inst) {
      //      console.log(dateText, inst);
      $('#dateSelect2').val(dateText, inst);
    }
  });

  $("#datepicker4").datepicker({
    showOtherMonths: true,
    range: 'period', // режим - выбор периода
    onSelect: function (dateText, inst, extensionRange) {
      // extensionRange - объект расширения
      $('[name=startDate]').val(extensionRange.startDateText);
      $('[name=endDate]').val(extensionRange.endDateText);
    }
  });
  $('#datepicker4').datepicker('setDate', ['+4d', '+8d']);



  $("#from").datepicker({
    showOtherMonths: true,
    dateFormat: "dd/mm/yy",
    onSelect: function (dateText, inst) {
      //      console.log(dateText, inst);
      $('#fromField').val(dateText, inst);
    }
  });
  $("#before").datepicker({
    showOtherMonths: true,
    dateFormat: "dd/mm/yy",
    onSelect: function (dateText, inst) {
      //      console.log(dateText, inst);
      $('#beforeField').val(dateText, inst);
    }
  });

  $('.form-row__svg-wrap--date').click(function () {
    $('.form-row__svg-wrap--date').find('.ui-datepicker-inline').removeClass('ui-datepicker-inline--open')
    $(this).find('.ui-datepicker-inline').addClass('ui-datepicker-inline--open')
  });

  $(document).mouseup(function (e) { // событие клика по веб-документу
    var dateBlock = $(".ui-datepicker-inline"); // тут указываем ID элемента
    if (!dateBlock.is(e.target) // если клик был не по нашему блоку
      &&
      dateBlock.has(e.target).length === 0) { // и не по его дочерним элементам
      dateBlock.removeClass('ui-datepicker-inline--open'); // скрываем его
    }
  });


  var swiper = new Swiper('.slider-news__container--one', {
    slidesPerView: 2,
    spaceBetween: 32,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.slider-news__number--one',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span> ' +
          ' из ' +
          ' <span class="' + totalClass + '"></span>';
      }
    },

    navigation: {
      nextEl: '.slider-news__arrow--next-one',
      prevEl: '.slider-news__arrow--prev-one',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      }
    }
  });


  var swiper2 = new Swiper('.slider-news__container--two', {
    slidesPerView: 2,
    spaceBetween: 32,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.slider-news__number--two',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span> ' +
          ' из ' +
          ' <span class="' + totalClass + '"></span>';
      }
    },

    navigation: {
      nextEl: '.slider-news__arrow--next-two',
      prevEl: '.slider-news__arrow--prev-two',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      }
    }
  });


  var swiper3 = new Swiper('.slider-news__container--three', {
    slidesPerView: 2,
    spaceBetween: 32,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.slider-news__number--three',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span> ' +
          ' из ' +
          ' <span class="' + totalClass + '"></span>';
      }
    },

    navigation: {
      nextEl: '.slider-news__arrow--next-three',
      prevEl: '.slider-news__arrow--prev-three',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      }
    }
  });


  var swiper4 = new Swiper('.slider-news__container--four', {
    slidesPerView: 2,
    spaceBetween: 32,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.slider-news__number--four',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span> ' +
          ' из ' +
          ' <span class="' + totalClass + '"></span>';
      }
    },

    navigation: {
      nextEl: '.slider-news__arrow--next-four',
      prevEl: '.slider-news__arrow--prev-four',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      }
    }
  });


  var swiper5 = new Swiper('.slider-news__container--five', {
    slidesPerView: 2,
    spaceBetween: 32,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.slider-news__number--five',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span> ' +
          ' из ' +
          ' <span class="' + totalClass + '"></span>';
      }
    },

    navigation: {
      nextEl: '.slider-news__arrow--next-five',
      prevEl: '.slider-news__arrow--prev-five',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      }
    }
  });


  var swiper6 = new Swiper('.slider-posts__container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    slidesOffsetAfter: 330,
    pagination: {
      el: '.slider-posts__number',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span> ' +
          ' из ' +
          ' <span class="' + totalClass + '"></span>';
      }
    },

    navigation: {
      nextEl: '.slider-posts__arrow--next',
      prevEl: '.slider-posts__arrow--prev',
    },
    breakpoints: {
      1024: {
        slidesOffsetAfter: 0,
        slidesPerView: 1,
      }
    }
  });
  var swiper7 = new Swiper('.portal-slider__line', {
    slidesPerView: 4,
    spaceBetween: 32,
    observer: true,
    observeParents: true,

    navigation: {
      nextEl: '.portal-slider__arrow--next',
      prevEl: '.portal-slider__arrow--prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    autoHeight: true,
    mousewheel: true,
    breakpoints: {
      991: {
        direction: 'horizontal',
        spaceBetween: 16,
      },
    }
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.news-inner-slider__arrow--next',
      prevEl: '.news-inner-slider__arrow--prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  /*
  var smNewsSlide = $('.news-inner-slider__right').find('.news-inner-slider__slide-sm--hide').length;

  console.log(smNewsSlide);
  $('.news-inner-slider__number').html(smNewsSlide);

  if (smNewsSlide == 0) {
    $('.news-inner-slider__slide-sm--value').css('display', 'none')
  } else {
    $('.news-inner-slider__slide-sm--value').css('display', 'block')
  };

  $('.news-inner-slider__slide-sm--value').click(function () {
    $('.news-inner-slider__slide-sm--hide').addClass('news-inner-slider__slide-sm--vision');
    $(this).css('display', 'none');
    galleryThumbs.update();
  });
  */


  $(".form-page__file").change(function () {
    var filename = $(this).val().replace(/.*\\/, "");
    $(".filename").html('<span>' + 'Вы прикрепили файл:' + '</span>' + filename + '<div class="delete-file">' + '</div>');
  });
  //  $(".delete-file").click(function () {
  //    $(this).closest('.filename').remove();
  //  })

  // Селекты  
  $(".form-row__select").selectmenu();

  // Плавающие меню
  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
      $('.header-down__up').addClass('fixed');
    } else if ($(this).scrollTop() < 60) {
      $('.header-down__up').removeClass('fixed');
    }
  });
});


// Валидация формы
$('#myForm').validate({
  errorElement: "span",
  rules: {
    lname: {
      required: true,
      minlength: 3
    },
    fname: {
      required: true,
      minlength: 3
    },
    tel: {
      required: true,
      phoneUS: true,
    },
    index: {
      required: true,
      number: true
    },
    city: {
      required: true,
    },
    district: {
      required: true,
    },
    street: {
      required: true,
    },
    house: {
      required: true,
    },
    appeal: {
      required: true,
    }
  },
  messages: {
    lname: {
      required: 'Введите фамилию',
    },
    fname: {
      required: 'Введите имя',
    },
    tel: {
      required: 'Введите номер телефона',
    },
    index: {
      required: 'Введите ваш почтовый индекс',
    },
    city: {
      required: 'Введите город в которым вы проживаете',
    },
    district: {
      required: 'Введите район в которым вы проживаете',
    },
    street: {
      required: 'Введите улицу на которой вы проживаете',
    },
    house: {
      required: 'Введите номер дома',
    },
    appeal: {
      required: 'Напишите текст',
    },
  }
});


///*Яндекс карта*/
//ymaps.ready(init);
//var myMap,
//  myPlacemark;
///*Здесь надо указывать координаты центра карты*/
//function init() {
//  myMap = new ymaps.Map("map", {
//    center: [43.602004074542684, 39.73821649999998],
//    zoom: 17,
//    controls: ['geolocationControl']
//  });
//
//  myMap.behaviors.disable([
//    'drag',
//    'scrollZoom',
//  ]);
//  /*Здесь надо указывать адрес до балуна и настраивать местоположение и размеры*/
//  myPin = new ymaps.GeoObjectCollection({}, {
//    iconLayout: 'default#image',
//    iconImageHref: 'img/balun.svg',
//    iconImageSize: [34, 48],
//    iconImageOffset: [-18, -40]
//  });
//  /*Здесь указывать кодинаты для местоположения метки*/
//  myPlacemark = new ymaps.Placemark([43.602004074542684, 39.73821649999998], {});
//
//  myPin.add(myPlacemark);
//  myMap.geoObjects.add(myPin);
//};
