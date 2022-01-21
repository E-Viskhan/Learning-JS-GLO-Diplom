import { renderServices } from "./render";

export const filterServices = () => {
  const typeItem = document.getElementById('typeItem');

  typeItem.addEventListener('change', async (e) => {
    let services;
    let selectedServiceType = typeItem.value;

    if (selectedServiceType === 'Все услуги') {
      services = await apiService.getServices();
    } else {
      services = await apiService.filterServices(selectedServiceType);
    }

    renderServices(services);
  });
};