$(document).ready(function () {
  $(".image-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    prevArrow:
      '<div class="slick-prev slick-arrow"><i class="bi bi-chevron-left"></i></div>',
    nextArrow:
      '<div class="slick-next slick-arrow"><i class="bi bi-chevron-right"></i></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  });
});
