import React, { Component } from 'react';
import { Button, FormLabel, Input} from '@material-ui/core';
import TodoItem from './TodoItem'

import './Style.css';
import { makeStyles } from '@material-ui/core/styles'
import {deepOrange, blueGrey } from '@material-ui/core/colors'

import api from '../api';


class TodoList extends Component {
  state = {
    newTask: '',
    tasks: [
      'Node.js',
      'ReactJS',
      'React Native'
    ],
  };
  handleInputChange  = (e) => {
    const { value } = e.target;
    this.setState({ newTask: value});
  }
  handleSubmit = (e) => {
    const { tasks, newTask } = this.state
    e.preventDefault();
    this.setState({ 
      tasks: [...tasks, newTask] ,
      newTask: ''
    })
  }
  handleDelete = (task) => {  
    this.setState({ tasks: this.state.tasks.filter(t => t !== task)})
  }
  render() {
    const { tasks, newTask } = this.state;
    return(
      <form onSubmit={this.handleSubmit} id="form-task"> 
        <Input 
          type="text" 
          onChange={this.handleInputChange}
          value={newTask}
          id="input-task"
        />
        <Button 
          variant="contained" 
          color="primary" 
          type="submit"
          id="btn-task"
        >
          Add task
        </Button>
        <ul id="list-task">
          {tasks.map(task=>(<TodoItem key={task} task={task}/>))}

          {
            <li key={newTask} className="new-task">
            <FormLabel>{newTask}</FormLabel>
            </li>  
          }
        </ul>
      </form>
    );

  }  

}
export default TodoList;