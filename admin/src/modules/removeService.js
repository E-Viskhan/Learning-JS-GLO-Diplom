import { reRender } from "./render";

export const removeService = () => {
  const tBody = document.getElementById('tbody');

  tBody.addEventListener('click', (e) => {
    const target = e.target;

    if (e.target.closest('.action-remove')) {
      const serviceId = target.closest('tr').querySelector('.table__id').textContent;

      apiService.removeService(serviceId).then(() => reRender());
    }
  });
};