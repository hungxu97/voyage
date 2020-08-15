$(document).ready(function () {
  // header section slider
  $('.header .slider').slick({
    slidesToShow: 1,
  })

  // tour section slider
  $('.tour__slider').slick({
    infinite: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  // gallery section slider
  $('.gallery__content').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  })

  // reviews section slider
  $('.reviews__slider').slick({
    slidesToShow: 1,
  })

  // partners section slider
  $('.partners__slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  })

  $('.booking__slider').slick({
    slidesToShow: 1,
  })

  $('.deals__slider').slick({
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  // counter library

  let counter = $('.counter')
  if (counter.countUp) {
    // check to prevent err in details.html
    counter.countUp()
  }

  // animate on scroll library
  if (window.AOS) {
    // check to prevent err in details.html
    AOS.init()
  }

  // make nav background transparent
  $(document).scroll(function () {
    let nav = $('.header__nav')
    if ($(document).scrollTop() > 0) {
      nav.addClass('transparent')
    } else {
      nav.removeClass('transparent')
    }
  })
})
