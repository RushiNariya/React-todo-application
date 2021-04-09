import React, { useEffect, useState } from "react";
import { Input, Button, makeStyles, TextField, InputBase } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { connect } from "react-redux";

import "./style.css";

import {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailure,
  postTodoSuccess,
} from "../../redux/ActionCreators/TodoActionCreators";

function AddTodo({ todoNumber, postTodoSuccess }) {


  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = () => {

    if (newTodo == "") {
      return alert("please enter todo name!!");
    }

    const newOne = {
      id: todoNumber,
      name: newTodo,
      isActive: true,
    };
    
    setNewTodo("");
    postTodoSuccess(newOne);
  };

  return (
    <div>
      <div className="formContainer">
        <InputBase
          className="inputStyle"
          id="newTodo"
          type="text"
          name="todo"
          value={newTodo}
          placeholder="Todo"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button><SendIcon onClick={() => handleSubmit()} /></Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
    todoNumber: state.todoReducer.todoNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodosRequest: () => dispatch(getTodosRequest()),
    getTodosSuccess: (todo) => dispatch(getTodosSuccess(todo)),
    postTodoSuccess: (data) => dispatch(postTodoSuccess(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
