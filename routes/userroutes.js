const express=require("express");
const {register,login,searchuser}=require("../controllers/usercontroller");
const router=express.Router();
router.post("/register",register);
router.post("/login",login);
router.get("/search",searchuser);
module.exports=router;