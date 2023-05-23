// const express= require("express");
// const app= express();
let url="http://localhost:3000/posts"

let getData = async () => {
    let res = await fetch(url);
    res = await res.json();
    console.log(res[0]);
    renderDom(res);

  };
document.getElementById("data").addEventListener("click",getData());

let card = ({ id, author}) => {
    let div = document.createElement("div");
    
  
    let h3 = document.createElement("h3");
    h3.innerText = author;
  
    let button_div = document.createElement("div");
  
    let remove_btn = document.createElement("button");
    remove_btn.setAttribute("class", "remove_student");
    remove_btn.innerText = "Remove";
    remove_btn.onclick = () => {
      removeStudent(id);
    };
  
    let update_btn = document.createElement("button");
    update_btn.setAttribute("class", "update_score");
    update_btn.innerText = "Update Score";
    update_btn.onclick = () => {
      updateData(id);
    };
  
    button_div.append(remove_btn, update_btn);
  
    div.append( h3, button_div);
  
    return div;
  };

let renderDom = (data) => {
    let container = document.getElementById("container");
    data.forEach((el) => {
    //   container.append(card(el));
    let val= card(el)
    console.log(val);
    container.append(val);
    });
  };
// app.listen(8080,()=>{
//     console.log("listening on port 8080")
// });