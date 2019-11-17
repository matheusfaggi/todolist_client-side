import React, { Component } from 'react';
import Delete from "@material-ui/icons/Delete";
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from "@material-ui/core/IconButton";
import './Style.css';

class TodoItem extends Component{
  static defaultProps = {
    isNew: false,
  }
  render(){
    const {  onDelete, task, isNew } = this.props;
    
    return (
    <li className="task">
      <FormLabel >{task}</FormLabel>
      
      <IconButton onClick={onDelete}>
        {!isNew ? <Delete></Delete> : null}
      </IconButton>
        
    </li>
    
    );
  }
}

export default TodoItem;