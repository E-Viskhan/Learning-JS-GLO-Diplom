import { unblockBody } from "../../../client/src/modules/helpers";
import { reRender } from "./render";
import { toggleModal } from "./helpers";

export const modal = () => {
  const modal = document.getElementById('modal');
  const form = document.getElementById('form');
  const closeModal = () => {
    form.reset();
    form.removeAttribute('data-service-id');
    form.removeAttribute('data-method');
    toggleModal();
    unblockBody();
  };

  modal.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;

    if (target.classList.contains('modal__overlay') || target.closest('.button__close') ||
      target.closest('.cancel-button')) {
      closeModal();
    } else if (target.closest('#submit')) {
      const formData = new FormData(form);
      let data = {};

      for (let [key, value] of formData) {
        data[key] = value;
      }

      switch (form.dataset.method) {
        case 'add':
          apiService.addService(data).then(() => reRender());
          break;
        case 'change':
          const serviceId = form.dataset.serviceId;
          apiService.changeService(serviceId, data).then(() => reRender());
          break;
      }
      closeModal();
    }
  });
};