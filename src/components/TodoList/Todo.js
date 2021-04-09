import React, { useState } from "react";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import { Box, Checkbox, InputBase, Switch } from "@material-ui/core";

import "./style.css";
import {
  deleteTodoSuccess,
  getTodosRequest,
  getTodosSuccess,
  postTodoSuccess,
  putTodoSuccess,
  todoStatusChange,
} from "../../redux/ActionCreators/TodoActionCreators";

function Todo(props) {

  const { id, name, isActive } = props.todo;
  const { todos, filter, postTodoSuccess, deleteTodoSuccess, todoStatusChange, putTodoSuccess } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(name);

  const deleteTodoSuccessById = (id) => {
    getTodosRequest();
    deleteTodoSuccess(id);
  };

  const todoCompleted = (id) => {
    todoStatusChange(id);
  };

  return (
    <Box display="flex" p={2} className="container" bgcolor="background.paper">
      <div>
        <Checkbox
          id={`todo${id}`}

          checked={!isActive}
          onClick={() => todoCompleted(id)}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
          {isEditing ? <InputBase type="text" autoFocus={true} className="editTodo"  name="name" value={text} onChange ={(e) => setText(e.target.value)}/> : <strong>{name}</strong>}
      </div>
      <div>
        {filter == "All" || filter == "Active" ?<EditIcon onClick={() => {
        setIsEditing(!isEditing);
        if(isEditing){
          putTodoSuccess(text,id);
          setIsEditing(false);

        }
      }} /> :null}
      
      <DeleteIcon onClick={() => deleteTodoSuccessById(id)} />
      </div>

    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
    filter: state.todoReducer.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodosRequest: () => dispatch(getTodosRequest()),
    getTodosSuccess: (todo) => dispatch(getTodosSuccess(todo)),
    postTodoSuccess: (data) => dispatch(postTodoSuccess(data)),
    deleteTodoSuccess: (id) => dispatch(deleteTodoSuccess(id)),
    todoStatusChange: (id) => dispatch(todoStatusChange(id)),
    putTodoSuccess: (name, id) => dispatch(putTodoSuccess(name, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
