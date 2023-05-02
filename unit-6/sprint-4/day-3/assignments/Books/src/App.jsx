import {useState} from "react"
import Fiction from "./components/Fiction";
import Notification from "./components/NonFiction"

function App() {
  let [Type,setType] = useState("Show Non-Fiction Books")
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={()=>{
        if(Type==="Show Non-Fiction Books"){
          setType("Show Fictional Books")
        }else{
          setType("Show Non-Fiction Books");
        }
      }}>{Type}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {Type==="Show Non-Fiction Books" ? < Fiction/> : <Notification/>}
      </div>
    </div>
  );
}

export default App;
