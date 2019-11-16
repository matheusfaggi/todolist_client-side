/* eslint-disable no-undef */
/* eslint-disable no-new */
import api from './api';

class App {
  constructor() {
    this.tasks = this.getTasks();

    this.formEl = document.getElementById('task-form');
    this.registrerHandlers();
  }

  registrerHandlers() {
    this.formEl.onsubmit = (event) => this.addRepository(event);
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
