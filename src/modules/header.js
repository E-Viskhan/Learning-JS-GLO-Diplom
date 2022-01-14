export const header = () => {
  const headerArrowBlock = document.querySelector('.header-contacts__arrow');
  const headerArrow = headerArrowBlock.querySelector('img');
  const secondContactAccord = document.querySelector('.header-contacts__phone-number-accord');
  const secondContact = secondContactAccord.querySelector('.header-contacts__phone-number');

  const toggleShowContact = () => {
    secondContactAccord.classList.toggle('header-contacts__phone-number-accord--open');
    secondContact.classList.toggle('header-contacts__phone-number--show');
    headerArrow.classList.toggle('header-contacts__arrow-img--open');
  };

  headerArrowBlock.addEventListener('click', toggleShowContact);
};