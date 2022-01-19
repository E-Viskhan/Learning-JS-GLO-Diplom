import { togglePopup } from "./helpers";
import { slider } from "./slider";

export const contracts = () => {
  const transparencySlider = document.querySelector('.transparency-slider');

  transparencySlider.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('transparency-item__img')) {
      const popup = document.querySelector('.popup-transparency');
      const initialSlide = +target.closest('.transparency-item').dataset.initialSlide;
      const transparencySlider = document.querySelector('.popup-transparency-container');
      const slide = transparencySlider.querySelector('.popup-transparency-slider__slide');
      const slideWidth = parseFloat(slide.style.width);
      const current = document.querySelector('#transparency-popup-counter .slider-counter-content__current');

      transparencySlider.style.transform = `translateX(-${slideWidth * (initialSlide - 1)}px)`;
      current.textContent = initialSlide;

      togglePopup(popup, e);
    }
  });

  slider({
    slidesWrapperClass: '.popup-transparency-slider',
    slidesFieldClass: '.popup-transparency-container',
    slidesClass: '.popup-transparency-slider__slide',
    prevSelector: '#transparency_left',
    nextSelector: '#transparency_right',
    currentClass: '#transparency-popup-counter .slider-counter-content__current',
    totalClass: '#transparency-popup-counter .slider-counter-content__total',
    initialSlide: true
  });

  if (window.screen.width < 1090) {
    slider({
      slidesWrapperClass: '.transparency-slider-wrap',
      slidesFieldClass: '.transparency-slider',
      slidesClass: '.transparency-item',
      prevSelector: '#transparency-arrow_left',
      nextSelector: '#transparency-arrow_right',
    });
  }
};