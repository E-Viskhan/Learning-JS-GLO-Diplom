import { checkAuth } from "./modules/checkAuth";
import { ApiService } from "./modules/apiService";
import { renderServices, renderTypesServices } from "./modules/render";
import { filterServices } from "./modules/filterServices";
import { addService } from "./modules/addService";
import { changeService } from "./modules/changeService";
import { removeService } from "./modules/removeService";
import { modal } from "./modules/modal";

checkAuth();

window.apiService = new ApiService();

apiService.getServices().then(services => renderServices(services));

renderTypesServices();
modal();
filterServices();
addService();
changeService();
removeService();