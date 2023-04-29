import logo from './logo.svg';
import './App.css';
import {useState} from "react";



function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Count is - {counter}</h1>
      <button onClick={()=>{setCounter(counter+1)
      console.log(counter)}}>+</button>
      <button onClick={()=>{setCounter(counter-1);
      console.log(counter)}}>-</button>
    </div>
  );
}

export default App;
