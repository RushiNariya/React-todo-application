import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Container, makeStyles } from "@material-ui/core";

import Todo from "./Todo";
import {
  getTodosRequest,
  getTodosSuccess,
  postTodoSuccess,
  setFilter,
} from "../../redux/ActionCreators/TodoActionCreators";
import AddTodo from "../AddTodo/AddTodo";

const list = [
  { id: 0, name: "todo1", isActive: true },
  { id: 1, name: "todo2", isActive: true },
  { id: 2, name: "todo3", isActive: true },
  { id: 3, name: "todo4", isActive: true },
];

function TodoList({
  filter,
  todos,
  todoNumber,
  getTodosRequest,
  getTodosSuccess,
  postTodoSuccess,
  setFilter,
}) {

  const useStyles = makeStyles({
    root: {
      width: "60%",
      minWidth: "250px",
      backgroundColor: "#E6F1F5",
      borderRadius: "20px",
      minHeight: "400px",
      maxHeight: "400px",
      overflow: "auto",
      marginTop : "5vh",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  });

  const classes = useStyles();

  useEffect(async () => {
    getTodosRequest();
    await getData(list);
  }, []);

  const [value, setValue] = React.useState(0);

  const completedTodos = todos.filter(function (todo) {
    if (todo.isActive === false) {
      return todo;
    }
  });

  const ActiveTodos = todos.filter(function (todo) {
    if (todo.isActive === true) {
      return todo;
    }
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getData = (list) =>
    new Promise((resolve, reject) => {
      getTodosSuccess(list);
      resolve(true);
    });

  const filterTodo = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <React.Fragment>
      <Container
        maxwidth="lg"
        className="todoListContainer"
        className={classes.root}
      >
        {filter === "All" ? <AddTodo /> : null}
        {filter === "All"
          ? todos.map((todo, index) => {
              return <Todo key={index} todo={todo} />;
            })
          : filter === "Completed"
          ? completedTodos.map((todo, index) => {
              return <Todo key={index} todo={todo} />;
            })
          : ActiveTodos.map((todo, index) => {
              return <Todo key={index} todo={todo} />;
            })}

            <div className="taskCount"> {filter === "All"
          ? todos.length
          : filter === "Completed"
          ? completedTodos.length
          : ActiveTodos.length} Tasks</div>
      </Container>

      <Paper square className="sidebar">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="All" onClick={() => filterTodo("All")} />
          <Tab label="Active" onClick={() => filterTodo("Active")} />
          <Tab label="Completed" onClick={() => filterTodo("Completed")} />
        </Tabs>
      </Paper>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
    todoNumber: state.todoReducer.todoNumber,
    filter: state.todoReducer.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodosRequest: () => dispatch(getTodosRequest()),
    getTodosSuccess: (todo) => dispatch(getTodosSuccess(todo)),
    postTodoSuccess: (data) => dispatch(postTodoSuccess(data)),
    setFilter: (filter) => dispatch(setFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
