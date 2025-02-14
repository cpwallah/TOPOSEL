const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());
const userroutes = require("./routes/userroutes");
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));
  
app.use("/users",userroutes);
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))