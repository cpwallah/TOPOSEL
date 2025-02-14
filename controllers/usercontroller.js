const User=require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register=async(req,res)=>{
    const {username,email,password,fullname,gender,dob,country}=req.body;
    const hashedpassword=await bcrypt.hash(password,10);
    const user=new User({username,email,password:hashedpassword,fullname,gender,dob,country});
    await user.save();
    res.json({
        message:"user registered"
    })
}
exports.login=async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user || !(await bcrypt.compare(password,user.password))){
        return res.status(401).json({error:"invalid credentials"});
    }
    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
    res.json({token});

}
exports.searchuser=async(req,res)=>{
    const {query}=req.query;
    const user=await User.findOne({$or:[{username:query},{email:query}]});
    if(!user){
        return res.status(404).json({error:"user not found"});
    } 
    res.json(user);
}