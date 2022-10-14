const swiperCards = new Swiper(".carousel_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const swiperPresentacion = new Swiper(".carouselPresentacion", {
  direction: "vertical",
  spaceBetween: 30,
  centeredSlides: true,
  mousewheel: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*var swiperTitle = new Swiper(".swiper_title", {
    direction: "vertical",
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  }); */