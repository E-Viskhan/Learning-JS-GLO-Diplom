import { getData, sendData } from './repuests';

export class ApiService {

  getUsers() {
    return getData('http://localhost:4545/users');
  }

  getUser(userId) {
    return getData(`http://localhost:4545/users/${userId}`);
  }

  addUser(user) {
    return sendData({ url: 'http://localhost:4545/userss', data: user });
  }

  removeUser(userId) {
    return sendData({
      url: `http://localhost:4545/users/${userId}`,
      method: 'DELETE'
    });
  }

  changeUser(userId, data) {
    return sendData({
      url: `http://localhost:4545/users/${userId}`,
      data,
      method: 'PATCH'
    });
  }

  editUser(userId, user) {
    return sendData({
      url: `http://localhost:4545/users/${userId}`,
      data: user,
      method: 'PUT'
    });
  }

  async filterUsers(filterOption) {
    return getData(`http://localhost:4545/users?${filterOption}=true`);
  }

  async getSortUsers({ sortOptionName, order }) {
    return getData(`http://localhost:4545/users?_sort=${sortOptionName}&_order=${order}`);
  }

  async getSearchUsers(str) {
    return getData(`http://localhost:4545/users?name_like=${str}`);
  }
}

export default {};