import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  POST_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  POST_TODOS_REQUEST,
  POST_TODOS_FAILURE,
  DELETE_TODOS_REQUEST,
  DELETE_TODOS_FAILURE,
  TODO_STATUS_CHANGE,
  SET_FILTER,
  PUT_TODOS_REQUEST,
  PUT_TODO_SUCCESS,
  PUT_TODOS_FAILURE,
} from "../ActionTypes/TodoActionTypes";

export const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

export const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

export const getTodosFailure = (err) => {
  return {
    type: GET_TODOS_FAILURE,
    error: err,
  };
};

export const postTodoRequest = () => {
  return {
    type: POST_TODOS_REQUEST
  }
}

export const postTodoSuccess = (todo) => {
  return {
    type: POST_TODO_SUCCESS,
    newTodo: todo,
  };
};

export const postTodoFailure = (err) => {
  return {
    type: POST_TODOS_FAILURE,
    error : err,
  }
}

export const deleteTodoRequest = () => {
  return {
    type: DELETE_TODOS_REQUEST
  }
}

export const deleteTodoSuccess = (id) => {
  return {
    type: DELETE_TODO_SUCCESS,
    id: id,
  };
};

export const deleteTodoFailure = (err) => {
  return {
    type: DELETE_TODOS_FAILURE,
    error : err,
  }
}

export const todoStatusChange = (id) => {
  return {
    type: TODO_STATUS_CHANGE,
    id : id,
  }
}

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter : filter,
  }
}

export const putTodoRequest = () => {
  return {
    type: PUT_TODOS_REQUEST
  }
}

export const putTodoSuccess = (name, id) => {
  return {
    type: PUT_TODO_SUCCESS,
    name: name,
    id: id,
  };
};

export const putTodoFailure = (err) => {
  return {
    type: PUT_TODOS_FAILURE,
    error : err,
  }
}