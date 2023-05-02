import {useState, useEffect} from "react"
import axios from "axios";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
export default function SectionPage() {
  const params= useParams();
  const [Data, setData] = useState([]);

    useEffect(()=>{
     const fetchdata=()=>{
       axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`).
     then((res)=>setData(res.data))}
     fetchdata(); 
    },[]);

    console.log(params.section)
  return (
    <div>
      < Navbar/>
      <div className="sectionContainer">
      {/* Map the below the div against your books data */}

        {Data && Data.filter(item=> `${item.section}`=== params.section).map((e)=>{
          return <div  className="bookCard" >
          <h5 className = "title" > {e.title}</h5>
            <div className = "price" >{e.price} </div>
            <div className = "author" > {e.author} </div>
          </div>
        })}
        
      </div>
    </div>
  )
}
