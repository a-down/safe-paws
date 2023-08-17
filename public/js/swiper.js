var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.25,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    1174: {
      slidesPerView: 3.5,
    },
    761: {
      slidesPerView: 2.5,
    },
    460: {
      slidesPerView: 1.5,
    },
  }
});


