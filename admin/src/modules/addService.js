import { blockBody, unblockBody } from '../../../client/src/modules/helpers';
import { renderServices } from './render';

export const addService = () => {
  const addBtn = document.querySelector('.btn-addItem');
  const modal = document.getElementById('modal');
  const form = document.getElementById('form');

  const toggleModal = () => {
    modal.classList.toggle('d-none');
  };

  addBtn.addEventListener('click', (e) => {
    toggleModal();
    blockBody();
  });

  modal.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;

    if (target.classList.contains('modal__overlay') || target.closest('.button__close') ||
      target.closest('.cancel-button')) {
      form.reset();
      toggleModal();
      unblockBody();
    } else if (target.closest('#submit')) {
      const formData = new FormData(form);
      let data = {};

      for (let [key, value] of formData) {
        data[key] = value;
      }

      apiService.addService(data).then(() => {
        apiService.getServices().then(services => renderServices(services));
      });

      form.reset();
      toggleModal();
      unblockBody();
    }
  });

};