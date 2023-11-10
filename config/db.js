const mongoose= require("mongoose");

const connection=mongoose.connect(process.env.mongoUrl).then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log(err)
})


module.exports={connection}