import { getData, sendData } from './repuests';

const url = 'http://localhost:3000/services/';

export class ApiService {
  async getServices() {
    return getData(url);
  }

  async getService(serviceId) {
    return getData(url + serviceId);
  }

  async addService(service) {
    return sendData({ url, data: service });
  }

  async removeService(serviceId) {
    return sendData({ url: url + serviceId, method: 'DELETE' });
  }

  async changeService(serviceId, data) {
    return sendData({ url: url + serviceId, data, method: 'PATCH' });
  }

  async replaceService(serviceId, service) {
    return sendData({ url: url + serviceId, data: service, method: 'PUT' });
  }

  async filterServices(serviceType) {
    return getData(`${url}?type=${serviceType}`);
  }

  async getSortServices({ sortOptionName, order }) {
    return getData(`http://localhost:4545/users?_sort=${sortOptionName}&_order=${order}`);
  }

  async getSearchUsers(str) {
    return getData(`http://localhost:4545/users?name_like=${str}`);
  }
}