const express=require("express");
const userRouter=express.Router();
const {signin,signup}=require("../controller/SigninSignup");
const {doctors,appointment,updateDoctor,deleteDoctor}=require("../controller/doctors");
const {authenticate}=require("../middleware/userAuth")
// login & register
userRouter.post("/login",signin);
userRouter.post("/signup",signup);

// appointment & doctors
userRouter.get("/doctors" ,authenticate, doctors);
userRouter.post("/appointments" ,authenticate, appointment);
userRouter.put("/update/:id" ,authenticate, updateDoctor);
userRouter.delete("/delete/:id" ,authenticate, deleteDoctor);

// exporting router
module.exports={userRouter}