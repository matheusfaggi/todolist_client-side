/* eslint-disable no-new */
import api from './api';

class App {
  constructor() {
    this.tasks = this.getTasks();
  }

  async getTasks() {
    const tasks = await api.get('/')
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
    return tasks;
  }
}
new App();
