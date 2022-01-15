export const slider = ({ slidesClass, prevId, nextId, totalId, currentId, slidesWrapperClass, slidesFieldClass }) => {
  const slides = document.querySelectorAll(slidesClass),
    prev = document.getElementById(prevId),
    next = document.getElementById(nextId),
    slidesWrapper = document.querySelector(slidesWrapperClass),
    slidesField = document.querySelector(slidesFieldClass),
    width = getComputedStyle(slidesWrapper).width;

  if (totalId && currentId) {
    const total = document.getElementById(totalId);
    const current = document.getElementById(currentId);
  }

  let slideIndex = 1;
  let offset = 0;

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide => {
    slide.style.width = width;
  });

  next.addEventListener('click', () => {
    if (offset === parseFloat(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += parseFloat(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
  });

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = parseFloat(width) * (slides.length - 1);
    } else {
      offset -= parseFloat(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
  });
};