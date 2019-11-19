import React, { Component } from 'react'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import Save from '@material-ui/icons/Save'
import FormLabel from '@material-ui/core/FormLabel'
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import PropTypes from 'prop-types'
import './Style.css'
import { __makeTemplateObject } from 'tslib'

class TodoItem extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        toggleEdit: true,
    }

    static defaultProps = {
        isNew: false,
    }
    inputHandler = e => {
        e.preventDefault()
        const { value } = e.target
        this.props.onChange(value)
    }
    render() {
        const { onDelete, handleSubmit, isNew, task } = this.props
        const { toggleEdit } = this.state
        if (isNew) {
            return (
                <li className="task">
                    <div className="task-description">
                        <Input
                            type="text"
                            value={task}
                            onChange={this.inputHandler}
                            onSubmit={handleSubmit}
                        ></Input>
                    </div>
                    <div className="tools-task">
                        <IconButton type="submit">
                            <Save></Save>
                        </IconButton>
                    </div>
                </li>
            )
        } else {
            return (
                <li className="task">
                    <div className="task-description">
                        {!isNew ? <Checkbox></Checkbox> : null}
                        {!isNew ? (
                            <Input value={task} disabled={toggleEdit}></Input>
                        ) : null}
                    </div>
                    <div className="tools-task">
                        <IconButton type="submit">
                            {toggleEdit ? <Edit></Edit> : <Save></Save>}
                        </IconButton>

                        <IconButton onClick={onDelete}>
                            {toggleEdit ? <Delete></Delete> : null}
                        </IconButton>
                    </div>
                </li>
            )
        }
    }
}

TodoItem.propTypes = {
    onDelete: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleInputChange: PropTypes.func,
    task: PropTypes.string,
    isNew: PropTypes.bool,
}

export default TodoItem
