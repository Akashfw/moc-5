import data from "../fiction.json"
import BookCard from "./BookCard";
import { useState } from "react";
export default function Fiction() {
  let [Data,SetData] = useState(data)
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div className="books-container">
        {/* Map all Fictional Books here */}
        {Data.map((e)=>{
          return < BookCard img={e.img} title={e.title} price={e.price}
          author={e.author} year={e.year}/>
        })}
      </div>
    </div>
  );
}
