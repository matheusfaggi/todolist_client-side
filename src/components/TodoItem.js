import React, { Component } from 'react';
import { Delete } from "@material-ui/icons";
import { FormLabel } from '@material-ui/core';
import { IconButton } from "@material-ui/core";

class TodoItem extends Component{
  
  render(){
    return (
    <li>
      <FormLabel>{this.props.task}</FormLabel>
      <IconButton onClick={() =>this.handleDelete(task)}>
        <Delete/>
      </IconButton>
    </li>
    );
  }
}

export default TodoItem;