//add your js code here
let year=2011;
let team1="";
let team2="";
fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));

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
        td7.innerText=elem.team1goals;
        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr);
    });
}

function fill_year(){
    year=document.querySelector("#year").value;
    if(!year){
        year=2011
    }
    if(team1=="" && team2==""){
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
    }else if(team1=="" && team2!=""){
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team2}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
    }else if(team1!="" && team2==""){
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team1}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
    }else{
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team1}&team2=${team2}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
    }

}

function fill_team1(){
    team1=document.querySelector("#team1").value;
    if(team1=="" && team2==""){
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
    }else if(team1=="" && team2!=""){
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team2}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
    }else if(team1!="" && team2==""){
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team1}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
    }else{
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team1}&team2=${team2}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
    }
}


function fill_team2(){
    team2=document.querySelector("#team2").value;
    if(team1=="" && team2==""){
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
    }else if(team1=="" && team2!=""){
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team2}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
    }else if(team1!="" && team2==""){
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team1}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
    }else{
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team1}&team2=${team2}`).then((res)=>res.json()).then((val)=> display(val.data)).catch((err)=>alert(err));
    }
}

