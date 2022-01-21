import { getRepairItem, getRepairType } from "./templates";
import { getServiceTypes } from "./getServiceTypes";

const renderServices = (container, services) => {
  container.innerHTML = '';

  services.forEach(service => {
    const serviceItem = getRepairItem(service.name, service.units, service.cost);
    container.insertAdjacentHTML('beforeend', serviceItem);
  });
};

const renderTypesServices = async (container) => {
  const types = await getServiceTypes();

  let serviceIndex = 0;

  container.innerHTML = '';
  types.forEach(type => {
    const repairType = getRepairType(type, serviceIndex);

    container.insertAdjacentHTML('beforeend', repairType);
    serviceIndex++;
  });
};

export { renderServices, renderTypesServices };