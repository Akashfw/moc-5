const jsonServer= require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares= jsonServer.defaults();
require("dotenv").config();

server.use(middlewares);
server.use(router);


server.listen(process.env.port, ()=>{
    console.log("server is running on port 3000")
});