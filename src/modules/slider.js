export const slider = ({
  slidesClass, prevSelector, nextSelector, slidesWrapperClass, slidesFieldClass, totalClass, currentClass, changeDisplayClass = false, hideArrows = false, slidesPerView = 1, initialSlide = false
}) => {
  const slidesWrapper = document.querySelector(slidesWrapperClass),
    slidesField = slidesWrapper.querySelector(slidesFieldClass),
    slides = slidesField.querySelectorAll(slidesClass),
    prev = document.querySelector(prevSelector),
    next = document.querySelector(nextSelector),
    width = getComputedStyle(slidesWrapper).width,
    current = document.querySelector(currentClass),
    total = document.querySelector(totalClass),
    changeElems = document.querySelectorAll(changeDisplayClass),
    slideWidth = Math.ceil(parseFloat(width) / slidesPerView),
    isVisibleSlider = () => getComputedStyle(slidesField).display !== 'none',
    setTotalSlidesNumber = () => {
      if (slidesPerView === 1) {
        total.textContent = slides.length;
      } else {
        total.textContent = slides.length - (slidesPerView - 1);
      }
    },
    isSliderExists = () => {
      const slide = slidesWrapper.querySelector(slidesClass);
      return parseFloat(slide.style.width) === slideWidth ? true : false;
    };

  const incrementCurrentSlideNumber = () => {
    if (+current.textContent === slides.length) {
      current.textContent = 1;
    } else {
      current.textContent = +current.textContent + 1;
    }
  };

  const decrementCurrentSlideNumber = () => {
    if (+current.textContent === 1) {
      current.textContent = slides.length;
    } else {
      current.textContent = +current.textContent - 1;
    }
  };

  const changeDisplayElems = () => {
    const currentSlideIndex = current ? +current.textContent - 1 : 0;
    const prevSlideIndex = currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;

    changeElems[prevSlideIndex].style.display = 'none';
    changeElems[currentSlideIndex].style.display = 'block';
  };

  const setOffset = () => {
    offset = +slidesField.style.transform.match(/([0-9\.]+)/)[0];
  };

  let offset = 0;

  if (total) { setTotalSlidesNumber(); }
  if (changeElems.length) { changeDisplayElems(); }

  slidesField.style.width = 100 * slides.length / slidesPerView + '%';
  slidesField.style.display = 'flex';
  slidesField.style.minWidth = 'max-content';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide => { slide.style.width = slideWidth + 'px'; });

  next.addEventListener('click', () => {
    if (!isVisibleSlider()) { return; }
    if (initialSlide) { setOffset(); }
    if (current) { incrementCurrentSlideNumber(); }
    if (changeElems.length) { changeDisplayElems(); }

    if (!hideArrows) {
      if (offset >= slideWidth * (slides.length - 1)) {
        console.log('true');
        offset = 0;
      } else {
        offset += slideWidth;
      }
    } else {
      prev.style.display = 'flex';
      if ((offset / slideWidth + 1) >= slides.length - slidesPerView) {
        next.style.display = 'none';
      }

      offset += slideWidth;
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
  });

  prev.addEventListener('click', () => {
    if (!isVisibleSlider()) { return; }
    if (initialSlide) { setOffset(); }
    if (current) { decrementCurrentSlideNumber(); }
    if (changeElems.length) { changeDisplayElems(); }

    if (!hideArrows) {
      if (offset <= 0) {
        offset = slideWidth * (slides.length - 1);
      } else {
        offset -= slideWidth;
      }
    } else {
      next.style.display = 'flex';

      if (offset <= slideWidth) {
        prev.style.display = 'none';
      }

      offset -= slideWidth;
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
  });

};