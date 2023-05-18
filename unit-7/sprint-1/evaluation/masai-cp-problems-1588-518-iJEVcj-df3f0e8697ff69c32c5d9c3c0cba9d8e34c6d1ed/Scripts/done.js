// Write code related to Done page here

let arr= JSON.parse(localStorage.getItem("done-list")) || [];
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
        row.append(ts1,ts2,ts3,ts4,ts5);
        document.querySelector("tbody").append(row);
    });
}