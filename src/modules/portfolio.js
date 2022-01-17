import { slider } from './slider';

export const portfolio = () => {
  if (window.screen.width > 1025) {
    slider({
      slidesWrapperClass: '.portfolio-slider-container',
      slidesFieldClass: '.portfolio-slider.mobile-hide',
      slidesClass: '.portfolio-slider__slide',
      prevId: 'portfolio-arrow_left',
      nextId: 'portfolio-arrow_right',
      slidesPerView: 3
    });
  } else if (window.screen.width >= 900) {
    // slider({
    //   slidesWrapperClass: '.portfolio-slider-container',
    //   slidesFieldClass: '.portfolio-slider.mobile-hide',
    //   slidesClass: '.portfolio-slider__slide',
    //   prevId: 'portfolio-arrow_left',
    //   nextId: 'portfolio-arrow_right',
    //   slidesPerView: 2
    // });
  } else {

  }


};