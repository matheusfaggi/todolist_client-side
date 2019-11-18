import React, { Component } from 'react'
import { Button, FormLabel, Input } from '@material-ui/core'
import TodoItem from './TodoItem'

import './Style.css'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange, blueGrey } from '@material-ui/core/colors'

import api from '../api'

class TodoList extends Component {
  static defaultProp = {
    task: 'Olá'
  }
  state = {
    newTask: '',
    tasks: [
    ],
  };
  constructor() {
    super();
    this.setTasks(); 
  }
  handleInputChange  = (e) => {
    const { value } = e.target;
    this.setState({ newTask: value});
    
  }
  postTask = async (e) => {
    const params = {
        task_description: this.state.newTask,
    }
    const response  = await api.post('/task',params);
  }
  deleteTask = async (task) => {
    const dbTasks = await this.getTasks();
    const id = dbTasks.filter(item=>item.task_description === task).map(item=>item.id);
    api.delete('/task',{
      data: {
        id
      }
    })
  }
  getTasks = async () => {
    const response = await api.get('/tasks')
    .then(response => response.data.map((item)=>item));
    return response;
  }

  setTasks = async () => {
    const tasksDb = await this.getTasks();
    const dbTasks = tasksDb.map((item)=>item.task_description);
    this.setState({
      tasks: [ ...dbTasks]
    })
  }
  handleSubmit =  (e) => {
    e.preventDefault();
    this.postTask(e);
    const { tasks, newTask } = this.state;
    this.setState({ 
      tasks: [...tasks, newTask] ,
      newTask: ''
    })
  }
  handleDelete = (task) => {
    this.deleteTask(task);
    this.setState({ tasks: this.state.tasks.filter(t => t !== task)})
  }
  handleEdit = (task) => {
    console.log(task)
  }
  
  render () {
    const { tasks, newTask } = this.state;

    return(
      <form onSubmit={this.handleSubmit} id="form-todo">
        <div id="form-task">
          <div id="input-task">
            <Input 
              type="text" 
              onChange={this.handleInputChange}
              value={newTask}
            />
          </div>
          <div id="btn-task">
            <Button 
              variant="contained" 
              color="primary" 
              type="submit"
              id="btn-task"
              >
              Add task
            </Button>
          </div>
          
        </div>
        <ul id="list-task">
          {tasks.map(task=>(
          <TodoItem 
            key={task} 
            task={task} 
            onDelete={()=>this.handleDelete(task)}
            onEdit={()=>this.handleEdit(task)}
          />
          ))}
          <TodoItem 
          isNew={true}
          task={newTask}/> 
        </ul>
      </form>
    );

    render() {
        const { tasks, newTask } = this.state

        return (
            <form onSubmit={this.handleSubmit} id="form-todo">
                <ul id="list-task">
                    {tasks.map(task => (
                        <TodoItem
                            key={task}
                            task={task}
                            onDelete={() => this.handleDelete(task)}
                        />
                    ))}
                    <TodoItem isNew={true} newTask={newTask} />
                </ul>
            </form>
        )
    }
}
export default TodoList
