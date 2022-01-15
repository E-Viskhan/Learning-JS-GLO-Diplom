import { slider } from "./slider";

export const formula = () => {
  const formulaIcons = document.querySelectorAll('.mobile-hide .formula-item__icon');
  const root = document.querySelector(':root');

  formulaIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function (e) {
      const item = e.target.closest('.formula-item');
      const popup = item.querySelector('.formula-item-popup');
      const freePlace = item.getBoundingClientRect().top;
      const popupNeedPlace = parseInt(getComputedStyle(popup).height) + 15;


      if (freePlace < popupNeedPlace) {
        root.style.setProperty('--number-degrees', "180deg");
        popup.style.paddingTop = '40px';
        popup.style.bottom = -(popupNeedPlace + 15) + 'px';
      } else {
        root.style.setProperty('--number-degrees', 0);
        popup.style.paddingTop = '20px';
        popup.style.bottom = '90px';
      }

      item.classList.add('active-item');
    });

    icon.addEventListener('mouseleave', function (e) {
      const target = e.target;
      const item = target.closest('.formula-item');
      item.classList.remove('active-item');
    });
  });

  if (window.screen.width < 1026) {
    const formulaIconsMob = document.querySelectorAll('.desktop-hide .formula-item__icon');
    root.style.setProperty('--number-degrees', "180deg");

    formulaIconsMob.forEach(icon => {
      icon.addEventListener('click', (e) => {
        const item = e.target.closest('.formula-item');
        item.classList.toggle('active-item');
      });
    });

    slider({
      slidesClass: '.formula-slider__slide',
      prevId: 'formula-arrow_left',
      nextId: 'formula-arrow_right',
      slidesWrapperClass: '.formula-slider-wrap',
      slidesFieldClass: '.formula-slider'
    });

  }
};