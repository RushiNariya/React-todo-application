import { Box, Grid, Paper } from "@material-ui/core";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="appContainer">
      <div className="title">
        <Box
          display="flex"
          p={3}
          className="titleBox"
        >Your Today's Todo List</Box>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
