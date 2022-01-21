export const tabs = ({ tabsContainerClass, tabClass, contentClass }) => {
  const tabNav = document.querySelector(tabsContainerClass);
  const tabs = tabNav.querySelectorAll(tabClass);
  const tabContent = document.querySelectorAll(contentClass);
  const total = document.querySelector('.slider-counter-content__total');
  const current = document.querySelector('.slider-counter-content__current');

  const setSliderInitialState = (index) => {
    const totalNumber = tabContent[index].querySelectorAll('.repair-types-slider__slide').length;
    total.textContent = totalNumber;
    current.textContent = 1;
    tabContent[index].style.transform = 'translateX(0)';
  };

  tabNav.addEventListener('click', (e) => {
    const clickedTab = e.target.closest(tabClass);

    if (clickedTab) {
      tabs.forEach((tab, index) => {
        if (clickedTab === tab) {
          tab.classList.add('active');
          tabContent[index].classList.remove('d-none');
          setSliderInitialState(index);
        } else {
          tab.classList.remove('active');
          tabContent[index].classList.add('d-none');
        }
      });
    }
  });
};