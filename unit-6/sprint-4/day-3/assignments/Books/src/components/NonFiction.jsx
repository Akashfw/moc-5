import data from "../nonfiction.json"
import BookCard from "./BookCard";
import { useState } from "react";

export default function NonFiction() {
  let [Data,SetData] = useState(data)
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        {Data.map((e)=>{
          return < BookCard img={e.img} title={e.title} price={e.price}
          author={e.author} year={e.year}/>
        })}
      </div>
    </div>
  );
}
