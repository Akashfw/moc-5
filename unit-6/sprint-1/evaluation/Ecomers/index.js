const express = require("express");

const db = require("./models/index");
const {brands, products} = require("./models/index");
const app = express();
app.use(express.json());


app.get("/api/brands", async (req,res)=>{
    try {
        const data = await brands.findAll();
        res.send(data);
    } catch (err) {
        res.send(err);
        console.log(err)
    }
});
app.post("/api/brands", async (req,res)=>{
    try {
        const {name , logo} = req.body;
        const data = await brands.create({
            name,
            logo,
        });
        res.send({mes:"brand has been added",data});
    } catch (err) {
        res.send(err);
        console.log(err)
    }
});

app.put("/api/brands/:id", async (req,res)=>{
    try {
        const {name , logo} = req.body;
        const data = await brands.upsert({
            id:req.params.id,
            name,
            logo,
        });
        res.send({mes:`brand with id ${req.params.id} has been updated`,data});
    } catch (err) {
        res.send(err);
        console.log(err)
    }
});

app.delete("/api/brands/:id", async (req,res)=>{
    try {
        
         await brands.destroy({
            where:{
                id:req.params.id,
            },
        });
        res.send({mes:`brand with id ${req.params.id} has been deleted`});
    } catch (err) {
        res.send(err);
        console.log(err)
    }
});

app.get("/api/products", async (req,res)=>{
    try {
        products.hasMany(brands, {foreignKey: "brandID"});
        brands.belongsTo(products , {
            foreignKey: "brandID",
        });
         const data = await products.findAll({
             include: [brands],
         });
         res.send(data);
    } catch (err) {
        res.send(err);
        console.log(err)
    }
});

app.post("/api/products", async (req,res)=>{
    try {
        const {name , image , price, brandID} = req.body;
        const data = await products.create({
            name,
            image,
            price,
            brandID
        });
        res.send({mes:"product has been added",data});
    } catch (err) {
        res.send(err);
        console.log(err)
    }
});

app.put("/api/products/:id", async (req,res)=>{
    try {
        const {name , image , price} = req.body;
        const data = await products.upsert({
            id:req.params.id,
            name,
            image,
            price,
        });
        res.send({mes:`product with id ${req.params.id} has been updated`,data});
    } catch (err) {
        res.send(err);
        console.log(err)
    }
});


app.delete("/api/products/:id", async (req,res)=>{
    try {
        
         await products.destroy({
            where:{
                id:req.params.id,
            },
        });
        res.send({mes:`product with id ${req.params.id} has been deleted`});
    } catch (err) {
        res.send(err);
        console.log(err)
    }
});

db.sequelize.sync().then(()=>{
    app.listen(3000, ()=>{
        console.log("server is running on 3000")
    })
})