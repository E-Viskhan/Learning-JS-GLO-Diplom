import { blockBody, smoothScroll, unblockBody, togglePopup } from "./helpers";

export const header = () => {
  const headerArrowBlock = document.querySelector('.header-contacts__arrow');
  const headerArrow = headerArrowBlock.querySelector('img');
  const secondContactAccord = document.querySelector('.header-contacts__phone-number-accord');
  const secondContact = secondContactAccord.querySelector('.header-contacts__phone-number');
  const menuIcon = document.querySelector('.menu__icon');
  const popupMenu = document.querySelector('.popup-menu');
  const popupDialog = popupMenu.querySelector('.popup-dialog-menu');
  const showAllServicesBtns = document.querySelectorAll('.show-all-services');
  const popularRepairTypes = document.querySelector('.popup-repair-types');
  const privacy = document.querySelector('.popup-privacy');
  const consultation = document.querySelector('.popup-consultation');

  const toggleShowContact = () => {
    secondContactAccord.classList.toggle('header-contacts__phone-number-accord--open');
    secondContact.classList.toggle('header-contacts__phone-number--show');
    headerArrow.classList.toggle('header-contacts__arrow-img--open');
  };

  headerArrowBlock.addEventListener('click', toggleShowContact);

  const openMenu = () => {
    popupMenu.classList.add('popup-menu--active');
    popupDialog.classList.add('popup-dialog-menu--active');
    blockBody();
  };

  const closeMenu = () => {
    popupMenu.classList.remove('popup-menu--active');
    popupDialog.classList.remove('popup-dialog-menu--active');
    unblockBody();
  };

  menuIcon.addEventListener('click', openMenu);

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.close-menu') || target.classList.contains('popup-menu--active')) {
      closeMenu();
    } else if (target.closest('.popup-menu-nav__item')) {
      smoothScroll(target, e);
      closeMenu();
    } else if (target.closest('.button-footer')) {
      const link = target.closest('.button-footer').querySelector('a');
      smoothScroll(link, e);
    } else if (target.classList.contains('link-privacy')) {
      togglePopup(privacy);
    } else if (target.classList.contains('button_consult')) {
      togglePopup(consultation);
    } else if (target.closest('.close') || target.classList.contains('popup--active')) {
      const popup = target.closest('.popup--active');
      togglePopup(popup);
    }

  });

  showAllServicesBtns.forEach(btn => btn.addEventListener('click', (e) => {
    togglePopup(popularRepairTypes, e);
  }));
};