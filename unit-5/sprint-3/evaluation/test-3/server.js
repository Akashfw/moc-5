const express= require("express");
const app= express();
const http = require("http");
const server= http.createServer(app);
const socketio= require("socket.io");
const { userJoin,getRoomusers,userLeave,getcurrentUser } = require("./files/user");
const {formateMessage}= require("./files/message")
const io= socketio(server);
require("dotenv").config();


let boatname= "Server"

io.on("connection",(socket)=>{
    console.log("one user joined");

    socket.on("join-Room",({username,room})=>{
        const user= userJoin(socket.id,username,room)
        socket.join(user.room);
        socket.emit("message",formateMessage(boatname,"Welcome to Masai Server"))
        socket.broadcast.to(user.room).emit("message",formateMessage(boatname,`${user.username} has joined the chat`))
        io.to(user.room).emit("roomUsers",{
            room:user.room,
            users:getRoomusers(user.room)
        })

    });


     socket.on("chatMessage",(msg)=>{
         const user= getcurrentUser(socket.id)[0];
         io.to(user.room).emit("message",formateMessage(user.username,msg))
     })

    socket.on("disconnect",()=>{
        console.log("user has left")
        const user= userLeave(socket.id);
        io.to(user.room).emit("message",formateMessage(boatname,`${user.username} has left the chat`));

        io.to(user.room).emit("roomUsers",{
            room:user.room,
            users:getRoomusers(user.room)
        })
    })
})


server.listen(process.env.port,()=>{
    console.log("server is running on port "+process.env.port)
})