$(function () {

  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animate__animated --active',
      offset: 300,
      mobile: false,
    }
  )

  wow.init();

  $('.comments-slider').slick({
    slidesToShow: 2,
    dots: true,
    infinite: false,
  });

  $('.questions-list__item--active').find('.questions-list__item-text').slideDown();

  $('.questions-list__item').on('click', function () {
    $(this).toggleClass('questions-list__item--active');

    if ($(this).hasClass('questions-list__item--active')) {
      $(this).find('.questions-list__item-text').slideDown(500);
    } else {
      $(this).find('.questions-list__item-text').slideUp(500);
    }
  })

});