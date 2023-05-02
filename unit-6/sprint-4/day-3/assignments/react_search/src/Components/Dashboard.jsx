import React, { useState, useEffect } from "react";
// import axios from "axios";
import data from "../db.json"

export default function Dashboard() {
 let [Data,setData] = useState(data);
 let [search,setsearch] = useState("");
 useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:${port}/groceries`)
        .then((res) => res.json())
        .then((result) => setData(result))
        .catch((err) => console.log("error"));
    };
    fetchData();
  }, []);
 function handleChange(e) {
     let val=e.target.value.toLowerCase()
    setsearch(val)
  }
    return (
        <div>
            <input 
                className = "search_box"
                type = "text"
                placeholder = "Search Groceries"
                onChange={handleChange}
            />
            <div className = "grocery_data">
            {/* map the below div against your grocery data */}
                {/* <div>
                    <h3> name </h3>
                    <div> price </div>
                </div> */}
                {Data && Data.filter(item=> item.name.toLowerCase().includes(search)).map((e)=>{
                   return <><div>
                    <h3> {e.name} </h3>
                    <div> {e.price} </div>
                </div></> 
                })}
            </div>
        </div>
    )
}