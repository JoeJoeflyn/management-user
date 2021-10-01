import TodoItem from "./TodoItem";
function AddTodoItem({ setTodos, todos, things, setThings, edits }) {
  function handleChange(e) {
    setThings(e.target.value);
  }
  function handleAddItem(e) {
    e.preventDefault();
    if (things === undefined || things === "") {
    } else {
      setTodos([
        ...todos,
        { text: things, mood: true, id: Math.random() * 100 },
      ]);
      setThings("");
    }
  }

  return (
    <form>
      <input value={things} onChange={handleChange} placeholder="type smt" />
      <button onClick={handleAddItem}>Add</button>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
            id={todo.id}
          />
        ))}
      </div>
    </form>
  );
}
export default AddTodoItem;
