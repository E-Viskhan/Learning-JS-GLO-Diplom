import { togglePopup } from './helpers';
import { slider } from './slider';

export const portfolio = () => {
  const portfolioContainer = document.querySelector('.portfolio-slider-container');
  portfolioContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('portfolio-slider__slide-frame')) {
      const portfolioPopup = document.querySelector('.popup-portfolio');
      togglePopup(portfolioPopup);
    }
  });

  slider({
    slidesWrapperClass: '.popup-portfolio-slider-wrap',
    slidesFieldClass: '.popup-portfolio-slider',
    slidesClass: '.popup-portfolio-slider__slide',
    prevId: 'popup_portfolio_left',
    nextId: 'popup_portfolio_right',
    slidesPerView: 1,
    currentClass: '#popup-portfolio-counter .slider-counter-content__current',
    totalClass: '#popup-portfolio-counter .slider-counter-content__total',
    changeDisplayClass: '.popup-portfolio-text'
  });

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