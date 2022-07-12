export const serviceSlider = () => {
    const sliderBlock = document.querySelector(".slider");
    const slides = document.querySelectorAll(".service-block");
  
    const timeInterval = 4000;
    let currentSlide = 0;
    let interval;
  
    // Next slide
    const prevSlide = (elems, index) => {
      elems[index].style.display = "none";
      elems[index + 1].style.display = "none";
    };
    // Previous slide
    const nextSlide = (elems, index) => {
      elems[index].style.display = "block";
      elems[index + 1].style.display = "block";
    };
  
    // Automatica slide changes
    const autoSlide = () => {
      prevSlide(slides, currentSlide);
  
      currentSlide += +2;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      nextSlide(slides, currentSlide, "active");
    };
  
    // Start ASC
    const startSlide = (timer = 2000) => {
      interval = setInterval(autoSlide, timer);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };
  
    // Change onclick
    sliderBlock.addEventListener("click", (e) => {
      e.preventDefault();
  
      if (e.target.classList.contains("services__arrow")) {
        return;
      }
      prevSlide(slides, currentSlide);
  
      if (e.target.closest(".services__arrow--right")) {
        currentSlide += +2;
      } else if (e.target.closest(".services__arrow--left")) {
        currentSlide -= -2;
      }
  
      // Check calc and arr length
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = 0;
      }
  
      nextSlide(slides, currentSlide);
    });
  
    startSlide(timeInterval);
  };
export default serviceSlider;