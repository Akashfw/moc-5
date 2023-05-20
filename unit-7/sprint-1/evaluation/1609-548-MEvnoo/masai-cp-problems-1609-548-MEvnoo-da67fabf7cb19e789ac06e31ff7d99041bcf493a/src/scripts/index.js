//add your js code here
let count=1;
fetch(`https://jsonmock.hackerrank.com/api/football_matches?page=${count}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));

function display(arr){
    document.querySelector("tbody").innerHTML="";
    arr.forEach(elem => {
        let tr= document.createElement("tr");
        let td1= document.createElement("td");
        td1.innerText=elem.competition;
        let td2= document.createElement("td");
        td2.innerText=elem.year;
        let td3= document.createElement("td");
        td3.innerText=elem.round;
        let td4= document.createElement("td");
        td4.innerText=elem.team1;
        let td5= document.createElement("td");
        td5.innerText=elem.team2;
        let td6= document.createElement("td");
        td6.innerText=elem.team1goals;
        let td7= document.createElement("td");
        td7.innerText=elem.team2goals;
        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr);
    });
}


function previous(){
    if(count>1){
        count--;
    }
    console.log(count);
    fetch(`https://jsonmock.hackerrank.com/api/football_matches?page=${count}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
}

function next(){
    count++;
    console.log(count);
    fetch(`https://jsonmock.hackerrank.com/api/football_matches?page=${count}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
}

function filter_page(){
    window.location="./filter.html"
}