import { User } from "../models/user.js"

export const getAllUsers = async(req,res)=>{

    console.log(req.query)

    const users = await User.find({})

    res.json({
        success:true,
        count:users.length,
        users
    })
}

export const getUserById = async(req,res)=>{
    const {id} = req.params
    const user = await User.findById(id)
    
    res.json({
        success:true,
        user,
    })
}

export const createUser = async(req,res)=>{
    
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
}
