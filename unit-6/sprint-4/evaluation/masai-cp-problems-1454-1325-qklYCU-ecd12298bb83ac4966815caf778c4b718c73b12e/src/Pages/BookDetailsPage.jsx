import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios";
import Navbar from "./Navbar";

export default function BookDetailsPage(prop) {
    const [Data, setData] = useState([]);
    const {id} = prop
    useEffect(()=>{
     const fetchdata=()=>{
       axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`).
     then((res)=>setData(res.data))}
     fetchdata(); 
    },[]);
    return (
        <div>
        < Navbar/>
            <div className="bookContainer" >

            {Data && Data.filter(item=> `${item.id}`=== id).map((e)=>{
          return <div >
          <h5 className="title"> {e.title}</h5>
                <div className="price"> {e.price} </div>
                <div className="section"> {e.section}</div>
                <div className="author"> {e.author}</div>
                <div className="description">{e.discription} </div>
                <div className="isbn"> {e.isbn}</div>
          </div>
        })}

                
            </div>
        </div>
    )
}
