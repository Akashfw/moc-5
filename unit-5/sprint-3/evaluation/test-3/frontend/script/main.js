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

chatform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let msg= e.target.elements.msg.value;
    msg= msg.trim();
    if(!msg){
        return false;
    }
    socket.emit("chatMessage",msg);
    e.target.elements.msg.value="";
});

socket.on("roomUsers",({room,users})=>{
    roomname.innerText=room;
    outputuser(users)
});

function outputuser(users){
    userPresent.innerText="";

    users.forEach(elem => {
        const li = document.createElement("li");
        li.innerText=elem.username;
        userPresent.appendChild(li)
    });
}


document.querySelector("#leave-btn").addEventListener("click",()=>{
    window.location.replace("index.html")

})