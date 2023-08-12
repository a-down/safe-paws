var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



$('.profile-heading').on('click', () => {
  console.log('works')
})