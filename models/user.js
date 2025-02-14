const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    fullname:String,
    gender:String,
    dob:Date,
    country:String,
})
module.exports=new mongoose.model("user",UserSchema);