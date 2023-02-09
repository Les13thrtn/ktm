document.addEventListener('DOMContentLoaded', function () {
  $('.header-burger').click(function () {
    $(this).toggleClass('active')
    $('.header').toggleClass('active')
    $('.header-bottom').toggleClass('active')
    $('body').toggleClass('o-hidden')
  })

  if ($(window).width() >= 769) {
    $('.sublist').mouseover(function () {
      $('.sublist')
        .not(this)
        .removeClass('active')
        .find('.header-dropdown')
        .slideUp(0)
      $(this).addClass('active').find('.header-dropdown').slideDown(0)
    })

    $('.header-dropdown__list li').mouseover(function () {
      $(this).parent().find('li').removeClass('active')
      $(this).addClass('active')
      var data = $(this).data('sublist')
      $(this)
        .parent()
        .next()
        .find('.header-dropdown__sublist-inner')
        .removeClass('active')
      $(this)
        .parent()
        .next()
        .find('.header-dropdown__sublist-inner[data-sublist=' + data + ']')
        .addClass('active')
    })

    $('.header').mouseleave(function () {
      $('.header-dropdown').slideUp(0)
      $('.sublist').removeClass('active')
    })

    $('.header-list > li:not(".sublist")').mouseover(function () {
      $('.sublist').removeClass('active').find('.header-dropdown').slideUp(0)
    })
  } else {
    $('.sublist > a').click(function (e) {
      e.preventDefault()
      $('.sublist > a')
        .not(this)
        .parent()
        .removeClass('active')
        .find('.header-dropdown')
        .slideUp()
      $(this)
        .parent()
        .toggleClass('active')
        .find('.header-dropdown')
        .slideToggle()
    })
  }

  const servicesSlider = new Swiper('#services-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    breakpoints: {
      769: {
        enabled: false,
      },
    },
  })

  const priceSlider = new Swiper('#price-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    navigation: {
      nextEl: '.price-button-next',
      prevEl: '.price-button-prev',
    },
  })

  $('.price-item__more').click(function (e) {
    e.preventDefault()
    $('.price-item__more')
      .not(this)
      .removeClass('active')
      .closest('.price-item__inner')
      .find('.price-item__dropdown')
      .slideUp()
    $(this)
      .toggleClass('active')
      .closest('.price-item__inner')
      .find('.price-item__dropdown')
      .slideToggle()
  })

  const specialistsSlider = new Swiper('#specialists-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    navigation: {
      nextEl: '.specialists-button-next',
      prevEl: '.specialists-button-prev',
    },
  })

  function replaceText() {
    const text = document.querySelectorAll('.card-review__number')

    text.forEach((element) => {
      element.innerHTML = element.textContent.replace(/\S/g, '<span>$&</span>')
    })
  }
  replaceText()

  function rotateText() {
    let spanItem = $('.card-review__number')

    for (let index = 0; index < spanItem.length; index++) {
      const element = spanItem[index]
      let childItem = element.childNodes

      childItem.forEach(function callback(element, index) {
        element.style.transform = 'rotate(' + index * 15 + 'deg)'
      })
    }
  }
  rotateText()

  const accommodationSlider = new Swiper('#accommodation-slider', {
    // slidesPerView: 'auto',
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    observeParents: true,
    observeSlideChildren: true,
    observer: true,
    allowTouchMove: false,
    nested: true,
    speed: 1200,
    navigation: {
      nextEl: '.accommodation-button-next',
      prevEl: '.accommodation-button-prev',
    },
    pagination: {
      el: '.accommodation-pagination',
      type: 'fraction',
      formatFractionCurrent: (number) => {
        if (number < 10) {
          return '0' + number
        }
        return number
      },
      formatFractionTotal: (number) => {
        if (number < 10) {
          return '0' + number
        }
        return number
      },
    },
  })

  $('.accommodation-slider__item').each(function (i) {
    var accommodationThumbs = new Swiper($('.accommodation-thumbs')[i], {
      slidesPerView: 'auto',
      watchSlidesProgress: true,
    })

    var accommodationGallery = new Swiper($('.accommodation-gallery')[i], {
      slidesPerView: 'auto',
      speed: 1200,
      thumbs: {
        swiper: accommodationThumbs,
      },
    })
  })

  const licenseSlider = new Swiper('#license-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.license-pagination',
    },
  })

  const reviewsSlider = new Swiper('#reviews-slider', {
    slidesPerView: 'auto',
    speed: 1200,
  })

  const doctorsWordSwiper = new Swiper('.doctors-word__swiper', {
    slidesPerView: 'auto',
    speed: 1200,
    navigation: {
      nextEl: '.doctors-word-button-next',
      prevEl: '.doctors-word-button-prev',
    },
  })

  const gallerySlider = new Swiper('#gallery-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    // centeredSlides: true,
    // loop: true,
    breakpoints: {
      769: {
        centeredSlides: true,
        loop: true,
      },
    },
    navigation: {
      nextEl: '.gallery-button-next',
      prevEl: '.gallery-button-prev',
    },
    pagination: {
      el: '.gallery-pagination',
      type: 'fraction',
      formatFractionCurrent: (number) => {
        if (number < 10) {
          return '0' + number
        }
        return number
      },
      formatFractionTotal: (number) => {
        if (number < 10) {
          return '0' + number
        }
        return number
      },
    },
  })

  const licensesSlider = new Swiper('#licenses-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    navigation: {
      nextEl: '.licenses-button-next',
      prevEl: '.licenses-button-prev',
    },
  })

  const bannerRightSlider = new Swiper('.banner-right__swiper', {
    slidesPerView: 'auto',
    speed: 1200,
    navigation: {
      nextEl: '.banner-right-button-next',
      prevEl: '.banner-right-button-prev',
    },
  })

  $('.faq-item__heading').click(function () {
    $('.faq-item__heading').not(this).removeClass('active').next().slideUp()
    $(this).toggleClass('active').next().slideToggle()
    if ($('.faq-item__close')) {
      $('.faq-item__heading')
        .not(this)
        .next()
        .next('.faq-item__close')
        .removeClass('_active')
      $(this).next().next('.faq-item__close').toggleClass('_active')
    }
  })

  if ($('.faq-item__close')) {
    $('.faq-item__close').click(function () {
      $(this)
        .prev()
        .prev('.faq-item__heading')
        .removeClass('active')
        .next()
        .slideUp()
      $(this).removeClass('_active')
    })
  }

  // $('.stages__item_heading').click(function () {
  //   $('.stages__item_heading').not(this).removeClass('active').next().slideUp()
  //   $(this).toggleClass('active').next().slideToggle()
  // })

  $('.team__pagination_item').click(function () {
    $('.team__pagination_item').not(this).removeClass('_active')
    $(this).toggleClass('_active')
  })

  if ($(window).width() <= 768) {
    $('.footer-group__title').click(function () {
      $('.footer-group__title').not(this).removeClass('active').next().slideUp()
      $(this).toggleClass('active').next().slideToggle()
    })
  }

  // -----------------

  const popupLinks = document.querySelectorAll('.popup-link')
  const body = document.querySelector('body')
  const lockPadding = document.querySelectorAll('.lock-padding')

  let unlock = true

  const timeout = 800

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index]
      popupLink.addEventListener('click', function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '')
        const curentPopup = document.getElementById(popupName)
        popupOpen(curentPopup)
        e.preventDefault()
      })
    }
  }

  const popupCloseIcon = document.querySelectorAll('.popup__close')
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index]
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'))
        e.preventDefault()
      })
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup._open')
      if (popupActive) {
        popupClose(popupActive, false)
      } else {
        bodyLock()
      }
      curentPopup.classList.add('_open')
      curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'))
        }
      })
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('_open')
      if (doUnlock) {
        bodyUnlock()
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth -
      document.querySelector('.lock-padding').offsetWidth +
      'px'

    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index]
        el.style.paddingRight = lockPaddingValue
      }
    }
    body.style.paddingRight = lockPaddingValue
    body.classList.add('_lock')

    unlock = false
    setTimeout(function () {
      unlock = true
    }, timeout)
  }

  function bodyUnlock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index]
          el.style.paddingRight = '0px'
        }
      }
      body.style.paddingRight = '0px'
      body.classList.remove('_lock')
    }, timeout)

    unlock = false
    setTimeout(function () {
      unlock = true
    }, timeout)
  }

  document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open')
      popupClose(popupActive)
    }
  })
  // -----------------
  const accordeonBtn = document.querySelectorAll(
    '.stages-accordion__item_heading'
  )

  if (accordeonBtn) {
    accordeonBtn.forEach((item) => {
      item.addEventListener('click', function () {
        const itemParent = item.parentNode.parentNode
        const siblingItem = itemParent.querySelectorAll(
          '.stages-accordion__item_heading'
        )
        siblingItem.forEach((el) => {
          el.parentNode.classList.remove('_active')
        })
        item.parentNode.classList.add('_active')
      })
    })
  }

  // -----------------

  const switchBtn = document.querySelectorAll('.switch-btn')

  if (switchBtn) {
    switchBtn.forEach((item) => {
      item.addEventListener('click', function () {
        const itemParent = item.parentNode.parentNode
        const siblingItem = itemParent.querySelectorAll('.switch-btn')
        siblingItem.forEach((el) => {
          el.classList.remove('active')
        })
        item.classList.add('active')
      })
    })
  }

  // -----------------
  $('.popup__type_label').click(function () {
    $(this).find(':radio').attr('checked', 'checked')
    //выделение всех чекбоксов на кликнутом контейнере, снять выделение через removeAttr("checked")
  })
  // -----------------

  const map = document.querySelector('#map')
  if (map) {
    if (window.innerWidth > 768) {
      var zoomVal = 12
      var iconSize = [50, 50]
    } else {
      zoomVal = 13
      iconSize = [35, 35]
    }

    ymaps.ready(function () {
      var map = new ymaps.Map('map', {
        center: [47.225866, 39.739914],
        zoom: zoomVal,
      })

      map.controls.remove('geolocationControl') // удаляем геолокацию
      map.controls.remove('searchControl') // удаляем поиск
      map.controls.remove('trafficControl') // удаляем контроль трафика
      map.controls.remove('typeSelector') // удаляем тип
      map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl') // удаляем контрол зуммирования
      map.controls.remove('rulerControl') // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']) // отключаем скролл карты (опционально)

      let placemark = new ymaps.Placemark(
        [47.225866, 39.739914],
        {},
        {
          balloonContent: 'Rostov-on-Don',
          iconLayout: 'default#image',
          // iconImageHref: require('../src/img/mapIcon.svg'),
          iconImageSize: iconSize,
          iconImageOffset: [0, 0],
        }
      )
      map.geoObjects.add(placemark)
    })
  }
})
