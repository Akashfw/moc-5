import React from 'react'
import {useState} from "react"
function Todo(props) {
    let {todolist} = props;
    const [Todolist, setTodolist] = useState(todolist)
  return (
    <div className='tododiv'>
        <div className='inptDiv'>
            <input type="text" id='inptval' />
            <button onClick={()=>{
                let val= document.getElementById("inptval").value;
                let obj={val,
                         status:false}
            
                        
                if(val!==""){
                    Todolist.push(obj);
                    setTodolist([...Todolist]);
                };
            }}>Add</button>
        </div>

        <div className='list'>
             {Todolist?.map((elem)=>{
                  return <div className='listchild'>
                            <h4>{elem.val}</h4>
                  </div>
             })}
        </div>
    </div>
  )
}

export default Todo