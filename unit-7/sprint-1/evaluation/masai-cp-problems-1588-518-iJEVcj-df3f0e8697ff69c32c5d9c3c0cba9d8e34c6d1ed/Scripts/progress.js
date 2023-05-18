// Write code for the Progress page here 
let arr= JSON.parse(localStorage.getItem("priority-list")) || [];
let done_arr= JSON.parse(localStorage.getItem("done-list")) || [];
display(arr);


function display(arr){
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
           done_arr.push(ele);
           localStorage.setItem("done-list",JSON.stringify(done_arr));
           deleteval(ele,i) 
        })
        row.append(ts1,ts2,ts3,ts4,ts5,ts6);
        document.querySelector("tbody").append(row);
    });
}


function deleteval(ele,i){
    arr.splice(i,1);
    document.querySelector("tbody").innerHTML="";
    display(arr);
    localStorage.setItem("priority-list",JSON.stringify(arr));
}