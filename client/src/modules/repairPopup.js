import { togglePopup } from "./helpers";
import { renderServices, renderTypesServices } from "./render";
import { slider } from "./slider";

export const repairPopup = () => {
  const showAllServicesBtns = document.querySelectorAll('.show-all-services');
  const popularRepairTypes = document.querySelector('.popup-repair-types');

  const tabHandler = async (e) => {
    const tabNav = document.querySelector('.nav-list-popup-repair');
    const tBody = document.getElementById('popup-repair-content');
    const activeClass = 'popup-repair-types-nav__item--active';

    const showFilterData = (repairType) => {
      fetch(`http://localhost:3000/services?type=${repairType}`)
        .then(res => res.json())
        .then(services => renderServices(tBody, services));
    };

    await renderTypesServices(tabNav);

    const repairType = document.querySelector(`.${activeClass}`).dataset.repairType;
    showFilterData(repairType);

    tabNav.addEventListener('click', (e) => {
      const clickedTab = e.target.closest('.popup-repair-types-nav__item');
      const tabContentTitle = document.getElementById('switch-inner');

      if (clickedTab) {
        const repairType = clickedTab.dataset.repairType;

        tabNav.querySelector(`.${activeClass}`).classList.remove(activeClass);
        clickedTab.classList.add(activeClass);
        tabContentTitle.textContent = repairType;

        showFilterData(repairType);
      }
    });

    if (window.screen.width < 1025) {
      slider({
        slidesWrapperClass: '.nav-popup-repair-types',
        slidesFieldClass: '.nav-list-popup-repair',
        slidesClass: '.popup-repair-types-nav__item',
        prevSelector: '#nav-arrow-popup-repair_left',
        nextSelector: '#nav-arrow-popup-repair_right'
      });
    }

    togglePopup(popularRepairTypes, e);
  };

  showAllServicesBtns.forEach(btn => btn.addEventListener('click', (e) => tabHandler(e)));
};