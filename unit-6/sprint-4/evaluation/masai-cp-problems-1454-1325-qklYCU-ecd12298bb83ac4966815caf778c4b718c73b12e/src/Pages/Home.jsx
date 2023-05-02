import {useState, useEffect} from "react"
import axios from "axios";
import Navbar from "./Navbar";
export default function Home() {
    const [Data, setData] = useState([]);

    useEffect(()=>{
     const fetchdata=()=>{
       axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`).
     then((res)=>setData(res.data))}
     fetchdata(); 
    },[]);
  return (
    <div>
       < Navbar />
      <div className="mainContainer">
        {/* Map the below the div against your books data */}
        {Data.map((elem)=>{
          return <div  className="bookCard" key={elem.id}>
          <h5 className = "title" > title:{elem.title} </h5>
          <div className = "price" > Price:{elem.price} </div>
          <div className = "author" > Author:{elem.author}</div>
        </div>
        })}
        
      </div>
      
    </div>
  )
}
