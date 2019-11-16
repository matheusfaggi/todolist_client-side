/* eslint-disable no-new */
import api from './api';

class App {
  constructor() {
    this.tasks = this.getTasks();
  }

  async getTasks() {
    const tasks = await api.get('/').catch((e) => console.log(e));
    return tasks;
  }
}
new App();
