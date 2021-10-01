import react, { useEffect } from "react";
import List from "./list";

function Form ({setTodos, todos, things, setThings, edits }) {
    function handleChange(e) {
        setThings(e.target.value)
    };
    function handleCop(e) {
        e.preventDefault();
        if(things === undefined || things ==='') {
        } else {
            setTodos([
                ...todos,
                {text:things,
                mood:true,
                id: Math.random()*100},
            ]);
            setThings('')
        }
    };
    // useEffect(() => {
    //     if(edits !== null) {
    //         setThings(edits)
    //         console.log('things',edits)
    //     } else {
    //         setThings('')
    //     }
    // },[edits]);
    // function editTodo(e) {
    //     setTodos(e)
    //     console.log('alam',e)
    // };
    // console.log('ok',things)

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
                   id={todo.id}
                   />
                   ))}
            </div>      
        </form>
    )
}
export default Form;