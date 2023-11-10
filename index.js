const express=require("express");
const app =express();
const cors=require('cors')
app.use(cors());
require('dotenv').config();
app.use(express.json());
const {connection}= require("./config/db");
const {userRouter}= require("./router/user.Router")


app.get("/",(req,res)=>{
    res.send("welcome to doctors app")
})
app.use("/api", userRouter)

app.listen(process.env.port,async()=>{
    await connection;
    console.log("connected to port" ,process.env.port)
})