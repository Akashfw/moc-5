const socket= io("http://localhost:8080/",{transports:["websocket"]});

const params= new URLSearchParams(window.location.search);

const username= params.get("username");
const room= params.get("room")

