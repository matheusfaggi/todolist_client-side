import React, { Component } from 'react'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import Save from '@material-ui/icons/Save'
import FormLabel from '@material-ui/core/FormLabel'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import './Style.css'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    static defaultProps = {
        isNew: false,
    }
    state = {
        task: '',
        isNew: false,
        inputEnabled: false,
        saveIcon: true,
    }
    changeHandler = e => {
        const { value } = e.target
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(value)
        }
    }
    editHandler = e => {
        e.preventDefault()
        this.setState({ inputEnabled: !this.state.inputEnabled })
        this.setState({saveIcon: !this.state.saveIcon})
        if (typeof this.props.handleEdit === 'function') {
            this.props.handleEdit(this.state.inputEnabled)
        }
    }
    render() {
        const { onDelete, task, isNew } = this.props

        const { inputEnabled } = this.state

        return (
            <li className="task">
                <div className="task-description">
                    {!isNew ? <Checkbox></Checkbox> : null}

                    <Input
                        type="text"
                        value={task}
                        onChange={this.changeHandler}
                        disabled={isNew ? inputEnabled : !inputEnabled}
                    ></Input>
                    {/* <FormLabel>{task}</FormLabel> */}
                </div>
                <div className="tools-task">
                    <IconButton onClick={this.editHandler}>
                        {!isNew ? <Edit></Edit> : null}
                    </IconButton>

                    <IconButton onClick={onDelete} type="submit">
                        {!isNew ? <Delete></Delete> : <Save></Save>}
                    </IconButton>
                </div>
            </li>
        )
    }
}
TodoItem.PropTypes = {
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    task: PropTypes.string,
    isNew: PropTypes.bool,
}

export default TodoItem
