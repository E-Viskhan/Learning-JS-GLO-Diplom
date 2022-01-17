export const slider = ({
  slidesClass, prevId, nextId, slidesWrapperClass, slidesFieldClass, totalClass, currentClass, hideArrows = false, slidesPerView = 1
}) => {
  const slidesWrapper = document.querySelector(slidesWrapperClass),
    slidesField = slidesWrapper.querySelector(slidesFieldClass),
    slides = slidesField.querySelectorAll(slidesClass),
    prev = document.getElementById(prevId),
    next = document.getElementById(nextId),
    width = getComputedStyle(slidesWrapper).width,
    current = document.querySelector(currentClass),
    total = document.querySelector(totalClass),
    isVisibleSlider = () => getComputedStyle(slidesField).display !== 'none',
    setTotalSlidesNumber = () => {
      if (slidesPerView === 1) {
        total.textContent = slides.length;
      } else {
        total.textContent = slides.length - (slidesPerView - 1);
      }
    },
    slideWidth = Math.ceil(parseFloat(width) / slidesPerView);

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

  if (total) { setTotalSlidesNumber(); }

  let offset = 0;

  slidesField.style.width = 100 * slides.length / slidesPerView + '%';
  slidesField.style.display = 'flex';
  slidesField.style.minWidth = 'max-content';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide => { slide.style.width = slideWidth + 'px'; });

  next.addEventListener('click', () => {
    if (!isVisibleSlider()) { return; }
    if (current) { incrementCurrentSlideNumber(); }

    if (!hideArrows) {
      if (offset >= slideWidth * (slides.length - 1)) {
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
    if (current) { decrementCurrentSlideNumber(); }

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