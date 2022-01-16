export const slider = ({
  slidesClass, prevId, nextId, slidesWrapperClass, slidesFieldClass, totalClass, currentClass
}) => {
  const slidesWrapper = document.querySelector(slidesWrapperClass),
    slides = slidesWrapper.querySelectorAll(slidesClass),
    prev = document.getElementById(prevId),
    next = document.getElementById(nextId),
    slidesField = slidesWrapper.querySelector(slidesFieldClass),
    width = getComputedStyle(slidesWrapper).width,
    current = document.querySelector(currentClass),
    total = document.querySelector(totalClass),
    isVisibleSlider = () => getComputedStyle(slidesField).display !== 'none',
    setTotalSlidesNumber = () => total.textContent = slides.length;

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

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.minWidth = 'max-content';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';
  slides.forEach(slide => { slide.style.width = width; });

  next.addEventListener('click', () => {
    if (!isVisibleSlider()) { return; }
    if (current) { incrementCurrentSlideNumber(); }

    if (offset === parseFloat(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += parseFloat(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
  });

  prev.addEventListener('click', () => {
    if (!isVisibleSlider()) { return; }
    if (current) { decrementCurrentSlideNumber(); }

    if (offset == 0) {
      offset = parseFloat(width) * (slides.length - 1);
    } else {
      offset -= parseFloat(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
  });

};