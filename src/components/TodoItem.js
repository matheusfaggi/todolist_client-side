import React, { Component } from 'react'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import FormLabel from '@material-ui/core/FormLabel'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import './Style.css'

class TodoItem extends Component {
    static defaultProps = {
        isNew: false,
    }
    render() {
        const { onDelete, task, isNew, onEdit } = this.props

        return (
            <li className="task">
                <div className="task-description">
                    {!isNew ? <Checkbox></Checkbox> : null}
                    <FormLabel>{task}</FormLabel>
                </div>
                <div className="tools-task">
                    <IconButton onClick={onEdit}>
                        {!isNew ? <Edit></Edit> : null}
                    </IconButton>

                    <IconButton onClick={onDelete}>
                        {!isNew ? <Delete></Delete> : null}
                    </IconButton>
                </div>
            </li>
        )
    }
}

export default TodoItem
