import react,{useState} from "react";


function List ({ todos, id, text, todo, setTodos}) {
    // function handleClick () {
    //     props.editTodo(props.todo)
    // }
    const [edit, setEdit] = useState(false)
    const [newInput, setNewInput] = useState('')
    const hanldTy = (e) => {
        setNewInput(e.target.value)
    }
    const editTodo = (id, text) => {
        const editTodos = todos.map((todo) => {
          if (todo.id === id) {
            todo.text = newInput;
          }
          return todo;
        });
        setTodos(editTodos);
        setEdit(false);
        setNewInput('');
      };

    const hanldeDelete = () => {
        setTodos(todos.filter((element) => element.id !== id))
    }
return(
    <div>
            <ul>
                <li  className='List'>
                {text}
                </li>
                <button onClick={hanldeDelete} >Delete</button>
                <input value={newInput} onChange={hanldTy} placeholder='type edit'/>
                <button onClick={(e) => (
                    e.preventDefault(),
                    editTodo(id, text)
                )}
                >
                        Edit
                </button>
            </ul>
    </div>
    );
}
export default List;
//   console.log(findItem)
//   const [edit, setEdit] = useState([])
//     // console.log('me',edit)
//     const targetValue = (e) => 
//     {setEdits(
//          e.target.value)
//         }
//     // console.log(itemNeedToEdit)
//     const itemNeedToEdit = todos.map(e => e)
//     console.log('only fan',itemNeedToEdit)
//     const index = todos.findIndex(todo => todo.id === itemNeedToEdit)
//     console.log('todoid',todo.id)
//     console.log('on click', index)
//     // console.log('index',todos[1].text)
//     const handleClick = (e) => {
//         e.preventDefault();
//         setEdit([
//             ...todos,
//             todo[index].text,
//         ]);
//         setEdits('')
//     }
// function handleClick(e) {
    //     setEdit(e.target.value)
    // };
    // const handleChange = (e) => {
    //     e.preventDefault()
    //     setTodos([
    //         ...todos,
    //         {
    //             text:todo.text,
    //             id:todo.id,
    //         }
    //     ])  
    // };
        // const [newEdit, setNewEdit] = useState('')
    // const handleChange = (e) => setNewEdit(e.target.value)
    // const findItem = e => {
    //   const item = todos.find(todo =>todo.id === e)
    //   console.log('iron', item)
    //   setEdits(item)
    // }
    // const editTask = (text,index) => {
    // const newTasks = todos.map(todo =>(
    //     id === index ? {text, id} : todo
    // ));
    // setThings(newTasks)
    // }