export const faq = () => {
  const accordion = document.querySelector('#faq-accordion');

  accordion.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('msg-active')) {
      target.classList.remove('msg-active');
      return;
    }

    const activeAcc = accordion.querySelector('.msg-active');
    if (activeAcc) {
      activeAcc.classList.remove('msg-active');
    }

    if (target.classList.contains('title_block')) {
      target.classList.add('msg-active');
    }
  });
};