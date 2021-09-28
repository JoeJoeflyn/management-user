import react from "react";
import List from "./list";

function Form ({setTodos,todos,things, setThings }) {
    function handleChange(e) {
        setThings(e.target.value)
    };
    function handleCop(e) {
        e.preventDefault();
        setTodos([
            ...todos,
            {text:things,
            mood:true,
            id: Math.random()*100},
        ]);
        setThings('')
    };
    function editTodo(e) {
        setTodos(e)
        console.log('alam',e)
    };

    return(

        <form>
            <input value={things} onChange={handleChange} placeholder='type smt' />
            <button onClick={handleCop}>
                Add
            </button>
            <div>
            {todos.map(todo => (
                   <List 
                   todo={todo} 
                   todos={todos} 
                   setTodos={setTodos} 
                   text={todo.text}
                   key={todo.id}
                   />
                   ))}
            </div>      
        </form>
    )
}
export default Form;