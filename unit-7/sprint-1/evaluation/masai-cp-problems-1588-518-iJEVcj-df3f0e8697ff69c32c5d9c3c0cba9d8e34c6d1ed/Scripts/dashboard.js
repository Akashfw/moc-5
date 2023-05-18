// Write code related to dashboard page here
let arr= JSON.parse(localStorage.getItem("task-list")) || [];
let pro_arr= JSON.parse(localStorage.getItem("priority-list")) || [];
let bag=[];
display(arr);


function display(arr){
    document.querySelector("tbody").innerHTML="";
       arr.forEach(function(ele, i){
           let row= document.createElement("tr");
           let ts1= document.createElement("td");
           ts1.innerHTML=ele.name;
           let ts2= document.createElement("td");
           ts2.innerText=ele.desc;
           let ts3= document.createElement("td");
           ts3.innerHTML=ele.start;
           let ts4= document.createElement("td");
           ts4.innerHTML=ele.end;
           let ts5= document.createElement("td");
           ts5.innerHTML=ele.priority;
           let ts6= document.createElement("td");
           ts6.innerText="Add";
           ts6.addEventListener("click",()=>{
              pro_arr.push(ele);
              localStorage.setItem("priority-list",JSON.stringify(pro_arr));
              deleteval(ele,i) 
           })
           row.append(ts1,ts2,ts3,ts4,ts5,ts6);
           document.querySelector("tbody").append(row);
       });
}

function deleteval(ele,i){
    arr.splice(i,1);
    display(arr);
    localStorage.setItem("task-list",JSON.stringify(arr));
}

document.getElementById("task-count").innerHTML=arr.length;

function filtertable(){
    let val= document.getElementById("filter").value;
    bag=arr;
    let filterdata= bag.filter(function(elem){
        return elem.priority == val;
    });
    display(filterdata);
}