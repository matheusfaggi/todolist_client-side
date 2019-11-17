import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import Typography from '@material-ui/core/Typography'

function App() {
    return (
        <>
            <Typography variant="h3">TodoList</Typography>

            <TodoList />
        </>
    )
}

export default App
