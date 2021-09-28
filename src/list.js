import react from "react";


function List (props) {
    function handleClick () {
        props.editTodo(props.todo)
    }
    return(
        <div>
            <ul>
                <li  className='List'>
                    {props.text}
                </li>
                <button onClick={handleClick}
                >
                        Edit
                </button>
            </ul>
        </div>
    );
}
export default List;