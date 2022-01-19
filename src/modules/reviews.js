import { slider } from './slider';

export const reviews = () => {
  slider({
    slidesWrapperClass: '.reviews-slider',
    slidesFieldClass: '.reviews-slider__container',
    slidesClass: '.reviews-slider__slide',
    prevSelector: '#reviews-arrow_left',
    nextSelector: '#reviews-arrow_right',
  });
};