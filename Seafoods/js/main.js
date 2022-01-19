$(function () {

  $('.header-slider').slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/arrowPrevWhite.svg" alt="Стрелка вверх"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/arrowNextWhite.svg" alt="Стрелка вниз"></button>',
    vertical: true,
    // fade: true,
    responsive: [
      {
        breakpoint: 376,
        settings: {
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 5000,
        }
      }]

  });



  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content',
    prevArrow:
      '<button type="button" class="product-prev"><img src="img/arrow-prev-product.svg" alt="Стрелка вверх"></button>',
    nextArrow:
      '<button type="button" class="product-next"><img src="img/arrow-next-product.svg" alt="Стрелка вниз"></button>',
    vertical: true,
    responsive: [
      {
        breakpoint: 891,
        settings: {
          arrows: false,
          dots: true,
          vertical: false,
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 601,
        settings: {
          arrows: false,
          dots: true,
          vertical: false,
          slidesToShow: 1,

        }
      }]
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,
    arrows: false,
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

}
);


