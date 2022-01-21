import { checkAuth } from "./modules/checkAuth";
import { ApiService } from "./modules/apiService";
import { renderServices, renderTypesServices } from "./modules/render";
import { filterServices } from "./modules/filterServices";

checkAuth();

window.apiService = new ApiService();

apiService.getServices().then(services => {
  renderServices(services);
});

renderTypesServices();
filterServices();