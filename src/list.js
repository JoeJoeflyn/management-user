import react,{useState} from "react";


function List ({todo, todos, setTodos, text}) {
    // function handleClick () {
    //     props.editTodo(props.todo)
    // }
  const [edits, setEdits] = useState('') 
  const [edit, setEdit] = useState([])
    // console.log('me',edit)
    const targetValue = (e) => 
    {setEdits(
         e.target.value)
        }
    // console.log(itemNeedToEdit)
    const itemNeedToEdit = todos.map(e => e)
    console.log('only fan',itemNeedToEdit)
    const index = todos.findIndex(todo => todo.id === itemNeedToEdit)
    console.log('todoid',todo.id)
    console.log('on click', index)
    // console.log('index',todos[1].text)
    const handleClick = (e) => {
        e.preventDefault();
        setEdit([
            ...todos,
            todo[index].text,
        ]);
        setEdits('')
    }

    return(
        <div>
            <ul>
                <li  className='List'>
                    
                </li>
                <input value={edits} onChange={targetValue} placeholder={text}/>
                <button onClick={handleClick}
                >
                        Edit
                </button>
            </ul>
        </div>
    );
}
export default List;
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