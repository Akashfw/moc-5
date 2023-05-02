import "./App.css";
import data from "./db.json";
import {useState,useEffect, Fragment } from "react"
import Product from "./components/Product";
function App() { 
  const [cartData, setCartData] = useState(data);
  const [total,setTotal]= useState(0)
  const handleQty = (type, id)=>{  
   setCartData(cartData.map((element)=>{
         if(element.id === id && type==="+"){
           return {...element, quantity: element.quantity + 1 };
         }else if(element.id === id && type==="-" && element.quantity>0){
          return {...element, quantity: element.quantity - 1 };
         }
         return element;
      }));
  };

  setTotal(cartData.forEach((elem)=>{
    
  }))
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {cartData.map((element)=>{
         return (<Fragment key={element.id}><Product name={element.name} price={element.price} quantity={element.quantity} 
         id={element.id}  handleQty={handleQty}  /></Fragment>
         );
        })}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        {}
      </h1>
    </div>
  );
}

export default App;
