const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    name:String,
    email:String,
    pass:String
});

const Usermodel= mongoose.model("users",userSchema);

module.exports={
    Usermodel
}