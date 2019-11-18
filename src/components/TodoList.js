import React, { Component } from 'react'
import { Button, FormLabel, Input } from '@material-ui/core'
import TodoItem from './TodoItem'

import './Style.css'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange, blueGrey } from '@material-ui/core/colors'
import api from '../Api'

class TodoList extends Component {
    state = {
        newTask: '',
        tasks: [],
    }
    constructor() {
        super()
        this.setTasks()
    }

    postTask = async e => {
        const params = {
            task_description: this.state.newTask,
        }
        const response = await api.post('/task', params)
    }
    deleteTask = async task => {
        const dbTasks = await this.getTasks()
        const id = dbTasks
            .filter(item => item.task_description === task)
            .map(item => item.id)
        api.delete('/task', {
            data: {
                id,
            },
        })
    }
    getTasks = async () => {
        const response = await api
            .get('/tasks')
            .then(response => response.data.map(item => item))
        return response
    }

    setTasks = async () => {
        if (this.state.tasks) {
            const inserts = [
                { task_description: 'First task' },
                { task_description: 'Second task' },
                { task_description: 'Third task' },
            ]
            inserts.map(async item => await api.post('/task', item))
        }

        const tasksDb = await this.getTasks()
        const dbTasks = tasksDb.map(item => item.task_description)
        this.setState({
            tasks: [...dbTasks],
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        // this.postTask(e);
        const { tasks, newTask } = this.state

        // this.setState({
        //     tasks: [...tasks, newTask],
        //     newTask:,
        // })
    }
    handleDelete = task => {
        this.deleteTask(task)
        this.setState({ tasks: this.state.tasks.filter(t => t !== task) })
    }
    handleInputChange = () => {
        console.log('aa')
    }

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
                            onChange={() => this.handleInputChange}
                        />
                    ))}
                    <TodoItem
                        key={newTask}
                        task={newTask}
                        isNew={true}
                        onDelete={() => this.handleDelete(task)}
                        onChange={() => this.handleInputChange}
                    />
                </ul>
            </form>
        )
    }
}

export default TodoList
