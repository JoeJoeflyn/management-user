import { useState } from "react";

function TodoItem({ todos, id, text, todo, setTodos }) {
  const [editMode, setEditMode] = useState(false);
  const [newInput, setNewInput] = useState("");

  const editTodo = (id, text) => {
    const editTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = newInput;
      }
      return todo;
    });
    setTodos(editTodos);
    setEditMode(false);
    setNewInput("");
  };

  const hanldeDelete = () => {
    setTodos(todos.filter((element) => element.id !== id));
  };
  return (
    <div>
      <ul>
        <li className="List">{text}</li>
        <button onClick={hanldeDelete}>Delete</button>
        {editMode && (
          <input
            value={newInput}
            onChange={(e) => setNewInput(e.target.value)}
            placeholder="type edit"
          />
        )}
        {!editMode && <button onClick={() => setEditMode(true)}>Edit</button>}
        {editMode && (
          <button
            onClick={(e) => {
              e.preventDefault();
              editTodo(id, text);
            }}
          >
            Save
          </button>
        )}
      </ul>
    </div>
  );
}
export default TodoItem;
