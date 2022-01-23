import { renderServices } from "./render";

const typeItem = document.getElementById('typeItem');

const showFilterServices = async () => {
  let services;
  let selectedServiceType = typeItem.value;

  if (selectedServiceType === 'Все услуги') {
    services = await apiService.getServices();
  } else {
    services = await apiService.filterServices(selectedServiceType);
  }

  renderServices(services);
};

const filterServices = () => typeItem.addEventListener('change', showFilterServices);

export { filterServices, showFilterServices };