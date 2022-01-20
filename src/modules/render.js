import { getRepairItem, getRepairType } from "./templates";

const getServices = async () => {
  const res = await fetch('http://localhost:3000/services/');
  return await res.json();
};

const renderServices = (container, services) => {
  container.innerHTML = '';

  services.forEach(service => {
    const serviceItem = getRepairItem(service.name, service.units, service.cost);
    container.insertAdjacentHTML('beforeend', serviceItem);
  });
};

const renderTypesServices = async (container) => {
  const types = new Set();
  const services = await getServices();

  let serviceIndex = 0;

  container.innerHTML = '';
  services.forEach(service => types.add(service.type));
  types.forEach(type => {
    const repairType = getRepairType(type, serviceIndex);

    container.insertAdjacentHTML('beforeend', repairType);
    serviceIndex++;
  });
};

export { renderServices, renderTypesServices };