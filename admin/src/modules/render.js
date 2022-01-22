import { getServiceTypes } from "../../../client/src/modules/getServiceTypes";
import { getServiceHTML, getServiceTypeHTML } from "./templates";

const renderTypesServices = async () => {
  const typesContainer = document.getElementById('typeItem');
  const types = await getServiceTypes();

  types.forEach(type => {
    const serviceTypeHTML = getServiceTypeHTML(type);

    typesContainer.insertAdjacentHTML('beforeend', serviceTypeHTML);
  });
};

const renderServices = (services) => {
  const servicesContainer = document.getElementById('tbody');

  servicesContainer.innerHTML = '';

  services.forEach(service => {
    const serviceHTML = getServiceHTML(service);

    servicesContainer.insertAdjacentHTML('beforeend', serviceHTML);
  });
};

const reRender = () => {
  apiService.getServices().then(services => renderServices(services));
};

export { renderTypesServices, renderServices, reRender };