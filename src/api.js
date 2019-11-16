import axios from 'axios';

class Api {
  constructor() {
    const ApiNode = axios.create({
      baseURL: 'localhost:3000',
    });
    this.ApiNode = ApiNode;
  }
}
export default new Api().ApiNode;
