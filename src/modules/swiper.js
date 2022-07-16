import Swiper, { Autoplay, Navigation } from "swiper";

Swiper.use([Autoplay, Navigation]);

const swiper = () => {
  const swiper = new Swiper(".benefitSwiper", {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    initialSlide: 1,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".benefits__arrow--right",
      prevEl: ".benefits__arrow--left",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      425: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      580: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  });
};

export default swiper;