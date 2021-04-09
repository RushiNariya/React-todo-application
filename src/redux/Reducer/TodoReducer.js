import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  POST_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  POST_TODOS_REQUEST,
  POST_TODOS_FAILURE,
  TODO_STATUS_CHANGE,
  SET_FILTER,
  PUT_TODOS_REQUEST,
  PUT_TODO_SUCCESS,
  PUT_TODOS_FAILURE,
} from "../ActionTypes/TodoActionTypes";

const initialState = {
  isLoading: false,
  todos: [],
  error: null,
  todoNumber: null,
  filter: "All",
};

const todoReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_TODOS_REQUEST:

      return {
        ...state,
        isLoading: true,
      };

    case GET_TODOS_SUCCESS:

      return {
        ...state,
        todoNumber: action.payload.length,
        isLoading: false,
        todos: action.payload,
      };

    case GET_TODOS_FAILURE:

      return {
        ...state,
        isLoading: false,
        todos: [],
        error: action.error,
      };

    case POST_TODOS_REQUEST:

      return {
        ...state,
        isLoading: true,
      };

    case POST_TODO_SUCCESS:

      return {
        ...state,
        todoNumber: state.todoNumber + 1,
        todos: [...state.todos, action.newTodo],
      };

    case POST_TODOS_FAILURE:

      return {
        ...state,
      };

    case DELETE_TODO_SUCCESS:

      return {
        ...state,
        todos: state.todos.filter(function (todo) {
          return todo.id !== action.id;
        }),
      };

    case TODO_STATUS_CHANGE:

      return {
        ...state,
        todos: state.todos.filter(function (todo) {
          if (todo.id === action.id) {
            if (todo.isActive === true) {
              todo.isActive = false;
            } else {
              todo.isActive = true;
            }
          }
          return todo;
        }),
      };

    case SET_FILTER:

      return {
        ...state,
        filter: action.filter,
      };

      case PUT_TODOS_REQUEST:

        return {
          ...state,
          isLoading: true,
        };

      case PUT_TODO_SUCCESS:

        return {
          ...state,
          isLoading : false,
          todos : state.todos.filter(function (todo) {
            if (todo.id === action.id) {
              todo.name = action.name
            }
            return todo;
          }),
        }

        case PUT_TODOS_FAILURE:

          return {
            ...state,
            isLoading : false,
            error : action.error
          };
    
    default:
      
      return state;
  }
};

export default todoReducer;
