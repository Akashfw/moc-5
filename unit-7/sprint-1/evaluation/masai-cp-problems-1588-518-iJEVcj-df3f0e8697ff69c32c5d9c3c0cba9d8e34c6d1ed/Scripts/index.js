// Write code related to Home page here 

document.querySelector("form").addEventListener("submit",myfun);
let arr= JSON.parse(localStorage.getItem("task-list")) || [];
function myfun(e){
    e.preventDefault();
    let name= document.getElementById("name").value;
    let desc= document.getElementById("desc").value;
    let start= document.getElementById("start").value;
    let end= document.getElementById("end").value; 
    let priority= document.getElementById("priority").value;

    let obj={
        name,
        desc,
        start,
        end,
        priority
    }
    arr.push(obj);
    localStorage.setItem("task-list",JSON.stringify(arr))

}
