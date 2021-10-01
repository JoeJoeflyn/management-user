import react, { useState } from 'react';
import './App.css';
import Form from './todo';
// import List from './list';

function App(props) {
  const [things, setThings] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
       <Form 
       edit={props.edit} 
       setEdit={props.setEdit} 
       todos={todos} 
       setTodos={setTodos} 
       things={things} 
       setThings={setThings}
       newInput={props.newInput}
       setNewInput={props.setNewInput}
       />
       {/* <List todos={todos} setTodos={setTodos}/> */}
    </div>
  );
}

export default App;
