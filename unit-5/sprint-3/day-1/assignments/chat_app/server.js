const express= require("express");
const socketio= require("socket.io");
const http= require("http");
const { Socket } = require("dgram");
const {userJoin,getRoomUsers,getCurrentUser,userLeave}= require("./utils/users");
const {formateMessage}= require("./utils/messages")
const app= express();
const server = http.createServer(app);
const io= socketio(server);

const boatName= "Masai Server"
io.on("connection", (Socket)=>{
    console.log("one client joined");

    Socket.on("joinRoom",({username,room})=>{
         const user= userJoin(Socket.id,username,room)
         Socket.join(user.room);
         Socket.emit("message",formateMessage(boatName,"Welcome to Masai Server"));
         Socket.broadcast.to(user.room).emit("message",formateMessage(boatName,`${user.username} has joined the chat`));

         io.to(user.room).emit("roomUsers",{
            room:user.room,
            users:getRoomUsers(user.room)
         })
    })
    
    Socket.on("chatMessage",(msg)=>{
                
        const user = getCurrentUser(Socket.id);

        io.to(user.room).emit("message",formateMessage(user.username,msg));
    })

    Socket.on("disconnect",()=>{
        console.log("one user left");
 
        const user= userLeave(Socket.id)
        io.to(user.room).emit("message",formateMessage(boatName,`${user.username} has left the chat`));

        io.to(user.room).emit("roomUsers",{
            room:user.room,
            users:getRoomUsers(user.room)
         })
    })
});


const PORT= 8080
server.listen(PORT,()=>{console.log(`server is running on ${PORT} port`)})

