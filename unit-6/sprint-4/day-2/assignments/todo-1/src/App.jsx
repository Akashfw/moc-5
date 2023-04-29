import logo from './logo.svg';
import './App.css';
import {useState} from "react"
function App() {
  const [Todo, setTodo] = useState([])
  return (
    <div className="App">
     <input type="text" id='todoValue' />
     <button onClick={()=>{
       let val=document.getElementById("todoValue").value;
       if(val==="") return;
        Todo.push(val);
        setTodo([...Todo])
     }}>Add</button>
     {Todo.map(elem => {
       return <h1>{elem}</h1>
     })}
    </div>
  );
}

export default App;
