import { slider } from "./slider";
import { tabs } from "./tabs";

export const repairTypes = () => {
  const sliders = document.querySelectorAll('.repair-types__tab-content');

  tabs({
    tabsContainerClass: '.nav-list-repair',
    tabClass: '.repair-types-nav__item',
    contentClass: '.repair-types__tab-content'
  });

  if (window.screen.width < 1025) {
    slider({
      slidesClass: '.repair-types-nav__item',
      prevSelector: '#nav-arrow-repair-left_base',
      nextSelector: '#nav-arrow-repair-right_base',
      slidesWrapperClass: '.repair-types-nav',
      slidesFieldClass: '.nav-list-repair'
    });
  }

  sliders.forEach((item, index) => {
    slider({
      slidesClass: `.types-repair${index + 1} .repair-types-slider__slide`,
      prevSelector: '#repair-types-arrow_left',
      nextSelector: '#repair-types-arrow_right',
      slidesWrapperClass: '.repair-types-slider',
      slidesFieldClass: `.types-repair${index + 1}`,
      currentClass: '.slider-counter-content__current',
      totalClass: '.slider-counter-content__total'
    });
  });

};