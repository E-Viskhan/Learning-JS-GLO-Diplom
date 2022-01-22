import { blockBody, unblockBody } from '../../../client/src/modules/helpers';
import { renderServices } from './render';
import { toggleModal } from './helpers';

export const addService = () => {
  const addBtn = document.querySelector('.btn-addItem');
  const form = document.getElementById('form');
  const modalHeader = document.querySelector('.modal__header');

  modalHeader.textContent = 'Добавение новой услуги';

  addBtn.addEventListener('click', (e) => {
    form.dataset.method = 'add';
    toggleModal();
    blockBody();
  });

};