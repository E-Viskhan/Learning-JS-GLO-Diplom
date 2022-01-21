import { togglePopup } from './helpers';
import { slider } from './slider';

export const portfolio = () => {
  const portfolioContainer = document.querySelector('.portfolio-slider-container');
  const setInitialSlide = (e) => {
    const target = e.target;

    const initialSlide = +target.closest('.portfolio-slider__slide-frame').dataset.initialSlide;
    const portfolioSlider = document.querySelector('.popup-portfolio-slider');
    const slide = portfolioSlider.querySelector('.popup-portfolio-slider__slide');
    const slideWidth = parseFloat(slide.style.width);
    const current = document.querySelector('#popup-portfolio-counter .slider-counter-content__current');
    document.querySelectorAll('.popup-portfolio-text').forEach((slideText, index) => {
      if (index === (initialSlide - 1)) {
        slideText.style.display = 'block';
      } else {
        slideText.style.display = 'none';
      }
    });

    portfolioSlider.style.transform = `translateX(-${slideWidth * (initialSlide - 1)}px)`;
    current.textContent = initialSlide;
  };

  portfolioContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('portfolio-slider__slide-frame')) {
      const portfolioPopup = document.querySelector('.popup-portfolio');

      setInitialSlide(e);
      togglePopup(portfolioPopup);
    }
  });

  slider({
    slidesWrapperClass: '.popup-portfolio-slider-wrap',
    slidesFieldClass: '.popup-portfolio-slider',
    slidesClass: '.popup-portfolio-slider__slide',
    prevSelector: '#popup_portfolio_left',
    nextSelector: '#popup_portfolio_right',
    currentClass: '#popup-portfolio-counter .slider-counter-content__current',
    totalClass: '#popup-portfolio-counter .slider-counter-content__total',
    changeDisplayClass: '.popup-portfolio-text',
    initialSlide: true
  });

  if (window.screen.width > 1025) {
    slider({
      slidesWrapperClass: '.portfolio-slider-container',
      slidesFieldClass: '.portfolio-slider.mobile-hide',
      slidesClass: '.portfolio-slider__slide',
      prevSelector: '#portfolio-arrow_left',
      nextSelector: '#portfolio-arrow_right',
      slidesPerView: 3,
      hideArrows: true
    });
  } else if (window.screen.width >= 900) {
    slider({
      slidesWrapperClass: '.portfolio-slider-container',
      slidesFieldClass: '.portfolio-slider.mobile-hide',
      slidesClass: '.portfolio-slider__slide',
      prevSelector: '#portfolio-arrow_left',
      nextSelector: '#portfolio-arrow_right',
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
      prevSelector: '#portfolio-arrow_left',
      nextSelector: '#portfolio-arrow_right',
      totalClass: '#portfolio-counter .slider-counter-content__total',
      currentClass: '#portfolio-counter .slider-counter-content__current',
      hideArrows: true
    });
  } else {
    slider({
      slidesWrapperClass: '.portfolio-slider-container',
      slidesFieldClass: '.portfolio-slider-mobile',
      slidesClass: '.portfolio-slider__slide-frame',
      prevSelector: '#portfolio-arrow-mobile_left',
      nextSelector: '#portfolio-arrow-mobile_right',
      totalClass: '#portfolio-counter .slider-counter-content__total',
      currentClass: '#portfolio-counter .slider-counter-content__current',
      hideArrows: true
    });
  }
};