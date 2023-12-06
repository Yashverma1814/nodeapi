import express from "express";
import { User } from "../models/user.js";

const router = express.Router();


router.get("all/:id",async(req,res)=>{
    const {id} = req.params
    const user = await User.findById(id)
    
    res.json({
        success:true,
        user,
    })
})

router.get("/all",async(req,res)=>{

    console.log(req.query)

    const users = await User.find({})

    res.json({
        success:true,
        count:users.length,
        users
    })
})


router.post("/new",async(req,res)=>{
    
    const {name,email,password} = req.body
    console.log(req.body)

    await User.create({
        name,
        email,
        password,
    })

    res.status(201).json({
        success:true,
        message:"Registered Successfully"
    })
})


export default router