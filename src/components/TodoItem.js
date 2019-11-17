<<<<<<< HEAD
import React, { Component } from 'react';
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import './Style.css';

class TodoItem extends Component{
  static defaultProps = {
    isNew: false,
  }
  render(){
    const {  onDelete, task, isNew,onEdit } = this.props;
    
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
    
    );
  }
=======
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

class TodoItem extends Component {
    state = {
        toggleEdit: true,
        newTask: '',
    }

    static defaultProps = {
        isNew: false,
        newTask: '',
    }
    onEdit = async () => {
        this.setState({ toggleEdit: !this.state.toggleEdit })
    }
    handleInputChange = e => {
        const { value } = e.target
        this.setState({ newTask: value })
    }

    render() {
        const { onDelete, task, isNew, onSubmit } = this.props
        const { toggleEdit, newTask } = this.state
        if (isNew) {
            return (
                <li className="task">
                    <div className="task-description">
                        <Input
                            type="text"
                            value={newTask}
                            onChange={this.handleInputChange}
                        ></Input>
                    </div>
                    <div className="tools-task">
                        <IconButton
                            onClick={onSubmit}
                            type="submit"
                            newTask={newTask}
                        >
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
                        <IconButton onClick={this.onEdit}>
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
    task: PropTypes.string,
    isNew: PropTypes.bool,
    onSubmit: PropTypes.func,
>>>>>>> 2cfafa0... Refatoração com eslint :)
}

export default TodoItem
