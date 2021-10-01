import { useState } from "react";
import "./App.css";
import AddTodoItem from "./components/\bAddTodoItem";

function App(props) {
  const [things, setThings] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <AddTodoItem
        edit={props.edit}
        setEdit={props.setEdit}
        todos={todos}
        setTodos={setTodos}
        things={things}
        setThings={setThings}
        newInput={props.newInput}
        setNewInput={props.setNewInput}
      />
    </div>
  );
}

export default App;
