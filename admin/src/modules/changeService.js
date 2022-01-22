import { blockBody } from "../../../client/src/modules/helpers";
import { toggleModal } from "./helpers";

export const changeService = () => {
  const tBody = document.getElementById('tbody');

  tBody.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.action-change')) {
      const modalHeader = document.querySelector('.modal__header');
      const form = document.getElementById('form');
      const typeInput = form.querySelector('#type');
      const nameInput = form.querySelector('#name');
      const costInput = form.querySelector('#cost');
      const unitsInput = form.querySelector('#units');
      const serviceId = target.closest('tr').querySelector('.table__id').textContent;

      modalHeader.textContent = 'Редактировать услугу';

      apiService.getService(serviceId).then(service => {
        typeInput.value = service.type;
        nameInput.value = service.name;
        costInput.value = service.cost;
        unitsInput.value = service.units;
      });

      toggleModal();
      blockBody();

      form.dataset.method = 'change';
      form.dataset.serviceId = serviceId;
    }
  });
};