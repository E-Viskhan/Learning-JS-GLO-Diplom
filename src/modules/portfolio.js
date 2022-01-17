import { slider } from './slider';

export const portfolio = () => {
  if (window.screen.width > 1025) {
    slider({
      slidesWrapperClass: '.portfolio-slider-container',
      slidesFieldClass: '.portfolio-slider.mobile-hide',
      slidesClass: '.portfolio-slider__slide',
      prevId: 'portfolio-arrow_left',
      nextId: 'portfolio-arrow_right',
      slidesPerView: 3,
      hideArrows: true
    });
  } else if (window.screen.width >= 900) {
    slider({
      slidesWrapperClass: '.portfolio-slider-container',
      slidesFieldClass: '.portfolio-slider.mobile-hide',
      slidesClass: '.portfolio-slider__slide',
      prevId: 'portfolio-arrow_left',
      nextId: 'portfolio-arrow_right',
      slidesPerView: 2,
      totalClass: '#portfolio-counter .slider-counter-content__total',
      currentClass: '#portfolio-counter .slider-counter-content__current',
      hideArrows: true
    });
  } else if (window.screen.width >= 576) {
    slider({
      slidesWrapperClass: '.portfolio-slider-container',
      slidesFieldClass: '.portfolio-slider.mobile-hide',
      slidesClass: '.portfolio-slider__slide',
      prevId: 'portfolio-arrow_left',
      nextId: 'portfolio-arrow_right',
      slidesPerView: 1,
      totalClass: '#portfolio-counter .slider-counter-content__total',
      currentClass: '#portfolio-counter .slider-counter-content__current',
      hideArrows: true
    });
  } else {
    slider({
      slidesWrapperClass: '.portfolio-slider-container',
      slidesFieldClass: '.portfolio-slider-mobile',
      slidesClass: '.portfolio-slider__slide-frame',
      prevId: 'portfolio-arrow-mobile_left',
      nextId: 'portfolio-arrow-mobile_right',
      slidesPerView: 1,
      totalClass: '#portfolio-counter .slider-counter-content__total',
      currentClass: '#portfolio-counter .slider-counter-content__current',
      hideArrows: true
    });
  }
};