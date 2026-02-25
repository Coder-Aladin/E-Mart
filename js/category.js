 var swiper = new Swiper(".cat-container", {
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});