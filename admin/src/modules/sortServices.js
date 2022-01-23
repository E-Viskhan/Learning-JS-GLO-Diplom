export const sortServices = () => {
  const tHead = document.querySelector('thead');

  tHead.addEventListener('click', (e) => {
    const target = e.target;

    console.log(target.closest('.table-th'));

    if (target.closest('.action-change')) {
    }
  });
};