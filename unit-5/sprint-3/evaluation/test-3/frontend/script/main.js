const chatform= document.getElementById("chat-form");
const chatmessages= document.querySelector(".chat-message");
const roomname= document.getElementById("room-name");
const userPresent= document.getElementById("users");


const socket= io("http://localhost:8080/",{transports:["websocket"]});

const params= new URLSearchParams(window.location.search);

const username= params.get("username");
const room= params.get("room")

socket.emit("join-Room",({username,room}));

socket.on("message",(message)=>{
    outputMsg(message)
});

function outputMsg(message){
    const div = document.createElement("div");

    div.classList.add("message");
    const p=  document.createElement("p");
    p.classList.add("meta");
    p.innerHTML=`${message.username} <span>${message.time}<span/>`;
    div.appendChild(p);
    const para=  document.createElement("p");
    para.innerText=message.text;
    para.classList.add("text");
    div.appendChild(para)
    chatmessages.appendChild(div);
    
}

