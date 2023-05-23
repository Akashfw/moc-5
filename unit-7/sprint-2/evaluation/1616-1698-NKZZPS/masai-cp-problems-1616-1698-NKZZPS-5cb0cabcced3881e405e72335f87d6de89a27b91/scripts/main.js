// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `${baseServerURL}/books`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookCategoryInput = document.getElementById("book-category");
let bookAuthorInput = document.getElementById("book-author");
let bookPriceInput = document.getElementById("book-price");
let bookCreateBtn = document.getElementById("add-book");

// Update book
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookBtn = document.getElementById("update-book");

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterClassic = document.getElementById("filter-Classic");
let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");

//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Books Data
let booksData = [];


let getBooksData= async ()=>{
        let res= await fetch(bookURL);
        res= await res.json();
        booksData=res;
        displayData(booksData);


        
}
getBooksData();

let  displayData=(data)=>{
  mainSection.innerHTML=null;
    let cardList= document.createElement("div");
    cardList.setAttribute("class","card-list");

    data.forEach(({id,title,author,category,image,price}) => {
      let card= document.createElement("div");
      card.setAttribute("class","card");
      card.setAttribute("data-id", id);
      let cardimg= document.createElement("div");
      cardimg.setAttribute("class","card-img");
      let img= document.createElement("img");
      img.src=image;
      img.alt="book";

      let cardbody= document.createElement("div");
      cardbody.setAttribute("class","card-body");
      let tile= document.createElement("h4");
      tile.innerText=title;
      tile.setAttribute("class","card-title");
      let aut= document.createElement("p");
      aut.innerText=author;
      aut.setAttribute("class","card-author");
      let cat= document.createElement("p");
      cat.innerText=category;
      cat.setAttribute("class","card-category");
      let pri= document.createElement("p");
      pri.innerText=price;
      pri.setAttribute("class","card-price");
      let edit= document.createElement("a");
      edit.setAttribute("class","card-link");
      edit.setAttribute("data-id",id);
      edit.href="#"
      edit.innerText="Edit"
      let delet= document.createElement("button");
      delet.setAttribute("class","card-button");
      delet.setAttribute("data-id",id);
      delet.innerText="Delete";
      delet.onclick= ()=>{
        deletebooks(id);
      }

      cardbody.append(tile,aut,cat,pri,edit,delet);
      cardimg.append(img);
      card.append(cardimg,cardbody);
      cardList.append(card)
    });

    mainSection.append(cardList)

};



let addNewBooks = async () =>{
  let data= {
    bookTitleInput,
    bookImageInput,
    bookCategoryInput,
    bookAuthorInput,
    bookPriceInput
  };

  data= JSON.stringify(data);

  let res= await fetch(bookURL, {
    method:"POST",
    body:data,
    headers:{
      "content-Type":"applicattion/json"
    },
  });
  
    bookTitleInput.value=null;
    bookImageInput.value=null;
    bookCategoryInput.value=null;
    bookAuthorInput.value=null;
    bookPriceInput.value=null;

    getBooksData();


};


bookCreateBtn.addEventListener("click",addNewBooks());