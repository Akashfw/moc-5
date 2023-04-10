const express= require("express");
const { ConnectionAcquireTimeoutError } = require("sequelize");
const app= express();

const db = require("./models/index");
const {students} = require("./models/index");
app.use(express.json());


app.post("/api/create" , async (req,res)=>{
    const {name, age, email} = req.body;
    try {
        const data= await students.create({
            name,
            age,
            email,
        });
        res.json({data});
    } catch (err) {
        res.send(err);
        console.log(err)
    }
})


app.get("/api/students" , async (req,res)=>{
try {
    const data = await students.findAll();
    res.send(data);
} catch (error) {
    res.send(error);
    console.log(error);
}
});

app.put("/api/update/:id", async (req,res)=>{
    const {name,email,age}= req.body;
    try {
        const data= await students.upsert({
            id:req.params.id,
            name,
            age,
            email
        });
        res.send(data);
    } catch (error) {
        res.send(error);
        console.log(error);
    }
});

app.delete("/api/delete/:id", async (req,res)=>{
    
    try {
       const data = await students.destroy({
           where:{
               id:req.params.id
           }
       });
       res.send("user with id "+req.params.id + " has been deteted")
       
    } catch (error) {
        res.send(error);
        console.log(error);
    }
});




db.sequelize.sync().then(()=>{
    app.listen(3002, ()=>{
        console.log("server is running on port 3002")
    });
});







//npm i express sequelize mysql2 sequelize-cli
//npx sequelize-cli init