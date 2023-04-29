import logo from './logo.svg';
import './App.css';
import {useState} from "react"
function App() {
  const [Text, setText] = useState(null)
  return (
    <div className="App">
      <input type="text" id='input' onChange={(event)=>{
            let val= event.target.value;
             setText(val);
      }}/>
      <h2>{Text}</h2>
      <button onClick={()=>{
        setText(null);
        document.getElementById("input").value=null;
      }}>Clear</button>
    </div>
  );
}

export default App;
