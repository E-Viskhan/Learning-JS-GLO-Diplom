import { blockBody, smoothScroll, unblockBody } from "./helpers";

export const header = () => {
  const headerArrowBlock = document.querySelector('.header-contacts__arrow');
  const headerArrow = headerArrowBlock.querySelector('img');
  const secondContactAccord = document.querySelector('.header-contacts__phone-number-accord');
  const secondContact = secondContactAccord.querySelector('.header-contacts__phone-number');
  const menuIcon = document.querySelector('.menu__icon');
  const popupMenu = document.querySelector('.popup-menu');
  const popupDialog = popupMenu.querySelector('.popup-dialog-menu');

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

    if (target.closest('.close-menu')) {
      closeMenu();
    } else if (target.classList.contains('popup-menu--active')) {
      closeMenu();
    } else if (target.classList.contains('menu-link')) {
      smoothScroll(target, e);
      closeMenu();
    } else if (target.closest('.button-footer')) {
      const link = target.closest('.button-footer').querySelector('a');
      smoothScroll(link, e);
    }
  });
};